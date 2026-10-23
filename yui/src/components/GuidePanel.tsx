import { useState } from "react";
import { COMMON_CAUTIONS, GUIDES } from "../lib/guides";
import type { ProviderId } from "../lib/settings";

interface Props {
  initial?: ProviderId;
  configured: Record<ProviderId, string>;
  onSetup: (provider: ProviderId) => void;
  onClose: () => void;
}

// APIキーの取り方マニュアル。AIごとにタブで切り替えて見る
export function GuidePanel({ initial = "gemini", configured, onSetup, onClose }: Props) {
  const [id, setId] = useState<ProviderId>(initial);
  const g = GUIDES.find((x) => x.id === id)!;
  return (
    <div className="overlay" onClick={onClose}>
      <div className="settings glass" role="dialog" aria-label="APIキーの取り方" onClick={(e) => e.stopPropagation()}>
        <header className="settings-head">
          <h2>GUIDE</h2>
          <button className="icon-btn" onClick={onClose} aria-label="閉じる">
            ✕
          </button>
        </header>
        <nav className="tabs" role="tablist">
          {GUIDES.map((x) => (
            <button key={x.id} role="tab" aria-selected={id === x.id} className={id === x.id ? "active" : ""} onClick={() => setId(x.id)}>
              {x.name.replace(/（.*）/, "")}
              {configured[x.id] ? " ✓" : ""}
            </button>
          ))}
        </nav>
        <div className="settings-body guide">
          <p className="guide-title">{g.name} の APIキーの取り方</p>
          <p>{g.summary}</p>
          <p className="hint">料金：{g.cost}</p>
          <ol className="steps">
            {g.steps.map((s, i) => (
              <li key={i}>
                <strong>{s.title}</strong>
                <span>{s.body}</span>
                {s.link && (
                  <a className="ghost-btn link-btn" href={s.link.url} target="_blank" rel="noreferrer">
                    {s.link.label} ↗
                  </a>
                )}
              </li>
            ))}
          </ol>
          <h3>モデル名</h3>
          <p className="hint">{g.models}</p>
          <h3>注意</h3>
          <ul className="cautions">
            {[...g.cautions, ...COMMON_CAUTIONS].map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <button className="primary-btn" onClick={() => onSetup(g.id)}>
            キーをコピーしたら：{g.name.replace(/（.*）/, "")} を設定する
          </button>
        </div>
      </div>
    </div>
  );
}
