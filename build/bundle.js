!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=15)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(a);var o=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={cards:["./imgs/unsplash5.jpg","./imgs/unsplash16.jpg","./imgs/unsplash11.jpg","./imgs/unsplash7.jpg"]},n.renderCards=n.renderCards.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"renderCards",value:function(){return this.state.cards.map(function(e){return l.default.createElement("div",{className:"display__card",key:e},l.default.createElement("figure",null,l.default.createElement("img",{src:e})),l.default.createElement("div",{className:"display__card--details"},l.default.createElement("div",{className:"display__card--details-name"},"Premier Cropped Skinny Jean"),l.default.createElement("div",{className:"display__card--details-price"},"$400.00")))})}},{key:"render",value:function(){return l.default.createElement("div",{className:"display"},l.default.createElement("h2",{className:"display--h2"},"Recommended for you"),l.default.createElement("div",{className:"display__content"},this.renderCards()))}}]),t}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(a);var o=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={promotions:["./imgs/unsplash7.jpg","./imgs/unsplash16.jpg","./imgs/unsplash11.jpg","./imgs/unsplash13.jpg"],firstPromotionSlideContent:["./imgs/unsplash15.jpg","./imgs/unsplash2.jpg","./imgs/unsplash3.jpg","./imgs/unsplash4.jpg"],currentFirstPromoPhoto:0},n.renderPromotions=n.renderPromotions.bind(n),n.renderFirstPromotionSlide=n.renderFirstPromotionSlide.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"renderFirstPromotionSlide",value:function(){var e=this;return this.state.firstPromotionSlideContent.map(function(t){return e.state.firstPromotionSlideContent.indexOf(t)===e.state.currentFirstPromoPhoto?l.default.createElement("figure",{key:t,style:{zIndex:"10",display:"block"}},l.default.createElement("img",{src:t}),l.default.createElement("div",{className:"announcements__slide__details"},l.default.createElement("h2",null,"NEW DROP: NIKE AIR MAX 270 REACT"),l.default.createElement("p",null,"The hybrid style bringing the heat"),l.default.createElement("p",null,"7th Sept 2019"))):l.default.createElement("figure",{key:t,style:{display:"none"}},l.default.createElement("img",{src:t}),l.default.createElement("div",{className:"announcements__slide__details"},l.default.createElement("h2",null,"NEW DROP: NIKE AIR MAX 270 REACT"),l.default.createElement("p",null,"The hybrid style bringing the heat"),l.default.createElement("p",null,"7th Sept 2019")))})}},{key:"renderPromotions",value:function(){var e=this;return this.state.promotions.map(function(t){return 0===e.state.promotions.indexOf(t)?l.default.createElement("div",{key:t,className:"announcements__fig"},e.renderFirstPromotionSlide()):l.default.createElement("figure",{className:"announcements__fig",key:t},l.default.createElement("img",{src:t}),l.default.createElement("div",{className:"announcements__slide__details"},l.default.createElement("h2",null,"NEW DROP: NIKE AIR MAX 270 REACT"),l.default.createElement("p",null,"The hybrid style bringing the heat"),l.default.createElement("p",null,"7th Sept 2019")))})}},{key:"componentDidMount",value:function(){var e=this;setInterval(function(){if(e.state.currentFirstPromoPhoto>=e.state.firstPromotionSlideContent.length-1)return e.setState({currentFirstPromoPhoto:0});e.setState(function(e){return{currentFirstPromoPhoto:e.currentFirstPromoPhoto+=1}})},1500)}},{key:"render",value:function(){return l.default.createElement("div",{className:"announcements"},this.renderPromotions())}}]),t}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(0));var a=["./imgs/shirt8.jpg","./imgs/shirt6.jpg","./imgs/shirt5.jpg","./imgs/shirt4.jpg","./imgs/shirt7.jpg"];t.default=function(){return r.default.createElement("div",{className:"mobilemast"},r.default.createElement("figure",null,r.default.createElement("img",{src:"https://res.cloudinary.com/dxlhzerlq/image/upload/q_56/v1559594352/girl-glasses_sm1hfi.jpg"})),r.default.createElement("div",{className:"mobilemast__words"},r.default.createElement("h1",null,"Find a style for every mood."),r.default.createElement("div",{className:"mobilemast__words__carousol"},r.default.createElement("div",{className:"mobilemast__words__carousol--body"},a.map(function(e){return r.default.createElement("div",{className:"mobilemast__words__carousol--card",key:e},r.default.createElement("figure",null,r.default.createElement("img",{src:e})),r.default.createElement("div",{className:"mobilemast__words__carousol--card--text"},r.default.createElement("p",null,"Category")))})))))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(0));var a=["./imgs/unsplash1.jpg","./imgs/unsplash6.jpg","./imgs/unsplash11.jpg","./imgs/unsplash12.jpg","./imgs/unsplash13.jpg","./imgs/unsplash14.jpg","./imgs/unsplash15.jpg"],l=["./imgs/shirt8.jpg","./imgs/shirt6.jpg","./imgs/shirt5.jpg","./imgs/shirt4.jpg","./imgs/shirt7.jpg"];t.default=function(){return r.default.createElement("div",{className:"jumbotron"},a.map(function(e){return r.default.createElement("figure",{key:e,className:"jumbotron__fig"},r.default.createElement("img",{src:e}))}),r.default.createElement("div",{className:"jumbotron__toppicks"},r.default.createElement("h1",null,"Find a style for every mood."),function(){var e=0;return l.map(function(t){return e+=1,r.default.createElement("figure",{className:"jumbotron__toppicks--pick",key:e},r.default.createElement("img",{src:t}),r.default.createElement("div",{className:"jumbotron__toppicks--text"},r.default.createElement("p",null,"Category")))})}()),r.default.createElement("div",{className:"jumbotron__bottom"},r.default.createElement("input",{placeholder:"Search for items, brands and inspiration"}),r.default.createElement("span",null,"Start Shopping")))}},function(e,t){e.exports=require("react-router-dom")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(a);var o=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={date:null,labels:["About","Privacy","Terms","Help"],icons:["./imgs/sprite.svg#icon-instagram","./imgs/sprite.svg#icon-twitter","./imgs/sprite.svg#icon-facebook1"]},e.returnLabels=e.returnLabels.bind(e),e.returnIcons=e.returnIcons.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"returnLabels",value:function(){return this.state.labels.map(function(e){return l.default.createElement("div",{className:"footer__label",key:e},l.default.createElement("p",null,e))})}},{key:"returnIcons",value:function(){return this.state.icons.map(function(e){return l.default.createElement("span",{key:e},l.default.createElement("svg",null,l.default.createElement("use",{xlinkHref:e})))})}},{key:"componentDidMount",value:function(){this.setState({date:void 0!==moment?moment(new Date).format("YYYY"):""})}},{key:"render",value:function(){return l.default.createElement("div",{className:"footer"},l.default.createElement("div",{className:"footer__top"},l.default.createElement("div",{className:"footer__top__labels"},this.returnLabels()),l.default.createElement("div",{className:"footer__top--date"},"© ",this.state.date," Trugapparel, Inc.")),l.default.createElement("div",{className:"footer__bottom"},l.default.createElement("div",{className:"footer__bottom__socials"},this.returnIcons())))}}]),t}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(a);var o=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={cards:["./imgs/unsplash5.jpg","./imgs/unsplash16.jpg","./imgs/unsplash11.jpg","./imgs/unsplash7.jpg","./imgs/unsplash5.jpg","./imgs/unsplash16.jpg","./imgs/unsplash11.jpg","./imgs/unsplash7.jpg","./imgs/unsplash5.jpg","./imgs/unsplash16.jpg","./imgs/unsplash11.jpg","./imgs/unsplash7.jpg","./imgs/unsplash5.jpg","./imgs/unsplash16.jpg","./imgs/unsplash11.jpg","./imgs/unsplash7.jpg"]},n.renderCards=n.renderCards.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"renderCards",value:function(){return this.state.cards.map(function(e){return l.default.createElement("div",{className:"productgrid__card",key:e},l.default.createElement("figure",null,l.default.createElement("img",{src:e})),l.default.createElement("div",{className:"productgrid__card--details"},l.default.createElement("div",{className:"productgrid__card--details-name"},"Premier Cropped Skinny Jean"),l.default.createElement("div",{className:"productgrid__card--details-price"},"$400.00")))})}},{key:"render",value:function(){return l.default.createElement("div",{className:"productgrid"},l.default.createElement("div",{className:"productgrid__header"},l.default.createElement("input",null),l.default.createElement("span",null,"Start Shopping")),l.default.createElement("div",{className:"productgrid__sort"}),l.default.createElement("div",{className:"productgrid__section productgrid__container"},this.renderCards()))}}]),t}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(a);var o=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={open:"translateX(-100%)",menuLabels:["Shirts","Accessories","Trousers","Hoods","Prints"]},n.changeNavState=n.changeNavState.bind(n),n.returnBtn=n.returnBtn.bind(n),n.renderMenu=n.renderMenu.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"returnBtn",value:function(){return"translateX(0)"===this.state.open?l.default.createElement("div",{className:"sidenav__btn--close",onClick:this.changeNavState},l.default.createElement("span",null),l.default.createElement("span",null),l.default.createElement("span",null)):l.default.createElement("div",{className:"sidenav__btn--open",onClick:this.changeNavState},l.default.createElement("span",null),l.default.createElement("span",null),l.default.createElement("span",null))}},{key:"changeNavState",value:function(){if("translateX(0)"===this.state.open)return this.setState({open:"translateX(-100%)"});this.setState({open:"translateX(0)"})}},{key:"renderMenu",value:function(){return this.state.menuLabels.map(function(e){return l.default.createElement("div",{className:"sidenav__menu--btn",key:e},l.default.createElement("p",null,e))})}},{key:"render",value:function(){return l.default.createElement("div",{className:"sidenav",style:{transform:this.state.open}},"translateX(0)"===this.state.open?l.default.createElement("div",{className:"sidenav--overlay",onClick:this.changeNavState}):"",this.returnBtn(),l.default.createElement("div",{className:"sidenav__menu"},this.renderMenu()))}}]),t}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(0)),a=u(n(4)),l=u(n(3)),o=u(n(2)),s=u(n(1));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return r.default.createElement("div",null,r.default.createElement(a.default,null),r.default.createElement(l.default,null),r.default.createElement(o.default,null),r.default.createElement(s.default,null))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(a);var o=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={profileIcons:["./imgs/sprite.svg#icon-user1","./imgs/sprite.svg#icon-cart"],menuLabels:["Shirts","Accessories","Trousers","Hoods","Prints"],dropDownLabels:["Sign In/Join","My Account","My Orders"]},n.renderProfileIcons=n.renderProfileIcons.bind(n),n.renderMenuItems=n.renderMenuItems.bind(n),n.renderdropDownLabels=n.renderdropDownLabels.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"renderProfileIcons",value:function(){return this.state.profileIcons.map(function(e){return"./imgs/sprite.svg#icon-user1"===e?l.default.createElement("div",{className:"header__top--user-item",id:"profile-head",key:e},l.default.createElement("span",null,l.default.createElement("svg",null,l.default.createElement("use",{xlinkHref:e})))):l.default.createElement("div",{className:"header__top--user-item",key:e},l.default.createElement("span",null,l.default.createElement("svg",null,l.default.createElement("use",{xlinkHref:e}))))})}},{key:"renderMenuItems",value:function(){return this.state.menuLabels.map(function(e){return l.default.createElement("span",{key:e},l.default.createElement("p",null,e))})}},{key:"renderdropDownLabels",value:function(){return this.state.dropDownLabels.map(function(e){return"Sign In/Join"===e?l.default.createElement("div",{className:"header__dropdown--item header__dropdown--item-signinjoin",key:e},l.default.createElement("span",{id:"sign-in"},l.default.createElement("p",null,"Sign In")),l.default.createElement("span",{id:"join"},l.default.createElement("p",null,"Join"))):l.default.createElement("div",{className:"header__dropdown--item header__dropdown--item-notsigninjoin",key:e},l.default.createElement("p",null,e))})}},{key:"render",value:function(){return l.default.createElement("div",{className:"header"},l.default.createElement("div",{className:"header__top"},l.default.createElement("div",{className:"header__top--name"},l.default.createElement("p",null,"Trugapparel")),l.default.createElement("div",{className:"header__top--user"},this.renderProfileIcons(),l.default.createElement("div",{className:"header__dropdown"},this.renderdropDownLabels()))),l.default.createElement("div",{className:"header__menu"},this.renderMenuItems()))}}]),t}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),l=f(a),o=n(5),s=f(n(10)),u=(f(n(9)),f(n(4)),f(n(3)),f(n(2)),f(n(8))),i=(f(n(1)),f(n(7))),c=f(n(16)),d=f(n(6));function f(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"render",value:function(){return l.default.createElement("div",{className:"home"},l.default.createElement(s.default,null),l.default.createElement(u.default,null),l.default.createElement(o.Route,{exact:!0,path:"/",component:c.default}),l.default.createElement(o.Route,{exact:!0,path:"/hi",component:i.default}),l.default.createElement(d.default,null))}}]),t}();t.default=p},function(e,t){e.exports=require("react-dom/server")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n(0)),a=n(12),l=n(5),o=s(n(11));function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return'\n    <html>\n      <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet">\n        <link rel="stylesheet" href="style.css">\n      </head>\n      <body>\n        <div id="root">'+(0,a.renderToString)(r.default.createElement(l.StaticRouter,{location:e.path,context:{}},r.default.createElement(o.default,null)))+'</div>\n        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js"><\/script>\n        <script src="bundle.js"><\/script>\n      </body>\n    </html>\n  '}},function(e,t){e.exports=require("express")},function(e,t,n){"use strict";var r=l(n(14)),a=l(n(13));function l(e){return e&&e.__esModule?e:{default:e}}var o=(0,r.default)();o.use(r.default.static("public")),o.get("*",function(e,t){t.send((0,a.default)(e))});var s=process.env.PORT||3e3;o.listen(s,function(){console.log("Listening on port 3000")})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(a);var o=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={perspectives:["./imgs/unsplash5.jpg","./imgs/unsplash16.jpg","./imgs/unsplash11.jpg","./imgs/unsplash7.jpg"],perspective:"./imgs/unsplash5.jpg",sizes:["XL","L","M","S"],size:null},e.renderPerspectives=e.renderPerspectives.bind(e),e.changePerspective=e.changePerspective.bind(e),e.renderSizes=e.renderSizes.bind(e),e.selectSize=e.selectSize.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"selectSize",value:function(e){this.setState({size:e})}},{key:"renderSizes",value:function(){var e=this;return this.state.sizes.map(function(t){return e.state.size===t?l.default.createElement("span",{className:"productpage__top__details__sizes--cards-selected",key:t,onClick:function(){return e.selectSize(t)}},t):l.default.createElement("span",{className:"productpage__top__details__sizes--cards-unselected",key:t,onClick:function(){return e.selectSize(t)}},t)})}},{key:"changePerspective",value:function(e){this.setState({perspective:e})}},{key:"renderPerspectives",value:function(){var e=this;return this.state.perspectives.map(function(t){return e.state.perspective===t?l.default.createElement("figure",{key:t,onClick:function(){return e.changePerspective(t)},className:"productpage__top__photos--current"},l.default.createElement("img",{src:t})):l.default.createElement("figure",{key:t,onClick:function(){return e.changePerspective(t)},className:"productpage__top__photos--notcurrent"},l.default.createElement("img",{src:t}))})}},{key:"render",value:function(){return l.default.createElement("div",{className:"productpage"},l.default.createElement("div",{className:"productpage__top"},l.default.createElement("div",{className:"productpage__top__photos"},this.renderPerspectives()),l.default.createElement("div",{className:"productpage__top__display"},l.default.createElement("figure",null,l.default.createElement("img",{src:this.state.perspective}))),l.default.createElement("div",{className:"productpage__top__details"},l.default.createElement("h2",null,"ASOS DESIGN x glaad& unisex shirt co-ord in unity print"),l.default.createElement("div",{className:"productpage__top__details--price"},l.default.createElement("p",null,"£30.00")),l.default.createElement("div",{className:"productpage__top__details__sizes"},l.default.createElement("div",{className:"productpage__top__details__sizes--choose"},l.default.createElement("p",null,"Choose from Available Sizes:")),l.default.createElement("div",{className:"productpage__top__details__sizes--cards"},this.renderSizes())),l.default.createElement("div",{className:"productpage__top__btnparent"},l.default.createElement("button",null,"Add to cart")))))}}]),t}();t.default=o}]);
//# sourceMappingURL=bundle.js.map