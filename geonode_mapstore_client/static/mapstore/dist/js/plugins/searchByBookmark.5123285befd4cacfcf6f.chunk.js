(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[80962],{597222:(e,t,r)=>{"use strict";r.d(t,{Vc:()=>o,qj:()=>i,bj:()=>a,p7:()=>l,Av:()=>c,M8:()=>s,wn:()=>u,gs:()=>f,NN:()=>m,C2:()=>p,O7:()=>b,oQ:()=>y,dX:()=>d,al:()=>v,Gh:()=>h,x2:()=>g,Y7:()=>E,b4:()=>k,GI:()=>S,KP:()=>C,dS:()=>O,Zw:()=>_,l4:()=>w,fZ:()=>j,Z:()=>T,a:()=>P,WN:()=>x,k9:()=>R,yo:()=>A,kE:()=>I,kV:()=>N,v2:()=>D,_q:()=>Z,tt:()=>H,Jc:()=>B,w4:()=>F,QJ:()=>L,KG:()=>G,o$:()=>X,TS:()=>M,Tw:()=>q,I3:()=>U});var n=r(197395),o="SEARCH:SEARCH_WITH_FILTER",i="SEARCH:SCHEDULE_SEARCH_WITH_FILTER",a="TEXT_SEARCH_STARTED",l="TEXT_SEARCH_RESULTS_LOADED",c="TEXT_SEARCH_RESULTS_PURGE",s="TEXT_SEARCH_RESET",u="TEXT_SEARCH_ADD_MARKER",f="TEXT_SEARCH_TEXT_CHANGE",m="TEXT_SEARCH_LOADING",p="TEXT_SEARCH_NESTED_SERVICE_SELECTED",b="TEXT_SEARCH_ERROR",y="TEXT_SEARCH_CANCEL_ITEM",d="TEXT_SEARCH_ITEM_SELECTED",v="TEXT_SEARCH_SHOW_GFI",h="TEXT_SEARCH_SET_HIGHLIGHTED_FEATURE",g="UPDATE_RESULTS_STYLE",E="CHANGE_SEARCH_TOOL",k="SEARCH:ZOOM_ADD_POINT",S="SEARCH:CHANGE_FORMAT",C="SEARCH:CHANGE_COORD",O="SEARCH:HIDE_MARKER";function _(e){return{type:S,format:e}}function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.layer,r=e.cql_filter;return{type:o,layer:t,cql_filter:r}}function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.layer,r=e.cql_filter;return{type:i,layer:t,cql_filter:r}}function T(e,t,r){return{type:k,pos:e,zoom:t,crs:r}}function P(e){return{type:E,activeSearchTool:e}}function x(e){return{type:l,results:e,append:arguments.length>1&&void 0!==arguments[1]&&arguments[1],services:arguments.length>2?arguments[2]:void 0}}function R(e){return{type:f,searchText:e}}function A(e){return{type:m,loading:e}}function I(e){return{type:b,error:e}}function N(){return{type:c}}function D(){return{type:s}}function Z(e,t){return{type:u,markerPosition:e,markerLabel:t}}function H(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).services;return{type:a,searchText:e,services:void 0===t?null:t,maxResults:arguments.length>2&&void 0!==arguments[2]?arguments[2]:15}}function B(e,t,r,n){return{type:d,item:e,mapConfig:t,service:r,resultsStyle:n}}var F=function(e){return{type:v,item:e}};function L(e,t,r){return{type:p,searchText:r,services:e,items:t}}function G(e){return{type:y,item:e}}function X(e){return{type:g,style:e}}function M(e,t){return{type:C,coord:e,val:t}}function q(){return(0,n.vU)({title:"Error",position:"tc",message:"search.errors.nonQueriableLayers",autoDismiss:10})}function U(){return(0,n.vU)({title:"Error",position:"tc",message:"search.errors.serverError",autoDismiss:10})}},225016:(e,t,r)=>{"use strict";r.d(t,{Cv:()=>n,RD:()=>o,NR:()=>i,mV:()=>a,N3:()=>l,dR:()=>c,sS:()=>s,sm:()=>u});var n="SET_SEARCH_BOOKMARK_CONFIG",o="RESET_BOOKMARK_CONFIG",i="UPDATE_BOOKMARK",a="FILTER_BOOKMARKS";function l(e,t){return{type:n,property:e,value:t}}function c(){return{type:o}}function s(e){return{type:i,bookmark:e,idx:arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1}}function u(e){return{type:a,filter:e}}},729679:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var n=r(45697),o=r.n(n),i=r(124852),a=r.n(i),l=r(294184),c=r.n(l);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(null,arguments)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,v(n.key),n)}}function m(e,t,r){return t=b(t),function(e,t){if(t&&("object"==s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,p()?Reflect.construct(t,r||[],b(e).constructor):t.apply(e,r))}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function d(e,t,r){return(t=v(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e){var t=function(e){if("object"!=s(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==s(t)?t:t+""}var h=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return d(e=m(this,t,[].concat(n)),"state",{is:"active"}),d(e,"onClick",(function(){return e.props.onClick?e.props.onClick.bind(e):function(){}})),d(e,"onDisable",(function(){return e.props.onDisable?e.props.onDisable.bind(e):function(){}})),d(e,"onConfirm",(function(){return e.props.onConfirm?e.props.onConfirm():e.props.confirming&&e.props.confirming.onClick?e.props.confirming.onClick():function(){}})),d(e,"isDisabled",(function(){return"disabled"===e.state.is})),d(e,"isConfirming",(function(){return"confirming"===e.state.is})),d(e,"isActive",(function(){return!e.isConfirming()&&!e.isDisabled()})),d(e,"handleClick",(function(){return e.isConfirming()&&e.props.disableAfterConfirmed?(e.onConfirm(),e.onDisable(),void e.setState({is:"disabled"})):e.isConfirming()?(e.onConfirm(),void e.setState({is:"active"})):(e.onClick(),void e.setState({is:"confirming"}))})),d(e,"handleBlur",(function(){e.setState({is:"active"})})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.children,r=e.buttonProps,n=e.confirming,o=e.disabled,i=this.props,l=i.text,s=i.style,f=i.className,m=void 0===f?"btn btn-sm btn-danger":f,p=this.isDisabled(),b=this.isConfirming();return p&&(l=o&&o.text||"Loading...",m=o&&o.className||"btn btn-sm btn-secondary",s=o&&o.style||{}),b&&(l=n&&n.text||"Confirm?",m=n&&n.className||"btn btn-sm btn-warning",s=n&&n.style||{}),a().createElement("button",u({className:c()("confirm-button",m),style:s,onClick:this.handleClick,onBlur:this.handleBlur,disabled:p},r),t,t?" ":"",l)}}])&&f(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(a().Component);d(h,"propTypes",{disableAfterConfirmed:o().bool,resetOnBlur:o().bool,onConfirm:o().func,onDisable:o().func,onClick:o().func,text:o().oneOfType([o().string,o().node]),className:o().string,style:o().object,confirming:o().shape({text:o().oneOfType([o().string,o().node]),className:o().string,style:o().object,onClick:o().func}),disabled:o().shape({text:o().oneOfType([o().string,o().node]),className:o().string,style:o().object}),children:o().node,buttonProps:o().object}),d(h,"defaultProps",{resetOnBlur:!0});const g=h},698772:(e,t,r)=>{"use strict";r.d(t,{Z:()=>E});var n=r(893379),o=r.n(n),i=r(172704);o()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var a=r(45697),l=r.n(a),c=r(124852),s=r.n(c),u=r(480681);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,h(n.key),n)}}function p(e,t,r){return t=y(t),function(e,t){if(t&&("object"==f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,b()?Reflect.construct(t,r||[],y(e).constructor):t.apply(e,r))}function b(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(b=function(){return!!e})()}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function v(e,t,r){return(t=h(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){var t=function(e){if("object"!=f(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==f(t)?t:t+""}var g=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return v(e=p(this,t,[].concat(n)),"onFilter",(function(t){e.props.onFilter(t.target.value)})),v(e,"onClear",(function(){e.props.onFilter("")})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.props.filterText?s().createElement(u.Ox,{placement:"bottom",overlay:s().createElement(u.u,{id:"mapstore-toc-filter"},this.props.tooltipClear)},s().createElement(u.gG,{glyph:"1-close",className:"text-primary close-filter",onClick:this.onClear})):s().createElement(u.gG,{className:"text-primary",glyph:"filter"});return s().createElement(u.cw,{className:"mapstore-filter"},s().createElement(u.BZ,null,s().createElement(u.NI,{value:this.props.filterText,placeholder:this.props.filterPlaceholder,onChange:this.onFilter,onFocus:this.props.onFocus,type:"text"}),s().createElement(u.BZ.Addon,{className:"square-button-md"},this.props.loading?s().createElement("div",{className:"toc-inline-loader"}):e)))}}])&&m(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(s().Component);v(g,"propTypes",{loading:l().bool,filterText:l().string,filterPlaceholder:l().oneOfType([l().object,l().string]),onFilter:l().func,onFocus:l().func,tooltipClear:l().oneOfType([l().object,l().string])}),v(g,"defaultProps",{loading:!1,filterText:"",filterPlaceholder:"",onFilter:function(){},onFocus:function(){},tooltipClear:"Clear"});const E=g},315092:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>ie});var n=r(124852),o=r.n(n),i=r(171703),a=r(22222),l=r(480681),c=r(227361),s=r.n(c),u=r(414293),f=r.n(u),m=r(322843),p=r(916651),b=r(729679),y=r(807472),d=r(38560),v=r(481756),h=r(45697),g=r.n(h),E=r(698772),k=r(805346),S=r(876424),C=r(993451),O=r(80717),_=(0,C.Z)("filterPlaceholder")(E.Z),w=function(e){var t=e.filter,r=void 0===t?"":t,n=e.onFilter,i=e.onPropertyChange,a=e.bookmarks,c=void 0===a?[]:a,s=function(e,t){i("bookmark",e),i("editIdx",t),i("page",1)};return o().createElement(l.rj,{fluid:!0,id:"bookmark-list",className:"ms-header",style:{width:"100%",boxShadow:"none"}},o().createElement(l.X2,null,o().createElement(l.JX,{xs:12,style:{padding:0}},o().createElement(_,{filterPlaceholder:"search.bookmarkFilter",filterText:r,onFilter:n}))),o().createElement(l.X2,{className:"bookmark-card"},0===c.length?o().createElement("div",{className:"search-bookmark-name"},o().createElement(k.Z,{msgId:"search.bookmarkslistempty"})):c.map((function(e,t){return(n=e.title)&&-1!==n.toLowerCase().indexOf(r.toLowerCase())?o().createElement(S.Z,{key:"bookmark-card-".concat(t),preview:o().createElement(l.gG,{glyph:"bookmark"}),title:o().createElement("span",{onClick:function(){return s(e,t)},style:{margin:"6px 0px"}},e&&e.title),size:"sm",tools:o().createElement(O.Z,{btnDefaultProps:{className:"square-button-md no-border"},btnGroupProps:{style:{margin:10}},buttons:[{glyph:"pencil",tooltipId:"search.editBookmark",onClick:function(){return s(e,t)}},{glyph:"trash",tooltipId:"search.deleteBookmark",onClick:function(){return function(e){var t=c.filter((function(t,r){return r!==e}));i("bookmarkSearchConfig",{bookmarks:t})}(t)}}]})}):null;var n}))))};w.propTypes={filter:g().string,onFilter:g().func.isRequired,onPropertyChange:g().func.isRequired,bookmarks:g().array.isRequired};const j={Element:w,validate:!0};var T=r(694174),P=r.n(T),x=r(794192);function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){D(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function D(e,t,r){return(t=function(e){var t=function(e){if("object"!=R(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==R(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Z=(0,C.Z)("placeholder")(l.NI),H=(0,C.Z)("placeholder")(x.Z),B=function(e){var t=e.onPropertyChange,r=e.bookmark,n=void 0===r?{}:r,i=e.bbox,a=n.options,c=void 0===a?{}:a,s=n.title,u=n.layerVisibilityReload,f=void 0!==u&&u,m=function(e,r){var o=N(N({},n.options),{},D({},r,parseFloat(e)));t("bookmark",N(N({},n),{},{options:o}))},p=function(e){t("bookmark",N(N({},n),{},{title:e}))},b=function(e){return c[e]?["north","south"].includes(e)?c[e]&&!P()(c[e],-90,91)?"error":null:c[e]&&!P()(c[e],-180,181)?"error":null:null};return o().createElement("div",{id:"add-new-bookmark"},o().createElement(l.JX,null,o().createElement(l.cw,{validationState:b("title")},o().createElement(l.J$,null,o().createElement(k.Z,{msgId:"search.b_title"})),o().createElement(Z,{className:"bookmark-title",value:s,name:"title",type:"text",placeholder:"search.b_title",onChange:function(e){var t=e.target;return p(t.value)},onBlur:function(e){var t=e.target;return p(t.value.trim())}}))),o().createElement(l.JX,null,o().createElement(l.cw,{style:{display:"flex",justifyContent:"space-between"}},o().createElement(l.J$,null,o().createElement(k.Z,{msgId:"search.b_bbox"})),o().createElement("div",{id:"bookmark-tools"},o().createElement(l.Ox,{key:"toggleLayer",placement:"top",overlay:o().createElement(l.u,{id:"search-bookmark-layer"},o().createElement(k.Z,{msgId:"search.b_layer_tooltip"}))},o().createElement(d.Z,{key:"toggleLayer",bsStyle:"primary",className:"square-button-md btn btn-default no-border",onClick:function(){t("bookmark",N(N({},n),{},{layerVisibilityReload:!f}))}},o().createElement(l.gG,{glyph:f?"eye-open":"eye-close"}))),o().createElement(l.Ox,{key:"getBBox",placement:"top",overlay:o().createElement(l.u,{id:"search-bookmark-bbox"},o().createElement(k.Z,{msgId:"search.b_bbox_tooltip"}))},o().createElement(d.Z,{key:"getBBox",bsStyle:"primary",className:"square-button-md btn btn-default no-border",onClick:function(){var e,r,o=(r=4,function(e){if(Array.isArray(e))return e}(e=i)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,l=[],c=!0,s=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return l}}(e,r)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?A(e,t):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[0],l=o[1],c=o[2],s=o[3],u={west:parseFloat(a)||0,south:parseFloat(l)||0,east:parseFloat(c)||0,north:parseFloat(s)||0},f=N(N({},n.options),u);t("bookmark",N(N({},n),{},{options:f}))}},o().createElement(l.gG,{glyph:"fit-cover"})))))),o().createElement("div",{className:"bbox-field-group"},o().createElement("div",{className:"field-top-bottom"},o().createElement(l.cw,{validationState:b("north")},o().createElement(l.J$,null,o().createElement(k.Z,{msgId:"search.b_bbox_north"})),o().createElement(H,{placeholder:"search.b_bbox_north_placeholder",min:-90,max:90,name:"north",type:"number",onChange:function(e){return m(e,"north")},value:c.north}))),o().createElement("div",{className:"field-center-group"},o().createElement("div",{className:"field-left-right"},o().createElement(l.cw,{validationState:b("west")},o().createElement(l.J$,null,o().createElement(k.Z,{msgId:"search.b_bbox_west"})),o().createElement(H,{placeholder:"search.b_bbox_west_placeholder",min:-180,max:180,name:"west",type:"number",onChange:function(e){return m(e,"west")},value:c.west}))),o().createElement("div",{className:"field-left-right"},o().createElement(l.cw,{validationState:b("east")},o().createElement(l.J$,null,o().createElement(k.Z,{msgId:"search.b_bbox_east"})),o().createElement(H,{placeholder:"search.b_bbox_east_placeholder",min:-180,max:180,name:"east",type:"number",onChange:function(e){return m(e,"east")},value:c.east})))),o().createElement("div",{className:"field-top-bottom"},o().createElement(l.cw,{validationState:b("south")},o().createElement(l.J$,null,o().createElement(k.Z,{msgId:"search.b_bbox_south"})),o().createElement(H,{placeholder:"search.b_bbox_south_placeholder",min:-90,max:90,name:"south",type:"number",onChange:function(e){return m(e,"south")},value:c.south})))))};B.propTypes={onPropertyChange:g().func,bookmark:g().object,bbox:g().array};const F={Element:B,validate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.options,r=void 0===t?{}:t,n=e.title,o=void 0===n?"":n,i=r.south,a=r.north,l=r.west,c=r.east,s=P()(i,-90,91)&&P()(a,-90,91),u=P()(l,-180,181)&&P()(c,-180,181),f=!!o.trim().length;return u&&s&&f}};var L=r(782904),G=r(597222),X=r(225016),M=r(881808);function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function K(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){J(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function J(e,t,r){return(t=function(e){var t=function(e){if("object"!=q(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==q(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var V=r(800827),$=r(274621);function z(e){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z(e)}function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},W.apply(null,arguments)}function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){ee(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ee(e,t,r){return(t=function(e){var t=function(e){if("object"!=z(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=z(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==z(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var te=function(e,t,r,n){var o=r.canEdit,i=r.id,a=t&&(o||f()(i));return"ALL"===e||"EDIT"===e&&a||"ADMIN"===e&&n},re=(0,i.connect)((0,a.P1)([function(e){var t;return(null==e||null===(t=e.search)||void 0===t?void 0:t.activeSearchTool)||null},function(e){return(null==e?void 0:e.searchbookmarkconfig)||{}}],(function(e,t){return{active:"bookmarkSearch"===e,show:(null==t?void 0:t.allowUser)||!!s()(t,"bookmarkSearchConfig.bookmarks",[]).length}})),{onClick:G.a})((function(e){var t=e.show,r=e.onClick,n=e.active;return t?o().createElement(l.sN,{active:n,onClick:function(){r("bookmarkSearch"),document.dispatchEvent(new MouseEvent("click"))}},o().createElement(l.gG,{glyph:"bookmark"})," ",o().createElement(v.Z,{msgId:"search.searchByBookmark"})):null})),ne=(0,a.P1)([V.Od,function(e){return e.controls||{}},function(e){return e.searchbookmarkconfig||{}},$.jl,$.qg,V._H],(function(e,t,r,n,o){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};return{bbox:e&&e.bbox&&(0,p.getExtentFromViewport)(e.bbox),enabled:t.searchBookmarkConfig&&t.searchBookmarkConfig.enabled||!1,pages:[j,F],page:r&&r.page||0,bookmark:r&&r.bookmark,bookmarkSearchConfig:r&&r.bookmarkSearchConfig,editIdx:r&&r.editIdx,filter:r&&r.filter,allowUser:te(s()(r,"bookmarkEditing"),n,i,o)}})),oe=(0,i.connect)(ne,{toggleControl:L.Xi,onPropertyChange:X.N3,resetBookmarkConfig:X.dR,updateBookmark:X.sS,onFilter:X.sm})((function(e){var t=e.enabled,r=e.pages,i=e.page,a=e.onPropertyChange,c=e.bookmark,s=e.bookmarkSearchConfig,u=void 0===s?{}:s,f=e.editIdx,m=e.zoomOnSelect,p=void 0===m||m,h=e.bookmarkEditing,g=void 0===h?"EDIT":h,E=e.allowUser;(0,n.useEffect)((function(){a("zoomOnSelect",p),a("bookmarkEditing",g)}),[a]),(0,n.useEffect)((function(){a("allowUser",E)}),[E]);var k,S=function(){i>1?a("page",i-1):1===i&&e.resetBookmarkConfig()},C=function(){return r[i].validate(c)},O=r&&r[i]||null;return t?o().createElement(y.Z,{id:"bookmark-panel-dialog",draggable:!0,modal:!1},o().createElement("span",{role:"header",style:{display:"flex",justifyContent:"space-between"}},o().createElement("span",null,(k=0===i?"search.b_listpaneltitle":"search.b_newpaneltitle",o().createElement(v.Z,{msgId:k}))),0===i&&o().createElement("button",{onClick:function(){e.toggleControl("searchBookmarkConfig"),e.resetBookmarkConfig()},className:"close"}," ",o().createElement(l.gG,{glyph:"1-close"}))),o().createElement("div",{role:"body",className:"services-config-editor"},o().createElement(O.Element,W({bookmarks:u.bookmarks,onPropertyChange:a,bookmark:c},e))),0===i?o().createElement("span",{role:"footer"},o().createElement(d.Z,{onClick:function(){a("bookmark",{}),a("page",1)},bsStyle:"primary"},o().createElement(v.Z,{msgId:"search.addbtn"}))):i===r.length-1?o().createElement("span",{role:"footer"},o().createElement(d.Z,{onClick:S,bsStyle:"primary"},o().createElement(v.Z,{msgId:"search.prevbtn"})),o().createElement(d.Z,{disabled:!C(),onClick:function(){var t=c.layerVisibilityReload,r=void 0!==t&&t;e.updateBookmark(Y(Y({},c),{},{layerVisibilityReload:r}),f)},bsStyle:"success"},o().createElement(v.Z,{msgId:"search.savebtn"}))):o().createElement("span",{role:"footer"},1===i?o().createElement(b.Z,{onConfirm:S,bsStyle:"primary",confirming:{text:o().createElement(v.Z,{msgId:"search.cancelconfirm"})},text:o().createElement(v.Z,{msgId:"search.cancelbtn"})}):o().createElement(d.Z,{onClick:S,bsStyle:"primary"},o().createElement(v.Z,{msgId:1===i?"search.cancelbtn":"search.prevbtn"})),o().createElement(d.Z,{disabled:!C(),onClick:function(){i<r.length-1&&a("page",i+1)},bsStyle:"primary"},o().createElement(v.Z,{msgId:"search.nextbtn"})))):null}));const ie=(0,m.rx)("SearchByBookmark",{component:oe,containers:{Search:{menuItem:re,bookmarkConfig:function(e,t,r){return{onClick:function(){t||e("searchBookmarkConfig")},glyph:"cog",className:"square-button-md no-border ",tooltipId:"search.bookmarksettings",tooltipPosition:"bottom",bsStyle:"default",pullRight:!0,visible:"bookmarkSearch"===r}}}},reducers:{searchbookmarkconfig:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X.Cv:return K(K({},e),{},J({},t.property,t.value));case M.ok:var r=t.config.map.bookmark_search_config||{};return K(K({},e),{},{bookmarkSearchConfig:r});case L.l:case X.RD:return K(K({},e),{},{bookmark:void 0,page:0,editIdx:void 0});case X.NR:var n=(e.bookmarkSearchConfig&&e.bookmarkSearchConfig.bookmarks||[]).slice(),o=K({},t.bookmark);return-1!==t.idx?n[t.idx]=o:n.push(o),K(K({},e),{},{bookmark:void 0,page:0,editIdx:void 0,bookmarkSearchConfig:K(K({},e.bookmarkSearchConfig),{},{bookmarks:n})});case X.mV:return K(K({},e),{},{filter:t.filter});default:return e}}}})},481756:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(171703),o=r(805346);const i=(0,n.connect)((function(e){return{locale:e.locale&&e.locale.currentLocale,messages:e.locale&&e.locale.messages||[]}}))(o.Z)},172704:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(923645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,".msgapi .mapstore-filter input::-ms-clear,\n.msgapi .mapstore-filter input::-ms-reveal {\n  display: none;\n}\n",""]);const i=o},515600:e=>{var t=Math.max,r=Math.min;e.exports=function(e,n,o){return e>=r(n,o)&&e<t(n,o)}},694174:(e,t,r)=>{var n=r(515600),o=r(418601),i=r(14841);e.exports=function(e,t,r){return t=o(t),void 0===r?(r=t,t=0):r=o(r),e=i(e),n(e,t,r)}}}]);