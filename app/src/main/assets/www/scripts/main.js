"use strict";window.g_aEg=class{constructor(c,a){this.g_aov=c,this.g_aEh=a,this.g_aEi=!1,this.g_anA=()=>this.g_Jj()}g_aEj(){}g_aEk(e,a,b,c){this.g_aov.g_aEl(this.g_aEh,e,a,b,c)}g_aEm(e,a,b,c){return this.g_aov.g_aEn(this.g_aEh,e,a,b,c)}g_aEo(d,a,b){this.g_aov.g_aEp()?this.g_aEk(d,a,b):this.g_aov.g_aEq()._OnMessageFromDOM({type:"event",component:this.g_aEh,handler:d,dispatchOpts:b||null,data:a,responseId:null})}g_aEr(c,a){this.g_aov.g_aEs(this.g_aEh,c,a)}g_aEt(d){for(const[a,b]of d)this.g_aEr(a,b)}g_aEu(){return this.g_aov}g_aEv(){return this.g_aEh}g_abK(){this.g_aEi||(this.g_aov.g_aEw(this.g_anA),this.g_aEi=!0)}g_abv(){this.g_aEi&&(this.g_aov.g_aEx(this.g_anA),this.g_aEi=!1)}g_Jj(){}},"use strict",window.g_aEy=class extends g_aEg{constructor(c,a){super(c,a),this.g_aEz=new Map,this.g_aEA=!0,this.g_aEr("create",b=>this.g_aEB(b)),this.g_aEr("destroy",b=>this.g_aEC(b)),this.g_aEr("set-visible",b=>this.g_aED(b)),this.g_aEr("update-position",b=>this.g_aEE(b)),this.g_aEr("update-state",b=>this.g_aEF(b)),this.g_aEr("focus",b=>this.g_aEG(b)),this.g_aEr("set-css-style",b=>this.g_aEH(b))}g_aEI(b){this.g_aEA=!!b}g_aEJ(c,e){this.g_aEr(c,b=>{const a=b.elementId,c=this.g_aEz.get(a);return e(c,b)})}g_aEB(d){const a=d.elementId,b=this.g_aci(a,d);this.g_aEz.set(a,b),d.isVisible||(b.style.display="none"),this.g_aEA&&document.body.appendChild(b)}g_aci(){throw new Error("required override")}g_aEK(){}g_aEC(d){const a=d.elementId,b=this.g_aEz.get(a);this.g_aEK(b),this.g_aEA&&b.parentElement.removeChild(b),this.g_aEz.delete(a)}g_aEL(d,a,b){b||(b={}),b.elementId=a,this.g_aEk(d,b)}g_aEM(d,a,b){b||(b={}),b.elementId=a,this.g_aEo(d,b)}g_aED(c){if(this.g_aEA){const a=this.g_aEz.get(c.elementId);a.style.display=c.isVisible?"":"none"}}g_aEE(d){if(this.g_aEA){const a=this.g_aEz.get(d.elementId);a.style.left=d.left+"px",a.style.top=d.top+"px",a.style.width=d.width+"px",a.style.height=d.height+"px";const b=d.fontSize;null!==b&&(a.style.fontSize=b+"em")}}g_aEF(c){const a=this.g_aEz.get(c.elementId);this.g_aEN(a,c)}g_aEN(){throw new Error("required override")}g_aEG(c){const a=this.g_aEz.get(c.elementId);c.focus?a.focus():a.blur()}g_aEH(c){const a=this.g_aEz.get(c.elementId);a.style[c.prop]=c.val}g_aEO(b){return this.g_aEz.get(b)}},"use strict";{function n(e){return new Promise((a,b)=>{const c=document.createElement("script");c.onload=a,c.onerror=b,c.async=!1,c.src=e,document.head.appendChild(c)})}async function o(c){const a=await p(c),b=new TextDecoder("utf-8");return b.decode(a)}function p(e){return new Promise((f,b)=>{const a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsArrayBuffer(e)})}const a=/(iphone|ipod|ipad)/i.test(navigator.userAgent);let b=new Audio;const c={"audio/webm; codecs=opus":!!b.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!b.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!b.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!b.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!b.canPlayType("audio/mp4"),"audio/mpeg":!!b.canPlayType("audio/mpeg")};b=null;const d=[];let e=0;window.RealFile=window.File;const f=[],i=new Map,g=new Map;let h=0;const j=[];self.g_aEP=function(b){if("function"!=typeof b)throw new Error("runOnStartup called without a function");j.push(b)},window.g_aEQ=class b{constructor(b){this.g_aER=b.g_aES,this.g_aET=null,this.g_amz="",this.g_aEU=b.g_aEV,this.g_aEW={},this.g_aEX=null,this.g_aEY=null,this.g_aEZ=[],this.g_aE_=null,this.g_akA=null,this.g_aop=null,this.g_alh=-1,this.g_aE$=()=>this.g_aFa(),this.g_aFb=[],this.g_amE=b.g_aFc,("cordova"===this.g_amE||"playable-ad"===this.g_amE||"instant-games"===this.g_amE)&&this.g_aER&&(console.warn("[C3 runtime] Worker mode is enabled and supported, but is disabled in WebViews due to crbug.com/923007. Reverting to DOM mode."),this.g_aER=!1),/CrOS/.test(navigator.userAgent)&&(console.warn("[C3 runtime] Worker mode is enabled and supported, but is disabled in Chrome OS due to reports of crashes. Reverting to DOM mode."),this.g_aER=!1),this.g_aFd=!1,this.g_aFe=null,("html5"===this.g_amE||"playable-ad"===this.g_amE)&&"file"===location.protocol.substr(0,4)&&alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)"),this.g_aEs("runtime","cordova-fetch-local-file",b=>this.g_aFf(b)),this.g_aEs("runtime","create-job-worker",b=>this.g_aFg(b)),"cordova"===this.g_amE?document.addEventListener("deviceready",()=>this.g_aay(b)):this.g_aay(b)}g_em(){this.g_aFh(),this.g_aET&&(this.g_aET.onmessage=null,this.g_aET=null),this.g_aEX&&(this.g_aEX.terminate(),this.g_aEX=null),this.g_aEY&&(this.g_aEY.g_em(),this.g_aEY=null),this.g_akA&&(this.g_akA.parentElement.removeChild(this.g_akA),this.g_akA=null)}g_aFi(){return this.g_akA}g_fg(){return this.g_amz}g_aEp(){return this.g_aER}g_apV(){return this.g_amE}g_aoN(){return"cordova"===this.g_amE&&a}g_aFj(){return"cordova"===this.g_amE&&!1===a}async g_aay(d){if("playable-ad"===this.g_amE){this.g_aFe=self.c3_base64files,await this.g_aFk();for(let a=0,b=d.g_aFl.length;a<b;++a){const b=d.g_aFl[a].toLowerCase();this.g_aFe.hasOwnProperty(b)&&(d.g_aFl[a]=URL.createObjectURL(this.g_aFe[b]))}}if(d.g_aFm)this.g_amz=d.g_aFm;else{const c=location.origin;this.g_amz=("null"===c?"file:///":c)+location.pathname;const a=this.g_amz.lastIndexOf("/");-1!==a&&(this.g_amz=this.g_amz.substr(0,a+1))}if(d.g_aFn)for(const[a,b]of Object.entries(d.g_aFn))this.g_aEW[a]=URL.createObjectURL(b);const a=new MessageChannel;this.g_aET=a.port1,this.g_aET.onmessage=b=>this._OnMessageFromRuntime(b.data),window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(b=>this.g_aFo(b)),this.g_aop=new self.g_aFp(this),await this.g_aop.g_ahH(),this.g_aFq(),"object"==typeof window.StatusBar&&window.StatusBar.hide(),"object"==typeof window.AndroidFullScreen&&window.AndroidFullScreen.immersiveMode(),await this.g_aFr(),this.g_aER?await this.g_aFs(d,a.port2):await this.g_aFt(d,a.port2)}g_aFu(b){return this.g_aEW.hasOwnProperty(b)?this.g_aEW[b]:b.endsWith("/workermain.js")&&this.g_aEW.hasOwnProperty("workermain.js")?this.g_aEW["workermain.js"]:"playable-ad"===this.g_amE&&this.g_aFe.hasOwnProperty(b.toLowerCase())?URL.createObjectURL(this.g_aFe[b.toLowerCase()]):b}async g_aFv(f,a,g){if(f.startsWith("blob:"))return new Worker(f,g);if(this.g_aoN()){const a=await this.g_As(this.g_aEU+f),b=new Blob([a],{type:"application/javascript"});return new Worker(URL.createObjectURL(b),g)}const c=new URL(f,a),b=location.origin!==c.origin;if(b){const d=await fetch(c);if(!d.ok)throw new Error("failed to fetch worker script");const a=await d.blob();return new Worker(URL.createObjectURL(a),g)}return new Worker(c,g)}g_aFq(){if(this.g_aoN()){const f=document.documentElement.style,a=document.body.style,b=window.innerWidth<window.innerHeight,c=b?window.screen.width:window.screen.height,d=b?window.screen.height:window.screen.width;a.height=f.height=d+"px",a.width=f.width=c+"px"}}g_aFw(d){return{baseUrl:this.g_amz,windowInnerWidth:window.innerWidth,windowInnerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio,isFullscreen:b.g_alL(),projectData:d.g_aFx,previewImageBlobs:window.cr_previewImageBlobs||this.g_aFe,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,exportType:d.g_aFc,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.g_aFy,jobScheduler:this.g_aop.g_aFz(),supportedAudioFormats:c,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.g_aEU+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.g_aEU+"opus.wasm.wasm",isWKWebView:this.g_aoN(),isFBInstantAvailable:"undefined"!=typeof self.FBInstant}}async g_aFs(e,a){const b=this.g_aFu(e.g_aFA);this.g_aEX=await this.g_aFv(b,this.g_amz,{name:"Runtime"}),this.g_akA=document.createElement("canvas"),this.g_akA.style.display="none";const c=this.g_akA.transferControlToOffscreen();document.body.appendChild(this.g_akA),window.c3canvas=this.g_akA,this.g_aEX.postMessage(Object.assign(this.g_aFw(e),{type:"init-runtime",isInWorker:!0,messagePort:a,canvas:c,workerDependencyScripts:e.g_aFB||[],engineScripts:e.g_aFl,projectScripts:window.g_aFC,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[a,c,...this.g_aop.g_aFD()]),this.g_aEZ=f.map(b=>new b(this)),this.g_aFE(),self.c3_callFunction=(c,a)=>this.g_aE_.g_S$(c,a),"preview"===this.g_amE&&(self.goToLastErrorScript=()=>this.g_aEl("runtime","go-to-last-error-script"))}async g_aFt(a,b){this.g_akA=document.createElement("canvas"),this.g_akA.style.display="none",document.body.appendChild(this.g_akA),window.c3canvas=this.g_akA,this.g_aEZ=f.map(b=>new b(this)),this.g_aFE();const c=a.g_aFl.map(b=>new URL(b,this.g_amz).toString());if(Array.isArray(a.g_aFB)&&c.unshift(...a.g_aFB),await Promise.all(c.map(a=>n(a))),a.g_aFF&&0<a.g_aFF.length){const b=self.C3_ProjectScriptsStatus;try{if(await Promise.all(a.g_aFF.map(a=>n(a[1]))),Object.values(b).some(b=>!b))return void self.setTimeout(()=>this.g_aFG(b),100)}catch(c){return console.error("[Preview] Error loading project scripts: ",c),void self.setTimeout(()=>this.g_aFG(b),100)}}if("preview"===this.g_amE&&"object"!=typeof self.g_aQ.g_aEf)return console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),void alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.");const d=Object.assign(this.g_aFw(a),{isInWorker:!1,messagePort:b,canvas:this.g_akA,runOnStartupFunctions:j});this.g_aEY=self.C3_CreateRuntime(d),await self.C3_InitRuntime(this.g_aEY,d)}g_aFG(d){const a=Object.entries(d).filter(b=>!b[1]).map(b=>b[0]),b=`Failed to load project script '${a[0]}'. Check all your JavaScript code has valid syntax.`;console.error("[Preview] "+b),alert(b)}async g_aFg(){const b=await this.g_aop.g_aFH();return{outputPort:b,transferables:[b]}}g_aEq(){if(this.g_aER)throw new Error("not available in worker mode");return this.g_aEY}g_aEl(f,a,b,c,d){this.g_aET.postMessage({type:"event",component:f,handler:a,dispatchOpts:c||null,data:b,responseId:null},this.g_aFd?void 0:d)}g_aEn(i,a,b,c,d){const e=h++,f=new Promise((c,a)=>{g.set(e,{resolve:c,reject:a})});return this.g_aET.postMessage({type:"event",component:i,handler:a,dispatchOpts:c||null,data:b,responseId:e},this.g_aFd?void 0:d),f}["_OnMessageFromRuntime"](c){const a=c.type;if("event"===a)this.g_aFI(c);else if("result"===a)this.g_aFJ(c);else if("runtime-ready"===a)this.g_aFK();else if("alert"===a)alert(c.message);else throw new Error(`unknown message '${a}'`)}g_aFI(j){const k=j.component,b=j.handler,a=j.data,c=j.responseId,d=i.get(k);if(!d)return void console.warn(`[DOM] No event handlers for component '${k}'`);const e=d.get(b);if(!e)return void console.warn(`[DOM] No handler '${b}' for component '${k}'`);let f=null;try{f=e(a)}catch(d){return console.error(`Exception in '${k}' handler '${b}':`,d),void(null!==c&&this.g_aFL(c,!1,d.toString()))}null!==c&&(f&&f.then?f.then(b=>this.g_aFL(c,!0,b)).catch(d=>{console.error(`Rejection from '${k}' handler '${b}':`,d),this.g_aFL(c,!1,d.toString())}):this.g_aFL(c,!0,f))}g_aFL(e,a,b){let c;b&&b.transferables&&(c=b.transferables),this.g_aET.postMessage({type:"result",responseId:e,isOk:a,result:b},c)}g_aFJ(f){const a=f.responseId,b=f.isOk,c=f.result,d=g.get(a);b?d.resolve(c):d.reject(c),g.delete(a)}g_aEs(e,a,b){let c=i.get(e);if(c||(c=new Map,i.set(e,c)),c.has(a))throw new Error(`[DOM] Component '${e}' already has handler '${a}'`);c.set(a,b)}static g_aFM(b){if(f.includes(b))throw new Error("DOM handler already added");f.push(b)}g_aFE(){for(const b of this.g_aEZ)if("runtime"===b.g_aEv())return void(this.g_aE_=b);throw new Error("cannot find runtime DOM handler")}g_aFo(b){this.g_aEl("debugger","message",b)}g_aFK(){for(const b of this.g_aEZ)b.g_aEj()}static g_alL(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}async g_aFN(){return await this.g_aEn("runtime","get-remote-preview-status-info")}g_aEw(b){this.g_aFb.push(b),this.g_aFO()}g_aEx(c){const a=this.g_aFb.indexOf(c);if(-1===a)throw new Error("invalid callback");this.g_aFb.splice(a,1),this.g_aFb.length||this.g_aFh()}g_aFO(){-1===this.g_alh&&this.g_aFb.length&&(this.g_alh=requestAnimationFrame(this.g_aE$))}g_aFh(){-1!==this.g_alh&&(cancelAnimationFrame(this.g_alh),this.g_alh=-1)}g_aFa(){this.g_alh=-1;for(const b of this.g_aFb)b();this.g_aFO()}g_aFP(b){this.g_aE_.g_aFP(b)}g_aFQ(b){this.g_aE_.g_aFQ(b)}g_aFR(){this.g_aE_.g_aFR()}g_aFS(b){this.g_aE_.g_aFS(b)}g_AP(b){return!!c[b]}async g_adC(c){const a=await this.g_aEn("runtime","opus-decode",{arrayBuffer:c},null,[c]);return new Float32Array(a)}g_fS(b){return /^(?:[a-z]+:)?\/\//.test(b)||"data:"===b.substr(0,5)||"blob:"===b.substr(0,5)}g_fT(b){return!this.g_fS(b)}async g_aFf(c){const a=c.filename;switch(c.as){case"text":return await this.g_At(a);case"buffer":return await this.g_As(a);default:throw new Error("unsupported type");}}g_aFT(c){const d=window.cordova.file.applicationDirectory+"www/"+c.toLowerCase();return new Promise((e,a)=>{window.resolveLocalFileSystemURL(d,c=>{c.file(e,a)},a)})}async g_At(b){const a=await this.g_aFT(b);return await o(a)}g_aFU(){if(d.length&&!(8<=e)){e++;const b=d.shift();this.g_aFV(b.filename,b.g_aFW,b.g_aFX)}}g_As(f){return new Promise((g,b)=>{d.push({filename:f,g_aFW:b=>{e--,this.g_aFU(),g(b)},g_aFX:c=>{e--,this.g_aFU(),b(c)}}),this.g_aFU()})}async g_aFV(c,a,b){try{const b=await this.g_aFT(c),d=await p(b);a(d)}catch(c){b(c)}}async g_aFk(){const d=[];for(const[a,b]of Object.entries(this.g_aFe))d.push(this.g_aFY(a,b));await Promise.all(d)}async g_aFY(e,a){if("object"==typeof a)this.g_aFe[e]=new Blob([a.str],{type:a.type});else{const b=await fetch(a),c=await b.blob();this.g_aFe[e]=c}}g_aFr(){let e=null;const f=new Promise(a=>e=a),b=new ArrayBuffer(1),c=new MessageChannel;return c.port2.onmessage=a=>{a.data&&a.data.arrayBuffer||(this.g_aFd=!0,console.warn("MessageChannel transfers determined to be broken. Disabling transferables.")),e()},c.port1.postMessage({arrayBuffer:b},[b]),f}}}{function p(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}function q(e){return new Promise((a,b)=>{const c=document.createElement("link");c.onload=()=>a(c),c.onerror=c=>b(c),c.rel="stylesheet",c.href=e,document.head.appendChild(c)})}function a(e){return new Promise((a,b)=>{const c=new Image;c.onload=()=>a(c),c.onerror=c=>b(c),c.src=e})}async function r(c){const d=URL.createObjectURL(c);try{return await a(d)}finally{URL.revokeObjectURL(d)}}function s(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}function d(c){const a=c.target.tagName.toLowerCase();i.has(a)&&c.preventDefault()}function e(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}function b(){try{return window.parent&&window.parent.document.hasFocus()}catch(b){return!1}}const f=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),h={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},g={dispatchUserScriptEvent:!0},c={dispatchRuntimeEvent:!0},i=new Set(["canvas","body","html"]);self.C3_RasterSvgImage=async function(f,a,b){const c=document.createElement("canvas");c.width=a,c.height=b;const d=c.getContext("2d");return d.drawImage(f,0,0,a,b),c};let j=!1;document.addEventListener("pause",()=>j=!0),document.addEventListener("resume",()=>j=!1);const k=class extends g_aEg{constructor(f){super(f,"runtime"),this.g_aFZ=!0,this.g_aF_=-1,this.g_aF$="any",this.g_aGa=!1,this.g_aGb=!1,this.g_aGc=null,f.g_aEs("canvas","update-size",b=>this.g_aGd(b)),f.g_aEs("runtime","invoke-download",b=>this.g_aGe(b)),f.g_aEs("runtime","raster-svg-image",b=>this.g_aGf(b)),f.g_aEs("runtime","set-target-orientation",b=>this.g_aGg(b)),f.g_aEs("runtime","register-sw",()=>this.g_aGh()),f.g_aEs("runtime","post-to-debugger",b=>this.g_aGi(b)),f.g_aEs("runtime","go-to-script",b=>this.g_aGi(b)),f.g_aEs("runtime","before-start-ticking",()=>this.g_aGj()),f.g_aEs("runtime","debug-highlight",b=>this.g_aGk(b)),f.g_aEs("runtime","enable-device-orientation",()=>this.g_aGl()),f.g_aEs("runtime","enable-device-motion",()=>this.g_aGm()),f.g_aEs("runtime","add-stylesheet",b=>this.g_aGn(b));const g=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",b=>{const a=b.target,c=a.tagName.toLowerCase();g.has(c)||s(a)||b.preventDefault()}),window.addEventListener("selectstart",d),window.addEventListener("gesturehold",d),window.addEventListener("touchstart",d,{passive:!1});const a=f.g_aFi();"undefined"==typeof PointerEvent?a.addEventListener("touchstart",d):(window.addEventListener("pointerdown",d,{passive:!1}),a.addEventListener("pointerdown",d)),this.g_aGo=0,window.addEventListener("mousedown",b=>{1===b.button&&b.preventDefault()}),window.addEventListener("mousewheel",e,{passive:!1}),window.addEventListener("wheel",e,{passive:!1}),window.addEventListener("resize",()=>this.g_aly()),this.g_aGp=new Set,this.g_aGq=new WeakSet,this.g_aGr=!1}g_aGj(){return"cordova"===this.g_aov.g_apV()?(document.addEventListener("pause",()=>this.g_aor(!0)),document.addEventListener("resume",()=>this.g_aor(!1))):document.addEventListener("visibilitychange",()=>this.g_aor(document.hidden)),{isSuspended:!!(document.hidden||j)}}g_aEj(){window.addEventListener("focus",()=>this.g_aGs("window-focus")),window.addEventListener("blur",()=>{this.g_aGs("window-blur",{parentHasFocus:b()}),this.g_aGo=0}),window.addEventListener("fullscreenchange",()=>this.g_alz()),window.addEventListener("webkitfullscreenchange",()=>this.g_alz()),window.addEventListener("mozfullscreenchange",()=>this.g_alz()),window.addEventListener("fullscreenerror",b=>this.g_alA(b)),window.addEventListener("webkitfullscreenerror",b=>this.g_alA(b)),window.addEventListener("mozfullscreenerror",b=>this.g_alA(b)),window.addEventListener("keydown",b=>this.g_aGt("keydown",b)),window.addEventListener("keyup",b=>this.g_aGt("keyup",b)),window.addEventListener("dblclick",b=>this.g_aGu("dblclick",b,h)),window.addEventListener("wheel",b=>this.g_aGv("wheel",b)),"undefined"==typeof PointerEvent?(window.addEventListener("mousedown",b=>this.g_aGw("pointerdown",b)),window.addEventListener("mousemove",b=>this.g_aGw("pointermove",b)),window.addEventListener("mouseup",b=>this.g_aGw("pointerup",b)),window.addEventListener("touchstart",b=>this.g_aGx("pointerdown",b)),window.addEventListener("touchmove",b=>this.g_aGx("pointermove",b)),window.addEventListener("touchend",b=>this.g_aGx("pointerup",b)),window.addEventListener("touchcancel",b=>this.g_aGx("pointercancel",b))):(window.addEventListener("pointerdown",b=>this.g_aGy("pointerdown",b)),window.addEventListener("pointermove",b=>this.g_aGy("pointermove",b)),window.addEventListener("pointerup",b=>this.g_aGy("pointerup",b)),window.addEventListener("pointercancel",b=>this.g_aGy("pointercancel",b)));const c=()=>this.g_aFR();window.addEventListener("pointerup",c,!0),window.addEventListener("touchend",c,!0),window.addEventListener("click",c,!0),window.addEventListener("keydown",c,!0),window.addEventListener("gamepadconnected",c,!0)}g_aGs(d,a){this.g_aEk(d,a||null,c)}g_aGz(){return Math.max(window.innerWidth,1)}g_aGA(){return Math.max(window.innerHeight,1)}g_aly(){const c=this.g_aGz(),a=this.g_aGA();this.g_aGs("window-resize",{innerWidth:c,innerHeight:a,devicePixelRatio:window.devicePixelRatio}),this.g_aov.g_aoN()&&(-1!==this.g_aF_&&clearTimeout(this.g_aF_),this.g_aGB(c,a,0))}g_aGC(d,a,b){-1!==this.g_aF_&&clearTimeout(this.g_aF_),this.g_aF_=setTimeout(()=>this.g_aGB(d,a,b),48)}g_aGB(f,a,b){const c=this.g_aGz(),d=this.g_aGA();this.g_aF_=-1,c!=f||d!=a?this.g_aGs("window-resize",{innerWidth:c,innerHeight:d,devicePixelRatio:window.devicePixelRatio}):10>b&&this.g_aGC(c,d,b+1)}g_aGg(b){this.g_aF$=b.targetOrientation}g_aGD(){const c=this.g_aF$;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(c).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(c):screen.webkitLockOrientation?a=screen.webkitLockOrientation(c):screen.mozLockOrientation?a=screen.mozLockOrientation(c):screen.msLockOrientation&&(a=screen.msLockOrientation(c)),a||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",b)}}g_alz(){const b=g_aEQ.g_alL();b&&"any"!==this.g_aF$&&this.g_aGD(),this.g_aEk("fullscreenchange",{isFullscreen:b,innerWidth:this.g_aGz(),innerHeight:this.g_aGA()})}g_alA(b){console.warn("[Construct 3] Fullscreen request failed: ",b),this.g_aEk("fullscreenerror",{isFullscreen:g_aEQ.g_alL(),innerWidth:this.g_aGz(),innerHeight:this.g_aGA()})}g_aor(b){b?this.g_aov.g_aFh():this.g_aov.g_aFO(),this.g_aEk("visibilitychange",{hidden:b})}g_aGt(d,a){const b=f.get(a.code)||a.code;this.g_aEo(d,{code:b,key:a.key,which:a.which,repeat:a.repeat,altKey:a.altKey,ctrlKey:a.ctrlKey,metaKey:a.metaKey,shiftKey:a.shiftKey,timeStamp:a.timeStamp},h)}g_aGv(c,a){this.g_aEk(c,{clientX:a.clientX,clientY:a.clientY,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},h)}g_aGu(a,b,c){p(b)||("mousedown"===a&&window!==window.top&&window.focus(),this.g_aEo(a,{button:b.button,buttons:b.buttons,clientX:b.clientX,clientY:b.clientY,timeStamp:b.timeStamp},c))}g_aGw(a,e){if(!p(e)){"pointerdown"===a&&window!==window.top&&window.focus();const b=this.g_aGo;"pointerdown"===a&&0!==b?a="pointermove":"pointerup"==a&&0!==e.buttons&&(a="pointermove"),this.g_aEo(a,{pointerId:1,pointerType:"mouse",button:e.button,buttons:e.buttons,lastButtons:b,clientX:e.clientX,clientY:e.clientY,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:e.timeStamp},h),this.g_aGo=e.buttons,this.g_aGu(e.type,e,g)}}g_aGy(d,a){"pointerdown"===d&&window!==window.top&&window.focus();let b=0;if("mouse"===a.pointerType&&(b=this.g_aGo),this.g_aEo(d,{pointerId:a.pointerId,pointerType:a.pointerType,button:a.button,buttons:a.buttons,lastButtons:b,clientX:a.clientX,clientY:a.clientY,width:a.width||0,height:a.height||0,pressure:a.pressure||0,tangentialPressure:a.tangentialPressure||0,tiltX:a.tiltX||0,tiltY:a.tiltY||0,twist:a.twist||0,timeStamp:a.timeStamp},h),"mouse"===a.pointerType){let b="mousemove";"pointerdown"===d?b="mousedown":"pointerup"==d&&(b="pointerup"),this.g_aGu(b,a,g),this.g_aGo=a.buttons}}g_aGx(e,a){"pointerdown"===e&&window!==window.top&&window.focus();for(let b=0,c=a.changedTouches.length;b<c;++b){const c=a.changedTouches[b];this.g_aEo(e,{pointerId:c.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:c.clientX,clientY:c.clientY,width:2*(c.radiusX||c.webkitRadiusX||0),height:2*(c.radiusY||c.webkitRadiusY||0),pressure:c.force||c.webkitForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:c.rotationAngle||0,timeStamp:a.timeStamp},h)}}g_aGl(){this.g_aGa||(this.g_aGa=!0,window.addEventListener("deviceorientation",b=>this.g_axA(b)))}g_aGm(){this.g_aGb||(this.g_aGb=!0,window.addEventListener("devicemotion",b=>this.g_axB(b)))}g_axA(b){this.g_aEk("deviceorientation",{alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},h)}g_axB(i){let a=null;const j=i.acceleration;j&&(a={x:j.x||0,y:j.y||0,z:j.z||0});let c=null;const k=i.accelerationIncludingGravity;k&&(c={x:k.x||0,y:k.y||0,z:k.z||0});let e=null;const l=i.rotationRate;l&&(e={alpha:l.alpha||0,beta:l.beta||0,gamma:l.gamma||0}),this.g_aEk("devicemotion",{acceleration:a,accelerationIncludingGravity:c,rotationRate:e,interval:i.interval,timeStamp:i.timeStamp},h)}g_aGd(d){const a=this.g_aEu(),b=a.g_aFi();b.style.width=d.styleWidth+"px",b.style.height=d.styleHeight+"px",b.style.marginLeft=d.marginLeft+"px",b.style.marginTop=d.marginTop+"px",a.g_aFq(),this.g_aFZ&&(b.style.display="",this.g_aFZ=!1)}g_aGe(f){const b=f.url,c=f.filename,d=document.createElement("a"),e=document.body;d.textContent=c,d.href=b,d.download=c,e.appendChild(d),d.click(),e.removeChild(d)}async g_aGf(d){const a=d.blob,b=d.width,c=d.height,e=await r(a),f=await self.C3_RasterSvgImage(e,b,c);return await createImageBitmap(f)}async g_aGn(b){await q(b.url)}g_aFR(){const c=[...this.g_aGp];if(this.g_aGp.clear(),!this.g_aGr)for(const d of c){const b=d.play();b&&b.catch(()=>{this.g_aGq.has(d)||this.g_aGp.add(d)})}}g_aFP(c){if("function"!=typeof c.play)throw new Error("missing play function");this.g_aGq.delete(c);let a;try{a=c.play()}catch(a){return void this.g_aGp.add(c)}a&&a.catch(()=>{this.g_aGq.has(c)||this.g_aGp.add(c)})}g_aFQ(b){this.g_aGp.delete(b),this.g_aGq.add(b)}g_aFS(b){this.g_aGr=!!b}g_aGk(d){const a=d.show;if(!a)return void(this.g_aGc&&(this.g_aGc.style.display="none"));this.g_aGc||(this.g_aGc=document.createElement("div"),this.g_aGc.id="inspectOutline",document.body.appendChild(this.g_aGc));const b=this.g_aGc;b.style.display="",b.style.left=d.left-1+"px",b.style.top=d.top-1+"px",b.style.width=d.width+2+"px",b.style.height=d.height+2+"px",b.textContent=d.name}g_aGh(){window.C3_RegisterSW&&window.C3_RegisterSW()}g_aGi(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}g_S$(c,a){return this.g_aEm("js-invoke-function",{name:c,params:a})}};g_aEQ.g_aFM(k)}{const c=document.currentScript.src;self.g_aFp=class{constructor(a){this.g_aGE=a,this.g_amz=c?c.substr(0,c.lastIndexOf("/")+1):a.g_fg(),this.g_aqA=Math.min(navigator.hardwareConcurrency||2,16),this.g_aGF=null,this.g_aGG=[],this.g_aqy=null,this.g_aGH=null}async g_ahH(){if(this.g_aGI)throw new Error("already initialised");this.g_aGI=!0;const c=this.g_aGE.g_aFu("dispatchworker.js");this.g_aGF=await this.g_aGE.g_aFv(c,this.g_amz,{name:"DispatchWorker"});const a=new MessageChannel;this.g_aqy=a.port1,this.g_aGF.postMessage({type:"_init","in-port":a.port2},[a.port2]),this.g_aGH=await this.g_aFH()}async g_aFH(){const f=this.g_aGG.length,a=this.g_aGE.g_aFu("jobworker.js"),b=await this.g_aGE.g_aFv(a,this.g_amz,{name:"JobWorker"+f}),c=new MessageChannel,d=new MessageChannel;return this.g_aGF.postMessage({type:"_addJobWorker",port:c.port1},[c.port1]),b.postMessage({type:"init",number:f,"dispatch-port":c.port2,"output-port":d.port2},[c.port2,d.port2]),this.g_aGG.push(b),d.port1}g_aFz(){return{inputPort:this.g_aqy,outputPort:this.g_aGH,maxNumWorkers:this.g_aqA}}g_aFD(){return[this.g_aqy,this.g_aGH]}}}if("use strict",window.C3_IsSupported){"undefined"!=typeof OffscreenCanvas;window.c3_runtimeInterface=new g_aEQ({g_aES:!1,g_aFA:"workermain.js",g_aFl:["scripts/c3runtime.js"],g_aEV:"scripts/",g_aFB:[],g_aFc:"cordova"})}{const b=class extends g_aEg{constructor(b){super(b,"touch"),this.g_aEr("request-permission",b=>this.g_aGJ(b))}async g_aGJ(d){const a=d.type;let b=!0;0===a?b=await this.g_aGK():1===a&&(b=await this.g_aGL()),this.g_aEk("permission-result",{type:a,result:b})}async g_aGK(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{const b=await self.DeviceOrientationEvent.requestPermission();return"granted"===b}catch(b){return console.warn("[Touch] Failed to request orientation permission: ",b),!1}}async g_aGL(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{const b=await self.DeviceMotionEvent.requestPermission();return"granted"===b}catch(b){return console.warn("[Touch] Failed to request motion permission: ",b),!1}}};g_aEQ.g_aFM(b)}{const b=class extends g_aEg{constructor(b){super(b,"browser"),this.g_amE="",this.g_aEr("get-initial-state",b=>this.g_aGM(b)),this.g_aEr("ready-for-sw-messages",()=>this.g_aGN()),this.g_aEr("alert",b=>this.g_aGO(b)),this.g_aEr("close",()=>this.g_aGP()),this.g_aEr("set-focus",b=>this.g_aEG(b)),this.g_aEr("vibrate",b=>this.g_aGQ(b)),this.g_aEr("lock-orientation",b=>this.g_aGR(b)),this.g_aEr("unlock-orientation",()=>this.g_aGS()),this.g_aEr("navigate",b=>this.g_aGT(b)),this.g_aEr("request-fullscreen",b=>this.g_aGU(b)),this.g_aEr("exit-fullscreen",()=>this.g_aGV()),window.addEventListener("online",()=>this.g_ay$(!0)),window.addEventListener("offline",()=>this.g_ay$(!1)),document.addEventListener("backbutton",()=>this.g_aGW()),"undefined"!=typeof Windows&&Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested",b=>this.g_aGX(b))}g_aGM(b){return this.g_amE=b.exportType,{location:location.toString(),isOnline:!!navigator.onLine,referrer:document.referrer,title:document.title,isCookieEnabled:!!navigator.cookieEnabled,screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,isScirraArcade:"undefined"!=typeof window.is_scirra_arcade}}g_aGN(){window.C3_RegisterSW&&window.OfflineClientInfo&&window.OfflineClientInfo.SetMessageCallback(b=>this.g_aEk("sw-message",b.data))}g_ay$(b){this.g_aEk("online-state",{isOnline:b})}g_aGW(){this.g_aEk("backbutton")}g_aGX(b){b.handled=!0,this.g_aEk("backbutton")}g_aGY(){return"nwjs"===this.g_amE?nw.Window.get():null}g_aGO(b){alert(b.message)}g_aGP(){navigator.app&&navigator.app.exitApp?navigator.app.exitApp():navigator.device&&navigator.device.exitApp?navigator.device.exitApp():window.close()}g_aEG(c){const d=c.isFocus;if("nwjs"===this.g_amE){const b=this.g_aGY();d?b.focus():b.blur()}else d?window.focus():window.blur()}g_aGQ(b){navigator.vibrate&&navigator.vibrate(b.pattern)}g_aGR(c){const d=c.orientation;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(d).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let b=!1;screen.lockOrientation?b=screen.lockOrientation(d):screen.webkitLockOrientation?b=screen.webkitLockOrientation(d):screen.mozLockOrientation?b=screen.mozLockOrientation(d):screen.msLockOrientation&&(b=screen.msLockOrientation(d)),b||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",b)}}g_aGS(){try{screen.orientation&&screen.orientation.unlock?screen.orientation.unlock():screen.unlockOrientation?screen.unlockOrientation():screen.webkitUnlockOrientation?screen.webkitUnlockOrientation():screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()}catch(b){}}g_aGT(e){const a=e.type;if("back"===a)navigator.app&&navigator.app.backHistory?navigator.app.backHistory():window.back();else if("forward"===a)window.forward();else if("home"===a)window.g_aGZ();else if("reload"===a)location.reload();else if("url"===a){const a=e.url,b=e.target,c=e.exportType;"windows-uwp"===c&&"undefined"!=typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(a)):navigator.app&&navigator.app.loadUrl?navigator.app.loadUrl(a,{openExternal:!0}):"cordova"===c?window.open(a,"_system"):"preview"===c?window.open(a,"_blank"):!this.g_ay_&&(2===b?window.top.location=a:1===b?window.parent.location=a:window.location=a)}else if("new-window"===a){const a=e.url,b=e.tag,c=e.exportType;"windows-uwp"===c&&"undefined"!=typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(a)):navigator.app&&navigator.app.loadUrl?navigator.app.loadUrl(a,{openExternal:!0}):"cordova"===c?window.open(a,"_system"):window.open(a,b)}}g_aGU(e){const a={navigationUI:"auto"},b=e.navUI;1===b?a.navigationUI="hide":2===b&&(a.navigationUI="show");const c=document.documentElement;c.requestFullscreen?c.requestFullscreen(a):c.mozRequestFullScreen?c.mozRequestFullScreen(a):c.msRequestFullscreen?c.msRequestFullscreen(a):c.webkitRequestFullScreen&&("undefined"==typeof Element.ALLOW_KEYBOARD_INPUT?c.webkitRequestFullScreen():c.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT))}g_aGV(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}};g_aEQ.g_aFM(b)}{const b=class extends g_aEy{constructor(b){super(b,"iframe"),this.g_aEJ("navigate-url",(c,a)=>this.g_aG_(c,a)),this.g_aEJ("display-html",(c,a)=>this.g_aG$(c,a))}g_aci(e,a){const f=document.createElement("iframe");f.style.position="absolute",f.style.border="none";const c=navigator.userAgent;if(/iphone|ipad|ipod/i.test(c)){const d=/(iphone\s+os|ipad[^)]*os)\s+([0-9_]+)/i.exec(c),a=parseInt(d[d.length-1]);(12>=a||isNaN(a))&&(f.setAttribute("noresize","noresize"),f.setAttribute("scrolling","no"))}return a.isVisible||(f.style.display="none"),a.id&&(f.id=a.id),a.allow&&(f.setAttribute("allow",a.allow),a.allow.includes("fullscreen")&&f.setAttribute("allowfullscreen","")),a.enableSandbox&&f.setAttribute("sandbox",a.sandbox),a.url?f.src=a.url:a.html&&this.g_aG$(f,a),f}g_aEN(){}g_aHa(c,a){c.src.startsWith("blob:")&&URL.revokeObjectURL(c.src),c.src=a}g_aEK(b){this.g_aHa(b,"")}g_aG_(c,a){this.g_aHa(c,a.url)}g_aG$(d,a){const b=new Blob([a.html],{type:"text/html"});this.g_aHa(d,URL.createObjectURL(b))}};g_aEQ.g_aFM(b)}