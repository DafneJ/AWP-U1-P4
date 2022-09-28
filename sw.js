// self.addEventListener('install', (event) => {
//     console.log('SW: Instalado');
//     //Nueva instalacion
//    const promiseCache= caches.open('cache-v1.1').then((cache) => {
//         return cache.addAll(
//             [
//                 '/AWP-U1-P4/',
//                 '/AWP-U1-P4/index.html',
//                 '/AWP-U1-P4/images',
//                 '/AWP-U1-P4/pages/dividir.html',
//                 '/AWP-U1-P4/pages/suma.html',
//                 '/AWP-U1-P4/pages/resta.html',
//                 '/AWP-U1-P4/pages/multiplicacion.html',
//                 '/AWP-U1-P4/js/app.js',
//                 '/AWP-U1-P4/css/styles.css',
//                 "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
//                 "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
//             ]
//         );
//     })
//    event.waitUntil(promiseCache)
// //    event.waitUntil(Promise.all(promiseCache))
// });

// //Only cache
// self.addEventListener('fetch', (event) =>{
//      const respCache = caches.match(event.request)
//      event.respondWith(respCache);
// });
const INIT_LOG_MSG = 'SW:';
const CACHE_VERSION = 'v1.0';
const ROOT_PATH = "/AWP-U1-P4";

self.addEventListener('install', event => {
    console.log(INIT_LOG_MSG, 'SW: Instalado');

    const promiseCache = caches.open(`caches${CACHE_VERSION}`).then((cache) => {
        return cache.addAll([
            // Guarda los elementos de la app shell
            `${ROOT_PATH}/`, 
            `${ROOT_PATH}/index.html`, 
            `${ROOT_PATH}/js/app.js`,
            `${ROOT_PATH}/pages/suma.html`,
            `${ROOT_PATH}/pages/resta.html`,
            `${ROOT_PATH}/pages/multiplicacion.html`,
            `${ROOT_PATH}/pages/dividir.html`,
            `https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css`,
            `https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js`,
        ]);
    });

    event.waitUntil(promiseCache);
});

self.addEventListener('fetch', event => {
    const respCache = caches.match(event.request);

    event.respondWith(respCache);
});