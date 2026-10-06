import { clock, num, price } from "../lib/format";
import type { OrderBook, Stock, Trade } from "../types";

export function BookView({ book, stock, last, onPick }: { book: OrderBook; stock: Stock; last: number; onPick?: (p: number) => void }) {
  const max = Math.max(...book.asks.map((l) => l.qty), ...book.bids.map((l) => l.qty));
  return (
    <div className="book">
      <div className="book-head"><span>売数量</span><span>気配値</span><span>買数量</span></div>
      {book.asks.map((l) => (
        <button key={`a${l.price}`} className="book-row ask" onClick={() => onPick?.(l.price)}>
          <span className="qty num"><i style={{ width: `${(l.qty / max) * 100}%` }} />{num(l.qty)}</span>
          <span className="px num">{price(l.price, stock.currency)}</span>
          <span />
        </button>
      ))}
      {book.bids.map((l) => (
        <button key={`b${l.price}`} className={`book-row bid ${l.price === last ? "last" : ""}`} onClick={() => onPick?.(l.price)}>
          <span />
          <span className="px num">{price(l.price, stock.currency)}</span>
          <span className="qty num"><i style={{ width: `${(l.qty / max) * 100}%` }} />{num(l.qty)}</span>
        </button>
      ))}
      {onPick && <p className="hint">気配値をタップすると指値に入ります</p>}
    </div>
  );
}

export function TapeView({ tape, stock }: { tape: Trade[]; stock: Stock }) {
  return (
    <div className="tape">
      <div className="tape-head"><span>時刻</span><span>約定値</span><span>出来高</span></div>
      {tape.length === 0 && <p className="empty">まだ約定がありません</p>}
      {tape.slice(0, 18).map((t, i) => (
        <div key={`${t.t}-${i}`} className={`tape-row ${t.side === "buy" ? "up" : "down"} ${i === 0 ? "fresh" : ""}`}>
          <span className="num dim">{clock(t.t)}</span>
          <span className="num">{price(t.price, stock.currency)}</span>
          <span className="num">{num(t.qty)}</span>
        </div>
      ))}
    </div>
  );
}
