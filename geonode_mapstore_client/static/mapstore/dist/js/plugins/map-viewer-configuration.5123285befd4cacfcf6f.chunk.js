(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[16164],{807472:(e,t,n)=>{"use strict";n.d(t,{Z:()=>_});var r=n(727418),o=n.n(r),l=n(45697),i=n.n(l),a=n(124852),s=n.n(a),c=n(485294),u=n.n(c),d=n(472986),p=n.n(d),E=n(805346);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){R(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,N(r.key),r)}}function O(e,t,n){return t=g(t),function(e,t){if(t&&("object"==f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,b()?Reflect.construct(t,n||[],g(e).constructor):t.apply(e,n))}function b(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(b=function(){return!!e})()}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function R(e,t,n){return(t=N(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(e){var t=function(e){if("object"!=f(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==f(t)?t:t+""}var S=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return R(e=O(this,t,[].concat(r)),"renderLoading",(function(){return e.props.maskLoading?s().createElement("div",{style:{width:"100%",height:"100%",position:"absolute",overflow:"visible",margin:"auto",verticalAlign:"center",left:"0",background:"rgba(255, 255, 255, 0.5)",zIndex:2}},s().createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -40%)"}},s().createElement(E.Z,{msgId:"loading"}),s().createElement(p(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}))):null})),R(e,"renderRole",(function(t){return s().Children.toArray(e.props.children).filter((function(e){return e.props.role===t}))})),R(e,"hasRole",(function(t){return s().Children.toArray(e.props.children).filter((function(e){return e.props.role===t})).length>0})),R(e,"onClickOut",(function(t){e.props.onClickOut&&e.mask===t.target&&e.props.onClickOut(t)})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this,t=s().createElement("div",{id:this.props.id,style:v({},this.props.style),className:"".concat(this.props.draggable?"modal-dialog-draggable":""," ").concat(this.props.className," modal-dialog-container")},s().createElement("div",{className:this.props.headerClassName+" draggable-header"},this.renderRole("header")),s().createElement("div",{className:this.props.bodyClassName},this.renderLoading(),this.renderRole("body")),this.hasRole("footer")?s().createElement("div",{className:this.props.footerClassName},this.renderRole("footer")):s().createElement("span",null)),n=this.props.draggable?s().createElement(u(),{defaultPosition:this.props.start,bounds:this.props.bounds,handle:".draggable-header, .draggable-header *"},t):t,r=o()({},this.props.style.display?{display:this.props.style.display}:{},this.props.backgroundStyle);return this.props.modal?s().createElement("div",{ref:function(t){e.mask=t},onClick:this.onClickOut,style:r,className:"fade in modal "+this.props.containerClassName,role:"dialog"},n):n}}])&&y(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(s().Component);R(S,"propTypes",{id:i().string.isRequired,style:i().object,backgroundStyle:i().object,className:i().string,maskLoading:i().bool,containerClassName:i().string,headerClassName:i().string,bodyClassName:i().string,footerClassName:i().string,onClickOut:i().func,modal:i().bool,start:i().object,draggable:i().bool,bounds:i().oneOfType([i().string,i().object])}),R(S,"defaultProps",{style:{},backgroundStyle:{background:"rgba(0,0,0,.5)"},start:{x:0,y:150},className:"modal-dialog modal-content",maskLoading:!1,containerClassName:"",headerClassName:"modal-header",bodyClassName:"modal-body",footerClassName:"modal-footer",modal:!1,draggable:!0,bounds:"parent"});const _=S},975480:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(124852),o=n.n(r);const l=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).style,t=void 0===e?{display:"inline-block"}:e;return o().createElement("div",{style:t,className:"mapstore-inline-loader"})}},694745:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r=n(124852),o=n.n(r),l=n(294184),i=n.n(l),a=n(480681),s=n(807472),c=n(80717),u=n(867076),d=n(819081),p=n.n(d),E=n(975480),f={xs:" ms-xs",sm:" ms-sm",md:"",lg:" ms-lg"},m={className:{vertical:" ms-fullscreen-v",horizontal:" ms-fullscreen-h",full:" ms-fullscreen"},glyph:{expanded:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-small"},collapsed:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-full"}}};const v=(0,u.withState)("fullscreenState","onFullscreen",(function(e){var t=e.initialFullscreenState;return void 0===t?"collapsed":t}))((function(e){var t=e.show,n=void 0!==t&&t,r=e.loading,l=e.loadingText,u=e.onClose,d=void 0===u?function(){}:u,v=e.title,y=void 0===v?"":v,O=e.clickOutEnabled,b=void 0===O||O,g=e.showClose,h=void 0===g||g,R=e.disabledClose,N=void 0!==R&&R,S=e.showFullscreen,_=void 0!==S&&S,C=e.fullscreenType,T=void 0===C?"full":C,w=e.buttons,P=void 0===w?[]:w,D=e.size,j=void 0===D?"":D,I=e.bodyClassName,k=void 0===I?"":I,U=e.children,G=e.draggable,L=void 0!==G&&G,A=e.fullscreenState,Z=e.onFullscreen,z=e.fade,x=void 0!==z&&z,M=e.fitContent,V=e.modalClassName,B=void 0===V?"":V,F=e.dialogClassName,K=void 0===F?"":F,W=e.enableFooter,H=void 0===W||W,Q=f[j]||"",Y=_&&"expanded"===A&&m.className[T]||"",X=n?o().createElement("div",{className:"modal-fixed ".concat(B," ")+(L?"ms-draggable":"")},o().createElement(s.Z,{id:"ms-resizable-modal",style:{display:"flex"},onClickOut:b?d:function(){},containerClassName:"ms-resizable-modal",draggable:L,modal:!0,className:i()("modal-dialog modal-content",Q,Y,K,{"ms-fit-content":M})},o().createElement("span",{role:"header"},o().createElement("h4",{className:"modal-title"},o().createElement("div",{className:"ms-title"},y),_&&m.className[T]&&o().createElement(a.gG,{className:"ms-header-btn",onClick:function(){return Z("expanded"===A?"collapsed":"expanded")},glyph:m.glyph[A][T]}),h&&d&&o().createElement(a.gG,{glyph:"1-close",className:"ms-header-btn",onClick:d,disabled:N}))),o().createElement("div",{role:"body",className:k},U),H&&o().createElement("div",{style:{display:"flex"},role:"footer"},o().createElement("div",{className:"ms-resizable-modal-loading-spinner-container"},r?o().createElement(E.Z,null):null),o().createElement("div",{className:"ms-resizable-modal-loading-text"},r?l:null),o().createElement(c.Z,{buttons:P})))):null;return x?o().createElement(p(),{transitionName:"ms-resizable-modal-fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},X):X}))},212610:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(124852),o=n.n(r),l=n(867076),i=n(957557),a=n.n(i),s=n(815135);const c=(0,l.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.disabled,n=e.noTooltipWhenDisabled;return!(void 0!==n&&n&&t)}),s.Z,(function(e){return function(t){return o().createElement(e,a()(t,["tooltipId","tooltip","noTooltipWhenDisabled"]),t.children)}}))},617252:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var r=n(124852),o=n.n(r),l=n(867076),i=n(45697),a=n.n(i),s=n(957557),c=n.n(s),u=n(480681),d=n(950966);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,b(r.key),r)}}function f(e,t,n){return t=v(t),function(e,t){if(t&&("object"==p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,m()?Reflect.construct(t,n||[],v(e).constructor):t.apply(e,n))}function m(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(m=function(){return!!e})()}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function O(e,t,n){return(t=b(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){var t=function(e){if("object"!=p(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==p(t)?t:t+""}const g=(0,l.branch)((function(e){return e.popover}),(function(e){var t;return t=function(t){function n(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),f(this,n,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(n,t),r=n,(i=[{key:"renderPopover",value:function(){return o().createElement(u.J2,c()(this.props.popover,["trigger","placement","text"]),this.props.popover.text)}},{key:"renderContent",value:function(){var t=(0,l.toClass)(e);return o().createElement(t,c()(this.props,["popover"]))}},{key:"render",value:function(){var e=!0===this.props.popover.trigger?["hover","focus"]:this.props.popover.trigger;return o().createElement("span",null,o().createElement(d.Z,{trigger:e,placement:this.props.popover.placement,overlay:this.renderPopover()},this.renderContent()))}}])&&E(r.prototype,i),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,i}(o().Component),O(t,"propTypes",{popover:a().object}),O(t,"defaultProps",{popover:{trigger:!0}}),t}))},80717:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(124852),o=n.n(r),l=n(819081),i=n.n(l),a=n(480681),s=n(90085),c=["visible","Element","renderButton"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(null,arguments)}const d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.buttons,n=void 0===t?[]:t,r=e.btnGroupProps,l=void 0===r?{}:r,d=e.btnDefaultProps,p=void 0===d?{}:d,E=e.transitionProps,f=void 0===E?{transitionName:"toolbar-btn-transition",transitionEnterTimeout:300,transitionLeaveTimeout:300}:E,m=function(){return n.map((function(e,t){var n=e.visible,r=void 0===n||n,l=e.Element,i=e.renderButton,a=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,c);return r?i||l&&o().createElement(l,u({key:a.key||t},a))||o().createElement(s.Z,u({key:a.key||t},p,a)):null}))};return o().createElement(a.hE,l,f?o().createElement(i(),f,m()):m())}},90085:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r=n(124852),o=n.n(r),l=n(867076),i=n(805346),a=n(957557),s=n.n(a),c=n(480681),u=n(532425),d=n(212610),p=n(617252),E=n(38560),f=["glyph","loading","text","textId","glyphClassName","loaderProps","children"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(null,arguments)}const v=(0,l.compose)(d.Z,p.Z)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.glyph,n=e.loading,r=e.text,l=void 0===r?"":r,a=e.textId,d=e.glyphClassName,p=void 0===d?"":d,v=e.loaderProps,y=void 0===v?{}:v,O=e.children,b=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,f);return o().createElement(E.Z,s()(b,["pullRight","confirmNo","confirmYes"]),t&&!n?o().createElement(c.gG,{glyph:t,className:p}):null,a?o().createElement(i.Z,{msgId:a}):l,n?o().createElement(u.Z,m({className:"ms-loader".concat(b.bsStyle&&" ms-loader-"+b.bsStyle||"").concat(b.bsSize&&" ms-loader-"+b.bsSize||"")},y)):null,O)}))},643892:(e,t,n)=>{"use strict";n.d(t,{W:()=>r,Zf:()=>o,Eu:()=>l,Vy:()=>i,YB:()=>a,xm:()=>s,_f:()=>c,ek:()=>u,cd:()=>d,pt:()=>p,ww:()=>E,tR:()=>f,Js:()=>m,p2:()=>v,ZH:()=>y,eQ:()=>O,ql:()=>b,$X:()=>g,nS:()=>h,ih:()=>R,J5:()=>N,uA:()=>S,Pv:()=>_,_Z:()=>C,dh:()=>T,IH:()=>w,e3:()=>P,Oq:()=>D,Y0:()=>j,sA:()=>I,ip:()=>k,li:()=>U,F_:()=>G,um:()=>L,Q$:()=>A,DF:()=>Z,id:()=>z,Br:()=>x,bI:()=>M,U5:()=>V,e5:()=>B,b3:()=>F,mN:()=>K,QN:()=>W,HV:()=>H,xe:()=>Q,vA:()=>Y,gw:()=>X,qs:()=>q,CB:()=>J,vg:()=>$,Z0:()=>ee,lf:()=>te,jQ:()=>ne,nk:()=>re,X7:()=>oe,nO:()=>le,F4:()=>ie,EU:()=>ae,Rk:()=>se,V1:()=>ce,rg:()=>ue,v6:()=>de,d7:()=>pe,Rx:()=>Ee,as:()=>fe,jv:()=>me});var r="GEONODE:RESOURCE_LOADING",o="GEONODE:SET_RESOURCE",l="GEONODE:RESOURCE_ERROR",i="GEONODE:UPDATE_RESOURCE_PROPERTIES",a="GEONODE:SET_RESOURCE_TYPE",s="GEONODE:SET_NEW_RESOURCE",c="GEONODE:SET_RESOURCE_ID",u="GEONODE:SET_RESOURCE_PERMISSIONS",d="GEONODE:EDIT_TITLE_RESOURCE",p="GEONODE:EDIT_ABSTRACT_RESOURCE",E="GEONODE:EDIT_THUMBNAIL_RESOURCE",f="GEONODE:SET_FAVORITE_RESOURCE",m="GEONODE:SET_MAP_THUMBNAIL",v="GEONODE:SET_SELECTED_DATASET_PERMISSIONS",y="GEONODE:REQUEST_RESOURCE_CONFIG",O="GEONODE:REQUEST_NEW_RESOURCE_CONFIG",b="GEONODE:LOADING_RESOURCE_CONFIG",g="GEONODE:RESET_RESOURCE_STATE",h="GEONODE:RESOURCE_CONFIG_ERROR",R="GEONODE:SET_RESOURCE_COMPACT_PERMISSIONS",N="GEONODE:UPDATE_RESOURCE_COMPACT_PERMISSIONS",S="GEONODE:RESET_GEO_LIMITS",_="GEONODE:PROCESS_RESOURCES",C="GEONODE_SET_RESOURCE_THUMBNAIL",T="GEONODE_ENABLE_MAP_THUMBNAIL_VIEWER",w="GEONODE_DOWNLOAD_RESOURCE",P="GEONODE_DOWNLOAD_COMPLETE",D="GEONODE_UPDATE_SINGLE_RESOURCE",j="GEONODE_SET_RESOURCE_EXTENT",I="GEONODE:SET_RESOURCE_PATH_PARAMETERS",k="GEONODE:SET_MAP_VIEWER_LINKED_RESOURCE",U="GEONODE:MANAGE_LINKED_RESOURCE",G="GEONODE:SET_DEFAULT_VIEWER_PLUGINS",L="GEONODE:SET_SELECTED_LAYER";function A(){return{type:r}}function Z(e,t){return{type:o,data:e,pending:t}}function z(e){return{type:D,data:e}}function x(e){return{type:d,title:e}}function M(e){return{type:p,abstract:e}}function V(e){return{type:E,thumbnailUrl:e,thumbnailChanged:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"false"}}function B(){return{type:C}}function F(e){return{type:a,resourceType:e}}function K(e){return{type:l,error:e}}function W(e){return{type:i,properties:e}}function H(){return{type:s}}function Q(e){return{type:c,id:e}}function Y(e){return{type:v,permissions:e}}function X(e){return{type:f,favorite:e}}function q(e){return{type:T,enabled:e}}function J(e){return{type:m,bbox:e}}function $(e,t,n){return{type:y,resourceType:e,pk:t,options:n}}function ee(e,t){return{type:O,resourceType:e,options:t}}function te(e){return{type:b,loading:e}}function ne(e){return{type:h,message:e}}function re(){return{type:g}}function oe(e){return{type:R,compactPermissions:e}}function le(e){return{type:N,compactPermissions:e}}function ie(){return{type:S}}function ae(e,t,n){return{type:_,processType:e,resources:t,redirectTo:n}}function se(e){return{type:w,resource:e}}function ce(e){return{type:P,resource:e}}function ue(e){return{type:j,coords:e}}function de(e){return{type:I,params:e}}function pe(e){return{type:U,payload:e}}function Ee(e){return{type:k,resource:e}}function fe(e){return{type:G,plugins:e}}function me(e){return{type:L,layer:e}}},53645:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>j});var r=n(124852),o=n.n(r),l=n(171703),i=n(441609),a=n.n(i),s=n(22222),c=n(303744),u=n(322843),d=n(643892),p=n(805346),E=n(532425),f=n(535721),m=n(694745),v=n(399534),y=n(621886),O=n(12530),b=n(782904),g=n(17594),h=n(482100),R=["hide","loading","labelId","showLoader"],N=["linkedResources"];function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},S.apply(null,arguments)}function _(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var C=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).resourceType;return e?o().createElement("div",{className:"gn-resource-delete-warning"},o().createElement(g.Z,{className:"warning",name:"warning"}),"  ",o().createElement(p.Z,{msgId:"gnviewer.linkedResource.deleteAndUnlinkWarning.".concat(e)})):null},T=(0,l.connect)((0,s.P1)([function(e){var t,n;return null==e||null===(t=e.controls)||void 0===t||null===(n=t[O.zj.REMOVE_LINKED_RESOURCE])||void 0===n?void 0:n.value},function(e){var t,n;return null==e||null===(t=e.controls)||void 0===t||null===(n=t[O.zj.REMOVE_LINKED_RESOURCE])||void 0===n?void 0:n.loading},h.yK],(function(e,t,n){var r;return{resources:null!==(r=null==e?void 0:e.resources)&&void 0!==r?r:[],resourceType:null==e?void 0:e.resourceType,enabled:!a()(null==e?void 0:e.resources),loading:t,source:null==n?void 0:n.pk}})),{onRemove:d.d7,onDelete:d.EU.bind(null,O.zj.REMOVE_LINKED_RESOURCE),onClose:b.Xg.bind(null,O.zj.REMOVE_LINKED_RESOURCE,"value",void 0)})((function(e){var t=e.enabled,n=e.resources,r=void 0===n?[]:n,l=e.onClose,i=void 0===l?function(){}:l,s=e.onDelete,c=void 0===s?function(){}:s,u=e.onRemove,d=void 0===u?function(){}:u,f=e.loading,b=e.resourceType,g=e.source,h=function(){var e=r.map((function(e){return null==e?void 0:e.pk}));a()(g)||a()(e)||!b||d({resourceType:b,source:g,target:e,processType:O.zj.REMOVE_LINKED_RESOURCE})};return o().createElement(v.Z,null,o().createElement(m.Z,{title:o().createElement(p.Z,{msgId:"gnviewer.linkedResource.deleteTitle",msgParams:{count:r.length}}),show:t,fitContent:!0,clickOutEnabled:!1,modalClassName:"gn-simple-dialog",buttons:f?[]:[{text:o().createElement(p.Z,{msgId:"gnviewer.deleteResourceNo",msgParams:{count:r.length}}),onClick:function(){h(),i()}},{text:o().createElement(p.Z,{msgId:"gnviewer.deleteResourceYes",msgParams:{count:r.length}}),bsStyle:"danger",onClick:function(){h(),c(r)}}],onClose:f?null:function(){return i()}},o().createElement("ul",{className:"gn-card-grid",style:{listStyleType:"none",padding:"0.5rem",margin:0}},r.map((function(e,t){return o().createElement("li",{style:{padding:"0.25rem 0"},key:e.pk+"-"+t},o().createElement(y.Z,{data:e,layoutCardsStyle:"list",readOnly:!0}))}))),o().createElement(C,{resourceType:b}),f&&o().createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(255, 255, 255, 0.8)",zIndex:2,display:"flex",alignItems:"center",justifyContent:"center"}},o().createElement(E.Z,{size:70}))))})),w=function(e){var t=e.hide,n=e.loading,r=e.labelId,l=e.showLoader,i=_(e,R);return t?null:o().createElement(c.Z,S({},i,{disabled:n,style:{display:"flex",alignItems:"center",gap:10}}),o().createElement(p.Z,{msgId:null!=r?r:"gnviewer.linkedResource.remove"}),n&&l&&o().createElement(E.Z,{size:12}))},P=(0,l.connect)((function(e){var t,n,r,o;return{loading:null==e||null===(t=e.controls)||void 0===t||null===(n=t[O.zj.REMOVE_LINKED_RESOURCE])||void 0===n?void 0:n.loading,viewerLinkedResource:null==e||null===(r=e.gnresource)||void 0===r?void 0:r.viewerLinkedResource,resource:null==e||null===(o=e.gnresource)||void 0===o?void 0:o.data}}),{onRemove:d.d7,onDelete:b.Xg.bind(null,O.zj.REMOVE_LINKED_RESOURCE,"value")})((function(e){var t,n,r=f.P6.VIEWER,l=null!==(t=e.viewerLinkedResource)&&void 0!==t?t:{},i=l.linkedResources,s=_(l,N),c=1===(null==i||null===(n=i.linkedBy)||void 0===n?void 0:n.length);return o().createElement(w,S({},e,{showLoader:!c,onClick:function(){if(c)e.onDelete({resources:[s],resourceType:r});else{var t,n=null===(t=e.resource)||void 0===t?void 0:t.pk,o=null==s?void 0:s.pk;a()(n)||a()(o)||!r||e.onRemove({resourceType:r,source:n,target:o,processType:O.zj.REMOVE_LINKED_RESOURCE})}},labelId:"gnviewer.removeViewerConfiguration"}))})),D=(0,l.connect)((function(e){var t,n,r,o;return{loading:null==e||null===(t=e.controls)||void 0===t||null===(n=t[O.zj.REMOVE_LINKED_RESOURCE])||void 0===n?void 0:n.loading,resourceParams:null==e||null===(r=e.gnresource)||void 0===r?void 0:r.params,resource:null==e||null===(o=e.gnresource)||void 0===o?void 0:o.data}}),{})((function(e){var t,n;return o().createElement(w,S({},e,{href:"#/viewer/"+(null===(t=e.resourceParams)||void 0===t?void 0:t.appPk)+"/map/"+(null===(n=e.resource)||void 0===n?void 0:n.pk),labelId:"gnviewer.editViewerConfiguration"}))}));const j=(0,u.rx)("MapViewerConfiguration",{component:T,containers:{ActionNavbar:[{name:"RemoveMapViewer",Component:P},{name:"EditMapViewer",Component:D}]},epics:{},reducers:{}})}}]);