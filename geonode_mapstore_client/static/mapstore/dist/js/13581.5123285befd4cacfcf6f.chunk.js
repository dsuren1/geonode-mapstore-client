(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[13581,45992],{45992:(t,r,e)=>{"use strict";e.d(r,{h:()=>s,Z:()=>p});var n=e(535937),o=e.n(n),i=e(836882),u=e(737275);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?c(Object(e),!0).forEach((function(r){l(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function l(t,r,e){return(r=function(t){var r=function(t){if("object"!=a(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var e=r.call(t,"string");if("object"!=a(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==a(r)?r:r+""}(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}var s=function(t,r){var e,n,a,c,l=i.Z;if("custom"===t)e=r;else if(a=(c=t.split("."))[0],n=c[1],!(e=l[a]))throw new Error("No such provider ("+a+")");var s={url:e.url,options:e.options||{}};if(n&&"variants"in e){if(!(n in e.variants))throw new Error("No such variant of "+(a||e.url)+" ("+n+")");var p,y=e.variants[n];p="string"==typeof y?{variant:y}:y.options,s={url:y.url||s.url,options:f(f({},s.options||{}),p)}}else"function"==typeof s.url&&(s.url=s.url(c.splice(1,c.length-1).join(".")));var b="file:"===window.location.protocol||s.options.forceHTTP;0===s.url.indexOf("//")&&b&&(s.url="http:"+s.url),s.options.retina&&(r.detectRetina&&u.ZP.getBrowserProperties().retina?r.detectRetina=!1:s.options.retina=""),s.options.attribution&&(s.options.attribution=function t(r){return-1===r.indexOf("{attribution.")?r:r.replace(/\{attribution.(\w*)\}/,(function(r,e){return t(l[e].options.attribution)}))}(s.options.attribution));var m=f(f({},s.options),o()(r,(function(t){return void 0!==t})));return[s.url,m]};const p={getLayerConfig:s}},218056:(t,r,e)=>{"use strict";e.d(r,{XK:()=>i,Um:()=>u,ut:()=>a});var n=e(701469),o=e.n(n);function i(){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").replace(/(\{(.*?)\})/g,(function(){var r=arguments[0],e=arguments[2]?arguments[2]:arguments[1];if(["x","y","z"].includes(e))return arguments[0];var n=t[e];if(void 0===n)throw new Error("No value provided for variable "+r);return"function"==typeof n&&(n=n(t)),n}))}function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.url||"",e=t.subdomains||"";return e&&("string"==typeof e&&(e=e.split("")),o()(e))?e.map((function(e){return i(r.replace("{s}",e),t)})):["a","b","c"].map((function(e){return i(r.replace("{s}",e),t)}))}var a=function(t){return(t.url.match(/(\{s\})/)?u(t):[i(t.url,t)])[0]}},423923:(t,r,e)=>{"use strict";e.d(r,{A4:()=>c,u3:()=>f});var n=e(623560),o=e.n(n);function i(t,r,e){var n=void 0!==e?t.toFixed(e):""+t,o=n.indexOf(".");return(o=-1===o?n.length:o)>r?n:new Array(1+r-o).join("0")+n}var u={standard:function(t){return function(r){return"EPSG:4326"===r?(e="x"===t?"EW":"NS",function(t){var r,n=(360*(r=(t+180)%360)<0?r+360:r)-180,o=Math.abs(3600*n),u=Math.floor(o/3600),a=Math.floor((o-3600*u)/60),c=o-3600*u-60*a;return(c=Math.ceil(c))>=60&&(c=0,a+=1),a>=60&&(a=0,u+=1),u+"° "+i(a,2)+"′ "+i(c,2,0)+"″"+(0===n?"":" "+e.charAt(n<0?1:0))}):function(t){return String(Math.round(t))};var e}}};function a(t,r,e){return o()(e)?e(t,r):u[e||"standard"](r)(t)}function c(t,r){return a(t,"x",r)}function f(t,r){return a(t,"y",r)}},984023:(t,r,e)=>{"use strict";e.d(r,{bL:()=>L,ZS:()=>E,uI:()=>G,XA:()=>C});var n=e(490173),o=e(916651),i=e(774565),u=e(405797),a=e(423923),c=e(8400),f=e.n(c),l=e(875472),s=e.n(l),p=e(552259);function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function b(t){return function(t){if(Array.isArray(t))return x(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||g(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?m(Object(e),!0).forEach((function(r){d(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):m(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function d(t,r,e){return(r=function(t){var r=function(t){if("object"!=y(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var e=r.call(t,"string");if("object"!=y(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==y(r)?r:r+""}(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function h(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i,u,a=[],c=!0,f=!1;try{if(i=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;c=!1}else for(;!(c=(n=i.call(e)).done)&&(a.push(n.value),a.length!==r);c=!0);}catch(t){f=!0,o=t}finally{try{if(!c&&null!=e.return&&(u=e.return(),Object(u)!==u))return}finally{if(f)throw o}}return a}}(t,r)||g(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t,r){if(t){if("string"==typeof t)return x(t,r);var e={}.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?x(t,r):void 0}}function x(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}function w(t,r,e){var n=h(t,2),o=n[0],i=n[1],u=h(r,2),a=u[0],c=u[1],f=h(e,2),l=f[0],s=f[1],p=l-a,y=s-c,b=a,m=c;if(0!==p||0!==y){var v=((o-a)*p+(i-c)*y)/(p*p+y*y);v>1?(b=l,m=s):v>0&&(b+=p*v,m+=y*v)}return function(t,r,e,n){return Math.pow(e-t,2)+Math.pow(n-r,2)}(o,i,b,m)}var j=1e4;function O(t,r,e){var n=r(t);return{fraction:t,point:n,reprojected:e(n)}}function S(t,r,e,o){var i=(0,n.default)(r,e).forward,u=function(t,r,e){var n=t.map(r);return{fractions:t,line:n,reprojectedLine:n.map(e)}}([0,1],t,i),a=u.fractions,c=u.line,f=u.reprojectedLine,l=[];l=function(t,r){return t.push(r[0]),t.push(r[1]),t}(l,f[0]);for(var s=0;s<j&&a.length>0;){var p=a.shift(),y=a.shift(),b=c.shift(),m=c.shift(),v=f.shift(),d=f.shift(),h=O((p+y)/2,t,i),g=h.fraction,x=h.point,S=h.reprojected;w(S,v,d)<o?(l.push(d[0]),l.push(d[1])):(a.unshift(p,g,g,y),c.unshift(b,x,x,m),f.unshift(v,S,S,d)),s++}return l}function P(t,r,e){return Math.min(Math.max(t,r),e)}var M={degrees:[90,45,30,20,10,5,2,1,.5,.2,.1,.05,.01,.005,.002,.001],m:[1e7,5e6,2e6,1e6,5e5,2e5,1e5,5e4,2e4,1e4,5e3,2e3,1e3,500,200,100]};function L(t){var r,e=n.default.defs(t);return M[null!==(r=null==e?void 0:e.units)&&void 0!==r?r:"m"]}function E(t,r,e,n,o){var i=h(r,2),u=i[0],a=i[1],c=Math.pow(e*n,2);return t.reduce((function(t,r){var e=r/2,n=o([u-e,a-e]),i=o([u+e,a+e]);return Math.pow(i[0]-n[0],2)+Math.pow(i[1]-n[1],2)>c?r:t}),-1)}function A(t,r,e,n,o){return t.map((function(t,i){var u=function(t,r,e){var n=Math.max(r[1],t[1]),o=Math.min(r[3],t[t.length-1]),i=P(r[1]+Math.abs(r[1]-r[3])*e,n,o);return[t[0],i]}(t,r,n);return{geom:u,text:e(t[0],v(v({},o),{},{index:i,extent:r}))}}))}function F(t,r,e,n,o){return t.map((function(t,i){var u=function(t,r,e){var n=Math.max(r[0],t[0]),o=Math.min(r[2],t[t.length-2]);return[P(r[0]+Math.abs(r[0]-r[2])*e,n,o),t[1]]}(t,r,n);return{geom:u,text:e(t[1],v(v({},o),{},{index:i,extent:r}))}}))}function T(t,r,e,n){return b(Array(function(t,r,e){return Math.round((r-t)/e)+1}(e,n,Math.abs(r))-1).keys()).map((function(o){return P(t+(o+1)*r,e,n)}))}function D(t,r){return(0,u.Z)({type:"Feature",geometry:{type:"LineString",coordinates:[[t[0],t[1]],[t[2],t[3]]]}},(0,o.bboxToFeatureGeometry)(r))}function _(t,r){return t.slice(0,r)}function k(t){var r=h(t,4),e=r[0],n=r[1],o=r[2],i=r[3];return[[e,n],[o,n],[o,i],[e,i],[e,n]]}function G(t,r,e,i,u,a,c,f,l,p,y,m,v,d){var g=arguments.length>14&&void 0!==arguments[14]?arguments[14]:{};if(-1===t)return{xLines:[],yLines:[],xLabels:[],yLabels:[],frame:null};var x=h((0,(0,n.default)(r,e).forward)(a),2),w=x[0],j=x[1],O=h((0,o.reprojectBbox)([Math.max(i[0],u[0]),Math.max(i[1],u[1]),Math.min(i[2],u[2]),Math.min(i[3],u[3])],r,e||"EPSG:4326"),4),M=O[0],L=O[1],E=O[2],G=O[3],I=h((0,o.reprojectBbox)(u,r,e||"EPSG:4326"),4),C=I[0],R=I[1],Z=I[2],z=I[3],N=P(Math.floor(w/t)*t,C,Z),B=s()(T(N,-t,M,N)),U=s()(T(N,t,N,E)),V=P(Math.floor(j/t)*t,R,z),X=s()(T(V,-t,L,V)),H=s()(T(V,t,V,G)),K=_([].concat(b(B),[N],b(U)).map((function(t){return function(t,r,e,n,o,i){return function(t,r,e,n,o,i){return S((function(n){return[t,r+(e-r)*n]}),n,o,i)}(t,r,e,o,i,n)}(t,L,G,c,e||"EPSG:4326",r)})).filter((function(t){return D(t,i)})),f),W=_([].concat(b(X),[V],b(H)).map((function(t){return function(t,r,e,n,o,i){return function(t,r,e,n,o,i){return S((function(n){return[r+(e-r)*n,t]}),n,o,i)}(t,r,e,o,i,n)}(t,M,E,c,e||"EPSG:4326",r)})).filter((function(t){return D(t,i)})),f),$=d?function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,e=h(t,4),n=e[0],o=e[1],i=e[2],u=e[3],a=Math.max(i-n,u-o)*r/2,c=[n+a,o+a,i-a,u-a];return{exterior:k([n-a,o-a,i+a,u+a]),interior:k(c)}}(i,d):null;return{xLines:K,yLines:W,xLabels:l?A(K,i,p,m,g):[],yLabels:l?F(W,i,y,v,g):[],frame:$}}function I(t){return[(t[2]+t[0])/2,(t[3]+t[1])/2]}function C(t){var r=t.mapProjection,e=t.gridProjection,o=t.extent,u=t.center,c=void 0===u?null:u,l=t.zoom,s=t.withLabels,y=void 0!==s&&s,m=t.xLabelFormatter,d=t.yLabelFormatter,h=t.xLabelPosition,g=void 0===h?0:h,x=t.yLabelPosition,w=void 0===x?1:x,j=t.maxLines,O=void 0===j?100:j,S=t.intervals,P=t.targetSize,M=void 0===P?100:P,A=t.resolutions,F=t.xLabelStyle,T=t.yLabelStyle,D=t.pixelRatio,_=void 0===D?devicePixelRatio:D,k=t.frameSize,C=void 0===k?0:k,R=(null!=A?A:(0,p.MR)(r))[Math.round(l)],Z=(0,n.default)(r,e).forward,z=(0,n.default)(e,r).forward,N=Z(I((0,i.Vh)(e).extent)),B=E(null!=S?S:L(e),N,M,R,z),U=R*R/(4*_*_),V=G(B,r,e,o,(0,i.Vh)(r).extent,null!=c?c:I(o),U,O,y,(0,a.A4)(e,m),(0,a.u3)(e,d),g,w,C,{center:c,resolution:R,interval:B}),X=[].concat(b(V.xLines),b(V.yLines)).map((function(t){return{type:"Feature",properties:{ms_style:"lines"},geometry:{type:"LineString",coordinates:f()(t,2)}}})),H=b(V.xLabels).map((function(t){return{type:"Feature",properties:{ms_style:F?v(v({},F),{},{label:t.text}):"xlabels",valueText:t.text},geometry:{type:"Point",coordinates:t.geom}}})),K=b(V.yLabels).map((function(t){return{type:"Feature",properties:{ms_style:T?v(v({},T),{},{label:t.text}):"ylabels",valueText:t.text},geometry:{type:"Point",coordinates:t.geom}}})),W=V.frame?[V.frame].map((function(t){return{type:"Feature",properties:{ms_style:"frame"},geometry:{type:"Polygon",coordinates:[t.exterior,t.interior]}}})):[];return{type:"FeatureCollection",features:[].concat(b(X),b(W),b(H),b(K))}}}}]);