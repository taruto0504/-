// 複数の画面から使う操作：送信、AI評価、PDF・印刷

import * as store from "./store.js";
import { SECTIONS, formatValue, formatPair, scenarioTitle, gcsTotal, isVitalsEmpty, fieldLabel, normalizeData } from "./fields.js";
import { esc, modal, toast, formatId, formatDateTime, copyText } from "./ui.js";
import { evaluateScenario, describeAiError, explanationToText, AI_DISCLAIMER } from "./ai.js";
import { ruleChecks } from "./checks.js";

// ---------- 送信 ----------

// 送信先を選ぶ → 確認 → 送信。送信したら true
export async function openSendDialog(scenario) {
  const picked = new Set();
  for (;;) {
    const ok = await pickRecipients(scenario, picked);
    if (!ok) return false;
    const names = [...picked].map((id) => `<li>${esc(store.userName(id))}（${formatId(id)}）${scenario.recipients.includes(id) ? ' <span class="badge">送信済み</span>' : ""}</li>`);
    const choice = await modal({
      title: "送信先の確認",
      body: `<p>「${esc(scenarioTitle(scenario.data))}」を次の<strong>${picked.size}人</strong>に送信します。</p>
        <ul class="confirm-list">${names.join("")}</ul>
        <p class="small muted">送信後に編集した内容は、相手側にも自動で反映されます。相手は閲覧とチャットのみ行えます。</p>`,
      buttons: [
        { label: "戻る", value: "back" },
        { label: "送信", value: "send", variant: "primary" },
      ],
    });
    if (choice === "back") continue;
    if (choice !== "send") return false;
    try {
      const r = store.sendScenario(scenario.id, [...picked]);
      toast(`${r.sent}人に送信しました`, "success");
      return true;
    } catch (e) {
      toast(e.message);
      return false;
    }
  }
}

function pickRecipients(scenario, picked) {
  const contacts = store.listContacts();
  const already = new Set(scenario.recipients);
  const typed = () => [...picked].filter((id) => !contacts.some((c) => c.id === id));

  const contactRows = contacts.length
    ? contacts
        .map(
          (c) => `
      <label class="pick-row" data-search="${esc(`${c.name} ${c.id}`.toLowerCase())}">
        <input type="checkbox" value="${esc(c.id)}" ${picked.has(c.id) ? "checked" : ""}>
        <span class="pick-name">${c.favorite ? '<span class="star on" aria-label="お気に入り">★</span>' : ""}${esc(c.name)}</span>
        <span class="pick-id">${formatId(c.id)}</span>
        ${already.has(c.id) ? '<span class="badge">送信済み</span>' : ""}
      </label>`
        )
        .join("")
    : '<p class="muted small">送信相手が登録されていません。IDを直接入力するか、「送信相手」画面で登録してください。</p>';

  const body = `
    <div class="field">
      <label for="send-id">IDを入力して追加（未登録の相手にも送れます）</label>
      <div class="input-row">
        <input id="send-id" inputmode="numeric" autocomplete="off" placeholder="例：12345678">
        <button type="button" class="btn" id="send-add">追加</button>
      </div>
      <p class="error-text" id="send-error" hidden></p>
      <div class="chips" id="send-chips"></div>
    </div>
    <div class="send-list-head">
      <span>登録した相手から選ぶ（複数可）</span>
    </div>
    ${contacts.length > 5 ? '<input type="search" id="send-filter" class="mb" placeholder="名前・IDで絞り込み" aria-label="送信相手を絞り込み">' : ""}
    <div class="pick-list" id="send-list">${contactRows}</div>`;

  function renderChips(root) {
    const chips = root.querySelector("#send-chips");
    chips.innerHTML = typed()
      .map((id) => `<span class="chip">${esc(store.userName(id))}（${formatId(id)}）<button type="button" data-remove="${id}">外す</button></span>`)
      .join("");
    chips.querySelectorAll("[data-remove]").forEach((b) =>
      b.addEventListener("click", () => {
        picked.delete(b.dataset.remove);
        renderChips(root);
      })
    );
  }

  function addTyped(root, raw) {
    const err = root.querySelector("#send-error");
    const id = store.normalizeId(raw);
    err.hidden = true;
    if (!id) return true;
    if (id === store.currentUser().id) err.textContent = "自分には送信できません";
    else if (!store.getUser(id)) err.textContent = `ID ${formatId(id)} のユーザーは見つかりません`;
    else {
      picked.add(id);
      const box = root.querySelector(`#send-list input[value="${id}"]`);
      if (box) box.checked = true;
      renderChips(root);
      root.querySelector("#send-id").value = "";
      return true;
    }
    err.hidden = false;
    return false;
  }

  return modal({
    title: "送信先を選ぶ",
    body,
    wide: true,
    buttons: [
      { label: "キャンセル", value: false },
      {
        label: "次へ（確認）",
        value: true,
        variant: "primary",
        onClick(root) {
          const pending = root.querySelector("#send-id").value;
          if (pending.trim() && !addTyped(root, pending)) return false;
          if (!picked.size) {
            const err = root.querySelector("#send-error");
            err.textContent = "送信相手を1人以上選んでください";
            err.hidden = false;
            return false;
          }
          return true;
        },
      },
    ],
    setup(root) {
      renderChips(root);
      const input = root.querySelector("#send-id");
      root.querySelector("#send-add").addEventListener("click", () => addTyped(root, input.value));
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.isComposing) {
          e.preventDefault();
          addTyped(root, input.value);
        }
      });
      root.querySelector("#send-list").addEventListener("change", (e) => {
        if (e.target.type !== "checkbox") return;
        e.target.checked ? picked.add(e.target.value) : picked.delete(e.target.value);
      });
      const filter = root.querySelector("#send-filter");
      if (filter) {
        filter.addEventListener("input", () => {
          const q = filter.value.trim().toLowerCase();
          root.querySelectorAll("#send-list .pick-row").forEach((row) => (row.hidden = q && !row.dataset.search.includes(q)));
        });
      }
    },
  });
}

