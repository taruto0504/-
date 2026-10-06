import { useState } from "react";
import { brokerById, stockByCode } from "../data/market";
import { clock, num, price, yen } from "../lib/format";
import { useStore } from "../store";

type Filter = "all" | "pending" | "done";
const STATUS = { pending: "注文中", filled: "約定", cancelled: "取消", rejected: "失効" } as const;

export function Orders() {
  const { state, dispatch } = useStore();
  const [filter, setFilter] = useState<Filter>("all");
  const [acc, setAcc] = useState("all");

  const list = state.orders.filter(
    (o) =>
      (acc === "all" || o.accountId === acc) &&
      (filter === "all" || (filter === "pending" ? o.status === "pending" : o.status !== "pending")),
  );

  return (
    <section className="panel">
      <div className="panel-head">
        <h2>注文・約定</h2>
        <span className="dim tiny">{state.orders.filter((o) => o.status === "pending").length}件 注文中</span>
      </div>
      <div className="filters">
        <div className="seg small">
          {([["all", "すべて"], ["pending", "注文中"], ["done", "完了"]] as [Filter, string][]).map(([id, label]) => (
            <button key={id} className={filter === id ? "on" : ""} onClick={() => setFilter(id)}>{label}</button>
          ))}
        </div>
        <select className="select" value={acc} onChange={(e) => setAcc(e.target.value)} aria-label="口座で絞り込み">
          <option value="all">全口座</option>
          {state.accounts.map((a) => <option key={a.id} value={a.id}>{brokerById(a.brokerId).name}</option>)}
        </select>
      </div>
      {list.length === 0 && <p className="empty">注文はまだありません。銘柄を選んで発注してみましょう。</p>}
      <ul className="order-list">
        {list.map((o) => {
          const s = stockByCode(o.code);
          const a = state.accounts.find((x) => x.id === o.accountId);
          const b = a ? brokerById(a.brokerId) : null;
          return (
            <li key={o.id} className={`order-row ${o.status}`}>
              <div className="or-main">
                <span className={`side-tag ${o.side}`}>{o.side === "buy" ? "買" : "売"}</span>
                <div>
                  <div className="or-name">{s.name} <span className="code">{s.code}</span></div>
                  <div className="dim tiny">
                    {b && <i className="broker-dot" style={{ background: b.color }} />} {b?.name} ・ {num(o.qty)}株 ・{" "}
                    {o.type === "market" ? "成行" : `指値 ${price(o.limitPrice!, s.currency)}`}
                  </div>
                </div>
              </div>
              <div className="or-side">
                <span className={`status ${o.status}`}>{STATUS[o.status]}</span>
                {o.status === "filled" && (
                  <span className="num tiny">{price(o.fillPrice!, s.currency)} ・ 手数料{yen(o.fee ?? 0)}</span>
                )}
                {o.reason && <span className="tiny down-text">{o.reason}</span>}
                <span className="num tiny dim">{clock(o.doneAt ?? o.createdAt)}</span>
                {o.status === "pending" && (
                  <button className="ghost-btn small" onClick={() => dispatch({ type: "cancel", id: o.id })}>取消</button>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
