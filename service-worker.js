if(!self.define){let e,d={};const i=(i,n)=>(i=new URL(i+".js",n).href,d[i]||new Promise((d=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=d,document.head.appendChild(e)}else e=i,importScripts(i),d()})).then((()=>{let e=d[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,f)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(d[r])return;let c={};const a=e=>i(e,r),s={module:{uri:r},exports:c,require:a};d[r]=Promise.all(n.map((e=>s[e]||a(e)))).then((e=>(f(...e),c)))}}define(["./workbox-460519b3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"128x128.9cd40022.png",revision:"a410b40173b58fc0f0e3fe8c608b9823"},{url:"144x144.69ca2cb4.png",revision:"20a36ec1ba2ed832d00a0dffd36a47c8"},{url:"152x152.50b06c5e.png",revision:"d867b9c4851fbbbd730e462546ae70bf"},{url:"192x192.86a46ba4.png",revision:"196d8bf0bd76987ad93c248c9d0a9f58"},{url:"384x384.0c9aafcd.png",revision:"5bd6784a0aae6ed1c35c83ba934b9155"},{url:"512x512-transparent.df37de2b.png",revision:"887c581c181df8af18a65312ff02124d"},{url:"512x512.055fc8f4.png",revision:"eed2f3dd7d7a802474ece12c4141649b"},{url:"72x72.da46069e.png",revision:"6c4fd41033b072fddff9212a82b9917f"},{url:"96x96.21a07239.png",revision:"7de1309901dcb97e8eaf0004dc8d790f"},{url:"encrypted/1.json",revision:"1d776ea4c5d27db2eb370a53d1bd8de1"},{url:"encrypted/data.json",revision:"84213312b11f96bb717bf8af2bf11524"},{url:"encrypted/example.json",revision:"269f859ef2a612f66116e0a44b3e2b9a"},{url:"favicon.1edc69b0.ico",revision:"35bdc21fdcd65beb53b535bcfb052e78"},{url:"index.eb260f90.css",revision:"438cf9254d845213306995dfc38ad684"},{url:"index.eb260f90.css.map",revision:"2ddcea2e153e9b6cdd0269d9946e3790"},{url:"index.ff90733c.js",revision:"453384ed4f3da20abd4a2c581d1e3e1d"},{url:"index.ff90733c.js.map",revision:"244b4e99f08328c4956fc47d2b067572"},{url:"index.html",revision:"363ef6198f57b24f158e43d58d350ad1"},{url:"manifest.webmanifest",revision:"6030c701fd6770c1208be47acdfaa44a"}],{})}));
//# sourceMappingURL=service-worker.js.map
