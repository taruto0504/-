import { calculate, formatYen, quantityRecord } from "./calc.js";
import { parseQuantity, quantityFromValue, normalizeText, describeAmount } from "./units.js";
import { extractNumbers, combineImages } from "./ocr-parse.js";
import { loadConfig } from "./config.js";
import { load, save, saveSecret, loadSecret } from "./storage.js";
import { PROVIDERS, askAi } from "./ai.js";
import { shareText, cardBlob, lineShareUrl } from "./share.js";

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

let config;
let current = null; // 表示中の計算結果
let ocrItems = []; // 読み取り確認中の項目
const prefs = load("prefs", { size: "normal", theme: "auto", open: "inapp", siteOrder: "kana", customOrder: null, ai: { provider: "", model: "" }, agreed: false });

/* ---------- 画面の切り替え ---------- */

const ROUTES = ["home", "result", "advice", "ocr", "history", "sites", "settings", "about-disclaimer", "about-rules", "about-neutral", "about-contact"];

function route() {
  let name = location.hash.slice(1) || "home";
  if (name === "shared") name = "home";
  if (!ROUTES.includes(name)) name = "home";
  if ((name === "result" || name === "advice") && !current) name = "home";
  if (name === "ocr" && !ocrItems.length && $("#ocr-progress").hidden) name = "home";
  for (const v of $$(".view")) v.classList.toggle("active", v.id === `view-${name}`);
  const view = $(`#view-${name}`);
  $("#page-title").textContent = view.dataset.title;
  const back = $("#back-btn");
  back.hidden = !view.dataset.back;
  back.onclick = () => (location.hash = view.dataset.back);
  for (const a of $$(".tabbar a")) {
    if (a.dataset.tab === view.dataset.tab) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  }
  if (name === "history") renderHistory();
  if (name === "sites") renderSites();
  if (name === "advice") renderAdvice();
  window.scrollTo(0, 0);
}

function go(name) {
  if (location.hash === `#${name}`) route();
  else location.hash = name;
}

/* ---------- ダイアログ ---------- */

function dialog(html, buttons) {
  const dlg = $("#dlg");
  $("#dlg-body").innerHTML = html;
  const actions = $("#dlg-actions");
  actions.innerHTML = "";
  return new Promise((resolve) => {
    for (const b of buttons) {
      const el = document.createElement("button");
      el.type = "button";
      el.className = `btn ${b.primary ? "primary" : ""}`;
      el.textContent = b.label;
      el.onclick = () => {
        dlg.close();
        resolve(b.value);
      };
      actions.appendChild(el);
    }
    dlg.oncancel = (e) => {
      e.preventDefault();
      if (buttons.length > 1 || !buttons[0].required) {
        dlg.close();
        resolve(buttons.find((b) => !b.primary)?.value ?? null);
      }
    };
    dlg.showModal();
  });
}

function toast(message) {
  return dialog(`<p style="margin:0">${esc(message)}</p>`, [{ label: "OK", value: true, primary: true }]);
}

/* ---------- 入力 ---------- */

// 数字キーボードの入力にカンマを自動で入れる
function bindYenInput(input) {
  input.addEventListener("input", () => {
    const digits = normalizeText(input.value).replace(/[^\d]/g, "").replace(/^0+(?=\d)/, "");
    input.value = digits ? Number(digits).toLocaleString("ja-JP") : "";
  });
}

function formInput(confirmed = false) {
  const hasShipping = $("#has-shipping").checked;
  const isSub = $("#is-sub").checked;
  const quantityText = $("#quantity").value.trim();
  let quantityParsed;
  const unit = $("#unit-select").value;
  if (quantityText && !$("#unit-pick").hidden && unit) {
    const q = parseQuantity(quantityText, config);
    const value = q.value ?? Number(normalizeText(quantityText).match(/\d+(?:\.\d+)?/)?.[0]);
    quantityParsed = quantityFromValue(value, unit, config);
  }
  return {
    donation: $("#donation").value,
    market: $("#market").value,
    shipping: hasShipping ? $("#shipping").value : "",
    times: isSub ? $("#times").value : 1,
    marketPer: $('input[name="market-per"]:checked').value,
    quantity: quantityText,
    quantityParsed,
    confirmed,
  };
}

function showFieldErrors(errors) {
  for (const f of $$(".field")) f.classList.remove("error");
  for (const el of $$(".field-error")) el.remove();
  $("#form-errors").innerHTML = "";
  for (const e of errors) {
    const field = e.field && $(`#f-${e.field}`);
    if (field) {
      field.classList.add("error");
      field.insertAdjacentHTML("beforeend", `<div class="field-error">${esc(e.message)}</div>`);
    } else {
      $("#form-errors").insertAdjacentHTML("beforeend", `<div class="err-box">${esc(e.message)}</div>`);
    }
  }
  // 単位が分からない時は選択肢を出す
  const qErr = errors.find((e) => e.field === "quantity");
  if (qErr && ["unknown-unit", "no-unit"].includes(qErr.quantity?.reason)) showUnitPicker();
  if (errors.length) {
    if (errors.some((e) => ["shipping", "times", "quantity"].includes(e.field))) $("#more").open = true;
    const first = $(".field.error input") ?? $("#form-errors");
    first?.focus?.();
    first?.scrollIntoView({ block: "center" });
  }
}

function showUnitPicker() {
  $("#unit-pick").hidden = false;
  $("#more").open = true;
}

