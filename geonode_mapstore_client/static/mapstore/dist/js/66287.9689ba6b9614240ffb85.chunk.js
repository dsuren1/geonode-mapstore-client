(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[66287],{166287:(e,t,r)=>{"use strict";r.r(t),r.d(t,{flattenFeatures:()=>k,isAttrPresent:()=>T,isStrokeStyle:()=>F,isFillStyle:()=>j,isTextStyle:()=>x,isCircleStyle:()=>L,isMarkerStyle:()=>E,isSymbolStyle:()=>I,getStylerTitle:()=>M,geometryFunctions:()=>R,getGeometryFunction:()=>D,registerGeometryFunctions:()=>W,addOpacityToColor:()=>B,hashCode:()=>H,registerStyle:()=>N,setSymbolsStyles:()=>_,fetchStyle:()=>K,getSymbolsStyles:()=>q,hashAndStringify:()=>J,domNodeToString:()=>Z,createSvgUrl:()=>$,createStylesAsync:()=>Q,getStyleParser:()=>V,layerToGeoStylerStyle:()=>Y,getStyle:()=>ee});var n=r(414293),o=r.n(n),i=r(385564),l=r.n(i),a=r(441609),u=r.n(a),c=r(984596),s=r.n(c),f=r(606162),y=r.n(f),d=r(701469),h=r.n(d),m=r(761868),p=r(443143),v=r(409669),g=r.n(v),b=r(433506);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function w(e){return function(e){if(Array.isArray(e))return O(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||C(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){if(e){if("string"==typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?O(e,t):void 0}}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){var n,o,i,l;n=e,o=t,i=r[t],l=function(e,t){if("object"!=S(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=S(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==S(l)?l:String(l))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e},r=h()(e)?e:null==e?void 0:e.features;return l()((r||[]).map((function(e){return"FeatureCollection"===e.type?e.features||[]:[e]}))).map(t)};function z(e,t){return new(0,e.default)(t)}var U={sld:function(){return r.e(12290).then(r.t.bind(r,212290,23)).then(z)},css:function(){return r.e(11125).then(r.t.bind(r,411125,23)).then(z)},openlayers:function(){return Promise.all([r.e(18672),r.e(52043),r.e(15265),r.e(40271),r.e(92322),r.e(47202),r.e(69141),r.e(51554),r.e(80651),r.e(22343),r.e(30049),r.e(3526)]).then(r.bind(r,903526)).then(z)},"3dtiles":function(){return r.e(41547).then(r.bind(r,641547)).then(z)},cesium:function(){return Promise.all([r.e(40271),r.e(65792),r.e(92322),r.e(29379),r.e(80651),r.e(45477),r.e(84182),r.e(30049),r.e(33122)]).then(r.bind(r,833122)).then(z)},leaflet:function(){return Promise.all([r.e(40271),r.e(92322),r.e(80651),r.e(45243),r.e(30049),r.e(7809),r.e(54175)]).then(r.bind(r,810375)).then(z)},geostyler:function(){return r.e(45688).then(r.bind(r,645688)).then(z)}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(arguments.length>1?arguments[1]:void 0).filter((function(t){return!o()(e[t])})).length>0},F=function(){return T(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},arguments.length>1&&void 0!==arguments[1]?arguments[1]:["color","opacity","dashArray","dashOffset","lineCap","lineJoin","weight"])},j=function(){return T(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},arguments.length>1&&void 0!==arguments[1]?arguments[1]:["fillColor","fillOpacity"])},x=function(){return T(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},arguments.length>1&&void 0!==arguments[1]?arguments[1]:["label","font","fontFamily","fontSize","fontStyle","fontWeight","textAlign","textRotationDeg"])},L=function(){return T(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},arguments.length>1&&void 0!==arguments[1]?arguments[1]:["radius"])},E=function(){return T(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},arguments.length>1&&void 0!==arguments[1]?arguments[1]:["iconGlyph","iconShape","iconUrl"])},I=function(){return T(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},arguments.length>1&&void 0!==arguments[1]?arguments[1]:["symbolUrl"])},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return E(e)?"Marker":I(e)?"Symbol":x(e)?"Text":L(e)||"Circle Style"===e.title?"Circle":j(e)?"Polygon":F(e)?"Polyline":""},R={centerPoint:{type:"Point",func:function(){}},lineToArc:{type:"LineString",func:function(){}},startPoint:{type:"Point",func:function(){}},endPoint:{type:"Point",func:function(){}}},D=function(e,t){return R[e]&&R[e][t]},W=function(e,t,r){if(!(e&&t&&r))throw new Error("specify all the params: functionName, func, type");R[e]={func:t,type:r}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFCC33",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.2;return(0,m.t8)("a",t,e)},H=function(e){var t,r=0;if(0===e.length)return r;for(t=0;t<e.length;t++)r=(r<<5)-r+e.charCodeAt(t),r|=0;return r},G={},N=function(e,t){if(!e||!t)throw new Error("specify all the params: sha, style");G[e]=t},_=function(){G=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}},K=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"style";return G[e]&&G[e][t]},q=function(){return G},J=function(e){if(e)return H(JSON.stringify(e));throw new Error("hashAndStringify: specify mandatory params: style")},Z=function(e){var t=document.createElement("div");return t.appendChild(e),t.innerHTML},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return I(e)&&e.symbolUrl?g().get(t,{"Content-Type":"image/svg+xml;charset=utf-8"}).then((function(t){var r=window.URL||window.webkitURL||window,n=(new DOMParser).parseFromString(t.data,"image/svg+xml").firstElementChild;n.setAttribute("fill",e.fillColor||"#FFCC33"),n.setAttribute("fill-opacity",o()(e.fillOpacity)?.2:e.fillOpacity),n.setAttribute("stroke",(0,p.qq)(e.color||"#FFCC33",o()(e.opacity)?1:e.opacity)),n.setAttribute("stroke-opacity",o()(e.opacity)?1:e.opacity),n.setAttribute("stroke-width",e.weight||1),n.setAttribute("width",e.size||32),n.setAttribute("height",e.size||32),n.setAttribute("stroke-dasharray",e.dashArray||"none");var i=new Blob([Z(n)],{type:"image/svg+xml;charset=utf-8"}),l=r.createObjectURL(i),a=document.createElement("canvas");a.width=e.size,a.height=e.size;var u=a.getContext("2d"),c=new Image;c.src=l;var s="",f=J(e);return c.onload=function(){try{u.drawImage(c,a.width/2-c.width/2,a.height/2-c.height/2),s=a.toDataURL("image/png"),a=null,N(f,{style:A(A({},e),{},{symbolUrlCustomized:l}),base64:s})}catch(e){return}},N(f,{style:A(A({},e),{},{symbolUrlCustomized:l}),svg:n,base64:s}),l})).catch((function(){return r(570898)})):new Promise((function(e){e(null)}))},Q=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map((function(e){return I(e)&&!K(J(e))?$(e,e.symbolUrl||e.symbolUrlCustomized).then((function(t){return t?A(A({},e),{},{symbolUrlCustomized:t}):K(J(e))})).catch((function(){return A(A({},e),{},{symbolUrlCustomized:r(570898)})})):new Promise((function(t){t(I(e)?K(J(e)):e)}))}))},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"sld";return U[e]?U[e]():Promise.resolve(null)};function X(e,t){var r,n;if(x(e)&&null!=t&&null!==(r=t.properties)&&void 0!==r&&r.valueText){var o=(e.font||"").split(" ");return Promise.resolve({kind:"Text",label:t.properties.valueText,font:[o[o.length-1]],size:parseFloat(e.fontSize),fontStyle:e.fontStyle,fontWeight:e.fontWeight,color:e.fillColor,haloColor:e.color,haloWidth:1,msHeightReference:"none",msBringToFront:!0})}if("Mark"===e.symbolizerKind)return Promise.resolve({kind:"Mark",color:e.fillColor,fillOpacity:e.fillOpacity,strokeColor:e.color,strokeOpacity:e.opacity,strokeWidth:e.weight,radius:null!==(n=e.radius)&&void 0!==n?n:10,wellKnownName:"Circle",msHeightReference:"none",msBringToFront:!0});if(T(e,["iconUrl"])&&!e.iconGlyph&&!e.iconShape)return Promise.resolve(A({kind:"Icon",image:e.iconUrl,size:y()(e.iconSize||[32]),opacity:1,rotate:0,msHeightReference:"none",msBringToFront:!0,anchor:"bottom"},e.leaderLine&&{msLeaderLineColor:"#333333",msLeaderLineOpacity:1,msLeaderLineWidth:1}));if(E(e))return Promise.resolve({kind:"Icon",image:b.Z.extraMarkers.markerToDataUrl(e),size:45,opacity:1,rotate:0,msHeightReference:"none",msBringToFront:!0});if(I(e)){var i=K(J(e));return(null!=i&&i.symbolUrlCustomized?Promise.resolve(null==i?void 0:i.symbolUrlCustomized):$(e,e.symbolUrl||e.symbolUrlCustomized)).then((function(t){return{kind:"Icon",image:t,size:e.size,opacity:1,rotate:0,msHeightReference:"none",msBringToFront:!0}})).catch((function(){return{}}))}return L(e)||"Circle Style"===e.title||j(e)?Promise.resolve({kind:"Fill",color:e.fillColor,opacity:e.fillOpacity,fillOpacity:e.fillOpacity,outlineColor:e.color,outlineOpacity:e.opacity,outlineWidth:e.weight}):F(e)?Promise.resolve(A({kind:"Line",color:e.color,opacity:e.opacity,width:e.weight},(null==e?void 0:e.dashArray)&&{dasharray:e.dashArray.map((function(e){return parseFloat(e)}))})):Promise.resolve({})}function Y(e){var t,r,n,o=k((null==e?void 0:e.features)||[]);if(o.find((function(e){var t;return!u()((null==e?void 0:e.style)||{})&&(null==e||null===(t=e.properties)||void 0===t?void 0:t.id)}))){var i=o.filter((function(e){var t;return(null==e?void 0:e.style)&&(null==e||null===(t=e.properties)||void 0===t?void 0:t.id)}));return Promise.all(l()(i.map((function(e){return s()(e.style).map((function(t){return X(t,e).then((function(t){return{symbolizer:t,filter:["==","id",e.properties.id]}}))}))})))).then((function(e){return{format:"geostyler",body:{name:"",rules:e.map((function(e){return{name:"",filter:e.filter,symbolizers:[e.symbolizer]}}))},metadata:{editorType:"visual"}}}))}return u()(e.style)||null!=e&&null!==(t=e.style)&&void 0!==t&&t.format||null!=e&&null!==(r=e.style)&&void 0!==r&&r.body?Promise.resolve(e.style):Promise.all((n=s()(e.style),l()(n.map((function(e){var t,r,n,o,i,l,a,u,c;return[].concat(w(T(e,["iconUrl"])?[{iconAnchor:e.iconAnchor,iconSize:e.iconSize,iconUrl:e.iconUrl,popupAnchor:e.popupAnchor,shadowSize:e.shadowSize,shadowUrl:e.shadowUrl}]:[]),w(j(e)&&e.radius?[{symbolizerKind:"Mark",fillColor:e.fillColor,fillOpacity:null!==(t=e.fillOpacity)&&void 0!==t?t:1,color:e.color,opacity:null!==(r=e.opacity)&&void 0!==r?r:1,weight:null!==(n=e.weight)&&void 0!==n?n:1,radius:null!==(o=e.radius)&&void 0!==o?o:10}]:[]),w(F(e)?[{color:e.color,opacity:null!==(i=e.opacity)&&void 0!==i?i:1,weight:null!==(l=e.weight)&&void 0!==l?l:1,dashArray:e.dashArray}]:[]),w(j(e)?[{fillColor:e.fillColor,fillOpacity:null!==(a=e.fillOpacity)&&void 0!==a?a:1,color:e.color,opacity:null!==(u=e.opacity)&&void 0!==u?u:1,weight:null!==(c=e.weight)&&void 0!==c?c:1}]:[]))})))).map((function(e){return X(e)}))).then((function(t){var r={point:["Mark","Icon","Text"],linestring:["Line"],polygon:["Fill"]};return{format:"geostyler",body:{name:"",rules:t.filter((function(t){var n=t.kind;return!r[e.geometryType]||r[e.geometryType].includes(n)})).map((function(e){return{name:"",symbolizers:[e]}}))},metadata:{editorType:"visual"}}}))}function ee(e,t){var r=e.style,n=e.features,o=r||{},i=o.format,l=void 0===i?"geostyler":i,a=o.body;return l&&a?"geostyler"===l?V(t).then((function(e){return e.writeStyle(a)})):Promise.all([V(l),V(t)]).then((function(e){var t,r,o=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,l,a=[],u=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(c)throw o}}return a}}(t,r)||C(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],l=o[1];return i.readStyle(a).then((function(e){return l.writeStyle(e,{features:n})}))})):Promise.resolve(null)}},570898:(e,t,r)=>{e.exports=r.p+"symbolMissing.svg"}}]);