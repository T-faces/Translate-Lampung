var VERSION = "KamusAksaraLampung-v20261006-3";

var fileCache = [
  './index.html',
  './js/aksaraLampung.js',
  './js/main.js',
  './js/offline.js',
  './js/ui-modern.js',
  './css/bootstrap.min.css',
  './css/style.css',
  './fonts/aksara-Lampung-Unila-v2.ttf'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(VERSION).then(function (cache) {
      return cache.addAll(fileCache);
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(cacheNames.map(function (key) {
        if (key !== VERSION) return caches.delete(key);
      }));
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.open(VERSION).then(function (cache) {
      return cache.match(event.request).then(function (cached) {
        var network = fetch(event.request).then(function (response) {
          if (response && response.ok && new URL(response.url).origin === location.origin) {
            cache.put(event.request, response.clone());
          }
          return response;
        }).catch(function () { return cached; });

        return cached || network;
      });
    })
  );
});