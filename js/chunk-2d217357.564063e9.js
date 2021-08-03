(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217357"],{c66d:function(e,t,r){"use strict";r.r(t);var n=r("7a23"),s={class:"py-2 bg-white rounded-lg"},a=Object(n["h"])("div",{class:"m-2 text-3xl font-bold"},"Profile",-1),i=Object(n["h"])("div",{class:"py-4"},null,-1),o={class:"tw-row"},c=Object(n["h"])("div",{class:"tw-col-1"},"ID",-1),d={class:"tw-col-2"},l={class:"tw-row"},u=Object(n["h"])("div",{class:"tw-col-1"},"이름",-1),w={key:0,class:"tw-col-2 flex items-center"},b=Object(n["h"])("img",{class:"w-8 h-8",src:"/images/hero-confirm-outline.svg"},null,-1),g=Object(n["h"])("img",{class:"w-8 h-8",src:"/images/hero-x-outline.svg"},null,-1),h={key:1,class:"tw-col-2 flex"},m=Object(n["h"])("img",{class:"w-6 h-6",src:"/images/hero-edit.svg"},null,-1),p={key:0,class:"tw-row"},O=Object(n["h"])("div",{class:"py-4"},null,-1),j=Object(n["h"])("div",{class:"text-xl font-bold"},"암호 변경",-1),N={class:"tw-row"},f=Object(n["h"])("div",{class:"tw-col-1"},"현재 암호",-1),P={class:"tw-col-2"},v={class:"tw-row"},E=Object(n["h"])("div",{class:"tw-col-1"},"새 암호",-1),k={class:"tw-col-2"},C={class:"tw-row"},x=Object(n["h"])("div",{class:"tw-col-1"},"새 암호 확인",-1),y={class:"tw-col-2"},$={key:1,class:"tw-row text-red-600"},A={class:"flex justify-center text-xl p-1"},U=Object(n["h"])("div",{class:"py-4"},null,-1);function q(e,t,r,q,z,F){return Object(n["q"])(),Object(n["d"])("div",s,[a,i,Object(n["h"])("div",o,[c,Object(n["h"])("div",d,Object(n["z"])(e.$store.getters.userId),1)]),Object(n["h"])("div",l,[u,z.isEditingName?(Object(n["q"])(),Object(n["d"])("div",w,[Object(n["F"])(Object(n["h"])("input",{class:"w-full px-2 rounded-lg border-2 border-black","onUpdate:modelValue":t[1]||(t[1]=function(e){return z.inputEditingName=e})},null,512),[[n["C"],z.inputEditingName]]),F.isNameConfirm&&!z.loadingEditName?(Object(n["q"])(),Object(n["d"])("button",{key:0,class:"ml-2",onClick:t[2]||(t[2]=function(e){return F.onEditNameConfirm()})},[b])):Object(n["e"])("",!0),z.loadingEditName?Object(n["e"])("",!0):(Object(n["q"])(),Object(n["d"])("button",{key:1,class:"ml-2",onClick:t[3]||(t[3]=function(e){return F.onEditNameCancel()})},[g]))])):(Object(n["q"])(),Object(n["d"])("div",h,[Object(n["h"])("div",null,Object(n["z"])(e.$store.getters.userName),1),Object(n["h"])("div",null,[Object(n["h"])("button",{class:"px-2 mx-2",onClick:t[4]||(t[4]=function(e){return F.onEditName()})},[m])])]))]),z.errorEditName.length>0?(Object(n["q"])(),Object(n["d"])("div",p,Object(n["z"])(z.errorEditName),1)):Object(n["e"])("",!0),O,j,Object(n["h"])("div",N,[f,Object(n["h"])("div",P,[Object(n["F"])(Object(n["h"])("input",{class:"w-full px-2 rounded-lg border-2 border-black",type:"password","onUpdate:modelValue":t[5]||(t[5]=function(e){return z.inputPasswordOld=e})},null,512),[[n["C"],z.inputPasswordOld]])])]),Object(n["h"])("div",v,[E,Object(n["h"])("div",k,[Object(n["F"])(Object(n["h"])("input",{class:"w-full px-2 rounded-lg border-2 border-black",type:"password","onUpdate:modelValue":t[6]||(t[6]=function(e){return z.inputPasswordNew=e})},null,512),[[n["C"],z.inputPasswordNew]])])]),Object(n["h"])("div",C,[x,Object(n["h"])("div",y,[Object(n["F"])(Object(n["h"])("input",{class:"w-full px-2 rounded-lg border-2 border-black",type:"password","onUpdate:modelValue":t[7]||(t[7]=function(e){return z.inputPasswordAgain=e})},null,512),[[n["C"],z.inputPasswordAgain]])])]),z.errorChangePassword.length>0?(Object(n["q"])(),Object(n["d"])("div",$,Object(n["z"])(z.errorChangePassword),1)):Object(n["e"])("",!0),Object(n["h"])("div",A,[Object(n["h"])("button",{class:"tw-yello-btn",onClick:t[8]||(t[8]=function(e){return F.onChangePassword()})},"암호변경")]),U,Object(n["h"])("div",null,[Object(n["h"])("button",{class:"tw-red-btn",onClick:t[9]||(t[9]=function(e){return F.onLogout()})},"로그아웃")])])}var z=r("1da1"),F=(r("96cf"),{data:function(){return{isEditingName:!1,inputEditingName:"",loadingEditName:!1,errorEditName:"",inputPasswordOld:"",inputPasswordNew:"",inputPasswordAgain:"",loadingChangePassword:!1,errorChangePassword:""}},mounted:function(){this.$store.getters.isLogin||this.$router.push("/login")},computed:{isNameConfirm:function(){return!(this.inputEditingName.length<2)&&this.inputEditingName!=this.$store.getters.userName}},methods:{onLogout:function(){this.$store.commit("clear",{}),this.$router.push("/")},onEditName:function(){this.isEditingName=!this.isEditingName,this.inputEditingName=this.$store.getters.userName},onEditNameConfirm:function(){var e=this;return Object(z["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.loadingEditName){t.next=3;break}return e.errorEditName="처리중입니다.",t.abrupt("return");case 3:return r={api:"updateProfileName",loginToken:localStorage.getItem("loginToken"),userUid:e.$store.getters.userUid,newName:e.inputEditingName},e.errorEditName="",e.loadingEditName=!0,t.next=8,e.$store.callAsync(r);case 8:if(n=t.sent,e.loadingEditName=!1,100==n.code){t.next=13;break}return e.errorEditName=n.message,t.abrupt("return");case 13:e.$store.commit("setUserName",n.newName),e.isEditingName=!e.isEditingName;case 15:case"end":return t.stop()}}),t)})))()},onEditNameCancel:function(){this.isEditingName=!this.isEditingName},onChangePassword:function(){var e=this;return Object(z["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.loadingChangePassword){t.next=3;break}return e.errorEditName="처리중입니다.",t.abrupt("return");case 3:if(console.log("a",e.inputPasswordNew),!(e.inputPasswordNew.length<4)){t.next=7;break}return e.errorChangePassword="암호길이가 짧습니다.",t.abrupt("return");case 7:if(e.inputPasswordNew==e.inputPasswordAgain){t.next=11;break}return e.inputPasswordAgain="",e.errorChangePassword="새 암호를 확인해주세요.",t.abrupt("return");case 11:if(e.inputPasswordNew!=e.inputPasswordOld){t.next=16;break}return e.inputPasswordNew="",e.inputPasswordAgain="",e.errorChangePassword="기존 암호와 달라야합니다.",t.abrupt("return");case 16:return r={api:"updateProfilePassword",loginToken:localStorage.getItem("loginToken"),userUid:e.$store.getters.userUid,oldPass:e.inputPasswordOld,newPass:e.inputPasswordNew},e.inputPasswordOld="",e.inputPasswordNew="",e.inputPasswordAgain="",e.errorChangePassword="",e.loadingChangePassword=!0,t.next=24,e.$store.callAsync(r);case 24:if(n=t.sent,e.loadingChangePassword=!1,100==n.code){t.next=29;break}return e.errorChangePassword=n.message,t.abrupt("return");case 29:case"end":return t.stop()}}),t)})))()}}});F.render=q;t["default"]=F}}]);
//# sourceMappingURL=chunk-2d217357.564063e9.js.map