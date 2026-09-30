import * as store from "../store.js";
import { icon } from "../icons.js";
import {
  SECTIONS,
  getField,
  VITAL_GROUPS,
  emptyData,
  normalizeData,
  isEmptyData,
  isVitalsEmpty,
  scenarioTitle,
  gcsTotal,
  o2InUse,
  copyVitals1To2,
} from "../fields.js";
import { esc, setTitle, modal, toast, formatDateTime, confirmDialog, autoFit } from "../ui.js";
import { micButton, bindMics, voiceSupported, stopVoice } from "../voice.js";
import { openSendDialog, runAiEvaluation, issuesByField, issueHtml, aiStatusHtml } from "../actions.js";
import { confirmDelete } from "./home.js";

const fieldId = (key) => `f-${key.replace(".", "-")}`;

function numberInput(f, value, extra = "") {
  const integer = !f.step;
  return `<input id="${fieldId(f.key)}" name="${esc(f.key)}" type="number" inputmode="${integer ? "numeric" : "decimal"}" step="${f.step || "1"}" min="${f.min ?? ""}" max="${f.max ?? ""}" value="${esc(value)}" ${extra}>`;
}

// 血圧：収縮期 / 拡張期 を1行で入力する
function pairHtml(f, data) {
  const dia = getField(f.pair);
  return `
    <div class="field" data-field="${esc(f.key)}">
      <label for="${fieldId(f.key)}">${esc(f.pairLabel)}<span class="unit">（${esc(f.unit)}）</span></label>
      <div class="input-row bp-row">
        ${numberInput(f, data[f.key], 'aria-label="収縮期" placeholder="収縮期"')}
        <span class="bp-slash" aria-hidden="true">/</span>
        ${numberInput(dia, data[dia.key], 'aria-label="拡張期" placeholder="拡張期"')}
      </div>
      <div class="field-issues" data-issues-for="${esc(f.key)}"></div>
      <div class="field-issues" data-issues-for="${esc(dia.key)}"></div>
    </div>`;
}

// 1項目分の入力欄。音声入力ボタンは文章を書く欄（複数行）だけに付ける
function inputHtml(f, data) {
  if (f.pairOf) return "";
  if (f.pair) return pairHtml(f, data);
  const value = data[f.key];
  const id = fieldId(f.key);
  const common = `id="${id}" name="${esc(f.key)}"`;
  let control;
  if (f.type === "textarea") {
    control = `<textarea ${common} rows="3" placeholder="${esc(f.placeholder || "")}">${esc(value)}</textarea>${micButton(id)}`;
  } else if (f.type === "select") {
    control = `<select ${common}><option value="">選択</option>${f.options
      .map((o) => `<option value="${esc(o)}" ${o === value ? "selected" : ""}>${esc(o)}${f.base === "o2Flow" ? " L/分" : ""}</option>`)
      .join("")}</select>`;
  } else if (f.type === "number") {
    control = numberInput(f, value);
  } else {
    // 1行の文字入力も、長くなったら折り返して全文が見えるようにする
    control = `<textarea ${common} class="single-line" rows="1" placeholder="${esc(f.placeholder || "")}">${esc(value)}</textarea>`;
  }
  const wide = f.type === "textarea" || f.wide;
  return `
    <div class="field ${wide ? "wide" : ""}" data-field="${esc(f.key)}">
      <label for="${id}">${esc(f.label)}${f.unit ? `<span class="unit">（${esc(f.unit)}）</span>` : ""}</label>
      <div class="input-row">${control}</div>
      <div class="field-issues" data-issues-for="${esc(f.key)}"></div>
    </div>`;
}

