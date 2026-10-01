import * as store from "../store.js";
import { icon } from "../icons.js";
import { PREVIEW } from "../env.js";
import { esc, setTitle, formatDateTime } from "../ui.js";

const ICONS = { received: "mail", reply: "chat", updated: "edit", answered: "ok" };

// プレビュー版：端末に届く通知のイメージを画面右上に出す
function showDemoNotice(latest) {
  document.querySelectorAll(".demo-notice").forEach((n) => n.remove());
  const box = document.createElement("div");
  box.className = "demo-notice";
  box.setAttribute("role", "status");
  box.innerHTML = `${icon("cross", "brand-icon")}
    <div><strong>医療シミュレーション</strong>
    <span>${esc(latest ? latest.text : "山田さんからシナリオが届きました")}</span>
    <span class="muted small">通知のイメージです（実際はスマホやPCの通知として届きます）</span></div>`;
  document.body.appendChild(box);
  setTimeout(() => box.remove(), 5000);
}

export function notificationsView(el) {
  setTitle("通知", { actions: '<button type="button" class="topbar-btn" id="read-all">すべて既読</button>' });

  function permissionHtml() {
    if (PREVIEW) {
      return `<div class="card permission">
      <p>受信・返信・更新を、ブラウザの通知でも知らせます。</p>
      <button type="button" class="btn primary small" id="demo-notify">通知の見え方を試す</button>
    </div>`;
    }
    if (!("Notification" in window)) return "";
    if (Notification.permission === "granted") return "";
    if (Notification.permission === "denied") {
      return '<p class="muted small">ブラウザの通知はオフになっています。オンにするにはブラウザの設定を変更してください。</p>';
    }
    return `<div class="card permission">
      <p>受信・返信・更新を、ブラウザの通知でも知らせます。</p>
      <button type="button" class="btn primary small" id="allow-notify">ブラウザの通知をオンにする</button>
    </div>`;
  }

  function render() {
    const list = store.listNotifications();
    el.innerHTML = `
      ${permissionHtml()}
      <ul class="notice-list">
        ${
          list.length
            ? list
                .map(
                  (n) => `
          <li>
            <a class="notice-row ${n.read ? "" : "unread"}" href="#/s/${n.scenarioId}${n.type === "reply" ? "/chat" : ""}" data-id="${n.id}">
              <span class="notice-icon">${icon(ICONS[n.type] || "bell")}</span>
              <span class="notice-main">
                <span>${esc(n.text)}</span>
                ${n.title ? `<span class="small">「${esc(n.title)}」</span>` : ""}
                <span class="muted small">${formatDateTime(n.at)}</span>
              </span>
              ${n.read ? "" : '<span class="dot" aria-label="未読"></span>'}
            </a>
          </li>`
                )
                .join("")
            : `<li class="empty"><p class="empty-icon">${icon("bell")}</p><p>通知はありません。</p></li>`
        }
      </ul>`;
    const demo = el.querySelector("#demo-notify");
    if (demo) demo.addEventListener("click", () => showDemoNotice(list[0]));
    const allow = el.querySelector("#allow-notify");
    if (allow) {
      allow.addEventListener("click", async () => {
        await Notification.requestPermission();
        render();
      });
    }
  }

  el.addEventListener("click", (e) => {
    const row = e.target.closest(".notice-row");
    if (row) store.markNotificationsRead([row.dataset.id]);
  });
  document.getElementById("read-all").addEventListener("click", () => store.markNotificationsRead());

  render();
  const off = store.onChange(() => {
    if (store.currentUser()) render();
  });
  return { destroy: off };
}
