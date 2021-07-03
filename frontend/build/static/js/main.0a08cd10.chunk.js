(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{20:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(22),o=n.n(s),i=(n(20),n(24)),r=n(2),l=n(9),u=n(3),d=n.p+"static/media/logo.1f1e9591.svg",p=n(0);var j=Object(u.h)((function(e){var t="",n="";return"/sign-in"===e.location.pathname?(t="/sign-up",n="\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"):"/sign-up"===e.location.pathname&&(t="/sign-in",n="\u0412\u043e\u0439\u0442\u0438"),Object(p.jsxs)("header",{className:"header",children:[Object(p.jsx)("img",{src:d,className:"header__logo",alt:"\u043c\u0435\u0441\u0442\u043e \u0440\u043e\u0441\u0441\u0438\u044f"}),Object(p.jsx)("div",{className:"header__container",children:e.loggedIn?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"header__user-email",children:e.email}),Object(p.jsx)("button",{className:"header__exit-button button",onClick:e.handleLogout,children:"\u0412\u044b\u0439\u0442\u0438"})]}):Object(p.jsx)(l.b,{className:"header__link",to:t,children:n})})]})})),h=c.a.createContext();var b=function(e){var t=e.card,n=e.onCardClick,c=e.onCardLike,s=e.onCardDelete,o=Object(a.useContext)(h),i=t.owner===o._id,r="place__delete-button ".concat(i?"place__delete-button_visible":"place__delete-button_hidden"),l=t.likes.some((function(e){return e===o._id})),u="place__like ".concat(l&&"place__like_active");return Object(p.jsxs)("div",{className:"place",children:[Object(p.jsx)("div",{className:"place__photo-container",children:Object(p.jsx)("img",{className:"place__photo",src:t.link,alt:t.name,onClick:function(){n(t)}})}),Object(p.jsxs)("div",{className:"place__description",children:[Object(p.jsx)("h3",{className:"place__heading",children:t.name}),Object(p.jsxs)("div",{className:"place__like-container",children:[Object(p.jsx)("button",{className:u,type:"button",onClick:function(){c(t)}}),Object(p.jsx)("span",{className:"place__like-counter",children:t.likes.length})]})]}),Object(p.jsx)("button",{className:r,type:"button",onClick:function(){s(t)}})]})};var m=function(e){var t=Object(a.useContext)(h);return Object(p.jsxs)("main",{className:"main",children:[Object(p.jsxs)("section",{className:"profile",children:[Object(p.jsx)("button",{className:"profile__avatar-edit",style:{backgroundImage:"url(".concat(t.avatar,")")},onClick:e.onEditAvatar}),Object(p.jsxs)("div",{className:"profile__info",children:[Object(p.jsxs)("div",{className:"profile__name-container",children:[Object(p.jsx)("h1",{className:"profile__name",children:t.name}),Object(p.jsx)("button",{className:"profile__edit-button button",type:"button",onClick:e.onEditProfile})]}),Object(p.jsx)("p",{className:"profile__about",children:t.about})]}),Object(p.jsx)("button",{className:"profile__add-button button",type:"button",onClick:e.onAddPlace})]}),Object(p.jsx)("section",{className:"places",children:e.cards.reverse().map((function(t){return Object(p.jsx)(b,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})]})};var f=function(){return Object(p.jsx)("footer",{className:"footer",children:Object(p.jsx)("p",{className:"footer__heading",children:"\xa9 2020 Mesto Russia"})})};var _=function(e){return Object(p.jsx)("div",{className:"popup popup_".concat(e.name," ").concat(e.isOpen&&"popup_active"),children:Object(p.jsxs)("div",{className:"popup__container",children:[Object(p.jsx)("button",{className:"popup__close-button button",type:"button",onClick:e.onClose}),Object(p.jsx)("h2",{className:"popup__title",children:e.title}),Object(p.jsxs)("form",{className:"popup__form",name:e.name,noValidate:!0,onSubmit:e.onSubmit,children:[e.children,Object(p.jsx)("button",{className:"popup__save-button button",type:"submit",children:e.submitText})]})]})})};var O=function(e){return Object(p.jsx)("div",{className:"popup popup_image ".concat(e.card&&"popup_active"),children:Object(p.jsxs)("div",{className:"popup__image-container",children:[Object(p.jsx)("button",{className:"popup__close-button button",onClick:e.onClose}),Object(p.jsx)("img",{className:"popup__image-photo",src:e.card&&e.card.link,alt:"\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}),Object(p.jsx)("p",{className:"popup__image-description",children:e.card&&e.card.name})]})})};var g=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateUser,s=Object(a.useState)(""),o=Object(r.a)(s,2),i=o[0],l=o[1],u=Object(a.useState)(""),d=Object(r.a)(u,2),j=d[0],b=d[1],m=Object(a.useContext)(h);return Object(a.useEffect)((function(){l(m.name),b(m.about)}),[m,t]),Object(p.jsxs)(_,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",submitText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c({name:i,about:j})},children:[Object(p.jsx)("input",{id:"profile-name",className:"popup__input popup__input_profile_name",name:"name",minLength:"2",maxLength:"40",required:!0,value:i,onChange:function(e){l(e.target.value)}}),Object(p.jsx)("span",{className:"profile-name-error popup__error"}),Object(p.jsx)("input",{id:"profile-about",className:"popup__input popup__input_profile_about",name:"about",minLength:"2",maxLength:"200",required:!0,value:j,onChange:function(e){b(e.target.value)}}),Object(p.jsx)("span",{className:"profile-about-error popup__error"})]})};var v=function(e){var t=e.isOpen,n=e.onClose,c=e.onAddPlace,s=Object(a.useState)(""),o=Object(r.a)(s,2),i=o[0],l=o[1],u=Object(a.useState)(""),d=Object(r.a)(u,2),j=d[0],h=d[1];return Object(p.jsxs)(_,{name:"place",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",submitText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c({name:i,link:j})},children:[Object(p.jsx)("input",{id:"place-name",className:"popup__input popup__input_place_name",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"40",required:!0,value:i,onChange:function(e){l(e.target.value)}}),Object(p.jsx)("span",{className:"place-name-error popup__error"}),Object(p.jsx)("input",{id:"place-link",className:"popup__input popup__input_place_link",type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,value:j,onChange:function(e){h(e.target.value)}}),Object(p.jsx)("span",{className:"place-link-error popup__error"})]})};var x=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateAvatar,s=Object(a.useRef)();return Object(p.jsxs)(_,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",submitText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c({avatar:s.current.value})},children:[Object(p.jsx)("input",{id:"profile-avatar",className:"popup__input popup__input_profile_avatar",name:"link",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",ref:s,required:!0}),Object(p.jsx)("span",{id:"profile-avatar-error",className:"popup__error"})]})},N=n(4),k=n(14),C=n(15),S=(document.querySelector(".profile__edit-button"),document.querySelector(".profile__add-button"),document.querySelector(".profile__avatar-edit"),"GET"),y="POST",I="DELETE",L="PUT",T="PATCH",w=new(function(){function e(t){Object(k.a)(this,e),this.url=t.url,this.headers=t.headers}return Object(C.a)(e,[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u0441\u043e \u0441\u0442\u0430\u0442\u0443\u0441 \u043a\u043e\u0434\u043e\u043c ".concat(e.status)))}},{key:"getCards",value:function(){return fetch("".concat(this.url,"/cards"),{headers:Object(N.a)(Object(N.a)({},this.headers),{},{authorization:"Bearer ".concat(localStorage.getItem("token"))})}).then(this._handleResponse)}},{key:"createCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this.url,"/cards"),{method:y,headers:Object(N.a)(Object(N.a)({},this.headers),{},{authorization:"Bearer ".concat(localStorage.getItem("token"))}),body:JSON.stringify({name:t,link:n})}).then(this._handleResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this.url,"/cards/").concat(e),{method:I,headers:Object(N.a)(Object(N.a)({},this.headers),{},{authorization:"Bearer ".concat(localStorage.getItem("token"))})}).then(this._handleResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return t?fetch("".concat(this.url,"/cards/").concat(e,"/likes"),{method:L,headers:Object(N.a)(Object(N.a)({},this.headers),{},{authorization:"Bearer ".concat(localStorage.getItem("token"))})}).then(this._handleResponse):fetch("".concat(this.url,"/cards/").concat(e,"/likes"),{method:I,headers:Object(N.a)(Object(N.a)({},this.headers),{},{authorization:"Bearer ".concat(localStorage.getItem("token"))})}).then(this._handleResponse)}},{key:"getMyInfo",value:function(){return fetch("".concat(this.url,"/users/me"),{headers:Object(N.a)(Object(N.a)({},this.headers),{},{authorization:"Bearer ".concat(localStorage.getItem("token"))})}).then(this._handleResponse)}},{key:"updateMyInfo",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this.url,"/users/me"),{method:T,headers:Object(N.a)(Object(N.a)({},this.headers),{},{authorization:"Bearer ".concat(localStorage.getItem("token"))}),body:JSON.stringify({name:t,about:n})}).then(this._handleResponse)}},{key:"updateMyAvatar",value:function(e){return fetch("".concat(this.url,"/users/me/avatar"),{method:T,headers:Object(N.a)(Object(N.a)({},this.headers),{},{authorization:"Bearer ".concat(localStorage.getItem("token"))}),body:JSON.stringify({avatar:e})}).then(this._handleResponse)}}]),e}())({url:"https://api.vasilev.students.nomoredomains.club",headers:{authorization:"56ef87ac-ca8d-4cfa-bbaf-aacafdd87bde","Content-Type":"application/json"}}),E=new(function(){function e(t){Object(k.a)(this,e),this.url=t.url,this.headers=t.headers}return Object(C.a)(e,[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u0441\u043e \u0441\u0442\u0430\u0442\u0443\u0441 \u043a\u043e\u0434\u043e\u043c ".concat(e.status)))}},{key:"register",value:function(e){var t=e.password,n=e.email;return fetch("".concat(this.url,"/signup"),{method:y,headers:this.headers,body:JSON.stringify({password:t,email:n})}).then(this._handleResponse)}},{key:"authorize",value:function(e){var t=e.password,n=e.email;return fetch("".concat(this.url,"/signin"),{method:y,headers:this.headers,body:JSON.stringify({password:t,email:n})}).then(this._handleResponse).then((function(e){return e.token&&localStorage.setItem("token",e.token),e}))}},{key:"checkToken",value:function(){return fetch("".concat(this.url,"/users/me"),{method:S,headers:Object(N.a)(Object(N.a)({},this.headers),{},{authorization:"Bearer ".concat(localStorage.getItem("token"))})}).then(this._handleResponse).then((function(e){return e}))}}]),e}())({url:"https://api.vasilev.students.nomoredomains.club",headers:{authorization:"56ef87ac-ca8d-4cfa-bbaf-aacafdd87bde",Accept:"application/json","Content-Type":"application/json"}});var R=function(e){return Object(p.jsxs)("form",{className:"sign-form",name:e.name,onSubmit:e.onSubmit,action:"#",method:"GET",noValidate:!0,children:[Object(p.jsxs)("div",{className:"sign-form__container",children:[Object(p.jsx)("h2",{className:"sign-form__title",children:e.title}),e.children]}),Object(p.jsxs)("div",{className:"sign-form__bottom-container",children:[Object(p.jsx)("button",{type:"submit",className:"sign-form__submit-button",children:e.submitText}),e.hint]})]})};var P=function(e){var t=e.handleLogin,n=Object(a.useState)(""),c=Object(r.a)(n,2),s=c[0],o=c[1],i=Object(a.useState)(""),u=Object(r.a)(i,2),d=u[0],j=u[1],h=Object(p.jsxs)("div",{className:"sign-form__transition-hint",children:["\u0415\u0449\u0451 \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"," ",Object(p.jsx)(l.b,{className:"sign-form__link",to:"/sign-up",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]});return Object(p.jsxs)(R,{name:"sign-in",onSubmit:function(e){t(e,s,d)},title:"\u0412\u0445\u043e\u0434",submitText:"\u0412\u043e\u0439\u0442\u0438",hint:h,children:[Object(p.jsxs)("label",{className:"sign-form__field",children:[Object(p.jsx)("input",{className:"sign-form__input",id:"input-sign-email",name:"email",type:"email",value:s,onChange:function(e){o(e.target.value)},placeholder:"Email",required:!0}),Object(p.jsx)("span",{className:"sign-form__input-error sign-form__input-error_active",id:"input-edit-name-error"})]}),Object(p.jsx)("label",{className:"sign-form__field",children:Object(p.jsx)("input",{className:"sign-form__input",id:"input-sign-password",name:"password",type:"password",value:d,onChange:function(e){j(e.target.value)},placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0})})]})};var z=function(e){var t=e.handleRegister,n=Object(a.useState)(""),c=Object(r.a)(n,2),s=c[0],o=c[1],i=Object(a.useState)(""),u=Object(r.a)(i,2),d=u[0],j=u[1],h=Object(p.jsxs)("div",{className:"sign-form__transition-hint",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"," ",Object(p.jsx)(l.b,{className:"sign-form__link",to:"/sign-in",children:"\u0412\u043e\u0439\u0442\u0438"})]});return Object(p.jsxs)(R,{name:"sign-in",onSubmit:function(e){t(e,s,d)},title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",submitText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",hint:h,children:[Object(p.jsxs)("label",{className:"sign-form__field",children:[Object(p.jsx)("input",{className:"sign-form__input",id:"input-sign-email",name:"email",type:"email",value:s,onChange:function(e){o(e.target.value)},placeholder:"Email",required:!0}),Object(p.jsx)("span",{className:"sign-form__input-error sign-form__input-error_active",id:"input-edit-name-error"})]}),Object(p.jsx)("label",{className:"sign-form__field",children:Object(p.jsx)("input",{className:"sign-form__input",id:"input-sign-password",name:"password",type:"password",value:d,onChange:function(e){j(e.target.value)},placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,minLength:"2",maxLength:"32"})})]})},q=function(e){return Object(p.jsx)(u.b,{children:function(){return e.loggedIn?e.component:Object(p.jsx)(u.a,{to:"/sign-in"})}})},A=n.p+"static/media/success.1b6082f8.svg",B=n.p+"static/media/error.df8eddf6.svg";var D=function(e){var t=Object(u.g)(),n=e.isSuccess?A:B,a=e.isSuccess?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.",c=e.isSuccess?"\u0423\u0441\u043f\u0435\u0448\u043d\u0430\u044f \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a";function s(){e.onClose(),e.isSuccess&&t.push("/sign-in")}return Object(p.jsx)("div",{className:"popup popup_after-sign ".concat(e.isOpen?"popup_active":""),children:Object(p.jsxs)("div",{className:"popup__container",children:[Object(p.jsx)("button",{type:"button",className:"popup__close-button",onClick:s}),Object(p.jsxs)("form",{className:"popup__form",name:"after-sign",onSubmit:s,action:"#",method:"GET",noValidate:!0,children:[Object(p.jsx)("img",{className:"popup__auth-image",src:n,alt:c}),Object(p.jsx)("h2",{className:"popup__text",children:a})]})]})})};var M=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),o=Object(r.a)(s,2),l=o[0],d=o[1],b=Object(a.useState)(!1),N=Object(r.a)(b,2),k=N[0],C=N[1],S=Object(a.useState)(null),y=Object(r.a)(S,2),I=y[0],L=y[1],T=Object(a.useState)([]),R=Object(r.a)(T,2),A=R[0],B=R[1],M=Object(a.useState)({_id:"",name:"",avatar:"",about:""}),J=Object(r.a)(M,2),U=J[0],F=J[1],G=Object(a.useState)(!1),V=Object(r.a)(G,2),H=V[0],K=V[1],Q=Object(a.useState)(!1),W=Object(r.a)(Q,2),X=W[0],Y=W[1],Z=Object(a.useState)(!1),$=Object(r.a)(Z,2),ee=$[0],te=$[1],ne=Object(a.useState)(""),ae=Object(r.a)(ne,2),ce=ae[0],se=ae[1],oe=Object(u.g)();function ie(){c(!1),d(!1),C(!1),L(null)}function re(e){Y(!0),te(e)}Object(a.useEffect)((function(){H&&w.getCards().then((function(e){B(e)})).catch((function(e){console.error(e)}))}),[H]),Object(a.useEffect)((function(){H&&w.getMyInfo().then((function(e){F(e)})).catch((function(e){console.error(e)}))}),[H]),Object(a.useEffect)((function(){if(localStorage.getItem("token")){var e=localStorage.getItem("token");E.checkToken(e).then((function(e){e&&(K(!0),se(e.email),oe.push("/"))})).catch((function(e){return console.log(e)}))}}),[H,oe]);var le=Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(m,{cards:A,onEditAvatar:function(){C(!0)},onEditProfile:function(){c(!0)},onAddPlace:function(){d(!0)},onCardClick:function(e){L(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e===U._id}));w.changeLikeCardStatus(e._id,!t).then((function(t){B((function(n){return n.map((function(n){return n._id===e._id?t.data:n}))}))})).catch((function(e){console.error(e)}))},onCardDelete:function(e){w.deleteCard(e._id).then((function(){var t=A.filter((function(t){return t._id!==e._id}));B(t)})).catch((function(e){console.log(e)}))}}),Object(p.jsx)(f,{}),Object(p.jsx)(g,{isOpen:n,onClose:ie,onUpdateUser:function(e){w.updateMyInfo(e).then((function(e){F(e.data),c(!1)})).catch((function(e){console.error(e)}))}}),Object(p.jsx)(v,{isOpen:l,onClose:ie,onAddPlace:function(e){w.createCard(e).then((function(e){B([e.data].concat(Object(i.a)(A))),d(!1)})).catch((function(e){console.error(e)}))}}),Object(p.jsx)(x,{isOpen:k,onClose:ie,onUpdateAvatar:function(e){var t=e.avatar;w.updateMyAvatar(t).then((function(e){F(e.data),C(!1)})).catch((function(e){console.error(e)}))}}),Object(p.jsx)(_,{name:"delete-confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",submitText:"\u0414\u0430",onClose:ie}),Object(p.jsx)(O,{card:I,onClose:ie})]});return Object(p.jsx)(h.Provider,{value:U,children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"page",children:[Object(p.jsx)(j,{loggedIn:H,email:ce,handleLogout:function(){K(!1),localStorage.removeItem("token")}}),Object(p.jsxs)(u.d,{children:[Object(p.jsx)(u.b,{path:"/sign-up",children:Object(p.jsx)(z,{handleRegister:function(e,t,n){e.preventDefault(),E.register({password:n,email:t}).then((function(e){e.data?re(!0):re(!1)})).catch((function(e){re(!1),console.log(e)}))}})}),Object(p.jsx)(u.b,{path:"/sign-in",children:Object(p.jsx)(P,{handleLogin:function(e,t,n){e.preventDefault(),t&&n?E.authorize({email:t,password:n}).then((function(e){console.log(e),e.token?(K(!0),oe.push("/")):re(!1)})).catch((function(e){re(!1)})):re(!1)}})}),Object(p.jsx)(q,{exact:!0,path:"/",loggedIn:H,component:le}),Object(p.jsx)(u.b,{path:"*",children:H?Object(p.jsx)(u.a,{to:"/"}):Object(p.jsx)(u.a,{to:"/sign-in"})})]}),Object(p.jsx)(D,{isOpen:X,onClose:function(){Y(!1)},isSuccess:ee})]})})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(l.a,{children:Object(p.jsx)(M,{})})}),document.getElementById("root")),J()}},[[35,1,2]]]);
//# sourceMappingURL=main.0a08cd10.chunk.js.map