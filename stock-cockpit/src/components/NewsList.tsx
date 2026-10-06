import { useState } from "react";
import { stockByCode } from "../data/market";
import { ago } from "../lib/format";
import { useStore } from "../store";

type Filter = "mine" | "watch" | "all";

export function NewsList({ code, compact = false, onOpen }: { code?: string; compact?: boolean; onOpen?: (code: string) => void }) {
  const { state } = useStore();
  const [filter, setFilter] = useState<Filter>("mine");
  const held = new Set(state.accounts.flatMap((a) => a.holdings.map((h) => h.code)));

  const items = state.news.filter((n) => {
    if (code) return n.code === code;
    if (filter === "mine") return n.code == null || held.has(n.code);
    if (filter === "watch") return n.code != null && state.watchlist.includes(n.code);
    return true;
  });

  return (
    <div className={`news ${compact ? "compact" : ""}`}>
      {!code && (
        <div className="seg small wide">
          {([["mine", "保有銘柄"], ["watch", "ウォッチ"], ["all", "すべて"]] as [Filter, string][]).map(([id, label]) => (
            <button key={id} className={filter === id ? "on" : ""} onClick={() => setFilter(id)}>{label}</button>
          ))}
        </div>
      )}
      {items.length === 0 && <p className="empty">ニュースはまだありません</p>}
      <ul className="news-list">
        {items.map((n) => {
          const s = n.code ? stockByCode(n.code) : null;
          return (
            <li key={n.id} className={Date.now() - n.t < 60_000 ? "fresh" : ""}>
              <button className="news-item" disabled={!s || !onOpen} onClick={() => s && onOpen?.(s.code)}>
                <div className="news-meta">
                  <span className={`kind ${n.kind}`}>{n.kind === "disclosure" ? "開示" : "ニュース"}</span>
                  {s && <span className="code">{s.code} {s.name}</span>}
                  <span className="dim">{ago(n.t)}</span>
                </div>
                <p className="news-title">{n.title}</p>
                <span className="dim tiny">{n.source}</span>
              </button>
            </li>
          );
        })}
      </ul>
      <p className="hint">ニュースは事実の集約で、売買をおすすめするものではありません(デモは架空の記事です)。</p>
    </div>
  );
}
