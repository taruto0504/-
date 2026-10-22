// 設定ファイル（基準値・しきい値・単位・サイト一覧）を読み込む。
// 配信先の新しい設定 → 前回取得して保存した設定 → アプリ同梱の設定 の順に使い、
// 形が壊れている設定は使わない（validateConfig）。

import { validateConfig } from "./calc.js";
import { load, save } from "./storage.js";

// アプリ版（iPhone / Android）が取りに行く配信先。Web版は同じ場所の config/ を読む
const REMOTE_URL = "https://taruto0504.github.io/-/furusato/config/app-config.json";
const BUNDLED_URL = "config/app-config.json";

async function fetchJson(url, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { cache: "no-cache", signal: controller.signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } finally {
    clearTimeout(timer);
  }
}

function usable(config) {
  return config && validateConfig(config).length === 0;
}

export async function loadConfig() {
  const bundled = await fetchJson(BUNDLED_URL, 10000);
  const cached = load("config", null);
  let config = usable(cached) && cached.version >= bundled.version ? cached : bundled;

  const isApp = Boolean(window.Capacitor?.isNativePlatform?.());
  if (isApp && navigator.onLine !== false) {
    try {
      const remote = await fetchJson(REMOTE_URL, 5000);
      if (usable(remote) && remote.version >= config.version) {
        config = remote;
        save("config", remote);
      }
    } catch {
      /* 通信できない時は手元の設定で動く */
    }
  }
  return config;
}
