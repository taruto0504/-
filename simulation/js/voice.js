// 音声入力（Web Speech API）。Chrome（PC / Android）と Safari（iPhone / Mac）で利用できる。

import { toast } from "./ui.js";
import { SEX_OPTIONS } from "./fields.js";

const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let active = null;

export const voiceSupported = !!Recognition;

function toHalfWidth(s) {
  return s.replace(/[０-９．－]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xfee0));
}

const KANJI_DIGITS = { 〇: 0, 零: 0, 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9 };
const KANJI_UNITS = { 十: 10, 百: 100, 千: 1000 };

function kanjiToNumber(s) {
  if (!/^[〇零一二三四五六七八九十百千]+$/.test(s)) return null;
  let total = 0;
  let current = 0;
  for (const ch of s) {
    if (ch in KANJI_DIGITS) current = current * 10 + KANJI_DIGITS[ch];
    else {
      total += (current || 1) * KANJI_UNITS[ch];
      current = 0;
    }
  }
  return total + current;
}

// 「36.5度」「三十八度二分」「120」などから数値を取り出す
export function extractNumber(text) {
  const t = toHalfWidth(text).replace(/\s/g, "");
  const doBu = t.match(/(\d+)度(\d)分?/);
  if (doBu) return `${doBu[1]}.${doBu[2]}`;
  const num = t.match(/-?\d+(?:\.\d+)?/);
  if (num) return num[0];
  const kanji = t.match(/[〇零一二三四五六七八九十百千]+/);
  if (kanji) {
    const n = kanjiToNumber(kanji[0]);
    if (n != null) return String(n);
  }
  return "";
}

function applyResult(input, text) {
  if (input.tagName === "SELECT") {
    const hit =
      SEX_OPTIONS.find((o) => text.includes(o)) ||
      (text.includes("男") ? "男性" : text.includes("女") ? "女性" : text.includes("不明") ? "不明" : "");
    if (hit) input.value = hit;
    else toast(`「${text}」を選択肢に当てはめられませんでした`);
  } else if (input.type === "number") {
    const n = extractNumber(text);
    if (n) input.value = n;
    else toast(`「${text}」から数値を読み取れませんでした`);
  } else {
    const cur = input.value;
    input.value = cur && !/[\s\n]$/.test(cur) ? `${cur} ${text}` : cur + text;
  }
  input.dispatchEvent(new Event("input", { bubbles: true }));
  input.dispatchEvent(new Event("change", { bubbles: true }));
}

export function stopVoice() {
  if (active) active.stop();
}

export function toggleVoice(button, input) {
  if (!Recognition) {
    toast("このブラウザは音声入力に対応していません（Chrome または Safari をお使いください）");
    return;
  }
  if (active) {
    const wasSame = active.button === button;
    active.stop();
    if (wasSame) return;
  }
  const rec = new Recognition();
  rec.lang = "ja-JP";
  rec.interimResults = false;
  rec.continuous = input.tagName === "TEXTAREA";
  const session = {
    button,
    stop() {
      try {
        rec.stop();
      } catch {}
      finish();
    },
  };
  function finish() {
    button.classList.remove("listening");
    button.setAttribute("aria-pressed", "false");
    if (active === session) active = null;
  }
  rec.onresult = (e) => {
    for (let i = e.resultIndex; i < e.results.length; i++) {
      if (e.results[i].isFinal) applyResult(input, e.results[i][0].transcript.trim());
    }
  };
  rec.onerror = (e) => {
    if (e.error === "not-allowed" || e.error === "service-not-allowed") toast("マイクの使用が許可されていません");
    else if (e.error !== "no-speech" && e.error !== "aborted") toast("音声を認識できませんでした");
  };
  rec.onend = finish;
  active = session;
  button.classList.add("listening");
  button.setAttribute("aria-pressed", "true");
  input.focus({ preventScroll: true });
  rec.start();
}

export function micButton(targetId) {
  return `<button type="button" class="mic-btn" data-mic="${targetId}" aria-label="音声で入力" aria-pressed="false" title="音声で入力">🎤</button>`;
}

// root 内の [data-mic] ボタンに音声入力を結び付ける
export function bindMics(root) {
  root.querySelectorAll("[data-mic]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const input = root.querySelector(`#${CSS.escape(btn.dataset.mic)}`);
      if (input) toggleVoice(btn, input);
    });
  });
}
