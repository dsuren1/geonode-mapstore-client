"use strict";(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[23794],{643892:(e,n,t)=>{t.d(n,{W:()=>E,Zf:()=>r,Eu:()=>o,Vy:()=>u,YB:()=>O,xm:()=>i,_f:()=>a,ek:()=>c,cd:()=>l,pt:()=>R,ww:()=>_,tR:()=>s,Js:()=>p,p2:()=>d,ZH:()=>S,eQ:()=>N,ql:()=>D,$X:()=>T,nS:()=>f,ih:()=>y,J5:()=>C,uA:()=>G,Pv:()=>I,_Z:()=>U,dh:()=>m,IH:()=>v,e3:()=>A,Oq:()=>w,Y0:()=>g,sA:()=>P,ip:()=>b,li:()=>L,F_:()=>M,um:()=>h,Q$:()=>k,DF:()=>Z,id:()=>B,Br:()=>W,bI:()=>F,U5:()=>H,e5:()=>V,b3:()=>j,mN:()=>x,QN:()=>Q,HV:()=>Y,xe:()=>q,vA:()=>z,gw:()=>K,qs:()=>X,CB:()=>J,vg:()=>$,Z0:()=>ee,lf:()=>ne,jQ:()=>te,nk:()=>Ee,X7:()=>re,nO:()=>oe,F4:()=>ue,EU:()=>Oe,Rk:()=>ie,V1:()=>ae,rg:()=>ce,v6:()=>le,d7:()=>Re,Rx:()=>_e,as:()=>se,jv:()=>pe});var E="GEONODE:RESOURCE_LOADING",r="GEONODE:SET_RESOURCE",o="GEONODE:RESOURCE_ERROR",u="GEONODE:UPDATE_RESOURCE_PROPERTIES",O="GEONODE:SET_RESOURCE_TYPE",i="GEONODE:SET_NEW_RESOURCE",a="GEONODE:SET_RESOURCE_ID",c="GEONODE:SET_RESOURCE_PERMISSIONS",l="GEONODE:EDIT_TITLE_RESOURCE",R="GEONODE:EDIT_ABSTRACT_RESOURCE",_="GEONODE:EDIT_THUMBNAIL_RESOURCE",s="GEONODE:SET_FAVORITE_RESOURCE",p="GEONODE:SET_MAP_THUMBNAIL",d="GEONODE:SET_SELECTED_DATASET_PERMISSIONS",S="GEONODE:REQUEST_RESOURCE_CONFIG",N="GEONODE:REQUEST_NEW_RESOURCE_CONFIG",D="GEONODE:LOADING_RESOURCE_CONFIG",T="GEONODE:RESET_RESOURCE_STATE",f="GEONODE:RESOURCE_CONFIG_ERROR",y="GEONODE:SET_RESOURCE_COMPACT_PERMISSIONS",C="GEONODE:UPDATE_RESOURCE_COMPACT_PERMISSIONS",G="GEONODE:RESET_GEO_LIMITS",I="GEONODE:PROCESS_RESOURCES",U="GEONODE_SET_RESOURCE_THUMBNAIL",m="GEONODE_ENABLE_MAP_THUMBNAIL_VIEWER",v="GEONODE_DOWNLOAD_RESOURCE",A="GEONODE_DOWNLOAD_COMPLETE",w="GEONODE_UPDATE_SINGLE_RESOURCE",g="GEONODE_SET_RESOURCE_EXTENT",P="GEONODE:SET_RESOURCE_PATH_PARAMETERS",b="GEONODE:SET_MAP_VIEWER_LINKED_RESOURCE",L="GEONODE:MANAGE_LINKED_RESOURCE",M="GEONODE:SET_DEFAULT_VIEWER_PLUGINS",h="GEONODE:SET_SELECTED_LAYER";function k(){return{type:E}}function Z(e,n){return{type:r,data:e,pending:n}}function B(e){return{type:w,data:e}}function W(e){return{type:l,title:e}}function F(e){return{type:R,abstract:e}}function H(e){return{type:_,thumbnailUrl:e,thumbnailChanged:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"false"}}function V(){return{type:U}}function j(e){return{type:O,resourceType:e}}function x(e){return{type:o,error:e}}function Q(e){return{type:u,properties:e}}function Y(){return{type:i}}function q(e){return{type:a,id:e}}function z(e){return{type:d,permissions:e}}function K(e){return{type:s,favorite:e}}function X(e){return{type:m,enabled:e}}function J(e){return{type:p,bbox:e}}function $(e,n,t){return{type:S,resourceType:e,pk:n,options:t}}function ee(e,n){return{type:N,resourceType:e,options:n}}function ne(e){return{type:D,loading:e}}function te(e){return{type:f,message:e}}function Ee(){return{type:T}}function re(e){return{type:y,compactPermissions:e}}function oe(e){return{type:C,compactPermissions:e}}function ue(){return{type:G}}function Oe(e,n,t){return{type:I,processType:e,resources:n,redirectTo:t}}function ie(e){return{type:v,resource:e}}function ae(e){return{type:A,resource:e}}function ce(e){return{type:g,coords:e}}function le(e){return{type:P,params:e}}function Re(e){return{type:L,payload:e}}function _e(e){return{type:b,resource:e}}function se(e){return{type:M,plugins:e}}function pe(e){return{type:h,layer:e}}},629987:(e,n,t)=>{t.d(n,{Z:()=>O});var E=t(124852),r=t.n(E),o=t(271418);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var E in t)({}).hasOwnProperty.call(t,E)&&(e[E]=t[E])}return e},u.apply(null,arguments)}o.Lt.Item=o.sN,o.Lt.Divider=function(e){return r().createElement(o.sN,u({},e,{divider:!0}))};const O=o.Lt},539236:(e,n,t)=>{t.r(n),t.d(n,{default:()=>y});var E=t(124852),r=t.n(E),o=t(171703),u=t(22222),O=t(441609),i=t.n(O),a=t(322843),c=t(535721),l=t(805346),R=t(638323),_=t(815135),s=t(629987),p=t(507412),d=t(299392),S=t(643892),N=t(452992);function D(){return D=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var E in t)({}).hasOwnProperty.call(t,E)&&(e[E]=t[E])}return e},D.apply(null,arguments)}var T={button:(0,_.Z)(R.Z),menuItem:s.Z.Item},f=(0,o.connect)((0,u.P1)([d.yK,N.WB],(function(e,n){return{resourceData:e,downloading:n}})),{onAction:S.Rk})((function(e){var n,t,E=e.resource,o=e.resourceData,u=e.variant,O=e.size,a=e.onAction,R=void 0===a?function(){}:a,_=e.renderType,s=void 0===_?"button":_,d=e.showIcon,S=e.downloading,N=T[s],f="menuItem"!==s,y=null!=E?E:o,C=(0,c.Yo)(y),G=(0,c.v0)(y),I=!Boolean(null==C?void 0:C.ajaxSafe);return i()(null==y?void 0:y.download_urls)&&(null==y||null===(n=y.perms)||void 0===n||!n.includes("download_resourcebase"))||null==y||null===(t=y.perms)||void 0===t||!t.includes("download_resourcebase")||!f&&I||[c.Wv.REST_MAP,c.Wv.REST_IMG].includes(null==y?void 0:y.ptype)?null:I?C.url?r().createElement(N,D({},f&&{variant:u,size:O},d&&{tooltipId:"gnviewer.download"},{download:!0,href:C.url,target:"_blank",rel:"noopener noreferrer"}),d?r().createElement(p.Z,{name:G?"external-link":"download"}):r().createElement(l.Z,{msgId:"gnviewer.download"})):null:r().createElement(N,D({disabled:!!S,onClick:function(){return S?null:R(y)}},f&&{variant:u,size:O},d&&{tooltipId:"gnviewer.download"}),d?r().createElement(p.Z,{name:"download"}):r().createElement(l.Z,{msgId:"gnviewer.download"}))}));const y=(0,a.rx)("DownloadResource",{component:f,containers:{ActionNavbar:{name:"DownloadResource",Component:f,priority:1},ResourcesGrid:{name:"downloadResource",target:"cardOptions",detailsToolbar:!0,Component:f,priority:1},DetailViewer:{name:"DownloadResource",target:"toolbar",Component:f,priority:1}},epics:{},reducers:{}})}}]);