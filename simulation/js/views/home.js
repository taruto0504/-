import * as store from "../store.js";
import { icon } from "../icons.js";
import { scenarioTitle, scenarioSubtitle } from "../fields.js";
import { esc, setTitle, formatDateTime, formatId, modal, toast, menu } from "../ui.js";

const FILTERS = [
  { id: "all", label: "すべて" },
  { id: "draft", label: "下書き" },
  { id: "done", label: "作成済み" },
  { id: "sent", label: "送信済み" },
  { id: "received", label: "受信" },
];
const STATUS_LABEL = { draft: "下書き", done: "作成済み", sent: "送信済み", received: "受信" };
const SORTS = [
  { id: "updated", label: "更新日順" },
  { id: "created", label: "作成日順" },
  { id: "disease", label: "疾患名順" },
];
const PREF_KEY = "medsim:home-prefs";

function loadPrefs() {
  try {
    return { filter: "all", sort: "updated", ...JSON.parse(sessionStorage.getItem(PREF_KEY) || "{}") };
  } catch {
    return { filter: "all", sort: "updated" };
  }
}

// 削除確認。送信済みのものが含まれるときは、相手側に残ることを明記する
export async function confirmDelete(items) {
  const sent = items.filter((s) => s.isOwner && s.recipients.length).length;
  const received = items.filter((s) => !s.isOwner).length;
  const notes = [];
  if (sent) notes.push(`送信済みの${sent}件は、相手側には残ります（相手は引き続き閲覧・チャットできます）。`);
  if (received) notes.push(`受信した${received}件は、自分の一覧から消えます（送信者のデータは残ります）。`);
  return modal({
    title: "削除の確認",
    body: `<p><strong>${items.length}件を削除しますか？</strong></p>${notes.map((n) => `<p class="small">${esc(n)}</p>`).join("")}<p class="small muted">この操作は取り消せません。</p>`,
    buttons: [
      { label: "キャンセル", value: false },
      { label: "削除", value: true, variant: "danger" },
    ],
  });
}