async function submitCalc(confirmed = false) {
  const input = formInput(confirmed);
  const r = calculate(input, config);
  if (r.needsConfirm) {
    const ok = await dialog(
      `<h2>この金額で合っていますか？</h2><ul>${r.warnings.map((w) => `<li>${esc(w.message)}</li>`).join("")}</ul>`,
      [
        { label: "直す", value: false },
        { label: "このまま計算", value: true, primary: true },
      ],
    );
    if (ok) return submitCalc(true);
    const field = r.warnings[0].field;
    if (field) $(`#f-${field} input`)?.focus();
    return;
  }
  showFieldErrors(r.errors ?? []);
  if (!r.ok) return;
  showResult(r);
}

function showResult(r) {
  current = r;
  renderResult();
  go("result");
}

/* ---------- 結果 ---------- */

function gradeChip(grade) {
  const marks = { high: "▲▲", upper: "▲", standard: "●", modest: "▽" };
  return `<span class="grade-chip g-${esc(grade.color)}"><span class="mark" aria-hidden="true">${marks[grade.id] ?? "●"}</span>${esc(grade.label)}</span>`;
}

function gaugeHtml(r) {
  const max = Math.max(60, Math.min(150, Math.ceil(r.rateTenths / 100) * 10));
  const pct = (x) => `${Math.min(100, (x / max) * 100)}%`;
  const ticks = [0, 20, 40, max].filter((t, i, a) => a.indexOf(t) === i && t <= max);
  return `<div class="gauge" role="img" aria-label="還元率 ${r.rateText}%、標準還元率 ${r.standardRate}%">
    <div class="fill g-${esc(r.grade.color)}" style="width:${pct(r.rateTenths / 10)};background:currentColor;opacity:.35"></div>
    <div class="std" style="left:${pct(r.standardRate)}"><span>標準 ${r.standardRate}%</span></div>
    <div class="me" style="left:${pct(r.rateTenths / 10)}"></div>
    ${ticks.map((t) => `<span class="tick" style="left:${pct(t)}">${t}%</span>`).join("")}
  </div>`;
}

function resultHtml(r) {
  const diffWord = r.diffTenths > 0 ? "標準より" : r.diffTenths < 0 ? "標準より" : "標準と同じ";
  let html = `<div class="card rate-hero">
    <div class="small muted">この返礼品の還元率</div>
    <div class="rate">${esc(r.rateText)}<small>%</small></div>
    ${gradeChip(r.grade)}
    <div class="compare">
      <span>この返礼品 <strong>${esc(r.rateText)}%</strong></span><span aria-hidden="true">／</span>
      <span>標準還元率 <strong>${r.standardRate}%</strong></span>
    </div>
    <div class="compare"><span>→ ${diffWord} <span class="diff">${esc(r.diffText)}ポイント</span></span></div>
    ${gaugeHtml(r)}
  </div>`;

  html += `<div class="card"><h2>金額</h2><dl class="kv">
    <dt>寄附額</dt><dd>${formatYen(r.donation)}</dd>
    <dt>市場価格${r.shipping || r.perDelivery ? "（合計）" : ""}</dt><dd>${formatYen(r.marketTotal)}</dd>
    ${r.shipping ? `<dt>うち送料</dt><dd>${formatYen(r.shipping * (r.perDelivery ? r.times : 1))}</dd>` : ""}
    ${r.perTime ? `<dt>1回あたりの寄附額</dt><dd>約${formatYen(r.perTime.donation)}</dd><dt>1回あたりの価値</dt><dd>約${formatYen(r.perTime.market)}</dd>` : ""}
  </dl></div>`;

  if (r.unit) {
    html += `<div class="card"><h2>単価（${esc(r.unit.display)}）</h2><dl class="kv">
      ${r.unit.prices.map((p) => `<dt>${esc(p.label)}あたり</dt><dd>${r.unit.approx ? "約" : ""}${p.yen.toLocaleString("ja-JP", { maximumFractionDigits: 1 })}円</dd>`).join("")}
      <dt>寄附1万円あたりの量</dt><dd>${esc(r.unit.per10kText)}</dd>
    </dl></div>`;
  }

  html += `<div class="card"><h2>自己負担2,000円を差し引いた差額（参考）</h2>
    <p style="margin:0" class="big"><strong>${formatYen(r.selfBurden.net)}</strong></p>
    <p class="small muted" style="margin-bottom:0">年間の控除上限の範囲内で寄附した場合の目安です。控除額は年収や家族構成で変わります。</p></div>`;

  html += `<div class="card"><h2>計算の内訳</h2>
    ${r.formulas.map((f) => `<div class="formula">${esc(f)}</div>`).join("")}
    ${r.unit ? [...r.unit.steps, ...r.unit.prices.map((p) => p.formula), r.unit.per10kFormula].map((f) => `<div class="formula">${esc(f)}</div>`).join("") : ""}
    ${r.unit?.conversionNotes?.length ? `<p class="small muted">${r.unit.conversionNotes.map(esc).join("、")}</p>` : ""}
    <div class="formula">${esc(r.verification)} ✓</div>
    <div class="formula">${esc(r.selfBurden.formula)}</div>
  </div>`;

  html += `<p class="disclaimer">表示は還元率の高さを示す参考値で、返礼品の品質や自治体・事業者の良し悪しを評価するものではありません。3割基準は自治体の調達費用の基準で、市場価格での還元率とは別物です。<a href="#about-disclaimer">注意事項</a></p>`;
  return html;
}

function renderResult() {
  $("#result-body").innerHTML = resultHtml(current);
}

/* ---------- アドバイス ---------- */

