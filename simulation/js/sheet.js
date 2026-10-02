// 作成済みシナリオを1画面（A4なら1枚）にまとめて見せる「シナリオシート」。
// 閲覧画面・PDF・印刷で同じものを使う。

import { gcsTotal, isVitalsEmpty, scenarioTitle, fieldLabel } from "./fields.js";
import { esc } from "./ui.js";
import { icon } from "./icons.js";
import { flagOf, bpFlag, flagMark, flagsApply, RANGE_NOTE } from "./vitals.js";

// バイタルサインの行。keys は v1./v2. を除いた項目キー
const ROWS = [
  { label: "意識(JCS)", keys: ["jcs"], fmt: (g) => (g("jcs") !== "" ? g("jcs") : ""), trend: "jcs", flag: (g) => flagOf("jcs", g("jcs")) },
  {
    label: "GCS",
    keys: ["gcsE", "gcsV", "gcsM"],
    // 合計点を大きく、内訳（E4V5M6）を小さく添える
    fmt: (g, d, p) => {
      if (!g("gcsE") && !g("gcsV") && !g("gcsM")) return "";
      const detail = `E${g("gcsE") || "-"}V${g("gcsV") || "-"}M${g("gcsM") || "-"}`;
      const total = gcsTotal(d, p);
      return total ? { main: total, sub: detail } : detail;
    },
    flag: (g, d, p) => flagOf("gcs", gcsTotal(d, p)),
  },
  { label: "HR", unit: "回/分", keys: ["hr"], trend: "hr", flag: (g) => flagOf("hr", g("hr")) },
  { label: "血圧(右)", unit: "mmHg", keys: ["bpRSys", "bpRDia"], fmt: (g) => bp(g("bpRSys"), g("bpRDia")), trend: "bpRSys", flag: (g) => bpFlag(g("bpRSys"), g("bpRDia")) },
  { label: "血圧(左)", unit: "mmHg", keys: ["bpLSys", "bpLDia"], fmt: (g) => bp(g("bpLSys"), g("bpLDia")), trend: "bpLSys", flag: (g) => bpFlag(g("bpLSys"), g("bpLDia")) },
  { label: "SpO2(RA)", unit: "%", keys: ["spo2"], trend: "spo2", flag: (g) => flagOf("spo2", g("spo2")) },
  { label: "酸素投与", keys: ["o2", "o2Flow"], fmt: (g) => (g("o2") ? `${g("o2")}${g("o2Flow") && g("o2") !== "なし" ? ` ${g("o2Flow")}L/分` : ""}` : "") },
  { label: "SpO2(投与後)", unit: "%", keys: ["spo2O2"], trend: "spo2O2", flag: (g) => flagOf("spo2", g("spo2O2")) },
  { label: "RR", unit: "回/分", keys: ["rr"], trend: "rr", flag: (g) => flagOf("rr", g("rr")) },
  { label: "体温", unit: "℃", keys: ["temp"], trend: "temp", flag: (g) => flagOf("temp", g("temp")) },
  { label: "既往歴", keys: ["history"], text: true },
  { label: "処置", keys: ["treatment"], text: true },
  { label: "備考", keys: ["notes"], text: true },
];

function bp(sys, dia) {
  if (!sys && !dia) return "";
  return `${sys || "-"}/${dia || "-"}`;
}

// 値の文字（比較・変更前の表示用）と、表に出すHTML
const valueText = (v) => (v && typeof v === "object" ? `${v.main} ${v.sub}` : v || "");
const valueHtml = (v, flag = "") =>
  v && typeof v === "object" ? `${esc(v.main)}${flag}<span class="sub">${esc(v.sub)}</span>` : v ? `${esc(v)}${flag}` : "";

function cellValue(row, data, prefix) {
  const g = (k) => data[`${prefix}.${k}`] || "";
  return row.fmt ? row.fmt(g, data, prefix) : g(row.keys[0]);
}

// バイタル1→2で数値が上がったか下がったか
function trendMark(row, data) {
  if (!row.trend) return "";
  const a = parseFloat(data[`v1.${row.trend}`]);
  const b = parseFloat(data[`v2.${row.trend}`]);
  if (Number.isNaN(a) || Number.isNaN(b) || a === b) return "";
  return b > a ? '<span class="trend up" aria-label="上昇">↑</span>' : '<span class="trend down" aria-label="低下">↓</span>';
}

/**
 * @param data     シナリオの入力内容
 * @param options  changes: 受信者向けの変更点 {key: {from,to}}、issues: 項目ごとの指摘 {key: [..]}、
 *                 print: 印刷用（変更点・指摘の印を出さない）
 */
