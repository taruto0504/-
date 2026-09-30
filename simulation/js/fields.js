// シナリオの入力項目定義。キーは scenario.data のプロパティ名になる。

export const SEX_OPTIONS = ["男性", "女性", "その他", "不明"];

export const BASIC_FIELDS = [
  { key: "disease", label: "疾患名", type: "text", placeholder: "例：急性心筋梗塞" },
  { key: "age", label: "年齢", type: "number", unit: "歳", min: 0, max: 130 },
  { key: "sex", label: "性別", type: "select", options: SEX_OPTIONS },
  { key: "summary", label: "概要", type: "textarea", placeholder: "現病歴・既往歴・発生状況など" },
  { key: "complaint", label: "主訴", type: "textarea", placeholder: "例：胸が締め付けられるように痛い" },
  { key: "treatment", label: "想定される処置・対応", type: "textarea", placeholder: "例：12誘導心電図、酸素投与、ルート確保" },
];

const VITAL_ITEMS = [
  { key: "consciousness", label: "意識レベル", type: "text", placeholder: "例：JCS I-1 / GCS E4V5M6", wide: true },
  { key: "hr", label: "心拍数", type: "number", unit: "回/分", min: 0, max: 300 },
  { key: "rr", label: "呼吸数", type: "number", unit: "回/分", min: 0, max: 100 },
  { key: "bpSys", label: "血圧（収縮期）", type: "number", unit: "mmHg", min: 0, max: 300 },
  { key: "bpDia", label: "血圧（拡張期）", type: "number", unit: "mmHg", min: 0, max: 200 },
  { key: "spo2", label: "SpO2", type: "number", unit: "%", min: 0, max: 100 },
  { key: "temp", label: "体温", type: "number", unit: "℃", min: 25, max: 45, step: "0.1" },
  { key: "ecg", label: "心電図", type: "text", placeholder: "例：洞調律、ST上昇（II, III, aVF）", wide: true },
  { key: "notes", label: "その他の所見", type: "textarea", placeholder: "例：冷汗あり、顔面蒼白", wide: true },
];

function vitalFields(prefix) {
  return VITAL_ITEMS.map((f) => ({ ...f, key: `${prefix}.${f.key}` }));
}

export const SECTIONS = [
  { id: "basic", title: "基本情報", fields: BASIC_FIELDS },
  { id: "v1", title: "バイタルサイン1（初期）", fields: vitalFields("v1") },
  { id: "v2", title: "バイタルサイン2（急変時）", fields: vitalFields("v2") },
];

export const ALL_FIELDS = SECTIONS.flatMap((s) => s.fields);

export function fieldLabel(key) {
  const section = SECTIONS.find((s) => s.fields.some((f) => f.key === key));
  const field = ALL_FIELDS.find((f) => f.key === key);
  if (!field) return key;
  return section && section.id !== "basic" ? `${section.title} / ${field.label}` : field.label;
}

export function emptyData() {
  return Object.fromEntries(ALL_FIELDS.map((f) => [f.key, ""]));
}

export function normalizeData(data) {
  const out = emptyData();
  for (const key of Object.keys(out)) {
    const v = data && data[key];
    out[key] = v == null ? "" : String(v).trim();
  }
  return out;
}

export function formatValue(field, value) {
  if (value === "" || value == null) return "";
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

export function isEmptyData(data) {
  return ALL_FIELDS.every((f) => !data[f.key]);
}
