// Install the cache
self.addEventListener('install', event => {
	event.waitUntil(
	  caches.open('v1').then(cache => {
		return cache.addAll([
			'/',
			'/index.html',
			'/css/styles.css',
			'/data/restaurants.json',
          	'/img/1.jpg',
          	'/img/2.jpg',
          	'/img/3.jpg',
          	'/img/4.jpg',
          	'/img/5.jpg',
          	'/img/6.jpg',
          	'/img/7.jpg',
          	'/img/8.jpg',
          	'/img/9.jpg',
          	'/img/10.jpg',
          	'/js/main.js',
			'/js/dbhelper.js',
			'/js/restaurant_info.js',
			'/js/service-worker-registration.js'
		]).catch(err => {
			console.log("Error: ", err);
		});
	}));
});

// Fetch from the network
self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request).then(response => {
		return response || fetch(event.request);
		}) .catch(err => console.log(err, event.request))
	);
});
