!function(e){var t={},r={0:0};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.e=function(t){if(0!==r[t]){var n=require("./"+t+".bundle.js"),a=n.modules,c=n.ids;for(var i in a)e[i]=a[i];for(var s=0;s<c.length;s++)r[c[s]]=0}return Promise.all([])},n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n.oe=function(e){process.nextTick(function(){throw e})},n(n.s=12)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("@babel/runtime/helpers/classCallCheck")},function(e,t){e.exports=require("@babel/runtime/helpers/createClass")},function(e,t){e.exports=require("@babel/runtime/helpers/possibleConstructorReturn")},function(e,t){e.exports=require("@babel/runtime/helpers/getPrototypeOf")},function(e,t){e.exports=require("@babel/runtime/helpers/inherits")},function(e,t){e.exports=require("redux-thunk")},function(e,t,r){"use strict";r.r(t);var n=r(3),a=r.n(n),c=r(0),i=r.n(c),s=r(4),o=r(2),l=r(5),u=r(6),d=r.n(u),m=r(7),p=r.n(m),f=r(8),h=r.n(f),g=r(9),v=r.n(g),_=r(14),b=r.n(_),y=r(10),E=r.n(y),x=r(15),N=r.n(x),j=function(e){var t=e.categories,r=e.currentCategory,n=e.changeCategory;return i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"header__search"},i.a.createElement("input",{placeholder:"Search",className:"header__search--input"})),i.a.createElement("div",{className:"header__categories"},t?t.map(function(e){return e!==r?i.a.createElement("span",{style:{opacity:".5"},className:"header__categories--category",onClick:function(){return n(e)}},e):i.a.createElement("span",{className:"header__categories--category"},e)}):""),i.a.createElement("div",{className:"header__cart"},i.a.createElement("svg",null,i.a.createElement("use",{xlinkHref:"./imgs/sprite.svg#icon-cart"}))))},q=function(e){var t=e.filters;return i.a.createElement("div",{className:"sidenav"},i.a.createElement("div",{className:"sidenav__name"},i.a.createElement("p",null,"Trugapparel")),i.a.createElement("div",{className:"sidenav__filters"},i.a.createElement("h1",{className:"sidenav__filters--h1"},"Filters"),i.a.createElement("div",{className:"sidenav__filters--menu"},t?t.map(function(e){return i.a.createElement("span",{className:"sidenav__filter"},e)}):"")))},O=function(e){var t=e.products;return console.log(t),i.a.createElement("div",{className:"grid"},i.a.createElement("div",{className:"grid__container"},i.a.createElement("div",{className:"grid__container__content"},t?t.map(function(e){return i.a.createElement("div",{className:"grid__product"},i.a.createElement("figure",{className:"grid__product__figure"},i.a.createElement("img",{src:e.images[0]})),i.a.createElement("div",{className:"grid__product__details"},i.a.createElement("div",{className:"grid__product__details--name"},i.a.createElement("p",null,e.name)),i.a.createElement("div",{className:"grid__product__details--price"},i.a.createElement("p",null,e.price))))}):i.a.createElement("div",null))))},C=function(e){function t(e){var r;return d()(this,t),r=h()(this,v()(t).call(this,e)),N()(b()(r),"changeCategory",function(e){r.setState({category:e})}),r.state={categories:!1,filters:!1,products:!1,category:"men",filter:null},r}return E()(t,e),p()(t,[{key:"componentDidMount",value:function(){var e=this;r.e(1).then(r.bind(null,13)).then(function(t){e.setState({categories:t.default.categories,filters:t.default.filters,products:t.default.products})})}},{key:"render",value:function(){return i.a.createElement("div",{className:"home"},i.a.createElement(j,{categories:this.state.categories,currentCategory:this.state.category,changeCategory:this.changeCategory}),i.a.createElement(q,{filters:this.state.filters}),i.a.createElement(O,{products:this.state.products}))}}]),t}(c.Component),S=r(1),P=r(11),T=r.n(P),k={data:[]},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"GET_LANDING_PAGE_DATA":return Object.assign({},e,{data:t.payload});default:return e}},M=Object(S.combineReducers)({landing_page_data:w}),A=["".concat("http://localhost:3000/","Shirts"),"".concat("http://localhost:3000/","Accessories")],R=a()();R.use(a.a.static("public")),R.get("*",function(e,t){console.log("status here",t.status,A);var r=Object(S.createStore)(M,{},Object(S.applyMiddleware)(T.a));t.send(function(e,t){var r=Object(s.renderToString)(i.a.createElement(l.Provider,{store:t},i.a.createElement(o.StaticRouter,{location:e.path,context:{}},i.a.createElement(C,null))));return'\n    <html>\n      <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet">\n        <link rel="stylesheet" href="style.css">\n      </head>\n      <body>\n        <div id="root">'.concat(r,'</div>\n        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js"><\/script>\n        <script src="bundle.js"><\/script>\n      </body>\n    </html>\n  ')}(e,r))});var D=process.env.PORT||3e3;R.listen(D,function(){console.log("Listening on port 3000")})},,function(e,t){e.exports=require("@babel/runtime/helpers/assertThisInitialized")},function(e,t){e.exports=require("@babel/runtime/helpers/defineProperty")}]);
//# sourceMappingURL=bundle.js.map