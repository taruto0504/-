// 画面の切り替え（ハッシュルーター）とナビゲーション、通知の配信
import { icon } from "./icons.js";

import * as store from "./store.js";
import { esc, toast } from "./ui.js";
import { stopVoice } from "./voice.js";
import { loginView, registerView, welcomeView } from "./views/auth.js";
import { homeView } from "./views/home.js";
import { editorView } from "./views/editor.js";
import { detailView } from "./views/detail.js";
import { contactsView } from "./views/contacts.js";
import { notificationsView } from "./views/notifications.js";
import { meView } from "./views/me.js";

const routes = [
  { pattern: /^#\/login(?:\/(\d+))?$/, view: loginView, public: true },
  { pattern: /^#\/register$/, view: registerView, public: true },
  { pattern: /^#\/welcome\/(\d+)$/, view: welcomeView, public: true },
  { pattern: /^#\/home$/, view: homeView, nav: "home" },
  { pattern: /^#\/new$/, view: editorView, nav: "new" },
  { pattern: /^#\/edit\/([\w-]+)$/, view: editorView, nav: "home" },
  { pattern: /^#\/s\/([\w-]+)(?:\/(chat|history))?$/, view: detailView, nav: "home" },
  { pattern: /^#\/contacts$/, view: contactsView, nav: "contacts" },
  { pattern: /^#\/notifications$/, view: notificationsView, nav: "notifications" },
  { pattern: /^#\/me$/, view: meView, nav: "me" },
];

const NAV = [
  { id: "home", href: "#/home", icon: "home", label: "ホーム" },
  { id: "new", href: "#/new", icon: "edit", label: "新規作成" },
  { id: "contacts", href: "#/contacts", icon: "users", label: "送信相手" },
  { id: "notifications", href: "#/notifications", icon: "bell", label: "通知" },
  { id: "me", href: "#/me", icon: "user", label: "マイページ" },
];

const app = document.getElementById("app");
let current = null; // 表示中の画面 { canLeave?, destroy? }
let currentHash = "";
let rendering = false;

function shell() {
  const navLinks = (cls) =>
    NAV.map(
      (n) => `<a href="${n.href}" class="${cls}" data-nav="${n.id}">
        <span class="nav-icon">${icon(n.icon)}</span>
        <span class="nav-label">${n.label}</span>
        ${n.id === "notifications" ? '<span class="nav-badge" hidden></span>' : ""}
      </a>`
    ).join("");
  app.innerHTML = `
    <aside class="sidenav" aria-label="メインメニュー">
      <div class="brand">${icon("cross", "brand-icon")} 医療シミュレーション</div>
      <nav>${navLinks("side-link")}</nav>
      <a href="../index.html" class="side-foot">← 医療サポートツールへ</a>
    </aside>
    <div class="main-col">
      <header class="topbar">
        <button type="button" class="back-btn" id="back-btn" hidden>‹ 戻る</button>
        <h1 id="page-title">医療シミュレーション</h1>
        <div class="topbar-actions" id="topbar-actions"></div>
      </header>
      <main id="view" tabindex="-1"></main>
    </div>
    <nav class="tabbar" aria-label="メインメニュー">${navLinks("tab-link")}</nav>`;
  document.getElementById("back-btn").addEventListener("click", () => {
    if (history.length > 1) history.back();
    else location.hash = "#/home";
  });
}

function updateBadge() {
  const count = store.currentUser() ? store.unreadNotificationCount() : 0;
  document.querySelectorAll(".nav-badge").forEach((b) => {
    b.hidden = count === 0;
    b.textContent = count > 99 ? "99+" : String(count);
  });
}

async function render() {
  const hash = location.hash || "#/home";
  const route = routes.find((r) => r.pattern.test(hash));
  if (!route) {
    location.replace("#/home");
    return;
  }
  const user = store.currentUser();
  if (!route.public && !user) {
    location.replace("#/login");
    return;
  }
  if (route.public && user) {
    location.replace("#/home");
    return;
  }
  rendering = true;
  stopVoice();
  if (current && current.destroy) current.destroy();
  current = null;
  currentHash = hash;
  document.body.classList.toggle("auth-mode", !!route.public);
  document.querySelectorAll("[data-nav]").forEach((a) => a.classList.toggle("active", a.dataset.nav === route.nav));
  // 画面ごとに要素を作り直し、前の画面のイベントが残らないようにする
  const old = document.getElementById("view");
  const el = old.cloneNode(false);
  el.className = "";
  old.replaceWith(el);
  window.scrollTo(0, 0);
  const params = hash.match(route.pattern).slice(1);
  try {
    current = (await route.view(el, ...params)) || null;
  } catch (e) {
    console.error(e);
    el.innerHTML = `<div class="empty"><p>${esc(e.message || "エラーが発生しました")}</p><a class="btn" href="#/home">ホームへ</a></div>`;
  }
  updateBadge();
  rendering = false;
}

// 画面を離れる前に、編集中の画面に確認させる（一時保存の確認）
window.addEventListener("hashchange", async () => {
  if (rendering) return;
  const next = location.hash;
  if (current && current.canLeave) {
    // いったん元のURLに戻してから確認し、許可されたら移動する
    history.replaceState(null, "", current.hash ? current.hash() : currentHash);
    const ok = await current.canLeave();
    if (!ok) return;
    current.canLeave = null;
    history.replaceState(null, "", next);
  }
  render();
});

window.addEventListener("beforeunload", (e) => {
  if (current && current.isDirty && current.isDirty()) {
    e.preventDefault();
    e.returnValue = "";
  }
});

// 新しい通知を検知して、画面内トーストとOSの通知で知らせる
let knownNotificationIds = null;
function checkNewNotifications() {
  const user = store.currentUser();
  if (!user) {
    knownNotificationIds = null;
    return;
  }
  const list = store.listNotifications();
  if (knownNotificationIds) {
    const fresh = list.filter((n) => !n.read && !knownNotificationIds.has(n.id));
    for (const n of fresh.slice(0, 3)) {
      toast(n.text);
      if ("Notification" in window && Notification.permission === "granted" && document.hidden) {
        try {
          const notice = new Notification("医療シミュレーション", { body: n.text, icon: "../icons/icon-192.png", tag: n.id });
          notice.onclick = () => {
            window.focus();
            location.hash = `#/s/${n.scenarioId}${n.type === "reply" ? "/chat" : ""}`;
          };
        } catch {
          // 一部のスマホブラウザはページから直接通知を出せない
        }
      }
    }
  }
  knownNotificationIds = new Set(list.map((n) => n.id));
}

store.onChange(() => {
  if (!store.currentUser() && !document.body.classList.contains("auth-mode")) {
    // 別タブでログアウト・退会した場合
    current = null;
    location.hash = "#/login";
    return;
  }
  updateBadge();
  checkNewNotifications();
});

function showUnexpected(err) {
  console.error(err);
  toast((err && err.message) || "エラーが発生しました。もう一度お試しください");
}
window.addEventListener("error", (e) => showUnexpected(e.error || e));
window.addEventListener("unhandledrejection", (e) => showUnexpected(e.reason));

shell();
checkNewNotifications();
render();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}
