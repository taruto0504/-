// 内容量の表記（「300g×4パック」「約1.5kg」「2kg×3回」など）を読み取り、
// 種類ごとの基準単位（g・ml・個 …）に換算する。換算は逆換算で検算する。

const MEASURABLE_KINDS = ["weight", "volume", "length", "area", "meal", "voucher", "stay"];
const APPROX_WORDS = ["約", "およそ", "前後", "程度", "ほど", "くらい", "ぐらい", "以上"];
const TIMES_SIGNS = /[×xX*✕✖]/;

// 全角英数・記号を半角にし、単位の特殊文字や表記ゆれをそろえる
export function normalizeText(text) {
  return String(text ?? "")
    .replace(/[！-～]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xfee0))
    .replace(/　/g, " ")
    .replace(/[，、]/g, ",")
    .replace(/[．。]/g, ".")
    .replace(/[ー－―‐−]/g, (c, i, s) => (/[ァ-ヶ]/.test(s[i - 1] ?? "") ? "ー" : "-"));
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// 設定ファイルの単位一覧から、別名 → 単位定義 の対応表を作る（長い別名を先に照合）
export function buildUnitTable(config) {
  const aliases = [];
  for (const def of config.units) {
    for (const alias of new Set([def.unit, ...(def.aliases ?? [])])) {
      aliases.push({ alias: normalizeText(alias), def });
    }
  }
  aliases.sort((a, b) => b.alias.length - a.alias.length);
  return aliases;
}

function findUnit(table, text) {
  const lower = text.toLowerCase();
  for (const { alias, def } of table) {
    // 英字の単位は大文字小文字を区別しない（ml・mL・ML、L・l など）
    const hit = /[a-z]/i.test(alias) ? lower === alias.toLowerCase() : text === alias;
    if (hit) return def;
  }
  return null;
}

// 浮動小数の誤差（1.2 × 1000 = 1200.0000000002 など）を表示前に整える
function tidy(x) {
  return Math.round(x * 1e9) / 1e9;
}

function nearlyEqual(a, b) {
  return Math.abs(a - b) <= 1e-9 * Math.max(1, Math.abs(a), Math.abs(b));
}

export function formatNumber(x, maxFraction = 3) {
  return tidy(x).toLocaleString("ja-JP", { maximumFractionDigits: maxFraction });
}

function parseFactor(raw, table) {
  const m = raw.match(/^(\d{1,3}(?:,\d{3})+|\d+)(\.\d+)?(.*)$/);
  if (!m) return { error: `「${raw}」の数字が読み取れません` };
  const value = Number(m[1].replace(/,/g, "") + (m[2] ?? ""));
  let unitText = m[3].replace(/入り?$/, "").replace(/^\/$/, "");
  if (unitText === "") return { value, def: null };
  const def = findUnit(table, unitText);
  if (!def) return { value, unknownUnit: unitText };
  return { value, def };
}

// 内容量の表記を読み取り、基準単位の量にする。
// 戻り値: { ok: true, kind, base, amount, approx, deliveries, steps, notes } または { ok: false, reason, message, unknownUnit? }
export function parseQuantity(input, config, table = buildUnitTable(config)) {
  const s = normalizeText(input).trim();
  if (s === "") return { ok: false, reason: "empty", message: "内容量が入力されていません" };

  const paren = /[(\[【]([^()\[\]【】]*)[)\]】]/g;
  const inners = [...s.matchAll(paren)].map((m) => m[1]).filter((t) => /\d/.test(t));
  // 括弧書きは外して読む（「（定期便）」「(300g×4)」のような説明・内訳）
  const outer = parseCore(s.replace(paren, ""), table);
  if (outer.ok && MEASURABLE_KINDS.includes(outer.kind)) return outer;
  // 外側が「4パック（各300g）」のように数だけなら、括弧の中の量を掛け合わせる
  if (inners.length && (outer.ok || outer.reason === "no-unit")) {
    const merged = parseCore(`${s.replace(paren, "")}×${inners.join("×").replace(/各|1(?:パック|袋|個|本|缶|箱)あたり/g, "")}`, table);
    if (merged.ok) return merged;
  }
  return outer;
}

