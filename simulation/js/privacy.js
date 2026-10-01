// 個人情報らしき入力の自動チェック（保存・送信の前に確認する）。
// 教育用の架空症例に、実在の患者を特定できる情報が入らないようにするための目安。

import { ALL_FIELDS, fieldLabel } from "./fields.js";

// 「〇〇さん」のうち、人名ではない一般的な呼び方
const NOT_NAMES = /^(患者|家族|ご家族|本人|ご本人|妻|夫|奥|旦那|息子|娘|母|父|祖母|祖父|兄|弟|姉|妹|孫|医師|先生|看護師|救急隊|救急隊員|隊員|研修医|主治医|担当医|皆|みな|お客|利用者|入所者|施設職員|職員|患児|児|乳児|幼児|高齢者|男性|女性|方|指導医|救命士|救急救命士|薬剤師|同僚|先輩|後輩|上司|相手|お子|子|赤|医療者)$/;

const RULES = [
  { kind: "生年月日", re: /(生年月日|誕生日)/g },
  { kind: "生年月日", re: /(19|20)\d{2}\s*[\/年.\-]\s*\d{1,2}\s*[\/月.\-]\s*\d{1,2}\s*日?/g },
  { kind: "生年月日", re: /(明治|大正|昭和|平成|令和|[MTSHR])\s*\d{1,2}\s*[年.\/]\s*\d{1,2}\s*[月.\/]\s*\d{1,2}\s*日?/g },
  { kind: "電話番号", re: /0\d{1,4}-\d{1,4}-\d{3,4}|0[5789]0\d{8}/g },
  { kind: "カルテ番号・ID", re: /(カルテ|患者|診察券|ID|ＩＤ)\s*(番号|No\.?|#)?\s*[:：]?\s*[0-9０-９]{4,}/gi },
  { kind: "番号（7桁以上）", re: /[0-9０-９]{7,}/g },
  { kind: "メールアドレス", re: /[\w.+-]+@[\w-]+\.[\w.-]+/g },
  { kind: "住所", re: /(東京都|北海道|京都府|大阪府|[一-龥]{2,3}県)[一-龥ぁ-んァ-ン]{1,8}?[市区町村郡]/g },
  { kind: "氏名", re: /(氏名|名前|患者名)\s*[:：]\s*\S+/g },
  { kind: "氏名", re: /([一-龥]{1,4}\s?[一-龥ぁ-んァ-ン]{0,3})\s?(さん|様|さま|氏|くん|ちゃん)/g, name: true },
];

/**
 * @returns [{ key, label, kind, text }] 見つかった箇所（なければ空配列）
 */
export function findPersonalInfo(data, extraTexts = {}) {
  const found = [];
  const targets = [
    ...ALL_FIELDS.filter((f) => f.type === "text" || f.type === "textarea").map((f) => ({ key: f.key, label: fieldLabel(f.key), text: data[f.key] || "" })),
    ...Object.entries(extraTexts).map(([label, text]) => ({ key: label, label, text: text || "" })),
  ];
  for (const t of targets) {
    if (!t.text) continue;
    const seen = new Set();
    for (const rule of RULES) {
      for (const m of t.text.matchAll(rule.re)) {
        if (rule.name && NOT_NAMES.test(m[1].trim())) continue;
        const text = m[0].trim();
        if (seen.has(text)) continue;
        seen.add(text);
        found.push({ key: t.key, label: t.label, kind: rule.kind, text });
      }
    }
  }
  return found;
}
