(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{26:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var c=n(2),a=n.n(c),i=n(4),s=n.n(i),r=(n(6),n(5)),o=n.n(r),l=n(15),u=n(16),j=n(17),h=n(20),m=n(19),d=(n.p,n(26),n(18)),p=n.n(d),b=n(0);function v(t){var e=t.title,n=t.imageUrl,c=t.contents;return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("img",{src:n,alt:e}),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h4",{children:Object(b.jsx)("b",{children:e})}),Object(b.jsx)("p",{children:c})]})]})}var f=function(t){Object(h.a)(n,t);var e=Object(m.a)(n);function n(t){var c;return Object(u.a)(this,n),(c=e.call(this,t)).call=Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:p.a.get("https://yts.mx/api/v2/list_movies.json?quality=3D").then((function(t){c.setState({movies:t.data.data.movies})})).catch((function(t){console.log(t)}));case 1:case"end":return t.stop()}}),t)}))),c.state={movies:[]},c}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.call()}},{key:"render",value:function(){return console.log(this.state),Object(b.jsx)("div",{class:"wrapper",children:this.state.movies.map((function(t){return Object(b.jsx)(v,{title:t.title,imageUrl:t.large_cover_image,contents:t.summary})}))})}}]),n}(a.a.Component);var O=function(){return Object(b.jsx)(f,{})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),c(t),a(t),i(t),s(t)}))};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),g()},6:function(t,e,n){}},[[46,1,2]]]);
//# sourceMappingURL=main.f43182ca.chunk.js.map