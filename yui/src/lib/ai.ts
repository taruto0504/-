// BYO-AI：利用者が自分で設定したAIサービスへ、端末から直接つなぐ（運営側のサーバーは通らない）。
// 返答は少しずつ（ストリーミングで）受け取り、吹き出しにすぐ出す。

import type { ProviderId } from "./settings";

export const PROVIDERS: Record<ProviderId, { label: string; keyHint: string; models: string[]; policy: string }> = {
  anthropic: {
    label: "Claude（Anthropic）",
    keyHint: "sk-ant-…",
    models: ["claude-sonnet-5-5", "claude-haiku-5-5", "claude-opus-5-5"],
    policy: "https://www.anthropic.com/legal/commercial-terms",
  },
  openai: {
    label: "ChatGPT（OpenAI）",
    keyHint: "sk-…",
    models: ["gpt-5-mini", "gpt-5"],
    policy: "https://openai.com/policies/api-data-usage-policies",
  },
  gemini: {
    label: "Gemini（Google）",
    keyHint: "AIza…",
    models: ["gemini-flash-latest", "gemini-pro-latest"],
    policy: "https://ai.google.dev/gemini-api/terms",
  },
};

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export interface Usage {
  input: number;
  output: number;
}

export interface ChatRequest {
  provider: ProviderId;
  apiKey: string;
  model: string;
  system: string;
  messages: ChatMessage[];
  onText: (delta: string) => void;
  signal?: AbortSignal;
}

// 送る会話の量を抑える（利用料の対策）。古い分はフェーズ2で要約して残す
export const CONTEXT_MESSAGES = 20;

export function trimHistory(messages: ChatMessage[], max = CONTEXT_MESSAGES): ChatMessage[] {
  let out = messages.filter((m) => m.content.trim()).slice(-max);
  // Claude と Gemini は最初がユーザーの発言である必要がある
  while (out.length && out[0].role !== "user") out = out.slice(1);
  return out;
}

export class HttpError extends Error {
  constructor(
    message: string,
    public status: number,
  ) {
    super(message);
  }
}

// Server-Sent Events を1件ずつ JSON にして渡す
export async function readSse(res: Response, onData: (data: any) => void): Promise<void> {
  const reader = res.body!.getReader();
  const decoder = new TextDecoder();
  let buf = "";
  for (;;) {
    const { done, value } = await reader.read();
    buf += decoder.decode(value, { stream: !done });
    const events = buf.split(/\r?\n\r?\n/);
    buf = done ? "" : events.pop()!;
    for (const ev of events) {
      const data = ev
        .split(/\r?\n/)
        .filter((l) => l.startsWith("data:"))
        .map((l) => l.slice(5).trimStart())
        .join("\n");
      if (!data || data === "[DONE]") continue;
      let parsed: unknown;
      try {
        parsed = JSON.parse(data);
      } catch {
        continue; // 読めない行は読み飛ばす
      }
      onData(parsed);
    }
    if (done) return;
  }
}

async function post(url: string, headers: Record<string, string>, body: unknown, signal?: AbortSignal) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json", ...headers },
    body: JSON.stringify(body),
    signal,
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    const err = Array.isArray(data) ? data[0]?.error : data?.error;
    throw new HttpError(err?.message ?? `HTTP ${res.status}`, res.status);
  }
  return res;
}

const callers: Record<ProviderId, (r: ChatRequest) => Promise<Usage>> = {
  async anthropic({ apiKey, model, system, messages, onText, signal }) {
    const res = await post(
      "https://api.anthropic.com/v1/messages",
      {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        // ブラウザ（アプリ内）から利用者自身のキーで直接呼ぶための指定
        "anthropic-dangerous-direct-browser-access": "true",
      },
      { model, max_tokens: 4000, system, messages, stream: true },
      signal,
    );
    const usage: Usage = { input: 0, output: 0 };
    let refused = false;
    await readSse(res, (d) => {
      if (d.type === "message_start") usage.input = d.message?.usage?.input_tokens ?? 0;
      else if (d.type === "content_block_delta" && d.delta?.type === "text_delta") onText(d.delta.text);
      else if (d.type === "message_delta") {
        usage.output = d.usage?.output_tokens ?? usage.output;
        if (d.delta?.stop_reason === "refusal") refused = true;
      } else if (d.type === "error") throw new Error(d.error?.message ?? "AIの返答が途中で止まりました");
    });
    if (refused) throw new Error("AIがこの内容には答えませんでした");
    return usage;
  },

  async openai({ apiKey, model, system, messages, onText, signal }) {
    const res = await post(
      "https://api.openai.com/v1/chat/completions",
      { authorization: `Bearer ${apiKey}` },
      { model, stream: true, stream_options: { include_usage: true }, messages: [{ role: "system", content: system }, ...messages] },
      signal,
    );
    const usage: Usage = { input: 0, output: 0 };
    await readSse(res, (d) => {
      const text = d.choices?.[0]?.delta?.content;
      if (text) onText(text);
      if (d.usage) usage.input = d.usage.prompt_tokens ?? 0;
      if (d.usage) usage.output = d.usage.completion_tokens ?? 0;
    });
    return usage;
  },

  async gemini({ apiKey, model, system, messages, onText, signal }) {
    const res = await post(
      `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:streamGenerateContent?alt=sse`,
      { "x-goog-api-key": apiKey },
      {
        systemInstruction: { parts: [{ text: system }] },
        contents: messages.map((m) => ({ role: m.role === "assistant" ? "model" : "user", parts: [{ text: m.content }] })),
      },
      signal,
    );
    const usage: Usage = { input: 0, output: 0 };
    await readSse(res, (d) => {
      for (const p of d.candidates?.[0]?.content?.parts ?? []) if (p.text && !p.thought) onText(p.text);
      if (d.usageMetadata) {
        usage.input = d.usageMetadata.promptTokenCount ?? 0;
        usage.output = (d.usageMetadata.candidatesTokenCount ?? 0) + (d.usageMetadata.thoughtsTokenCount ?? 0);
      }
    });
    return usage;
  },
};

