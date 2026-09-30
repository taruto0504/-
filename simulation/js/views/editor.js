import * as store from "../store.js";
import { SECTIONS, emptyData, normalizeData, isEmptyData, scenarioTitle } from "../fields.js";
import { esc, setTitle, modal, toast, formatDateTime } from "../ui.js";
import { micButton, bindMics, voiceSupported } from "../voice.js";
import { openSendDialog, runAiEvaluation, printScenario } from "../actions.js";

function inputHtml(f, value) {
  const id = `f-${f.key.replace(".", "-")}`;
  const common = `id="${id}" name="${esc(f.key)}"`;
  let control;
  if (f.type === "textarea") {
    control = `<textarea ${common} rows="3" placeholder="${esc(f.placeholder || "")}">${esc(value)}</textarea>`;
  } else if (f.type === "select") {
    control = `<select ${common}><option value="">選択してください</option>${f.options
      .map((o) => `<option ${o === value ? "selected" : ""}>${esc(o)}</option>`)
      .join("")}</select>`;
  } else if (f.type === "number") {
    control = `<input ${common} type="number" inputmode="decimal" step="${f.step || "1"}" min="${f.min ?? ""}" max="${f.max ?? ""}" value="${esc(value)}">`;
  } else {
    control = `<input ${common} type="text" placeholder="${esc(f.placeholder || "")}" value="${esc(value)}">`;
  }
  return `
    <div class="field ${f.wide || f.type === "textarea" ? "wide" : ""}">
      <label for="${id}">${esc(f.label)}${f.unit ? `<span class="unit">（${esc(f.unit)}）</span>` : ""}</label>
      <div class="input-row">${control}${micButton(id)}</div>
    </div>`;
}

