import { useState } from "react";
import { PROVIDERS, estimateYen, type Usage } from "../lib/ai";
import {
  DEFAULT_PERSONA,
  PURPOSES,
  type AiSettings,
  type Corner,
  type DisplaySettings,
  type Persona,
  type ProviderId,
} from "../lib/settings";

interface Props {
  persona: Persona;
  ai: AiSettings;
  display: DisplaySettings;
  keys: Record<ProviderId, string>;
  usage: Usage;
  hasVrm: boolean;
  vrmName: string;
  vrmError: string;
  onPersona: (p: Persona) => void;
  onAi: (a: AiSettings) => void;
  onDisplay: (d: DisplaySettings) => void;
  onKey: (provider: ProviderId, key: string) => void;
  onVrm: (file: File | null) => void;
  onResetUsage: () => void;
  onClearChat: () => void;
  onGuide: (provider: ProviderId) => void;
  available: Partial<Record<ProviderId, string[]>>;
  onLoadModels: (provider: ProviderId) => Promise<string>;
  onClose: () => void;
  initialTab?: TabId;
}

const TABS = [
  { id: "ai", label: "AI" },
  { id: "persona", label: "性格" },
  { id: "character", label: "キャラ" },
  { id: "display", label: "表示" },
] as const;
type TabId = (typeof TABS)[number]["id"];

const CORNERS: { id: Corner; label: string }[] = [
  { id: "top-left", label: "左上" },
  { id: "top-right", label: "右上" },
  { id: "bottom-left", label: "左下" },
  { id: "bottom-right", label: "右下" },
];

export function SettingsPanel(props: Props) {
  const [tab, setTab] = useState<TabId>(props.initialTab ?? (props.keys[props.ai.provider] ? "persona" : "ai"));
  return (
    <div className="overlay" onClick={props.onClose}>
      <div className="settings glass" role="dialog" aria-label="設定" onClick={(e) => e.stopPropagation()}>
        <header className="settings-head">
          <h2>SETTINGS</h2>
          <button className="icon-btn" onClick={props.onClose} aria-label="閉じる">
            ✕
          </button>
        </header>
        <nav className="tabs" role="tablist">
          {TABS.map((t) => (
            <button key={t.id} role="tab" aria-selected={tab === t.id} className={tab === t.id ? "active" : ""} onClick={() => setTab(t.id)}>
              {t.label}
            </button>
          ))}
        </nav>
        <div className="settings-body">
          {tab === "ai" && <AiTab {...props} />}
          {tab === "persona" && <PersonaTab {...props} />}
          {tab === "character" && <CharacterTab {...props} />}
          {tab === "display" && <DisplayTab {...props} />}
        </div>
      </div>
    </div>
  );
}

