(function(e){function t(t){for(var o,r,u=t[0],i=t[1],s=t[2],d=0,l=[];d<u.length;d++)r=u[d],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&l.push(c[r][0]),c[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);b&&b(t);while(l.length)l.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var u=n[r];0!==c[u]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},c={app:0},a=[];function u(e){return i.p+"js/"+({about:"about",test:"test"}[e]||e)+"."+{about:"05c27644","chunk-2d0b9f47":"da838a07","chunk-2d2086b7":"e7bea1a9","chunk-2d2311c8":"a07c39ab",test:"5122f9e2"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={test:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({about:"about",test:"test"}[e]||e)+"."+{about:"31d6cfe0","chunk-2d0b9f47":"31d6cfe0","chunk-2d2086b7":"31d6cfe0","chunk-2d2311c8":"31d6cfe0",test:"ccf38302"}[e]+".css",c=i.p+o,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var s=a[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===o||d===c))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],d=s.getAttribute("data-href");if(d===o||d===c)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var o=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[e],b.parentNode.removeChild(b),n(a)},b.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(b)})).then((function(){r[e]=0})));var o=c[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=c[e]=[t,n]}));t.push(o[2]=a);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var l=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(b);var n=c[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,n[1](l)}c[e]=void 0}};var b=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var b=d;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"09b7":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={class:"flex justify-center h-screen bg-blue-600"},c={class:"w-full md:w-3/5"},a={class:"md:m-2 p-2 bg-white md:rounded-lg"},u=Object(o["createVNode"])("div",{class:"h-1"},null,-1),i={class:"md:m-2 p-2 bg-white md:rounded-lg"},s=Object(o["createVNode"])("div",{class:"h-1"},null,-1),d={class:"md:m-2 p-2 bg-white md:rounded-lg"};function l(e,t,n,l,b,p){var f=Object(o["resolveComponent"])("Header"),m=Object(o["resolveComponent"])("router-view"),h=Object(o["resolveComponent"])("Footer");return Object(o["openBlock"])(),Object(o["createBlock"])("div",r,[Object(o["createVNode"])("div",c,[Object(o["createVNode"])("div",a,[Object(o["createVNode"])(f)]),u,Object(o["createVNode"])("div",i,[Object(o["createVNode"])(m)]),s,Object(o["createVNode"])("div",d,[Object(o["createVNode"])(h)])])])}var b=n("7751"),p=n.n(b),f={class:"flex justify-between"},m={class:"flex"},h=Object(o["createVNode"])("img",{class:"w-8 h-8 rounded-full",alt:"logo",src:p.a},null,-1),g={class:"px-3"},v=Object(o["createTextVNode"])("소개"),j={class:"px-3"},O=Object(o["createTextVNode"])("환영"),w={class:"flex"},x={class:"mr-3"},y=Object(o["createTextVNode"])("로그인"),N=Object(o["createTextVNode"])("가입");function k(e,t,n,r,c,a){var u=Object(o["resolveComponent"])("router-link");return Object(o["openBlock"])(),Object(o["createBlock"])("div",f,[Object(o["createVNode"])("div",m,[Object(o["createVNode"])(u,{class:"px-3",to:"/"},{default:Object(o["withCtx"])((function(){return[h]})),_:1}),Object(o["createVNode"])("div",g,[Object(o["createVNode"])(u,{to:"/about"},{default:Object(o["withCtx"])((function(){return[v]})),_:1})]),Object(o["createVNode"])("div",j,[Object(o["createVNode"])(u,{to:"/welcome"},{default:Object(o["withCtx"])((function(){return[O]})),_:1})])]),Object(o["createVNode"])("div",w,[Object(o["createVNode"])("div",x,[e.$store.getters.isLogin?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])(u,{key:0,to:"/login",class:"\n            py-1\n            px-3\n            font-bold\n            rounded\n            bg-indigo-300\n            text-indigo-900\n            hover:bg-indigo-100\n            hover:text-indigo-600\n            transition-colors\n            duration-300\n          "},{default:Object(o["withCtx"])((function(){return[y]})),_:1}))]),Object(o["createVNode"])("div",null,[e.$store.getters.isLogin?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])(u,{key:0,to:"/signup",class:"\n            py-1\n            px-3\n            font-bold\n            rounded\n            bg-yellow-300\n            text-yellow-900\n            hover:bg-yellow-100\n            hover:text-yellow-600\n            transition-colors\n            duration-300\n          "},{default:Object(o["withCtx"])((function(){return[N]})),_:1}))])])])}var V=n("a6f4"),_=Object(V["a"])({setup:function(){}});_.render=k;var C=_,T={class:"px-2"},S=Object(o["createStaticVNode"])('<div class="flex justify-between m-2"><div></div><div class="inline-flex"><div class="mr-2 px-2 rounded-lg bg-indigo-600 text-white"><a href="https://www.roblox.com/users/2435364718/profile"> roblox </a></div><div class="mr-2 px-2 rounded-lg bg-purple-600 text-white"><a href="https://github.com/GoToTheMetaverse/SampleCode"> github </a></div><div class="mr-2 px-2 rounded-lg bg-red-600 text-white"><a href="https://www.youtube.com/channel/UC0cgLnazriprrSpdD4I05QQ"> youtube </a></div><div class="px-2 rounded-lg bg-blue-600 text-white"><a href="mailto:GoToTheMetaverse@gmail.com"> email </a></div></div></div><div class="px-2 text-xs text-right"> vue.js 3 | tailwindcss | kaboom.js </div><div class="text-xs"> Copyright 2021 <br> 이렇게 된 이상 메타버스로 간다 </div>',3);function B(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])("div",T,[S])}const P={};P.render=B;var L=P,A={name:"App",components:{Header:C,Footer:L},data:function(){return{mobule_menu_on:!1}},computed:{mobule_menu_class:function(){return this.mobule_menu_on?"":"hidden"},mobule_menu_class_ng:function(){return this.mobule_menu_on?"hidden":""}},mounted:function(){},methods:{onMobuleMenuToggle:function(){this.mobule_menu_on=!this.mobule_menu_on}}};n("8b15");A.render=l;var E=A,M=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),D={class:"home"},H=Object(o["createVNode"])("h1",null,"메타버스 진행상황",-1);function R(e,t,n,r,c,a){return Object(o["openBlock"])(),Object(o["createBlock"])("div",D,[H,Object(o["createVNode"])("p",null,"cookie: "+Object(o["toDisplayString"])(a.a()),1),Object(o["createVNode"])("p",null,"mode: "+Object(o["toDisplayString"])(a.b()),1),Object(o["createVNode"])("p",null,Object(o["toDisplayString"])(e.$store.getters.userName),1)])}var U={name:"Home",mounted:function(){document.cookie="game1=data1"},methods:{a:function(){return document.cookie},b:function(){return"production"}}};U.render=R;var F=U,$=[{path:"/",name:"Home",component:F},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/test",name:"Test",component:function(){return n.e("test").then(n.bind(null,"fb6d"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-2d2086b7").then(n.bind(null,"a55b"))}},{path:"/signup",name:"Signup",component:function(){return n.e("chunk-2d0b9f47").then(n.bind(null,"34c3"))}},{path:"/welcome",name:"Welcome",component:function(){return n.e("chunk-2d2311c8").then(n.bind(null,"eec5"))}}],q=Object(M["a"])({history:Object(M["b"])("/"),routes:$}),G=q,I=n("1da1"),J=(n("96cf"),n("b0c0"),n("5502")),Q=n("bc3a"),z=n.n(Q),K=z.a.create();function W(e,t){K.post("/api",e).then((function(e){void 0!==e.data.code?t(e.data):t({code:-1,message:"no data"})})).catch((function(e){t({code:-1,message:"catch:".concat(e.message)})}))}function X(e){return Y.apply(this,arguments)}function Y(){return Y=Object(I["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){W(t,e)})));case 1:case"end":return e.stop()}}),e)}))),Y.apply(this,arguments)}function Z(e){return ee.apply(this,arguments)}function ee(){return ee=Object(I["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var n=Math.ceil(1e3*t);setTimeout((function(){e()}),n)})));case 1:case"end":return e.stop()}}),e)}))),ee.apply(this,arguments)}K.defaults.baseURL="http://localhost";var te=Object(J["a"])({state:{user:{uid:0,id:"",name:""},userName:"guest"},actions:{},modules:{},getters:{isLogin:function(e){return 0!=e.user.uid},userName:function(e){return e.userName}},mutations:{setUser:function(e,t){e.user.uid=t.uid,e.user.id=t.id,e.user.name=t.name,e.userName=e.user.id}}});te.callAsync=X,te.call=W,te.wait=Z;var ne=te;n("ba8c");Object(o["createApp"])(E).use(ne).use(G).mount("#app")},7751:function(e,t,n){e.exports=n.p+"img/logo-sm.656d51a9.png"},"8b15":function(e,t,n){"use strict";n("09b7")},ba8c:function(e,t,n){}});
//# sourceMappingURL=app.14b3fd6d.js.map