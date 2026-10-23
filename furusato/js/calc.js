// 還元率の計算。「入力の確認 → 計算 → 検算 → 途中式」の4段階で進め、
// どこかで合わなければ結果を出さずにエラーを返す。
// 金額はすべて円の整数のまま扱い、丸めは最後に1回だけ（小数第1位、四捨五入）行う。

import { normalizeText, parseQuantity, perUnitsFor, formatNumber, describeAmount } from "./units.js";

export function formatYen(n) {
  return `${Math.round(n).toLocaleString("ja-JP")}円`;
}

// 0.1% 単位の整数（400 = 40.0%）を "40.0" の形にする
export function tenthsToText(tenths) {
  const sign = tenths < 0 ? "-" : "";
  const abs = Math.abs(tenths);
  return `${sign}${Math.floor(abs / 10)}.${abs % 10}`;
}

export function signedPoints(tenths) {
  return `${tenths > 0 ? "+" : tenths < 0 ? "−" : "±"}${tenthsToText(Math.abs(tenths))}`;
}

// 「12,000」「１２０００円」「¥12,000」を整数の円にする。小数や文字が混じれば理由を返す
export function parseYen(input) {
  const s = normalizeText(input).replace(/[\s,円¥￥]/g, "");
  if (s === "") return { ok: false, empty: true, message: "金額が入力されていません" };
  if (/^-/.test(s)) return { ok: false, message: "マイナスの金額は使えません" };
  if (/^\d+\.\d+$/.test(s)) return { ok: false, message: "金額は円単位の整数で入力してください" };
  if (!/^\d+$/.test(s)) return { ok: false, message: "数字だけで入力してください" };
  const value = Number(s);
  if (!Number.isSafeInteger(value)) return { ok: false, message: "金額が大きすぎます" };
  return { ok: true, value };
}

// 正の整数どうしの割り算を四捨五入（半分は切り上げ）。浮動小数を使わない
function divRoundHalfUp(numerator, denominator) {
  return Math.floor((2 * numerator + denominator) / (2 * denominator));
}

// 判定ラベル：境目は「以上」で上の段、「未満」で下の段（30.0% ちょうどは「やや高め」）
export function gradeFor(rateTenths, config) {
  const grades = config.grades;
  for (const g of grades) {
    if (g.min === null || rateTenths >= Math.round(g.min * 10)) return g;
  }
  return grades[grades.length - 1];
}

/**
 * 還元率を計算する。
 * input: {
 *   donation: string|number   寄附額（総額）
 *   market: string|number     市場価格
 *   shipping?: string|number  送料（送料別の時）
 *   times?: number            定期便の回数（1 = 定期便でない）
 *   marketPer?: "delivery"|"total"  定期便の時、市場価格・送料が1回分か全回分か
 *   quantity?: string         内容量の表記
 *   confirmed?: boolean       桁違いの警告を利用者が確認済みか
 * }
 */
