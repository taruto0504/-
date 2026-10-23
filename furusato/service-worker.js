// Web版のオフライン対応。画面の部品は先に保存し、読み取り（OCR）の部品は初めて使った時に保存する。
const VERSION = "furusato-v2";
const SHELL = [
  "./",
  "index.html",
  "manifest.json",
  "css/app.css",
  "icons/icon.svg",
  "icons/icon-192.png",
  "js/app.js",
  "js/calc.js",
  "js/units.js",
  "js/ocr-parse.js",
  "js/ocr.js",
  "js/config.js",
  "js/storage.js",
  "js/ai.js",
  "js/share.js",
  "config/app-config.json",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith("furusato-v") && k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;

  // 他のアプリの共有メニューから届いた画像を一時保存して、アプリを開く
  if (e.request.method === "POST" && url.pathname.endsWith("/share-target")) {
    e.respondWith(
      (async () => {
        const form = await e.request.formData();
        const cache = await caches.open("furusato-shared");
        let i = 0;
        for (const file of form.getAll("images")) {
          if (file instanceof File) await cache.put(`shared/${Date.now()}-${i++}`, new Response(file, { headers: { "content-type": file.type } }));
        }
        return Response.redirect("./#shared", 303);
      })(),
    );
    return;
  }
  if (e.request.method !== "GET") return;

  // 設定ファイルは新しいものを優先（通信できない時は保存分）
  if (url.pathname.endsWith("/config/app-config.json")) {
    e.respondWith(
      fetch(e.request)
        .then((res) => {
          const copy = res.clone();
          caches.open(VERSION).then((c) => c.put(e.request, copy));
          return res;
        })
        .catch(() => caches.match(e.request)),
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then(
      (hit) =>
        hit ||
        fetch(e.request).then((res) => {
          if (res.ok && url.pathname.includes("/vendor/tesseract/")) {
            const copy = res.clone();
            caches.open(VERSION).then((c) => c.put(e.request, copy));
          }
          return res;
        }),
    ),
  );
});
