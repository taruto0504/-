const test = require("node:test");
const assert = require("node:assert");
const Anthropic = require("@anthropic-ai/sdk");
const { normalizeReport, buildUserMessage, evaluateReport, collectToolUrls, isAllowedDomain, EvaluationError, REVIEW_SCHEMA, MODEL, GUIDELINE_DOMAINS } = require("../evaluate");

const sample = () => ({ overall: { level: "fair", summary: "概ね良い" }, claims: [], evidence: { assessment: "a", issues: [] }, suggestions: [],
  references: [
    { title: "JRC蘇生ガイドライン2020", publisher: "日本蘇生協議会", url: "https://minds.jcqhc.or.jp/summary/c00634/#x", note: "n", confidence: "high" },
    { title: "でっちあげ", publisher: "", url: "https://minds.jcqhc.or.jp/made-up-page", note: "n", confidence: "low" },
    { title: "許可外サイト", publisher: "", url: "https://example.com/a", note: "n", confidence: "low" },
  ],
  search_keywords: ["心肺蘇生", "アドレナリン", "", "4つ目"], question_answer: "", privacy_warning: "" });

const RESEARCH_TEXT = "- JRC蘇生ガイドライン2020(日本蘇生協議会)\n  URL: https://minds.jcqhc.or.jp/summary/c00634/\n  要点: アドレナリン1mgを3-5分ごと";
const searchBlocks = [
  { type: "server_tool_use", id: "s1", name: "web_search", input: { query: "心肺蘇生 ガイドライン https://fake-from-query.example" } },
  { type: "web_search_tool_result", tool_use_id: "s1", content: [
    { type: "web_search_result", title: "JRC蘇生ガイドライン2020", url: "https://minds.jcqhc.or.jp/summary/c00634/", encrypted_content: "xx", page_age: null },
    { type: "web_search_result", title: "AHA", url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000000916", encrypted_content: "xx", page_age: null },
  ] },
];
// 呼び出し順に応答を返す偽クライアント
function mockClient(responses, calls = []) {
  return { beta: { messages: { create: async (params) => { calls.push(params); const r = responses.shift(); if (r instanceof Error) throw r; return typeof r === "function" ? r(params) : r; } } } };
}
const msg = (content, extra = {}) => ({ model: MODEL, stop_reason: "end_turn", content, usage: { input_tokens: 10, output_tokens: 20 }, ...extra });
const researchOk = () => msg([...searchBlocks, { type: "text", text: RESEARCH_TEXT, citations: [{ type: "web_search_result_location", url: "https://www.mhlw.go.jp/stf/x.html", title: "厚労省", cited_text: "c", encrypted_index: "e" }] }]);
const evalOk = () => msg([{ type: "thinking", thinking: "" }, { type: "text", text: JSON.stringify(sample()) }]);
const R = () => normalizeReport({ title: "CPA対応", body: "アドレナリン1mgを3-5分ごと" });

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
  const m = buildUserMessage(r, "看護師", null);
  assert.match(m, /<report>/); assert.match(m, /処置:NG/); assert.match(m, /<question>/); assert.doesNotMatch(m, /山田/);
});
test("1段階目:Minds などに限定した Web 検索でガイドラインを調べる", async () => {
  const calls = [];
  await evaluateReport(mockClient([researchOk(), evalOk()], calls), R(), { occupation: "医師" });
  assert.strictEqual(calls.length, 2);
  const [r1] = calls;
  assert.strictEqual(r1.model, "claude-opus-5-5");
  const ws = r1.tools.find((t) => t.type === "web_search_20260209");
  const wf = r1.tools.find((t) => t.type === "web_fetch_20260209");
  assert.ok(ws && wf);
  assert.ok(ws.allowed_domains.includes("minds.jcqhc.or.jp"));
  assert.deepStrictEqual(ws.allowed_domains, GUIDELINE_DOMAINS);
  assert.strictEqual(r1.output_config.format, undefined); // 調査段階は自由な文章
  assert.strictEqual(r1.fallbacks, "default");
});
test("2段階目:調査結果と見つかったURLを渡して JSON で評価", async () => {
  const calls = [];
  await evaluateReport(mockClient([researchOk(), evalOk()], calls), R());
  const r2 = calls[1];
  assert.strictEqual(r2.output_config.format.type, "json_schema");
  assert.strictEqual(r2.output_config.format.schema, REVIEW_SCHEMA);
  assert.strictEqual(r2.tools, undefined);
  const content = r2.messages[0].content;
  assert.match(content, /<guideline_research>/);
  assert.match(content, /https:\/\/minds\.jcqhc\.or\.jp\/summary\/c00634/);
  assert.match(content, /https:\/\/www\.mhlw\.go\.jp\/stf\/x\.html/); // 引用(citation)のURLも採用
  assert.doesNotMatch(content.split("<found_urls>")[1], /fake-from-query/); // AI が書いた検索語の中の URL は採用しない
});
test("参考資料の URL は検索で実在が確認できたものだけ残す", async () => {
  const res = await evaluateReport(mockClient([researchOk(), evalOk()]), R());
  const refs = res.review.references;
  assert.strictEqual(refs[0].verified, true);
  assert.strictEqual(refs[0].url, "https://minds.jcqhc.or.jp/summary/c00634"); // #以降と末尾/を正規化
  assert.strictEqual(refs[1].verified, false); assert.strictEqual(refs[1].url, ""); // 検索結果に無い
  assert.strictEqual(refs[2].verified, false); assert.strictEqual(refs[2].url, ""); // 許可外サイト
  assert.deepStrictEqual(res.review.search_keywords, ["心肺蘇生", "アドレナリン", "4つ目"]);
  assert.deepStrictEqual(res.review.guideline_search, { status: "ok", found_count: 3 });
  assert.deepStrictEqual(res.usage, { input_tokens: 20, output_tokens: 40 });
});
test("検索が pause_turn で止まったら続きから再開する", async () => {
  const calls = [];
  const paused = msg(searchBlocks.slice(0, 1), { stop_reason: "pause_turn" });
  await evaluateReport(mockClient([paused, researchOk(), evalOk()], calls), R());
  assert.strictEqual(calls.length, 3);
  assert.strictEqual(calls[1].messages.length, 2);
  assert.strictEqual(calls[1].messages[1].role, "assistant");
  assert.deepStrictEqual(calls[1].messages[1].content, paused.content);
});
test("Web 調査が失敗しても評価は続ける(知識のみ)", async () => {
  const calls = [];
  const res = await evaluateReport(mockClient([new Anthropic.APIConnectionError({ message: "x" }), evalOk()], calls), R());
  assert.strictEqual(res.review.guideline_search.status, "failed");
  assert.match(calls[1].messages[0].content, /status="unavailable"/);
  assert.ok(res.review.references.every((r) => r.url === "" && r.verified === false));
});
test("useWeb:false なら検索しない", async () => {
  const calls = [];
  const res = await evaluateReport(mockClient([evalOk()], calls), R(), { useWeb: false });
  assert.strictEqual(calls.length, 1);
  assert.strictEqual(res.review.guideline_search.status, "skipped");
});
test("評価段階の拒否・途中終了・壊れたJSONはエラー", async () => {
  await assert.rejects(evaluateReport(mockClient([msg([{ type: "text", text: "" }], { stop_reason: "refusal" })]), R(), { useWeb: false }), (e) => e.code === "failed-precondition");
  await assert.rejects(evaluateReport(mockClient([msg([{ type: "text", text: "{" }], { stop_reason: "max_tokens" })]), R(), { useWeb: false }), (e) => e.code === "unavailable");
  await assert.rejects(evaluateReport(mockClient([msg([{ type: "text", text: "not json" }])]), R(), { useWeb: false }), (e) => e.code === "unavailable");
});
test("API エラーを分かりやすいエラーに変換", async () => {
  const rate = new Anthropic.RateLimitError(429, { error: { message: "x" } }, "x", new Headers());
  await assert.rejects(evaluateReport(mockClient([rate]), R(), { useWeb: false }), (e) => e.code === "resource-exhausted");
  const auth = new Anthropic.AuthenticationError(401, { error: { message: "x" } }, "x", new Headers());
  await assert.rejects(evaluateReport(mockClient([auth]), R(), { useWeb: false }), (e) => e.code === "internal");
});
test("URL の収集と許可サイト判定", () => {
  const urls = collectToolUrls(searchBlocks, new Set());
  assert.ok(urls.has("https://minds.jcqhc.or.jp/summary/c00634"));
  assert.ok(![...urls].some((u) => u.includes("fake-from-query")));
  assert.ok(isAllowedDomain("https://www.mhlw.go.jp/a")); assert.ok(isAllowedDomain("https://minds.jcqhc.or.jp/"));
  assert.ok(!isAllowedDomain("https://evil-mhlw.go.jp.example.com/")); assert.ok(!isAllowedDomain("https://notmhlw.go.jp/"));
});
test("スキーマはすべてのオブジェクトで additionalProperties:false", () => {
  const walk = (s) => { if (s.type === "object") { assert.strictEqual(s.additionalProperties, false); assert.deepStrictEqual([...s.required].sort(), Object.keys(s.properties).sort()); Object.values(s.properties).forEach(walk); } if (s.type === "array") walk(s.items); };
  walk(REVIEW_SCHEMA);
});
