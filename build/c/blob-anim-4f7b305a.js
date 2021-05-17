define("./static/c/blob-anim-4f7b305a.js",["exports","./initial-app-8c7fa1b2","./logo-with-text.svg-4b41d7bc"],(function(t,e,a){const o=.25;function i(t){const e=Math.random()*o,a=Math.random()*Math.PI*2,i=Math.sin(a)*e,n=Math.cos(a)*e;return[t[0]+i,t[1]+n,t[2]+i,t[3]+n,t[4]+i,t[5]+n]}function n(t){return t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2}const s=(t,e)=>Math.random()*(e-t)+t,r=[[-.304,-1,0,-1,.304,-1],[.592,-.861,.782,-.623,.972,-.386],[1.043,-.074,.975,.223,.907,.519],[.708,.769,.434,.901,.16,1.033],[-.16,1.033,-.434,.901,-.708,.769],[-.907,.519,-.975,.223,-1.043,-.074],[-.972,-.386,-.782,-.623,-.592,-.861]];class h{constructor(t,{startPoints:e=t.map(t=>i(t)),minDuration:a=4e3,maxDuration:o=11e3}={}){this.points=e,this.minDuration=a,this.maxDuration=o,this.animStates=t.map((t,n)=>({basePoint:t,pos:0,duration:s(a,o),startPoint:e[n],endPoint:i(t)}))}advance(t){this.points=this.animStates.map(e=>{e.pos+=t/e.duration,e.pos>=1&&(e.startPoint=e.endPoint,e.pos=0,e.duration=s(this.minDuration,this.maxDuration),e.endPoint=i(e.basePoint));const a=n(e.pos);return e.startPoint.map((t,o)=>(e.endPoint[o]-t)*a+t)})}draw(t){const e=this.points;t.beginPath(),t.moveTo(e[0][2],e[0][3]);for(let a=0;a<e.length;a++){const o=a===e.length-1?0:a+1;t.bezierCurveTo(e[a][4],e[a][5],e[o][0],e[o][1],e[o][2],e[o][3])}t.closePath(),t.fill()}}class l{constructor(){this.rotatePos=0,this.blobs=Array.from({length:4},(t,a)=>new h(r,{startPoints:e.startBlobs[a]}))}advance(t){this.rotatePos=(this.rotatePos+t/12e4)%1;for(const e of this.blobs)e.advance(t)}draw(t,e,a,o){t.save(),t.translate(e,a),t.scale(o,o),t.rotate(2*Math.PI*this.rotatePos);for(const e of this.blobs)e.draw(t);t.restore()}}const c=.0015;class d{constructor(t){this.bgBlobs=[],this.overallAlphaPos=0;const e=Math.round(t.width*t.height*25e-6);this.bgBlobs=Array.from({length:e},()=>{const e=0===(a=Math.random())?0:Math.pow(2,10*a-10);var a;return{blob:new h(r,{minDuration:2e3,maxDuration:5e3}),velocity:.0055*(1-e)+c,alpha:Math.random()**3*(.8-.2)+.2,alphaMultiplier:1,spinTime:s(2e4,6e4),rotatePos:0,radius:53*e+7,x:Math.random()*t.width,y:Math.random()*t.height}})}advance(t,e,a,o,i){1!==this.overallAlphaPos&&(this.overallAlphaPos=Math.min(1,this.overallAlphaPos+t/2e3));for(const n of this.bgBlobs){n.blob.advance(t);let s=Math.hypot(n.x-a,n.y-o);if(n.rotatePos=(n.rotatePos+t/n.spinTime)%1,s<10)switch(Math.floor(4*Math.random())){case 0:n.x=Math.random()*e.width,n.y=-1.25*n.radius;break;case 1:n.x=-1.25*n.radius,n.y=Math.random()*e.height;break;case 2:n.x=Math.random()*e.width,n.y=e.height+1.25*n.radius;break;case 3:n.x=e.width+1.25*n.radius,n.y=Math.random()*e.height}s=Math.hypot(n.x-a,n.y-o);const r=(s>300?n.velocity:(14*(1-s/300)+1)*n.velocity)*t,h=Math.atan2(a-n.x,o-n.y),l=Math.sin(h)*r,c=Math.cos(h)*r;n.x+=l,n.y+=c,n.alphaMultiplier=Math.min(s/i,1)}}draw(t){const e=n(this.overallAlphaPos);for(const a of this.bgBlobs)t.save(),t.globalAlpha=a.alpha*a.alphaMultiplier*e,t.translate(a.x,a.y),t.scale(a.radius,a.radius),t.rotate(2*Math.PI*a.rotatePos),a.blob.draw(t),t.restore()}}t.startBlobAnim=function(t){let a;const o=t.getContext("2d"),i=new l;let n;const s=document.querySelector("."+e.loadImg);let r=document.hasFocus(),h=r?1:0,c=!0;const u=()=>{"visible"===document.visibilityState&&(a=performance.now())},m=()=>{r=!0,c||P()},b=()=>{r=!1};function p(e){const a=t.getBoundingClientRect();t.width=a.width*devicePixelRatio,t.height=a.height*devicePixelRatio;const r=s.getBoundingClientRect(),h=getComputedStyle(t),l=h.getPropertyValue("--blob-pink"),c=r.left-a.left+r.width/2,u=r.top-a.top+r.height/2,m=r.height/2/1.25;o.scale(devicePixelRatio,devicePixelRatio),n||(n=new d(a)),n.advance(e,a,c,u,m),i.advance(e),o.globalAlpha=Number(h.getPropertyValue("--center-blob-opacity")),o.fillStyle=l,n.draw(o),i.draw(o,c,u,m)}function v(e){if(!t.isConnected)return removeEventListener("focus",m),removeEventListener("blur",b),void document.removeEventListener("visibilitychange",u);if(r)1!==h&&(h=Math.min(1,h+.01));else if(h=Math.max(0,h-.01),0===h)return void(c=!1);const o=(e-a)*h;a=e,p(o),requestAnimationFrame(v)}function P(){c=!0,requestAnimationFrame(t=>{a=t,v(t)})}new ResizeObserver(()=>{c||p(0)}).observe(t),addEventListener("focus",m),addEventListener("blur",b),document.addEventListener("visibilitychange",u),P()}}));