(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-edf1807c"],{"159b":function(e,t,r){var n=r("da84"),a=r("fdbc"),i=r("17c2"),c=r("9112");for(var s in a){var o=n[s],l=o&&o.prototype;if(l&&l.forEach!==i)try{c(l,"forEach",i)}catch(u){l.forEach=i}}},"17c2":function(e,t,r){"use strict";var n=r("b727").forEach,a=r("a640"),i=a("forEach");e.exports=i?[].forEach:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}},"80f9":function(e,t,r){"use strict";r.r(t);r("b0c0");var n=r("7a23"),a={class:"tw-rounded bg-white mb-2"},i={class:"flex justify-center"},c={class:"w-full py-2 md:px-5"},s={class:"flex justify-between items-center px-3 md:p-0"},o=Object(n["h"])("img",{src:"/images/hero-back.svg",alt:"back"},null,-1),l={key:0,class:"mx-2 text-2xl"},u=Object(n["h"])("img",{class:"w-6 h-6",src:"/images/hero-edit.svg"},null,-1),d={key:3},m=Object(n["h"])("img",{class:"w-8 h-8",src:"/images/hero-confirm-outline.svg"},null,-1),h=Object(n["h"])("img",{class:"w-8 h-8",src:"/images/hero-x-outline.svg"},null,-1),b={key:0,class:"text-red-600 pb-2"},g={class:"pb-0 md:pb-5 px-0 md:px-5"},f={class:"flex justify-center item-start"},p={class:"tw-rounded bg-white p-2"},w={class:"mb-2 flex justify-center items-center"},j=Object(n["h"])("div",null,"내꺼만 표시",-1),O={key:0,class:"mb-2 flex justify-center"},k={class:"grid grid-cols-3 gap-1 px-2"},v={class:"font-bold"};function x(e,t,r,x,E,S){return Object(n["q"])(),Object(n["d"])(n["a"],null,[Object(n["h"])("div",a,[Object(n["h"])("div",i,[Object(n["h"])("div",c,[Object(n["h"])("div",s,[Object(n["h"])("button",{class:"w-6 h-6 mr-2",onClick:t[1]||(t[1]=function(t){return e.$router.back()})},[o]),E.isEditingName?Object(n["e"])("",!0):(Object(n["q"])(),Object(n["d"])("div",l,Object(n["z"])(E.name),1)),!E.isEditingName&&E.name.length>0?(Object(n["q"])(),Object(n["d"])("button",{key:1,class:"px-2 mx-2",onClick:t[2]||(t[2]=function(e){return S.onEditName()})},[u])):Object(n["e"])("",!0),E.isEditingName?Object(n["F"])((Object(n["q"])(),Object(n["d"])("input",{key:2,class:"rounded-lg border-2 border-black px-2","onUpdate:modelValue":t[3]||(t[3]=function(e){return E.inputName=e})},null,512)),[[n["C"],E.inputName]]):Object(n["e"])("",!0),E.isEditingName?(Object(n["q"])(),Object(n["d"])("div",d,[Object(n["h"])("button",{onClick:t[4]||(t[4]=function(e){return S.onEditNameConfirm()}),class:"ml-2"},[m]),Object(n["h"])("button",{onClick:t[5]||(t[5]=function(t){return e.onEditNameCancel()}),class:"ml-2"},[h])])):Object(n["e"])("",!0)])])]),E.errorMessage.length>0?(Object(n["q"])(),Object(n["d"])("div",b,Object(n["z"])(E.errorMessage),1)):Object(n["e"])("",!0),Object(n["h"])("div",g,[Object(n["h"])("div",f,[Object(n["h"])("iframe",{class:"tw-rounded overflow-hidden",ref:"myiframe",src:"/kbEditWall/main.html",width:E.frameWidth,height:E.frameHeight,scrolling:"no",frameborder:"0"},"\n        ",8,["width","height"])])])]),Object(n["h"])("div",p,[Object(n["h"])("div",w,[Object(n["F"])(Object(n["h"])("input",{class:"w-4 h-4 mr-2",type:"checkbox","onUpdate:modelValue":t[6]||(t[6]=function(e){return E.isShowMine=e})},null,512),[[n["B"],E.isShowMine]]),j]),E.isShowMine?Object(n["e"])("",!0):(Object(n["q"])(),Object(n["d"])("div",O,[Object(n["F"])(Object(n["h"])("input",{class:"mr-2 px-2 rounded-lg border-2 border-black","onUpdate:modelValue":t[7]||(t[7]=function(e){return E.inputSearch=e})},null,512),[[n["C"],E.inputSearch]]),E.loadingSearch?Object(n["e"])("",!0):(Object(n["q"])(),Object(n["d"])("button",{key:0,class:"px-4 py-1 rounded-lg bg-indigo-600 text-white",onClick:t[8]||(t[8]=function(e){return S.onSearch()})}," 검색 "))])),Object(n["h"])("div",k,[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["w"])(S.listPic,(function(t){return Object(n["q"])(),Object(n["d"])("div",{class:"w-24",key:t.rid,onClick:function(e){return S.onSearchSelect(t)}},[Object(n["h"])("img",{class:"h-24",src:e.$store.makePicUrl(t.pic_url)},null,8,["src"]),Object(n["h"])("div",v,Object(n["z"])(t.pic_name),1)],8,["onClick"])})),128))]),E.isSearchMore?(Object(n["q"])(),Object(n["d"])("button",{key:1,class:"px-4 py-1 rounded-lg bg-indigo-600 text-white",onClick:t[9]||(t[9]=function(e){return S.onSearchMore()})}," 더보기 ")):Object(n["e"])("",!0)])],64)}var E=r("1da1"),S=(r("159b"),r("96cf"),{data:function(){return{iframeWin:null,wallRid:0,name:"",loading:!1,loadingSuccess:!1,errorMessage:"",frameWidth:"100%",frameHeight:"100%",isEditingName:!1,inputName:"",loadingEditName:!1,isShowMine:!0,inputSearch:"",loadingSearch:!1,errorMessageSearch:"",isSearchMore:!1,searchDatas:[]}},mounted:function(){var e=this;return Object(E["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("WallEdit mounted"),e.iframeWin=e.$refs.myiframe.contentWindow,e.wallRid=parseInt(e.$route.params.rid,10),e.searchDatas=[],window.addEventListener("message",e.procMessage);case 5:case"end":return t.stop()}}),t)})))()},unmounted:function(){window.removeEventListener("message",this.procMessage)},computed:{listPic:function(){if(this.isShowMine){if(Array.isArray(this.$store.state.listPicture)){var e=[];return this.$store.state.listPicture.forEach((function(t){""!=t.pic_url&&e.push(t)})),e}return[]}return this.searchDatas}},methods:{procMessage:function(e){var t=this;return Object(E["a"])(regeneratorRuntime.mark((function r(){var n,a,i,c,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(void 0!==e.data.cmd){r.next=2;break}return r.abrupt("return");case 2:if(!(e.data.cmd.indexOf("kbEditWall")<0)){r.next=4;break}return r.abrupt("return");case 4:if(n=e.data,console.log("WallEdit.vue procMessage",n),"kbEditWall.loadingComplete"!=n.cmd){r.next=21;break}return r.next=9,t.$store.wait(1e3);case 9:return a={api:"getWall",loginToken:localStorage.getItem("loginToken"),userUid:t.$store.getters.userUid,wallRid:t.wallRid,needPic:null===t.$store.state.listPicture},r.next=12,t.$store.callAsync(a);case 12:if(i=r.sent,100==i.code){r.next=16;break}return t.errorMessage=i.message,r.abrupt("return");case 16:console.log("getWall res",i),t.name=i.wall.wall_name,t.$store.postMessage(t.iframeWin,{cmd:"kbEditWall.firstData",wall_data:i.wall.wall_data}),r.next=42;break;case 21:if("kbEditWall.frameSize"!=n.cmd){r.next=27;break}console.log("frameSize",n.w,n.h),t.frameWidth=n.w,t.frameHeight=n.h,r.next=42;break;case 27:if("kbEditWall.save"!=n.cmd){r.next=41;break}return console.log("kbEditWall.save",n),r.next=31,t.$store.wait(1e3);case 31:return c={api:"saveWall",loginToken:localStorage.getItem("loginToken"),userUid:t.$store.getters.userUid,wallRid:t.wallRid,width:n.width,height:n.height,arrid:n.arrid,arrimg:n.arrimg},r.next=34,t.$store.callAsync(c);case 34:if(s=r.sent,100==s.code){r.next=38;break}return t.errorMessage=s.message,r.abrupt("return");case 38:t.$store.postMessage(t.iframeWin,{cmd:"kbEditWall.saveComplete"}),r.next=42;break;case 41:console.error("WallEdit unknown cmd",n.cmd);case 42:case"end":return r.stop()}}),r)})))()},onEditName:function(){var e=this;return Object(E["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.isEditingName=!0,e.inputName=e.name;case 2:case"end":return t.stop()}}),t)})))()},onEditNameConfirm:function(){var e=this;return Object(E["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={api:"updateWallName",loginToken:localStorage.getItem("loginToken"),userUid:e.$store.getters.userUid,wallRid:e.wallRid,newWallName:e.inputName},console.log("onEditNameConfirm",r),e.errorMessage="",e.loadingEditName=!0,t.next=6,e.$store.callAsync(r);case 6:if(n=t.sent,e.loadingEditName=!1,100==n.code){t.next=11;break}return e.errorEditName=n.message,t.abrupt("return");case 11:console.log("onEditNameConfirm res",n),e.$store.commit("updateWall",{rid:e.wallRid,wall_name:n.newWallName}),e.name=n.newWallName,e.isEditingName=!1;case 15:case"end":return t.stop()}}),t)})))()},onEditPicNameCancel:function(){this.isEditingName=!1},onSearch:function(){var e=this;return Object(E["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={api:"searchImage",loginToken:localStorage.getItem("loginToken"),userUid:e.$store.getters.userUid,inputSearch:e.inputSearch},console.log("onSearch req",r),e.errorMessageSearch="",e.isSearchMore=!1,e.loadingSearch=!0,t.next=7,e.$store.callAsync(r);case 7:if(n=t.sent,e.loadingSearch=!1,100==n.code){t.next=12;break}return e.errorMessageSearch=n.message,t.abrupt("return");case 12:console.log("onSearch res",n),e.searchDatas=n.searchDatas,e.isSearchMore=n.isSearchMore;case 15:case"end":return t.stop()}}),t)})))()},onSearchMore:function(){},onSearchSelect:function(e){console.log("onClickSearch",e),this.$store.postMessage(this.iframeWin,{cmd:"kbEditWall.addImage",id:e.rid,url:e.pic_url})}}});S.render=x;t["default"]=S},a640:function(e,t,r){"use strict";var n=r("d039");e.exports=function(e,t){var r=[][e];return!!r&&n((function(){r.call(null,t||function(){throw 1},1)}))}},b727:function(e,t,r){var n=r("0366"),a=r("44ad"),i=r("7b0b"),c=r("50c4"),s=r("65f0"),o=[].push,l=function(e){var t=1==e,r=2==e,l=3==e,u=4==e,d=6==e,m=7==e,h=5==e||d;return function(b,g,f,p){for(var w,j,O=i(b),k=a(O),v=n(g,f,3),x=c(k.length),E=0,S=p||s,y=t?S(b,x):r||m?S(b,0):void 0;x>E;E++)if((h||E in k)&&(w=k[E],j=v(w,E,O),e))if(t)y[E]=j;else if(j)switch(e){case 3:return!0;case 5:return w;case 6:return E;case 2:o.call(y,w)}else switch(e){case 4:return!1;case 7:o.call(y,w)}return d?-1:l||u?u:y}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}}}]);
//# sourceMappingURL=chunk-edf1807c.bb28e3a1.js.map