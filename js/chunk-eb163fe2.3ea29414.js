(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eb163fe2"],{3530:function(t,e,r){"use strict";r.r(e);var n=r("7a23"),c=Object(n["h"])("div",null,"Admin Page",-1),o={class:"p-1 bg-black text-white text-xs"},i={class:"pl-2"};function s(t,e,r,s,a,l){return Object(n["q"])(),Object(n["d"])("div",null,[c,Object(n["h"])("ul",null,[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["u"])(l.lsItems,(function(t,e){return Object(n["q"])(),Object(n["d"])("li",{class:"m-1 flex justify-center",key:e},[Object(n["h"])("div",o,Object(n["x"])(e),1),Object(n["h"])("div",i,Object(n["x"])(l.lsGet(e)),1)])})),128))])])}r("99af");var a={data:function(){return{isAdmin:!1}},mounted:function(){this.isAdmin=2==this.$store.getters.userUid},computed:{lsItems:function(){for(var t={},e=0;e<localStorage.length;e++){var r=localStorage.key(e),n=localStorage.getItem(r);t[r]=n}var c="".concat(this.$store.getters.userName," (").concat(this.$store.getters.userUid,")");return t["MODE"]="production",t["MODE"]=c,t["API-URL"]=this.$store.getApiUrl(),t["LS-TOKEN"]=localStorage.getItem("loginToken"),t}},methods:{lsGet:function(t){return this.lsItems[t]}}};a.render=s;e["default"]=a},"99af":function(t,e,r){"use strict";var n=r("23e7"),c=r("d039"),o=r("e8b5"),i=r("861d"),s=r("7b0b"),a=r("50c4"),l=r("8418"),u=r("65f0"),d=r("1dde"),f=r("b622"),b=r("2d00"),h=f("isConcatSpreadable"),g=9007199254740991,O="Maximum allowed index exceeded",m=b>=51||!c((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),j=d("concat"),p=function(t){if(!i(t))return!1;var e=t[h];return void 0!==e?!!e:o(t)},v=!m||!j;n({target:"Array",proto:!0,forced:v},{concat:function(t){var e,r,n,c,o,i=s(this),d=u(i,0),f=0;for(e=-1,n=arguments.length;e<n;e++)if(o=-1===e?i:arguments[e],p(o)){if(c=a(o.length),f+c>g)throw TypeError(O);for(r=0;r<c;r++,f++)r in o&&l(d,f,o[r])}else{if(f>=g)throw TypeError(O);l(d,f++,o)}return d.length=f,d}})}}]);
//# sourceMappingURL=chunk-eb163fe2.3ea29414.js.map