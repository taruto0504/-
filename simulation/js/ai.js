// AI評価（整合性チェック＋解説・フィードバック）。
// 利用者自身の Claude API キーを使い、ブラウザから直接 Claude API を呼び出す。キーはこの端末にだけ保存される。

import { SECTIONS, ALL_FIELDS, formatValue, gcsTotal, isVitalsEmpty } from "./fields.js";
import { PREVIEW } from "./env.js";
import { selectGuidelines, guidelinesToPrompt, linkReference } from "./guidelines.js";

const KEY_STORAGE = "medsim:anthropic-key";
const SDK_URL = "https://cdn.jsdelivr.net/npm/@anthropic-ai/sdk/+esm";

export const AI_DISCLAIMER = "教育用の参考です。実際の臨床判断には使用しないでください。";

const SYSTEM_PROMPT = `あなたは救急・急変対応のシミュレーション教育を担当する指導者です。
医療従事者や学生が作成した教育用の架空症例シナリオを読み、次の2つを行ってください。

1. 整合性チェック：入力内容の矛盾や不自然な点を探す。
   - 入力の矛盾（例：酸素投与「なし」なのに投与量がある）
   - 数値の不自然さ（例：拡張期血圧が収縮期以上、SpO2が100%超）
   - 意識レベルの食い違い（例：JCS 300 なのに GCS 15）
   - 病態との整合（疾患名・主訴とバイタルサインの傾向が合っているか）
   - 急変前後の変化（バイタルサイン1から2への変化が急変シナリオとして自然か）
   指摘ごとに、該当する項目のキー（field）と、なぜ不自然なのかの理由を書く。該当項目が特定できない場合は field に "general" を使う。問題がなければ issues は空配列にする。
2. 解説・フィードバック：病態、各バイタルサインの意味（基準値との比較）、考えられる処置の優先順位とその理由、急変の意味と見逃してはいけないサイン、学習ポイント、理解を確かめる確認問題、次に学ぶとよいテーマ、根拠となるガイドラインや教科書の名称を示す。
3. ガイドラインとの照合：添付した国内の診療ガイドラインの要点に照らして、シナリオの処置・対応が推奨に沿っているか、足りない対応や推奨と異なる点はないかを、どのガイドラインの推奨かを明記して説明する（guidelineBasis）。推奨と異なる処置は、整合性チェックの指摘にも含める。

注意：
- 未入力の項目は評価の対象外とし、入力済みの内容だけで判断する（作成途中のこともある）。
- 根拠を必ず示す。添付したガイドラインの要点を最優先の根拠とし、参考資料（references）にはその正式名称をそのまま書く。それ以外は実在が確かなガイドライン・教科書の名称のみを挙げる。
- 薬剤の用量や時間の目標値は、ガイドラインの要点にあるものだけを書く。
- 日本語で、医療従事者向けに簡潔に書く。これは教育用の架空症例であり、実際の診療判断ではない。`;

const FIELD_ENUM = [...ALL_FIELDS.map((f) => f.key), "general"];

const RESULT_SCHEMA = {
  type: "object",
  properties: {
    summary: { type: "string", description: "総評（2〜3文）" },
    issues: {
      type: "array",
      items: {
        type: "object",
        properties: {
          field: { type: "string", enum: FIELD_ENUM },
          message: { type: "string", description: "指摘の要点（1文）" },
          reason: { type: "string", description: "なぜ不自然なのかの理由" },
        },
        required: ["field", "message", "reason"],
        additionalProperties: false,
      },
    },
    explanation: {
      type: "object",
      properties: {
        pathophysiology: { type: "string", description: "病態の解説：疾患の概要と、入力内容から考えられる患者の状態" },
        vitalsRationale: { type: "string", description: "評価の根拠：各バイタルサインが示すこと、基準値との比較" },
        actions: {
          type: "array",
          description: "考えられる処置・対応を優先順に",
          items: {
            type: "object",
            properties: { action: { type: "string" }, reason: { type: "string" } },
            required: ["action", "reason"],
            additionalProperties: false,
          },
        },
        deterioration: { type: "string", description: "急変の解説：バイタル1から2への変化の意味と、見逃してはいけないサイン。バイタル2が未入力なら空文字" },
        guidelineBasis: { type: "string", description: "ガイドラインとの照合：どのガイドラインのどの推奨に沿っているか、足りない対応や異なる点" },
        learningPoints: { type: "array", items: { type: "string" } },
        quiz: {
          type: "array",
          items: {
            type: "object",
            properties: { question: { type: "string" }, answer: { type: "string" } },
            required: ["question", "answer"],
            additionalProperties: false,
          },
        },
        nextTopics: { type: "array", items: { type: "string" } },
        references: { type: "array", items: { type: "string" } },
      },
      required: ["pathophysiology", "vitalsRationale", "actions", "deterioration", "guidelineBasis", "learningPoints", "quiz", "nextTopics", "references"],
      additionalProperties: false,
    },
  },
  required: ["summary", "issues", "explanation"],
  additionalProperties: false,
};