function parseCore(input, table) {
  let s = input;
  let approx = false;
  const notes = [];
  // 「1〜1.5kg」のような幅のある表記は少ない方の量で計算する
  s = s.replace(/(\d+(?:\.\d+)?)\s*[~〜-]\s*(\d+(?:\.\d+)?)/g, (all, lo) => {
    approx = true;
    notes.push("幅のある表記のため、少ない方の量で計算しています");
    return lo;
  });
  for (const w of APPROX_WORDS) {
    if (s.includes(w)) {
      approx = true;
      s = s.split(w).join("");
    }
  }
  // 先頭の数字でない部分（「牛肉 1.2kg」の「牛肉」など）は量に関係ないので読まない
  s = s.replace(/\s+/g, "").replace(/各/g, "").replace(/^[^\d]+/, "").replace(/[×xX*]+$/g, "");

  const terms = s.split("+").filter(Boolean);
  if (terms.length === 0) return { ok: false, reason: "parse", message: "内容量が読み取れません" };

  const steps = [];
  let total = 0;
  let base = null;
  let kind = null;
  let deliveries = null;

  for (const term of terms) {
    const factors = term.split(TIMES_SIGNS).filter(Boolean);
    const parsed = [];
    for (const f of factors) {
      const p = parseFactor(f, table);
      if (p.error) return { ok: false, reason: "parse", message: p.error };
      if (p.unknownUnit) {
        return { ok: false, reason: "unknown-unit", unknownUnit: p.unknownUnit, value: p.value, message: `単位「${p.unknownUnit}」が分かりません。一覧から選んでください` };
      }
      parsed.push(p);
    }
    const withUnit = parsed.filter((p) => p.def);
    if (withUnit.length === 0) {
      return { ok: false, reason: "no-unit", value: parsed[0]?.value, message: "単位が分かりません。一覧から選んでください" };
    }
    // 重さ・容量などの量を持つ単位を主にし、残り（パック数・本数・回数）は掛け算の数として扱う
    const primary = withUnit.find((p) => MEASURABLE_KINDS.includes(p.def.kind)) ?? withUnit[0];
    let multiplier = 1;
    for (const p of parsed) {
      if (p === primary) continue;
      multiplier *= p.value;
      if (p.def?.kind === "period" && p.def.base === "回") deliveries = (deliveries ?? 1) * p.value;
    }

    const def = primary.def;
    const converted = tidy(primary.value * def.factor);
    // 逆換算の検算：基準単位から元の単位に戻して一致するか
    if (!nearlyEqual(converted / def.factor, primary.value)) {
      return { ok: false, reason: "check", message: "単位換算の検算が合いませんでした" };
    }
    if (def.factor !== 1) {
      steps.push(`${formatNumber(primary.value)}${def.unit} → ${formatNumber(converted)}${def.base}（1${def.unit}＝${formatNumber(def.factor)}${def.base}）`);
      if (def.note && !notes.includes(def.note)) notes.push(def.note);
    }
    const termAmount = tidy(converted * multiplier);
    if (!nearlyEqual(termAmount / multiplier, converted)) {
      return { ok: false, reason: "check", message: "内容量の掛け算の検算が合いませんでした" };
    }
    if (multiplier !== 1) {
      steps.push(`${formatNumber(converted)}${def.base} × ${formatNumber(multiplier)} ＝ ${formatNumber(termAmount)}${def.base}`);
    }

    if (base !== null && base !== def.base) {
      return { ok: false, reason: "mixed", message: "種類の違う単位（重さと個数など）は足し合わせられません" };
    }
    base = def.base;
    kind = def.kind;
    total = tidy(total + termAmount);
  }
  if (terms.length > 1) steps.push(`合計 ${formatNumber(total)}${base}`);
  if (!(total > 0)) return { ok: false, reason: "zero", message: "内容量が0です" };

  return { ok: true, kind, base, amount: total, approx, deliveries, steps, notes, display: `${approx ? "約" : ""}${formatNumber(total)}${base}` };
}

// 単位を選んでもらった時用：数値と単位から量を作る
export function quantityFromValue(value, unit, config) {
  const def = config.units.find((u) => u.unit === unit);
  if (!def || !(value > 0)) return { ok: false, reason: "parse", message: "内容量が読み取れません" };
  return parseQuantity(`${value}${def.unit}`, config);
}

// 種類ごとに単価を出す単位（100g・1kg・1個 など）
export function perUnitsFor(quantity, config) {
  const k = config.kinds[quantity.kind];
  if (k?.perUnits?.length) return k.perUnits;
  return [{ amount: 1, label: `1${quantity.base}` }];
}

// 量を読みやすく表示（g は 1kg 以上で kg、ml は 1L 以上で L も添える）
export function describeAmount(amount, base) {
  if (base === "g" && amount >= 1000) return `${formatNumber(amount / 1000, 2)}kg`;
  if (base === "ml" && amount >= 1000) return `${formatNumber(amount / 1000, 2)}L`;
  return `${formatNumber(amount, 1)}${base}`;
}