function standardAdviceHtml(r) {
  return `<div class="card"><h2>標準アドバイス</h2>
    <p style="margin-top:0">${gradeChip(r.grade)}</p>
    <p>${esc(r.grade.advice)}</p>
    ${r.notes.length ? `<h3>注意ポイント</h3><ul class="notes">${r.notes.map((n) => `<li>${esc(n)}</li>`).join("")}</ul>` : ""}
  </div>`;
}

async function renderAdvice() {
  const r = current;
  const body = $("#advice-body");
  const ai = prefs.ai;
  const configured = ai.provider && (await loadSecret("apiKey"));
  body.innerHTML = `${standardAdviceHtml(r)}
    <div class="card" id="ai-card"><h2>AIアドバイス</h2>
      ${
        configured
          ? `<p class="small muted" style="margin-top:0">${esc(PROVIDERS[ai.provider].label)}に数字だけを送ります（商品名・個人情報は送りません）。利用料はご自身の負担です。</p>
             <button class="btn primary block" type="button" id="ask-ai">AIに詳しく聞く</button><div id="ai-out"></div>`
          : `<p style="margin-top:0" class="small">設定でAIサービスとAPIキーを登録すると、金額に合わせた詳しいアドバイスが出ます。</p><a class="btn block" href="#settings">AIを設定</a>`
      }
    </div>
    <p class="disclaimer">AIの回答は誤りを含むことがあります。判断の参考にとどめてください。</p>`;
  $("#ask-ai")?.addEventListener("click", runAi);
}

async function runAi() {
  const out = $("#ai-out");
  const btn = $("#ask-ai");
  btn.disabled = true;
  out.innerHTML = `<p><span class="spinner"></span> 回答を待っています…</p>`;
  try {
    const apiKey = await loadSecret("apiKey");
    const text = await askAi({ ...prefs.ai, apiKey }, current);
    out.innerHTML = `<div class="ai-text">${esc(text)}</div>`;
  } catch (e) {
    // 通信エラーなどの時は標準アドバイスに切り替える
    out.innerHTML = `<div class="warn">AIに接続できませんでした（${esc(e.message)}）。上の標準アドバイスをご覧ください。</div>`;
  } finally {
    btn.disabled = false;
  }
}

/* ---------- 写真・スクリーンショットの読み取り ---------- */

const ROLE_LABELS = { donation: "寄附額", market: "価格", shipping: "送料", quantity: "内容量", times: "回数", unknown: "金額", ignore: "対象外" };

async function handleImages(files) {
  files = [...files].filter((f) => f.type.startsWith("image/"));
  if (!files.length) return;
  ocrItems = [];
  $("#ocr-body").innerHTML = "";
  $("#ocr-progress").hidden = false;
  go("ocr");
  const { recognize } = await import("./ocr.js");
  const results = [];
  try {
    for (const [i, file] of files.entries()) {
      const status = (m) => {
        const part = m?.status === "recognizing text" ? m.progress : 0;
        $("#ocr-status").textContent = m?.status === "recognizing text" ? `読み取っています（${i + 1}/${files.length}枚目）` : `準備しています（初回は少し時間がかかります）`;
        $("#ocr-bar").style.width = `${((i + part) / files.length) * 100}%`;
      };
      status();
      const ocr = await recognize(file, status);
      const parsed = extractNumbers(ocr.lines, config);
      parsed.image = { url: URL.createObjectURL(file), width: ocr.width, height: ocr.height };
      results.push(parsed);
    }
  } catch (e) {
    $("#ocr-progress").hidden = true;
    $("#ocr-body").innerHTML = `<div class="err-box">画像を読み取れませんでした（${esc(e.message)}）。金額を手で入力してください。</div><a class="btn block" href="#home">入力に戻る</a>`;
    return;
  }
  $("#ocr-progress").hidden = true;
  ocrItems = combineImages(results).map(itemFromImages);
  renderOcr();
}

// 読み取り結果から入力欄の初期値を作る
function itemFromImages(group) {
  const d = group.donation;
  const m = group.market;
  const all = group.sources;
  const quantity = d?.quantity ?? m?.quantity ?? all.find((s) => s.quantity)?.quantity ?? null;
  const deliveries = d?.deliveries ?? m?.deliveries ?? all.find((s) => s.deliveries)?.deliveries ?? null;
  const shipping = m?.shippingCandidates[0] ?? null;
  return {
    sources: all,
    donationCandidates: d?.donationCandidates ?? [],
    marketCandidates: m?.marketCandidates ?? [],
    values: {
      donation: d?.donationCandidates[0]?.value ?? "",
      market: m?.marketCandidates[0]?.value ?? (quantity?.parsed.base === "円分" ? quantity.parsed.amount : ""),
      shipping: m?.shippingFree ? "" : shipping?.value ?? "",
      quantity: quantity?.text ?? "",
      times: deliveries ?? "",
      // 通販の価格はふつう1回分（定期便の1回のお届け分）
      marketPer: "delivery",
    },
    flags: [
      ...(d?.donationCandidates[0]?.flagged ? [`寄附額：${d.donationCandidates[0].reasons.join("、")}`] : []),
      ...(m?.marketCandidates[0]?.flagged ? [`価格：${m.marketCandidates[0].reasons.join("、")}`] : []),
      ...(quantity?.flagged ? [`内容量：${quantity.reasons.join("、")}`] : []),
    ],
  };
}

