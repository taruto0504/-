// 時計の表示と、時刻に合わせた声かけ

const WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const WEEK_JA = "日月火水木金土";
const pad = (n: number) => String(n).padStart(2, "0");

export function formatClock(d: Date, seconds: boolean) {
  return {
    time: `${pad(d.getHours())}:${pad(d.getMinutes())}${seconds ? `:${pad(d.getSeconds())}` : ""}`,
    date: `${d.getFullYear()}.${pad(d.getMonth() + 1)}.${pad(d.getDate())}`,
    week: WEEK[d.getDay()],
    weekJa: WEEK_JA[d.getDay()],
  };
}

// 起動した時のあいさつ
export function greeting(d: Date, userCall: string): string {
  const h = d.getHours();
  if (h >= 5 && h < 11) return `おはよう、${userCall}。今日もよろしくね`;
  if (h >= 11 && h < 17) return `こんにちは、${userCall}。何か手伝えることある？`;
  if (h >= 17 && h < 23) return `おかえり、${userCall}。今日もおつかれさま`;
  return `こんな時間まで起きてるの？ ${userCall}、無理しないでね`;
}

// 決まった時刻ちょうど（分が変わった瞬間）に言う一言。なければ null
export function timedLine(d: Date, userCall: string): string | null {
  const key = `${d.getHours()}:${pad(d.getMinutes())}`;
  const lines: Record<string, string> = {
    "7:00": `おはよう、${userCall}。朝ごはん食べた？`,
    "12:00": "お昼の時間だよ。ちゃんと食べてね",
    "15:00": "そろそろ休憩しよう。お茶でもどう？",
    "18:00": "もう夕方だね。今日やり残したことはない？",
    "22:00": "そろそろ明日の準備をしておこうか",
    "0:00": "日付が変わったよ。早めに休んでね",
  };
  return lines[key] ?? null;
}

// 続けて使っている時間に合わせた休憩の声かけ（90分ごと）
export function breakLine(minutesActive: number): string | null {
  return minutesActive > 0 && minutesActive % 90 === 0 ? `${minutesActive}分続けてがんばってるね。少し目を休めよう` : null;
}