export function getApiKey() {
  try {
    return localStorage.getItem(KEY_STORAGE) || "";
  } catch {
    return "";
  }
}

export function setApiKey(key) {
  if (key) localStorage.setItem(KEY_STORAGE, key.trim());
  else localStorage.removeItem(KEY_STORAGE);
}

// AIに渡す文章。項目キーを添えて、指摘の field に使えるようにする
export function scenarioToText(data) {
  return SECTIONS.filter((s) => !(s.optional && isVitalsEmpty(data, "v2")))
    .map((section) => {
      const rows = section.fields.map((f) => `- ${f.label} [${f.key}]：${formatValue(f, data[f.key]) || "未入力"}`);
      if (section.id !== "basic") {
        const total = gcsTotal(data, section.id);
        if (total) rows.splice(4, 0, `- GCS 合計：${total}`);
      }
      return `【${section.title}】\n${rows.join("\n")}`;
    })
    .join("\n\n");
}

// AIの返答を、画面が前提にしている形にそろえる（欠けた項目は空にする）
export function normalizeResult(r, extra = {}) {
  const arr = (v) => (Array.isArray(v) ? v : []);
  const str = (v) => (typeof v === "string" ? v : "");
  const ex = (r && r.explanation) || {};
  const link = (x) => (x && typeof x === "object" ? { title: str(x.title), url: safeUrl(x.url) } : linkReference(x));
  return {
    guidelines: arr(extra.guidelines || (r && r.guidelines)).map(link).filter((x) => x.title),
    webSources: arr(extra.webSources || (r && r.webSources)).map(link).filter((x) => x.title && x.url),
    summary: str(r && r.summary),
    issues: arr(r && r.issues)
      .filter((i) => i && i.message)
      .map((i) => ({ field: FIELD_ENUM.includes(i.field) ? i.field : "general", message: str(i.message), reason: str(i.reason) })),
    explanation: {
      pathophysiology: str(ex.pathophysiology),
      vitalsRationale: str(ex.vitalsRationale),
      actions: arr(ex.actions).filter((a) => a && a.action).map((a) => ({ action: str(a.action), reason: str(a.reason) })),
      deterioration: str(ex.deterioration),
      guidelineBasis: str(ex.guidelineBasis),
      learningPoints: arr(ex.learningPoints).map(String),
      quiz: arr(ex.quiz).filter((q) => q && q.question).map((q) => ({ question: str(q.question), answer: str(q.answer) })),
      nextTopics: arr(ex.nextTopics).map(String),
      references: arr(ex.references).map(link).filter((x) => x.title),
    },
  };
}

// 保存済みの結果（古い形式を含む）を、いまの表示が前提にしている形にそろえる
export function upgradeResult(r) {
  const n = normalizeResult({ explanation: r.explanation || {}, guidelines: r.guidelines, webSources: r.webSources });
  return { ...r, guidelines: n.guidelines, webSources: n.webSources, explanation: r.explanation ? n.explanation : null };
}

function safeUrl(u) {
  return typeof u === "string" && /^https:\/\//.test(u) ? u : "";
}

// 評価に使うガイドラインの一覧（結果に「参照したガイドライン」として残す）
function guidelineContext(data) {
  const list = selectGuidelines(data);
  return {
    text: guidelinesToPrompt(list),
    refs: list.map((g) => ({ title: `${g.title}（${g.org}）`, url: g.url })),
  };
}

