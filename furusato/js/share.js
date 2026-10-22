// 結果（数字のみ）を画像カード・テキストにしてシェアする。商品名や設定内容は含めない。

import { formatYen } from "./calc.js";

const APP_NAME = "ふるさと還元チェッカー";

const GRADE_COLORS = {
  green: ["#2e8b57", "#e3f4ea"],
  teal: ["#1b8a8a", "#dff3f3"],
  yellow: ["#8a6500", "#fff3c9"],
  gray: ["#5f6670", "#eceef1"],
};

export function shareText(result) {
  const lines = [
    `寄附額 ${formatYen(result.donation)} ／ 市場価格 ${formatYen(result.marketTotal)}`,
    `還元率 ${result.rateText}%（${result.grade.label}）`,
    `標準還元率 ${result.standardRate}% → 標準より ${result.diffText}ポイント`,
  ];
  if (result.unit) lines.push(`単価 ${result.unit.prices.map((p) => `${p.label}あたり ${p.yen.toLocaleString("ja-JP")}円`).join("・")}`);
  lines.push(`※参考値です（${APP_NAME}）`);
  return lines.join("\n");
}

export function drawCard(result) {
  const W = 1080;
  const H = 1080;
  const c = document.createElement("canvas");
  c.width = W;
  c.height = H;
  const g = c.getContext("2d");
  const font = (w, px) => `${w} ${px}px system-ui, -apple-system, "Hiragino Sans", "Noto Sans JP", sans-serif`;
  const [ink, bg] = GRADE_COLORS[result.grade.color] ?? GRADE_COLORS.gray;

  g.fillStyle = "#f5f7f4";
  g.fillRect(0, 0, W, H);
  g.fillStyle = "#ffffff";
  roundRect(g, 60, 60, W - 120, H - 120, 40);
  g.fill();

  g.textAlign = "center";
  g.fillStyle = "#5b6760";
  g.font = font(600, 40);
  g.fillText("ふるさと納税 還元率", W / 2, 170);

  g.fillStyle = "#1c2420";
  g.font = font(800, 200);
  g.fillText(`${result.rateText}%`, W / 2, 390);

  // 判定ラベル（色と文字の両方）
  g.font = font(700, 48);
  const label = result.grade.label;
  const lw = g.measureText(label).width + 80;
  g.fillStyle = bg;
  roundRect(g, (W - lw) / 2, 430, lw, 84, 42);
  g.fill();
  g.strokeStyle = ink;
  g.lineWidth = 4;
  g.stroke();
  g.fillStyle = ink;
  g.fillText(label, W / 2, 490);

  g.fillStyle = "#1c2420";
  g.font = font(600, 42);
  g.fillText(`標準還元率 ${result.standardRate}% より ${result.diffText}ポイント`, W / 2, 600);

  // ゲージと30%の線
  const gx = 160;
  const gw = W - 320;
  const max = Math.max(60, Math.ceil(result.rateTenths / 100) * 10);
  g.fillStyle = "#eef2ee";
  roundRect(g, gx, 650, gw, 30, 15);
  g.fill();
  g.fillStyle = ink;
  roundRect(g, gx, 650, Math.max(30, (gw * Math.min(result.rateTenths / 10, max)) / max), 30, 15);
  g.fill();
  const sx = gx + (gw * result.standardRate) / max;
  g.strokeStyle = "#1c2420";
  g.setLineDash([10, 8]);
  g.beginPath();
  g.moveTo(sx, 635);
  g.lineTo(sx, 695);
  g.stroke();
  g.setLineDash([]);

  g.font = font(500, 40);
  g.fillStyle = "#1c2420";
  g.fillText(`寄附額 ${formatYen(result.donation)}`, W / 2, 790);
  g.fillText(`市場価格 ${formatYen(result.marketTotal)}`, W / 2, 850);

  g.font = font(400, 30);
  g.fillStyle = "#5b6760";
  g.fillText(`参考値です。 ${APP_NAME}`, W / 2, 960);
  return c;
}

function roundRect(g, x, y, w, h, r) {
  g.beginPath();
  g.moveTo(x + r, y);
  g.arcTo(x + w, y, x + w, y + h, r);
  g.arcTo(x + w, y + h, x, y + h, r);
  g.arcTo(x, y + h, x, y, r);
  g.arcTo(x, y, x + w, y, r);
  g.closePath();
}

export async function cardBlob(result) {
  const canvas = drawCard(result);
  return new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
}

export function lineShareUrl(text) {
  return `https://line.me/R/share?text=${encodeURIComponent(text)}`;
}
