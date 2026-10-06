import { useStore } from "../store";
import type { ColorScheme, EffectLevel } from "../types";

export function Settings({ onPlans, onTerms }: { onPlans: () => void; onTerms: () => void }) {
  const { state, dispatch } = useStore();
  const st = state.settings;
  return (
    <section className="panel settings">
      <div className="panel-head"><h2>設定</h2></div>

      <div className="set-group">
        <h3>表示</h3>
        <div className="set-row">
          <div><b>上昇・下落の色</b><small>日本式は上昇が赤、米国式は上昇が緑</small></div>
          <div className="seg small">
            {([["jp", "日本式"], ["us", "米国式"]] as [ColorScheme, string][]).map(([id, l]) => (
              <button key={id} className={st.colorScheme === id ? "on" : ""} onClick={() => dispatch({ type: "settings", patch: { colorScheme: id } })}>{l}</button>
            ))}
          </div>
        </div>
        <div className="set-row">
          <div><b>演出の強さ</b><small>光・動きを弱めると見やすく、電池も長持ちします</small></div>
          <div className="seg small">
            {([["full", "標準"], ["low", "控えめ"], ["off", "なし"]] as [EffectLevel, string][]).map(([id, l]) => (
              <button key={id} className={st.effects === id ? "on" : ""} onClick={() => dispatch({ type: "settings", patch: { effects: id } })}>{l}</button>
            ))}
          </div>
        </div>
        <Toggle label="約定音" sub="約定時に短い効果音を鳴らす" on={st.sound} set={(v) => dispatch({ type: "settings", patch: { sound: v } })} />
        <Toggle label="振動" sub="約定時に端末を振動させる(対応端末のみ)" on={st.haptics} set={(v) => dispatch({ type: "settings", patch: { haptics: v } })} />
      </div>

      <div className="set-group">
        <h3>口座・プラン</h3>
        <button className="set-link" onClick={onPlans}><b>証券口座の追加・料金プラン</b><small>現在:デモ(3口座)</small></button>
      </div>

      <div className="set-group">
        <h3>デモ</h3>
        <button className="set-link" onClick={() => { if (confirm("デモ口座と注文履歴を初期状態に戻しますか?")) dispatch({ type: "reset" }); }}>
          <b>デモ口座を初期状態に戻す</b><small>保有銘柄・現金・注文履歴がリセットされます</small>
        </button>
        <button className="set-link" onClick={onTerms}><b>利用規約・免責事項</b><small>デモ版のご利用にあたって</small></button>
      </div>
    </section>
  );
}

function Toggle({ label, sub, on, set }: { label: string; sub: string; on: boolean; set: (v: boolean) => void }) {
  return (
    <div className="set-row">
      <div><b>{label}</b><small>{sub}</small></div>
      <button role="switch" aria-checked={on} aria-label={label} className={`switch ${on ? "on" : ""}`} onClick={() => set(!on)}><i /></button>
    </div>
  );
}
