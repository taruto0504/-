import { useMemo } from "react";
import { brokerById } from "../data/market";
import { pct, signedYen, yen } from "../lib/format";
import { valueAll } from "../lib/portfolio";
import { useStore } from "../store";
import type { AssetView } from "../types";
import { Num } from "./Num";

const VIEWS: { id: AssetView; label: string }[] = [
  { id: "chart", label: "チャート" },
  { id: "card", label: "カード" },
  { id: "gauge", label: "ゲージ" },
  { id: "radar", label: "レーダー" },
];

export function AssetPanel() {
  const { state, dispatch } = useStore();
  const quotes = state.feed?.quotes ?? {};
  const v = valueAll(state.accounts, quotes);
  const base = v.total - v.dayPl;
  const dayRate = base ? v.dayPl / base : 0;
  const view = state.settings.assetView;

  return (
    <section className="panel asset-panel">
      <div className="panel-head">
        <h2>総資産</h2>
        <div className="seg small">
          {VIEWS.map((x) => (
            <button key={x.id} className={view === x.id ? "on" : ""} onClick={() => dispatch({ type: "settings", patch: { assetView: x.id } })}>
              {x.label}
            </button>
          ))}
        </div>
      </div>

      {view !== "card" && (
        <div className="asset-figure">
          <Num value={Math.round(v.total)} text={yen(v.total)} dir="flat" className="big" />
          <div className="asset-sub">
            <span>本日の損益</span>
            <span className={`num ${v.dayPl > 0 ? "up" : v.dayPl < 0 ? "down" : "flat"}`}>
              {signedYen(v.dayPl)}({pct(dayRate)})
            </span>
          </div>
        </div>
      )}

      {view === "chart" && <AssetLine history={state.history} />}
      {view === "card" && <AssetCard total={v.total} dayPl={v.dayPl} dayRate={dayRate} />}
      {view === "gauge" && <AssetGauge dayRate={dayRate} list={v.list} />}
      {view === "radar" && <AssetRadar list={v.list} total={v.total} />}
    </section>
  );
}

function AssetLine({ history }: { history: { t: number; v: number }[] }) {
  const W = 600;
  const H = 150;
  const d = useMemo(() => {
    if (history.length < 2) return { line: "", area: "", up: true };
    const vs = history.map((p) => p.v);
    const min = Math.min(...vs);
    const max = Math.max(...vs);
    const span = max - min || 1;
    const pts = history.map((p, i) => [(i / (history.length - 1)) * W, H - 10 - ((p.v - min) / span) * (H - 20)]);
    const line = pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`).join("");
    return { line, area: `${line}L${W},${H}L0,${H}Z`, up: vs[vs.length - 1] >= vs[0] };
  }, [history]);
  const last = d.line.split(/[ML]/).pop()?.split(",");

  return (
    <svg className="asset-line" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
      <defs>
        <linearGradient id="assetFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="var(--accent)" stopOpacity=".35" />
          <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((r) => (
        <line key={r} x1="0" x2={W} y1={H * r} y2={H * r} className="grid" />
      ))}
      <path d={d.area} fill="url(#assetFill)" />
      <path d={d.line} className="draw-line" fill="none" stroke="var(--accent)" strokeWidth="2" vectorEffect="non-scaling-stroke" pathLength={1} />
      {last && <circle cx={last[0]} cy={last[1]} r="4" className="pulse-dot" />}
    </svg>
  );
}

function AssetCard({ total, dayPl, dayRate }: { total: number; dayPl: number; dayRate: number }) {
  return (
    <div className="holo-card">
      <div className="holo-shine" />
      <div className="holo-top">
        <span className="chip" />
        <span className="holo-brand">COCKPIT</span>
      </div>
      <div className="holo-total num">{yen(total)}</div>
      <div className={`holo-pl num ${dayPl > 0 ? "up" : dayPl < 0 ? "down" : "flat"}`}>
        本日 {signedYen(dayPl)}({pct(dayRate)})
      </div>
      <div className="holo-bottom">
        <span>DEMO PILOT</span>
        <span className="num">**** 2026</span>
      </div>
    </div>
  );
}

function AssetGauge({ dayRate, list }: { dayRate: number; list: ReturnType<typeof valueAll>["list"] }) {
  // -3%〜+3% を 21 個の LED で表示する
  const N = 21;
  const center = Math.floor(N / 2);
  const lit = Math.max(-center, Math.min(center, Math.round((dayRate / 0.03) * center)));
  return (
    <div className="gauge">
      <div className="led-row">
        {Array.from({ length: N }, (_, i) => {
          const k = i - center;
          const on = k === 0 || (lit > 0 && k > 0 && k <= lit) || (lit < 0 && k < 0 && k >= lit);
          return <span key={i} className={`led ${k > 0 ? "up" : k < 0 ? "down" : "mid"} ${on ? "on" : ""}`} />;
        })}
      </div>
      <div className="led-scale num"><span>-3%</span><span>0</span><span>+3%</span></div>
      <div className="ratio-list">
        {list.map((a) => {
          const b = brokerById(a.account.brokerId);
          const r = a.total ? a.stock / a.total : 0;
          return (
            <div key={a.account.id} className="ratio-row">
              <span className="ratio-name"><i style={{ background: b.color }} />{b.name}</span>
              <div className="ratio-bar">
                <span style={{ width: `${r * 100}%`, background: b.color }} />
              </div>
              <span className="num tiny">株{Math.round(r * 100)}% / 現金{100 - Math.round(r * 100)}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AssetRadar({ list, total }: { list: ReturnType<typeof valueAll>["list"]; total: number }) {
  const R = 70;
  const C = 2 * Math.PI * R;
  let offset = 0;
  return (
    <div className="radar">
      <svg viewBox="0 0 200 200" className="radar-svg">
        {[30, 50, 70, 90].map((r) => (
          <circle key={r} cx="100" cy="100" r={r} className="radar-ring" />
        ))}
        <g transform="rotate(-90 100 100)">
          {list.map((a) => {
            const len = total ? (a.total / total) * C : 0;
            const el = (
              <circle key={a.account.id} cx="100" cy="100" r={R} fill="none" strokeWidth="14"
                stroke={brokerById(a.account.brokerId).color} strokeDasharray={`${Math.max(0, len - 2)} ${C}`} strokeDashoffset={-offset} />
            );
            offset += len;
            return el;
          })}
        </g>
        <g className="radar-sweep">
          <path d="M100 100 L100 10 A90 90 0 0 1 163.6 36.4 Z" fill="url(#sweep)" />
        </g>
        <defs>
          <linearGradient id="sweep" x1="0" x2="1">
            <stop offset="0" stopColor="var(--accent)" stopOpacity=".35" />
            <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <ul className="legend">
        {list.map((a) => {
          const b = brokerById(a.account.brokerId);
          return (
            <li key={a.account.id}>
              <i style={{ background: b.color }} />
              <span>{b.name}</span>
              <span className="num">{total ? Math.round((a.total / total) * 100) : 0}%</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
