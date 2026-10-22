// 計算の例題集。答えは手計算で出したもの。設定ファイルを変えた時も、このテストに通ってから配信する。
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { calculate, gradeFor, parseYen, validateConfig } from "../js/calc.js";

const config = JSON.parse(readFileSync(new URL("../config/app-config.json", import.meta.url), "utf8"));

function rate(input) {
  const r = calculate({ confirmed: true, ...input }, config);
  assert.equal(r.ok, true, JSON.stringify(r.errors));
  return r;
}

test("設定ファイルが正しい形をしている", () => {
  assert.deepEqual(validateConfig(config), []);
});

// [寄附額, 市場価格, 還元率, 判定, 標準との差]
const basicCases = [
  [30000, 12000, "40.0", "high", "+10.0"],
  [30000, 9000, "30.0", "upper", "±0.0"],
  [30000, 6000, "20.0", "standard", "−10.0"],
  [30000, 5000, "16.7", "modest", "−13.3"], // 16.666… → 16.7
  [10000, 3333, "33.3", "upper", "+3.3"],
  [10000, 3335, "33.4", "upper", "+3.4"], // 33.35 → 四捨五入で 33.4
  [1000, 300, "30.0", "upper", "±0.0"],
  [100000000, 30000000, "30.0", "upper", "±0.0"],
  [15000, 4500, "30.0", "upper", "±0.0"],
  [12000, 5000, "41.7", "high", "+11.7"], // 41.666…
];

for (const [donation, market, text, grade, diff] of basicCases) {
  test(`還元率 ${market}円 ÷ ${donation}円 = ${text}%`, () => {
    const r = rate({ donation: String(donation), market: String(market) });
    assert.equal(r.rateText, text);
    assert.equal(r.grade.id, grade);
    assert.equal(r.diffText, diff);
  });
}

test("境目：判定は表示と同じ丸めた値で決まる（以上は上の段）", () => {
  // 11,999 ÷ 30,000 = 39.996…% → 表示 40.0% → 「高め」
  assert.equal(rate({ donation: 30000, market: 11999 }).rateText, "40.0");
  assert.equal(rate({ donation: 30000, market: 11999 }).grade.id, "high");
  // 11,984 ÷ 30,000 = 39.946…% → 39.9% → 「やや高め」
  assert.equal(rate({ donation: 30000, market: 11984 }).rateText, "39.9");
  assert.equal(rate({ donation: 30000, market: 11984 }).grade.id, "upper");
  // 8,985 ÷ 30,000 = 29.95% → 30.0%（半分は切り上げ）
  assert.equal(rate({ donation: 30000, market: 8985 }).rateText, "30.0");
  assert.equal(rate({ donation: 30000, market: 8985 }).grade.id, "upper");
  // 8,984 ÷ 30,000 = 29.946…% → 29.9% → 「標準的」
  assert.equal(rate({ donation: 30000, market: 8984 }).grade.id, "standard");
  // 5,999 ÷ 30,000 = 19.996…% → 20.0% → 「標準的」
  assert.equal(rate({ donation: 30000, market: 5999 }).grade.id, "standard");
  assert.equal(rate({ donation: 30000, market: 5984 }).grade.id, "modest");
});

test("途中式が表示用に必ず作られる", () => {
  const r = rate({ donation: "30,000", market: "12,000" });
  assert.ok(r.formulas.includes("市場価格 12,000円 ÷ 寄附額 30,000円 × 100 ＝ 40.0%"));
  assert.match(r.verification, /^検算：寄附額 30,000円 × 40.0% ÷ 100 ≒ 12,000円/);
});

test("送料を足す", () => {
  const r = rate({ donation: 30000, market: 10000, shipping: 1000 });
  assert.equal(r.marketTotal, 11000);
  assert.equal(r.rateText, "36.7"); // 36.666…
  assert.ok(r.formulas.includes("市場価格 10,000円 ＋ 送料 1,000円 ＝ 11,000円"));
  assert.ok(r.notes.includes(config.notes.shipping));
});

test("定期便：市場価格が1回分", () => {
  const r = rate({ donation: 30000, market: 4000, times: 3 });
  assert.equal(r.marketTotal, 12000);
  assert.equal(r.rateText, "40.0");
  assert.deepEqual(r.perTime, { donation: 10000, market: 4000 });
  assert.ok(r.formulas.includes("1回分 4,000円 × 3回 ＝ 12,000円"));
});

test("定期便：市場価格が全回分", () => {
  const r = rate({ donation: 30000, market: 12000, times: 3, marketPer: "total" });
  assert.equal(r.marketTotal, 12000);
  assert.deepEqual(r.perTime, { donation: 10000, market: 4000 });
});

