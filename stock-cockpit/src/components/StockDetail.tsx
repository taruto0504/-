import { useState } from "react";
import { stockByCode } from "../data/market";
import { num, pct, price } from "../lib/format";
import { useStore } from "../store";
import { BookView, TapeView } from "./Book";
import { BrokerTable } from "./BrokerTable";
import { CandleChart } from "./Chart";
import { Icon } from "./Icon";
import { NewsList } from "./NewsList";
import { Num } from "./Num";

type Tab = "chart" | "book" | "broker" | "news";

export function StockDetail({ wide, onPickPrice, onOrder }: { wide: boolean; onPickPrice: (p: number) => void; onOrder?: () => void }) {
  const { state, dispatch } = useStore();
  const [tab, setTab] = useState<Tab>("chart");
  const code = state.selected;
  const s = stockByCode(code);
  const f = state.feed;
  const q = f?.quotes[code];
  if (!f || !q) return <section className="panel"><p className="empty">読み込み中…</p></section>;

  const diff = q.price - q.prevClose;
  const watched = state.watchlist.includes(code);

  const chart = <CandleChart candles={f.candles[code]} stock={s} prevClose={q.prevClose} />;
  const book = (
    <div className="book-tape">
      <BookView book={f.books[code]} stock={s} last={q.price} onPick={onPickPrice} />
      <TapeView tape={f.tape[code]} stock={s} />
    </div>
  );
  const brokers = <BrokerTable stock={s} price={q.price} />;
  const news = <NewsList code={code} compact />;

  return (
    <section className="panel detail">
      <div className="detail-head">
        <div>
          <div className="detail-code">
            <span className="code">{s.code}</span>
            <span className="dim tiny">{s.market === "US" ? "米国株" : "国内株"}・{s.sector}</span>
          </div>
          <h2 className="detail-name">{s.name}</h2>
        </div>
        <button className={`star ${watched ? "on" : ""}`} onClick={() => dispatch({ type: "watch", code })} aria-label="ウォッチ">
          <Icon name="star" filled={watched} />
        </button>
      </div>
      <div className="detail-price">
        <Num value={q.price} text={price(q.price, s.currency)} dir={q.tick > 0 ? "up" : q.tick < 0 ? "down" : "flat"} className="big" />
        <span className={`num ${diff > 0 ? "up" : diff < 0 ? "down" : "flat"}`}>
          {diff > 0 ? "▲" : diff < 0 ? "▼" : ""}{price(Math.abs(diff), s.currency, q.price)}({pct(diff / q.prevClose)})
        </span>
      </div>
      <dl className="ohlc num">
        <div><dt>始値</dt><dd>{price(q.open, s.currency)}</dd></div>
        <div><dt>高値</dt><dd>{price(q.high, s.currency)}</dd></div>
        <div><dt>安値</dt><dd>{price(q.low, s.currency)}</dd></div>
        <div><dt>前日終値</dt><dd>{price(q.prevClose, s.currency)}</dd></div>
        <div><dt>出来高</dt><dd>{num(q.volume)}</dd></div>
      </dl>

      {wide ? (
        <>
          {chart}
          <div className="detail-grid">
            {book}
            <div>
              <h3 className="sub-h">取扱証券と手数料</h3>
              {brokers}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="seg wide">
            {([["chart", "チャート"], ["book", "板・歩み値"], ["broker", "取扱証券"], ["news", "ニュース"]] as [Tab, string][]).map(([id, label]) => (
              <button key={id} className={tab === id ? "on" : ""} onClick={() => setTab(id)}>{label}</button>
            ))}
          </div>
          {tab === "chart" && chart}
          {tab === "book" && book}
          {tab === "broker" && brokers}
          {tab === "news" && news}
          <div className="order-cta">
            <button className="primary buy" onClick={onOrder}>注文する</button>
          </div>
        </>
      )}
    </section>
  );
}
