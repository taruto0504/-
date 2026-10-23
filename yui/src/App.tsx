import { useCallback, useEffect, useRef, useState } from "react";
import { ChatPanel, type LogMessage } from "./components/ChatPanel";
import { Clock } from "./components/Clock";
import { GuidePanel } from "./components/GuidePanel";
import { RichText } from "./components/RichText";
import { SettingsPanel } from "./components/SettingsPanel";
import { FALLBACK_MODELS, ModelNotFoundError, RETIRED, listModels, testConnection, pickModel, streamChat, trimHistory, type Usage } from "./lib/ai";
import { breakLine, greeting, timedLine } from "./lib/clock";
import { buildSystemPrompt } from "./lib/prompt";
import { DEFAULT_AI, DEFAULT_DISPLAY, DEFAULT_PERSONA, type AiSettings, type DisplaySettings, type Persona, type ProviderId } from "./lib/settings";
import { load, loadFile, loadList, loadSecret, save, saveFile, saveSecret } from "./lib/storage";
import { Stage } from "./three/stage";

const MAX_LOG = 200;
const TAP_LINES = ["なあに？", "呼んだ？", "えへへ、くすぐったいよ", "どうしたの？", "ちゃんとそばにいるよ"];

export function App() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const stage = useRef<Stage | null>(null);
  const bubbleEl = useRef<HTMLDivElement>(null);

  const [persona, setPersona] = useState<Persona>(() => load("persona", DEFAULT_PERSONA));
  const [ai, setAi] = useState<AiSettings>(() => {
    const a = load("ai", DEFAULT_AI);
    const models = { ...DEFAULT_AI.models, ...a.models };
    // 提供が終わった Gemini 1.x・2.x が保存されていたら、最新の Flash に置き換える
    if (RETIRED.gemini.test(models.gemini)) models.gemini = DEFAULT_AI.models.gemini;
    return { ...a, models };
  });
  const [display, setDisplay] = useState<DisplaySettings>(() => load("display", DEFAULT_DISPLAY));
  const [keys, setKeys] = useState<Record<ProviderId, string>>({ anthropic: "", openai: "", gemini: "" });
  const [keysLoaded, setKeysLoaded] = useState(false);
  const [messages, setMessages] = useState<LogMessage[]>(() => loadList<LogMessage>("chat"));
  const [usage, setUsage] = useState<Usage>(() => load("usage", { input: 0, output: 0 }));
  const [busy, setBusy] = useState(false);
  const [bubble, setBubble] = useState("");
  const [chatOpen, setChatOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState<false | "ai" | true>(false);
  const [available, setAvailable] = useState<Partial<Record<ProviderId, string[]>>>({});
  const [guideOpen, setGuideOpen] = useState<ProviderId | null>(null);
  const [vrm, setVrm] = useState({ has: false, name: load("vrmName", { v: "" }).v, error: "" });
  const abort = useRef<AbortController | null>(null);
  const bubbleTimer = useRef(0);

  useEffect(() => save("persona", persona), [persona]);
  useEffect(() => save("ai", ai), [ai]);
  useEffect(() => save("display", display), [display]);
  useEffect(() => save("chat", messages.slice(-MAX_LOG)), [messages]);
  useEffect(() => save("usage", usage), [usage]);

  // 吹き出しを出す。hold を指定しなければ文字数に合わせて自動で消す
  const say = useCallback((text: string, hold?: number) => {
    clearTimeout(bubbleTimer.current);
    setBubble(text);
    if (hold !== Infinity) bubbleTimer.current = window.setTimeout(() => setBubble(""), hold ?? Math.min(15000, 3500 + text.length * 120));
  }, []);

  // 3D の舞台を用意する
  useEffect(() => {
    const s = new Stage(canvas.current!, {
      onHead: (x, y) => {
        const el = bubbleEl.current;
        if (!el) return;
        // 吹き出しは頭の上。画面からはみ出さないように寄せる
        const w = el.offsetWidth;
        const h = el.offsetHeight;
        const left = Math.min(Math.max(12, x - w / 2), innerWidth - w - 12);
        const top = Math.max(12, y - h - 14);
        el.style.transform = `translate(${left}px, ${top}px)`;
        el.style.setProperty("--tail", `${Math.min(Math.max(16, x - left), w - 16)}px`);
      },
      onTap: () => {
        s.setMood("happy");
        setTimeout(() => s.setMood("idle"), 1800);
        say(TAP_LINES[Math.floor(Math.random() * TAP_LINES.length)]);
      },
    });
    stage.current = s;
    loadFile("vrm").then(async (blob) => {
      if (!blob) return;
      try {
        await s.setVrmData(await blob.arrayBuffer());
        setVrm((v) => ({ ...v, has: true }));
      } catch (e: any) {
        setVrm((v) => ({ ...v, error: `保存してあったVRMを読み込めませんでした：${e.message}` }));
      }
    });
    return () => {
      s.dispose();
      stage.current = null;
    };
  }, [say]);

  useEffect(() => stage.current?.setPowerSave(display.powerSave), [display.powerSave]);

  // APIキーを読み込み、起動のあいさつをする
  useEffect(() => {
    (async () => {
      const entries = await Promise.all((["anthropic", "openai", "gemini"] as ProviderId[]).map(async (id) => [id, await loadSecret(`key.${id}`)] as const));
      const loaded = Object.fromEntries(entries) as Record<ProviderId, string>;
      setKeys(loaded);
      setKeysLoaded(true);
      const p = load("persona", DEFAULT_PERSONA);
      const a = load("ai", DEFAULT_AI);
      say(
        loaded[a.provider]
          ? greeting(new Date(), p.userCall)
          : `はじめまして、${p.name}だよ。右上の ? でAPIキーの取り方を見て、⚙ から設定してね`,
        loaded[a.provider] ? undefined : 20000,
      );
    })();
  }, [say]);

  // 時刻に合わせた声かけ（分が変わるたびに確認）
  const activeMinutes = useRef(0);
  useEffect(() => {
    if (!display.voiceLines) return;
    let timer = 0;
    const tick = () => {
      if (!document.hidden) activeMinutes.current++;
      const line = timedLine(new Date(), persona.userCall) ?? breakLine(activeMinutes.current);
      if (line && !busy) say(line);
      timer = window.setTimeout(tick, 60000 - (Date.now() % 60000) + 50);
    };
    timer = window.setTimeout(tick, 60000 - (Date.now() % 60000) + 50);
    return () => clearTimeout(timer);
  }, [display.voiceLines, persona.userCall, busy, say]);

  const onChatHeight = useCallback((px: number) => stage.current?.setReserveBottom((px + 8) / innerHeight), []);

  const send = async (text: string) => {
    // まだAIにつながっていない時は、キャラクターが取り方のマニュアルを開いて案内する
    if (!keys[ai.provider]) {
      stage.current?.setMood("happy");
      setTimeout(() => stage.current?.setMood("idle"), 2000);
      say(`まだAIにつながってないの。APIキーの取り方を見せるね。迷ったら、無料枠のある Gemini からがおすすめだよ`);
      setGuideOpen(Object.values(keys).some(Boolean) ? ai.provider : "gemini");
      return;
    }
    const now = Date.now();
    const history: LogMessage[] = [...messages, { role: "user", content: text, at: now }];
    setMessages([...history, { role: "assistant", content: "", at: now }]);
    setBusy(true);
    stage.current?.setMood("thinking");
    say("うーん…", Infinity);
    // 返事の最初の文字が届くまで、待っている秒数を見せる
    const waitStart = Date.now();
    const waitTimer = window.setInterval(() => {
      const sec = Math.round((Date.now() - waitStart) / 1000);
      if (!reply) say(sec < 8 ? "うーん…" : `うーん…（${sec}秒）考え中`, Infinity);
    }, 1000);
    const controller = new AbortController();
    abort.current = controller;
    let reply = "";
    const update = (content: string, error = false) =>
      setMessages((ms) => [...ms.slice(0, -1), { role: "assistant", content, at: now, error }]);
    const request = (model: string) =>
      streamChat({
        provider: ai.provider,
        apiKey: keys[ai.provider],
        model,
        system: buildSystemPrompt(persona),
        messages: trimHistory(history.filter((m) => !m.error)),
        signal: controller.signal,
        onText: (delta) => {
          if (!reply) stage.current?.setMood("talking");
          reply += delta;
          update(reply);
          say(reply, Infinity);
        },
      });
    try {
      let u;
      try {
        u = await request(ai.models[ai.provider]);
      } catch (e) {
        // モデルが提供終了などで見つからない時は、使えるモデルを探して選び直す
        if (!(e instanceof ModelNotFoundError) || reply) throw e;
        u = await retryWithOtherModel(e.model, request);
      }
      setUsage((x) => ({ input: x.input + u.input, output: x.output + u.output }));
      if (!reply.trim()) throw new Error("返事が空っぽでした。もう一度話しかけてみてね");
      stage.current?.setMood("happy");
      setTimeout(() => stage.current?.setMood("idle"), 2500);
      say(reply);
    } catch (e: any) {
      const msg = reply ? `${reply}\n\n（${e.message}）` : e.message;
      update(msg, !reply);
      stage.current?.setMood("idle");
      say(reply ? msg : `ごめんね、${e.message}`);
    } finally {
      clearInterval(waitTimer);
      setBusy(false);
      abort.current = null;
    }
  };

  // 見つからなかったモデルの代わりを探してやり直す。
  // まず各社のモデル一覧から選び、一覧が取れない時は候補を新しい順に試す
  const retryWithOtherModel = async (missing: string, request: (model: string) => Promise<Usage>): Promise<Usage> => {
    const provider = ai.provider;
    const tried = new Set([missing]);
    let listError = "";
    const candidates: string[] = [];
    try {
      const models = await listModels(provider, keys[provider]);
      setAvailable((a) => ({ ...a, [provider]: models }));
      const best = pickModel(provider, models);
      if (best) candidates.push(best);
    } catch (e: any) {
      listError = e?.message ?? String(e);
    }
    candidates.push(...FALLBACK_MODELS[provider]);
    for (const model of candidates) {
      if (tried.has(model)) continue;
      tried.add(model);
      say(`モデル「${missing}」が使えないみたい。「${model}」で試してみるね…`, Infinity);
      try {
        const u = await request(model);
        setAi((a) => ({ ...a, models: { ...a.models, [provider]: model } }));
        return u;
      } catch (e) {
        if (!(e instanceof ModelNotFoundError)) throw e;
      }
    }
    throw new Error(
      `使えるモデルが見つかりませんでした（試したもの：${[...tried].join("、")}${listError ? `／一覧の取得：${listError}` : ""}）。⚙ →「AI」でモデル名を入れてください`,
    );
  };

  // そのキーで使えるモデルを調べ、今のモデルが使えなければ選び直す。選んだモデル名を返す
  const ensureModel = async (provider: ProviderId, key: string): Promise<string> => {
    const models = await listModels(provider, key);
    setAvailable((a) => ({ ...a, [provider]: models }));
    const current = ai.models[provider];
    if (models.includes(current)) return current;
    const next = pickModel(provider, models);
    if (!next) throw new Error("このキーで使えるモデルが見つかりませんでした");
    setAi((a) => ({ ...a, models: { ...a.models, [provider]: next } }));
    say(`モデルを「${next}」に切り替えたよ`);
    return next;
  };

  const onKey = async (provider: ProviderId, key: string) => {
    await saveSecret(`key.${provider}`, key);
    setKeys((k) => ({ ...k, [provider]: key }));
    if (!key) return;
    say("ありがとう！ つながるか確かめてるね…", Infinity);
    try {
      const model = await ensureModel(provider, key);
      say(`つながったよ！ モデルは「${model}」を使うね。これでお話しできるよ`);
    } catch (e: any) {
      const m = e?.status === 400 || e?.status === 401 || e?.status === 403 ? "APIキーが正しくないみたい。コピーし直して貼ってみて" : `確かめられなかったよ（${e.message}）。とりあえず話しかけてみてね`;
      say(m);
    }
  };

  const onVrm = async (file: File | null) => {
    setVrm((v) => ({ ...v, error: "" }));
    try {
      await stage.current?.setVrmData(file ? await file.arrayBuffer() : null);
      await saveFile("vrm", file ?? undefined);
      save("vrmName", { v: file?.name ?? "" });
      setVrm({ has: !!file, name: file?.name ?? "", error: "" });
      if (file) say("新しい姿、どうかな？");
    } catch (e: any) {
      setVrm((v) => ({ ...v, error: `読み込めませんでした：${e.message}` }));
    }
  };

  const longBubble = bubble.length > 220;

  return (
    <>
      <div className="space" aria-hidden />
      <canvas ref={canvas} className="stage" />
      {display.clock && <Clock corner={display.clockCorner} seconds={display.seconds} />}
      <div className="top-actions">
        <button className="icon-btn glow" onClick={() => setGuideOpen(ai.provider)} aria-label="APIキーの取り方">
          ?
        </button>
        <button className="icon-btn glow" onClick={() => setSettingsOpen(true)} aria-label="設定">
          ⚙
        </button>
      </div>
      <div ref={bubbleEl} className={`bubble glass ${bubble ? "show" : ""}`} aria-live="polite" onClick={() => longBubble && setChatOpen(true)}>
        {bubble && (
          <>
            <div className="bubble-name">{persona.name}</div>
            <div className="bubble-text">
              <RichText text={longBubble ? `…${bubble.slice(-200)}` : bubble} />
            </div>
            {longBubble && !busy && <div className="bubble-more">タップで全文</div>}
          </>
        )}
      </div>
      <ChatPanel
        name={persona.name}
        messages={messages}
        busy={busy || !keysLoaded}
        open={chatOpen}
        onToggle={() => setChatOpen(!chatOpen)}
        onSend={send}
        onStop={() => abort.current?.abort()}
        onHeight={onChatHeight}
      />
      {settingsOpen && (
        <SettingsPanel
          persona={persona}
          ai={ai}
          display={display}
          keys={keys}
          usage={usage}
          hasVrm={vrm.has}
          vrmName={vrm.name}
          vrmError={vrm.error}
          onPersona={setPersona}
          onAi={setAi}
          onDisplay={setDisplay}
          onKey={onKey}
          onVrm={onVrm}
          onResetUsage={() => setUsage({ input: 0, output: 0 })}
          onClearChat={() => setMessages([])}
          available={available}
          onLoadModels={(provider) => ensureModel(provider, keys[provider])}
          onTest={(provider) => testConnection(provider, keys[provider], ai.models[provider])}
          onGuide={(provider) => {
            setSettingsOpen(false);
            setGuideOpen(provider);
          }}
          initialTab={settingsOpen === "ai" ? "ai" : undefined}
          onClose={() => setSettingsOpen(false)}
        />
      )}
      {guideOpen && (
        <GuidePanel
          initial={guideOpen}
          configured={keys}
          onSetup={(provider) => {
            setAi((a) => ({ ...a, provider }));
            setGuideOpen(null);
            setSettingsOpen("ai");
            say("コピーしたキーを「APIキー」の欄に貼って、保存を押してね");
          }}
          onClose={() => setGuideOpen(null)}
        />
      )}
    </>
  );
}
