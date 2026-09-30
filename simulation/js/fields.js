// シナリオの入力項目定義（企画書 5章）。キーは scenario.data のプロパティ名になる。

export const SEX_OPTIONS = ["男性", "女性", "その他"];
export const JCS_OPTIONS = ["0", "1", "2", "3", "10", "20", "30", "100", "200", "300"];
export const O2_OPTIONS = ["なし", "鼻カニューレ", "中濃度マスク", "高濃度マスク", "BVM", "ジャクソンリース"];
export const O2_FLOW_OPTIONS = Array.from({ length: 15 }, (_, i) => String(i + 1));
const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => String(a + i));

export const BASIC_FIELDS = [
  { key: "disease", label: "疾患名", type: "text", placeholder: "例：急性心筋梗塞", wide: true },
  { key: "age", label: "年齢", type: "number", unit: "歳", min: 0, max: 130 },
  { key: "sex", label: "性別", type: "select", options: SEX_OPTIONS },
  { key: "summary", label: "概要", type: "textarea", placeholder: "発生状況・現病歴など" },
  { key: "complaint", label: "主訴", type: "textarea", placeholder: "例：胸が締め付けられるように痛い" },
];

// バイタルサイン1・2に共通の項目。group は画面上のまとまり（意識・循環・呼吸・体温・その他）
const VITAL_ITEMS = [
  { key: "jcs", label: "意識レベル（JCS）", short: "JCS", type: "select", options: JCS_OPTIONS, group: "意識" },
  { key: "gcsE", label: "GCS E（開眼）", short: "GCS E", type: "select", options: range(1, 4), group: "意識", gcs: true },
  { key: "gcsV", label: "GCS V（言語）", short: "GCS V", type: "select", options: range(1, 5), group: "意識", gcs: true },
  { key: "gcsM", label: "GCS M（運動）", short: "GCS M", type: "select", options: range(1, 6), group: "意識", gcs: true },
  { key: "hr", label: "HR（心拍数）", short: "HR", type: "number", unit: "回/分", min: 0, max: 300, group: "循環" },
  { key: "bpRSys", label: "血圧（右）収縮期", short: "右 収縮期", type: "number", unit: "mmHg", min: 0, max: 300, group: "循環" },
  { key: "bpRDia", label: "血圧（右）拡張期", short: "右 拡張期", type: "number", unit: "mmHg", min: 0, max: 250, group: "循環" },
  { key: "bpLSys", label: "血圧（左）収縮期", short: "左 収縮期", type: "number", unit: "mmHg", min: 0, max: 300, group: "循環" },
  { key: "bpLDia", label: "血圧（左）拡張期", short: "左 拡張期", type: "number", unit: "mmHg", min: 0, max: 250, group: "循環" },
  { key: "spo2", label: "SpO2（RA）", short: "SpO2(RA)", type: "number", unit: "%", min: 0, max: 100, group: "呼吸" },
  { key: "o2", label: "酸素投与", short: "酸素投与", type: "select", options: O2_OPTIONS, group: "呼吸" },
  { key: "o2Flow", label: "酸素投与量", short: "投与量", type: "select", options: O2_FLOW_OPTIONS, unit: "L/分", group: "呼吸", needsO2: true },
  { key: "spo2O2", label: "SpO2（酸素投与後）", short: "SpO2(投与後)", type: "number", unit: "%", min: 0, max: 100, group: "呼吸", needsO2: true },
  { key: "rr", label: "呼吸数（RR）", short: "RR", type: "number", unit: "回/分", min: 0, max: 100, group: "呼吸" },
  { key: "temp", label: "体温", short: "体温", type: "number", unit: "℃", min: 25, max: 45, step: "0.1", group: "体温" },
  { key: "history", label: "既往歴", type: "textarea", group: "その他" },
  { key: "treatment", label: "処置", type: "textarea", group: "その他" },
  { key: "notes", label: "備考", type: "textarea", group: "その他" },
];

export const VITAL_GROUPS = ["意識", "循環", "呼吸", "体温", "その他"];
export const VITAL_KEYS = VITAL_ITEMS.map((f) => f.key);

function vitalFields(prefix) {
  return VITAL_ITEMS.map((f) => ({ ...f, key: `${prefix}.${f.key}`, base: f.key, prefix }));
}

export const SECTIONS = [
  { id: "basic", title: "基本情報", fields: BASIC_FIELDS },
  { id: "v1", title: "バイタルサイン1", fields: vitalFields("v1") },
  { id: "v2", title: "バイタルサイン2（急変時）", fields: vitalFields("v2"), optional: true },
];

export const ALL_FIELDS = SECTIONS.flatMap((s) => s.fields);
const FIELD_MAP = new Map(ALL_FIELDS.map((f) => [f.key, f]));

export function getField(key) {
  return FIELD_MAP.get(key);
}

export function fieldLabel(key) {
  const f = FIELD_MAP.get(key);
  if (!f) return key;
  if (!f.prefix) return f.label;
  return `${f.prefix === "v1" ? "バイタル1" : "バイタル2"}：${f.label}`;
}

export function emptyData() {
  return Object.fromEntries(ALL_FIELDS.map((f) => [f.key, ""]));
}

// 入力値を整える。酸素投与が「なし」（または未選択）なら、投与量と投与後SpO2は空にする
export function normalizeData(data) {
  const out = emptyData();
  for (const key of Object.keys(out)) {
    const v = data && data[key];
    out[key] = v == null ? "" : String(v).trim();
  }
  for (const p of ["v1", "v2"]) {
    if (!o2InUse(out, p)) {
      out[`${p}.o2Flow`] = "";
      out[`${p}.spo2O2`] = "";
    }
  }
  return out;
}

export function o2InUse(data, prefix) {
  const v = data[`${prefix}.o2`];
  return !!v && v !== "なし";
}

export function gcsTotal(data, prefix) {
  const e = Number(data[`${prefix}.gcsE`]);
  const v = Number(data[`${prefix}.gcsV`]);
  const m = Number(data[`${prefix}.gcsM`]);
  if (!e || !v || !m) return "";
  return String(e + v + m);
}

export function isVitalsEmpty(data, prefix) {
  return VITAL_KEYS.every((k) => !data[`${prefix}.${k}`]);
}

export function isEmptyData(data) {
  return ALL_FIELDS.every((f) => !data[f.key]);
}

export function formatValue(field, value) {
  if (value === "" || value == null) return "";
  if (field.base === "jcs") return `JCS ${value}`;
  return field.unit ? `${value} ${field.unit}` : String(value);
}

export function scenarioTitle(data) {
  return (data && data.disease) || "無題のシナリオ";
}

export function scenarioSubtitle(data) {
  const parts = [];
  if (data.age) parts.push(`${data.age}歳`);
  if (data.sex) parts.push(data.sex);
  return parts.join(" / ");
}

// 「作成済み」とみなす条件：基本情報がそろい、バイタルサイン1に1つ以上入力がある
export const REQUIRED_KEYS = ["disease", "age", "sex", "complaint"];
export function isComplete(data) {
  return REQUIRED_KEYS.every((k) => data[k]) && !isVitalsEmpty(data, "v1");
}

export function copyVitals1To2(data) {
  const out = { ...data };
  for (const k of VITAL_KEYS) out[`v2.${k}`] = data[`v1.${k}`] || "";
  return out;
}
