!function(e){"use strict";function t(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(o){if("default"!==o){var n=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(t,o,n.get?n:{enumerable:!0,get:function(){return e[o]}})}})),t.default=e,Object.freeze(t)}var o,n=t(e);const r=function(e){navigator.hasOwnProperty("webkitGetUserMedia")&&!navigator.hasOwnProperty("getUserMedia")&&(navigator.getUserMedia=globalThis.webkitGetUserMedia,AudioContext.prototype.hasOwnProperty("createScriptProcessor")||(AudioContext.prototype.createScriptProcessor=AudioContext.prototype.createJavaScriptNode)),this.context=new AudioContext;let t=document.getElementById("elvisSong"),n=this.context.createMediaElementSource(t);n.connect(this.context.destination),this.meyda=window.Meyda.createMeydaAnalyzer({audioContext:this.context,source:n,bufferSize:e,windowingFunction:"blackman"}),o=this,this.initializeMicrophoneSampling()};r.prototype.initializeMicrophoneSampling=function(){var e=function(e){if("suspended"===o.context.state){var t=function(){o.context.resume(),setTimeout((function(){"running"===o.context.state&&document.body.removeEventListener("touchend",t,!1)}),0)};document.body.addEventListener("touchend",t,!1)}};try{navigator.getUserMedia=navigator.webkitGetUserMedia||navigator.getUserMedia||navigator.mediaDevices.getUserMedia;var t=function(e){var t=document.getElementById("audioControl");t&&(t.style.display="none"),console.log("User allowed microphone access."),console.log("Initializing AudioNode from MediaStream");var n=o.context.createMediaStreamSource(e);console.log("Setting Meyda Source to Microphone"),o.meyda.setSource(n),console.groupEnd()};console.log("Asking for permission..."),navigator.mediaDevices.getUserMedia({audio:!0}).then(t).catch((function(o){console.log(o),navigator.getUserMedia({audio:!0},t,(function(t){e()}))}))}catch(t){e()}},r.prototype.get=function(e){return o.context.resume(),o.meyda.get(e)};var i=["C","C#","D","Eb","E","F","F#","G","G#","A","Bb","B"];const a=1024;let c=new r(a);var s=new n.Scene,d=new n.PerspectiveCamera(40,1.6,.1,1e3),l=new n.LineBasicMaterial({color:65280});new n.LineBasicMaterial({color:65535});var u=function(e,t){for(var o=[],n=0;n<e;n++)o.push(new Array(t).fill(0));return o}(20,a),m=new n.WebGLRenderer({canvas:document.querySelector("canvas")});function g(){m.domElement.style.width="100%",m.domElement.style.height="auto";var e=m.domElement.clientWidth/16*10;m.setPixelRatio(window.devicePixelRatio?window.devicePixelRatio:1),m.setSize(1.6*e,e),m.domElement.style.width="100%",m.domElement.style.height="auto",d.aspect=1.6*e/e,d.updateProjectionMatrix()}g(),window.addEventListener("resize",g);var p=new n.DirectionalLight(16777215,.5);p.position.set(0,1,1),s.add(p),d.position.z=5;const f=new n.Vector3(0,1,0),y=new n.Vector3(1,0,0),h=new n.Vector3(1,-6,-15);let w=new n.ArrowHelper(f,h,1,16776960),v=new n.ArrowHelper(f,h,1,255),b=new n.ArrowHelper(y,h,1,16711935),M=new n.Group;s.add(w),s.add(v),s.add(b);for(let e=0;e<u.length;e++)if(u[e]){let t=new n.BufferGeometry,o=new Float32Array(3*u[e].length);t.addAttribute("position",new n.BufferAttribute(o,3)),t.setDrawRange(0,u[e].length);let r=new n.Line(t,l);M.add(r),o=r.geometry.attributes.position.array}let S=new n.BufferGeometry,A=new n.Line(S,l);{let e=new Float32Array(3072);S.addAttribute("position",new n.BufferAttribute(e,3)),S.setDrawRange(0,a),e=A.geometry.attributes.position.array}s.add(A),s.add(M);let x=null,E=document.querySelector("#chroma"),U=document.querySelector("#mfcc");!function e(){if(x=c.get(["amplitudeSpectrum","spectralCentroid","spectralRolloff","loudness","rms","chroma","mfcc"]),x){E&&x.chroma&&(E.innerHTML=x.chroma.reduce(((e,t,o)=>`${e}\n          <div class="chroma-band" style="background-color: rgba(0,${Math.round(255*t)},0,1)">${i[o]}</div>`),"")),U&&x.mfcc&&(U.innerHTML=x.mfcc.reduce(((e,t,o)=>`${e}\n          <div class="mfcc-band" style="background-color: rgba(0,${5*Math.round(t+25)},0,1)">${o}</div>`),"")),u.pop(),u.unshift(x.amplitudeSpectrum);const e=c.meyda._m.signal;for(let e=0;e<u.length;e++){for(var t=M.children[e].geometry.attributes.position.array,o=0,n=0;n<3*u[e].length;n++)t[o++]=10.7+8*Math.log10(n/u[e].length),t[o++]=.1*u[e][n]-5,t[o++]=-15-e;M.children[e].geometry.attributes.position.needsUpdate=!0}if(x.spectralCentroid&&w.position.set(10.7+8*Math.log10(x.spectralCentroid/512),-6,-15),x.spectralRolloff){var r=x.spectralRolloff/22050;v.position.set(10.7+8*Math.log10(r),-6,-15)}if(x.rms&&b.position.set(-11,10*x.rms-5,-15),e){let t=A.geometry.attributes.position.array,o=0;for(var l=0;l<a;l++)t[o++]=22*l/a-11,t[o++]=4+5*e[l],t[o++]=-25;A.geometry.attributes.position.needsUpdate=!0}}requestAnimationFrame(e),m.render(s,d)}()}(THREE);
