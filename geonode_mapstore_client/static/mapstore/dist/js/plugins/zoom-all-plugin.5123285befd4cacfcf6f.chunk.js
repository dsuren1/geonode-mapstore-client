(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[87236],{35522:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>Q});var n=o(893379),r=o.n(n),i=o(154840);r()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var p=o(727418),l=o.n(p),c=o(124852),a=o.n(c),u=o(480681),s=o(171703),f=o(22222),y=o(801550),b=o(45697),m=o.n(b),g=o(38560),h=o(950966),v=o(552259),d=o(737275);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function w(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,C(n.key),n)}}function j(t,e,o){return e=E(e),function(t,e){if(e&&("object"==O(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,x()?Reflect.construct(e,o||[],E(t).constructor):e.apply(t,o))}function x(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(x=function(){return!!t})()}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},E(t)}function P(t,e){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},P(t,e)}function S(t,e,o){return(e=C(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function C(t){var e=function(t){if("object"!=O(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var o=e.call(t,"string");if("object"!=O(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==O(e)?e:e+""}var z=function(t){function e(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return S(t=j(this,e,[].concat(n)),"addTooltip",(function(e){var o=a().createElement(u.u,{id:"locate-tooltip"},t.props.tooltip);return a().createElement(h.Z,{placement:t.props.tooltipPlace,key:"overlay-trigger."+t.props.id,overlay:o},e)})),S(t,"zoomToMaxExtent",(function(){var e=t.props.mapConfig.maxExtent,o=t.props.mapConfig.size,n=1,r=t.props.mapConfig.center,i=t.props.mapConfig.projection||"EPSG:3857";e&&"[object Array]"===Object.prototype.toString.call(e)&&(n=(0,v.Of)(e,o,0,21),0===(r=(0,v.vR)(e,i)).x&&0===r.y||(r=(0,d.qg)(r,"EPSG:4326")));var p=(0,v.CQ)(r,n,o);t.props.changeMapView(r,n,p,t.props.mapConfig.size,null,t.props.mapConfig.projection)})),S(t,"zoomToInitialExtent",(function(){var e=t.props.mapInitialConfig,o=(0,v.CQ)(e.center,e.zoom,t.props.mapConfig.size);t.props.changeMapView(e.center,e.zoom,o,t.props.mapConfig.size,null,t.props.mapConfig.projection,null==e?void 0:e.viewerOptions)})),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&P(t,e)}(e,t),o=e,(n=[{key:"render",value:function(){var t=this;return this.addTooltip(a().createElement(g.Z,{id:this.props.id,style:this.props.style,bsSize:this.props.btnSize,onClick:function(){return t.props.useInitialExtent?t.zoomToInitialExtent():t.zoomToMaxExtent()},className:this.props.className,bsStyle:this.props.bsStyle},this.props.glyphicon?a().createElement(u.gG,{glyph:this.props.glyphicon}):null,this.props.glyphicon&&this.props.text?" ":null,this.props.text,this.props.help))}}])&&w(o.prototype,n),Object.defineProperty(o,"prototype",{writable:!1}),o;var o,n}(a().Component);S(z,"propTypes",{id:m().string,image:m().string,glyphicon:m().string,text:m().string,btnSize:m().oneOf(["large","small","xsmall"]),mapConfig:m().object,mapInitialConfig:m().object,changeMapView:m().func,btnType:m().oneOf(["normal","image"]),help:m().oneOfType([m().string,m().element]),tooltip:m().element,tooltipPlace:m().string,className:m().string,useInitialExtent:m().bool,bsStyle:m().string,style:m().object}),S(z,"defaultProps",{id:"mapstore-zoomtomaxextent",glyphicon:"resize-full",text:void 0,btnSize:"xsmall",btnType:"normal",useInitialExtent:!1,tooltipPlace:"left",bsStyle:"default",className:"square-button"});const T=z;var _=o(805346),k=o(800827);function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function M(){return M=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)({}).hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},M.apply(null,arguments)}function Z(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,R(n.key),n)}}function R(t){var e=function(t){if("object"!=I(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var o=e.call(t,"string");if("object"!=I(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==I(e)?e:e+""}function A(t,e,o){return e=G(e),function(t,e){if(e&&("object"==I(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,B()?Reflect.construct(e,o||[],G(t).constructor):e.apply(t,o))}function B(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(B=function(){return!!t})()}function G(t){return G=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},G(t)}function N(t,e){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},N(t,e)}var V=(0,f.P1)([k.Od,function(t){return t.mapInitialConfig}],(function(t,e){return{mapConfig:t,mapInitialConfig:e}})),q=(0,s.connect)(V,{changeMapView:y.o6})(T),D=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),A(this,e,arguments)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&N(t,e)}(e,t),o=e,(n=[{key:"render",value:function(){return a().createElement(q,M({key:"zoomToMaxExtent"},this.props,{useInitialExtent:!0}))}}])&&Z(o.prototype,n),Object.defineProperty(o,"prototype",{writable:!1}),o;var o,n}(a().Component);const Q={ZoomAllPlugin:l()(D,{Toolbar:{name:"ZoomAll",position:7,tooltip:"zoombuttons.zoomAllTooltip",icon:a().createElement(u.gG,{glyph:"resize-full"}),help:a().createElement(_.Z,{msgId:"helptexts.zoomToMaxExtentButton"}),tool:!0,priority:1}}),reducers:{}}},154840:(t,e,o)=>{"use strict";o.d(e,{Z:()=>i});var n=o(923645),r=o.n(n)()((function(t){return t[1]}));r.push([t.id,".msgapi #mapstore-zoomtomaxextent {\n    z-index: 1;\n    position: relative;\n}\n",""]);const i=r}}]);