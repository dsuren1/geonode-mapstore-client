(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[67440,2095],{555927:(t,n,e)=>{"use strict";e.d(n,{BJ:()=>r,_y:()=>o,vk:()=>i,uI:()=>u,mg:()=>a,aR:()=>c,SW:()=>s,$l:()=>l,zX:()=>f,R4:()=>O,E9:()=>p,CP:()=>d,s6:()=>E,E5:()=>y,CF:()=>S,B_:()=>v,js:()=>m,TA:()=>D,Kv:()=>R,zV:()=>T,D_:()=>A,Nl:()=>g,G9:()=>b,gE:()=>h,pB:()=>_,GD:()=>G,sA:()=>w,o2:()=>C,PC:()=>I,rR:()=>Y,vM:()=>j,AN:()=>P,tH:()=>N,kk:()=>B,ak:()=>H,qY:()=>L});var r="DASHBOARD:SET_AVAILABLE",o="DASHBOARD:SET_EDITING",i="DASHBOARD:SHOW_CONNECTIONS",u="DASHBOARD:TRIGGER_SAVE_MODAL",a="DASHBOARD:TRIGGER_SAVE_AS_MODAL",c="DASHBOARD:SAVE_DASHBOARD",s="DASHBOARD:SAVE_ERROR",l="DASHBOARD:DASHBOARD_SAVED",f="DASHBOARD:LOAD_DASHBOARD",O="DASHBOARD:DASHBOARD_RESET",p="DASHBOARD:DASHBOARD_LOADED",d="DASHBOARD:DASHBOARD_LOADING",E="DASHBOARD:UPDATE_SERVICES",y="DASHBOARD:SET_SELECTED_SERVICE",S="DASHBOARD:ADD_NEW_SERVICE",v="DASHBOARD:CATALOG_MODE",m="DASHBOARD:DELETE_SERVICE",D="DASHBOARD:SAVE_SERVICE_LOADING",R="DASHBOARD:EXPORT",T="DASHBOARD:IMPORT",A=function(t){return{type:o,editing:t}},g=function(t){return{type:r,available:t}},b=function(t){return{type:i,show:t}},h=function(t){return{type:u,show:t}},_=function(t){return{type:a,show:t}},G=function(t){return{type:s,error:t}},w=function(t){return{type:l,id:t}},C=function(t){return{type:f,id:t}},I=function(){return{type:O}},Y=function(t,n){return{type:p,resource:t,data:n}},j=function(t){return{type:d,name:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"loading",value:t}},P=function(t){return{type:"DASHBOARD:DASHBOARD_LOAD_ERROR",error:t}},N=function(t,n){return{type:y,service:t,services:n}},B=function(t,n,e){return{type:S,service:t,services:n,isNew:e}},H=function(t,n){return{type:v,mode:t,isNew:n}},L=function(t,n){return{type:m,service:t,services:n}}},134990:(t,n,e)=>{"use strict";e.d(n,{D7:()=>c,mN:()=>s,vb:()=>l,KT:()=>f,QK:()=>O,cc:()=>p,Gx:()=>d,XH:()=>E,lX:()=>y,tP:()=>S,Dq:()=>v,LE:()=>m,SW:()=>D,si:()=>R,i2:()=>T,IY:()=>A,Zf:()=>g,ij:()=>b,Hb:()=>h,Mk:()=>_,c:()=>G,NZ:()=>w,Cx:()=>C,wb:()=>I,km:()=>Y,un:()=>j,Ro:()=>P,jr:()=>N,ZY:()=>B,EQ:()=>H,W$:()=>L,mk:()=>M,U3:()=>V,aF:()=>U,IH:()=>x,rp:()=>k,D_:()=>W,zJ:()=>z,wJ:()=>F,OS:()=>$,YP:()=>X,Ct:()=>Z,Od:()=>q,y6:()=>J,g5:()=>K,_e:()=>Q,DF:()=>tt,GD:()=>nt,K0:()=>et,kB:()=>rt,Xn:()=>ot,G5:()=>it,Vx:()=>ut,RZ:()=>at,pB:()=>ct,$A:()=>st,m7:()=>lt,YM:()=>ft,o2:()=>Ot,ql:()=>pt,c0:()=>dt,Fu:()=>Et,WE:()=>yt,fD:()=>St,EE:()=>vt});var r=e(747037),o=e.n(r),i=e(455877),u=e.n(i),a=e(192579),c="GEOSTORY:ADD",s="GEOSTORY:ADD_RESOURCE",l="GEOSTORY:CHANGE_MODE",f="GEOSTORY:CLEAR_SAVE_ERROR",O="GEOSTORY:EDIT_RESOURCE",p="GEOSTORY:EDIT_WEBPAGE",d="GEOSTORY:SCROLLING",E="GEOSTORY:LOAD_GEOSTORY",y="GEOSTORY:LOADING_GEOSTORY",S="GEOSTORY:MOVE",v="GEOSTORY:REMOVE",m="GEOSTORY:SAVE_STORY",D="GEOSTORY:SAVE_ERROR",R="GEOSTORY:STORY_SAVED",T="GEOSTORY:SELECT_CARD",A="GEOSTORY:SET_CONTROL",g="GEOSTORY:SET_RESOURCE",b="GEOSTORY:SET_CURRENT_STORY",h="GEOSTORY:SET_WEBPAGE_URL",_="GEOSTORY:TOGGLE_CARD_PREVIEW",G="GEOSTORY:TOGGLE_SETTINGS_PANEL",w="GEOSTORY:TOGGLE_SETTING",C="GEOSTORY:TOGGLE_CONTENT_FOCUS",I="GEOSTORY:UPDATE",Y="GEOSTORY:UPDATE_SETTING",j="GEOSTORY:UPDATE_CURRENT_PAGE",P="GEOSTORY:REMOVE_RESOURCE",N="GEOSTORY:SET_PENDING_CHANGES",B="GEOSTORY:SET_UPDATE_URL_SCROLL",H="GEOSTORY:UPDATE_MEDIA_EDITOR_SETTINGS",L="GEOSTORY:HIDE_CAROUSEL_ITEMS",M="GEOSTORY:ENABLE_DRAW",V="GEOSTORY:EXPORT",U="GEOSTORY:IMPORT",x=function(t,n,e){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(t){return t};return{type:c,id:e&&e.id||u()(),path:t,position:n,element:o()(e)&&(0,a.nq)(e,r)||e}},k=function(t,n,e){return{type:s,id:t,mediaType:n,data:e}},W=function(t){return{type:l,mode:t?a.nl.EDIT:a.nl.VIEW}},z=function(t,n,e){return{type:O,id:t,mediaType:n,data:e}},F=function(t,n){return{type:E,id:t,options:n}},$=function(t){return{type:"GEOSTORY:GEOSTORY_LOADED",id:t}},X=function(){return{type:y,value:arguments.length>0&&void 0!==arguments[0]&&arguments[0],name:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"loading"}},Z=function(t){return{type:"GEOSTORY:LOAD_GEOSTORY_ERROR",error:t}},q=function(t){return{type:v,path:t}},J=function(t){return{type:D,error:t}},K=function(t,n){return{type:A,control:t,value:n}},Q=function(t){return{type:T,card:t}},tt=function(t){return{type:g,resource:t}},nt=function(t){return{type:R,id:t}},et=function(t){return{type:b,story:t}},rt=function(){return{type:_}},ot=function(t){return{type:w,option:t}},it=function(){return{type:G,withSave:arguments.length>0&&void 0!==arguments[0]&&arguments[0]}},ut=function(t,n){return{type:I,path:t,element:n,mode:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"replace"}},at=function(t){var n=t.sectionId,e=t.columnId;return{type:j,sectionId:n,columnId:e}},ct=function(t,n,e){return{type:S,source:t,target:n,position:e}},st=function(t,n,e,r,o){return{type:C,status:t,target:n,selector:e,hideContent:r,path:o}},lt=function(t,n){return{type:Y,prop:t,value:n}},ft=function(t){return{type:h,src:t}},Ot=function(t){var n=t.path;return{type:p,path:n,owner:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GEOSTORY"}},pt=function(t,n){return{type:P,id:t,mediaType:n}},dt=function(t){return{type:N,value:t}},Et=function(t){return{type:H,mediaEditorSettings:t}},yt=function(t){return{type:d,status:t}},St=function(t,n){return{type:L,sectionId:t,showContentId:n}},vt=function(t){return{type:M,drawOptions:t}}},55237:(t,n,e)=>{"use strict";e.d(n,{tr:()=>R,jb:()=>T,Xu:()=>A,un:()=>g,Qn:()=>b,_q:()=>h,og:()=>_,$4:()=>G,kN:()=>w,oD:()=>C,V$:()=>I,uH:()=>Y,pC:()=>j,tz:()=>P,p:()=>N});var r=e(747037),o=e.n(r),i=e(647960),u=e.n(i),a=e(227361),c=e.n(a),s=e(984596),l=e.n(s),f=e(730381),O=e.n(f),p=e(86638);function d(t){return function(t){if(Array.isArray(t))return S(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||y(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,o,i,u,a=[],c=!0,s=!1;try{if(i=(e=e.call(t)).next,0===n){if(Object(e)!==e)return;c=!1}else for(;!(c=(r=i.call(e)).done)&&(a.push(r.value),a.length!==n);c=!0);}catch(t){s=!0,o=t}finally{try{if(!c&&null!=e.return&&(u=e.return(),Object(u)!==u))return}finally{if(s)throw o}}return a}}(t,n)||y(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,n){if(t){if("string"==typeof t)return S(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?S(t,n):void 0}}function S(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var v=/PT?[\d\.]+[YMWDHMS]/,m=function(t){return t?o()(t)?new Date(t).getTime():(u()(t)&&t.getTime(),t):null},D=function(t){var n=t.start,e=t.end,r=t.duration,o=O().duration(r).asMilliseconds();return(new Date(e).getTime()-new Date(n).getTime())/o},R=function(t){for(var n=t.start,e=t.end,r=t.duration,o=O().duration(r).asMilliseconds(),i=[],u=new Date(n),a=new Date(e);u<=a;)i.push(new Date(u).toISOString()),u.setTime(u.getTime()+o);return i},T=function(t){var n=t.start,e=t.end,r=t.duration;return R({start:n,end:e,duration:r}).map((function(t){return{start:new Date(t),end:new Date(new Date(t).getTime()+O().duration(r).asMilliseconds())}}))},A=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.start,e=t.end,r=t.duration,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=o.start,u=o.end;if(!i||!u)return{count:D({start:n,end:e,duration:r}),start:n,end:e};var a=O().duration(r).asMilliseconds(),c=new Date(n).getTime(),s=new Date(e).getTime(),l=new Date(i).getTime(),f=new Date(u).getTime(),p=Math.ceil((l-c)/a),d=Math.floor((f-c)/a),E=Math.floor((s-c)/a);if(p>=0&&d<=E){var y=d-p;return{start:new Date(c+Math.max(0,p)*a),end:new Date(c+Math.min(E,d)*a),count:y}}return{count:D({start:n,end:e,duration:r}),start:n,end:e}},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.start,e=t.end,r=arguments.length>1?arguments[1]:void 0,o=new Date(n),i=new Date(e),u=Math.floor(i.getTime()-o.getTime())/r;return{range:{start:n,end:e},resolution:O().duration(u).toISOString().match(v)[0]}},b=function(){var t,n,e=arguments.length>1?arguments[1]:void 0,r=(t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],(n=arguments.length>2?arguments[2]:void 0)?t.map((function(t){var e=E(t.split("/"),2);return{start:e[0],end:e[1]}[n]})):t);return r[function(t,n){var e=m(n),r=1/0,o=-1;return t.forEach((function(t,n){var i=m(t),u=Math.abs(i-e);u<r&&(r=u,o=n)})),o}(r,e)]},h=function(t){return t&&t.indexOf&&t.indexOf("--")>0},_=function(t,n){var e=O()(t).diff(n);return{start:e>=0?n:t,end:e>=0?t:n}},G=function(t){return 6e4*t.getTimezoneOffset()},w=function(t){var n=t;!u()(t)&o()(t)&&(n=new Date(t));var e=n.getUTCHours();e=e<10?"0"+e:e;var r=n.getUTCMinutes();r=r<10?"0"+r:r;var i=n.getUTCSeconds();return i=i<10?"0"+i:i,"".concat(e,":").concat(r,":").concat(i)},C=function(t){var n=t;!u()(t)&o()(t)&&(n=new Date(t));var e=n.getUTCMonth()+1,r=n.getUTCDate();return e=e<10?"0"+e:e,r=r<10?"0"+r:r,"".concat(n.getUTCFullYear(),"-").concat(e,"-").concat(r)},I=function(t,n){var e=(0,p.mh)(t),r="HH:mm:SS";switch(n){case"time":return r;case"date":return e;default:return e+" "+r}},Y=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).Domains,n=void 0===t?{}:t,e=arguments.length>1?arguments[1]:void 0,r=l()(n.DimensionDomain||[]).concat(),o=n["@version"]||n.version,i=c()(n,"SpaceDomain.BoundingBox");return i&&r.push({Identifier:"space",Domain:i}),r.map((function(t){var n=t.Identifier,r=t.Domain;return{source:{type:"multidim-extension",version:o,url:e},name:n,domain:r}}))},j=function(t,n,e){var r=m(n),o=m(e);return t.reduce((function(t,n){var e=m(n);return m(r)<e&&m(o)>e?[].concat(d(t),[n]):d(t)}),[])},P=function(t){var n=t.reduce((function(t,n){if(-1!==n.indexOf("/")){var e=E(n.split("/"),2),r=e[0],o=e[1];return[].concat(d(t),[r,o])}return[].concat(d(t),[n])}),[]).sort();return[n[0],n[n.length-1]]},N=function(t,n,e){var r=O()(t);return("add"===e?r.add(n,"seconds"):r.subtract(n,"seconds")).toISOString()}},73443:(t,n,e)=>{"use strict";e.d(n,{rs:()=>r,AY:()=>o,SW:()=>i,yB:()=>u,oG:()=>a,oz:()=>c,id:()=>s,gc:()=>l,cE:()=>f,rG:()=>O,Vj:()=>p,nY:()=>d});var r="GEONODE:SAVING_RESOURCE",o="GEONODE:SAVE_SUCCESS",i="GEONODE:SAVE_ERROR",u="GEONODE:CLEAR_SAVE",a="GEONODE:SAVE_CONTENT",c="GEONODE:SAVE_DIRECT_CONTENT";function s(){return{type:r}}function l(t){return{type:o,success:t}}function f(t){return{type:i,error:t}}function O(){return{type:u}}function p(t,n,e,r){return{type:a,id:t,metadata:n,reload:e,showNotifications:r}}function d(){return{type:c}}},535188:(t,n,e)=>{"use strict";e.r(n),e.d(n,{ConnectedSyncButton:()=>V,default:()=>U});var r=e(124852),o=e.n(r),i=e(675263),u=e.n(i),a=e(171703),c=e(22222),s=e(322843),l=e(805346),f=e(303744),O=e(274621),p=e(49977),d=e(375875),E=e.n(d),y=e(682492),S=e.n(y),v=e(944908),m=e.n(v),D="GEONODE:SYNC_RESOURCES",R=e(73443),T=e(76907),A=e(337326),g=e(134990),b=e(197395),h=e(535721),_=e(367306),G=e(555927);function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function C(t){return function(t){if(Array.isArray(t))return Y(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||I(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(t,n){if(t){if("string"==typeof t)return Y(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Y(t,n):void 0}}function Y(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function j(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function P(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?j(Object(e),!0).forEach((function(n){var r,o,i;r=t,o=n,i=e[n],(o=function(t){var n=function(t,n){if("object"!==w(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===w(n)?n:String(n)}(o))in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):j(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var N=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if("geostory"===t){var r=n.subtype||n.resource_type;return{type:r,data:"map"!==r?(0,h.R1)(n,n):(0,h.F0)(n)}}if("dashboard"===t){var o,i=null===(o=n.widgets)||void 0===o?void 0:o.map((function(t){if("map"===t.widgetType&&t.maps)return P(P({},t),{},{maps:t.maps.map((function(t){var n=e.find((function(n){var e;return!(n.data.pk!==(null==t||null===(e=t.extraParams)||void 0===e?void 0:e.pk))}));return n?P(P({},t),n.data.data.map):t}))});var n=e.find((function(n){var e,r;return!(n.data.pk!==(null===(e=t.map)||void 0===e||null===(r=e.extraParams)||void 0===r?void 0:r.pk))}));return n?P(P({},t),{},{map:P(P({},t.map),n.data.data.map)}):t}));return{data:S()(n,{widgets:i})}}return{}};const B={gnSyncComponentsWithResources:function(t,n){return t.ofType(D).switchMap((function(){var t=n.getState(),e=(0,T.L4)(t),r=function(t,n){switch(t){case"geostory":return(0,T.hs)(n);case"dashboard":return(0,T.sF)(n);default:return[]}}(e,t),o=m()(r.maps||[]),i=m()(r.documents||[]);return p.Observable.defer((function(){return E().all([o.length>0?(0,A.zV)(o).then((function(t){return t})).catch((function(){return[]})):Promise.resolve([]),i.length>0?(0,A.gU)(i).then((function(t){return t})).catch((function(){return[]})):Promise.resolve([])]).then((function(t){var n,e,r=(e=2,function(t){if(Array.isArray(t))return t}(n=t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,o,i,u,a=[],c=!0,s=!1;try{if(i=(e=e.call(t)).next,0===n){if(Object(e)!==e)return;c=!1}else for(;!(c=(r=i.call(e)).done)&&(a.push(r.value),a.length!==n);c=!0);}catch(t){s=!0,o=t}finally{try{if(!c&&null!=e.return&&(u=e.return(),Object(u)!==u))return}finally{if(s)throw o}}return a}}(n,e)||I(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=r[0],a=r[1];return[].concat(C(o.map((function(t){var n=u.find((function(n){return n.pk===t}));return n?{data:n,status:"success",title:n.title}:{status:"error",title:"map/".concat(t)}}))),C(i.map((function(t){var n=a.find((function(n){return n.pk===t}));return n?{data:n,status:"success",title:n.title}:{status:"error",title:"document/".concat(t)}}))))}))})).switchMap((function(n){var r,o,i=n.filter((function(t){return"error"===t.status})),u=n.filter((function(t){return"success"===t.status})),a=function(){if(0===u.length)return[];if("geostory"===e)return u.map((function(t){var n=t.data,e=N("geostory",n),r=e.type,o=e.data;return(0,g.zJ)(n.pk,r,o)}));if("dashboard"===e){var n=(0,_.hS)(t),r=N("dashboard",n,u).data;return[(0,G.rR)((0,_.NB)(t),r)]}return[]}(),c=function(t,n,e){var r="Success";return t>0&&n>0?r="Warning":0===t&&n>0?r="Success":t>0&&0===n&&(r="Error"),{level:r.toLowerCase(),title:"gnviewer.sync".concat(r).concat("Warning"!==r?e:"","Title"),message:"gnviewer.sync".concat(r,"Message")}}(i.length,u.length,e),s=c.level,l=c.title,f=c.message;return p.Observable.of.apply(p.Observable,C(a).concat([(0,R.gc)(),(0,b.$Z)({title:l,message:f,values:{successTitles:null===(r=u.map((function(t){return t.title})))||void 0===r?void 0:r.join(", "),errorTitles:null===(o=i.map((function(t){return t.title})))||void 0===o?void 0:o.join(", ")}},s)]))})).catch((function(t){var n,e;return p.Observable.of((0,R.gc)(),(0,b.vU)({title:"gnviewer.syncErrorTitle",message:(null==t||null===(n=t.data)||void 0===n?void 0:n.detail)||(null==t||null===(e=t.originalError)||void 0===e?void 0:e.message)||(null==t?void 0:t.message)||"gnviewer.syncErrorDefault"}))})).startWith((0,R.id)())}))}};function H(t){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(t)}function L(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function M(t){var n=t.synchronize,e=t.enabled,r=t.size;return e&&o().createElement(f.Z,{variant:"primary",size:r,onClick:function(){return n()}},o().createElement(l.Z,{msgId:"gnviewer.sync"}))}M.contextTypes={synchronize:u().func};var V=(0,a.connect)((0,c.P1)(O.jl,(function(t){return{enabled:t}})),{synchronize:function(){return{type:D}}})(M);const U=(0,s.rx)("Sync",{component:V,containers:{ActionNavbar:{name:"Sync",priority:1}},epics:function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?L(Object(e),!0).forEach((function(n){var r,o,i;r=t,o=n,i=e[n],(o=function(t){var n=function(t,n){if("object"!==H(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!==H(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===H(n)?n:String(n)}(o))in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):L(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({},B),reducers:{}})},887157:(t,n,e)=>{var r=e(640554),o=e(588958);t.exports=function(t,n,e,i){var u=t.length;for((e=r(e))<0&&(e=-e>u?0:u+e),(i=void 0===i||i>u?u:r(i))<0&&(i+=u),i=e>i?0:o(i);e<i;)t[e++]=n;return t}},580760:(t,n,e)=>{var r=e(989881);t.exports=function(t,n){var e=[];return r(t,(function(t,r,o){n(t,r,o)&&e.push(t)})),e}},441761:(t,n,e)=>{var r=e(644239),o=e(637005);t.exports=function(t){return o(t)&&"[object Date]"==r(t)}},389179:(t,n,e)=>{var r=e(555639),o=e(640554),i=e(14841),u=e(479833),a=r.isFinite,c=Math.min;t.exports=function(t){var n=Math[t];return function(t,e){if(t=i(t),(e=null==e?0:c(o(e),292))&&a(t)){var r=(u(t)+"e").split("e"),s=n(r[0]+"e"+(+r[1]+e));return+((r=(u(s)+"e").split("e"))[0]+"e"+(+r[1]-e))}return n(t)}}},819873:(t,n,e)=>{var r=e(887157),o=e(816612);t.exports=function(t,n,e,i){var u=null==t?0:t.length;return u?(e&&"number"!=typeof e&&o(t,n,e)&&(e=0,i=u),r(t,n,e,i)):[]}},763105:(t,n,e)=>{var r=e(234963),o=e(580760),i=e(267206),u=e(701469);t.exports=function(t,n){return(u(t)?r:o)(t,i(n,3))}},647960:(t,n,e)=>{var r=e(441761),o=e(307518),i=e(531167),u=i&&i.isDate,a=u?o(u):r;t.exports=a},313880:(t,n,e)=>{var r=e(479833);t.exports=function(){var t=arguments,n=r(t[0]);return t.length<3?n:n.replace(t[1],t[2])}},59854:(t,n,e)=>{var r=e(389179)("round");t.exports=r},588958:(t,n,e)=>{var r=e(829750),o=e(640554);t.exports=function(t){return t?r(o(t),0,4294967295):0}}}]);