function boxesHtml(src) {
  const { width, height } = src.image;
  const pos = (b) => `left:${(b.x0 / width) * 100}%;top:${(b.y0 / height) * 100}%;width:${((b.x1 - b.x0) / width) * 100}%;height:${((b.y1 - b.y0) / height) * 100}%`;
  const boxes = [
    ...src.amounts.filter((a) => a.bbox).map((a, i) => ({ kind: "amount", i, role: a.role, bbox: a.bbox, flagged: a.flagged, text: a.text })),
    ...src.quantities.filter((q) => q.bbox).map((q, i) => ({ kind: "quantity", i, role: "quantity", bbox: q.bbox, flagged: q.flagged, text: q.text })),
    ...src.times.filter((t) => t.bbox).map((t, i) => ({ kind: "times", i, role: "times", bbox: t.bbox, flagged: false, text: t.text })),
  ];
  return boxes
    .map((b) => `<button type="button" class="ocr-box role-${b.role} ${b.flagged ? "flagged" : ""}" style="${pos(b.bbox)}" data-kind="${b.kind}" data-i="${b.i}" aria-label="${esc(b.text)}を${ROLE_LABELS[b.role]}として読み取り。タップで変更"><span class="tag">${ROLE_LABELS[b.role]}</span></button>`)
    .join("");
}

function ocrItemHtml(item, n) {
  const v = item.values;
  const chips = (list, field) =>
    list.length > 1 ? `<div class="chips">${list.map((c) => `<button type="button" class="chip" data-field="${field}" data-value="${c.value}" aria-pressed="${String(c.value) === String(v[field])}">${formatYen(c.value)}</button>`).join("")}</div>` : "";
  return `<div class="card ocr-item" data-n="${n}">
    ${ocrItems.length > 1 ? `<h2>${n + 1}件目</h2>` : ""}
    <div class="live-rate"><span class="small muted">この数字での還元率</span><span class="big" data-live></span></div>
    ${item.sources.map((s, si) => `<figure class="ocr-figure" data-src="${si}"><img src="${s.image.url}" alt="読み取った画像${si + 1}">${boxesHtml(s)}</figure>`).join("")}
    <div class="legend">${["donation", "market", "shipping", "quantity", "times"].map((r) => `<span><i style="background:var(--r-${r})"></i>${ROLE_LABELS[r]}</span>`).join("")}<span>⚠ 確認</span></div>
    ${item.flags.map((f) => `<div class="flag-note">⚠ ${esc(f)}</div>`).join("")}
    <div class="field"><label>寄附額</label><div class="input-wrap"><input data-field="donation" inputmode="numeric" value="${v.donation === "" ? "" : Number(v.donation).toLocaleString("ja-JP")}"><span class="suffix">円</span></div>
      ${item.donationCandidates.length > 1 ? `<div class="hint">寄附額の候補が複数あります（容量違いのプランなど）。選んでください</div>` : ""}${chips(item.donationCandidates, "donation")}</div>
    <div class="field"><label>市場価格</label><div class="input-wrap"><input data-field="market" inputmode="numeric" value="${v.market === "" ? "" : Number(v.market).toLocaleString("ja-JP")}"><span class="suffix">円</span></div>${chips(item.marketCandidates, "market")}</div>
    <div class="field"><label>送料（送料別の時）</label><div class="input-wrap"><input data-field="shipping" inputmode="numeric" value="${v.shipping === "" ? "" : Number(v.shipping).toLocaleString("ja-JP")}"><span class="suffix">円</span></div></div>
    <div class="field"><label>内容量</label><div class="input-wrap"><input data-field="quantity" value="${esc(v.quantity)}"></div></div>
    <div class="field"><label>定期便の回数</label><div class="input-wrap"><input data-field="times" inputmode="numeric" value="${esc(v.times)}"><span class="suffix">回</span></div>
      <div class="small muted" style="margin-top:8px">市場価格・送料・内容量は</div>
      <div class="radio-row">
        <label><input type="radio" name="per-${n}" data-per value="delivery" ${v.marketPer === "delivery" ? "checked" : ""}> 1回分</label>
        <label><input type="radio" name="per-${n}" data-per value="total" ${v.marketPer === "total" ? "checked" : ""}> 全回分</label></div></div>
    <button type="button" class="btn primary block" data-open>この数字で結果を見る</button>
  </div>`;
}

function itemInput(item, confirmed = true) {
  const v = item.values;
  return { donation: v.donation, market: v.market, shipping: v.shipping, times: v.times || 1, marketPer: v.marketPer, quantity: v.quantity, confirmed };
}

function renderOcr() {
  const body = $("#ocr-body");
  const multi = ocrItems.length > 1;
  body.innerHTML = `<p class="small muted">読み取った数字を色枠で示しています。違っていたら枠をタップするか、下の欄を直してください。</p>
    ${multi ? `<div class="card" id="ocr-ranking"></div>` : ""}
    ${ocrItems.map(ocrItemHtml).join("")}
    <a class="btn block" href="#home">手入力に戻る</a>`;
  for (const el of $$(".ocr-item", body)) {
    const item = ocrItems[Number(el.dataset.n)];
    for (const input of $$("input[data-field]", el)) {
      if (input.inputMode === "numeric" && input.dataset.field !== "times") bindYenInput(input);
      input.addEventListener("input", () => {
        item.values[input.dataset.field] = input.value;
        updateLive(el, item);
      });
    }
    for (const radio of $$("input[data-per]", el)) {
      radio.addEventListener("change", () => {
        item.values.marketPer = radio.value;
        updateLive(el, item);
      });
    }
    for (const chip of $$(".chip", el)) {
      chip.addEventListener("click", () => {
        item.values[chip.dataset.field] = Number(chip.dataset.value);
        $(`input[data-field="${chip.dataset.field}"]`, el).value = Number(chip.dataset.value).toLocaleString("ja-JP");
        for (const c of $$(`.chip[data-field="${chip.dataset.field}"]`, el)) c.setAttribute("aria-pressed", String(c === chip));
        updateLive(el, item);
      });
    }
    for (const box of $$(".ocr-box", el)) box.addEventListener("click", () => reassignBox(el, item, box));
    $("[data-open]", el).addEventListener("click", () => openOcrItem(item));
    updateLive(el, item);
  }
}

