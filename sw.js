if(!self.define){let e,l={};const i=(i,s)=>(i=new URL(i+".js",s).href,l[i]||new Promise((l=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=l,document.head.appendChild(e)}else e=i,importScripts(i),l()})).then((()=>{let e=l[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,n)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(l[a])return;let r={};const u=e=>i(e,a),o={module:{uri:a},exports:r,require:u};l[a]=Promise.all(s.map((e=>o[e]||u(e)))).then((e=>(n(...e),r)))}}define(["./workbox-4de3aa5f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_app/immutable/assets/0.ab623dc3.css",revision:null},{url:"_app/immutable/assets/2.28f11b95.css",revision:null},{url:"_app/immutable/assets/3.372f9d6e.css",revision:null},{url:"_app/immutable/assets/default-profile-picture.16877475.png",revision:null},{url:"_app/immutable/assets/fira-mono-all-400-normal.1e3b098c.woff",revision:null},{url:"_app/immutable/assets/fira-mono-cyrillic-400-normal.c7d433fd.woff2",revision:null},{url:"_app/immutable/assets/fira-mono-cyrillic-ext-400-normal.3df7909e.woff2",revision:null},{url:"_app/immutable/assets/fira-mono-greek-400-normal.a8be01ce.woff2",revision:null},{url:"_app/immutable/assets/fira-mono-greek-ext-400-normal.9e2fe623.woff2",revision:null},{url:"_app/immutable/assets/fira-mono-latin-400-normal.e43b3538.woff2",revision:null},{url:"_app/immutable/assets/fira-mono-latin-ext-400-normal.6bfabd30.woff2",revision:null},{url:"_app/immutable/assets/usp-bar-code-icon.4d5853b3.svg",revision:null},{url:"_app/immutable/assets/usp-logo.ab67b18e.webp",revision:null},{url:"_app/immutable/assets/usp-logo.e30409a7.png",revision:null},{url:"_app/immutable/assets/usp-qr-code-icon.b6840a05.svg",revision:null},{url:"_app/immutable/chunks/index.1e9d2b13.js",revision:null},{url:"_app/immutable/chunks/index.7002d5a3.js",revision:null},{url:"_app/immutable/chunks/index.7b65cbfa.js",revision:null},{url:"_app/immutable/chunks/scheduler.90c39d80.js",revision:null},{url:"_app/immutable/chunks/singletons.508641e6.js",revision:null},{url:"_app/immutable/chunks/stores.ca6780bc.js",revision:null},{url:"_app/immutable/entry/app.f7c0bb0d.js",revision:null},{url:"_app/immutable/entry/start.66ca48f5.js",revision:null},{url:"_app/immutable/nodes/0.c2939a27.js",revision:null},{url:"_app/immutable/nodes/1.b6c06bdf.js",revision:null},{url:"_app/immutable/nodes/2.f5bac05a.js",revision:null},{url:"_app/immutable/nodes/3.0c279746.js",revision:null},{url:"apple-touch-icon-180x180.png",revision:"f0dcde5950e7eb1e6498b9db62accf3d"},{url:"e-card-icon.png",revision:"f0dcde5950e7eb1e6498b9db62accf3d"},{url:"favicon.ico",revision:"8351622ce0baaebd5605d76b73ce9afc"},{url:"favicon.png",revision:"f0dcde5950e7eb1e6498b9db62accf3d"},{url:"maskable-icon-512x512.png",revision:"f0dcde5950e7eb1e6498b9db62accf3d"},{url:"pwa-192x192.png",revision:"d0bbe54e82fcbb3f9c7b6587ff2452ef"},{url:"pwa-512x512.png",revision:"568b2c0fab07f5f1edae5d389da98876"},{url:"pwa-64x64.png",revision:"241c9f385f50fb06d4b2cda7c07f27fa"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"edit-profile",revision:"dd9c7df76f141a4f54f4b97575e14e93"},{url:"/pages/",revision:"b4aa09d15660dfb8838b6f9c6d0ea40d"},{url:"manifest.webmanifest",revision:"fff9cc1f6141311ff8d8121882f811c2"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/pages/")))}));
