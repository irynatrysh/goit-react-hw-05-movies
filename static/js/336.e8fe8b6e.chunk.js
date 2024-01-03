"use strict";(self.webpackChunkgoit_react_hw_05_movie=self.webpackChunkgoit_react_hw_05_movie||[]).push([[336],{4377:function(n,r,t){t.d(r,{Hg:function(){return c},Jh:function(){return d},Ry:function(){return s},qP:function(){return u},yO:function(){return p}});var e=t(5861),a=t(4687),o=t.n(a),i=t(5294);i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.params={api_key:"2c32cf6e2f1b9ee11784c9e34961f238"};var c=function(){var n=(0,e.Z)(o().mark((function n(){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/trending/all/day");case 3:return r=n.sent,t=r.data,n.abrupt("return",t);case 8:throw n.prev=8,n.t0=n.catch(0),console.error("Error fetching trending movies",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(o().mark((function n(r){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/search/movie?language=en-US&query=".concat(r));case 3:return t=n.sent,e=t.data,n.abrupt("return",e);case 8:throw n.prev=8,n.t0=n.catch(0),console.error("Error fetching searchFilm",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(r){return n.apply(this,arguments)}}(),u=function(){var n=(0,e.Z)(o().mark((function n(r){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("movie/".concat(r,"?language=en-US"));case 3:return t=n.sent,e=t.data,n.abrupt("return",e);case 8:throw n.prev=8,n.t0=n.catch(0),console.error("Error fetching movie details",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(o().mark((function n(r){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("movie/".concat(r,"/credits?language=en-US"));case 3:return t=n.sent,e=t.data,console.log("Casts data:",e),n.abrupt("return",e);case 9:throw n.prev=9,n.t0=n.catch(0),console.error("Error fetching casts",n.t0),n.t0;case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(o().mark((function n(r){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("movie/".concat(r,"/reviews?language=en-US"));case 3:return t=n.sent,e=t.data,console.log("Reviews data:",e),n.abrupt("return",e);case 9:throw n.prev=9,n.t0=n.catch(0),console.error("Error fetching reviews",n.t0),n.t0;case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(r){return n.apply(this,arguments)}}()},3336:function(n,r,t){t.r(r),t.d(r,{Cast:function(){return O}});var e,a,o,i,c,s,u,p,d=t(5861),l=t(9439),f=t(4687),x=t.n(f),h=t(4377),g=t(2791),v=t(7689),m=t(168),w=t(8445),b=(0,w.ZP)("ul")(e||(e=(0,m.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 40px;\n  row-gap: 50px;\n  align-items: center;\n  justify-content: center;\n  padding-left: 0;\n  padding-bottom: 20px;\n"]))),Z=(0,w.ZP)("li")(a||(a=(0,m.Z)(["\n  width: 200px;\n  height: 310px;\n"]))),j=(0,w.ZP)("div")(o||(o=(0,m.Z)(["\n  height: 200px;\n  width: 200px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin-bottom: 5px;\n"]))),y=(0,w.ZP)("img")(i||(i=(0,m.Z)(["\n  width: 200px;\n  height: auto;\n\n  object-fit: cover;\n"]))),k=(0,w.ZP)("div")(c||(c=(0,m.Z)(["\n  display: flex;\n  margin: 0 auto;\n  margin-top: 20px;\n  border-radius: 20px;\n  box-shadow: 9px 10px 8px -10px rgba(0, 0, 0, 0.1);\n  border: 1px solid #dfe5ed;\n  background-color: #fff;\n  max-width: 1100px;\n  overflow: hidden;\n  margin-bottom: 20px;\n"]))),P=(0,w.ZP)("div")(s||(s=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n  height: 110px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 20px;\n  box-shadow: 9px 10px 8px -10px rgba(0, 0, 0, 0.1);\n  border: 1px solid #dfe5ed;\n  background-color: rgb(225, 236, 244);\n"]))),_=(0,w.ZP)("p")(u||(u=(0,m.Z)(["\n  display: flex;\n  margin: 0 auto;\n  text-align: center;\n  color: rgb(57, 115, 157);\n  font-size: 20px;\n  margin-bottom: 15px;\n"]))),U=(0,w.ZP)("p")(p||(p=(0,m.Z)(["\n  display: flex;\n  margin: 0 auto;\n  text-align: center;\n  color: rgb(57, 115, 157);\n"]))),E=t(9406),C=t(4438),S=t(184),O=function(){var n=(0,v.UO)().id,r=(0,g.useState)(null),t=(0,l.Z)(r,2),e=t[0],a=t[1],o=(0,g.useState)(!1),i=(0,l.Z)(o,2),c=i[0],s=i[1];if((0,g.useEffect)((function(){var r=function(){var r=(0,d.Z)(x().mark((function r(){var t;return x().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,s(!0),r.next=4,(0,h.yO)(n);case 4:t=r.sent,a(t),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.error("Error fetching casts",r.t0);case 11:return r.prev=11,s(!1),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[0,8,11,14]])})));return function(){return r.apply(this,arguments)}}();r()}),[n]),c)return(0,S.jsxs)(E.gx,{children:[c&&(0,S.jsx)(C.a,{}),(0,S.jsx)(E.sd,{children:"We are loading the cast of this movie"})]});if(!e||!e.cast||0===e.cast.length)return(0,S.jsxs)(E.gx,{children:[c&&(0,S.jsx)(C.a,{}),(0,S.jsx)(E.sd,{children:"Unfortunately, we do not have data on the cast of this film. We apologize"})]});return(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(k,{children:(0,S.jsx)(b,{children:e.cast.map((function(n){var r=n.id,t=n.profile_path,e=n.name,a=n.character;return(0,S.jsxs)(Z,{children:[(0,S.jsx)(j,{children:(0,S.jsx)(y,{src:t?"https://image.tmdb.org/t/p/w500".concat(t):"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg",alt:e,width:250})}),(0,S.jsxs)(P,{children:[(0,S.jsx)(_,{children:e}),(0,S.jsxs)(U,{children:["Character: ",(0,S.jsx)("br",{}),a]})]})]},r)}))})})})}},4438:function(n,r,t){t.d(r,{a:function(){return s}});var e,a=t(4137),o=t(168),i=(0,t(8445).ZP)("div")(e||(e=(0,o.Z)(["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),c=t(184),s=function(){return(0,c.jsx)(i,{children:(0,c.jsx)(a.s5,{strokeColor:"#4b0082",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})}},9406:function(n,r,t){t.d(r,{Bu:function(){return d},UB:function(){return p},gx:function(){return u},sd:function(){return l}});var e,a,o,i,c=t(168),s=t(8445),u=(0,s.ZP)("div")(e||(e=(0,c.Z)(["\n  display: flex;\n  margin: 0 auto;\n  margin-top: 20px;\n  border-radius: 20px;\n  box-shadow: 9px 10px 8px -10px rgba(0, 0, 0, 0.1);\n  border: 1px solid #dfe5ed;\n  background-color: #fff;\n  max-width: 1100px;\n  margin-bottom: 20px;\n  justify-content: center;\n  align-items: center;\n"]))),p=(0,s.ZP)("ul")(a||(a=(0,c.Z)(["\n  padding: 10px 40px 10px 40px;\n"]))),d=(0,s.ZP)("p")(o||(o=(0,c.Z)(["\n  color: #122236;\n  text-align: justify;\n"]))),l=(0,s.ZP)("p")(i||(i=(0,c.Z)(["\n  display: flex;\n  color: #122236;\n"])))}}]);
//# sourceMappingURL=336.e8fe8b6e.chunk.js.map