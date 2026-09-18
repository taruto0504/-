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

  document.getElementById("drip-calc-btn").addEventListener("click", () => {
    const volume = parseFloat(document.getElementById("drip-volume").value);
    const hours = parseFloat(document.getElementById("drip-hours").value) || 0;
    const minutes = parseFloat(document.getElementById("drip-minutes").value) || 0;
    const factor = parseFloat(document.querySelector('input[name="drip-factor"]:checked').value);

    const totalMinutes = hours * 60 + minutes;

    if (!volume || volume <= 0 || totalMinutes <= 0) {
      dripResult.style.display = "block";
      dripResult.classList.add("warning");
      dripResultMain.textContent = "入力エラー";
      dripResultSub.textContent = "指示総量と投与時間(0より大きい値)を入力してください。";
      return;
    }

    dripResult.classList.remove("warning");
    const dropsPerMin = (volume * factor) / totalMinutes;
    const dropsPer10Sec = dropsPerMin / 6;
    const mlPerHour = (volume / totalMinutes) * 60;

    dripResult.style.display = "block";
    dripResultMain.textContent = formatNum(dropsPerMin);
    dripResultSub.innerHTML =
      "10秒あたり: 約 " + formatNum(dropsPer10Sec) + " 滴<br>" +
      "流量換算: 約 " + formatNum(mlPerHour) + " mL/時";
  });

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
