import * as store from "../store.js";
import { icon } from "../icons.js";
import { scenarioTitle, scenarioSubtitle } from "../fields.js";
import { esc, setTitle, formatDateTime, formatId, toast } from "../ui.js";

const FILTERS = [
  { id: "all", label: "すべて" },
  { id: "attention", label: "未確認あり" },
];

// 受信したシナリオの一覧（送信されてきた物を確認する画面）
export function inboxView(el) {
  const me = store.currentUser();
  setTitle("受信");
  let filter = "all";

  const needsAttention = (s) => s.isNew || s.hasUpdate || s.unreadMessages;

  function card(s) {
    const marks = [];
    if (s.isNew) marks.push('<span class="badge new">未読</span>');
    if (s.hasUpdate) marks.push('<span class="badge warn">更新あり</span>');
    if (s.unreadMessages) marks.push(`<span class="badge accent">新着メッセージ ${s.unreadMessages}</span>`);
    if (!s.ownerExists) marks.push('<span class="badge">送信者が削除・退会</span>');
    const sub = scenarioSubtitle(s.data);
    return `
      <li>
        <a class="inbox-card ${needsAttention(s) ? "attention" : ""}" href="#/s/${s.id}${s.unreadMessages && !s.isNew && !s.hasUpdate ? "/chat" : ""}">
          <span class="inbox-from">
            <span class="avatar small" aria-hidden="true">${esc(s.ownerName.slice(0, 1))}</span>
            <span class="inbox-from-text">
              <strong>${esc(s.ownerName)}さん</strong>${s.ownerExists ? `<span class="muted small">ID ${formatId(s.ownerId)}</span>` : ""}
            </span>
            <span class="inbox-time muted small">受信 ${formatDateTime(s.receivedAt)}</span>
          </span>
          <span class="sc-title">${esc(scenarioTitle(s.data))}</span>
          <span class="sc-sub">${esc(sub || "年齢・性別 未入力")}${s.data.complaint ? `　主訴：${esc(s.data.complaint)}` : ""}</span>
          ${marks.length ? `<span class="sc-badges">${marks.join("")}</span>` : ""}
          ${s.editedAfterSendAt ? `<span class="small muted">最終更新 ${formatDateTime(s.updatedAt)}</span>` : ""}
        </a>
      </li>`;
  }

  function render() {
    const all = store.listReceived();
    const attention = all.filter(needsAttention);
    const list = filter === "attention" ? attention : all;
    el.innerHTML = `
      <div class="inbox-summary card">
        <span class="inbox-summary-icon">${icon("inbox")}</span>
        <div>
          <p class="inbox-summary-title">${attention.length ? `確認が必要なシナリオが <strong>${attention.length}件</strong> あります` : "新しく届いたシナリオはありません"}</p>
          <p class="muted small">あなたのIDは <strong>${formatId(me.id)}</strong> です。相手にこのIDを伝えると、シナリオを送ってもらえます。</p>
        </div>
      </div>
      ${
        all.length
          ? `<div class="filter-tabs two" role="tablist">
              ${FILTERS.map(
                (f) => `<button type="button" role="tab" data-filter="${f.id}" aria-selected="${filter === f.id}">${f.label} <span class="count">${f.id === "all" ? all.length : attention.length}</span></button>`
              ).join("")}
            </div>`
          : ""
      }
      ${
        list.length
          ? `<ul class="inbox-list">${list.map(card).join("")}</ul>`
          : all.length
            ? '<div class="empty"><p>未確認のシナリオはありません。</p></div>'
            : `<div class="empty">
                <p class="empty-icon">${icon("inbox")}</p>
                <p>まだシナリオは届いていません。</p>
                <p class="muted small">送信されたシナリオは、ここに届きます。<br>今はこのブラウザの中だけで動くお試し版のため、受信を試すには、別のタブで別のアカウントを作り、あなたのIDあてに送信してください。</p>
                <button type="button" class="btn primary" id="receive-sample">サンプルを受け取る</button>
              </div>`
      }`;
  }

  el.addEventListener("click", (e) => {
    const f = e.target.closest("[data-filter]");
    if (f) {
      filter = f.dataset.filter;
      render();
      return;
    }
    if (e.target.closest("#receive-sample")) {
      store.receiveSample();
      toast("サンプル指導医さんからシナリオが届きました", "success");
    }
  });

  render();
  const off = store.onChange(() => {
    if (store.currentUser()) render();
  });
  return { destroy: off };
}
