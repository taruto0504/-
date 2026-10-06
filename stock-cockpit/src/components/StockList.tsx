import { useState, type CSSProperties } from "react";
import { BROKERS, STOCKS } from "../data/market";
import { pct, price } from "../lib/format";
import { useStore } from "../store";
import { Icon } from "./Icon";
import { Num } from "./Num";

type Filter = "all" | "watch" | "JP" | "US";

export function StockList({ onOpen }: { onOpen: (code: string) => void }) {
  const { state, dispatch } = useStore();
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const quotes = state.feed?.quotes ?? {};
  const kw = q.trim().toLowerCase();

  const list = STOCKS.filter((s) => {
    if (filter === "watch" && !state.watchlist.includes(s.code)) return false;
    if ((filter === "JP" || filter === "US") && s.market !== filter) return false;
    return !kw || s.code.toLowerCase().includes(kw) || s.name.toLowerCase().includes(kw) || s.sector.includes(kw);
  });

  return (
    <section className="panel">
      <div className="panel-head">
        <h2>銘柄</h2>
      </div>
      <label className="search">
        <Icon name="search" size={18} />
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="銘柄名・コード・業種で検索" />
      </label>
      <div className="seg small wide">
        {([["all", "すべて"], ["watch", "ウォッチ"], ["JP", "国内株"], ["US", "米国株"]] as [Filter, string][]).map(([id, label]) => (
          <button key={id} className={filter === id ? "on" : ""} onClick={() => setFilter(id)}>{label}</button>
        ))}
      </div>
      {list.length === 0 && <p className="empty">該当する銘柄がありません</p>}
      <ul className="stock-list">
        {list.map((s) => {
          const qt = quotes[s.code];
          const r = qt ? (qt.price - qt.prevClose) / qt.prevClose : 0;
          const watched = state.watchlist.includes(s.code);
          return (
            <li key={s.code} className={state.selected === s.code ? "selected" : ""}>
              <button className={`star ${watched ? "on" : ""}`} aria-label={watched ? "ウォッチから外す" : "ウォッチに追加"}
                onClick={() => dispatch({ type: "watch", code: s.code })}>
                <Icon name="star" size={18} filled={watched} />
              </button>
              <button className="stock-row" onClick={() => onOpen(s.code)}>
                <div className="stock-name">
                  <span className="code">{s.code}<em>{s.market === "US" ? "米国" : "国内"}</em></span>
                  <span className="name">{s.name}</span>
                  <span className="avail">
                    {BROKERS.map((b) => (
                      <i key={b.id} className={s.brokers.includes(b.id) ? "" : "off"} style={{ "--c": b.color } as CSSProperties} title={b.name}>
                        {b.short}
                      </i>
                    ))}
                  </span>
                </div>
                {qt && (
                  <div className="stock-quote">
                    <Num value={qt.price} text={price(qt.price, s.currency)} dir={qt.tick > 0 ? "up" : qt.tick < 0 ? "down" : "flat"} />
                    <span className={`num tiny ${r > 0 ? "up" : r < 0 ? "down" : "flat"}`}>{pct(r)}</span>
                  </div>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
