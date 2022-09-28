self.addEventListener('install', (event) => {
    console.log('SW: Instalado');
    //Nueva instalacion
   const promiseCache= caches.open('cache-v1.1').then((cache) => {
        return cache.addAll(
            [
                '/AWP-U1-P4/',
                '/AWP-U1-P4/index.html',
                '/AWP-U1-P4/images',
                '/AWP-U1-P4/pages/dividir.html',
                '/AWP-U1-P4/pages/suma.html',
                '/AWP-U1-P4/pages/resta.html',
                '/AWP-U1-P4/pages/multiplicacion.html',
                '/AWP-U1-P4/css/styles.css',
                '/AWP-U1-P4/js/app.js',
                "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
                "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
            ]
        );
    })
   event.waitUntil(promiseCache)
//    event.waitUntil(Promise.all(promiseCache))
});

//Only cache
self.addEventListener('fetch', (event) =>{
     const respCache = caches.match(event.request)
     event.respondWith(respCache);
});
