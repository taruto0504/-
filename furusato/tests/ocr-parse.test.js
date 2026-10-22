// 読み取った文字から数字を拾う処理のテスト（OCRそのものは端末で動くので、ここでは結果の解釈だけを確かめる）
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { extractNumbers, fixDigits, combineImages } from "../js/ocr-parse.js";

const config = JSON.parse(readFileSync(new URL("../config/app-config.json", import.meta.url), "utf8"));

// 1行 = 単語の並び。位置は行番号から適当に作る
function lines(...texts) {
  return texts.map((t, i) => ({
    text: t,
    words: t.split(" ").map((w, j) => ({ text: w, confidence: 90, bbox: { x0: j * 50, y0: i * 30, x1: j * 50 + 45, y1: i * 30 + 25 } })),
  }));
}

test("ふるさと納税サイトの画面：寄附額・内容量・回数", () => {
  const r = extractNumbers(lines("【定期便】 お米 5kg×全3回", "寄附金額 30,000円", "送料無料"), config);
  assert.deepEqual(r.donationCandidates.map((a) => a.value), [30000]);
  assert.equal(r.marketCandidates.length, 0);
  assert.equal(r.quantity.parsed.amount, 5000);
  assert.equal(r.deliveries, 3);
  assert.ok(r.shippingFree);
  assert.ok(r.donationCandidates[0].bbox);
});

test("通販サイトの画面：価格と送料", () => {
  const r = extractNumbers(lines("国産 豚肉 300g×4パック", "価格 ¥3,980 (税込)", "送料 800円", "獲得ポイント 39pt"), config);
  assert.deepEqual(r.marketCandidates.map((a) => a.value), [3980]);
  assert.deepEqual(r.shippingCandidates.map((a) => a.value), [800]);
  assert.equal(r.quantity.parsed.amount, 1200);
  assert.equal(r.donationCandidates.length, 0);
});

test("見出しのない金額は価格の候補", () => {
  const r = extractNumbers(lines("いくら 500g", "2,480円"), config);
  assert.deepEqual(r.marketCandidates.map((a) => a.value), [2480]);
});

test("容量違いのプラン：寄附額の候補が複数", () => {
  const r = extractNumbers(lines("寄附金額", "10,000円 1kg", "18,000円 2kg"), config);
  assert.deepEqual(r.donationCandidates.map((a) => a.value), [10000, 18000]);
});

test("ポイントや割引の金額は使わない", () => {
  const r = extractNumbers(lines("価格 5,000円", "クーポン 500円 OFF"), config);
  assert.deepEqual(r.marketCandidates.map((a) => a.value), [5000]);
  assert.equal(r.amounts.find((a) => a.value === 500).role, "ignore");
});

test("利用券（円分）", () => {
  const r = extractNumbers(lines("旅行クーポン 30,000円分"), config);
  assert.equal(r.amounts[0].role, "voucher");
  assert.equal(r.quantity.parsed.base, "円分");
});

test("読み間違いやすい文字を直して確認マークを付ける", () => {
  assert.deepEqual(fixDigits("1O,OOO円"), { text: "10,000円", fixed: true });
  assert.deepEqual(fixDigits("Sale"), { text: "Sale", fixed: false });
  const r = extractNumbers(lines("寄附金額 1O,OOO円"), config);
  assert.equal(r.donationCandidates[0].value, 10000);
  assert.equal(r.donationCandidates[0].flagged, true);
});

test("g を 9 と読んだ疑い・x 表記に確認マーク", () => {
  const r = extractNumbers(lines("豚肉 3009×4パック", "鶏肉 300g x 4パック"), config);
  const q = r.quantities.find((x) => x.line === 1);
  assert.ok(q.reasons.some((s) => s.includes("x")));
  // 「3009×4パック」は 3009パックと読めてしまう → 300g×4パックに読み替えて確認を促す
  const g9 = r.quantities[0];
  assert.equal(g9.text, "300g×4パック");
  assert.equal(g9.parsed.amount, 1200);
  assert.equal(g9.flagged, true);
  assert.ok(g9.reasons.some((s) => s.includes("「9」")));
});

test("確かさの低い読み取りに確認マーク", () => {
  const l = lines("価格 1,280円");
  l[0].words[1].confidence = 40;
  const r = extractNumbers(l, config);
  assert.equal(r.marketCandidates[0].flagged, true);
});

test("2枚の画像（寄附額だけ・価格だけ）を1件にまとめる", () => {
  const a = extractNumbers(lines("寄附金額 30,000円"), config);
  const b = extractNumbers(lines("価格 12,000円"), config);
  const c = extractNumbers(lines("寄附金額 20,000円 価格 7,000円"), config);
  const items = combineImages([a, b, c]);
  assert.equal(items.length, 2);
  assert.equal(items[0].donation, a);
  assert.equal(items[0].market, b);
  assert.equal(items[1].donation, c);
});

test("実際のOCRで出た読み違い：「30,000円」→「30,000F」、「300g」→「3009」", () => {
  const r = extractNumbers(lines("【定期便】国産豚肉 3009x4パック", "全3回", "寄附金額", "30,000F", "ERHERL - RA MMISRL"), config);
  assert.deepEqual(r.donationCandidates.map((a) => a.value), [30000]);
  assert.equal(r.donationCandidates[0].flagged, true);
  assert.equal(r.quantity.parsed.amount, 1200);
  assert.equal(r.deliveries, 3);
});

test("カンマなしの数字や単位つきの数字は金額にしない", () => {
  const r = extractNumbers(lines("寄附金額", "1,200g 2023年"), config);
  assert.equal(r.donationCandidates.length, 0);
});

test("「34pt」のようなポイント表記は内容量にしない", () => {
  const r = extractNumbers(lines("獲得ポイント 34pt", "2パック"), config);
  assert.deepEqual(r.quantities.map((q) => q.text), ["2パック"]);
});
