"use strict";(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[82017],{323010:(e,t,r)=>{r.d(t,{d:()=>Z,Z:()=>D});var n=r(124852),o=r.n(n),i=r(867076),a=r(423570),l=r.n(a),c=r(747359),u=r(1979),s=r(618446),p=r.n(s),f=r(624262),m=r(667348),d=r(49977),y=r(249243),b=r(313311),v=r.n(b),g=r(171703),h=r(134990),O=r(866113);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}var j=["rawPos"],P=["PopupSupport","tools"];function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},S.apply(null,arguments)}function E(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){k(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e,t,r){return(t=function(e){var t=function(e){if("object"!=w(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==w(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,l=[],c=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?A(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function M(e){return e&&0===e.indexOf("geostory-vector")}var Z=(0,i.compose)((0,g.connect)((function(e){return{sections:(0,O.NR)(e)}}),{onClickMarker:h.Vx}),(0,i.withHandlers)({onClickMarker:function(e){var t=e.onClickMarker,r=void 0===t?function(){}:t;return function(e,t,n){var i=v()(e,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.queryParams,n=(void 0===r?{}:r).request,o=e.layerMetadata,i=(void 0===o?{}:o).layerId;return!n&&i.toLowerCase()===t}))||{},a=i.response,l=(void 0===a?{}:a).features,c=T(void 0===l?[]:l,1)[0],u={popups:[]};if(null!=c&&c.properties){var s=null==c?void 0:c.properties,p=s.sectionId,f=s.contentId,m=s.title;r('sections[{"id":"'.concat(p,'"}].contents[{"id":"').concat(f,'"}].carouselToggle'),!0),m&&(u={popups:n.map((function(e){return I(I({},e),{},{component:function(){return o().createElement("div",{className:"ms-geostory-carousel-viewer"},m)}})}))})}return u}}})),q=(0,i.mapPropsStream)((function(e){var t=(0,i.createEventHandler)(),r=t.stream,n=t.handler;return r.withLatestFrom(e.map((function(e){return{map:e.map,layers:e.layers,options:e.options}})).distinctUntilChanged((function(e,t){return p()(e,t)}))).switchMap((function(e){var t=T(e,2),r=t[0],n=r.point,o=r.layerInfo,i=t[1],a=i.map,c=i.layers,s=void 0===c?[]:c,p=i.options,b=(void 0===p?{}:p).mapOptions,v=(void 0===b?{}:b).mapInfoFormat,g=void 0===v?(0,u.GA)():v,h=s.filter((function(e){return(0,f.T4)(e,a.resolution)&&(0,m.y_)(e)}));M(o)&&(h=h.filter((function(e){var t=e.id;return o===t})));var O=["SLD_BODY"],w=["buffer","cql_filter","filter","propertyName"];return 0===h.length?d.Observable.of({requests:[{}],responses:[{response:{features:[]}}],validResponses:[]}):d.Observable.from(h).mergeMap((function(e){var t=(0,m.Fm)(e,{format:g,map:a,point:n,currentLocale:"en-US"}),r=t.url,o=t.request,i=t.metadata,c=r,u=o,s=I(I({},(0,m.K7)(e,w,O)),u),p=l()();return(r?(0,y.y)(c,s,e).map((function(e){return e.data.exceptions?{reqId:p,exceptions:e.data.exceptions,queryParams:u,layerMetadata:i}:{data:e.data,reqId:p,queryParams:u,layerMetadata:I(I({},i),{},{features:e.features,featuresCrs:e.featuresCrs})}})):d.Observable.empty()).catch((function(e){return{error:e.data||e.statusText||e.status,reqId:p,queryParams:u,layerMetadata:i}})).startWith({start:!0,reqId:p,request:s})})).scan((function(e,t){var r=e.requests,n=e.responses,i=e.validResponses;if(t.start){var a=t.reqId,l=t.request;return{requests:r.concat({reqId:a,request:l}),responses:n,validResponses:i}}var c=t.data,u=t.queryParams,s=t.layerMetadata,p=(0,m.Te)(g),f=n.concat({response:c,queryParams:u,layerMetadata:s});return{requests:r,validResponses:p.getValidResponses(f),responses:f,layerInfo:o}}),{requests:[],responses:[],validResponses:[],layerInfo:o})})).startWith({requests:[],responses:[]}).combineLatest(e,(function(e){return I(I({},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}),{},{mapInfo:e,getFeatureInfoHandler:n})}))}));const D=(0,i.branch)((function(e){var t=e.map,r=(void 0===t?{}:t).mapInfoControl,n=void 0!==r&&r;return!e.isDrawEnabled&&n}),(0,i.compose)(q,(0,i.withStateHandlers)({popups:[]},{onClick:function(e,t){var r=t.getFeatureInfoHandler,n=void 0===r?function(){}:r,o=t.map,i=(void 0===o?{}:o).mapInfoControl;return function(e,t){var r=e.rawPos,o=void 0===r?[]:r,a=E(e,j);return M(t)||i?(n({point:a,layerInfo:t}),{popups:[{position:{coordinates:o},id:l()()}]}):{popups:[]}}},onPopupClose:function(){return function(){return{popups:[]}}}}),(0,i.withPropsOnChange)(["mapInfo","popups"],(function(e){var t=e.mapInfo,r=e.popups,n=e.options,i=(void 0===n?{}:n).mapOptions,a=(void 0===i?{}:i).mapInfoFormat,l=void 0===a?(0,u.GA)():a,s=e.onClickMarker,p=void 0===s?function(){}:s,f=t.responses,m=t.requests,d=t.validResponses,y=t.layerInfo;return M(y)?p(d,y,r):{popups:r.map((function(e){return I(I({},e),{},{component:function(){return o().createElement(c.Z,{renderValidOnly:!0,responses:f,requests:m,validResponses:d,format:l,showEmptyMessageGFI:!0,missingResponses:(m||[]).length-(f||[]).length})}})}))}})),(0,i.withPropsOnChange)(["plugins","onPopupClose","popups"],(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.plugins,r=e.popups,n=e.onPopupClose,i=t.PopupSupport,a=t.tools,l=void 0===a?{}:a,c=E(t,P);return i?{plugins:I(I({},c),{},{tools:I(I({},l),{},{popup:function(e){return o().createElement(i,S({},e,{popups:r,onPopupClose:n}))}})})}:{}}))))},916788:(e,t,r)=>{r.d(t,{Z:()=>j});var n=r(124852),o=r.n(n),i=r(45697),a=r.n(i),l=r(1206),c=r.n(l),u=r(196797),s=r.n(u),p=r(867076);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,O(n.key),n)}}function b(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(b=function(){return!!e})()}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function h(e,t,r){return(t=O(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e){var t=function(e){if("object"!=f(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==f(t)?t:t+""}var w=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t,r){return t=v(t),function(e,t){if(t&&("object"==f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,b()?Reflect.construct(t,r||[],v(e).constructor):t.apply(e,r))}(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(t,e),r=t,(n=[{key:"componentDidMount",value:function(){s()(this._node)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.src!==this.props.src&&s()(this._node)}},{key:"render",value:function(){var e=this,t=this.props,r=t.id,n=t.src,i=t.fit,a=void 0===i?"cover":i,l=t.enableFullscreen,u=void 0===l||l,s=t.fullscreen,p=t.onClick,f=t.description,m=t.showCaption,y=t.caption,b=void 0===y?f:y,v=t.credits,g=t.loaderStyle,h=this.props.loaderComponent,O=this.props.errorComponent;return o().createElement("div",{id:r,className:"ms-media ms-media-image"},n&&"error"!==this.props.status&&o().createElement("img",{ref:function(t){e._node=t},src:n,onLoad:function(){return e.props.onChangeStatus("loaded")},onError:function(){return e.props.onChangeStatus("error")},onClick:u?function(){return p(!0)}:void 0,style:{objectFit:a,fontFamily:"object-fit: ".concat(a),cursor:u?"pointer":"default"}}),n&&!this.props.status&&h&&o().createElement(h,{style:d({},g)}),"error"===this.props.status&&O&&o().createElement(O,null),v&&o().createElement("div",{className:"ms-media-credits"},o().createElement("small",null,v)),m&&b&&o().createElement("div",{className:"ms-media-caption"},o().createElement("small",null,b)),u&&s?o().createElement(c(),{mainSrc:n,onCloseRequest:function(){return p(!1)}}):null)}}])&&y(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(n.Component);h(w,"propTypes",{src:a().string,id:a().string,fit:a().string,description:a().string,showCaption:a().bool,credits:a().string,altText:a().string,enableFullscreen:a().bool,fullscreen:a().bool,onClick:a().func,onChangeStatus:a().func,status:a().string,loaderComponent:a().oneOfType([a().element,a().func]),errorComponent:a().oneOfType([a().element,a().func]),caption:a().string,loaderStyle:a().object});const j=(0,p.compose)((0,p.withState)("fullscreen","onClick",!1),(0,p.withState)("status","onChangeStatus",""))(w)},62850:(e,t,r)=>{r.d(t,{Z:()=>_});var n=r(124852),o=r.n(n),i=r(867076),a=r(271418),l=r(319180),c=r(91812),u=r(937981),s=r(469705),p=r(57068),f=r(1979),m=r(323010),d=r(461928);const y=(0,i.compose)(s.Z,(0,c.Z)(0),l.Z,m.Z,f.yM,u.Z,p.e)(d.Z);var b=r(192579),v=r(727693),g=r(399534),h=r(815135),O=r(580628),w=r(898631),j=r(624262),P=r(624847);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}var E=["id","map","fit","editMap","onMapViewChanges","eventHandlers","expandable","active","setActive","width","height","size","showCaption","caption","mapType","onMapTypeLoaded","layers","children"],C=["layers","groups","mapOptions","description"];function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},I.apply(null,arguments)}function k(e){return function(e){if(Array.isArray(e))return T(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return T(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?T(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){Z(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Z(e,t,r){return(t=function(e){var t=function(e){if("object"!=S(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==S(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function q(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var D=(0,h.Z)(P.Z);const _=(0,i.compose)((0,i.withState)("active","setActive",!1),O.Z)((function(e){var t=e.id,r=e.map,i=void 0===r?{layers:[v.D]}:r,l=e.fit,c=e.editMap,u=void 0!==c&&c,s=e.onMapViewChanges,p=e.eventHandlers,f=e.expandable,m=void 0!==f&&f,d=e.active,h=e.setActive,O=e.width,P=e.height,S=e.size,T=e.showCaption,A=e.caption,Z=e.mapType,_=void 0===Z?w.Bk.OPENLAYERS:Z,x=e.onMapTypeLoaded,N=e.layers,R=e.children,F=q(e,E),V=i.data?i.data:i,z=V.layers,L=void 0===z?[]:z,W=V.groups,G=void 0===W?[]:W,H=V.mapOptions,U=void 0===H?{}:H,B=V.description,$=q(V,C),Y=(0,j.Ku)(L,G),K=A||B,J=m?d?{zoomControl:!1,interactive:!0,mapOptions:{scrollWheelZoom:!0,interactions:{mouseWheelZoom:!0,dragPan:!0}}}:{zoomControl:!1,interactive:!1,mapOptions:{scrollWheelZoom:!1,interactions:{mouseWheelZoom:!1,dragPan:!1}}}:{mapOptions:U},Q=u?{mapOptions:M(M({},U),{},{interactions:M(M({},U.interactions),{},{mouseWheelZoom:$.zoomControl})})}:J,X=!F.isDrawEnabled&&$.mapInfoControl&&!(m&&!d),ee=o().createElement(o().Fragment,null,o().createElement(y,I({},F,{key:m?"overlay":"block",onMapViewChanges:s,eventHandlers:p,map:M(M({},$),{},{id:"media-".concat(t),resize:O+"-"+P+"_"+S,className:"aaaa",style:M({cursor:X?"pointer":"default"},m&&!d&&{pointerEvents:"none",touchAction:"none"})}),layers:N?[].concat(k(Y),k(N)):Y,tools:X?["popup"]:[],options:(0,b.kn)(Q),mapType:_,onMapTypeLoaded:x}),n.Children.map(R,(function(e){return e?(0,n.cloneElement)(e,{mapType:_}):null}))),m&&!u&&o().createElement(D,{className:"ms-expand-media-button",onClick:function(){return h(!d)},tooltipId:d?"geostory.closeFullscreenMap":"geostory.showFullscreenMap",tooltipPosition:"left"},o().createElement(a.gG,{glyph:d?"1-close":"1-full-screen"})));return o().createElement("div",{className:"ms-media ms-media-map ".concat(U.zoomPosition||""),style:{objectFit:l}},d&&m?o().createElement(g.Z,null,o().createElement("div",{className:"ms-expanded-media-container"},ee)):ee,T&&K&&o().createElement("div",{className:"ms-media-caption"},o().createElement("small",null,K)))}))},452826:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(124852),o=r.n(n),i=r(218291),a=r(532425),l=r(580628),c=r(271418),u=r(192579),s=r(805346);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return(t=function(e){var t=function(e){if("object"!=p(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==p(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,l=[],c=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var v=(0,i.Z)()((0,n.lazy)((function(){return r.e(70390).then(r.bind(r,970390))}))),g=(0,l.Z)((function(e){var t=e.src,r=e.width,i=e.height,l=e.resolution,u=e.thumbnail,p=e.controls,f=e.play,d=e.onPlay,b=void 0===d?function(){}:d,g=e.onStart,h=void 0===g?function(){}:g,O=e.fit,w=e.loop,j=e.volume,P=void 0===j?1:j,S=e.muted,E=f,C=y((0,n.useState)(E),2),I=C[0],k=C[1],T=y((0,n.useState)(),2),A=T[0],M=T[1],Z=y((0,n.useState)(f),2),q=Z[0],D=Z[1],_="cover"===O,x=y((0,n.useState)(!1),2),N=x[0],R=x[1];(0,n.useEffect)((function(){!I&&E&&(k(!0),D(!0)),I&&h(I)}),[I,E]);var F,V=(F=r/i,_?F<l?[i*l,i]:[r,r/l]:"contain"===O?F<l?[r,r/l]:[i*l,i]:[r,r/l]),z="contain"===O||_?i:V[1],L=!_&&p,W=!!_||w;return o().createElement("div",{className:"ms-video",style:{position:"relative",width:r,height:z,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}},t&&o().createElement(o().Fragment,null,I&&o().createElement(v,{url:t,width:V[0],height:V[1],playing:E,loop:W,volume:P,muted:S,style:_?{left:"50%",top:"50%",transform:"translate(-50%, -50%)",position:"absolute"}:{},controls:L,pip:!1,fileConfig:{attributes:{controlsList:"nodownload",disablePictureInPicture:!0}},youtubeConfig:{playerVars:{controls:L?2:0,modestbranding:1,rel:0}},onReady:function(){return D(!1)},onError:function(e){M(e),(""+e).includes("NotAllowedError")&&(b(!1),R(!0),D(!1))},onPause:function(){b(!1)},onPlay:function(){b(!0),N&&(M(!1),R(!1))}}),(!I||I&&(q||A))&&o().createElement("div",{className:"ms-video-cover",style:m(m({position:"absolute",width:V[0],height:V[1],display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0, 0, 0, 1.0)"},!(q||A)&&{cursor:"pointer"}),!E&&u&&{backgroundImage:"url(".concat(u,")"),backgroundSize:_?"cover":"640px auto",backgroundPosition:"center",backgroundRepeat:"no-repeat"}),onClick:function(){N?(R(!1),M(!1)):D(!0),k(!0),b(!0)}},q&&o().createElement(a.Z,{size:70}),A&&!N&&o().createElement("div",{className:"text-center"},o().createElement(c.gG,{glyph:"alert",style:{fontSize:V[1]/4>100?100:V[1]/4,mixBlendMode:"difference",color:"#ffffff"}}),o().createElement("h3",null,o().createElement(s.Z,{msgId:"geostory.errors.loading.video"}))," "),(!(q||A)&&!E||A&&N)&&o().createElement(c.gG,{glyph:"play",style:{fontSize:V[1]/4>100?100:V[1]/4,mixBlendMode:"difference",color:"#ffffff"}}))),!L&&!N&&o().createElement("div",{className:"ms-video-mask-cover",style:{position:"absolute",width:V[0],height:V[1]}}))}));const h=function(e){var t=e.id,r=e.src,i=e.resolution,a=void 0===i?16/9:i,l=e.autoplay,c=e.inView,s=e.description,p=e.showCaption,f=e.caption,m=void 0===f?s:f,d=e.thumbnail,b=e.credits,v=e.controls,h=void 0===v||v,O=e.fit,w=e.loop,j=e.muted,P=e.onPlay,S=void 0===P?function(){}:P,E=e.mode,C=e.containerInView,I=(void 0===C||C)&&c,k=y((0,n.useState)(!1),2),T=k[0],A=k[1],M=function(e){A(e),S(e)};return(0,n.useEffect)((function(){E===u.nl.EDIT&&M(!1)}),[E]),(0,n.useEffect)((function(){E===u.nl.VIEW&&I&&(l||"cover"===O)&&M(!0)}),[I,l,O,E]),(0,n.useEffect)((function(){E===u.nl.VIEW&&!I&&T&&M(!1)}),[I,T,E]),o().createElement("div",{id:t,key:"".concat(t,"-").concat(O,"-").concat(E),className:"ms-media ms-media-video"},o().createElement(g,{src:r,play:T&&E===u.nl.VIEW,resolution:a,thumbnail:d,controls:h&&E===u.nl.VIEW,onPlay:M,fit:O,loop:w,muted:j}),b&&o().createElement("div",{className:"ms-media-credits"},o().createElement("small",null,b)),p&&m&&o().createElement("div",{className:"ms-media-caption"},o().createElement("small",null,m)))}},882017:(e,t,r)=>{r.d(t,{Ln:()=>d,ZP:()=>b});var n=r(124852),o=r.n(n),i=r(45697),a=r.n(i),l=r(916788),c=r(62850),u=r(452826),s=["debounceTime","mediaViewer","children"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(null,arguments)}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var m=l.Z,d={image:l.Z,map:c.Z,video:u.Z},y=function(e){var t,r,i=e.debounceTime,a=e.mediaViewer,l=e.children,c=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,s),u="".concat(c.id).concat(c.resourceId?"-".concat(c.resourceId):""),y=(t=(0,n.useState)({}),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,l=[],c=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return l}}(t,r)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),b=y[0],v=y[1],g=void 0===b[u]||b[u],h=a||d[c.mediaType||c.type]||m;return o().createElement(h,p({sectionType:c.sectionType,debounceTime:i,loading:b,isLoading:g,onLoad:v,loadingId:u},c),l)};y.propTypes={id:a().string,lazy:a().bool,mediaType:a().string,type:a().string,debounceTime:a().number},y.defaultProps={id:"",lazy:!0,mediaType:"",type:""};const b=y},727693:(e,t,r)=>{r.d(t,{r:()=>n,D:()=>o});var n={GEOSTORY:"geostory",GEOSTORE:"geostore"},o={type:"osm",title:"Open Street Map",name:"mapnik",source:"osm",group:"background",visibility:!0,id:"mapnik__0",loading:!1,loadingError:!1}}}]);