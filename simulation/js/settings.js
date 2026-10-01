// 表示の設定（この端末だけに保存）：テーマと文字サイズ

const KEY = "medsim:display";

export const THEMES = [
  { id: "auto", label: "自動（端末の設定に合わせる）" },
  { id: "light", label: "ライト" },
  { id: "dark", label: "ダーク" },
];
export const FONT_SIZES = [
  { id: "normal", label: "標準" },
  { id: "large", label: "大きい" },
  { id: "xlarge", label: "特大" },
];

export function getDisplay() {
  try {
    return { theme: "auto", fontSize: "normal", ...JSON.parse(localStorage.getItem(KEY) || "{}") };
  } catch {
    return { theme: "auto", fontSize: "normal" };
  }
}

export function setDisplay(next) {
  const value = { ...getDisplay(), ...next };
  try {
    localStorage.setItem(KEY, JSON.stringify(value));
  } catch {}
  applyDisplay(value);
}

// 自動のときは何も指定しない（端末やclaude.aiの表示設定に任せる）
export function applyDisplay(value = getDisplay()) {
  const root = document.documentElement;
  if (value.theme === "light" || value.theme === "dark") root.dataset.theme = value.theme;
  else if (root.dataset.medsimTheme) delete root.dataset.theme;
  root.dataset.medsimTheme = value.theme;
  if (value.fontSize === "normal") delete root.dataset.fontsize;
  else root.dataset.fontsize = value.fontSize;
}
