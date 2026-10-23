// 市場価格が見つからない時の「推定」と「逆算」の例題集（答えは手計算）
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { calculate, reverseCalculate, quantityRecord } from "../js/calc.js";

const config = JSON.parse(readFileSync(new URL("../config/app-config.json", import.meta.url), "utf8"));

test("推定：100gあたり250円 × 1.2kg ＝ 3,000円 → 還元率10.0%", () => {
  const r = calculate({ donation: "30000", estimate: { price: "250", per: "100g" }, quantity: "1.2kg", confirmed: true }, config);
  assert.equal(r.ok, true);
  assert.equal(r.estimated.market, 3000);
  assert.equal(r.marketTotal, 3000);
  assert.equal(r.rateText, "10.0");
  assert.ok(r.formulas[0].startsWith("似た商品の単価 250円（100gあたり）× 1,200g ÷ 100g ≒ 3,000円"));
  assert.equal(r.notes[0], config.notes.estimated);
});

test("推定：単価の量は kg・個 など何でもよい（同じ種類なら換算）", () => {
  // 米 5kg で 2,500円 → 返礼品 15kg は 7,500円 → 寄附 20,000円で 37.5%
  const rice = calculate({ donation: "20000", estimate: { price: "2,500", per: "5kg" }, quantity: "15kg" }, config);
  assert.equal(rice.estimated.market, 7500);
  assert.equal(rice.rateText, "37.5");
  // 1個 150円 × 12個入り = 1,800円 → 寄附 5,000円で 36.0%
  const egg = calculate({ donation: "5000", estimate: { price: "150", per: "1個" }, quantity: "12個入り" }, config);
  assert.equal(egg.estimated.market, 1800);
  assert.equal(egg.rateText, "36.0");
});

test("推定：単価の量を空欄にすると100gあたり", () => {
  const r = calculate({ donation: "30000", estimate: { price: "300", per: "" }, quantity: "1kg" }, config);
  assert.equal(r.estimated.market, 3000);
});

test("推定：端数は四捨五入（198円/100g × 333g ＝ 659.34円 → 659円）", () => {
  const r = calculate({ donation: "3000", estimate: { price: "198", per: "100g" }, quantity: "333g" }, config);
  assert.equal(r.estimated.market, 659);
});

test("推定：定期便は1回分の量から1回分の価格を出して回数を掛ける", () => {
  // 100gあたり200円 × 2kg = 4,000円（1回分）× 3回 = 12,000円 → 40.0%
  const r = calculate({ donation: "30000", estimate: { price: "200", per: "100g" }, quantity: "2kg", times: 3 }, config);
  assert.equal(r.estimated.market, 4000);
  assert.equal(r.marketTotal, 12000);
  assert.equal(r.rateText, "40.0");
  // 内容量に回数が書いてあれば全回分の量として扱う
  const r2 = calculate({ donation: "30000", estimate: { price: "200", per: "100g" }, quantity: "2kg×3回", times: 3 }, config);
  assert.equal(r2.estimated.market, 12000);
  assert.equal(r2.marketTotal, 12000);
});

test("推定：内容量がない・単位の種類が違う・価格が不正ならエラー", () => {
  const noQty = calculate({ donation: "30000", estimate: { price: "200", per: "100g" } }, config);
  assert.equal(noQty.errors[0].field, "quantity");
  const mixed = calculate({ donation: "30000", estimate: { price: "200", per: "100g" }, quantity: "12個" }, config);
  assert.equal(mixed.errors[0].field, "estimate");
  const bad = calculate({ donation: "30000", estimate: { price: "abc", per: "100g" }, quantity: "1kg" }, config);
  assert.equal(bad.errors[0].field, "estimate");
});

test("推定：桁違いの確認は推定の価格欄に出る", () => {
  const r = calculate({ donation: "30000", estimate: { price: "5000", per: "100g" }, quantity: "1kg" }, config);
  assert.equal(r.needsConfirm, true);
  assert.equal(r.warnings[0].field, "estimate");
});

test("推定：履歴から読み直すと同じ結果になる", () => {
  const r = calculate({ donation: "30000", estimate: { price: "198", per: "100g" }, quantity: "300g×4パック", confirmed: true }, config);
  const again = calculate({ donation: r.donation, estimate: r.estimated.input, times: r.times, marketPer: r.perDelivery ? "delivery" : "total", quantity: quantityRecord(r.unit), confirmed: true }, config);
  assert.equal(again.rateText, r.rateText);
  assert.equal(again.estimated.market, r.estimated.market);
});

test("逆算：寄附額 30,000円・1.2kg", () => {
  const r = reverseCalculate({ donation: "30000", quantity: "1.2kg" }, config);
  assert.equal(r.ok, true);
  assert.deepEqual(r.rows.map((x) => [x.min, x.market, x.unitPrices[0].yen, x.unitPrices[1].yen]), [
    [40, 12000, 1000, 10000],
    [30, 9000, 750, 7500],
    [20, 6000, 500, 5000],
  ]);
  assert.equal(r.rows.find((x) => x.standard).min, 30);
});

test("逆算：内容量なしでも金額は出る", () => {
  const r = reverseCalculate({ donation: "10000" }, config);
  assert.deepEqual(r.rows.map((x) => x.market), [4000, 3000, 2000]);
  assert.equal(r.unit, null);
});

test("逆算：割り切れない時は切り上げ（この価格以上なら必ずその還元率以上）", () => {
  // 12,345 × 40 ÷ 100 = 4,938円、× 30 ÷ 100 = 3,703.5 → 3,704円、× 20 ÷ 100 = 2,469円
  const r = reverseCalculate({ donation: "12345" }, config);
  assert.deepEqual(r.rows.map((x) => x.market), [4938, 3704, 2469]);
  for (const row of r.rows) {
    const at = calculate({ donation: "12345", market: String(row.market), confirmed: true }, config);
    const below = calculate({ donation: "12345", market: String(row.market - 1), confirmed: true }, config);
    assert.ok((at.marketTotal / 12345) * 100 >= row.min);
    assert.ok((below.marketTotal / 12345) * 100 < row.min);
  }
  // 単価も切り上げ：3,704円 ÷ 7個 = 529.14… → 529.2円
  const u = reverseCalculate({ donation: "12345", quantity: "7個" }, config);
  assert.equal(u.rows[1].unitPrices[0].yen, 529.2);
});

test("逆算：定期便は1回あたりも出す・内容量は全回分にそろえる", () => {
  const r = reverseCalculate({ donation: "30000", times: 3, quantity: "2kg" }, config);
  assert.equal(r.unit.amount, 6000);
  assert.deepEqual(r.rows.map((x) => x.perTime), [4000, 3000, 2000]);
  assert.equal(r.rows[0].unitPrices[0].yen, 200); // 12,000円 ÷ 6,000g × 100
});

test("逆算：しきい値を変えても追従し、標準還元率の行は必ずある", () => {
  const custom = structuredClone(config);
  custom.standardRate = 25;
  const r = reverseCalculate({ donation: "10000" }, custom);
  assert.deepEqual(r.rows.map((x) => x.min), [40, 30, 25, 20]);
  assert.equal(r.rows.find((x) => x.standard).market, 2500);
});

test("逆算：入力の確認", () => {
  assert.equal(reverseCalculate({ donation: "" }, config).errors[0].field, "donation");
  assert.equal(reverseCalculate({ donation: "30000", quantity: "3ダース" }, config).errors[0].field, "quantity");
  assert.equal(reverseCalculate({ donation: "500" }, config).needsConfirm, true);
});
