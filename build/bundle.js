!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=17)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(a);var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={cards:["./imgs/unsplash5.jpg","./imgs/unsplash16.jpg","./imgs/unsplash11.jpg","./imgs/unsplash7.jpg"]},n.renderCards=n.renderCards.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"renderCards",value:function(){return this.state.cards.map(function(e){return o.default.createElement("div",{className:"display__card",key:e},o.default.createElement("figure",null,o.default.createElement("img",{src:e})),o.default.createElement("div",{className:"display__card--details"},o.default.createElement("div",{className:"display__card--details-name"},"Premier Cropped Skinny Jean"),o.default.createElement("div",{className:"display__card--details-price"},"$400.00")))})}},{key:"render",value:function(){return o.default.createElement("div",{className:"display"},o.default.createElement("h2",{className:"display--h2"},"Recommended for you"),o.default.createElement("div",{className:"display__content"},this.renderCards()))}}]),t}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(a);var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={promotions:["./imgs/unsplash7.jpg","./imgs/unsplash16.jpg","./imgs/unsplash11.jpg"],firstPromotionSlideContent:["./imgs/unsplash15.jpg","./imgs/unsplash2.jpg","./imgs/unsplash3.jpg","./imgs/unsplash4.jpg"],currentFirstPromoPhoto:0},n.renderPromotions=n.renderPromotions.bind(n),n.renderFirstPromotionSlide=n.renderFirstPromotionSlide.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"renderFirstPromotionSlide",value:function(){var e=this;return this.state.firstPromotionSlideContent.map(function(t){return e.state.firstPromotionSlideContent.indexOf(t)===e.state.currentFirstPromoPhoto?o.default.createElement("figure",{key:t,style:{zIndex:"10",display:"block"}},o.default.createElement("img",{src:t}),o.default.createElement("div",{className:"announcements__slide__details"},o.default.createElement("h2",null,"NEW DROP: NIKE AIR MAX 270 REACT"),o.default.createElement("p",null,"The hybrid style bringing the heat"),o.default.createElement("p",null,"7th Sept 2019"))):o.default.createElement("figure",{key:t,style:{display:"none"}},o.default.createElement("img",{src:t}),o.default.createElement("div",{className:"announcements__slide__details"},o.default.createElement("h2",null,"NEW DROP: NIKE AIR MAX 270 REACT"),o.default.createElement("p",null,"The hybrid style bringing the heat"),o.default.createElement("p",null,"7th Sept 2019")))})}},{key:"renderPromotions",value:function(){var e=this;return this.state.promotions.map(function(t){return 1===e.state.promotions.indexOf(t)?o.default.createElement("div",{key:t,className:"announcements__fig"},e.renderFirstPromotionSlide()):o.default.createElement("figure",{className:"announcements__fig",key:t},o.default.createElement("img",{src:t}),o.default.createElement("div",{className:"announcements__slide__details"},o.default.createElement("h2",null,"NEW DROP: NIKE AIR MAX 270 REACT"),o.default.createElement("p",null,"The hybrid style bringing the heat"),o.default.createElement("p",null,"7th Sept 2019")))})}},{key:"componentDidMount",value:function(){var e=this;setInterval(function(){if(e.state.currentFirstPromoPhoto>=e.state.firstPromotionSlideContent.length-1)return e.setState({currentFirstPromoPhoto:0});e.setState(function(e){return{currentFirstPromoPhoto:e.currentFirstPromoPhoto+=1}})},1500)}},{key:"render",value:function(){return o.default.createElement("div",{className:"announcements"},this.renderPromotions())}}]),t}();t.default=l},function(e,t){e.exports=require("react-router-dom")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(a);var l=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={date:null,labels:["About","Privacy","Terms","Help"],icons:["./imgs/sprite.svg#icon-instagram","./imgs/sprite.svg#icon-twitter","./imgs/sprite.svg#icon-facebook1"]},e.returnLabels=e.returnLabels.bind(e),e.returnIcons=e.returnIcons.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"returnLabels",value:function(){return this.state.labels.map(function(e){return o.default.createElement("div",{className:"footer__label",key:e},o.default.createElement("p",null,e))})}},{key:"returnIcons",value:function(){return this.state.icons.map(function(e){return o.default.createElement("span",{key:e},o.default.createElement("svg",null,o.default.createElement("use",{xlinkHref:e})))})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return o.default.createElement("div",{className:"footer"},o.default.createElement("div",{className:"footer__top"},o.default.createElement("div",{className:"footer__top__labels"},this.returnLabels()),o.default.createElement("div",{className:"footer__top--date"},"© ",this.state.date," Trugapparel, Inc.")),o.default.createElement("div",{className:"footer__bottom"},o.default.createElement("div",{className:"footer__bottom__socials"},this.returnIcons())))}}]),t}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(a);var l=function(e){var t=e.details;return o.default.createElement("div",{className:"productpage__bottom"},t.map(function(e){return o.default.createElement("div",{className:"productpage__bottom__detail",key:e},o.default.createElement("h2",null,"BRAND"),o.default.createElement("p",null,"ASOS and LIFE IS BEAUTIFUL have linked up to create a collection that celebrates connection, joy and creativity. Held in Downtown Las Vegas, LIFE IS BEAUTIFUL festival brings together music, art, comedy, ideas and fashion to inspire and empower an ever-growing community. Shop our edit for vests, shirts, accessories and more."))}))},u=function(e){var t=e.similarProducts;return o.default.createElement("div",{className:"productpage__similar"},o.default.createElement("h2",null,"You might also like"),o.default.createElement("div",{className:"productpage__similar__content"},t.map(function(e){return o.default.createElement("div",{className:"productpage__similar__card",key:e},o.default.createElement("figure",null,o.default.createElement("img",{src:e})),o.default.createElement("div",{className:"productpage__similar__card--details"},o.default.createElement("div",{className:"productpage__similar__card--details-name"},"Premier Cropped Skinny Jean"),o.default.createElement("div",{className:"productpage__similar__card--details-price"},"$400.00")))})))},i=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={perspectives:["./imgs/unsplash5.jpg","./imgs/unsplash16.jpg","./imgs/unsplash11.jpg","./imgs/unsplash7.jpg"],perspective:"./imgs/unsplash5.jpg",sizes:["XL","L","M","S"],size:null},e.renderPerspectives=e.renderPerspectives.bind(e),e.changePerspective=e.changePerspective.bind(e),e.renderSizes=e.renderSizes.bind(e),e.selectSize=e.selectSize.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"selectSize",value:function(e){this.setState({size:e})}},{key:"renderSizes",value:function(){var e=this;return this.state.sizes.map(function(t){return e.state.size===t?o.default.createElement("span",{className:"productpage__top__details__sizes--cards-selected",key:t,onClick:function(){return e.selectSize(t)}},t):o.default.createElement("span",{className:"productpage__top__details__sizes--cards-unselected",key:t,onClick:function(){return e.selectSize(t)}},t)})}},{key:"changePerspective",value:function(e){this.setState({perspective:e})}},{key:"renderPerspectives",value:function(){var e=this;return this.state.perspectives.map(function(t){return e.state.perspective===t?o.default.createElement("figure",{key:t,onClick:function(){return e.changePerspective(t)},className:"productpage__top__photos--current"},o.default.createElement("img",{src:t})):o.default.createElement("figure",{key:t,onClick:function(){return e.changePerspective(t)},className:"productpage__top__photos--notcurrent"},o.default.createElement("img",{src:t}))})}},{key:"render",value:function(){return o.default.createElement("div",{className:"productpage"},o.default.createElement("div",{className:"productpage__top"},o.default.createElement("div",{className:"productpage__top__photos"},this.renderPerspectives()),o.default.createElement("div",{className:"productpage__top__display"},o.default.createElement("figure",null,o.default.createElement("img",{src:this.state.perspective}))),o.default.createElement("div",{className:"productpage__top__details"},o.default.createElement("h2",null,"ASOS DESIGN x glaad& unisex shirt co-ord in unity print"),o.default.createElement("div",{className:"productpage__top__details--price"},o.default.createElement("p",null,"£30.00")),o.default.createElement("div",{className:"productpage__top__details__sizes"},o.default.createElement("div",{className:"productpage__top__details__sizes--choose"},o.default.createElement("p",null,"Choose from Available Sizes:")),o.default.createElement("div",{className:"productpage__top__details__sizes--cards"},this.renderSizes())),o.default.createElement("div",{className:"productpage__top__btnparent"},o.default.createElement("button",null,"Add to cart")))),o.default.createElement(l,{details:[1,2,3,4]}),o.default.createElement(u,{similarProducts:["./imgs/unsplash5.jpg","./imgs/unsplash16.jpg","./imgs/unsplash11.jpg","./imgs/unsplash7.jpg"]}))}}]),t}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(a);var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={cards:["./imgs/unsplash5.jpg","./imgs/unsplash16.jpg","./imgs/unsplash11.jpg","./imgs/unsplash7.jpg","./imgs/unsplash5.jpg","./imgs/unsplash16.jpg","./imgs/unsplash11.jpg","./imgs/unsplash7.jpg","./imgs/unsplash5.jpg","./imgs/unsplash16.jpg","./imgs/unsplash11.jpg","./imgs/unsplash7.jpg","./imgs/unsplash5.jpg","./imgs/unsplash16.jpg","./imgs/unsplash11.jpg","./imgs/unsplash7.jpg"]},n.renderCards=n.renderCards.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"renderCards",value:function(){return this.state.cards.map(function(e){return o.default.createElement("div",{className:"productgrid__card",key:e},o.default.createElement("figure",null,o.default.createElement("img",{src:e})),o.default.createElement("div",{className:"productgrid__card--details"},o.default.createElement("div",{className:"productgrid__card--details-name"},"Premier Cropped Skinny Jean"),o.default.createElement("div",{className:"productgrid__card--details-price"},"$400.00")))})}},{key:"render",value:function(){return o.default.createElement("div",{className:"productgrid"},o.default.createElement("div",{className:"productgrid__header"},o.default.createElement("input",null),o.default.createElement("span",null,"Start Shopping")),o.default.createElement("div",{className:"productgrid__sort"}),o.default.createElement("div",{className:"productgrid__section productgrid__container"},this.renderCards()))}}]),t}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(a);var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={open:"translateX(-100%)",menuLabels:["Shirts","Accessories","Trousers","Hoods","Prints"]},n.changeNavState=n.changeNavState.bind(n),n.returnBtn=n.returnBtn.bind(n),n.renderMenu=n.renderMenu.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"returnBtn",value:function(){return"translateX(0)"===this.state.open?o.default.createElement("div",{className:"sidenav__btn--close",onClick:this.changeNavState},o.default.createElement("span",null),o.default.createElement("span",null),o.default.createElement("span",null)):o.default.createElement("div",{className:"sidenav__btn--open",onClick:this.changeNavState},o.default.createElement("span",null),o.default.createElement("span",null),o.default.createElement("span",null))}},{key:"changeNavState",value:function(){if("translateX(0)"===this.state.open)return this.setState({open:"translateX(-100%)"});this.setState({open:"translateX(0)"})}},{key:"renderMenu",value:function(){return this.state.menuLabels.map(function(e){return o.default.createElement("div",{className:"sidenav__menu--btn",key:e},o.default.createElement("p",null,e))})}},{key:"render",value:function(){return o.default.createElement("div",{className:"sidenav",style:{transform:this.state.open}},"translateX(0)"===this.state.open?o.default.createElement("div",{className:"sidenav--overlay",onClick:this.changeNavState}):"",this.returnBtn(),o.default.createElement("div",{className:"sidenav__menu"},this.renderMenu()))}}]),t}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),o=u(a),l=u(n(9));function u(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"render",value:function(){return o.default.createElement("div",{className:"mobileheader"},o.default.createElement("div",{className:"mobileheader__name"},o.default.createElement("p",null,"Trugapparels")),o.default.createElement("div",{className:"mobileheader__menu"}),o.default.createElement(l.default,null))}}]),t}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(a);var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"render",value:function(){return o.default.createElement("div",{className:"search"},o.default.createElement("input",{placeholder:"search here"}))}}]),t}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(a);var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={categories:null,currentArticle:2},n.categories=n.categories.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({categories:["./imgs/unsplash15.jpg","./imgs/unsplash2.jpg","./imgs/unsplash3.jpg","./imgs/unsplash4.jpg","./imgs/unsplash11.jpg","./imgs/unsplash13.jpg"]},function(){if(null!==e.state.categories){var t=e.state.categories.length-1;setInterval(function(){e.state.currentArticle>=e.state.categories.length-2&&e.setState(function(e){return{categories:e.categories.slice(0,t).concat(e.categories)}}),e.setState(function(e){return{currentArticle:e.currentArticle+=1}})},2500)}})}},{key:"categories",value:function(){var e=this;if(null!==this.state.categories){var t=0;return this.state.categories.map(function(n){if(!((t+=1)<e.state.currentArticle-2))return t===e.state.currentArticle?o.default.createElement("article",{"data-active":"true",id:""+t,key:t,className:"mast__article"},o.default.createElement("figure",null,o.default.createElement("img",{src:n}))):o.default.createElement("article",{id:""+t,key:t,className:"mast__article"},o.default.createElement("figure",null,o.default.createElement("img",{src:n})))})}}},{key:"render",value:function(){return o.default.createElement("div",{className:"mast"},o.default.createElement("div",{className:"mast__slider"},this.categories()))}}]),t}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(0)),a=u(n(10)),o=u(n(2)),l=u(n(1));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return r.default.createElement("div",null,r.default.createElement(a.default,null),r.default.createElement(o.default,null),r.default.createElement(l.default,null))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),o=u(a),l=u(n(9));function u(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={menuItems:["Shirts","Accessories","Trousers","Hoods","Prints"]},n.renderMenuItems=n.renderMenuItems.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"renderMenuItems",value:function(){return this.state.menuItems.map(function(e){return o.default.createElement("span",{key:e},e)})}},{key:"render",value:function(){return o.default.createElement("div",{className:"header"},o.default.createElement("div",{className:"header__name"},o.default.createElement("p",null,"Trugapparels")),o.default.createElement("div",{className:"header__menu"},this.renderMenuItems()),o.default.createElement(l.default,null))}}]),t}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),o=p(a),l=n(3),u=p(n(12)),i=p(n(8)),s=p(n(11)),c=p(n(7)),f=p(n(6)),d=(p(n(5)),p(n(4)));function p(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"render",value:function(){return o.default.createElement("div",{className:"home"},o.default.createElement(u.default,null),o.default.createElement(i.default,null),o.default.createElement(c.default,null),o.default.createElement(l.Route,{exact:!0,path:"/",component:s.default}),o.default.createElement(l.Route,{exact:!0,path:"/search",component:f.default}),o.default.createElement(d.default,null))}}]),t}();t.default=m},function(e,t){e.exports=require("react-dom/server")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(0)),a=n(14),o=n(3),l=u(n(13));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return'\n    <html>\n      <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet">\n        <link rel="stylesheet" href="style.css">\n      </head>\n      <body>\n        <div id="root">'+(0,a.renderToString)(r.default.createElement(o.StaticRouter,{location:e.path,context:{}},r.default.createElement(l.default,null)))+'</div>\n        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js"><\/script>\n        <script src="bundle.js"><\/script>\n      </body>\n    </html>\n  '}},function(e,t){e.exports=require("express")},function(e,t,n){"use strict";var r=o(n(16)),a=o(n(15));function o(e){return e&&e.__esModule?e:{default:e}}var l=(0,r.default)();l.use(r.default.static("public")),l.get("*",function(e,t){t.send((0,a.default)(e))});var u=process.env.PORT||3e3;l.listen(u,function(){console.log("Listening on port 3000")})}]);
//# sourceMappingURL=bundle.js.map