function vitalsSectionHtml(section, data) {
  const groups = VITAL_GROUPS.map((g, i) => {
    const fields = section.fields.filter((f) => f.group === g);
    const extra =
      g === "意識"
        ? `<div class="gcs-total" aria-live="polite">GCS 合計：<strong data-gcs="${section.id}">${gcsTotal(data, section.id) || "—"}</strong><span class="muted small">（E＋V＋M）</span></div>`
        : "";
    return `
      <div class="vital-group">
        <h3>${g}</h3>
        <div class="form-grid vital-grid-${i}">${fields.map((f) => inputHtml(f, data)).join("")}</div>
        ${extra}
      </div>`;
  }).join("");
  return `
    <section class="card form-section" data-section="${section.id}">
      <div class="section-head">
        <h2>${esc(section.title)}</h2>
        ${section.id === "v2" ? '<button type="button" class="btn small" data-act="copy-v1">バイタル1をコピー</button>' : ""}
      </div>
      ${section.id === "v2" ? '<p class="small muted">急変シナリオで使います。使わない場合は空欄のまま保存でき、閲覧時は表示されません。</p>' : ""}
      ${groups}
    </section>`;
}

export function editorView(el, scenarioId) {
  let scenario = scenarioId ? store.getScenario(scenarioId) : null;
  if (scenarioId && (!scenario || !scenario.isOwner)) {
    setTitle("シナリオ", { back: true });
    el.innerHTML = `<div class="empty"><p>このシナリオは見つからないか、編集できません。</p><a class="btn" href="#/home">ホームへ</a></div>`;
    return;
  }
  let saved = scenario ? normalizeData(scenario.data) : emptyData();
  let aiSaved = scenario ? store.getAiResult(scenario.id) : null;
  let pendingAi = null; // 新規作成でまだ保存していないときのAI評価結果
  const draft = store.loadDraft(scenario && scenario.id);
  setTitle(scenario ? "シナリオを編集" : "新規作成", { back: true });

  el.classList.add("with-actionbar");
  el.innerHTML = `
    <p class="notice">${icon("alert")} 実在する患者の氏名など、個人を特定できる情報は入力しないでください。</p>
    ${voiceSupported ? '<p class="muted small">概要・主訴・既往歴・処置・備考は、「音声」ボタンを押して話すと入力できます。</p>' : ""}
    <div id="ai-status"></div>
    <form id="scenario-form" autocomplete="off" novalidate>
      <section class="card form-section" data-section="basic">
        <h2>基本情報</h2>
        <div class="form-grid">${SECTIONS[0].fields.map((f) => inputHtml(f, saved)).join("")}</div>
      </section>
      ${SECTIONS.slice(1).map((s) => vitalsSectionHtml(s, saved)).join("")}
    </form>
    <p class="save-status muted small" id="save-status" aria-live="polite"></p>
    <div class="actionbar">
      <button type="button" class="btn primary" data-act="save">一時保存</button>
      <button type="button" class="btn primary" data-act="send">送信</button>
      <button type="button" class="btn" data-act="ai">AI評価</button>
      <button type="button" class="btn danger" data-act="delete">削除</button>
    </div>`;

  const form = el.querySelector("#scenario-form");
  const status = el.querySelector("#save-status");
  bindMics(el);
  autoFit(el);
  // 画面の幅が変わったときも高さを合わせ直す
  const onResize = () => autoFit(el);
  window.addEventListener("resize", onResize);

  function readForm() {
    const data = {};
    for (const s of SECTIONS) for (const f of s.fields) data[f.key] = form.elements[f.key].value;
    return normalizeData(data);
  }

  function writeForm(data) {
    for (const s of SECTIONS) for (const f of s.fields) form.elements[f.key].value = data[f.key] || "";
    refreshDerived();
    autoFit(el);
  }

  // GCS合計と、酸素投与「なし」のときの入力不要項目を反映する
  function refreshDerived() {
    const raw = {};
    for (const s of SECTIONS) for (const f of s.fields) raw[f.key] = form.elements[f.key].value;
    for (const p of ["v1", "v2"]) {
      el.querySelector(`[data-gcs="${p}"]`).textContent = gcsTotal(raw, p) || "—";
      const inUse = o2InUse(raw, p);
      for (const key of ["o2Flow", "spo2O2"]) {
        const input = form.elements[`${p}.${key}`];
        input.disabled = !inUse;
        if (!inUse) input.value = "";
        input.closest(".field").classList.toggle("disabled", !inUse);
      }
    }
  }

  function renderAi() {
    const current = aiSaved || pendingAi;
    el.querySelector("#ai-status").innerHTML = aiStatusHtml(current, readForm());
    const byField = issuesByField(current);
    el.querySelectorAll("[data-issues-for]").forEach((box) => (box.innerHTML = issueHtml(byField[box.dataset.issuesFor])));
  }

  function isDirty() {
    const now = readForm();
    return Object.keys(now).some((k) => now[k] !== saved[k]);
  }

  function refreshStatus() {
    if (isDirty()) status.textContent = "未保存の変更があります（入力内容はこの端末に自動で控えています）";
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
  form.addEventListener("change", (e) => {
    if (e.target.name && /\.(gcs[EVM]|o2)$/.test(e.target.name)) refreshDerived();
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
      if (pendingAi) {
        store.saveAiResult(scenario.id, pendingAi.snapshot, pendingAi.result);
        aiSaved = store.getAiResult(scenario.id);
        pendingAi = null;
      }
      // URLを編集画面に置き換える（戻る操作で空の新規作成画面に戻らないように）
      history.replaceState(null, "", `#/edit/${scenario.id}`);
      setTitle("シナリオを編集", { back: true });
    }
    if (!quiet) toast(scenario.recipients.length ? "保存しました（送信した相手にも反映されます）" : "一時保存しました", "success");
    refreshStatus();
    return true;
  }

  el.addEventListener("click", async (e) => {
    const btn = e.target.closest("[data-act]");
    if (!btn) return;
    const act = btn.dataset.act;
    if (act === "save") save();
    else if (act === "copy-v1") {
      const data = readForm();
      if (isVitalsEmpty(data, "v1")) return toast("バイタルサイン1が未入力です");
      if (!isVitalsEmpty(data, "v2") && !(await confirmDialog("バイタル1をコピー", "バイタルサイン2の入力内容を、バイタルサイン1の内容で上書きしますか？", "上書きする"))) return;
      writeForm(copyVitals1To2(data));
      form.dispatchEvent(new Event("input"));
      toast("バイタルサイン1をコピーしました。変わった項目だけ修正してください");
    } else if (act === "send") {
      if ((isDirty() || !scenario) && !save({ quiet: true })) return;
      stopVoice();
      await openSendDialog(scenario);
      scenario = store.getScenario(scenario.id);
      refreshStatus();
    } else if (act === "ai") {
      const data = readForm();
      if (isEmptyData(data)) return toast("評価する内容を入力してください");
      stopVoice();
      const result = await runAiEvaluation(data, {
        scenarioId: scenario && !isDirty() ? scenario.id : null,
        canShare: false,
        onSaved(r) {
          if (scenario && !isDirty()) aiSaved = r;
          else if (scenario) {
            // 未保存の変更を評価したときも、作成物に結果を残す
            store.saveAiResult(scenario.id, r.snapshot, r.result);
            aiSaved = store.getAiResult(scenario.id);
          } else pendingAi = r;
          renderAi();
        },
      });
      if (result) renderAi();
    } else if (act === "delete") {
      if (!scenario) {
        if (isEmptyData(readForm()) || (await confirmDialog("削除の確認", "作成中の内容を破棄しますか？", "削除", "danger"))) {
          store.clearDraft(null);
          writeForm(emptyData());
          saved = emptyData();
          location.hash = "#/home";
        }
        return;
      }
      if (!(await confirmDelete([scenario]))) return;
      store.deleteScenarios([scenario.id]);
      store.clearDraft(scenario.id);
      saved = readForm(); // 移動時の保存確認を出さない
      toast("削除しました", "success");
      location.hash = "#/home";
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
      renderAi();
    });
  }
  refreshDerived();
  refreshStatus();
  renderAi();

  return {
    isDirty,
    hash: () => (scenario ? `#/edit/${scenario.id}` : "#/new"),
    async canLeave() {
      stopVoice();
      if (!isDirty()) return true;
      const choice = await modal({
        title: "一時保存しますか？",
        body: `<p>「${esc(scenarioTitle(readForm()))}」に保存していない変更があります。</p>`,
        buttons: [
          { label: "キャンセル", value: "cancel" },
          { label: "保存しない", value: "discard", variant: "danger" },
          { label: "保存する", value: "save", variant: "primary" },
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
      window.removeEventListener("resize", onResize);
    },
  };
}
