"use strict";(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[95121,47310],{921914:(e,t,r)=>{r.d(t,{XL:()=>o,km:()=>i,Ih:()=>a,Xw:()=>s,Pn:()=>l,DZ:()=>u,e8:()=>c,E0:()=>d,F9:()=>m,X_:()=>f,pb:()=>p,Re:()=>y,ih:()=>g,xy:()=>v,jL:()=>h,oz:()=>b,ph:()=>E,lF:()=>O,gG:()=>P,cb:()=>_,GI:()=>w,B1:()=>I,fv:()=>T,gc:()=>N,zX:()=>S,ZF:()=>j,Zb:()=>C,DW:()=>G,Xp:()=>A,Fm:()=>R,sV:()=>D,LU:()=>Z,XP:()=>F,WU:()=>M,mK:()=>k,g:()=>L,ws:()=>Y,HP:()=>x,aN:()=>q,Pg:()=>H,u0:()=>V,TM:()=>X,PM:()=>K,lK:()=>W,sv:()=>B,MO:()=>z,oO:()=>Q,Mc:()=>$,Zw:()=>J,RA:()=>ee,am:()=>te,ZM:()=>re,wm:()=>ne,Y$:()=>oe,Qu:()=>ie,kT:()=>ae});var n=r(647310),o="LOAD_FEATURE_INFO",i="ERROR_FEATURE_INFO",a="EXCEPTIONS_FEATURE_INFO",s="CHANGE_MAPINFO_STATE",l="NEW_MAPINFO_REQUEST",u="PURGE_MAPINFO_RESULTS",c="CHANGE_MAPINFO_FORMAT",d="SHOW_MAPINFO_MARKER",m="HIDE_MAPINFO_MARKER",f="SHOW_REVERSE_GEOCODE",p="HIDE_REVERSE_GEOCODE",y="NO_QUERYABLE_LAYERS",g="CLEAR_WARNING",v="FEATURE_INFO_CLICK",h="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",b="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",E="TOGGLE_MAPINFO_STATE",O="UPDATE_CENTER_TO_MARKER",P="IDENTIFY:CHANGE_PAGE",_="IDENTIFY:CLOSE_IDENTIFY",w="IDENTIFY:CHANGE_FORMAT",I="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",T="IDENTIFY:EDIT_LAYER_FEATURES",N="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",S="IDENTIFY:SET_MAP_TRIGGER",j="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",C="IDENTIFY:SET_SHOW_IN_MAP_POPUP",G="IDENTIFY:IDENTIFY_IS_MOUNTED",A="IDENTIFY:INIT_PLUGIN";function R(e,t,r,n,i){return{type:o,data:t,reqId:e,requestParams:r,layerMetadata:n,layer:i}}function D(e,t,r,n){return{type:i,error:t,reqId:e,requestParams:r,layerMetadata:n}}function Z(){return{type:y}}function F(){return{type:g}}function M(e,t){return{type:l,reqId:e,request:t}}function k(e){return{type:s,enabled:e}}function L(){return{type:u}}function Y(e){return{type:c,infoFormat:e}}function x(){return{type:d}}function q(){return{type:m}}function U(e){return{type:f,reverseGeocodeData:e.data}}function H(e){return function(t){n.Z.reverseGeocode(e).then((function(e){t(U(e))})).catch((function(e){t(U(e))}))}}function V(){return{type:p}}function X(){return{type:E}}function K(e){return{type:O,status:e}}function W(e,t){return{type:v,point:e,layer:t,filterNameList:arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],overrideParams:arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},itemId:arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,ignoreVisibilityLimits:arguments.length>5&&void 0!==arguments[5]&&arguments[5]}}function B(e){return{type:h,point:e}}function z(e){return{type:b,enabled:e}}function Q(e){return{type:P,index:e}}var $=function(){return{type:_}},J=function(e){return{type:w,format:e}},ee=function(e){return{type:I,showCoordinateEditor:e}},te=function(e){return{type:T,layer:e}},re=function(e){return{type:N,query:e}},ne=function(e){return{type:S,trigger:e}},oe=function(e){return{type:C,value:e}},ie=function(e){return{type:G,isMounted:e}},ae=function(e){return{type:A,cfg:e}}},647310:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(375875),o=r(472500),i=r.n(o),a=r(727418),s=r.n(a),l={format:"json",bounded:0,polygon_geojson:1,priority:5};const u={geocode:function(e,t){var r=s()({q:e},l,t||{}),o=i().format({protocol:"https",host:"nominatim.openstreetmap.org",query:r});return n.Z.get(o)},reverseGeocode:function(e,t){var r=s()({lat:e.lat,lon:e.lng},t||{},l),o=i().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:r});return n.Z.get(o)}}},925108:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(782904),o=r(727418),i=r.n(o),a=r(921914);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return(t=function(e){var t=function(e){if("object"!=s(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==s(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.kM:var r=t.property||"enabled";return i()({},e,c({},t.control,i()({},e[t.control],c({},r,!(e[t.control]||{})[r]))));case n.At:return!0===t.toggle&&e[t.control]&&e[t.control][t.property]===t.value?i()({},e,c({},t.control,i()({},e[t.control],c({},t.property,void 0)))):i()({},e,c({},t.control,i()({},e[t.control],c({},t.property,t.value))));case n.dc:return i()({},e,c({},t.control,i()({},e[t.control],t.properties)));case n.l:var o=Object.keys(e).filter((function(e){return-1===(t.skip||[]).indexOf(e)})).reduce((function(t,r){return i()(t,c({},r,i()({},e[r],!0===e[r].enabled?{enabled:!1}:{})))}),{});return i()({},e,o);case a.DW:return u(u({},e),{},{info:u(u({},e.info),{},{available:t.isMounted})});default:return e}}},474916:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(558422),o=r.n(n),i=r(45697),a=r.n(i),s=["href","readOnly","children"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(null,arguments)}function u(e){var t=e.href,r=e.readOnly,n=e.children,i=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,s);return r?n:o().createElement("a",l({href:t},i),n)}u.propTypes={href:a().string,readOnly:a().bool.isRequired,children:a().any},u.defaultProps={href:"",readOnly:!1};const c=u},834065:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(558422),o=r.n(n),i=r(45697),a=r.n(i),s=r(877593),l=r(474916),u=["resource","readOnly","formatHref","pathname"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(null,arguments)}function d(e){var t,r,n,i=e.resource,a=e.readOnly,d=e.formatHref,m=e.pathname,f=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,u);return f.detailsPanel?o().createElement(l.Z,{readOnly:a,href:d({pathname:m,query:{"filter{owner.username.in}":null===(n=i.owner)||void 0===n?void 0:n.username}})},i.owner&&(0,s.vW)(i.owner)):o().createElement("p",c({className:"card-text gn-card-user"},f),(null===(t=i.owner)||void 0===t?void 0:t.avatar)&&o().createElement("img",{src:i.owner.avatar,alt:(0,s.vW)(i.owner),className:"gn-card-author-image"}),o().createElement(l.Z,{readOnly:a,href:d({pathname:m,query:{"filter{owner.username.in}":null===(r=i.owner)||void 0===r?void 0:r.username}})},i.owner&&(0,s.vW)(i.owner)))}d.propTypes={resource:a().object,readOnly:a().bool,formatHref:a().func,props:a().any},d.defaultProps={resource:{},readOnly:!1,formatHref:function(){return"#"}};const m=d},64469:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(558422),o=r.n(n);const i=(0,n.forwardRef)((function(e,t){var r=e.enabled,n=e.className,i=e.children;return r?o().createElement("div",{ref:t,className:n||"gn-overlay-container",style:{position:"relative",height:"100%"}},i):null}))},138241:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(558422),o=r.n(n),i=r(805346),a=r(45697),s=r.n(a),l=r(507412),u=r(815135),c=r(441609),d=r.n(c),m=r(535721),f=r(693473),p=(0,u.Z)(f.Z),y=function(e){var t,r,n,a=e.resource,s=void 0===a?{}:a,u=(0,m.fu)(s),c=u.isApproved,f=u.isPublished,y=u.isProcessing,g=u.isCopying,v=u.isDeleting,h=u.isDeleted;return d()(s)?null:o().createElement("p",{className:"gn-resource-status-text"},!y&&(!c||!f)&&o().createElement(p,{variant:"default",className:"gn-resource-status gn-status-button",tooltip:(t={isApproved:c,isPublished:f},r=t.isApproved,n=t.isPublished,!r&&n?o().createElement(i.Z,{msgId:"gnhome.pendingApproval"}):r||n?n||r?"":o().createElement(i.Z,{msgId:"gnhome.unpublished"}):o().createElement(i.Z,{msgId:"gnhome.unApprovedunPublished"})),style:{marginRight:(v||h||g)&&"0.4rem"},tooltipPosition:"top"},o().createElement(l.Z,{name:"info-circle",className:"gn-resource-status-pending"})),v&&o().createElement("span",{className:"gn-resource-status gn-resource-status-danger"},o().createElement(i.Z,{msgId:"gnviewer.deleting"})),h&&o().createElement("span",{className:"gn-resource-status gn-resource-status-danger"},o().createElement(i.Z,{msgId:"gnviewer.deleted"})),g&&o().createElement("span",{className:"gn-resource-status gn-resource-status-primary"},o().createElement(i.Z,{msgId:"gnviewer.cloning"})))};y.propTypes={isApproved:s().bool,isPublished:s().bool},y.defaultProps={isApproved:!0,isPublished:!0};const g=y},30762:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(558422),o=r.n(n),i=r(414293),a=r.n(i),s=r(815135),l=r(17594);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(null,arguments)}var c=(0,s.Z)((function(e){return o().createElement("div",u({},e,{className:"gn-unadvertised"}),o().createElement(l.Z,{name:"eye-slash"}))}));const d=function(e){var t=e.resource;return a()(t.advertised)||t.advertised?null:o().createElement(c,{tooltipId:"gnviewer.unadvertised",className:"gn-unadvertised"})}},650079:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(558422);const o=function(e){var t=e.disabled,r=e.onClickOut,o=(0,n.useRef)();return(0,n.useEffect)((function(){function e(e){var n;!t&&(null==o||null===(n=o.current)||void 0===n?void 0:n.contains)&&!o.current.contains(e.target)&&r()}return window.addEventListener("mousedown",e),function(){window.removeEventListener("mousedown",e)}}),[t,o,r]),o}},829863:(e,t,r)=>{r.r(t),r.d(t,{default:()=>k});var n=r(558422),o=r.n(n),i=r(322843),a=r(171703),s=r(22222),l=r(737275),u=r(702724),c=r(274621),d=r(643892),m=r(452992),f=r(17594),p=r(925108),y=r(782904),g=r(572036),v=r(299392),h=r(693473),b=r(650079),E=r(64469),O=r(709275),P=r(877593),_=r(805346),w=r(675110),I=r(800827),T=r(770058),N=r(678833),S=r(535721),j=r(749639),C=["hide"];function G(e){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G(e)}function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e,t,r){return(t=function(e){var t=function(e){if("object"!=G(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=G(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==G(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var D=(0,a.connect)((0,s.P1)([function(e){var t;return(null==e||null===(t=e.gnresource)||void 0===t?void 0:t.data)||null},function(e){var t;return(null==e||null===(t=e.gnresource)||void 0===t?void 0:t.loading)||!1},function(e){var t,r;return(null==e||null===(t=e.gnresource)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.favorite)||!1},function(e){var t;return(null==e||null===(t=e.gnsave)||void 0===t?void 0:t.savingThumbnailMap)||!1},w.l2,v.km,v.Bs,I.Od,function(e){var t;return(null==e||null===(t=e.gnresource)||void 0===t?void 0:t.showMapThumbnail)||!1},m.WB],(function(e,t,r,n,o,i,a,s,l,u){return{layers:o,resource:e,loading:t,savingThumbnailMap:n,favorite:r,isThumbnailChanged:i,resourceThumbnailUpdating:a,initialBbox:null==s?void 0:s.bbox,enableMapViewer:l,downloading:u,resourceId:e.pk,tabComponents:j.Z}})),{closePanel:y.Xg.bind(null,"rightOverlay","enabled",!1),onFavorite:d.gw,onMapThumbnail:d.CB,onResourceThumbnail:d.e5,onClose:d.qs,onSetExtent:d.rg})(u.Z),Z=(0,a.connect)((0,s.P1)([v.V$,v.fg,v.L4],(function(e,t,r){return{hide:e||!t,resourceType:r}})),{onClick:y.Xg.bind(null,"rightOverlay","enabled","DetailViewer")})((function(e){var t=e.onClick,r=e.hide,n=e.variant,i=e.size,a=e.showMessage,s=e.resourceType,l=((0,S.s2)()[s]||{}).icon,u=void 0===l?"info-circle":l;return r?null:o().createElement(h.Z,{variant:n,size:i,onClick:function(){t()}},a?o().createElement(_.Z,{msgId:"gnviewer.viewInfo"}):o().createElement(f.Z,{name:u}))}));function F(e,t){var r=e.location,n=e.enabled,i=e.onEditResource,a=e.onEditAbstractResource,s=e.onEditThumbnail,l=e.canEdit,u=e.user,c=e.onClose,d=e.monitoredState,m=e.queryPathname,f=void 0===m?"/":m,p=e.tabs,y=void 0===p?[]:p,g=e.items,v=e.resourceId,h=(0,T._y)(d,{tabs:y}),O=(0,b.Z)({disabled:!n,onClickOut:function(){c()}}),_=t.loadedPlugins,w=(0,N.Z)({items:g,loadedPlugins:_},[v]).filter((function(e){return"toolbar"===e.target}));return o().createElement(E.Z,{enabled:n,ref:O,className:"gn-overlay-wrapper"},o().createElement(D,{editTitle:function(e){i(e)},editAbstract:function(e){a(e)},editThumbnail:function(e){s(e,!0)},activeEditMode:n&&l,enableFavorite:!!u,formatHref:function(e){return(0,P.nz)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){R(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({location:r},e))},tabs:h.tabs,pathname:f,toolbarItems:w}))}var M=(0,a.connect)((0,s.P1)([function(e){var t,r;return"DetailViewer"===(null==e||null===(t=e.controls)||void 0===t||null===(r=t.rightOverlay)||void 0===r?void 0:r.enabled)},v.il,v.V$,v.fg,c.np,function(e){return(0,i.bh)(e,(0,l.u8)("monitorState"))},function(e){var t;return(null==e||null===(t=e.gnresource)||void 0===t?void 0:t.data)||null}],(function(e,t,r,n,o,i,a){return{enabled:e,canEdit:t,hide:r||!n,user:o,monitoredState:i,resourceId:null==a?void 0:a.pk}})),{onEditResource:d.Br,onEditAbstractResource:d.bI,onEditThumbnail:d.U5,onClose:y.Xg.bind(null,"rightOverlay","enabled",!1)})((0,O.EN)((function(e){var t=e.hide,r=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,C);return t?null:o().createElement(F,r)})));const k=(0,i.rx)("DetailViewer",{component:M,containers:{ActionNavbar:{name:"DetailViewerButton",Component:Z}},reducers:{gnresource:g.Z,controls:p.Z}})},862032:(e,t,r)=>{r.r(t),r.d(t,{default:()=>A});var n=r(558422),o=r.n(n),i=r(322843),a=r(171703),s=r(22222),l=r(737275),u=r(702724),c=r(643892),d=r(17594),m=r(925108),f=r(782904),p=r(572036),y=r(299392),g=r(693473),v=r(650079),h=r(64469),b=r(709275),E=r(877593),O=r(800827),P=r(770058),_=r(815135),w=r(749639);function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e,t,r){return(t=function(e){var t=function(e){if("object"!=I(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==I(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var S=(0,_.Z)(g.Z),j=(0,a.connect)((0,s.P1)([function(e){var t;return(null==e||null===(t=e.gnresource)||void 0===t?void 0:t.selectedLayerDataset)||null},function(e){var t;return(null==e||null===(t=e.gnresource)||void 0===t?void 0:t.loading)||!1},O.Od,function(e){var t;return(null==e||null===(t=e.gnresource)||void 0===t?void 0:t.showMapThumbnail)||!1}],(function(e,t,r,n){return{resource:e,loading:t,initialBbox:null==r?void 0:r.bbox,enableMapViewer:n,resourceId:null==e?void 0:e.pk,tabComponents:w.Z}})),{closePanel:f.Xg.bind(null,"rightOverlay","enabled",!1),onClose:c.qs})(u.Z),C=(0,a.connect)((0,s.P1)([y.WJ],(function(e){return{layer:e}})),{onClick:f.Xg.bind(null,"rightOverlay","enabled","LayerDetailViewer")})((function(e){var t=e.onClick,r=e.layer,n=e.size,i=e.status;return(null==r?void 0:r.pk)&&"LAYER"===i?o().createElement(S,{variant:"primary",size:n,onClick:function(){t()}},o().createElement(d.Z,{name:"info-circle"})):null})),G=(0,a.connect)((0,s.P1)([function(e){var t,r;return"LayerDetailViewer"===(null==e||null===(t=e.controls)||void 0===t||null===(r=t.rightOverlay)||void 0===r?void 0:r.enabled)},y.WJ,function(e){return(0,i.bh)(e,(0,l.u8)("monitorState"))}],(function(e,t,r){return{enabled:e,layer:t,monitoredState:r}})),{onClose:f.Xg.bind(null,"rightOverlay","enabled",!1)})((0,b.EN)((function(e){var t=e.location,r=e.enabled,n=e.onClose,i=e.monitoredState,a=e.queryPathname,s=void 0===a?"/":a,l=e.tabs,u=void 0===l?[]:l,c=(0,P._y)(i,{tabs:u}),d=(0,v.Z)({disabled:!r,onClickOut:function(){n()}});return o().createElement(h.Z,{enabled:r,ref:d,className:"gn-overlay-wrapper"},o().createElement(j,{editTitle:null,editAbstract:null,editThumbnail:function(){},activeEditMode:!1,enableFavorite:!1,formatHref:function(e){return(0,E.nz)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){N(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({location:t},e))},tabs:c.tabs,pathname:s}))})));const A=(0,i.rx)("LayerDetailViewer",{component:G,containers:{TOC:{target:"toolbar",name:"LayerDetailViewerButton",Component:C}},reducers:{gnresource:p.Z,controls:m.Z}})},572036:(e,t,r)=>{r.d(t,{Z:()=>P});var n=r(618446),o=r.n(n),i=r(441609),a=r.n(i),s=r(957557),l=r.n(s),u=r(643892),c=r(535721),d=["data"],m=["features"],f=["features"],p=["features"],y=["pk"];function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function v(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){E(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function E(e,t,r){return(t=function(e){var t=function(e){if("object"!=g(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==g(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O={selectedLayerPermissions:[],data:{},permissions:[]};const P=function(){var e,t,r,n,i,s,g,h=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,E=arguments.length>1?arguments[1]:void 0;switch(E.type){case u.$X:return O;case u.ql:return b(b({},h),{},{configError:void 0,loadingResourceConfig:E.loading});case u.nS:return b(b({},h),{},{loading:!1,configError:E.message});case u.W:return b(b({},h),{},{loading:!0});case u.Zf:var P,_,w=(0,c.NN)(E.data||{}),I=(w.data,b({},v(w,d))),T=null===(P=h.data)||void 0===P?void 0:P.linkedResources;return a()(T)||I.pk!==(null===(_=h.data)||void 0===_?void 0:_.pk)||(I.linkedResources=T),b(b({},h),{},{error:null,initialResource:b({},w),data:I,loading:!1,isNew:!1});case u.Eu:return b(b({},h),{},{initialResource:null,data:null,error:E.error,loading:!1});case u.Vy:return b(b({},h),{},{data:b(b({},h.data),E.properties)});case u.YB:return b(b({},h),{},{type:E.resourceType});case u.xm:return b(b({},O),{},{isNew:!0});case u._f:return b(b({},h),{},{id:E.id});case u.ek:return b(b({},h),{},{permissions:E.permissions});case u.cd:return b(b({},h),{},{data:b(b({},null==h?void 0:h.data),{},{title:null==E?void 0:E.title,name:null==E?void 0:E.title})});case u.pt:return b(b({},h),{},{data:b(b({},null==h?void 0:h.data),{},{abstract:null==E?void 0:E.abstract})});case u.ww:return b(b({},h),{},{data:b(b({},null==h?void 0:h.data),{},{thumbnail_url:null==E?void 0:E.thumbnailUrl,thumbnailChanged:null==E?void 0:E.thumbnailChanged})});case u._Z:return b(b({},h),{},{data:b(b({},null==h?void 0:h.data),{},{updatingThumbnail:!0})});case u.dh:return b(b({},h),{},{showMapThumbnail:E.enabled});case u.p2:return b(b({},h),{},{selectedLayerPermissions:E.permissions});case u.ih:return b(b({},h),{},{initialCompactPermissions:E.compactPermissions,compactPermissions:E.compactPermissions,isCompactPermissionsChanged:!1,geoLimits:[]});case u.J5:return b(b({},h),{},{compactPermissions:E.compactPermissions,isCompactPermissionsChanged:!o()((0,c.go)(h.initialCompactPermissions),(0,c.go)(E.compactPermissions)),geoLimits:(0,c.vB)(E.compactPermissions)});case u.uA:if(h.compactPermissions){var N=h.compactPermissions,S=N.users,j=N.organizations,C=N.groups;return b(b({},h),{},{compactPermissions:{users:S.map((function(e){return e.features,v(e,m)})),organizations:j.map((function(e){return e.features,v(e,f)})),groups:C.map((function(e){return e.features,v(e,p)}))},geoLimits:[]})}return h;case u.Y0:return b(b({},h),{},{data:b(b({},h.data),{},{extent:b(b({},null===(e=h.data)||void 0===e?void 0:e.extent),{},{coords:E.coords})})});case u.sA:return b(b({},h),{},{params:E.params});case u.ip:return b(b({},h),{},{viewerLinkedResource:b({},(0,c.NN)(l()(E.resource,["data"])))});case u.F_:return b(b({},h),{},{defaultViewerPlugins:E.plugins});case u.um:return b(b({},h),{},{selectedLayer:E.layer});case u.pG:return b(b({},h),{},{selectedLayerDataset:null===(t=h.data)||void 0===t||null===(r=t.maplayers)||void 0===r||null===(n=r.find((function(e){var t;return(null===(t=e.dataset)||void 0===t?void 0:t.pk)===parseInt(E.layerId,10)})))||void 0===n?void 0:n.dataset});case u.Tj:var G=E.layer,A=G.pk,R=v(G,y),D=null!==(i=E.layer.linked_resources)&&void 0!==i?i:{};if(!a()(D)){var Z,F,M=null!==(Z=D.linked_to)&&void 0!==Z?Z:[],k=null!==(F=D.linked_by)&&void 0!==F?F:[];D=a()(M)&&a()(k)?{}:{linkedTo:M,linkedBy:k}}return b(b({},h),{},{data:b(b({},h.data),{},{maplayers:null===(s=h.data)||void 0===s||null===(g=s.maplayers)||void 0===g?void 0:g.map((function(e){var t;return(null===(t=e.dataset)||void 0===t?void 0:t.pk)===parseInt(A,10)?b(b({},e),{},{dataset:b(b(b({},e.dataset),R),{},{linkedResources:D})}):e}))})});default:return h}}},81090:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(372971),o=r(185487),i=r(199515),a=r(465818);class s extends n.Z{constructor(e){if(super(),this.on,this.once,this.un,this.id_=void 0,this.geometryName_="geometry",this.style_=null,this.styleFunction_=void 0,this.geometryChangeKey_=null,this.addChangeListener(this.geometryName_,this.handleGeometryChanged_),e)if("function"==typeof e.getSimplifiedGeometry){const t=e;this.setGeometry(t)}else{const t=e;this.setProperties(t)}}clone(){const e=new s(this.hasProperties()?this.getProperties():null);e.setGeometryName(this.getGeometryName());const t=this.getGeometry();t&&e.setGeometry(t.clone());const r=this.getStyle();return r&&e.setStyle(r),e}getGeometry(){return this.get(this.geometryName_)}getId(){return this.id_}getGeometryName(){return this.geometryName_}getStyle(){return this.style_}getStyleFunction(){return this.styleFunction_}handleGeometryChange_(){this.changed()}handleGeometryChanged_(){this.geometryChangeKey_&&((0,a.bN)(this.geometryChangeKey_),this.geometryChangeKey_=null);const e=this.getGeometry();e&&(this.geometryChangeKey_=(0,a.oL)(e,o.Z.CHANGE,this.handleGeometryChange_,this)),this.changed()}setGeometry(e){this.set(this.geometryName_,e)}setStyle(e){this.style_=e,this.styleFunction_=e?function(e){if("function"==typeof e)return e;let t;return Array.isArray(e)?t=e:((0,i.h)("function"==typeof e.getZIndex,41),t=[e]),function(){return t}}(e):void 0,this.changed()}setId(e){this.id_=e,this.changed()}setGeometryName(e){this.removeChangeListener(this.geometryName_,this.handleGeometryChanged_),this.geometryName_=e,this.addChangeListener(this.geometryName_,this.handleGeometryChanged_),this.handleGeometryChanged_()}}const l=s},613958:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(185487),o=r(971694),i=r(928641),a=r(465818);class s extends o.Z{constructor(e){super(),this.geometries_=e||null,this.changeEventsKeys_=[],this.listenGeometriesChange_()}unlistenGeometriesChange_(){this.changeEventsKeys_.forEach(a.bN),this.changeEventsKeys_.length=0}listenGeometriesChange_(){if(this.geometries_)for(let e=0,t=this.geometries_.length;e<t;++e)this.changeEventsKeys_.push((0,a.oL)(this.geometries_[e],n.Z.CHANGE,this.changed,this))}clone(){const e=new s(null);return e.setGeometries(this.geometries_),e.applyProperties(this),e}closestPointXY(e,t,r,n){if(n<(0,i.qf)(this.getExtent(),e,t))return n;const o=this.geometries_;for(let i=0,a=o.length;i<a;++i)n=o[i].closestPointXY(e,t,r,n);return n}containsXY(e,t){const r=this.geometries_;for(let n=0,o=r.length;n<o;++n)if(r[n].containsXY(e,t))return!0;return!1}computeExtent(e){(0,i.YN)(e);const t=this.geometries_;for(let r=0,n=t.length;r<n;++r)(0,i.l7)(e,t[r].getExtent());return e}getGeometries(){return l(this.geometries_)}getGeometriesArray(){return this.geometries_}getGeometriesArrayRecursive(){let e=[];const t=this.geometries_;for(let r=0,n=t.length;r<n;++r)t[r].getType()===this.getType()?e=e.concat(t[r].getGeometriesArrayRecursive()):e.push(t[r]);return e}getSimplifiedGeometry(e){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),e<0||0!==this.simplifiedGeometryMaxMinSquaredTolerance&&e<this.simplifiedGeometryMaxMinSquaredTolerance)return this;const t=[],r=this.geometries_;let n=!1;for(let o=0,i=r.length;o<i;++o){const i=r[o],a=i.getSimplifiedGeometry(e);t.push(a),a!==i&&(n=!0)}if(n){const e=new s(null);return e.setGeometriesArray(t),e}return this.simplifiedGeometryMaxMinSquaredTolerance=e,this}getType(){return"GeometryCollection"}intersectsExtent(e){const t=this.geometries_;for(let r=0,n=t.length;r<n;++r)if(t[r].intersectsExtent(e))return!0;return!1}isEmpty(){return 0===this.geometries_.length}rotate(e,t){const r=this.geometries_;for(let n=0,o=r.length;n<o;++n)r[n].rotate(e,t);this.changed()}scale(e,t,r){r||(r=(0,i.qg)(this.getExtent()));const n=this.geometries_;for(let o=0,i=n.length;o<i;++o)n[o].scale(e,t,r);this.changed()}setGeometries(e){this.setGeometriesArray(l(e))}setGeometriesArray(e){this.unlistenGeometriesChange_(),this.geometries_=e,this.listenGeometriesChange_(),this.changed()}applyTransform(e){const t=this.geometries_;for(let r=0,n=t.length;r<n;++r)t[r].applyTransform(e);this.changed()}translate(e,t){const r=this.geometries_;for(let n=0,o=r.length;n<o;++n)r[n].translate(e,t);this.changed()}disposeInternal(){this.unlistenGeometriesChange_(),super.disposeInternal()}}function l(e){const t=[];for(let r=0,n=e.length;r<n;++r)t.push(e[r].clone());return t}const u=s}}]);