import { createContext, useContext, useEffect, useMemo, useReducer, type Dispatch, type ReactNode } from "react";
import { DemoFeed, type FeedSnapshot } from "./data/feed";
import { NEWS_TEMPLATES, STOCKS, initialAccounts, initialNews, stockByCode } from "./data/market";
import { amountJpy, feeFor, valueAll } from "./lib/portfolio";
import type { Account, NewsItem, Order, Settings } from "./types";

export interface FillEvent {
  id: string;
  order: Order;
}

export interface AppState {
  feed: FeedSnapshot | null;
  accounts: Account[];
  orders: Order[];
  news: NewsItem[];
  watchlist: string[];
  settings: Settings;
  history: { t: number; v: number }[];
  selected: string;
  consent: boolean;
  events: FillEvent[];
}

type Action =
  | { type: "tick"; snap: FeedSnapshot }
  | { type: "place"; order: Order }
  | { type: "cancel"; id: string }
  | { type: "select"; code: string }
  | { type: "watch"; code: string }
  | { type: "settings"; patch: Partial<Settings> }
  | { type: "news"; item: NewsItem }
  | { type: "consent" }
  | { type: "dismiss"; id: string }
  | { type: "reset" };

const KEY = "stock-cockpit:v1";
const HISTORY_KEEP = 300;

const defaultSettings: Settings = {
  colorScheme: "jp",
  effects: "full",
  assetView: "chart",
  sound: true,
  haptics: true,
};

function load(): AppState {
  let saved: Partial<AppState> = {};
  try {
    saved = JSON.parse(localStorage.getItem(KEY) ?? "{}");
  } catch {
    saved = {};
  }
  return {
    feed: null,
    accounts: saved.accounts ?? initialAccounts(),
    orders: saved.orders ?? [],
    news: initialNews(),
    watchlist: saved.watchlist ?? ["6920", "7801", "QNTA"],
    settings: { ...defaultSettings, ...saved.settings },
    history: [],
    selected: saved.selected ?? "6920",
    consent: saved.consent ?? false,
    events: [],
  };
}

/** 発注中の注文を現在値と照らし合わせて約定させる */
function settle(state: AppState, snap: FeedSnapshot) {
  let accounts = state.accounts;
  const events: FillEvent[] = [];
  const orders = state.orders.map((o) => {
    if (o.status !== "pending") return o;
    const q = snap.quotes[o.code];
    if (!q) return o;
    const hit =
      o.type === "market" ||
      (o.side === "buy" ? q.price <= (o.limitPrice ?? 0) : q.price >= (o.limitPrice ?? Infinity));
    if (!hit) return o;

    const s = stockByCode(o.code);
    const acc = accounts.find((a) => a.id === o.accountId);
    if (!acc) return { ...o, status: "rejected" as const, doneAt: snap.now, reason: "口座が見つかりません" };
    const amount = amountJpy(s, q.price, o.qty);
    const fee = feeFor(acc.brokerId, s, q.price, o.qty);
    const held = acc.holdings.find((h) => h.code === o.code);
    let next: Account;

    if (o.side === "buy") {
      if (acc.cash < amount + fee) {
        return { ...o, status: "rejected" as const, doneAt: snap.now, reason: "買付余力が足りません" };
      }
      const holdings = held
        ? acc.holdings.map((h) =>
            h.code === o.code
              ? { ...h, qty: h.qty + o.qty, avgCost: (h.avgCost * h.qty + q.price * o.qty) / (h.qty + o.qty) }
              : h,
          )
        : [...acc.holdings, { code: o.code, qty: o.qty, avgCost: q.price }];
      next = { ...acc, cash: acc.cash - amount - fee, holdings };
    } else {
      if (!held || held.qty < o.qty) {
        return { ...o, status: "rejected" as const, doneAt: snap.now, reason: "保有数量が足りません" };
      }
      const holdings = acc.holdings
        .map((h) => (h.code === o.code ? { ...h, qty: h.qty - o.qty } : h))
        .filter((h) => h.qty > 0);
      next = { ...acc, cash: acc.cash + amount - fee, holdings };
    }

    accounts = accounts.map((a) => (a.id === acc.id ? next : a));
    const filled: Order = { ...o, status: "filled", doneAt: snap.now, fillPrice: q.price, fee };
    events.push({ id: `fill-${o.id}`, order: filled });
    return filled;
  });
  return { accounts, orders, events };
}

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "tick": {
      const { snap } = action;
      const { accounts, orders, events } = settle(state, snap);
      const total = valueAll(accounts, snap.quotes).total;
      let history = state.history;
      if (history.length === 0) {
        // 初回は過去の推移をそれらしく作っておく(デモ用)
        let v = total;
        const past: { t: number; v: number }[] = [];
        for (let i = 120; i > 0; i--) {
          past.unshift({ t: snap.now - i * 1000, v });
          v = v * (1 + (Math.random() - 0.5) * 0.0012);
        }
        history = past;
      }
      history = [...history, { t: snap.now, v: total }].slice(-HISTORY_KEEP);
      return {
        ...state,
        feed: snap,
        accounts,
        orders,
        history,
        events: events.length ? [...state.events, ...events].slice(-5) : state.events,
      };
    }
    case "place":
      return { ...state, orders: [action.order, ...state.orders].slice(0, 100) };
    case "cancel":
      return {
        ...state,
        orders: state.orders.map((o) =>
          o.id === action.id && o.status === "pending" ? { ...o, status: "cancelled", doneAt: Date.now() } : o,
        ),
      };
    case "select":
      return { ...state, selected: action.code };
    case "watch":
      return {
        ...state,
        watchlist: state.watchlist.includes(action.code)
          ? state.watchlist.filter((c) => c !== action.code)
          : [...state.watchlist, action.code],
      };
    case "settings":
      return { ...state, settings: { ...state.settings, ...action.patch } };
    case "news":
      return { ...state, news: [action.item, ...state.news].slice(0, 60) };
    case "consent":
      return { ...state, consent: true };
    case "dismiss":
      return { ...state, events: state.events.filter((e) => e.id !== action.id) };
    case "reset":
      return { ...state, accounts: initialAccounts(), orders: [], history: [], events: [] };
  }
}

const Ctx = createContext<{ state: AppState; dispatch: Dispatch<Action> } | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, load);

  useEffect(() => new DemoFeed().start((snap) => dispatch({ type: "tick", snap })), []);

  // ニュースをときどき追加する(デモ)
  useEffect(() => {
    const id = window.setInterval(() => {
      const s = STOCKS[Math.floor(Math.random() * STOCKS.length)];
      const tpl = NEWS_TEMPLATES[Math.floor(Math.random() * NEWS_TEMPLATES.length)];
      dispatch({
        type: "news",
        item: { id: `n-${Date.now()}`, t: Date.now(), code: s.code, kind: tpl.kind, title: tpl.text.replace("{name}", s.name), source: tpl.source },
      });
    }, 45_000);
    return () => window.clearInterval(id);
  }, []);

  const { accounts, orders, watchlist, settings, selected, consent } = state;
  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify({ accounts, orders, watchlist, settings, selected, consent }));
    } catch {
      // 保存できない環境(プライベートモードなど)ではそのまま続ける
    }
  }, [accounts, orders, watchlist, settings, selected, consent]);

  const value = useMemo(() => ({ state, dispatch }), [state]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useStore() {
  const v = useContext(Ctx);
  if (!v) throw new Error("StoreProvider がありません");
  return v;
}

export const newOrderId = () => `o-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
