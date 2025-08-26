const CACHE_NAME = "vicky-rentcar-cache-v1";
const urlsToCache = [
  "/", // homepage
  "/favicon.ico",
  "/manifest.json",
  "/logoVRN.png",
  "/android-chrome-192x192.png",
  "/android-chrome-512x512.png",
];

// Install SW & cache files
self.addEventListener("install", (event) => {
  console.log("[SW] Installing...");
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[SW] Precaching...");
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate SW & clear old cache
self.addEventListener("activate", (event) => {
  console.log("[SW] Activating...");
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            console.log("[SW] Deleting old cache:", name);
            return caches.delete(name);
          }
        })
      )
    )
  );
  return self.clients.claim();
});

// Fetch: cache-first untuk asset statis, network-first untuk HTML
self.addEventListener("fetch", (event) => {
  const request = event.request;

  // HTML pages → network first
  if (request.mode === "navigate") {
    event.respondWith(fetch(request).catch(() => caches.match("/")));
    return;
  }

  // Static assets → cache first
  event.respondWith(
    caches.match(request).then((response) => {
      return (
        response ||
        fetch(request).then((res) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, res.clone());
            return res;
          });
        })
      );
    })
  );
});
