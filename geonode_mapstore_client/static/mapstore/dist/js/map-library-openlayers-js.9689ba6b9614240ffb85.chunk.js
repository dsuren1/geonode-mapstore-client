(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[16037,120,58618,47310],{921914:(e,t,n)=>{"use strict";n.d(t,{XL:()=>o,km:()=>i,Ih:()=>a,Xw:()=>u,Pn:()=>c,DZ:()=>s,e8:()=>p,E0:()=>l,F9:()=>f,X_:()=>d,pb:()=>v,Re:()=>y,ih:()=>m,xy:()=>b,jL:()=>h,oz:()=>g,ph:()=>E,lF:()=>O,gG:()=>P,cb:()=>T,GI:()=>_,B1:()=>I,fv:()=>w,gc:()=>S,zX:()=>j,ZF:()=>N,Zb:()=>A,DW:()=>R,Xp:()=>F,Fm:()=>M,sV:()=>x,LU:()=>C,XP:()=>D,WU:()=>H,mK:()=>k,g:()=>G,ws:()=>L,HP:()=>U,aN:()=>Z,Pg:()=>q,u0:()=>B,TM:()=>W,PM:()=>K,lK:()=>X,sv:()=>z,MO:()=>Q,oO:()=>V,Mc:()=>J,Zw:()=>$,RA:()=>ee,am:()=>te,ZM:()=>ne,wm:()=>re,Y$:()=>oe,Qu:()=>ie,kT:()=>ae});var r=n(647310),o="LOAD_FEATURE_INFO",i="ERROR_FEATURE_INFO",a="EXCEPTIONS_FEATURE_INFO",u="CHANGE_MAPINFO_STATE",c="NEW_MAPINFO_REQUEST",s="PURGE_MAPINFO_RESULTS",p="CHANGE_MAPINFO_FORMAT",l="SHOW_MAPINFO_MARKER",f="HIDE_MAPINFO_MARKER",d="SHOW_REVERSE_GEOCODE",v="HIDE_REVERSE_GEOCODE",y="NO_QUERYABLE_LAYERS",m="CLEAR_WARNING",b="FEATURE_INFO_CLICK",h="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",g="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",E="TOGGLE_MAPINFO_STATE",O="UPDATE_CENTER_TO_MARKER",P="IDENTIFY:CHANGE_PAGE",T="IDENTIFY:CLOSE_IDENTIFY",_="IDENTIFY:CHANGE_FORMAT",I="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",w="IDENTIFY:EDIT_LAYER_FEATURES",S="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",j="IDENTIFY:SET_MAP_TRIGGER",N="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",A="IDENTIFY:SET_SHOW_IN_MAP_POPUP",R="IDENTIFY:IDENTIFY_IS_MOUNTED",F="IDENTIFY:INIT_PLUGIN";function M(e,t,n,r,i){return{type:o,data:t,reqId:e,requestParams:n,layerMetadata:r,layer:i}}function x(e,t,n,r){return{type:i,error:t,reqId:e,requestParams:n,layerMetadata:r}}function C(){return{type:y}}function D(){return{type:m}}function H(e,t){return{type:c,reqId:e,request:t}}function k(e){return{type:u,enabled:e}}function G(){return{type:s}}function L(e){return{type:p,infoFormat:e}}function U(){return{type:l}}function Z(){return{type:f}}function Y(e){return{type:d,reverseGeocodeData:e.data}}function q(e){return function(t){r.Z.reverseGeocode(e).then((function(e){t(Y(e))})).catch((function(e){t(Y(e))}))}}function B(){return{type:v}}function W(){return{type:E}}function K(e){return{type:O,status:e}}function X(e,t){return{type:b,point:e,layer:t,filterNameList:arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],overrideParams:arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},itemId:arguments.length>4&&void 0!==arguments[4]?arguments[4]:null}}function z(e){return{type:h,point:e}}function Q(e){return{type:g,enabled:e}}function V(e){return{type:P,index:e}}var J=function(){return{type:T}},$=function(e){return{type:_,format:e}},ee=function(e){return{type:I,showCoordinateEditor:e}},te=function(e){return{type:w,layer:e}},ne=function(e){return{type:S,query:e}},re=function(e){return{type:j,trigger:e}},oe=function(e){return{type:A,value:e}},ie=function(e){return{type:R,isMounted:e}},ae=function(e){return{type:F,cfg:e}}},647310:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(375875),o=n.n(r),i=n(472500),a=n.n(i),u=n(727418),c=n.n(u),s={format:"json",bounded:0,polygon_geojson:1,priority:5};const p={geocode:function(e,t){var n=c()({q:e},s,t||{}),r=a().format({protocol:"https",host:"nominatim.openstreetmap.org",query:n});return o().get(r)},reverseGeocode:function(e,t){var n=c()({lat:e.lat,lon:e.lng},t||{},s),r=a().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:n});return o().get(r)}}},615402:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var r=n(675263),o=n.n(r),i=n(124852),a=n.n(i);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,v(r.key),r)}}function s(e,t,n){return t=l(t),function(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,p()?Reflect.construct(t,n||[],l(e).constructor):t.apply(e,n))}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function d(e,t,n){return(t=v(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){var t=function(e,t){if("object"!=u(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==u(t)?t:String(t)}var y=n(868195).FormattedHTMLMessage,m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,t,arguments)}var n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return this.context.intl?a().createElement(y,{id:this.props.msgId,values:this.props.msgParams}):a().createElement("span",null,this.props.msgId||"")}}])&&c(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}(a().Component);d(m,"propTypes",{msgId:o().string.isRequired,msgParams:o().object}),d(m,"contextTypes",{intl:o().object});const b=m},389912:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r,o=n(124852),i=n(843033);const a=function(e){var t=e.map,n=e.onBoxEnd,a=e.status;return(0,o.useEffect)((function(){"start"===a?(r=new i.Z({condition:function(e){return e.originalEvent.altKey}}),t.addInteraction(r)):"end"===a&&t.removeInteraction(r)}),[a]),(0,o.useEffect)((function(){r&&r.on("boxend",(function(e){n({boxExtent:r.getGeometry().getExtent(),modifiers:{ctrl:e.mapBrowserEvent.originalEvent.ctrlKey,metaKey:e.mapBrowserEvent.originalEvent.metaKey}})}))}),[a]),null}},126105:(e,t,n)=>{"use strict";n.d(t,{Z:()=>_});var r=n(124852),o=n.n(r),i=n(180307),a=n.n(i),u=n(675263),c=n.n(u),s=n(193409),p=n(747037),l=n.n(p),f=n(925064),d=n(821751);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,T(r.key),r)}}function b(e,t,n){return t=g(t),function(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return E(e)}(e,h()?Reflect.construct(t,n||[],g(e).constructor):t.apply(e,n))}function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}function P(e,t,n){return(t=T(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(e){var t=function(e,t){if("object"!=v(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==v(t)?t:String(t)}var _=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return P(E(e=b(this,t,[].concat(r))),"onPopupClose",(function(t){e.props.onPopupClose(t)})),P(E(e),"renderPopups",(function(){return e.preparePopups().map((function(t){var n,r=t.popup,i=t.id,u=t.component,c=t.content,s=t.props,p=t.containerStyle,v=r.getElement(),y=l()(u)&&d.default[u]||u;return y?n=o().isValidElement(y)&&y||o().createElement(y,s):c&&(n=f.FP(c)?o().createElement("div",{dangerouslySetInnerHTML:{__html:c}}):c),v&&a().createPortal(o().createElement("div",{className:"map-popup-ol",key:i,onMouseUp:e.convertToClick},o().createElement("div",{className:"ol-popup-content-wrapper"},o().createElement("div",{className:"ol-popup-content",style:p},n)),o().createElement("div",{className:"ol-popup-closer",onClick:function(){return e.onPopupClose(i)}},"x")),v)}))})),P(E(e),"update",(function(){(e._popups||[]).map((function(e){var t=e.popup;t.setElement(t.getElement())}))})),P(E(e),"convertToClick",(function(e){var t=new MouseEvent("click",{bubbles:!0});t.stopPropagation=function(){},e.target.dispatchEvent(t)})),P(E(e),"preparePopups",(function(){var t=e.props,n=t.popups,r=void 0===n?[]:n,o=t.map,i=o.getSize();return(e._popups||[]).forEach((function(e){var t=e.popup,n=e.observer;n&&n.disconnect(),t&&o.removeOverlay(t)})),e._popups=r.map((function(e){var t=Math.round(.9*i[0])-40,n=Math.round(.9*i[1])-40,r=e.id,a=e.position.coordinates,u=e.className,c=e.maxWidth,p=void 0===c?t:c,l=e.maxHeight,d=void 0===l?n:l,v=e.autoPan,m=void 0!==v&&v,b=e.autoPanMargin,h=void 0===b?20:b,g=e.offset,E=void 0===g?[0,0]:g,O=e.autoPanAnimation,T=void 0===O?{duration:200}:O,_=p>t?t:p,I=d>n?n:d,w=f.fH(r,u),S=new s.Z({id:r,element:w,autoPan:m,offset:E,autoPanMargin:h,autoPanAnimation:T,positioning:"bottom-center",className:"ol-overlay-container ol-unselectable",position:a});o.addOverlay(S);var j=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=new MutationObserver((function(){e.getMap().getSize()&&(e.setPosition(void 0),e.setPosition(n.coordinates))}));return r.observe(t,{attributes:!0,childList:!0,subtree:!0}),r}(S,w,{coordinates:a});return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){P(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({popup:S,observer:j,containerStyle:{maxWidth:_,maxHeight:I}},e)})),e._popups})),P(E(e),"stopPropagationOnPointerMove",(function(e){e.stopPropagation()})),e}var n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(t,e),n=t,(r=[{key:"UNSAFE_componentWillMount",value:function(){this.props.map&&this.props.map.getOverlayContainerStopEvent().addEventListener("pointermove",this.stopPropagationOnPointerMove)}},{key:"shouldComponentUpdate",value:function(e){return e.popups!==this.props.popups}},{key:"componentWillUnmount",value:function(){this.props.map&&this.props.map.getOverlayContainerStopEvent().removeEventListener("pointermove",this.stopPropagationOnPointerMove)}},{key:"render",value:function(){return o().createElement("div",null,this.renderPopups())}}])&&m(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}(o().Component);P(_,"propTypes",{map:c().object,popups:c().arrayOf(c().object),onPopupClose:c().func}),P(_,"defaultProps",{popups:[],onPopupClose:function(){}})},434637:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r=function(){return n(103498).default,{Map:n(790596).Z,Layer:n(145697).Z,Feature:n(130072).Z,MeasurementSupport:n(505904).default,Overview:n(722404).Z,ScaleBar:n(809056).Z,DrawSupport:n(706909).Z,PopupSupport:n(126105).Z,BoxSelectionSupport:n(389912).Z}}},821751:(e,t,n)=>{"use strict";n.r(t),n.d(t,{IDENTIFY_POPUP:()=>P,default:()=>T});var r=n(124852),o=n.n(r),i=n(173014),a=n(11196),u=n(867076),c=n(171703),s=n(22222),p=n(307877),l=n(921914),f=n(542872),d=n(701469),v=n.n(d),y=n(352353),m=n.n(y),b=n(979870),h=n(800827),g=(0,u.compose)((0,c.connect)((0,s.P1)(p.Qf,(function(e){return{index:e}})),{setIndex:l.oO}),(0,u.defaultProps)({index:0,responses:[]})),E=(0,s.P1)([p.q7,p.o9,p.OK,p.us,p.x0,h.hp,p.vR],(function(e,t,n,r,o,i,a){return{responses:e,validResponses:t,requests:n,format:r,showEmptyMessageGFI:o,missingResponses:(n||[]).length-(e||[]).length,renderValidOnly:i,loaded:a}}));const O=(0,u.compose)((0,c.connect)(E),(0,u.defaultProps)({responses:[],container:function(e){var t=e.index,n=e.children;return o().createElement(o().Fragment,null,v()(n)&&n[t]||n)},header:b.Z}),g,a.Yy,a.mI,(0,i.Z)((function(e){var t=e.loaded;return m()(t)})))(f.Z);var P="identify";const T={identify:O}},38560:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(480681),o=n(124852),i=n.n(o),a=n(294184),u=n.n(a),c=["disabled","className","onClick"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}var p=n(815135);const l=(f=r.Button,i().forwardRef((function(e,t){var n=e.disabled,r=e.className,o=e.onClick,a=void 0===o?function(){}:o,p=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,c);return i().createElement(f,s({ref:t,className:n?u()("disabled",r):r,onClick:function(){n||a.apply(void 0,arguments)}},p),p.children)})));var f;(0,p.Z)(r.Button)},532425:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(675263),o=n.n(r),i=n(124852),a=n.n(i);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){var r,o,i,a;r=e,o=t,i=n[t],a=function(e,t){if("object"!=u(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==u(a)?a:String(a))in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(e){return e>100?"full":e>40?"medium":"small"},l=function(e){var t=e.size,n=e.style,r=void 0===n?{}:n,o=e.className,i=e.hidden;return a().createElement("div",{className:o,style:s({width:t,height:t,overflow:"hidden"},r)},!i&&a().createElement("div",{className:"mapstore-".concat(p(t),"-size-loader")}))};l.propTypes={size:o().number,className:o().string,style:o().object};const f=l},443143:(e,t,n)=>{"use strict";n.d(t,{qH:()=>p,qj:()=>l,qq:()=>f,TM:()=>d});var r,o=n(717621),i=n.n(o),a=n(14841),u=n.n(a),c=n(264721),s=n.n(c),p=function(e,t,n,o){var i=e;isNaN(parseFloat(e))&&(i=r.hexToHsv(e)[0]);var a=.5/(n-1),u=t/(n-1),c=[];1===n&&(a=.5,u=t/2);for(var s=0;s<n;s++){var p=i+s*u-t/2,l=a*s+.3,f=l;o&&(p=o.h||p,l=o.s||l,f=o.v||f),c.push(r.hsvToHex(p,l,f,s))}return c},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"red";return i()(e).toHexString()},f=function(e,t,n){var r=i()(e);return e&&r.setAlpha(u()(void 0!==t?t:r.getAlpha())).toRgbString()||n},d=function e(t){var n=Math.round,o=Math.random,i=[n(255*o()),n(255*o()),n(255*o())],a=r.rgbToHex(i);if(t)for(;s()(t,a)||"#000000"===a||"#FFFFFF"===a;)e(t);return a};r={decToHex:function(e){var t="0123456789ABCDEF",n=parseInt(e,10);return n=isNaN(n)?0:n,t.charAt(((n=n>255||n<0?0:n)-n%16)/16)+t.charAt(n%16)},rgbToHex:function(e,t,n){return e instanceof Array?r.rgbToHex(e[0],e[1],e[2]):"#"+r.decToHex(e)+r.decToHex(t)+r.decToHex(n)},realToDec:function(e){return Math.min(255,Math.round(256*e))},rgbToHsv:function(e,t,n){if(e instanceof Array)return r.rgbToHsv(e[0],e[1],e[2]);var o,i,a,u,c,s=e/255,p=t/255,l=n/255;switch(o=Math.min(Math.min(s,p),l),a=(i=Math.max(Math.max(s,p),l))-o,i){case o:u=0;break;case s:u=60*(p-l)/a,p<l&&(u+=360);break;case p:u=60*(l-s)/a+120;break;case l:u=60*(s-p)/a+240}return c=0===i?0:1-o/i,[Math.round(u),c,i]},distributedColorsHEX:function(e){for(var t=360/(e-1),n=[],o=function e(t,n,o){var i=e(t,n,o);return r.rgbToHex(i)},i=0;i<e;i++)n.push(o(t*i,.57,.63));return n},sameToneRangeColors:p,hsvToRgb:function(e,t,n){if(e instanceof Array)return r.hsvToRgb(e[0],e[1],e[2]);var o,i,a,u=Math.floor(e/60%6),c=e/60-u,s=n*(1-t),p=n*(1-c*t),l=n*(1-(1-c)*t);switch(u){case 0:o=n,i=l,a=s;break;case 1:o=p,i=n,a=s;break;case 2:o=s,i=n,a=l;break;case 3:o=s,i=p,a=n;break;case 4:o=l,i=s,a=n;break;case 5:o=n,i=s,a=p}return[r.realToDec(o),r.realToDec(i),r.realToDec(a)]},hsvToHex:function(e,t,n){var o=r.hsvToRgb(e,t,n);return r.rgbToHex(o)},hexToHsv:function(e){var t=e;if(t.length>0){"#"===t[0]&&(t=e.substring(1));var n=r.hexToRgb(t);return r.rgbToHsv(n)}return null},hexToRgb:function(e){var t,n,r,o=e;return"#"===o.charAt(0)&&(o=e.substring(1)),t=o.charAt(0)+o.charAt(1),n=o.charAt(2)+o.charAt(3),r=o.charAt(4)+o.charAt(5),[parseInt(t,16),parseInt(n,16),parseInt(r,16)]},colorToHexStr:l,colorToRgbaStr:f,generateRandomHexColor:d}},925064:(e,t,n)=>{"use strict";n.d(t,{fH:()=>i,FP:()=>a,R3:()=>u});var r=n(455877),o=n.n(r),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o()(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ms-map-popup",n=document.createElement("div");return n.setAttribute("id",e+"-map-popup"),n.setAttribute("class",t),n},a=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").startsWith("<")},u=function(e,t){if(!t)return e;if(t instanceof Node){var n=document.createDocumentFragment();n.appendChild(t),e.appendChild(n)}else a(t)?e.innerHTML=t:e.append(document.createTextNode(String(t)));return e}},923645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var u=0;u<e.length;u++){var c=[].concat(e[u]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},580760:(e,t,n)=>{var r=n(989881);e.exports=function(e,t){var n=[];return r(e,(function(e,r,o){t(e,r,o)&&n.push(e)})),n}},843624:(e,t,n)=>{var r=n(314259),o=n(640554);e.exports=function(e,t,n){var i=null==e?0:e.length;return i?(t=n||void 0===t?1:o(t),r(e,0,(t=i-t)<0?0:t)):[]}},763105:(e,t,n)=>{var r=n(234963),o=n(580760),i=n(267206),a=n(701469);e.exports=function(e,t){return(a(e)?r:o)(e,i(t,3))}},531351:e=>{var t=Array.prototype.reverse;e.exports=function(e){return null==e?e:t.call(e)}},410240:(e,t,n)=>{var r=n(829750),o=n(880531),i=n(640554),a=n(479833);e.exports=function(e,t,n){return e=a(e),n=null==n?0:r(i(n),0,e.length),t=o(t),e.slice(n,n+t.length)==t}},893379:(e,t,n)=>{"use strict";var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},r=[],o=0;o<e.length;o++){var u=e[o],c=t.base?u[0]+t.base:u[0],s=n[c]||0,p="".concat(c," ").concat(s);n[c]=s+1;var l=a(p),f={css:u[1],media:u[2],sourceMap:u[3]};-1!==l?(i[l].references++,i[l].updater(f)):i.push({identifier:p,updater:y(f,t),references:1}),r.push(p)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,p=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function l(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=p(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var d=null,v=0;function y(e,t){var n,r,o;if(t.singleton){var i=v++;n=d||(d=c(t)),r=l.bind(null,n,i,!1),o=l.bind(null,n,i,!0)}else n=c(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var c=u(e,t),s=0;s<n.length;s++){var p=a(n[s]);0===i[p].references&&(i[p].updater(),i.splice(p,1))}n=c}}}},558618:()=>{},200120:()=>{}}]);