export function editorView(el, scenarioId) {
  let scenario = scenarioId ? store.getScenario(scenarioId) : null;
  if (scenarioId && (!scenario || !scenario.isOwner)) {
    setTitle("シナリオ", { back: true });
    el.innerHTML = `<div class="empty"><p>このシナリオは見つからないか、編集できません。</p><a class="btn" href="#/home">ホームへ</a></div>`;
    return;
  }
  let saved = scenario ? normalizeData(scenario.data) : emptyData();
  const draft = store.loadDraft(scenario && scenario.id);
  setTitle(scenario ? "シナリオを編集" : "新規作成", { back: true });

  el.classList.add("with-actionbar");
  el.innerHTML = `
    <p class="notice">⚠️ 実在する患者の氏名など、個人を特定できる情報は入力しないでください。</p>
    ${voiceSupported ? '<p class="muted small">🎤 を押すと、その項目に音声で入力できます。もう一度押すと止まります。</p>' : ""}
    <form id="scenario-form" autocomplete="off" novalidate>
      ${SECTIONS.map(
        (s) => `
        <section class="card form-section">
          <h2>${esc(s.title)}</h2>
          <div class="form-grid ${s.id === "basic" ? "" : "vitals"}">
            ${s.fields.map((f) => inputHtml(f, saved[f.key])).join("")}
          </div>
        </section>`
      ).join("")}
    </form>
    <p class="save-status muted small" id="save-status" aria-live="polite"></p>
    <div class="actionbar">
      <button type="button" class="action" data-act="save"><span aria-hidden="true">💾</span><span>一時保存</span></button>
      <button type="button" class="action" data-act="send"><span aria-hidden="true">📤</span><span>送信</span></button>
      <button type="button" class="action" data-act="ai"><span aria-hidden="true">🤖</span><span>AI評価</span></button>
      <button type="button" class="action" data-act="print"><span aria-hidden="true">🖨️</span><span>PDF・印刷</span></button>
    </div>`;

  const form = el.querySelector("#scenario-form");
  const status = el.querySelector("#save-status");
  bindMics(el);

  function readForm() {
    const data = {};
    for (const s of SECTIONS) for (const f of s.fields) data[f.key] = form.elements[f.key].value;
    return normalizeData(data);
  }

  function writeForm(data) {
    for (const s of SECTIONS) for (const f of s.fields) form.elements[f.key].value = data[f.key] || "";
  }

  function isDirty() {
    const now = readForm();
    return Object.keys(now).some((k) => now[k] !== saved[k]);
  }

  function refreshStatus(extra) {
    if (extra) status.textContent = extra;
    else if (isDirty()) status.textContent = "未保存の変更があります（入力内容はこの端末に自動で退避されています）";
    else status.textContent = scenario ? `保存済み・最終更新 ${formatDateTime(scenario.updatedAt)}` : "";
  }

  let draftTimer;
  form.addEventListener("input", () => {
    clearTimeout(draftTimer);
    draftTimer = setTimeout(() => {
      if (isDirty()) store.saveDraft(scenario && scenario.id, readForm());
      else store.clearDraft(scenario && scenario.id);
      refreshStatus();
    }, 400);
  });

  function save({ quiet = false } = {}) {
    const data = readForm();
    if (!scenario && isEmptyData(data)) {
      toast("何か1つ以上入力してから保存してください");
      return false;
    }
    const wasNew = !scenario;
    const oldDraftKey = scenario && scenario.id;
    scenario = store.saveScenario(scenario && scenario.id, data);
    saved = normalizeData(scenario.data);
    store.clearDraft(oldDraftKey);
    store.clearDraft(scenario.id);
    if (wasNew) {
      // URLを編集画面に置き換える（戻る操作で新規作成画面に戻らないように）
      history.replaceState(null, "", `#/edit/${scenario.id}`);
      setTitle("シナリオを編集", { back: true });
    }
    if (!quiet) toast(scenario.recipients.length ? "保存しました（送信相手にも反映されます）" : "一時保存しました", "success");
    refreshStatus();
    return true;
  }

  el.querySelector(".actionbar").addEventListener("click", async (e) => {
    const btn = e.target.closest("[data-act]");
    if (!btn) return;
    const act = btn.dataset.act;
    if (act === "save") save();
    else if (act === "send") {
      if ((isDirty() || !scenario) && !save({ quiet: true })) return;
      await openSendDialog(scenario);
      scenario = store.getScenario(scenario.id);
      refreshStatus();
    } else if (act === "ai") {
      const data = readForm();
      if (isEmptyData(data)) return toast("評価する内容を入力してください");
      runAiEvaluation(data);
    } else if (act === "print") {
      const data = readForm();
      if (isEmptyData(data)) return toast("出力する内容を入力してください");
      printScenario(data, { ownerName: store.currentUser().name, updatedAt: scenario && scenario.updatedAt });
    }
  });

  // 前回保存しなかった入力が残っていれば、復元するか確認する
  if (draft && Object.keys(draft.data).some((k) => (draft.data[k] || "") !== (saved[k] || ""))) {
    modal({
      title: "保存していない入力があります",
      body: `<p>${formatDateTime(draft.at)} に入力していた、保存されていない内容が残っています。復元しますか？</p>`,
      buttons: [
        { label: "破棄する", value: false },
        { label: "復元する", value: true, variant: "primary" },
      ],
    }).then((restore) => {
      if (restore) {
        writeForm(normalizeData(draft.data));
        toast("入力内容を復元しました");
      } else store.clearDraft(scenario && scenario.id);
      refreshStatus();
    });
  }
  refreshStatus();

  return {
    isDirty,
    hash: () => (scenario ? `#/edit/${scenario.id}` : "#/new"),
    async canLeave() {
      if (!isDirty()) return true;
      const choice = await modal({
        title: "一時保存しますか？",
        body: `<p>「${esc(scenarioTitle(readForm()))}」に保存していない変更があります。</p>`,
        buttons: [
          { label: "キャンセル", value: "cancel" },
          { label: "保存しない", value: "discard" },
          { label: "一時保存して移動", value: "save", variant: "primary" },
        ],
      });
      if (choice === "save") return save();
      if (choice === "discard") {
        store.clearDraft(scenario && scenario.id);
        return true;
      }
      return false;
    },
    destroy() {
      clearTimeout(draftTimer);
    },
  };
}