function AiTab({ ai, keys, usage, onAi, onKey, onResetUsage, onGuide, available, onLoadModels }: Props) {
  const p = PROVIDERS[ai.provider];
  const [loading, setLoading] = useState("");
  const fetched = available[ai.provider];
  const [draft, setDraft] = useState(keys[ai.provider]);
  const [shown, setShown] = useState(false);
  const yen = estimateYen(usage, ai.priceIn, ai.priceOut);
  const price = (v: string) => (v.trim() === "" ? null : Math.max(0, Number(v)) || 0);
  return (
    <>
      <label className="field">
        <span>使うAI</span>
        <select
          value={ai.provider}
          onChange={(e) => {
            const provider = e.target.value as ProviderId;
            onAi({ ...ai, provider });
            setDraft(keys[provider]);
          }}
        >
          {(Object.keys(PROVIDERS) as ProviderId[]).map((id) => (
            <option key={id} value={id}>
              {PROVIDERS[id].label}
            </option>
          ))}
        </select>
      </label>
      <label className="field">
        <span>モデル</span>
        {fetched?.length ? (
          // 使えるモデルを確認した後は、その一覧から選ぶ
          <select value={ai.models[ai.provider]} onChange={(e) => onAi({ ...ai, models: { ...ai.models, [ai.provider]: e.target.value } })}>
            {[...new Set([ai.models[ai.provider], ...fetched])].map((m) => (
              <option key={m} value={m}>
                {m}
                {fetched.includes(m) ? "" : "（使えません）"}
              </option>
            ))}
          </select>
        ) : (
          <>
            <input
              list="models"
              value={ai.models[ai.provider]}
              onChange={(e) => onAi({ ...ai, models: { ...ai.models, [ai.provider]: e.target.value.trim() } })}
            />
            <datalist id="models">
              {p.models.map((m) => (
                <option key={m} value={m} />
              ))}
            </datalist>
          </>
        )}
      </label>
      {keys[ai.provider] && (
        <div className="row">
          <button
            type="button"
            className="ghost-btn"
            disabled={loading === "…"}
            onClick={async () => {
              setLoading("…");
              try {
                const m = await onLoadModels(ai.provider);
                setLoading(`使えるモデルを確認しました（今は ${m}）`);
              } catch (e: any) {
                setLoading(`確認できませんでした：${e.message}`);
              }
            }}
          >
            使えるモデルを確認
          </button>
          <span className="hint">{loading === "…" ? "確認中…" : loading}</span>
        </div>
      )}
      {fetched && <p className="hint">モデル欄をタップすると、このキーで使える {fetched.length} 個のモデルから選べます。</p>}
      <button type="button" className="text-link" onClick={() => onGuide(ai.provider)}>
        📖 {p.label} の APIキーの取り方を見る
      </button>
      <label className="field">
        <span>APIキー</span>
        <div className="row">
          <input
            type={shown ? "text" : "password"}
            value={draft}
            placeholder={p.keyHint}
            autoComplete="off"
            spellCheck={false}
            onChange={(e) => setDraft(e.target.value.trim())}
          />
          <button type="button" className="ghost-btn" onClick={() => setShown(!shown)}>
            {shown ? "隠す" : "表示"}
          </button>
        </div>
      </label>
      <div className="row end">
        {keys[ai.provider] && (
          <button
            className="ghost-btn"
            onClick={() => {
              onKey(ai.provider, "");
              setDraft("");
            }}
          >
            削除
          </button>
        )}
        <button className="primary-btn" disabled={draft === keys[ai.provider]} onClick={() => onKey(ai.provider, draft)}>
          {keys[ai.provider] && draft === keys[ai.provider] ? "保存済み" : "保存"}
        </button>
      </div>
      <p className="hint">
        キーはこの端末の中だけに暗号化して保存し、AIサービスへの接続にだけ使います。念のため、各サービスの管理画面で利用上限額を設定してください。
        <br />
        <a href={p.policy} target="_blank" rel="noreferrer">
          {p.label} のデータの取り扱い
        </a>
      </p>

      <h3>利用量の目安</h3>
      <p className="usage">
        入力 {usage.input.toLocaleString()} ／ 出力 {usage.output.toLocaleString()} トークン
        {yen != null && <strong>　約 {yen < 1 ? yen.toFixed(2) : Math.round(yen).toLocaleString()} 円</strong>}
      </p>
      <div className="row">
        <label className="field small">
          <span>入力の単価（円／100万トークン）</span>
          <input inputMode="decimal" value={ai.priceIn ?? ""} onChange={(e) => onAi({ ...ai, priceIn: price(e.target.value) })} />
        </label>
        <label className="field small">
          <span>出力の単価</span>
          <input inputMode="decimal" value={ai.priceOut ?? ""} onChange={(e) => onAi({ ...ai, priceOut: price(e.target.value) })} />
        </label>
      </div>
      <p className="hint">単価は使っているモデルの料金表を見て入れてください。入れると金額の目安を出します。会話は直近20件だけを送って量を抑えています。</p>
      <button className="ghost-btn" onClick={onResetUsage}>
        利用量をリセット
      </button>
    </>
  );
}

