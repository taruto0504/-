// 端末内OCRの結果（行と単語の位置）から、寄附額・価格・送料・内容量・定期便の回数の数字だけを拾う。
// 商品名などの文字は使わず、どの数字を何として読んだかを位置つきで返す。

import { normalizeText, parseQuantity, buildUnitTable } from "./units.js";
import { parseYen } from "./calc.js";

const KEYWORDS = {
  donation: /寄[附付]|寄附金額|寄付金額|必要寄/,
  shipping: /送料|配送料/,
  market: /価格|税込|販売|特価|通常|売価|本体|お値段/,
  ignore: /ポイント|pt|獲得|OFF|オフ|割引|クーポン|還元|上限|控除|万円まで/i,
};

// 数字の中に紛れた読み間違いやすい文字（O→0、l→1 など）を直し、直したかどうかを返す
export function fixDigits(text) {
  let fixed = false;
  const out = text.replace(/[\dOoIl|SB][\dOoIl|SB,.]*[\dOoIl|SB]/g, (token) => {
    const digits = (token.match(/\d/g) ?? []).length;
    const lookAlike = (token.match(/[OoIl|SB]/g) ?? []).length;
    if (digits < 1 || lookAlike === 0 || digits + lookAlike < 3) return token;
    fixed = true;
    return token.replace(/[Oo]/g, "0").replace(/[Il|]/g, "1").replace(/S/g, "5").replace(/B/g, "8");
  });
  return { text: out, fixed };
}

function unionBox(boxes) {
  if (!boxes.length) return null;
  return {
    x0: Math.min(...boxes.map((b) => b.x0)),
    y0: Math.min(...boxes.map((b) => b.y0)),
    x1: Math.max(...boxes.map((b) => b.x1)),
    y1: Math.max(...boxes.map((b) => b.y1)),
  };
}

// 行の単語をつなげた文字列と、文字位置 → 単語 の対応を作る
function lineIndex(line) {
  const words = line.words?.length ? line.words : [{ text: line.text, bbox: line.bbox, confidence: line.confidence ?? 100 }];
  let text = "";
  const owner = [];
  words.forEach((w, i) => {
    const t = normalizeText(w.text);
    if (text && /[\dA-Za-z]$/.test(text) && /^[\dA-Za-z]/.test(t)) {
      text += " ";
      owner.push(-1);
    }
    for (const ch of t) {
      text += ch;
      owner.push(i);
    }
  });
  return { text, owner, words };
}

function matchInfo(idx, start, end) {
  const ids = [...new Set(idx.owner.slice(start, end).filter((i) => i >= 0))];
  const ws = ids.map((i) => idx.words[i]);
  return {
    bbox: unionBox(ws.map((w) => w.bbox).filter(Boolean)),
    confidence: ws.length ? Math.min(...ws.map((w) => w.confidence ?? 100)) : 100,
  };
}

const LOW_CONFIDENCE = 75;
const MEASURABLE = ["weight", "volume", "length", "area", "meal", "voucher", "stay"];

/**
 * lines: [{ text, bbox, words: [{ text, bbox, confidence }] }]
 * 戻り値: { amounts, quantities, times, donation, market, shipping, quantity, deliveries }
 */
