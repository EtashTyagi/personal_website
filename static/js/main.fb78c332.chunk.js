(this.webpackJsonppersonal_website=this.webpackJsonppersonal_website||[]).push([[0],{11:function(e,t,n){},16:function(e,t,n){},27:function(e,t,n){},30:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),i=n(20),a=n.n(i),r=(n(27),n(4)),s=n(7),u=n.n(s),l=n(9),d=(n(16),n(11),n.p+"static/media/lightModeIcon.6baac67d.svg"),f=n.p+"static/media/darkModeIcon.d6e4d60a.svg";function b(e,t,n){return j.apply(this,arguments)}function j(){return(j=Object(l.a)(u.a.mark((function e(t,n,o){var c,i,a,r,s,l,d=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=d.length>3&&void 0!==d[3]?d[3]:["Hello World"],i=d.length>4&&void 0!==d[4]?d[4]:100,a=d.length>5&&void 0!==d[5]?d[5]:690,r=d.length>6&&void 0!==d[6]?d[6]:69,s=0,!(o<c.length)){e.next=29;break}l=function(){return new Promise((function(e){setTimeout((function(){n((function(e){return e+1})),e()}),i)}))};case 7:if(!(s<c[o].length)){e.next=13;break}return e.next=10,l();case 10:s++,e.next=7;break;case 13:if(!(o<c.length-1)){e.next=29;break}return l=function(){return new Promise((function(e){setTimeout((function(){e()}),a)}))},e.next=17,l();case 17:l=function(){return new Promise((function(e){setTimeout((function(){n((function(e){return e-1})),e()}),r)}))};case 18:if(!(s>0)){e.next=24;break}return e.next=21,l();case 21:s--,e.next=18;break;case 24:return l=function(){return new Promise((function(e){setTimeout((function(){e()}),i)}))},e.next=27,l();case 27:t(o+1),b(t,n,o+1,c,i,a,r);case 29:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m=b,h=n(0),p=["Etash Tyagi"],x=function(e){var t=Object(o.useState)("light"),n=Object(r.a)(t,2),c=n[0],i=n[1],a=Object(o.useState)(0),s=Object(r.a)(a,2),u=s[0],l=s[1],b=Object(o.useState)(!1),j=Object(r.a)(b,2),x=j[0],O=j[1],v=Object(o.useState)(0),g=Object(r.a)(v,2),y=g[0],k=g[1];return x||(document.documentElement.style.setProperty("color-scheme","light"),O((function(){return m(k,l,y,p,100,690,69),!0}))),Object(h.jsxs)("div",{className:"mainContainer "+c+" titleHeader",children:[Object(h.jsx)("span",{className:"headingText "+c+" titleHeader",children:p[y].substr(0,u)}),Object(h.jsx)("div",{className:"blinkingRectangle",style:{fontSize:28},children:"|"}),Object(h.jsx)("img",{draggable:!1,className:"icon titleHeader",src:"dark"===c?d:f,alt:"dark/light",onClick:function(){i((function(){var t="dark"===c?"light":"dark";return document.documentElement.style.setProperty("color-scheme",t),e.setColorMode(t),t}))}})]})};x.defaultProps={setColorMode:function(){}};var O=x,v=n(12),g=function(){return Object(h.jsxs)("div",{className:"mainContents",style:{alignItems:"center",justifyContent:"space-evenly",fontSize:18},children:[Object(h.jsx)("span",{style:{fontSize:32},children:"Why This Website"}),Object(h.jsx)("br",{}),"This website was made mainly to learn react via a fun project.",Object(h.jsx)("br",{}),"It is still in it's infancy stage and I plan on adding lots of cool features and utilities on it",Object(h.jsx)("br",{})]})},y=n(21),k=n.p+"static/media/superMarioTunnels.4a086321.svg",w=n.p+"static/media/ground.50be8c37.svg",M=(n(30),n.p+"static/media/standing.da544ad4.svg"),C=function e(t,n){Object(y.a)(this,e),this.from=Math.min(t,n),this.to=Math.max(t,n)},S=[new C(30,40),new C(55,65),new C(80,90)],N=new C(0,12.75),I=.5,T=.01,L=1.8;function P(){return(P=Object(l.a)(u.a.mark((function e(t,n,o,c,i,a,r){var s,l,d;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=0,l=0,d=function(){return new Promise((function(e){setTimeout((function(){var u=0,d=0,f=0;r[1]((function(){return[d=document.getElementById("resCont").clientWidth,f=document.getElementById("resCont").clientHeight]})),o((function(e){return u=e-.001*d})),n[1]((function(e){l=e+u;for(var t=!1,n=0;n<S.length&&!t;++n){var c=S[n];t=l<=N.to*d*.01&&e>=N.to*d*.01&&s+4>=c.from+T&&s<=c.to-T}return t=t&&u<=0,e+u<=0||t?(a[1]((function(e){return o(e?function(){return Math.sqrt(2*d*.001*(.25*d))}:function(){return 0}),e})),l=e+u<=0?0:N.to*d*.01):(l+4*d*.01*L>.9*f&&o((function(){return 0})),l=Math.min(l,.9*f-4*d*.01*L))})),c[1]((function(e){return i[1]((function(n){return t[1]((function(t){s=t,n&&!e?s=Math.min(96,t+I):e&&!n&&(s=Math.max(0,t-I));for(var o=0;o<S.length;++o){var c=S[o];if(s>=c.from-4&&s<=c.to&&l<N.to*d*.01)return console.log(l+" "+N.to*d*.01),s-(c.from-4+1)>c.to-1-s?c.to+T:c.from-4-T}return s})),n})),e})),e()}),1e3/60)}))};case 2:if(!window.location.pathname.startsWith(D.rootDir+"/Resume")){e.next=7;break}return e.next=5,d();case 5:e.next=2;break;case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D={tabToComponent:{Home:g,Resume:function(){var e=Object(o.useState)(0),t=Object(o.useState)(!1),n=Object(o.useState)(!1),c=Object(o.useState)(!1),i=Object(o.useState)(0),a=Object(o.useState)(0)[1],s=Object(o.useState)([0,0]),u=Object(o.useState)(!1),l=Object(r.a)(u,2),d=l[0],f=l[1];return d||f((function(){return function(e,t,n,o,c,i,a){P.apply(this,arguments)}(e,i,a,t,n,c,s),!0})),Object(h.jsxs)("div",{id:"resCont",className:"mainContents "+D.colorMode+" interactiveResume",tabIndex:"0",style:{position:"relative",border:"none",outline:"none"},onKeyDown:function(e){!function(e,t,n,o){e.preventDefault(),39===e.keyCode||"d"===e.key?n[1]((function(){return!0})):37===e.keyCode||"a"===e.key?t[1]((function(){return!0})):"w"!==e.key&&" "!==e.key||o[1]((function(){return!0}))}(e,t,n,c)},onKeyUp:function(e){!function(e,t,n,o){e.preventDefault(),39===e.keyCode||"d"===e.key?n[1]((function(){return!1})):37===e.keyCode||"a"===e.key?t[1]((function(){return!1})):"w"!==e.key&&" "!==e.key||o[1]((function(){return!1}))}(e,t,n,c)},children:[Object(h.jsx)("span",{children:"INTERACTIVE RESUME"}),Object(h.jsx)("img",{width:"".concat(4,"%"),src:M,style:{transitionDuration:"0s",maxHeight:"90%",position:"absolute",bottom:"calc(".concat(i[0],"px + 10%)"),left:"".concat(e[0],"%")},alt:"Player"}),Object(h.jsx)("img",{width:"100%",height:"10%",src:w,style:{transitionDuration:"0s",position:"absolute",bottom:0},alt:"Ground"}),S.map((function(e){return Object(h.jsx)("img",{width:"".concat(e.to-e.from,"%"),style:{transitionDuration:"0s",maxHeight:"90%",position:"absolute",bottom:"10%",left:"".concat(e.from,"%")},src:k,alt:"TUNNELS"})}))]})},Projects:function(){return Object(h.jsx)("div",{className:"mainContents",style:{alignItems:"center",justifyContent:"space-evenly",fontFamily:"Segoe Print",fontSize:69},children:"Projects"})},"About Me":function(){return Object(h.jsx)("div",{className:"mainContents",style:{alignItems:"center",justifyContent:"space-evenly",fontFamily:"Segoe Print",fontSize:69},children:"ABOUT ME"})}},rootDir:"/personal_website",githubLink:"https://github.com/EtashTyagi",linkedinLink:"https://www.linkedin.com/in/etash-tyagi-19b489214/",hackerrankLink:"https://www.hackerrank.com/Etash19360",codeforcesLink:"https://codeforces.com/profile/etash",codechefLink:"https://www.codechef.com/users/etasht",facebookLink:"https://facebook.com/etash.tyagi",colorMode:"light"},E=function(e){var t=-1;return Object(h.jsx)("div",{className:"mainContainer "+e.colorMode+" navBarHeader",children:Object.keys(D.tabToComponent).map((function(n,o){return[0===++t?Object(h.jsx)("div",{}):Object(h.jsx)("div",{className:"vLine"}),Object(h.jsx)(v.b,{activeClassName:"tabContainer "+e.colorMode+" selected",to:D.rootDir+"/"+n,className:"tabContainer "+e.colorMode,onlyActiveOnIndex:!0,children:n})]}))})};E.defaultProps={colorMode:"light"};var z=E,H=function(e){var t=Object(o.useState)("light"),n=Object(r.a)(t,2),c=n[0],i=n[1],a=Object(o.useState)({prevOffset:0,headerOffset:0}),s=Object(r.a)(a,2),u=s[0],l=s[1],d=Object(o.useState)(!1),f=Object(r.a)(d,2),b=f[0],j=f[1];return b||(document.documentElement.style.setProperty("color-scheme","light"),j((function(){return function(e){W.apply(this,arguments)}(l),!0}))),Object(h.jsxs)("div",{style:{zIndex:1},children:[Object(h.jsxs)("div",{style:{position:"fixed",width:"100%",transform:"translate(0px, ".concat(u.headerOffset,"px)")},children:[Object(h.jsx)(O,{setColorMode:function(t){e.setColorMode((function(){return t})),i((function(){return t}))}}),Object(h.jsx)("div",{className:"hLine "+c}),Object(h.jsx)(z,{colorMode:c})]}),Object(h.jsx)("div",{className:"spacer"})]})};function W(){return(W=Object(l.a)(u.a.mark((function e(t){var n,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0,o=function(){return new Promise((function(e){setTimeout((function(){window.pageYOffset!==n&&(n=window.pageYOffset,t((function(e){return{prevOffset:n,headerOffset:e.prevOffset>n?n<=52?Math.min(0,e.headerOffset+(e.prevOffset-n)):Math.min(-51.25,e.headerOffset+(e.prevOffset-n)):Math.max(-113,e.headerOffset+(e.prevOffset-n))}}))),e()}),5)}))};case 2:return e.next=5,o();case 5:e.next=2;break;case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}H.defaultProps={setColorMode:function(){}};var A=H,R=(n(36),n.p+"static/media/linkedinIcon.071f5674.svg"),F=n.p+"static/media/facebookIcon.0e5e570c.svg",B=n.p+"static/media/githubIcon.9417c10f.svg",U=n.p+"static/media/hackerrankIcon.49b09f83.svg",Y=n.p+"static/media/codeforcesIcon.1e8bc162.svg",_=n.p+"static/media/codechefIcon.eeab98c6.svg",G=function(e){return Object(h.jsx)("div",{children:Object(h.jsxs)("a",{className:"links footer",target:"_blank",rel:"noreferrer",href:e.link,children:[Object(h.jsx)("img",{src:e.src,height:24,alt:e.name+" icon"}),Object(h.jsx)("span",{style:{paddingLeft:3},children:e.name})]})})},J=function(){return Object(h.jsxs)("div",{style:{zIndex:1},children:[Object(h.jsx)("div",{className:"mainContainer "+D.colorMode+" footer",children:Object(h.jsx)("span",{style:{paddingLeft:24},children:"\xa9Etash Tyagi, 2021"})}),Object(h.jsx)("div",{className:"hLine "+D.colorMode}),Object(h.jsxs)("div",{style:{justifyContent:"space-evenly"},className:"mainContainer "+D.colorMode+" footer",children:[Object(h.jsx)(G,{src:B,name:"Github",link:D.githubLink}),Object(h.jsx)(G,{src:R,name:"LinkedIn",link:D.linkedinLink}),Object(h.jsx)(G,{src:U,name:"HackerRank",link:D.hackerrankLink}),Object(h.jsx)(G,{src:Y,name:"Codeforces",link:D.codeforcesLink}),Object(h.jsx)(G,{src:_,name:"CodeChef",link:D.codechefLink}),Object(h.jsx)(G,{src:F,name:"Facebook",link:D.facebookLink})]})]})},K=n(2),V=(n(37),["Hello World!","Welcome to my website.","Select a tab to continue."]),X=2e3,q=10;function Q(){return(Q=Object(l.a)(u.a.mark((function e(t,n,o){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=function(e){return new Promise((function(n){setTimeout((function(){t(e),n()}),3999)}))};case 1:if(!(++n<V.length)){e.next=6;break}return e.next=4,c(n);case 4:e.next=1;break;case 6:return e.next=8,new Promise((function(e){setTimeout((function(){o(!1),e()}),X)}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Z=function(){var e=Object(o.useState)(0),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(o.useState)(!1),a=Object(r.a)(i,2),s=a[0],u=a[1],l=Object(o.useState)(!0),d=Object(r.a)(l,2),f=d[0],b=d[1],j=Object(o.useState)({x:0,y:0}),m=Object(r.a)(j,2),p=m[0],x=m[1];return s||u((function(){return function(e,t,n){Q.apply(this,arguments)}(c,n,b),!0})),Object(h.jsx)("div",{className:"mainContents welcomeMain "+D.colorMode,style:{fontSize:"7vmin",paddingLeft:10,paddingRight:10,backgroundPositionX:"calc(50% + ".concat(Math.max(-10,Math.min(q,p.x)),"px)"),backgroundPositionY:"calc(100% + ".concat(Math.max(-10,Math.min(q,p.y)),"px)")},onMouseMove:function(e){x((function(){return{x:e.movementX,y:e.movementY}}))},children:Object(h.jsx)("div",{style:{width:"100%"},children:Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",className:"helloWorld "+D.colorMode+(f?" animating":""),style:{animationDuration:"".concat(X,"ms")},children:Object(h.jsx)("text",{x:"".concat(50+.01*Math.max(-10,Math.min(q,p.x)),"%"),y:"".concat(15+.01*Math.max(-10,Math.min(q,p.y)),"%"),style:{strokeWidth:"0.15vmin",fontFamily:"Segoe Print",overflow:"hidden",textOverflow:"ellipsis",border:"solid red"},children:V[n]})})})})},$=function(e){return Object(h.jsxs)("div",{className:"mainContents "+D.colorMode+" mainApp",style:{alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[Object(h.jsx)("span",{style:{fontSize:32},children:"WARNING"}),Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"150px",height:"150px",className:D.colorMode+" svgDefault",viewBox:"0 0 16 16",children:Object(h.jsx)("path",{d:"M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"})}),Object(h.jsxs)("span",{style:{fontSize:18},children:[e.tabName," not ready for access"]}),Object(h.jsx)(v.b,{to:D.rootDir+"/"+e.tabName+"/beta",children:"View Anyways"})]})};$.defaultProps={tabName:"void"};var ee=$,te=function(){var e=Object(o.useState)("light"),t=Object(r.a)(e,2),n=t[0],c=t[1];return D.colorMode=n,Object(h.jsx)("div",{children:Object(h.jsxs)(v.a,{children:[Object(h.jsx)(K.a,{exact:!0,to:D.rootDir}),Object(h.jsxs)("div",{className:"fullHeight "+n+" mainApp",children:[Object(h.jsx)(A,{setColorMode:c}),Object(h.jsxs)(K.d,{children:[Object(h.jsx)(K.b,{exact:!0,path:D.rootDir,children:Object(h.jsx)(Z,{colorMode:n})}),Object.keys(D.tabToComponent).map((function(e,t){return Object(h.jsx)(K.b,{exact:!0,path:D.rootDir+"/"+e,children:Object(h.jsx)(ee,{tabName:e})})})),Object.keys(D.tabToComponent).map((function(e,t){return Object(h.jsx)(K.b,{exact:!0,path:D.rootDir+"/"+e+"/beta",component:D.tabToComponent[e]})}))]}),Object(h.jsx)(J,{})]})]})})},ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),o(e),c(e),i(e),a(e)}))};a.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(te,{})}),document.getElementById("root")),ne()}},[[38,1,2]]]);
//# sourceMappingURL=main.fb78c332.chunk.js.map