(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[32107],{965539:(e,t,l)=>{"use strict";l.d(t,{Z:()=>s});var n=l(124852),r=l.n(n);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){var n,r,a,i;n=e,r=t,a=l[t],i=function(e,t){if("object"!=o(e)||!e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var n=l.call(e,"string");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r),(r="symbol"==o(i)?i:String(i))in n?Object.defineProperty(n,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[r]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}const s=function(e){var t=e.id,l=e.children,n=e.header,o=e.footer,a=e.columns,s=e.height,c=e.style,d=void 0===c?{}:c,m=e.className,u=e.bodyClassName,f=void 0===u?"ms2-border-layout-body":u;return r().createElement("div",{id:t,className:m,style:i({display:"flex",flexDirection:"column",width:"100%",height:"100%",overflow:"hidden"},d)},n,r().createElement("div",{className:f,style:{display:"flex",flex:1,overflowY:"auto"}},r().createElement("main",{className:"ms2-border-layout-content",style:{flex:1,overflowX:"hidden"}},s?r().createElement("div",{style:{height:s}},l):l),s?r().createElement("div",{style:{height:s}},a):a),o)}},975480:(e,t,l)=>{"use strict";l.d(t,{Z:()=>o});var n=l(124852),r=l.n(n);const o=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).style,t=void 0===e?{display:"inline-block"}:e;return r().createElement("div",{style:t,className:"mapstore-inline-loader"})}},694745:(e,t,l)=>{"use strict";l.d(t,{Z:()=>y});var n=l(124852),r=l.n(n),o=l(294184),a=l.n(o),i=l(480681),s=l(807472),c=l(80717),d=l(867076),m=l(819081),u=l.n(m),f=l(975480),v={xs:" ms-xs",sm:" ms-sm",md:"",lg:" ms-lg"},h={className:{vertical:" ms-fullscreen-v",horizontal:" ms-fullscreen-h",full:" ms-fullscreen"},glyph:{expanded:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-small"},collapsed:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-full"}}};const y=(0,d.withState)("fullscreenState","onFullscreen",(function(e){var t=e.initialFullscreenState;return void 0===t?"collapsed":t}))((function(e){var t=e.show,l=void 0!==t&&t,n=e.loading,o=e.loadingText,d=e.onClose,m=void 0===d?function(){}:d,y=e.title,p=void 0===y?"":y,b=e.clickOutEnabled,g=void 0===b||b,E=e.showClose,w=void 0===E||E,N=e.disabledClose,O=void 0!==N&&N,x=e.showFullscreen,z=void 0!==x&&x,S=e.fullscreenType,C=void 0===S?"full":S,k=e.buttons,j=void 0===k?[]:k,P=e.size,Z=void 0===P?"":P,F=e.bodyClassName,G=void 0===F?"":F,D=e.children,T=e.draggable,_=void 0!==T&&T,q=e.fullscreenState,I=e.onFullscreen,R=e.fade,H=void 0!==R&&R,L=e.fitContent,M=e.modalClassName,V=void 0===M?"":M,X=e.dialogClassName,Y=void 0===X?"":X,A=e.enableFooter,B=void 0===A||A,J=v[Z]||"",K=z&&"expanded"===q&&h.className[C]||"",Q=l?r().createElement("div",{className:"modal-fixed ".concat(V," ")+(_?"ms-draggable":"")},r().createElement(s.Z,{id:"ms-resizable-modal",style:{display:"flex"},onClickOut:g?m:function(){},containerClassName:"ms-resizable-modal",draggable:_,modal:!0,className:a()("modal-dialog modal-content",J,K,Y,{"ms-fit-content":L})},r().createElement("span",{role:"header"},r().createElement("h4",{className:"modal-title"},r().createElement("div",{className:"ms-title"},p),z&&h.className[C]&&r().createElement(i.Glyphicon,{className:"ms-header-btn",onClick:function(){return I("expanded"===q?"collapsed":"expanded")},glyph:h.glyph[q][C]}),w&&m&&r().createElement(i.Glyphicon,{glyph:"1-close",className:"ms-header-btn",onClick:m,disabled:O}))),r().createElement("div",{role:"body",className:G},D),B&&r().createElement("div",{style:{display:"flex"},role:"footer"},r().createElement("div",{className:"ms-resizable-modal-loading-spinner-container"},n?r().createElement(f.Z,null):null),r().createElement("div",{className:"ms-resizable-modal-loading-text"},n?o:null),r().createElement(c.Z,{buttons:j})))):null;return H?r().createElement(u(),{transitionName:"ms-resizable-modal-fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},Q):Q}))},416919:(e,t,l)=>{"use strict";l.d(t,{Z:()=>u});var n=l(124852),r=l.n(n),o=l(732833),a=l(965539),i=l(867076),s=l(480681),c=l(38560),d={bottom:{true:"chevron-down",false:"chevron-up"},top:{true:"chevron-up",false:"chevron-down"},right:{true:"chevron-right",false:"chevron-left"},left:{true:"chevron-left",false:"chevron-right"}};const m=function(e){var t=e.position,l=void 0===t?"right":t,n=e.onClose,o=e.bsStyle,a=void 0===o?"default":o,i=e.title,m=void 0===i?"":i,u=e.fullscreen,f=void 0!==u&&u,v=e.showFullscreen,h=void 0!==v&&v,y=e.glyph,p=void 0===y?"info-sign":y,b=e.additionalRows,g=e.onFullscreen,E=void 0===g?function(){}:g,w=n?r().createElement(c.Z,{key:"ms-header-close",className:"square-button ms-close",onClick:n,bsStyle:a},r().createElement(s.Glyphicon,{glyph:"1-close"})):null,N=h?r().createElement(c.Z,{key:"ms-header-glyph",className:"square-button",bsStyle:a,onClick:function(){return E(!f)}},r().createElement(s.Glyphicon,{glyph:d[l]&&d[l][f]||"resize-full"})):r().createElement("div",{key:"ms-header-glyph",className:"square-button ".concat("bg-"+a),style:{display:"flex"}},r().createElement(s.Glyphicon,{glyph:p,className:"".concat("default"===a?"text-primary":"")})),O="left"===l?[w,N]:[N,w];return r().createElement(s.Grid,{fluid:!0,style:{width:"100%"},className:"ms-header ms-"+a},r().createElement(s.Row,null,r().createElement(s.Col,{xs:2},O[0]),r().createElement(s.Col,{xs:8},r().createElement("h4",null,m)),r().createElement(s.Col,{xs:2},O[1])),b)},u=(0,i.withState)("fullscreen","onFullscreen",!1)((function(e){var t=e.fluid,l=e.className,n=void 0===l?"":l,i=e.fullscreen,s=void 0!==i&&i,c=e.position,d=e.open,u=e.size,f=void 0===u?550:u,v=e.style,h=void 0===v?{}:v,y=e.zIndex,p=void 0===y?1030:y,b=e.onClose,g=e.bsStyle,E=e.title,w=e.showFullscreen,N=void 0!==w&&w,O=e.glyph,x=e.header,z=e.footer,S=e.children,C=e.onFullscreen,k=void 0===C?function(){}:C,j=e.fixed,P=void 0!==j&&j,Z=e.resizable,F=void 0!==Z&&Z,G=e.hideHeader;return r().createElement("div",{className:"ms-side-panel "+(P?"":"ms-absolute-dock ")+(F?"":"react-dock-no-resize ")+n},r().createElement(o.default,{fluid:t||s,position:c,dimMode:"none",isVisible:d,size:s?1:f,dockStyle:h,zIndex:p},r().createElement(a.Z,{header:!G&&d&&r().createElement(m,{position:c,onClose:b,bsStyle:g,title:E,fullscreen:s,showFullscreen:N,glyph:O,additionalRows:x,onFullscreen:k}),footer:d&&z},d&&S)))}))},632107:(e,t,l)=>{"use strict";l.d(t,{Z:()=>m});var n=l(124852),r=l.n(n),o=l(867076),a=l(965539),i=l(416919),s=l(694745),c=["children","header"];var d=(0,o.renameProps)({open:"show"})((function(e){var t=e.children,l=e.header,n=function(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}(e,c);return r().createElement(s.Z,n,r().createElement(a.Z,{header:r().createElement("div",{className:"ms-header"},l)},t))}));const m=(0,o.branch)((function(e){return!e.dock}),(function(){return function(e){return r().createElement(d,e)}}))(i.Z)}}]);