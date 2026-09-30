import * as store from "../store.js";
import { icon } from "../icons.js";
import { esc, setTitle, formatDateTime } from "../ui.js";

const ICONS = { received: "mail", reply: "chat", updated: "edit" };

export function notificationsView(el) {
  setTitle("通知", { actions: '<button type="button" class="topbar-btn" id="read-all">すべて既読</button>' });

  function permissionHtml() {
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