// ---------- AI評価 ----------

function snapshotOf(data) {
  return JSON.stringify(normalizeData(data));
}

export function isAiStale(saved, data) {
  return !!saved && saved.snapshot !== snapshotOf(data);
}

// 評価結果から、項目ごとの指摘を取り出す（該当項目の横に表示するため）
export function issuesByField(saved) {
  const map = {};
  if (!saved) return map;
  for (const i of saved.result.issues || []) (map[i.field] ||= []).push(i);
  return map;
}

export function issueHtml(issues) {
  if (!issues || !issues.length) return "";
  return issues
    .map(
      (i) => `<div class="issue ${i.source === "rule" ? "rule" : ""}">
        <strong>⚠ ${i.source === "rule" ? "入力チェック" : "AIの指摘"}：</strong>${esc(i.message)}
        <span class="issue-reason">理由：${esc(i.reason)}</span>
      </div>`
    )
    .join("");
}

// 画面上部に出す「前回のAI評価」の表示
export function aiStatusHtml(saved, data) {
  if (!saved) return "";
  const stale = isAiStale(saved, data);
  const count = (saved.result.issues || []).length;
  return `<div class="ai-status ${stale ? "stale" : ""}">
    <span>🤖 AI評価（${formatDateTime(saved.at)}）：${count ? `指摘 ${count}件（該当項目の下に表示）` : "指摘はありません"}</span>
    ${stale ? '<span class="small">内容が変更されています。「AI評価」をもう一度押すと、最新の内容で評価し直します。</span>' : ""}
  </div>`;
}

function renderResult(saved, { canShare }) {
  const r = saved.result;
  const issues = r.issues || [];
  const ex = r.explanation;
  const list = (items) => `<ul>${items.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`;
  return `
    <p class="ai-disclaimer">⚠️ ${AI_DISCLAIMER}</p>
    <p class="small muted">評価日時：${formatDateTime(saved.at)}${saved.aiError ? `　<span class="error-text">AI：${esc(saved.aiError)}</span>` : ""}</p>
    <section class="ai-section">
      <h3>整合性チェック</h3>
      ${
        issues.length
          ? issues
              .map(
                (i) => `<div class="issue ${i.source === "rule" ? "rule" : ""}">
                  <strong>${esc(i.field === "general" ? "全体" : fieldLabel(i.field))}</strong>：${esc(i.message)}
                  <span class="issue-reason">理由：${esc(i.reason)}</span>
                </div>`
              )
              .join("")
          : "<p>矛盾や不自然な点は見つかりませんでした。</p>"
      }
      <p class="small muted">指摘は参考です。修正せずにそのまま保存・送信できます。</p>
    </section>
    ${
      ex
        ? `<section class="ai-section">
      <h3>解説・フィードバック</h3>
      ${r.summary ? `<p><strong>総評：</strong>${esc(r.summary)}</p>` : ""}
      ${ex.pathophysiology ? `<h4>病態の解説</h4><p>${esc(ex.pathophysiology)}</p>` : ""}
      ${ex.vitalsRationale ? `<h4>評価の根拠</h4><p>${esc(ex.vitalsRationale)}</p>` : ""}
      ${ex.actions.length ? `<h4>考えられる処置・対応（優先順）</h4><ol>${ex.actions.map((a) => `<li>${esc(a.action)}<span class="issue-reason">理由：${esc(a.reason)}</span></li>`).join("")}</ol>` : ""}
      ${ex.deterioration ? `<h4>急変の解説</h4><p>${esc(ex.deterioration)}</p>` : ""}
      ${ex.learningPoints.length ? `<h4>学習ポイント</h4>${list(ex.learningPoints)}` : ""}
      ${
        ex.quiz.length
          ? `<h4>確認問題</h4>${ex.quiz
              .map((q, i) => `<details class="quiz"><summary>Q${i + 1}. ${esc(q.question)}</summary><p>A. ${esc(q.answer)}</p></details>`)
              .join("")}`
          : ""
      }
      ${ex.nextTopics.length ? `<h4>次に学ぶとよいテーマ</h4>${list(ex.nextTopics)}` : ""}
      ${ex.references.length ? `<h4>参考資料</h4>${list(ex.references)}` : ""}
    </section>
    <section class="ai-section feedback">
      <h3>この解説はどうでしたか？</h3>
      <div class="btn-row">
        <button type="button" class="btn small" data-fb="helpful">役に立った</button>
        <button type="button" class="btn small" data-fb="wrong">誤りがある</button>
        ${canShare ? '<button type="button" class="btn small" data-share>チャットに共有</button>' : ""}
      </div>
      <div id="fb-reason" hidden>
        <label for="fb-text" class="small">どこが誤っているか、理由を書いてください</label>
        <textarea id="fb-text" rows="3"></textarea>
        <button type="button" class="btn small primary" data-fb-send>報告する</button>
      </div>
    </section>`
        : ""
    }`;
}