export function homeView(el) {
  const me = store.currentUser();
  setTitle("ホーム");
  const prefs = loadPrefs();
  let query = "";
  let showSearch = false;
  let selecting = false;
  const selected = new Set();

  function savePrefs() {
    sessionStorage.setItem(PREF_KEY, JSON.stringify(prefs));
  }

  function visibleList(all) {
    const q = query.trim().toLowerCase();
    let list = all.filter((s) => prefs.filter === "all" || s.status === prefs.filter);
    if (q) {
      list = list.filter((s) =>
        [s.data.disease, s.data.summary, s.data.complaint, s.ownerName].some((v) => (v || "").toLowerCase().includes(q))
      );
    }
    const by = {
      updated: (a, b) => b.updatedAt - a.updatedAt,
      created: (a, b) => b.createdAt - a.createdAt,
      disease: (a, b) => scenarioTitle(a.data).localeCompare(scenarioTitle(b.data), "ja"),
    }[prefs.sort];
    return list.sort(by);
  }

  function card(s) {
    const badges = [`<span class="badge status-${s.status}">${STATUS_LABEL[s.status]}</span>`];
    if (s.status === "sent") badges.push(`<span class="badge">${s.activeRecipients.length}人に送信</span>`);
    if (!s.isOwner) badges.push(`<span class="badge">${esc(s.ownerName)}さんから</span>`);
    if (s.hasUpdate) badges.push('<span class="badge warn">更新あり</span>');
    if (s.unreadMessages) badges.push(`<span class="badge accent">新着メッセージ ${s.unreadMessages}</span>`);
    const sub = scenarioSubtitle(s.data);
    return `
      <li class="scenario-item">
        <a class="scenario-card ${selected.has(s.id) ? "selected" : ""}" href="#/s/${s.id}" data-id="${s.id}">
          ${selecting ? `<span class="check" aria-hidden="true">${selected.has(s.id) ? "✓" : ""}</span>` : ""}
          <span class="sc-main">
            <span class="sc-title">${esc(scenarioTitle(s.data))}</span>
            <span class="sc-sub">${esc(sub || "年齢・性別 未入力")}</span>
            <span class="sc-badges">${badges.join("")}</span>
            <span class="sc-date">更新 ${formatDateTime(s.updatedAt)}</span>
          </span>
        </a>
        ${selecting ? "" : `<button type="button" class="btn small item-menu" data-menu="${s.id}">メニュー</button>`}
      </li>`;
  }

  function listHtml(all, list) {
    return list.length
      ? `<ul class="scenario-list">${list.map(card).join("")}</ul>`
      : `<div class="empty">${
          all.length
            ? "<p>条件に合うシナリオはありません。</p>"
            : `<p class="empty-icon">${icon("doc")}</p><p>まだシナリオがありません。</p><a class="btn primary" href="#/new">最初のシナリオを作る</a>
               <p class="muted small">あなたのID（${formatId(me.id)}）を相手に伝えると、シナリオを受け取れます。</p>`
        }</div>`;
  }

  // 検索中は一覧部分だけを書き換える（日本語入力の変換を途切れさせないため）
  function renderList() {
    const all = store.listScenarios();
    el.querySelector("#list-area").innerHTML = listHtml(all, visibleList(all));
  }

  function render() {
    const all = store.listScenarios();
    const list = visibleList(all);
    for (const id of [...selected]) if (!list.some((s) => s.id === id)) selected.delete(id);
    const counts = Object.fromEntries(FILTERS.map((f) => [f.id, f.id === "all" ? all.length : all.filter((s) => s.status === f.id).length]));
    const receivedAlert = all.some((s) => s.status === "received" && (s.hasUpdate || s.unreadMessages));
    el.innerHTML = `
      <div class="home-head">
        <div>
          <p class="greeting">${esc(me.name)}さん</p>
          <p class="muted small">あなたのID：<strong>${formatId(me.id)}</strong></p>
        </div>
        <a href="#/new" class="btn primary">新規作成</a>
      </div>
      <div class="filter-tabs" role="tablist">
        ${FILTERS.map(
          (f) => `<button type="button" role="tab" data-filter="${f.id}" aria-selected="${prefs.filter === f.id}">
            ${f.label} <span class="count">${counts[f.id]}</span>${f.id === "received" && receivedAlert ? '<span class="dot" aria-label="新着あり"></span>' : ""}
          </button>`
        ).join("")}
      </div>
      <div class="list-toolbar">
        ${
          selecting
            ? `<span class="small"><strong>${selected.size}件</strong>を選択中</span>
               <span class="spacer"></span>
               <button type="button" class="btn small" data-act="all">${selected.size && selected.size === list.length ? "選択を解除" : "すべて選択"}</button>
               <button type="button" class="btn small danger" data-act="delete-selected" ${selected.size ? "" : "disabled"}>削除</button>
               <button type="button" class="btn small" data-act="cancel">キャンセル</button>`
            : `<button type="button" class="btn small" data-act="search" aria-pressed="${showSearch}">検索</button>
               <label class="sort-select"><span class="visually-hidden">並び替え</span>
                 <select id="sort" aria-label="並び替え">${SORTS.map((o) => `<option value="${o.id}" ${prefs.sort === o.id ? "selected" : ""}>${o.label}</option>`).join("")}</select>
               </label>
               <span class="spacer"></span>
               ${list.length ? '<button type="button" class="btn small" data-act="select">選択</button>' : ""}`
        }
      </div>
      ${
        showSearch && !selecting
          ? `<div class="search-row"><input id="search" type="search" placeholder="疾患名・主訴・送信者名で検索" value="${esc(query)}" aria-label="検索"></div>`
          : ""
      }
      <div id="list-area">${listHtml(all, list)}</div>`;
    const search = el.querySelector("#search");
    if (search) {
      search.addEventListener("input", () => {
        query = search.value;
        renderList();
      });
    }
    const sort = el.querySelector("#sort");
    if (sort) {
      sort.addEventListener("change", () => {
        prefs.sort = sort.value;
        savePrefs();
        render();
      });
    }
  }

  async function deleteIds(ids) {
    const items = ids.map((id) => store.getScenario(id)).filter(Boolean);
    if (!items.length || !(await confirmDelete(items))) return;
    store.deleteScenarios(ids);
    for (const id of ids) store.clearDraft(id);
    selected.clear();
    selecting = false;
    toast(`${ids.length}件を削除しました`, "success");
    render();
  }

  el.addEventListener("click", async (e) => {
    const filterBtn = e.target.closest("[data-filter]");
    if (filterBtn) {
      prefs.filter = filterBtn.dataset.filter;
      savePrefs();
      selected.clear();
      render();
      return;
    }
    const cardEl = e.target.closest(".scenario-card");
    if (cardEl && selecting) {
      e.preventDefault();
      const id = cardEl.dataset.id;
      selected.has(id) ? selected.delete(id) : selected.add(id);
      render();
      return;
    }
    const menuBtn = e.target.closest("[data-menu]");
    if (menuBtn) {
      const s = store.getScenario(menuBtn.dataset.menu);
      if (!s) return;
      const items = [{ label: "開く", value: "open" }];
      if (s.isOwner) items.push({ label: "編集", value: "edit" });
      items.push({ label: "削除", value: "delete", variant: "danger" });
      const choice = await menu(scenarioTitle(s.data), items);
      if (choice === "open") location.hash = `#/s/${s.id}`;
      else if (choice === "edit") location.hash = `#/edit/${s.id}`;
      else if (choice === "delete") await deleteIds([s.id]);
      return;
    }
    const act = e.target.closest("[data-act]");
    if (!act) return;
    const list = visibleList(store.listScenarios());
    switch (act.dataset.act) {
      case "search":
        showSearch = !showSearch;
        if (!showSearch) query = "";
        render();
        if (showSearch) el.querySelector("#search").focus();
        break;
      case "select":
        selecting = true;
        render();
        break;
      case "cancel":
        selecting = false;
        selected.clear();
        render();
        break;
      case "all":
        if (selected.size && selected.size === list.length) selected.clear();
        else list.forEach((s) => selected.add(s.id));
        render();
        break;
      case "delete-selected":
        await deleteIds([...selected]);
        break;
    }
  });

  render();
  const off = store.onChange(() => {
    if (!store.currentUser()) return;
    if (el.querySelector("#search:focus")) renderList();
    else render();
  });
  return { destroy: off };
}
