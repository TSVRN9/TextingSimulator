if(!self.define){let e,d={};const i=(i,c)=>(i=new URL(i+".js",c).href,d[i]||new Promise((d=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=d,document.head.appendChild(e)}else e=i,importScripts(i),d()})).then((()=>{let e=d[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,n)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(d[f])return;let r={};const b=e=>i(e,f),s={module:{uri:f},exports:r,require:b};d[f]=Promise.all(c.map((e=>s[e]||b(e)))).then((e=>(n(...e),r)))}}define(["./workbox-460519b3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"128x128.9cd40022.png",revision:"a410b40173b58fc0f0e3fe8c608b9823"},{url:"144x144.69ca2cb4.png",revision:"20a36ec1ba2ed832d00a0dffd36a47c8"},{url:"152x152.50b06c5e.png",revision:"d867b9c4851fbbbd730e462546ae70bf"},{url:"192x192.86a46ba4.png",revision:"196d8bf0bd76987ad93c248c9d0a9f58"},{url:"384x384.0c9aafcd.png",revision:"5bd6784a0aae6ed1c35c83ba934b9155"},{url:"512x512-transparent.df37de2b.png",revision:"887c581c181df8af18a65312ff02124d"},{url:"512x512.055fc8f4.png",revision:"eed2f3dd7d7a802474ece12c4141649b"},{url:"72x72.da46069e.png",revision:"6c4fd41033b072fddff9212a82b9917f"},{url:"96x96.21a07239.png",revision:"7de1309901dcb97e8eaf0004dc8d790f"},{url:"encrypted/1.json",revision:"4cf59f4f4079ec3960d0ac337123f3c6"},{url:"encrypted/data.json",revision:"ad529dce474e999495cdeb89e8df6372"},{url:"favicon.1edc69b0.ico",revision:"35bdc21fdcd65beb53b535bcfb052e78"},{url:"index.7524501b.js",revision:"fea245638789b51381cd01018d12959d"},{url:"index.7524501b.js.map",revision:"65ffb129210b68bc6c921e9cdd9cf1eb"},{url:"index.d96bd217.css",revision:"3ea8cda06682f769b07133f2e5bd2d04"},{url:"index.d96bd217.css.map",revision:"690f7bb149716d82af24b081fcf96acd"},{url:"index.html",revision:"9f3633b7b69fad5b74221a426379593f"},{url:"manifest.webmanifest",revision:"6030c701fd6770c1208be47acdfaa44a"}],{})}));
//# sourceMappingURL=service-worker.js.map
