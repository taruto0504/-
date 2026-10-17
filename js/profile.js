(function () {
  "use strict";

  // ===== 利用者の職種・資格取得からの年数 =====
  // 端末に保存し、統計用の送信先(STATS_CONFIG.endpoint)が設定されたときだけ送信します。
  // 送信先を設定する場合は、各HTMLの Content-Security-Policy の connect-src にそのドメインを追加し、
  // 利用規約(個人情報の取扱い)と合っているか確認してください。
  const STATS_CONFIG = {
    endpoint: "",
  };

  const PROFILE_KEY = "userProfile_v1";
  const INSTALL_ID_KEY = "installId_v1";
  const SENT_KEY = "profileStatsSent_v1";

  const OCCUPATIONS = ["医師", "看護師", "救急救命士", "臨床検査技師", "その他"];
  const YEAR_OPTIONS = [{ value: "na", label: "資格なし・該当しない" }, { value: "0", label: "1年未満" }]
    .concat(Array.from({ length: 39 }, (_, i) => ({ value: String(i + 1), label: `${i + 1}年` })))
    .concat([{ value: "40", label: "40年以上" }]);

  function read(key) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }
  function write(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      /* storage unavailable */
    }
  }

  function getProfile() {
    try {
      const p = JSON.parse(read(PROFILE_KEY) || "null");
      return p && OCCUPATIONS.includes(p.occupation) ? p : null;
    } catch (e) {
      return null;
    }
  }

  function installId() {
    let id = read(INSTALL_ID_KEY);
    if (!id) {
      id = window.crypto && crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random().toString(16).slice(2);
      write(INSTALL_ID_KEY, id);
    }
    return id;
  }

  function yearsBucket(years) {
    if (years === "na") return "na";
    const n = Number(years);
    if (n < 1) return "<1";
    if (n <= 2) return "1-2";
    if (n <= 5) return "3-5";
    if (n <= 10) return "6-10";
    if (n <= 20) return "11-20";
    return "21+";
  }

  // Anonymous: occupation and years only, plus a random install id to avoid double counting.
  function statsPayload(profile) {
    const cap = window.Capacitor;
    return {
      installId: installId(),
      occupation: profile.occupation,
      yearsSinceLicense: profile.yearsSinceLicense,
      yearsBucket: yearsBucket(profile.yearsSinceLicense),
      platform: cap && cap.isNativePlatform && cap.isNativePlatform() ? cap.getPlatform() : "web",
      updatedAt: profile.updatedAt,
    };
  }

  function sendStats(profile) {
    if (!STATS_CONFIG.endpoint || !profile) return;
    const payload = statsPayload(profile);
    const signature = `${payload.occupation}|${payload.yearsSinceLicense}`;
    if (read(SENT_KEY) === signature) return;
    const body = JSON.stringify(payload);
    let sent = false;
    try {
      sent = navigator.sendBeacon && navigator.sendBeacon(STATS_CONFIG.endpoint, new Blob([body], { type: "application/json" }));
    } catch (e) {
      sent = false;
    }
    if (!sent) {
      fetch(STATS_CONFIG.endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body, keepalive: true })
        .then((r) => r.ok && write(SENT_KEY, signature))
        .catch(() => {});
      return;
    }
    write(SENT_KEY, signature);
  }

  function showDialog(editing) {
    if (document.getElementById("profile-title")) return;
    const current = getProfile();
    const overlay = document.createElement("div");
    overlay.className = "consent-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-labelledby", "profile-title");
    overlay.innerHTML = `
      <div class="consent-box profile-box">
        <div class="consent-head">
          <img src="icons/icon.svg" alt="">
          <h2 id="profile-title">${editing ? "職種・年数の変更" : "あなたについて教えてください"}</h2>
        </div>
        <p class="profile-lead">アプリの改善と利用状況の統計に使います(個人を特定する情報は集めません)。あとから変更できます。</p>
        <div class="profile-label" id="profile-occ-label">職種</div>
        <div class="profile-occ" role="radiogroup" aria-labelledby="profile-occ-label">
          ${OCCUPATIONS.map((o) => `<label class="profile-chip"><input type="radio" name="profile-occ" value="${o}"${current && current.occupation === o ? " checked" : ""}><span>${o}</span></label>`).join("")}
        </div>
        <label class="profile-label" for="profile-years">資格取得からの年数</label>
        <select id="profile-years">
          <option value="" disabled${current ? "" : " selected"}>選択してください</option>
          ${YEAR_OPTIONS.map((y) => `<option value="${y.value}"${current && current.yearsSinceLicense === y.value ? " selected" : ""}>${y.label}</option>`).join("")}
        </select>
        <button class="btn-primary" id="profile-save" type="button" disabled>${editing ? "保存する" : "保存して始める"}</button>
        ${editing ? '<button class="btn-secondary profile-cancel" id="profile-cancel" type="button">キャンセル</button>' : ""}
      </div>`;
    document.body.appendChild(overlay);
    document.documentElement.classList.add("consent-open");

    const save = overlay.querySelector("#profile-save");
    const years = overlay.querySelector("#profile-years");
    const occ = () => (overlay.querySelector('input[name="profile-occ"]:checked') || {}).value;
    const update = () => {
      save.disabled = !(occ() && years.value);
    };
    overlay.addEventListener("change", update);
    update();

    const close = () => {
      overlay.remove();
      document.documentElement.classList.remove("consent-open");
    };
    save.addEventListener("click", () => {
      if (save.disabled) return;
      const profile = { occupation: occ(), yearsSinceLicense: years.value, updatedAt: new Date().toISOString() };
      write(PROFILE_KEY, JSON.stringify(profile));
      close();
      sendStats(profile);
    });
    const cancel = overlay.querySelector("#profile-cancel");
    if (cancel) cancel.addEventListener("click", close);
  }

  function ensureProfile() {
    if (document.body.dataset.page === "terms") return;
    if (!window.MSTConsent || !window.MSTConsent.has()) return;
    const profile = getProfile();
    if (!profile) showDialog(false);
    else sendStats(profile);
  }

  window.MSTProfile = { open: () => showDialog(true), get: getProfile };
  window.addEventListener("consentaccepted", ensureProfile);
  ensureProfile();
})();
