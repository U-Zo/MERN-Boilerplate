(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{54:function(e,n,t){e.exports=t(82)},59:function(e,n,t){},82:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(27),c=t.n(o),u=(t(59),t(9)),i=t(6),l=t(7),s=t(29);function m(){var e=Object(i.a)(["\n  width: 1180px;\n  margin: 0 auto;\n  \n  @media (max-width: 1180px) {\n    width: 1024px;\n  }\n  \n  @media (max-width: 1024px) {\n    width: 768px;\n  }\n  \n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]);return m=function(){return e},e}var d=l.b.div(m()),b=function(e){var n=e.children,t=Object(s.a)(e,["children"]);return a.a.createElement(d,t,n)};function f(){var e=Object(i.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem 2rem;\n  background: #fff;\n  border-radius: 0 0 10px 10px;\n  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.15);\n"]);return f=function(){return e},e}function p(){var e=Object(i.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #0c4ccb;\n  height: 40px;\n  border-radius: 10px 10px 0 0;\n  color: #fff;\n  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.15);\n"]);return p=function(){return e},e}var g=l.b.div(p()),O=l.b.div(f()),j=function(e){var n=e.title,t=e.children,r=Object(s.a)(e,["title","children"]);return a.a.createElement("div",r,a.a.createElement(g,null,n),a.a.createElement(O,null,t))};function h(){var e=Object(i.a)(["\n  width: 30%;\n  margin-top: 3.5rem;\n"]);return h=function(){return e},e}function v(){var e=Object(i.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"]);return v=function(){return e},e}var E,w=Object(l.b)(b)(v()),x=Object(l.b)(j)(h()),y=function(){return a.a.createElement(w,null,a.a.createElement(x,{title:"Lorem ipsum"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"),a.a.createElement(x,{title:"Lorem ipsum"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"),a.a.createElement(x,{title:"Lorem ipsum"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"),a.a.createElement(x,{title:"Lorem ipsum"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"),a.a.createElement(x,{title:"Lorem ipsum"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"),a.a.createElement(x,{title:"Lorem ipsum"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"))},k=t(18),S=t(8),I=t(5),L=t(13),C=t.n(L),N=t(20),_=t(11),T=t(84),U=t(83),F=Object(T.a)("loading/START_LOADING",(function(e){return e})),R=Object(T.a)("loading/FINISH_LOADING",(function(e){return e})),A=Object(U.a)((E={},Object(S.a)(E,"loading/START_LOADING",(function(e,n){var t=n.payload;return Object(I.a)(Object(I.a)({},e),{},Object(S.a)({},t,!0))})),Object(S.a)(E,"loading/FINISH_LOADING",(function(e,n){var t=n.payload;return Object(I.a)(Object(I.a)({},e),{},Object(S.a)({},t,!1))})),E),{}),D=function(e){return[e,"".concat(e,"_SUCCESS"),"".concat(e,"_FAILURE")]};function G(e,n){var t="".concat(e,"_SUCCESS"),r="".concat(e,"_FAILURE");return C.a.mark((function a(o){var c;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(_.c)(F(e));case 2:return a.prev=2,a.next=5,Object(_.b)(n,o.payload);case 5:return c=a.sent,a.next=8,Object(_.c)({type:t,payload:c.data,meta:c});case 8:a.next=14;break;case 10:return a.prev=10,a.t0=a.catch(2),a.next=14,Object(_.c)({type:r,payload:a.t0,error:!0});case 14:return a.next=16,Object(_.c)(R(e));case 16:case"end":return a.stop()}}),a,null,[[2,10]])}))}var M,q=t(51),z=t.n(q).a.create(),H=function(){return z.post("/api/auth/logout")},W=C.a.mark(ne),J=C.a.mark(te),B=D("user/CHECK"),P=Object(N.a)(B,3),Z=P[0],K=P[1],$=P[2],Q=Object(T.a)("user/TEMP_SET_USER",(function(e){return e})),V=Object(T.a)(Z),X=Object(T.a)("user/LOGOUT"),Y=G(Z,(function(){return z.get("/api/auth/check")}));function ee(){try{localStorage.removeItem("user")}catch(e){console.log("localStorage is not working")}}function ne(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(_.b)(H);case 3:localStorage.removeItem("user"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("localStorage is not working");case 9:case"end":return e.stop()}}),W,null,[[0,6]])}function te(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.d)(Z,Y);case 2:return e.next=4,Object(_.d)($,ee);case 4:return e.next=6,Object(_.d)("user/LOGOUT",ne);case 6:case"end":return e.stop()}}),J)}var re=Object(U.a)((M={},Object(S.a)(M,"user/TEMP_SET_USER",(function(e,n){var t=n.payload;return Object(I.a)(Object(I.a)({},e),{},{user:t})})),Object(S.a)(M,K,(function(e,n){var t=n.payload;return Object(I.a)(Object(I.a)({},e),{},{user:t,checkError:null})})),Object(S.a)(M,$,(function(e,n){var t=n.payload;return Object(I.a)(Object(I.a)({},e),{},{user:null,checkError:t})})),Object(S.a)(M,"user/LOGOUT",(function(e){return Object(I.a)(Object(I.a)({},e),{},{user:null})})),M),{user:null,checkError:null}),ae=t(12);function oe(){var e=Object(i.a)(["\n  ","\n"]);return oe=function(){return e},e}function ce(){var e=Object(i.a)(["\n  ","\n"]);return ce=function(){return e},e}function ue(){var e=Object(i.a)(["\n      width: 100%;\n    "]);return ue=function(){return e},e}function ie(){var e=Object(i.a)(["\n  border: none;\n  border-radius: 4px;\n  font-weight: bold;\n  padding: 0.5rem 1rem;\n  color: #fff;\n  outline: none;\n  cursor: pointer;\n  font-size: 1rem;\n  background-color: #3D79F2;\n  transition: background-color .3s ease;\n  font-family: inherit;\n  \n  &:hover {\n    background-color: #5e8de9;\n  }\n  \n  ","\n"]);return ie=function(){return e},e}var le=Object(l.a)(ie(),(function(e){return e.fullWidth&&Object(l.a)(ue())})),se=l.b.button(ce(),le),me=Object(l.b)(ae.b)(oe(),le),de=function(e){return e.to?a.a.createElement(me,e):a.a.createElement(se,e)};function be(){var e=Object(i.a)(["\n  font-weight: bold;\n"]);return be=function(){return e},e}function fe(){var e=Object(i.a)(["\n  height: 4rem;\n"]);return fe=function(){return e},e}function pe(){var e=Object(i.a)(["\n  display: flex;\n  background: #fff;\n  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);\n  border-radius: 13px;\n  height: 4rem;\n  justify-content: space-between;\n  align-items: center;\n  color: #0c4ccb;\n  overflow: hidden;\n  \n  .logo {\n    display: flex;\n    font-weight: bold;\n    font-size: 1.125rem;\n    padding: 0 1rem;\n    background: #0c4ccb;\n    color: #fff;\n    height: 100%;\n    align-items: center;\n  }\n  \n  .right {\n    display: flex;\n    align-items: center;\n  }\n"]);return pe=function(){return e},e}function ge(){var e=Object(i.a)(["\n  width: 100%;\n  position: fixed;\n  top: 1rem;\n"]);return ge=function(){return e},e}var Oe=l.b.div(ge()),je=Object(l.b)(b)(pe()),he=l.b.div(fe()),ve=l.b.div(be()),Ee=function(e){var n=e.user,t=e.onLogout;return a.a.createElement(a.a.Fragment,null,a.a.createElement(Oe,null,a.a.createElement(je,null,a.a.createElement(ae.b,{to:"/",className:"logo"},"MERN"),n?a.a.createElement("div",{className:"right"},a.a.createElement(ve,null,n.username),a.a.createElement(de,{onClick:t},"\ub85c\uadf8\uc544\uc6c3")):a.a.createElement("div",{className:"right"},a.a.createElement(de,{to:"/login"},"\ub85c\uadf8\uc778")))),a.a.createElement(he,null))},we=function(){var e=Object(k.c)((function(e){return{user:e.user.user}})).user,n=Object(k.b)();return a.a.createElement(Ee,{user:e,onLogout:function(){n(X())}})},xe=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(we,null),a.a.createElement(y,null))};function ye(){var e=Object(i.a)(["\n  background: #fff;\n  padding: 3rem 5rem;\n  border-radius: 10px;  \n  width: 500px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);\n  \n  .logo-area {\n    display: block;\n    padding-bottom: 2rem;\n    text-align: center;\n    font-weight: bold;\n    letter-spacing: 2px;\n    font-size: 1.5rem;\n  }\n"]);return ye=function(){return e},e}function ke(){var e=Object(i.a)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #3D79F2;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return ke=function(){return e},e}var Se,Ie=l.b.div(ke()),Le=l.b.div(ye()),Ce=function(e){var n=e.children;return a.a.createElement(Ie,null,a.a.createElement(Le,null,a.a.createElement("div",{className:"logo-area"},a.a.createElement(ae.b,{to:"/"},"MERN")),n))},Ne=C.a.mark(Ze),_e=D("auth/REGISTER"),Te=Object(N.a)(_e,3),Ue=Te[0],Fe=Te[1],Re=Te[2],Ae=D("auth/LOGIN"),De=Object(N.a)(Ae,3),Ge=De[0],Me=De[1],qe=De[2],ze=Object(T.a)("auth/CHANGE_FIELD",(function(e){return{form:e.form,key:e.key,value:e.value}})),He=Object(T.a)("auth/INITIALIZE_FORM",(function(e){return e})),We=Object(T.a)(Ue,(function(e){return{username:e.username,password:e.password}})),Je=Object(T.a)(Ge,(function(e){return{username:e.username,password:e.password}})),Be=G(Ue,(function(e){var n=e.username,t=e.password;return z.post("/api/auth/register",{username:n,password:t})})),Pe=G(Ge,(function(e){var n=e.username,t=e.password;return z.post("/api/auth/login",{username:n,password:t})}));function Ze(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.d)(Ue,Be);case 2:return e.next=4,Object(_.d)(Ge,Pe);case 4:case"end":return e.stop()}}),Ne)}var Ke={register:{username:"",password:"",passwordConfirm:""},login:{username:"",password:""},auth:null,authError:null},$e=Object(U.a)((Se={},Object(S.a)(Se,"auth/CHANGE_FIELD",(function(e,n){var t=n.payload,r=t.form,a=t.key,o=t.value;return Object(I.a)(Object(I.a)({},e),{},Object(S.a)({},r,Object(I.a)(Object(I.a)({},e[r]),{},Object(S.a)({},a,o))))})),Object(S.a)(Se,"auth/INITIALIZE_FORM",(function(e,n){var t=n.payload;return Object(I.a)(Object(I.a)({},e),{},Object(S.a)({},t,Ke[t]))})),Object(S.a)(Se,Fe,(function(e,n){var t=n.payload;return Object(I.a)(Object(I.a)({},e),{},{auth:t,authError:null})})),Object(S.a)(Se,Re,(function(e,n){var t=n.payload;return Object(I.a)(Object(I.a)({},e),{},{authError:t})})),Object(S.a)(Se,Me,(function(e,n){var t=n.payload;return Object(I.a)(Object(I.a)({},e),{},{auth:t,authError:null})})),Object(S.a)(Se,qe,(function(e,n){var t=n.payload;return Object(I.a)(Object(I.a)({},e),{},{authError:t})})),Se),Ke);function Qe(){var e=Object(i.a)(["\n  margin-top: 2rem;\n  text-align: end;\n  \n  a {\n    color: #3D79F2;\n    text-decoration: underline;\n    \n    &:hover {\n      color: #2665ef;\n    }\n  }\n"]);return Qe=function(){return e},e}function Ve(){var e=Object(i.a)(["\n  color: red;\n  text-align: center;\n  font-size: 0.875rem;\n  margin-top: 1rem;\n"]);return Ve=function(){return e},e}function Xe(){var e=Object(i.a)(["\n  margin-top: 1rem;\n"]);return Xe=function(){return e},e}function Ye(){var e=Object(i.a)(["\n  font-size: 1rem;\n  border: none;\n  padding-bottom: 0.5rem;\n  outline: none;\n  width: 100%;\n  transition: all ease-in 0.2s;\n  border-bottom: 1px solid #e5e5e5;\n  font-family: inherit;\n  &:focus {\n    border-bottom: 1px solid #828282;\n  }\n  & + & {\n    margin-top: 2rem;\n  }\n"]);return Ye=function(){return e},e}function en(){var e=Object(i.a)(["\n  h3 {\n    color: #2b2b2b;\n    text-align: center;\n    margin-bottom: 1.5rem;\n    font-weight: bold;\n    font-size: 1.2rem;\n  }\n"]);return en=function(){return e},e}var nn={login:"\ub85c\uadf8\uc778",register:"\ud68c\uc6d0\uac00\uc785"},tn=l.b.div(en()),rn=l.b.input(Ye()),an=Object(l.b)(de)(Xe()),on=l.b.div(Ve()),cn=l.b.div(Qe()),un=function(e){var n=e.type,t=e.form,r=e.onChange,o=e.onSubmit,c=e.error,u=nn[n];return a.a.createElement(tn,null,a.a.createElement("h3",null,u),a.a.createElement("form",{onSubmit:o},a.a.createElement(rn,{autoComplete:"username",name:"username",placeholder:"\uc544\uc774\ub514",onChange:r,value:t.username}),a.a.createElement(rn,{autoComplete:"new-password",name:"password",placeholder:"\ube44\ubc00\ubc88\ud638",type:"password",onChange:r,value:t.password}),"register"===n&&a.a.createElement(rn,{autoComplete:"new-password",name:"passwordConfirm",placeholder:"\ube44\ubc00\ubc88\ud638 \ud655\uc778",type:"password",onChange:r,value:t.passwordConfirm}),c&&a.a.createElement(on,null,c),a.a.createElement(an,{fullWidth:!0},u)),a.a.createElement(cn,null,"login"===n?a.a.createElement(ae.b,{to:"/register"},"\ud68c\uc6d0\uac00\uc785"):a.a.createElement(ae.b,{to:"/login"},"\ub85c\uadf8\uc778")))},ln=Object(u.e)((function(e){var n=e.history,t=Object(r.useState)(null),o=Object(N.a)(t,2),c=o[0],u=o[1],i=Object(k.b)(),l=Object(k.c)((function(e){var n=e.auth,t=e.user;return{form:n.login,auth:n.auth,authError:n.authError,user:t.user}})),s=l.form,m=l.auth,d=l.authError,b=l.user;return Object(r.useEffect)((function(){i(He("login"))}),[i]),Object(r.useEffect)((function(){d?500===d.response.status?u("\uc11c\ubc84\uc5d0 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."):u("\uc544\uc774\ub514\uc640 \ube44\ubc00\ubc88\ud638\ub97c \ud655\uc778\ud574\uc8fc\uc138\uc694."):m&&(console.log(m),i(V()))}),[m,d,i]),Object(r.useEffect)((function(){if(b){n.push("/");try{localStorage.setItem("user",JSON.stringify(b))}catch(e){console.log("localStorage is not working")}}}),[n,b]),a.a.createElement(un,{type:"login",form:s,onChange:function(e){var n=e.target,t=n.name,r=n.value;i(ze({form:"login",key:t,value:r}))},onSubmit:function(e){e.preventDefault();var n=s.username,t=s.password;i(Je({username:n,password:t}))},error:c})})),sn=function(){return a.a.createElement(Ce,null,a.a.createElement(ln,null))},mn=Object(u.e)((function(e){var n=e.history,t=Object(r.useState)(null),o=Object(N.a)(t,2),c=o[0],u=o[1],i=Object(k.b)(),l=Object(k.c)((function(e){var n=e.auth,t=e.user;return{form:n.register,auth:n.auth,authError:n.authError,user:t.user}})),s=l.form,m=l.auth,d=l.authError,b=l.user;return Object(r.useEffect)((function(){i(He("register"))}),[i]),Object(r.useEffect)((function(){if(d)return 409===d.response.status?void u("\uc774\ubbf8 \uc874\uc7ac\ud558\ub294 \uacc4\uc815\uc785\ub2c8\ub2e4."):void u("\ud68c\uc6d0\uac00\uc785 \uc2e4\ud328");m&&i(V())}),[m,d,i]),Object(r.useEffect)((function(){if(b){n.push("/");try{localStorage.setItem("user",JSON.stringify(b))}catch(e){console.log("localStorage is not working")}}}),[n,b]),a.a.createElement(un,{type:"register",form:s,onChange:function(e){var n=e.target,t=n.name,r=n.value;i(ze({form:"register",key:t,value:r}))},onSubmit:function(e){e.preventDefault();var n=s.username,t=s.password,r=s.passwordConfirm;if(![n,t,r].includes(""))return t!==r?(u("\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),i(ze({form:"register",key:"password",value:""})),void i(ze({form:"register",key:"passwordConfirm",value:""}))):void i(We({username:n,password:t}));u("\ube48 \uce78\uc744 \ubaa8\ub450 \uc785\ub825\ud558\uc138\uc694.")},error:c})})),dn=function(){return a.a.createElement(Ce,null,a.a.createElement(mn,null))},bn=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(u.a,{component:xe,path:"/",exact:!0}),a.a.createElement(u.a,{component:sn,path:"/login/"}),a.a.createElement(u.a,{component:dn,path:"/register/"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var fn=t(19),pn=t(52),gn=t(53),On=C.a.mark(jn);function jn(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.a)([Ze(),te()]);case 2:case"end":return e.stop()}}),On)}var hn=Object(fn.combineReducers)({loading:A,auth:$e,user:re}),vn=Object(gn.a)(),En=Object(fn.createStore)(hn,Object(pn.composeWithDevTools)(Object(fn.applyMiddleware)(vn)));vn.run(jn),function(){try{var e=localStorage.getItem("user");if(!e)return;En.dispatch(Q(e)),En.dispatch(V())}catch(n){console.log("localStorage is not working")}}(),c.a.render(a.a.createElement(k.a,{store:En},a.a.createElement(ae.a,null,a.a.createElement(bn,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.cf1606f0.chunk.js.map