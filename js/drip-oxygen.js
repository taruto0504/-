(function () {
  "use strict";

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

  // --- 点滴滴下数計算 ---
  const dripResult = document.getElementById("drip-result");
  const dripResultMain = document.getElementById("drip-result-main");
  const dripResultSub = document.getElementById("drip-result-sub");
  const dripSoundBtn = document.getElementById("drip-sound-btn");
  const dripModeTimeWrap = document.getElementById("drip-mode-time");
  const dripModeRateWrap = document.getElementById("drip-mode-rate");

  document.querySelectorAll('input[name="drip-mode"]').forEach((r) => {
    r.addEventListener("change", () => {
      const isRate = r.value === "rate" && r.checked;
      dripModeTimeWrap.style.display = isRate ? "none" : "block";
      dripModeRateWrap.style.display = isRate ? "block" : "none";
    });
  });

  document.getElementById("drip-calc-btn").addEventListener("click", () => {
    stopDripSound();
    const mode = document.querySelector('input[name="drip-mode"]:checked').value;
    const volume = parseFloat(document.getElementById("drip-volume").value);
    const factor = parseFloat(document.querySelector('input[name="drip-factor"]:checked').value);

    let dropsPerMin, mlPerHour, totalMinutes;

    if (mode === "time") {
      const hours = parseFloat(document.getElementById("drip-hours").value) || 0;
      const minutes = parseFloat(document.getElementById("drip-minutes").value) || 0;
      totalMinutes = hours * 60 + minutes;

      if (!volume || volume <= 0 || totalMinutes <= 0) {
        showDripError("指示総量と投与時間(0より大きい値)を入力してください。");
        return;
      }
      dropsPerMin = (volume * factor) / totalMinutes;
      mlPerHour = (volume / totalMinutes) * 60;
    } else {
      const rate = parseFloat(document.getElementById("drip-rate").value);
      if (!rate || rate <= 0) {
        showDripError("投与速度(mL/h、0より大きい値)を入力してください。");
        return;
      }
      mlPerHour = rate;
      dropsPerMin = (rate * factor) / 60;
      totalMinutes = volume > 0 ? (volume / rate) * 60 : null;
    }

    dripResult.classList.remove("warning");
    const dropsPer10Sec = dropsPerMin / 6;

    dripResult.style.display = "block";
    dripResultMain.textContent = formatNum(dropsPerMin);
    dripResultSub.innerHTML =
      "10秒あたり: 約 " + formatNum(dropsPer10Sec) + " 滴<br>" +
      "流量換算: 約 " + formatNum(mlPerHour) + " mL/時" +
      (totalMinutes
        ? "<br>投与時間の目安: 約 " + formatDuration(totalMinutes)
        : "");

    dripSoundBtn.style.display = "flex";
    dripSoundBtn.dataset.dropsPerMin = String(dropsPerMin);
  });

  function showDripError(message) {
    dripResult.style.display = "block";
    dripResult.classList.add("warning");
    dripResultMain.textContent = "入力エラー";
    dripResultSub.textContent = message;
    dripSoundBtn.style.display = "none";
  }

  function formatDuration(totalMinutes) {
    const h = Math.floor(totalMinutes / 60);
    const m = Math.round(totalMinutes % 60);
    return h > 0 ? `${h}時間${m}分` : `${m}分`;
  }

  // --- 滴下ペースのビープ音 ---
  let audioCtx = null;
  let beepSchedulerId = null;
  let nextBeepTime = 0;
  let beepIntervalSec = 0;

  function playBeep(time) {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.value = 880;
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(0.35, time + 0.005);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.09);
    osc.connect(gain).connect(audioCtx.destination);
    osc.start(time);
    osc.stop(time + 0.1);
  }

  function beepScheduler() {
    while (nextBeepTime < audioCtx.currentTime + 0.1) {
      playBeep(nextBeepTime);
      nextBeepTime += beepIntervalSec;
    }
  }

  function startDripSound(dropsPerMin) {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    beepIntervalSec = 60 / dropsPerMin;
    dripSoundBtn.classList.add("is-playing");
    dripSoundBtn.textContent = "⏹ 音を止める";

    const beginScheduling = () => {
      // Guard against the button having been toggled off again before resume() resolved.
      if (!dripSoundBtn.classList.contains("is-playing")) return;
      nextBeepTime = audioCtx.currentTime + 0.1;
      beepSchedulerId = setInterval(beepScheduler, 25);
    };

    if (audioCtx.state === "suspended") {
      audioCtx.resume().then(beginScheduling);
    } else {
      beginScheduling();
    }
  }

  function stopDripSound() {
    if (beepSchedulerId) {
      clearInterval(beepSchedulerId);
      beepSchedulerId = null;
    }
    dripSoundBtn.classList.remove("is-playing");
    dripSoundBtn.textContent = "🔊 この速さの音を鳴らす";
  }

  dripSoundBtn.addEventListener("click", () => {
    if (beepSchedulerId) {
      stopDripSound();
    } else {
      const dropsPerMin = parseFloat(dripSoundBtn.dataset.dropsPerMin);
      if (dropsPerMin > 0) startDripSound(dropsPerMin);
    }
  });

  window.addEventListener("pagehide", stopDripSound);
  tabBtns.forEach((btn) => btn.addEventListener("click", stopDripSound));

  // --- 酸素ボンベ残量計算 ---
  const o2TypeRadios = document.querySelectorAll('input[name="o2-type"]');
  const customVolumeWrap = document.getElementById("o2-custom-volume-wrap");
  o2TypeRadios.forEach((r) => {
    r.addEventListener("change", () => {
      customVolumeWrap.style.display = r.value === "custom" && r.checked ? "block" : "none";
    });
  });

  const o2Result = document.getElementById("o2-result");
  const o2ResultMain = document.getElementById("o2-result-main");
  const o2ResultSub = document.getElementById("o2-result-sub");

  document.getElementById("o2-calc-btn").addEventListener("click", () => {
    const selectedType = document.querySelector('input[name="o2-type"]:checked').value;
    let innerVolume;
    if (selectedType === "custom") {
      innerVolume = parseFloat(document.getElementById("o2-custom-volume").value);
    } else {
      innerVolume = parseFloat(selectedType);
    }
    const pressure = parseFloat(document.getElementById("o2-pressure").value);
    const flow = parseFloat(document.getElementById("o2-flow").value);

    if (!innerVolume || innerVolume <= 0 || !pressure || pressure <= 0 || !flow || flow <= 0) {
      o2Result.style.display = "block";
      o2Result.classList.add("warning");
      o2ResultMain.textContent = "入力エラー";
      o2ResultSub.textContent = "内容積・圧力計の値・酸素流量(いずれも0より大きい値)を入力してください。";
      return;
    }

    const remainingLiters = innerVolume * pressure * 9.8;
    const minutes = remainingLiters / flow;
    const h = Math.floor(minutes / 60);
    const m = Math.round(minutes % 60);

    o2Result.classList.toggle("warning", minutes < 30);
    o2Result.style.display = "block";
    o2ResultMain.textContent = h > 0 ? h + "時間" + m + "分" : formatNum(minutes) + "分";
    o2ResultSub.innerHTML =
      "ボンベ残量: 約 " + formatNum(remainingLiters) + " L<br>" +
      (minutes < 30 ? "⚠ 残量が少なくなっています。早めに交換を検討してください。" : "");
  });

  function formatNum(n) {
    if (!isFinite(n)) return "-";
    const rounded = Math.round(n * 10) / 10;
    return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
  }
})();
