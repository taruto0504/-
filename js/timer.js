(function () {
  "use strict";

  const STORAGE_KEY = "cpaTimerState_v3";
  const RHYTHM_PERIOD_MS = 2 * 60 * 1000;
  const MED_PERIOD_MS = 4 * 60 * 1000;
  const COMPRESSION_BPM = 110;
  const COMPRESSION_BEAT_SEC = 60 / COMPRESSION_BPM;

  const els = {
    rhythmTime: document.getElementById("rhythm-cycle-time"),
    rhythmStartPause: document.getElementById("rhythm-start-pause"),
    rhythmReset: document.getElementById("rhythm-reset"),
    medTime: document.getElementById("med-cycle-time"),
    medStartPause: document.getElementById("med-start-pause"),
    medReset: document.getElementById("med-reset"),
    alertRhythm: document.getElementById("alert-rhythm"),
    alertEpi: document.getElementById("alert-epi"),
    medDrugSelect: document.getElementById("med-drug-select"),
    rhythmWaveSelect: document.getElementById("rhythm-wave-select"),
    ettSizeSelect: document.getElementById("ett-size-select"),
    logList: document.getElementById("log-list"),
    copyBtn: document.getElementById("btn-copy-log"),
    clearBtn: document.getElementById("btn-clear-log"),
    noteInput: document.getElementById("note-input"),
    addNoteBtn: document.getElementById("btn-add-note"),
    micBtn: document.getElementById("btn-mic"),
    voiceHint: document.getElementById("voice-hint"),
  };

  let state = loadState();

  function defaultCycle() {
    return { running: false, startTimestamp: null, accumulatedMs: 0, cycleIndex: 0 };
  }

  function defaultState() {
    return {
      sessionFirstTimestamp: null, // reference point for the log's "経過" time
      rhythm: defaultCycle(),
      med: defaultCycle(),
      events: [], // { label, emoji, time, elapsedMs }
    };
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      const parsed = JSON.parse(raw);
      const def = defaultState();
      return {
        sessionFirstTimestamp: parsed.sessionFirstTimestamp || null,
        rhythm: Object.assign(def.rhythm, parsed.rhythm),
        med: Object.assign(def.med, parsed.med),
        events: parsed.events || [],
      };
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

  function ensureSessionStart() {
    if (!state.sessionFirstTimestamp) state.sessionFirstTimestamp = Date.now();
  }

  function cycleElapsedMs(cycle) {
    if (cycle.running && cycle.startTimestamp) {
      return cycle.accumulatedMs + (Date.now() - cycle.startTimestamp);
    }
    return cycle.accumulatedMs;
  }

  function sessionElapsedMs() {
    return state.sessionFirstTimestamp ? Date.now() - state.sessionFirstTimestamp : 0;
  }

  function formatMMSS(ms) {
    const totalSec = Math.max(0, Math.ceil(ms / 1000));
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(m)}:${pad(s)}`;
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
      try {
        navigator.vibrate(pattern);
      } catch (e) {
        /* ignore */
      }
    }
  }

  // --- Web Audio helpers (resume before scheduling to avoid a silent first beep) ---
  let audioCtx = null;
  function ensureAudioCtx() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return audioCtx;
  }
  function withRunningAudioCtx(callback) {
    const ctx = ensureAudioCtx();
    if (ctx.state === "suspended") {
      ctx.resume().then(callback);
    } else {
      callback();
    }
  }
  function playTone(ctx, freq, time, duration, type) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type || "sine";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(0.4, time + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);
    osc.connect(gain).connect(ctx.destination);
    osc.start(time);
    osc.stop(time + duration + 0.02);
  }
  function beepOnce(freq, duration) {
    withRunningAudioCtx(() => {
      const ctx = ensureAudioCtx();
      playTone(ctx, freq, ctx.currentTime, duration);
    });
  }

  // --- 胸骨圧迫リズム音(110/分の連続メトロノーム) ---
  let compressionIntervalId = null;
  let nextCompressionBeatTime = 0;

  function compressionScheduler() {
    const ctx = ensureAudioCtx();
    while (nextCompressionBeatTime < ctx.currentTime + 0.12) {
      playTone(ctx, 500, nextCompressionBeatTime, 0.06, "square");
      nextCompressionBeatTime += COMPRESSION_BEAT_SEC;
    }
  }

  function startCompressionSound() {
    if (compressionIntervalId) return;
    withRunningAudioCtx(() => {
      if (!state.rhythm.running) return;
      const ctx = ensureAudioCtx();
      nextCompressionBeatTime = ctx.currentTime + 0.05;
      compressionIntervalId = setInterval(compressionScheduler, 25);
    });
  }

  function stopCompressionSound() {
    if (compressionIntervalId) {
      clearInterval(compressionIntervalId);
      compressionIntervalId = null;
    }
  }

  function flashBanner(el) {
    el.classList.add("show");
    clearTimeout(el._hideTimer);
    el._hideTimer = setTimeout(() => el.classList.remove("show"), 6000);
  }

  function triggerRhythmAlert() {
    flashBanner(els.alertRhythm);
    vibrate([200, 100, 200, 100, 200]);
    beepOnce(1000, 0.3);
  }

  function triggerMedAlert() {
    flashBanner(els.alertEpi);
    vibrate([200, 100, 200]);
    beepOnce(700, 0.3);
  }

  // --- サイクル(リズムチェック/薬剤投与)の開始・一時停止・リセット ---
  function toggleCycle(cycle) {
    if (!cycle.running) {
      // 開始ボタン(ユーザー操作)のタイミングでAudioContextを起こしておく。
      // こうしないと、数分後にタイマーだけで自動発火するアラーム音がブロックされる。
      const ctx = ensureAudioCtx();
      if (ctx.state === "suspended") ctx.resume();
      cycle.running = true;
      cycle.startTimestamp = Date.now();
      ensureSessionStart();
    } else {
      cycle.accumulatedMs = cycleElapsedMs(cycle);
      cycle.running = false;
      cycle.startTimestamp = null;
    }
    saveState();
    render();
  }

  els.rhythmStartPause.addEventListener("click", () => {
    toggleCycle(state.rhythm);
    if (state.rhythm.running) {
      startCompressionSound();
    } else {
      stopCompressionSound();
    }
  });
  els.medStartPause.addEventListener("click", () => toggleCycle(state.med));

  els.rhythmReset.addEventListener("click", () => {
    state.rhythm = defaultCycle();
    stopCompressionSound();
    saveState();
    render();
  });

  els.medReset.addEventListener("click", () => {
    state.med = defaultCycle();
    saveState();
    render();
  });

  function logEvent(label, emoji) {
    ensureSessionStart();
    const now = Date.now();
    const elapsedMs = sessionElapsedMs();
    state.events.unshift({ label, emoji, time: now, elapsedMs });

    if (label === "CPA対応終了" || label === "ROSC(自己心拍再開)") {
      [state.rhythm, state.med].forEach((cycle) => {
        if (cycle.running) {
          cycle.accumulatedMs = cycleElapsedMs(cycle);
          cycle.running = false;
          cycle.startTimestamp = null;
        }
      });
      stopCompressionSound();
    }

    vibrate(30);
    saveState();
    render();
  }

  function bindSelectLog(selectEl, labelPrefix, emoji) {
    selectEl.addEventListener("change", () => {
      const value = selectEl.value;
      if (!value) return;
      logEvent(labelPrefix + value, emoji);
      selectEl.value = "";
    });
  }

  bindSelectLog(els.medDrugSelect, "薬剤投与: ", "💉");
  bindSelectLog(els.rhythmWaveSelect, "波形: ", "〰️");
  bindSelectLog(els.ettSizeSelect, "気管挿管: ", "🌬️");

  function deleteEvent(index) {
    state.events.splice(index, 1);
    saveState();
    renderLog();
  }

  function checkCycle(cycle, periodMs, onDue) {
    if (!cycle.running) return;
    const elapsed = cycleElapsedMs(cycle);
    const idx = Math.floor(elapsed / periodMs);
    if (idx > cycle.cycleIndex) {
      cycle.cycleIndex = idx;
      onDue();
      saveState();
    }
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
    const rhythmRemaining = RHYTHM_PERIOD_MS - (cycleElapsedMs(state.rhythm) % RHYTHM_PERIOD_MS);
    const medRemaining = MED_PERIOD_MS - (cycleElapsedMs(state.med) % MED_PERIOD_MS);
    els.rhythmTime.textContent = formatMMSS(rhythmRemaining);
    els.medTime.textContent = formatMMSS(medRemaining);

    els.rhythmStartPause.textContent = state.rhythm.running
      ? "一時停止"
      : state.rhythm.accumulatedMs > 0
      ? "再開"
      : "開始";
    els.rhythmStartPause.classList.toggle("is-running", state.rhythm.running);

    els.medStartPause.textContent = state.med.running
      ? "一時停止"
      : state.med.accumulatedMs > 0
      ? "再開"
      : "開始";
    els.medStartPause.classList.toggle("is-running", state.med.running);

    checkCycle(state.rhythm, RHYTHM_PERIOD_MS, triggerRhythmAlert);
    checkCycle(state.med, MED_PERIOD_MS, triggerMedAlert);
    renderLog();
  }

  function buildLogText() {
    const lines = [];
    lines.push("CPA記録ログ");
    lines.push(
      "開始時刻: " +
        (state.sessionFirstTimestamp ? new Date(state.sessionFirstTimestamp).toLocaleString("ja-JP") : "-")
    );
    lines.push("");
    const chronological = [...state.events].reverse();
    chronological.forEach((ev) => {
      lines.push(`[経過 ${formatElapsed(ev.elapsedMs)} / ${formatClock(ev.time)}] ${ev.label}`);
    });
    return lines.join("\n");
  }

  document.querySelectorAll(".event-btn").forEach((btn) => {
    if (!btn.dataset.label) return; // skip compound controls like the drug-select button
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

  window.addEventListener("pagehide", stopCompressionSound);

  render();
  setInterval(render, 1000);
})();
