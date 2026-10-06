export type Currency = "JPY" | "USD";

export interface Broker {
  id: string;
  name: string;
  short: string;
  color: string;
  /** 1回の取引の手数料(円)。約定代金(円)から計算する */
  feeRule: string;
  fee: (amountJpy: number, market: Market) => number;
}

export type Market = "JP" | "US";

export interface Stock {
  code: string;
  name: string;
  sector: string;
  market: Market;
  currency: Currency;
  basePrice: number;
  /** 1日の値動きの大きさ(1秒あたりの標準偏差・比率) */
  vol: number;
  /** 売買単位 */
  lot: number;
  /** 取扱のある証券会社 */
  brokers: string[];
}

export interface Quote {
  code: string;
  price: number;
  prevClose: number;
  open: number;
  high: number;
  low: number;
  volume: number;
  /** 直前の価格からの動き */
  tick: -1 | 0 | 1;
  updatedAt: number;
}

export interface Candle {
  t: number;
  o: number;
  h: number;
  l: number;
  c: number;
}

export interface BookLevel {
  price: number;
  qty: number;
}

export interface OrderBook {
  asks: BookLevel[]; // 高い順
  bids: BookLevel[]; // 高い順
}

export interface Trade {
  t: number;
  price: number;
  qty: number;
  side: "buy" | "sell";
}

export interface Holding {
  code: string;
  qty: number;
  avgCost: number;
}

export interface Account {
  id: string;
  brokerId: string;
  label: string;
  cash: number; // 円
  holdings: Holding[];
}

export type Side = "buy" | "sell";
export type OrderType = "market" | "limit";
export type OrderStatus = "pending" | "filled" | "cancelled" | "rejected";

export interface Order {
  id: string;
  accountId: string;
  code: string;
  side: Side;
  type: OrderType;
  qty: number;
  limitPrice?: number;
  status: OrderStatus;
  createdAt: number;
  doneAt?: number;
  fillPrice?: number;
  fee?: number;
  reason?: string;
}

export interface NewsItem {
  id: string;
  t: number;
  code: string | null;
  kind: "news" | "disclosure";
  title: string;
  source: string;
}

export type ColorScheme = "jp" | "us";
export type EffectLevel = "full" | "low" | "off";
export type AssetView = "chart" | "card" | "gauge" | "radar";

export interface Settings {
  colorScheme: ColorScheme;
  effects: EffectLevel;
  assetView: AssetView;
  sound: boolean;
  haptics: boolean;
}
