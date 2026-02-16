const CACHE_NAME = "card-vault-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"
];

// Install Event: Cache files
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Fetch Event: Serve from cache if offline
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
