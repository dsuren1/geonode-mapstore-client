"use strict";(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[1649],{643892:(e,t,r)=>{r.d(t,{W:()=>n,Zf:()=>o,Eu:()=>i,Vy:()=>a,YB:()=>u,xm:()=>s,_f:()=>l,ek:()=>c,cd:()=>p,pt:()=>d,ww:()=>E,tR:()=>f,Js:()=>O,p2:()=>v,ZH:()=>y,eQ:()=>m,ql:()=>b,$X:()=>S,nS:()=>g,ih:()=>_,J5:()=>R,uA:()=>T,Pv:()=>N,_Z:()=>h,dh:()=>D,IH:()=>P,e3:()=>C,Oq:()=>w,Y0:()=>A,sA:()=>G,ip:()=>I,li:()=>U,F_:()=>j,um:()=>L,Tj:()=>M,pG:()=>k,Q$:()=>F,DF:()=>V,id:()=>B,Br:()=>Y,bI:()=>W,U5:()=>x,e5:()=>z,b3:()=>H,mN:()=>Z,QN:()=>J,HV:()=>Q,xe:()=>K,vA:()=>q,gw:()=>X,qs:()=>$,CB:()=>ee,vg:()=>te,Z0:()=>re,lf:()=>ne,jQ:()=>oe,nk:()=>ie,X7:()=>ae,nO:()=>ue,F4:()=>se,EU:()=>le,Rk:()=>ce,V1:()=>pe,rg:()=>de,v6:()=>Ee,d7:()=>fe,Rx:()=>Oe,as:()=>ve,jv:()=>ye,Oj:()=>me,zc:()=>be});var n="GEONODE:RESOURCE_LOADING",o="GEONODE:SET_RESOURCE",i="GEONODE:RESOURCE_ERROR",a="GEONODE:UPDATE_RESOURCE_PROPERTIES",u="GEONODE:SET_RESOURCE_TYPE",s="GEONODE:SET_NEW_RESOURCE",l="GEONODE:SET_RESOURCE_ID",c="GEONODE:SET_RESOURCE_PERMISSIONS",p="GEONODE:EDIT_TITLE_RESOURCE",d="GEONODE:EDIT_ABSTRACT_RESOURCE",E="GEONODE:EDIT_THUMBNAIL_RESOURCE",f="GEONODE:SET_FAVORITE_RESOURCE",O="GEONODE:SET_MAP_THUMBNAIL",v="GEONODE:SET_SELECTED_DATASET_PERMISSIONS",y="GEONODE:REQUEST_RESOURCE_CONFIG",m="GEONODE:REQUEST_NEW_RESOURCE_CONFIG",b="GEONODE:LOADING_RESOURCE_CONFIG",S="GEONODE:RESET_RESOURCE_STATE",g="GEONODE:RESOURCE_CONFIG_ERROR",_="GEONODE:SET_RESOURCE_COMPACT_PERMISSIONS",R="GEONODE:UPDATE_RESOURCE_COMPACT_PERMISSIONS",T="GEONODE:RESET_GEO_LIMITS",N="GEONODE:PROCESS_RESOURCES",h="GEONODE_SET_RESOURCE_THUMBNAIL",D="GEONODE_ENABLE_MAP_THUMBNAIL_VIEWER",P="GEONODE_DOWNLOAD_RESOURCE",C="GEONODE_DOWNLOAD_COMPLETE",w="GEONODE_UPDATE_SINGLE_RESOURCE",A="GEONODE_SET_RESOURCE_EXTENT",G="GEONODE:SET_RESOURCE_PATH_PARAMETERS",I="GEONODE:SET_MAP_VIEWER_LINKED_RESOURCE",U="GEONODE:MANAGE_LINKED_RESOURCE",j="GEONODE:SET_DEFAULT_VIEWER_PLUGINS",L="GEONODE:SET_SELECTED_LAYER",M="GEONODE:UPDATE_LAYER_DATASET",k="GEONODE:SET_SELECTED_LAYER_DATASET";function F(){return{type:n}}function V(e,t){return{type:o,data:e,pending:t}}function B(e){return{type:w,data:e}}function Y(e){return{type:p,title:e}}function W(e){return{type:d,abstract:e}}function x(e){return{type:E,thumbnailUrl:e,thumbnailChanged:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"false"}}function z(){return{type:h}}function H(e){return{type:u,resourceType:e}}function Z(e){return{type:i,error:e}}function J(e){return{type:a,properties:e}}function Q(){return{type:s}}function K(e){return{type:l,id:e}}function q(e){return{type:v,permissions:e}}function X(e){return{type:f,favorite:e}}function $(e){return{type:D,enabled:e}}function ee(e){return{type:O,bbox:e}}function te(e,t,r){return{type:y,resourceType:e,pk:t,options:r}}function re(e,t){return{type:m,resourceType:e,options:t}}function ne(e){return{type:b,loading:e}}function oe(e){return{type:g,message:e}}function ie(){return{type:S}}function ae(e){return{type:_,compactPermissions:e}}function ue(e){return{type:R,compactPermissions:e}}function se(){return{type:T}}function le(e,t,r){return{type:N,processType:e,resources:t,redirectTo:r}}function ce(e){return{type:P,resource:e}}function pe(e){return{type:C,resource:e}}function de(e){return{type:A,coords:e}}function Ee(e){return{type:G,params:e}}function fe(e){return{type:U,payload:e}}function Oe(e){return{type:I,resource:e}}function ve(e){return{type:j,plugins:e}}function ye(e){return{type:L,layer:e}}function me(e){return{type:M,layer:e}}function be(e){return{type:k,layerId:e}}},73443:(e,t,r)=>{r.d(t,{rs:()=>n,AY:()=>o,SW:()=>i,yB:()=>a,oG:()=>u,oz:()=>s,id:()=>l,gc:()=>c,cE:()=>p,rG:()=>d,Vj:()=>E,nY:()=>f});var n="GEONODE:SAVING_RESOURCE",o="GEONODE:SAVE_SUCCESS",i="GEONODE:SAVE_ERROR",a="GEONODE:CLEAR_SAVE",u="GEONODE:SAVE_CONTENT",s="GEONODE:SAVE_DIRECT_CONTENT";function l(){return{type:n}}function c(e){return{type:o,success:e}}function p(e){return{type:i,error:e}}function d(){return{type:a}}function E(e,t,r,n){return{type:u,id:e,metadata:t,reload:r,showNotifications:n}}function f(){return{type:s}}},138334:(e,t,r)=>{r.d(t,{oc:()=>n,v:()=>o,jo:()=>i,tv:()=>a,iF:()=>u,iC:()=>s});var n="GEONODE:START_ASYNC_PROCESS",o="GEONODE:STOP_ASYNC_PROCESS",i="GEONODE:UPDATE_ASYNC_PROCESS";function a(e){return{type:n,payload:e}}function u(e){return{type:i,payload:e}}function s(e){return{type:o,payload:e}}},489514:(e,t,r)=>{r.d(t,{B9:()=>p,dl:()=>d,jg:()=>E});var n=r(375875),o=r.n(n),i=r(14826),a=r(64678),u=r(455877),s=r.n(u),l=new i.Z,c=new a.Z,p=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"user";return o().get("/security/geolimits/".concat(e,"?").concat(r,"_id=").concat(t)).then((function(e){return function(e){try{var t,r,n=l.readFeatures(e),o=JSON.parse(c.writeFeatures(n)),i=null==o||null===(t=o.features)||void 0===t?void 0:t[0];return{type:"FeatureCollection",features:((null==i||null===(r=i.geometry)||void 0===r?void 0:r.coordinates)||[]).map((function(e){var t=s()();return{type:"Feature",properties:{id:t},id:t,geometry:{type:"Polygon",coordinates:e}}}))}}catch(e){return{type:"FeatureCollection",features:[]}}}(e.data)}))},d=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"user",n=function(e){try{var t=e.features.reduce((function(e,t){var r;return"Polygon"===(null==t||null===(r=t.geometry)||void 0===r?void 0:r.type)&&e.geometry.coordinates.push(t.geometry.coordinates),e}),{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[]}}),r=c.readFeatures(t);return l.writeFeatures(r)}catch(e){return{}}}(arguments.length>3?arguments[3]:void 0);return o().post("/security/geolimits/".concat(e,"?").concat(r,"_id=").concat(t),n).then((function(e){return e.data}))},E=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"user";return o().delete("/security/geolimits/".concat(e,"?").concat(r,"_id=").concat(t)).then((function(e){return e.data}))}},18576:(e,t,r)=>{r.d(t,{ZP:()=>G});var n=r(375875),o=r.n(n),i=r(49977),a=r(227361),u=r.n(a),s=r(800827),l=r(274621),c=r(197395),p=r(73443),d=r(643892),E=r(995307),f=r(55035),O=r(455877),v=r.n(O),y=r(299392),m=r(489514),b=r(138334),S=r(535721),g=r(12530);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function R(e){return function(e){if(Array.isArray(e))return h(e)}(e)||N(e)||T(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){if(e){if("string"==typeof e)return h(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}function N(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){C(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function C(e,t,r){return(t=function(e){var t=function(e){if("object"!=_(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==_(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w(e){var t=(0,S.oB)(e.data);return P(P({},e),t)}var A=C(C(C(C(C(C({},S.P6.MAP,(function(e,t,r){return t?(0,E.sA)(t,P(P({},w(r)),{},{id:t})):(0,E.df)(w(r))})),S.P6.GEOSTORY,(function(e,t,r){var n=(0,l.np)(e);return t?(0,E.yp)(t,r):(0,E.Du)(P({name:r.title+" "+v()(),owner:n.name,resource_type:S.P6.GEOSTORY},r))})),S.P6.DASHBOARD,(function(e,t,r){var n=(0,l.np)(e);return t?(0,E.yp)(t,r):(0,E.Du)(P({name:r.title+" "+v()(),owner:n.name,resource_type:S.P6.DASHBOARD},r))})),S.P6.DOCUMENT,(function(e,t,r){return!!t&&(0,E.wl)(t,r)})),S.P6.DATASET,(function(e,t,r){return!!t&&(0,E.do)(t,r)})),S.P6.VIEWER,(function(e,t,r){var n=(0,l.np)(e);return t?(0,E.yp)(t,r):(0,E.Du)(P({name:r.title+" "+v()(),owner:n.name,resource_type:S.P6.VIEWER,advertised:!1},r))}));const G={gnSaveContent:function(e,t){return e.ofType(p.oG).switchMap((function(e){var r,n=t.getState(),o=(null===(r=n.gnresource)||void 0===r?void 0:r.type)||"map",a=(0,y.Il)(n,o),s=(0,y.sY)(n,o),l=P(P(P({title:e.metadata.name},e.metadata.description&&{abstract:e.metadata.description}),a&&{data:JSON.parse(JSON.stringify(a))}),s&&{extent:s}),E=(0,y.yK)(n);return i.Observable.defer((function(){return A[o](n,e.id,l,e.reload)})).switchMap((function(t){if(e.reload){if(o===S.P6.VIEWER){var r=u()(n,"router.location.pathname","").split("/").pop();return i.Observable.of((0,d.d7)({resourceType:o,source:r,target:t.pk,processType:g.zj.LINK_RESOURCE}))}return window.location.href=(0,f.zL)(null==t?void 0:t.detail_url),window.location.reload(),i.Observable.empty()}return i.Observable.of.apply(i.Observable,[(0,p.gc)(t),(0,d.DF)(P(P(P({},E),l),t)),(0,d.id)(t)].concat(R(e.showNotifications?[!0===e.showNotifications?(0,c.Vp)({title:"saveDialog.saveSuccessTitle",message:"saveDialog.saveSuccessMessage"}):(0,c.Kp)(e.showNotifications)]:[])))})).catch((function(t){return i.Observable.of.apply(i.Observable,[(0,p.cE)(t.data||t.message)].concat(R(e.showNotifications?[(0,c.vU)({title:"map.mapError.errorTitle",message:"map.mapError.errorDefault"})]:[])))})).startWith((0,p.id)())}))},gnSaveDirectContent:function(e,t){return e.ofType(p.oz).switchMap((function(){var e=t.getState(),r=(0,s._H)(e),n=(null==r?void 0:r.id)||(0,y.fg)(e),a=(0,y.oS)(e),u=a.compactPermissions,l=a.geoLimits,f=(0,y.yK)(e);return i.Observable.defer((function(){return o().all([(0,E.iv)(n)].concat(R(l?l.map((function(e){return 0===e.features.length?(0,m.jg)(n,e.id,e.type).catch((function(){return{error:!0,resourceId:n,limits:e}})):(0,m.dl)(n,e.id,e.type,{features:e.features}).catch((function(){return{error:!0,resourceId:n,limits:e}}))})):[])))})).switchMap((function(t){var r,o=function(e){if(Array.isArray(e))return e}(r=t)||N(r)||T(r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),a=o[0],s=o.slice(1).filter((function(e){return e.error})),l=(0,y.Yj)(e),c=(0,y.uu)(e),O={name:l||(null==a?void 0:a.title),description:c||(null==a?void 0:a.abstract),extension:null==a?void 0:a.extension,href:null==a?void 0:a.href};return i.Observable.concat.apply(i.Observable,R(u?[i.Observable.defer((function(){return(0,E.BY)(n,(0,S.go)(u)).then((function(e){return{resource:f,output:e,processType:g.zj.PERMISSIONS_RESOURCE}})).catch((function(e){var t;return{resource:f,error:(null==e||null===(t=e.data)||void 0===t?void 0:t.detail)||(null==e?void 0:e.statusText)||(null==e?void 0:e.message)||!0,processType:g.zj.PERMISSIONS_RESOURCE}}))})).switchMap((function(e){return i.Observable.of((0,b.tv)(e))}))]:[]).concat([i.Observable.of((0,p.Vj)(n,O,!1,!(s.length>0)||{title:"gnviewer.warningGeoLimitsSaveTitle",message:"gnviewer.warningGeoLimitsSaveMessage"}),(0,d.F4)())]))})).catch((function(e){var t;return i.Observable.of((0,p.cE)(e.data||e.message),(0,c.vU)({title:"map.mapError.errorTitle",message:(null==e||null===(t=e.data)||void 0===t?void 0:t.detail)||(null==e?void 0:e.message)||"map.mapError.errorDefault"}))})).startWith((0,p.id)())}))},gnSetMapThumbnail:function(e,t){return e.ofType(d.Js).switchMap((function(e){var r,n,o,a,u=t.getState(),s=(null===(r=u.gnresource)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.resource_type)||"map",l=null==u||null===(o=u.gnresource)||void 0===o?void 0:o.id,f=(null===(a=u.gnresource)||void 0===a?void 0:a.data)||{},O={srid:e.bbox.crs,bbox:[Object.values(e.bbox.bounds)[2],Object.values(e.bbox.bounds)[0],Object.values(e.bbox.bounds)[3],Object.values(e.bbox.bounds)[1]]};return i.Observable.defer((function(){return(0,E.CB)(l,O,s)})).switchMap((function(e){var t=Math.random();return i.Observable.of.apply(i.Observable,[(0,d.QN)(P(P({},f),{},{thumbnail_url:"".concat(e.thumbnail_url,"?").concat(t)})),(0,d.qs)(!1),(0,d.id)(P(P({},f),{},{thumbnail_url:"".concat(e.thumbnail_url,"?").concat(t)})),(0,p.rG)()].concat([(0,c.Vp)({title:"gnviewer.thumbnailsaved",message:"gnviewer.thumbnailsaved"})]))})).catch((function(e){return i.Observable.of((0,p.cE)(e.data),(0,c.vU)({title:"gnviewer.thumbnailnotsaved",message:"gnviewer.thumbnailnotsaved"}))}))}))},gnWatchStopPermissionsProcess:function(e,t){return e.ofType(b.v).filter((function(e){var t;return(null==e||null===(t=e.payload)||void 0===t?void 0:t.processType)===g.zj.PERMISSIONS_RESOURCE})).switchMap((function(e){var r,n,o,a,u,s=t.getState();if((0,y.fg)(s)!==(null==e||null===(r=e.payload)||void 0===r||null===(n=r.resource)||void 0===n?void 0:n.pk))return i.Observable.empty();if((null==e||null===(o=e.payload)||void 0===o?void 0:o.error)||(null==e||null===(a=e.payload)||void 0===a||null===(u=a.output)||void 0===u?void 0:u.status)===g.N5.FAILED)return i.Observable.of((0,c.vU)({title:"gnviewer.errorCompactPermissionsTitle",message:"gnviewer.errorCompactPermissionsMessage"}));var l=(0,y.iV)(s);return i.Observable.of((0,d.X7)(l))}))},gnWatchStopCopyProcessOnSave:function(e,t){return e.ofType(b.v).filter((function(e){var t;return(null==e||null===(t=e.payload)||void 0===t?void 0:t.processType)===g.zj.COPY_RESOURCE})).switchMap((function(e){var r,n,o,a,u,s,l,c,p,O,v,m=t.getState(),b=(0,y.fg)(m),S=null==m||null===(r=m.router)||void 0===r||null===(n=r.location)||void 0===n?void 0:n.pathname;if(b!==(null==e||null===(o=e.payload)||void 0===o||null===(a=o.resource)||void 0===a?void 0:a.pk)||S.includes("/detail/"))return i.Observable.empty();if((null==e||null===(u=e.payload)||void 0===u?void 0:u.error)||(null==e||null===(s=e.payload)||void 0===s||null===(l=s.output)||void 0===l?void 0:l.status)===g.N5.FAILED)return i.Observable.empty();var _=null==e||null===(c=e.payload)||void 0===c||null===(p=c.output)||void 0===p||null===(O=p.output_params)||void 0===O||null===(v=O.output)||void 0===v?void 0:v.uuid;return void 0===_?i.Observable.empty():i.Observable.defer((function(){return(0,E.LS)(_)})).switchMap((function(e){return window.location.href=(0,f.zL)(null==e?void 0:e.detail_url),i.Observable.empty()})).startWith((0,d.lf)(!0))}))}}},572036:(e,t,r)=>{r.d(t,{Z:()=>_});var n=r(618446),o=r.n(n),i=r(441609),a=r.n(i),u=r(957557),s=r.n(u),l=r(643892),c=r(535721),p=["data"],d=["features"],E=["features"],f=["features"],O=["pk"];function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function y(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){S(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function S(e,t,r){return(t=function(e){var t=function(e){if("object"!=v(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==v(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g={selectedLayerPermissions:[],data:{},permissions:[]};const _=function(){var e,t,r,n,i,u,v,m=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,S=arguments.length>1?arguments[1]:void 0;switch(S.type){case l.$X:return g;case l.ql:return b(b({},m),{},{configError:void 0,loadingResourceConfig:S.loading});case l.nS:return b(b({},m),{},{loading:!1,configError:S.message});case l.W:return b(b({},m),{},{loading:!0});case l.Zf:var _,R,T=(0,c.NN)(S.data||{}),N=(T.data,b({},y(T,p))),h=null===(_=m.data)||void 0===_?void 0:_.linkedResources;return a()(h)||N.pk!==(null===(R=m.data)||void 0===R?void 0:R.pk)||(N.linkedResources=h),b(b({},m),{},{error:null,initialResource:b({},T),data:N,loading:!1,isNew:!1});case l.Eu:return b(b({},m),{},{initialResource:null,data:null,error:S.error,loading:!1});case l.Vy:return b(b({},m),{},{data:b(b({},m.data),S.properties)});case l.YB:return b(b({},m),{},{type:S.resourceType});case l.xm:return b(b({},g),{},{isNew:!0});case l._f:return b(b({},m),{},{id:S.id});case l.ek:return b(b({},m),{},{permissions:S.permissions});case l.cd:return b(b({},m),{},{data:b(b({},null==m?void 0:m.data),{},{title:null==S?void 0:S.title,name:null==S?void 0:S.title})});case l.pt:return b(b({},m),{},{data:b(b({},null==m?void 0:m.data),{},{abstract:null==S?void 0:S.abstract})});case l.ww:return b(b({},m),{},{data:b(b({},null==m?void 0:m.data),{},{thumbnail_url:null==S?void 0:S.thumbnailUrl,thumbnailChanged:null==S?void 0:S.thumbnailChanged})});case l._Z:return b(b({},m),{},{data:b(b({},null==m?void 0:m.data),{},{updatingThumbnail:!0})});case l.dh:return b(b({},m),{},{showMapThumbnail:S.enabled});case l.p2:return b(b({},m),{},{selectedLayerPermissions:S.permissions});case l.ih:return b(b({},m),{},{initialCompactPermissions:S.compactPermissions,compactPermissions:S.compactPermissions,isCompactPermissionsChanged:!1,geoLimits:[]});case l.J5:return b(b({},m),{},{compactPermissions:S.compactPermissions,isCompactPermissionsChanged:!o()((0,c.go)(m.initialCompactPermissions),(0,c.go)(S.compactPermissions)),geoLimits:(0,c.vB)(S.compactPermissions)});case l.uA:if(m.compactPermissions){var D=m.compactPermissions,P=D.users,C=D.organizations,w=D.groups;return b(b({},m),{},{compactPermissions:{users:P.map((function(e){return e.features,y(e,d)})),organizations:C.map((function(e){return e.features,y(e,E)})),groups:w.map((function(e){return e.features,y(e,f)}))},geoLimits:[]})}return m;case l.Y0:return b(b({},m),{},{data:b(b({},m.data),{},{extent:b(b({},null===(e=m.data)||void 0===e?void 0:e.extent),{},{coords:S.coords})})});case l.sA:return b(b({},m),{},{params:S.params});case l.ip:return b(b({},m),{},{viewerLinkedResource:b({},(0,c.NN)(s()(S.resource,["data"])))});case l.F_:return b(b({},m),{},{defaultViewerPlugins:S.plugins});case l.um:return b(b({},m),{},{selectedLayer:S.layer});case l.pG:return b(b({},m),{},{selectedLayerDataset:null===(t=m.data)||void 0===t||null===(r=t.maplayers)||void 0===r||null===(n=r.find((function(e){var t;return(null===(t=e.dataset)||void 0===t?void 0:t.pk)===parseInt(S.layerId,10)})))||void 0===n?void 0:n.dataset});case l.Tj:var A=S.layer,G=A.pk,I=y(A,O),U=null!==(i=S.layer.linked_resources)&&void 0!==i?i:{};if(!a()(U)){var j,L,M=null!==(j=U.linked_to)&&void 0!==j?j:[],k=null!==(L=U.linked_by)&&void 0!==L?L:[];U=a()(M)&&a()(k)?{}:{linkedTo:M,linkedBy:k}}return b(b({},m),{},{data:b(b({},m.data),{},{maplayers:null===(u=m.data)||void 0===u||null===(v=u.maplayers)||void 0===v?void 0:v.map((function(e){var t;return(null===(t=e.dataset)||void 0===t?void 0:t.pk)===parseInt(G,10)?b(b({},e),{},{dataset:b(b(b({},e.dataset),I),{},{linkedResources:U})}):e}))})});default:return m}}}}]);