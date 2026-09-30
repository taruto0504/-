// 音声入力（Web Speech API）。Chrome（PC / Android）と Safari（iPhone / Mac）で利用できる。
// 文章を書く欄（概要・主訴・既往歴・処置・備考・チャット）で使う。
// マイクボタンで開始、もう一度押すと終了。認識した内容はそのまま入力欄に入り、手で直せる。

import { toast, esc } from "./ui.js";

const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let active = null;

export const voiceSupported = !!Recognition;

// 認識した文章を入力欄の末尾に追記する（複数行の欄は改行して追記）
function applyResult(input, text) {
  const cur = input.value;
  const sep = input.tagName === "TEXTAREA" ? "\n" : " ";
  input.value = cur && !/\s$/.test(cur) ? `${cur}${sep}${text}` : cur + text;
  input.dispatchEvent(new Event("input", { bubbles: true }));
}

function banner(show, text = "") {
  let el = document.getElementById("voice-banner");
  if (!el) {
    el = document.createElement("div");
    el.id = "voice-banner";
    el.setAttribute("role", "status");
    document.body.appendChild(el);
  }
  el.hidden = !show;
  el.innerHTML = `<span class="rec-dot" aria-hidden="true"></span><span>録音中… 話し終えたら「停止」を押してください</span>${
    text ? `<span class="interim">${esc(text)}</span>` : ""
  }`;
}

export function stopVoice() {
  if (active) active.stop();
}

export function toggleVoice(button, input) {
  if (!Recognition) {
    toast("このブラウザは音声入力に対応していません（Chrome または Safari をお使いください）");
    return;
  }
  if (input.disabled) return;
  if (active) {
    const wasSame = active.button === button;
    active.stop();
    if (wasSame) return;
  }
  const rec = new Recognition();
  rec.lang = "ja-JP";
  rec.interimResults = true;
  rec.continuous = input.tagName === "TEXTAREA";
  const label = button.querySelector(".mic-label");
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
    if (label) label.textContent = "音声";
    banner(false);
    if (active === session) active = null;
  }
  rec.onresult = (e) => {
    let interim = "";
    for (let i = e.resultIndex; i < e.results.length; i++) {
      const t = e.results[i][0].transcript.trim();
      if (e.results[i].isFinal) applyResult(input, t);
      else interim += t;
    }
    if (active === session) banner(true, interim);
  };
  rec.onerror = (e) => {
    if (e.error === "not-allowed" || e.error === "service-not-allowed") toast("マイクの使用が許可されていません。ブラウザの設定を確認してください");
    else if (e.error !== "no-speech" && e.error !== "aborted") toast("音声を認識できませんでした");
  };
  rec.onend = finish;
  active = session;
  button.classList.add("listening");
  button.setAttribute("aria-pressed", "true");
  if (label) label.textContent = "停止";
  banner(true);
  input.focus({ preventScroll: true });
  rec.start();
}

export function micButton(targetId) {
  return `<button type="button" class="mic-btn" data-mic="${targetId}" aria-pressed="false"><span aria-hidden="true">🎤</span><span class="mic-label">音声</span></button>`;
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