// 枠をタップして「何として使うか」を変える（1タップで修正）
async function reassignBox(el, item, box) {
  const src = item.sources[Number(box.closest("figure").dataset.src)];
  const kind = box.dataset.kind;
  const entry = kind === "amount" ? src.amounts[box.dataset.i] : kind === "quantity" ? src.quantities[box.dataset.i] : src.times[box.dataset.i];
  const options =
    kind === "amount"
      ? [["donation", "寄附額"], ["market", "価格"], ["shipping", "送料"]]
      : kind === "quantity"
        ? [["quantity", "内容量"]]
        : [["times", "定期便の回数"]];
  const choice = await dialog(
    `<h2>「${esc(entry.text)}」</h2>${entry.reasons?.length ? `<div class="flag-note">⚠ ${esc(entry.reasons.join("、"))}</div>` : ""}<p>この数字を何として使いますか？</p>`,
    [{ label: "やめる", value: null }, ...options.map(([v, l]) => ({ label: l, value: v, primary: true }))],
  );
  if (!choice) return;
  const value = kind === "amount" ? entry.value : kind === "quantity" ? entry.text : entry.value;
  item.values[choice] = value;
  const input = $(`input[data-field="${choice}"]`, el);
  input.value = typeof value === "number" && choice !== "times" ? value.toLocaleString("ja-JP") : value;
  if (kind === "amount") {
    entry.role = choice;
    box.className = `ocr-box role-${choice} ${entry.flagged ? "flagged" : ""}`;
    $(".tag", box).textContent = ROLE_LABELS[choice];
  }
  updateLive(el, item);
}

function updateLive(el, item) {
  const r = calculate(itemInput(item), config);
  item.result = r.ok ? r : null;
  $("[data-live]", el).innerHTML = r.ok ? `${esc(r.rateText)}% ${gradeChip(r.grade)}` : `<span class="small muted">${esc(r.errors[0]?.message ?? "数字を確認してください")}</span>`;
  renderRanking();
}

// 複数枚の時は還元率順・単価順に並べる
function renderRanking() {
  const box = $("#ocr-ranking");
  if (!box) return;
  const by = box.dataset.by ?? "rate";
  const done = ocrItems.map((it, n) => ({ it, n })).filter((x) => x.it.result);
  const sorted = sortResults(done.map((x) => ({ ...x, r: x.it.result })), by);
  box.innerHTML = `<h2>並べて比較</h2>
    <div class="radio-row" style="margin-bottom:8px"><label><input type="radio" name="ocr-by" value="rate" ${by === "rate" ? "checked" : ""}> 還元率順</label><label><input type="radio" name="ocr-by" value="unit" ${by === "unit" ? "checked" : ""}> 単価順</label></div>
    ${rankListHtml(sorted, by, (x) => `${x.n + 1}件目`)}`;
  for (const r of $$('input[name="ocr-by"]', box)) r.addEventListener("change", () => ((box.dataset.by = r.value), renderRanking()));
}

function openOcrItem(item) {
  const r = calculate(itemInput(item, false), config);
  if (r.needsConfirm || !r.ok) {
    // 入力画面に移して、通常の確認・エラー表示を通す
    fillForm(item.values);
    go("home");
    submitCalc();
    return;
  }
  fillForm(item.values);
  showResult(r);
}

function fillForm(v) {
  const yen = (x) => (x === "" || x === null || x === undefined ? "" : Number(String(x).replace(/,/g, "")).toLocaleString("ja-JP"));
  $("#donation").value = yen(v.donation);
  $("#market").value = yen(v.market);
  $("#has-shipping").checked = Boolean(v.shipping);
  $("#shipping").value = yen(v.shipping);
  $("#is-sub").checked = Number(v.times) > 1;
  $("#times").value = Number(v.times) > 1 ? v.times : "";
  $(`input[name="market-per"][value="${v.marketPer ?? "delivery"}"]`).checked = true;
  $("#quantity").value = v.quantity ?? "";
  syncOptionBoxes();
}

/* ---------- 履歴・比較 ---------- */

function historyRecord(r) {
  // 数字だけを保存する（商品名・自治体名は持たない）
  return {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    at: new Date().toISOString(),
    input: { donation: r.donation, market: r.marketInput, shipping: r.shipping, times: r.times, marketPer: r.perDelivery ? "delivery" : "total", quantity: r.unit ? quantityRecord(r.unit) : "" },
    rateTenths: r.rateTenths,
    unitPrice: r.unit ? { base: r.unit.base, label: r.unit.prices[0].label, yen: r.unit.prices[0].yen } : null,
  };
}

function sortResults(list, by) {
  const copy = [...list];
  if (by === "rate") copy.sort((a, b) => b.r.rateTenths - a.r.rateTenths);
  if (by === "unit") copy.sort((a, b) => (a.r.unit?.base ?? "~").localeCompare(b.r.unit?.base ?? "~") || (a.r.unit?.prices[0].yen ?? Infinity) - (b.r.unit?.prices[0].yen ?? Infinity));
  return copy;
}

