(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[98869],{604206:(t,e,n)=>{"use strict";n.d(e,{hZ:()=>E,pb:()=>r,kD:()=>u,DI:()=>R,IC:()=>o,uB:()=>i,Rh:()=>_,G_:()=>c,vU:()=>I,Vw:()=>p,KD:()=>D,uj:()=>f,lo:()=>G,Yf:()=>S,fo:()=>O,PY:()=>U,bp:()=>a,oJ:()=>y,k4:()=>N,sc:()=>s,Li:()=>F});var E="CHANGE_DRAWING_STATUS",r="DRAW:END_DRAWING",u="DRAW:SET_CURRENT_STYLE",R="DRAW:GEOMETRY_CHANGED",o="DRAW:DRAW_SUPPORT_STOPPED",T="DRAW:FEATURES_SELECTED",A="DRAW:DRAWING_FEATURES",i="DRAW:SET_SNAPPING_LAYER",_="DRAW:SNAPPING_IS_LOADING",c="DRAW:TOGGLE_SNAPPING",I="DRAW:SET_SNAPPING_CONFIG";function p(t,e,n,E,r){return{type:R,features:t,owner:e,enableEdit:n,textChanged:E,circleChanged:r}}function D(){return{type:T,features:arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]}}function f(){return{type:A,features:arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]}}function G(){return{type:o}}function S(t,e,n,r,u,R){return{type:E,status:t,method:e,owner:n,features:r,options:u,style:R}}function O(t,e){return{type:r,geometry:t,owner:e}}function U(t){return{type:u,currentStyle:t}}var a=function(t){return S("clean","",t,[],{})};function y(){return{type:c}}function N(t){return{type:i,snappingLayer:t}}function s(){return{type:_}}function F(t,e,n){return{type:I,value:t,prop:e,pluginCfg:n}}},433528:(t,e,n)=>{"use strict";n.d(e,{gJ:()=>E,Oj:()=>r,jp:()=>u,CM:()=>R,DU:()=>o,aO:()=>T,v6:()=>A,K8:()=>i,IN:()=>_,zh:()=>c,AH:()=>I,Ub:()=>p,_9:()=>D,JB:()=>f,oh:()=>G,AY:()=>S,yi:()=>O,SW:()=>U,Hk:()=>a,iQ:()=>y,dY:()=>N,$:()=>s,_u:()=>F,gG:()=>C,DI:()=>L,dZ:()=>P,qw:()=>d,f$:()=>l,bZ:()=>M,$O:()=>v,sF:()=>m,Gk:()=>Y,vO:()=>g,ut:()=>h,MK:()=>H,VV:()=>W,B8:()=>V,VM:()=>b,a3:()=>Z,Xp:()=>k,DA:()=>w,sK:()=>x,r:()=>B,iB:()=>z,WB:()=>J,vm:()=>$,EH:()=>K,Yd:()=>j,Hg:()=>q,Lz:()=>Q,ye:()=>X,Jb:()=>tt,d:()=>et,fT:()=>nt,Ib:()=>Et,UB:()=>rt,Uh:()=>ut,QT:()=>Rt,oL:()=>ot,Ap:()=>Tt,KD:()=>At,Z_:()=>it,Vw:()=>_t,sY:()=>ct,kA:()=>It,gr:()=>pt,pX:()=>Dt,F5:()=>ft,MO:()=>Gt,dq:()=>St,DY:()=>Ot,oO:()=>Ut,uF:()=>at,a8:()=>yt,Pv:()=>Nt,an:()=>st,lg:()=>Ft,nY:()=>Ct,nG:()=>Lt,lx:()=>Pt,$S:()=>dt,gc:()=>lt,Uz:()=>Mt,fO:()=>vt,$E:()=>mt,cE:()=>Yt,JK:()=>gt,YV:()=>ht,t9:()=>Ht,YG:()=>Wt,HT:()=>Vt,MY:()=>bt,ve:()=>Zt,hB:()=>kt,Ox:()=>wt,zd:()=>xt,aT:()=>Bt,VH:()=>zt,Yb:()=>Jt,Jr:()=>$t,pP:()=>Kt,gL:()=>jt,dM:()=>qt});var E="FEATUREGRID:SET_UP",r="FEATUREGRID:SELECT_FEATURES",u="FEATUREGRID:DESELECT_FEATURES",R="FEATUREGRID:CLEAR_SELECTION",o="FEATUREGRID:SET_SELECTION_OPTIONS",T="FEATUREGRID:TOGGLE_MODE",A="FEATUREGRID:TOGGLE_FEATURES_SELECTION",i="FEATUREGRID:FEATURES_MODIFIED",_="FEATUREGRID:NEW_FEATURE",c="FEATUREGRID:SAVE_CHANGES",I="FEATUREGRID:SAVING",p="FEATUREGRID:START_EDITING_FEATURE",D="FEATUREGRID:START_DRAWING_FEATURE",f="FEATUREGRID:DELETE_GEOMETRY",G="FEATUREGRID:DELETE_GEOMETRY_FEATURE",S="FEATUREGRID:SAVE_SUCCESS",O="FEATUREGRID:CLEAR_CHANGES",U="FEATUREGRID:SAVE_ERROR",a="FEATUREGRID:DELETE_SELECTED_FEATURES",y="SET_FEATURES",N="FEATUREGRID:SORT_BY",s="FEATUREGRID:SET_LAYER",F="QUERY:UPDATE_FILTER",C="FEATUREGRID:CHANGE_PAGE",L="FEATUREGRID:GEOMETRY_CHANGED",P="DOCK_SIZE_FEATURES",d="FEATUREGRID:TOGGLE_TOOL",l="FEATUREGRID:CUSTOMIZE_ATTRIBUTE",M="ASK_CLOSE_FEATURE_GRID_CONFIRM",v="FEATUREGRID:OPEN_GRID",m="FEATUREGRID:CLOSE_GRID",Y="FEATUREGRID:CLEAR_CHANGES_CONFIRMED",g="FEATUREGRID:FEATURE_GRID_CLOSE_CONFIRMED",h="FEATUREGRID:SET_PERMISSION",H="FEATUREGRID:DISABLE_TOOLBAR",W="FEATUREGRID:ACTIVATE_TEMPORARY_CHANGES",V="FEATUREGRID:DEACTIVATE_GEOMETRY_FILTER",b="FEATUREGRID:ADVANCED_SEARCH",Z="FEATUREGRID:ZOOM_ALL",k="FEATUREGRID:INIT_PLUGIN",w="FEATUREGRID:SIZE_CHANGE",x="FEATUREGRID:TOGGLE_SHOW_AGAIN_FLAG",B="FEATUREGRID:UPDATE_EDITORS_OPTIONS",z="FEATUREGRID:LAUNCH_UPDATE_FILTER_FUNC",J="FEATUREGRID:SET_SYNC_TOOL",$="FEATUREGRID:SET_VIEWPORT_FILTER",K={EDIT:"EDIT",VIEW:"VIEW"},j="FEATUREGRID:START_SYNC_WMS",q="FEATUREGRID:STOP_SYNC_WMS",Q="STORE_ADVANCED_SEARCH_FILTER",X="LOAD_MORE_FEATURES",tt="FEATUREGRID:QUERY_RESULT",et="FEATUREGRID:SET_TIME_SYNC",nt="FEATUREGRID:SET_PAGINATION";function Et(){return{type:x}}function rt(t,e){return{type:tt,features:t,pages:e}}function ut(t){return{type:Q,filterObj:t}}function Rt(){return{type:k,options:arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}}}function ot(){return{type:Y}}function Tt(){return{type:g}}function At(t,e){return{type:r,features:t,append:e}}function it(t){return{type:E,options:t}}function _t(t){return{type:L,features:t}}function ct(){return{type:p}}function It(){return{type:D}}function pt(t){return{type:u,features:t}}function Dt(){return{type:f}}function ft(t){return{type:G,features:t}}function Gt(){return{type:R}}function St(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.multiselect,n=t.showCheckbox;return{type:o,multiselect:e,showCheckbox:n}}function Ot(t,e){return{type:N,sortBy:t,sortOrder:e}}function Ut(t,e){return{type:C,page:t,size:e}}function at(t){return{type:s,id:t}}function yt(t){return{type:F,update:t,append:arguments.length>1&&void 0!==arguments[1]&&arguments[1]}}function Nt(t,e){return{type:d,tool:t,value:e}}function st(t,e,n){return{type:l,name:t,key:e,value:n}}function Ft(){return{type:T,mode:K.EDIT}}function Ct(){return{type:T,mode:K.VIEW}}function Lt(t,e){return{type:i,features:t,updated:e}}function Pt(t){return{type:_,features:t}}function dt(){return{type:c}}function lt(){return{type:S}}function Mt(){return{type:a}}function vt(){return{type:I}}function mt(){return{type:O}}function Yt(){return{type:U}}function gt(){return{type:M}}function ht(t){return{type:m,closer:t}}function Ht(){return{type:v}}function Wt(t){return{type:H,disabled:t}}function Vt(t){return{type:h,permission:t}}function bt(){return{type:b}}function Zt(){return{type:Z}}function kt(){return{type:j}}function wt(t,e){return{type:w,size:t,dockProps:e}}var xt=function(t){return{type:X,pages:t}},Bt=function(t){return{type:W,activated:t}},zt=function(t){return{type:V,deactivated:t}},Jt=function(t){return{type:et,value:t}},$t=function(t){return{type:nt,size:t}},Kt=function(t){return{type:z,updateFilterAction:t}},jt=function(t){return{type:J,syncWmsFilter:t}},qt=function(t){return{type:$,value:t}}},801550:(t,e,n)=>{"use strict";n.d(e,{pP:()=>E,TR:()=>r,N7:()=>u,mq:()=>R,uv:()=>o,Qy:()=>T,IL:()=>A,Li:()=>i,OW:()=>_,ZO:()=>c,Um:()=>I,TF:()=>p,Ls:()=>D,Ec:()=>f,Eu:()=>G,JJ:()=>S,nZ:()=>O,YD:()=>U,GI:()=>a,Jb:()=>y,Uh:()=>N,e$:()=>s,eh:()=>F,$j:()=>C,bJ:()=>L,Mk:()=>P,xy:()=>d,o6:()=>l,NH:()=>M,FP:()=>v,Mo:()=>m,sO:()=>Y,Px:()=>g,hd:()=>h,y9:()=>H,Ju:()=>W,BV:()=>V,SO:()=>b,H0:()=>Z,$X:()=>k,ou:()=>w,NE:()=>x,Lq:()=>B,aN:()=>z});var E="CHANGE_MAP_VIEW",r="CLICK_ON_MAP",u="CHANGE_MOUSE_POINTER",R="CHANGE_ZOOM_LVL",o="PAN_TO",T="ZOOM_TO_EXTENT",A="ZOOM_TO_POINT",i="CHANGE_MAP_CRS",_="CHANGE_MAP_SCALES",c="CHANGE_MAP_STYLE",I="CHANGE_ROTATION",p="CREATION_ERROR_LAYER",D="UPDATE_VERSION",f="INIT_MAP",G="RESIZE_MAP",S="CHANGE_MAP_LIMITS",O="SET_MAP_RESOLUTIONS",U="REGISTER_EVENT_LISTENER",a="UNREGISTER_EVENT_LISTENER",y="MOUSE_MOVE",N="MOUSE_OUT",s="MAP:MAP_PLUGIN_LOAD",F="MAP:ORIENTATION",C="MAP:UPDATE_MAP_VIEW",L="MAP:UPDATE_MAP_OPTIONS";function P(t,e,n,E){return{type:s,mapType:e,loading:t,loaded:n,error:E}}function d(t,e,n){return{type:A,pos:t,zoom:e,crs:n}}function l(t,e,n,r,u,R,o,T){return{type:E,center:t,zoom:e,bbox:n,size:r,mapStateSource:u,projection:R,viewerOptions:o,resolution:T}}function M(t){return{type:i,crs:t}}function v(t,e){return{type:r,point:t,layer:e}}function m(t){return{type:u,pointer:t}}function Y(t,e){return{type:R,zoom:t,mapStateSource:e}}function g(t,e,n,E){return{type:T,extent:t,crs:e,maxZoom:n,options:E}}function h(t,e){return{type:c,style:t,mapStateSource:e}}function H(t){return{type:f,disableFeedbackMask:t}}function W(){return{type:G}}function V(t){var e=t.restrictedExtent,n=t.crs,E=t.minZoom;return{type:S,restrictedExtent:e,crs:n,minZoom:E}}function b(t){return{type:O,resolutions:t}}var Z=function(t,e){return{type:U,eventName:t,toolName:e}},k=function(t,e){return{type:a,eventName:t,toolName:e}},w=function(t){return{type:y,position:t}},x=function(){return{type:N}},B=function(t){return{type:F,orientation:t}},z=function(t){return{type:L,configUpdate:t}}},998869:(t,e,n)=>{"use strict";n.d(e,{k:()=>i,U:()=>_});var E=n(782904),r=n(49977),u=n.n(r),R=n(607147),o=n(604206),T=n(801550),A=n(433528),i="export-context",_=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(t,e){return u().Observable.from([(0,E.Xg)(e,"enabled",null)])},i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(t,e){return(0,R.Yq)(e)(t)};return t.ofType(o.hZ,T.YD,A.$O).filter((function(t){var E=t.type,r=t.status,u=t.owner,R=t.eventName,_=t.toolName,c=i(e.getState(),n);switch(E){case A.$O:return"featureGrid"!==n;case T.YD:return c&&"click"===R&&_!==n;case o.hZ:return c&&("drawOrEdit"===r||"start"===r)&&u!==n;default:return c&&"annotations"!==n}})).switchMap((function(t){return i(e.getState(),n)?r(e.getState(),n,t):u().Observable.empty()}))}}}]);