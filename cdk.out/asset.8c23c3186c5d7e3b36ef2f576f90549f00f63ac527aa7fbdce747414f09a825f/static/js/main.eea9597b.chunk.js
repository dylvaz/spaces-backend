(this["webpackJsonpspaces-frontend"]=this["webpackJsonpspaces-frontend"]||[]).push([[0],{157:function(e,t,n){},569:function(e,t){},617:function(e,t,n){},618:function(e,t,n){},619:function(e,t,n){},620:function(e,t,n){},621:function(e,t,n){},622:function(e,t,n){"use strict";n.r(t);var r=n(6),c=n(132),a=(n(157),n(8)),s=n.n(a),i=n(12),o=n(22),u=n(23),l=n(10),j=n(30),b=n(146),p=n(61),O=n(62),d=n(133),h=n(145),f=n(35),x="https://d7i4lplnxi.execute-api.us-west-1.amazonaws.com/prod/",v={REGION:"us-west-1",USER_POOL_ID:"us-west-1_ZGKww06ux",APP_CLIENT_ID:"17arebcp7ndrpv5bteptn0rapo",IDENTITY_POOL_ID:"us-west-1:722f226d-7c31-4649-b527-6cbad1997fca",SPACES_PHOTOS_BUCKET:"spaces-photos-06416ce334f1",api:{baseUrl:x,spacesUrl:"".concat(x,"spaces")}};d.default.configure({Auth:{mandatorySignIn:!1,region:v.REGION,userPoolId:v.USER_POOL_ID,userPoolWebClientId:v.APP_CLIENT_ID,identityPoolId:v.IDENTITY_POOL_ID,authenticationFlowType:"USER_PASSWORD_AUTH"}});var m=function(){function e(){Object(p.a)(this,e)}return Object(O.a)(e,[{key:"login",value:function(){var e=Object(i.a)(s.a.mark((function e(t,n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.signIn(t,n);case 3:return r=e.sent,e.abrupt("return",{cognitoUser:r,username:r.getUsername()});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",void 0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getUserAttributes",value:function(){var e=Object(i.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.next=3,h.a.userAttributes(t.cognitoUser);case 3:return r=e.sent,n.push.apply(n,Object(b.a)(r)),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"refreshCredentials",value:function(){return new Promise((function(e,t){f.config.credentials.refresh((function(n){n?t(n):e()}))}))}},{key:"getAWSTempCreds",value:function(){var e=Object(i.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="cognito-idp.".concat(v.REGION,".amazonaws.com/").concat(v.USER_POOL_ID),f.config.credentials=new f.CognitoIdentityCredentials({IdentityPoolId:v.IDENTITY_POOL_ID,Logins:Object(j.a)({},n,t.getSignInUserSession().getIdToken().getJwtToken())},{region:v.REGION}),e.next=4,this.refreshCredentials();case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),g=n(4),S=function(){return Object(g.jsx)("div",{children:Object(g.jsx)("h1",{children:"Welcome to the home page!"})})},w=n(25),y=function(e){var t,n=e.authService,c=e.callbackSetUser,a=Object(l.f)(),u=Object(r.useState)({username:"",password:"",loginAttempted:!1,loginSuccessfull:!1}),b=Object(o.a)(u,2),p=b[0],O=b[1],d=function(e){O(Object(w.a)(Object(w.a)({},p),{},Object(j.a)({},e.target.name,e.target.value)))},h=function(){var e=Object(i.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,n.login(p.username,p.password);case 3:(r=e.sent)?(O(Object(w.a)(Object(w.a)({},p),{},{loginAttempted:!0,loginSuccessfull:!0})),c(r),a.push("/profile")):(O(Object(w.a)(Object(w.a)({},p),{},{loginAttempted:!0,loginSuccessfull:!1})),alert("Incorrect credentials."));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return p.loginAttempted&&(t=p.loginSuccessfull?Object(g.jsx)("label",{children:" Login Successfull"}):Object(g.jsx)("label",{children:" Login Unsuccessfull"})),Object(g.jsxs)("div",{children:[Object(g.jsx)("h2",{children:"Please Login"}),Object(g.jsxs)("form",{onSubmit:h,children:[Object(g.jsx)("input",{name:"username",value:p.username,type:"text",onChange:d}),Object(g.jsx)("br",{}),Object(g.jsx)("input",{name:"password",value:p.password,type:"password",onChange:d}),Object(g.jsx)("br",{}),Object(g.jsx)("button",{type:"submit",children:"Login"})]}),t]})},I=(n(617),function(e){var t,n=e.user;return t=n?Object(g.jsx)(u.b,{className:"loginLogout",to:"/logout",children:n.username}):Object(g.jsx)(u.b,{className:"loginLogout",to:"/login",children:"Login"}),Object(g.jsxs)("div",{className:"navbar",children:[Object(g.jsx)(u.b,{className:"navbarItem",to:"/",children:"Home"}),Object(g.jsx)(u.b,{className:"navbarItem",to:"/profile",children:"Profile"}),Object(g.jsx)(u.b,{className:"navbarItem",to:"/spaces",children:"Spaces"}),t]})}),k=n(144),N=(n(618),function(e){var t,n=e.authService,c=e.user,a=Object(r.useState)(),l=Object(o.a)(a,2),j=l[0],b=l[1];Object(r.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c){e.next=5;break}return e.next=3,n.getUserAttributes(c);case 3:t=e.sent,b(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c,n]);return t=c?Object(g.jsxs)("div",{children:[Object(g.jsxs)("h3",{children:["Hello ",c.username]}),"Here are your attributes:",function(){var e=[];if(j){var t,n=Object(k.a)(j);try{for(n.s();!(t=n.n()).done;){var r=t.value;e.push(Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:r.Name}),Object(g.jsx)("td",{children:r.Value})]},r.Name))}}catch(c){n.e(c)}finally{n.f()}return Object(g.jsx)("table",{className:"attributesTable",children:Object(g.jsx)("tbody",{children:e})})}return Object(g.jsx)("label",{children:"No UserAttributes exist."})}()]}):Object(g.jsxs)("div",{children:["Please ",Object(g.jsx)(u.b,{to:"/login",children:"Login"})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Welcome to the profile page!"}),t]})}),U=(n(619),function(e){var t=e.close,n=e.content,r=e.show;return Object(g.jsx)(g.Fragment,{children:r?Object(g.jsx)("div",{className:"modal",children:Object(g.jsxs)("div",{className:"modalContent",children:[Object(g.jsx)("h2",{children:"You tried to reserve this space and ..."}),Object(g.jsx)("h3",{className:"modalText",children:n}),Object(g.jsx)("button",{onClick:t,children:"close"})]})}):null})}),C=n.p+"static/media/defaultSpacePhoto.5b582952.jpg",P=(n(620),function(e){var t=e.spaceId,n=e.name,r=e.location,c=e.photoUrl,a=e.reserveSpace;return Object(g.jsxs)("div",{className:"spaceComponent",children:[c?Object(g.jsx)("img",{src:c,alt:""}):Object(g.jsx)("img",{src:C,alt:"img unavailable"}),Object(g.jsx)("label",{className:"name",children:n}),Object(g.jsx)("br",{}),Object(g.jsx)("label",{className:"spaceId",children:t}),Object(g.jsx)("br",{}),Object(g.jsx)("label",{className:"location",children:r}),Object(g.jsx)("br",{}),Object(g.jsx)("button",{onClick:function(e){return a(e,t)},children:"Reserve"})]})}),E=function(e){var t=e.dataService,n=Object(r.useState)([]),c=Object(o.a)(n,2),a=c[0],l=c[1],j=Object(r.useState)(!1),b=Object(o.a)(j,2),p=b[0],O=b[1],d=Object(r.useState)(""),h=Object(o.a)(d,2),f=h[0],x=h[1];Object(r.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getSpaces();case 2:n=e.sent,l(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,l]);var v=function(){var e=Object(i.a)(s.a.mark((function e(n,r){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,t.reserveSpace(r);case 3:(c=e.sent)?(O(!0),x("You reserved spaceId: ".concat(r,".\n      Your reservation number is: ").concat(c))):(O(!0),x("Reservations are currently full for the space with id: ".concat(r,".")));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{children:[Object(g.jsx)("h2",{children:"Welcome to Spaces!"}),Object(g.jsx)("div",{children:Object(g.jsx)(u.b,{to:"/createSpace",children:"Create Space"})}),a.map((function(e,t){return Object(g.jsx)(P,{spaceId:e.spaceId,name:e.name,location:e.location,photoUrl:e.photoUrl,reserveSpace:v},t)})),Object(g.jsx)(U,{close:function(){O(!1),x("")},content:f,show:p})]})},L=function(e){var t,n=e.dataService,c=Object(r.useState)({name:"",location:"",description:"",photoUrl:""}),a=Object(o.a)(c,2),u=a[0],l=a[1],b=function(e){e.target.files&&e.target.files[0]?l(Object(w.a)(Object(w.a)({},u),{},{photo:e.target.files[0]})):l(Object(w.a)(Object(w.a)({},u),{},Object(j.a)({},e.target.name,e.target.value)))},p=function(){var e=Object(i.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,n.createSpace(u);case 4:r=e.sent,alert("Created space with id: ".concat(r)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert("Error while creating space: ".concat(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();if(u.photo){var O=URL.createObjectURL(u.photo);t=Object(g.jsx)("img",{alt:"",src:O})}else t=Object(g.jsx)(g.Fragment,{});return Object(g.jsxs)("form",{onSubmit:p,children:[Object(g.jsxs)("label",{children:["Name:",Object(g.jsx)("br",{}),Object(g.jsx)("input",{name:"name",value:u.name,onChange:b})]}),Object(g.jsx)("br",{}),Object(g.jsxs)("label",{children:["Location:",Object(g.jsx)("br",{}),Object(g.jsx)("input",{name:"location",value:u.location,onChange:b})]}),Object(g.jsx)("br",{}),Object(g.jsxs)("label",{children:["Description:",Object(g.jsx)("br",{}),Object(g.jsx)("input",{name:"description",value:u.description,onChange:b})]}),Object(g.jsx)("br",{}),Object(g.jsxs)("label",{children:["Photo:",Object(g.jsx)("br",{}),Object(g.jsx)("input",{name:"photo",type:"file",onChange:b})]}),Object(g.jsx)("br",{}),t,Object(g.jsx)("br",{}),Object(g.jsx)("button",{"data-test":"submit-button",type:"submit",children:"Create Space"})]})};f.config.update({region:v.REGION});var _=function(){function e(){Object(p.a)(this,e)}return Object(O.a)(e,[{key:"getSpaces",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=v.api.spacesUrl,e.next=3,fetch(t,{method:"GET"});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"reserveSpace",value:function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("123456"!==t){e.next=4;break}return e.abrupt("return","69420");case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"createSpace",value:function(){var e=Object(i.a)(s.a.mark((function e(t){var n,r,c,a,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.photo){e.next=6;break}return e.next=3,this.uploadPublicFile(t.photo,v.SPACES_PHOTOS_BUCKET);case 3:n=e.sent,t.photoUrl=n,t.photo=void 0;case 6:return r=v.api.spacesUrl,c={method:"POST",body:JSON.stringify(t)},e.next=10,fetch(r,c);case 10:return a=e.sent,e.next=13,a.json();case 13:return i=e.sent,e.abrupt("return",JSON.stringify(i.id));case 15:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"formatFileName",value:function(e){var t=Date.now(),n=Math.random().toString(36).substring(2,7),r=e.toLowerCase().replace(/[^a-z0-9]/g,"-");return"".concat(t,"-").concat(n,"-").concat(r).substring(0,60)}},{key:"uploadPublicFile",value:function(){var e=Object(i.a)(s.a.mark((function e(t,n){var r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.name,r=this.formatFileName(r),e.next=4,new f.S3({region:v.REGION}).upload({Bucket:n,Key:r,Body:t,ACL:"public-read"}).promise();case 4:return c=e.sent,e.abrupt("return",c.Location);case 6:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),T=(n(621),function(){var e=Object(r.useState)(void 0),t=Object(o.a)(e,2),n=t[0],c=t[1],a=new m,j=new _,b=function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(t),e.next=3,a.getAWSTempCreds(t.cognitoUser);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{className:"wrapper",children:Object(g.jsx)(u.a,{children:Object(g.jsxs)("div",{children:[Object(g.jsx)(I,{user:n}),Object(g.jsxs)(l.c,{children:[Object(g.jsx)(l.a,{exact:!0,path:"/",component:S}),Object(g.jsx)(l.a,{exact:!0,path:"/login",children:Object(g.jsx)(y,{callbackSetUser:b,authService:a})}),Object(g.jsx)(l.a,{exact:!0,path:"/profile",children:Object(g.jsx)(N,{user:n,authService:a})}),Object(g.jsx)(l.a,{exact:!0,path:"/spaces",children:Object(g.jsx)(E,{dataService:j})}),Object(g.jsx)(l.a,{exact:!0,path:"/createSpace",children:Object(g.jsx)(L,{dataService:j})})]})]})})})});Object(c.render)(Object(g.jsx)(T,{}),document.getElementById("root"))},81:function(e,t){}},[[622,1,2]]]);
//# sourceMappingURL=main.eea9597b.chunk.js.map