self.addEventListener('install', (event) => {
    console.log('SW: Instalado');
    //Nueva instalacion
   const promiseCache= caches.open('cache-v1.1').then((cache) => {
        return cache.addAll(
            [
                '/',
                '/index.html',
                '/images',
                '/pages/dividir.html',
                '/pages/suma.html',
                '/pages/resta.html',
                '/pages/multiplicacion.html',
                'css/styles.css',
                'js/app.js',
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