export class ModelNotFoundError extends Error {
  constructor(public model: string) {
    super(`モデル「${model}」が見つかりません。設定でモデル名を確認してください`);
  }
}

async function getJson(url: string, headers: Record<string, string>) {
  const res = await fetch(url, { headers });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new HttpError(data?.error?.message ?? `HTTP ${res.status}`, res.status);
  return data;
}

// そのキーで使える会話用モデルの一覧を、各社のサービスから取ってくる
export async function listModels(provider: ProviderId, apiKey: string): Promise<string[]> {
  if (provider === "gemini") {
    const data = await getJson("https://generativelanguage.googleapis.com/v1beta/models?pageSize=1000", { "x-goog-api-key": apiKey });
    return (data.models ?? [])
      .filter((m: any) => (m.supportedGenerationMethods ?? []).includes("generateContent"))
      .map((m: any) => String(m.name).replace(/^models\//, ""))
      .filter((id: string) => /^gemini/.test(id) && !/(image|tts|audio|live|embedding|vision|robotics|computer)/.test(id));
  }
  if (provider === "openai") {
    const data = await getJson("https://api.openai.com/v1/models", { authorization: `Bearer ${apiKey}` });
    return (data.data ?? [])
      .map((m: any) => String(m.id))
      .filter((id: string) => /^(gpt-|o\d|chatgpt-)/.test(id) && !/(audio|realtime|image|tts|transcribe|search|embedding|instruct|codex|moderation)/.test(id));
  }
  const data = await getJson("https://api.anthropic.com/v1/models?limit=100", {
    "x-api-key": apiKey,
    "anthropic-version": "2023-06-01",
    "anthropic-dangerous-direct-browser-access": "true",
  });
  return (data.data ?? []).map((m: any) => String(m.id));
}

// 一覧から、会話に向いたモデルを1つ選ぶ（速さと料金のバランスを優先し、試験版は避ける）
export function pickModel(provider: ProviderId, models: string[]): string | null {
  if (!models.length) return null;
  const prefer: Record<ProviderId, RegExp[]> = {
    gemini: [/^gemini-flash-latest$/, /^gemini-[\d.]+-flash$/, /flash(?!.*lite)/, /flash/, /pro/],
    anthropic: [/sonnet/, /haiku/, /opus/],
    openai: [/^gpt-[\d.]+-mini$/, /^gpt-[\d.]+$/, /mini/, /^gpt/],
  };
  const unstable = /(preview|exp|latest-preview|\d{4}-\d{2}-\d{2}|\d{8}$)/;
  // 版の数字が大きいほど新しい
  const version = (id: string) => (id.match(/\d+(?:[.-]\d+)?/g) ?? []).map((v) => parseFloat(v.replace("-", "."))).filter((v) => v < 100)[0] ?? 0;
  for (const re of prefer[provider]) {
    const hits = models.filter((m) => re.test(m));
    if (!hits.length) continue;
    const stable = hits.filter((m) => !unstable.test(m));
    const pool = stable.length ? stable : hits;
    return pool.sort((a, b) => version(b) - version(a) || a.length - b.length)[0];
  }
  return models[0];
}

export async function streamChat(req: ChatRequest): Promise<Usage> {
  if (!req.apiKey) throw new Error("APIキーが設定されていません。右上の ⚙ から設定してください");
  try {
    return await callers[req.provider](req);
  } catch (e: any) {
    if (e?.name === "AbortError") throw new Error("止めました");
    if (e instanceof TypeError) throw new Error("通信できませんでした。ネットワークを確認してください");
    if (e?.status === 401 || e?.status === 403) throw new Error("APIキーが正しくないか、使えない状態です");
    if (e?.status === 404) throw new ModelNotFoundError(req.model);
    if (e?.status === 429) throw new Error("利用回数の上限に達しました。少し待ってから試してください");
    throw e;
  }
}

// 利用料の目安（単価が設定されている時だけ）
export function estimateYen(usage: Usage, priceIn: number | null, priceOut: number | null): number | null {
  if (priceIn == null || priceOut == null) return null;
  return (usage.input * priceIn + usage.output * priceOut) / 1_000_000;
}
