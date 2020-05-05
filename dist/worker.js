let CACHE_NAME = 'credit-card-UI'
let urlsToCache = [
    '/',
    '/completed'
]

// enabling the service worker to be installed
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Opened cache')
            return cache.addAll(urlsToCache)
        })
    )
})

// caching and returning requests to events
self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            // once cached, response is returned
            if (response) {
                return response
            }
            return fetch(e.request)
        })
    )
})

// updating service worker
self.addEventListener('activate', e => {
    let cacheWhiteList = ['credit-card-UI']
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhiteList.indexOf(cacheName) === -1) { // if cacheName exceeds
                        return caches.delete(cacheName) //  delete cache name
                    }
                })
            )
        })
    )
})