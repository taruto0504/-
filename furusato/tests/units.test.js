// 単位換算・単価の例題集（答えは手計算）
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { parseQuantity } from "../js/units.js";
import { calculate } from "../js/calc.js";

const config = JSON.parse(readFileSync(new URL("../config/app-config.json", import.meta.url), "utf8"));

// [表記, 基準単位, 量, 約表示]
const cases = [
  ["300g×4パック", "g", 1200, false],
  ["国産豚 300g×4パック", "g", 1200, false],
  ["300g x 4パック", "g", 1200, false],
  ["300g*4", "g", 1200, false],
  ["500ml×24本", "ml", 12000, false],
  ["2kg×3回（定期便）", "g", 6000, false],
  ["1.2kg", "g", 1200, false],
  ["１．２ｋｇ", "g", 1200, false],
  ["1,000g", "g", 1000, false],
  ["250mg", "g", 0.25, false],
  ["0.5t", "g", 500000, false],
  ["約1kg", "g", 1000, true],
  ["1.5kg前後", "g", 1500, true],
  ["1〜1.5kg", "g", 1000, true],
  ["２キロ", "g", 2000, false],
  ["500グラム", "g", 500, false],
  ["2キログラム", "g", 2000, false],
  ["1斤", "g", 600, false],
  ["1貫", "g", 3750, false],
  ["3合", "g", 450, false],
  ["1升", "ml", 1800, false],
  ["1リットル", "ml", 1000, false],
  ["1.8L", "ml", 1800, false],
  ["720mL", "ml", 720, false],
  ["350cc", "ml", 350, false],
  ["2dl", "ml", 200, false],
  ["500ml×24本", "ml", 12000, false],
  ["12個入り", "個", 12, false],
  ["10本", "本", 10, false],
  ["20枚", "枚", 20, false],
  ["2尾", "尾", 2, false],
  ["3匹", "匹", 3, false],
  ["5玉", "玉", 5, false],
  ["10杯", "杯", 10, false],
  ["1羽", "羽", 1, false],
  ["2房", "房", 2, false],
  ["4パック", "パック", 4, false],
  ["3袋入", "袋", 3, false],
  ["2箱", "箱", 2, false],
  ["24缶", "缶", 24, false],
  ["6瓶", "瓶", 6, false],
  ["1セット", "セット", 1, false],
  ["1ケース", "ケース", 1, false],
  ["5人前", "人前", 5, false],
  ["10食", "人前", 10, false],
  ["6回", "回", 6, false],
  ["6か月", "か月", 6, false],
  ["6ヶ月", "か月", 6, false],
  ["30cm", "cm", 30, false],
  ["2m", "cm", 200, false],
  ["6畳", "畳", 6, false],
  ["10000円分", "円分", 10000, false],
  ["1泊", "泊", 1, false],
  ["4パック（各300g）", "g", 1200, false],
  ["1.2kg(300g×4パック)", "g", 1200, false],
  ["300g+200g", "g", 500, false],
  ["1kg×2袋", "g", 2000, false],
  ["200g×3パック×2回", "g", 1200, false],
];

for (const [text, base, amount, approx] of cases) {
  test(`内容量「${text}」→ ${amount}${base}`, () => {
    const q = parseQuantity(text, config);
    assert.equal(q.ok, true, q.message);
    assert.equal(q.base, base);
    assert.equal(q.amount, amount);
    assert.equal(q.approx, approx);
  });
}

test("定期便の回数を表記から拾う", () => {
  assert.equal(parseQuantity("2kg×3回", config).deliveries, 3);
  assert.equal(parseQuantity("2kg", config).deliveries, null);
});

test("換算の途中式が残る", () => {
  const q = parseQuantity("300g×4パック", config);
  assert.deepEqual(q.steps, ["300g × 4 ＝ 1,200g"]);
  assert.ok(parseQuantity("1.2kg", config).steps[0].startsWith("1.2kg → 1,200g"));
  assert.ok(parseQuantity("3合", config).notes.includes("米1合＝150gで換算"));
});

