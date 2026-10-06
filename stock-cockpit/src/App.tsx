import { useEffect, useState } from "react";
import { AccountsPanel, HoldingsPanel, IndexStrip } from "./components/Accounts";
import { AssetPanel } from "./components/AssetPanel";
import { FillFx } from "./components/FillFx";
import { Header } from "./components/Header";
import { Icon } from "./components/Icon";
import { Consent, Plans, Sheet, Terms } from "./components/Modals";
import { NewsList } from "./components/NewsList";
import { OrderPanel } from "./components/OrderPanel";
import { Orders } from "./components/Orders";
import { Settings } from "./components/Settings";
import { StockDetail } from "./components/StockDetail";
import { StockList } from "./components/StockList";
import { useStore } from "./store";

type Tab = "home" | "stocks" | "trade" | "orders" | "news";
type Modal = null | "settings" | "plans" | "terms" | "order";

const TABS: { id: Tab; label: string; icon: string }[] = [
  { id: "home", label: "ホーム", icon: "home" },
  { id: "stocks", label: "銘柄", icon: "list" },
  { id: "trade", label: "取引", icon: "trade" },
  { id: "orders", label: "注文", icon: "orders" },
  { id: "news", label: "ニュース", icon: "news" },
];

function useWide() {
  const q = "(min-width: 768px)";
  const [wide, setWide] = useState(() => window.matchMedia(q).matches);
  useEffect(() => {
    const m = window.matchMedia(q);
    const on = () => setWide(m.matches);
    m.addEventListener("change", on);
    return () => m.removeEventListener("change", on);
  }, []);
  return wide;
}

export default function App() {
  const { state, dispatch } = useStore();
  const wide = useWide();
  const [tab, setTab] = useState<Tab>("home");
  const [modal, setModal] = useState<Modal>(null);
  const [left, setLeft] = useState<"assets" | "stocks">("assets");
  const [right, setRight] = useState<"orders" | "news">("orders");
  const [picked, setPicked] = useState<{ price: number; key: number } | null>(null);
  const { colorScheme, effects } = state.settings;

  useEffect(() => {
    document.documentElement.className = `scheme-${colorScheme} fx-${effects}`;
  }, [colorScheme, effects]);

  const open = (code: string) => {
    dispatch({ type: "select", code });
    setPicked(null);
    if (!wide) setTab("trade");
  };
  const pick = (price: number) => {
    setPicked({ price, key: Date.now() });
    if (!wide) setModal("order");
  };

  if (!state.consent) return <Consent />;

  const home = (
    <>
      <AssetPanel />
      <IndexStrip />
      <AccountsPanel onAdd={() => setModal("plans")} />
      <HoldingsPanel onOpen={open} />
    </>
  );

  return (
    <div className={`app ${wide ? "wide" : "narrow"}`}>
      <div className="bg-grid" aria-hidden="true" />
      <Header onSettings={() => setModal("settings")} />

      {wide ? (
        <main className="cockpit">
          <div className="col col-left">
            <div className="seg wide col-switch">
              <button className={left === "assets" ? "on" : ""} onClick={() => setLeft("assets")}>資産</button>
              <button className={left === "stocks" ? "on" : ""} onClick={() => setLeft("stocks")}>銘柄</button>
            </div>
            {left === "assets" ? home : <StockList onOpen={open} />}
          </div>
          <div className="col col-center">
            <StockDetail wide onPickPrice={pick} />
          </div>
          <div className="col col-right">
            <section className="panel">
              <div className="panel-head"><h2>発注</h2></div>
              <OrderPanel code={state.selected} picked={picked} />
            </section>
            <div className="seg wide col-switch">
              <button className={right === "orders" ? "on" : ""} onClick={() => setRight("orders")}>注文・約定</button>
              <button className={right === "news" ? "on" : ""} onClick={() => setRight("news")}>ニュース</button>
            </div>
            {right === "orders" ? <Orders /> : <section className="panel"><NewsList onOpen={open} /></section>}
          </div>
        </main>
      ) : (
        <main className="mobile-main">
          {tab === "home" && home}
          {tab === "stocks" && <StockList onOpen={open} />}
          {tab === "trade" && <StockDetail wide={false} onPickPrice={pick} onOrder={() => setModal("order")} />}
          {tab === "orders" && <Orders />}
          {tab === "news" && (
            <section className="panel">
              <div className="panel-head"><h2>ニュース・開示</h2></div>
              <NewsList onOpen={open} />
            </section>
          )}
        </main>
      )}

      {!wide && (
        <nav className="tabbar">
          {TABS.map((t) => (
            <button key={t.id} className={tab === t.id ? "on" : ""} onClick={() => setTab(t.id)}>
              <Icon name={t.icon} size={22} />
              <span>{t.label}</span>
              {t.id === "orders" && state.orders.some((o) => o.status === "pending") && <i className="badge" />}
            </button>
          ))}
        </nav>
      )}

      {modal === "order" && (
        <Sheet title="発注" onClose={() => setModal(null)}>
          <OrderPanel code={state.selected} picked={picked} />
        </Sheet>
      )}
      {modal === "settings" && (
        <Sheet title="設定" onClose={() => setModal(null)}>
          <Settings onPlans={() => setModal("plans")} onTerms={() => setModal("terms")} />
        </Sheet>
      )}
      {modal === "plans" && <Sheet title="証券口座の追加・料金プラン" onClose={() => setModal(null)}><Plans /></Sheet>}
      {modal === "terms" && <Sheet title="利用規約・免責事項" onClose={() => setModal(null)}><Terms /></Sheet>}

      <FillFx />
    </div>
  );
}