// ネット検索してよい、信頼できる医療系サイト
const TRUSTED_DOMAINS = [
  "minds.jcqhc.or.jp",
  "jsicm.org",
  "jaam.jp",
  "j-circ.or.jp",
  "jsts.gr.jp",
  "jsaweb.jp",
  "jrs.or.jp",
  "jds.or.jp",
  "japanresuscitationcouncil.org",
  "jtcr-jatec.org",
  "mhlw.go.jp",
  "pubmed.ncbi.nlm.nih.gov",
];

const SAMPLE_ERRORS = {
  not_granted: "AI評価の利用が許可されませんでした。",
  sampling_disabled: "このアカウントでは AI を利用できません。",
  rate_limited: "利用が集中しています。しばらく待ってから再度お試しください。",
  session_expired: "claude.ai に再度ログインしてください。",
  refused: "AIがこの内容の評価を控えました。内容を見直して再度お試しください。",
  invalid_json: "AIの評価結果を読み取れませんでした。もう一度お試しください。",
};

// claude.ai の公開版：閲覧している人の Claude アカウントで評価する（APIキー不要）
async function evaluateInViewer(data) {
  const gl = guidelineContext(data);
  const sample = window.claude && window.claude.use ? await window.claude.use("sample") : null;
  if (!sample) throw new Error("このページでは AI評価を利用できません。");
  const prompt = `${SYSTEM_PROMPT}

次の形のJSONだけで答えてください（ほかの文章は書かない）。field は項目キー（[ ] 内の文字列）か "general"。
{"summary":"総評","issues":[{"field":"v2.hr","message":"指摘","reason":"理由"}],"explanation":{"pathophysiology":"","vitalsRationale":"","actions":[{"action":"","reason":""}],"deterioration":"","guidelineBasis":"","learningPoints":[""],"quiz":[{"question":"","answer":""}],"nextTopics":[""],"references":[""]}}

${gl.text}

次のシナリオを評価してください。

${scenarioToText(data)}`;
  try {
    return normalizeResult(await sample.json(prompt), { guidelines: gl.refs });
  } catch (e) {
    throw new Error(SAMPLE_ERRORS[e && e.code] || "AI評価に失敗しました。時間をおいて再度お試しください。");
  }
}

const textOf = (content) =>
  content
    .filter((b) => b.type === "text")
    .map((b) => b.text)
    .join("");

// 返答の文章から JSON 部分を取り出す（前後の説明やコードブロックの記号を除く）
function parseJsonLoose(text) {
  const a = text.indexOf("{");
  const b = text.lastIndexOf("}");
  if (a < 0 || b < a) throw new Error("no json");
  return JSON.parse(text.slice(a, b + 1));
}

// 検索で見たページ（信頼できるサイトのみ）を集める
function collectSources(content) {
  const seen = new Map();
  for (const block of content) {
    if (block.type === "web_search_tool_result" && Array.isArray(block.content)) {
      for (const r of block.content) if (r.url && !seen.has(r.url)) seen.set(r.url, { title: r.title || r.url, url: r.url });
    }
    if (block.type === "text" && Array.isArray(block.citations)) {
      for (const c of block.citations) if (c.url && !seen.has(c.url)) seen.set(c.url, { title: c.title || c.url, url: c.url });
    }
  }
  return [...seen.values()].slice(0, 8);
}

function checkStop(response) {
  if (response.stop_reason === "refusal") {
    throw new Error("AIがこの内容の評価を控えました。内容を見直して再度お試しください。");
  }
  if (response.stop_reason === "max_tokens") throw new Error("評価が長くなりすぎて途中で終わりました。もう一度お試しください。");
}

