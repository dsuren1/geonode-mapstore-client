(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[50309],{580416:(e,t,n)=>{"use strict";n.d(t,{yS:()=>r,Zz:()=>o,ms:()=>u,ih:()=>i,OX:()=>l,sb:()=>c,K$:()=>s,k7:()=>p,cX:()=>y,x9:()=>E,vs:()=>m,oE:()=>A,Po:()=>f,qv:()=>d,cI:()=>O,g6:()=>S,I4:()=>_,l$:()=>N,Xv:()=>T,k3:()=>R,CQ:()=>I,R8:()=>L,HN:()=>v,sH:()=>P,c7:()=>b,_7:()=>g,eF:()=>M,O6:()=>D,ED:()=>h,RP:()=>C,sF:()=>Y,VP:()=>H,He:()=>G,vO:()=>U,WO:()=>x,bh:()=>w,pV:()=>Z,MK:()=>k,ZF:()=>F,tV:()=>V,Dv:()=>W,Yz:()=>X,kI:()=>j,XG:()=>B,A4:()=>$,Rp:()=>J,$o:()=>K,ct:()=>q,oh:()=>z,$h:()=>Q,ud:()=>ee,Qr:()=>te,LR:()=>ne,nN:()=>re,UG:()=>oe,F5:()=>ue,c9:()=>ie,Jh:()=>ae,Xy:()=>le});var r="CHANGE_LAYER_PROPERTIES",o="LAYERS:CHANGE_LAYER_PARAMS",u="CHANGE_GROUP_PROPERTIES",i="TOGGLE_NODE",a="CONTEXT_NODE",l="SORT_NODE",c="REMOVE_NODE",s="UPDATE_NODE",p="MOVE_NODE",y="LAYER_LOADING",E="LAYER_LOAD",m="LAYER_ERROR",A="ADD_LAYER",f="ADD_GROUP",d="REMOVE_LAYER",O="SHOW_SETTINGS",S="HIDE_SETTINGS",_="UPDATE_SETTINGS",N="REFRESH_LAYERS",T="LAYERS:UPDATE_LAYERS_DIMENSION",R="LAYERS_REFRESHED",I="LAYERS_REFRESH_ERROR",L="LAYERS:BROWSE_DATA",v="LAYERS:DOWNLOAD",P="LAYERS:CLEAR_LAYERS",b="LAYERS:SELECT_NODE",g="LAYERS:FILTER_LAYERS",M="LAYERS:SHOW_LAYER_METADATA",D="LAYERS:HIDE_LAYER_METADATA",h="LAYERS:UPDATE_SETTINGS_PARAMS";function C(e,t,n){return{type:O,node:e,nodeType:t,options:n}}function Y(){return{type:S}}function H(e){return{type:_,options:e}}function G(e,t){return{type:r,newProperties:t,layer:e}}function U(e,t){return{type:o,layer:e,params:t}}function x(e,t){return{type:u,newProperties:t,group:e}}function w(e,t,n){return{type:i,node:e,nodeType:t,status:!n}}function Z(e){return{type:a,node:e}}function k(e,t){return{type:l,node:e,order:t,sortLayers:arguments.length>2&&void 0!==arguments[2]?arguments[2]:null}}function F(e,t){return{type:c,node:e,nodeType:t,removeEmpty:arguments.length>2&&void 0!==arguments[2]&&arguments[2]}}function V(e,t,n){return{type:s,node:e,nodeType:t,options:n}}function W(e,t,n){return{type:p,node:e,groupId:t,index:n}}function X(e){return{type:y,layerId:e}}function j(e,t){return{type:E,layerId:e,error:t}}function B(e,t,n){return{type:m,layerId:e,tilesCount:t,tilesErrorCount:n}}function $(e){return{type:A,layer:e,foreground:!(arguments.length>1&&void 0!==arguments[1])||arguments[1]}}function J(e,t,n){return{type:f,group:e,parent:t,options:n,asFirst:arguments.length>3&&void 0!==arguments[3]&&arguments[3]}}function K(e){return{type:d,layerId:e}}function q(e,t){return{type:r,layer:e,newProperties:{_v_:t||(new Date).getTime()}}}function z(e){return{type:R,layers:e}}function Q(e,t){return{type:I,layers:e,error:t}}function ee(e,t,n,r){return{type:T,dimension:e,value:t,options:n,layers:r}}function te(e){return{type:L,layer:e}}function ne(e){return{type:v,layer:e}}function re(){return{type:P}}function oe(e,t,n){return{type:b,id:e,nodeType:t,ctrlKey:n}}function ue(e){return{type:g,text:e}}function ie(e,t){return{type:M,metadataRecord:e,maskLoading:t}}function ae(){return{type:D}}function le(e,t){return{type:h,newParams:e,update:t}}},801550:(e,t,n)=>{"use strict";n.d(t,{pP:()=>r,TR:()=>o,N7:()=>u,mq:()=>i,uv:()=>a,Qy:()=>l,IL:()=>c,Li:()=>s,OW:()=>p,ZO:()=>y,Um:()=>E,TF:()=>m,Ls:()=>A,Ec:()=>f,Eu:()=>d,JJ:()=>O,nZ:()=>S,YD:()=>_,GI:()=>N,Jb:()=>T,Uh:()=>R,e$:()=>I,eh:()=>L,$j:()=>v,bJ:()=>P,Mk:()=>b,xy:()=>g,o6:()=>M,NH:()=>D,FP:()=>h,Mo:()=>C,sO:()=>Y,Px:()=>H,hd:()=>G,y9:()=>U,Ju:()=>x,BV:()=>w,SO:()=>Z,H0:()=>k,$X:()=>F,ou:()=>V,NE:()=>W,Lq:()=>X,aN:()=>j});var r="CHANGE_MAP_VIEW",o="CLICK_ON_MAP",u="CHANGE_MOUSE_POINTER",i="CHANGE_ZOOM_LVL",a="PAN_TO",l="ZOOM_TO_EXTENT",c="ZOOM_TO_POINT",s="CHANGE_MAP_CRS",p="CHANGE_MAP_SCALES",y="CHANGE_MAP_STYLE",E="CHANGE_ROTATION",m="CREATION_ERROR_LAYER",A="UPDATE_VERSION",f="INIT_MAP",d="RESIZE_MAP",O="CHANGE_MAP_LIMITS",S="SET_MAP_RESOLUTIONS",_="REGISTER_EVENT_LISTENER",N="UNREGISTER_EVENT_LISTENER",T="MOUSE_MOVE",R="MOUSE_OUT",I="MAP:MAP_PLUGIN_LOAD",L="MAP:ORIENTATION",v="MAP:UPDATE_MAP_VIEW",P="MAP:UPDATE_MAP_OPTIONS";function b(e,t,n,r){return{type:I,mapType:t,loading:e,loaded:n,error:r}}function g(e,t,n){return{type:c,pos:e,zoom:t,crs:n}}function M(e,t,n,o,u,i,a,l){return{type:r,center:e,zoom:t,bbox:n,size:o,mapStateSource:u,projection:i,viewerOptions:a,resolution:l}}function D(e){return{type:s,crs:e}}function h(e,t){return{type:o,point:e,layer:t}}function C(e){return{type:u,pointer:e}}function Y(e,t){return{type:i,zoom:e,mapStateSource:t}}function H(e,t,n,r){return{type:l,extent:e,crs:t,maxZoom:n,options:r}}function G(e,t){return{type:y,style:e,mapStateSource:t}}function U(e){return{type:f,disableFeedbackMask:e}}function x(){return{type:d}}function w(e){var t=e.restrictedExtent,n=e.crs,r=e.minZoom;return{type:O,restrictedExtent:t,crs:n,minZoom:r}}function Z(e){return{type:S,resolutions:e}}var k=function(e,t){return{type:_,eventName:e,toolName:t}},F=function(e,t){return{type:N,eventName:e,toolName:t}},V=function(e){return{type:T,position:e}},W=function(){return{type:R}},X=function(e){return{type:L,orientation:e}},j=function(e){return{type:P,configUpdate:e}}},12440:(e,t,n)=>{"use strict";n.d(t,{p5:()=>r,aW:()=>o,kn:()=>u,br:()=>i,aE:()=>a,vm:()=>l,H4:()=>c,_p:()=>s,_H:()=>p,j7:()=>y,wg:()=>E,qQ:()=>m,K4:()=>A,_W:()=>f,Jd:()=>d,wD:()=>O,bM:()=>S,yW:()=>_});var r="IMPORT::SET_LAYERS",o="IMPORT::ON_ERROR",u="IMPORT::ON_SELECT_LAYER",i="IMPORT::LOADING",a="IMPORT::ON_LAYER_ADDED",l="IMPORT::UPDATE_BBOX",c="IMPORT::ON_SUCCESS",s="ON_SHAPE_ERROR",p="IMPORT::ON_LAYER_SKIPPED";function y(e,t){return{type:r,layers:e,errors:t}}function E(e){return{type:u,layer:e}}function m(e){return{type:o,error:e}}function A(e){return{type:i,status:e}}function f(e){return{type:a,layer:e}}function d(e){return{type:l,bbox:e}}function O(e){return{type:c,message:e}}function S(e){return{type:s,message:e}}function _(e){return{type:p,layer:e}}},442416:(e,t,n)=>{"use strict";n.d(t,{H:()=>r,q:()=>o});var r="SET_STYLE_PARAMETER";function o(e,t){return{type:r,name:e,value:t}}},14281:(e,t,n)=>{"use strict";n.d(t,{A1:()=>r,HN:()=>o,Bm:()=>u,CD:()=>i,eY:()=>a,bI:()=>l,Rr:()=>c,DX:()=>s,e7:()=>p,QN:()=>y,Nd:()=>E,VR:()=>m,LR:()=>A,wP:()=>f,A9:()=>d,pC:()=>O,L0:()=>S,Hl:()=>_,_x:()=>N,x$:()=>T,Dm:()=>R,ym:()=>I});var r="ANNOTATIONS:EDIT",o="ANNOTATIONS:DOWNLOAD",u="ANNOTATIONS:LOAD_ANNOTATIONS",i="ANNOTATIONS:NEW",a="ANNOTATIONS:CLOSE",l="ANNOTATIONS:CONFIRM_CLOSE",c="ANNOTATIONS:CANCEL_CLOSE",s="ANNOTATIONS:REMOVE",p="ANNOTATIONS:STORE_SESSION",y="ANNOTATIONS:MERGE_FEATURES",E="ANNOTATIONS:SELECT_FEATURE",m=function(e){return{type:r,id:e}},A=function(e){return{type:o,annotations:e}},f=function(e){return{type:u,features:e,override:arguments.length>1&&void 0!==arguments[1]&&arguments[1]}},d=function(){return{type:i}},O=function(){return{type:a}},S=function(e){return{type:l,layer:e}},_=function(){return{type:c}},N=function(e){return{type:s,id:e}},T=function(e){return{type:p,session:e}},R=function(e,t){return{type:y,id:e,annotation:t}},I=function(e){return{type:E,id:e}}},902054:(e,t,n)=>{"use strict";n.d(t,{sB:()=>i,Yu:()=>a,F3:()=>l,cM:()=>c,Gu:()=>s,qs:()=>p});var r=n(22222),o=n(675110),u=n(900012),i=(0,r.P1)([o.l2],(function(e){return e.find(u.cO)})),a=(0,r.P1)([o.l2],(function(e){return e.filter(u.cO)})),l=function(e){var t=(0,o.Iz)(e);return t&&(0,u.cO)(t)?t:null},c=function(e){var t;return null==e||null===(t=e.annotations)||void 0===t?void 0:t.editing},s=function(e){var t;return null==e||null===(t=e.annotations)||void 0===t?void 0:t.session},p=function(e){var t;return null==e||null===(t=e.annotations)||void 0===t?void 0:t.featureId}},420080:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>O});var r=n(124852),o=n.n(r),u=n(171703),i=n(481756),a=n(12440),l=n(197395),c=n(801550),s=n(580416),p=n(14281),y=n(902054),E=n(782904),m=n(727418),A=n.n(m),f=n(480681),d=n(93152);const O={MapImportPlugin:A()({loadPlugin:function(e){Promise.all([n.e(17621),n.e(72986),n.e(85294),n.e(72555),n.e(20),n.e(89465),n.e(39464),n.e(55033),n.e(9886),n.e(66287),n.e(64830),n.e(27021)]).then(n.bind(n,792350)).then((function(t){var n=t.default,r=(0,u.connect)((function(e){return{enabled:e.controls&&e.controls.mapimport&&e.controls.mapimport.enabled,layers:e.mapimport&&e.mapimport.layers||null,selected:e.mapimport&&e.mapimport.selected||null,bbox:e.mapimport&&e.mapimport.bbox||null,success:e.mapimport&&e.mapimport.success||null,errors:e.mapimport&&e.mapimport.errors||null,shapeStyle:e.style||{},mapType:(0,d.$v)(e),annotationsLayer:(0,y.sB)(e)}}),{setLayers:a.j7,onLayerAdded:a._W,onLayerSkipped:a.yW,onSelectLayer:a.wg,onError:a.qQ,onSuccess:a.wD,addLayer:s.A4,loadAnnotations:p.wP,onZoomSelected:c.Px,updateBBox:a.Jd,setLoading:a.K4,onClose:E.Xi.bind(null,"mapimport",null),warning:l.Kp})(n);e(r)}))},enabler:function(e){return e.mapimport&&e.mapimport.enabled||e.toolbar&&"import"===e.toolbar.active}},{BurgerMenu:{name:"import",position:4,text:o().createElement(i.Z,{msgId:"mapImport.title"}),tooltip:"mapImport.tooltip",icon:o().createElement(f.Glyphicon,{glyph:"upload"}),action:E.Xi.bind(null,"mapimport",null),priority:2,doNotHide:!0},SidebarMenu:{name:"mapimport",position:4,tooltip:"mapImport.tooltip",text:o().createElement(i.Z,{msgId:"mapImport.title"}),icon:o().createElement(f.Glyphicon,{glyph:"upload"}),action:E.Xi.bind(null,"mapimport",null),toggle:!0,priority:1,doNotHide:!0}}),reducers:{mapimport:n(183807).Z,style:n(318323).Z}}},481756:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(171703),o=n(805346);const u=(0,r.connect)((function(e){return{locale:e.locale&&e.locale.currentLocale,messages:e.locale&&e.locale.messages||[]}}))(o.Z)},183807:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(12440),o=n(187185),u=n.n(o),i=n(782904),a=n(727418),l=n.n(a);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s={layers:null,errors:null,loading:!1,selected:null,bbox:[190,190,-190,-190]};const p=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case r._p:return l()({},t,{error:n.message,success:null});case r.p5:var o=n.layers&&n.layers[0]?n.layers[0]:null,a=n.layers?n.errors:null;return l()({},t,{layers:n.layers,selected:o,bbox:[190,190,-190,-190],errors:a},o?{}:{success:null});case r.aW:return l()({},t,{errors:u()([].concat((e=t.errors||[],function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),[n.error]),(function(e,t){return(e.name&&e.name===t.name||e.filename&&e.filename===t.fileName)&&e.message===t.message})),success:null});case r.br:return l()({},t,{loading:n.status});case r.kn:return l()({},t,{selected:n.layer});case r.aE:var p=t.layers.filter((function(e){return n.layer.name!==e.name}),this),y=p&&p[0]?p[0]:null;return l()({},t,{layers:p,selected:y},y?{}:{bbox:[190,190,-190,-190]});case r.vm:return l()({},t,{bbox:n.bbox});case r.H4:return l()({},t,{success:n.message,errors:null,error:null});case i.kM:return"shapefile"===n.control?l()({},t,{errors:null,success:null}):t;case r._H:var E=t.layers.filter((function(e){return n.layer.name!==e.name}),this),m=E&&E[0]?E[0]:null;return l()({},t,{layers:E,selected:m,success:null});default:return t}}},318323:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(442416),o=n(727418),u=n.n(o);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}var a={color:{r:0,g:0,b:255,a:1},width:3,fill:{r:0,g:0,b:255,a:.1},radius:10,marker:!1};const l=function(){var e,t,n,o,l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,c=arguments.length>1?arguments[1]:void 0;return c.type===r.H?u()({},l,(e={},t=c.name,n=c.value,o=function(e,t){if("object"!=i(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t),(t="symbol"==i(o)?o:String(o))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e)):l}}}]);