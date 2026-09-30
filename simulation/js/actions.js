// 複数の画面から使う操作：送信ダイアログ、AI評価、PDF化・印刷

import * as store from "./store.js";
import { SECTIONS, formatValue, scenarioTitle } from "./fields.js";
import { esc, modal, toast, formatId, formatDateTime, simpleMarkdown, copyText } from "./ui.js";
import { evaluateScenario, describeAiError } from "./ai.js";
import { micButton, bindMics, stopVoice } from "./voice.js";

// ---------- 送信 ----------

export async function openSendDialog(scenario) {
  const contacts = store.listContacts();
  const already = new Set(scenario.recipients);
  const typed = new Set();

  const contactRows = contacts.length
    ? contacts
        .map(
          (c) => `
      <label class="pick-row ${c.exists ? "" : "disabled"}" data-fav="${c.favorite ? 1 : 0}">
        <input type="checkbox" value="${esc(c.id)}" ${c.exists ? "" : "disabled"}>
        <span class="star ${c.favorite ? "on" : ""}" aria-hidden="true">★</span>
        <span class="pick-name">${esc(c.name)}</span>
        <span class="pick-id">${formatId(c.id)}</span>
        ${already.has(c.id) ? '<span class="badge">送信済み</span>' : ""}
      </label>`
        )
        .join("")
    : '<p class="muted small">送信相手が登録されていません。IDを直接入力するか、「送信相手」画面で登録してください。</p>';

  const body = `
    <div class="field">
      <label for="send-id">IDを直接入力</label>
      <div class="input-row">
        <input id="send-id" inputmode="numeric" autocomplete="off" placeholder="例：12345678">
        ${micButton("send-id")}
        <button type="button" class="btn small" id="send-add">追加</button>
      </div>
      <p class="error-text" id="send-error" hidden></p>
      <div class="chips" id="send-chips"></div>
    </div>
    <div class="send-list-head">
      <span>登録した相手から選ぶ</span>
      ${contacts.length ? '<label class="small"><input type="checkbox" id="send-fav-only"> お気に入りのみ</label>' : ""}
    </div>
    <div class="pick-list" id="send-list">${contactRows}</div>`;

  function selectedIds(root) {
    const picked = [...root.querySelectorAll("#send-list input:checked")].map((i) => i.value);
    return [...new Set([...picked, ...typed])];
  }

  const result = await modal({
    title: `「${scenarioTitle(scenario.data)}」を送信`,
    body,
    wide: true,
    buttons: [
      { label: "キャンセル", value: null },
      {
        label: "送信する",
        value: "sent",
        variant: "primary",
        onClick(root) {
          stopVoice();
          const err = root.querySelector("#send-error");
          const pending = root.querySelector("#send-id").value;
          if (pending.trim() && !addTyped(root, pending)) return false;
          try {
            const r = store.sendScenario(scenario.id, selectedIds(root));
            toast(`${r.sent}人に送信しました`, "success");
            return true;
          } catch (e) {
            err.textContent = e.message;
            err.hidden = false;
            return false;
          }
        },
      },
    ],
    setup(root) {
      bindMics(root);
      const input = root.querySelector("#send-id");
      root.querySelector("#send-add").addEventListener("click", () => addTyped(root, input.value));
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          addTyped(root, input.value);
        }
      });
      const favOnly = root.querySelector("#send-fav-only");
      if (favOnly) {
        favOnly.addEventListener("change", () => {
          root.querySelectorAll("#send-list .pick-row").forEach((row) => {
            row.hidden = favOnly.checked && row.dataset.fav !== "1";
          });
        });
      }
    },
  });
  return result === "sent";

  function addTyped(root, raw) {
    const err = root.querySelector("#send-error");
    const id = store.normalizeId(raw);
    err.hidden = true;
    const me = store.currentUser();
    const user = id && store.getUser(id);
    if (!id) return true;
    if (id === me.id) {
      err.textContent = "自分には送信できません";
    } else if (!user) {
      err.textContent = `ID ${formatId(id)} のユーザーは見つかりません`;
    } else {
      const box = root.querySelector(`#send-list input[value="${id}"]`);
      if (box) box.checked = true;
      else typed.add(id);
      renderChips(root);
      root.querySelector("#send-id").value = "";
      return true;
    }
    err.hidden = false;
    return false;
  }

  function renderChips(root) {
    const chips = root.querySelector("#send-chips");
    chips.innerHTML = [...typed]
      .map((id) => `<span class="chip">${esc(store.userName(id))}（${formatId(id)}）<button type="button" data-remove="${id}" aria-label="外す">✕</button></span>`)
      .join("");
    chips.querySelectorAll("[data-remove]").forEach((b) =>
      b.addEventListener("click", () => {
        typed.delete(b.dataset.remove);
        renderChips(root);
      })
    );
  }
}

// ---------- AI評価 ----------

export async function runAiEvaluation(data) {
  let resultText = "";
  await modal({
    title: "AI評価",
    wide: true,
    body: `<div id="ai-result"><div class="loading"><span class="spinner"></span>評価しています…（30秒ほどかかることがあります）</div></div>`,
    buttons: [
      {
        label: "コピー",
        onClick() {
          if (resultText) copyText(resultText);
          return false;
        },
      },
      { label: "閉じる", value: true, variant: "primary" },
    ],
    async setup(root) {
      const box = root.querySelector("#ai-result");
      try {
        resultText = await evaluateScenario(data);
        box.innerHTML = `<div class="ai-text">${simpleMarkdown(resultText)}</div>
          <p class="muted small">※ AIによる評価は参考情報です。最終的な判断は指導者や院内基準に基づいて行ってください。</p>`;
      } catch (e) {
        const msg = describeAiError(e);
        box.innerHTML =
          msg === "NO_KEY"
            ? `<p>AI評価を使うには、マイページで Claude の APIキーを設定してください。</p>
               <p><a href="#/me" class="btn primary" data-close>マイページを開く</a></p>`
            : `<p class="error-text">${esc(msg)}</p>`;
        const link = box.querySelector("[data-close]");
        if (link) link.addEventListener("click", () => root.querySelector(".modal-close").click());
      }
    },
  });
}

// ---------- PDF化・印刷 ----------

export function printScenario(data, meta = {}) {
  let root = document.getElementById("print-root");
  if (!root) {
    root = document.createElement("div");
    root.id = "print-root";
    document.body.appendChild(root);
  }
  const sections = SECTIONS.map(
    (s) => `
    <section>
      <h2>${esc(s.title)}</h2>
      <table>
        ${s.fields.map((f) => `<tr><th>${esc(f.label)}</th><td>${esc(formatValue(f, data[f.key])) || "—"}</td></tr>`).join("")}
      </table>
    </section>`
  ).join("");
  const metaLine = [
    meta.ownerName ? `作成者：${esc(meta.ownerName)}` : "",
    meta.updatedAt ? `最終更新：${esc(formatDateTime(meta.updatedAt))}` : "",
    `出力日：${esc(new Date().toLocaleDateString("ja-JP"))}`,
  ]
    .filter(Boolean)
    .join("　");
  root.innerHTML = `
    <h1>${esc(scenarioTitle(data))}</h1>
    <p class="print-meta">${metaLine}</p>
    ${sections}
    <p class="print-foot">医療シミュレーションアプリ ─ 教育用シナリオ</p>`;
  const prevTitle = document.title;
  document.title = scenarioTitle(data);
  window.addEventListener("afterprint", () => (document.title = prevTitle), { once: true });
  window.print();
}
