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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1.html",
    "revision": "3259d45485ae99d28eb320ca8fdd7e26"
  },
  {
    "url": "404.html",
    "revision": "4a239e98c76a3305f83026bb7161711a"
  },
  {
    "url": "assets/css/0.styles.b9c82db0.css",
    "revision": "15def78c68d9b56ea937001a179dd9d1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/3.2470bc54.js",
    "revision": "d5e79e35f1cf90d2f9c04332043b2630"
  },
  {
    "url": "assets/js/4.6b1c5665.js",
    "revision": "078b724e4edce717409d1d072ae9c543"
  },
  {
    "url": "assets/js/5.a508fe32.js",
    "revision": "723b60465f33efacbbb0099ce171c417"
  },
  {
    "url": "assets/js/6.928288ea.js",
    "revision": "2fbc212286539cbb55bb810092448e2b"
  },
  {
    "url": "assets/js/app.58b44f3a.js",
    "revision": "957e9832e92c6775db5ff8d344b718a0"
  },
  {
    "url": "favicon.png",
    "revision": "07285942144e4ef8ff874dff77878546"
  },
  {
    "url": "img/blog/001/00_eyecatch.png",
    "revision": "fc28b954de4cc76e788ca3365601b6ef"
  },
  {
    "url": "img/blog/001/00_sp-eyecatch.png",
    "revision": "fc28b954de4cc76e788ca3365601b6ef"
  },
  {
    "url": "img/blog/001/00_thumbnail.png",
    "revision": "0705d537dc5113277c63aca641ae0e12"
  },
  {
    "url": "img/blog/001/01_top.png",
    "revision": "7624841335024346e9dcc8d7d27b1d86"
  },
  {
    "url": "img/blog/001/02_n0bisuke.png",
    "revision": "96065499ea12bcb7b94b17fd64495c42"
  },
  {
    "url": "img/blog/001/03_taka.png",
    "revision": "c40090b9a75d5b30f8bd0a0bb6adf588"
  },
  {
    "url": "img/blog/001/04_urara.png",
    "revision": "4f56029308aeeb0ca660470a658fdcaa"
  },
  {
    "url": "img/blog/001/05_chachmaru.png",
    "revision": "07efb79682fa64b6fca7c27987d59cd1"
  },
  {
    "url": "img/blog/001/06_uko.png",
    "revision": "f3d2a2cc1369e338483f35e0517993ff"
  },
  {
    "url": "img/blog/001/07_ocome.png",
    "revision": "e7d07f7908ed6b4d3a5ecbd3d20ee9b1"
  },
  {
    "url": "index.html",
    "revision": "c6cdbfca2572e1c0baab4729762b8cdc"
  },
  {
    "url": "README2.html",
    "revision": "0a1d62334ab01eaf722d90db7e36f653"
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
