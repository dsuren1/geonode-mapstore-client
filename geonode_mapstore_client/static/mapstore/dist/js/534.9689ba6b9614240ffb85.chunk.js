(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[534],{313647:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(892322),o=r(640271);const i=function(e){if(!e)throw new Error("geojson is required");var t=[];return(0,n.nG)(e,(function(e){t.push(e)})),(0,o.uf)(t)}},145959:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var n=r(986069),o=r(782904),i=r(513218),a=r.n(i),l=r(227361),u=r.n(l),s=r(727418),c=r.n(s),f=r(436968),p=r.n(f);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){var n,o,i,a;n=e,o=t,i=r[t],a=function(e,t){if("object"!=y(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==y(a)?a:String(a))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g={antiAliasing:!0,iconsWidth:24,iconsHeight:24,legendDpi:96,fontFamily:"Verdana",fontSize:8,bold:!1,italic:!1,resolution:96,name:"",description:"",outputFormat:"pdf",rotation:0},b=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split("_")[0]};const h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{spec:g,capabilities:null,map:null,isLoading:!1,pdfUrl:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.kM:return"print"===t.control?c()({},e,{pdfUrl:null,isLoading:!1,error:null}):e;case n.qp:var r=u()(t,"capabilities.layouts",[{name:"A4"}]),i=r.filter((function(t){return b(t.name)===e.spec.sheet})).length?e.spec.sheet:b(r[0].name);return c()({},e,{capabilities:t.capabilities,spec:c()({},e.spec||{},{sheet:i,resolution:t.capabilities&&t.capabilities.dpis&&t.capabilities.dpis.length&&t.capabilities.dpis[0].value})});case n.U6:return d(d({},e),{},{spec:p()(d({},e.spec),t.name,t.value)});case n.rd:return u()(e.spec,t.name)?e:d(d({},e),{},{spec:p()(d({},e.spec),t.name,t.value)});case n.PB:var l,s,f=t.layers.map((function(e){return e.title?c()({},e,{title:a()(e.title)&&t.currentLocale&&e.title[t.currentLocale]||a()(e.title)&&e.title.default||e.title}):e}));return c()({},e,{map:{center:t.center,zoom:t.zoom,scaleZoom:t.scaleZoom,scale:t.scale,layers:f,size:null!==(l=t.size)&&void 0!==l?l:null===(s=e.map)||void 0===s?void 0:s.size,projection:t.projection},error:null});case n.HA:var y=t.zoom-e.map.scaleZoom;return c()({},e,{map:c()({},e.map,{scaleZoom:t.zoom,zoom:e.map.zoom+y,scale:t.scale})});case n.Yk:return c()({},e,{map:c()({},e.map,{size:t.size})});case n.Fp:return c()({},e,{isLoading:!0,pdfUrl:null,error:null});case n.EZ:return c()({},e,{isLoading:!1,pdfUrl:t.url,error:null});case n.WB:case n.aN:return c()({},e,{isLoading:!1,pdfUrl:null,error:t.error});case n.qH:return c()({},e,{isLoading:!1,pdfUrl:null,error:null});default:return e}}},38842:(e,t,r)=>{"use strict";r.d(t,{wk:()=>f,Yf:()=>p,c3:()=>y,fY:()=>m});var n=r(218721),o=r.n(n),i=r(227361),a=r.n(i),l=r(313311),u=r.n(l),s=r(22222),c=r(308316),f=function(e){return o()(e,"localConfig.localizedLayerStyles")},p=function(e){var t=a()(e,"localConfig.plugins.dashboard",[]),r=u()(t,(function(e){return"DashboardEditor"===e.name}))||{};return a()(r,"cfg.catalog.localizedLayerStyles",!1)},y=function(e){return a()(e,"localConfig.localizedLayerStyles.name","mapstore_language")},m=(0,s.P1)(f,y,c.KV,(function(e,t,r){var n=[];return e&&n.push({name:t,value:r}),n}))},650148:(e,t,r)=>{"use strict";r.d(t,{DX:()=>i,p6:()=>a,LI:()=>l});var n=r(727418),o=r.n(n),i=function(e){return e.print&&e.print.spec&&o()({},e.print.spec,e.print.map||{})},a=function(e){return e.print&&e.print.capabilities&&e.print.capabilities.layouts.filter((function(t){return 0===t.name.indexOf(e.print.spec.sheet)}))||[]},l=function(e){return e.print&&e.print.spec&&e.print.spec.includeLegend}},443143:(e,t,r)=>{"use strict";r.d(t,{qH:()=>c,qj:()=>f,qq:()=>p,TM:()=>y});var n,o=r(717621),i=r.n(o),a=r(14841),l=r.n(a),u=r(264721),s=r.n(u),c=function(e,t,r,o){var i=e;isNaN(parseFloat(e))&&(i=n.hexToHsv(e)[0]);var a=.5/(r-1),l=t/(r-1),u=[];1===r&&(a=.5,l=t/2);for(var s=0;s<r;s++){var c=i+s*l-t/2,f=a*s+.3,p=f;o&&(c=o.h||c,f=o.s||f,p=o.v||p),u.push(n.hsvToHex(c,f,p,s))}return u},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"red";return i()(e).toHexString()},p=function(e,t,r){var n=i()(e);return e&&n.setAlpha(l()(void 0!==t?t:n.getAlpha())).toRgbString()||r},y=function e(t){var r=Math.round,o=Math.random,i=[r(255*o()),r(255*o()),r(255*o())],a=n.rgbToHex(i);if(t)for(;s()(t,a)||"#000000"===a||"#FFFFFF"===a;)e(t);return a};n={decToHex:function(e){var t="0123456789ABCDEF",r=parseInt(e,10);return r=isNaN(r)?0:r,t.charAt(((r=r>255||r<0?0:r)-r%16)/16)+t.charAt(r%16)},rgbToHex:function(e,t,r){return e instanceof Array?n.rgbToHex(e[0],e[1],e[2]):"#"+n.decToHex(e)+n.decToHex(t)+n.decToHex(r)},realToDec:function(e){return Math.min(255,Math.round(256*e))},rgbToHsv:function(e,t,r){if(e instanceof Array)return n.rgbToHsv(e[0],e[1],e[2]);var o,i,a,l,u,s=e/255,c=t/255,f=r/255;switch(o=Math.min(Math.min(s,c),f),a=(i=Math.max(Math.max(s,c),f))-o,i){case o:l=0;break;case s:l=60*(c-f)/a,c<f&&(l+=360);break;case c:l=60*(f-s)/a+120;break;case f:l=60*(s-c)/a+240}return u=0===i?0:1-o/i,[Math.round(l),u,i]},distributedColorsHEX:function(e){for(var t=360/(e-1),r=[],o=function e(t,r,o){var i=e(t,r,o);return n.rgbToHex(i)},i=0;i<e;i++)r.push(o(t*i,.57,.63));return r},sameToneRangeColors:c,hsvToRgb:function(e,t,r){if(e instanceof Array)return n.hsvToRgb(e[0],e[1],e[2]);var o,i,a,l=Math.floor(e/60%6),u=e/60-l,s=r*(1-t),c=r*(1-u*t),f=r*(1-(1-u)*t);switch(l){case 0:o=r,i=f,a=s;break;case 1:o=c,i=r,a=s;break;case 2:o=s,i=r,a=f;break;case 3:o=s,i=c,a=r;break;case 4:o=f,i=s,a=r;break;case 5:o=r,i=s,a=c}return[n.realToDec(o),n.realToDec(i),n.realToDec(a)]},hsvToHex:function(e,t,r){var o=n.hsvToRgb(e,t,r);return n.rgbToHex(o)},hexToHsv:function(e){var t=e;if(t.length>0){"#"===t[0]&&(t=e.substring(1));var r=n.hexToRgb(t);return n.rgbToHsv(r)}return null},hexToRgb:function(e){var t,r,n,o=e;return"#"===o.charAt(0)&&(o=e.substring(1)),t=o.charAt(0)+o.charAt(1),r=o.charAt(2)+o.charAt(3),n=o.charAt(4)+o.charAt(5),[parseInt(t,16),parseInt(r,16),parseInt(n,16)]},colorToHexStr:f,colorToRgbaStr:p,generateRandomHexColor:y}},699573:(e,t,r)=>{"use strict";r.r(t),r.d(t,{DEFAULT_PRINT_RATIO:()=>Qe,addMapTransformer:()=>$e,addTransformer:()=>Je,addValidator:()=>Be,getDefaultPrintingService:()=>Ke,getGeomType:()=>xe,getLayoutName:()=>Ce,getLegendIconsSize:()=>rt,getMapSize:()=>ze,getMapTransformerChain:()=>Xe,getMapZoom:()=>Me,getMapfishLayersSpecification:()=>nt,getMapfishPrintSpecification:()=>De,getNearestZoom:()=>Ee,getOlDefaultStyle:()=>ct,getOpacity:()=>we,getPrintScales:()=>Ae,getPrintVendorParams:()=>tt,getResolutionMultiplier:()=>et,getSpecTransformerChain:()=>Ze,getValidatorsChain:()=>qe,getWMTSMatrixIds:()=>it,localizationFilter:()=>We,mapProjectionSelector:()=>Re,normalizeUrl:()=>ke,preloadData:()=>Fe,resetDefaultPrintingService:()=>Ve,rgbaTorgb:()=>at,specCreators:()=>ot,toAbsoluteURL:()=>Te,toMapfish:()=>Ue,toOpenLayers2Style:()=>st,toOpenLayers2TextStyle:()=>ut,wfsPreloaderFilter:()=>Ie});var n=r(916651),o=r(233044),i=r(552259),a=r(143378),l=r(443143),u=r(45992),s=r(218056),c=r(707294),f=r(993201),p=r(218672),y=r(701469),m=r.n(y),d=r(763105),g=r.n(d),b=r(313311),h=r.n(b),v=r(441609),S=r.n(v),O=r(14841),P=r.n(O),L=r(984596),j=r.n(L),x=r(531351),w=r.n(x),F=r(432420),T=r(253231),k=r(624262),C=r(385564),A=r.n(C),E=r(313647),M=r(830049),z=r(507122),R=r(620388);function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function W(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,G(n.key),n)}}function I(e){return function(e){if(Array.isArray(e))return _(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||H(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){var n,o,i;n=e,o=t,i=r[t],(o=G(o))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function G(e){var t=function(e,t){if("object"!=D(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=D(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==D(t)?t:String(t)}function H(e,t){if(e){if("string"==typeof e)return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_(e,t):void 0}}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Y=z.v.geojson(),Z=function(e){switch(e){case"top-left":return"lt";case"top":return"ct";case"top-right":return"rt";case"left":return"lm";case"center":default:return"cm";case"right":return"rm";case"bottom-left":return"lb";case"bottom":return"cb";case"bottom-right":return"rb"}},X=function(e,t,r){var n,o,i,a,l,u,s,c,f=void 0===r.opacity?1:r.opacity;if("Mark"===e.kind){var p=(0,M.kf)(e),y=p.width,m=p.height;return{graphicWidth:y,graphicHeight:m,externalGraphic:p.canvas.toDataURL(),graphicXOffset:-y/2,graphicYOffset:-m/2,rotation:e.rotate||0,graphicOpacity:f}}if("Icon"===e.kind){var d=(0,M.kf)(e),g=d.width,b=void 0===g?e.size:g,h=d.height,v=void 0===h?e.size:h,S=b/v,O=e.size,P=O/S;v>b&&(O=(P=e.size)*S);var L=function(e,t,r){switch(e){case"top-left":return[0,0];case"top":return[-t/2,0];case"top-right":return[-t,0];case"left":return[0,-r/2];case"center":default:return[-t/2,-r/2];case"right":return[-t,-r/2];case"bottom-left":return[0,-r];case"bottom":return[-t/2,-r];case"bottom-right":return[-t,-r]}}(e.anchor,O,P),j=(c=2,function(e){if(Array.isArray(e))return e}(s=L)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,l=[],u=!0,s=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return l}}(s,c)||H(s,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),x=j[0],w=j[1];return{graphicWidth:O,graphicHeight:P,externalGraphic:e.image,graphicXOffset:x,graphicYOffset:w,rotation:e.rotate||0,graphicOpacity:e.opacity*f}}return"Text"===e.kind?{fontSize:e.size,fontFamily:(e.font||["TIMES_ROMAN"])[0],fontWeight:e.fontWeight,labelAlign:Z(e.anchor),labelXOffset:(null==e||null===(n=e.offset)||void 0===n?void 0:n[0])||0,labelYOffset:-((null==e||null===(o=e.offset)||void 0===o?void 0:o[1])||0),rotation:-(e.rotate||0),fontColor:e.color,fontOpacity:1*f,label:(0,M.xV)(t,e.label,""),fillOpacity:0,pointRadius:0,strokeOpacity:0,strokeWidth:0}:"Line"===e.kind?N({strokeColor:e.color,strokeOpacity:e.opacity*f,strokeWidth:e.width},e.dasharray&&{strokeDashstyle:e.dasharray.join(" ")}):"Fill"===e.kind?N(N({strokeColor:e.outlineColor,strokeOpacity:(null!==(i=e.outlineOpacity)&&void 0!==i?i:0)*f,strokeWidth:null!==(a=e.outlineWidth)&&void 0!==a?a:0},e.outlineDasharray&&{strokeDashstyle:e.outlineDasharray.join(" ")}),{},{fillColor:e.color,fillOpacity:e.fillOpacity*f}):"Circle"===e.kind?N(N({strokeColor:e.outlineColor,strokeOpacity:(null!==(l=e.outlineOpacity)&&void 0!==l?l:0)*f,strokeWidth:null!==(u=e.outlineWidth)&&void 0!==u?u:0},e.outlineDasharray&&{strokeDashstyle:e.outlineDasharray.join(" ")}),{},{fillColor:e.color,fillOpacity:e.opacity*f}):{display:"none"}},q=function(e){return function(t){var r=t.layer,n=t.spec,o=void 0===n?{projection:"EPSG:3857"}:n;if(null==r||!r.features)return[];var i=(0,E.Z)({type:"FeatureCollection",features:r.features});return A()(i.features.map((function(t){var n,i=null==e||null===(n=e.rules)||void 0===n?void 0:n.filter((function(e){return!e.filter||(0,M.NG)(t,e.filter)}));if(i.length>0){var a=t.geometry.type,l=i.reduce((function(e,t){return[].concat(I(e),I(null==t?void 0:t.symbolizers))}),[]),u=l.filter((function(e){return["Mark","Icon","Text","Model"].includes(e.kind)&&["Point"].includes(a)})),s=l.filter((function(e){return"Line"===e.kind&&["LineString"].includes(a)})),c=l.filter((function(e){return"Fill"===e.kind&&["Polygon"].includes(a)})),f=l.filter((function(e){return"Circle"===e.kind&&["Point"].includes(a)})),p=l.filter((function(e,t){return["Mark","Icon","Text","Model"].includes(e.kind)&&(["Polygon"].includes(a)||["LineString"].includes(a)||["Point"].includes(a)&&(0!==f.length||t<u.length-1))})),y=(0,M.mL)(f[f.length-1]||u[u.length-1]||s[s.length-1]||c[c.length-1],t),m=t.geometry,d=Y(y);return d&&"LineString"===a&&(m={type:"LineString",coordinates:d(t)}),"Point"===a&&f.length&&(m=(0,R.L)(t.geometry.coordinates,y.radius,y.geodesic,{projection:o.projection})),[N(N({},t),{},{geometry:m,properties:N(N({},null==t?void 0:t.properties),{},{ms_style:X(y,t,r)})})].concat(I(p.map((function(e){var n=(0,M.mL)(e,t),o=Y(N({msGeometry:{name:"centerPoint"}},n));if(o){var i=o(t);if(i)return N(N({},t),{},{geometry:{type:"Point",coordinates:i},properties:N(N({},null==t?void 0:t.properties),{},{ms_style:X(n,t,r)})})}return null})).filter((function(e){return!!e}))))}return[]})))}};const V=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r;return t=e,(r=[{key:"readStyle",value:function(){return new Promise((function(e,t){try{e(null)}catch(e){t(e)}}))}},{key:"writeStyle",value:function(e,t){return t?q(e):new Promise((function(t,r){try{t((function(t){return(0,M.vg)(e).then((function(){return q(e)(t)}))}))}catch(e){r(e)}}))}}])&&W(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();var J=r(472500),$=r.n(J),B=r(876825),K=r(38842),Q=r(308316),ee=r(650148),te=r(727418),re=r.n(te),ne=r(189734),oe=r.n(ne),ie=r(91175),ae=r.n(ie),le=r(414293),ue=r.n(le),se=r(227361),ce=r.n(se),fe=r(253632),pe=r.n(fe),ye=r(984023),me=["params"];function de(e){return de="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},de(e)}function ge(e){return function(e){if(Array.isArray(e))return he(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||be(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function be(e,t){if(e){if("string"==typeof e)return he(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?he(e,t):void 0}}function he(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ve(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Se(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ve(Object(r),!0).forEach((function(t){Oe(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ve(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Oe(e,t,r){var n;return n=function(e,t){if("object"!=de(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=de(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t),(t="symbol"==de(n)?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Pe,Le=(0,i.Z5)(0,21),je=new V,xe=function(e){return e.features&&e.features[0]&&e.features[0].geometry?e.features[0].geometry.type:e.features&&e.features[0].features&&e.features[0].style&&e.features[0].style.type?e.features[0].style.type:void 0},we=function(e){return e.opacity||(0===e.opacity?0:1)},Fe=function(e){var t=g()(e.layers,{type:"wfs"});return t.length>0?Promise.all(t.map((function(t){return(0,F.Bm)(t.url,t.name,Se({outputFormat:"application/json",srsName:e.projection},(0,a.v)(t)||{})).then((function(e){var r=e.data;return{id:t.id,geoJson:r}}))}))).then((function(t){return Se(Se({},e),{},{layers:(e.layers||[]).map((function(e){var r=h()(t,{id:e.id});return"wfs"===e.type&&r?Se(Se({},e),r):e}))})})):Promise.resolve(e)},Te=function(e,t){return-1!==e.search(/^\/\//)?window.location.protocol+e:-1!==e.search(/:\/\//)?e:-1!==e.search(/^\//)?(t||window.location.origin)+e:e},ke=function(e){var t=m()(e)?e[0]:e;return-1!==t.indexOf("?")&&(t=t.substring(0,t.indexOf("?"))),Pe.toAbsoluteURL(t)},Ce=function(e){var t=[e.sheet];return e.includeLegend?e.twoPages&&t.push("2_pages_legend"):t.push("no_legend"),e.landscape&&t.push("landscape"),t.join("_")},Ae=function(e){return e.scales.slice(0).reverse().map((function(e){return parseFloat(e.value)}))||[]},Ee=function(e,t){var r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:Le)[Math.round(e)];return t.reduce((function(e,t,n){return t<r?e:n}),0)},Me=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Le,n=t[Math.round(e)];return r.reduce((function(e,t,r){return t<n?e:r}),0)+1},ze=function(e,t){if(e){var r=e.rotation?e.map.height:e.map.width;return{width:t,height:(e.rotation?e.map.width:e.map.height)/r*t}}return{width:100,height:100}},Re=function(e){var t,r,n;return null!==(t=null==e||null===(r=e.print)||void 0===r||null===(n=r.map)||void 0===n?void 0:n.projection)&&void 0!==t?t:"EPSG:3857"},De=function(e,t){var r=e.params,o=Se(Se({},function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,me)),r),a=Re(t),l=(0,n.reproject)(o.center,"EPSG:4326",o.projection),u=Math.round((0,i.CT)(o.scaleZoom,a,o.projection)),s=(o.scales||(0,i.yu)(o.projection))[u]||Le[u],c=Se(Se({},o),{},{center:l,scaleZoom:u});return Se({units:(0,n.getUnits)(o.projection),srs:(0,n.normalizeSRS)(o.projection||"EPSG:3857"),layout:Pe.getLayoutName(c),dpi:parseInt(o.resolution,10),outputFilename:"mapstore-print",geodetic:!1,mapTitle:o.name||"",comment:o.description||"",layers:Pe.getMapfishLayersSpecification(o.layers,c,t,"map"),pages:[{center:[l.x,l.y],scale:s,rotation:ue()(o.rotation)?0:-Number(o.rotation)}],legends:Pe.getMapfishLayersSpecification(o.layers,c,t,"legend")},r)},We=function(e,t){var r=(0,K.wk)(e),n=(0,K.fY)(e),o=r?Se(Se({},t),{},{env:n,currentLanguage:(0,Q.KV)(e)}):t;return Promise.resolve(o)},Ie=function(e,t){return Fe(t)},Ue=function(e,t){return Promise.resolve(De(t,e))},Ne=[{name:"localization",transformer:We},{name:"wfspreloader",transformer:Ie},{name:"mapfishSpecCreator",transformer:Ue}],Ge=[],He=[],_e=[];function Ye(e,t){return t.reduce((function(e,t){return-1===e.findIndex((function(e){return e.name===t.name}))?[].concat(ge(e),[t]):e.map((function(e){return e.name===t.name?t:e}))}),e)}function Ze(){var e=Ne.length;return oe()(Ye(Ne.map((function(e,t){return Se(Se({},e),{},{position:t})})),Ge.map((function(t,r){var n;return Se(Se({},t),{},{position:null!==(n=t.position)&&void 0!==n?n:r+e})}))),["position"])}function Xe(){return He}function qe(){return _e}function Ve(){Ge=[],He=[],_e=[]}function Je(e,t,r){Ge=Ye(Ge,[{name:e,transformer:t,position:r}])}function $e(e,t){He=Ye(He,[{name:e,transformer:t}])}function Be(e,t,r){_e=[{id:e,name:t,validator:r}].reduce((function(e,t){return-1===e.findIndex((function(e){return e.id===t.id}))?[].concat(ge(e),[t]):e.map((function(e){return e.id===t.id?t:e}))}),_e)}var Ke=function(){return{print:function(e){var t=(0,B.bh)().getState(),r=(0,ee.DX)(t),n=e?Se(Se({},r),e):r;return Ze().map((function(e){return e.transformer})).reduce((function(e,r){return e.then((function(e){return r(t,e)}))}),Promise.resolve(n))},validate:function(){var e=(0,B.bh)().getState();return qe().reduce((function(t,r){var n,o=null!==(n=t[r.name])&&void 0!==n?n:{valid:!0,errors:[]},i=r.validator(e,o);return Se(Se({},t),{},Oe({},r.name,{valid:o.valid&&i.valid,errors:[].concat(ge(o.errors),ge(i.errors||[]))}))}),{})},getMapConfiguration:function(){var e,t=(0,B.bh)().getState();return Xe().map((function(e){return e.transformer})).reduce((function(e,r){return r(t,e)}),(null==t||null===(e=t.print)||void 0===e?void 0:e.map)||{})}}},Qe=96/72;function et(e,t){return e/t*(arguments.length>2&&void 0!==arguments[2]?arguments[2]:Qe)}var tt=function(e){return(null==e?void 0:e.serverType)===k.z$.NO_VENDOR?{}:{TILED:!0}},rt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.forceIconsSize||"background"===t.group,n=r?e.iconsWidth:ce()(t,"legendOptions.legendWidth",12),o=r?e.iconsHeight:ce()(t,"legendOptions.legendHeight",12);return{width:n,height:o,minSymbolSize:pe()([n,o])}},nt=function(e,t,r,n){return e.filter((function(e){return Pe.specCreators[e.type]&&Pe.specCreators[e.type][n]})).map((function(e){return Pe.specCreators[e.type][n](e,t,r)}))},ot={wms:{map:function(e,t){return{baseURL:Pe.normalizeUrl(e.url)+"?",opacity:we(e),singleTile:!1,type:"WMS",layers:[e.name],format:e.format||"image/png",styles:[e.style||""],customParams:(0,o.addAuthenticationParameter)(Pe.normalizeUrl(e.url),re()(Se(Se({TRANSPARENT:!0},tt(e)),{},{EXCEPTIONS:"application/vnd.ogc.se_inimage",scaleMethod:"accurate",ENV:(0,T.h)(t.env)}),e.baseParams||{},e.params||{},Se({},(0,a.v)({layerFilter:e.layerFilter,filterObj:e.filterObj}))))}},legend:function(e,t){return{name:e.title||e.name,classes:[{name:"",icons:[Pe.normalizeUrl(e.url)+$().format({query:(0,o.addAuthenticationParameter)(Pe.normalizeUrl(e.url),Se(Se({TRANSPARENT:!0,EXCEPTIONS:"application/vnd.ogc.se_xml",VERSION:"1.1.1",SERVICE:"WMS",REQUEST:"GetLegendGraphic",LAYER:e.name,LANGUAGE:t.language||"",STYLE:e.style||"",SCALE:t.scale},rt(t,e)),{},{LEGEND_OPTIONS:"forceLabels:"+(t.forceLabels?"on":"")+";fontAntialiasing:"+t.antiAliasing+";dpi:"+t.legendDpi+";fontStyle:"+((t.bold?"bold":t.italic&&"italic")||"")+";fontName:"+t.fontFamily+";fontSize:"+t.fontSize,format:"image/png"},re()({},e.params)))})]}]}}},vector:{map:function(e,t){var r,o;return{type:"Vector",name:e.name,opacity:we(e),styleProperty:"ms_style",styles:{1:Pe.toOpenLayers2Style(e,e.style),Polygon:Pe.toOpenLayers2Style(e,e.style,"Polygon"),LineString:Pe.toOpenLayers2Style(e,e.style,"LineString"),Point:Pe.toOpenLayers2Style(e,e.style,"Point"),FeatureCollection:Pe.toOpenLayers2Style(e,e.style,"FeatureCollection")},geoJson:(0,n.reprojectGeoJson)({type:"FeatureCollection",features:"geostyler"===(null==e||null===(r=e.style)||void 0===r?void 0:r.format)&&null!=e&&null!==(o=e.style)&&void 0!==o&&o.body?je.writeStyle(e.style.body,!0)({layer:e,spec:t}):e.features.map((function(e){return Se(Se({},e),{},{properties:Se(Se({},e.properties),{},{ms_style:e&&e.geometry&&e.geometry.type&&e.geometry.type.replace("Multi","")||1})})}))},"EPSG:4326",t.projection)}}},graticule:{map:function(e,t,r){var n,o,a,l,u,s=ae()(null==r||null===(n=r.print)||void 0===n?void 0:n.capabilities.layouts.filter((function(e){return e.name===Ce(t)}))),c=null!==(o=et(null==s||null===(a=s.map)||void 0===a?void 0:a.width,null!==(l=null===(u=t.size)||void 0===u?void 0:u.width)&&void 0!==l?l:370))&&void 0!==o?o:1,f=(0,i.E_)(t.projection).map((function(e){return e*c})),p=f[t.scaleZoom];return{type:"Vector",name:e.name||"graticule",opacity:we(e),styleProperty:"ms_style",styles:{lines:Pe.toOpenLayers2Style(e,e.style,"GraticuleLines"),xlabels:Pe.toOpenLayers2TextStyle(e,e.labelXStyle,"GraticuleXLabels"),ylabels:Pe.toOpenLayers2TextStyle(e,e.labelYStyle,"GraticuleYLabels"),frame:Pe.toOpenLayers2Style(e,e.frameStyle,"GraticuleFrame")},geoJson:(0,ye.XA)({resolutions:f,mapProjection:t.projection,gridProjection:e.srs||t.projection,extent:(0,i.cr)(t.center,p,t.size,t.projection),zoom:t.scaleZoom,withLabels:!0,xLabelFormatter:e.xLabelFormatter,yLabelFormatter:e.yLabelFormatter,xLabelStyle:Pe.toOpenLayers2TextStyle(e,e.labelXStyle,"GraticuleXLabels"),yLabelStyle:Pe.toOpenLayers2TextStyle(e,e.labelYStyle,"GraticuleYLabels"),frameSize:e.frameRatio})}}},wfs:{map:function(e){var t,r;return{type:"Vector",name:e.name,opacity:we(e),styleProperty:"ms_style",styles:{1:Pe.toOpenLayers2Style(e,e.style),Polygon:Pe.toOpenLayers2Style(e,e.style,"Polygon"),LineString:Pe.toOpenLayers2Style(e,e.style,"LineString"),Point:Pe.toOpenLayers2Style(e,e.style,"Point"),FeatureCollection:Pe.toOpenLayers2Style(e,e.style,"FeatureCollection")},geoJson:e.geoJson&&{type:"FeatureCollection",features:"geostyler"===(null==e||null===(t=e.style)||void 0===t?void 0:t.format)&&null!=e&&null!==(r=e.style)&&void 0!==r&&r.body?je.writeStyle(e.style.body,!0)({layer:Se(Se({},e),{},{features:e.geoJson.features})}):e.geoJson.features.map((function(e){return Se(Se({},e),{},{properties:Se(Se({},e.properties),{},{ms_style:e&&e.geometry&&e.geometry.type&&e.geometry.type.replace("Multi","")||1})})}))}}}},osm:{map:function(){return{baseURL:"http://a.tile.openstreetmap.org/",opacity:we(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),singleTile:!1,type:"OSM",maxExtent:[-20037508.3392,-20037508.3392,20037508.3392,20037508.3392],tileSize:[256,256],extension:"png",resolutions:[156543.03390625,78271.516953125,39135.7584765625,19567.87923828125,9783.939619140625,4891.9698095703125,2445.9849047851562,1222.9924523925781,611.4962261962891,305.74811309814453,152.87405654907226,76.43702827453613,38.218514137268066,19.109257068634033,9.554628534317017,4.777314267158508,2.388657133579254,1.194328566789627,.5971642833948135]}}},mapquest:{map:function(){return{baseURL:"http://otile1.mqcdn.com/tiles/1.0.0/map/",opacity:we(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),singleTile:!1,type:"OSM",maxExtent:[-20037508.3392,-20037508.3392,20037508.3392,20037508.3392],tileSize:[256,256],extension:"png",resolutions:[156543.03390625,78271.516953125,39135.7584765625,19567.87923828125,9783.939619140625,4891.9698095703125,2445.9849047851562,1222.9924523925781,611.4962261962891,305.74811309814453,152.87405654907226,76.43702827453613,38.218514137268066,19.109257068634033,9.554628534317017,4.777314267158508,2.388657133579254,1.194328566789627,.5971642833948135]}}},wmts:{map:function(e,t){var r=t.projection,n=(0,c.h7)(e,r),i=n.tileMatrixSet,a=n.tileMatrixSetName;if(!i)throw Error("tile matrix not found for pdf EPSG"+r);var l=Pe.getWMTSMatrixIds(e,i),u=Pe.normalizeUrl(j()(e.url)[0]),s={};return u.indexOf("{Style}")>=0&&(s={dimensions:["Style"],params:{STYLE:e.style}}),Se(Se({baseURL:encodeURI(u),format:e.format||"image/png",type:"WMTS",layer:e.name,"customParams ":(0,o.addAuthenticationParameter)(e.capabilitiesURL,re()({TRANSPARENT:!0}))},s),{},{matrixIds:l,matrixSet:a,style:e.style,name:e.name,requestEncoding:"RESTful"===e.requestEncoding?"REST":e.requestEncoding||"KVP",opacity:we(e),version:e.version||"1.0.0"})}},tileprovider:{map:function(e){var t,r,n=(t=(0,u.h)(e.provider,e),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,l=[],u=!0,s=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return l}}(t,r)||be(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];if(!S()(i)){var a,l=(0,s.ut)(Se(Se({},i),{},{url:null!==(a=null==i?void 0:i.url)&&void 0!==a?a:o}));if(!l)throw Error("No base URL found for this layer");var c=l.indexOf("?"),f=l.indexOf("{"),p=l.slice(0,f),y=c<0?l.slice(f):l.slice(f,c);return{baseURL:p,path_format:y.replace("{x}","${x}").replace("{y}","${y}").replace("{z}","${z}"),type:"xyz",extension:y.split(".").pop()||"png",opacity:we(e),tileSize:[256,256],maxExtent:[-20037508.3392,-20037508.3392,20037508.3392,20037508.3392],resolutions:[156543.03390625,78271.516953125,39135.7584765625,19567.87923828125,9783.939619140625,4891.9698095703125,2445.9849047851562,1222.9924523925781,611.4962261962891,305.74811309814453,152.87405654907226,76.43702827453613,38.218514137268066,19.109257068634033,9.554628534317017,4.777314267158508,2.388657133579254,1.194328566789627,.5971642833948135].filter((function(e,t){var r=!0;return i.maxNativeZoom&&(r=r&&t<=i.maxNativeZoom),r})),customParams:Object.fromEntries(new URL(l).searchParams)}}return{}}},tms:{map:function(e){var t=e.tileMapUrl.split(e.tileMapService+"/")[1];return{type:"tms",opacity:we(e),layer:t,baseURL:e.tileMapService.substring(0,e.tileMapService.lastIndexOf("/1.0.0")),tileSize:e.tileSize,format:(0,f.A)(e.tileMapUrl),maxExtent:[-20037508.3392,-20037508.3392,20037508.3392,20037508.3392],resolutions:e.tileSets.map((function(e){return e.resolution}))}}}},it=function(e,t){var r=[],o=(0,n.normalizeSRS)(e.srs||"EPSG:3857",e.allowedSRS),i=(0,p.U2)(o).getMetersPerUnit();return t&&t.TileMatrix.map((function(e){var t=e["ows:Identifier"],n=28e-5*e.ScaleDenominator/i,o=[P()(e.TileWidth),P()(e.TileHeight)],a=e.TopLeftCorner&&e.TopLeftCorner.split(" ").map((function(e){return P()(e)})),l=[P()(e.MatrixWidth),P()(e.MatrixHeight)];return r.push({identifier:t,matrixSize:l,resolution:n,tileSize:o,topLeftCorner:a})})),r},at=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return-1!==e.indexOf("rgba")?"rgb".concat(e.slice(e.indexOf("("),e.lastIndexOf(",")),")"):e};function lt(e,t){return["start"===e?"l":"end"===e?"r":"c","top"===t?"t":"bottom"===t?"b":"m"].join("")}var ut=function(e,t,r){if(!t)return Pe.getOlDefaultStyle(e,r);switch(r){case"GraticuleXLabels":return{fontColor:t.color||"#000000",fontFamily:t.font||"12px Calibri,sans-serif",fontWeight:t.fontWeight||"bold",fontSize:t.fontSize||"14",label:"{properties.valueText}",labelAlign:lt(t.textAlign||"center",t.verticalAlign||"bottom"),labelOutlineColor:t.labelOutlineColor||"#FFFFFF",labelOutlineWidth:t.labelOutlineWidth/4||.5,rotation:t.rotation?-t.rotation:0};case"GraticuleYLabels":return{fontColor:t.color||"#000000",fontFamily:t.font||"12px Calibri,sans-serif",fontWeight:t.fontWeight||"bold",fontSize:t.fontSize||"14",label:"{properties.valueText}",labelAlign:lt(t.textAlign||"end",t.verticalAlign||"middle"),labelOutlineColor:t.labelOutlineColor||"#FFFFFF",labelOutlineWidth:t.labelOutlineWidth/4||.5,rotation:t.rotation?-t.rotation:0};default:return{fontColor:"#000000",fontFamily:"12px Calibri,sans-serif",fontWeight:"bold",fontSize:"14",label:"{properties.valueText}",labelAlign:"cb",labelOutlineColor:"#FFFFFF",labelOutlineWidth:.5}}},st=function(e,t,r){return t&&"marker"!==e.styleName?{fillColor:(0,l.qj)(t.fillColor),fillOpacity:t.fillOpacity,externalGraphic:t.iconUrl,pointRadius:t.radius,strokeColor:(0,l.qj)(t.color),strokeOpacity:t.opacity,strokeWidth:t.weight,strokeDashstyle:t.lineDash?w()(t.lineDash).join(" "):void 0}:Pe.getOlDefaultStyle(e,r)},ct=function(e,t){switch(t||xe(e)||""){case"Polygon":case"MultiPolygon":return{fillColor:"#0000FF",fillOpacity:.1,strokeColor:"#0000FF",strokeOpacity:1,strokeWidth:3,strokeDashstyle:"dash",strokeLinecap:"round"};case"MultiLineString":case"LineString":return{strokeColor:"#0000FF",strokeOpacity:1,strokeWidth:3};case"Point":case"MultiPoint":return"marker"===e.styleName?{externalGraphic:"http://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/images/marker-icon.png",graphicWidth:25,graphicHeight:41,graphicXOffset:-12,graphicYOffset:-41}:{fillColor:"#FF0000",fillOpacity:0,strokeColor:"#FF0000",pointRadius:5,strokeOpacity:1,strokeWidth:1};case"GraticuleLines":return{strokeColor:"#ff7800",strokeOpacity:.9,strokeWidth:2,strokeDashstyle:"4 0.5"};case"GraticuleFrame":return{strokeColor:"#000000",strokeOpacity:1,strokeWidth:1,fillColor:"#FFFFFF",fillOpacity:1};case"GraticuleXLabels":return{fontColor:"#000000",fontFamily:"12px Calibri,sans-serif",fontWeight:"bold",fontSize:"14",label:"{properties.valueText}",labelAlign:"cb",labelOutlineColor:"#FFFFFF",labelOutlineWidth:.5};case"GraticuleYLabels":return{fontColor:"#000000",fontFamily:"12px Calibri,sans-serif",fontWeight:"bold",fontSize:"14",label:"{properties.valueText}",labelAlign:"rm",labelOutlineColor:"#FFFFFF",labelOutlineWidth:.5};default:return{fillColor:"#0000FF",fillOpacity:.1,strokeColor:"#0000FF",pointRadius:5,strokeOpacity:1,strokeWidth:1}}};Pe={toAbsoluteURL:Te,getLayoutName:Ce,getMapfishLayersSpecification:nt,specCreators:ot,normalizeUrl:ke,toOpenLayers2Style:st,toOpenLayers2TextStyle:ut,getWMTSMatrixIds:it,getOlDefaultStyle:ct}},993201:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var n=r(264721),o=r.n(n),i=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split("?")[0].split("@");if(e.length>1){var t=e[e.length-1];if(o()(["png","png8","jpeg","vnd.jpeg-png","gif"],t))return t}return null}},580760:(e,t,r)=>{var n=r(989881);e.exports=function(e,t){var r=[];return n(e,(function(e,n,o){t(e,n,o)&&r.push(e)})),r}},763105:(e,t,r)=>{var n=r(234963),o=r(580760),i=r(267206),a=r(701469);e.exports=function(e,t){return(a(e)?n:o)(e,i(t,3))}},253632:(e,t,r)=>{var n=r(456029),o=r(170433),i=r(406557);e.exports=function(e){return e&&e.length?n(e,i,o):void 0}},531351:e=>{var t=Array.prototype.reverse;e.exports=function(e){return null==e?e:t.call(e)}}}]);