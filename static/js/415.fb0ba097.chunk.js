"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{6368:function(e,n,t){t.d(n,{O:function(){return u}});var r=t(7689),a=t(1087),c=t(184),u=function(e){var n=e.movies,t=(0,r.TH)();return(0,c.jsx)("ul",{className:"render_List",children:n.map((function(e){return(0,c.jsx)("li",{className:"renderCard",children:(0,c.jsx)(a.OL,{to:"/movies/".concat(e.id),state:{from:t},children:e.title||e.name})},e.id)}))})}},5415:function(e,n,t){t.r(n);var r=t(5861),a=t(9439),c=t(4687),u=t.n(c),s=t(2791),i=t(8183),o=t(6368),f=t(6983),p=t(7596),v=t(184);n.default=function(){var e=(0,s.useState)([]),n=(0,a.Z)(e,2),t=n[0],c=n[1],d=(0,s.useState)(!0),l=(0,a.Z)(d,2),h=l[0],m=l[1],g=(0,s.useState)(""),x=(0,a.Z)(g,2),k=x[0],w=x[1];return(0,s.useEffect)((function(){(0,r.Z)(u().mark((function e(){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.prev=1,e.next=4,(0,i.WE)();case 4:n=e.sent,t=n.results,c(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),w(e.t0);case 12:return e.prev=12,m(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})))()}),[]),(0,v.jsxs)("div",{children:[(0,v.jsx)("h1",{children:"Tranding today"}),0!==t.length&&(0,v.jsx)(o.O,{movies:t}),h&&(0,v.jsx)(f.a,{}),k&&p.Am.error("Please wait...")]})}},8183:function(e,n,t){t.d(n,{FP:function(){return f},LC:function(){return p},WE:function(){return i},Xn:function(){return v},mv:function(){return o}});var r=t(5861),a=t(4687),c=t.n(a),u=t(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="511459bb76b455592e33aca5ec0b21c6",i=function(){var e=(0,r.Z)(c().mark((function e(){var n,t,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:"trending/movie/day",t=a.length>1?a[1]:void 0,e.next=4,u.Z.get("".concat(n,"?api_key=").concat(s),t);case 4:return r=e.sent,e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(n,t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?api_key=".concat(s,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"),t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a,i=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>1&&void 0!==i[1]?i[1]:"",r=i.length>2?i[2]:void 0,e.next=4,u.Z.get("movie/".concat(n).concat(t,"?api_key=").concat(s,"&language=en-US"),r);case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(n,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.fb0ba097.chunk.js.map