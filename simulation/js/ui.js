// 共通UI部品：エスケープ、モーダル、トースト、日時表示

export function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}

export function formatDateTime(ts) {
  if (!ts) return "";
  const d = new Date(ts);
  const now = new Date();
  const hm = `${d.getHours()}:${String(d.getMinutes()).padStart(2, "0")}`;
  if (d.toDateString() === now.toDateString()) return `今日 ${hm}`;
  const y = d.getFullYear() === now.getFullYear() ? "" : `${d.getFullYear()}/`;
  return `${y}${d.getMonth() + 1}/${d.getDate()} ${hm}`;
}

export function formatId(id) {
  return String(id || "").replace(/^(\d{4})(\d{4})$/, "$1-$2");
}

// 上部バーのタイトル・戻るボタン・右側のボタンを設定する
let baseTitle = "医療シミュレーション";
let unreadForTitle = 0;
export function setTitle(title, { back = false, actions = "" } = {}) {
  document.getElementById("page-title").textContent = title;
  document.getElementById("back-btn").hidden = !back;
  document.getElementById("topbar-actions").innerHTML = actions;
  baseTitle = `${title}｜医療シミュレーション`;
  setUnreadInTitle(unreadForTitle);
}

// ブラウザのタブ名の先頭に未読数を出す（別のタブを見ていても届いたことがわかる）
export function setUnreadInTitle(count) {
  unreadForTitle = count;
  document.title = (count ? `(${count > 99 ? "99+" : count}) ` : "") + baseTitle;
}

let toastTimer;
export function toast(message, type = "") {
  let el = document.getElementById("toast");
  if (!el) {
    el = document.createElement("div");
    el.id = "toast";
    el.setAttribute("role", "status");
    document.body.appendChild(el);
  }
  el.textContent = message;
  el.className = `show ${type}`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => (el.className = ""), 3200);
}

// ボタン付きモーダル。押されたボタンの value（閉じた場合は null）で解決する。
// buttons: [{ label, value, variant: "primary" | "danger" | "" }]
// setup(el, close) で本文に独自の動きを付けられる。
// 開いているダイアログ（画面を移動するときにまとめて閉じる）
const openModals = new Set();
export function closeAllModals() {
  for (const close of [...openModals]) close(null);
}

export function modal({ title, body = "", buttons = [{ label: "OK", value: true, variant: "primary" }], wide = false, setup }) {
  return new Promise((resolve) => {
    const backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop";
    backdrop.innerHTML = `
      <div class="modal ${wide ? "wide" : ""}" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div class="modal-head">
          <h2 id="modal-title">${esc(title)}</h2>
          <button type="button" class="btn small modal-close">閉じる</button>
        </div>
        <div class="modal-body">${body}</div>
        <div class="modal-actions">
          ${buttons.map((b, i) => `<button type="button" class="btn ${b.variant || ""}" data-i="${i}">${esc(b.label)}</button>`).join("")}
        </div>
      </div>`;
    const prevFocus = document.activeElement;
    function close(value) {
      if (!openModals.has(close)) return;
      openModals.delete(close);
      document.removeEventListener("keydown", onKey);
      backdrop.remove();
      if (prevFocus && prevFocus.focus) prevFocus.focus();
      resolve(value);
    }
    function onKey(e) {
      if (e.key === "Escape") close(null);
    }
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) close(null);
    });
    backdrop.querySelector(".modal-close").addEventListener("click", () => close(null));
    backdrop.querySelectorAll(".modal-actions .btn").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const b = buttons[Number(btn.dataset.i)];
        if (b.onClick) {
          const result = await b.onClick(backdrop);
          if (result === false) return;
        }
        close(b.value);
      });
    });
    document.addEventListener("keydown", onKey);
    openModals.add(close);
    document.body.appendChild(backdrop);
    if (setup) setup(backdrop, close);
    const focusTarget = backdrop.querySelector("input:not([type=checkbox]), textarea") || backdrop.querySelector(".modal-actions .btn.primary");
    if (focusTarget) focusTarget.focus();
  });
}