export function calculate(input, config) {
  if (input.estimate) return calculateEstimated(input, config);
  const errors = [];
  const warnings = [];
  const v = config.validation;

  // 1. 入力の確認
  const donationP = parseYen(input.donation);
  const marketP = parseYen(input.market);
  if (!donationP.ok) errors.push({ field: "donation", message: `寄附額：${donationP.message}` });
  if (!marketP.ok) errors.push({ field: "market", message: `市場価格：${marketP.message}` });

  let shipping = 0;
  if (input.shipping !== undefined && input.shipping !== null && String(input.shipping).trim() !== "") {
    const shipP = parseYen(input.shipping);
    if (!shipP.ok) errors.push({ field: "shipping", message: `送料：${shipP.message}` });
    else shipping = shipP.value;
  }

  const times = input.times === undefined || input.times === null || input.times === "" ? 1 : Number(normalizeText(input.times));
  if (!Number.isInteger(times) || times < 1 || times > 120) {
    errors.push({ field: "times", message: "定期便の回数は1〜120の整数で入力してください" });
  }

  if (donationP.ok && donationP.value === 0) errors.push({ field: "donation", message: "寄附額：0円では計算できません" });
  if (marketP.ok && marketP.value === 0) errors.push({ field: "market", message: "市場価格：0円では計算できません" });
  for (const [p, field, name] of [[donationP, "donation", "寄附額"], [marketP, "market", "市場価格"]]) {
    if (p.ok && p.value > v.maxAmountYen) errors.push({ field, message: `${name}：${formatYen(v.maxAmountYen)}を超える金額は扱えません` });
  }

  let quantity = null;
  if (input.quantity && String(input.quantity).trim() !== "") {
    quantity = input.quantityParsed ?? parseQuantity(input.quantity, config);
    if (!quantity.ok) errors.push({ field: "quantity", message: `内容量：${quantity.message}`, quantity });
  }
  if (errors.length) return { ok: false, errors, warnings };

  const donation = donationP.value;
  const perDelivery = times > 1 && input.marketPer !== "total";
  const formulas = [];

  // 2. 計算（すべて円の整数）
  const marketOnce = marketP.value + shipping;
  if (shipping > 0) {
    formulas.push(`市場価格 ${formatYen(marketP.value)} ＋ 送料 ${formatYen(shipping)} ＝ ${formatYen(marketOnce)}`);
  }
  const marketTotal = perDelivery ? marketOnce * times : marketOnce;
  if (perDelivery) {
    formulas.push(`1回分 ${formatYen(marketOnce)} × ${times}回 ＝ ${formatYen(marketTotal)}`);
  }
  if (!Number.isSafeInteger(marketTotal * 1000) || !Number.isSafeInteger(donation * 2000)) {
    return { ok: false, errors: [{ field: "market", message: "金額が大きすぎて計算できません" }], warnings };
  }
  const rateTenths = divRoundHalfUp(marketTotal * 1000, donation);
  const rateText = tenthsToText(rateTenths);
  formulas.push(`市場価格 ${formatYen(marketTotal)} ÷ 寄附額 ${formatYen(donation)} × 100 ＝ ${rateText}%`);

  // 3. 検算（別の計算で逆算して照合）
  //  a) 寄附額 × 還元率 ÷ 100 が市場価格に戻るか（丸め幅 0.05% 以内）
  const backDiff = Math.abs(donation * rateTenths - marketTotal * 1000);
  const checkA = 2 * backDiff <= donation;
  //  b) 浮動小数で別に計算した還元率と一致するか
  const checkB = Math.abs((marketTotal / donation) * 100 - rateTenths / 10) <= 0.05 + 1e-9;
  //  c) 送料・回数の足し算と掛け算が元に戻るか
  const checkC = (perDelivery ? marketTotal / times : marketTotal) - shipping === marketP.value;
  if (!checkA || !checkB || !checkC) {
    return { ok: false, errors: [{ field: null, message: "検算が合わなかったため、結果を表示できません。入力を見直してください" }], warnings };
  }
  const verification = `検算：寄附額 ${formatYen(donation)} × ${rateText}% ÷ 100 ≒ ${formatYen(Math.round((donation * rateTenths) / 1000))}（市場価格 ${formatYen(marketTotal)}）`;

  // 桁違いが疑われる値は、確認されるまで結果を出さない
  if (donation < v.minDonationYen) warnings.push({ field: "donation", message: `寄附額が${formatYen(v.minDonationYen)}未満です。この金額で合っていますか？` });
  if (rateTenths > v.maxRatePercent * 10) warnings.push({ field: "market", message: `還元率が${v.maxRatePercent}%を超えました（${rateText}%）。金額の桁を確認してください。この金額で合っていますか？` });
  if (rateTenths < v.minRatePercent * 10) warnings.push({ field: "market", message: `還元率が${v.minRatePercent}%未満です（${rateText}%）。金額の桁を確認してください。この金額で合っていますか？` });
  if (quantity?.deliveries && times > 1 && quantity.deliveries !== times) {
    warnings.push({ field: "times", message: `内容量の回数（${quantity.deliveries}回）と定期便の回数（${times}回）が違います。この内容で合っていますか？` });
  }
  if (warnings.length && !input.confirmed) return { ok: false, needsConfirm: true, errors: [], warnings };

  const standardTenths = Math.round(config.standardRate * 10);
  const diffTenths = rateTenths - standardTenths;
  const grade = gradeFor(rateTenths, config);

  const result = {
    ok: true,
    warnings,
    donation,
    marketInput: marketP.value,
    shipping,
    times,
    perDelivery,
    marketTotal,
    rateTenths,
    rateText,
    standardRate: config.standardRate,
    diffTenths,
    diffText: signedPoints(diffTenths),
    grade,
    formulas,
    verification,
    selfBurden: {
      yen: config.selfBurdenYen,
      net: marketTotal - config.selfBurdenYen,
      formula: `市場価格 ${formatYen(marketTotal)} − 自己負担 ${formatYen(config.selfBurdenYen)} ＝ ${formatYen(marketTotal - config.selfBurdenYen)}`,
    },
  };

  if (times > 1) {
    const donationEach = divRoundHalfUp(donation, times);
    const marketEach = divRoundHalfUp(marketTotal, times);
    result.perTime = { donation: donationEach, market: marketEach };
    formulas.push(`1回あたり：寄附額 ${formatYen(donation)} ÷ ${times}回 ≒ ${formatYen(donationEach)}、市場価格 ${formatYen(marketTotal)} ÷ ${times}回 ≒ ${formatYen(marketEach)}`);
  }

  if (quantity) result.unit = unitPrices(quantity, result, config);
  result.notes = notesFor(result, quantity, config);
  return result;
}

