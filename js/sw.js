let CacheName = "restaurants-static-v3";
let urlToCache = [
  "./",
  "./sw_registration.js",
  "index.html",  
  "restaurant.html",
  "css/styles.css",
  "data/restaurants.json",
  "js/dbhelper.js",
  "js/main.js",
  "js/restaurant_info.js",
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg",
  "img/6.jpg",
  "img/7.jpg",
  "img/8.jpg",
  "img/9.jpg",
  "img/10.jpg"
];

self.addEventListener("install", event => {
        // Add the urlToCache array to cache
  event.waitUntil(
    caches
      .open(CacheName)
      .then(cache => cache.addAll(urlToCache))
      .then(self.skipWaiting())
  );
});

self.addEventListener("activate", event => {

  event.waitUntil(
    caches.keys().then(cacheNames => Promise.all(cacheNames.map(cache => {
      if (cache !== CacheName) {
        console.log("Removing cached files", cache);
        return caches.delete(cache);
      }
    })))
  )
})

self.addEventListener("fetch", event => {
    // Checking files in cache
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(response => {
        if (response) {
          
          return response;
        }
        return fetch(event.request);
      })
    );
  }
});
