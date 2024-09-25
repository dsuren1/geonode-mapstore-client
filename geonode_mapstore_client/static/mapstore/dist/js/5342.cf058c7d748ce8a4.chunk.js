"use strict";(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[5342],{474916:(e,r,n)=>{n.d(r,{Z:()=>u});var t=n(124852),a=n.n(t),l=n(45697),c=n.n(l),o=["href","readOnly","children"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)({}).hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},s.apply(null,arguments)}function i(e){var r=e.href,n=e.readOnly,t=e.children,l=function(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(r.includes(t))continue;n[t]=e[t]}return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,o);return n?t:a().createElement("a",s({href:r},l),t)}i.propTypes={href:c().string,readOnly:c().bool.isRequired,children:c().any},i.defaultProps={href:"",readOnly:!1};const u=i},834065:(e,r,n)=>{n.d(r,{Z:()=>m});var t=n(124852),a=n.n(t),l=n(45697),c=n.n(l),o=n(877593),s=n(474916),i=["resource","readOnly","formatHref","pathname"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)({}).hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},u.apply(null,arguments)}function d(e){var r,n,t,l=e.resource,c=e.readOnly,d=e.formatHref,m=e.pathname,f=function(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(r.includes(t))continue;n[t]=e[t]}return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,i);return f.detailsPanel?a().createElement(s.Z,{readOnly:c,href:d({pathname:m,query:{"filter{owner.username.in}":null===(t=l.owner)||void 0===t?void 0:t.username}})},l.owner&&(0,o.vW)(l.owner)):a().createElement("p",u({className:"card-text gn-card-user"},f),(null===(r=l.owner)||void 0===r?void 0:r.avatar)&&a().createElement("img",{src:l.owner.avatar,alt:(0,o.vW)(l.owner),className:"gn-card-author-image"}),a().createElement(s.Z,{readOnly:c,href:d({pathname:m,query:{"filter{owner.username.in}":null===(n=l.owner)||void 0===n?void 0:n.username}})},l.owner&&(0,o.vW)(l.owner)))}d.propTypes={resource:c().object,readOnly:c().bool,formatHref:c().func,props:c().any},d.defaultProps={resource:{},readOnly:!1,formatHref:function(){return"#"}};const m=d},629987:(e,r,n)=>{n.d(r,{Z:()=>o});var t=n(124852),a=n.n(t),l=n(271418);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)({}).hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},c.apply(null,arguments)}l.Lt.Item=l.sN,l.Lt.Divider=function(e){return a().createElement(l.sN,c({},e,{divider:!0}))};const o=l.Lt},205342:(e,r,n)=>{n.d(r,{Z:()=>O});var t=n(124852),a=n.n(t),l=n(805346),c=n(507412),o=n(638323),s=n(51605),i=n(535721),u=n(138241),d=n(474916),m=n(834065),f=n(45697),p=n.n(f),v=n(629987);function g(e){var r,n,o=e.options,s=e.resource,i=e.buildHrefByTemplate,u=(0,t.useRef)(),d="gn-card-dropdown",m=null==u||null===(r=u.current)||void 0===r?void 0:r.querySelector(".".concat(d)),f=0===((null==m||null===(n=m.children)||void 0===n?void 0:n.length)||0);return a().createElement("div",{ref:u,className:"gn-resource-action-buttons",onClick:function(e){return e.stopPropagation()},style:f?{display:"none"}:{}},a().createElement(v.Z,{className:"gn-card-options",pullRight:!0,id:"gn-card-options-".concat(s.pk2||s.pk)},a().createElement(v.Z.Toggle,{variant:"default",size:"sm",noCaret:!0},a().createElement(c.Z,{name:"ellipsis-v"})),a().createElement(v.Z.Menu,{className:d},o.map((function(e){if("plugin"===e.type){var r=e.Component;return a().createElement(r,{key:e.action,resource:s,renderType:"menuItem"})}return a().createElement(v.Z.Item,{key:e.href,href:i(s,e.href)},a().createElement(c.Z,{name:e.icon})," ",a().createElement(l.Z,{msgId:e.labelId}))})))))}g.propTypes={options:p().array,resource:p().object,buildHrefByTemplate:p().func},g.defaultProps={options:[],resource:{},buildHrefByTemplate:function(){}};const y=g;var h=n(30762);function b(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=Array(r);n<r;n++)t[n]=e[n];return t}var E=(0,t.forwardRef)((function(e,r){var n,f,p,v,g=e.data,E=e.active,O=e.options,w=e.formatHref,Z=e.getTypesInfo,N=e.layoutCardsStyle,P=e.buildHrefByTemplate,j=e.readOnly,I=e.className,k=e.loading,H=e.featured,T=e.onClick,S=e.downloading,A=e.getDetailHref,_=void 0===A?function(e){return w({query:{d:"".concat(e.pk,";").concat(e.resource_type).concat(e.subtype?";".concat(e.subtype):"")},replaceQuery:!0,excludeQueryKeys:[]})}:A,C=(0,t.useRef)(),q=g,B=Z(),R=(B[q.subtype]||B[q.resource_type]||{}).icon,x=q&&(B[q.subtype]||B[q.resource_type])||{},D=x.formatDetailUrl,L=void 0===D?function(e){return null==e?void 0:e.detail_url}:D,W=x.canPreviewed,F=x.hasPermission,M=(null==q?void 0:q.pk)&&L(q),Q=(null==q?void 0:q.pk)&&W&&W(q),U=(null==q?void 0:q.pk)&&F&&F(q),z=(null==q?void 0:q.pk)&&(0,i.J7)(q),J=(n=(0,t.useState)(!1),f=2,function(e){if(Array.isArray(e))return e}(n)||function(e,r){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,a,l,c,o=[],s=!0,i=!1;try{if(l=(n=n.call(e)).next,0===r){if(Object(n)!==n)return;s=!1}else for(;!(s=(t=l.call(n)).done)&&(o.push(t.value),o.length!==r);s=!0);}catch(e){i=!0,a=e}finally{try{if(!s&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(i)throw a}}return o}}(n,f)||function(e,r){if(e){if("string"==typeof e)return b(e,r);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,r):void 0}}(n,f)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),K=J[0],$=J[1],G="list"===N,V=G?"card-img-left":"card-img-top";return a().createElement("div",{ref:r,onClick:function(){T(g)},className:"gn-resource-card".concat(E?" active":"").concat(j?" read-only":""," gn-card-type-").concat(N," ").concat(G?"rounded-0":"").concat(I?" ".concat(I):"")},!j&&a().createElement("a",{className:"gn-resource-card-link",href:_(q)}),!j&&O&&O.length>0&&!G&&a().createElement(y,{buildHrefByTemplate:P,resource:q,options:O,readOnly:j}),a().createElement("div",{className:"card-resource-".concat(N)},K||!q.thumbnail_url?a().createElement("div",{className:"".concat(V," card-img-placeholder")},a().createElement(c.Z,{name:R})):a().createElement("img",{className:V,src:q.thumbnail_url,onError:function(){return $(!0)}}),a().createElement("div",{className:"gn-resource-card-body-wrapper"},a().createElement("div",{className:"card-body"},a().createElement("div",{className:"card-title"},a().createElement("div",null,R&&!k&&!S&&a().createElement(a().Fragment,null,a().createElement(d.Z,{readOnly:j,href:w({query:{f:q.resource_type}})},a().createElement(c.Z,{name:R}))),(k||S)&&a().createElement(s.Z,null),a().createElement(d.Z,{className:H?"gn-featured-card-title":"gn-card-title",readOnly:j,href:_(q)},q.title)),a().createElement("div",null,a().createElement(u.Z,{resource:q})),a().createElement("div",null,a().createElement(h.Z,{resource:q}))),a().createElement("p",{ref:C,className:"card-text gn-card-description ".concat(N)},q.raw_abstract?q.raw_abstract:"..."),G&&(null==C||null===(p=C.current)||void 0===p?void 0:p.clientHeight)<(null==C||null===(v=C.current)||void 0===v?void 0:v.scrollHeight)?a().createElement("span",{className:"ellipsis"},"..."):null,!j&&O&&O.length>0&&G&&a().createElement(y,{buildHrefByTemplate:P,resource:q,options:O,readOnly:j})),a().createElement("div",{className:"gn-footer-wrapper"},a().createElement("div",{className:"gn-card-footer",style:{padding:O&&0===O.length?"0 0.25rem 0 0.5rem":"0 0.5rem"}},a().createElement(m.Z,{resource:q,readOnly:j,formatHref:w}),a().createElement("div",{className:"gn-card-actions"},!j&&(M||z)&&a().createElement("div",{className:"".concat(O&&0===O.length?"gn-card-view-editor-right":"gn-card-view-editor")},a().createElement(o.Z,{variant:"primary",href:Q||U?M:z,rel:"noopener noreferrer"},a().createElement(l.Z,{msgId:"gnhome.view"})))))))))}));E.defaultProps={links:[],theme:"light",getTypesInfo:i.s2,formatHref:function(){return"#"},featured:!1,onClick:function(){}};const O=E},138241:(e,r,n)=>{n.d(r,{Z:()=>g});var t=n(124852),a=n.n(t),l=n(805346),c=n(45697),o=n.n(c),s=n(507412),i=n(815135),u=n(441609),d=n.n(u),m=n(535721),f=n(638323),p=(0,i.Z)(f.Z),v=function(e){var r,n,t,c=e.resource,o=void 0===c?{}:c,i=(0,m.fu)(o),u=i.isApproved,f=i.isPublished,v=i.isProcessing,g=i.isCopying,y=i.isDeleting,h=i.isDeleted;return d()(o)?null:a().createElement("p",{className:"gn-resource-status-text"},!v&&(!u||!f)&&a().createElement(p,{variant:"default",className:"gn-resource-status gn-status-button",tooltip:(r={isApproved:u,isPublished:f},n=r.isApproved,t=r.isPublished,!n&&t?a().createElement(l.Z,{msgId:"gnhome.pendingApproval"}):n||t?t||n?"":a().createElement(l.Z,{msgId:"gnhome.unpublished"}):a().createElement(l.Z,{msgId:"gnhome.unApprovedunPublished"})),style:{marginRight:(y||h||g)&&"0.4rem"},tooltipPosition:"top"},a().createElement(s.Z,{name:"info-circle",className:"gn-resource-status-pending"})),y&&a().createElement("span",{className:"gn-resource-status gn-resource-status-danger"},a().createElement(l.Z,{msgId:"gnviewer.deleting"})),h&&a().createElement("span",{className:"gn-resource-status gn-resource-status-danger"},a().createElement(l.Z,{msgId:"gnviewer.deleted"})),g&&a().createElement("span",{className:"gn-resource-status gn-resource-status-primary"},a().createElement(l.Z,{msgId:"gnviewer.cloning"})))};v.propTypes={isApproved:o().bool,isPublished:o().bool},v.defaultProps={isApproved:!0,isPublished:!0};const g=v},228261:(e,r,n)=>{n.d(r,{Z:()=>u});var t=n(124852),a=n.n(t),l=n(45697),c=n.n(l),o=["id","className","style","children"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)({}).hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},s.apply(null,arguments)}function i(e){var r=e.id,n=e.className,t=e.style,l=e.children,c=function(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(r.includes(t))continue;n[t]=e[t]}return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,o),i=n?" "+n:"";return a().createElement(a().Fragment,null,a().createElement("div",s({},c,{id:r,className:"gn-spinner".concat(i),style:t}),a().createElement("div",null)),l)}i.propTypes={id:c().string,className:c().string,style:c().object},i.defaultProps={};const u=i},51605:(e,r,n)=>{n.d(r,{Z:()=>t.Z});var t=n(228261)},30762:(e,r,n)=>{n.d(r,{Z:()=>d});var t=n(124852),a=n.n(t),l=n(414293),c=n.n(l),o=n(815135),s=n(17594);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)({}).hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},i.apply(null,arguments)}var u=(0,o.Z)((function(e){return a().createElement("div",i({},e,{className:"gn-unadvertised"}),a().createElement(s.Z,{name:"eye-slash"}))}));const d=function(e){var r=e.resource;return c()(r.advertised)||r.advertised?null:a().createElement(u,{tooltipId:"gnviewer.unadvertised",className:"gn-unadvertised"})}}}]);