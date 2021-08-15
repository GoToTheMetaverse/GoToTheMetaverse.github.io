(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-793e5296"],{"96d3":function(e,t,i){"use strict";i.r(t);var r=i("7a23"),n={class:"tw-rounded bg-white"},c={class:"flex justify-center"},a={class:"w-full py-2 md:px-5"},s={class:"flex justify-between items-center px-3 md:p-0"},o=Object(r["h"])("img",{src:"/images/hero-back.svg",alt:"back"},null,-1),u={key:0,class:"mx-2 text-2xl"},d=Object(r["h"])("img",{class:"w-6 h-6",src:"/images/hero-edit.svg"},null,-1),m={key:3},l=Object(r["h"])("img",{class:"w-8 h-8",src:"/images/hero-confirm-outline.svg"},null,-1),g=Object(r["h"])("img",{class:"w-8 h-8",src:"/images/hero-x-outline.svg"},null,-1),p={key:0,class:"text-red-600 pb-2"},b={class:"pb-0 md:pb-5 px-0 md:px-5"},f={class:"flex justify-center item-start"};function h(e,t,i,h,k,j){return Object(r["q"])(),Object(r["d"])("div",n,[Object(r["h"])("div",c,[Object(r["h"])("div",a,[Object(r["h"])("div",s,[Object(r["h"])("button",{class:"w-6 h-6 mr-2",onClick:t[1]||(t[1]=function(t){return e.$router.back()})},[o]),k.isEditingPicName?Object(r["e"])("",!0):(Object(r["q"])(),Object(r["d"])("div",u,Object(r["z"])(k.picName),1)),!k.isEditingPicName&&k.picName.length>0?(Object(r["q"])(),Object(r["d"])("button",{key:1,class:"px-2 mx-2",onClick:t[2]||(t[2]=function(e){return j.onEditName()})},[d])):Object(r["e"])("",!0),k.isEditingPicName?Object(r["F"])((Object(r["q"])(),Object(r["d"])("input",{key:2,class:"rounded-lg border-2 border-black px-2","onUpdate:modelValue":t[3]||(t[3]=function(e){return k.inputPicName=e})},null,512)),[[r["C"],k.inputPicName]]):Object(r["e"])("",!0),k.isEditingPicName?(Object(r["q"])(),Object(r["d"])("div",m,[Object(r["h"])("button",{onClick:t[4]||(t[4]=function(e){return j.onEditPicNameConfirm()}),class:"ml-2"},[l]),Object(r["h"])("button",{onClick:t[5]||(t[5]=function(e){return j.onEditPicNameCancel()}),class:"ml-2"},[g])])):Object(r["e"])("",!0)])])]),k.errorMessage.length>0?(Object(r["q"])(),Object(r["d"])("div",p,Object(r["z"])(k.errorMessage),1)):Object(r["e"])("",!0),Object(r["h"])("div",b,[Object(r["h"])("div",f,[Object(r["h"])("iframe",{class:"tw-rounded overflow-hidden",ref:"myiframe",src:"/kbEditPic/main.html",width:k.frameWidth,height:k.frameHeight,scrolling:"no",frameborder:"0"},"\n        ",8,["width","height"])])])])}var k=i("1da1"),j=(i("d3b7"),i("25f0"),i("a15b"),i("96cf"),{data:function(){return{picUid:0,picName:"",loadingPic:!1,loadingSuccess:!1,errorMessage:"",frameWidth:"100%",frameHeight:"100%",isEditingPicName:!1,inputPicName:"",loadingEditPicName:!1,iframeWin:null}},mounted:function(){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.iframeWin=e.$refs.myiframe.contentWindow,e.picUid=parseInt(e.$route.params.picUid,10),window.addEventListener("message",e.procMessage);case 3:case"end":return t.stop()}}),t)})))()},unmounted:function(){window.removeEventListener("message",this.procMessage)},methods:{tilesToText:function(e){for(var t=[],i=0;i<e.length;i++){var r=e[i].toString(16);t.push(0==r?" ":r)}return t.join("")},procMessage:function(e){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function i(){var r,n,c,a,s,o,u,d,m,l;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(void 0!==e.data.cmd){i.next=2;break}return i.abrupt("return");case 2:if(!(e.data.cmd.indexOf("kbEditPic")<0)){i.next=4;break}return i.abrupt("return");case 4:if(r=e.data,"kbEditPic.loadingComplete"!=r.cmd){i.next=22;break}return i.next=8,t.$store.wait(1e3);case 8:return n={api:"getPicture",loginToken:localStorage.getItem("loginToken"),userUid:t.$store.getters.userUid,picUid:t.picUid},i.next=11,t.$store.callAsync(n);case 11:if(c=i.sent,100==c.code){i.next=15;break}return t.errorMessage=c.message,i.abrupt("return");case 15:for(t.picName=c.picture.pic_name,a=[],s=0;s<256;s++)a.push(0);for(o=0;o<c.picture.pic_data.length;o++)u=c.picture.pic_data[o],a[o]=" "==u?0:parseInt(u,16);t.$store.postMessage(t.iframeWin,{cmd:"kbEditPic.firstData",tiles:a}),i.next=53;break;case 22:if("kbEditPic.frameSize"!=r.cmd){i.next=27;break}t.frameWidth=r.w,t.frameHeight=r.h,i.next=53;break;case 27:if("kbEditPic.save"!=r.cmd){i.next=52;break}return console.log("savePicture try"),i.next=31,t.$store.wait(1e3);case 31:return d={api:"savePicture",loginToken:localStorage.getItem("loginToken"),userUid:t.$store.getters.userUid,picUid:t.picUid,colors:r.colors,picTileText:t.tilesToText(r.tiles)},i.next=34,t.$store.callAsync(d);case 34:if(m=i.sent,l={cmd:"kbEditPic.saveComplete"},-5!=m.code){i.next=42;break}return console.log("savePicture skip"),t.$store.postMessage(t.iframeWin,l),i.abrupt("return");case 42:if(100==m.code){i.next=47;break}return console.log("savePicture ng",m.message),t.errorMessage=m.message,t.$store.postMessage(t.iframeWin,l),i.abrupt("return");case 47:console.log("savePicture ok"),t.$store.commit("updatePicture",m.picture),t.$store.postMessage(t.iframeWin,l),i.next=53;break;case 52:console.error("EditPic unknown cmd",r.cmd);case 53:case"end":return i.stop()}}),i)})))()},onEditName:function(){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.isEditingPicName=!0,e.inputPicName=e.picName;case 2:case"end":return t.stop()}}),t)})))()},onEditPicNameConfirm:function(){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function t(){var i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i={api:"updatePictureName",loginToken:localStorage.getItem("loginToken"),userUid:e.$store.getters.userUid,picUid:e.picUid,newPicName:e.inputPicName},console.log("onEditPicNameConfirm",i),e.errorMessage="",e.loadingEditName=!0,t.next=6,e.$store.callAsync(i);case 6:if(r=t.sent,e.loadingEditName=!1,100==r.code){t.next=11;break}return e.errorEditName=r.message,t.abrupt("return");case 11:console.log("onEditPicNameConfirm res",r),e.$store.commit("updatePicture",{rid:e.picUid,pic_name:r.newPicName}),e.picName=r.newPicName,e.isEditingPicName=!1;case 15:case"end":return t.stop()}}),t)})))()},onEditPicNameCancel:function(){this.isEditingPicName=!1}}});j.render=h;t["default"]=j},a15b:function(e,t,i){"use strict";var r=i("23e7"),n=i("44ad"),c=i("fc6a"),a=i("a640"),s=[].join,o=n!=Object,u=a("join",",");r({target:"Array",proto:!0,forced:o||!u},{join:function(e){return s.call(c(this),void 0===e?",":e)}})},a640:function(e,t,i){"use strict";var r=i("d039");e.exports=function(e,t){var i=[][e];return!!i&&r((function(){i.call(null,t||function(){throw 1},1)}))}}}]);
//# sourceMappingURL=chunk-793e5296.1d23fd78.js.map