function rankListHtml(sorted, by, name) {
  if (!sorted.length) return `<p class="small muted">計算できた項目がまだありません。</p>`;
  if (by !== "unit") {
    return sorted.map((x, i) => `<div class="hist-item" style="padding:6px 0"><span><span class="rank">${i + 1}</span>${esc(name(x))}</span><span><strong>${esc(x.r.rateText)}%</strong> ${gradeChip(x.r.grade)}</span></div>`).join("");
  }
  // 単価は同じ単位どうしだけを並べる（重さと個数などは比べない）
  const groups = new Map();
  for (const x of sorted) {
    const key = x.r.unit?.base ?? "";
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(x);
  }
  return [...groups]
    .map(([base, xs]) => `<div class="group-title">${base ? `単位：${esc(base)}（${esc(xs[0].r.unit.prices[0].label)}あたりの単価）` : "内容量なし（還元率だけで比較）"}</div>` +
      xs.map((x, i) => `<div class="hist-item" style="padding:6px 0"><span><span class="rank">${i + 1}</span>${esc(name(x))}</span><span>${x.r.unit ? `<strong>${x.r.unit.prices[0].yen.toLocaleString("ja-JP")}円</strong> ／ ` : ""}${esc(x.r.rateText)}%</span></div>`).join(""))
    .join("");
}

function renderHistory() {
  const items = load("history", []);
  const body = $("#history-body");
  if (!items.length) {
    body.innerHTML = `<div class="card center muted">保存した計算結果はまだありません。<br>結果画面の「保存」で追加できます。</div>`;
    return;
  }
  const by = $("#hist-sort").value;
  const list = items
    .map((h, idx) => ({ h, n: items.length - idx, r: calculate({ ...h.input, confirmed: true }, config) }))
    .filter((x) => x.r.ok);
  const sorted = by === "new" ? list : sortResults(list, by);
  const date = (iso) => new Date(iso).toLocaleDateString("ja-JP", { month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit" });
  let html = "";
  if (by === "unit") html += `<div class="card">${rankListHtml(sorted, "unit", (x) => `#${x.n}`)}</div>`;
  html += sorted
    .map(
      (x, i) => `<div class="card hist-item">
      <span class="big">${by === "rate" ? `<span class="rank">${i + 1}</span>` : ""}${esc(x.r.rateText)}%</span>
      <span>${gradeChip(x.r.grade)}</span>
      <div class="meta">#${x.n}・${date(x.h.at)}<br>寄附額 ${formatYen(x.r.donation)} ／ 市場価格 ${formatYen(x.r.marketTotal)}・標準より ${esc(x.r.diffText)}ポイント
        ${x.r.unit ? `<br>${esc(x.r.unit.display)}・${esc(x.r.unit.prices[0].label)}あたり ${x.r.unit.prices[0].yen.toLocaleString("ja-JP")}円` : ""}</div>
      <div class="hist-actions"><button class="btn small" type="button" data-open="${x.h.id}">結果を見る</button><button class="btn small danger" type="button" data-del="${x.h.id}">削除</button></div>
    </div>`,
    )
    .join("");
  html += `<button class="btn danger block" type="button" id="hist-clear">履歴をすべて削除</button>`;
  body.innerHTML = html;
  for (const b of $$("[data-open]", body)) b.addEventListener("click", () => showResult(list.find((x) => x.h.id === b.dataset.open).r));
  for (const b of $$("[data-del]", body)) {
    b.addEventListener("click", () => {
      save("history", load("history", []).filter((h) => h.id !== b.dataset.del));
      renderHistory();
    });
  }
  $("#hist-clear").addEventListener("click", async () => {
    const ok = await dialog("<p style='margin:0'>履歴をすべて削除しますか？</p>", [{ label: "やめる", value: false }, { label: "削除", value: true, primary: true }]);
    if (ok) {
      save("history", []);
      renderHistory();
    }
  });
}

/* ---------- サイト一覧 ---------- */

const SITE_COLORS = ["#c0392b", "#1a73e8", "#188038", "#e8710a", "#8e44ad", "#00838f", "#ad1457", "#5d4037", "#3949ab", "#6d8f00", "#d81b60", "#00695c"];

function orderedSites() {
  const sites = [...config.sites].sort((a, b) => a.kana.localeCompare(b.kana, "ja"));
  if (prefs.siteOrder === "custom" && prefs.customOrder) {
    const pos = new Map(prefs.customOrder.map((id, i) => [id, i]));
    sites.sort((a, b) => (pos.get(a.id) ?? 999) - (pos.get(b.id) ?? 999));
  }
  return sites;
}

function renderSites() {
  const sites = orderedSites();
  const body = $("#sites-body");
  // ロゴは各社の利用許可が取れるまで使わず、文字のアイコンにする
  const icon = (s) => {
    const text = s.icon ?? [...s.name][0];
    return `<span class="icon" style="background:${SITE_COLORS[config.sites.indexOf(s) % SITE_COLORS.length]};font-size:${text.length > 2 ? ".8rem" : text.length > 1 ? ".95rem" : "1.1rem"}" aria-hidden="true">${esc(text)}</span>`;
  };
  body.innerHTML = `<div class="site-grid">${sites
    .map((s, i) =>
      s.url
        ? `<a class="site" href="${esc(s.url)}" data-site="${esc(s.id)}" rel="noopener">${icon(s)}<span>${esc(s.name)}</span></a>`
        : `<div class="site disabled" aria-disabled="true">${icon(s)}<span>${esc(s.name)}</span><span class="status">URL確認中</span></div>`,
    )
    .join("")}</div>
    ${
      prefs.siteOrder === "custom"
        ? `<div class="card" style="margin-top:14px"><h2>並べ替え</h2><div class="reorder">${sites
            .map((s, i) => `<div class="reorder-row"><span>${esc(s.name)}</span><button class="btn small" type="button" data-up="${i}" aria-label="${esc(s.name)}を上へ" ${i === 0 ? "disabled" : ""}>↑</button><button class="btn small" type="button" data-down="${i}" aria-label="${esc(s.name)}を下へ" ${i === sites.length - 1 ? "disabled" : ""}>↓</button></div>`)
            .join("")}</div></div>`
        : ""
    }`;
  for (const a of $$("a[data-site]", body)) {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      openSite(a.href);
    });
  }
  const move = (i, d) => {
    const ids = sites.map((s) => s.id);
    [ids[i], ids[i + d]] = [ids[i + d], ids[i]];
    prefs.customOrder = ids;
    save("prefs", prefs);
    renderSites();
  };
  for (const b of $$("[data-up]", body)) b.addEventListener("click", () => move(Number(b.dataset.up), -1));
  for (const b of $$("[data-down]", body)) b.addEventListener("click", () => move(Number(b.dataset.down), 1));
}

