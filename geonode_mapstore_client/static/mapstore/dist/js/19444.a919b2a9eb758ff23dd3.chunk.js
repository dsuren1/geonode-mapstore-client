(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[19444],{757676:(t,n,e)=>{"use strict";e.d(n,{qx:()=>r,HM:()=>o,Lv:()=>i,y3:()=>u,iv:()=>a,cO:()=>c,br:()=>l,aA:()=>s,Xe:()=>f,Nb:()=>p,_V:()=>m,kq:()=>y,JU:()=>d,PQ:()=>b,cb:()=>v,KI:()=>g,lz:()=>E,m7:()=>h,Wb:()=>I,Hz:()=>S,M5:()=>T,w2:()=>L,w:()=>O,Z7:()=>N,p:()=>w,_e:()=>A});var r="TIMELINE:SELECT_TIME",o=function(t,n,e,o){return{type:r,time:t,group:n,what:e,item:o}},i="TIMELINE:RANGE_CHANGE",u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.start,e=t.end;return{type:i,start:n,end:e}},a="TIMELINE:RANGE_DATA_LOADED",c=function(t,n,e,r){return{type:a,layerId:t,range:n,histogram:e,domain:r}},l="TIMELINE:LOADING",s=function(t,n){return{type:l,layerId:t,loading:n}},f="TIMELINE:INIT_SELECT_LAYER",p=function(t){return{type:f,layerId:t}},m="TIMELINE:SELECT_LAYER",y=function(t){return{type:m,layerId:t}},d="TIMELINE:ENABLE_OFFSET",b=function(t){return{type:d,enabled:t}},v="TIMELINE:AUTOSELECT",g=function(){return{type:v}},E="TIMELINE:SET_SNAP_TYPE",h=function(t){return{type:E,snapType:t}},I="TIMELINE:SET_END_VALUES_SUPPORT",S=function(t){return{type:I,endValuesSupport:t}},T="TIMELINE:SET_COLLAPSED",L=function(t){return{type:T,collapsed:t}},O="TIMELINE:SET_MAP_SYNC",N=function(t){return{type:O,mapSync:t}},w="TIMELINE:INIT_TIMELINE",A=function(t,n,e,r){return{type:w,showHiddenLayers:t,expandLimit:n,snapType:e,endValuesSupport:r}}},997291:(t,n,e)=>{"use strict";e.d(n,{YK:()=>S,oo:()=>T,zb:()=>L,en:()=>O,pW:()=>N,ei:()=>w,Hc:()=>A,cX:()=>_,__:()=>P,E2:()=>M,Li:()=>D,fP:()=>x,uy:()=>C,gB:()=>k,Ry:()=>R,m_:()=>V,dJ:()=>F,rV:()=>G,qJ:()=>H,pn:()=>U,F3:()=>Y});var r=e(227361),o=e.n(r),i=e(91175),u=e.n(i),a=e(22222),c=e(784715),l=e(986267),s=e(55237),f=e(285148),p=e(800827),m=e(675110);function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function d(t){return function(t){if(Array.isArray(t))return I(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||h(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?b(Object(e),!0).forEach((function(n){g(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):b(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function g(t,n,e){return(n=function(t){var n=function(t,n){if("object"!==y(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===y(n)?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function E(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(e=e.call(t)).next,0===n){if(Object(e)!==e)return;c=!1}else for(;!(c=(r=i.call(e)).done)&&(a.push(r.value),a.length!==n);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=e.return&&(u=e.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,n)||h(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,n){if(t){if("string"==typeof t)return I(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?I(t,n):void 0}}function I(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var S=function(t){return o()(t,"timeline.range")},T=function(t){return o()(t,"timeline.settings.expandLimit")},L=function(t){return o()(t,"timeline.settings.collapsed")},O=function(t){return o()(t,"timeline.settings.autoSelect")},N=function(t){return o()(t,"timeline.settings.snapType")||"start"},w=function(t){return o()(t,"timeline.settings.snapRadioButtonEnabled")||!1},A=function(t){return o()(t,"timeline.settings.endValuesSupport")},_=function(t){return o()(t,"timeline.settings.mapSync")},j=function(t,n){return(t||[]).reduce((function(t,e){return[].concat(d(t),d(function(t,n){var e=E(t.split("/"),3),r=e[0],o=e[1],i=e[2];if(i&&"0"!==i){var u=(0,s.Xu)({start:r,end:o,duration:i},n),a=u.count,c=u.start,l=u.end;return a>50?[{start:r,end:o,duration:i,type:"range",content:"".concat(a," items")}]:(0,s.tr)({start:c,end:l,duration:i}).map((function(t){return{start:new Date(t),end:new Date(t),type:"point"}}))}return isNaN(new Date(r).getTime())?null:[v({start:new Date(r),end:new Date(o||r),type:o?"range":"point"},o&&{className:"interval"})]}(e,n)))}),[]).filter((function(t){return t&&t.start}))},P=(0,c.y)(f.m$,S,(function(t){return o()(t,"timeline.rangeData")}),(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return d(Object.keys(t).map((function(r){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,e=arguments.length>2?arguments[2]:void 0;return t&&t.values||t&&t.domain&&!(0,s._q)(t.domain)?j(t.values||t.domain.split(","),n):e&&e.histogram?function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(t.domain&&t.domain.values)return j(t.domain.values,n);if(t.histogram&&t.histogram.domain&&t.histogram.values){var e=E(t.histogram.domain.split("/"),3),r=e[0],o=e[1],i=e[2],u=Math.max.apply(Math,d(t.histogram.values)),a=(0,s.jb)({start:r,end:o,duration:i});return t.histogram.values.map((function(t,n){return v(v({},a[n]),{},{type:"range",itemType:"histogram",count:t,className:"histogram-item",content:'<div><div class="histogram-box" style="height: '.concat(100*t/u,'%"></div> <span class="histogram-count">').concat(t,"</span></div>")})}))}return[]}(e,n):[]}(t[r],n,e[r]).map((function(){return v(v({content:" "},arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),{},{group:r})}))})).reduce((function(t,n){return[].concat(d(t),d(n))}),[]))})),M=function(t){return o()(t,"timeline.loading")},D=function(t){return o()(t,"timeline.selectedLayer")},x=function(t){return(0,m.CA)(t,D(t))},C=function(t){return x(t)&&x(t).name},k=function(t){return x(t)&&x(t).dimensions&&u()(x(t).dimensions.filter((function(t){return"time"===t.name})))},R=function(t){return o()(k(t),"source.url")},V=(0,a.P1)(f.WT,f.ns,(function(t,n){return{start:t,end:n}})),F=function(t){return(0,f.oP)(t,D(t))},G=f.AF,H=(0,a.P1)(G,(function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).length>0})),U=function(t){return!L(t)&&H(t)},Y=function(t){return function(n){var e=((0,p.Od)(n)||{}).bbox;if(!e)return{};var r=(0,f.Qw)(t,"time")(n),i=o()(r,"source.version"),u=Object.keys(e.bounds).reduce((function(t,n){return v(v({},t),{},g({},n,parseFloat(e.bounds[n])))}),{});if(!u||!_(n))return{};if("1.2"!==i){var a=(0,f.Qw)(t,"space")(n),c=o()(a,"domain.CRS");if(!c||!u||!_(n))return{};var s=E((0,l.reprojectBbox)(u,(0,p.uy)(n),c),4),m=s[0],y=s[1],d=s[2],b=s[3];return d<m&&"EPSG:4326"===c&&(d+=360),{bbox:"".concat(m,",").concat(y,",").concat(d,",").concat(b),crs:c}}var h=u.minx,I=u.miny,S=u.maxx,T=u.maxy,L=e.crs;return{bbox:"".concat(h,",").concat(I,",").concat(S,",").concat(T,",").concat(L)}}}}}]);