// 内容量の検証（推定・逆算で共通）
function requireQuantity(input, config, purpose) {
  if (!input.quantity || String(input.quantity).trim() === "") {
    return { error: { field: "quantity", message: `内容量：${purpose}には内容量が必要です` } };
  }
  const q = input.quantityParsed ?? parseQuantity(input.quantity, config);
  if (!q.ok) return { error: { field: "quantity", message: `内容量：${q.message}`, quantity: q } };
  return { quantity: q };
}

/**
 * 市場価格が見つからない時：似た商品の単価から市場価格を見積もって還元率を出す。
 * input.estimate = { price: "198", per: "100g" }（似た商品の 100g あたり 198円）
 * 結果には estimated が付き、画面・履歴・シェアで「推定」と区別して表示する。
 */
function calculateEstimated(input, config) {
  const errors = [];
  const priceP = parseYen(input.estimate.price);
  if (!priceP.ok) errors.push({ field: "estimate", message: `似た商品の価格：${priceP.message}` });
  else if (priceP.value === 0) errors.push({ field: "estimate", message: "似た商品の価格：0円では計算できません" });
  const perText = String(input.estimate.per ?? "").trim() || "100g";
  const per = parseQuantity(perText, config);
  if (!per.ok) errors.push({ field: "estimate", message: `似た商品の量：${per.message}` });
  const { quantity, error } = requireQuantity(input, config, "推定");
  if (error) errors.push(error);
  if (!errors.length && per.base !== quantity.base) {
    errors.push({ field: "estimate", message: `似た商品の量（${per.base}）と返礼品の内容量（${quantity.base}）の単位の種類が違います` });
  }
  const donationP = parseYen(input.donation);
  if (!donationP.ok) errors.push({ field: "donation", message: `寄附額：${donationP.message}` });
  if (errors.length) return { ok: false, errors, warnings: [] };

  // 市場価格（推定）＝ 似た商品の単価 × 返礼品の内容量 ÷ 単価の量
  const raw = (priceP.value * quantity.amount) / per.amount;
  const market = Math.max(1, Math.round(Math.round(raw * 1e6) / 1e6));
  // 検算：推定した市場価格から単価に戻すと、丸め（0.5円）の幅に収まるか
  if (Math.abs(market * per.amount - priceP.value * quantity.amount) > 0.5 * per.amount + 1e-6 && market > 1) {
    return { ok: false, errors: [{ field: null, message: "推定の検算が合わなかったため、結果を表示できません" }], warnings: [] };
  }
  // 内容量に回数が書いてあれば全回分の量なので、推定した価格も全回分になる
  const marketPer = quantity.deliveries ? "total" : input.marketPer;
  const scope = Number(input.times) > 1 ? (marketPer === "total" ? "（全回分）" : "（1回分）") : "";
  const formula = `似た商品の単価 ${formatYen(priceP.value)}（${per.display}あたり）× ${formatNumber(quantity.amount)}${quantity.base} ÷ ${formatNumber(per.amount)}${per.base} ≒ ${formatYen(market)}（推定の市場価格${scope}）`;

  const r = calculate({ ...input, estimate: null, market: String(market), shipping: "", marketPer, quantityParsed: quantity }, config);
  for (const w of r.warnings ?? []) if (w.field === "market") w.field = "estimate";
  if (!r.ok) return r;
  r.estimated = { input: { price: priceP.value, per: perText }, price: priceP.value, perDisplay: per.display, market, formula };
  r.formulas.unshift(formula);
  r.notes.unshift(config.notes.estimated);
  return r;
}

/**
 * 市場価格が分からない時：寄附額（と内容量）から、還元率の各段階になる市場価格・単価を逆算する。
 * 例：寄附額 30,000円・1.2kg → 40%以上になるのは市場価格 12,000円以上（100gあたり 1,000円以上）
 */
