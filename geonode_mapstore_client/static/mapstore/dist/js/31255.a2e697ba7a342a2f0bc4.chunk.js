(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[31255],{285148:(t,r,e)=>{"use strict";e.d(r,{Qw:()=>p,jo:()=>h,m$:()=>O,AF:()=>w,WT:()=>j,ns:()=>S,RP:()=>D,aK:()=>P,oP:()=>T});var n=e(675110),u=e(55237),i=e(22222),o=e(227361),a=e.n(o),c=e(313311),f=e.n(c);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t){return function(t){if(Array.isArray(t))return d(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||y(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,r){if(t){if("string"==typeof t)return d(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?d(t,r):void 0}}function d(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function m(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function g(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?m(Object(e),!0).forEach((function(r){b(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):m(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function b(t,r,e){var n;return n=function(t,r){if("object"!=l(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r),(r="symbol"==l(n)?n:n+"")in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}var p=function(t,r){return function(e){return a()(e,"dimension.data[".concat(r,"][").concat(t,"]"))}},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;return f()(t.dimensions||[],{name:r})},h=function(t,r){return function(e){return p(t.id,r)(e)||v(t,r)}},O=function(t){return(0,n.l2)(t).reduce((function(r,e){var n=h(e,"time")(t);return n?g(g({},r),{},b({},e.id,n)):r}),{})},w=function(t){return(0,n.l2)(t).filter((function(t){return v(t,"time")}))},j=function(t){var r=a()(t,"dimension.currentTime");return r&&r.split("/")[0]},S=function(t){return a()(t,"dimension.offsetTime")},D=function(t){return!!S(t)},P=((0,i.P1)(O,(function(t){return Object.keys(t).reduce((function(r,e){return[].concat(s(r),s(t[e]&&t[e].values||[]))}),[]).sort()||[]})),function(t){return function(r){return s(a()(h(t,"time")(r),"values",[])).sort()}}),T=function(t,r){var e=p(r,"time")(t),n=e&&e.domain&&e.domain.split("--");if(n&&2===n.length)return n&&{start:n[0],end:n[1]};var i,o,a=e&&e.domain&&e.domain.split(",");if(a&&a.length>0){var c=(i=(0,u.tz)(a),o=2,function(t){if(Array.isArray(t))return t}(i)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,u,i,o,a=[],c=!0,f=!1;try{if(i=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;c=!1}else for(;!(c=(n=i.call(e)).done)&&(a.push(n.value),a.length!==r);c=!0);}catch(t){f=!0,u=t}finally{try{if(!c&&null!=e.return&&(o=e.return(),Object(o)!==o))return}finally{if(f)throw u}}return a}}(i,o)||y(i,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());return{start:c[0],end:c[1]}}return null}},731255:(t,r,e)=>{"use strict";e.d(r,{u$:()=>j,Xh:()=>S,_w:()=>D,eO:()=>P,kG:()=>T,P3:()=>q,bq:()=>I,LB:()=>E,b4:()=>C,M0:()=>F,Li:()=>k,Rd:()=>x,g5:()=>L,Sj:()=>U,o:()=>_,eK:()=>z,jY:()=>G,ND:()=>H,OK:()=>N,tU:()=>K,ou:()=>$,DK:()=>Q,Gl:()=>R,uz:()=>B,Ci:()=>V,Ae:()=>W,gz:()=>Y,He:()=>X,P4:()=>J,kd:()=>Z,TC:()=>tt,nq:()=>rt,Vf:()=>et,lg:()=>nt});var n=e(91175),u=e.n(n),i=e(227361),o=e.n(i),a=e(513218),c=e.n(a),f=e(675110),l=e(378889),s=e(308316),y=e(552259),d=e(196958),m=e(285148),g=e(274621),b=e(93152),p=e(824260);function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function h(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function O(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?h(Object(e),!0).forEach((function(r){var n,u,i,o;n=t,u=r,i=e[r],o=function(t,r){if("object"!=v(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(u),(u="symbol"==v(o)?o:o+"")in n?Object.defineProperty(n,u,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[u]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):h(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}var w=f.CA,j=function(t){return o()(t,"featuregrid.selectedLayer")},S=function(t){return o()(t,"featuregrid.attributes")},D=function(t){return t&&t.featuregrid&&t.featuregrid.select},P=function(t){return t&&t.featuregrid&&t.featuregrid.changes},T=function(t){return t&&t.featuregrid&&t.featuregrid.newFeatures},q=function(t){return u()(D(t))},A=function(t){var r=(0,p.Qs)(t);if(r){var e=(0,l.findGeometryProperty)(r);return e&&e.localType}return null},M=["Geometry","GeometryCollection"],I=function(t){return!u()(M.filter((function(r){return A(t)===r})))},E=function(t){return P(t)&&P(t).length>0},C=function(t){return T(t)&&T(t).length>0},F=function(t){return t&&t.featuregrid&&t.featuregrid.filters},k=function(t){return w(t,j(t))},x=function(t){return t&&t.featuregrid&&t.featuregrid.open},L=function(t,r){return o()(F(t),r)},U=function(t){var r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.title||t.name}(w(t,j(t)));return c()(r)?r[(0,s.Pz)(t)]||r.default||"":r},_=function(t){return((0,p.L)(t)||[]).map((function(r){var e=function(t,r){return o()(t,"featuregrid.attributes[".concat(r.name||r.attribute,"]"))}(t,r);return e?O(O({},r),e):r}))},z=function(t){return t&&t.featuregrid&&t.featuregrid.mode},G=function(t){return(D(t)||[]).length},H=function(t){return(0,d.rK)(P(t))},N=function(t){return function(t){var r=q(t);if(r){var e=(0,d.rK)(P(t));return!((!e[r.id]||null===e[r.id].geometry)&&(e[r.id]&&null===e[r.id].geometry||r._new&&u()(T(t))&&null===u()(T(t)).geometry||(!r._new||!u()(T(t))||null===u()(T(t)).geometry)&&null===r.geometry))}return!1}(t)},K=function(t){return o()(t,"featuregrid.showAgain",!1)},$=function(t){if(o()(t,"featuregrid.showTimeSync",!1)){var r=j(t);return(0,m.jo)({id:r},"time")(t)}return null},Q=function(t){return o()(t,"featuregrid.timeSync",!1)},R=function(t){return o()(t,"featuregrid.showPopoverSync",!0)},B=function(t){return t&&t.featuregrid&&t.featuregrid.saving},V=function(t){return t&&t.featuregrid&&t.featuregrid.saved},W=function(t){return t&&t.featuregrid&&t.featuregrid.drawing},Y=function(t){return o()(t,"featuregrid.multiselect",!1)},X=function(t){return(0,y.isSimpleGeomType)(A(t))},J=function(t){return t.featuregrid&&t.featuregrid.dockSize},Z=function(t){var r=w(t,j(t));return r&&r.name||""},tt=function(t){var r=function(t){return o()(w(t,j(t)),"params")}(t);return{viewParams:r&&(r.VIEWPARAMS||r.viewParams||r.viewparams),cqlFilter:r&&(r.CQL_FILTER||r.cqlFilter||r.cql_filter)}},rt=function(t){var r=(0,g.L3)(t),e=function(t){return o()(t,"featuregrid.editingAllowedRoles",["ADMIN"])}(t)||["ADMIN"],n=function(t){return t&&t.featuregrid&&t.featuregrid.canEdit}(t);return(-1!==e.indexOf(r)||n)&&!(0,b.c0)(t)},et=function(t){return o()(t,"featuregrid.pagination")},nt=function(t){return o()(t,"featuregrid.useLayerFilter",!0)}},824260:(t,r,e)=>{"use strict";e.d(r,{qj:()=>v,Bu:()=>h,UM:()=>O,X1:()=>w,L:()=>j,HY:()=>S,Mz:()=>D,F0:()=>P,dc:()=>T,b0:()=>q,hk:()=>A,Qs:()=>M,gy:()=>I,M7:()=>E,VD:()=>C});var n=e(414293),u=e.n(n),i=e(227361),o=e.n(i),a=e(91175),c=e.n(a),f=e(701469),l=e.n(f),s=e(630998),y=e.n(s);function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function m(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function g(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?m(Object(e),!0).forEach((function(r){var n,u,i,o;n=t,u=r,i=e[r],o=function(t,r){if("object"!=d(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(u),(u="symbol"==d(o)?o:o+"")in n?Object.defineProperty(n,u,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[u]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):m(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}var b=function(t){return o()(t,"query.filterObj.featureTypeName")},p=function(t){return function(r){return o()(r,'query.featureTypes["'.concat(t,'"]'))}},v=function(t,r){return o()(p(r)(t),"original")},h=function(t){return t&&t.query&&t.query.searchUrl},O=function(t){return t&&t.query&&t.query.url},w=function(t){return t&&t.query&&t.query.filterObj},j=function(t){return o()(p(b(t))(t),"attributes")},S=function(t){return o()(t,"query.typeName")},D=function(t){return o()(t,"query.result.features")},P=function(t){var r=o()(t,"query.result");return g(g({},r),{},{features:(r&&r.features||[]).filter((function(t){return!u()(t.geometry)}))})},T=function(t,r){var e=t&&t.query&&t.query.result&&t.query.result.features;return c()(e.filter((function(t){return t.id===r})))},q={startIndex:function(t){return o()(t,"query.filterObj.pagination.startIndex")},maxFeatures:function(t){return o()(t,"query.filterObj.pagination.maxFeatures")},resultSize:function(t){return o()(t,"query.result.features.length")},totalFeatures:function(t){return o()(t,"query.result.totalFeatures")}},A=function(t,r){var e=p(r)(t);return!!(e&&e.attributes&&e.geometry&&e.original)},M=function(t){return v(t,b(t))},I=function(t){return o()(t,"query.featureLoading")},E=function(t){return o()(t,"query.syncWmsFilter",!1)},C=function(t){var r=o()(t,"query.filterObj.crossLayerFilter"),e=o()(t,"query.filterObj.spatialField"),n=o()(t,"query.filterObj.filterFields");return!!(n&&c()(n)||e&&(e.method&&e.operation&&e.geometry||l()(e)&&y()(e,(function(t){return t.method&&t.operation&&t.geometry}))>-1)||r&&r.collectGeometries&&r.operation)}},274621:(t,r,e)=>{"use strict";e.d(r,{np:()=>n,L3:()=>u,jl:()=>i,y8:()=>o,qg:()=>a}),e(727418),e(227361);var n=function(t){return t&&t.security&&t.security.user},u=function(t){return n(t)&&n(t).role},i=function(t){return t&&t.security&&t.security.user},o=function(t){return t.security&&t.security.token},a=function(t){return"ADMIN"===u(t)}},55237:(t,r,e)=>{"use strict";e.d(r,{tr:()=>w,jb:()=>j,Xu:()=>S,un:()=>D,Qn:()=>P,_q:()=>T,og:()=>q,$4:()=>A,kN:()=>M,oD:()=>I,V$:()=>E,uH:()=>C,pC:()=>F,tz:()=>k,p:()=>x});var n=e(747037),u=e.n(n),i=e(647960),o=e.n(i),a=e(227361),c=e.n(a),f=e(984596),l=e.n(f),s=e(730381),y=e.n(s),d=e(86638);function m(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||b(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,u,i,o,a=[],c=!0,f=!1;try{if(i=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;c=!1}else for(;!(c=(n=i.call(e)).done)&&(a.push(n.value),a.length!==r);c=!0);}catch(t){f=!0,u=t}finally{try{if(!c&&null!=e.return&&(o=e.return(),Object(o)!==o))return}finally{if(f)throw u}}return a}}(t,r)||b(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,r){if(t){if("string"==typeof t)return p(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?p(t,r):void 0}}function p(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var v=/PT?[\d\.]+[YMWDHMS]/,h=function(t){return t?u()(t)?new Date(t).getTime():(o()(t)&&t.getTime(),t):null},O=function(t){var r=t.start,e=t.end,n=t.duration,u=y().duration(n).asMilliseconds();return(new Date(e).getTime()-new Date(r).getTime())/u},w=function(t){for(var r=t.start,e=t.end,n=t.duration,u=y().duration(n).asMilliseconds(),i=[],o=new Date(r),a=new Date(e);o<=a;)i.push(new Date(o).toISOString()),o.setTime(o.getTime()+u);return i},j=function(t){var r=t.start,e=t.end,n=t.duration;return w({start:r,end:e,duration:n}).map((function(t){return{start:new Date(t),end:new Date(new Date(t).getTime()+y().duration(n).asMilliseconds())}}))},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.start,e=t.end,n=t.duration,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=u.start,o=u.end;if(!i||!o)return{count:O({start:r,end:e,duration:n}),start:r,end:e};var a=y().duration(n).asMilliseconds(),c=new Date(r).getTime(),f=new Date(e).getTime(),l=new Date(i).getTime(),s=new Date(o).getTime(),d=Math.ceil((l-c)/a),m=Math.floor((s-c)/a),g=Math.floor((f-c)/a);if(d>=0&&m<=g){var b=m-d;return{start:new Date(c+Math.max(0,d)*a),end:new Date(c+Math.min(g,m)*a),count:b}}return{count:O({start:r,end:e,duration:n}),start:r,end:e}},D=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.start,e=t.end,n=arguments.length>1?arguments[1]:void 0,u=new Date(r),i=new Date(e),o=Math.floor(i.getTime()-u.getTime())/n;return{range:{start:r,end:e},resolution:y().duration(o).toISOString().match(v)[0]}},P=function(){var t,r,e=arguments.length>1?arguments[1]:void 0,n=(t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],(r=arguments.length>2?arguments[2]:void 0)?t.map((function(t){var e=g(t.split("/"),2);return{start:e[0],end:e[1]}[r]})):t);return n[function(t,r){var e=h(r),n=1/0,u=-1;return t.forEach((function(t,r){var i=h(t),o=Math.abs(i-e);o<n&&(n=o,u=r)})),u}(n,e)]},T=function(t){return t&&t.indexOf&&t.indexOf("--")>0},q=function(t,r){var e=y()(t).diff(r);return{start:e>=0?r:t,end:e>=0?t:r}},A=function(t){return 6e4*t.getTimezoneOffset()},M=function(t){var r=t;!o()(t)&u()(t)&&(r=new Date(t));var e=r.getUTCHours();e=e<10?"0"+e:e;var n=r.getUTCMinutes();n=n<10?"0"+n:n;var i=r.getUTCSeconds();return i=i<10?"0"+i:i,"".concat(e,":").concat(n,":").concat(i)},I=function(t){var r=t;!o()(t)&u()(t)&&(r=new Date(t));var e=r.getUTCMonth()+1,n=r.getUTCDate();return e=e<10?"0"+e:e,n=n<10?"0"+n:n,"".concat(r.getUTCFullYear(),"-").concat(e,"-").concat(n)},E=function(t,r){var e=(0,d.mh)(t),n="HH:mm:SS";switch(r){case"time":return n;case"date":return e;default:return e+" "+n}},C=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).Domains,r=void 0===t?{}:t,e=arguments.length>1?arguments[1]:void 0,n=l()(r.DimensionDomain||[]).concat(),u=r["@version"]||r.version,i=c()(r,"SpaceDomain.BoundingBox");return i&&n.push({Identifier:"space",Domain:i}),n.map((function(t){var r=t.Identifier,n=t.Domain;return{source:{type:"multidim-extension",version:u,url:e},name:r,domain:n}}))},F=function(t,r,e){var n=h(r),u=h(e);return t.reduce((function(t,r){var e=h(r);return h(n)<e&&h(u)>e?[].concat(m(t),[r]):m(t)}),[])},k=function(t){var r=t.reduce((function(t,r){if(-1!==r.indexOf("/")){var e=g(r.split("/"),2),n=e[0],u=e[1];return[].concat(m(t),[n,u])}return[].concat(m(t),[r])}),[]).sort();return[r[0],r[r.length-1]]},x=function(t,r,e){var n=y()(t);return("add"===e?n.add(r,"seconds"):n.subtract(r,"seconds")).toISOString()}}}]);