import { useEffect, useState, type CSSProperties } from "react";
import { brokerById, stockByCode } from "../data/market";
import { tickSize } from "../data/feed";
import { num, price, yen } from "../lib/format";
import { amountJpy, buyingPower, feeFor, sellableQty } from "../lib/portfolio";
import { newOrderId, useStore } from "../store";
import type { OrderType, Side } from "../types";

export function OrderPanel({ code, picked, onPlaced }: { code: string; picked?: { price: number; key: number } | null; onPlaced?: () => void }) {
  const { state, dispatch } = useStore();
  const s = stockByCode(code);
  const q = state.feed?.quotes[code];
  const usable = state.accounts.filter((a) => s.brokers.includes(a.brokerId));

  const [accountId, setAccountId] = useState(usable[0]?.id ?? "");
  const [side, setSide] = useState<Side>("buy");
  const [type, setType] = useState<OrderType>("market");
  const [units, setUnits] = useState(1);
  const [limit, setLimit] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [done, setDone] = useState<string | null>(null);

  // 銘柄が変わったら入力をリセット
  useEffect(() => {
    setAccountId((cur) => (usable.some((a) => a.id === cur) ? cur : usable[0]?.id ?? ""));
    setUnits(1);
    setLimit("");
    setConfirm(false);
    setDone(null);
  }, [code]);

  useEffect(() => {
    if (picked) {
      setType("limit");
      setLimit(String(picked.price));
      setConfirm(false);
    }
  }, [picked]);

  if (!q) return null;
  const account = state.accounts.find((a) => a.id === accountId);
  const qty = units * s.lot;
  const limitNum = Number(limit);
  const unitPrice = type === "limit" ? limitNum : q.price;
  const amount = amountJpy(s, unitPrice || 0, qty);
  const fee = account ? feeFor(account.brokerId, s, unitPrice || 0, qty) : 0;
  const power = account ? buyingPower(account, state.orders, state.feed!.quotes) : 0;
  const sellable = account ? sellableQty(account, code, state.orders) : 0;

  let error = "";
  if (!account) error = "この銘柄を取り扱う口座がありません";
  else if (type === "limit" && (!limitNum || limitNum <= 0)) error = "指値を入力してください";
  else if (type === "limit" && Math.abs(Math.round(limitNum / tickSize(s, limitNum)) * tickSize(s, limitNum) - limitNum) > 1e-6)
    error = `呼値(${tickSize(s, limitNum)}刻み)に合わせてください`;
  else if (side === "buy" && amount + fee > power) error = "買付余力が足りません";
  else if (side === "sell" && qty > sellable) error = `売却できる数量は${num(sellable)}株です`;

  const place = () => {
    if (!account || error) return;
    dispatch({
      type: "place",
      order: {
        id: newOrderId(),
        accountId: account.id,
        code,
        side,
        type,
        qty,
        limitPrice: type === "limit" ? limitNum : undefined,
        status: "pending",
        createdAt: Date.now(),
      },
    });
    setConfirm(false);
    setDone(`${side === "buy" ? "買い" : "売り"}注文を受け付けました`);
    onPlaced?.();
  };

  return (
    <div className={`order-panel ${side}`}>
      <div className="order-title">
        <span className="code">{s.code}</span>
        <span>{s.name}</span>
        <span className="num">{price(q.price, s.currency)}</span>
      </div>

      <div className="field">
        <span className="field-label">発注する口座</span>
        <div className="account-pick">
          {state.accounts.map((a) => {
            const b = brokerById(a.brokerId);
            const ok = s.brokers.includes(a.brokerId);
            return (
              <button key={a.id} disabled={!ok} className={a.id === accountId ? "on" : ""} style={{ "--c": b.color } as CSSProperties}
                onClick={() => { setAccountId(a.id); setConfirm(false); }}>
                <b>{b.short}</b>
                <span>{b.name}</span>
                <small>{ok ? `手数料 ${yen(b.fee(amount, s.market))}` : "取扱なし"}</small>
              </button>
            );
          })}
        </div>
      </div>

      <div className="seg side-seg">
        <button className={side === "buy" ? "on buy" : ""} onClick={() => { setSide("buy"); setConfirm(false); }}>買い</button>
        <button className={side === "sell" ? "on sell" : ""} onClick={() => { setSide("sell"); setConfirm(false); }}>売り</button>
      </div>

      <div className="field-row">
        <div className="field">
          <span className="field-label">数量({s.lot}株単位)</span>
          <div className="stepper">
            <button onClick={() => { setUnits((u) => Math.max(1, u - 1)); setConfirm(false); }} aria-label="減らす">−</button>
            <span className="num">{num(qty)}株</span>
            <button onClick={() => { setUnits((u) => Math.min(999, u + 1)); setConfirm(false); }} aria-label="増やす">＋</button>
          </div>
        </div>
        <div className="field">
          <span className="field-label">注文方法</span>
          <div className="seg small">
            <button className={type === "market" ? "on" : ""} onClick={() => { setType("market"); setConfirm(false); }}>成行</button>
            <button className={type === "limit" ? "on" : ""} onClick={() => { setType("limit"); setLimit((l) => l || String(q.price)); setConfirm(false); }}>指値</button>
          </div>
        </div>
      </div>

      {type === "limit" && (
        <label className="field">
          <span className="field-label">指値({s.currency === "USD" ? "ドル" : "円"})</span>
          <input className="num input" inputMode="decimal" value={limit} onChange={(e) => { setLimit(e.target.value); setConfirm(false); }} />
        </label>
      )}

      <dl className="order-sum">
        <div><dt>概算約定代金</dt><dd className="num">{yen(amount)}</dd></div>
        <div><dt>手数料</dt><dd className="num">{yen(fee)}</dd></div>
        <div><dt>{side === "buy" ? "買付余力" : "売却可能"}</dt><dd className="num">{side === "buy" ? yen(power) : `${num(sellable)}株`}</dd></div>
      </dl>

      {error && !done && <p className="order-error">{error}</p>}
      {done && !confirm && <p className="order-done">{done}</p>}

      {!confirm ? (
        <button className={`primary ${side}`} disabled={!!error} onClick={() => { setConfirm(true); setDone(null); }}>
          注文内容を確認
        </button>
      ) : (
        <div className="confirm-box">
          <p className="confirm-title">この内容で発注しますか?</p>
          <p className="num">
            {account && brokerById(account.brokerId).name} / {s.name} / {side === "buy" ? "買い" : "売り"} / {num(qty)}株 /{" "}
            {type === "market" ? "成行" : `指値 ${price(limitNum, s.currency)}`}
          </p>
          <div className="confirm-actions">
            <button className="ghost-btn" onClick={() => setConfirm(false)}>戻る</button>
            <button className={`primary ${side}`} onClick={place}>発注する</button>
          </div>
        </div>
      )}
      <p className="hint">デモのため、実際の注文は行われません。</p>
    </div>
  );
}
