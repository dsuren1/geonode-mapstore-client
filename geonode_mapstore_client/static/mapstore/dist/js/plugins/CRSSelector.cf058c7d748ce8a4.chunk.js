(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7330],{14281:(e,t,r)=>{"use strict";r.d(t,{A1:()=>n,HN:()=>o,Bm:()=>i,CD:()=>u,eY:()=>c,bI:()=>l,Rr:()=>a,DX:()=>s,e7:()=>p,QN:()=>f,Nd:()=>y,VR:()=>b,LR:()=>v,wP:()=>d,A9:()=>m,pC:()=>g,L0:()=>O,Hl:()=>h,_x:()=>S,x$:()=>j,Dm:()=>w,ym:()=>P});var n="ANNOTATIONS:EDIT",o="ANNOTATIONS:DOWNLOAD",i="ANNOTATIONS:LOAD_ANNOTATIONS",u="ANNOTATIONS:NEW",c="ANNOTATIONS:CLOSE",l="ANNOTATIONS:CONFIRM_CLOSE",a="ANNOTATIONS:CANCEL_CLOSE",s="ANNOTATIONS:REMOVE",p="ANNOTATIONS:STORE_SESSION",f="ANNOTATIONS:MERGE_FEATURES",y="ANNOTATIONS:SELECT_FEATURE",b=function(e){return{type:n,id:e}},v=function(e){return{type:o,annotations:e}},d=function(e){return{type:i,features:e,override:arguments.length>1&&void 0!==arguments[1]&&arguments[1]}},m=function(){return{type:u}},g=function(){return{type:c}},O=function(e){return{type:l,layer:e}},h=function(){return{type:a}},S=function(e){return{type:s,id:e}},j=function(e){return{type:p,session:e}},w=function(e,t){return{type:f,id:e,annotation:t}},P=function(e){return{type:y,id:e}}},838398:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(14281);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return(t=function(e){var t=function(e){if("object"!=o(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==o(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.e7:return u(u({},e),{},{session:t.session});case n.Nd:return u(u({},e),{},{featureId:t.id});case n.CD:case n.A1:return u(u({},e),{},{editing:!0,closeId:0});case n.eY:return u(u({},e),{},{closeId:(e.closeId||0)+1});case n.bI:return u(u({},e),{},{editing:!1,closeId:0,session:null});case n.Rr:return u(u({},e),{},{closeId:0});default:return e}}},902054:(e,t,r)=>{"use strict";r.d(t,{sB:()=>u,Yu:()=>c,F3:()=>l,cM:()=>a,Gu:()=>s,qs:()=>p});var n=r(22222),o=r(675110),i=r(900012),u=(0,n.P1)([o.l2],(function(e){return e.find(i.cO)})),c=(0,n.P1)([o.l2],(function(e){return e.filter(i.cO)})),l=function(e){var t=(0,o.Iz)(e);return t&&(0,i.cO)(t)?t:null},a=function(e){var t;return null==e||null===(t=e.annotations)||void 0===t?void 0:t.editing},s=function(e){var t;return null==e||null===(t=e.annotations)||void 0===t?void 0:t.session},p=function(e){var t;return null==e||null===(t=e.annotations)||void 0===t?void 0:t.featureId}},755154:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>ee});var n=r(218721),o=r.n(n),i=r(264721),u=r.n(i),c=r(103651),l=r.n(c),a=r(727418),s=r.n(a),p=r(45697),f=r.n(p),y=r(124852),b=r.n(y),v=r(271418),d=r(322843),m=r(22222),g="CHANGE_CRS_INPUT_VALUE",O=r(801550),h=r(197395),S=r(805346),j=r(86638);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function P(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,T(n.key),n)}}function N(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(N=function(){return!!e})()}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function C(e,t,r){return(t=T(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function T(e){var t=function(e){if("object"!=w(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==w(t)?t:t+""}var A=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return C(e=function(e,t,r){return t=E(t),function(e,t){if(t&&("object"==w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,N()?Reflect.construct(t,r||[],E(e).constructor):t.apply(e,r))}(this,t,[].concat(n)),"handleChange",(function(t){e.props.changeInputValue(t.target.value)})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this,t=this.props.children;return b().createElement("div",{className:"dropdown-menu",style:{left:"auto",right:0}},b().createElement(v.WI,{className:"ms-prj-header",bsSize:"sm"},b().createElement("div",null,b().createElement(S.Z,{msgId:"crsSelectorSelectedCRS"})),b().createElement("div",null,this.props.selected)),b().createElement(v.NX,{style:{maxHeight:150,overflowY:"auto",marginBottom:0}},t.filter((function(t){return!e.props.value.trim()||-1!==t.props.children.indexOf(e.props.value)}))),b().createElement(v.NI,{ref:function(t){e.input=t},type:"text",placeholder:(0,j.S$)(this.context.messages,"crsSelectorFilterPlaceholder"),onChange:this.handleChange,value:this.props.value}))}}])&&P(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(b().Component);C(A,"propTypes",{selected:f().string,value:f().string,changeInputValue:f().func}),C(A,"contextTypes",{messages:f().object}),C(A,"defaultProps",{value:"",changeInputValue:function(){}});const I=A;var _=r(815135);var k=r(838398),D=r(902054),L=r(607147),B=r(731255),x=r(675110),M=r(800827),z=r(55105),F=r(93152),V=r(274621),G=r(307887),Z=r(624847);function J(e){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J(e)}function U(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,$(n.key),n)}}function H(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(H=function(){return!!e})()}function Q(e){return Q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Q(e)}function W(e,t){return W=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},W(e,t)}function Y(e,t,r){return(t=$(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function $(e){var t=function(e){if("object"!=J(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=J(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==J(t)?t:t+""}var K=(0,_.Z)(Z.Z),X=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return Y(e=function(e,t,r){return t=Q(t),function(e,t){if(t&&("object"==J(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,H()?Reflect.construct(t,r||[],Q(e).constructor):t.apply(e,r))}(this,t,[].concat(n)),"state",{toggled:!1}),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&W(e,t)}(t,e),r=t,n=[{key:"render",value:function(){var e=this,t=[],r={};for(var n in Object.keys(this.props.availableCRS).length&&(r=(0,G.filterCRSList)(this.props.availableCRS,this.props.filterAllowedCRS,this.props.additionalCRS,this.props.projectionDefs)),r)r.hasOwnProperty(n)&&t.push({value:n});var i=(0,G.normalizeSRS)(this.props.selected,this.props.filterAllowedCRS),c=["EPSG:4326","EPSG:3857","EPSG:900913"],a=["wms","osm","tileprovider","empty"],s=u()(this.props.allowedRoles,"ALL")||u()(this.props.allowedRoles,this.props.currentRole);return this.props.enabled&&s?b().createElement(v.Lt,{dropup:!0,className:"ms-prj-selector",onToggle:function(t){return e.setState({toggled:t})}},b().createElement(K,{bsRole:"toggle",bsStyle:"primary",className:"map-footer-btn btn-".concat(this.state.toggled?"success":"primary"),tooltip:b().createElement(S.Z,{msgId:"showCrsSelector"}),tooltipPosition:"top"},b().createElement(v.gG,{glyph:"crs"})),b().createElement(I,{bsRole:"menu",value:this.props.value,selected:i,projectionDefs:this.props.projectionDefs,filterAllowedCRS:this.props.filterAllowedCRS,additionalCRS:this.props.additionalCRS,changeInputValue:function(t){return e.props.typeInput(t)}},t.map((function(t){return b().createElement(v.WI,{key:t.value,active:i===t.value,onClick:function(t){return function(t){l()(c,t)>-1||l()(a,e.props.currentBackground.type)>-1||e.props.currentBackground.allowedSRS&&o()(e.props.currentBackground.allowedSRS,t)?e.props.setCrs(t):e.props.onError({title:"error",message:"notification.incompatibleBackgroundAndProjection",action:{label:"close"},position:"tc",uid:"3"})}(t.target.textContent)},eventKey:t.value},t.value)})))):null}}],n&&U(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(b().Component);Y(X,"propTypes",{selected:f().string,value:f().string,projections:f().array,availableCRS:f().object,filterAllowedCRS:f().array,projectionDefs:f().array,additionalCRS:f().object,setCrs:f().func,typeInput:f().func,enabled:f().bool,currentBackground:f().object,onError:f().func,allowedRoles:f().array,currentRole:f().string}),Y(X,"defaultProps",{availableCRS:(0,G.getAvailableCRS)(),setCrs:function(){},typeInput:function(){},enabled:!0,allowedRoles:["ALL"]});var q=(0,d.$j)((0,m.P1)(V.L3,x.DP,M.uy,M.pb,(function(e){return e&&e.crsselector&&e.crsselector.value}),B.eK,F.c0,z.VM,L.QF,L._d,L.h,D.cM,(function(e,t,r,n,o,i,u,c,l,a,s,p){return{currentRole:e,currentBackground:t,selected:r,projectionDefs:n,value:o,enabled:!("EDIT"===i||u||c||l||a||s||p)}})),{typeInput:function(e){return{type:g,value:e}},setCrs:O.NH,onError:h.vU})(X);const ee={CRSSelectorPlugin:s()(q,{disablePluginIf:"{state('mapType') === 'leaflet'}",MapFooter:{name:"crsSelector",position:10,tool:!0,priority:1}}),reducers:{crsselector:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{projections:[]},t=arguments.length>1?arguments[1]:void 0;return t.type===g?s()({},e,{value:t.value}):e},annotations:k.Z},epics:{}}},55105:(e,t,r)=>{"use strict";r.d(t,{Ss:()=>b,Nr:()=>v,QJ:()=>d,ic:()=>m,Jz:()=>g,VM:()=>O,CF:()=>h,Ju:()=>S,Fc:()=>j,gQ:()=>w});var n=r(91175),o=r.n(n),i=r(288306),u=r.n(i),c=r(800827),l=r(552259),a=r(737275);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t,r){return(t=function(e){var t=function(e){if("object"!=s(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==s(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=function(e){return e.maplayout&&e.maplayout.layout||{}},v=function(e){return e.maplayout&&e.maplayout.boundingMapRect||{}},d=function(e){return e.maplayout&&e.maplayout.boundingSidebarRect||{}},m=u()((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=b(e),o=d(e);return n&&Object.keys(n).filter((function(e){return t[e]})).reduce((function(e,t){var i;return f(f({},e),{},y({},t,r&&null!==(i=o[t])&&void 0!==i?i:n[t]))}),{})||{}}),(function(e,t,r){return JSON.stringify(b(e))+JSON.stringify(d(e))+JSON.stringify(t)+(r?"_isDock":"")})),g=function(e){var t;return!(null===(t=b(e))||void 0===t||!t.rightPanel)},O=function(e){var t,r=a.ZP.getConfigProp("mapLayout")||l.Ur;return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=b(e);return!!o()(t.filter((function(e){return r[e.key]})).map((function(e){return"not"===e.type?r[e.key]!==e.value&&r[e.key]:r[e.key]===e.value})))}(e,[{key:"bottom",value:null!==(t=null==r?void 0:r.bottom.sm)&&void 0!==t?t:0,type:"not"}])},h=function(e){var t=(0,c.Od)(e),r=v(e);return r&&t&&t.size&&{left:(0,l.pb)(r.left,t.size.width),bottom:(0,l.pb)(r.bottom,t.size.height),right:(0,l.pb)(r.right,t.size.width),top:(0,l.pb)(r.top,t.size.height)}},S=function(e){var t,r;return null!==(t=null==e||null===(r=e.maplayout)||void 0===r?void 0:r.dockPanels)&&void 0!==t?t:{left:[],right:[]}},j=function(e){return m(e,{height:!0,right:!0},!0)},w=function(e){return m(e,{right:!0},!0)}},103651:(e,t,r)=>{var n=r(442118),o=r(640554),i=Math.max;e.exports=function(e,t,r){var u=null==e?0:e.length;if(!u)return-1;var c=null==r?0:o(r);return c<0&&(c=i(u+c,0)),n(e,t,c)}}}]);