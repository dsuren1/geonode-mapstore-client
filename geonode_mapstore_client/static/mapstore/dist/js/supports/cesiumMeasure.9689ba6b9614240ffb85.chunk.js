(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[68175],{420819:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>J});var n=r(124852),o=r.n(n),i=r(675263),a=r.n(i),l=r(968929),u=r.n(l),c=r(480681),s=r(200020),f=r(38560),d=r(660904),p=r(532056),m=r(405254),v=r(160629),y=r(218157),g=r(644001),b=r(344485),E=r(883900),h=r(472568),O=r(185447),I=r(423570),A=r.n(I),S=r(37532),T=r(808797),D=r(550172),N=r(637453);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,l=[],u=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return l}}(e,t)||k(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,t,r){if(L())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,t);var o=new(e.bind.apply(e,n));return r&&P(o,r.prototype),o}function L(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(L=function(){return!!e})()}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){Z(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Z(e,t,r){var n;return n=function(e,t){if("object"!=C(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=C(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t),(t="symbol"==C(n)?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function F(e){return function(e){if(Array.isArray(e))return j(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||k(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){if(e){if("string"==typeof e)return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?j(e,t):void 0}}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function x(e){var t=d.Z.distance(e[1],e[0]),r=d.Z.distance(e[1],e[2]),n=d.Z.normalize(d.Z.subtract(e[0],e[1],new d.Z),new d.Z),o=d.Z.normalize(d.Z.subtract(e[2],e[1],new d.Z),new d.Z),i=d.Z.normalize((0,N.eN)(n,o),new d.Z),a=(t>r?r:t)/3;return[n,i,o].map((function(t){return d.Z.add(e[1],d.Z.multiplyByScalar(t,a,new d.Z),new d.Z)}))}const G=function(e){var t,r=e.map,i=e.active,a=void 0!==i&&i,l=e.type,u=e.clearId,c=e.hideInfoLabel,s=e.hideSegmentsLengthLabels,f=e.onUpdateCollection,I=void 0===f?function(){}:f,C=e.unitsOfMeasure,L=void 0===C?{}:C,P=e.tooltipLabels,W=void 0===P?{}:P,k=e.style,j=void 0===k?{primaryLabel:{font:"12px sans-serif",fillColor:"#ffffff",backgroundColor:"rgba(0, 0, 0, 0.6)"},secondaryLabel:{font:"12px sans-serif",fillColor:"#ffffff",outlineColor:"#000000",outlineWidth:4,offset:[0,-16]},tooltip:{font:"12px sans-serif",fillColor:"#ffffff",backgroundColor:"rgba(0, 0, 0, 0.5)",offset:[8,8]},lineDrawing:{color:"#000000",opacity:1,depthFailColor:"#000000",depthFailOpacity:.4,width:3,dashLength:8},line:{color:"#ffcc33",opacity:1,depthFailColor:"#ffcc33",depthFailOpacity:.4,width:2},areaDrawing:{color:"#ffffff",opacity:.5,depthFailColor:"#ffffff",depthFailOpacity:.25},area:{color:"#ffffff",opacity:.5,depthFailColor:"#ffffff",depthFailOpacity:.25},cursor:{color:"#000000"},coordinatesNode:{color:"#333333"}}:k,G=e.infoLabelsFormat,M=void 0===G?Z(Z(Z(Z(Z(Z({},T.sW.POLYLINE_DISTANCE_3D,(function(e){return e})),T.sW.AREA_3D,(function(e){return e})),T.sW.HEIGHT_FROM_TERRAIN,(function(e){return e})),T.sW.ANGLE_3D,(function(e){return e})),T.sW.SLOPE,(function(e){return e})),T.sW.POINT_COORDINATES,(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.latitude,n=t.longitude;return"latitude: ".concat(r.toFixed(6),"\n")+"longitude: ".concat(n.toFixed(6),"\n")+"altitude: ".concat(e)})):G,H=e.getPositionInfo,Y=(0,n.useRef)(),U=(0,n.useRef)(),$=(0,n.useRef)(),B=(0,n.useRef)(),q=(0,n.useRef)(),K=(0,n.useRef)(),V=(0,n.useRef)({type:"FeatureCollection",features:[]}),z=(0,n.useRef)(),J=(0,n.useRef)(),Q=(0,n.useRef)();Q.current=L;var X=(0,n.useRef)();X.current=W;var ee=(0,n.useRef)();function te(){return{color:(0,D.KF)(w({},null==j?void 0:j.coordinatesNode)),disableDepthTestDistance:Number.POSITIVE_INFINITY}}function re(){var e=(null==j?void 0:j.primaryLabel)||{},t=e.font,r=void 0===t?"12px sans-serif":t,n=e.fillColor,o=void 0===n?"#ffffff":n,i=e.backgroundColor,a=void 0===i?"rgba(0, 0, 0, 0.6)":i,l=e.offset,u=void 0===l?[0,-16]:l;return{font:r,disableDepthTestDistance:Number.POSITIVE_INFINITY,fillColor:(0,D.KF)({color:o}),showBackground:!0,backgroundColor:(0,D.KF)({color:a}),backgroundPadding:new m.Z(4,4),pixelOffset:R(m.Z,F(u)),horizontalOrigin:v.Z.CENTER,verticalOrigin:y.Z.BASELINE}}function ne(e,t,r){return e&&e.value!==r?"".concat((0,T.Ov)(t,r,e.value).toFixed(2)," ").concat(e.label):"".concat(t.toFixed(2)," ").concat(e.label)}function oe(e,t,r){var n,o=r===T.sW.AREA_3D?T.vq[null===(n=Q.current[r])||void 0===n?void 0:n.value]:Q.current[r];return s?null:t.map((function(r,n){var i,a,l,u,c,s,f,E,h,O=t[n+1];if(O){var I=(0,N.eN)(r,O),A=d.Z.distance(r,O),S=ne(o,A,"m");e.add(w({position:I,text:S},(l=void 0===(a=(i=(null==j?void 0:j.secondaryLabel)||{}).font)?"12px sans-serif":a,c=void 0===(u=i.fillColor)?"#ffffff":u,f=void 0===(s=i.outlineColor)?"#000000":s,h=void 0===(E=i.outlineWidth)?4:E,{font:l,disableDepthTestDistance:Number.POSITIVE_INFINITY,fillColor:(0,D.KF)({color:c}),outlineColor:(0,D.KF)({color:f}),outlineWidth:h,style:g.Z.FILL_AND_OUTLINE,showBackground:!1,backgroundPadding:new m.Z(4,4),pixelOffset:new m.Z(0,0),horizontalOrigin:v.Z.CENTER,verticalOrigin:y.Z.BASELINE})));var T=p.Z.fromCartesian(I),C=T.longitude,_=T.latitude,R=T.height;return[b.Z.toDegrees(C),b.Z.toDegrees(_),R,A,S]}return null})).filter((function(e){return e}))}function ie(e){var t,n,o,i,a=e.coordinates,l=e.feature,u=e.measureType,s="",f=a[a.length-1],d=Q.current[u],p=ee.current[u];switch(u){case T.sW.HEIGHT_FROM_TERRAIN:$.current.add({position:a[a.length-1],image:z.current,color:(0,D.KF)({color:"#ffff00"}),disableDepthTestDistance:Number.POSITIVE_INFINITY,allowPicking:!1}),s=p(ne(d,l.properties.height,"m")),Y.current.add((0,D.c4)(w(w({},null==j?void 0:j.line),{},{coordinates:F(a)})));break;case T.sW.ANGLE_3D:Y.current.add((0,D.c4)(w(w({},null==j?void 0:j.line),{},{coordinates:F(a)}))),s=p(ne(d,o=_((0,N.Ys)(a),1)[0],"deg")),f=a[1],Y.current.add((0,D.c4)(w(w({},null==j?void 0:j.line),{},{coordinates:x(a)})));break;case T.sW.SLOPE:Y.current.add((0,D.XI)(w(w({},null==j?void 0:j.area),{},{coordinates:F(a)}))),Y.current.add((0,D.c4)(w(w({},null==j?void 0:j.line),{},{coordinates:F(a)}))),s=p(ne(d,i=_((0,N.Qg)(a,null==r||null===(t=r.camera)||void 0===t?void 0:t.position),1)[0],"deg")),f=(0,N.bj)(a);break;case T.sW.POINT_COORDINATES:$.current.add({position:a[a.length-1],image:z.current,color:(0,D.KF)({color:"#ffff00"}),disableDepthTestDistance:Number.POSITIVE_INFINITY,allowPicking:!1}),s=p(ne(d,l.geometry.coordinates[2],"m"),{latitude:l.geometry.coordinates[1],longitude:l.geometry.coordinates[0]});break;case T.sW.POLYLINE_DISTANCE_3D:a.length>1&&(Y.current.add((0,D.c4)(w(w({},null==j?void 0:j.line),{},{coordinates:F(a)}))),n=oe(q.current,a,T.sW.POLYLINE_DISTANCE_3D),s=p(ne(d,l.properties.length,"m")));break;case T.sW.AREA_3D:a.length>2&&(Y.current.add((0,D.XI)(w(w({},null==j?void 0:j.area),{},{coordinates:F(a)}))),Y.current.add((0,D.c4)(w(w({},null==j?void 0:j.line),{},{coordinates:F(a)}))),n=oe(q.current,a,T.sW.AREA_3D),s=p(ne(d,l.properties.area,"m²")))}c||q.current.add(w({position:f,text:s},re()));var m=null!=l&&l.id?l.id:A()();return w(w({},l),{},{id:m,properties:w(w(w(w(w({},null==l?void 0:l.properties),{},{id:m,measureType:u},n&&{segments:n,segmentsCRS:"WGS84",segmentsColumns:["longitude","latitude","height:m","length:m","label"]}),s&&{infoLabelText:s}),o&&{angle:o,angleUom:"deg"}),i&&{slope:i,slopeUom:"deg"})})}function ae(e){!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.area,o=t.distance;U.current.removeAll(),B.current.removeAll(),K.current.removeAll();var i,a,u,s,f,d,g,b,E,h="",O="",I=e[e.length-1],A=Q.current[l],S=X.current[l]||{},C=ee.current[l];switch(l){case T.sW.HEIGHT_FROM_TERRAIN:O=S.start,2===(null==e?void 0:e.length)&&(U.current.add((0,D.c4)(w(w({},null==j?void 0:j.lineDrawing),{},{coordinates:F(e)}))),h=o?C(ne(A,o,"m")):"");break;case T.sW.ANGLE_3D:O=S.start,3===e.length&&(h=C(ne(A,_((0,N.Ys)(e),1)[0],"deg")),I=e[1],U.current.add((0,D.c4)(w(w({},null==j?void 0:j.lineDrawing),{},{coordinates:x(e)}))));break;case T.sW.SLOPE:var L;O=S.start,3===e.length&&(h=C(ne(A,_((0,N.Qg)(e,null==r||null===(L=r.camera)||void 0===L?void 0:L.position),1)[0],"deg")),I=(0,N.bj)(e));break;case T.sW.POINT_COORDINATES:if(O=S.start,e[0]){var P=p.Z.fromCartesian(e[0]);h=C(ne(A,P.height,"m"),{latitude:P.latitude,longitude:P.longitude})}break;case T.sW.POLYLINE_DISTANCE_3D:O=S.start,e.length>1&&(O=S.end,h=C(ne(A,o,"m")),oe(K.current,e,T.sW.POLYLINE_DISTANCE_3D),e.forEach((function(t,r){r!==e.length-1&&B.current.add(w({position:t,image:J.current},te()))})));break;case T.sW.AREA_3D:O=S.start,e.length>1&&(oe(K.current,e,T.sW.AREA_3D),e.forEach((function(t,r){r!==e.length-1&&B.current.add(w({position:t,image:J.current},te()))}))),e.length>2&&(O=S.end,h=C(ne(A,n,"m²"))),2===e.length&&(O=S.missingVertex)}e.length>0&&(K.current.add(w({position:e[e.length-1],text:O},(u=void 0===(a=(i=(null==j?void 0:j.tooltip)||{}).font)?"12px sans-serif":a,f=void 0===(s=i.fillColor)?"#ffffff":s,g=void 0===(d=i.backgroundColor)?"rgba(0, 0, 0, 0.5)":d,E=void 0===(b=i.offset)?[8,8]:b,{font:u,disableDepthTestDistance:Number.POSITIVE_INFINITY,fillColor:(0,D.KF)({color:f}),showBackground:!0,backgroundColor:(0,D.KF)({color:g}),backgroundPadding:new m.Z(4,4),pixelOffset:R(m.Z,F(E)),horizontalOrigin:v.Z.LEFT,verticalOrigin:y.Z.TOP}))),c||K.current.add(w({position:I,text:h},re())),K.current.update(r.scene.frameState)),r.scene.requestRender()}(e.coordinates,{area:e.area,distance:e.distance})}return ee.current=M,(0,n.useEffect)((function(){return r&&(Y.current=new E.Z({destroyPrimitives:!0}),r.scene.primitives.add(Y.current),$.current=new h.Z({scene:r.scene}),r.scene.primitives.add($.current),q.current=new O.Z({scene:r.scene}),r.scene.primitives.add(q.current),U.current=new E.Z({destroyPrimitives:!0}),r.scene.primitives.add(U.current),B.current=new h.Z({scene:r.scene}),r.scene.primitives.add(B.current),K.current=new O.Z({scene:r.scene}),r.scene.primitives.add(K.current),z.current=(0,D.xB)(12,{stroke:"#ffffff",strokeWidth:2,fill:!1}),J.current=(0,D.xB)(8,{stroke:"#ffffff",strokeWidth:2,fill:!1})),function(){null!=r&&r.isDestroyed&&!r.isDestroyed()&&((0,D.U2)(r,Y.current),Y.current=null,(0,D.U2)(r,$.current),$.current=null,(0,D.U2)(r,q.current),q.current=null,(0,D.U2)(r,U.current),U.current=null,(0,D.U2)(r,B.current),B.current=null,(0,D.U2)(r,K.current),K.current=null)}}),[r]),(0,n.useEffect)((function(){a||(U.current.removeAll(),B.current.removeAll(),K.current.removeAll(),r.scene.requestRender())}),[a]),(0,n.useEffect)((function(){u&&(U.current.removeAll(),B.current.removeAll(),K.current.removeAll(),Y.current.removeAll(),$.current.removeAll(),q.current.removeAll(),V.current={type:"FeatureCollection",features:[]},I(V.current),r.scene.requestRender())}),[u]),(0,n.useEffect)((function(){var e;null!==(e=L[l])&&void 0!==e&&e.value&&function(){Y.current.removeAll(),$.current.removeAll(),q.current.removeAll();var e=(V.current||{}).features,t=(void 0===e?[]:e).map((function(e){var t,r=function(e){var t,r,n,o=e.properties,i=void 0===o?{}:o,a=e.geometry,l=void 0===a?{}:a,u=i.measureType,c=l.coordinates,s=void 0===c?[]:c;switch(u){case T.sW.HEIGHT_FROM_TERRAIN:return[p.Z.toCartesian((t=p.Z).fromDegrees.apply(t,F(null==i?void 0:i.terrainCoordinates))),p.Z.toCartesian((r=p.Z).fromDegrees.apply(r,F(s)))];case T.sW.POINT_COORDINATES:return[p.Z.toCartesian((n=p.Z).fromDegrees.apply(n,F(s)))];case T.sW.ANGLE_3D:case T.sW.POLYLINE_DISTANCE_3D:return s.map((function(e){var t;return p.Z.toCartesian((t=p.Z).fromDegrees.apply(t,F(e)))}));case T.sW.SLOPE:case T.sW.AREA_3D:return s[0].map((function(e){var t;return p.Z.toCartesian((t=p.Z).fromDegrees.apply(t,F(e)))}));default:return[]}}(e);return ie({coordinates:r,feature:e,measureType:null==e||null===(t=e.properties)||void 0===t?void 0:t.measureType})}));V.current.features=t,I(V.current),r.scene.requestRender()}()}),[null===(t=L[l])||void 0===t?void 0:t.value]),o().createElement(S.default,{key:l,map:r,active:a,geometryType:function(){switch(l){case T.sW.HEIGHT_FROM_TERRAIN:case T.sW.POINT_COORDINATES:return"Point";case T.sW.ANGLE_3D:case T.sW.POLYLINE_DISTANCE_3D:return"LineString";case T.sW.SLOPE:case T.sW.AREA_3D:return"Polygon";default:return null}}(),onDrawStart:ae,onMouseMove:ae,onDrawing:ae,onDrawEnd:function(e){var t=e.coordinates,n=e.feature;t&&n&&function(e,t){var n=ie({coordinates:e,feature:t.feature,measureType:l});V.current.features.push(n),I(V.current),r.scene.requestRender()}(t,{feature:n})},depthTestAgainstTerrain:!1,sampleTerrain:T.sW.HEIGHT_FROM_TERRAIN===l,coordinatesLength:function(){switch(l){case T.sW.ANGLE_3D:case T.sW.SLOPE:return 3;case T.sW.HEIGHT_FROM_TERRAIN:case T.sW.POINT_COORDINATES:case T.sW.POLYLINE_DISTANCE_3D:case T.sW.AREA_3D:default:return null}}(),getPositionInfo:H,getObjectsToExcludeOnPick:function(){return[U.current,B.current,K.current,Y.current,$.current,q.current]}})};var M=r(904577),H=r(815135),Y=r(86638),U=r(988753),$=r(50993);function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function q(e,t,r){var n;return n=function(e,t){if("object"!=B(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=B(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t),(t="symbol"==B(n)?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var V=(0,H.Z)(f.Z);function z(e,t){var r,i,a,l,f=e.map,d=e.active,p=e.measureType,m=e.onChangeMeasureType,v=e.defaultMeasureType,y=e.hideInfoLabel,g=e.hideSegmentsLengthLabels,b=e.unitsOfMeasure,E=e.unitsOfMeasureOptions,h=void 0===E?T.O$:E,O=e.onUpdateFeatures,I=e.onChangeUnitOfMeasure,A=e.tools,S=void 0===A?[T.sW.POLYLINE_DISTANCE_3D,T.sW.AREA_3D,T.sW.POINT_COORDINATES,T.sW.HEIGHT_FROM_TERRAIN,T.sW.ANGLE_3D,T.sW.SLOPE]:A,D=e.onClose,N=e.measurement,C=e.onAddAsLayer,_=t.messages,R=(a=(0,n.useState)(0),l=2,function(e){if(Array.isArray(e))return e}(a)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,l=[],u=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return l}}(a,l)||function(e,t){if(e){if("string"==typeof e)return K(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?K(e,t):void 0}}(a,l)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),L=R[0],P=R[1],W=h[p];function w(e){m(e)}return(0,n.useEffect)((function(){d&&w(v)}),[d,v]),d?o().createElement(o().Fragment,null,o().createElement(G,{map:f,active:!!p,type:p,clearId:L,hideInfoLabel:y,hideSegmentsLengthLabels:g,unitsOfMeasure:b,onUpdateCollection:function(e){return O((null==e?void 0:e.features)||[])},tooltipLabels:q(q(q(q(q(q({},T.sW.POLYLINE_DISTANCE_3D,{start:(0,Y.S$)(_,"measureComponent.tooltipPolylineDistance3DStart"),end:(0,Y.S$)(_,"measureComponent.tooltipPolylineDistance3DEnd")}),T.sW.AREA_3D,{start:(0,Y.S$)(_,"measureComponent.tooltipArea3DStart"),missingVertex:(0,Y.S$)(_,"measureComponent.tooltipArea3DMissingVertex"),end:(0,Y.S$)(_,"measureComponent.tooltipArea3DEnd")}),T.sW.POINT_COORDINATES,{start:(0,Y.S$)(_,"measureComponent.tooltipPointCoordinatesStart")}),T.sW.HEIGHT_FROM_TERRAIN,{start:(0,Y.S$)(_,"measureComponent.tooltipHeightFromTerrainStart")}),T.sW.ANGLE_3D,{start:(0,Y.S$)(_,"measureComponent.tooltipAngle3DStart")}),T.sW.SLOPE,{start:(0,Y.S$)(_,"measureComponent.tooltipSlopeStart")}),infoLabelsFormat:q(q(q(q(q(q({},T.sW.POLYLINE_DISTANCE_3D,(function(e){return e})),T.sW.AREA_3D,(function(e){return e})),T.sW.POINT_COORDINATES,(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.latitude,n=t.longitude;return"".concat((0,Y.S$)(_,"measureComponent.latitude"),": ").concat(r.toFixed(6),"\n")+"".concat((0,Y.S$)(_,"measureComponent.longitude"),": ").concat(n.toFixed(6),"\n")+"".concat((0,Y.S$)(_,"measureComponent.altitude"),": ").concat(e)})),T.sW.HEIGHT_FROM_TERRAIN,(function(e){return e})),T.sW.ANGLE_3D,(function(e){return e})),T.sW.SLOPE,(function(e){return e}))}),o().createElement(M.Z,{info:o().createElement(s.DropdownList,{disabled:!W,value:b[p],data:W,onChange:function(e){I(p,e)},textField:"label",valueField:"value"}),onClose:D},o().createElement(c.ButtonToolbar,null,o().createElement(c.ButtonGroup,null,S.map((function(e){return o().createElement(V,{key:e,className:"square-button-md",bsStyle:p===e?"success":"primary",tooltipId:"measureComponent.".concat(u()(e),"Measure"),active:p===e,onClick:w.bind(null,e)},o().createElement(c.Glyphicon,{glyph:T.r2[e]}))}))),o().createElement(c.ButtonGroup,null,o().createElement(V,{className:"square-button-md",bsStyle:"primary",tooltipId:"measureComponent.resetTooltip",onClick:function(){return P(L+1)}},o().createElement(c.Glyphicon,{glyph:"trash"}))),o().createElement(c.ButtonGroup,null,o().createElement(V,{className:"square-button-md",bsStyle:"primary",tooltipId:"measureComponent.exportToGeoJSON",disabled:0===((null==N||null===(r=N.features)||void 0===r?void 0:r.length)||0),onClick:function(){return(0,U.LR)(JSON.stringify((0,$.tL)(N.features)),"measurements.json","application/geo+json")}},o().createElement(c.Glyphicon,{glyph:"ext-json"})),C&&o().createElement(V,{className:"square-button-md",bsStyle:"primary",tooltipId:"measureComponent.addAsLayer",disabled:0===((null==N||null===(i=N.features)||void 0===i?void 0:i.length)||0),onClick:function(){return C(N.features)}},o().createElement(c.Glyphicon,{glyph:"add-layer"})))))):null}z.contextTypes={messages:a().object};const J=z}}]);