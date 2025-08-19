const CACHE_NAME = "vicky-rentcar-cache-v1";
const urlsToCache = [
  "/",
  "/favicon.ico",
  "/site.webmanifest",
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

// Fetch cache-first fallback to network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        console.log("[SW] Serving from cache:", event.request.url);
        return response;
      }
      console.log("[SW] Fetching:", event.request.url);
      return fetch(event.request);
    })
  );
});
