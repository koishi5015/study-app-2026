const CACHE_NAME = "study-app-pwa-v3";
const APP_SHELL = [
  "./",
  "./index.html",
  "./404.html",
  "./sync.config.js",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./subjects/doshitsu1.js",
  "./subjects/doshitsu3.js",
  "./subjects/kozo1.js",
  "./subjects/kozo2.js",
  "./subjects/kozo3.js",
  "./subjects/suiri1.js",
  "./subjects/suiri3.js",
  "./subjects/oyosugaku1.js",
  "./subjects/keikaku2.js"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const req = event.request;
  if(req.method !== "GET") return;
  const url = new URL(req.url);
  if(url.origin !== self.location.origin) return;
  if(req.mode === "navigate"){
    event.respondWith(fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE_NAME).then(cache => cache.put("./index.html", copy));
      return res;
    }).catch(() => caches.match("./index.html")));
    return;
  }
  event.respondWith(caches.match(req).then(cached => cached || fetch(req).then(res => {
    if(res && res.status === 200){
      const copy = res.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
    }
    return res;
  })));
});
