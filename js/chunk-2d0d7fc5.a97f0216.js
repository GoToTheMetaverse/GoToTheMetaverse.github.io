(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7fc5"],{"78c1":function(e,t,a){"use strict";a.r(t);var n=a("7a23"),r=Object(n["h"])("div",null,"TEST",-1),c={class:"flex border-2 border-black"};function l(e,t,a,l,o,s){var i=Object(n["v"])("line-chart"),u=Object(n["v"])("pie-chart");return Object(n["q"])(),Object(n["d"])("div",null,[r,Object(n["h"])("input",{class:"flex border-2 border-black",type:"file",onChange:t[1]||(t[1]=function(){return s.onFile&&s.onFile.apply(s,arguments)})},null,32),Object(n["h"])("button",{class:"flex border-2 border-black",onClick:t[2]||(t[2]=function(e){return s.onUpload()})}," upload "),Object(n["h"])("div",c,Object(n["x"])(o.resultMessage),1),Object(n["h"])(i,{data:o.chartData},null,8,["data"]),Object(n["h"])(u,{data:o.pieData},null,8,["data"]),Object(n["h"])("div",null,Object(n["x"])(o.a)+" -> "+Object(n["x"])(o.a2),1),Object(n["h"])("div",null,Object(n["x"])(o.b)+" -> "+Object(n["x"])(o.b2),1)])}var o=a("1da1"),s=(a("96cf"),a("d3b7"),a("25f0"),{data:function(){return{a:11,a2:"",b:"B",b2:0,selectedFile:null,resultMessage:"result",chartData:[["한",4],["글",2],["Mar",10],["Apr",5],["May",3]],pieData:[["no",150],["yes",120]]}},mounted:function(){this.a2=this.a.toString(),this.b2=parseInt(this.b,16)},methods:{onFile:function(e){console.log("onFile",e),this.selectedFile=e.target.files[0]},onUpload:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new FormData,a.append("image",e.selectedFile),t.next=4,e.$store.uploadAsync(a);case 4:n=t.sent,console.log("onUpload ret",n),e.resultMessage=n.message;case 7:case"end":return t.stop()}}),t)})))()}}});s.render=l;t["default"]=s}}]);
//# sourceMappingURL=chunk-2d0d7fc5.a97f0216.js.map