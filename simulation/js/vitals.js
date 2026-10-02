// バイタルサインの基準範囲（成人の目安）。範囲外は検査報告書と同じく H（高値）/ L（低値）で示す。
// 小児は基準が年齢で大きく変わるため、15歳未満では印を付けない。

const RANGES = {
  hr: { low: 60, high: 100 }, // 回/分
  sys: { low: 90, high: 140 }, // mmHg（140以上を高値）
  dia: { high: 90 },
  spo2: { low: 94 }, // %
  rr: { low: 12, high: 20 }, // 回/分（20を超えると高値）
  temp: { low: 36.0, high: 37.5 }, // ℃（37.5以上を高値）
};

export const RANGE_NOTE = "成人の目安：HR 60〜100、収縮期血圧 90〜139、SpO2 94%以上、RR 12〜20、体温 36.0〜37.4℃、JCS 0・GCS 15";

const num = (v) => {
  const x = parseFloat(v);
  return Number.isFinite(x) ? x : null;
};

export function flagsApply(data) {
  const age = num(data.age);
  return age === null || age >= 15;
}

// "hi" | "lo" | "abn"（向きのない異常：意識）| ""
export function flagOf(kind, value) {
  const v = num(value);
  if (v === null) return "";
  if (kind === "jcs") return v > 0 ? "abn" : "";
  if (kind === "gcs") return v < 15 ? "abn" : "";
  const r = RANGES[kind];
  if (!r) return "";
  if (r.low != null && v < r.low) return "lo";
  if (kind === "rr" && v > r.high) return "hi";
  if (r.high != null && kind !== "rr" && v >= r.high) return "hi";
  return "";
}

// 血圧は収縮期・拡張期のどちらかが範囲外なら印を付ける（低値を優先）
export function bpFlag(sys, dia) {
  const s = flagOf("sys", sys);
  if (s === "lo") return "lo";
  return s || flagOf("dia", dia);
}

export function flagMark(flag) {
  if (flag === "hi") return '<span class="flag" aria-label="高値">H</span>';
  if (flag === "lo") return '<span class="flag" aria-label="低値">L</span>';
  if (flag === "abn") return '<span class="flag" aria-label="異常">!</span>';
  return "";
}
