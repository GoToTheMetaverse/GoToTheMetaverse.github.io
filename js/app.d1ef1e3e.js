(function(e){function t(t){for(var r,i,u=t[0],a=t[1],s=t[2],l=0,b=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&b.push(o[i][0]),o[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);d&&d(t);while(b.length)b.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,i=1;i<n.length;i++){var a=n[i];0!==o[a]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},c=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ac797686","chunk-2d0b9f47":"4fbc4aae","chunk-2d0d7fc5":"b848d149","chunk-2d2086b7":"4ea546c1","chunk-2d217357":"8dc70fe2","chunk-2d22ca51":"1739db6e","chunk-2d2311c8":"7d6690fc","chunk-eb163fe2":"3ea29414"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var c,a=document.createElement("script");a.charset="utf-8",a.timeout=120,u.nc&&a.setAttribute("nonce",u.nc),a.src=i(e);var s=new Error;c=function(t){a.onerror=a.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",s.name="ChunkLoadError",s.type=r,s.request=c,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:a})}),12e4);a.onerror=a.onload=c,document.head.appendChild(a)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var d=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"196a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={class:"flex justify-center h-full bg-blue-600"},c={class:"w-full md:max-w-lg"},i=Object(r["h"])("div",{class:"md:h-2"},null,-1),u={class:"md:mx-2 p-2 bg-white md:rounded-lg"},a=Object(r["h"])("div",{class:"h-2"},null,-1),s={class:"md:mx-2 p-2 bg-white md:rounded-lg"},l=Object(r["h"])("div",{class:"h-2"},null,-1),d={class:"md:mx-2 p-2 bg-white md:rounded-lg"},b=Object(r["h"])("div",{class:"md:h-2"},null,-1);function p(e,t,n,p,g,f){var m=Object(r["v"])("Header"),h=Object(r["v"])("router-view"),j=Object(r["v"])("Footer");return Object(r["q"])(),Object(r["d"])("div",o,[Object(r["h"])("div",c,[i,Object(r["h"])("div",u,[Object(r["h"])(m)]),a,Object(r["h"])("div",s,[Object(r["h"])(h)]),l,Object(r["h"])("div",d,[Object(r["h"])(j)]),b])])}var g=n("7751"),f=n.n(g),m={class:"flex justify-between"},h={class:"flex"},j=Object(r["h"])("img",{class:"w-8 h-8 rounded-full",alt:"logo",src:f.a},null,-1),v={class:"px-3"},O=Object(r["g"])("소개"),x={class:"px-3"},w=Object(r["g"])("환영"),k={key:0,class:"flex"},y={class:"mr-3"},P=Object(r["g"])("로그인"),_=Object(r["g"])("가입");function T(e,t,n,o,c,i){var u=Object(r["v"])("router-link");return Object(r["q"])(),Object(r["d"])("div",m,[Object(r["h"])("div",h,[Object(r["h"])(u,{class:"px-3",to:"/"},{default:Object(r["B"])((function(){return[j]})),_:1}),Object(r["h"])("div",v,[Object(r["h"])(u,{to:"/about"},{default:Object(r["B"])((function(){return[O]})),_:1})]),Object(r["h"])("div",x,[Object(r["h"])(u,{to:"/welcome"},{default:Object(r["B"])((function(){return[w]})),_:1})])]),c.waitResponse?Object(r["e"])("",!0):(Object(r["q"])(),Object(r["d"])("div",k,[Object(r["h"])("div",y,[e.$store.getters.isLogin?(Object(r["q"])(),Object(r["d"])(u,{key:1,to:"/profile",class:"\n            py-1\n            px-3\n            font-bold\n            rounded\n            bg-indigo-600\n            text-white\n            transition-colors\n            duration-300\n          "},{default:Object(r["B"])((function(){return[Object(r["g"])(Object(r["x"])(e.$store.getters.userName),1)]})),_:1})):(Object(r["q"])(),Object(r["d"])(u,{key:0,to:"/login",class:"\n            py-1\n            px-3\n            font-bold\n            rounded\n            bg-indigo-600\n            text-white\n            hover:bg-indigo-300\n            hover:text-black\n            transition-colors\n            duration-300\n          "},{default:Object(r["B"])((function(){return[P]})),_:1}))]),Object(r["h"])("div",null,[e.$store.getters.isLogin?Object(r["e"])("",!0):(Object(r["q"])(),Object(r["d"])(u,{key:0,to:"/signup",class:"\n            py-1\n            px-3\n            font-bold\n            rounded\n            bg-yellow-300\n            text-yellow-900\n            hover:bg-yellow-100\n            hover:text-yellow-600\n            transition-colors\n            duration-300\n          "},{default:Object(r["B"])((function(){return[_]})),_:1}))])]))])}var $=n("1da1"),R=(n("96cf"),{data:function(){return{waitResponse:!1}},mounted:function(){var e=this;return Object($["a"])(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("Header mounted"),n=localStorage.getItem("loginToken"),null!==n){t.next=4;break}return t.abrupt("return");case 4:return r={api:"loginWithToken",loginToken:n},console.log("token exists",r),e.$store.state.waitingLogin=!0,e.waitResponse=!0,t.next=10,e.$store.callAsync(r);case 10:if(o=t.sent,e.waitResponse=!1,e.$store.state.waitingLogin=!1,100==o.code){t.next=19;break}if(console.log("loginWithToken ng",o.message),-2!=o.code){t.next=18;break}return localStorage.setItem("loginToken",null),t.abrupt("return");case 18:return t.abrupt("return");case 19:console.log("loginWithToken ok",o),e.$store.commit("setUser",o.user);case 21:case"end":return t.stop()}}),t)})))()}});R.render=T;var N=R,A={class:"px-2"},L=Object(r["f"])('<div class="flex justify-between"><div></div><div class="inline-flex m-2"><a href="https://www.roblox.com/users/2435364718/profile"><img src="images/logo_roblox.png" class="h-6 rounded-full"></a><a href="https://twitter.com/GMetaverse"><img src="images/logo_twitter.png" class="h-6 rounded-full"></a><a href="https://github.com/GoToTheMetaverse"><img src="images/logo_github.png" class="h-6 rounded-full"></a><a href="https://www.youtube.com/channel/UC0cgLnazriprrSpdD4I05QQ"><img src="images/logo_youtube.png" class="h-6 rounded-full"></a></div></div><div class="m-2 text-xs text-right text-gray-600"> vue.js / tailwind css / node.js / firebase / azure / mysql<br> GoToTheMetaverse@gmail.com </div><div class="text-xs">Copyright 2021 matebusgo</div>',3);function M(e,t){return Object(r["q"])(),Object(r["d"])("div",A,[L])}const q={};q.render=M;var S=q,U={name:"App",components:{Header:N,Footer:S},data:function(){return{mobule_menu_on:!1}},computed:{mobule_menu_class:function(){return this.mobule_menu_on?"":"hidden"},mobule_menu_class_ng:function(){return this.mobule_menu_on?"hidden":""}},mounted:function(){},methods:{onMobuleMenuToggle:function(){this.mobule_menu_on=!this.mobule_menu_on}}};n("91d3");U.render=p;var C=U,I=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),B=(n("b0c0"),{class:"home"}),D={key:0},E=Object(r["h"])("div",null,"타일을 만들 수 있고",-1),H=Object(r["h"])("div",null,"(제작중) 내 그림에 타일을 불일 수 있습니다.",-1),z=Object(r["h"])("div",null,"(제작중) 내 그림에 다른 유저의 타일도 붙일 수 있습니다.",-1),G=Object(r["h"])("div",null,[Object(r["g"])(" 현재는 guest 계정을 이용중입니다. "),Object(r["h"])("br"),Object(r["g"])(" 데이터가 삭제되거나 변경될 수 있으니 저장이 필요하시면 가입을 해주세요 ")],-1),W={key:1,class:"py-2"},F={class:"px-2 py-1"},J={class:"px-2 py-1"},Q={class:"flex py-2"},V=Object(r["h"])("div",{class:"flex py-2"},null,-1),X={class:"text-red-600"};function K(e,t,n,o,c,i){return Object(r["q"])(),Object(r["d"])("div",B,[e.$store.getters.isLogin?Object(r["e"])("",!0):(Object(r["q"])(),Object(r["d"])("div",D,[E,H,z,G])),c.loadingPicture?(Object(r["q"])(),Object(r["d"])("div",W,[(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["u"])(e.$store.state.listPicture,(function(e){return Object(r["q"])(),Object(r["d"])("div",{key:e.uid,class:"flex py-1"},[Object(r["h"])("div",F,Object(r["x"])(e.uid),1),Object(r["h"])("div",J,Object(r["x"])(e.name),1),Object(r["h"])("button",{class:"px-2 py-1 bg-indigo-600 text-white",onClick:function(t){return i.onEdit(e.uid)}}," 수정 ",8,["onClick"]),Object(r["h"])("button",{class:"px-2 py-1 bg-red-600 text-white",onClick:function(t){return i.onDelete(e.uid)}}," X ",8,["onClick"])])})),128)),Object(r["h"])("div",Q,[Object(r["C"])(Object(r["h"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.inputPictureName=e}),class:"px-2 py-1 border-2 border-black"},null,512),[[r["z"],c.inputPictureName]]),Object(r["h"])("button",{class:"px-2 py-1 bg-indigo-600 text-white",onClick:t[2]||(t[2]=function(e){return i.onAdd()})}," 추가 ")]),V])):Object(r["e"])("",!0),Object(r["h"])("div",X,Object(r["x"])(c.errorMessage),1)])}var Y={name:"Home",data:function(){return{loading:!1,errorMessage:"",loadingPicture:!1,inputPictureName:"",loadingAddName:!1,loadingDelete:!1}},mounted:function(){var e=this;return Object($["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("Home mounted"),null!==e.$store.state.listPicture){t.next=23;break}case 2:if(!e.$store.state.waitingLogin){t.next=8;break}return console.log("login wait"),t.next=6,e.$store.wait(.1);case 6:t.next=2;break;case 8:return n={api:"getPictureList",loginToken:localStorage.getItem("loginToken"),userUid:e.$store.getters.userUid},e.loading=!0,t.next=12,e.$store.callAsync(n);case 12:if(r=t.sent,e.loading=!1,100==r.code){t.next=18;break}return console.log("getPictureList fail",r),e.errorMessage=r.message,t.abrupt("return");case 18:console.log("getPictureList ok",n,r),e.$store.commit("setListPicture",r.listPicture),e.loadingPicture=!0,t.next=24;break;case 23:e.loadingPicture=!0;case 24:case"end":return t.stop()}}),t)})))()},methods:{onAdd:function(){var e=this;return Object($["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.loadingAddName){t.next=2;break}return t.abrupt("return");case 2:return n={api:"addPicture",loginToken:localStorage.getItem("loginToken"),userUid:e.$store.getters.userUid,inputName:e.inputPictureName},e.loadingAddName=!0,t.next=6,e.$store.callAsync(n);case 6:if(r=t.sent,e.loadingAddName=!1,100==r.code){t.next=11;break}return e.errorMessage=r.message,t.abrupt("return");case 11:e.$store.commit("addPicture",r.newPicture),e.inputPictureName="";case 13:case"end":return t.stop()}}),t)})))()},onEdit:function(e){var t=this;return Object($["a"])(regeneratorRuntime.mark((function n(){var r,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("onEdit",e),r=null,o=0;case 3:if(!(o<t.$store.state.listPicture.length)){n.next=11;break}if(c=t.$store.state.listPicture[o],c.uid===e){n.next=7;break}return n.abrupt("continue",8);case 7:r=c;case 8:o++,n.next=3;break;case 11:if(null!==r){n.next=14;break}return console.log("not found pic",e),n.abrupt("return");case 14:t.$router.push("/editpic/".concat(r.uid));case 15:case"end":return n.stop()}}),n)})))()},onDelete:function(e){var t=this;return Object($["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log("onDelete",e),r={api:"delPicture",loginToken:localStorage.getItem("loginToken"),userUid:t.$store.getters.userUid,picUid:e},console.log("delPicture req",r),t.loadingAddName=!0,n.next=6,t.$store.callAsync(r);case 6:if(o=n.sent,t.loadingAddName=!1,console.log("delPicture res",o),100==o.code){n.next=12;break}return t.errorMessage=o.message,n.abrupt("return");case 12:t.$store.commit("delPicture",e),t.inputPictureName="";case 14:case"end":return n.stop()}}),n)})))()}}};Y.render=K;var Z=Y,ee=[{path:"/",name:"Home",component:Z},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/test",name:"Test",component:function(){return n.e("chunk-2d0d7fc5").then(n.bind(null,"78c1"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-2d2086b7").then(n.bind(null,"a55b"))}},{path:"/signup",name:"Signup",component:function(){return n.e("chunk-2d0b9f47").then(n.bind(null,"34c3"))}},{path:"/welcome",name:"Welcome",component:function(){return n.e("chunk-2d2311c8").then(n.bind(null,"eec5"))}},{path:"/profile",name:"profile",component:function(){return n.e("chunk-2d217357").then(n.bind(null,"c66d"))}},{path:"/admin",name:"admin",component:function(){return n.e("chunk-eb163fe2").then(n.bind(null,"3530"))}},{path:"/editpic/:pic_uid",name:"editpic",component:function(){return n.e("chunk-2d22ca51").then(n.bind(null,"f3b0"))}}],te=Object(I["a"])({history:Object(I["b"])("/"),routes:ee}),ne=te,re=(n("a434"),n("25f0"),n("5502")),oe=n("bc3a"),ce=n.n(oe),ie="https://api.metabusgo.xyz/api",ue="https://api.metabusgo.xyz/upload";function ae(e,t){var n=ce.a.create();n.post(ie,e).then((function(e){void 0!==e.data.code?t(e.data):t({code:-1,message:"no data"})})).catch((function(e){t({code:-1,message:"catch:".concat(e.message)})}))}function se(e){return le.apply(this,arguments)}function le(){return le=Object($["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){ae(t,e)})));case 1:case"end":return e.stop()}}),e)}))),le.apply(this,arguments)}function de(e){return be.apply(this,arguments)}function be(){return be=Object($["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var n=Math.ceil(1e3*t);setTimeout((function(){e()}),n)})));case 1:case"end":return e.stop()}}),e)}))),be.apply(this,arguments)}var pe=Object(re["a"])({state:{user:{uid:0,id:"",name:""},userName:"guest",listPicture:null,waitingLogin:!1},actions:{},modules:{},getters:{isLogin:function(e){return 0!=e.user.uid},userName:function(e){return e.userName},userUid:function(e){return e.user.uid}},mutations:{setUser:function(e,t){e.user.uid=t.uid,e.user.id=t.id,e.user.name=t.name,e.userName=e.user.id,e.listPicture=null},clear:function(e){e.user.uid=0,e.user.id="",e.user.name="",e.userName=""},setListPicture:function(e,t){e.listPicture=t},addPicture:function(e,t){e.listPicture.push(t)},delPicture:function(e,t){for(var n=t,r=0;r<e.listPicture.length;r++)if(e.listPicture[r].uid===n){e.listPicture.splice(r,1);break}}}});pe.callAsync=se,pe.call=ae,pe.wait=de,pe.getLoginToken=function(){var e=localStorage.getItem("loginToken");return e},pe.getApiUrl=function(){return ie},pe.uploadAsync=function(){var e=Object($["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var n=ce.a.create();n.post(ue,t).then((function(t){e(t.data)})).catch((function(t){e({code:-1,message:t.message})}))})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),pe.getGUID=function(){return Math.random().toString(36).substr(2,9)};var ge=pe,fe=(n("ba8c"),n("d842"));n("3c0b");Object(r["c"])(C).use(ge).use(ne).use(fe["a"]).mount("#app")},7751:function(e,t,n){e.exports=n.p+"img/logo-sm.656d51a9.png"},"91d3":function(e,t,n){"use strict";n("196a")},ba8c:function(e,t,n){}});
//# sourceMappingURL=app.d1ef1e3e.js.map