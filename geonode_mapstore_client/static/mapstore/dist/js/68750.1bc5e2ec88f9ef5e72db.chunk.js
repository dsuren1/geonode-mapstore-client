(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[68750],{93993:(e,r,t)=>{"use strict";t.d(r,{rv:()=>n,TN:()=>o,R_:()=>a,Ry:()=>i,un:()=>u,Yc:()=>l,Sp:()=>c,VT:()=>s,YT:()=>f,xz:()=>p,J6:()=>v,P1:()=>d,Nr:()=>y,HI:()=>b,SF:()=>m,Rf:()=>g,Oi:()=>O,XR:()=>h,nu:()=>S,wc:()=>E,Jl:()=>w,cf:()=>P,fU:()=>j,tn:()=>T,nk:()=>R,Hg:()=>A,t_:()=>_,rr:()=>k});var n="GEONODE_SEARCH:SEARCH_RESOURCES",o="GEONODE_SEARCH:UPDATE_RESOURCES",a="GEONODE_SEARCH:LOADING_RESOURCES",i="GEONODE_SEARCH:REQUEST_RESOURCE",u="GEONODE_SEARCH:UPDATE_RESOURCES_METADATA",l="GEONODE:SET_FEATURED_RESOURCES",c="GEONODE_SEARCH:UPDATE_FEATURED_RESOURCES",s="GEONODE_REDUCE_TOTAL_COUNT",f="GEONODE_INCREASE_TOTAL_COUNT",p="GEONODE_SET_SEARCH_CONFIG",v="GEONODE:GET_FACET_ITEMS",d="GEONODE:SET_FACET_ITEMS",y="GEONODE:GET_FACET_FILTERS",b="SET_FILTERS";function m(e,r,t){return{type:n,params:e,pathname:r,reset:t}}function g(e,r){return{type:o,resources:e,reset:r}}function O(e){return{type:u,metadata:e}}function h(e){return{type:a,loading:e}}function S(e,r){return{type:i,pk:e,ctype:r}}function E(e){return{type:l,data:e}}function w(e){return{type:c,action:e,pageSize:arguments.length>1&&void 0!==arguments[1]?arguments[1]:4}}function P(){return{type:s}}function j(){return{type:f}}function T(e){return{type:p,config:e}}function R(e){return{type:v,query:e}}function A(e){return{type:d,facetItems:e}}function _(e){return{type:y,facets:e}}function k(e){return{type:b,filters:e}}},864818:(e,r,t)=>{"use strict";t.d(r,{ZP:()=>K});var n=t(49977),o=t(618446),a=t.n(o),i=t(441609),u=t.n(i),l=t(701469),c=t.n(l),s=t(414293),f=t.n(s),p=t(478718),v=t.n(p),d=t(227361),y=t.n(d),b=t(337326),m=t(93993),g=t(643892),O=t(275982),h=t(472500),S=t.n(h),E=t(737275),w=t(322843),P=t(770058);function j(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var T=function(e){var r=(0,w.bh)(e,(0,E.u8)("monitorState")),t=(0,E.u8)("geoNodeCustomFilters"),n=function(e){return y()(r,e)},o=(0,P.BK)((function(e){return(0,w.CU)(n,{},e)}))(t||{});return Object.keys(o).reduce((function(e,r){return[].concat(function(e){if(Array.isArray(e))return j(e)}(t=e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,r){if(e){if("string"==typeof e)return j(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?j(e,r):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[{id:r,query:o[r]}]);var t}),[])},R=t(138334),A=t(12530),_=t(274621),k=t(76907),C=t(455877),D=t.n(C),N=t(776342),I=t(72466),U=t(653488),M=t(55035),F=["page"],x=["page"];function H(e){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(e)}function G(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a,i,u=[],l=!0,c=!1;try{if(a=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;l=!1}else for(;!(l=(n=a.call(t)).done)&&(u.push(n.value),u.length!==r);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(c)throw o}}return u}}(e,r)||L(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e){return function(e){if(Array.isArray(e))return z(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||L(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,r){if(e){if("string"==typeof e)return z(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?z(e,r):void 0}}function z(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function X(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function V(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function J(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?V(Object(t),!0).forEach((function(r){W(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):V(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function W(e,r,t){return(r=function(e){var r=function(e,r){if("object"!==H(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==H(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===H(r)?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var Y="GEONODE_SEARCH:UPDATE_RESOURCES_REQUEST",$=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["d"];return Object.keys(e).filter((function(e){return!r.includes(e)})).reduce((function(r,t){return e[t]&&0!==e[t].length?J(J({},r),{},W({},t,c()(e[t])?e[t].map((function(e){return e+""})):e[t]+"")):r}),{})},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,n=t.defaultPage,o=void 0===n?1:n,a=t.pagination,i=t.exclude,u=S().parse(e||"",!0).query,l=(u.page,X(u,F)),c=$(J(J({},r),a?u:l),i),s=c.page;return[X(c,x),s?parseFloat(s):o]},Z=function(e,r){var t,o,a=e.params,i=e.pageSize,u=e.reset,l=e.location,c=r.getState(),s=T(c),f=$(J(J({},a),null==c||null===(t=c.gnsearch)||void 0===t||null===(o=t.config)||void 0===o?void 0:o.defaultQuery));return n.Observable.defer((function(){return(0,b.jh)(J(J({},f),{},{pageSize:i,customFilters:s}))})).switchMap((function(e){var r,t=e.resources,o=e.total,i=e.isNextPageAvailable,s=(0,_.np)(c),f=null==s||null===(r=s.info)||void 0===r?void 0:r.preferred_username,p=(0,A.VC)(t,f);return n.Observable.of.apply(n.Observable,q(p.map((function(e){return(0,R.tv)(e)}))).concat([(0,m.Rf)(t,u),(0,m.Oi)({isNextPageAvailable:i,params:a,locationSearch:l.search,locationPathname:l.pathname,total:o}),(0,m.XR)(!1)]))})).catch((function(){return n.Observable.of((0,m.Rf)([],!0),(0,m.Oi)({isNextPageAvailable:!1,params:a,locationSearch:l.search,locationPathname:l.pathname,total:0,error:!0}),(0,m.XR)(!1))})).startWith((0,m.XR)(!0))},B=function(e){return"/"!==e&&I.Jd.filter((function(e){return e.shouldNotRequestResources})).some((function(r){return r.path.some((function(r){var t;return null===(t=(0,N.LX)(e,r))||void 0===t?void 0:t.isExact}))}))};const K={gnsSearchResourcesEpic:function(e,r){return e.ofType(m.rv).switchMap((function(e){var t,o,i,u,l,c,s,f,p=e.pathname,v=void 0===p?"/":p,d=e.params,y=e.reset,b=r.getState(),m=!(null==b||null===(t=b.gnsearch)||void 0===t||null===(o=t.config)||void 0===o||!o.pagination),g=$(null==b||null===(i=b.gnsearch)||void 0===i?void 0:i.params,[]),h=$(d,[]),E=m?[]:["page"],w=Object.keys(h).reduce((function(e,r){return E.includes(r)?e:J(J({},e),{},W({},r,h[r]))}),{}),P=((null===(u=b.router)||void 0===u||null===(l=u.location)||void 0===l?void 0:l.pathname)||"/")===v,j=!a()(g,h),T=(null==b||null===(c=b.gnsearch)||void 0===c?void 0:c.locationSearch)||"",R=S().format({query:w});return T===R&&P?y||j?n.Observable.of((f={action:"PUSH",params:h,location:null==b||null===(s=b.router)||void 0===s?void 0:s.location},{type:Y,payload:f,reset:void 0})):n.Observable.empty():n.Observable.of((0,O.VF)(J(J({},v&&!P&&{pathname:v}),{},{search:R})))}))},gnsSearchResourcesOnLocationChangeEpic:function(e,r){return e.ofType(O.nk,Y).filter((function(e){var r=e.payload;return"PUSH"===r.action||"POP"===r.action})).switchMap((function(e){var t,o,i,u,l=r.getState(),c=!(null==l||null===(t=l.gnsearch)||void 0===t||null===(o=t.config)||void 0===o||!o.pagination),s=null==l||null===(i=l.gnsearch)||void 0===i||null===(u=i.config)||void 0===u?void 0:u.pageSize;if(!s)return n.Observable.empty();var f,p=e.payload||{},v=p.isFirstRendering,d=p.location,y=l.gnsearch.nextParams,b=G(Q(l.gnsearch.locationSearch,l.gnsearch.params,{pagination:c}),2),m=b[0],g=b[1],O=G(Q(d.search,y||{},{pagination:c}),2),h=O[0],S=O[1],E=e.payload.location.pathname;if(!y||e.reset||B(E)){var w,P=c?S:1,j=J(J({},h),{},{page:P}),T=c?a()(J(J({},m),{},{page:g}),J(J({},h),{},{page:S})):a()(m,h);return!B(E)&&(null!=l&&null!==(w=l.gnsearch)&&void 0!==w&&w.isFirstRequest||v||!T||e.reset)?Z({params:j,pageSize:s,reset:!0,location:d},r):n.Observable.empty()}var R=!1;if(c){var A;f=null!=l&&null!==(A=l.gnsearch)&&void 0!==A&&A.isFirstRequest||a()(m,h)?S:1,R=!0}else{var _,k=(null===(_=l.gnsearch)||void 0===_?void 0:_.resources.length)||0,C=Math.floor(k/s),D=S===g+1&&S===C+1;f=(R=v||!a()(m,h)||!D)?1:S}var N=J(J({},h),{},{page:f});return Z({params:N,pageSize:s,reset:R,location:d},r)}))},gnsSelectResourceEpic:function(e,r){return e.ofType(m.Ry).switchMap((function(e){var t,o;if(f()(e.pk))return n.Observable.of((0,g.DF)(null));var a=((null===(t=r.getState().gnsearch)||void 0===t?void 0:t.resources)||[]).find((function(r){var t=r.pk,n=r.resource_type;return t===e.pk&&e.ctype===n}));return(o=n.Observable.defer((function(){return(0,b.yi)(e.ctype,e.pk)})).switchMap((function(e){return n.Observable.of((0,g.DF)(J(J({},e),{},{"@ms-detail":!0})))})).catch((function(e){return n.Observable.of((0,g.mN)(e.data||e.message))}))).startWith.apply(o,q(a?[(0,g.DF)(J(J({},a),{},{"@ms-detail":!0}),!0)]:[(0,g.Q$)()]))}))},getFeaturedResourcesEpic:function(e,r){var t=r.getState,o=void 0===t?function(){}:t;return e.ofType(m.Sp).switchMap((function(e){var r=e.action,t=e.pageSize,a=function(e,r){var t,n,o,a,i,u;if(!e)return 1;var l=(null===(t=r.gnsearch)||void 0===t||null===(n=t.featuredResources)||void 0===n?void 0:n.page)||1,c=null===(o=r.gnsearch)||void 0===o||null===(a=o.featuredResources)||void 0===a?void 0:a.isNextPageAvailable;return"next"===e&&c?l+1:(null===(i=r.gnsearch)||void 0===i||null===(u=i.featuredResources)||void 0===u?void 0:u.isPreviousPageAvailable)?l-1:1}(r,o());return n.Observable.defer((function(){return(0,b.B5)(a,t)})).switchMap((function(e){var r;return n.Observable.of((0,m.wc)(J(J({},e),{},{isNextPageAvailable:!(null==e||null===(r=e.links)||void 0===r||!r.next),isPreviousPageAvailable:!(null==e||!e.links.previous),loading:!1})))})).catch((function(e){return n.Observable.of((0,g.mN)(e.data||e.message),(0,m.wc)({loading:!1}))})).startWith((0,m.wc)({loading:!0}))}))},gnWatchStopCopyProcessOnSearch:function(e,r){return e.ofType(R.v).filter((function(e){var r;return(null==e||null===(r=e.payload)||void 0===r?void 0:r.processType)===A.zj.COPY_RESOURCE})).flatMap((function(e){var t,o,a,i,u,l,c,s,f,p;if((null==e||null===(t=e.payload)||void 0===t?void 0:t.error)||(null==e||null===(o=e.payload)||void 0===o||null===(a=o.output)||void 0===a?void 0:a.status)===A.N5.FAILED)return n.Observable.empty();var v=null==e||null===(i=e.payload)||void 0===i||null===(u=i.output)||void 0===u||null===(l=u.output_params)||void 0===l||null===(c=l.output)||void 0===c?void 0:c.uuid;if(void 0===v)return n.Observable.empty();var d=null==e||null===(s=e.payload)||void 0===s||null===(f=s.output)||void 0===f||null===(p=f.input_params)||void 0===p?void 0:p.instance;return n.Observable.defer((function(){return(0,b.LS)(v)})).switchMap((function(e){var t,o=((null===(t=r.getState().gnsearch)||void 0===t?void 0:t.resources)||[]).reduce((function(r,t){return t.pk==="".concat(d)?[].concat(q(r),[J(J({},e),{},{"@temporary":!0,pk2:D()()}),t]):[].concat(q(r),[t])}),[]);return n.Observable.of((0,m.Rf)(o,!0))}))}))},gnsRequestResourceOnLocationChange:function(e,r){return e.ofType(O.nk).filter((function(e){var r=e.payload;return"PUSH"===r.action||"POP"===r.action})).switchMap((function(e){var t=r.getState(),o=(e.payload||{}).location,a=S().parse((null==o?void 0:o.search)||"",!0).query,i=(0,k.yK)(t)||{pk:"",resource_type:""},u=G(((null==a?void 0:a.d)||"").split(";"),2),l=u[0],c=u[1];return"".concat(null==i?void 0:i.pk)===l&&"".concat(null==i?void 0:i.resource_type)===c?n.Observable.empty():n.Observable.of((0,m.nu)(l||void 0,c))}))},gnGetFacetItems:function(e,r){var t=r.getState,o=void 0===t?function(){}:t;return e.ofType(m.J6).switchMap((function(){var e=T(o());return n.Observable.defer((function(){return(0,b.nk)(e)})).switchMap((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return n.Observable.of((0,m.t_)(e))}))}))},gnSetFacetFilter:function(e,r){var t=r.getState,o=void 0===t?function(){}:t;return e.ofType(m.Nr,O.nk).filter((function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).facets;return!u()(e)||(0,U.ak)(o())})).switchMap((function(){var e,r,t,a,i=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).facets,l=T(o()),c=null===(e=o())||void 0===e||null===(r=e.router)||void 0===r?void 0:r.location,s=S().parse((null==c?void 0:c.search)||"",!0).query,f=(0,U.ak)(o()),p=i||f,d=v()(s,Object.keys(s).filter((function(e){return p.map((function(e){return e.filter})).includes(e)}))),y=null!==(t=null==p||null===(a=p.filter((function(e){return d[e.filter]})))||void 0===a?void 0:a.map((function(e){return{facet:e.name,key:d[e.filter]}})))&&void 0!==t?t:[],g=J(J({},(0,b.vl)(s,l)),{},{include_topics:!0});return n.Observable.forkJoin(y.map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.facet,t=e.key;return n.Observable.defer((function(){return(0,b.CG)(r,J(J({},g),{},{key:t}))}))}))).switchMap((function(e){var r,t,o={},a=null===(r=null!=e?e:[])||void 0===r?void 0:r.reduce((function(e,r){var t;return null==r||null===(t=r.items)||void 0===t?void 0:t.concat(e)}),[]);return(null==p||null===(t=p.map((function(e){return{filter:e.filter,value:null==s?void 0:s[e.filter]}})))||void 0===t?void 0:t.filter((function(e){return!u()(e.value)}))).forEach((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.filter,t=e.value;null==a||a.forEach((function(e){var n,a,i=(n=e.key,a=t,n===("string"==typeof n?a:Number(a))&&e);u()(i)||(o[r+i.key]=J(J({},i),{},{count:i.count||0}))}))})),n.Observable.of((0,m.rr)(o))})).concat(u()(f)?n.Observable.of((0,m.Hg)(p)):n.Observable.empty())}))},gnCatalogHomeRedirect:function(e){return e.ofType(O.nk).filter((function(e){return"/"===(r=y()(e,"payload.location.pathname"))||I.Jd.filter((function(e){return!e.shouldNotRequestResources})).some((function(e){return e.path.some((function(e){var t;return null===(t=(0,N.LX)(r,e))||void 0===t?void 0:t.isExact}))}));var r})).switchMap((function(e){var r=(0,M.PX)("catalogHomeRedirectsTo");if(u()(r)){var t=y()(e,"payload.location.search");window.location.href="/".concat(r,"/#/").concat(t)}return n.Observable.emtpty()}))}}},331869:(e,r,t)=>{"use strict";t.d(r,{ZP:()=>P});var n,o=t(49977),a=t(375875),i=t.n(a),u=t(178598),l=t(138334),c=t(12530),s=t(452992),f=t(337326),p=t(643892),v=t(93993),d=t(782904),y=t(275982),b=t(197395);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function g(e){return function(e){if(Array.isArray(e))return O(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return O(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?O(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function h(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function S(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?h(Object(t),!0).forEach((function(r){E(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function E(e,r,t){return(r=function(e){var r=function(e,r){if("object"!==m(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===m(r)?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var w=(E(n={},c.zj.DELETE_RESOURCE,f.fg),E(n,c.zj.COPY_RESOURCE,f.T5),n);const P={gnMonitorAsyncProcesses:function(e,r){return e.ofType(l.oc).flatMap((function(e){var t,n,a,u,f=((null==e||null===(t=e.payload)||void 0===t?void 0:t.output)||{}).status_url;return!f||null!=e&&null!==(n=e.payload)&&void 0!==n&&n.error?null!=e&&null!==(u=e.payload)&&void 0!==u&&u.error?o.Observable.of((0,l.iC)(S(S({},e.payload),{},{completed:!0})),(0,b.vU)({title:"gnviewer.invalidUploadMessageError",message:"gnviewer.cannotPerfomAction"})):o.Observable.of((0,l.iC)(S(S({},e.payload),{},{completed:!0}))):o.Observable.interval(c.nN[null==e||null===(a=e.payload)||void 0===a?void 0:a.processType]||1e3).takeWhile((function(){return!(0,s.jp)(r.getState(),e.payload)})).exhaustMap((function(){return(0,s.jp)(r.getState(),e.payload)?o.Observable.empty():o.Observable.defer((function(){return i().get(f).then((function(e){return e.data})).catch((function(e){var r;return{error:(null==e||null===(r=e.data)||void 0===r?void 0:r.detail)||(null==e?void 0:e.statusText)||(null==e?void 0:e.message)||!0}}))})).switchMap((function(r){var t,n;return r.error||r.status===c.N5.FINISHED||r.status===c.N5.FAILED?o.Observable.of.apply(o.Observable,[(0,l.iC)(S(S({},e.payload),{},{output:r,completed:!0}))].concat(g((null==e||null===(t=e.payload)||void 0===t?void 0:t.processType)!==c.zj.DELETE_RESOURCE||null!=e&&null!==(n=e.payload)&&void 0!==n&&n.resource["@temporary"]?[]:[(0,v.cf)()]))):o.Observable.of((0,l.iF)(S(S({},e.payload),{},{output:r})))}))}))}))},gnProcessResources:function(e){return e.ofType(p.Pv).flatMap((function(e){return o.Observable.defer((function(){return i().all(e.resources.map((function(r){return w[e.processType](r).then((function(t){return{resource:r,output:t,processType:e.processType}})).catch((function(t){var n;return{resource:r,error:(null==t||null===(n=t.data)||void 0===n?void 0:n.detail)||(null==t?void 0:t.statusText)||(null==t?void 0:t.message)||!0,processType:e.processType}}))})))})).switchMap((function(r){return o.Observable.of.apply(o.Observable,[(0,d.Xg)(e.processType,"loading",!1),(0,d.Xg)(e.processType,"value",void 0)].concat(g(r.map((function(e){return(0,l.tv)(e)}))),g(e.redirectTo?[(0,y.VF)(e.redirectTo)]:[])))})).startWith((0,d.Xg)(e.processType,"loading",!0))}))},gnDownloadResource:function(e){return e.ofType(p.IH).switchMap((function(e){var r=null==e?void 0:e.resource;return o.Observable.defer((function(){return(0,f.Rk)(r).then((function(e){var t=e.output,n=e.headers;return(0,u.saveAs)(new Blob([t],{type:null==n?void 0:n["content-type"]}),r.title),{resource:r}})).catch((function(e){var t;return{resource:r,error:(null==e||null===(t=e.data)||void 0===t?void 0:t.detail)||(null==e?void 0:e.statusText)||(null==e?void 0:e.message)||!0}}))})).switchMap((function(e){return(e||{}).error?o.Observable.of((0,p.V1)(S({},e.resource)),(0,b.vU)({title:"gnviewer.invalidUploadMessageError",message:"gnviewer.cannotPerfomAction"})):o.Observable.of((0,p.V1)(S({},e.resource)))}))}))}}},805207:(e,r,t)=>{"use strict";t.d(r,{Z:()=>v});var n=t(414293),o=t.n(n),a=t(93993),i=t(643892);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function l(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return c(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){var n,o,a;n=e,o=r,a=t[r],(o=function(e){var r=function(e,r){if("object"!==u(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===u(r)?r:String(r)}(o))in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var p={resources:[],params:{},previousParams:{},isFirstRequest:!0,featuredResources:{resources:[]}};const v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case a.rv:return f(f({},e),{},{nextParams:r.params});case a.TN:return f(f({},e),{},{isFirstRequest:!1,resources:r.reset?l(r.resources):[].concat(l(e.resources),l(r.resources))});case i.Oq:var t=e.resources.map((function(e){var t;return e.pk===(null==r||null===(t=r.data)||void 0===t?void 0:t.pk)?null==r?void 0:r.data:e}));return f(f({},e),{},{isFirstRequest:!1,resources:l(t)});case a.un:return f(f(f(f({},e),{},{total:r.metadata.total,isNextPageAvailable:r.metadata.isNextPageAvailable,error:r.metadata.error},r.metadata.params&&{params:r.metadata.params,previousParams:e.params,nextParams:null}),!o()(r.metadata.locationSearch)&&{locationSearch:r.metadata.locationSearch}),!o()(r.metadata.locationPathname)&&{locationPathname:r.metadata.locationPathname});case a.R_:return f(f({},e),{},{loading:r.loading},r.loading&&{error:!1});case a.Yc:return f(f({},e),{},{featuredResources:f(f({},e.featuredResources),r.data)});case a.VT:return f(f({},e),{},{total:e.total-1});case a.YT:return f(f({},e),{},{total:e.total+1});case a.xz:return f(f({},e),{},{config:r.config});case a.P1:return f(f({},e),{},{facetItems:r.facetItems});case a.HI:return f(f({},e),{},{filters:f(f({},e.filters),r.filters)});default:return e}}},555168:(e,r,t)=>{"use strict";t.d(r,{Z:()=>f});var n=t(138334),o=t(643892);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function i(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return u(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){var n,o,i;n=e,o=r,i=t[r],(o=function(e){var r=function(e,r){if("object"!==a(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===a(r)?r:String(r)}(o))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var s={processes:[],downloads:[]};const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case o.Pv:return c(c({},e),{},{processes:[].concat(i(e.processes.filter((function(e){return!r.resources.find((function(t){var n;return(null==e||null===(n=e.resource)||void 0===n?void 0:n.pk)===(null==t?void 0:t.pk)&&(null==e?void 0:e.processType)===r.processType}))}))),i(r.resources.map((function(e){return{resource:e,processType:r.processType}}))))});case n.oc:return c(c({},e),{},{processes:[].concat(i(e.processes.filter((function(e){var t,n,o,a;return!((null==e||null===(t=e.resource)||void 0===t?void 0:t.pk)===(null==r||null===(n=r.payload)||void 0===n||null===(o=n.resource)||void 0===o?void 0:o.pk)&&(null==e?void 0:e.processType)===(null==r||null===(a=r.payload)||void 0===a?void 0:a.processType))}))),[r.payload])});case n.v:case n.jo:return c(c({},e),{},{processes:e.processes.map((function(e){var t,n,o,a;return(null==e||null===(t=e.resource)||void 0===t?void 0:t.pk)===(null==r||null===(n=r.payload)||void 0===n||null===(o=n.resource)||void 0===o?void 0:o.pk)&&(null==e?void 0:e.processType)===(null==r||null===(a=r.payload)||void 0===a?void 0:a.processType)?r.payload:e}))});case o.IH:return c(c({},e),{},{downloads:[].concat(i(e.downloads),[r.resource])});case o.e3:return c(c({},e),{},{downloads:i(e.downloads.filter((function(e){var t,n;return(null==e||null===(t=e.resource)||void 0===t?void 0:t.pk)===(null==r||null===(n=r.resource)||void 0===n?void 0:n.pk)})))});default:return e}}}}]);