export function reverseCalculate(input, config) {
  const errors = [];
  const warnings = [];
  const donationP = parseYen(input.donation);
  if (!donationP.ok) errors.push({ field: "donation", message: `寄附額：${donationP.message}` });
  else if (donationP.value === 0) errors.push({ field: "donation", message: "寄附額：0円では計算できません" });
  else if (donationP.value > config.validation.maxAmountYen) errors.push({ field: "donation", message: `寄附額：${formatYen(config.validation.maxAmountYen)}を超える金額は扱えません` });
  const times = input.times === undefined || input.times === null || input.times === "" ? 1 : Number(normalizeText(input.times));
  if (!Number.isInteger(times) || times < 1 || times > 120) errors.push({ field: "times", message: "定期便の回数は1〜120の整数で入力してください" });
  let quantity = null;
  if (input.quantity && String(input.quantity).trim() !== "") {
    const q = requireQuantity(input, config, "逆算");
    if (q.error) errors.push(q.error);
    else quantity = q.quantity;
  }
  if (errors.length) return { ok: false, errors, warnings };

  const donation = donationP.value;
  if (donation < config.validation.minDonationYen) warnings.push({ field: "donation", message: `寄附額が${formatYen(config.validation.minDonationYen)}未満です。この金額で合っていますか？` });
  if (warnings.length && !input.confirmed) return { ok: false, needsConfirm: true, errors: [], warnings };

  // 内容量は全回分にそろえる（1回分で入れた定期便は回数を掛ける）
  let total = null;
  const formulas = [];
  if (quantity) {
    total = quantity.amount;
    if (times > 1 && !quantity.deliveries && input.marketPer !== "total") {
      total = Math.round(quantity.amount * times * 1e9) / 1e9;
      formulas.push(`1回分 ${formatNumber(quantity.amount)}${quantity.base} × ${times}回 ＝ ${formatNumber(total)}${quantity.base}`);
    }
  }
  const unitInfo = quantity ? { ...quantity, amount: total } : null;

  // 段階の境目（しきい値）と標準還元率
  const targets = config.grades.filter((g) => g.min !== null).map((g) => ({ min: g.min, grade: g }));
  if (!targets.some((t) => t.min === config.standardRate)) {
    targets.push({ min: config.standardRate, grade: gradeFor(Math.round(config.standardRate * 10), config) });
    targets.sort((a, b) => b.min - a.min);
  }
  const rows = [];
  for (const t of targets) {
    const T = Math.round(t.min * 10); // 0.1% 単位
    // 市場価格 × 1000 ≥ 寄附額 × T となる最小の整数（円）
    const market = Math.ceil((donation * T) / 1000);
    // 検算：この価格で T 以上、1円安いと T 未満
    if (market * 1000 < donation * T || (market > 0 && (market - 1) * 1000 >= donation * T)) {
      return { ok: false, errors: [{ field: null, message: "逆算の検算が合わなかったため、結果を表示できません" }], warnings };
    }
    const row = { min: t.min, grade: t.grade, standard: t.min === config.standardRate, market };
    formulas.push(`還元率${t.min}%：寄附額 ${formatYen(donation)} × ${t.min} ÷ 100 ＝ ${formatYen(market)}`);
    if (times > 1) row.perTime = Math.ceil(market / times);
    if (unitInfo) {
      row.unitPrices = perUnitsFor(unitInfo, config).map((pu) => {
        const yen = Math.ceil(((market * pu.amount) / total) * 10 - 1e-9) / 10;
        return { label: pu.label, yen };
      });
      const first = row.unitPrices[0];
      formulas.push(`　単価：${formatYen(market)} ÷ ${formatNumber(total)}${unitInfo.base} × ${formatNumber(perUnitsFor(unitInfo, config)[0].amount)} ≒ ${formatNumber(first.yen, 1)}円（${first.label}あたり）`);
    }
    rows.push(row);
  }
  const notes = [config.notes.reverse];
  if (quantity?.approx) notes.push(config.notes.approx);
  return {
    ok: true,
    mode: "reverse",
    donation,
    times,
    standardRate: config.standardRate,
    unit: unitInfo ? { base: unitInfo.base, kind: unitInfo.kind, amount: total, approx: unitInfo.approx, display: `${unitInfo.approx ? "約" : ""}${describeAmount(total, unitInfo.base)}`, steps: [...quantity.steps], conversionNotes: quantity.notes } : null,
    rows,
    formulas,
    notes,
  };
}

