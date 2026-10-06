(function () {
  "use strict";

  // ===== 広告の設定(ここだけ書き換えれば切り替わります) =====
  // mode:
  //   "off"     … 広告を表示しない
  //   "preview" … 位置確認用のグレーの枠を表示する(URLに ?ads=preview を付けても確認できる)
  //   "adsense" … Google AdSense を表示する(client と slots に審査後のIDを入れる)
  //   "custom"  … 自分で用意したバナー画像+リンク(アフィリエイト等)を表示する
  const AD_CONFIG = {
    mode: "off",
    adsense: {
      client: "ca-pub-0000000000000000",
      slots: { home: "0000000000" },
    },
    custom: {
      home: { image: "", link: "", alt: "" },
    },
  };

  const AD_WIDTH = 320;
  const AD_HEIGHT = 50;

  const slots = document.querySelectorAll("[data-ad-slot]");
  if (!slots.length) return;

  const preview = new URLSearchParams(location.search).get("ads") === "preview";
  const mode = preview ? "preview" : AD_CONFIG.mode;
  if (mode === "off") return;

  // Web ads must not be shown inside the native app (AdSense policy); the app uses AdMob instead.
  const cap = window.Capacitor;
  const isNativeApp = !!(cap && cap.isNativePlatform && cap.isNativePlatform());
  if (isNativeApp && mode !== "preview") return;

  const label = '<div class="ad-label">広告</div>';

  function renderPreview(slot) {
    slot.innerHTML = `${label}<div class="ad-box ad-placeholder">広告枠(${AD_WIDTH}×${AD_HEIGHT})</div>`;
  }

  function renderCustom(slot, name) {
    const ad = AD_CONFIG.custom[name];
    if (!ad || !ad.image || !ad.link) return false;
    const a = document.createElement("a");
    a.className = "ad-box";
    a.href = ad.link;
    a.target = "_blank";
    a.rel = "sponsored noopener";
    const img = document.createElement("img");
    img.src = ad.image;
    img.alt = ad.alt || "広告";
    img.width = AD_WIDTH;
    img.height = AD_HEIGHT;
    a.appendChild(img);
    slot.innerHTML = label;
    slot.appendChild(a);
    return true;
  }

  let adsenseLoaded = false;
  function renderAdsense(slot, name) {
    const id = AD_CONFIG.adsense.slots[name];
    if (!id) return false;
    if (!adsenseLoaded) {
      const s = document.createElement("script");
      s.async = true;
      s.crossOrigin = "anonymous";
      s.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + encodeURIComponent(AD_CONFIG.adsense.client);
      document.head.appendChild(s);
      adsenseLoaded = true;
    }
    slot.innerHTML = `${label}<ins class="adsbygoogle ad-box" style="display:inline-block;width:${AD_WIDTH}px;height:${AD_HEIGHT}px" data-ad-client="${AD_CONFIG.adsense.client}" data-ad-slot="${id}"></ins>`;
    (window.adsbygoogle = window.adsbygoogle || []).push({});
    return true;
  }

  slots.forEach((slot) => {
    const name = slot.dataset.adSlot;
    let shown = false;
    if (mode === "preview") {
      renderPreview(slot);
      shown = true;
    } else if (mode === "custom") {
      shown = renderCustom(slot, name);
    } else if (mode === "adsense") {
      shown = renderAdsense(slot, name);
    }
    if (shown) slot.hidden = false;
  });
})();
