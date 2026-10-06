import { BROKERS } from "../data/market";
import { yen } from "../lib/format";
import { amountJpy } from "../lib/portfolio";
import { useStore } from "../store";
import type { Stock } from "../types";

/** この銘柄をどの証券会社で買えるか・手数料はいくらか */
export function BrokerTable({ stock, price }: { stock: Stock; price: number }) {
  const { state } = useStore();
  const amount = amountJpy(stock, price, stock.lot);
  const avail = BROKERS.filter((b) => stock.brokers.includes(b.id));
  const cheapest = Math.min(...avail.map((b) => b.fee(amount, stock.market)));
  return (
    <div className="broker-table">
      <p className="dim tiny">最低単位({stock.lot}株・約{yen(amount)})を買う場合</p>
      <ul>
        {BROKERS.map((b) => {
          const ok = stock.brokers.includes(b.id);
          const linked = state.accounts.some((a) => a.brokerId === b.id);
          const fee = b.fee(amount, stock.market);
          return (
            <li key={b.id} className={ok ? "" : "off"}>
              <span className="broker-tag" style={{ background: b.color }}>{b.short}</span>
              <div className="bt-main">
                <span>{b.name}{linked && <em className="linked">連携中</em>}</span>
                <small className="dim">{b.feeRule}</small>
              </div>
              <div className="bt-fee">
                {ok ? <span className="num">{yen(fee)}</span> : <span className="dim">取扱なし</span>}
                {ok && fee === cheapest && <em className="best">最安</em>}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
