(function () {
  "use strict";

  // Bump the version when the terms change so everyone has to agree again.
  const CONSENT_KEY = "termsAccepted_v2";

  function hasConsent() {
    try {
      return !!localStorage.getItem(CONSENT_KEY);
    } catch (e) {
      return false;
    }
  }

  function saveConsent() {
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify({ acceptedAt: new Date().toISOString() }));
    } catch (e) {
      /* storage unavailable: consent lasts for this page only */
    }
  }

  if (hasConsent()) return;

  const icon = window.icon || (() => "");

  if (document.body.dataset.page === "terms") {
    const bar = document.createElement("div");
    bar.className = "consent-bar";
    bar.innerHTML = `<button class="btn-primary" type="button">${icon("check")} 同意して利用を開始する</button>`;
    bar.querySelector("button").addEventListener("click", () => {
      saveConsent();
      location.href = "index.html";
    });
    document.body.appendChild(bar);
    document.documentElement.classList.add("has-consent-bar");
    return;
  }

  const overlay = document.createElement("div");
  overlay.className = "consent-overlay";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-labelledby", "consent-title");
  overlay.innerHTML = `
    <div class="consent-box">
      <div class="consent-head">
        <img src="icons/icon.svg" alt="">
        <h2 id="consent-title">ご利用前にご確認ください</h2>
      </div>
      <ul class="consent-points">
        <li>本アプリは医療従事者向けの<strong>参考用ツール</strong>であり、<strong>医療機器ではありません</strong>。</li>
        <li>計算結果・記録・アラームの正確性や動作は保証されません。必ずご自身で確認してください。</li>
        <li>投与・処置などの判断は、医師の指示・施設の基準・添付文書等に基づき、<strong>利用者ご自身の責任</strong>で行ってください。</li>
        <li>本アプリの利用により生じたいかなる損害についても、<strong>開発者は責任を負いません</strong>。</li>
        <li>患者を特定できる個人情報は入力しないでください。</li>
      </ul>
      <a class="consent-link" href="terms.html">${icon("note")} 利用規約・免責事項(全文)を読む</a>
      <label class="consent-check"><input type="checkbox" id="consent-check"> 上記および利用規約に同意します</label>
      <button class="btn-primary" id="consent-accept" type="button" disabled>同意して利用する</button>
    </div>`;
  document.body.appendChild(overlay);
  document.documentElement.classList.add("consent-open");

  const check = overlay.querySelector("#consent-check");
  const accept = overlay.querySelector("#consent-accept");
  check.addEventListener("change", () => {
    accept.disabled = !check.checked;
  });
  accept.addEventListener("click", () => {
    if (!check.checked) return;
    saveConsent();
    overlay.remove();
    document.documentElement.classList.remove("consent-open");
  });
})();
