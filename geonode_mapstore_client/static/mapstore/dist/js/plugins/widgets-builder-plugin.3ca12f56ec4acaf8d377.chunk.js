(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[9389],{4206:(e,t,r)=>{"use strict";r.d(t,{hZ:()=>n,pb:()=>o,kD:()=>i,DI:()=>u,IC:()=>c,iU:()=>a,W7:()=>l,Vw:()=>f,KD:()=>s,uj:()=>p,lo:()=>d,Yf:()=>b,fo:()=>y,PY:()=>g,bp:()=>v});var n="CHANGE_DRAWING_STATUS",o="DRAW:END_DRAWING",i="DRAW:SET_CURRENT_STYLE",u="DRAW:GEOMETRY_CHANGED",c="DRAW:DRAW_SUPPORT_STOPPED",a="DRAW:FEATURES_SELECTED",l="DRAW:DRAWING_FEATURES";function f(e,t,r,n,o){return{type:u,features:e,owner:t,enableEdit:r,textChanged:n,circleChanged:o}}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:a,features:e}}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:l,features:e}}function d(){return{type:c}}function b(e,t,r,o,i,u){return{type:n,status:e,method:t,owner:r,features:o,options:i,style:u}}function y(e,t){return{type:o,geometry:e,owner:t}}function g(e){return{type:i,currentStyle:e}}var v=function(e){return b("clean","",e,[],{})}},56903:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(67294),o=r.n(n),i=r(57588),u=r(82467),c=["disabled","id","visible","onClick","glyph","active","className"];function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}var l={width:0,padding:0,borderWidth:0},f={},s=function(e){return e?f:l};const p=(0,n.forwardRef)((function(e,t){var r=e.disabled,n=e.id,l=e.visible,f=e.onClick,p=e.glyph,d=e.active,b=e.className,y=void 0===b?"square-button-md":b,g=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,c);return o().createElement(u.Z,a({ref:t},g,{bsStyle:d?"success":"primary",disabled:r,id:"fg-".concat(n),style:s(l),className:y,onClick:function(){return!r&&f()}}),o().createElement(i.Glyphicon,{glyph:p}))}))},18132:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Y});var n=r(67294),o=r.n(n),i=r(45697),u=r.n(i),c=r(89255),a=r(57579),l=r(33528),f=r(4206),s=r(7878),p=r(82904),d=r(80416),b=r(75982),y=r(95797),g=r(1757),v=r(24260),O=r(7147);function m(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var S=function(e){var t=(0,g.GW)(e);return[t.search&&t.search.url,t.name]};const T={openWidgetEditor:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.getState,n=void 0===r?function(){}:r;return e.ofType(a.AE,a.dm,a.IT).filter((function(){return(0,O.PJ)(n())})).switchMap((function(){return c.Observable.of((0,p.Xg)("widgetBuilder","enabled",!0),(0,p.Xg)("metadataexplorer","enabled",!1))}))},closeWidgetEditorOnFinish:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.getState,n=void 0===r?function(){}:r;return e.ofType(a.Jm,d.oE).filter((function(){return(0,O.PJ)(n())})).switchMap((function(){return c.Observable.of((0,p.Xg)("widgetBuilder","enabled",!1))}))},initEditorOnNew:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.getState,n=void 0===r?function(){}:r;return e.ofType(a.AE).filter((function(){return(0,O.PJ)(n())})).switchMap((function(e){return c.Observable.of((0,a.bS)(j(j({legend:!1,mapSync:!0,cartesian:!0,yAxis:!0},e),{},{type:void 0}),{step:0}))}))},initEditorOnNewChart:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.getState,n=void 0===r?function(){}:r;return e.ofType(a.IT).filter((function(){return(0,O.PJ)(n())})).switchMap((function(e){return c.Observable.of((0,l.YV)(),(0,a.bS)(j(j({legend:!1,mapSync:!0,cartesian:!0,yAxis:!0,widgetType:"chart",filter:(0,v.X1)(n())},e),{},{type:void 0}),{step:0}),(0,a.Rz)("returnToFeatureGrid",!0))}))},handleWidgetsFilterPanel:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.getState,n=void 0===r?function(){}:r;return e.ofType(a.lG).filter((function(){return(0,O.PJ)(n())})).switchMap((function(){return c.Observable.of(y.gT.apply(void 0,m(S(n()))),(0,s.F)((0,g.um)(n())),(0,p.Xg)("widgetBuilder","enabled",!1),(0,p.Xg)("queryPanel","enabled",!0)).concat(c.Observable.race(e.ofType(s.Wm).take(1),e.ofType(p.kM).filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.control,r=e.property;return"queryPanel"===t&&(!r||"enabled"===r)})).take(1)).switchMap((function(e){return(e.filterObj?c.Observable.of((0,a.Rz)("filter",e.filterObj)):c.Observable.empty()).merge(c.Observable.of((0,p.Xg)("widgetBuilder","enabled",!0)))}))).takeUntil(e.ofType(b.nk,a.dm).merge(e.ofType(p.kM).filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.control,r=e.property;return"widgetBuilder"===t&&0==!r})))).concat(c.Observable.of((0,f.bp)(),(0,p.Xg)("queryPanel","enabled",!1)))}))}};var E=r(22843),k=r(16919),D=r(33664),C=r(22222),W=r(2479),q=r(55105);const A=(0,W.compose)((0,D.connect)((function(e){return{returnToFeatureGrid:(0,g.Wo)(e)}}),{backToWidgetList:function(){return(0,a.Rz)("widgetType",void 0)},closeWidgetBuilder:function(){return(0,p.Xg)("widgetBuilder","enabled",!1,!1)},openFeatureGridTable:function(){return(0,l.t9)()}}),(0,W.withHandlers)({backFromWizard:function(e){var t=e.backToWidgetList,r=void 0===t?function(){}:t,n=e.closeWidgetBuilder,o=void 0===n?function(){}:n,i=e.openFeatureGridTable,u=void 0===i?function(){}:i,c=e.returnToFeatureGrid;return function(){c?(o(),u()):r()}}}),(0,W.withProps)((function(e){var t=e.returnToFeatureGrid,r=e.backFromWizard;return{exitButton:{onClick:void 0===r?function(){}:r,glyph:"arrow-left",tooltipId:t?"widgets.builder.wizard.backToFeatureGrid":"widgets.builder.wizard.backToWidgetTypeSelection"}}})));var R=r(12736),F=r(56903);const _=(0,D.connect)((function(){return{}}),{onClick:function(){return(0,a.C2)()}})((function(e){var t=e.disabled,r=e.mode,n=e.onClick,i=void 0===n?function(){}:n;return o().createElement(F.Z,{id:"grid-map-chart",keyProp:"grid-map-chart",tooltipId:"featuregrid.toolbar.createNewChart",disabled:t,visible:"VIEW"===r,onClick:i,glyph:"stats"})}));function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function M(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function z(e,t){return z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},z(e,t)}function B(e,t){if(t&&("object"===I(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function G(e){return G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},G(e)}function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function U(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){X(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function X(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var H=(0,W.compose)((0,D.connect)((0,C.P1)(g.h9,g.zA,(function(e,t){return U({dependencies:e},t)})),{toggleConnection:a.w2}),A)(R.Z),L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(c,e);var t,r,n,i,u=(n=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=G(n);if(i){var r=G(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return B(this,e)});function c(){return M(this,c),u.apply(this,arguments)}return t=c,r=[{key:"componentDidMount",value:function(){this.props.onMount()}},{key:"componentWillUnmount",value:function(){this.props.onUnmount()}},{key:"render",value:function(){return o().createElement(k.Z,{open:this.props.enabled,size:this.props.dockSize,zIndex:this.props.zIndex,position:this.props.position,bsStyle:"primary",hideHeader:!0,style:U(U({},this.props.layout),{},{background:"white"})},o().createElement(H,{enabled:this.props.enabled,onClose:this.props.onClose,typeFilter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.type;return"map"!==t&&"legend"!==t}}))}}],r&&x(t.prototype,r),c}(o().Component);X(L,"propTypes",{id:u().string,enabled:u().bool,limitDockHeight:u().bool,fluid:u().bool,zIndex:u().number,dockSize:u().number,position:u().string,onMount:u().func,onUnmount:u().func,onClose:u().func,dimMode:u().string,src:u().string,style:u().object,layout:u().object}),X(L,"defaultProps",{id:"widgets-builder-plugin",enabled:!1,dockSize:500,limitDockHeight:!0,zIndex:1e4,fluid:!1,dimMode:"none",position:"left",onMount:function(){},onUnmount:function(){},onClose:function(){},layout:{}});var J=(0,D.connect)((0,C.P1)(O.dH,(function(e){return(0,q.ic)(e,{height:!0})}),(function(e,t){return{enabled:e,layout:t}})),{onMount:function(){return(0,p.Xg)("widgetBuilder","available",!0)},onUnmount:function(){return(0,p.Xg)("widgetBuilder","available",!1)},onClose:p.Xg.bind(null,"widgetBuilder","enabled",!1,!1)})(L);const Y=(0,E.rx)("WidgetsBuilder",{component:J,epics:T,containers:{TOC:{doNotHide:!0,name:"WidgetBuilder"},FeatureEditor:{doNotHide:!0,target:"toolbar",position:21,Component:_}}})},24260:(e,t,r)=>{"use strict";r.d(t,{qj:()=>O,Bu:()=>m,UM:()=>h,X1:()=>w,L:()=>j,HY:()=>P,Mz:()=>S,F0:()=>T,dc:()=>E,b0:()=>k,hk:()=>D,Qs:()=>C,gy:()=>W,M7:()=>q,VD:()=>A});var n=r(14293),o=r.n(n),i=r(27361),u=r.n(i),c=r(91175),a=r.n(c),l=r(1469),f=r.n(l),s=r(30998),p=r.n(s);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=function(e){return u()(e,"query.filterObj.featureTypeName")},v=function(e){return function(t){return u()(t,'query.featureTypes["'.concat(e,'"]'))}},O=function(e,t){return u()(v(t)(e),"original")},m=function(e){return e&&e.query&&e.query.searchUrl},h=function(e){return e&&e.query&&e.query.url},w=function(e){return e&&e.query&&e.query.filterObj},j=function(e){return u()(v(g(e))(e),"attributes")},P=function(e){return u()(e,"query.typeName")},S=function(e){return u()(e,"query.result.features")},T=function(e){var t=u()(e,"query.result");return b(b({},t),{},{features:(t&&t.features||[]).filter((function(e){return!o()(e.geometry)}))})},E=function(e,t){var r=e&&e.query&&e.query.result&&e.query.result.features;return a()(r.filter((function(e){return e.id===t})))},k={startIndex:function(e){return u()(e,"query.filterObj.pagination.startIndex")},maxFeatures:function(e){return u()(e,"query.filterObj.pagination.maxFeatures")},resultSize:function(e){return u()(e,"query.result.features.length")},totalFeatures:function(e){return u()(e,"query.result.totalFeatures")}},D=function(e,t){var r=v(t)(e);return!!(r&&r.attributes&&r.geometry&&r.original)},C=function(e){return O(e,g(e))},W=function(e){return u()(e,"query.featureLoading")},q=function(e){return u()(e,"query.syncWmsFilter",!1)},A=function(e){var t=u()(e,"query.filterObj.crossLayerFilter"),r=u()(e,"query.filterObj.spatialField"),n=u()(e,"query.filterObj.filterFields");return!!(n&&a()(n)||r&&(r.method&&r.operation&&r.geometry||f()(r)&&p()(r,(function(e){return e.method&&e.operation&&e.geometry}))>-1)||t&&t.collectGeometries&&t.operation)}}}]);