// 入力欄の高さを文字量に合わせて自動で伸ばす（中でスクロールさせず、全文が見えるように）
function fit(ta) {
  ta.style.height = "auto";
  ta.style.height = `${ta.scrollHeight + 2}px`;
}

export function autoGrow(root) {
  root.querySelectorAll("textarea").forEach((ta) => {
    if (ta.dataset.autogrow) return fit(ta);
    ta.dataset.autogrow = "1";
    // 1行だけの欄（疾患名など）は改行を入れず、長いときだけ折り返して表示する
    if (ta.classList.contains("single-line")) {
      ta.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.isComposing && e.keyCode !== 229) e.preventDefault();
      });
    }
    ta.addEventListener("input", () => {
      if (ta.classList.contains("single-line") && /\n/.test(ta.value)) ta.value = ta.value.replace(/\n+/g, " ");
      fit(ta);
    });
    fit(ta);
  });
}

// 選択欄：選んだ文字が枠に収まらないときは、収まる大きさまで文字を小さくする（最小12px）
let measureCtx;
function fitSelect(sel) {
  sel.style.fontSize = "";
  const opt = sel.options[sel.selectedIndex];
  if (!opt) return;
  const cs = getComputedStyle(sel);
  measureCtx ||= document.createElement("canvas").getContext("2d");
  measureCtx.font = `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
  const textWidth = measureCtx.measureText(opt.text).width;
  const available = sel.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight) - 24; // 24 = ▼の幅
  if (available > 0 && textWidth > available) {
    sel.style.fontSize = `${Math.max(12, Math.floor(parseFloat(cs.fontSize) * (available / textWidth)))}px`;
  }
}

export function autoFit(root) {
  autoGrow(root);
  root.querySelectorAll("select").forEach((sel) => {
    if (!sel.dataset.autofit) {
      sel.dataset.autofit = "1";
      sel.addEventListener("change", () => fitSelect(sel));
    }
    fitSelect(sel);
  });
}

// パスワード欄＋表示/非表示の切替ボタン
export function passwordField(id, label, autocomplete) {
  return `
    <div class="field">
      <label for="${id}">${label}</label>
      <div class="input-row">
        <input id="${id}" type="password" autocomplete="${autocomplete}" required>
        <button type="button" class="btn toggle-pass" data-target="${id}" aria-pressed="false">表示</button>
      </div>
    </div>`;
}

export function bindPasswordToggles(root) {
  root.querySelectorAll(".toggle-pass").forEach((btn) => {
    btn.addEventListener("click", () => {
      const input = root.querySelector(`#${btn.dataset.target}`);
      const show = input.type === "password";
      input.type = show ? "text" : "password";
      btn.textContent = show ? "隠す" : "表示";
      btn.setAttribute("aria-pressed", String(show));
    });
  });
}

// 画面下などに出す選択メニュー（「その他」ボタン用）
export function menu(title, items) {
  return modal({
    title,
    body: `<div class="menu-list">${items
      .map((it, i) => `<button type="button" class="btn block ${it.variant || ""}" data-menu="${i}">${esc(it.label)}</button>`)
      .join("")}</div>`,
    buttons: [{ label: "キャンセル", value: null }],
    setup(root, close) {
      root.querySelectorAll("[data-menu]").forEach((b) => b.addEventListener("click", () => close(items[Number(b.dataset.menu)].value)));
    },
  });
}

export function confirmDialog(title, message, okLabel = "OK", variant = "primary") {
  return modal({
    title,
    body: `<p>${esc(message)}</p>`,
    buttons: [
      { label: "キャンセル", value: false },
      { label: okLabel, value: true, variant },
    ],
  });
}

export async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    toast("コピーしました");
  } catch {
    toast("コピーできませんでした");
  }
}
