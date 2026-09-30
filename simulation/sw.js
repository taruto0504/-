const CACHE_NAME = "medsim-v10";
const ASSETS = [
  "index.html",
  "manifest.json",
  "css/sim.css",
  "js/app.js",
  "js/store.js",
  "js/fields.js",
  "js/ui.js",
  "js/voice.js",
  "js/ai.js",
  "js/checks.js",
  "js/icons.js",
  "js/env.js",
  "js/remote.js",
  "js/sheet.js",
  "js/actions.js",
  "js/views/auth.js",
  "js/views/home.js",
  "js/views/editor.js",
  "js/views/detail.js",
  "js/views/contacts.js",
  "js/views/inbox.js",
  "js/views/notifications.js",
  "js/views/me.js",
  "../icons/icon.svg",
  "../icons/icon-192.png",
  "../icons/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith("medsim-") && k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// 同じサイトのファイルは、キャッシュを先に返しつつ裏で最新版に更新する
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  if (new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      const fetchPromise = fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
