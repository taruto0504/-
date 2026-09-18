(function () {
  "use strict";

  const STORAGE_KEY = "cpaTimerState_v1";
  const RHYTHM_INTERVAL_MS = 2 * 60 * 1000;
  const EPI_INTERVAL_MS = 3 * 60 * 1000;

  const els = {
    time: document.getElementById("timer-time"),
    startedAt: document.getElementById("timer-started-at"),
    startPause: document.getElementById("btn-start-pause"),
    reset: document.getElementById("btn-reset"),
    alertRhythm: document.getElementById("alert-rhythm"),
    alertEpi: document.getElementById("alert-epi"),
    logList: document.getElementById("log-list"),
    copyBtn: document.getElementById("btn-copy-log"),
    clearBtn: document.getElementById("btn-clear-log"),
    noteInput: document.getElementById("note-input"),
    addNoteBtn: document.getElementById("btn-add-note"),
    micBtn: document.getElementById("btn-mic"),
    voiceHint: document.getElementById("voice-hint"),
  };

  let state = loadState();

  function defaultState() {
    return {
      running: false,
      startTimestamp: null, // ms epoch, when the current running segment began
      accumulatedMs: 0, // elapsed ms from completed segments
      firstStartedAt: null, // ms epoch, when timer was first started (for display)
      lastRhythmCheck: null, // ms epoch reference for rhythm reminder
      lastEpi: null, // ms epoch reference for epi reminder
      events: [], // { label, emoji, time, elapsedMs }
    };
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      const parsed = JSON.parse(raw);
      return Object.assign(defaultState(), parsed);
    } catch (e) {
      return defaultState();
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      /* ignore quota errors */
    }
  }

  function getElapsedMs() {
    if (state.running && state.startTimestamp) {
      return state.accumulatedMs + (Date.now() - state.startTimestamp);
    }
    return state.accumulatedMs;
  }

  function formatElapsed(ms) {
    const totalSec = Math.max(0, Math.floor(ms / 1000));
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    const pad = (n) => String(n).padStart(2, "0");
    return h > 0 ? `${pad(h)}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
  }

  function formatClock(ms) {
    const d = new Date(ms);
    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  }

  function vibrate(pattern) {
    if (navigator.vibrate) {
      try { navigator.vibrate(pattern); } catch (e) { /* ignore */ }
    }
  }

  function toggleStartPause() {
    if (!state.running) {
      state.running = true;
      state.startTimestamp = Date.now();
      if (!state.firstStartedAt) {
        state.firstStartedAt = state.startTimestamp;
        state.lastRhythmCheck = state.startTimestamp;
        state.lastEpi = state.startTimestamp;
      }
    } else {
      state.accumulatedMs = getElapsedMs();
      state.running = false;
      state.startTimestamp = null;
    }
    saveState();
    render();
  }

  function resetTimer() {
    if (!confirm("タイマーと全ての記録をリセットします。よろしいですか?")) return;
    state = defaultState();
    saveState();
    render();
  }

  function logEvent(label, emoji) {
    const now = Date.now();
    if (!state.firstStartedAt) {
      // Auto-start timer on first event if not started yet
      state.running = true;
      state.startTimestamp = now;
      state.firstStartedAt = now;
      state.lastRhythmCheck = now;
      state.lastEpi = now;
    }
    const elapsedMs = getElapsedMs();
    state.events.unshift({ label, emoji, time: now, elapsedMs });

    if (label === "リズムチェック") {
      state.lastRhythmCheck = now;
    }
    if (label === "アドレナリン投与") {
      state.lastEpi = now;
    }
    if (label === "CPA対応終了" || label === "ROSC(自己心拍再開)") {
      state.running = false;
      if (state.startTimestamp) {
        state.accumulatedMs = getElapsedMs();
      }
      state.startTimestamp = null;
    }

    vibrate(30);
    saveState();
    render();
  }

  function deleteEvent(index) {
    state.events.splice(index, 1);
    saveState();
    renderLog();
  }

  function checkAlerts() {
    const now = Date.now();
    if (!state.firstStartedAt) {
      els.alertRhythm.classList.remove("show");
      els.alertEpi.classList.remove("show");
      return;
    }
    const rhythmDue = now - (state.lastRhythmCheck || state.firstStartedAt) >= RHYTHM_INTERVAL_MS;
    const epiDue = now - (state.lastEpi || state.firstStartedAt) >= EPI_INTERVAL_MS;

    const wasRhythmShown = els.alertRhythm.classList.contains("show");
    const wasEpiShown = els.alertEpi.classList.contains("show");

    els.alertRhythm.classList.toggle("show", rhythmDue && state.running);
    els.alertEpi.classList.toggle("show", epiDue && state.running);

    if (rhythmDue && state.running && !wasRhythmShown) vibrate([80, 60, 80]);
    if (epiDue && state.running && !wasEpiShown) vibrate([80, 60, 80]);
  }

  function renderLog() {
    if (state.events.length === 0) {
      els.logList.innerHTML = '<div class="empty-log">まだ記録がありません</div>';
      return;
    }
    els.logList.innerHTML = state.events
      .map(
        (ev, i) => `
      <div class="log-item">
        <div class="log-label">${ev.emoji} ${escapeHtml(ev.label)}</div>
        <div class="log-meta">
          <span class="log-time">経過 ${formatElapsed(ev.elapsedMs)} / ${formatClock(ev.time)}</span>
          <button class="log-del" data-index="${i}" aria-label="削除">✕</button>
        </div>
      </div>`
      )
      .join("");

    els.logList.querySelectorAll(".log-del").forEach((btn) => {
      btn.addEventListener("click", () => deleteEvent(parseInt(btn.dataset.index, 10)));
    });
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function render() {
    els.time.textContent = formatElapsed(getElapsedMs());
    els.startedAt.textContent = state.firstStartedAt
      ? "開始時刻: " + formatClock(state.firstStartedAt)
      : "未開始";
    els.startPause.textContent = state.running ? "一時停止" : state.firstStartedAt ? "再開" : "開始";
    els.startPause.classList.toggle("is-running", state.running);
    renderLog();
    checkAlerts();
  }

  function buildLogText() {
    const lines = [];
    lines.push("CPA記録ログ");
    lines.push(
      "開始時刻: " + (state.firstStartedAt ? new Date(state.firstStartedAt).toLocaleString("ja-JP") : "-")
    );
    lines.push("");
    const chronological = [...state.events].reverse();
    chronological.forEach((ev) => {
      lines.push(`[経過 ${formatElapsed(ev.elapsedMs)} / ${formatClock(ev.time)}] ${ev.label}`);
    });
    return lines.join("\n");
  }

  els.startPause.addEventListener("click", toggleStartPause);
  els.reset.addEventListener("click", resetTimer);

  document.querySelectorAll(".event-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.dataset.label === "CPA対応終了") {
        if (!confirm("CPA対応を終了として記録します。よろしいですか?")) return;
      }
      logEvent(btn.dataset.label, btn.dataset.emoji);
    });
  });

  els.copyBtn.addEventListener("click", async () => {
    const text = buildLogText();
    try {
      await navigator.clipboard.writeText(text);
      els.copyBtn.textContent = "✅ コピーしました";
    } catch (e) {
      window.prompt("以下のテキストをコピーしてください:", text);
    }
    setTimeout(() => (els.copyBtn.textContent = "📋 ログをコピー"), 1800);
  });

  els.clearBtn.addEventListener("click", () => {
    if (state.events.length === 0) return;
    if (!confirm("記録ログを全て削除します。よろしいですか?(タイマーは継続します)")) return;
    state.events = [];
    saveState();
    renderLog();
  });

  // --- テキストメモ ---
  function addNoteFromInput() {
    const text = els.noteInput.value.trim();
    if (!text) return;
    logEvent(text, "📝");
    els.noteInput.value = "";
  }

  els.addNoteBtn.addEventListener("click", addNoteFromInput);
  els.noteInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addNoteFromInput();
    }
  });

  // --- 音声入力 ---
  const SpeechRecognitionImpl = window.SpeechRecognition || window.webkitSpeechRecognition;
  const DEFAULT_VOICE_HINT = "🎤をタップすると音声入力を開始します。話した内容は自動で記録に追加されます。";
  let recognition = null;
  let isListening = false;
  let stoppingIntentionally = false;

  if (SpeechRecognitionImpl) {
    recognition = new SpeechRecognitionImpl();
    recognition.lang = "ja-JP";
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.addEventListener("result", (event) => {
      let interim = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        if (result.isFinal) {
          const text = result[0].transcript.trim();
          if (text) logEvent(text, "🎤");
        } else {
          interim += result[0].transcript;
        }
      }
      els.noteInput.value = interim;
    });

    recognition.addEventListener("end", () => {
      if (isListening && !stoppingIntentionally) {
        try {
          recognition.start();
        } catch (e) {
          /* ignore */
        }
      } else {
        isListening = false;
        els.micBtn.classList.remove("is-listening");
        els.voiceHint.textContent = DEFAULT_VOICE_HINT;
      }
    });

    recognition.addEventListener("error", (event) => {
      if (event.error === "not-allowed" || event.error === "service-not-allowed") {
        els.voiceHint.textContent = "⚠ マイクの使用が許可されていません。ブラウザの設定を確認してください。";
        stoppingIntentionally = true;
        isListening = false;
        els.micBtn.classList.remove("is-listening");
      }
    });

    els.micBtn.addEventListener("click", () => {
      if (isListening) {
        stoppingIntentionally = true;
        isListening = false;
        recognition.stop();
        els.micBtn.classList.remove("is-listening");
        els.voiceHint.textContent = DEFAULT_VOICE_HINT;
      } else {
        stoppingIntentionally = false;
        isListening = true;
        try {
          recognition.start();
          els.micBtn.classList.add("is-listening");
          els.voiceHint.textContent = "🔴 音声入力中... もう一度タップで停止します。";
        } catch (e) {
          isListening = false;
        }
      }
    });

    window.addEventListener("pagehide", () => {
      stoppingIntentionally = true;
      isListening = false;
      try {
        recognition.stop();
      } catch (e) {
        /* ignore */
      }
    });
  } else {
    els.micBtn.disabled = true;
    els.micBtn.style.opacity = "0.4";
    els.voiceHint.textContent = "この端末・ブラウザは音声入力に対応していません。テキスト入力をご利用ください。";
  }

  render();
  setInterval(render, 1000);
})();