test("分からない単位・混ざった単位・数字なしはエラー", () => {
  assert.equal(parseQuantity("3ダース", config).reason, "unknown-unit");
  assert.equal(parseQuantity("3ダース", config).unknownUnit, "ダース");
  assert.equal(parseQuantity("300", config).reason, "no-unit");
  assert.equal(parseQuantity("300g+2個", config).reason, "mixed");
  assert.equal(parseQuantity("たくさん", config).ok, false);
  assert.equal(parseQuantity("0g", config).ok, false);
});

test("単価：1.2kgを12,000円、寄附30,000円", () => {
  const r = calculate({ donation: 30000, market: 12000, quantity: "1.2kg" }, config);
  assert.equal(r.ok, true);
  assert.deepEqual(r.unit.prices.map((p) => [p.label, p.yen]), [["100g", 1000], ["1kg", 10000]]);
  assert.equal(r.unit.per10k, 400); // 1,200g ÷ 30,000円 × 10,000
});

test("単価：500ml×24本を3,980円、寄附12,000円", () => {
  const r = calculate({ donation: 12000, market: 3980, quantity: "500ml×24本" }, config);
  // 3,980 ÷ 12,000ml × 100 = 33.166… → 33.2円、× 1000 = 331.666… → 331.7円
  assert.deepEqual(r.unit.prices.map((p) => p.yen), [33.2, 331.7]);
  assert.equal(r.unit.per10k, 10000); // 12,000ml ÷ 12,000円 × 10,000
});

test("単価：個数は1個あたり", () => {
  const r = calculate({ donation: 10000, market: 3600, quantity: "12個入り" }, config);
  assert.deepEqual(r.unit.prices.map((p) => [p.label, p.yen]), [["1個", 300]]);
  assert.equal(r.unit.per10k, 12);
});

test("単価：定期便は1回分の内容量を全回分にする", () => {
  const r = calculate({ donation: 30000, market: 4000, times: 3, quantity: "2kg" }, config);
  assert.equal(r.unit.amount, 6000);
  assert.equal(r.unit.prices[0].yen, 200); // 12,000 ÷ 6,000g × 100
  assert.equal(r.unit.per10k, 2000);
});

test("単価：表記に回数があれば全回分としてそのまま使う", () => {
  const r = calculate({ donation: 30000, market: 4000, times: 3, quantity: "2kg×3回", confirmed: true }, config);
  assert.equal(r.unit.amount, 6000);
});

test("表記の回数と定期便の回数が違えば確認を出す", () => {
  const r = calculate({ donation: 30000, market: 4000, times: 2, quantity: "2kg×3回" }, config);
  assert.equal(r.needsConfirm, true);
});

test("量が多い・約の注意が付く", () => {
  const r = calculate({ donation: 30000, market: 12000, quantity: "約5kg" }, config);
  assert.ok(r.notes.includes(config.notes.bulk));
  assert.ok(r.notes.includes(config.notes.approx));
  assert.equal(r.unit.display, "約5kg");
});

test("履歴に残す内容量は、読み直すと同じ結果になる", async () => {
  const { quantityRecord } = await import("../js/calc.js");
  const inputs = [
    { donation: 30000, market: 12000, quantity: "牛肉 1.2kg" },
    { donation: 30000, market: 12000, quantity: "300g×4パック" },
    { donation: 30000, market: 4000, times: 3, quantity: "2kg" },
    { donation: 30000, market: 4000, times: 3, quantity: "2kg×3回" },
    { donation: 30000, market: 12000, times: 3, marketPer: "total", quantity: "約6kg" },
    { donation: 10000, market: 3600, quantity: "12個入り" },
    { donation: 10000, market: 3000, quantity: "250mg" },
  ];
  for (const input of inputs) {
    const r = calculate({ ...input, confirmed: true }, config);
    assert.equal(r.ok, true, input.quantity);
    const again = calculate({ ...input, quantity: quantityRecord(r.unit), confirmed: true }, config);
    assert.equal(again.unit.amount, r.unit.amount, input.quantity);
    assert.equal(again.unit.approx, r.unit.approx, input.quantity);
    assert.doesNotMatch(quantityRecord(r.unit), /牛肉/);
  }
});
