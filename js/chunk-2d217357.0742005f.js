(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217357"],{c66d:function(t,e,n){"use strict";n.r(e);var o=n("7a23"),c=Object(o["h"])("div",{class:"m-2 text-2xl"},"Profile",-1),i={class:"m-2"},s={class:"m-2"};function r(t,e,n,r,u,d){return Object(o["q"])(),Object(o["d"])("div",null,[c,Object(o["h"])("div",i,Object(o["y"])(t.$store.getters.userName),1),Object(o["h"])("div",s,Object(o["y"])(t.$store.getLoginToken()),1),Object(o["h"])("div",null,Object(o["y"])(d.getUID()),1),Object(o["h"])("div",null,[Object(o["h"])("button",{class:"m-2 py-1 px-2 rounded-lg bg-red-600 text-white",onClick:e[1]||(e[1]=function(t){return d.onLogout()})}," 로그아웃 ")])])}var u={mounted:function(){this.$store.getters.isLogin||this.$router.push("/login")},methods:{onLogout:function(){this.$store.commit("clear",{}),this.$router.push("/")},getUID:function(){return MediaDeviceInfo.deviceId}}};u.render=r;e["default"]=u}}]);
//# sourceMappingURL=chunk-2d217357.0742005f.js.map