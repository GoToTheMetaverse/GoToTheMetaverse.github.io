(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7de8"],{"793c":function(e,t,c){"use strict";c.r(t);var s=c("7a23"),n={class:"bg-white rounded-lg p-4 space-y-3"},i=Object(s["h"])("h1",null,"진행 상황",-1),r={class:"flex justify-center space-x-3"},o={key:0},d={key:1},l={key:2,class:"space-y-6"},b={key:0,class:"flex justify-center space-x-6"},j=Object(s["h"])("div",{class:"w-32 font-bold text-lg"},"할 일",-1),O={class:"w-64 text-left"},a={key:1,class:"flex justify-center space-x-6"},u=Object(s["h"])("div",{class:"w-32 font-bold text-lg"},"진행중",-1),g={class:"w-64 text-left"},f={key:2,class:"flex justify-center space-x-6"},h=Object(s["h"])("div",{class:"w-32 font-bold text-lg"},"완료",-1),v={class:"w-64 text-left"};function p(e,t,c,p,w,x){return Object(s["q"])(),Object(s["d"])("div",n,[i,Object(s["h"])("div",r,[Object(s["h"])("div",null,"할일: "+Object(s["z"])(e.$store.getters.progress.todo),1),Object(s["h"])("div",null,"진행중: "+Object(s["z"])(e.$store.getters.progress.doing),1),Object(s["h"])("div",null,"완료: "+Object(s["z"])(e.$store.getters.progress.done),1),Object(s["h"])("div",null,"진행율: ("+Object(s["z"])(e.$store.getters.progress.text)+")",1)]),w.loading?(Object(s["q"])(),Object(s["d"])("div",o,"작업중입니다.")):w.errorMessage.length>0?(Object(s["q"])(),Object(s["d"])("div",d)):(Object(s["q"])(),Object(s["d"])("div",l,[x.ListTodo.length>0?(Object(s["q"])(),Object(s["d"])("div",b,[j,Object(s["h"])("div",O,[(Object(s["q"])(!0),Object(s["d"])(s["a"],null,Object(s["w"])(x.ListTodo,(function(e){return Object(s["q"])(),Object(s["d"])("div",{key:e.rid},Object(s["z"])(e.rid)+". "+Object(s["z"])(e.contents),1)})),128))])])):Object(s["e"])("",!0),x.ListDoing.length>0?(Object(s["q"])(),Object(s["d"])("div",a,[u,Object(s["h"])("div",g,[(Object(s["q"])(!0),Object(s["d"])(s["a"],null,Object(s["w"])(x.ListDoing,(function(e){return Object(s["q"])(),Object(s["d"])("div",{key:e.rid},Object(s["z"])(e.rid)+". "+Object(s["z"])(e.contents),1)})),128))])])):Object(s["e"])("",!0),x.ListDone.length>0?(Object(s["q"])(),Object(s["d"])("div",f,[h,Object(s["h"])("div",v,[(Object(s["q"])(!0),Object(s["d"])(s["a"],null,Object(s["w"])(x.ListDone,(function(e){return Object(s["q"])(),Object(s["d"])("div",{key:e.rid},Object(s["z"])(e.rid)+". "+Object(s["z"])(e.contents),1)})),128))])])):Object(s["e"])("",!0)]))])}var w=c("1da1"),x=(c("96cf"),{data:function(){return{loading:!0,errorMessage:"",listTodo:[],listDoing:[],listDone:[]}},mounted:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){var c,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return c={api:"getProgress"},e.loading=!0,t.next=4,e.$store.callAsync(c);case 4:if(s=t.sent,e.loading=!1,100===s.code){t.next=9;break}return e.errorMessage=s.message,t.abrupt("return");case 9:e.listTodo=s.list_todo,e.listDoing=s.list_doing,e.listDone=s.list_done;case 12:case"end":return t.stop()}}),t)})))()},computed:{ListTodo:function(){return this.listTodo},ListDoing:function(){return this.listDoing},ListDone:function(){return this.listDone}}});x.render=p;t["default"]=x}}]);
//# sourceMappingURL=chunk-2d0d7de8.879ecf2d.js.map