function PersonaTab({ persona, onPersona }: Props) {
  const set = (patch: Partial<Persona>) => onPersona({ ...persona, ...patch });
  return (
    <>
      <label className="field">
        <span>名前</span>
        <input value={persona.name} maxLength={20} onChange={(e) => set({ name: e.target.value })} onBlur={() => !persona.name.trim() && set({ name: DEFAULT_PERSONA.name })} />
      </label>
      <label className="field">
        <span>あなたの呼び方</span>
        <input value={persona.userCall} maxLength={20} onChange={(e) => set({ userCall: e.target.value })} />
      </label>
      <label className="field">
        <span>口調</span>
        <input value={persona.tone} maxLength={40} placeholder="例：丁寧語、元気なタメ口、関西弁" onChange={(e) => set({ tone: e.target.value })} />
      </label>
      <label className="field">
        <span>性格</span>
        <textarea rows={3} value={persona.personality} maxLength={400} onChange={(e) => set({ personality: e.target.value })} />
      </label>
      <fieldset className="field">
        <legend>サポートしてほしいこと（複数選べます）</legend>
        <div className="chips">
          {PURPOSES.map((p) => {
            const on = persona.purposes.includes(p.id);
            return (
              <button
                key={p.id}
                type="button"
                className={`chip ${on ? "on" : ""}`}
                aria-pressed={on}
                onClick={() => set({ purposes: on ? persona.purposes.filter((x) => x !== p.id) : [...persona.purposes, p.id] })}
              >
                {p.label}
              </button>
            );
          })}
        </div>
      </fieldset>
      <p className="hint">選んだ内容に合わせて、AIへの指示を自動で切り替えます。健康の話題で診断はせず、投資の売買の助言もしません。</p>
      <button className="ghost-btn" onClick={() => onPersona(DEFAULT_PERSONA)}>
        初期設定に戻す
      </button>
    </>
  );
}

function CharacterTab({ hasVrm, vrmName, vrmError, onVrm }: Props) {
  return (
    <>
      <p>
        いまのキャラクター：<strong>{hasVrm ? vrmName || "読み込んだVRM" : "仮のキャラクター（光の精）"}</strong>
      </p>
      <label className="primary-btn file-btn">
        VRMファイルを読み込む
        <input
          type="file"
          accept=".vrm"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) onVrm(f);
            e.target.value = "";
          }}
        />
      </label>
      {hasVrm && (
        <button className="ghost-btn" onClick={() => onVrm(null)}>
          仮のキャラクターに戻す
        </button>
      )}
      {vrmError && <p className="error-text">{vrmError}</p>}
      <p className="hint">
        VRoid Studio で作ったモデルや、VRoid Hub で配布されているモデル（利用条件を確認してください）が使えます。読み込んだファイルはこの端末の中だけに保存します。自分で作ったものか、使う権利のあるモデルだけを読み込んでください。
      </p>
      <p className="hint">キャラクターをタップすると反応します。何もないところをタップすると、そこへ移動します。</p>
    </>
  );
}

function DisplayTab({ display, onDisplay, onClearChat }: Props) {
  const set = (patch: Partial<DisplaySettings>) => onDisplay({ ...display, ...patch });
  return (
    <>
      <Toggle label="時計を表示" checked={display.clock} onChange={(clock) => set({ clock })} />
      <Toggle label="秒を表示" checked={display.seconds} disabled={!display.clock} onChange={(seconds) => set({ seconds })} />
      <fieldset className="field">
        <legend>時計の位置</legend>
        <div className="chips">
          {CORNERS.map((c) => (
            <button key={c.id} type="button" className={`chip ${display.clockCorner === c.id ? "on" : ""}`} aria-pressed={display.clockCorner === c.id} onClick={() => set({ clockCorner: c.id })}>
              {c.label}
            </button>
          ))}
        </div>
      </fieldset>
      <Toggle label="時刻に合わせた声かけ" checked={display.voiceLines} onChange={(voiceLines) => set({ voiceLines })} />
      <Toggle label="省電力モード（背景を止める）" checked={display.powerSave} onChange={(powerSave) => set({ powerSave })} />
      <p className="hint">画質は端末の性能に合わせて自動で調整します。動きが重い時は省電力モードにしてください。</p>
      <h3>データ</h3>
      <button
        className="ghost-btn danger"
        onClick={() => {
          if (confirm("会話の履歴をすべて消しますか？")) onClearChat();
        }}
      >
        会話の履歴を消す
      </button>
    </>
  );
}

function Toggle({ label, checked, disabled, onChange }: { label: string; checked: boolean; disabled?: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className={`toggle ${disabled ? "disabled" : ""}`}>
      <span>{label}</span>
      <input type="checkbox" role="switch" checked={checked} disabled={disabled} onChange={(e) => onChange(e.target.checked)} />
      <i aria-hidden />
    </label>
  );
}
