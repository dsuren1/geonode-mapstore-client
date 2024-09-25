"use strict";(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[89585],{213652:(t,e,r)=>{r.d(e,{Wz:()=>o,UA:()=>n,LI:()=>i});var o="MAP_TYPE_CHANGED",n="MAP_TYPE:VISUALIZATION_MODE_CHANGED";function i(t){return{type:n,visualizationMode:t}}},21339:(t,e,r)=>{r.d(e,{Z:()=>g});var o=r(45697),n=r.n(o),i=r(124852),c=r.n(i),l=r(727418),p=r.n(l);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,d(o.key),o)}}function s(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(s=function(){return!!t})()}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}function y(t,e){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},y(t,e)}function b(t,e,r){return(e=d(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function d(t){var e=function(t){if("object"!=u(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==u(e)?e:e+""}var m=function(t){function e(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return b(t=function(t,e,r){return e=f(e),function(t,e){if(e&&("object"==u(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,s()?Reflect.construct(e,r||[],f(t).constructor):e.apply(t,r))}(this,e,[].concat(o)),"getStyle",(function(){var e={cursor:t.props.disabled?"not-allowed":"pointer",margin:0,padding:0,display:"inline-block"};return t.props.image?p()(e,{overflow:"hidden"}):p()(e,{height:"48px",width:"48px",border:"1px solid grey",borderRadius:"4px",backgroundColor:"rgb(250, 250, 250)"}),p()(e,t.props.style),e})),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&y(t,e)}(e,t),r=e,(o=[{key:"render",value:function(){return c().createElement("img",{className:this.props.className,id:this.props.id,title:this.props.tooltip,style:this.getStyle(),src:this.props.image,onClick:this.props.disabled?null:this.props.onClick})}}])&&a(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,o}(c().Component);b(m,"propTypes",{id:n().string,image:n().string,onClick:n().func,style:n().object,disabled:n().bool,tooltip:n().string,className:n().string}),b(m,"defaultProps",{disabled:!1,tooltip:null,className:void 0});const g=m},782457:(t,e,r)=>{r.d(e,{Z:()=>w});var o=r(124852),n=r.n(o),i=r(45697),c=r.n(i),l=r(271418),p=r(950966),u=r(624847),a=r(21339);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(){return f=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)({}).hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},f.apply(null,arguments)}function y(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,v(o.key),o)}}function b(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(b=function(){return!!t})()}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}function m(t,e){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},m(t,e)}function g(t,e,r){return(e=v(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function v(t){var e=function(t){if("object"!=s(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==s(e)?e:e+""}var h=function(t){function e(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return g(t=function(t,e,r){return e=d(e),function(t,e){if(e&&("object"==s(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,b()?Reflect.construct(e,r||[],d(t).constructor):e.apply(t,r))}(this,e,[].concat(o)),"onClick",(function(){t.props.onClick(!t.props.pressed,t.props.options)})),g(t,"renderNormalButton",(function(){return n().createElement(u.Z,f({id:t.props.id},t.props.btnConfig,{onClick:t.onClick,bsStyle:t.props.pressed?t.props.pressedStyle:t.props.defaultStyle,style:t.props.style}),t.props.glyphicon?n().createElement(l.gG,{glyph:t.props.glyphicon}):null,t.props.glyphicon&&t.props.text&&!n().isValidElement(t.props.text)?" ":null,t.props.text,t.props.help)})),g(t,"renderImageButton",(function(){return n().createElement(a.Z,{id:t.props.id,image:t.props.image,onClick:t.onClick,style:t.props.style})})),g(t,"addTooltip",(function(e){return n().createElement(p.Z,{placement:t.props.tooltipPlace,key:"overlay-trigger."+t.props.id,overlay:t.props.tooltip},e)})),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}(e,t),r=e,(o=[{key:"render",value:function(){var t="normal"===this.props.btnType?this.renderNormalButton():this.renderImageButton();return this.props.tooltip?this.addTooltip(t):t}}])&&y(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,o}(n().Component);g(h,"propTypes",{id:c().string,btnConfig:c().object,options:c().object,text:c().oneOfType([c().string,c().element]),help:c().oneOfType([c().string,c().element]),glyphicon:c().string,pressed:c().bool,onClick:c().func,tooltip:c().element,tooltipPlace:c().string,style:c().object,btnType:c().oneOf(["normal","image"]),image:c().string,pressedStyle:c().string,defaultStyle:c().string}),g(h,"defaultProps",{onClick:function(){},options:{},pressed:!1,tooltipPlace:"top",style:{},btnType:"normal",pressedStyle:"primary",defaultStyle:"default"});const w=h},11945:(t,e,r)=>{r.r(e),r.d(e,{default:()=>E});var o=r(171703),n=r(213652),i=r(93152),c=r(22222),l=r(124852),p=r.n(l),u=r(45697),a=r.n(u),s=r(782457),f=r(271418),y=r(805346);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function d(){return d=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)({}).hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},d.apply(null,arguments)}function m(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,O(o.key),o)}}function g(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(g=function(){return!!t})()}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},v(t)}function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},h(t,e)}function w(t,e,r){return(e=O(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function O(t){var e=function(t){if("object"!=b(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==b(e)?e:e+""}var j=function(t){function e(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return w(t=function(t,e,r){return e=v(e),function(t,e){if(e&&("object"==b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,g()?Reflect.construct(e,r||[],v(t).constructor):e.apply(t,r))}(this,e,[].concat(o)),"getButtonProperties",(function(){return["id","btnConfig","options","text","glyphicon","onClick","tooltipPlace","style","btnType","image","pressedStyle","defaultStyle"].reduce((function(e,r){return e[r]=t.props[r],e}),{})})),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}(e,t),r=e,(o=[{key:"render",value:function(){return p().createElement(s.Z,d({},this.getButtonProperties(),{pressed:this.props.active,tooltip:p().createElement(f.u,{id:"globeViewSwitcher-tooltip"},p().createElement(y.Z,{msgId:this.props.active?this.props.activeTooltip:this.props.notActiveTooltip}))}))}}])&&m(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,o}(p().Component);w(j,"propTypes",{id:a().string,btnConfig:a().object,options:a().object,text:a().oneOfType([a().string,a().element]),help:a().oneOfType([a().string,a().element]),glyphicon:a().string,active:a().bool,onClick:a().func,activeTooltip:a().string,notActiveTooltip:a().string,tooltipPlace:a().string,style:a().object,btnType:a().oneOf(["normal","image"]),image:a().string,pressedStyle:a().string,defaultStyle:a().string}),w(j,"defaultProps",{id:"globeviewswitcher-btn",activeTooltip:"globeswitcher.tooltipDeactivate",notActiveTooltip:"globeswitcher.tooltipActivate",tooltipPlace:"left",defaultStyle:"primary",pressedStyle:"success active",glyphicon:"3d",btnConfig:{className:"square-button"}});const P=j;var S=r(898631),T=r(322843),_=(0,c.P1)([i.$v],(function(t){return{active:(0,S.A)(t)===S.nU._3D}})),C=(0,o.connect)(_,{onClick:function(t){return(0,n.LI)(t?S.nU._3D:S.nU._2D)}})(P);const E=(0,T.rx)("GlobeViewSwitcher",{component:C,options:{disablePluginIf:"{state('featuregridmode') === 'EDIT'}"},containers:{Toolbar:{name:"3d",position:10,alwaysVisible:!0,tool:!0,priority:1}}})}}]);