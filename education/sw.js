// 医療教育アプリ用の Service Worker(アプリとしてインストールできるようにするためのもの)
// ・画面の骨組み(HTML・アイコンなど)だけをキャッシュする
// ・HTMLは「まずネットから取得し、つながらない時だけキャッシュ」にして、更新がすぐ反映されるようにする
// ・Firebase など外部への通信には一切関与しない(レポート等のデータはキャッシュしない)
const CACHE_NAME = "edu-app-v1";
const SHELL = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "icons/icon.svg",
  "icons/icon-192.png",
  "icons/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith("edu-app-") && k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (req.mode === "navigate") {
    // 画面(HTML):ネット優先。オフライン時だけキャッシュを返す
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put("index.html", copy));
          }
          return res;
        })
        .catch(() => caches.match("index.html"))
    );
    return;
  }
  // アイコンなど:キャッシュ優先
  event.respondWith(caches.match(req).then((cached) => cached || fetch(req)));
});
