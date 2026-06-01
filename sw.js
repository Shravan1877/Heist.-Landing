self.addEventListener('install', (event) => {
  console.log('[HEIST] Service Worker Installing.');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('[HEIST] Service Worker Activated.');
});

self.addEventListener('fetch', (event) => {
  // A basic pass-through fetch to satisfy PWA/Service Worker audits
  event.respondWith(fetch(event.request));
});