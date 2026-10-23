// 利用者が自分で設定したAIサービスに、数字だけを送って詳しいアドバイスをもらう。
// 通信は端末から各サービスへ直接行い、運営側のサーバーは通らない。

export const PROVIDERS = {
  anthropic: { label: "Claude（Anthropic）", defaultModel: "claude-opus-5-5", keyHint: "sk-ant-…" },
  openai: { label: "ChatGPT（OpenAI）", defaultModel: "gpt-5", keyHint: "sk-…" },
  gemini: { label: "Gemini（Google）", defaultModel: "gemini-2.5-flash", keyHint: "AIza…" },
};

const SYSTEM_PROMPT = [
  "あなたはふるさと納税の返礼品の「還元率」を説明するアシスタントです。",
  "利用者から届くのは数字（寄附額・市場価格・送料・定期便の回数・内容量・還元率・判定）だけです。商品名や自治体名は届きません。",
  "次のことを守って、日本語で300字程度、箇条書き3〜5項目で答えてください。",
  "・還元率の見方、送料や定期便を含めた考え方、量に対する単価の見方を、届いた数字に即して説明する",
  "・「お得」「割高」「損」など良し悪しを断定する言葉を使わない。還元率が高い・低いという事実の説明にとどめる",
  "・返礼品や自治体・事業者を批判したり評価したりしない",
  "・還元率以外の魅力（品質、使い道、応援したい地域、届く時期や保存のしやすさ）にも触れる",
  "・特定のふるさと納税サイトやお店を勧めない",
  "・控除額や税金について断定しない（年収や家族構成で変わるため）",
  "・市場価格が推定値の時は、推定であることと、品質や産地の違いで価格が変わることに触れる",
  "・市場価格ベースの還元率は、自治体の調達費用の基準（3割）とは別物であることを必要に応じて補足する",
].join("\n");

// AIに送る内容：数字だけ
export function buildFacts(result) {
  const facts = {
    寄附額_円: result.donation,
    市場価格_円: result.marketTotal,
    還元率_パーセント: Number(result.rateText),
    標準還元率_パーセント: result.standardRate,
    標準との差_ポイント: result.diffTenths / 10,
    判定: result.grade.label,
  };
  if (result.estimated) {
    facts.市場価格の出し方 = "同じ商品の価格が見つからず、似た商品の単価から見積もった推定値";
    facts.もとにした単価 = `${result.estimated.price}円／${result.estimated.perDisplay}`;
  }
  if (result.shipping > 0) facts.うち送料_円 = result.shipping * (result.perDelivery ? result.times : 1);
  if (result.times > 1) {
    facts.定期便_回数 = result.times;
    facts.一回あたり寄附額_円 = result.perTime.donation;
    facts.一回あたり市場価格_円 = result.perTime.market;
  }
  if (result.unit) {
    facts.内容量 = `${result.unit.display}（${result.unit.amount}${result.unit.base}）`;
    for (const p of result.unit.prices) facts[`単価_${p.label}あたり_円`] = p.yen;
    facts[`寄附1万円あたりの量_${result.unit.base}`] = result.unit.per10k;
  }
  return facts;
}

function userMessage(result) {
  return `次の数字について、還元率の見方をアドバイスしてください。\n${JSON.stringify(buildFacts(result), null, 2)}`;
}

async function postJson(url, headers, body, signal) {
  const res = await fetch(url, { method: "POST", headers: { "content-type": "application/json", ...headers }, body: JSON.stringify(body), signal });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const message = data?.error?.message ?? `HTTP ${res.status}`;
    const err = new Error(message);
    err.status = res.status;
    throw err;
  }
  return data;
}

const callers = {
  async anthropic({ apiKey, model }, result, signal) {
    const data = await postJson(
      "https://api.anthropic.com/v1/messages",
      {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        // ブラウザ（アプリ内）から利用者自身のキーで直接呼ぶための指定
        "anthropic-dangerous-direct-browser-access": "true",
        // 安全上の理由で断られた時は、サーバー側で別のモデルに自動で切り替えて答えてもらう
        "anthropic-beta": "server-side-fallback-2026-07-01",
      },
      {
        model,
        max_tokens: 2000,
        output_config: { effort: "low" },
        fallbacks: "default",
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: userMessage(result) }],
      },
      signal,
    );
    if (data.stop_reason === "refusal") throw new Error("AIが回答しませんでした");
    return (data.content ?? []).filter((b) => b.type === "text").map((b) => b.text).join("\n");
  },
  async openai({ apiKey, model }, result, signal) {
    const data = await postJson(
      "https://api.openai.com/v1/chat/completions",
      { authorization: `Bearer ${apiKey}` },
      { model, messages: [{ role: "system", content: SYSTEM_PROMPT }, { role: "user", content: userMessage(result) }] },
      signal,
    );
    return data.choices?.[0]?.message?.content ?? "";
  },
  async gemini({ apiKey, model }, result, signal) {
    const data = await postJson(
      `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`,
      { "x-goog-api-key": apiKey },
      { systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] }, contents: [{ role: "user", parts: [{ text: userMessage(result) }] }] },
      signal,
    );
    return (data.candidates?.[0]?.content?.parts ?? []).map((p) => p.text ?? "").join("\n");
  },
};

// 失敗した時は呼び出し側で標準アドバイスに切り替える
export async function askAi(settings, result, { timeoutMs = 60000 } = {}) {
  const call = callers[settings.provider];
  if (!call) throw new Error("AIサービスが選ばれていません");
  if (!settings.apiKey) throw new Error("APIキーが設定されていません");
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const text = await call({ apiKey: settings.apiKey, model: settings.model || PROVIDERS[settings.provider].defaultModel }, result, controller.signal);
    if (!text.trim()) throw new Error("AIの回答が空でした");
    return text.trim();
  } catch (e) {
    if (e.name === "AbortError") throw new Error("AIの応答が時間内に返ってきませんでした");
    if (e instanceof TypeError) throw new Error("通信できませんでした");
    if (e.status === 401 || e.status === 403) throw new Error("APIキーが正しくないか、使えない状態です");
    if (e.status === 429) throw new Error("利用回数の上限に達しました。少し待ってから試してください");
    throw e;
  } finally {
    clearTimeout(timer);
  }
}
