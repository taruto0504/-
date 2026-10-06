import type { BookLevel, Candle, OrderBook, Quote, Stock, Trade } from "../types";
import { INDICES, STOCKS } from "./market";

/**
 * 株価の配信元。デモでは DemoFeed(乱数)を使い、本開発では証券会社や
 * データ配信会社ごとの実装に差し替える(企画書の「アダプター」)。
 */
export interface MarketFeed {
  start(onTick: (snapshot: FeedSnapshot) => void): () => void;
}

export interface FeedSnapshot {
  quotes: Record<string, Quote>;
  candles: Record<string, Candle[]>;
  books: Record<string, OrderBook>;
  tape: Record<string, Trade[]>;
  indices: Record<string, { value: number; prev: number }>;
  now: number;
}

/** デモの足の長さ(1本あたり) */
export const CANDLE_MS = 10_000;
const CANDLE_KEEP = 90;
const TAPE_KEEP = 40;

const gauss = () => {
  let u = 0;
  let v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
};

export const tickSize = (s: Stock, p: number) => {
  if (s.currency === "USD") return 0.01;
  if (p < 3000) return 0.5;
  if (p < 10000) return 1;
  return 5;
};

const roundTo = (v: number, step: number) => Math.round(v / step) * step;

export class DemoFeed implements MarketFeed {
  private snap: FeedSnapshot;

  constructor() {
    const now = Date.now();
    const quotes: FeedSnapshot["quotes"] = {};
    const candles: FeedSnapshot["candles"] = {};
    const tape: FeedSnapshot["tape"] = {};
    const books: FeedSnapshot["books"] = {};

    for (const s of STOCKS) {
      // 過去の足をさかのぼって作る
      const list: Candle[] = [];
      let p = s.basePrice * (1 + gauss() * 0.01);
      const first = Math.floor(now / CANDLE_MS) * CANDLE_MS - (CANDLE_KEEP - 1) * CANDLE_MS;
      for (let i = 0; i < CANDLE_KEEP; i++) {
        const o = p;
        let h = o;
        let l = o;
        for (let k = 0; k < 10; k++) {
          p = p * (1 + gauss() * s.vol);
          h = Math.max(h, p);
          l = Math.min(l, p);
        }
        const step = tickSize(s, p);
        list.push({ t: first + i * CANDLE_MS, o: roundTo(o, step), h: roundTo(h, step), l: roundTo(l, step), c: roundTo(p, step) });
      }
      const last = list[list.length - 1].c;
      const prevClose = roundTo(s.basePrice, tickSize(s, s.basePrice));
      candles[s.code] = list;
      quotes[s.code] = {
        code: s.code,
        price: last,
        prevClose,
        open: list[0].o,
        high: Math.max(...list.map((c) => c.h)),
        low: Math.min(...list.map((c) => c.l)),
        volume: Math.round(Math.random() * 2_000_000 + 200_000),
        tick: 0,
        updatedAt: now,
      };
      tape[s.code] = [];
      books[s.code] = makeBook(s, last);
    }

    const indices: FeedSnapshot["indices"] = {};
    for (const ix of INDICES) indices[ix.id] = { value: ix.base * (1 + gauss() * 0.003), prev: ix.base };

    this.snap = { quotes, candles, books, tape, indices, now };
  }

  start(onTick: (s: FeedSnapshot) => void) {
    onTick(this.snap);
    const id = window.setInterval(() => {
      this.step();
      onTick(this.snap);
    }, 1000);
    return () => window.clearInterval(id);
  }

  private step() {
    const now = Date.now();
    const quotes = { ...this.snap.quotes };
    const candles = { ...this.snap.candles };
    const books = { ...this.snap.books };
    const tape = { ...this.snap.tape };

    for (const s of STOCKS) {
      const q = quotes[s.code];
      // 前日終値に少しずつ引き戻しながらランダムに動かす
      const pull = (s.basePrice - q.price) / s.basePrice * 0.002;
      const raw = q.price * (1 + gauss() * s.vol + pull);
      const step = tickSize(s, raw);
      // 毎秒すべての銘柄が動くと落ち着かないので、2割は据え置き
      const next = Math.random() < 0.2 ? q.price : Math.max(step, roundTo(raw, step));
      const tick = next > q.price ? 1 : next < q.price ? -1 : 0;
      const qty = s.lot * Math.max(1, Math.round(Math.abs(gauss()) * (s.market === "JP" ? 6 : 40)));

      quotes[s.code] = {
        ...q,
        price: next,
        high: Math.max(q.high, next),
        low: Math.min(q.low, next),
        volume: q.volume + qty,
        tick,
        updatedAt: now,
      };

      const list = candles[s.code].slice();
      const bucket = Math.floor(now / CANDLE_MS) * CANDLE_MS;
      const last = list[list.length - 1];
      if (last.t === bucket) {
        list[list.length - 1] = { ...last, h: Math.max(last.h, next), l: Math.min(last.l, next), c: next };
      } else {
        list.push({ t: bucket, o: last.c, h: Math.max(last.c, next), l: Math.min(last.c, next), c: next });
        if (list.length > CANDLE_KEEP) list.shift();
      }
      candles[s.code] = list;
      books[s.code] = makeBook(s, next);

      if (tick !== 0 || Math.random() < 0.5) {
        const side: Trade["side"] = tick > 0 ? "buy" : tick < 0 ? "sell" : Math.random() < 0.5 ? "buy" : "sell";
        tape[s.code] = [{ t: now, price: next, qty, side }, ...tape[s.code]].slice(0, TAPE_KEEP);
      }
    }

    const indices = { ...this.snap.indices };
    for (const ix of INDICES) {
      const cur = indices[ix.id];
      indices[ix.id] = { ...cur, value: cur.value * (1 + gauss() * ix.vol) };
    }

    this.snap = { quotes, candles, books, tape, indices, now };
  }
}

function makeBook(s: Stock, p: number): OrderBook {
  const step = tickSize(s, p);
  const size = () => s.lot * Math.max(1, Math.round(Math.random() * (s.market === "JP" ? 30 : 300)));
  const asks: BookLevel[] = [];
  const bids: BookLevel[] = [];
  for (let i = 5; i >= 1; i--) asks.push({ price: +(p + step * i).toFixed(2), qty: size() });
  for (let i = 0; i < 5; i++) bids.push({ price: +(p - step * i).toFixed(2), qty: size() });
  return { asks, bids };
}
