(this.webpackJsonppersonal_website=this.webpackJsonppersonal_website||[]).push([[0],{10:function(e,t,n){},16:function(e,t,n){},29:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),c=n(21),s=n.n(c),r=(n(29),n(4)),i=n(8),l=n.n(i),d=n(12),u=(n(16),n(10),n.p+"static/media/lightModeIcon.6baac67d.svg"),f=n.p+"static/media/darkModeIcon.d6e4d60a.svg";function m(e,t,n){return b.apply(this,arguments)}function b(){return(b=Object(d.a)(l.a.mark((function e(t,n,o){var a,c,s,r,i,d,u=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=u.length>3&&void 0!==u[3]?u[3]:["Hello World"],c=u.length>4&&void 0!==u[4]?u[4]:100,s=u.length>5&&void 0!==u[5]?u[5]:690,r=u.length>6&&void 0!==u[6]?u[6]:69,i=0,!(o<a.length)){e.next=29;break}d=function(){return new Promise((function(e){setTimeout((function(){n((function(e){return e+1})),e()}),c)}))};case 7:if(!(i<a[o].length)){e.next=13;break}return e.next=10,d();case 10:i++,e.next=7;break;case 13:if(!(o<a.length-1)){e.next=29;break}return d=function(){return new Promise((function(e){setTimeout((function(){e()}),s)}))},e.next=17,d();case 17:d=function(){return new Promise((function(e){setTimeout((function(){n((function(e){return e-1})),e()}),r)}))};case 18:if(!(i>0)){e.next=24;break}return e.next=21,d();case 21:i--,e.next=18;break;case 24:return d=function(){return new Promise((function(e){setTimeout((function(){e()}),c)}))},e.next=27,d();case 27:t(o+1),m(t,n,o+1,a,c,s,r);case 29:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=m,j=n(0),p=function(){return Object(j.jsxs)("div",{className:"mainContents",style:{alignItems:"center",justifyContent:"space-evenly",fontSize:18},children:[Object(j.jsx)("span",{style:{fontSize:32},children:"Why This Website"}),Object(j.jsx)("br",{}),"This website was made mainly to learn react via a fun project.",Object(j.jsx)("br",{}),"It is still in it's infancy stage and I plan on adding lots of cool features and utilities on it",Object(j.jsx)("br",{})]})},x=(n(32),n(22)),g=n(23),O=function(){function e(t,n){Object(x.a)(this,e),this.from=Math.min(t,n),this.to=Math.max(t,n)}return Object(g.a)(e,[{key:"length",value:function(){return this.to-this.from}}]),e}(),v=function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}};function y(){var e=Object(o.useState)(v()),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(o.useEffect)((function(){function e(){a(v())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}var w=n.p+"static/media/ground.50be8c37.svg",k=(n(33),{light:n.p+"static/media/clouds_light.570f63a6.svg",dark:n.p+"static/media/clouds_dark.d4f9a3c5.svg"}),N=function(e){var t=e.highlightTouchButtons?"solid 0.5px slateblue":"none",n="translateX(".concat(-e.translateX,"px)");return Object(j.jsx)("div",{id:"resCont",className:"mainContents "+F.colorMode+" interactiveResume",tabIndex:"0",onKeyDown:e.onPressDown,onKeyUp:e.onPressUp,children:Object(j.jsxs)("div",{style:{width:e.sceneWidth,position:"relative",bottom:"0%",transform:"translateX(".concat(e.translateX,"px)")},children:[e.children,Object(j.jsx)("div",{onTouchStart:e.onPressDown,onTouchEnd:e.onPressUp,id:"left",className:"overlayButtons",style:{transform:n,border:t}}),Object(j.jsx)("div",{onTouchStart:e.onPressDown,onTouchEnd:e.onPressUp,id:"right",className:"overlayButtons",style:{transform:n,border:t,right:"0"}}),Object(j.jsx)("div",{onTouchStart:e.onPressDown,onTouchEnd:e.onPressUp,id:"up",className:"overlayButtons",style:{transform:n,border:t,left:"".concat(100/3,"%"),top:"0",height:"calc(45% - 0.5px)"}}),Object(j.jsx)("div",{onTouchStart:e.onPressDown,onTouchEnd:e.onPressUp,id:"down",className:"overlayButtons",style:{transform:n,border:t,left:"".concat(100/3,"%"),bottom:"calc(10% - 0.5px)",height:"calc(45% - 0.5px)"}}),Object(j.jsx)("img",{className:"ground notDraggable",height:"10%",width:e.sceneWidth,src:w,alt:"Ground"}),Object(j.jsx)("img",{width:100,style:{left:"25px",top:"0",transform:"translateX(".concat(.9*-e.translateX,"px)")},src:k[F.colorMode],className:"cloud notDraggable",alt:"cloud"}),Object(j.jsx)("img",{width:100,style:{left:"150px",top:"10%",transform:"translateX(".concat(.9*-e.translateX,"px)")},src:k[F.colorMode],className:"cloud notDraggable",alt:"cloud"}),Object(j.jsx)("img",{width:100,style:{left:"275px",top:"5%",transform:"translateX(".concat(.9*-e.translateX,"px)")},src:k[F.colorMode],className:"cloud notDraggable",alt:"cloud"}),Object(j.jsx)("img",{width:100,style:{left:"400px",top:"0%",transform:"translateX(".concat(.9*-e.translateX,"px)")},src:k[F.colorMode],className:"cloud notDraggable",alt:"cloud"}),Object(j.jsx)("img",{width:100,style:{left:"525px",top:"5%",transform:"translateX(".concat(.9*-e.translateX,"px)")},src:k[F.colorMode],className:"cloud notDraggable",alt:"cloud"}),Object(j.jsx)("img",{width:100,style:{left:"650px",top:"12%",transform:"translateX(".concat(.9*-e.translateX,"px)")},src:k[F.colorMode],className:"cloud notDraggable",alt:"cloud"}),Object(j.jsx)("img",{width:100,style:{left:"775px",top:"7%",transform:"translateX(".concat(.9*-e.translateX,"px)")},src:k[F.colorMode],className:"cloud notDraggable",alt:"cloud"}),Object(j.jsx)("img",{width:100,style:{left:"900px",top:"2%",transform:"translateX(".concat(.9*-e.translateX,"px)")},src:k[F.colorMode],className:"cloud notDraggable",alt:"cloud"}),Object(j.jsx)("img",{width:100,style:{left:"1025px",top:"10%",transform:"translateX(".concat(.9*-e.translateX,"px)")},src:k[F.colorMode],className:"cloud notDraggable",alt:"cloud"}),Object(j.jsx)("img",{width:100,style:{left:"1150px",top:"5%",transform:"translateX(".concat(.9*-e.translateX,"px)")},src:k[F.colorMode],className:"cloud notDraggable",alt:"cloud"}),Object(j.jsx)("img",{width:100,style:{left:"1275px",top:"0%",transform:"translateX(".concat(.9*-e.translateX,"px)")},src:k[F.colorMode],className:"cloud notDraggable",alt:"cloud"}),Object(j.jsx)("img",{width:100,style:{left:"1400px",top:"5%",transform:"translateX(".concat(.9*-e.translateX,"px)")},src:k[F.colorMode],className:"cloud notDraggable",alt:"cloud"}),Object(j.jsx)("img",{width:100,style:{left:"1525px",top:"12%",transform:"translateX(".concat(.9*-e.translateX,"px)")},src:k[F.colorMode],className:"cloud notDraggable",alt:"cloud"})]})})},M=n.p+"static/media/standing.b4a2d6e1.svg",D=function(e){return Object(j.jsx)("img",{className:"notDraggable",width:"".concat(e.width,"px"),src:M,style:{transform:"rotateY(".concat(e.flip?180:0,"deg)"),transitionDuration:"0s",position:"absolute",bottom:"calc(".concat(e.y,"px + ").concat(e.groundHeight,"%)"),left:"".concat(e.x,"px")},alt:"Player"})};D.defaultProps={groundHeight:10};var P=D,S=n.p+"static/media/superMarioTunnels.4a086321.svg",T=function(e){return Object(j.jsx)("img",{className:"notDraggable",width:"".concat(e.endPixel-e.startPixel,"px"),style:{transitionDuration:"0s",position:"absolute",bottom:"".concat(e.bottom,"%"),left:"".concat(e.startPixel,"px")},src:S,alt:"TUNNELS"})};T.defaultProps={bottom:10};var C=T,E=new O(0,1.275),I=function(e){var t=Object(o.useState)(0),n=Object(o.useState)(!1),a=Object(o.useState)(!1),c=Object(o.useState)(!1),s=y(),r=Object(o.useState)(0),i=Object(o.useState)(0)[1],l=Object(o.useState)(!1),d=Object(o.useState)(!1),u=Object(o.useState)(0),f=Object(o.useState)(!1);Object(o.useEffect)((function(){!function(e,t,n,o,a,c,s,r,i,l,d,u,f,m,b,h,j){new Promise((function(p){setTimeout((function(){var x=e[0],g=t[0],O=performance.now(),v=(O-b[0])/1e3;b[1](O),console.log("X");var y=0;n((function(e){return y=e-f*v})),t[1]((function(e){g=e+y*v+.5*f*v*v;for(var t=-1,o=0;o<s.length&&-1===t;++o){var a=s[o];t=g<=r.to*s[o].length()&&e>=r.to*s[o].length()&&x+d>=a.from&&x<=a.to?o:-1}return t=y<=0?t:-1,g<=0&&x<=l||-1!==t?(c[1]((function(e){return n(e?function(){return m}:function(){return 0}),e})),g=g<=0?0:r.to*s[t].length()):g})),o[1]((function(t){return a[1]((function(n){return e[1]((function(e){x=e,n&&!t?(h[1](!1),x=Math.min(e+u*v,l-d-i)):t&&!n&&(h[1](!0),x=Math.max(e-u*v,i));for(var o=0;o<s.length;++o){var a=s[o];if(x>=a.from-d-i&&x<=a.to+i&&g<r.to*s[o].length())return x-a.from-i>a.to-x+i?a.to+i:a.from-d-i}return x})),n})),t})),j[1](!j[0]),p()}),1)})).then()}(t,r,i,n,a,c,e.TUNNEL_X_RANGES,E,2,e.SCENE_WIDTH,e.PLAYER_WIDTH,e.X_SPEED,e.GRAVITY,e.JUMP_VELOCITY,u,l,f)}),[f[0]]);var m=Math.max(Math.min(0,-t[0]+s.width/2),-e.SCENE_WIDTH+s.width);return Object(j.jsxs)(N,{onPressDown:function(e){!function(e,t,n,o,a){var c=X(e,a),s=c.left,r=c.right,i=c.up;r?n[1](!0):s?t[1](!0):i&&o[1](!0)}(e,n,a,c,d)},onPressUp:function(e){!function(e,t,n,o,a){var c=X(e,a),s=c.left,r=c.right,i=c.up;r?n[1](!1):s?t[1](!1):i&&o[1](!1)}(e,n,a,c,d)},sceneWidth:e.SCENE_WIDTH,translateX:m,highlightTouchButtons:d[0],children:[Object(j.jsx)(P,{flip:l[0],x:t[0],y:r[0],width:e.PLAYER_WIDTH}),e.TUNNEL_X_RANGES.map((function(e){return Object(j.jsx)(C,{startPixel:e.from,endPixel:e.to})}))]})};function X(e,t){var n,o,a;return e.type.startsWith("key")?(e.preventDefault(),t[1](!1),n=37===e.keyCode||"a"===e.key||"A"===e.key||"4"===e.key,a="w"===e.key||" "===e.key||38===e.keyCode||"8"===e.key,o=39===e.keyCode||"d"===e.key||"D"===e.key||"6"===e.key):e.type.startsWith("touch")&&(e.preventDefault(),t[1](!0),n="left"===e.target.id,a="up"===e.target.id,o="right"===e.target.id),{left:n,up:a,right:o}}I.defaultProps={TUNNEL_X_RANGES:[],SCENE_WIDTH:50,PLAYER_WIDTH:30,X_SPEED:200,GRAVITY:2e3,JUMP_VELOCITY:750};var L=I,R=[new O(700,775),new O(1e3,1075),new O(1300,1375)],_=function(){return Object(j.jsx)(L,{TUNNEL_X_RANGES:R,SCENE_WIDTH:1550})},W=function(){return Object(j.jsx)("div",{className:"mainContents",style:{alignItems:"center",justifyContent:"space-evenly",fontFamily:"Segoe Print",fontSize:69},children:"Projects"})},A=function(){return Object(j.jsx)("div",{className:"mainContents",style:{alignItems:"center",justifyContent:"space-evenly",fontFamily:"Segoe Print",fontSize:69},children:"ABOUT ME"})},H=n(19),z=function(e){var t="10px";return Object(j.jsxs)("div",{className:"box-shadow "+F.colorMode,style:Object(H.a)(Object(H.a)({},e.style),{},{height:"100%",justifyItems:"start",overflowWrap:"break-word",margin:"8px",borderRadius:t,display:"flex",flexDirection:"column"}),children:[Object(j.jsx)("img",{src:e.image,width:"100%",className:"notDraggable",style:{borderTopLeftRadius:t,borderTopRightRadius:t},alt:"card"}),Object(j.jsx)("h2",{className:"notDraggable",style:{margin:"0",padding:"5px 0 0px 5px",fontWeight:"500"},children:e.head}),Object(j.jsx)("p",{className:"notDraggable",style:{margin:"0",padding:"0 0 10px 10px"},children:e.body})]})},U=n.p+"static/media/resume_scr.65aa6902.PNG",B=n.p+"static/media/interactive_light.46676397.PNG",Y=n(9),G=function(){var e=y(),t=e.height,n=e.width,o=t>.85*n?"column":"row",a={width:"".concat(t>.85*n?80:45,"vw"),maxWidth:"100%"};return Object(j.jsxs)("div",{className:"mainContents "+F.colorMode,style:{justifyContent:"space-evenly",flexDirection:o,alignItems:"center"},children:[Object(j.jsx)("a",{rel:"noreferrer",style:{textDecoration:"none",color:"inherit"},href:"https://drive.google.com/file/d/1kVBPNnSOb8-VCF58reKhRxOSMkhKNZqx/view?usp=sharing",target:"_blank",children:Object(j.jsx)(z,{head:"Official Resume",body:"Download my official resume",image:U,style:a})}),Object(j.jsx)(Y.b,{activeClassName:"notDraggable",style:{textDecoration:"none",color:"inherit"},to:F.rootDir+"/"+F.componentNameToAddress["Interactive Resume"],className:"notDraggable",children:Object(j.jsx)(z,{head:"Interactive Resume",body:"Mario type game.[Incomplete]",image:B,style:a})})]})},F={tabToComponent:{Home:p,Resume:G,Projects:W,"About Me":A},componentNameToAddress:{Home:"Home/beta",Resume:"Resume/beta",Projects:"Projects/beta","About Me":"About Me/beta","Interactive Resume":"Resume/InteractiveResume/beta"},allComponents:{Home:p,Resume:G,Projects:W,"About Me":A,"Interactive Resume":_},rootDir:"/personal_website",githubLink:"https://github.com/EtashTyagi",linkedinLink:"https://www.linkedin.com/in/etash-tyagi-19b489214/",hackerrankLink:"https://www.hackerrank.com/Etash19360",codeforcesLink:"https://codeforces.com/profile/etash",codechefLink:"https://www.codechef.com/users/etasht",facebookLink:"https://facebook.com/etash.tyagi",colorMode:"light"},V=["Etash Tyagi"],J=function(e){var t=Object(o.useState)(0),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(o.useState)(!1),i=Object(r.a)(s,2),l=i[0],d=i[1],m=Object(o.useState)(0),b=Object(r.a)(m,2),p=b[0],x=b[1];return Object(o.useEffect)((function(){l||(document.documentElement.style.setProperty("color-scheme","light"),d((function(){return h(x,c,p,V,100,690,69),!0})))}),[l]),Object(j.jsxs)("div",{className:"mainContainer "+F.colorMode+" titleHeader",children:[Object(j.jsx)("span",{className:"headingText notDraggable "+F.colorMode+" titleHeader",children:V[p].substr(0,a)}),Object(j.jsx)("div",{className:"blinkingRectangle notDraggable",style:{fontSize:28},children:"|"}),Object(j.jsx)("img",{className:"icon titleHeader notDraggable",src:"dark"===F.colorMode?u:f,alt:"dark/light",onClick:function(){!function(){var t="dark"===F.colorMode?"light":"dark";e.setColorMode(t)}()}})]})};J.defaultProps={setColorMode:function(){}};var K=J,q=function(e){var t=-1;return Object(j.jsx)("div",{className:"mainContainer "+e.colorMode+" navBarHeader",children:Object.keys(F.tabToComponent).map((function(n,o){return[0===++t?Object(j.jsx)("div",{},o.toLocaleString()):Object(j.jsx)("div",{className:"vLine"},o.toLocaleString()),Object(j.jsx)(Y.b,{activeClassName:"tabContainer "+F.colorMode+" selected notDraggable",to:F.rootDir+"/"+n,className:"tabContainer notDraggable "+e.colorMode,children:n},n)]}))})};q.defaultProps={colorMode:"light"};var Z=q,Q=function(e){var t=Object(o.useState)("light"),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(o.useState)({prevOffset:0,headerOffset:0}),i=Object(r.a)(s,2),l=i[0],d=i[1],u=Object(o.useState)(!1),f=Object(r.a)(u,2),m=f[0],b=f[1];return m||(document.documentElement.style.setProperty("color-scheme","light"),b((function(){return function(e){return $.apply(this,arguments)}(d).then(),!0}))),Object(j.jsxs)("div",{style:{zIndex:1},children:[Object(j.jsxs)("div",{style:{position:"fixed",width:"100%",transform:"translate(0px, ".concat(l.headerOffset,"px)")},children:[Object(j.jsx)(K,{setColorMode:function(t){e.setColorMode((function(){return t})),c((function(){return t}))}}),Object(j.jsx)("div",{className:"hLine "+a}),Object(j.jsx)(Z,{colorMode:a})]}),Object(j.jsx)("div",{className:"spacer"})]})};function $(){return($=Object(d.a)(l.a.mark((function e(t){var n,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0,o=function(){return new Promise((function(e){setTimeout((function(){window.pageYOffset!==n&&(n=window.pageYOffset,t((function(e){return{prevOffset:n,headerOffset:e.prevOffset>n?n<=52?Math.min(0,e.headerOffset+(e.prevOffset-n)):Math.min(-51.25,e.headerOffset+(e.prevOffset-n)):Math.max(-113,e.headerOffset+(e.prevOffset-n))}}))),e()}),5)}))};case 2:return e.next=5,o();case 5:e.next=2;break;case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Q.defaultProps={setColorMode:function(){}};var ee=Q,te=(n(39),n.p+"static/media/linkedinIcon.071f5674.svg"),ne=n.p+"static/media/facebookIcon.0e5e570c.svg",oe=n.p+"static/media/githubIcon.9417c10f.svg",ae=n.p+"static/media/hackerrankIcon.49b09f83.svg",ce=n.p+"static/media/codeforcesIcon.1e8bc162.svg",se=n.p+"static/media/codechefIcon.eeab98c6.svg",re=function(e){return Object(j.jsx)("div",{children:Object(j.jsxs)("a",{className:"links footer",target:"_blank",rel:"noreferrer",href:e.link,children:[Object(j.jsx)("img",{src:e.src,height:24,alt:e.name+" icon"}),Object(j.jsx)("span",{style:{paddingLeft:3},children:e.name})]})})},ie=function(){return Object(j.jsxs)("div",{style:{zIndex:1},children:[Object(j.jsx)("div",{className:"mainContainer "+F.colorMode+" footer",children:Object(j.jsx)("span",{style:{paddingLeft:24},children:"\xa9Etash Tyagi, 2021"})}),Object(j.jsx)("div",{className:"hLine "+F.colorMode}),Object(j.jsxs)("div",{style:{justifyContent:"space-evenly"},className:"mainContainer "+F.colorMode+" footer",children:[Object(j.jsx)(re,{src:oe,name:"Github",link:F.githubLink}),Object(j.jsx)(re,{src:te,name:"LinkedIn",link:F.linkedinLink}),Object(j.jsx)(re,{src:ae,name:"HackerRank",link:F.hackerrankLink}),Object(j.jsx)(re,{src:ce,name:"Codeforces",link:F.codeforcesLink}),Object(j.jsx)(re,{src:se,name:"CodeChef",link:F.codechefLink}),Object(j.jsx)(re,{src:ne,name:"Facebook",link:F.facebookLink})]})]})},le=n(2),de=(n(40),["Hello World!","Welcome to my website.","Select a tab to continue."]),ue=2e3,fe=10;function me(){return(me=Object(d.a)(l.a.mark((function e(t,n,o){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=function(e){return new Promise((function(n){setTimeout((function(){t(e),n()}),3999)}))};case 1:if(!(++n<de.length)){e.next=6;break}return e.next=4,a(n);case 4:e.next=1;break;case 6:return e.next=8,new Promise((function(e){setTimeout((function(){o(!1),e()}),ue)}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var be=function(){var e=Object(o.useState)(0),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(o.useState)(!1),s=Object(r.a)(c,2),i=s[0],l=s[1],d=Object(o.useState)(!1),u=Object(r.a)(d,2),f=u[0],m=u[1],b=Object(o.useState)({x:0,y:0}),h=Object(r.a)(b,2),p=h[0],x=h[1];return Object(o.useEffect)((function(){i||l((function(){return function(e,t,n){me.apply(this,arguments)}(a,n,m),m(!0),!0}))}),[i]),Object(j.jsx)("div",{className:"mainContents welcomeMain "+F.colorMode,style:{fontSize:"7vmin",paddingLeft:10,paddingRight:10,backgroundPositionX:"calc(50% + ".concat(Math.max(-10,Math.min(fe,p.x)),"px)"),backgroundPositionY:"calc(100% + ".concat(Math.max(-10,Math.min(fe,p.y)),"px)")},onMouseMove:function(e){x((function(){return{x:e.movementX,y:e.movementY}}))},children:Object(j.jsx)("div",{style:{width:"100%"},children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",className:"helloWorld "+F.colorMode+(f?" animating":""),style:{animationDuration:"".concat(ue,"ms")},children:Object(j.jsx)("text",{x:"".concat(50+.01*Math.max(-10,Math.min(fe,p.x)),"%"),y:"".concat(15+.01*Math.max(-10,Math.min(fe,p.y)),"%"),style:{strokeWidth:"0.15vmin",fontFamily:"Segoe Print",overflow:"hidden",textOverflow:"ellipsis",border:"solid red"},children:de[n]})})})})},he=function(e){return Object(j.jsxs)("div",{className:"mainContents "+F.colorMode+" mainApp",style:{alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[Object(j.jsx)("span",{style:{fontSize:32},children:"WARNING"}),Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"150px",height:"150px",className:F.colorMode+" svgDefault",viewBox:"0 0 16 16",children:Object(j.jsx)("path",{d:"M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"})}),Object(j.jsxs)("span",{style:{fontSize:18},children:[e.tabName," not ready for access"]}),Object(j.jsx)(Y.b,{to:F.rootDir+"/"+e.tabName+"/beta",children:"View Anyways"})]})};he.defaultProps={tabName:"void"};var je=he,pe=function(){var e=Object(o.useState)("light"),t=Object(r.a)(e,2),n=t[0],a=t[1];return F.colorMode=n,Object(j.jsx)("div",{children:Object(j.jsxs)(Y.a,{children:[Object(j.jsx)(le.a,{exact:!0,to:F.rootDir}),Object(j.jsxs)("div",{className:"fullHeight "+n+" mainApp",children:[Object(j.jsx)(ee,{setColorMode:a}),Object(j.jsxs)(le.d,{children:[Object(j.jsx)(le.b,{exact:!0,path:F.rootDir,children:Object(j.jsx)(be,{colorMode:n})}),Object.keys(F.tabToComponent).map((function(e,t){return Object(j.jsx)(le.b,{exact:!0,path:F.rootDir+"/"+e,children:Object(j.jsx)(je,{tabName:e})},e)})),Object.keys(F.allComponents).map((function(e,t){return Object(j.jsx)(le.b,{exact:!0,path:F.rootDir+"/"+F.componentNameToAddress[e],component:F.allComponents[e]},e)}))]}),Object(j.jsx)(ie,{})]})]})})},xe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),o(e),a(e),c(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(pe,{})}),document.getElementById("root")),xe()}},[[41,1,2]]]);
//# sourceMappingURL=main.61bef759.chunk.js.map