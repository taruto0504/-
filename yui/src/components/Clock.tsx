import { useEffect, useState } from "react";
import { formatClock } from "../lib/clock";
import type { Corner } from "../lib/settings";

// 画面の端に常に出す日付・曜日・時計（秒単位）
export function Clock({ corner, seconds }: { corner: Corner; seconds: boolean }) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    // 秒の切り替わりに合わせて更新する
    let timer = 0;
    const tick = () => {
      setNow(new Date());
      timer = window.setTimeout(tick, 1000 - (Date.now() % 1000) + 5);
    };
    tick();
    return () => clearTimeout(timer);
  }, []);
  const c = formatClock(now, seconds);
  return (
    <div className={`clock ${corner}`} aria-label={`${c.date} ${c.weekJa}曜日 ${c.time}`}>
      <div className="clock-date">
        {c.date} <span className="clock-week">{c.week}</span>
      </div>
      <div className="clock-time">{c.time}</div>
    </div>
  );
}
