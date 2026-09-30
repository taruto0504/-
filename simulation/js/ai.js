// AI評価（整合性チェック＋解説・フィードバック）。
// 利用者自身の Claude API キーを使い、ブラウザから直接 Claude API を呼び出す。キーはこの端末にだけ保存される。

import { SECTIONS, ALL_FIELDS, formatValue, gcsTotal, isVitalsEmpty } from "./fields.js";

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

注意：
- 未入力の項目は評価の対象外とし、入力済みの内容だけで判断する（作成途中のこともある）。
- 根拠を必ず示す。参考資料は実在する代表的なガイドライン・教科書の名称のみを挙げ、不確かなものは挙げない。
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
      required: ["pathophysiology", "vitalsRationale", "actions", "deterioration", "learningPoints", "quiz", "nextTopics", "references"],
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

export async function evaluateScenario(data) {
  const apiKey = getApiKey();
  if (!apiKey) throw new Error("NO_KEY");
  const { default: Anthropic } = await import(SDK_URL);
  const client = new Anthropic({ apiKey, dangerouslyAllowBrowser: true });
  const response = await client.beta.messages.create({
    model: "claude-opus-5-5",
    max_tokens: 16000,
    betas: ["server-side-fallback-2026-07-01"],
    fallbacks: "default",
    output_config: { effort: "medium", format: { type: "json_schema", schema: RESULT_SCHEMA } },
    system: SYSTEM_PROMPT,
    messages: [{ role: "user", content: `次のシナリオを評価してください。\n\n${scenarioToText(data)}` }],
  });
  if (response.stop_reason === "refusal") {
    throw new Error("AIがこの内容の評価を控えました。内容を見直して再度お試しください。");
  }
  if (response.stop_reason === "max_tokens") throw new Error("評価が長くなりすぎて途中で終わりました。もう一度お試しください。");
  const text = response.content
    .filter((b) => b.type === "text")
    .map((b) => b.text)
    .join("");
  try {
    return JSON.parse(text);
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
export function explanationToText(result) {
  const ex = result.explanation;
  const parts = [`【総評】${result.summary}`];
  if (ex.pathophysiology) parts.push(`【病態の解説】${ex.pathophysiology}`);
  if (ex.vitalsRationale) parts.push(`【評価の根拠】${ex.vitalsRationale}`);
  if (ex.actions.length) parts.push(`【考えられる処置・対応】\n${ex.actions.map((a, i) => `${i + 1}. ${a.action}（理由：${a.reason}）`).join("\n")}`);
  if (ex.deterioration) parts.push(`【急変の解説】${ex.deterioration}`);
  if (ex.learningPoints.length) parts.push(`【学習ポイント】\n${ex.learningPoints.map((p) => `・${p}`).join("\n")}`);
  if (ex.quiz.length) parts.push(`【確認問題】\n${ex.quiz.map((q, i) => `Q${i + 1}. ${q.question}\nA. ${q.answer}`).join("\n")}`);
  if (ex.nextTopics.length) parts.push(`【次に学ぶテーマ】${ex.nextTopics.join("、")}`);
  if (ex.references.length) parts.push(`【参考資料】${ex.references.join("、")}`);
  return parts.join("\n\n");
}
