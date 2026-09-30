import * as store from "../store.js";
import { scenarioTitle, scenarioSubtitle } from "../fields.js";
import { esc, setTitle, formatDateTime, formatId, confirmDialog, toast } from "../ui.js";

const TAB_KEY = "medsim:home-tab";

export function homeView(el) {
  const me = store.currentUser();
  setTitle("ホーム");
  let tab = sessionStorage.getItem(TAB_KEY) === "received" ? "received" : "mine";
  let selecting = false;
  const selected = new Set();

  function card(s) {
    const badges = [];
    if (tab === "mine") {
      badges.push(s.recipients.length ? `<span class="badge info">送信済み ${s.recipients.length}人</span>` : '<span class="badge">未送信</span>');
    } else {
      badges.push(`<span class="badge">${esc(s.ownerName)}さんから</span>`);
      if (s.hasUpdate) badges.push('<span class="badge warn">更新あり</span>');
    }
    if (s.unreadMessages) badges.push(`<span class="badge accent">💬 新着 ${s.unreadMessages}</span>`);
    else if (s.messageCount) badges.push(`<span class="badge">💬 ${s.messageCount}</span>`);
    const sub = scenarioSubtitle(s.data);
    return `
      <li>
        <a class="scenario-card ${selected.has(s.id) ? "selected" : ""}" href="#/s/${s.id}" data-id="${s.id}">
          ${selecting ? `<span class="check" aria-hidden="true">${selected.has(s.id) ? "✓" : ""}</span>` : ""}
          <span class="sc-main">
            <span class="sc-title">${esc(scenarioTitle(s.data))}</span>
            <span class="sc-sub">${esc(sub || "年齢・性別 未入力")}${s.data.complaint ? `　主訴：${esc(s.data.complaint.slice(0, 30))}` : ""}</span>
            <span class="sc-badges">${badges.join("")}</span>
          </span>
          <span class="sc-date">${formatDateTime(s.updatedAt)}</span>
        </a>
      </li>`;
  }

  function render() {
    const mine = store.listMine();
    const received = store.listReceived();
    const list = tab === "mine" ? mine : received;
    for (const id of [...selected]) if (!list.some((s) => s.id === id)) selected.delete(id);
    const receivedAlert = received.filter((s) => s.hasUpdate || s.unreadMessages).length;
    el.innerHTML = `
      <div class="home-head">
        <div>
          <p class="greeting">${esc(me.name)}さん</p>
          <p class="muted small">あなたのID：<strong>${formatId(me.id)}</strong></p>
        </div>
        <a href="#/new" class="btn primary">＋ 新規作成</a>
      </div>
      <div class="segmented" role="tablist">
        <button role="tab" type="button" data-tab="mine" aria-selected="${tab === "mine"}">作成したシナリオ <span class="count">${mine.length}</span></button>
        <button role="tab" type="button" data-tab="received" aria-selected="${tab === "received"}">受信したシナリオ <span class="count">${received.length}</span>${receivedAlert ? '<span class="dot" aria-label="新着あり"></span>' : ""}</button>
      </div>
      ${
        list.length
          ? `<div class="list-toolbar">
              ${
                selecting
                  ? `<span class="muted small">${selected.size}件を選択中</span>
                     <span class="spacer"></span>
                     <button type="button" class="btn small" data-act="all">${selected.size === list.length ? "選択を解除" : "すべて選択"}</button>
                     <button type="button" class="btn small danger" data-act="delete-selected" ${selected.size ? "" : "disabled"}>選択を削除</button>
                     <button type="button" class="btn small" data-act="cancel">完了</button>`
                  : `<span class="spacer"></span>
                     <button type="button" class="btn small" data-act="select">選択</button>
                     <button type="button" class="btn small danger-outline" data-act="delete-all">すべて削除</button>`
              }
            </div>
            <ul class="scenario-list">${list.map(card).join("")}</ul>`
          : `<div class="empty">
              ${
                tab === "mine"
                  ? `<p class="empty-icon" aria-hidden="true">📝</p><p>まだシナリオがありません。</p><a class="btn primary" href="#/new">最初のシナリオを作る</a>`
                  : `<p class="empty-icon" aria-hidden="true">📨</p><p>受信したシナリオはありません。</p><p class="muted small">あなたのID（${formatId(me.id)}）を相手に伝えると、シナリオを受け取れます。</p>`
              }
            </div>`
      }`;
  }

  async function deleteIds(ids, label) {
    const note = tab === "mine" ? "送信した相手の画面からも削除されます。" : "自分の一覧から削除されます（送信者のデータは残ります）。";
    const ok = await confirmDialog("削除の確認", `${label}を削除しますか？${note}この操作は取り消せません。`, "削除する", "danger");
    if (!ok) return;
    store.deleteScenarios(ids);
    for (const id of ids) store.clearDraft(id);
    selected.clear();
    selecting = false;
    toast(`${ids.length}件を削除しました`);
    render();
  }

  el.addEventListener("click", async (e) => {
    const tabBtn = e.target.closest("[data-tab]");
    if (tabBtn) {
      tab = tabBtn.dataset.tab;
      sessionStorage.setItem(TAB_KEY, tab);
      selecting = false;
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
    const act = e.target.closest("[data-act]");
    if (!act) return;
    const list = tab === "mine" ? store.listMine() : store.listReceived();
    switch (act.dataset.act) {
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
        if (selected.size === list.length) selected.clear();
        else list.forEach((s) => selected.add(s.id));
        render();
        break;
      case "delete-selected":
        await deleteIds([...selected], `選択した${selected.size}件`);
        break;
      case "delete-all":
        await deleteIds(
          list.map((s) => s.id),
          tab === "mine" ? `作成したシナリオ${list.length}件すべて` : `受信したシナリオ${list.length}件すべて`
        );
        break;
    }
  });

  render();
  const off = store.onChange(() => {
    if (store.currentUser()) render();
  });
  return { destroy: off };
}
