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
export function setTitle(title, { back = false, actions = "" } = {}) {
  document.getElementById("page-title").textContent = title;
  document.getElementById("back-btn").hidden = !back;
  document.getElementById("topbar-actions").innerHTML = actions;
  document.title = `${title}｜医療シミュレーション`;
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
export function modal({ title, body = "", buttons = [{ label: "OK", value: true, variant: "primary" }], wide = false, setup }) {
  return new Promise((resolve) => {
    const backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop";
    backdrop.innerHTML = `
      <div class="modal ${wide ? "wide" : ""}" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div class="modal-head">
          <h2 id="modal-title">${esc(title)}</h2>
          <button type="button" class="icon-btn modal-close" aria-label="閉じる">✕</button>
        </div>
        <div class="modal-body">${body}</div>
        <div class="modal-actions">
          ${buttons.map((b, i) => `<button type="button" class="btn ${b.variant || ""}" data-i="${i}">${esc(b.label)}</button>`).join("")}
        </div>
      </div>`;
    const prevFocus = document.activeElement;
    function close(value) {
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
    document.body.appendChild(backdrop);
    if (setup) setup(backdrop, close);
    const focusTarget = backdrop.querySelector("input, textarea") || backdrop.querySelector(".modal-actions .btn.primary");
    if (focusTarget) focusTarget.focus();
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

// AIの回答表示用のごく簡単なMarkdown変換（見出し・箇条書き・太字のみ）
export function simpleMarkdown(text) {
  const lines = esc(text).split("\n");
  let html = "";
  let inList = false;
  for (const raw of lines) {
    const line = raw.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    const bullet = line.match(/^\s*(?:[-*・]|\d+\.)\s+(.*)$/);
    if (bullet) {
      if (!inList) html += "<ul>";
      inList = true;
      html += `<li>${bullet[1]}</li>`;
      continue;
    }
    if (inList) {
      html += "</ul>";
      inList = false;
    }
    const heading = line.match(/^#{1,6}\s+(.*)$/);
    if (heading) html += `<h3>${heading[1]}</h3>`;
    else if (line.trim()) html += `<p>${line}</p>`;
  }
  if (inList) html += "</ul>";
  return html;
}

export async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    toast("コピーしました");
  } catch {
    toast("コピーできませんでした");
  }
}