function openSite(url) {
  const browser = window.Capacitor?.Plugins?.Browser;
  if (prefs.open === "inapp" && browser) browser.open({ url });
  else window.open(url, "_blank", "noopener");
}

/* ---------- 設定 ---------- */

function applyDisplay() {
  const root = document.documentElement;
  if (prefs.size === "normal") delete root.dataset.size;
  else root.dataset.size = prefs.size;
  if (prefs.theme === "auto") delete root.dataset.theme;
  else root.dataset.theme = prefs.theme;
}

async function initSettings() {
  const sel = $("#ai-provider");
  for (const [id, p] of Object.entries(PROVIDERS)) sel.insertAdjacentHTML("beforeend", `<option value="${id}">${esc(p.label)}</option>`);
  sel.value = prefs.ai.provider;
  const syncAi = () => {
    $("#ai-detail").hidden = !sel.value;
    const p = PROVIDERS[sel.value];
    $("#ai-model").placeholder = p ? p.defaultModel : "";
    $("#ai-key").placeholder = p ? p.keyHint : "";
  };
  sel.addEventListener("change", syncAi);
  $("#ai-model").value = prefs.ai.model;
  syncAi();
  if (await loadSecret("apiKey")) $("#ai-key").placeholder = "保存済み（変更する時だけ入力）";

  $("#ai-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    prefs.ai = { provider: sel.value, model: $("#ai-model").value.trim() };
    save("prefs", prefs);
    const newKey = $("#ai-key").value.trim();
    try {
      if (newKey) await saveSecret("apiKey", newKey);
      $("#ai-key").value = "";
      if (newKey || (await loadSecret("apiKey"))) $("#ai-key").placeholder = "保存済み（変更する時だけ入力）";
      $("#ai-msg").textContent = sel.value ? "保存しました。結果画面の「詳しく」からAIに聞けます。" : "AIを使わない設定にしました。";
    } catch {
      $("#ai-msg").textContent = "キーを保存できませんでした（この端末・ブラウザでは暗号化保存が使えません）。";
    }
  });
  $("#ai-clear").addEventListener("click", async () => {
    await saveSecret("apiKey", "");
    $("#ai-key").value = "";
    syncAi();
    $("#ai-msg").textContent = "APIキーを削除しました。";
  });

  for (const [name, key2] of [["size", "size"], ["theme", "theme"], ["open", "open"]]) {
    const radio = $(`input[name="${name}"][value="${prefs[key2]}"]`);
    if (radio) radio.checked = true;
    for (const r of $$(`input[name="${name}"]`)) {
      r.addEventListener("change", () => {
        prefs[key2] = r.value;
        save("prefs", prefs);
        applyDisplay();
      });
    }
  }
  $(`input[name="site-order"][value="${prefs.siteOrder}"]`).checked = true;
  for (const r of $$('input[name="site-order"]')) {
    r.addEventListener("change", () => {
      prefs.siteOrder = r.value;
      save("prefs", prefs);
      renderSites();
    });
  }

  const grades = config.grades;
  $("#criteria-body").innerHTML = `<p class="small" style="margin-top:0">標準還元率（国の基準ライン）：<strong>${config.standardRate}%</strong></p>
    <dl class="kv">${grades
      .map((g, i) => {
        const upper = i > 0 ? grades[i - 1].min : null;
        const range = g.min === null ? `${upper}%未満` : upper === null ? `${g.min}%以上` : `${g.min}〜${upper}%未満`;
        return `<dt>${gradeChip(g)}</dt><dd>${range}</dd>`;
      })
      .join("")}</dl>
    <p class="small muted" style="margin-bottom:0">基準値は設定ファイル（${esc(config.version)}版）で管理しています。</p>`;
  $("#version-line").textContent = `ふるさと還元チェッカー 0.1.0・設定 ${config.version}`;
  $("#contact-body").innerHTML = config.contactUrl
    ? `<p style="margin-top:0">表示内容についてのご意見・ご質問は、下のフォームからお送りください。自治体・事業者の方からのお問い合わせもこちらで受け付けます。</p><a class="btn primary block" href="${esc(config.contactUrl)}" target="_blank" rel="noopener">問い合わせフォームを開く</a>`
    : `<p style="margin:0">問い合わせフォームは準備中です。公開までに窓口を用意します。</p>`;
}

