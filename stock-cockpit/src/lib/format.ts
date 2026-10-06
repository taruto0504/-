import type { Currency } from "../types";

const jpy = new Intl.NumberFormat("ja-JP", { maximumFractionDigits: 0 });

export const yen = (v: number) => `${jpy.format(Math.round(v))}円`;
export const num = (v: number) => jpy.format(Math.round(v));

/**
 * 株価の表示。桁数は基準の価格で決める(3,000円未満は呼値が0.5円なので小数1桁)。
 * 値幅を表示するときは ref に株価を渡すと、株価と同じ桁で揃う。
 */
export const price = (v: number, currency: Currency, ref = v) => {
  if (currency === "USD") return `$${v.toFixed(2)}`;
  const d = ref < 3000 ? 1 : 0;
  return v.toLocaleString("ja-JP", { minimumFractionDigits: d, maximumFractionDigits: d });
};

/** ▲+1,234円 / ▼-1,234円 */
export const signedYen = (v: number) => {
  const r = Math.round(v);
  if (r === 0) return "±0円";
  return `${r > 0 ? "▲+" : "▼-"}${jpy.format(Math.abs(r))}円`;
};

export const pct = (v: number) => `${v > 0 ? "+" : v < 0 ? "-" : "±"}${Math.abs(v * 100).toFixed(2)}%`;

export const dir = (v: number) => (v > 0 ? "up" : v < 0 ? "down" : "flat");

export const clock = (t: number) =>
  new Date(t).toLocaleTimeString("ja-JP", { hour: "2-digit", minute: "2-digit", second: "2-digit" });

export const ago = (t: number) => {
  const m = Math.floor((Date.now() - t) / 60_000);
  if (m < 1) return "たった今";
  if (m < 60) return `${m}分前`;
  return `${Math.floor(m / 60)}時間前`;
};
