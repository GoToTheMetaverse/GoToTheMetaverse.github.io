(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b9d35"],{3530:function(t,e,n){"use strict";n.r(e);var s=n("7a23"),c=Object(s["h"])("div",null,"Admin Page",-1),r={class:"p-1 bg-black text-white text-xs"},i={class:"pl-2"};function l(t,e,n,l,o,a){return Object(s["q"])(),Object(s["d"])("div",null,[c,Object(s["h"])("ul",null,[(Object(s["q"])(!0),Object(s["d"])(s["a"],null,Object(s["u"])(a.lsItems,(function(t,e){return Object(s["q"])(),Object(s["d"])("li",{class:"m-1 flex justify-center",key:e},[Object(s["h"])("div",r,Object(s["x"])(e),1),Object(s["h"])("div",i,Object(s["x"])(a.lsGet(e)),1)])})),128))])])}n("99af");var o={data:function(){return{isAdmin:!1}},mounted:function(){this.isAdmin=2==this.$store.getters.userUid},computed:{lsItems:function(){for(var t={},e=0;e<localStorage.length;e++){var n=localStorage.key(e),s=localStorage.getItem(n);t[n]=s}var c="".concat(this.$store.getters.userName," (").concat(this.$store.getters.userUid,")");return t["MODE"]="production",t["MODE"]=c,t["API-URL"]=this.$store.getApiUrl(),t["LS-TOKEN"]=localStorage.getItem("loginToken"),t}},methods:{lsGet:function(t){return this.lsItems[t]}}};o.render=l;e["default"]=o}}]);
//# sourceMappingURL=chunk-2d0b9d35.39dfeddf.js.map