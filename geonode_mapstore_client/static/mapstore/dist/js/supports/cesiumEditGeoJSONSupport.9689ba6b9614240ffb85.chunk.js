(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[79589,82582,65417],{43982:(i,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>B});var n=e(124852),o=e(532056),r=e(809069),a=e(271533),l=e(883900),s=e(472568),c=e(604274),d=e(163882),u=e(759398),h=e(958913),f=e(344485),v=e(550172),m=e(637453),p=e(823493),y=e.n(p),g=e(747037),_=e.n(g),b=e(433353),P=e(854788);function w(i){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(i){return typeof i}:function(i){return i&&"function"==typeof Symbol&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},w(i)}function I(i,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,O(n.key),n)}}function C(i,t){var e=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),e.push.apply(e,n)}return e}function Z(i){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?C(Object(e),!0).forEach((function(t){var n,o,r;n=i,o=t,r=e[t],(o=O(o))in n?Object.defineProperty(n,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[o]=r})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(e)):C(Object(e)).forEach((function(t){Object.defineProperty(i,t,Object.getOwnPropertyDescriptor(e,t))}))}return i}function O(i){var t=function(i,t){if("object"!=w(i)||!i)return i;var e=i[Symbol.toPrimitive];if(void 0!==e){var n=e.call(i,"string");if("object"!=w(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}(i);return"symbol"==w(t)?t:String(t)}function E(i){return function(i){if(Array.isArray(i))return T(i)}(i)||function(i){if("undefined"!=typeof Symbol&&null!=i[Symbol.iterator]||null!=i["@@iterator"])return Array.from(i)}(i)||S(i)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(i,t){if(i){if("string"==typeof i)return T(i,t);var e=Object.prototype.toString.call(i).slice(8,-1);return"Object"===e&&i.constructor&&(e=i.constructor.name),"Map"===e||"Set"===e?Array.from(i):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?T(i,t):void 0}}function T(i,t){(null==t||t>i.length)&&(t=i.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=i[e];return n}function x(i,t){var e;if(null===(null==t?void 0:t.geometry))return null;var n=t.geometry,r=void 0===n?{}:n,a=r.coordinates,l=void 0===a?[]:a;switch(i||(null==r?void 0:r.type)){case"Point":case"Circle":return[o.Z.toCartesian((e=o.Z).fromDegrees.apply(e,E(l)))];case"LineString":return l.map((function(i){var t;return o.Z.toCartesian((t=o.Z).fromDegrees.apply(t,E(i)))}));case"Polygon":return l[0].map((function(i){var t;return o.Z.toCartesian((t=o.Z).fromDegrees.apply(t,E(i)))}));default:return null}}function D(i){return i.map((function(i){var t,e,n=(e=3,function(i){if(Array.isArray(i))return i}(t=i)||function(i,t){var e=null==i?null:"undefined"!=typeof Symbol&&i[Symbol.iterator]||i["@@iterator"];if(null!=e){var n,o,r,a,l=[],s=!0,c=!1;try{if(r=(e=e.call(i)).next,0===t){if(Object(e)!==e)return;s=!1}else for(;!(s=(n=r.call(e)).done)&&(l.push(n.value),l.length!==t);s=!0);}catch(i){c=!0,o=i}finally{try{if(!s&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(c)throw o}}return l}}(t,e)||S(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],r=n[1],a=n[2];return[o,r,void 0===a?0:a]}))}function N(i,t){if(null===(null==i?void 0:i.geometry))return i;var e=i.geometry,n=void 0===e?{}:e;switch(null==n?void 0:n.type){case"Point":return Z(Z({},i),{},{geometry:{type:"Point",coordinates:D([i.geometry.coordinates].reduce(t,[]))[0]}});case"LineString":return Z(Z({},i),{},{geometry:{type:"LineString",coordinates:D(i.geometry.coordinates.reduce(t,[]))}});case"Polygon":return Z(Z({},i),{},{geometry:{type:"Polygon",coordinates:[D(i.geometry.coordinates[0].reduce(t,[]))]}});default:return i}}const k=function(){function i(){var t,e,n,o,d,u,h,f,m,p=this,g=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),this._map=g.map,this._ready=!1,this._getPositionInfo=g.getPositionInfo?g.getPositionInfo:function(i){var t=i.position||i.endPosition,e=p._map.scene.drillPick(t),n=(0,b.u4)(p._map,i);return{intersected:e,cartesian:n.cartesian,cartographic:n.cartographic}},this._handler=new r.Z(this._map.canvas),this._handler.setInputAction((function(i){p._handleEdit(i,!0)}),a.Z.LEFT_DOUBLE_CLICK),this._handler.setInputAction((function(i){p._handleEdit(i)}),a.Z.LEFT_CLICK),this._handler.setInputAction(y()((function(i){p._handleMouseMove(i)}),null!==(t=g.mouseMoveThrottleTime)&&void 0!==t?t:100),a.Z.MOUSE_MOVE),this._staticPrimitivesCollection=new l.Z({destroyPrimitives:!0}),this._map.scene.primitives.add(this._staticPrimitivesCollection),this._staticBillboardCollection=new s.Z({scene:this._map.scene}),this._map.scene.primitives.add(this._staticBillboardCollection),this._dynamicPrimitivesCollection=new l.Z({destroyPrimitives:!0}),this._map.scene.primitives.add(this._dynamicPrimitivesCollection),this._dynamicBillboardCollection=new s.Z({scene:this._map.scene}),this._map.scene.primitives.add(this._dynamicBillboardCollection),this._style=(0,P.E4)(g.style),this._cursorImage=(0,v.xB)(2*(null===(e=this._style)||void 0===e||null===(n=e.cursor)||void 0===n?void 0:n.radius),{stroke:"#ffffff",strokeWidth:null===(o=this._style)||void 0===o||null===(d=o.cursor)||void 0===d?void 0:d.width,fill:"rgba(0, 0, 0, 0)"}),this._coordinateNodeImage=(0,v.xB)(2*(null===(u=this._style)||void 0===u||null===(h=u.coordinatesNode)||void 0===h?void 0:h.radius),{stroke:"#ffffff",strokeWidth:null===(f=this._style)||void 0===f||null===(m=f.coordinatesNode)||void 0===m?void 0:m.width,fill:"rgba(0, 0, 0, 0.1)"}),this._editing=!1,this._onKeyboardEvent=function(i){var t;"Escape"===i.code&&p._editing&&(p._editing=!1,p._dynamicPrimitivesCollection.removeAll(),p._dynamicBillboardCollection.removeAll()),null!==(t=p._map)&&void 0!==t&&t.scene&&!p._map.isDestroyed()&&p._map.scene.requestRender()},window.addEventListener("keydown",this._onKeyboardEvent),this._featureToModifyProperties=(0,P.cC)({getGeometryType:null==g?void 0:g.getGeometryType}),this._modifyPropertiesToFeatureProperties=P.r2,this._onEditEnd=null!=g&&g.onEditEnd?g.onEditEnd:function(){},this.setGeoJSON((null==g?void 0:g.geojson)||[]),c.Z.initializeTerrainHeights().then((function(){p._ready=!0,p._drawStaticFeatures()}))}var t,e;return t=i,(e=[{key:"setGeoJSON",value:function(i){var t=this;this._features=i?("Feature"===(null==i?void 0:i.type)?[i]:null==i?void 0:i.features).map((function(i){return Z(Z({},i),{},{properties:t._featureToModifyProperties(i)})})):[],this._geojson=Z({},i),this._drawStaticFeatures()}},{key:"remove",value:function(){var i;this._handler&&(this._handler.destroy(),this._handler=null),this._editing=!1,this._onKeyboardEvent&&window.removeEventListener("keydown",this._onKeyboardEvent),null!==(i=this._map)&&void 0!==i&&i.isDestroyed&&!this._map.isDestroyed()&&((0,v.U2)(this._map,this._staticPrimitivesCollection),this._staticPrimitivesCollection=null,(0,v.U2)(this._map,this._staticBillboardCollection),this._staticBillboardCollection=null,(0,v.U2)(this._map,this._dynamicPrimitivesCollection),this._dynamicPrimitivesCollection=null,(0,v.U2)(this._map,this._dynamicBillboardCollection),this._dynamicBillboardCollection=null)}},{key:"_drawStaticFeatures",value:function(){var i,t=this;this._ready&&(this._staticBillboardCollection.removeAll(),this._staticPrimitivesCollection.removeAll(),(null===(i=this._features)||void 0===i?void 0:i.length)>0&&this._features.forEach((function(i){t._updatePrimitives(i)})))}},{key:"_updatePrimitives",value:function(i){var t,e,n=this,o=(null==i?void 0:i.properties)||{},r=o.geometryType,a=o.geodesic,l=o.radius,s=x(r,i);if(s)switch(r){case"Circle":var c,d,u,h,f;this._staticBillboardCollection.add({id:null==i?void 0:i.id,position:s[s.length-1],image:this._coordinateNodeImage,color:(0,v.KF)(Z({},null===(t=this._style)||void 0===t?void 0:t.coordinatesNode)),disableDepthTestDistance:Number.POSITIVE_INFINITY}),a?(this._staticPrimitivesCollection.add((0,v.WX)(Z(Z({},null===(c=this._style)||void 0===c?void 0:c.areaDrawing),{},{coordinates:s[s.length-1],radius:l,clampToGround:!0}))),this._staticPrimitivesCollection.add((0,v.jy)(Z(Z({},null===(d=this._style)||void 0===d?void 0:d.lineDrawing),{},{dashLength:void 0,opacity:.01,coordinates:s[s.length-1],radius:l,allowPicking:!0,id:null==i?void 0:i.id,geodesic:!0}))),this._staticPrimitivesCollection.add((0,v.jy)(Z(Z({},null===(u=this._style)||void 0===u?void 0:u.lineDrawing),{},{coordinates:s[s.length-1],radius:l,allowPicking:!1,geodesic:!0})))):(this._staticPrimitivesCollection.add((0,v.p9)(Z(Z({},null===(h=this._style)||void 0===h?void 0:h.areaDrawing),{},{coordinates:s[s.length-1],radius:l}))),this._staticPrimitivesCollection.add((0,v.uN)(Z(Z({},null===(f=this._style)||void 0===f?void 0:f.lineDrawing),{},{coordinates:s[s.length-1],allowPicking:!0,id:null==i?void 0:i.id,radius:l}))));break;case"Point":this._staticBillboardCollection.add({id:null==i?void 0:i.id,position:s[s.length-1],image:this._coordinateNodeImage,color:(0,v.KF)(Z({},null===(e=this._style)||void 0===e?void 0:e.coordinatesNode)),disableDepthTestDistance:Number.POSITIVE_INFINITY});break;case"LineString":s.length>1&&s.forEach((function(t,e){var o,r,l;s[e+1]&&(n._staticPrimitivesCollection.add((0,v.c4)(Z(Z({},null===(r=n._style)||void 0===r?void 0:r.lineDrawing),{},{dashLength:void 0,opacity:.01,coordinates:[t,s[e+1]],allowPicking:!0,id:"".concat(null==i?void 0:i.id,":").concat(e,":segment"),geodesic:a}))),n._staticPrimitivesCollection.add((0,v.c4)(Z(Z({},null===(l=n._style)||void 0===l?void 0:l.lineDrawing),{},{coordinates:[t,s[e+1]],allowPicking:!1,geodesic:a})))),n._staticBillboardCollection.add({id:"".concat(null==i?void 0:i.id,":").concat(e,":vertex"),position:t,image:n._coordinateNodeImage,color:(0,v.KF)(Z({},null===(o=n._style)||void 0===o?void 0:o.coordinatesNode)),disableDepthTestDistance:Number.POSITIVE_INFINITY})}));break;case"Polygon":var m;s.length>2&&(this._staticPrimitivesCollection.add((0,v.XI)(Z(Z({},null===(m=this._style)||void 0===m?void 0:m.areaDrawing),{},{coordinates:E(s),geodesic:a}))),s.forEach((function(t,e){var o,r,l;s[e+1]&&(n._staticPrimitivesCollection.add((0,v.c4)(Z(Z({},null===(r=n._style)||void 0===r?void 0:r.lineDrawing),{},{dashLength:void 0,opacity:.01,coordinates:[t,s[e+1]],allowPicking:!0,id:"".concat(null==i?void 0:i.id,":").concat(e,":segment"),geodesic:a}))),n._staticPrimitivesCollection.add((0,v.c4)(Z(Z({},null===(l=n._style)||void 0===l?void 0:l.lineDrawing),{},{coordinates:[t,s[e+1]],allowPicking:!1,geodesic:a})))),n._staticBillboardCollection.add({id:"".concat(null==i?void 0:i.id,":").concat(e,":vertex"),position:t,image:n._coordinateNodeImage,color:(0,v.KF)(Z({},null===(o=n._style)||void 0===o?void 0:o.coordinatesNode)),disableDepthTestDistance:Number.POSITIVE_INFINITY})})))}this._map.scene.requestRender()}},{key:"_getPrimitiveFeatureId",value:function(i){return(_()(i)?(i||"").split(":"):[])[0]}},{key:"_getIntersectedInfo",value:function(i){var t=this,e=this._getPositionInfo(i),n=e.cartesian,o=e.cartographic,r=e.intersected.find((function(i){var e=t._getPrimitiveFeatureId(i.id),n=e&&t._features.find((function(i){return(null==i?void 0:i.id)===e}));return!!(n&&i.primitive instanceof d.Z)||!!(n&&i.primitive instanceof u.Z)||!!(n&&i.primitive instanceof h.Z)}))||{},a=r.id;return{cartesian:n,cartographic:o,primitive:r.primitive,id:a}}},{key:"_normalizeGeoJSONResult",value:function(i){var t,e,n=E("Feature"===(null===(t=this._geojson)||void 0===t?void 0:t.type)?[this._geojson]:this._geojson.features).map(i);return"Feature"===(null===(e=this._geojson)||void 0===e?void 0:e.type)?n[0]:{type:"FeatureCollection",features:n}}},{key:"_handleOnEditEnd",value:function(i){var t=this,e=this._normalizeGeoJSONResult((function(e){return e.id===(null==i?void 0:i.id)?Z(Z({},e),{},{geometry:i.geometry,properties:t._modifyPropertiesToFeatureProperties(null==i?void 0:i.properties,e)}):e}));return this._onEditEnd(e)}},{key:"_getSingleLinStringGeometry",value:function(){var i,t,e;return 1===(null===(i=this._features)||void 0===i?void 0:i.length)&&"LineString"===(null===(t=this._features[0])||void 0===t||null===(e=t.geometry)||void 0===e?void 0:e.type)&&this._features[0]}},{key:"_handleMouseMove",value:function(i){var t=this;this._dynamicPrimitivesCollection.removeAll(),this._dynamicBillboardCollection.removeAll();var e,n,r=this._getIntersectedInfo(i),a=r.primitive,l=r.cartesian,s=this._getPrimitiveFeatureId(this._editing?this._editing.id:r.id),c=s&&this._features.find((function(i){return i.id===s})),p=(null==c?void 0:c.properties)||{},y=p.geometryType,g=p.radius,_=p.geodesic;if(this._editing){var b,P,w;if(["Point","Circle"].includes(y)&&this._editing.primitive instanceof d.Z&&(this._dynamicBillboardCollection.add({position:l,image:this._coordinateNodeImage,color:(0,v.KF)(Z({},null===(b=this._style)||void 0===b?void 0:b.cursor)),disableDepthTestDistance:Number.POSITIVE_INFINITY}),"Circle"===y&&this._dynamicPrimitivesCollection.add(_?(0,v.WX)(Z(Z({},null===(P=this._style)||void 0===P?void 0:P.area),{},{coordinates:l,radius:g,clampToGround:!0})):(0,v.p9)(Z(Z({},null===(w=this._style)||void 0===w?void 0:w.areaDrawing),{},{coordinates:l,radius:g}))),_)){var I,C,O=(0,m.Rk)([l]);this._dynamicPrimitivesCollection.add((0,v.c4)(Z(Z({},null===(I=this._style)||void 0===I?void 0:I.wireframe),{},{coordinates:[O[0],l]}))),this._dynamicBillboardCollection.add({position:O[0],image:this._coordinateNodeImage,color:(0,v.KF)(Z({},null===(C=this._style)||void 0===C?void 0:C.coordinatesNode)),disableDepthTestDistance:Number.POSITIVE_INFINITY})}if("Circle"===y&&(this._editing.primitive instanceof h.Z||this._editing.primitive instanceof u.Z)){var S,T=o.Z.toCartesian(new o.Z(f.Z.toRadians(c.geometry.coordinates[0]),f.Z.toRadians(c.geometry.coordinates[1]),null!==(S=c.geometry.coordinates[2])&&void 0!==S?S:0)),D=(0,m.Qk)([T,l],_);if(_){var N,k,B,M,j,F,Y,X=(0,m.Rk)([T,l],(function(i){var t;return null===(t=i[i.length-1])||void 0===t?void 0:t.height})),A=(0,m.Rk)([T,l]);this._dynamicPrimitivesCollection.add((0,v.WX)(Z(Z({},null===(N=this._style)||void 0===N?void 0:N.area),{},{coordinates:T,radius:D,clampToGround:!0}))),this._dynamicPrimitivesCollection.add((0,v.jy)(Z(Z({},null===(k=this._style)||void 0===k?void 0:k.wireframe),{},{coordinates:X[0],radius:D,geodesic:!0}))),this._dynamicPrimitivesCollection.add((0,v.jy)(Z(Z({},null===(B=this._style)||void 0===B?void 0:B.lineDrawing),{},{coordinates:A[0],radius:D,geodesic:!0}))),this._dynamicBillboardCollection.add({position:T,image:this._cursorImage,color:(0,v.KF)(Z({},null===(M=this._style)||void 0===M?void 0:M.cursor)),disableDepthTestDistance:Number.POSITIVE_INFINITY}),this._dynamicBillboardCollection.add({position:X[0],image:this._cursorImage,color:(0,v.KF)(Z({},null===(j=this._style)||void 0===j?void 0:j.cursor)),disableDepthTestDistance:Number.POSITIVE_INFINITY}),this._dynamicBillboardCollection.add({position:A[0],image:this._cursorImage,color:(0,v.KF)(Z({},null===(F=this._style)||void 0===F?void 0:F.cursor)),disableDepthTestDistance:Number.POSITIVE_INFINITY}),this._dynamicPrimitivesCollection.add((0,v.c4)(Z(Z({},null===(Y=this._style)||void 0===Y?void 0:Y.wireframe),{},{geodesic:!0,coordinates:[T,A[0],A[1],X[1],X[0]]})))}else{var R,L;this._dynamicPrimitivesCollection.add((0,v.uN)(Z(Z({},null===(R=this._style)||void 0===R?void 0:R.lineDrawing),{},{coordinates:T,radius:D}))),this._dynamicPrimitivesCollection.add((0,v.c4)(Z(Z({},null===(L=this._style)||void 0===L?void 0:L.wireframe),{},{coordinates:[T,l]})))}}if(["LineString","Polygon"].includes(y)&&this._editing.primitive instanceof d.Z){var K,G=parseFloat(this._editing.id.split(":")[1]),V=x(y,c),z=[].concat(E(V[G-1]?[V[G-1]]:"Polygon"===y?[V[V.length-2]]:[]),[l],E(V[G+1]?[V[G+1]]:"Polygon"===y?[V[1]]:[]));if(this._dynamicBillboardCollection.add({position:l,image:this._coordinateNodeImage,color:(0,v.KF)(Z({},null===(K=this._style)||void 0===K?void 0:K.cursor)),disableDepthTestDistance:Number.POSITIVE_INFINITY}),_){var U,q,J=o.Z.fromCartesian(l).height,W=(0,m.Rk)(z,(function(){return J})),Q=(0,m.Rk)(z);this._dynamicPrimitivesCollection.add((0,v.c4)(Z(Z({},null===(U=this._style)||void 0===U?void 0:U.wireframe),{},{geodesic:_,coordinates:E(W)}))),this._dynamicPrimitivesCollection.add((0,v.c4)(Z(Z({},null===(q=this._style)||void 0===q?void 0:q.lineDrawing),{},{geodesic:_,coordinates:E(Q)}))),W.forEach((function(i,e){var n;t._dynamicPrimitivesCollection.add((0,v.c4)(Z(Z({},null===(n=t._style)||void 0===n?void 0:n.wireframe),{},{geodesic:_,coordinates:[Q[e],W[e]]})))}))}else{var H;this._dynamicPrimitivesCollection.add((0,v.c4)(Z(Z({},null===(H=this._style)||void 0===H?void 0:H.lineDrawing),{},{coordinates:z})))}}if(["LineString","Polygon"].includes(y)&&this._editing.primitive instanceof u.Z){var $,ii=parseFloat(this._editing.id.split(":")[1]),ti=x(y,c),ei=[].concat(E(ti[ii]?[ti[ii]]:[]),[l],E(ti[ii+1]?[ti[ii+1]]:[]));if(this._dynamicBillboardCollection.add({position:l,image:this._coordinateNodeImage,color:(0,v.KF)(Z({},null===($=this._style)||void 0===$?void 0:$.cursor)),disableDepthTestDistance:Number.POSITIVE_INFINITY}),_){var ni,oi,ri=o.Z.fromCartesian(l).height,ai=(0,m.Rk)(ei,(function(){return ri})),li=(0,m.Rk)(ei);this._dynamicPrimitivesCollection.add((0,v.c4)(Z(Z({},null===(ni=this._style)||void 0===ni?void 0:ni.wireframe),{},{geodesic:_,coordinates:E(ai)}))),this._dynamicPrimitivesCollection.add((0,v.c4)(Z(Z({},null===(oi=this._style)||void 0===oi?void 0:oi.lineDrawing),{},{geodesic:_,coordinates:E(li)}))),ai.forEach((function(i,e){var n;t._dynamicPrimitivesCollection.add((0,v.c4)(Z(Z({},null===(n=t._style)||void 0===n?void 0:n.wireframe),{},{geodesic:_,coordinates:[li[e],ai[e]]})))}))}else{var si;this._dynamicPrimitivesCollection.add((0,v.c4)(Z(Z({},null===(si=this._style)||void 0===si?void 0:si.lineDrawing),{},{coordinates:[].concat(E(ti[ii]?[ti[ii]]:[]),[l],E(ti[ii+1]?[ti[ii+1]]:[]))})))}}var ci=this._getSingleLinStringGeometry();if(!this._editing.primitive&&ci&&l){var di,ui,hi=x(y,ci);if(null==ci||null===(di=ci.properties)||void 0===di?void 0:di.geodesic){var fi,vi,mi=[hi[hi.length-1],l],pi=(0,m.Rk)(mi,(function(i){var t;return null===(t=i[i.length-1])||void 0===t?void 0:t.height})),yi=(0,m.Rk)(mi);this._dynamicPrimitivesCollection.add((0,v.c4)(Z(Z({},null===(fi=this._style)||void 0===fi?void 0:fi.wireframe),{},{geodesic:!0,coordinates:E(pi)}))),this._dynamicPrimitivesCollection.add((0,v.c4)(Z(Z({},null===(vi=this._style)||void 0===vi?void 0:vi.lineDrawing),{},{geodesic:!0,coordinates:E(yi)}))),pi.forEach((function(i,e){var n;t._dynamicPrimitivesCollection.add((0,v.c4)(Z(Z({},null===(n=t._style)||void 0===n?void 0:n.wireframe),{},{geodesic:!0,coordinates:[yi[e],pi[e]]})))}))}else{var gi;this._dynamicPrimitivesCollection.add((0,v.c4)(Z(Z({},null===(gi=this._style)||void 0===gi?void 0:gi.lineDrawing),{},{coordinates:[hi[hi.length-1],l]})))}this._dynamicBillboardCollection.add({position:l,image:this._coordinateNodeImage,color:(0,v.KF)(Z({},null===(ui=this._style)||void 0===ui?void 0:ui.cursor)),disableDepthTestDistance:Number.POSITIVE_INFINITY})}return this._map.scene.requestRender(),null}return a instanceof d.Z&&this._dynamicBillboardCollection.add({position:a.position,image:this._cursorImage,color:(0,v.KF)(Z({},null===(e=this._style)||void 0===e?void 0:e.cursor)),disableDepthTestDistance:Number.POSITIVE_INFINITY}),(a instanceof u.Z||a instanceof h.Z)&&this._dynamicBillboardCollection.add({position:l,image:this._cursorImage,color:(0,v.KF)(Z({},null===(n=this._style)||void 0===n?void 0:n.cursor)),disableDepthTestDistance:Number.POSITIVE_INFINITY}),this._map.scene.requestRender(),null}},{key:"_handleEdit",value:function(i,t){var e=this._getIntersectedInfo(i),n=this._getPrimitiveFeatureId(this._editing?this._editing.id:e.id),r=n&&this._features.find((function(i){return i.id===n})),a=(null==r?void 0:r.properties)||{},l=a.geometryType,s=a.geodesic;if(this._editing){this._dynamicPrimitivesCollection.removeAll(),this._dynamicBillboardCollection.removeAll();var c=this._editing.primitive,v=this._editing.id;this._editing=!1;var p=e.cartographic,y=e.cartesian,g=p&&[f.Z.toDegrees(p.longitude),f.Z.toDegrees(p.latitude),s?0:p.height];if(["Circle","Point"].includes(l)&&g&&c instanceof d.Z)return this._handleOnEditEnd(N(r,(function(i){return[].concat(E(i),[g])})));if("Circle"===l&&g&&(c instanceof h.Z||c instanceof u.Z)){var _,b=o.Z.toCartesian(new o.Z(f.Z.toRadians(r.geometry.coordinates[0]),f.Z.toRadians(r.geometry.coordinates[1]),null!==(_=r.geometry.coordinates[2])&&void 0!==_?_:0)),P=(0,m.Qk)([b,y],s);return this._handleOnEditEnd(Z(Z({},r),{},{properties:Z(Z({},null==r?void 0:r.properties),{},{radius:P})}))}if("Polygon"===l&&g&&c instanceof d.Z){var w=parseFloat(v.split(":")[1]),I=function(i){return 0===w||w===i.length-1?[0,i.length-1]:[w]};return this._handleOnEditEnd(N(r,(function(i,t,e,n){return[].concat(E(i),[I(n).includes(e)?g:t])})))}if(g&&c instanceof d.Z){var C=parseFloat(v.split(":")[1]);return this._handleOnEditEnd(N(r,(function(i,t,e){return[].concat(E(i),[e===C?g:t])})))}if(g&&c instanceof u.Z){var O=parseFloat(v.split(":")[1]);return this._handleOnEditEnd(N(r,(function(i,t,e){return[].concat(E(i),[t],E(e===O?[g]:[]))})))}var S=this._getSingleLinStringGeometry();if(g&&!c&&S){var T,x=[g[0],g[1],null!=S&&null!==(T=S.properties)&&void 0!==T&&T.geodesic?0:g[2]];return t?this._handleOnEditEnd(N(S,(function(i,t,e,n){return[].concat(E(i),E(e<n.length-1?[t]:[]))}))):(this._editing={id:v},this._handleOnEditEnd(N(S,(function(i,t,e,n){return[].concat(E(i),[t],E(e===n.length-1?[x]:[]))}))))}}else this._editing=e,e.primitive||this._getSingleLinStringGeometry()||(this._editing=!1);return null}}])&&I(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),i}(),B=function(i){var t=i.map,e=i.active,o=i.geojson,r=i.onEditEnd,a=i.getGeometryType,l=i.style,s=i.getPositionInfo,c=(0,n.useRef)();return(0,n.useEffect)((function(){return null!=t&&t.canvas&&e&&(c.current=new k({map:t,geojson:o,getGeometryType:a,onEditEnd:r,style:l,getPositionInfo:s})),function(){c.current&&(c.current.remove(),c.current=null)}}),[t,e]),(0,n.useEffect)((function(){c.current&&c.current.setGeoJSON(o)}),[o]),null}},854788:(i,t,e)=>{"use strict";function n(i){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(i){return typeof i}:function(i){return i&&"function"==typeof Symbol&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},n(i)}function o(i,t){var e=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),e.push.apply(e,n)}return e}function r(i){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach((function(t){var o,r,a,l;o=i,r=t,a=e[t],l=function(i,t){if("object"!=n(i)||!i)return i;var e=i[Symbol.toPrimitive];if(void 0!==e){var o=e.call(i,"string");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}(r),(r="symbol"==n(l)?l:String(l))in o?Object.defineProperty(o,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):o[r]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(t){Object.defineProperty(i,t,Object.getOwnPropertyDescriptor(e,t))}))}return i}function a(i){return r({wireframe:{color:"#000000",opacity:1,depthFailColor:"#000000",depthFailOpacity:.4,width:.5},lineDrawing:{color:"#000000",opacity:1,depthFailColor:"#000000",depthFailOpacity:.4,width:3,dashLength:8},line:{color:"#ffcc33",opacity:1,depthFailColor:"#ffcc33",depthFailOpacity:.4,width:2},areaDrawing:{color:"#ffffff",opacity:.5,depthFailColor:"#ffffff",depthFailOpacity:.25},area:{color:"#ffffff",opacity:.5,depthFailColor:"#ffffff",depthFailOpacity:.25},cursor:{color:"#ff0000",width:2,radius:4},coordinatesNode:{color:"#333333",width:2,radius:5}},i)}e.d(t,{E4:()=>a,cC:()=>s,r2:()=>c});var l=function(i){var t;return null==i||null===(t=i.geometry)||void 0===t?void 0:t.type},s=function(){var i=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).getGeometryType,t=void 0===i?l:i;return function(i){return r(r({},null==i?void 0:i.properties),{},{geometryType:t(i)})}},c=function(i,t){return r(r({},null==t?void 0:t.properties),void 0!==(null==i?void 0:i.radius)&&{radius:i.radius})}},433353:(i,t,e)=>{"use strict";e.d(t,{u4:()=>l,ZP:()=>s});var n=e(532056),o=e(11020),r=e(604274),a=e(958913);function l(i,t){var e=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).pickObjectsLimit,o=void 0===e?Number.MAX_VALUE:e,l=i.scene,s=i.camera,c=t.position||t.endPosition,d=l.pick(c),u=l.pickPosition(c);if(!((null==d?void 0:d.primitive)instanceof r.Z)&&!((null==d?void 0:d.primitive)instanceof a.Z)&&d&&u)return{cartesian:u,cartographic:n.Z.fromCartesian(u),feature:d};var h,f=s.getPickRay(c),v=l.drillPickFromRay(f,o).find((function(i){var t=i.exclude,e=i.object,n=i.position;return!t&&n&&e}))||null;if(v)return{cartesian:v.position,cartographic:n.Z.fromCartesian(v.position),feature:null==v||null===(h=v.object)||void 0===h?void 0:h.primitive};var m=l.globe.pick(f,l);return m?{cartesian:m,cartographic:n.Z.fromCartesian(m)}:{}}const s={getMouseXYZ:function(i,t){var e=i.scene,r=t.position||t.endPosition;if(!r)return null;if(i.scene.drillPick(r).find((function(i){var t,e,n;return!(!1===(null==i||null===(t=i.id)||void 0===t||null===(e=t.entityCollection)||void 0===e||null===(n=e.owner)||void 0===n?void 0:n.queryable))}))){var a=e.globe.depthTestAgainstTerrain,l=e.pickTranslucentDepth;e.globe.depthTestAgainstTerrain=!0,e.pickTranslucentDepth=!0;var s=e.pickPosition(r);if(e.globe.depthTestAgainstTerrain=a,e.pickTranslucentDepth=l,s)return n.Z.fromCartesian(s)}var c=i.camera.getPickRay(r),d=i.scene.globe.pick(c,i.scene),u=e._globe.ellipsoid;if(o.Z(d)){var h=u.cartesianToCartographic(d),f=function(i,t){if(null!==t.position){var e=i.scene,n=e._globe.ellipsoid;return e.camera.pickEllipsoid(t.position||t.endPosition,n)}return null}(i,t);return f&&(h.height=e._globe.getHeight(h),h.cartesian=f,h.position=d),h}return null},getMouseTile:function(i,t){var e=i.scene;if(!t.position)return null;var n=i.camera.getPickRay(t.position);return i.scene.globe.pickTile(n,e)}}},637453:(i,t,e)=>{"use strict";e.d(t,{eN:()=>f,tj:()=>v,Ys:()=>m,bj:()=>p,Qg:()=>y,nz:()=>g,Qk:()=>b,vZ:()=>P,g7:()=>w,Rk:()=>I});var n=e(660904),o=e(344485),r=e(405254),a=e(532056),l=e(835189),s=e(509187),c=e.n(s);function d(){try{var i=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(i){}return(d=function(){return!!i})()}function u(i,t){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,t){return i.__proto__=t,i},u(i,t)}function h(i,t){(null==t||t>i.length)&&(t=i.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=i[e];return n}function f(i,t){var e=n.Z.subtract(t,i,new n.Z),o=n.Z.multiplyByScalar(e,.5,new n.Z);return n.Z.add(i,o,new n.Z)}function v(i,t){var e=n.Z.normalize(i,new n.Z),r=n.Z.normalize(t,new n.Z),a=n.Z.dot(e,r);return o.Z.toDegrees(Math.acos(a))}function m(i){return i.map((function(t,e){var o=i[e-1],r=i[e+1];return o&&r?v(n.Z.subtract(o,t,new n.Z),n.Z.subtract(r,t,new n.Z)):null})).filter((function(i){return null!==i}))}function p(i){return new n.Z((i[0].x+i[1].x+i[2].x)/3,(i[0].y+i[1].y+i[2].y)/3,(i[0].z+i[1].z+i[2].z)/3)}function y(i,t){return i.map((function(e,o){var r=i[o-1],a=i[o+1];if(r&&a){var l=function(i,t){var e=n.Z.normalize(i,new n.Z),o=n.Z.normalize(t,new n.Z);return n.Z.cross(e,o,new n.Z)}(n.Z.subtract(r,e,new n.Z),n.Z.subtract(a,e,new n.Z)),s=-Math.sign(n.Z.dot(l,n.Z.subtract(e,t,new n.Z),new n.Z));return v(n.Z.multiplyByScalar(l,s,new n.Z),e)}return null})).filter((function(i){return null!==i}))}function g(i,t){if((null==i?void 0:i.length)<3)return 0;for(var e=r.Z.packArray(i),o=c()(e,t,2),a=0,l=0;l<o.length;l+=3){var s=i[o[l]],d=i[o[l+1]],u=i[o[l+2]],h=n.Z.subtract(d,s,new n.Z),f=n.Z.subtract(u,s,new n.Z),v=n.Z.cross(h,f,new n.Z);a+=n.Z.magnitude(v)/2}return a}function _(i,t){var e,n=[i,t].map((function(i){return a.Z.fromCartesian(i)}));return function(i,t,e){if(d())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,t);var o=new(i.bind.apply(i,n));return e&&u(o,e.prototype),o}(l.Z,(e=n.map((function(i){var t=i.longitude,e=i.latitude;return new a.Z(t,e,0)})),function(i){if(Array.isArray(i))return h(i)}(e)||function(i){if("undefined"!=typeof Symbol&&null!=i[Symbol.iterator]||null!=i["@@iterator"])return Array.from(i)}(e)||function(i,t){if(i){if("string"==typeof i)return h(i,t);var e=Object.prototype.toString.call(i).slice(8,-1);return"Object"===e&&i.constructor&&(e=i.constructor.name),"Map"===e||"Set"===e?Array.from(i):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?h(i,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())).surfaceDistance}function b(i,t){return(null==i?void 0:i.length)<2?0:i.reduce((function(e,o,r){return i[r-1]?e+(t?_(o,i[r-1]):n.Z.distance(o,i[r-1])):e}),0)}function P(i){return Math.sign(a.Z.fromCartesian(i[1]).height-a.Z.fromCartesian(i[0]).height)}function w(i,t){var e=a.Z.fromCartesian(i),n=e.longitude,r=e.latitude,l=e.height;return[o.Z.toDegrees(n),o.Z.toDegrees(r),t?0:l]}function I(i,t){var e=i.map((function(i){return a.Z.fromCartesian(i)})),n=t?t(e):0;return e.map((function(i){var t=i.longitude,e=i.latitude;return a.Z.toCartesian(new a.Z(t,e,n))}))}},382582:function(i){i.exports=function(){"use strict";function i(i,n,o,r,a){!function i(e,n,o,r,a){for(;r>o;){if(r-o>600){var l=r-o+1,s=n-o+1,c=Math.log(l),d=.5*Math.exp(2*c/3),u=.5*Math.sqrt(c*d*(l-d)/l)*(s-l/2<0?-1:1);i(e,n,Math.max(o,Math.floor(n-s*d/l+u)),Math.min(r,Math.floor(n+(l-s)*d/l+u)),a)}var h=e[n],f=o,v=r;for(t(e,o,n),a(e[r],h)>0&&t(e,o,r);f<v;){for(t(e,f,v),f++,v--;a(e[f],h)<0;)f++;for(;a(e[v],h)>0;)v--}0===a(e[o],h)?t(e,o,v):t(e,++v,r),v<=n&&(o=v+1),n<=v&&(r=v-1)}}(i,n,o||0,r||i.length-1,a||e)}function t(i,t,e){var n=i[t];i[t]=i[e],i[e]=n}function e(i,t){return i<t?-1:i>t?1:0}var n=function(i){void 0===i&&(i=9),this._maxEntries=Math.max(4,i),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),this.clear()};function o(i,t,e){if(!e)return t.indexOf(i);for(var n=0;n<t.length;n++)if(e(i,t[n]))return n;return-1}function r(i,t){a(i,0,i.children.length,t,i)}function a(i,t,e,n,o){o||(o=v(null)),o.minX=1/0,o.minY=1/0,o.maxX=-1/0,o.maxY=-1/0;for(var r=t;r<e;r++){var a=i.children[r];l(o,i.leaf?n(a):a)}return o}function l(i,t){return i.minX=Math.min(i.minX,t.minX),i.minY=Math.min(i.minY,t.minY),i.maxX=Math.max(i.maxX,t.maxX),i.maxY=Math.max(i.maxY,t.maxY),i}function s(i,t){return i.minX-t.minX}function c(i,t){return i.minY-t.minY}function d(i){return(i.maxX-i.minX)*(i.maxY-i.minY)}function u(i){return i.maxX-i.minX+(i.maxY-i.minY)}function h(i,t){return i.minX<=t.minX&&i.minY<=t.minY&&t.maxX<=i.maxX&&t.maxY<=i.maxY}function f(i,t){return t.minX<=i.maxX&&t.minY<=i.maxY&&t.maxX>=i.minX&&t.maxY>=i.minY}function v(i){return{children:i,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function m(t,e,n,o,r){for(var a=[e,n];a.length;)if(!((n=a.pop())-(e=a.pop())<=o)){var l=e+Math.ceil((n-e)/o/2)*o;i(t,l,e,n,r),a.push(e,l,l,n)}}return n.prototype.all=function(){return this._all(this.data,[])},n.prototype.search=function(i){var t=this.data,e=[];if(!f(i,t))return e;for(var n=this.toBBox,o=[];t;){for(var r=0;r<t.children.length;r++){var a=t.children[r],l=t.leaf?n(a):a;f(i,l)&&(t.leaf?e.push(a):h(i,l)?this._all(a,e):o.push(a))}t=o.pop()}return e},n.prototype.collides=function(i){var t=this.data;if(!f(i,t))return!1;for(var e=[];t;){for(var n=0;n<t.children.length;n++){var o=t.children[n],r=t.leaf?this.toBBox(o):o;if(f(i,r)){if(t.leaf||h(i,r))return!0;e.push(o)}}t=e.pop()}return!1},n.prototype.load=function(i){if(!i||!i.length)return this;if(i.length<this._minEntries){for(var t=0;t<i.length;t++)this.insert(i[t]);return this}var e=this._build(i.slice(),0,i.length-1,0);if(this.data.children.length)if(this.data.height===e.height)this._splitRoot(this.data,e);else{if(this.data.height<e.height){var n=this.data;this.data=e,e=n}this._insert(e,this.data.height-e.height-1,!0)}else this.data=e;return this},n.prototype.insert=function(i){return i&&this._insert(i,this.data.height-1),this},n.prototype.clear=function(){return this.data=v([]),this},n.prototype.remove=function(i,t){if(!i)return this;for(var e,n,r,a=this.data,l=this.toBBox(i),s=[],c=[];a||s.length;){if(a||(a=s.pop(),n=s[s.length-1],e=c.pop(),r=!0),a.leaf){var d=o(i,a.children,t);if(-1!==d)return a.children.splice(d,1),s.push(a),this._condense(s),this}r||a.leaf||!h(a,l)?n?(e++,a=n.children[e],r=!1):a=null:(s.push(a),c.push(e),e=0,n=a,a=a.children[0])}return this},n.prototype.toBBox=function(i){return i},n.prototype.compareMinX=function(i,t){return i.minX-t.minX},n.prototype.compareMinY=function(i,t){return i.minY-t.minY},n.prototype.toJSON=function(){return this.data},n.prototype.fromJSON=function(i){return this.data=i,this},n.prototype._all=function(i,t){for(var e=[];i;)i.leaf?t.push.apply(t,i.children):e.push.apply(e,i.children),i=e.pop();return t},n.prototype._build=function(i,t,e,n){var o,a=e-t+1,l=this._maxEntries;if(a<=l)return r(o=v(i.slice(t,e+1)),this.toBBox),o;n||(n=Math.ceil(Math.log(a)/Math.log(l)),l=Math.ceil(a/Math.pow(l,n-1))),(o=v([])).leaf=!1,o.height=n;var s=Math.ceil(a/l),c=s*Math.ceil(Math.sqrt(l));m(i,t,e,c,this.compareMinX);for(var d=t;d<=e;d+=c){var u=Math.min(d+c-1,e);m(i,d,u,s,this.compareMinY);for(var h=d;h<=u;h+=s){var f=Math.min(h+s-1,u);o.children.push(this._build(i,h,f,n-1))}}return r(o,this.toBBox),o},n.prototype._chooseSubtree=function(i,t,e,n){for(;n.push(t),!t.leaf&&n.length-1!==e;){for(var o=1/0,r=1/0,a=void 0,l=0;l<t.children.length;l++){var s=t.children[l],c=d(s),u=(h=i,f=s,(Math.max(f.maxX,h.maxX)-Math.min(f.minX,h.minX))*(Math.max(f.maxY,h.maxY)-Math.min(f.minY,h.minY))-c);u<r?(r=u,o=c<o?c:o,a=s):u===r&&c<o&&(o=c,a=s)}t=a||t.children[0]}var h,f;return t},n.prototype._insert=function(i,t,e){var n=e?i:this.toBBox(i),o=[],r=this._chooseSubtree(n,this.data,t,o);for(r.children.push(i),l(r,n);t>=0&&o[t].children.length>this._maxEntries;)this._split(o,t),t--;this._adjustParentBBoxes(n,o,t)},n.prototype._split=function(i,t){var e=i[t],n=e.children.length,o=this._minEntries;this._chooseSplitAxis(e,o,n);var a=this._chooseSplitIndex(e,o,n),l=v(e.children.splice(a,e.children.length-a));l.height=e.height,l.leaf=e.leaf,r(e,this.toBBox),r(l,this.toBBox),t?i[t-1].children.push(l):this._splitRoot(e,l)},n.prototype._splitRoot=function(i,t){this.data=v([i,t]),this.data.height=i.height+1,this.data.leaf=!1,r(this.data,this.toBBox)},n.prototype._chooseSplitIndex=function(i,t,e){for(var n,o,r,l,s,c,u,h=1/0,f=1/0,v=t;v<=e-t;v++){var m=a(i,0,v,this.toBBox),p=a(i,v,e,this.toBBox),y=(o=m,r=p,void 0,void 0,void 0,void 0,l=Math.max(o.minX,r.minX),s=Math.max(o.minY,r.minY),c=Math.min(o.maxX,r.maxX),u=Math.min(o.maxY,r.maxY),Math.max(0,c-l)*Math.max(0,u-s)),g=d(m)+d(p);y<h?(h=y,n=v,f=g<f?g:f):y===h&&g<f&&(f=g,n=v)}return n||e-t},n.prototype._chooseSplitAxis=function(i,t,e){var n=i.leaf?this.compareMinX:s,o=i.leaf?this.compareMinY:c;this._allDistMargin(i,t,e,n)<this._allDistMargin(i,t,e,o)&&i.children.sort(n)},n.prototype._allDistMargin=function(i,t,e,n){i.children.sort(n);for(var o=this.toBBox,r=a(i,0,t,o),s=a(i,e-t,e,o),c=u(r)+u(s),d=t;d<e-t;d++){var h=i.children[d];l(r,i.leaf?o(h):h),c+=u(r)}for(var f=e-t-1;f>=t;f--){var v=i.children[f];l(s,i.leaf?o(v):v),c+=u(s)}return c},n.prototype._adjustParentBBoxes=function(i,t,e){for(var n=e;n>=0;n--)l(t[n],i)},n.prototype._condense=function(i){for(var t=i.length-1,e=void 0;t>=0;t--)0===i[t].children.length?t>0?(e=i[t-1].children).splice(e.indexOf(i[t]),1):this.clear():r(i[t],this.toBBox)},n}()}}]);