(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[48216],{881808:(e,t,r)=>{"use strict";r.d(t,{eD:()=>n,AM:()=>o,ok:()=>i,Gg:()=>a,nT:()=>u,TL:()=>c,KS:()=>l,EB:()=>s,DZ:()=>f,Aw:()=>p,V_:()=>y,H0:()=>d,jW:()=>b,JZ:()=>m,fQ:()=>v,HK:()=>g,YO:()=>h,I6:()=>O});var n="MAP:LOAD_NEW_MAP",o="MAP_LOAD_MAP_CONFIG",i="MAP_CONFIG_LOADED",a="MAP_CONFIG_LOAD_ERROR",u="MAP_LOAD_INFO",c="MAP_INFO_LOAD_START",l="MAP_INFO_LOADED",s="MAP_INFO_LOAD_ERROR",f="MAP:MAP_SAVE_ERROR",p="MAP:MAP_SAVED",y="MAP:RESET_MAP_SAVE_ERROR";function d(e,t,r){return{type:i,config:e,legacy:!!t,mapId:t,zoomToExtent:r}}function b(e,t){return{type:a,error:e,mapId:t}}function m(e,t,r,n,i){return{type:o,configName:e,mapId:t,config:r,mapInfo:n,overrideConfig:i}}function v(e,t){return{type:l,mapId:t,info:e}}function g(e,t){return{type:s,mapId:e,error:t}}function h(e){return{type:c,mapId:e}}function O(e){return{type:u,mapId:e}}},501157:(e,t,r)=>{"use strict";r.d(t,{ID:()=>x,en:()=>T,Xv:()=>R,FU:()=>L,gs:()=>_,tt:()=>M,jY:()=>k,T6:()=>D,ZP:()=>N});var n=r(472500),o=r.n(n),i=r(701469),a=r.n(i),u=r(984596),c=r.n(u),l=r(227361),s=r.n(l),f=r(505055),p=r.n(f),y=r(375875),d=r.n(y),b=r(737275),m=r(916651),v=r(577215);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function h(e){return function(e){if(Array.isArray(e))return O(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?O(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){var n,o,i,a;n=e,o=t,i=r[t],a=function(e,t){if("object"!=g(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==g(a)?a:String(a))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var S={},P="1.3.0",x="1.1.1",T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{service:"WMS",version:P,request:"GetCapabilities"},r=arguments.length>2?arguments[2]:void 0,n=(a()(e)&&e||e.split(","))[0],i=o().parse(n,!0);return o().format(j(j({},i),{},{search:null,query:j(j(j({},t),i.query),(null==r?void 0:r.query)||{})}))},E=function(e){var t=e&&e.Title,r=e.LogoURL&&j(j({},s()(e,"LogoURL.$")||{}),{},{format:s()(e,"LogoURL.Format")}),n=s()(e,'OnlineResource.$["xlink:href"]');return{title:t,logo:r,imageUrl:s()(e,'LogoURL.OnlineResource.$["xlink:href"]'),link:n}},R=function e(t){var r,n,o=null!==(r=null==t?void 0:t.Layer)&&void 0!==r?r:null==t?void 0:t.layer,i=null!==(n=null==t?void 0:t.Name)&&void 0!==n?n:null==t?void 0:t.name;return o?c()(o).reduce((function(t,r){var n,o,i=null!==(n=r.Layer)&&void 0!==n?n:r.layer,a=null!==(o=r.Name)&&void 0!==o?o:r.name;return[].concat(h(t),h(e(r)),h(i&&a?[r]:[]))}),[]):i&&[t]||[]},A=function(){var e,t,r,n,o,i,u,l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0,f=arguments.length>2?arguments[2]:void 0,p=arguments.length>3?arguments[3]:void 0,y=l.Capability,d=l.Service,b=(u=y).Request&&u.Request.GetMap&&u.Request.GetMap.DCPType&&u.Request.GetMap.DCPType.HTTP&&u.Request.GetMap.DCPType.HTTP.Get&&u.Request.GetMap.DCPType.HTTP.Get.OnlineResource&&u.Request.GetMap.DCPType.HTTP.Get.OnlineResource.$||void 0,m=y.Layer&&(null===(e=y.Layer.SRS||y.Layer.CRS)||void 0===e?void 0:e.map((function(e){return e.toUpperCase()})))||[],v=y.Layer&&y.Layer.Attribution&&E(y.Layer.Attribution),g=c()((null==y||null===(t=y.Request)||void 0===t||null===(r=t.GetMap)||void 0===r?void 0:r.Format)||[]),h=c()((null==y||null===(n=y.Request)||void 0===n||null===(o=n.GetFeatureInfo)||void 0===o?void 0:o.Format)||[]),O=R(y),w=(a()(O)?O:[O]).filter((function(e){return!p||-1!==e.Name.toLowerCase().indexOf(p.toLowerCase())||e.Title&&-1!==e.Title.toLowerCase().indexOf(p.toLowerCase())||e.Abstract&&-1!==e.Abstract.toLowerCase().indexOf(p.toLowerCase())}));return{numberOfRecordsMatched:w.length,numberOfRecordsReturned:Math.min(f,w.length),nextRecord:s+Math.min(f,w.length)+1,service:d,layerOptions:{version:(null==l||null===(i=l.$)||void 0===i?void 0:i.version)||P},records:w.filter((function(e,t){return t>=s-1&&t<s-1+f})).map((function(e){return j(j({},e),{},{getMapFormats:g,getFeatureInfoFormats:h,onlineResource:b,SRS:m,credits:e.Attribution?E(e.Attribution):v})}))}},L=function(e){return d().get(T(e,{service:"WMS",version:P,request:"GetCapabilities"})).then((function(e){var t;return p().parseString(e.data,{explicitArray:!1},(function(e,r){t=r})),t.WMS_Capabilities||t.WMT_MS_Capabilities||{}}))},C=function(e,t,r,n){var o=S[e];return o&&(new Date).getTime()<o.timestamp+1e3*((0,b.u8)("cacheExpire")||60)?new Promise((function(e){e(A(o.data,t,r,n))})):L(e).then((function(o){return S[e]={timestamp:(new Date).getTime(),data:o},A(o,t,r,n)}))},_=function(e,t){return d().get(T(e,{service:"WMS",version:x,layers:t,request:"DescribeLayer"})).then((function(e){var t;return p().parseString(e.data,{explicitArray:!1},(function(e,r){t=r&&r.WMS_DescribeLayerResponse&&r.WMS_DescribeLayerResponse.LayerDescription})),(t=Array.isArray(t)?t:[t]).map((function(e){return j(j({},e&&e.$||{}),{},{layerName:e&&e.$&&e.$.name,query:j({},e&&e.query&&e.query.$||{})})}))}))},M=function(e,t,r,n){return C(e,t,r,n)},k=function(e,t){for(var r=e,n=r.EX_GeographicBoundingBox||r.exGeographicBoundingBox||(0,m.getWMSBoundingBox)(r.BoundingBox)||r.LatLonBoundingBox&&r.LatLonBoundingBox.$||r.latLonBoundingBox;!n&&r.Layer&&r.Layer.length;)n=(r=r.Layer[0]).EX_GeographicBoundingBox||r.exGeographicBoundingBox||(0,m.getWMSBoundingBox)(r.BoundingBox)||r.LatLonBoundingBox&&r.LatLonBoundingBox.$||r.latLonBoundingBox;n||(n={westBoundLongitude:-180,southBoundLatitude:-90,eastBoundLongitude:180,northBoundLatitude:90});var o={extent:[n.westBoundLongitude||n.minx,n.southBoundLatitude||n.miny,n.eastBoundLongitude||n.maxx,n.northBoundLatitude||n.maxy],crs:"EPSG:4326"};return t?{crs:o.crs,bounds:{minx:o.extent[0],miny:o.extent[1],maxx:o.extent[2],maxy:o.extent[3]}}:o},D=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return L(e).then((function(e){var r,n,o,i,a=e.Capability,u=c()((null==a||null===(r=a.Request)||void 0===r||null===(n=r.GetMap)||void 0===n?void 0:n.Format)||[]).filter(v.F0);return t?{imageFormats:u,infoFormats:c()((null==a||null===(o=a.Request)||void 0===o||null===(i=o.GetFeatureInfo)||void 0===i?void 0:i.Format)||[]).filter(v.cP)}:u})).catch((function(){return t?{imageFormats:[],infoFormats:[]}:[]}))};const N={flatLayers:R,parseUrl:T,getDimensions:function(e){return c()(e.Dimension||e.dimension||[]).map((function(t,r){var n=e.Extent&&c()(e.Extent)[r]||e.extent&&c()(e.extent)[r];return{name:t.$.name,units:t.$.units,unitSymbol:t.$.unitSymbol,default:t.$.default||n&&n.$.default,values:t._&&t._.split(",")||n&&n._&&n._.split(",")}}))},getCapabilities:L,describeLayer:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return d().get(T(e,{service:"WMS",version:x,layers:t,request:"DescribeLayer"},r)).then((function(e){var t,r,n;p().parseString(e.data,{explicitArray:!1},(function(e,t){n=t}));var o=(null===(t=n)||void 0===t||null===(r=t.WMS_DescribeLayerResponse)||void 0===r?void 0:r.LayerDescription)&&c()(n.WMS_DescribeLayerResponse.LayerDescription)[0];return o&&j(j({},null==o?void 0:o.$),(null==o?void 0:o.Query)&&{query:c()(o.Query).map((function(e){return j({},null==e?void 0:e.$)}))})}))},getRecords:C,describeLayers:_,textSearch:M,parseLayerCapabilities:function(e,t){var r=e.Capability;return R(r).find((function(e){var r=e.Name;return 2===t.name.split(":").length&&r&&2===r.split(":").length?t.name===r&&e:r&&2===r.split(":").length?t.name===r.split(":")[1]&&e:2===t.name.split(":").length?t.name.split(":")[1]===r&&e:t.name===r&&e}))},getBBox:k,reset:function(){Object.keys(S).forEach((function(e){delete S[e]}))},getSupportedFormat:D}},615402:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(675263),o=r.n(n),i=r(124852),a=r.n(i);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,d(n.key),n)}}function l(e,t,r){return t=f(t),function(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,s()?Reflect.construct(t,r||[],f(e).constructor):t.apply(e,r))}function s(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(s=function(){return!!e})()}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function y(e,t,r){return(t=d(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){var t=function(e,t){if("object"!=u(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==u(t)?t:String(t)}var b=r(868195).FormattedHTMLMessage,m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,t,arguments)}var r,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){return this.context.intl?a().createElement(b,{id:this.props.msgId,values:this.props.msgParams}):a().createElement("span",null,this.props.msgId||"")}}])&&c(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}(a().Component);y(m,"propTypes",{msgId:o().string.isRequired,msgParams:o().object}),y(m,"contextTypes",{intl:o().object});const v=m},807472:(e,t,r)=>{"use strict";r.d(t,{Z:()=>T});var n=r(727418),o=r.n(n),i=r(675263),a=r.n(i),u=r(124852),c=r.n(u),l=r(485294),s=r.n(l),f=r(472986),p=r.n(f),y=r(805346);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){S(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,P(n.key),n)}}function g(e,t,r){return t=O(t),function(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return w(e)}(e,h()?Reflect.construct(t,r||[],O(e).constructor):t.apply(e,r))}function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e,t){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},j(e,t)}function S(e,t,r){return(t=P(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(e){var t=function(e,t){if("object"!=d(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==d(t)?t:String(t)}var x=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return S(w(e=g(this,t,[].concat(n))),"renderLoading",(function(){return e.props.maskLoading?c().createElement("div",{style:{width:"100%",height:"100%",position:"absolute",overflow:"visible",margin:"auto",verticalAlign:"center",left:"0",background:"rgba(255, 255, 255, 0.5)",zIndex:2}},c().createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -40%)"}},c().createElement(y.Z,{msgId:"loading"}),c().createElement(p(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}))):null})),S(w(e),"renderRole",(function(t){return c().Children.toArray(e.props.children).filter((function(e){return e.props.role===t}))})),S(w(e),"hasRole",(function(t){return c().Children.toArray(e.props.children).filter((function(e){return e.props.role===t})).length>0})),S(w(e),"onClickOut",(function(t){e.props.onClickOut&&e.mask===t.target&&e.props.onClickOut(t)})),e}var r,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this,t=c().createElement("div",{id:this.props.id,style:m({},this.props.style),className:"".concat(this.props.draggable?"modal-dialog-draggable":""," ").concat(this.props.className," modal-dialog-container")},c().createElement("div",{className:this.props.headerClassName+" draggable-header"},this.renderRole("header")),c().createElement("div",{className:this.props.bodyClassName},this.renderLoading(),this.renderRole("body")),this.hasRole("footer")?c().createElement("div",{className:this.props.footerClassName},this.renderRole("footer")):c().createElement("span",null)),r=this.props.draggable?c().createElement(s(),{defaultPosition:this.props.start,bounds:this.props.bounds,handle:".draggable-header, .draggable-header *"},t):t,n=o()({},this.props.style.display?{display:this.props.style.display}:{},this.props.backgroundStyle);return this.props.modal?c().createElement("div",{ref:function(t){e.mask=t},onClick:this.onClickOut,style:n,className:"fade in modal "+this.props.containerClassName,role:"dialog"},r):r}}])&&v(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}(c().Component);S(x,"propTypes",{id:a().string.isRequired,style:a().object,backgroundStyle:a().object,className:a().string,maskLoading:a().bool,containerClassName:a().string,headerClassName:a().string,bodyClassName:a().string,footerClassName:a().string,onClickOut:a().func,modal:a().bool,start:a().object,draggable:a().bool,bounds:a().oneOfType([a().string,a().object])}),S(x,"defaultProps",{style:{},backgroundStyle:{background:"rgba(0,0,0,.5)"},start:{x:0,y:150},className:"modal-dialog modal-content",maskLoading:!1,containerClassName:"",headerClassName:"modal-header",bodyClassName:"modal-body",footerClassName:"modal-footer",modal:!1,draggable:!0,bounds:"parent"});const T=x},82110:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(124852),o=r.n(n),i=r(496259),a=r(532425);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){var n,o,i,a;n=e,o=t,i=r[t],a=function(e,t){if("object"!=u(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==u(a)?a:String(a))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const s=function(e){var t=e.width,r=e.height,n=e.className,u=void 0===n?"loader-container":n,c=e.contentStyle,s=void 0===c?{}:c;return o().createElement("div",{className:u},o().createElement(i.Z,null,(function(e){var n=e.width,i=void 0===n?200:n,u=e.height,c=void 0===u?200:u,f=t||(c>0?Math.min(i,c):i),p=r||(c>0?Math.min(i,c):i),y=Math.min(f,p);return o().createElement(a.Z,{size:y,style:l({padding:y/10,margin:"auto",display:"flex"},s)})})))}},993451:(e,t,r)=>{"use strict";r.d(t,{Z:()=>w});var n=r(86638),o=r(285547),i=r(675263),a=r.n(i),u=r(984596),c=r.n(u),l=r(701469),s=r.n(l),f=r(414293),p=r.n(f),y=r(747037),d=r.n(y),b=r(867076),m=["messages","locale"];function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t,r){var n;return n=function(e,t){if("object"!=v(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t),(t="symbol"==v(n)?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"msgId";return(0,b.compose)((0,b.getContext)({messages:a().object,locale:a().string}),(0,b.mapProps)((function(i){var a=i.messages,u=i.locale,l=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(i,m);return h(h({},l),c()(e).reduce(function(e,t,r){var i=t.messages,a=t.locale,u=t.mode;return function(){var t=arguments.length>1?arguments[1]:void 0;return h(h({},arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),{},O({},t,"msgId"===u?function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"label";if(s()(t))return t.map((function(o){var i=(0,n.S$)(e,o[r]||d()(o)&&o||"");return h(h({},o),{},O({},r,p()(i)?t:i))}));var o=t?(0,n.S$)(e,t):t;return p()(o)?t:o}(i,e[t],r):function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"label";if(s()(e))return e.map((function(n){var i=(0,o.Z)(n[r]||d()(n)&&n||"",t);return h(h({},n),{},O({},r,p()(i)?e:i))}));var n=(0,o.Z)(e,t);return p()(n)?e:n}(e[t],a,r)))}}(l,{locale:u,messages:a,mode:r},t),{}))})))}},145869:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(124852),o=r.n(n),i=r(675263),a=r.n(i);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,d(n.key),n)}}function l(e,t,r){return t=f(t),function(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,s()?Reflect.construct(t,r||[],f(e).constructor):t.apply(e,r))}function s(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(s=function(){return!!e})()}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function y(e,t,r){return(t=d(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){var t=function(e,t){if("object"!=u(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==u(t)?t:String(t)}var b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,t,arguments)}var r,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this;return o().createElement("label",{className:"mapstore-switch-btn ".concat(this.props.className)},o().createElement("input",{type:"checkbox",disabled:this.props.disabled,checked:this.props.checked,onChange:function(){return e.props.onChange(!e.props.checked)}}),o().createElement("span",{onClick:function(){return e.props.onClick(!e.props.checked)},className:"m-slider"}))}}])&&c(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}(o().Component);y(b,"propTypes",{disabled:a().bool,className:a().string,checked:a().bool,onChange:a().func,onClick:a().func}),y(b,"defaultProps",{className:"",checked:!1,onChange:function(){},onClick:function(){}});const m=b},218291:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(124852),o=r.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}const a=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).fallback,r=void 0===t?null:t;return function(t){return(0,n.forwardRef)((function(a,u){return void 0===e||e(a)?o().createElement(n.Suspense,{fallback:r},o().createElement(t,i({ref:u},a))):null}))}}},443143:(e,t,r)=>{"use strict";r.d(t,{qH:()=>s,qj:()=>f,qq:()=>p,TM:()=>y});var n,o=r(717621),i=r.n(o),a=r(14841),u=r.n(a),c=r(264721),l=r.n(c),s=function(e,t,r,o){var i=e;isNaN(parseFloat(e))&&(i=n.hexToHsv(e)[0]);var a=.5/(r-1),u=t/(r-1),c=[];1===r&&(a=.5,u=t/2);for(var l=0;l<r;l++){var s=i+l*u-t/2,f=a*l+.3,p=f;o&&(s=o.h||s,f=o.s||f,p=o.v||p),c.push(n.hsvToHex(s,f,p,l))}return c},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"red";return i()(e).toHexString()},p=function(e,t,r){var n=i()(e);return e&&n.setAlpha(u()(void 0!==t?t:n.getAlpha())).toRgbString()||r},y=function e(t){var r=Math.round,o=Math.random,i=[r(255*o()),r(255*o()),r(255*o())],a=n.rgbToHex(i);if(t)for(;l()(t,a)||"#000000"===a||"#FFFFFF"===a;)e(t);return a};n={decToHex:function(e){var t="0123456789ABCDEF",r=parseInt(e,10);return r=isNaN(r)?0:r,t.charAt(((r=r>255||r<0?0:r)-r%16)/16)+t.charAt(r%16)},rgbToHex:function(e,t,r){return e instanceof Array?n.rgbToHex(e[0],e[1],e[2]):"#"+n.decToHex(e)+n.decToHex(t)+n.decToHex(r)},realToDec:function(e){return Math.min(255,Math.round(256*e))},rgbToHsv:function(e,t,r){if(e instanceof Array)return n.rgbToHsv(e[0],e[1],e[2]);var o,i,a,u,c,l=e/255,s=t/255,f=r/255;switch(o=Math.min(Math.min(l,s),f),a=(i=Math.max(Math.max(l,s),f))-o,i){case o:u=0;break;case l:u=60*(s-f)/a,s<f&&(u+=360);break;case s:u=60*(f-l)/a+120;break;case f:u=60*(l-s)/a+240}return c=0===i?0:1-o/i,[Math.round(u),c,i]},distributedColorsHEX:function(e){for(var t=360/(e-1),r=[],o=function e(t,r,o){var i=e(t,r,o);return n.rgbToHex(i)},i=0;i<e;i++)r.push(o(t*i,.57,.63));return r},sameToneRangeColors:s,hsvToRgb:function(e,t,r){if(e instanceof Array)return n.hsvToRgb(e[0],e[1],e[2]);var o,i,a,u=Math.floor(e/60%6),c=e/60-u,l=r*(1-t),s=r*(1-c*t),f=r*(1-(1-c)*t);switch(u){case 0:o=r,i=f,a=l;break;case 1:o=s,i=r,a=l;break;case 2:o=l,i=r,a=f;break;case 3:o=l,i=s,a=r;break;case 4:o=f,i=l,a=r;break;case 5:o=r,i=l,a=s}return[n.realToDec(o),n.realToDec(i),n.realToDec(a)]},hsvToHex:function(e,t,r){var o=n.hsvToRgb(e,t,r);return n.rgbToHex(o)},hexToHsv:function(e){var t=e;if(t.length>0){"#"===t[0]&&(t=e.substring(1));var r=n.hexToRgb(t);return n.rgbToHsv(r)}return null},hexToRgb:function(e){var t,r,n,o=e;return"#"===o.charAt(0)&&(o=e.substring(1)),t=o.charAt(0)+o.charAt(1),r=o.charAt(2)+o.charAt(3),n=o.charAt(4)+o.charAt(5),[parseInt(t,16),parseInt(r,16),parseInt(n,16)]},colorToHexStr:f,colorToRgbaStr:p,generateRandomHexColor:y}},611847:(e,t,r)=>{"use strict";r.d(t,{ij:()=>v,w0:()=>g,vl:()=>h,K2:()=>O,Nw:()=>w});var n=r(472500),o=r.n(n),i=r(701469),a=r.n(i),u=r(747037),c=r.n(u),l=r(618446),s=r.n(l),f=r(189734),p=r.n(f),y=r(313311),d=r.n(y),b=r(964210);function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var v=function(e){if(!e)return{};var t=!(0===e.indexOf("http")),r=t?[]:e.match(/([^:]*:)\/\/([^:]*:?[^@]*@)?([^:\/\?]*):?([^\/\?]*)/);if(t){var n=window.location;r[1]=n.protocol,r[3]=n.hostname,r[4]=n.port,r[5]=e}r[4]=""!==r[4]&&r[4]?r[4]:"https:"===r[1]?"443":"80",r[5]=r[5]?r[5]:e.slice(r[0].length);var o,i,a=(i=6,function(e){if(Array.isArray(e))return e}(o=r)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(o,i)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(e,t):void 0}}(o,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=a[1],c=a[3],l=a[4],s=a[5],f=0===s.indexOf("/")?s.split("/")[1]:"";return{protocol:u,domain:c,port:l,rootPath:s,applicationRootPath:f}},g=function(e,t){var r=a()(e)?e[0]:e,n=a()(t)?t[0]:t;if(r===n)return!0;if(!r||!n)return!1;if(!c()(r)||!c()(n))return!1;var i=o().parse(r),u=o().parse(n),l=v(r),f=v(n),y=l.protocol===f.protocol,d=l.domain===f.domain,b=l.port===f.port,m=i.pathname===u.pathname,g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(e===t)return!0;if(!e&&!t)return!0;var r=e?e.split("&").filter((function(e){return!!e})):[],n=t?t.split("&").filter((function(e){return!!e})):[];return s()(p()(r),p()(n))}(i.query,u.query);return y&&b&&d&&m&&g},h=function(e){return b.Qc(e)},O=function(e){return new RegExp(arguments.length>1&&void 0!==arguments[1]?arguments[1]:/^(http(s{0,1}):\/\/)+?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/).test(e)},w=function(e,t){var r=new RegExp(arguments.length>2&&void 0!==arguments[2]?arguments[2]:/^(http(s{0,1}):\/\/)+?[\w.\-{}]+(?:\.[\w\.-]+)+[\w\-\._~\/\;\.\%\:\&\=\?{}]+$/).test(e);if(!r)return!1;if(r&&!t)return!0;if(r&&t){var n=/\{(.*?)\}/.test(e);return 0===t.filter((function(e){return d()(n,e)})).length}return!1}},62663:e=>{e.exports=function(e,t,r,n){var o=-1,i=null==e?0:e.length;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r}},23279:(e,t,r)=>{var n=r(513218),o=r(707771),i=r(14841),a=Math.max,u=Math.min;e.exports=function(e,t,r){var c,l,s,f,p,y,d=0,b=!1,m=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var r=c,n=l;return c=l=void 0,d=t,f=e.apply(n,r)}function h(e){var r=e-y;return void 0===y||r>=t||r<0||m&&e-d>=s}function O(){var e=o();if(h(e))return w(e);p=setTimeout(O,function(e){var r=t-(e-y);return m?u(r,s-(e-d)):r}(e))}function w(e){return p=void 0,v&&c?g(e):(c=l=void 0,f)}function j(){var e=o(),r=h(e);if(c=arguments,l=this,y=e,r){if(void 0===p)return function(e){return d=e,p=setTimeout(O,t),b?g(e):f}(y);if(m)return clearTimeout(p),p=setTimeout(O,t),g(y)}return void 0===p&&(p=setTimeout(O,t)),f}return t=i(t)||0,n(r)&&(b=!!r.leading,s=(m="maxWait"in r)?a(i(r.maxWait)||0,t):s,v="trailing"in r?!!r.trailing:v),j.cancel=function(){void 0!==p&&clearTimeout(p),d=0,c=y=l=p=void 0},j.flush=function(){return void 0===p?f:w(o())},j}},435161:(e,t,r)=>{var n=r(829932),o=r(267206),i=r(269199),a=r(701469);e.exports=function(e,t){return(a(e)?n:i)(e,o(t,3))}},707771:(e,t,r)=>{var n=r(555639);e.exports=function(){return n.Date.now()}},819081:(e,t,r)=>{"use strict";e.exports=r(1174)}}]);