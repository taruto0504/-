const test = require("node:test");
const assert = require("node:assert");
const { PLANS, resolvePlan } = require("../plans");

const DAY = 86400000;
test("記録がなければ無料プラン", () => {
  assert.strictEqual(resolvePlan(null).id, "free");
  assert.strictEqual(resolvePlan({}).id, "free");
});
test("期限なしのプロプランは有効", () => {
  const p = resolvePlan({ plan: "pro" });
  assert.strictEqual(p.id, "pro"); assert.strictEqual(p.expiresAt, null); assert.strictEqual(p.aiDailyLimit, PLANS.pro.aiDailyLimit);
});
test("期限内のプロプランは有効、期限切れは無料に戻る", () => {
  const now = Date.now();
  assert.strictEqual(resolvePlan({ plan: "pro", expiresAt: { toMillis: () => now + DAY } }, now).id, "pro");
  const expired = resolvePlan({ plan: "pro", expiresAt: { toMillis: () => now - 1 } }, now);
  assert.strictEqual(expired.id, "free"); assert.strictEqual(expired.expired, true);
  assert.strictEqual(resolvePlan({ plan: "pro", expiresAt: new Date(now + DAY).toISOString() }, now).id, "pro");
});
test("不明なプラン名・壊れた期限は安全側(無料)に倒す", () => {
  assert.strictEqual(resolvePlan({ plan: "platinum" }).id, "free");
  assert.strictEqual(resolvePlan({ plan: "pro", expiresAt: "not a date" }).id, "free");
});
test("プラン定義に必要な項目がそろっている", () => {
  for (const p of Object.values(PLANS)) {
    for (const k of ["id", "label", "price", "aiDailyLimit", "maxAttachments", "maxRecipients", "showAds"]) assert.ok(k in p, `${p.id}.${k}`);
    assert.ok(p.maxAttachments <= 6, "Firestore/Storage ルールの上限(6枚)以内");
    assert.ok(p.maxRecipients <= 50, "Firestore ルールの上限(50名)以内");
  }
});
