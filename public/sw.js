if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,n)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const t={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return t;default:return e(s)}}))).then((e=>{const s=n(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-019999f6"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_error",revision:"1M7McOF_OBJi1xNbHK9TP"},{url:"/_next/static/1M7McOF_OBJi1xNbHK9TP/_buildManifest.js",revision:"1M7McOF_OBJi1xNbHK9TP"},{url:"/_next/static/1M7McOF_OBJi1xNbHK9TP/_ssgManifest.js",revision:"1M7McOF_OBJi1xNbHK9TP"},{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.3b82d01541e47bb96f64.js",revision:"1M7McOF_OBJi1xNbHK9TP"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.e5f6a5b1341d048cc7c3.js",revision:"1M7McOF_OBJi1xNbHK9TP"},{url:"/_next/static/chunks/framework.0c239260661ae1d12aa2.js",revision:"1M7McOF_OBJi1xNbHK9TP"},{url:"/_next/static/chunks/main-b3e89d2d2fba3bc6455a.js",revision:"1M7McOF_OBJi1xNbHK9TP"},{url:"/_next/static/chunks/pages/_app-37469ab97bef354f85d1.js",revision:"1M7McOF_OBJi1xNbHK9TP"},{url:"/_next/static/chunks/pages/_error-037243d6d9906ec9643f.js",revision:"1M7McOF_OBJi1xNbHK9TP"},{url:"/_next/static/chunks/pages/index-8334292e235355bac86e.js",revision:"1M7McOF_OBJi1xNbHK9TP"},{url:"/_next/static/chunks/polyfills-4f14e8c8ea1352d3ef0d.js",revision:"1M7McOF_OBJi1xNbHK9TP"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"1M7McOF_OBJi1xNbHK9TP"},{url:"/img/back_top.svg",revision:"140baafb2713cedb3356194ba87fade3"},{url:"/img/favicon.ico",revision:"c657fffd221375f2620a6b99a8e405d7"},{url:"/img/hands.svg",revision:"4499ac952c0dfb2bd4167927326bbdad"},{url:"/img/logo.svg",revision:"494d466d40841b480438c8fbac3a5486"},{url:"/img/logo192.png",revision:"289838f4a4a1687a8a293b7c37ee5b03"},{url:"/img/logo512.png",revision:"1e7b4f81307f53014cbed9b0cec9c39e"},{url:"/manifest.json",revision:"093a1dcb24329e3001e319bdc61f70fa"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",networkTimeoutSeconds:10,plugins:[{requestWillFetch:async({request:e})=>(Request(),e)},new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[{handlerDidError:async({request:e,event:s,error:r,state:i})=>caches.match("/offline.jpg",{ignoreSearch:!0})},new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[{handlerDidError:async({request:e,event:s,error:r,state:i})=>caches.match("/_error",{ignoreSearch:!0})},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));