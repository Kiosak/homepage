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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/main.css",
    "revision": "cb8fa1dd1fb701078445cef95b260d24"
  },
  {
    "url": "favicon.ico",
    "revision": "4838b92ea45f6e62b5e6405de35c8628"
  },
  {
    "url": "img/facebook-icon.svg",
    "revision": "268767188d7884813bc0258e8a86d2f9"
  },
  {
    "url": "img/gmail-icon.svg",
    "revision": "fa2957513503ee1c4853dff8437add6f"
  },
  {
    "url": "img/instagram-icon.svg",
    "revision": "afd54a2bd715ccc0e72ee96251aa17f1"
  },
  {
    "url": "img/street-fighter.png",
    "revision": "91f442bb9345e6ef0106d6f32425cb0f"
  },
  {
    "url": "img/twitter-icon.svg",
    "revision": "30e4545deadc1edd396caf77d916ec29"
  },
  {
    "url": "index.html",
    "revision": "c5cfb84197362f67921e6fd70399d58c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
