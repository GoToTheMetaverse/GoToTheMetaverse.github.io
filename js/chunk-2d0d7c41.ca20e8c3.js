(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7c41"],{"77e0":function(e,t,r){"use strict";r.r(t);r("b0c0");var n=r("7a23"),i={class:"home"},c={key:0},a=Object(n["h"])("div",null,"타일을 만들 수 있고",-1),o=Object(n["h"])("div",null,"(제작중) 내 그림에 타일을 불일 수 있습니다.",-1),s=Object(n["h"])("div",null,"(제작중) 내 그림에 다른 유저의 타일도 붙일 수 있습니다.",-1),u=Object(n["h"])("div",null,[Object(n["g"])(" 현재는 guest 계정을 이용중입니다. "),Object(n["h"])("br"),Object(n["g"])(" 데이터가 삭제되거나 변경될 수 있으니 저장이 필요하시면 가입을 해주세요 ")],-1),l={key:1},d=Object(n["f"])('<div class="py-2">내가 찍은 도트</div><div class="flex justify-between p-1"><div class="w-16">번호</div><div class="w-48">이름</div><div class="w-16">기능</div><div class="w-10">삭제</div></div>',2),b={class:"w-16 px-2 py-1"},g={class:"w-48 px-2 py-1"},p={class:"flex justify-center p-1 m-1"},m=Object(n["h"])("div",{class:"p-1"},"이름:",-1),j={class:"text-red-600"};function f(e,t,r,f,v,O){return Object(n["q"])(),Object(n["d"])("div",i,[e.$store.getters.isLogin?Object(n["e"])("",!0):(Object(n["q"])(),Object(n["d"])("div",c,[a,o,s,u])),v.loadingPicture?(Object(n["q"])(),Object(n["d"])("div",l,[d,(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["u"])(e.$store.state.listPicture,(function(e){return Object(n["q"])(),Object(n["d"])("div",{key:e.uid,class:"flex justify-between p-1"},[Object(n["h"])("div",b,Object(n["x"])(e.uid),1),Object(n["h"])("div",g,Object(n["x"])(e.name),1),Object(n["h"])("button",{class:"w-16 px-2 py-1 bg-indigo-600 text-white",onClick:function(t){return O.onEdit(e.uid)}}," 수정 ",8,["onClick"]),Object(n["h"])("button",{class:"w-10 px-2 py-1 bg-red-600 text-white",onClick:function(t){return O.onDelete(e.uid)}}," X ",8,["onClick"])])})),128)),Object(n["h"])("div",p,[m,Object(n["C"])(Object(n["h"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return v.inputPictureName=e}),class:"p-1 border-2 border-black"},null,512),[[n["z"],v.inputPictureName]]),Object(n["h"])("button",{class:"px-2 py-1 bg-indigo-600 text-white",onClick:t[2]||(t[2]=function(e){return O.onAdd()})}," 추가 ")])])):Object(n["e"])("",!0),Object(n["h"])("div",j,Object(n["x"])(v.errorMessage),1)])}var v=r("1da1"),O=(r("96cf"),{name:"Home",data:function(){return{loading:!1,errorMessage:"",loadingPicture:!1,inputPictureName:"",loadingAddName:!1,loadingDelete:!1}},mounted:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("Home mounted"),null!==e.$store.state.listPicture){t.next=17;break}return r={api:"getPictureList",loginToken:localStorage.getItem("loginToken"),userUid:e.$store.getters.userUid},e.loading=!0,t.next=6,e.$store.callAsync(r);case 6:if(n=t.sent,e.loading=!1,100==n.code){t.next=12;break}return console.log("getPictureList fail",n),e.errorMessage=n.message,t.abrupt("return");case 12:console.log("getPictureList ok",r,n),e.$store.commit("setListPicture",n.listPicture),e.loadingPicture=!0,t.next=18;break;case 17:e.loadingPicture=!0;case 18:case"end":return t.stop()}}),t)})))()},methods:{onAdd:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.loadingAddName){t.next=2;break}return t.abrupt("return");case 2:return r={api:"addPicture",loginToken:localStorage.getItem("loginToken"),userUid:e.$store.getters.userUid,inputName:e.inputPictureName},e.loadingAddName=!0,t.next=6,e.$store.callAsync(r);case 6:if(n=t.sent,e.loadingAddName=!1,100==n.code){t.next=11;break}return e.errorMessage=n.message,t.abrupt("return");case 11:e.$store.commit("addPicture",n.newPicture),e.inputPictureName="";case 13:case"end":return t.stop()}}),t)})))()},onEdit:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function r(){var n,i,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:console.log("onEdit",e),n=null,i=0;case 3:if(!(i<t.$store.state.listPicture.length)){r.next=11;break}if(c=t.$store.state.listPicture[i],c.uid===e){r.next=7;break}return r.abrupt("continue",8);case 7:n=c;case 8:i++,r.next=3;break;case 11:if(null!==n){r.next=14;break}return console.log("not found pic",e),r.abrupt("return");case 14:t.$router.push("/pic/edit/".concat(n.uid));case 15:case"end":return r.stop()}}),r)})))()},onDelete:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function r(){var n,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log("onDelete",e),n={api:"delPicture",loginToken:localStorage.getItem("loginToken"),userUid:t.$store.getters.userUid,picUid:e},console.log("delPicture req",n),t.loadingAddName=!0,r.next=6,t.$store.callAsync(n);case 6:if(i=r.sent,t.loadingAddName=!1,console.log("delPicture res",i),100==i.code){r.next=12;break}return t.errorMessage=i.message,r.abrupt("return");case 12:t.$store.commit("delPicture",e),t.inputPictureName="";case 14:case"end":return r.stop()}}),r)})))()}}});O.render=f;t["default"]=O}}]);
//# sourceMappingURL=chunk-2d0d7c41.ca20e8c3.js.map