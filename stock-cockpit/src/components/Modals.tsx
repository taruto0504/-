import type { ReactNode } from "react";
import { useStore } from "../store";
import { Icon } from "./Icon";

export function Sheet({ title, onClose, children }: { title: string; onClose: () => void; children: ReactNode }) {
  return (
    <div className="sheet-backdrop" onClick={onClose}>
      <div className="sheet" role="dialog" aria-modal="true" aria-label={title} onClick={(e) => e.stopPropagation()}>
        <div className="sheet-head">
          <h2>{title}</h2>
          <button className="icon-btn" onClick={onClose} aria-label="閉じる"><Icon name="close" /></button>
        </div>
        <div className="sheet-body">{children}</div>
      </div>
    </div>
  );
}

const PLANS = [
  { id: "free", name: "フリー", price: "0円", brokers: "1社", perks: ["基本機能", "ニュース"] },
  { id: "standard", name: "スタンダード", price: "480円", brokers: "2社", perks: ["口座合算ダッシュボード", "アラート増量"], pop: true },
  { id: "pro", name: "プロ", price: "980円", brokers: "無制限", perks: ["マルチパネル", "高度なチャート", "演出テーマ追加"] },
];

export function Plans() {
  return (
    <div className="plans">
      <p className="dim">2社目の証券口座を連携すると有料プランになります。金額は検討中の案です。</p>
      <div className="plan-grid">
        {PLANS.map((p) => (
          <div key={p.id} className={`plan ${p.pop ? "pop" : ""}`}>
            {p.pop && <span className="plan-badge">おすすめ</span>}
            <h3>{p.name}</h3>
            <p className="plan-price num">{p.price}<small>/月</small></p>
            <p className="plan-brokers">連携 {p.brokers}</p>
            <ul>{p.perks.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
        ))}
      </div>
      <p className="hint">年額プラン・7日間の無料体験も検討中です。デモ版では口座の追加・お支払いはできません。</p>
    </div>
  );
}

export function Terms() {
  return (
    <div className="terms">
      <h3>このアプリについて</h3>
      <ul>
        <li>本アプリはデモ版です。表示される証券会社・銘柄・株価・ニュースはすべて架空のもので、実在の企業・市場とは関係ありません。</li>
        <li>実際の証券口座とは連携しておらず、注文は実際には行われません。資金が動くことはありません。</li>
        <li>本アプリの内容は投資の勧誘や助言を目的としたものではありません。実際の投資判断はご自身の責任で行ってください。</li>
        <li>デモ口座と注文の記録はお使いの端末(ブラウザ)内にのみ保存され、外部には送信されません。</li>
        <li>本アプリの利用により生じたいかなる損害についても、開発者は責任を負いません。</li>
      </ul>
    </div>
  );
}

export function Consent() {
  const { dispatch } = useStore();
  return (
    <div className="consent">
      <div className="consent-card">
        <div className="consent-logo"><span className="brand-mark big" /></div>
        <h1>STOCK<b>COCKPIT</b></h1>
        <p className="tagline">すべての口座を、1つのコックピットで</p>
        <Terms />
        <button className="primary buy" onClick={() => dispatch({ type: "consent" })}>同意してデモを始める</button>
      </div>
    </div>
  );
}
