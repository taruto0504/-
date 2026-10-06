import { useEffect, useRef } from "react";
import { brokerById, stockByCode } from "../data/market";
import { num, price } from "../lib/format";
import { playFillSound, vibrate } from "../lib/effects";
import { useStore } from "../store";

/** 約定の通知(波紋エフェクト+トースト+音・振動) */
export function FillFx() {
  const { state, dispatch } = useStore();
  const seen = useRef(new Set<string>());
  const { sound, haptics, effects } = state.settings;

  useEffect(() => {
    for (const e of state.events) {
      if (seen.current.has(e.id)) continue;
      seen.current.add(e.id);
      if (sound) playFillSound(e.order.side);
      if (haptics) vibrate();
      window.setTimeout(() => dispatch({ type: "dismiss", id: e.id }), 4000);
    }
  }, [state.events, sound, haptics, dispatch]);

  return (
    <>
      {effects !== "off" &&
        state.events.map((e) => <div key={`r-${e.id}`} className={`ripple ${e.order.side} ${effects}`} aria-hidden="true" />)}
      <div className="toasts" aria-live="polite">
        {state.events.map((e) => {
          const s = stockByCode(e.order.code);
          const acc = state.accounts.find((a) => a.id === e.order.accountId);
          return (
            <div key={e.id} className={`toast ${e.order.side}`}>
              <b>約定しました</b>
              <span>
                {acc && brokerById(acc.brokerId).name} ・ {s.name} {num(e.order.qty)}株{" "}
                {e.order.side === "buy" ? "買い" : "売り"} @ {price(e.order.fillPrice!, s.currency)}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}
