(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bd1c7"],{"2b34":function(e,t,s){"use strict";s.r(t);var i=s("7a23"),l={class:"rounded-lg bg-white p-2"},r=Object(i["h"])("div",{class:"pb-2"},"wall visit home",-1),c={key:0,class:"grid md:grid-cols-4 grid-cols-2 gap-2"},n={class:"flex space-x-3 items-center"},a={class:"text-left font-bold"},o={class:"text-gray-600 text-sm"},d={key:0,class:"w-6 h-6",src:"/images/hero-gift.svg"},u={class:"text-xs text-left"};function b(e,t,s,b,g,h){return Object(i["q"])(),Object(i["d"])("div",l,[r,g.listWallVisit.length>0?(Object(i["q"])(),Object(i["d"])("div",c,[(Object(i["q"])(!0),Object(i["d"])(i["a"],null,Object(i["w"])(g.listWallVisit,(function(t){return Object(i["q"])(),Object(i["d"])("div",{class:"rounded-lg shadow-xl overflow-hidden",key:t.rid},[Object(i["h"])("button",{onClick:function(e){return h.onClick(t.rid)}},[Object(i["h"])("img",{class:"w-full h-64 object-cover",src:e.$store.makePicUrl(t.wall_url)},null,8,["src"])],8,["onClick"]),Object(i["h"])("div",n,[Object(i["h"])("div",a,Object(i["z"])(t.wall_name),1),Object(i["h"])("div",o,Object(i["z"])(t.user_name),1),t.is_send?(Object(i["q"])(),Object(i["d"])("img",d)):Object(i["e"])("",!0)]),Object(i["h"])("div",u,Object(i["z"])(e.$store.getAgo(t.last_edit)),1)])})),128))])):Object(i["e"])("",!0)])}var g=s("1da1"),h=(s("96cf"),s("159b"),{data:function(){return{loading:!1,errorMessage:"",listWallVisit:[]}},mounted:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s={api:"getWallVisitList",userUid:e.$store.getters.userUid},e.loading=!0,t.next=4,e.$store.callAsync(s);case 4:if(i=t.sent,e.loading=!1,100==i.code){t.next=10;break}return console.log("getWallList fail",i),e.errorMessage=i.message,t.abrupt("return");case 10:console.log("getWallVisitList ok",s,i),e.listWallVisit=[],i.listWallVisit.forEach((function(t){console.log("row",t),e.listWallVisit.push({rid:t.rid,wall_name:t.wall_name,wall_url:t.wall_url,last_edit:e.$store.getMoment(t.dt_edit),user_name:t.user_name,is_send:t.is_send})}));case 13:case"end":return t.stop()}}),t)})))()},methods:{onClick:function(e){this.$router.push("/visit/".concat(e))}}});h.render=b;t["default"]=h}}]);
//# sourceMappingURL=chunk-2d0bd1c7.2fd1c468.js.map