/* ---------- 起動 ---------- */

function syncOptionBoxes() {
  $("#shipping-box").hidden = !$("#has-shipping").checked;
  $("#sub-box").hidden = !$("#is-sub").checked;
  const per = $('input[name="market-per"]:checked').value === "delivery" && $("#is-sub").checked;
  $("#shipping-label").textContent = per ? "送料（1回分）" : "送料";
  $('label[for="quantity"]').textContent = per ? "内容量（1回分・単価を出す時）" : "内容量（単価を出す時）";
  if ($("#is-sub").checked || $("#has-shipping").checked || $("#quantity").value) $("#more").open = true;
}

async function firstLaunch() {
  if (prefs.agreed) return;
  await dialog(
    `<h2>はじめにお読みください</h2>
     <p>このアプリの判定とアドバイスは<strong>参考情報</strong>です。寄附先の判断や税額を保証するものではなく、最終的な判断はご自身で行ってください。</p>
     <ul class="small"><li>還元率は入力された市場価格に基づく目安です。通販価格は時期で変わります。</li>
     <li>表示は還元率の高さだけを示し、返礼品や自治体・事業者の良し悪しを評価するものではありません。</li>
     <li>控除額は年収や家族構成で変わります。</li></ul>`,
    [{ label: "同意して使う", value: true, primary: true, required: true }],
  );
  prefs.agreed = true;
  save("prefs", prefs);
}

async function main() {
  applyDisplay();
  try {
    config = await loadConfig();
  } catch {
    document.querySelector("main").innerHTML = `<div class="err-box">設定ファイルを読み込めませんでした。通信状態を確認して再度開いてください。</div>`;
    return;
  }

  for (const id of ["donation", "market", "shipping"]) bindYenInput($(`#${id}`));
  $("#times").addEventListener("input", (e) => (e.target.value = normalizeText(e.target.value).replace(/[^\d]/g, "")));
  for (const el of ["#has-shipping", "#is-sub", ...$$('input[name="market-per"]')]) (typeof el === "string" ? $(el) : el).addEventListener("change", syncOptionBoxes);
  $("#quantity").addEventListener("input", () => {
    $("#unit-pick").hidden = true;
    $("#unit-select").value = "";
  });
  $("#unit-select").innerHTML =
    `<option value="">選んでください</option>` +
    Object.entries(config.kinds)
      .map(([kind, k]) => `<optgroup label="${esc(k.label)}">${config.units.filter((u) => u.kind === kind).map((u) => `<option value="${esc(u.unit)}">${esc(u.unit)}</option>`).join("")}</optgroup>`)
      .join("");

  $("#calc-form").addEventListener("submit", (e) => {
    e.preventDefault();
    document.activeElement?.blur?.();
    submitCalc();
  });
  for (const id of ["pick-images", "take-photo"]) {
    $(`#${id}`).addEventListener("change", (e) => {
      handleImages(e.target.files);
      e.target.value = "";
    });
  }

  $("#btn-advice").addEventListener("click", () => go("advice"));
  $("#btn-save").addEventListener("click", () => {
    const list = load("history", []);
    list.unshift(historyRecord(current));
    toast(save("history", list.slice(0, 200)) ? "履歴に保存しました（数字だけを保存します）。" : "この端末では保存できませんでした。");
  });
  $("#btn-share").addEventListener("click", shareResult);
  $("#hist-sort").addEventListener("change", renderHistory);

  await initSettings();
  window.addEventListener("hashchange", route);
  route();
  firstLaunch();
  receiveSharedImages();

  if ("serviceWorker" in navigator && !window.Capacitor?.isNativePlatform?.()) {
    navigator.serviceWorker.register("service-worker.js").catch(() => {});
  }
}

async function shareResult() {
  const text = shareText(current);
  const choice = await dialog(
    `<h2>シェア</h2><p class="small">寄附額・市場価格・還元率・判定の数字だけを送ります（商品名や設定は含みません）。</p><div class="formula" style="white-space:pre-wrap">${esc(text)}</div>`,
    [
      { label: "閉じる", value: null },
      { label: "テキスト", value: "text" },
      { label: "画像つき", value: "image", primary: true },
    ],
  );
  if (!choice) return;
  try {
    if (choice === "image") {
      const blob = await cardBlob(current);
      const file = new File([blob], "kangenritsu.png", { type: "image/png" });
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], text });
      } else {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = file.name;
        a.click();
        toast("画像を保存しました。LINEやSNSに添付して送れます。");
      }
    } else if (navigator.share) {
      await navigator.share({ text });
    } else {
      window.open(lineShareUrl(text), "_blank", "noopener");
    }
  } catch (e) {
    if (e.name !== "AbortError") toast("シェアできませんでした。");
  }
}

// 他のアプリの共有メニューから送られた画像。
// Web版は service worker が受け取って Cache に置き、#shared で開く。アプリ版は window のイベントで渡す
async function receiveSharedImages() {
  window.addEventListener("furusato-shared-images", (e) => handleImages(e.detail.files));
  if (location.hash !== "#shared" || !("caches" in window)) return;
  try {
    const cache = await caches.open("furusato-shared");
    const files = [];
    for (const req of await cache.keys()) {
      const res = await cache.match(req);
      const blob = await res.blob();
      files.push(new File([blob], req.url.split("/").pop(), { type: blob.type }));
      await cache.delete(req);
    }
    if (files.length) handleImages(files);
  } catch {
    /* 受け取れなかった時は通常どおり起動 */
  }
}

main();
