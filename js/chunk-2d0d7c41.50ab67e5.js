(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7c41"],{"77e0":function(e,t,r){"use strict";r.r(t);var n=r("7a23"),c={class:"rounded-lg bg-indigo-200 p-2"},i={key:0},o=Object(n["h"])("div",null,"타일을 만들 수 있고",-1),s=Object(n["h"])("div",null,"(제작중) 내 그림에 타일을 불일 수 있습니다.",-1),a=Object(n["h"])("div",null,"(제작중) 내 그림에 다른 유저의 타일도 붙일 수 있습니다.",-1),l=Object(n["h"])("div",null,[Object(n["g"])(" 현재는 guest 계정을 이용중입니다. "),Object(n["h"])("br"),Object(n["g"])(" guest 계정은 모든 방문자가 데이터를 같이 공유합니다. 데이터가 삭제되거나 변경될 수 있으니 저장이 필요하시면 가입 해주세요 ")],-1),u={key:1},d=Object(n["h"])("div",{class:"pt-4 px-5"},[Object(n["h"])("div",{class:"p-2 rounded-lg bg-white font-bold text-2xl"},"내 타일")],-1),g={class:"py-4 px-5 grid gap-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2"},b={class:"w-full p-1"},p={class:"flex justify-end float-right"},j=Object(n["h"])("img",{src:"images/hero-x.svg"},null,-1),h={class:"flex justify-between"},m={class:"px-1 font-bold text-2xl"},O={class:"flex px-1"},f={class:"px-2 rounded-full bg-gray-600 text-white"},x={class:"px-5"},v={class:"flex justify-center items-center p-2 rounded-lg bg-white"},k=Object(n["h"])("div",{class:"p-1"},"새 타일 이름",-1),w={key:2,class:"pt-4 px-5"},P={class:"p-2 rounded-lg bg-white text-red-600 font-bold"};function $(e,t,r,$,y,N){return Object(n["q"])(),Object(n["d"])("div",c,[e.$store.getters.isLogin?Object(n["e"])("",!0):(Object(n["q"])(),Object(n["d"])("div",i,[o,s,a,l])),y.loadingPicture?(Object(n["q"])(),Object(n["d"])("div",u,[d,Object(n["h"])("div",g,[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["u"])(e.$store.state.listPicture,(function(t){return Object(n["q"])(),Object(n["d"])("div",{class:"flex bg-white rounded-lg overflow-hidden",key:t.rid},[Object(n["h"])("button",{class:"flex",onClick:function(e){return N.onEdit(t.rid)}},[Object(n["h"])("img",{class:"h-20",src:e.$store.makePicUrl(t.pic_url)},null,8,["src"])],8,["onClick"]),Object(n["h"])("div",b,[Object(n["h"])("div",p,[Object(n["h"])("button",{class:"w-6 h-6",onClick:function(e){return N.onDelete(t.rid)}},[j],8,["onClick"])]),Object(n["h"])("div",h,[Object(n["h"])("div",m,Object(n["x"])(t.pic_name),1)]),Object(n["h"])("div",O,[Object(n["h"])("div",f,[Object(n["h"])("small",null,Object(n["x"])(e.$store.getAgo(t.last_edit)),1)])])])])})),128))]),Object(n["e"])("",!0)])):Object(n["e"])("",!0),Object(n["h"])("div",x,[Object(n["h"])("div",v,[k,Object(n["C"])(Object(n["h"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return y.inputPictureName=e}),class:"mx-2 p-1 rounded-lg border-2 border-black"},null,512),[[n["z"],y.inputPictureName]]),Object(n["h"])("button",{class:"px-2 py-1 rounded-lg bg-indigo-600 text-white",onClick:t[2]||(t[2]=function(e){return N.onAdd()})}," 추가 ")])]),y.errorMessage.length>0?(Object(n["q"])(),Object(n["d"])("div",w,[Object(n["h"])("div",P,Object(n["x"])(y.errorMessage),1)])):Object(n["e"])("",!0)])}var y=r("1da1"),N=(r("96cf"),{name:"Home",data:function(){return{loading:!1,errorMessage:"",loadingPicture:!1,inputPictureName:"",loadingAddName:!1,loadingDelete:!1}},mounted:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("Home mounted"),null!==e.$store.state.listPicture){t.next=17;break}return r={api:"getPictureList",loginToken:localStorage.getItem("loginToken"),userUid:e.$store.getters.userUid},e.loading=!0,t.next=6,e.$store.callAsync(r);case 6:if(n=t.sent,e.loading=!1,100==n.code){t.next=12;break}return console.log("getPictureList fail",n),e.errorMessage=n.message,t.abrupt("return");case 12:console.log("getPictureList ok",r,n),e.$store.commit("setListPicture",n.listPicture),e.loadingPicture=!0,t.next=18;break;case 17:e.loadingPicture=!0;case 18:case"end":return t.stop()}}),t)})))()},methods:{onAdd:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.loadingAddName){t.next=2;break}return t.abrupt("return");case 2:return r={api:"addPicture",loginToken:localStorage.getItem("loginToken"),userUid:e.$store.getters.userUid,inputName:e.inputPictureName},console.log("addPicture req",n),e.loadingAddName=!0,t.next=7,e.$store.callAsync(r);case 7:if(n=t.sent,e.loadingAddName=!1,console.log("addPicture res",n),100==n.code){t.next=13;break}return e.errorMessage=n.message,t.abrupt("return");case 13:e.$store.commit("addPicture",n.newPicture),e.inputPictureName="";case 15:case"end":return t.stop()}}),t)})))()},onEdit:function(e){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function r(){var n,c,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:console.log("onEdit",e),n=null,c=0;case 3:if(!(c<t.$store.state.listPicture.length)){r.next=12;break}if(i=t.$store.state.listPicture[c],i.rid===e){r.next=7;break}return r.abrupt("continue",9);case 7:return n=i,r.abrupt("break",12);case 9:c++,r.next=3;break;case 12:if(null!==n){r.next=15;break}return console.log("not found pic",e),r.abrupt("return");case 15:t.$router.push("/pic/edit/".concat(n.rid));case 16:case"end":return r.stop()}}),r)})))()},onDelete:function(e){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function r(){var n,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log("onDelete",e),n={api:"delPicture",loginToken:localStorage.getItem("loginToken"),userUid:t.$store.getters.userUid,picUid:e},t.loadingAddName=!0,r.next=5,t.$store.callAsync(n);case 5:if(c=r.sent,t.loadingAddName=!1,100==c.code){r.next=10;break}return t.errorMessage=c.message,r.abrupt("return");case 10:t.$store.commit("delPicture",e),t.inputPictureName="";case 12:case"end":return r.stop()}}),r)})))()}}});N.render=$;t["default"]=N}}]);
//# sourceMappingURL=chunk-2d0d7c41.50ab67e5.js.map