export async function evaluateScenario(data) {
  if (PREVIEW) return evaluateInViewer(data);
  const apiKey = getApiKey();
  if (!apiKey) throw new Error("NO_KEY");
  const { default: Anthropic } = await import(SDK_URL);
  const client = new Anthropic({ apiKey, dangerouslyAllowBrowser: true });
  const gl = guidelineContext(data);
  const scenario = `${gl.text}\n\n次のシナリオを評価してください。\n\n${scenarioToText(data)}`;
  const base = {
    model: "claude-opus-5-5",
    max_tokens: 16000,
    betas: ["server-side-fallback-2026-07-01"],
    fallbacks: "default",
  };

  // 1. 信頼できる医療系サイトだけを検索して、最新の推奨を確かめながら評価する
  try {
    const messages = [
      {
        role: "user",
        content: `${scenario}

必要に応じて web_search で、上のガイドラインの最新の改訂や、このシナリオに関係する国内ガイドラインの推奨を確認してください（検索は2回まで）。
最後に、次のJSON形式の内容だけを出力してください（説明文やコードブロックの記号は付けない）。
${JSON.stringify(RESULT_SCHEMA)}`,
      },
    ];
    let response;
    for (let i = 0; i < 3; i++) {
      response = await client.beta.messages.create({
        ...base,
        output_config: { effort: "medium" },
        system: SYSTEM_PROMPT,
        tools: [{ type: "web_search_20260209", name: "web_search", allowed_domains: TRUSTED_DOMAINS, max_uses: 2 }],
        messages,
      });
      if (response.stop_reason !== "pause_turn") break;
      messages.push({ role: "assistant", content: response.content });
    }
    checkStop(response);
    return normalizeResult(parseJsonLoose(textOf(response.content)), { guidelines: gl.refs, webSources: collectSources(response.content) });
  } catch (e) {
    // 拒否・認証エラー・通信エラーはそのまま伝える。それ以外（検索が使えない、JSONが崩れた等）は検索なしでやり直す
    if (e.status === 401 || e.status === 429 || e instanceof TypeError || /控えました/.test(e.message)) throw e;
  }

  // 2. 検索なし：内蔵のガイドラインの要点だけで、決まった形式で評価する
  const response = await client.beta.messages.create({
    ...base,
    output_config: { effort: "medium", format: { type: "json_schema", schema: RESULT_SCHEMA } },
    system: SYSTEM_PROMPT,
    messages: [{ role: "user", content: scenario }],
  });
  checkStop(response);
  try {
    return normalizeResult(JSON.parse(textOf(response.content)), { guidelines: gl.refs });
  } catch {
    throw new Error("AIの評価結果を読み取れませんでした。もう一度お試しください。");
  }
}

export function describeAiError(e) {
  if (e.message === "NO_KEY") return "NO_KEY";
  const status = e && e.status;
  if (status === 401) return "APIキーが正しくありません。マイページで確認してください。";
  if (status === 429) return "利用が集中しています。しばらく待ってから再度お試しください。";
  if (status && status >= 500) return "AIサービスで一時的な問題が起きています。時間をおいて再度お試しください。";
  if (e instanceof TypeError) return "通信できませんでした。インターネット接続を確認してください。";
  return e.message || "AI評価に失敗しました";
}

// 評価結果を、チャット共有・PDF用のプレーンテキストにする
export function explanationToText(raw) {
  const result = upgradeResult(raw);
  const ex = result.explanation;
  const parts = [`【総評】${result.summary}`];
  if (ex.pathophysiology) parts.push(`【病態の解説】${ex.pathophysiology}`);
  if (ex.vitalsRationale) parts.push(`【評価の根拠】${ex.vitalsRationale}`);
  if (ex.actions.length) parts.push(`【考えられる処置・対応】\n${ex.actions.map((a, i) => `${i + 1}. ${a.action}（理由：${a.reason}）`).join("\n")}`);
  if (ex.deterioration) parts.push(`【急変の解説】${ex.deterioration}`);
  if (ex.guidelineBasis) parts.push(`【ガイドラインとの照合】${ex.guidelineBasis}`);
  if (ex.learningPoints.length) parts.push(`【学習ポイント】\n${ex.learningPoints.map((p) => `・${p}`).join("\n")}`);
  if (ex.quiz.length) parts.push(`【確認問題】\n${ex.quiz.map((q, i) => `Q${i + 1}. ${q.question}\nA. ${q.answer}`).join("\n")}`);
  if (ex.nextTopics.length) parts.push(`【次に学ぶテーマ】${ex.nextTopics.join("、")}`);
  if (ex.references.length) parts.push(`【参考資料】${ex.references.map((r) => r.title).join("、")}`);
  if (result.guidelines.length) parts.push(`【参照したガイドライン】\n${result.guidelines.map((g) => `・${g.title}${g.url ? ` ${g.url}` : ""}`).join("\n")}`);
  if (result.webSources.length) parts.push(`【検索で確認したページ】\n${result.webSources.map((g) => `・${g.title} ${g.url}`).join("\n")}`);
  return parts.join("\n\n");
}
