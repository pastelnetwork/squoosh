const ASSETS = [
  "c/logo-with-text-110604e5.svg",
  "c/github-logo-bc05494c.svg",
  "c/rotate-e8fb6784.wasm",
  "c/imagequant-7e6412dc.wasm",
  "c/squoosh_resize_bg-74a0d71f.wasm",
  "c/webp_dec-9c302491.wasm",
  "c/squooshhqx_bg-7aa80edc.wasm",
  "c/logo-bcc20dd5.svg",
  "c/icon-demo-large-photo-18da387a.jpg",
  "c/icon-demo-device-screen-5d52d8b9.jpg",
  "c/icon-demo-logo-326ed9b6.png",
  "c/icon-demo-artwork-9eba1655.jpg",
  "c/webp_enc-b45aec5c.wasm",
  "c/mozjpeg_enc-3a40a5a1.wasm",
  "c/squoosh_oxipng_bg-7f806c61.wasm",
  "c/webp_enc_simd-a1242b68.wasm",
  "c/squoosh_oxipng_bg-eb114f34.wasm",
  "c/wp2_dec-0c0eb80f.wasm",
  "c/jxl_dec-e715bdd5.wasm",
  "c/wp2_enc-9c10ea99.wasm",
  "c/wp2_enc_mt-31dc176a.wasm",
  "c/wp2_enc_mt_simd-99e23443.wasm",
  "c/avif_dec-409810f9.wasm",
  "c/jxl_enc-c938301f.wasm",
  "c/jxl_enc_mt-32ae3b26.wasm",
  "c/jxl_enc_mt_simd-122ea7e2.wasm",
  "c/avif_enc-64e83761.wasm",
  "c/avif_enc_mt-1d298413.wasm",
  "c/initial-app-62a5e176.js",
  "c/logo-with-text.svg-4b41d7bc.js",
  "c/idb-keyval-9d9b390d.js",
  "c/wp2_enc.wasm-b9d61940.js",
  "c/features-worker-597530bb.js",
  "c/util-06ce6ead.js",
  "c/squoosh_oxipng-a7b730d0.js",
  "c/avif_enc_mt.worker-d8cb7c0b.js",
  "c/_commonjsHelpers-66a86692.js",
  "c/sub-worker-4c39a9ba.js",
  "c/jxl_enc_mt.worker-31b5f693.js",
  "c/jxl_enc_mt_simd.worker-6c10ac49.js",
  "c/wp2_enc_mt.worker-8cb09097.js",
  "c/wp2_enc_mt_simd.worker-1ef91905.js",
  "c/Compress-969ad13d.js",
  "c/sw-bridge-e4d1a69c.js",
  "c/blob-anim-5b256a03.js",
  "c/avif_dec-0704b197.js",
  "c/webp_dec-178a19bb.js",
  "c/avif_enc_mt-bd9f80b3.js",
  "c/avif_enc-28380f66.js",
  "c/jxl_enc_mt_simd-dd735cdb.js",
  "c/jxl_enc_mt-e676c763.js",
  "c/jxl_enc-afad221c.js",
  "c/webp_enc_simd-8b07b5a8.js",
  "c/webp_enc-2e1232d2.js",
  "c/wp2_enc_mt_simd-04246b1e.js",
  "c/wp2_enc_mt-691acfdf.js",
  "c/wp2_enc-8907f430.js"
];
const VERSION = "778bca9f458242132f172aaad5103e6323d15af1";
if(!self.define){const A=async A=>{if("require"===A)return e;let a;if(a=A.startsWith(location.origin)?A.slice(location.origin.length):A.slice(1)+".js",a.startsWith("/c/")||(a="/c"+a),t[A="./static"+a])return t[A];if(t[A]||("document"in self?await new Promise(A=>{const e=document.createElement("script");e.src=a,document.head.appendChild(e),e.onload=A}):importScripts(a)),!t[A])throw new Error(`Module ${A} didn’t register its module`);return t[A]},e=(e,t)=>{Promise.all(e.map(A)).then(A=>t(1===A.length?A[0]:A))},t={require:Promise.resolve(e)};self.define=(e,a,s)=>{t[e]||(t[e]=Promise.resolve().then(()=>{let t={};const n={uri:location.origin+e.slice(1)};return Promise.all(a.map(e=>{switch(e){case"exports":return t;case"module":return n;default:return A(e)}})).then(A=>{const e=s(...A);return t.default||(t.default=e),t})}))}}define("./static/serviceworker.js",["require","./c/wp2_enc.wasm-b9d61940","./c/logo-with-text.svg-4b41d7bc","./c/idb-keyval-9d9b390d"],(function(A,e,t,a){var s="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",n="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABUAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgS0AAAAAABNjb2xybmNseAACAAIAAoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB1tZGF0EgAKBDgADskyCx/wAABYAAAAAK+w";const i="c/initial-app-62a5e176.js",_=["c/logo-with-text.svg-4b41d7bc.js"],r="c/Compress-969ad13d.js",c=["c/initial-app-62a5e176.js","c/util-06ce6ead.js","c/logo-with-text.svg-4b41d7bc.js"],N="c/sw-bridge-e4d1a69c.js",o=["c/idb-keyval-9d9b390d.js"],l="c/blob-anim-5b256a03.js",E=["c/initial-app-62a5e176.js","c/logo-with-text.svg-4b41d7bc.js"];const T="c/features-worker-597530bb.js",d=["c/util-06ce6ead.js","c/wp2_enc.wasm-b9d61940.js","c/squoosh_oxipng-a7b730d0.js"],u="c/avif_dec-0704b197.js",h=[],P="c/webp_dec-178a19bb.js",I=[],D="c/avif_enc_mt.worker-d8cb7c0b.js",U=["c/_commonjsHelpers-66a86692.js"],m="c/avif_enc_mt-bd9f80b3.js",w=[],p="c/avif_enc-28380f66.js",f=[],M="c/jxl_enc_mt_simd.worker-6c10ac49.js",G=["c/_commonjsHelpers-66a86692.js"],R="c/jxl_enc_mt_simd-dd735cdb.js",L=[],Y="c/jxl_enc_mt.worker-31b5f693.js",g=["c/_commonjsHelpers-66a86692.js"],S="c/jxl_enc_mt-e676c763.js",B=[],W="c/jxl_enc-afad221c.js",b=[],v="c/sub-worker-4c39a9ba.js",y=["c/squoosh_oxipng-a7b730d0.js"],x="c/webp_enc_simd-8b07b5a8.js",$=[],k="c/webp_enc-2e1232d2.js",q=[],j="c/wp2_enc_mt_simd.worker-1ef91905.js",Q=["c/_commonjsHelpers-66a86692.js"],Z="c/wp2_enc_mt_simd-04246b1e.js",C=[],X="c/wp2_enc_mt.worker-8cb09097.js",F=["c/_commonjsHelpers-66a86692.js"],K="c/wp2_enc_mt-691acfdf.js",O=[],V="c/wp2_enc-8907f430.js",z=[];let H=new Set([r,...c,N,...o,l,...E]);H=function(A,e){const t=new Set(A);for(const A of e)t.delete(A);return t}(H,new Set([i,..._]));const J=["/",...H,"/c/logo-bcc20dd5.svg",t.githubLogo,"/c/icon-demo-large-photo-18da387a.jpg","/c/icon-demo-artwork-9eba1655.jpg","/c/icon-demo-device-screen-5d52d8b9.jpg","/c/icon-demo-logo-326ed9b6.png",t.logoWithText],AA=(async()=>{const[A,t,a,i]=await Promise.all([e.threads(),e.simd(),...[s,n].map(async A=>{if(!self.createImageBitmap)return!1;const e=await fetch(A),t=await e.blob();return createImageBitmap(t).then(()=>!0,()=>!1)})]),_=[T,...d,e.wasmUrl,e.wasmUrl$1,e.resizeWasmUrl,e.hqxWasmUrl,e.wasmUrl$2,e.wasmUrl$3,e.wasmUrl$4];return i||_.push(u,...h,e.wasmUrl$5),a||_.push(P,...I,e.wasmUrl$6),A?_.push(D,...U,m,...w,e.wasmUrlWithMT):_.push(p,...f,e.wasmUrlWithoutMT),A&&t?_.push(M,...G,R,...L,e.wasmUrlWithMTAndSIMD):A?_.push(Y,...g,S,...B,e.wasmUrlWithMT$1):_.push(W,...b,e.wasmUrl$7),A?_.push(v,...y,e.oxiWasmUrlMT):_.push(e.oxiWasmUrlST),t?_.push(x,...$,e.wasmUrlWithSIMD):_.push(k,...q,e.wasmUrl$8),A&&t?_.push(j,...Q,Z,...C,e.wasmUrlWithMTAndSIMD$1):A?_.push(X,...F,K,...O,e.wasmUrlWithMT$2):_.push(V,...z,e.wasmUrl$9),[...new Set(_)]})();function eA(A){const e=A.request.formData();A.respondWith(Response.redirect("/?share-target")),A.waitUntil(async function(){var t;await(t="share-ready",new Promise(A=>{sA.has(t)||sA.set(t,[]),sA.get(t).push(A)}));const a=await self.clients.get(A.resultingClientId),s=(await e).get("file");a.postMessage({file:s,action:"load-image"})}())}function tA(A){return A.map(A=>new Request(A,{cache:"no-cache"}))}async function aA(A){return(await caches.open(A)).addAll(tA(await AA))}const sA=new Map;self.addEventListener("message",A=>{const e=sA.get(A.data);if(e){sA.delete(A.data);for(const A of e)A()}});const nA="static-"+VERSION,iA="dynamic",_A=[nA,iA];self.addEventListener("install",A=>{A.waitUntil(async function(){const A=[];A.push(async function(A){return(await caches.open(A)).addAll(tA(J))}(nA)),await a.get("user-interacted")&&A.push(aA(nA)),await Promise.all(A)}())}),self.addEventListener("activate",A=>{self.clients.claim(),A.waitUntil(async function(){const A=(await caches.keys()).map(A=>{if(!_A.includes(A))return caches.delete(A)});await Promise.all(A)}())}),self.addEventListener("fetch",A=>{const e=new URL(A.request.url);if(e.origin===location.origin)if("/editor"!==e.pathname){if("/"===e.pathname&&e.searchParams.has("share-target")&&"POST"===A.request.method)eA(A);else if("GET"===A.request.method)return e.pathname.startsWith("/c/demo-")?(function(A,e){A.respondWith(async function(){const{request:t}=A,a=await caches.match(t);if(a)return a;const s=await fetch(t),n=s.clone();return A.waitUntil(async function(){const A=await caches.open(e);await A.put(t,n)}()),s}())}(A,iA),void function(A,e,t){A.waitUntil(async function(){const A=await caches.open(e),a=(await A.keys()).map(e=>{const a=new URL(e.url).pathname.slice(1);if(!t.includes(a))return A.delete(e)});await Promise.all(a)}())}(A,iA,ASSETS)):void function(A){A.respondWith(async function(){return await caches.match(A.request,{ignoreSearch:!0})||fetch(A.request)}())}(A)}else A.respondWith(Response.redirect("/"))}),self.addEventListener("message",A=>{switch(A.data){case"cache-all":A.waitUntil(aA(nA));break;case"skip-waiting":self.skipWaiting()}})}));
