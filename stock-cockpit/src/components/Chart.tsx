import { useMemo, useState } from "react";
import type { Candle, Stock } from "../types";
import { price as fmtPrice } from "../lib/format";

const MA = [5, 25] as const;

/** ローソク足+移動平均。SVG で描くので外部ライブラリ不要 */
export function CandleChart({ candles, stock, prevClose }: { candles: Candle[]; stock: Stock; prevClose: number }) {
  const [show, setShow] = useState(60);
  const data = candles.slice(-show);
  const W = 640;
  const H = 260;
  const PAD_R = 58;
  const plotW = W - PAD_R;

  const g = useMemo(() => {
    const ma = MA.map((n) =>
      candles.map((_, i) => (i + 1 >= n ? candles.slice(i + 1 - n, i + 1).reduce((s, c) => s + c.c, 0) / n : null)).slice(-show),
    );
    const vals = data.flatMap((c) => [c.h, c.l]).concat(prevClose);
    let min = Math.min(...vals);
    let max = Math.max(...vals);
    const pad = (max - min) * 0.08 || max * 0.001;
    min -= pad;
    max += pad;
    const y = (v: number) => 8 + (1 - (v - min) / (max - min)) * (H - 16);
    const step = plotW / data.length;
    const ticks = Array.from({ length: 5 }, (_, i) => min + ((max - min) * (i + 0.5)) / 5);
    return { ma, y, step, ticks };
  }, [candles, show, data, prevClose, plotW]);

  const last = data[data.length - 1];

  return (
    <div className="chart-wrap">
      <div className="chart-tools">
        <span className="dim tiny">10秒足(デモ)</span>
        <span className="ma-legend"><i className="ma0" />MA{MA[0]} <i className="ma1" />MA{MA[1]}</span>
        <div className="seg small">
          {[30, 60, 90].map((n) => (
            <button key={n} className={show === n ? "on" : ""} onClick={() => setShow(n)}>{n}本</button>
          ))}
        </div>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="candle-chart" preserveAspectRatio="none">
        {g.ticks.map((t) => (
          <g key={t}>
            <line x1="0" x2={plotW} y1={g.y(t)} y2={g.y(t)} className="grid" />
            <text x={W - 4} y={g.y(t) + 4} className="axis" textAnchor="end">{fmtPrice(t, stock.currency, prevClose)}</text>
          </g>
        ))}
        <line x1="0" x2={plotW} y1={g.y(prevClose)} y2={g.y(prevClose)} className="prev-line" />
        {data.map((c, i) => {
          const x = i * g.step + g.step / 2;
          const up = c.c >= c.o;
          const bw = Math.max(1.5, g.step * 0.62);
          const top = g.y(Math.max(c.o, c.c));
          const bh = Math.max(1, Math.abs(g.y(c.o) - g.y(c.c)));
          return (
            <g key={c.t} className={up ? "cdl up" : "cdl down"}>
              <line x1={x} x2={x} y1={g.y(c.h)} y2={g.y(c.l)} />
              <rect x={x - bw / 2} y={top} width={bw} height={bh} />
            </g>
          );
        })}
        {g.ma.map((series, k) => (
          <path key={k} className={`ma ma${k}`} fill="none"
            d={series.map((v, i) => (v == null ? "" : `${series[i - 1] == null ? "M" : "L"}${(i * g.step + g.step / 2).toFixed(1)},${g.y(v).toFixed(1)}`)).join("")} />
        ))}
        {last && (
          <g>
            <line x1="0" x2={plotW} y1={g.y(last.c)} y2={g.y(last.c)} className="last-line" />
            <rect x={plotW} y={g.y(last.c) - 9} width={PAD_R} height="18" className="last-tag" />
            <text x={W - 4} y={g.y(last.c) + 4} textAnchor="end" className="last-text">{fmtPrice(last.c, stock.currency)}</text>
          </g>
        )}
      </svg>
    </div>
  );
}
