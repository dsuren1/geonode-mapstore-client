(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[59870,47310],{921914:(t,e,n)=>{"use strict";n.d(e,{XL:()=>o,km:()=>i,Ih:()=>u,Xw:()=>a,Pn:()=>c,DZ:()=>E,e8:()=>l,E0:()=>f,F9:()=>s,X_:()=>O,pb:()=>p,Re:()=>d,ih:()=>y,xy:()=>v,jL:()=>S,oz:()=>_,ph:()=>m,lF:()=>g,gG:()=>T,cb:()=>R,GI:()=>D,B1:()=>I,fv:()=>N,gc:()=>b,zX:()=>h,ZF:()=>A,Zb:()=>P,DW:()=>C,Xp:()=>G,Fm:()=>U,sV:()=>w,LU:()=>M,XP:()=>F,WU:()=>j,mK:()=>L,g:()=>H,ws:()=>Y,HP:()=>k,aN:()=>x,Pg:()=>B,u0:()=>q,TM:()=>Q,PM:()=>Z,lK:()=>X,sv:()=>K,MO:()=>V,oO:()=>z,Mc:()=>$,Zw:()=>J,RA:()=>tt,am:()=>et,ZM:()=>nt,wm:()=>rt,Y$:()=>ot,Qu:()=>it,kT:()=>ut});var r=n(647310),o="LOAD_FEATURE_INFO",i="ERROR_FEATURE_INFO",u="EXCEPTIONS_FEATURE_INFO",a="CHANGE_MAPINFO_STATE",c="NEW_MAPINFO_REQUEST",E="PURGE_MAPINFO_RESULTS",l="CHANGE_MAPINFO_FORMAT",f="SHOW_MAPINFO_MARKER",s="HIDE_MAPINFO_MARKER",O="SHOW_REVERSE_GEOCODE",p="HIDE_REVERSE_GEOCODE",d="NO_QUERYABLE_LAYERS",y="CLEAR_WARNING",v="FEATURE_INFO_CLICK",S="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",_="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",m="TOGGLE_MAPINFO_STATE",g="UPDATE_CENTER_TO_MARKER",T="IDENTIFY:CHANGE_PAGE",R="IDENTIFY:CLOSE_IDENTIFY",D="IDENTIFY:CHANGE_FORMAT",I="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",N="IDENTIFY:EDIT_LAYER_FEATURES",b="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",h="IDENTIFY:SET_MAP_TRIGGER",A="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",P="IDENTIFY:SET_SHOW_IN_MAP_POPUP",C="IDENTIFY:IDENTIFY_IS_MOUNTED",G="IDENTIFY:INIT_PLUGIN";function U(t,e,n,r,i){return{type:o,data:e,reqId:t,requestParams:n,layerMetadata:r,layer:i}}function w(t,e,n,r){return{type:i,error:e,reqId:t,requestParams:n,layerMetadata:r}}function M(){return{type:d}}function F(){return{type:y}}function j(t,e){return{type:c,reqId:t,request:e}}function L(t){return{type:a,enabled:t}}function H(){return{type:E}}function Y(t){return{type:l,infoFormat:t}}function k(){return{type:f}}function x(){return{type:s}}function W(t){return{type:O,reverseGeocodeData:t.data}}function B(t){return function(e){r.Z.reverseGeocode(t).then((function(t){e(W(t))})).catch((function(t){e(W(t))}))}}function q(){return{type:p}}function Q(){return{type:m}}function Z(t){return{type:g,status:t}}function X(t,e){return{type:v,point:t,layer:e,filterNameList:arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],overrideParams:arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},itemId:arguments.length>4&&void 0!==arguments[4]?arguments[4]:null}}function K(t){return{type:S,point:t}}function V(t){return{type:_,enabled:t}}function z(t){return{type:T,index:t}}var $=function(){return{type:R}},J=function(t){return{type:D,format:t}},tt=function(t){return{type:I,showCoordinateEditor:t}},et=function(t){return{type:N,layer:t}},nt=function(t){return{type:b,query:t}},rt=function(t){return{type:h,trigger:t}},ot=function(t){return{type:P,value:t}},it=function(t){return{type:C,isMounted:t}},ut=function(t){return{type:G,cfg:t}}},647310:(t,e,n)=>{"use strict";n.d(e,{Z:()=>l});var r=n(375875),o=n.n(r),i=n(472500),u=n.n(i),a=n(727418),c=n.n(a),E={format:"json",bounded:0,polygon_geojson:1,priority:5};const l={geocode:function(t,e){var n=c()({q:t},E,e||{}),r=u().format({protocol:"https",host:"nominatim.openstreetmap.org",query:n});return o().get(r)},reverseGeocode:function(t,e){var n=c()({lat:t.lat,lon:t.lng},e||{},E),r=u().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:n});return o().get(r)}}},925108:(t,e,n)=>{"use strict";n.d(e,{Z:()=>f});var r=n(782904),o=n(727418),i=n.n(o),u=n(921914);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){var r;return r=function(t,e){if("object"!=a(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(e),(e="symbol"==a(r)?r:String(r))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case r.kM:var n=e.property||"enabled";return i()({},t,l({},e.control,i()({},t[e.control],l({},n,!(t[e.control]||{})[n]))));case r.At:return!0===e.toggle&&t[e.control]&&t[e.control][e.property]===e.value?i()({},t,l({},e.control,i()({},t[e.control],l({},e.property,void 0)))):i()({},t,l({},e.control,i()({},t[e.control],l({},e.property,e.value))));case r.dc:return i()({},t,l({},e.control,i()({},t[e.control],e.properties)));case r.l:var o=Object.keys(t).filter((function(t){return-1===(e.skip||[]).indexOf(t)})).reduce((function(e,n){return i()(e,l({},n,i()({},t[n],!0===t[n].enabled?{enabled:!1}:{})))}),{});return i()({},t,o);case u.DW:return E(E({},t),{},{info:E(E({},t.info),{},{available:e.isMounted})});default:return t}}},788113:(t,e,n)=>{"use strict";n.d(e,{b6:()=>f,PG:()=>s,_x:()=>O,Mm:()=>p,dP:()=>d,SX:()=>y,ZL:()=>v,_S:()=>S,iH:()=>_,R7:()=>m,Q7:()=>g,n7:()=>T,bA:()=>R,hm:()=>D,E2:()=>I,Cb:()=>N,eK:()=>b,Im:()=>h,e8:()=>A,JF:()=>P,kS:()=>C,y:()=>G,l2:()=>U,HN:()=>w,BM:()=>M,O8:()=>F,am:()=>j,LV:()=>L,CK:()=>H,jU:()=>Y,Qg:()=>k});var r=n(22222),o=n(227361),i=n.n(o),u=n(800827),a=n(577215);function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function E(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?E(Object(n),!0).forEach((function(e){var r,o,i,u;r=t,o=e,i=n[e],u=function(t,e){if("object"!=c(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==c(u)?u:String(u))in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f=function(t){return i()(t,"catalog.services")},s=(0,r.P1)((function(t){return i()(t,"catalog.default.staticServices")}),f,(function(t,e){var n=null==t?void 0:t.default_map_backgrounds;return n?(n.readOnly=!0,l(l({},e),{},{default_map_backgrounds:n})):e})),O=function(t){return i()(t,"catalog.default.tileSizes",[256,512])},p=function(t){return i()(t,"controls.metadataexplorer.group")},d=function(t){return i()(t,"catalog.saving")},y=function(t){return i()(t,"catalog.result")},v=function(t){return i()(t,"catalog.openCatalogServiceList")},S=function(t){return i()(t,"catalog.newService")},_=function(t){return i()(t,"catalog.newService.type","csw")},m=function(t){return i()(t,'catalog.services["'.concat(i()(t,"catalog.selectedService"),'"]'))},g=function(t){return i()(t,'catalog.services["'.concat(i()(t,"catalog.selectedService"),'"].type'),function(t){return i()(t,'catalog.default.staticServices["'.concat(i()(t,"catalog.selectedService"),'"].type'),"csw")}(t))},T=function(t){return i()(t,'catalog.services["'.concat(i()(t,"catalog.selectedService"),'"].layerOptions'),{})},R=function(t){return i()(t,"catalog.searchOptions")},D=function(t){return i()(t,"catalog.loadingError")},I=function(t){return i()(t,"catalog.loading",!1)},N=function(t){return i()(t,"catalog.selectedService")},b=function(t){return i()(t,"catalog.mode","view")},h=function(t){return i()(t,"catalog.layerError")},A=function(t){return i()(t,"catalog.searchOptions.text","")},P=function(t){return"metadataexplorer"===i()(t,"controls.toolbar.active")||i()(t,"controls.metadataexplorer.enabled")},C=function(t){return(i()(t,"localConfig.authenticationRules")||[]).filter((function(t){return"authkey"===t.method})).map((function(t){return t.authkeyParamName}))||[]},G=function(t){return i()(t,"catalog.pageSize",4)},U=function(t){return i()(t,"catalog.delayAutoSearch",1e3)},w=(0,r.zB)({projection:u.uy}),M=function(t){return i()(t,"catalog.formatsLoading",!1)},F=function(t){return i()(t,"catalog.newService.supportedFormats.imageFormats",[])},j=function(t){var e,n;return"edit"===b(t)?F(t):(null===(e=m(t))||void 0===e||null===(n=e.supportedFormats)||void 0===n?void 0:n.imageFormats)||[]},L=function(t){return i()(t,"catalog.newService.supportedFormats.infoFormats",(0,a.oL)())},H=function(t){return i()(t,"catalog.newService.formatUrlUsed","")},Y=function(t){return i()(t,"catalog.isNewServiceAdded",!1)},k=function(t){return i()(t,"catalog.showFormatError",!1)}},55237:(t,e,n)=>{"use strict";n.d(e,{tr:()=>g,jb:()=>T,Xu:()=>R,un:()=>D,Qn:()=>I,_q:()=>N,og:()=>b,$4:()=>h,kN:()=>A,oD:()=>P,V$:()=>C,uH:()=>G,pC:()=>U,tz:()=>w,p:()=>M,Q7:()=>F,t:()=>j});var r=n(747037),o=n.n(r),i=n(647960),u=n.n(i),a=n(227361),c=n.n(a),E=n(984596),l=n.n(E),f=n(730381),s=n.n(f),O=n(86638);function p(t){return function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||y(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,E=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){E=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(E)throw o}}return a}}(t,e)||y(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){if(t){if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(t,e):void 0}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var S=/PT?[\d\.]+[YMWDHMS]/,_=function(t){return t?o()(t)?new Date(t).getTime():(u()(t)&&t.getTime(),t):null},m=function(t){var e=t.start,n=t.end,r=t.duration,o=s().duration(r).asMilliseconds();return(new Date(n).getTime()-new Date(e).getTime())/o},g=function(t){for(var e=t.start,n=t.end,r=t.duration,o=s().duration(r).asMilliseconds(),i=[],u=new Date(e),a=new Date(n);u<=a;)i.push(new Date(u).toISOString()),u.setTime(u.getTime()+o);return i},T=function(t){var e=t.start,n=t.end,r=t.duration;return g({start:e,end:n,duration:r}).map((function(t){return{start:new Date(t),end:new Date(new Date(t).getTime()+s().duration(r).asMilliseconds())}}))},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.start,n=t.end,r=t.duration,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=o.start,u=o.end;if(!i||!u)return{count:m({start:e,end:n,duration:r}),start:e,end:n};var a=s().duration(r).asMilliseconds(),c=new Date(e).getTime(),E=new Date(n).getTime(),l=new Date(i).getTime(),f=new Date(u).getTime(),O=Math.ceil((l-c)/a),p=Math.floor((f-c)/a),d=Math.floor((E-c)/a);if(O>=0&&p<=d){var y=p-O;return{start:new Date(c+Math.max(0,O)*a),end:new Date(c+Math.min(d,p)*a),count:y}}return{count:m({start:e,end:n,duration:r}),start:e,end:n}},D=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.start,n=t.end,r=arguments.length>1?arguments[1]:void 0,o=new Date(e),i=new Date(n),u=Math.floor(i.getTime()-o.getTime())/r;return{range:{start:e,end:n},resolution:s().duration(u).toISOString().match(S)[0]}},I=function(){var t,e,n=arguments.length>1?arguments[1]:void 0,r=(t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],(e=arguments.length>2?arguments[2]:void 0)?t.map((function(t){var n=d(t.split("/"),2);return{start:n[0],end:n[1]}[e]})):t);return r[function(t,e){var n=_(e),r=1/0,o=-1;return t.forEach((function(t,e){var i=_(t),u=Math.abs(i-n);u<r&&(r=u,o=e)})),o}(r,n)]},N=function(t){return t&&t.indexOf&&t.indexOf("--")>0},b=function(t,e){var n=s()(t).diff(e);return{start:n>=0?e:t,end:n>=0?t:e}},h=function(t){return 6e4*t.getTimezoneOffset()},A=function(t){var e=t;!u()(t)&o()(t)&&(e=new Date(t));var n=e.getUTCHours();n=n<10?"0"+n:n;var r=e.getUTCMinutes();r=r<10?"0"+r:r;var i=e.getUTCSeconds();return i=i<10?"0"+i:i,"".concat(n,":").concat(r,":").concat(i)},P=function(t){var e=t;!u()(t)&o()(t)&&(e=new Date(t));var n=e.getUTCMonth()+1,r=e.getUTCDate();return n=n<10?"0"+n:n,r=r<10?"0"+r:r,"".concat(e.getUTCFullYear(),"-").concat(n,"-").concat(r)},C=function(t,e){var n=(0,O.mh)(t),r="HH:mm:SS";switch(e){case"time":return r;case"date":return n;default:return n+" "+r}},G=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).Domains,e=void 0===t?{}:t,n=arguments.length>1?arguments[1]:void 0,r=l()(e.DimensionDomain||[]).concat(),o=e["@version"]||e.version,i=c()(e,"SpaceDomain.BoundingBox");return i&&r.push({Identifier:"space",Domain:i}),r.map((function(t){var e=t.Identifier,r=t.Domain;return{source:{type:"multidim-extension",version:o,url:n},name:e,domain:r}}))},U=function(t,e,n){var r=_(e),o=_(n);return t.reduce((function(t,e){var n=_(e);return _(r)<n&&_(o)>n?[].concat(p(t),[e]):p(t)}),[])},w=function(t){var e=t.reduce((function(t,e){if(-1!==e.indexOf("/")){var n=d(e.split("/"),2),r=n[0],o=n[1];return[].concat(p(t),[r,o])}return[].concat(p(t),[e])}),[]).sort();return[e[0],e[e.length-1]]},M=function(t,e,n){var r=s()(t);return("add"===n?r.add(e,"seconds"):r.subtract(e,"seconds")).toISOString()},F=function(t){var e,n;(n=(n=o()(t)?t.indexOf("--")>0?t.split("--"):t.indexOf(",")>0?t.split(","):[t]:t).reduce((function(t,e){return t.concat(e.split("/"))}),[]).sort()).length>2&&(n=[n[0],n[n.length-1]]);var r=d((null===(e=n)||void 0===e?void 0:e.filter((function(t){return!!t})))||[],2);return[r[0],r[1]]},j=function(t){var e=t;!u()(t)&o()(t)&&(e=new Date(t));var n=e.getHours();n=n<10?"0"+n:n;var r=e.getMinutes();r=r<10?"0"+r:r;var i=e.getSeconds();return i=i<10?"0"+i:i,"".concat(n,":").concat(r,":").concat(i)}},643892:(t,e,n)=>{"use strict";n.d(e,{W:()=>r,Zf:()=>o,Eu:()=>i,Vy:()=>u,YB:()=>a,xm:()=>c,_f:()=>E,ek:()=>l,cd:()=>f,pt:()=>s,ww:()=>O,tR:()=>p,Js:()=>d,p2:()=>y,ZH:()=>v,eQ:()=>S,ql:()=>_,$X:()=>m,nS:()=>g,ih:()=>T,J5:()=>R,uA:()=>D,Pv:()=>I,_Z:()=>N,dh:()=>b,IH:()=>h,e3:()=>A,Oq:()=>P,Y0:()=>C,sA:()=>G,ip:()=>U,li:()=>w,Q$:()=>M,DF:()=>F,id:()=>j,Br:()=>L,bI:()=>H,U5:()=>Y,e5:()=>k,b3:()=>x,mN:()=>W,QN:()=>B,HV:()=>q,xe:()=>Q,vA:()=>Z,gw:()=>X,qs:()=>K,CB:()=>V,vg:()=>z,Z0:()=>$,lf:()=>J,jQ:()=>tt,nk:()=>et,X7:()=>nt,nO:()=>rt,F4:()=>ot,EU:()=>it,Rk:()=>ut,V1:()=>at,rg:()=>ct,v6:()=>Et,d7:()=>lt,Rx:()=>ft});var r="GEONODE:RESOURCE_LOADING",o="GEONODE:SET_RESOURCE",i="GEONODE:RESOURCE_ERROR",u="GEONODE:UPDATE_RESOURCE_PROPERTIES",a="GEONODE:SET_RESOURCE_TYPE",c="GEONODE:SET_NEW_RESOURCE",E="GEONODE:SET_RESOURCE_ID",l="GEONODE:SET_RESOURCE_PERMISSIONS",f="GEONODE:EDIT_TITLE_RESOURCE",s="GEONODE:EDIT_ABSTRACT_RESOURCE",O="GEONODE:EDIT_THUMBNAIL_RESOURCE",p="GEONODE:SET_FAVORITE_RESOURCE",d="GEONODE:SET_MAP_THUMBNAIL",y="GEONODE:SET_SELECTED_DATASET_PERMISSIONS",v="GEONODE:REQUEST_RESOURCE_CONFIG",S="GEONODE:REQUEST_NEW_RESOURCE_CONFIG",_="GEONODE:LOADING_RESOURCE_CONFIG",m="GEONODE:RESET_RESOURCE_STATE",g="GEONODE:RESOURCE_CONFIG_ERROR",T="GEONODE:SET_RESOURCE_COMPACT_PERMISSIONS",R="GEONODE:UPDATE_RESOURCE_COMPACT_PERMISSIONS",D="GEONODE:RESET_GEO_LIMITS",I="GEONODE:PROCESS_RESOURCES",N="GEONODE_SET_RESOURCE_THUMBNAIL",b="GEONODE_ENABLE_MAP_THUMBNAIL_VIEWER",h="GEONODE_DOWNLOAD_RESOURCE",A="GEONODE_DOWNLOAD_COMPLETE",P="GEONODE_UPDATE_SINGLE_RESOURCE",C="GEONODE_SET_RESOURCE_EXTENT",G="GEONODE:SET_RESOURCE_PATH_PARAMETERS",U="GEONODE:SET_MAP_VIEWER_LINKED_RESOURCE",w="GEONODE:MANAGE_LINKED_RESOURCE";function M(){return{type:r}}function F(t,e){return{type:o,data:t,pending:e}}function j(t){return{type:P,data:t}}function L(t){return{type:f,title:t}}function H(t){return{type:s,abstract:t}}function Y(t){return{type:O,thumbnailUrl:t,thumbnailChanged:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"false"}}function k(){return{type:N}}function x(t){return{type:a,resourceType:t}}function W(t){return{type:i,error:t}}function B(t){return{type:u,properties:t}}function q(){return{type:c}}function Q(t){return{type:E,id:t}}function Z(t){return{type:y,permissions:t}}function X(t){return{type:p,favorite:t}}function K(t){return{type:b,enabled:t}}function V(t){return{type:d,bbox:t}}function z(t,e,n){return{type:v,resourceType:t,pk:e,options:n}}function $(t,e){return{type:S,resourceType:t,options:e}}function J(t){return{type:_,loading:t}}function tt(t){return{type:g,message:t}}function et(){return{type:m}}function nt(t){return{type:T,compactPermissions:t}}function rt(t){return{type:R,compactPermissions:t}}function ot(){return{type:D}}function it(t,e,n){return{type:I,processType:t,resources:e,redirectTo:n}}function ut(t){return{type:h,resource:t}}function at(t){return{type:A,resource:t}}function ct(t){return{type:C,coords:t}}function Et(t){return{type:G,params:t}}function lt(t){return{type:w,payload:t}}function ft(t){return{type:U,resource:t}}},100824:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var r=n(124852),o=n.n(r);const i=(0,r.forwardRef)((function(t,e){var n=t.enabled,r=t.className,i=t.children;return n?o().createElement("div",{ref:e,className:r||"gn-overlay-container",style:{position:"relative",height:"100%"}},i):null}))}}]);