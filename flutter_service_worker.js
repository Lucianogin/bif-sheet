'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "8e6a01526a69d96b7e13e5f8936b38a2",
".git/config": "d60773f820e7f968df4c0c75dd7a9994",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8165b7e943d884afe2bd967c2cf0c022",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "91a2c742d1b21cb039a0f9086474099a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "66a6873c42333509c0e6e9b4fb78f215",
".git/logs/refs/heads/master": "66a6873c42333509c0e6e9b4fb78f215",
".git/logs/refs/remotes/origin/master": "b73507841770d4f8cf3b8d9641afde70",
".git/objects/0f/6b162d39b4b62b54f27ab26b5765ab86c7d21f": "aef645255372dfd340fcbe9a2748f7da",
".git/objects/16/b8920ae71f8f8ddad61f6c5b36316cf8d5ecde": "ac05f8dd64c38fb9e0d4256862736dad",
".git/objects/1f/a68493f71be182b68a03f0ff911eef12beb961": "50a329327a3890310d820ae409e3843b",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/7786b49c1f05a82d49eb26c5f52809afa8de6c": "72d132aa7c4e3c4a58c2034acb5fda4e",
".git/objects/3f/35b13b2dc10ef0f4ccf5e6c8b8279e1b0973a3": "11b25b271aa8bf3b60d7f690f5599557",
".git/objects/43/d733c94c53d63eba578ba7e10b8965aa28a696": "f0accb0fb379c8eb65bde1b2751d51af",
".git/objects/4a/a7fbae4a8139c673a93899840a1ba1f03b3f52": "09e90292b318128a27b179eb2c3c7ccd",
".git/objects/5c/94adce9410bdadc008a5dddf824d9c71d4f1c6": "05a71d3023e9d759ac91a41fcebb29b3",
".git/objects/5d/5884294c38874a41f5c88d910fe9d33d4befca": "3d583c81ebb692c9448089c98cc49a88",
".git/objects/5e/b7026e79f98122c71f9ca99b894f44ae422f3d": "55f7ebc3728735f603531df1174eb318",
".git/objects/6d/8895d92d04d6dad013da9fbae0b6ffd52731cc": "c818b83f6870f41a89265f3067b4aac4",
".git/objects/6f/ca034b4340339f9dca518776cbecb8d26c1eee": "6b5e33fdaf3ef18f02fe716d9a07efc8",
".git/objects/77/d8ddf73c8fc33c27673844b85e0aa87f6b0d73": "e26ab78765c6607923d5e619cebbc1f8",
".git/objects/78/97b7cf5c6957b6518c4523fb004963cd48033e": "ca4ddbf7b0607bbdf46c2bf484ce41d2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/5338dc9cc3f8d3664cd1441c2eb4add4e3e4dd": "cdb173fd096d73785a2491087b671a5a",
".git/objects/7b/9cf31b9222694f1ab2865ea660afc808efd510": "5561aa0bb45a1e35555b4b28aac38f3e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/bf0403a993408f062bf4f06ada34f1532635e1": "8d6dfe5d10eb5d0bf458db6cbc9103ca",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/dcdb024ce97d0acad9ede5a1cdc4cbbdf5bb19": "04be232c32edf940bf1dd5cf3bcb5ab5",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/4029ecf728a391db7a63be5bd23621d50f8b06": "5e7a8dcdc0ef99117cf7685839d62cd0",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/048cb70dedc4ccfd829556cd4837034073d26e": "bac34a0d9d5757c60481cc60834c5278",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b2/5ba98f702483f88e14f45042e9d534dbb7ac84": "1bc7fd7beeecd0d8f1684252b346e2ba",
".git/objects/b3/b9e0ce551437349a3c39279a83da700583595c": "3881075079a85bffbd67eb95b243c3a4",
".git/objects/b4/6fbbb3418c575748fe0b1a7742415c7be32f32": "405e87e38a65d8c05bd9b8d717af541f",
".git/objects/b6/119e09bf1f710685dee24c0b507e6572845c3a": "77f91264ec5d267cd872c88af1e63006",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bf/0708db8bf24e06df60044da6dfa35022a9df10": "5f37f655373f4a00c252537619c9be71",
".git/objects/bf/c7be8457bbeadf91c23899853726fddd89f8d5": "e5127cd4ee92a33af2dea62d4d0ab35e",
".git/objects/c1/de6e881be522fafea2236fb02f7988ee00459b": "08919b70e393e5b98abcc4973c1601b4",
".git/objects/c7/8eca39ed93544bfb848eba8bf8c6f74da82f9d": "ca74e864e2481ad90f4a2b3d591fc986",
".git/objects/ce/6f1eb933afc42bc276103420bfe16b2ee4f073": "3d0ef523553736ce02d6e003cbcfdc7a",
".git/objects/d5/c43e979875cbfcb2059481f088d4f8eaf9c51f": "b04446d16e42cfe2e616781c0fcfb6ea",
".git/objects/d5/de092d489573500000717751d1f3532355a6b8": "09b18125f0de00eae369b6d453161f2f",
".git/objects/d6/dacf816008272030ec2579f742ab206aac018f": "47abb6f657473624bf1084d6e0ead14d",
".git/objects/dc/11c024b82883bdc084804ffe68a0ecfd8bdc9f": "82d158287809a313c6ad439171f769c6",
".git/objects/dd/b724d21bcb701237ed7e51bbd2fa1b7df69907": "a6301cb999465c55e76c9605863c7b58",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ec/a34e7922dee034a553d320cefd01633136310c": "8fcbeaa1c798ac74ca3d9ad5f2597724",
".git/objects/ef/b8db7267e4fba5df962aee99c3d39d66ddd568": "ba2f3957570749a94ea9efd9fd6fca13",
".git/objects/f4/69d3ba8f774dd1da6fe92932332db98e9fc979": "17c91062d4a84c3620cb6294a5164c06",
".git/ORIG_HEAD": "940d72c645e810b39e7427753492bafa",
".git/refs/heads/master": "7795a8ab40de9ba798a84106d02e1daf",
".git/refs/remotes/origin/master": "7795a8ab40de9ba798a84106d02e1daf",
"assets/AssetManifest.json": "bfd11e7e3672ac2206368074db27cb2a",
"assets/FontManifest.json": "7eaad54a5f91eb19d6e7b6997a7233bc",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/lib/assets/images/Alexander.png": "23b7ca45473ef82fe468b2641740931e",
"assets/lib/assets/images/Noah%2520Lasley.png": "0a5f654d1095bf05fcc492592a95ba04",
"assets/lib/assets/OldNewspaperTypes.ttf": "c25c5a0382ad95548bcfc2a8f29d0aa5",
"assets/NOTICES": "35175308687763f50e44dfa1a9dcb456",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "de32a55a9cdbf4079a3576d573db0158",
"/": "de32a55a9cdbf4079a3576d573db0158",
"main.dart.js": "92c113fc830988346b313ebd3d5be12d",
"manifest.json": "e35ccb9235249a550e6617e44bc22e8a",
"version.json": "38f3127cc0615207488186ffa8d832d5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