// AI評価ボタン。scenarioId があれば結果を保存する。評価後の結果を返す（閉じただけなら保存済みの結果）
export async function runAiEvaluation(data, { scenarioId = null, canShare = false, onSaved } = {}) {
  let saved = store.getAiResult(scenarioId);
  const fresh = saved && !isAiStale(saved, data);

  async function evaluate(root) {
    const box = root.querySelector("#ai-result");
    box.innerHTML = `<div class="loading"><span class="spinner"></span>評価しています…（30秒〜1分ほどかかることがあります）</div>`;
    const rules = ruleChecks(data);
    let ai = null;
    let aiError = "";
    try {
      ai = await evaluateScenario(data);
    } catch (e) {
      aiError = describeAiError(e);
    }
    if (aiError === "NO_KEY" && !rules.length) {
      box.innerHTML = `<p>AIによる解説を使うには、マイページで Claude の APIキーを設定してください。</p>
        <p class="small muted">入力内容の機械的なチェックでは、問題は見つかりませんでした。</p>
        <p><a href="#/me" class="btn primary" data-close>マイページを開く</a></p>`;
      box.querySelector("[data-close]").addEventListener("click", () => root.querySelector(".modal-close").click());
      return;
    }
    const result = {
      summary: ai ? ai.summary : "",
      issues: [...rules, ...(ai ? ai.issues.map((i) => ({ ...i, source: "ai" })) : [])],
      explanation: ai ? ai.explanation : null,
    };
    saved = { at: Date.now(), snapshot: snapshotOf(data), result, aiError: aiError === "NO_KEY" ? "APIキーが未設定のため、解説は表示できません（マイページで設定）" : aiError };
    if (scenarioId) store.saveAiResult(scenarioId, saved.snapshot, result);
    if (onSaved) onSaved(saved);
    show(root);
  }

  function show(root) {
    const box = root.querySelector("#ai-result");
    box.innerHTML = renderResult(saved, { canShare: canShare && !!saved.result.explanation });
    box.querySelectorAll("[data-fb]").forEach((b) =>
      b.addEventListener("click", () => {
        if (b.dataset.fb === "helpful") {
          store.addAiFeedback(scenarioId, "helpful", "");
          toast("ありがとうございます。今後の改善に使います", "success");
        } else box.querySelector("#fb-reason").hidden = false;
      })
    );
    const send = box.querySelector("[data-fb-send]");
    if (send) {
      send.addEventListener("click", () => {
        const reason = box.querySelector("#fb-text").value.trim();
        if (!reason) return toast("理由を入力してください");
        store.addAiFeedback(scenarioId, "wrong", reason);
        box.querySelector("#fb-reason").hidden = true;
        toast("報告を受け付けました", "success");
      });
    }
    const share = box.querySelector("[data-share]");
    if (share) {
      share.addEventListener("click", () => {
        store.postMessage(scenarioId, `🤖 AI解説を共有します\n\n${explanationToText(saved.result)}\n\n※${AI_DISCLAIMER}`);
        toast("チャットに共有しました", "success");
      });
    }
  }

  await modal({
    title: "AI評価",
    wide: true,
    body: `<div id="ai-result"></div>`,
    buttons: [
      {
        label: "評価し直す",
        onClick(root) {
          evaluate(root);
          return false;
        },
      },
      { label: "閉じる", value: true, variant: "primary" },
    ],
    setup(root) {
      if (fresh) show(root);
      else evaluate(root);
    },
  });
  return saved;
}

