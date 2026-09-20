(function () {
  "use strict";

  const STORAGE_KEY = "generalTimerState_v1";

  // Tabs
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => b.classList.remove("active"));
      tabPanels.forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById("tab-" + btn.dataset.tab).classList.add("active");
    });
  });

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function formatMs(ms, alwaysHours) {
    const totalSec = Math.max(0, Math.round(ms / 1000));
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    return h > 0 || alwaysHours ? `${pad(h)}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
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

  // --- Web Audio beep ---
  let audioCtx = null;
  function ensureAudioCtx() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return audioCtx;
  }
  // Unlock/resume the AudioContext from within a real user gesture (button press),
  // so later programmatic beeps (e.g. an alarm firing from setInterval) can still play.
  function primeAudioCtx() {
    const ctx = ensureAudioCtx();
    if (ctx.state === "suspended") ctx.resume();
  }
  function playTone(ctx, freq, time, duration, type, peakGain) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type || "sine";
    osc.frequency.value = freq;
    const peak = peakGain || 0.4;
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(peak, time + 0.008);
    gain.gain.setValueAtTime(peak, time + Math.max(duration - 0.02, 0.008));
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);
    osc.connect(gain).connect(ctx.destination);
    osc.start(time);
    osc.stop(time + duration + 0.02);
  }

  // 耳に残りやすい高低交互のサイレン風アラーム音(スクエア波・高音量)
  const ALARM_NOTES = [1400, 1000, 1400, 1000];
  function playAlarmBurst() {
    const ctx = ensureAudioCtx();
    const play = () => {
      let t = ctx.currentTime;
      ALARM_NOTES.forEach((freq) => {
        playTone(ctx, freq, t, 0.14, "square", 0.9);
        t += 0.17;
      });
    };
    if (ctx.state === "suspended") {
      ctx.resume().then(play);
    } else {
      play();
    }
  }

  let alarmIntervalId = null;
  function startAlarm() {
    stopAlarm();
    playAlarmBurst();
    vibrate([300, 120, 300, 120, 300, 120, 300]);
    alarmIntervalId = setInterval(() => {
      playAlarmBurst();
      vibrate([300, 120, 300, 120, 300]);
    }, 950);
  }
  function stopAlarm() {
    if (alarmIntervalId) {
      clearInterval(alarmIntervalId);
      alarmIntervalId = null;
    }
  }

  // --- State ---
  function defaultState() {
    return {
      countdown: {
        durationMs: 0,
        running: false,
        startTimestamp: null,
        accumulatedMs: 0,
        finished: false,
      },
      stopwatch: {
        running: false,
        startTimestamp: null,
        accumulatedMs: 0,
        laps: [], // { index, splitMs, totalMs }
      },
    };
  }

  let state = loadState();

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      const parsed = JSON.parse(raw);
      const def = defaultState();
      return {
        countdown: Object.assign(def.countdown, parsed.countdown),
        stopwatch: Object.assign(def.stopwatch, parsed.stopwatch),
      };
    } catch (e) {
      return defaultState();
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      /* ignore */
    }
  }

  // ===================== カウントダウンタイマー =====================
  const cd = state.countdown;
  const els = {
    countdownTime: document.getElementById("countdown-time"),
    countdownDisplay: document.getElementById("countdown-display"),
    finishedBanner: document.getElementById("countdown-finished-banner"),
    hInput: document.getElementById("countdown-h"),
    mInput: document.getElementById("countdown-m"),
    sInput: document.getElementById("countdown-s"),
    startPause: document.getElementById("countdown-start-pause"),
    reset: document.getElementById("countdown-reset"),
    stopwatchTime: document.getElementById("stopwatch-time"),
    swStartPause: document.getElementById("stopwatch-start-pause"),
    swReset: document.getElementById("stopwatch-reset"),
    lapBtn: document.getElementById("stopwatch-lap"),
    lapList: document.getElementById("lap-list"),
    savePresetBtn: document.getElementById("save-preset-btn"),
    savedPresetList: document.getElementById("saved-preset-list"),
    presetNameInput: document.getElementById("preset-name-input"),
    presetMsg: document.getElementById("preset-msg"),
  };

  function showPresetMsg(text, isError) {
    els.presetMsg.textContent = text;
    els.presetMsg.classList.toggle("is-error", !!isError);
    clearTimeout(els.presetMsg._hideTimer);
    els.presetMsg._hideTimer = setTimeout(() => {
      els.presetMsg.textContent = "";
    }, 3500);
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function cdElapsedMs() {
    if (cd.running && cd.startTimestamp) {
      return cd.accumulatedMs + (Date.now() - cd.startTimestamp);
    }
    return cd.accumulatedMs;
  }

  function cdRemainingMs() {
    return cd.durationMs - cdElapsedMs();
  }

  function readDurationFromInputs() {
    const h = parseInt(els.hInput.value, 10) || 0;
    const m = parseInt(els.mInput.value, 10) || 0;
    const s = parseInt(els.sInput.value, 10) || 0;
    return (h * 3600 + m * 60 + s) * 1000;
  }

  function writeInputsFromDuration(ms) {
    const totalSec = Math.round(ms / 1000);
    els.hInput.value = Math.floor(totalSec / 3600) || "";
    els.mInput.value = Math.floor((totalSec % 3600) / 60) || "";
    els.sInput.value = totalSec % 60 || "";
  }

  document.querySelectorAll(".preset-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const sec = parseInt(btn.dataset.sec, 10);
      cd.durationMs = sec * 1000;
      cd.accumulatedMs = 0;
      cd.running = false;
      cd.startTimestamp = null;
      cd.finished = false;
      stopAlarm();
      writeInputsFromDuration(cd.durationMs);
      saveState();
      renderCountdown();
    });
  });

  [els.hInput, els.mInput, els.sInput].forEach((input) => {
    input.addEventListener("input", () => {
      if (cd.running) return;
      cd.durationMs = readDurationFromInputs();
      cd.accumulatedMs = 0;
      cd.finished = false;
      saveState();
      renderCountdown();
    });
  });

  els.startPause.addEventListener("click", () => {
    primeAudioCtx();
    if (cd.finished) {
      cd.finished = false;
      cd.accumulatedMs = 0;
      stopAlarm();
    }
    if (!cd.running) {
      if (cd.durationMs <= 0) {
        cd.durationMs = readDurationFromInputs();
      }
      if (cd.durationMs <= 0) return;
      cd.running = true;
      cd.startTimestamp = Date.now();
    } else {
      cd.accumulatedMs = cdElapsedMs();
      cd.running = false;
      cd.startTimestamp = null;
    }
    saveState();
    renderCountdown();
  });

  els.reset.addEventListener("click", () => {
    cd.running = false;
    cd.startTimestamp = null;
    cd.accumulatedMs = 0;
    cd.finished = false;
    cd.durationMs = 0;
    stopAlarm();
    els.hInput.value = "";
    els.mInput.value = "";
    els.sInput.value = "";
    saveState();
    renderCountdown();
  });

  function renderCountdown() {
    let remaining = cdRemainingMs();
    if (remaining <= 0 && cd.running) {
      remaining = 0;
      cd.running = false;
      cd.startTimestamp = null;
      cd.accumulatedMs = cd.durationMs;
      if (!cd.finished) {
        cd.finished = true;
        startAlarm();
      }
      saveState();
    }
    els.countdownTime.textContent = formatMs(Math.max(0, remaining));
    els.countdownDisplay.classList.toggle("is-finished", cd.finished);
    els.finishedBanner.classList.toggle("show", cd.finished);
    els.startPause.textContent = cd.running ? "一時停止" : cd.finished ? "再スタート" : cd.accumulatedMs > 0 ? "再開" : "開始";
    els.startPause.classList.toggle("is-running", cd.running);
  }

  if (cd.durationMs > 0) writeInputsFromDuration(cd.durationMs);
  if (cd.finished) startAlarm();

  // ===================== 名前付き保存タイマー =====================
  const PRESET_KEY = "savedTimerPresets_v1";

  function loadPresets() {
    try {
      const raw = localStorage.getItem(PRESET_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function savePresetsToStorage(list) {
    try {
      localStorage.setItem(PRESET_KEY, JSON.stringify(list));
    } catch (e) {
      /* ignore */
    }
  }

  let presets = loadPresets();

  function loadPresetIntoTimer(preset) {
    cd.durationMs = preset.durationMs;
    cd.accumulatedMs = 0;
    cd.running = false;
    cd.startTimestamp = null;
    cd.finished = false;
    stopAlarm();
    writeInputsFromDuration(cd.durationMs);
    saveState();
    renderCountdown();
  }

  function renderPresets() {
    if (presets.length === 0) {
      els.savedPresetList.innerHTML = '<div class="empty-log">保存したタイマーはありません</div>';
      return;
    }
    els.savedPresetList.innerHTML = presets
      .map(
        (p, i) => `
      <div class="log-item" data-index="${i}">
        <div class="log-label">⭐ ${escapeHtml(p.name)}</div>
        <div class="log-meta">
          <span class="log-time">${formatMs(p.durationMs)}</span>
          <button class="log-del" data-index="${i}" aria-label="削除">✕</button>
        </div>
      </div>`
      )
      .join("");

    els.savedPresetList.querySelectorAll(".log-item").forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target.closest(".log-del")) return;
        const i = parseInt(item.dataset.index, 10);
        loadPresetIntoTimer(presets[i]);
      });
    });
    els.savedPresetList.querySelectorAll(".log-del").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const i = parseInt(btn.dataset.index, 10);
        const removed = presets.splice(i, 1)[0];
        savePresetsToStorage(presets);
        renderPresets();
        if (removed) showPresetMsg(`「${removed.name}」を削除しました。`, false);
      });
    });
  }

  els.savePresetBtn.addEventListener("click", () => {
    const ms = readDurationFromInputs();
    if (ms <= 0) {
      showPresetMsg("時間を入力してから保存してください。", true);
      return;
    }
    const name = els.presetNameInput.value.trim();
    if (!name) {
      showPresetMsg("名前を入力してから保存してください。", true);
      els.presetNameInput.focus();
      return;
    }
    presets.push({ name, durationMs: ms });
    savePresetsToStorage(presets);
    els.presetNameInput.value = "";
    showPresetMsg(`「${name}」を保存しました。`, false);
    renderPresets();
  });

  renderPresets();

  // ===================== ストップウォッチ =====================
  const sw = state.stopwatch;

  function swElapsedMs() {
    if (sw.running && sw.startTimestamp) {
      return sw.accumulatedMs + (Date.now() - sw.startTimestamp);
    }
    return sw.accumulatedMs;
  }

  els.swStartPause.addEventListener("click", () => {
    if (!sw.running) {
      sw.running = true;
      sw.startTimestamp = Date.now();
    } else {
      sw.accumulatedMs = swElapsedMs();
      sw.running = false;
      sw.startTimestamp = null;
    }
    saveState();
    renderStopwatch();
  });

  els.swReset.addEventListener("click", () => {
    sw.running = false;
    sw.startTimestamp = null;
    sw.accumulatedMs = 0;
    sw.laps = [];
    saveState();
    renderStopwatch();
  });

  els.lapBtn.addEventListener("click", () => {
    const totalMs = swElapsedMs();
    const prevTotal = sw.laps.length > 0 ? sw.laps[0].totalMs : 0;
    const splitMs = totalMs - prevTotal;
    sw.laps.unshift({ index: sw.laps.length + 1, splitMs, totalMs });
    vibrate(20);
    saveState();
    renderLaps();
  });

  function renderLaps() {
    if (sw.laps.length === 0) {
      els.lapList.innerHTML = '<div class="empty-log">まだラップがありません</div>';
      return;
    }
    els.lapList.innerHTML = sw.laps
      .map(
        (lap) => `
      <div class="lap-item">
        <span class="lap-index">Lap ${lap.index}</span>
        <span>${formatMs(lap.splitMs)}<span style="color:var(--color-text-muted); margin-left:8px;">(合計 ${formatMs(lap.totalMs)})</span></span>
      </div>`
      )
      .join("");
  }

  function renderStopwatch() {
    els.stopwatchTime.textContent = formatMs(swElapsedMs());
    els.swStartPause.textContent = sw.running ? "一時停止" : sw.accumulatedMs > 0 ? "再開" : "開始";
    els.swStartPause.classList.toggle("is-running", sw.running);
    els.lapBtn.disabled = !sw.running && sw.accumulatedMs === 0;
  }

  renderLaps();

  function tick() {
    renderCountdown();
    renderStopwatch();
  }

  tick();
  setInterval(tick, 250);

  window.addEventListener("pagehide", stopAlarm);
})();