test("定期便＋送料（1回分ずつ）", () => {
  const r = rate({ donation: 50000, market: 3500, shipping: 800, times: 4 });
  assert.equal(r.marketTotal, 17200); // (3,500 + 800) × 4
  assert.equal(r.rateText, "34.4");
  assert.deepEqual(r.perTime, { donation: 12500, market: 4300 });
});

test("1回あたりは四捨五入（10,000円 ÷ 3回 ≒ 3,333円）", () => {
  const r = rate({ donation: 10000, market: 1000, times: 3, marketPer: "total" });
  assert.deepEqual(r.perTime, { donation: 3333, market: 333 });
});

test("自己負担2,000円を差し引いた差額", () => {
  const r = rate({ donation: 30000, market: 12000 });
  assert.equal(r.selfBurden.net, 10000);
});

test("全角・カンマ・円記号つきの入力", () => {
  const r = rate({ donation: "３０，０００円", market: "¥12,000" });
  assert.equal(r.rateText, "40.0");
});

test("入力の確認：空・0・マイナス・小数・文字はエラー", () => {
  const bad = [
    [{ donation: "", market: "1000" }, "donation"],
    [{ donation: "0", market: "1000" }, "donation"],
    [{ donation: "30000", market: "0" }, "market"],
    [{ donation: "-30000", market: "1000" }, "donation"],
    [{ donation: "30000.5", market: "1000" }, "donation"],
    [{ donation: "3万", market: "1000" }, "donation"],
    [{ donation: "30000", market: "1000", shipping: "abc" }, "shipping"],
    [{ donation: "30000", market: "1000", times: "0" }, "times"],
    [{ donation: "30000", market: "1000", times: "2.5" }, "times"],
    [{ donation: "200000000", market: "1000" }, "donation"],
  ];
  for (const [input, field] of bad) {
    const r = calculate(input, config);
    assert.equal(r.ok, false, JSON.stringify(input));
    assert.equal(r.errors[0].field, field, JSON.stringify(input));
  }
});

test("桁違いの疑い：確認されるまで結果を出さない", () => {
  const cases = [
    { donation: "999", market: "300" }, // 寄附額1,000円未満
    { donation: "30000", market: "50000" }, // 還元率100%超
    { donation: "30000", market: "120" }, // 還元率3%未満（桁の打ち間違い）
  ];
  for (const input of cases) {
    const r = calculate(input, config);
    assert.equal(r.ok, false);
    assert.equal(r.needsConfirm, true);
    assert.ok(r.warnings[0].message.includes("この金額で合っていますか"));
    assert.equal(calculate({ ...input, confirmed: true }, config).ok, true);
  }
  assert.equal(rate({ donation: 30000, market: 50000 }).rateText, "166.7");
  assert.equal(calculate({ donation: "1000", market: "300" }, config).ok, true); // 1,000円ちょうどは警告しない
});

test("極端に小さい・大きい金額", () => {
  assert.equal(rate({ donation: 2000, market: 1 }).rateText, "0.1"); // 0.05% → 0.1%
  assert.equal(rate({ donation: 3000, market: 1 }).rateText, "0.0"); // 0.033…%
  assert.equal(rate({ donation: 99999999, market: 99999999 }).rateText, "100.0");
  assert.equal(rate({ donation: 100000000, market: 33333333 }).rateText, "33.3");
});

test("parseYen", () => {
  assert.deepEqual(parseYen("1,234"), { ok: true, value: 1234 });
  assert.deepEqual(parseYen(" ￥１，２３４ "), { ok: true, value: 1234 });
  assert.equal(parseYen("12.5").ok, false);
});

test("しきい値を設定ファイルで変えても判定が追従する", () => {
  const custom = structuredClone(config);
  custom.grades[0].min = 45;
  assert.equal(gradeFor(440, custom).id, "upper");
  assert.equal(gradeFor(450, custom).id, "high");
  custom.standardRate = 25;
  const r = calculate({ donation: 30000, market: 9000 }, custom);
  assert.equal(r.diffText, "+5.0");
});

test("壊れた設定は検出する", () => {
  const broken = structuredClone(config);
  broken.grades[1].min = 50; // 上の段より大きい
  broken.units[0].factor = 0;
  broken.sites[0].url = "http://example.com";
  const problems = validateConfig(broken);
  assert.ok(problems.some((p) => p.startsWith("grades")));
  assert.ok(problems.some((p) => p.startsWith("units")));
  assert.ok(problems.some((p) => p.startsWith("sites")));
});
