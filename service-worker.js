const CACHE_NAME = "alpha-traders-host-v1";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./login.html",
  "./register.html",
  "./admin-dashboard.html",
  "./mentor-dashboard.html",
  "./client-dashboard.html",
  "./create-ea.html",
  "./manifest.json"
];


self.addEventListener(
  "install",
  function(event) {

    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(
          function(cache) {

            return cache.addAll(
              FILES_TO_CACHE
            );

          }
        )
    );

    self.skipWaiting();

  }
);


self.addEventListener(
  "activate",
  function(event) {

    event.waitUntil(

      caches.keys()
        .then(
          function(cacheNames) {

            return Promise.all(

              cacheNames.map(
                function(cacheName) {

                  if (
                    cacheName !== CACHE_NAME
                  ) {

                    return caches.delete(
                      cacheName
                    );

                  }

                }
              )

            );

          }
        )

    );

    self.clients.claim();

  }
);


self.addEventListener(
  "fetch",
  function(event) {

    event.respondWith(

      fetch(event.request)
        .catch(
          function() {

            return caches.match(
              event.request
            );

          }
        )

    );

  }
);
