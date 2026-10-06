import { valueAll } from "../lib/portfolio";
import { signedYen, yen } from "../lib/format";
import { useStore } from "../store";
import { Icon } from "./Icon";
import { Num } from "./Num";

export function Header({ onSettings }: { onSettings: () => void }) {
  const { state } = useStore();
  const quotes = state.feed?.quotes ?? {};
  const { total, dayPl } = valueAll(state.accounts, quotes);
  const h = state.history;
  const prev = h.length > 1 ? h[h.length - 2].v : total;
  const step = total - prev;

  return (
    <header className="topbar">
      <div className="brand">
        <span className="brand-mark" />
        <span className="brand-name">STOCK<b>COCKPIT</b></span>
        <span className="demo-badge">DEMO</span>
      </div>
      <div className="topbar-total">
        <span className="label">総資産</span>
        <Num value={Math.round(total)} text={yen(total)} dir={step > 0 ? "up" : step < 0 ? "down" : "flat"} className="total" />
        <span className={`num tiny ${step > 0 ? "up" : step < 0 ? "down" : "flat"}`}>{signedYen(step)}</span>
        <span className="sep" />
        <span className="label">本日</span>
        <span className={`num tiny ${dayPl > 0 ? "up" : dayPl < 0 ? "down" : "flat"}`}>{signedYen(dayPl)}</span>
      </div>
      <button className="icon-btn" onClick={onSettings} aria-label="設定">
        <Icon name="gear" />
      </button>
    </header>
  );
}
