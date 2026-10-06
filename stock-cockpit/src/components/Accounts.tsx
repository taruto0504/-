import type { CSSProperties } from "react";
import { INDICES, brokerById, stockByCode } from "../data/market";
import { num, pct, price, signedYen, yen } from "../lib/format";
import { fx, valueAll } from "../lib/portfolio";
import { useStore } from "../store";
import { Icon } from "./Icon";
import { Num } from "./Num";

export function IndexStrip() {
  const { state } = useStore();
  const ix = state.feed?.indices;
  return (
    <div className="index-strip">
      {INDICES.map((i) => {
        const v = ix?.[i.id];
        if (!v) return null;
        const r = (v.value - v.prev) / v.prev;
        return (
          <div key={i.id} className="index-item">
            <span className="label">{i.name}</span>
            <span className="num">{num(v.value)}</span>
            <span className={`num tiny ${r > 0 ? "up" : r < 0 ? "down" : "flat"}`}>{pct(r)}</span>
          </div>
        );
      })}
      <div className="index-item">
        <span className="label">USD/JPY</span>
        <span className="num">150.00</span>
        <span className="num tiny flat">固定</span>
      </div>
    </div>
  );
}

export function AccountsPanel({ onAdd }: { onAdd: () => void }) {
  const { state } = useStore();
  const { list } = valueAll(state.accounts, state.feed?.quotes ?? {});
  return (
    <section className="panel">
      <div className="panel-head">
        <h2>口座別</h2>
        <button className="ghost-btn" onClick={onAdd}>
          <Icon name="plus" size={16} /> 証券口座を追加
        </button>
      </div>
      <ul className="account-list">
        {list.map((a) => {
          const b = brokerById(a.account.brokerId);
          return (
            <li key={a.account.id} className="account-row" style={{ "--broker": b.color } as CSSProperties}>
              <div className="account-name">
                <span className="broker-tag">{b.short}</span>
                <span>{a.account.label}</span>
              </div>
              <div className="account-figs">
                <span className="num">{yen(a.total)}</span>
                <span className={`num tiny ${a.dayPl > 0 ? "up" : a.dayPl < 0 ? "down" : "flat"}`}>本日 {signedYen(a.dayPl)}</span>
                <span className="num tiny dim">株 {yen(a.stock)} / 現金 {yen(a.cash)}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export function HoldingsPanel({ onOpen }: { onOpen: (code: string) => void }) {
  const { state } = useStore();
  const quotes = state.feed?.quotes ?? {};
  const rows = state.accounts.flatMap((a) => a.holdings.map((h) => ({ a, h })));
  return (
    <section className="panel">
      <div className="panel-head">
        <h2>保有銘柄</h2>
        <span className="dim tiny">{rows.length}件</span>
      </div>
      {rows.length === 0 && <p className="empty">保有している銘柄はありません</p>}
      <ul className="holding-list">
        {rows.map(({ a, h }) => {
          const s = stockByCode(h.code);
          const q = quotes[h.code];
          if (!q) return null;
          const k = fx(s);
          const value = q.price * h.qty * k;
          const day = (q.price - q.prevClose) * h.qty * k;
          const pl = (q.price - h.avgCost) * h.qty * k;
          const b = brokerById(a.brokerId);
          return (
            <li key={`${a.id}-${h.code}`}>
              <button className="holding-row" onClick={() => onOpen(h.code)}>
                <div className="holding-name">
                  <span className="code">{s.code}</span>
                  <span className="name">{s.name}</span>
                  <span className="broker-dot" style={{ background: b.color }} title={b.name} />
                </div>
                <div className="holding-price">
                  <Num value={q.price} text={price(q.price, s.currency)} dir={q.tick > 0 ? "up" : q.tick < 0 ? "down" : "flat"} />
                  <span className="num tiny dim">{num(h.qty)}株</span>
                </div>
                <div className="holding-figs">
                  <span className="num">{yen(value)}</span>
                  <span className={`num tiny ${day > 0 ? "up" : day < 0 ? "down" : "flat"}`}>本日 {signedYen(day)}</span>
                  <span className={`num tiny ${pl > 0 ? "up" : pl < 0 ? "down" : "flat"}`}>損益 {signedYen(pl)}</span>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
