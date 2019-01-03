/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d27273a082fa6e38b7d1dcf1b9db408d"
  },
  {
    "url": "accumulate/index.html",
    "revision": "4b37ad97344c38593cddbe95ed38b76e"
  },
  {
    "url": "algorithm/index.html",
    "revision": "1b6ed666e29d6abbc3573fa5e78d9b09"
  },
  {
    "url": "assets/css/0.styles.45a867fc.css",
    "revision": "bb5954ddf80f10f50f428cae2b350b5f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.cf749f8b.js",
    "revision": "33b9b3a2f6bea9df5defe822eeef12c4"
  },
  {
    "url": "assets/js/3.3a501344.js",
    "revision": "85212ddcc5b2874bdf60d316a56eec72"
  },
  {
    "url": "assets/js/4.a6d8eec8.js",
    "revision": "7d0e7480b1e7ae957f5638d4f3b98387"
  },
  {
    "url": "assets/js/5.19ac6337.js",
    "revision": "b57887c077b395deb71fbc38f39686c5"
  },
  {
    "url": "assets/js/6.aeaa3ef8.js",
    "revision": "d2c7b91225068840aa7b33e68d14b4d1"
  },
  {
    "url": "assets/js/7.f373b5d4.js",
    "revision": "a24bf1cc7da5744281675d9d507b6549"
  },
  {
    "url": "assets/js/8.fc41ee9d.js",
    "revision": "55d7d2e82a5f9dca8ebfced5317bae02"
  },
  {
    "url": "assets/js/app.c264fcb9.js",
    "revision": "5ad408d6312d9b849fa5cb22ffddcc13"
  },
  {
    "url": "guide.html",
    "revision": "6d1e6259286991dc13e8b62bcdf31767"
  },
  {
    "url": "images/eg1.png",
    "revision": "b6e00451aa6e2fb07803babc3be44fe3"
  },
  {
    "url": "images/eg12.png",
    "revision": "716c3bede731ed6eecb026377f31aac1"
  },
  {
    "url": "images/eg13.png",
    "revision": "022c1e3380b12aa21dd816cd4f1aeaae"
  },
  {
    "url": "images/eg14.png",
    "revision": "c0b03bb9c818398235ae5ac24fe91204"
  },
  {
    "url": "images/eg2.png",
    "revision": "1c31890ab04672b5b9daad1f8216a89b"
  },
  {
    "url": "images/eg3.png",
    "revision": "c3145209954ef832a2c62740a2133a8b"
  },
  {
    "url": "images/eg4.png",
    "revision": "7b4a9dd311c20e60f1f67205845deca1"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
  },
  {
    "url": "images/photo.jpg",
    "revision": "d4d77052d44bea42bbfc4dba196bde93"
  },
  {
    "url": "index.html",
    "revision": "233118d2ef67321dec43fcc9e141c7e7"
  },
  {
    "url": "others/index.html",
    "revision": "004550d2062051bd348a7fe5c01accbb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
