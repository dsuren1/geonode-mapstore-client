(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[89585],{213652:(t,e,r)=>{"use strict";r.d(e,{Wz:()=>o,UA:()=>n,LI:()=>i});var o="MAP_TYPE_CHANGED",n="MAP_TYPE:VISUALIZATION_MODE_CHANGED";function i(t){return{type:n,visualizationMode:t}}},21339:(t,e,r)=>{"use strict";r.d(e,{Z:()=>v});var o=r(45697),n=r.n(o),i=r(124852),c=r.n(i),l=r(727418),p=r.n(l);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function s(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,m(o.key),o)}}function a(t,e,r){return e=y(e),function(t,e){if(e&&("object"==u(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,f()?Reflect.construct(e,r||[],y(t).constructor):e.apply(t,r))}function f(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(f=function(){return!!t})()}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}function b(t,e){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},b(t,e)}function d(t,e,r){return(e=m(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function m(t){var e=function(t){if("object"!=u(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==u(e)?e:e+""}var g=function(t){function e(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return d(t=a(this,e,[].concat(o)),"getStyle",(function(){var e={cursor:t.props.disabled?"not-allowed":"pointer",margin:0,padding:0,display:"inline-block"};return t.props.image?p()(e,{overflow:"hidden"}):p()(e,{height:"48px",width:"48px",border:"1px solid grey",borderRadius:"4px",backgroundColor:"rgb(250, 250, 250)"}),p()(e,t.props.style),e})),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e)}(e,t),r=e,(o=[{key:"render",value:function(){return c().createElement("img",{className:this.props.className,id:this.props.id,title:this.props.tooltip,style:this.getStyle(),src:this.props.image,onClick:this.props.disabled?null:this.props.onClick})}}])&&s(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,o}(c().Component);d(g,"propTypes",{id:n().string,image:n().string,onClick:n().func,style:n().object,disabled:n().bool,tooltip:n().string,className:n().string}),d(g,"defaultProps",{disabled:!1,tooltip:null,className:void 0});const v=g},782457:(t,e,r)=>{"use strict";r.d(e,{Z:()=>O});var o=r(124852),n=r.n(o),i=r(45697),c=r.n(i),l=r(480681),p=r(950966),u=r(38560),s=r(21339);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function f(){return f=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)({}).hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},f.apply(null,arguments)}function y(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,h(o.key),o)}}function b(t,e,r){return e=m(e),function(t,e){if(e&&("object"==a(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,d()?Reflect.construct(e,r||[],m(t).constructor):e.apply(t,r))}function d(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(d=function(){return!!t})()}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}function g(t,e){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},g(t,e)}function v(t,e,r){return(e=h(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function h(t){var e=function(t){if("object"!=a(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==a(e)?e:e+""}var w=function(t){function e(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return v(t=b(this,e,[].concat(o)),"onClick",(function(){t.props.onClick(!t.props.pressed,t.props.options)})),v(t,"renderNormalButton",(function(){return n().createElement(u.Z,f({id:t.props.id},t.props.btnConfig,{onClick:t.onClick,bsStyle:t.props.pressed?t.props.pressedStyle:t.props.defaultStyle,style:t.props.style}),t.props.glyphicon?n().createElement(l.gG,{glyph:t.props.glyphicon}):null,t.props.glyphicon&&t.props.text&&!n().isValidElement(t.props.text)?" ":null,t.props.text,t.props.help)})),v(t,"renderImageButton",(function(){return n().createElement(s.Z,{id:t.props.id,image:t.props.image,onClick:t.onClick,style:t.props.style})})),v(t,"addTooltip",(function(e){return n().createElement(p.Z,{placement:t.props.tooltipPlace,key:"overlay-trigger."+t.props.id,overlay:t.props.tooltip},e)})),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&g(t,e)}(e,t),r=e,(o=[{key:"render",value:function(){var t="normal"===this.props.btnType?this.renderNormalButton():this.renderImageButton();return this.props.tooltip?this.addTooltip(t):t}}])&&y(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,o}(n().Component);v(w,"propTypes",{id:c().string,btnConfig:c().object,options:c().object,text:c().oneOfType([c().string,c().element]),help:c().oneOfType([c().string,c().element]),glyphicon:c().string,pressed:c().bool,onClick:c().func,tooltip:c().element,tooltipPlace:c().string,style:c().object,btnType:c().oneOf(["normal","image"]),image:c().string,pressedStyle:c().string,defaultStyle:c().string}),v(w,"defaultProps",{onClick:function(){},options:{},pressed:!1,tooltipPlace:"top",style:{},btnType:"normal",pressedStyle:"primary",defaultStyle:"default"});const O=w},886537:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>k});var o=r(171703),n=r(213652),i=r(93152),c=r(22222),l=r(124852),p=r.n(l),u=r(45697),s=r.n(u),a=r(782457),f=r(480681),y=r(805346);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function d(){return d=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)({}).hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},d.apply(null,arguments)}function m(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,j(o.key),o)}}function g(t,e,r){return e=h(e),function(t,e){if(e&&("object"==b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,v()?Reflect.construct(e,r||[],h(t).constructor):e.apply(t,r))}function v(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(v=function(){return!!t})()}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},h(t)}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function O(t,e,r){return(e=j(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function j(t){var e=function(t){if("object"!=b(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==b(e)?e:e+""}var P=function(t){function e(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return O(t=g(this,e,[].concat(o)),"getButtonProperties",(function(){return["id","btnConfig","options","text","glyphicon","onClick","tooltipPlace","style","btnType","image","pressedStyle","defaultStyle"].reduce((function(e,r){return e[r]=t.props[r],e}),{})})),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(e,t),r=e,(o=[{key:"render",value:function(){return p().createElement(a.Z,d({},this.getButtonProperties(),{pressed:this.props.active,tooltip:p().createElement(f.u,{id:"globeViewSwitcher-tooltip"},p().createElement(y.Z,{msgId:this.props.active?this.props.activeTooltip:this.props.notActiveTooltip}))}))}}])&&m(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,o}(p().Component);O(P,"propTypes",{id:s().string,btnConfig:s().object,options:s().object,text:s().oneOfType([s().string,s().element]),help:s().oneOfType([s().string,s().element]),glyphicon:s().string,active:s().bool,onClick:s().func,activeTooltip:s().string,notActiveTooltip:s().string,tooltipPlace:s().string,style:s().object,btnType:s().oneOf(["normal","image"]),image:s().string,pressedStyle:s().string,defaultStyle:s().string}),O(P,"defaultProps",{id:"globeviewswitcher-btn",activeTooltip:"globeswitcher.tooltipDeactivate",notActiveTooltip:"globeswitcher.tooltipActivate",tooltipPlace:"left",defaultStyle:"primary",pressedStyle:"success active",glyphicon:"3d",btnConfig:{className:"square-button"}});const S=P;var T=r(898631),_=r(322843),C=(0,c.P1)([i.$v],(function(t){return{active:(0,T.A)(t)===T.nU._3D}})),E=(0,o.connect)(C,{onClick:function(t){return(0,n.LI)(t?T.nU._3D:T.nU._2D)}})(S);const k=(0,_.rx)("GlobeViewSwitcher",{component:E,options:{disablePluginIf:"{state('featuregridmode') === 'EDIT'}"},containers:{Toolbar:{name:"3d",position:10,alwaysVisible:!0,tool:!0,priority:1}}})}}]);