export function sheetHtml(data, { changes = {}, issues = {}, print = false } = {}) {
  const hasV2 = !isVitalsEmpty(data, "v2");
  const useFlags = flagsApply(data);
  let flagged = false;
  const prefixes = hasV2 ? ["v1", "v2"] : ["v1"];
  const mark = (keys) => {
    if (print) return { cls: "", before: null, issue: false };
    const changed = keys.some((k) => changes[k]);
    const issue = keys.some((k) => issues[k] && issues[k].length);
    return { cls: `${changed ? "changed" : ""} ${issue ? "has-issue" : ""}`, changed, issue };
  };

  // ---- 基本情報 ----
  const basicMark = (k) => mark([k]);
  const before = (k) => (!print && changes[k] ? `<span class="before">前: ${esc(changes[k].from) || "（未入力）"}</span>` : "");
  const profile = [data.age ? `${esc(data.age)}歳` : "", esc(data.sex || "")].filter(Boolean).join(" / ");
  const textBlock = (k, label) =>
    data[k] || (!print && changes[k])
      ? `<div class="sheet-text ${basicMark(k).cls}"><span class="sheet-label">${label}</span><p>${esc(data[k]) || '<span class="muted">—</span>'}</p>${before(k)}</div>`
      : "";

  // ---- バイタル表 ----
  const rows = ROWS.map((row) => {
    const values = prefixes.map((p) => cellValue(row, data, p));
    const rowKeysBy = (p) => row.keys.map((k) => `${p}.${k}`);
    const anyChange = !print && prefixes.some((p) => rowKeysBy(p).some((k) => changes[k]));
    if (values.every((v) => !v) && !anyChange) return "";
    const cells = prefixes
      .map((p, i) => {
        const m = mark(rowKeysBy(p));
        let prev = "";
        if (m.changed) {
          const old = { ...data };
          for (const k of rowKeysBy(p)) if (changes[k]) old[k] = changes[k].from;
          prev = `<span class="before">前: ${esc(valueText(cellValue(row, old, p))) || "（未入力）"}</span>`;
        }
        const trend = i === 1 ? trendMark(row, data) : "";
        const g = (k) => data[`${p}.${k}`] || "";
        const flag = useFlags && row.flag && values[i] ? row.flag(g, data, p) : "";
        if (flag) flagged = true;
        return `<td class="${row.text ? "text" : "num"} ${m.cls} ${flag ? `abn ${flag}` : ""}">${valueHtml(values[i], flagMark(flag)) || '<span class="muted">—</span>'}${trend}${m.issue ? icon("alert", "issue-icon") : ""}${prev}</td>`;
      })
      .join("");
    return `<tr${row.text ? ' class="text-row"' : ""}><th scope="row">${row.label}${row.unit ? `<span class="unit">${row.unit}</span>` : ""}</th>${cells}</tr>`;
  }).join("");

  // ---- 指摘の一覧（画面のみ） ----
  const allIssues = print ? [] : Object.entries(issues).flatMap(([k, list]) => list.map((i) => ({ ...i, key: k })));
  const issueList = allIssues.length
    ? `<div class="sheet-issues">
        <p class="sheet-label">${icon("alert")} 指摘（${allIssues.length}件）</p>
        <ul>${allIssues
          .map((i) => `<li><strong>${esc(i.key === "general" ? "全体" : fieldLabel(i.key))}</strong>：${esc(i.message)}<span class="issue-reason">${esc(i.reason)}</span></li>`)
          .join("")}</ul>
      </div>`
    : "";

  return `
    <article class="sheet ${print ? "print" : ""}">
      <header class="sheet-head">
        <div class="sheet-band">
          <span class="sheet-kind">症例シナリオ</span>
          ${profile ? `<span class="sheet-profile">${profile}</span>` : ""}
        </div>
        <h2 class="sheet-title ${basicMark("disease").cls}">${esc(scenarioTitle(data))}</h2>
        ${before("disease")}${before("age")}${before("sex")}
        ${textBlock("complaint", "主訴")}
        ${textBlock("summary", "概要")}
      </header>
      ${
        rows
          ? `<div class="sheet-table-wrap"><table class="sheet-table ${hasV2 ? "two" : "one"}">
              <colgroup><col class="col-label">${prefixes.map(() => "<col>").join("")}</colgroup>
              <thead><tr><th scope="col">項目</th><th scope="col">バイタル1<span class="unit">初期</span></th>${hasV2 ? '<th scope="col">バイタル2<span class="unit">急変時</span></th>' : ""}</tr></thead>
              <tbody>${rows}</tbody>
            </table></div>
            ${flagged ? `<p class="sheet-legend"><span class="abn hi">H</span> 高値　<span class="abn lo">L</span> 低値　<span class="abn x">!</span> 異常（${RANGE_NOTE}）</p>` : ""}`
          : '<p class="muted small">バイタルサインは未入力です。</p>'
      }
      ${issueList}
    </article>`;
}
