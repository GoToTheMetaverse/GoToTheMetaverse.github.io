(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b9f47"],{"34c3":function(e,t,r){"use strict";r.r(t);var s=r("7a23"),n={class:"w-full justify-center"},i=Object(s["h"])("div",{class:"m-3"},[Object(s["g"])(" 현재는 개발중인 상태입니다."),Object(s["h"])("br"),Object(s["g"])(" 서비스가 런칭하면 모든기록은 삭제할 예정입니다."),Object(s["h"])("br"),Object(s["g"])(" 아이디 암호는 버리는 느낌으로 대충 입력하세요."),Object(s["h"])("br"),Object(s["g"])(" 암호길이는 4자 까지로 제한했습니다. ")],-1),o={class:"flex justify-center m-3"},c={class:"w-96"},a={class:"flex m-1 justify-center items-center"},l=Object(s["h"])("div",{class:"inline-flex p-1 text-right w-24"},"아이디:",-1),u={class:"flex m-1 justify-center items-center mt-4 bg-gray-300"},b=Object(s["h"])("div",{class:"inline-flex p-1 text-right w-24"},"암호",-1),d={class:"flex m-1 justify-center items-center"},p=Object(s["h"])("div",{class:"inline-flex p-1 text-right w-24"},"암호 확인",-1),g={class:"flex mt-3 justify-center items-center"},h={class:"inline-flex text-center text-red-600 font-bold"},f={class:"flex justify-center mt-3"};function w(e,t,r,w,j,m){return Object(s["q"])(),Object(s["d"])("div",n,[i,Object(s["h"])("div",o,[Object(s["h"])("div",c,[Object(s["h"])("div",a,[l,Object(s["C"])(Object(s["h"])("input",{class:"inline-flex p-1 border-gray-600 border-2 rounded-md","onUpdate:modelValue":t[1]||(t[1]=function(e){return j.id=e})},null,512),[[s["z"],j.id]])]),Object(s["h"])("div",u,[b,Object(s["C"])(Object(s["h"])("input",{class:"inline-flex p-1 border-gray-600 border-2 rounded-md",type:"password",maxlength:"4","onUpdate:modelValue":t[2]||(t[2]=function(e){return j.pw=e})},null,512),[[s["z"],j.pw]])]),Object(s["h"])("div",d,[p,Object(s["C"])(Object(s["h"])("input",{class:"inline-flex p-1 border-gray-600 border-2 rounded-md",type:"password",maxlength:"4","onUpdate:modelValue":t[3]||(t[3]=function(e){return j.pwConfirm=e})},null,512),[[s["z"],j.pwConfirm]])]),Object(s["h"])("div",g,[Object(s["h"])("div",h,Object(s["x"])(j.errorMessage),1)]),Object(s["h"])("div",f,[Object(s["h"])("button",{type:"button",class:["w-32 p-1 rounded-md",m.buttonClass()],onClick:t[4]||(t[4]=function(e){return m.onSignup()})}," 가입 ",2)])])])])}var j=r("1da1"),m=(r("96cf"),{data:function(){return{id:"",pw:"",pwConfirm:"",signupLabel:"가입",waitResponse:!1,csrfToken:"",errorMessage:"",errorMessageByNetwork:""}},methods:{buttonEnable:function(){return this.id.length<4?(this.errorMessage="아이디 4자 이상 필요합니다.",!1):this.pw.length<1?(this.errorMessage="암호 입력이 필요 합니다.",!1):this.pw!=this.pwConfirm?(this.errorMessage="암호를 확인해주세요.",!1):this.waitResponse?(this.errorMessage="",!1):(""!=this.errorMessageByNetwork?this.errorMessage=this.errorMessageByNetwork:this.errorMessage="",!0)},buttonClass:function(){return this.buttonEnable()?"bg-yellow-300":"bg-gray-300"},onSignup:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var r,s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.buttonEnable()&&!e.waitResponse){t.next=2;break}return t.abrupt("return");case 2:return r=e.$store.getGUID(),s={api:"signup",id:e.id,pw:e.pw,loginToken:r},e.errorMessageByNetwork="",e.waitResponse=!0,t.next=8,e.$store.callAsync(s);case 8:if(n=t.sent,e.waitResponse=!1,100==n.code){t.next=14;break}return console.log("signup ng",n.message),e.errorMessageByNetwork=n.message,t.abrupt("return");case 14:console.log("signup ok",n),e.$store.commit("setUser",n.user),localStorage.setItem("loginToken",n.user.loginToken),e.$router.push("/welcome");case 18:case"end":return t.stop()}}),t)})))()}}});m.render=w;t["default"]=m}}]);
//# sourceMappingURL=chunk-2d0b9f47.4fbc4aae.js.map