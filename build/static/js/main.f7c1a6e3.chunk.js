(this.webpackJsonpsimtech=this.webpackJsonpsimtech||[]).push([[0],{18:function(e,t,a){},33:function(e,t,a){e.exports=a.p+"static/media/nofoto.678046a0.png"},36:function(e,t,a){e.exports=a(56)},41:function(e,t,a){},42:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),s=(a(41),a(42),a(21)),o=a(15),u=a(10),m=a(11),i=a(13),d=a(12),p=(a(18),a(7)),E=a(3);var b=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault();var t=n.state,a=t.username,r=t.password;n.props.logIn({username:a,password:r},(function(){n.setState({redirectToPreviousRoute:!0})}))},n.handleChange=function(e){var t=e.currentTarget.value,a=e.currentTarget.dataset.fieldName;n.setState((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(s.a)({},a,t))}))},n.state={redirectToPreviousRoute:!1,username:"",password:""},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.errorMsg,t=this.state,a=t.username,n=t.password,l=t.redirectToPreviousRoute;return l&&"admin"===a?r.a.createElement(E.a,{to:"/admin"}):l&&"user"===a?r.a.createElement(E.a,{to:"/user"}):r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"enter"},r.a.createElement("h1",null,"Log in"),r.a.createElement("form",{className:"form-login",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"enter__login"},r.a.createElement("label",{htmlFor:"username",className:"enter__label"},"Login"),r.a.createElement("input",{type:"text",className:"enter__input",name:"username",placeholder:"login",onChange:this.handleChange,value:a,"data-field-name":"username"})),r.a.createElement("div",{className:"enter__password"},r.a.createElement("label",{htmlFor:"password",className:"enter__label"},"Password"),r.a.createElement("input",{type:"password",className:"enter__input",name:"password",placeholder:"password",onChange:this.handleChange,value:n,"data-field-name":"password"})),e&&r.a.createElement("p",null,e),r.a.createElement("br",null),r.a.createElement("div",{className:"enter__button"},r.a.createElement("button",{type:"submit",className:"enter__btn"},"Sign up")))))}}]),a}(n.Component),h=Object(p.b)((function(e){return{errorMsg:e.auth.errorMsg}}),(function(e){return{logIn:function(t,a){return e(function(e,t){return function(a){!function(e){if("admin"!==e.username.toLowerCase()||"12345"!==e.password)return!1;return!0}(e)&&!function(e){if("user"!==e.username.toLowerCase()||"123"!==e.password)return!1;return!0}(e)?a({type:"LOG_ERR",payload:{errorMsg:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u0432\u0432\u0435\u0434\u0435\u043d\u044b \u043d\u0435 \u0432\u0435\u0440\u043d\u043e"},error:!0}):(a({type:"LOG_IN",payload:{name:e.username}}),t())}}(t,a))}}}))(b),f=a(26),v=a(32),_=a.n(v),O=Object(f.b)((function(e){var t=e.value;return r.a.createElement("div",null,t)})),g=Object(f.a)((function(e){var t=e.items;return r.a.createElement("div",{className:"table"},t.map((function(e,t){return r.a.createElement("table",{className:"table__table",key:e.id},r.a.createElement("thead",null,r.a.createElement("tr",{className:"table__tr"},r.a.createElement("th",{className:"table__th"},"\u0424\u0418\u041e"),r.a.createElement("th",{className:"table__th"},"\u041e\u0442\u0434\u0435\u043b"))),r.a.createElement("tbody",null,r.a.createElement("tr",{className:"table__tr"},r.a.createElement("td",{className:"table__td"},e.name),r.a.createElement("td",{className:"table__td"},r.a.createElement(O,{key:"item-".concat(e.id),index:t,value:e.department})))))})))})),j=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={items:e.props.userList},e.onSortEnd=function(t){var a=t.oldIndex,n=t.newIndex;e.setState((function(e){var t=e.items;return{items:_()(t,a,n)}}))},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(g,{items:this.state.items,onSortEnd:this.onSortEnd})}}]),a}(n.Component),N=Object(p.b)((function(e){return{userList:e.userList}}))(j),w=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.user;return r.a.createElement("div",{className:"admin"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"admin__loguser"},r.a.createElement("h2",null,"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),r.a.createElement("p",null,"\u0412\u0430\u0441 \u0437\u043e\u0432\u0443\u0442: ",r.a.createElement("span",null,e.name))),r.a.createElement(N,null)))}}]),a}(n.Component),y=Object(p.b)((function(e){return{user:e.auth.user}}))(w),S=a(35),L=Object(p.b)((function(e){return{isAuth:e.auth.user}}))((function(e){var t=e.component,a=Object(S.a)(e,["component"]);return r.a.createElement(E.b,Object.assign({},a,{render:function(e){return a.isAuth?r.a.createElement(t,e):r.a.createElement(E.a,{to:{pathname:"/",state:{from:e.location}}})}}))})),C=a(20),k=a(33),M=a.n(k);function I(){return r.a.createElement("div",null,r.a.createElement("div",{className:"profile"},r.a.createElement("div",{className:"profile__foto"},r.a.createElement("img",{src:M.a,alt:"nofoto"})),r.a.createElement("div",{className:"profile__data"},r.a.createElement("p",null,"\u041f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f: ",r.a.createElement("span",null,"\u0418\u0432\u0430\u043d\u043e\u0432 \u0418\u0432\u0430\u043d \u0418\u0432\u0430\u043d\u043e\u0432\u0438\u0447")),r.a.createElement("p",null,"\u041e\u0442\u0434\u0435\u043b: ",r.a.createElement("span",null,"\u0421\u0422\u041e")),r.a.createElement("p",null,"Email: ",r.a.createElement("span",null,"ivanov@gmail.com")),r.a.createElement("p",null,"\u0422\u0435\u043b\u0435\u0444\u043e\u043d: ",r.a.createElement("span",null,"+71234567890")))))}var R=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.user;return r.a.createElement("div",{className:"user"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"user__loguser"},r.a.createElement("h2",null,"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),r.a.createElement("p",null,"\u0412\u0430\u0441 \u0437\u043e\u0432\u0443\u0442: ",r.a.createElement("span",null,e.name)),r.a.createElement(I,null))))}}]),a}(n.Component),x=Object(p.b)((function(e){return{user:e.auth.user}}))(R);var T=function(){return r.a.createElement(C.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(E.d,null,r.a.createElement(E.b,{exact:!0,path:"/",component:h}),r.a.createElement(L,{path:"/admin",component:y}),r.a.createElement(L,{path:"/user",component:x}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=a(14),A=a(34),G={user:null,errorMsg:""};var D=Object(P.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOG_IN":return Object(o.a)(Object(o.a)({},e),{},{user:{name:t.payload.name}});case"LOG_ERR":return Object(o.a)(Object(o.a)({},e),{},{errorMsg:t.payload.errorMsg});default:return e}},userList:function(){return[{id:1,name:"\u0418\u0432\u0430\u043d\u043e\u0432 \u0418\u0432\u0430\u043d \u0418\u0432\u0430\u043d\u043e\u0432\u0438\u0447",department:"\u0421\u0422\u041e"},{id:2,name:"\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0430 \u0422\u0430\u0438\u0441\u0438\u044f \u041a\u0438\u0440\u0438\u043b\u043b\u043e\u0432\u043d\u0430",department:"\u0421\u0422\u041e"},{id:3,name:"\u0418\u043b\u044c\u0438\u043d \u0410\u0440\u0442\u0435\u043c\u0438\u0439 \u0422\u0438\u043c\u043e\u0444\u0435\u0435\u0432\u0438\u0447",department:"\u0414\u0420\u041f"},{id:4,name:"\u0421\u043e\u043b\u043e\u0432\u044c\u0435\u0432\u0430 \u0412\u0435\u0440\u043e\u043d\u0438\u043a\u0430 \u0420\u043e\u043c\u0430\u043d\u043e\u0432\u043d\u0430",department:"\u0418\u0412\u0426"}]}}),B=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||P.d)(Object(P.a)(A.a)),F=Object(P.e)(D,B);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p.a,{store:F},r.a.createElement(T,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.f7c1a6e3.chunk.js.map