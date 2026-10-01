// 機械的に判定できる整合性チェック（企画書 10章「整合性チェック」）。
// AI評価ボタンを押したときに、AIの指摘と一緒に表示する。APIキーがなくても動く。

import { gcsTotal, isVitalsEmpty } from "./fields.js";

const num = (v) => (v === "" || v == null ? null : Number(v));

export function ruleChecks(data) {
  const issues = [];
  const add = (field, message, reason) => issues.push({ field, message, reason, source: "rule" });

  for (const p of ["v1", "v2"]) {
    if (p === "v2" && isVitalsEmpty(data, "v2")) continue;
    const k = (name) => `${p}.${name}`;

    for (const side of [["R", "右"], ["L", "左"]]) {
      const sys = num(data[k(`bp${side[0]}Sys`)]);
      const dia = num(data[k(`bp${side[0]}Dia`)]);
      if (sys != null && dia != null && dia >= sys) {
        add(k(`bp${side[0]}Dia`), `血圧（${side[1]}）の拡張期が収縮期以上になっています`, `収縮期 ${sys} mmHg に対して拡張期 ${dia} mmHg です。拡張期血圧は通常、収縮期血圧より低くなります。`);
      }
    }
    for (const key of ["spo2", "spo2O2"]) {
      const v = num(data[k(key)]);
      if (v != null && (v > 100 || v < 0)) {
        add(k(key), `SpO2が0〜100%の範囲外です`, `SpO2は酸素で飽和したヘモグロビンの割合なので、100%を超えることはありません（入力値 ${v}%）。`);
      }
    }
    const o2 = data[k("o2")];
    if ((!o2 || o2 === "なし") && (data[k("o2Flow")] || data[k("spo2O2")])) {
      add(k("o2Flow"), `酸素投与が「なし」なのに投与量または投与後SpO2が入っています`, "酸素を投与していない場合、投与量と投与後のSpO2は記録されないはずです。");
    }
    const spo2 = num(data[k("spo2")]);
    const spo2O2 = num(data[k("spo2O2")]);
    if (spo2 != null && spo2O2 != null && spo2O2 < spo2 - 5) {
      add(k("spo2O2"), `酸素投与後のSpO2が投与前より大きく下がっています`, `RAで ${spo2}% → 酸素投与後 ${spo2O2}% です。悪化を意図したシナリオでなければ見直してください。`);
    }
    const jcs = num(data[k("jcs")]);
    const gcs = num(gcsTotal(data, p));
    if (jcs != null && gcs != null) {
      if (jcs >= 100 && gcs >= 13) {
        add(k("jcs"), `JCS ${jcs} と GCS ${gcs} が食い違っています`, "JCS 3桁（刺激しても覚醒しない）は、通常GCS 8以下程度の重い意識障害に相当します。");
      } else if (jcs === 0 && gcs <= 12) {
        add(k("jcs"), `JCS 0（意識清明）と GCS ${gcs} が食い違っています`, "意識清明であればGCSは15（またはそれに近い値）になるはずです。");
      }
    }
    const hr = num(data[k("hr")]);
    if (hr === 0 && (jcs != null && jcs < 300)) {
      add(k("hr"), `HR 0 なのに意識が保たれています`, "心停止（HR 0）では意識は失われます。");
    }
  }
  return issues;
}
