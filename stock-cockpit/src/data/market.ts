import type { Account, Broker, NewsItem, Stock } from "../types";

/** 円換算に使う為替(デモのため固定) */
export const USDJPY = 150;

const tiered = (amount: number, tiers: [number, number][], over: number) => {
  for (const [limit, fee] of tiers) if (amount <= limit) return fee;
  return over;
};

// 証券会社・銘柄・ニュースはすべて架空です。
export const BROKERS: Broker[] = [
  {
    id: "neo",
    name: "ネオ証券",
    short: "NEO",
    color: "#22d3ee",
    feeRule: "国内株 0円 / 米国株 約定代金の0.45%",
    fee: (amount, market) => (market === "JP" ? 0 : Math.round(amount * 0.0045)),
  },
  {
    id: "astro",
    name: "アストロ証券",
    short: "AST",
    color: "#a78bfa",
    feeRule: "国内株 10万円まで55円・50万円まで275円 / 米国株 0円",
    fee: (amount, market) => (market === "US" ? 0 : tiered(amount, [[100_000, 55], [500_000, 275]], 535)),
  },
  {
    id: "luna",
    name: "ルナ証券",
    short: "LNA",
    color: "#fbbf24",
    feeRule: "国内株 一律99円(米国株は取扱なし)",
    fee: () => 99,
  },
];

export const brokerById = (id: string) => BROKERS.find((b) => b.id === id)!;

export const STOCKS: Stock[] = [
  { code: "7801", name: "オリオン重工", sector: "宇宙・防衛", market: "JP", currency: "JPY", basePrice: 3420, vol: 0.0011, lot: 100, brokers: ["neo", "astro", "luna"] },
  { code: "6920", name: "クオンタム半導体", sector: "半導体", market: "JP", currency: "JPY", basePrice: 12850, vol: 0.0016, lot: 100, brokers: ["neo", "astro", "luna"] },
  { code: "9433", name: "ネビュラ通信", sector: "通信", market: "JP", currency: "JPY", basePrice: 2185, vol: 0.0006, lot: 100, brokers: ["neo", "astro", "luna"] },
  { code: "8306", name: "ステラ銀行", sector: "銀行", market: "JP", currency: "JPY", basePrice: 1642, vol: 0.0008, lot: 100, brokers: ["neo", "astro", "luna"] },
  { code: "4592", name: "ジェミニ創薬", sector: "医薬品", market: "JP", currency: "JPY", basePrice: 864, vol: 0.0022, lot: 100, brokers: ["neo", "astro", "luna"] },
  { code: "3480", name: "コメット・ロボティクス", sector: "機械", market: "JP", currency: "JPY", basePrice: 5310, vol: 0.0014, lot: 100, brokers: ["neo", "astro", "luna"] },
  { code: "2914", name: "ルミナ食品", sector: "食品", market: "JP", currency: "JPY", basePrice: 4075, vol: 0.0005, lot: 100, brokers: ["neo", "astro", "luna"] },
  { code: "5170", name: "アストラル新素材", sector: "化学", market: "JP", currency: "JPY", basePrice: 1298, vol: 0.0019, lot: 100, brokers: ["neo", "luna"] },
  { code: "QNTA", name: "Quanta Dynamics", sector: "AI・ソフトウェア", market: "US", currency: "USD", basePrice: 412.5, vol: 0.0015, lot: 1, brokers: ["neo", "astro"] },
  { code: "HLIX", name: "Helix Energy", sector: "エネルギー", market: "US", currency: "USD", basePrice: 86.2, vol: 0.0012, lot: 1, brokers: ["astro"] },
  { code: "VELA", name: "Vela Space", sector: "宇宙", market: "US", currency: "USD", basePrice: 27.85, vol: 0.0025, lot: 1, brokers: ["neo", "astro"] },
  { code: "ORBT", name: "Orbit Retail", sector: "小売", market: "US", currency: "USD", basePrice: 158.4, vol: 0.0009, lot: 1, brokers: ["astro"] },
];

export const stockByCode = (code: string) => STOCKS.find((s) => s.code === code)!;

export const INDICES = [
  { id: "NEO225", name: "NEO225", base: 38420, vol: 0.0004 },
  { id: "ASTRO500", name: "ASTRO500", base: 5821, vol: 0.0003 },
];

export const initialAccounts = (): Account[] => [
  {
    id: "acc-neo",
    brokerId: "neo",
    label: "ネオ証券 特定口座",
    cash: 1_250_000,
    holdings: [
      { code: "6920", qty: 100, avgCost: 11980 },
      { code: "9433", qty: 300, avgCost: 2010 },
      { code: "QNTA", qty: 8, avgCost: 371.2 },
    ],
  },
  {
    id: "acc-astro",
    brokerId: "astro",
    label: "アストロ証券 特定口座",
    cash: 820_000,
    holdings: [
      { code: "7801", qty: 200, avgCost: 3150 },
      { code: "HLIX", qty: 40, avgCost: 91.4 },
      { code: "VELA", qty: 120, avgCost: 22.1 },
    ],
  },
  {
    id: "acc-luna",
    brokerId: "luna",
    label: "ルナ証券 NISA口座",
    cash: 430_000,
    holdings: [
      { code: "8306", qty: 500, avgCost: 1510 },
      { code: "2914", qty: 100, avgCost: 4210 },
    ],
  },
];

const ago = (min: number) => Date.now() - min * 60_000;

export const initialNews = (): NewsItem[] => [
  { id: "n1", t: ago(4), code: "6920", kind: "disclosure", title: "クオンタム半導体、次世代メモリ工場の稼働開始を発表", source: "適時開示" },
  { id: "n2", t: ago(11), code: "QNTA", kind: "news", title: "Quanta Dynamics、四半期売上高が市場予想を上回る", source: "コックピット通信" },
  { id: "n3", t: ago(23), code: "7801", kind: "news", title: "オリオン重工、小型ロケットの打ち上げ契約を新たに受注", source: "宇宙産業ニュース" },
  { id: "n4", t: ago(38), code: null, kind: "news", title: "NEO225は小幅続伸、半導体関連に買い", source: "マーケット速報" },
  { id: "n5", t: ago(52), code: "8306", kind: "disclosure", title: "ステラ銀行、自己株式の取得枠を設定", source: "適時開示" },
  { id: "n6", t: ago(75), code: "VELA", kind: "news", title: "Vela Space、衛星通信サービスの対象地域を拡大", source: "コックピット通信" },
  { id: "n7", t: ago(96), code: "4592", kind: "disclosure", title: "ジェミニ創薬、新薬候補の臨床試験で次の段階へ", source: "適時開示" },
  { id: "n8", t: ago(130), code: "2914", kind: "news", title: "ルミナ食品、植物由来の新商品を全国で発売", source: "マーケット速報" },
];

export const NEWS_TEMPLATES: { kind: NewsItem["kind"]; text: string; source: string }[] = [
  { kind: "news", text: "{name}、出来高が急増", source: "マーケット速報" },
  { kind: "news", text: "{name}、新サービスの提携先を発表", source: "コックピット通信" },
  { kind: "disclosure", text: "{name}、業績予想の修正に関するお知らせ", source: "適時開示" },
  { kind: "disclosure", text: "{name}、配当予想の修正に関するお知らせ", source: "適時開示" },
  { kind: "news", text: "{name}、海外拠点の新設を検討", source: "コックピット通信" },
  { kind: "news", text: "{name}に関連する業界統計が公表", source: "マーケット速報" },
];
