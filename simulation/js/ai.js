// AI評価。利用者自身の Claude API キーを使い、ブラウザから直接 Claude API を呼び出す。
// キーはこの端末のブラウザにだけ保存される。

import { SECTIONS, formatValue } from "./fields.js";

const KEY_STORAGE = "medsim:anthropic-key";
const SDK_URL = "https://cdn.jsdelivr.net/npm/@anthropic-ai/sdk/+esm";

const SYSTEM_PROMPT = `あなたは医療シミュレーション教育の指導者です。
医療従事者（医師・看護師・救急救命士など）や学生が作成した、教育用の患者シナリオを評価してください。

次の観点で、日本語で簡潔に評価してください。
## 総評
## 医学的な整合性
疾患名・年齢・主訴・概要とバイタルサインが矛盾していないか。バイタルサイン1（初期）から2（急変時）への変化が病態として妥当か。
## 不足している情報
シミュレーションを進めるうえで足りない情報。
## 改善の提案
教育効果を高めるための具体的な修正案。

見出しと箇条書きを使い、全体で800字程度にまとめてください。
入力が空の項目は「未入力」として扱ってください。これは教育用の架空症例であり、実際の診療判断ではありません。`;

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

export function scenarioToText(data) {
  return SECTIONS.map((section) => {
    const rows = section.fields.map((f) => `- ${f.label}：${formatValue(f, data[f.key]) || "未入力"}`);
    return `【${section.title}】\n${rows.join("\n")}`;
  }).join("\n\n");
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
    output_config: { effort: "medium" },
    system: SYSTEM_PROMPT,
    messages: [{ role: "user", content: `次のシナリオを評価してください。\n\n${scenarioToText(data)}` }],
  });
  if (response.stop_reason === "refusal") {
    throw new Error("AIがこの内容の評価を控えました。内容を見直して再度お試しください。");
  }
  const text = response.content
    .filter((b) => b.type === "text")
    .map((b) => b.text)
    .join("\n")
    .trim();
  if (!text) throw new Error("AIから評価を受け取れませんでした");
  return text;
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