// ---------- PDF・印刷 ----------

function printHtml(data, meta, { chat, ai }) {
  const sections = SECTIONS.filter((s) => !(s.optional && isVitalsEmpty(data, "v2")))
    .map((s) => {
      const rows = [];
      for (const f of s.fields) {
        if (f.pairOf) continue;
        const v = f.pair ? formatPair(f, data) : formatValue(f, data[f.key]);
        if (v) rows.push(`<tr><th>${esc(f.pairLabel || f.label)}</th><td>${esc(v)}</td></tr>`);
        if (f.base === "gcsM") {
          const total = gcsTotal(data, s.id);
          if (total) rows.push(`<tr><th>GCS 合計</th><td>${total}</td></tr>`);
        }
      }
      return rows.length ? `<section><h2>${esc(s.title)}</h2><table>${rows.join("")}</table></section>` : "";
    })
    .join("");
  const metaLine = [
    meta.ownerName ? `作成者：${esc(meta.ownerName)}` : "",
    meta.updatedAt ? `最終更新：${esc(formatDateTime(meta.updatedAt))}` : "",
    `出力日：${esc(new Date().toLocaleDateString("ja-JP"))}`,
  ]
    .filter(Boolean)
    .join("　");
  const aiPart = ai && ai.result.explanation ? `<section class="print-ai"><h2>AI解説（${esc(formatDateTime(ai.at))}）</h2><p class="pre">${esc(explanationToText(ai.result))}</p><p class="print-note">※${AI_DISCLAIMER}</p></section>` : "";
  const chatPart =
    chat && chat.length
      ? `<section><h2>チャット</h2><table>${chat.map((m) => `<tr><th>${esc(m.name)}<br><small>${esc(formatDateTime(m.at))}</small></th><td>${esc(m.text)}</td></tr>`).join("")}</table></section>`
      : "";
  return `
    <h1>${esc(scenarioTitle(data))}</h1>
    <p class="print-meta">${metaLine}</p>
    ${sections}${aiPart}${chatPart}
    <p class="print-foot">医療シミュレーションアプリ ─ 教育用シナリオ</p>`;
}

function doPrint(data, meta, options) {
  let root = document.getElementById("print-root");
  if (!root) {
    root = document.createElement("div");
    root.id = "print-root";
    document.body.appendChild(root);
  }
  root.innerHTML = printHtml(data, meta, options);
  const prevTitle = document.title;
  document.title = scenarioTitle(data);
  window.addEventListener("afterprint", () => (document.title = prevTitle), { once: true });
  setTimeout(() => window.print(), 50);
}

// PDF・印刷ボタン：含める内容を選んでから出力する
export async function openOutputDialog(scenario) {
  const saved = store.getAiResult(scenario.id);
  const hasAi = !!(saved && saved.result.explanation);
  const hasChat = scenario.messageCount > 0;
  let opts = { chat: false, ai: false };
  const remember = (root) => {
    opts = { chat: root.querySelector("#opt-chat").checked, ai: root.querySelector("#opt-ai").checked };
    return true;
  };
  const choice = await modal({
    title: "PDF・印刷",
    body: `
      <p class="small">A4サイズで出力します。未入力の項目は省略されます。</p>
      <label class="check-row"><input type="checkbox" id="opt-chat" ${hasChat ? "" : "disabled"}> チャット内容を含める${hasChat ? "" : "（メッセージなし）"}</label>
      <label class="check-row"><input type="checkbox" id="opt-ai" ${hasAi ? "" : "disabled"}> AI解説を含める${hasAi ? "" : "（AI評価をするとえらべます）"}</label>
      <p class="small muted">「PDF」を押すと印刷画面が開きます。送信先で「PDFに保存」を選ぶとPDFファイルになります。</p>`,
    buttons: [
      { label: "キャンセル", value: null },
      { label: "印刷", value: "print", onClick: remember },
      { label: "PDF", value: "pdf", variant: "primary", onClick: remember },
    ],
  });
  if (!choice) return;
  if (choice === "pdf") toast("印刷画面の送信先で「PDFに保存」を選んでください");
  doPrint(scenario.data, { ownerName: scenario.ownerName, updatedAt: scenario.updatedAt }, {
    chat: opts.chat ? store.listMessages(scenario.id) : null,
    ai: opts.ai ? saved : null,
  });
}