// 単価と「寄附1万円あたりの量」
function unitPrices(quantityIn, result, config) {
  // 定期便で市場価格を1回分で入れた時は、内容量も1回分として全回分に直す（表記に回数が入っていればそのまま）
  let quantity = quantityIn;
  const steps = [...quantityIn.steps];
  if (result.times > 1 && result.perDelivery && !quantityIn.deliveries) {
    const amount = Math.round(quantityIn.amount * result.times * 1e9) / 1e9;
    steps.push(`1回分 ${formatNumber(quantityIn.amount)}${quantityIn.base} × ${result.times}回 ＝ ${formatNumber(amount)}${quantityIn.base}`);
    quantity = { ...quantityIn, amount };
  }
  const prices = perUnitsFor(quantity, config).map((pu) => {
    const yen = Math.round(((result.marketTotal * pu.amount) / quantity.amount) * 10) / 10;
    return {
      label: pu.label,
      yen,
      formula: `${formatYen(result.marketTotal)} ÷ ${formatNumber(quantity.amount)}${quantity.base} × ${formatNumber(pu.amount)} ＝ ${formatNumber(yen, 1)}円（${pu.label}あたり）`,
    };
  });
  const per10k = Math.round(((quantity.amount * 10000) / result.donation) * 10) / 10;
  return {
    kind: quantity.kind,
    base: quantity.base,
    amount: quantity.amount,
    sourceAmount: quantityIn.amount,
    sourceDeliveries: quantityIn.deliveries,
    approx: quantity.approx,
    display: `${quantity.approx ? "約" : ""}${describeAmount(quantity.amount, quantity.base)}`,
    steps,
    conversionNotes: quantity.notes,
    prices,
    per10k,
    per10kText: `${quantity.approx ? "約" : ""}${describeAmount(per10k, quantity.base)}`,
    per10kFormula: `${formatNumber(quantity.amount)}${quantity.base} ÷ 寄附額 ${formatYen(result.donation)} × 10,000 ＝ ${formatNumber(per10k, 1)}${quantity.base}`,
  };
}

// 履歴用：内容量は換算した量（基準単位）だけを残し、「牛肉」などの文字は残さない。
// 読み直すと同じ量になる表記にする
export function quantityRecord(unit) {
  const d = unit.sourceDeliveries;
  const each = d ? Math.round((unit.sourceAmount / d) * 1e9) / 1e9 : unit.sourceAmount;
  return `${unit.approx ? "約" : ""}${each}${unit.base}${d ? `×${d}回` : ""}`;
}

function notesFor(result, quantity, config) {
  const notes = [];
  if (result.shipping > 0) notes.push(config.notes.shipping);
  if (result.times > 1) notes.push(config.notes.subscription);
  if (quantity) {
    const t = config.bulkThresholds;
    const amount = result.unit.amount;
    const bulk = (quantity.base === "g" && amount >= t.g) || (quantity.base === "ml" && amount >= t.ml) || (["count", "package"].includes(quantity.kind) && amount >= t.count);
    if (bulk) notes.push(config.notes.bulk);
    if (quantity.approx) notes.push(config.notes.approx);
    if (quantity.kind === "voucher") notes.push(config.notes.voucher);
  }
  return notes;
}

// 設定ファイル（配信版）が計算に使える形かを確かめる。壊れた設定では計算しない
export function validateConfig(config) {
  const problems = [];
  if (!config || typeof config !== "object") return ["設定がありません"];
  if (!(config.standardRate > 0 && config.standardRate < 100)) problems.push("standardRate");
  if (!Number.isInteger(config.selfBurdenYen) || config.selfBurdenYen < 0) problems.push("selfBurdenYen");
  const v = config.validation;
  if (!v || !(v.minDonationYen >= 0) || !(v.maxAmountYen > 0) || !(v.maxRatePercent > 0) || !(v.minRatePercent >= 0)) problems.push("validation");
  const g = config.grades;
  if (!Array.isArray(g) || g.length === 0) problems.push("grades");
  else {
    for (let i = 1; i < g.length - 1; i++) if (!(g[i].min < g[i - 1].min)) problems.push(`grades[${i}].min の順番`);
    if (g[g.length - 1].min !== null) problems.push("grades の最後は min: null");
    for (const x of g) if (!x.id || !x.label || !x.advice || !x.color) problems.push(`grades.${x.id ?? "?"}`);
  }
  if (!Array.isArray(config.units) || config.units.length === 0) problems.push("units");
  else for (const u of config.units) if (!u.unit || !u.kind || !u.base || !(u.factor > 0) || !config.kinds?.[u.kind]) problems.push(`units.${u.unit ?? "?"}`);
  if (!Array.isArray(config.sites)) problems.push("sites");
  else for (const s of config.sites) if (!s.id || !s.name || !s.kana || (s.url !== null && !/^https:\/\//.test(s.url))) problems.push(`sites.${s.id ?? "?"}`);
  if (!config.notes || !config.bulkThresholds) problems.push("notes");
  return problems;
}
