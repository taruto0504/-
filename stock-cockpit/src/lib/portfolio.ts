import { USDJPY, brokerById, stockByCode } from "../data/market";
import type { Account, Order, Quote, Stock } from "../types";

export const fx = (s: Stock) => (s.currency === "USD" ? USDJPY : 1);

/** 約定代金(円) */
export const amountJpy = (s: Stock, price: number, qty: number) => price * qty * fx(s);

export const feeFor = (accountBrokerId: string, s: Stock, price: number, qty: number) =>
  brokerById(accountBrokerId).fee(amountJpy(s, price, qty), s.market);

export interface AccountValue {
  account: Account;
  stock: number;
  cash: number;
  total: number;
  dayPl: number;
  unrealized: number;
}

export function valueAccount(a: Account, quotes: Record<string, Quote>): AccountValue {
  let stock = 0;
  let dayPl = 0;
  let unrealized = 0;
  for (const h of a.holdings) {
    const s = stockByCode(h.code);
    const q = quotes[h.code];
    if (!q) continue;
    const k = fx(s);
    stock += q.price * h.qty * k;
    dayPl += (q.price - q.prevClose) * h.qty * k;
    unrealized += (q.price - h.avgCost) * h.qty * k;
  }
  return { account: a, stock, cash: a.cash, total: stock + a.cash, dayPl, unrealized };
}

export function valueAll(accounts: Account[], quotes: Record<string, Quote>) {
  const list = accounts.map((a) => valueAccount(a, quotes));
  const total = list.reduce((n, v) => n + v.total, 0);
  const dayPl = list.reduce((n, v) => n + v.dayPl, 0);
  const stock = list.reduce((n, v) => n + v.stock, 0);
  const cash = list.reduce((n, v) => n + v.cash, 0);
  return { list, total, dayPl, stock, cash };
}

/** 発注中の買い注文の分を差し引いた買付余力(円) */
export function buyingPower(a: Account, orders: Order[], quotes: Record<string, Quote>) {
  let reserved = 0;
  for (const o of orders) {
    if (o.accountId !== a.id || o.status !== "pending" || o.side !== "buy") continue;
    const s = stockByCode(o.code);
    const p = o.type === "limit" && o.limitPrice ? o.limitPrice : quotes[o.code]?.price ?? 0;
    reserved += amountJpy(s, p, o.qty) + feeFor(a.brokerId, s, p, o.qty);
  }
  return Math.max(0, a.cash - reserved);
}

/** 発注中の売り注文の分を差し引いた売却可能数量 */
export function sellableQty(a: Account, code: string, orders: Order[]) {
  const held = a.holdings.find((h) => h.code === code)?.qty ?? 0;
  const pending = orders
    .filter((o) => o.accountId === a.id && o.code === code && o.side === "sell" && o.status === "pending")
    .reduce((n, o) => n + o.qty, 0);
  return Math.max(0, held - pending);
}
