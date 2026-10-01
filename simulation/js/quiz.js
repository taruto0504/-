// 出題モード：受け取った人は段階的に情報が開いていく。
// 1：基本情報とバイタル1を見て回答 → 2：急変（バイタル2）を見て回答 → 3：処置と模範解答で答え合わせ

import { isVitalsEmpty } from "./fields.js";
import { esc, formatDateTime, modal } from "./ui.js";
import { micButton } from "./voice.js";
import { icon } from "./icons.js";

// 今の段階で見せない項目を空にしたデータ
export function maskData(data, step) {
  if (step >= 3) return data;
  const out = { ...data };
  for (const key of Object.keys(out)) {
    if (key === "v1.treatment" || key === "v2.treatment") out[key] = "";
    if (step < 2 && key.startsWith("v2.")) out[key] = "";
  }
  return out;
}

export function hiddenKeys(data, step) {
  return Object.keys(data).filter((k) => maskData(data, step)[k] !== data[k]);
}

const hasV2 = (data) => !isVitalsEmpty(data, "v2");
const totalSteps = (data) => (hasV2(data) ? 3 : 2);

function progressHtml(data, step) {
  const labels = hasV2(data) ? ["初期対応を回答", "急変後を回答", "答え合わせ"] : ["対応を回答", "答え合わせ"];
  const current = hasV2(data) ? step : step === 1 ? 1 : 2;
  return `<ol class="quiz-progress" aria-label="出題の進み具合">
    ${labels.map((l, i) => `<li class="${i + 1 < current ? "done" : i + 1 === current ? "now" : ""}"><span>${i + 1}</span>${l}</li>`).join("")}
  </ol>`;
}

// 回答の入力（ステップ1・2）
export function quizAskHtml(s) {
  const step = s.quizStep;
  const q = step === 1 ? s.quiz.q1 : s.quiz.q2;
  const last = step === 1 && !hasV2(s.data);
  return `
    <section class="card quiz-card">
      <div class="quiz-head">${icon("ai")}<h2>出題モード</h2><span class="muted small">ステップ ${hasV2(s.data) ? step : 1} / ${totalSteps(s.data)}</span></div>
      ${progressHtml(s.data, step)}
      ${step === 2 ? `<div class="quiz-prev"><span class="sheet-label">あなたの回答（設問1）</span><p>${esc(s.myAnswer.a1)}</p></div>` : ""}
      ${step === 2 ? `<p class="quiz-alert">${icon("alert")} 状態が変化しました。下の表に「バイタル2（急変時）」が追加されています。</p>` : ""}
      <p class="quiz-question"><strong>設問${step}</strong>　${esc(q)}</p>
      <div class="input-row">
        <textarea id="quiz-answer" rows="4" placeholder="考えた対応と、その理由を書いてください"></textarea>
        ${micButton("quiz-answer")}
      </div>
      <p class="error-text" id="quiz-error" hidden></p>
      <button type="button" class="btn primary block" data-act="quiz-submit">${last || step === 2 ? "回答して答え合わせへ" : "回答して次へ進む"}</button>
      <p class="small muted">処置欄と模範解答は、答え合わせで表示されます。</p>
    </section>`;
}

// 答え合わせ（ステップ3）
export function quizReviewHtml(s) {
  const a = s.myAnswer || {};
  return `
    <section class="card quiz-card done">
      <div class="quiz-head">${icon("ok")}<h2>答え合わせ</h2></div>
      ${progressHtml(s.data, 3)}
      <div class="quiz-compare">
        <div><span class="sheet-label">あなたの回答（設問1）</span><p>${esc(a.a1 || "—")}</p></div>
        ${hasV2(s.data) ? `<div><span class="sheet-label">あなたの回答（設問2）</span><p>${esc(a.a2 || "—")}</p></div>` : ""}
        <div class="quiz-model"><span class="sheet-label">模範解答・解説</span><p>${esc(s.quiz.model) || '<span class="muted">（模範解答は登録されていません。下の表の「処置」を参考にしてください）</span>'}</p></div>
      </div>
      <p class="small muted">下の表に処置が表示されています。気づいたことはチャットで話し合いましょう。</p>
    </section>`;
}

// 送信者向け：出題の内容
export function quizOwnerHtml(s) {
  if (!s.quiz.enabled) return "";
  return `
    <details class="card quiz-owner">
      <summary>${icon("ai")} 出題モード（設問と模範解答を見る）</summary>
      <dl>
        <dt>設問1</dt><dd>${esc(s.quiz.q1)}</dd>
        ${hasV2(s.data) ? `<dt>設問2</dt><dd>${esc(s.quiz.q2)}</dd>` : ""}
        <dt>模範解答・解説</dt><dd>${esc(s.quiz.model) || '<span class="muted">未登録</span>'}</dd>
      </dl>
    </details>`;
}

export function answerStatus(s, answer) {
  if (!s.quiz.enabled) return "";
  const need = hasV2(s.data) ? 2 : 1;
  const done = answer ? (answer.a1 ? 1 : 0) + (need === 2 && answer.a2 ? 1 : 0) : 0;
  return done >= need ? '<span class="badge ok">回答済み</span>' : done ? `<span class="badge warn">回答 ${done}/${need}</span>` : '<span class="badge">未回答</span>';
}

export function showAnswers(s, r) {
  const a = r.answer || {};
  return modal({
    title: `${r.name}さんの回答`,
    wide: true,
    body: `
      <div class="quiz-compare">
        <div><span class="sheet-label">設問1　${esc(s.quiz.q1)}</span><p>${esc(a.a1 || "（未回答）")}</p>${a.at1 ? `<span class="small muted">${formatDateTime(a.at1)}</span>` : ""}</div>
        ${hasV2(s.data) ? `<div><span class="sheet-label">設問2　${esc(s.quiz.q2)}</span><p>${esc(a.a2 || "（未回答）")}</p>${a.at2 ? `<span class="small muted">${formatDateTime(a.at2)}</span>` : ""}</div>` : ""}
        <div class="quiz-model"><span class="sheet-label">模範解答・解説</span><p>${esc(s.quiz.model) || "（未登録）"}</p></div>
      </div>`,
    buttons: [{ label: "閉じる", value: true, variant: "primary" }],
  });
}