export function extractNumbers(lines, config) {
  const table = buildUnitTable(config);
  const amounts = [];
  const quantities = [];
  const deliveries = [];
  let shippingFree = null;

  const unitAliases = table
    .filter(({ def }) => def.kind !== "period")
    .map(({ alias }) => alias.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const unitRe = `(?:${unitAliases.join("|")})`;
  const num = "\\d[\\d,]*(?:\\.\\d+)?";
  const times = `(?:\\s*[×xX*]\\s*${num}\\s*(?:${unitRe}|回)?)`;
  // 単位の後ろに英字が続くもの（「34pt」の p など）は単位とみなさない
  const quantityRe = new RegExp(`(?:約)?${num}\\s*(?:${unitRe}${times}*|${times}+)(?![A-Za-z])(?:入り?)?`, "gi");

  lines.forEach((line, li) => {
    const idx = lineIndex(line);
    const { text, fixed } = fixDigits(idx.text);
    // 見出し（「寄附金額」「価格」など）は同じ行か、近い上の行（3行まで）の一番近いものを使う
    let heading = null;
    for (let k = li - 1; k >= Math.max(0, li - 3) && !heading; k--) {
      const t = normalizeText(lines[k].text ?? "");
      heading = ["donation", "shipping", "market"].find((role) => KEYWORDS[role].test(t)) ?? null;
    }
    const context = (role) => KEYWORDS[role].test(text) || heading === role;

    if (/送料無料|送料込/.test(text)) {
      shippingFree = { bbox: matchInfo(idx, text.search(/送料/), text.search(/送料/) + 4).bbox };
    }

    // 金額：「12,000円」「¥12,000」「12,000円分」
    const yenRe = /(?:[¥￥]\s*(\d[\d,]*)|(\d[\d,]*)\s*円(分)?)/g;
    for (const m of text.matchAll(yenRe)) {
      const raw = m[1] ?? m[2];
      const p = parseYen(raw);
      if (!p.ok || p.value === 0) continue;
      const before = text.slice(Math.max(0, m.index - 12), m.index);
      let role = "unknown";
      if (m[3]) role = "voucher";
      else if (KEYWORDS.ignore.test(before) || /^\s*(?:pt|ポイント|相当|OFF)/i.test(text.slice(m.index + m[0].length))) role = "ignore";
      else if (KEYWORDS.shipping.test(before)) role = "shipping";
      else if (KEYWORDS.donation.test(before) || (!KEYWORDS.market.test(before) && context("donation") && !context("shipping"))) role = "donation";
      else if (KEYWORDS.market.test(before) || context("market")) role = "market";
      else if (context("shipping")) role = "shipping";
      const info = matchInfo(idx, m.index, m.index + m[0].length);
      const reasons = [];
      if (fixed) reasons.push("読み間違いやすい文字を数字に直しました");
      if (info.confidence < LOW_CONFIDENCE) reasons.push("読み取りの確かさが低めです");
      if (/^\d{1,3}(,\d{3})*$/.test(raw) === false && raw.includes(",")) reasons.push("カンマの位置が不自然です（桁を確認）");
      amounts.push({ value: p.value, role, text: m[0], line: li, ...info, flagged: reasons.length > 0, reasons });
    }

    // 「円」を F・H などに読み違えた金額（「30,000F」）。カンマ区切りの数字なら金額として拾い、確認を促す
    for (const m of text.matchAll(/(?<![\d,.¥￥])(\d{1,3}(?:,\d{3})+)(?!\s*(?:[\d.]|円|g|kg|ml|mg|L|個|本|枚|pt|ポイント))/gi)) {
      const p = parseYen(m[1]);
      if (!p.ok) continue;
      const before = text.slice(Math.max(0, m.index - 12), m.index);
      if (KEYWORDS.ignore.test(before)) continue;
      const role = KEYWORDS.shipping.test(before) ? "shipping" : KEYWORDS.donation.test(before) || context("donation") ? "donation" : KEYWORDS.market.test(before) || context("market") ? "market" : context("shipping") ? "shipping" : "unknown";
      const info = matchInfo(idx, m.index, m.index + m[0].length);
      amounts.push({ value: p.value, role, text: m[0], line: li, ...info, flagged: true, reasons: ["「円」が読み取れなかったため、金額として扱っています"] });
    }

    // 定期便の回数：「全3回」「3回お届け」「定期便 3回」
    for (const m of text.matchAll(/(?:全|計)\s*(\d{1,3})\s*回|(\d{1,3})\s*回\s*(?:お届け|発送|配送|定期)|定期便[^\d]{0,6}(\d{1,3})\s*回/g)) {
      const value = Number(m[1] ?? m[2] ?? m[3]);
      if (value >= 2 && value <= 120) deliveries.push({ value, text: m[0], line: li, ...matchInfo(idx, m.index, m.index + m[0].length) });
    }

    // 内容量：「300g×4パック」「500ml×24本」「約1.2kg」
    for (const m of text.matchAll(quantityRe)) {
      let q = parseQuantity(m[0], config, table);
      if (!q.ok) continue;
      const info = matchInfo(idx, m.index, m.index + m[0].length);
      const reasons = [];
      let qText = m[0];
      // 「300g×4パック」の g を 9 と読むと「3009×4パック」（パックが3009個）になる。重さに読み替えて確認を促す
      let fixedG = false;
      if (/^(約)?\d+9\s*[×xX*]/.test(m[0]) && !MEASURABLE.includes(q.kind)) {
        const fixedText = m[0].replace(/^(約)?(\d+)9(\s*[×xX*])/, "$1$2g$3");
        const fixedQ = parseQuantity(fixedText, config, table);
        if (fixedQ.ok) {
          q = fixedQ;
          qText = fixedText;
          fixedG = true;
        }
      }
      if (fixedG) reasons.push("「g」を「9」と読んだとみて、重さに読み替えました");
      else if (/\d9\s*[×xX*]/.test(m[0]) || /\d9入/.test(m[0])) reasons.push("「g」を「9」と読んだ可能性があります");
      if (/[xX]/.test(m[0])) reasons.push("「×」を文字の x と読んでいます");
      if (fixed) reasons.push("読み間違いやすい文字を数字に直しました");
      if (info.confidence < LOW_CONFIDENCE) reasons.push("読み取りの確かさが低めです");
      quantities.push({ text: qText.replace(/\s*[xX*]\s*(?=\d)/g, "×"), parsed: q, line: li, ...info, flagged: reasons.length > 0, reasons });
    }
  });

  const pick = (role) => amounts.filter((a) => a.role === role);
  const donations = pick("donation");
  let markets = pick("market");
  const vouchers = pick("voucher");
  // 寄附額の見出しがない画像（通販サイトなど）は、見出しのない金額を価格の候補にする
  if (!markets.length && !donations.length) markets = pick("unknown");
  if (!markets.length && vouchers.length) markets = vouchers;
  const shippings = pick("shipping");

  return {
    amounts,
    quantities,
    times: deliveries,
    donationCandidates: dedupe(donations),
    marketCandidates: dedupe(markets),
    shippingCandidates: dedupe(shippings),
    shippingFree,
    quantity: quantities[0] ?? null,
    deliveries: deliveries[0]?.value ?? quantities.find((q) => q.parsed.deliveries)?.parsed.deliveries ?? null,
  };
}

function dedupe(list) {
  const seen = new Set();
  return list.filter((a) => (seen.has(a.value) ? false : (seen.add(a.value), true)));
}

// 複数枚の読み取り結果をまとめる。寄附額だけの画像と価格だけの画像が並んでいれば1件にする
export function combineImages(results) {
  const items = [];
  let pendingDonation = null;
  let pendingMarket = null;
  for (const r of results) {
    const hasD = r.donationCandidates.length > 0;
    const hasM = r.marketCandidates.length > 0;
    if (hasD && hasM) {
      items.push({ sources: [r], donation: r, market: r });
    } else if (hasD) {
      if (pendingMarket) {
        items.push({ sources: [pendingMarket, r], donation: r, market: pendingMarket });
        pendingMarket = null;
      } else {
        if (pendingDonation) items.push({ sources: [pendingDonation], donation: pendingDonation, market: null });
        pendingDonation = r;
      }
    } else if (hasM) {
      if (pendingDonation) {
        items.push({ sources: [pendingDonation, r], donation: pendingDonation, market: r });
        pendingDonation = null;
      } else {
        if (pendingMarket) items.push({ sources: [pendingMarket], donation: null, market: pendingMarket });
        pendingMarket = r;
      }
    } else {
      items.push({ sources: [r], donation: null, market: null });
    }
  }
  if (pendingDonation) items.push({ sources: [pendingDonation], donation: pendingDonation, market: null });
  if (pendingMarket) items.push({ sources: [pendingMarket], donation: null, market: pendingMarket });
  return items;
}
