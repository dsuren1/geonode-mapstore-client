(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7330,56399],{801550:(t,e,r)=>{"use strict";r.d(e,{pP:()=>n,TR:()=>o,N7:()=>i,mq:()=>u,uv:()=>a,Qy:()=>c,IL:()=>l,Li:()=>s,OW:()=>f,ZO:()=>p,Um:()=>y,TF:()=>d,Ls:()=>v,Ec:()=>b,Eu:()=>m,JJ:()=>g,nZ:()=>O,YD:()=>h,GI:()=>S,Jb:()=>E,Uh:()=>w,e$:()=>T,eh:()=>P,$j:()=>N,bJ:()=>j,Mk:()=>A,xy:()=>I,o6:()=>_,NH:()=>C,FP:()=>R,Mo:()=>D,sO:()=>M,Px:()=>L,hd:()=>k,y9:()=>x,Ju:()=>U,BV:()=>G,SO:()=>H,H0:()=>B,$X:()=>V,ou:()=>Z,NE:()=>z,Lq:()=>F,aN:()=>J});var n="CHANGE_MAP_VIEW",o="CLICK_ON_MAP",i="CHANGE_MOUSE_POINTER",u="CHANGE_ZOOM_LVL",a="PAN_TO",c="ZOOM_TO_EXTENT",l="ZOOM_TO_POINT",s="CHANGE_MAP_CRS",f="CHANGE_MAP_SCALES",p="CHANGE_MAP_STYLE",y="CHANGE_ROTATION",d="CREATION_ERROR_LAYER",v="UPDATE_VERSION",b="INIT_MAP",m="RESIZE_MAP",g="CHANGE_MAP_LIMITS",O="SET_MAP_RESOLUTIONS",h="REGISTER_EVENT_LISTENER",S="UNREGISTER_EVENT_LISTENER",E="MOUSE_MOVE",w="MOUSE_OUT",T="MAP:MAP_PLUGIN_LOAD",P="MAP:ORIENTATION",N="MAP:UPDATE_MAP_VIEW",j="MAP:UPDATE_MAP_OPTIONS";function A(t,e,r,n){return{type:T,mapType:e,loading:t,loaded:r,error:n}}function I(t,e,r){return{type:l,pos:t,zoom:e,crs:r}}function _(t,e,r,o,i,u,a,c){return{type:n,center:t,zoom:e,bbox:r,size:o,mapStateSource:i,projection:u,viewerOptions:a,resolution:c}}function C(t){return{type:s,crs:t}}function R(t,e){return{type:o,point:t,layer:e}}function D(t){return{type:i,pointer:t}}function M(t,e){return{type:u,zoom:t,mapStateSource:e}}function L(t,e,r,n){return{type:c,extent:t,crs:e,maxZoom:r,options:n}}function k(t,e){return{type:p,style:t,mapStateSource:e}}function x(t){return{type:b,disableFeedbackMask:t}}function U(){return{type:m}}function G(t){var e=t.restrictedExtent,r=t.crs,n=t.minZoom;return{type:g,restrictedExtent:e,crs:r,minZoom:n}}function H(t){return{type:O,resolutions:t}}var B=function(t,e){return{type:h,eventName:t,toolName:e}},V=function(t,e){return{type:S,eventName:t,toolName:e}},Z=function(t){return{type:E,position:t}},z=function(){return{type:w}},F=function(t){return{type:P,orientation:t}},J=function(t){return{type:j,configUpdate:t}}},38560:(t,e,r)=>{"use strict";r.d(e,{Z:()=>f});var n=r(480681),o=r(124852),i=r.n(o),u=r(294184),a=r.n(u),c=["disabled","className","onClick"];function l(){return l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},l.apply(this,arguments)}var s=r(815135);const f=(p=n.Button,i().forwardRef((function(t,e){var r=t.disabled,n=t.className,o=t.onClick,u=void 0===o?function(){}:o,s=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(t,c);return i().createElement(p,l({ref:e,className:r?a()("disabled",n):n,onClick:function(){r||u.apply(void 0,arguments)}},s),s.children)})));var p;(0,s.Z)(n.Button)},14281:(t,e,r)=>{"use strict";r.d(e,{A1:()=>n,HN:()=>o,Bm:()=>i,CD:()=>u,eY:()=>a,bI:()=>c,Rr:()=>l,DX:()=>s,e7:()=>f,QN:()=>p,Nd:()=>y,VR:()=>d,LR:()=>v,wP:()=>b,A9:()=>m,pC:()=>g,L0:()=>O,Hl:()=>h,_x:()=>S,x$:()=>E,Dm:()=>w,ym:()=>T});var n="ANNOTATIONS:EDIT",o="ANNOTATIONS:DOWNLOAD",i="ANNOTATIONS:LOAD_ANNOTATIONS",u="ANNOTATIONS:NEW",a="ANNOTATIONS:CLOSE",c="ANNOTATIONS:CONFIRM_CLOSE",l="ANNOTATIONS:CANCEL_CLOSE",s="ANNOTATIONS:REMOVE",f="ANNOTATIONS:STORE_SESSION",p="ANNOTATIONS:MERGE_FEATURES",y="ANNOTATIONS:SELECT_FEATURE",d=function(t){return{type:n,id:t}},v=function(t){return{type:o,annotations:t}},b=function(t){return{type:i,features:t,override:arguments.length>1&&void 0!==arguments[1]&&arguments[1]}},m=function(){return{type:u}},g=function(){return{type:a}},O=function(t){return{type:c,layer:t}},h=function(){return{type:l}},S=function(t){return{type:s,id:t}},E=function(t){return{type:f,session:t}},w=function(t,e){return{type:p,id:t,annotation:e}},T=function(t){return{type:y,id:t}}},79267:(t,e,r)=>{"use strict";r.d(e,{Z:()=>a});var n=r(14281);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){var n,i,u,a;n=t,i=e,u=r[e],a=function(t,e){if("object"!=o(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i),(i="symbol"==o(a)?a:String(a))in n?Object.defineProperty(n,i,{value:u,enumerable:!0,configurable:!0,writable:!0}):n[i]=u})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}const a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case n.e7:return u(u({},t),{},{session:e.session});case n.Nd:return u(u({},t),{},{featureId:e.id});case n.CD:case n.A1:return u(u({},t),{},{editing:!0,closeId:0});case n.eY:return u(u({},t),{},{closeId:(t.closeId||0)+1});case n.bI:return u(u({},t),{},{editing:!1,closeId:0,session:null});case n.Rr:return u(u({},t),{},{closeId:0});default:return t}}},902054:(t,e,r)=>{"use strict";r.d(e,{sB:()=>u,Yu:()=>a,F3:()=>c,cM:()=>l,Gu:()=>s,qs:()=>f});var n=r(22222),o=r(675110),i=r(900012),u=(0,n.P1)([o.l2],(function(t){return t.find(i.cO)})),a=(0,n.P1)([o.l2],(function(t){return t.filter(i.cO)})),c=function(t){var e=(0,o.Iz)(t);return e&&(0,i.cO)(e)?e:null},l=function(t){var e;return null==t||null===(e=t.annotations)||void 0===e?void 0:e.editing},s=function(t){var e;return null==t||null===(e=t.annotations)||void 0===e?void 0:e.session},f=function(t){var e;return null==t||null===(e=t.annotations)||void 0===e?void 0:e.featureId}},67925:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>ot});var n=r(218721),o=r.n(n),i=r(264721),u=r.n(i),a=r(103651),c=r.n(a),l=r(727418),s=r.n(l),f=r(675263),p=r.n(f),y=r(124852),d=r.n(y),v=r(480681),b=r(322843),m=r(22222),g="CHANGE_CRS_INPUT_VALUE",O=r(801550),h=r(197395),S=r(805346),E=r(86638);function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function T(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,C(n.key),n)}}function P(t,e,r){return e=j(e),function(t,e){if(e&&("object"===w(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return A(t)}(t,N()?Reflect.construct(e,r||[],j(t).constructor):e.apply(t,r))}function N(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(N=function(){return!!t})()}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}function A(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function I(t,e){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},I(t,e)}function _(t,e,r){return(e=C(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function C(t){var e=function(t,e){if("object"!=w(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=w(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==w(e)?e:String(e)}var R=function(t){function e(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return _(A(t=P(this,e,[].concat(n))),"handleChange",(function(e){t.props.changeInputValue(e.target.value)})),t}var r,n;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&I(t,e)}(e,t),r=e,(n=[{key:"render",value:function(){var t=this,e=this.props.children;return d().createElement("div",{className:"dropdown-menu",style:{left:"auto",right:0}},d().createElement(v.ListGroupItem,{className:"ms-prj-header",bsSize:"sm"},d().createElement("div",null,d().createElement(S.Z,{msgId:"crsSelectorSelectedCRS"})),d().createElement("div",null,this.props.selected)),d().createElement(v.ListGroup,{style:{maxHeight:150,overflowY:"auto",marginBottom:0}},e.filter((function(e){return!t.props.value.trim()||-1!==e.props.children.indexOf(t.props.value)}))),d().createElement(v.FormControl,{ref:function(e){t.input=e},type:"text",placeholder:(0,E.S$)(this.context.messages,"crsSelectorFilterPlaceholder"),onChange:this.handleChange,value:this.props.value}))}}])&&T(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}(d().Component);_(R,"propTypes",{selected:p().string,value:p().string,changeInputValue:p().func}),_(R,"contextTypes",{messages:p().object}),_(R,"defaultProps",{value:"",changeInputValue:function(){}});const D=R;var M=r(815135);var L=r(79267),k=r(902054),x=r(607147),U=r(731255),G=r(675110),H=r(800827),B=r(55105),V=r(93152),Z=r(274621),z=r(916651),F=r(38560);function J(t){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J(t)}function Y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,tt(n.key),n)}}function $(t,e,r){return e=W(e),function(t,e){if(e&&("object"===J(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return q(t)}(t,Q()?Reflect.construct(e,r||[],W(t).constructor):e.apply(t,r))}function Q(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(Q=function(){return!!t})()}function W(t){return W=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},W(t)}function q(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function X(t,e){return X=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},X(t,e)}function K(t,e,r){return(e=tt(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function tt(t){var e=function(t,e){if("object"!=J(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=J(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==J(e)?e:String(e)}var et=(0,M.Z)(F.Z),rt=function(t){function e(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return K(q(t=$(this,e,[].concat(n))),"state",{toggled:!1}),t}var r,n;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&X(t,e)}(e,t),r=e,n=[{key:"render",value:function(){var t=this,e=[],r={};for(var n in Object.keys(this.props.availableCRS).length&&(r=(0,z.filterCRSList)(this.props.availableCRS,this.props.filterAllowedCRS,this.props.additionalCRS,this.props.projectionDefs)),r)r.hasOwnProperty(n)&&e.push({value:n});var i=(0,z.normalizeSRS)(this.props.selected,this.props.filterAllowedCRS),a=["EPSG:4326","EPSG:3857","EPSG:900913"],l=["wms","osm","tileprovider","empty"],s=u()(this.props.allowedRoles,"ALL")||u()(this.props.allowedRoles,this.props.currentRole);return this.props.enabled&&s?d().createElement(v.Dropdown,{dropup:!0,className:"ms-prj-selector",onToggle:function(e){return t.setState({toggled:e})}},d().createElement(et,{bsRole:"toggle",bsStyle:"primary",className:"map-footer-btn btn-".concat(this.state.toggled?"success":"primary"),tooltip:d().createElement(S.Z,{msgId:"showCrsSelector"}),tooltipPosition:"top"},d().createElement(v.Glyphicon,{glyph:"crs"})),d().createElement(D,{bsRole:"menu",value:this.props.value,selected:i,projectionDefs:this.props.projectionDefs,filterAllowedCRS:this.props.filterAllowedCRS,additionalCRS:this.props.additionalCRS,changeInputValue:function(e){return t.props.typeInput(e)}},e.map((function(e){return d().createElement(v.ListGroupItem,{key:e.value,active:i===e.value,onClick:function(e){return function(e){c()(a,e)>-1||c()(l,t.props.currentBackground.type)>-1||t.props.currentBackground.allowedSRS&&o()(t.props.currentBackground.allowedSRS,e)?t.props.setCrs(e):t.props.onError({title:"error",message:"notification.incompatibleBackgroundAndProjection",action:{label:"close"},position:"tc",uid:"3"})}(e.target.textContent)},eventKey:e.value},e.value)})))):null}}],n&&Y(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}(d().Component);K(rt,"propTypes",{selected:p().string,value:p().string,projections:p().array,availableCRS:p().object,filterAllowedCRS:p().array,projectionDefs:p().array,additionalCRS:p().object,setCrs:p().func,typeInput:p().func,enabled:p().bool,currentBackground:p().object,onError:p().func,allowedRoles:p().array,currentRole:p().string}),K(rt,"defaultProps",{availableCRS:(0,z.getAvailableCRS)(),setCrs:function(){},typeInput:function(){},enabled:!0,allowedRoles:["ALL"]});var nt=(0,b.$j)((0,m.P1)(Z.L3,G.DP,H.uy,H.pb,(function(t){return t&&t.crsselector&&t.crsselector.value}),U.eK,V.c0,B.VM,x.QF,x._d,x.h,k.cM,(function(t,e,r,n,o,i,u,a,c,l,s,f){return{currentRole:t,currentBackground:e,selected:r,projectionDefs:n,value:o,enabled:!("EDIT"===i||u||a||c||l||s||f)}})),{typeInput:function(t){return{type:g,value:t}},setCrs:O.NH,onError:h.vU})(rt);const ot={CRSSelectorPlugin:s()(nt,{disablePluginIf:"{state('mapType') === 'leaflet'}",MapFooter:{name:"crsSelector",position:10,tool:!0,priority:1}}),reducers:{crsselector:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{projections:[]},e=arguments.length>1?arguments[1]:void 0;return e.type===g?s()({},t,{value:e.value}):t},annotations:L.Z},epics:{}}},55105:(t,e,r)=>{"use strict";r.d(e,{Ss:()=>d,Nr:()=>v,QJ:()=>b,ic:()=>m,Jz:()=>g,VM:()=>O,CF:()=>h,Ju:()=>S,Fc:()=>E,gQ:()=>w});var n=r(91175),o=r.n(n),i=r(288306),u=r.n(i),a=r(800827),c=r(552259),l=r(737275);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){y(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function y(t,e,r){var n;return n=function(t,e){if("object"!=s(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(e),(e="symbol"==s(n)?n:String(n))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d=function(t){return t.maplayout&&t.maplayout.layout||{}},v=function(t){return t.maplayout&&t.maplayout.boundingMapRect||{}},b=function(t){return t.maplayout&&t.maplayout.boundingSidebarRect||{}},m=u()((function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=d(t),o=b(t);return n&&Object.keys(n).filter((function(t){return e[t]})).reduce((function(t,e){var i;return p(p({},t),{},y({},e,r&&null!==(i=o[e])&&void 0!==i?i:n[e]))}),{})||{}}),(function(t,e,r){return JSON.stringify(d(t))+JSON.stringify(b(t))+JSON.stringify(e)+(r?"_isDock":"")})),g=function(t){var e;return!(null===(e=d(t))||void 0===e||!e.rightPanel)},O=function(t){var e,r=l.ZP.getConfigProp("mapLayout")||c.Ur;return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=d(t);return!!o()(e.filter((function(t){return r[t.key]})).map((function(t){return"not"===t.type?r[t.key]!==t.value&&r[t.key]:r[t.key]===t.value})))}(t,[{key:"bottom",value:null!==(e=null==r?void 0:r.bottom.sm)&&void 0!==e?e:0,type:"not"}])},h=function(t){var e=(0,a.Od)(t),r=v(t);return r&&e&&e.size&&{left:(0,c.pb)(r.left,e.size.width),bottom:(0,c.pb)(r.bottom,e.size.height),right:(0,c.pb)(r.right,e.size.width),top:(0,c.pb)(r.top,e.size.height)}},S=function(t){var e,r;return null!==(e=null==t||null===(r=t.maplayout)||void 0===r?void 0:r.dockPanels)&&void 0!==e?e:{left:[],right:[]}},E=function(t){return m(t,{height:!0,right:!0},!0)},w=function(t){return m(t,{right:!0},!0)}},55237:(t,e,r)=>{"use strict";r.d(e,{tr:()=>S,jb:()=>E,Xu:()=>w,un:()=>T,Qn:()=>P,_q:()=>N,og:()=>j,$4:()=>A,kN:()=>I,oD:()=>_,V$:()=>C,uH:()=>R,pC:()=>D,tz:()=>M,p:()=>L,Q7:()=>k,t:()=>x});var n=r(747037),o=r.n(n),i=r(647960),u=r.n(i),a=r(227361),c=r.n(a),l=r(984596),s=r.n(l),f=r(730381),p=r.n(f),y=r(86638);function d(t){return function(t){if(Array.isArray(t))return m(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||b(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,a=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,e)||b(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){if(t){if("string"==typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(t,e):void 0}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var g=/PT?[\d\.]+[YMWDHMS]/,O=function(t){return t?o()(t)?new Date(t).getTime():(u()(t)&&t.getTime(),t):null},h=function(t){var e=t.start,r=t.end,n=t.duration,o=p().duration(n).asMilliseconds();return(new Date(r).getTime()-new Date(e).getTime())/o},S=function(t){for(var e=t.start,r=t.end,n=t.duration,o=p().duration(n).asMilliseconds(),i=[],u=new Date(e),a=new Date(r);u<=a;)i.push(new Date(u).toISOString()),u.setTime(u.getTime()+o);return i},E=function(t){var e=t.start,r=t.end,n=t.duration;return S({start:e,end:r,duration:n}).map((function(t){return{start:new Date(t),end:new Date(new Date(t).getTime()+p().duration(n).asMilliseconds())}}))},w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.start,r=t.end,n=t.duration,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=o.start,u=o.end;if(!i||!u)return{count:h({start:e,end:r,duration:n}),start:e,end:r};var a=p().duration(n).asMilliseconds(),c=new Date(e).getTime(),l=new Date(r).getTime(),s=new Date(i).getTime(),f=new Date(u).getTime(),y=Math.ceil((s-c)/a),d=Math.floor((f-c)/a),v=Math.floor((l-c)/a);if(y>=0&&d<=v){var b=d-y;return{start:new Date(c+Math.max(0,y)*a),end:new Date(c+Math.min(v,d)*a),count:b}}return{count:h({start:e,end:r,duration:n}),start:e,end:r}},T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.start,r=t.end,n=arguments.length>1?arguments[1]:void 0,o=new Date(e),i=new Date(r),u=Math.floor(i.getTime()-o.getTime())/n;return{range:{start:e,end:r},resolution:p().duration(u).toISOString().match(g)[0]}},P=function(){var t,e,r=arguments.length>1?arguments[1]:void 0,n=(t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],(e=arguments.length>2?arguments[2]:void 0)?t.map((function(t){var r=v(t.split("/"),2);return{start:r[0],end:r[1]}[e]})):t);return n[function(t,e){var r=O(e),n=1/0,o=-1;return t.forEach((function(t,e){var i=O(t),u=Math.abs(i-r);u<n&&(n=u,o=e)})),o}(n,r)]},N=function(t){return t&&t.indexOf&&t.indexOf("--")>0},j=function(t,e){var r=p()(t).diff(e);return{start:r>=0?e:t,end:r>=0?t:e}},A=function(t){return 6e4*t.getTimezoneOffset()},I=function(t){var e=t;!u()(t)&o()(t)&&(e=new Date(t));var r=e.getUTCHours();r=r<10?"0"+r:r;var n=e.getUTCMinutes();n=n<10?"0"+n:n;var i=e.getUTCSeconds();return i=i<10?"0"+i:i,"".concat(r,":").concat(n,":").concat(i)},_=function(t){var e=t;!u()(t)&o()(t)&&(e=new Date(t));var r=e.getUTCMonth()+1,n=e.getUTCDate();return r=r<10?"0"+r:r,n=n<10?"0"+n:n,"".concat(e.getUTCFullYear(),"-").concat(r,"-").concat(n)},C=function(t,e){var r=(0,y.mh)(t),n="HH:mm:SS";switch(e){case"time":return n;case"date":return r;default:return r+" "+n}},R=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).Domains,e=void 0===t?{}:t,r=arguments.length>1?arguments[1]:void 0,n=s()(e.DimensionDomain||[]).concat(),o=e["@version"]||e.version,i=c()(e,"SpaceDomain.BoundingBox");return i&&n.push({Identifier:"space",Domain:i}),n.map((function(t){var e=t.Identifier,n=t.Domain;return{source:{type:"multidim-extension",version:o,url:r},name:e,domain:n}}))},D=function(t,e,r){var n=O(e),o=O(r);return t.reduce((function(t,e){var r=O(e);return O(n)<r&&O(o)>r?[].concat(d(t),[e]):d(t)}),[])},M=function(t){var e=t.reduce((function(t,e){if(-1!==e.indexOf("/")){var r=v(e.split("/"),2),n=r[0],o=r[1];return[].concat(d(t),[n,o])}return[].concat(d(t),[e])}),[]).sort();return[e[0],e[e.length-1]]},L=function(t,e,r){var n=p()(t);return("add"===r?n.add(e,"seconds"):n.subtract(e,"seconds")).toISOString()},k=function(t){var e,r;(r=(r=o()(t)?t.indexOf("--")>0?t.split("--"):t.indexOf(",")>0?t.split(","):[t]:t).reduce((function(t,e){return t.concat(e.split("/"))}),[]).sort()).length>2&&(r=[r[0],r[r.length-1]]);var n=v((null===(e=r)||void 0===e?void 0:e.filter((function(t){return!!t})))||[],2);return[n[0],n[1]]},x=function(t){var e=t;!u()(t)&o()(t)&&(e=new Date(t));var r=e.getHours();r=r<10?"0"+r:r;var n=e.getMinutes();n=n<10?"0"+n:n;var i=e.getSeconds();return i=i<10?"0"+i:i,"".concat(r,":").concat(n,":").concat(i)}},887157:(t,e,r)=>{var n=r(640554),o=r(588958);t.exports=function(t,e,r,i){var u=t.length;for((r=n(r))<0&&(r=-r>u?0:u+r),(i=void 0===i||i>u?u:n(i))<0&&(i+=u),i=r>i?0:o(i);r<i;)t[r++]=e;return t}},441761:(t,e,r)=>{var n=r(644239),o=r(637005);t.exports=function(t){return o(t)&&"[object Date]"==n(t)}},819873:(t,e,r)=>{var n=r(887157),o=r(816612);t.exports=function(t,e,r,i){var u=null==t?0:t.length;return u?(r&&"number"!=typeof r&&o(t,e,r)&&(r=0,i=u),n(t,e,r,i)):[]}},103651:(t,e,r)=>{var n=r(442118),o=r(640554),i=Math.max;t.exports=function(t,e,r){var u=null==t?0:t.length;if(!u)return-1;var a=null==r?0:o(r);return a<0&&(a=i(u+a,0)),n(t,e,a)}},647960:(t,e,r)=>{var n=r(441761),o=r(307518),i=r(531167),u=i&&i.isDate,a=u?o(u):n;t.exports=a},588958:(t,e,r)=>{var n=r(829750),o=r(640554);t.exports=function(t){return t?n(o(t),0,4294967295):0}}}]);