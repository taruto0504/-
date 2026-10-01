const test = require("node:test");
const assert = require("node:assert");
const Anthropic = require("@anthropic-ai/sdk");
const { normalizeReport, buildUserMessage, evaluateReport, EvaluationError, REVIEW_SCHEMA, MODEL } = require("../evaluate");

const sample = { overall: { level: "fair", summary: "概ね良い" }, claims: [], evidence: { assessment: "a", issues: [] }, suggestions: [], references: [], question_answer: "", privacy_warning: "" };
function mockClient(response, capture = {}) {
  return { beta: { messages: { create: async (params) => { capture.params = params; if (response instanceof Error) throw response; return response; } } } };
}
const ok = (text, extra = {}) => ({ model: MODEL, stop_reason: "end_turn", content: [{ type: "thinking", thinking: "" }, { type: "text", text }], usage: { input_tokens: 10, output_tokens: 20 }, ...extra });

test("タイトルと本文が無いと評価しない", () => {
  assert.throws(() => normalizeReport({ title: "", body: "x" }), EvaluationError);
  assert.throws(() => normalizeReport({ title: "t", body: "  " }), EvaluationError);
});
test("長すぎる本文・不正な型は拒否", () => {
  assert.throws(() => normalizeReport({ title: "t", body: "a".repeat(20001) }), /長すぎ/);
  assert.throws(() => normalizeReport({ title: "t", body: { x: 1 } }), EvaluationError);
});
test("評価に使う項目だけに絞る(作成者情報などは送らない)", () => {
  const r = normalizeReport({ title: "t", body: "b", question: "q", fields: [{ name: "処置", value: "NG" }, { name: "", value: "" }], authorName: "山田", recipients: { a: 1 } });
  assert.deepStrictEqual(r, { title: "t", body: "b", question: "q", fields: [{ name: "処置", value: "NG" }] });
  const msg = buildUserMessage(r, "看護師");
  assert.match(msg, /<report>/); assert.match(msg, /処置:NG/); assert.match(msg, /<question>/); assert.doesNotMatch(msg, /山田/);
});
test("正しいパラメータで Claude を呼び、JSON を読み取る", async () => {
  const cap = {};
  const res = await evaluateReport(mockClient(ok(JSON.stringify(sample)), cap), normalizeReport({ title: "t", body: "b" }), { occupation: "医師" });
  assert.deepStrictEqual(res.review, sample);
  assert.strictEqual(cap.params.model, "claude-opus-5-5");
  assert.deepStrictEqual(cap.params.thinking, { type: "adaptive" });
  assert.strictEqual(cap.params.output_config.format.type, "json_schema");
  assert.strictEqual(cap.params.output_config.format.schema, REVIEW_SCHEMA);
  assert.strictEqual(cap.params.fallbacks, "default");
  assert.deepStrictEqual(cap.params.betas, ["server-side-fallback-2026-07-01"]);
});
test("フォールバックが起きた場合は最後のテキストを使う", async () => {
  const res = await evaluateReport(mockClient({ ...ok(JSON.stringify(sample)), content: [{ type: "text", text: "{broken" }, { type: "fallback" }, { type: "text", text: JSON.stringify(sample) }] }), normalizeReport({ title: "t", body: "b" }));
  assert.strictEqual(res.review.overall.level, "fair");
});
test("拒否・途中終了・壊れたJSONはエラー", async () => {
  const r = normalizeReport({ title: "t", body: "b" });
  await assert.rejects(evaluateReport(mockClient(ok("", { stop_reason: "refusal" })), r), (e) => e.code === "failed-precondition");
  await assert.rejects(evaluateReport(mockClient(ok("{", { stop_reason: "max_tokens" })), r), (e) => e.code === "unavailable");
  await assert.rejects(evaluateReport(mockClient(ok("not json")), r), (e) => e.code === "unavailable");
});
test("API エラーを分かりやすいエラーに変換", async () => {
  const r = normalizeReport({ title: "t", body: "b" });
  const rate = new Anthropic.RateLimitError(429, { error: { message: "x" } }, "x", new Headers());
  await assert.rejects(evaluateReport(mockClient(rate), r), (e) => e.code === "resource-exhausted");
  const auth = new Anthropic.AuthenticationError(401, { error: { message: "x" } }, "x", new Headers());
  await assert.rejects(evaluateReport(mockClient(auth), r), (e) => e.code === "internal");
});
test("スキーマはすべてのオブジェクトで additionalProperties:false", () => {
  const walk = (s) => { if (s.type === "object") { assert.strictEqual(s.additionalProperties, false); assert.deepStrictEqual([...s.required].sort(), Object.keys(s.properties).sort()); Object.values(s.properties).forEach(walk); } if (s.type === "array") walk(s.items); };
  walk(REVIEW_SCHEMA);
});
