'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b0a52ce88b5f28c4c4e29b2cd7d18d81",
".git/config": "56ed83fa8e65ee8545876828ddef3abe",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "6c86e8d8c61b7e422eb063617a4ed910",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "88b98c91d78dbbb8abf74a076b6adc0d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2d3ed675cc5442eca73adcc792cfa1f7",
".git/logs/refs/heads/master": "2d3ed675cc5442eca73adcc792cfa1f7",
".git/logs/refs/remotes/origin/master": "03cd016aeacf8e1e611cdd1fd96b4933",
".git/objects/01/8a4166290f8a4dd0e214cf4c25f3631ebe5174": "eb730b6989802d426e069d3c59fab4de",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/e02fefe3491f74cc493fc54a4730187e417a9f": "4c68d9e2f954d4774456c5b5bf0710d8",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1a/f3cf41757b89ac0625774b62def66a913a2d24": "22d5c01500d7c4f0d834cf3fcb1f7287",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/2e/c0d19a9bb55c37ab1304ea2ef49ff92d9d36d0": "75ba8758a5fa14011527f195c7de7e60",
".git/objects/49/cf667db7f58e9a82ca4f2e630e7871ee0dea94": "23c5ea52c29852d039487ed786e667cb",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/ca671c59ae68ce0fd65225c355a10b90191e91": "65142cfb85be5cd3912bf470efdc9fef",
".git/objects/91/e6a127a04c442e5e14538c702e25c52d200852": "4d328aedca97f7f2a7a6bf8eb01dfa06",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/a0/340d5dfedad502bf96eb5fefccbecad7a8ed20": "46ab09cd8bfd18c67837421150edbd03",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/d0/ee6d682fa66acd159666e53ad6d89c28449830": "e85342cf6e6008a2b0de07767fe45404",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/f2/9cc897b6fdfc7388e4f8660e8d751922914dbe": "0f0e261838384283c6972fa4dc875815",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/refs/heads/master": "6e4963c967c11932c2852915a1819ece",
".git/refs/remotes/origin/master": "6e4963c967c11932c2852915a1819ece",
"assets/AssetManifest.json": "44cd7973f2293c3f7fd7044833f2cf51",
"assets/assets/assets/me.jpg": "49ed3aa08548f3b098e4b44cfe264696",
"assets/assets/me.jpg": "49ed3aa08548f3b098e4b44cfe264696",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "7f1df1ee47854388e684afc0845ea820",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "3e7e202eb7c836470bfb8ae6ba10d076",
"/": "3e7e202eb7c836470bfb8ae6ba10d076",
"main.dart.js": "a8ff8d017cc7a323807bdd21ad135d3c",
"manifest.json": "0141d12830c8b3198598be94bae52abc"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
