!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=13)}([function(e,t){e.exports=require("react")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(0));t.default=function(e){var t=e.arrival;return n.default.createElement("div",{className:"newarrivalcard"},n.default.createElement("figure",null,n.default.createElement("img",{src:t})))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(0));t.default=function(e){var t=e.arrival;return n.default.createElement("div",{className:"newarrivalcard"},n.default.createElement("figure",null,n.default.createElement("img",{src:t})),n.default.createElement("div",{className:"newarrivalcard__bio"},n.default.createElement("div",{className:"newarrivalcard__bio--text"},n.default.createElement("p",null,"ASOS DESIGN oversized sleeveless t-shirt with dark future logo")),n.default.createElement("div",{className:"newarrivalcard__bio--text"},n.default.createElement("p",null,"£22.00"))))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(0));t.default=function(e){var t=e.arrival;return n.default.createElement("div",{className:"shirtshoodiescard"},n.default.createElement("figure",null,n.default.createElement("img",{src:t})),n.default.createElement("div",{className:"shirtshoodiescard__bio"},n.default.createElement("div",{className:"shirtshoodiescard__bio--text"},n.default.createElement("p",null,"ASOS DESIGN oversized sleeveless t-shirt with dark future logo")),n.default.createElement("div",{className:"shirtshoodiescard__bio--text"},n.default.createElement("p",null,"£22.00"))))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(0),l=i(a),o=i(r(3)),u=i(r(2));i(r(1));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={devNewArrivals:["./imgs/shirt1.jpg","./imgs/shirt2.jpg","./imgs/shirt4.jpg"],devShirtsAndHoodies:["./imgs/shirt1.jpg","./imgs/shirt2.jpg","./imgs/shirt3.jpg","./imgs/shirt4.jpg"]},r.renderNewArrivals=r.renderNewArrivals.bind(r),r.devShirtsAndHoodies=r.devShirtsAndHoodies.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),n(t,[{key:"devShirtsAndHoodies",value:function(){return this.state.devShirtsAndHoodies.map(function(e){return l.default.createElement(o.default,{key:e,arrival:e})})}},{key:"renderNewArrivals",value:function(){return this.state.devNewArrivals.map(function(e){return l.default.createElement(u.default,{key:e,arrival:e})})}},{key:"render",value:function(){return l.default.createElement("div",{className:"landingdisplay"},l.default.createElement("div",{className:"landingdisplay__section"},l.default.createElement("h1",null,"New Arrivals"),l.default.createElement("div",{className:"landingdisplay__section__content"},this.renderNewArrivals()),l.default.createElement("div",{className:"landingdisplay__section__content--btns"},l.default.createElement("span",null,"View More"))),l.default.createElement("div",{className:"landingdisplay__section"},l.default.createElement("h1",null,"Recommendations for You"),l.default.createElement("div",{className:"landingdisplay__section__content"},this.devShirtsAndHoodies()),l.default.createElement("div",{className:"landingdisplay__section__content--btns"},l.default.createElement("span",null,"View More"))))}}]),t}();t.default=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(0),l=function(e){return e&&e.__esModule?e:{default:e}}(a);var o=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={open:"translateX(-100%)",menuLabels:["Shirts","Accessories","Trousers","Hoods","Prints"]},r.changeNavState=r.changeNavState.bind(r),r.returnBtn=r.returnBtn.bind(r),r.renderMenu=r.renderMenu.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),n(t,[{key:"returnBtn",value:function(){return"translateX(0)"===this.state.open?l.default.createElement("div",{className:"sidenav__btn--close",onClick:this.changeNavState},l.default.createElement("span",null),l.default.createElement("span",null),l.default.createElement("span",null)):l.default.createElement("div",{className:"sidenav__btn--open",onClick:this.changeNavState},l.default.createElement("span",null),l.default.createElement("span",null),l.default.createElement("span",null))}},{key:"changeNavState",value:function(){if("translateX(0)"===this.state.open)return this.setState({open:"translateX(-100%)"});this.setState({open:"translateX(0)"})}},{key:"renderMenu",value:function(){return this.state.menuLabels.map(function(e){return l.default.createElement("div",{className:"sidenav__menu--btn",key:e},l.default.createElement("p",null,e))})}},{key:"render",value:function(){return l.default.createElement("div",{className:"sidenav",style:{transform:this.state.open}},"translateX(0)"===this.state.open?l.default.createElement("div",{className:"sidenav--overlay",onClick:this.changeNavState}):"",this.returnBtn(),l.default.createElement("div",{className:"sidenav__menu"},this.renderMenu()))}}]),t}();t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(0));var a=["https://as1.ftcdn.net/jpg/02/23/08/12/500_F_223081216_VleXWWTzfbuaEKQa2Rw9s8UfqPJND5BY.jpg","https://st2.depositphotos.com/3591429/6306/i/950/depositphotos_63060859-stock-photo-african-teenage-boy.jpg","https://image.freepik.com/free-photo/portrait-pretty-african-american-boy-black-young-teen-man-white-background_8119-2169.jpg","data:image/jpeg;base64,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","https://media.istockphoto.com/photos/young-male-portrait-picture-id183816132"];t.default=function(){return n.default.createElement("div",{className:"mobilemast"},n.default.createElement("figure",null,n.default.createElement("img",{src:"https://res.cloudinary.com/dxlhzerlq/image/upload/q_56/v1559594352/girl-glasses_sm1hfi.jpg"})),n.default.createElement("div",{className:"mobilemast__words"},n.default.createElement("h1",null,"Find a style for every mood."),n.default.createElement("div",{className:"mobilemast__words__carousol"},n.default.createElement("div",{className:"mobilemast__words__carousol--body"},a.map(function(e){return n.default.createElement("div",{className:"mobilemast__words__carousol--card",key:e},n.default.createElement("figure",null,n.default.createElement("img",{src:e})),n.default.createElement("div",{className:"mobilemast__words__carousol--card--text"},n.default.createElement("p",null,"Category")))})))))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(0));var a=["https://res.cloudinary.com/dxlhzerlq/image/upload/q_33/v1559594290/female-actress_kr0c1r.jpg","https://res.cloudinary.com/dxlhzerlq/image/upload/q_56/v1559594269/girl-with-hair_kaeg66.jpg","https://res.cloudinary.com/dxlhzerlq/image/upload/q_56/v1559594352/girl-glasses_sm1hfi.jpg","https://res.cloudinary.com/dxlhzerlq/image/upload/q_59/v1559594210/black-boy_ydtwkv.jpg","https://res.cloudinary.com/dxlhzerlq/image/upload/q_53/v1559594251/camera-1_hqcuwp.jpg","https://res.cloudinary.com/dxlhzerlq/image/upload/v1559594226/color-hands_hlfpvy.jpg","https://res.cloudinary.com/dxlhzerlq/image/upload/v1559594288/clown_ouhykp.jpg"],l=["https://as1.ftcdn.net/jpg/02/23/08/12/500_F_223081216_VleXWWTzfbuaEKQa2Rw9s8UfqPJND5BY.jpg","https://st2.depositphotos.com/3591429/6306/i/950/depositphotos_63060859-stock-photo-african-teenage-boy.jpg","https://image.freepik.com/free-photo/portrait-pretty-african-american-boy-black-young-teen-man-white-background_8119-2169.jpg","./imgs/shirt6.jpg","./imgs/shirt7.jpg"];t.default=function(){return n.default.createElement("div",{className:"jumbotron"},a.map(function(e){return n.default.createElement("figure",{key:e,className:"jumbotron__fig"},n.default.createElement("img",{src:e}))}),n.default.createElement("div",{className:"jumbotron__toppicks"},n.default.createElement("h1",null,"Find a style for every mood."),function(){var e=0;return l.map(function(t){return e+=1,n.default.createElement("figure",{className:"jumbotron__toppicks--pick",key:e},n.default.createElement("img",{src:t}),n.default.createElement("div",{className:"jumbotron__toppicks--text"},n.default.createElement("p",null,"Category")))})}()),n.default.createElement("div",{className:"jumbotron__bottom"},n.default.createElement("input",{placeholder:"Search for items, brands and inspiration"}),n.default.createElement("span",null,"Start Shopping")))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(0),l=function(e){return e&&e.__esModule?e:{default:e}}(a);var o=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={profileIcons:["./imgs/sprite.svg#icon-user1","./imgs/sprite.svg#icon-cart"],menuLabels:["Shirts","Accessories","Trousers","Hoods","Prints"]},r.renderProfileIcons=r.renderProfileIcons.bind(r),r.renderMenuItems=r.renderMenuItems.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),n(t,[{key:"renderProfileIcons",value:function(){return this.state.profileIcons.map(function(e){return l.default.createElement("div",{className:"header__top--user-item",key:e},l.default.createElement("span",null,l.default.createElement("svg",null,l.default.createElement("use",{xlinkHref:e}))))})}},{key:"renderMenuItems",value:function(){return this.state.menuLabels.map(function(e){return l.default.createElement("span",{key:e},l.default.createElement("p",null,e))})}},{key:"render",value:function(){return l.default.createElement("div",{className:"header"},l.default.createElement("div",{className:"header__top"},l.default.createElement("div",{className:"header__top--name"},l.default.createElement("p",null,"Trugapparel")),l.default.createElement("div",{className:"header__top--user"},this.renderProfileIcons())),l.default.createElement("div",{className:"header__menu"},this.renderMenuItems()))}}]),t}();t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(0),l=d(a),o=d(r(8)),u=d(r(7)),i=d(r(6)),s=d(r(5)),c=d(r(4)),f=d(r(14));function d(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),n(t,[{key:"render",value:function(){return l.default.createElement("div",{className:"home"},l.default.createElement(o.default,null),l.default.createElement(s.default,null),l.default.createElement(u.default,null),l.default.createElement(i.default,null),l.default.createElement(c.default,null),l.default.createElement(f.default,null))}}]),t}();t.default=m},function(e,t){e.exports=require("react-dom/server")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(0)),a=r(10),l=o(r(9));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return'\n    <html>\n      <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet">\n        <link rel="stylesheet" href="style.css">\n      </head>\n      <body>\n        <div id="root">'+(0,a.renderToString)(n.default.createElement(l.default,null))+'</div>\n        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js"><\/script>\n        <script src="bundle.js"><\/script>\n      </body>\n    </html>\n  '}},function(e,t){e.exports=require("express")},function(e,t,r){"use strict";var n=l(r(12)),a=l(r(11));function l(e){return e&&e.__esModule?e:{default:e}}var o=(0,n.default)();o.use(n.default.static("public")),o.get("/",function(e,t){t.send((0,a.default)())}),o.listen(3e3,function(){console.log("Listening on port 3000")})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(0),l=function(e){return e&&e.__esModule?e:{default:e}}(a);var o=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={date:null,labels:["About","Privacy","Terms","Help"],icons:["./imgs/sprite.svg#icon-instagram","./imgs/sprite.svg#icon-twitter","./imgs/sprite.svg#icon-facebook1"]},e.returnLabels=e.returnLabels.bind(e),e.returnIcons=e.returnIcons.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),n(t,[{key:"returnLabels",value:function(){return this.state.labels.map(function(e){return l.default.createElement("div",{className:"footer__label",key:e},l.default.createElement("p",null,e))})}},{key:"returnIcons",value:function(){return this.state.icons.map(function(e){return l.default.createElement("span",{key:e},l.default.createElement("svg",null,l.default.createElement("use",{xlinkHref:e})))})}},{key:"componentDidMount",value:function(){this.setState({date:void 0!==moment?moment(new Date).format("YYYY"):""})}},{key:"render",value:function(){return l.default.createElement("div",{className:"footer"},l.default.createElement("div",{className:"footer__top"},l.default.createElement("div",{className:"footer__top__labels"},this.returnLabels()),l.default.createElement("div",{className:"footer__top--date"},"© ",this.state.date," Trugapparel, Inc.")),l.default.createElement("div",{className:"footer__bottom"},l.default.createElement("div",{className:"footer__bottom__socials"},this.returnIcons())))}}]),t}();t.default=o}]);
//# sourceMappingURL=bundle.js.map