(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7095],{77095:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>K}),o(57827);var i=o(27418),n=o.n(i),r=o(49179),s=o(58493),a=o(93409),p=o(23068),c=o(97016),l=o(29902),h=o(13002),u=o(9520),d=o(73381),g=o(40353),f=o(91358),y=o(21882),m=o(18672),v="accuracy",w="accuracyGeometry",b="altitude",O="altitudeAccuracy",C="heading",_="position",k="projection",P="speed",x="tracking",E="trackingOptions",j=function(t){function e(e){t.call(this,d.Z.ERROR),this.code=e.code,this.message=e.message}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(u.ZP);const A=function(t){function e(e){t.call(this);var o=e||{};this.position_=null,this.transform_=m.gD,this.watchId_=void 0,(0,h.oL)(this,(0,s.v_)(k),this.handleProjectionChanged_,this),(0,h.oL)(this,(0,s.v_)(x),this.handleTrackingChanged_,this),void 0!==o.projection&&this.setProjection(o.projection),void 0!==o.trackingOptions&&this.setTrackingOptions(o.trackingOptions),this.setTracking(void 0!==o.tracking&&o.tracking)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.disposeInternal=function(){this.setTracking(!1),t.prototype.disposeInternal.call(this)},e.prototype.handleProjectionChanged_=function(){var t=this.getProjection();t&&(this.transform_=(0,m.WO)((0,m.U2)("EPSG:4326"),t),this.position_&&this.set(_,this.transform_(this.position_)))},e.prototype.handleTrackingChanged_=function(){if(f.De){var t=this.getTracking();t&&void 0===this.watchId_?this.watchId_=navigator.geolocation.watchPosition(this.positionChange_.bind(this),this.positionError_.bind(this),this.getTrackingOptions()):t||void 0===this.watchId_||(navigator.geolocation.clearWatch(this.watchId_),this.watchId_=void 0)}},e.prototype.positionChange_=function(t){var e=t.coords;this.set(v,e.accuracy),this.set(b,null===e.altitude?void 0:e.altitude),this.set(O,null===e.altitudeAccuracy?void 0:e.altitudeAccuracy),this.set(C,null===e.heading?void 0:(0,y.Yr)(e.heading)),this.position_?(this.position_[0]=e.longitude,this.position_[1]=e.latitude):this.position_=[e.longitude,e.latitude];var o=this.transform_(this.position_);this.set(_,o),this.set(P,null===e.speed?void 0:e.speed);var i=(0,g.iu)(this.position_,e.accuracy);i.applyTransform(this.transform_),this.set(w,i),this.changed()},e.prototype.positionError_=function(t){this.setTracking(!1),this.dispatchEvent(new j(t))},e.prototype.getAccuracy=function(){return this.get(v)},e.prototype.getAccuracyGeometry=function(){return this.get(w)||null},e.prototype.getAltitude=function(){return this.get(b)},e.prototype.getAltitudeAccuracy=function(){return this.get(O)},e.prototype.getHeading=function(){return this.get(C)},e.prototype.getPosition=function(){return this.get(_)},e.prototype.getProjection=function(){return this.get(k)},e.prototype.getSpeed=function(){return this.get(P)},e.prototype.getTracking=function(){return this.get(x)},e.prototype.getTrackingOptions=function(){return this.get(E)},e.prototype.setProjection=function(t){this.set(k,(0,m.U2)(t))},e.prototype.setTracking=function(t){this.set(x,t)},e.prototype.setTrackingOptions=function(t){this.set(E,t)},e}(s.ZP);var T=o(52043),L=o(69669),D=o(98090),F=o(31219),S=o(98185),H=o(20767),Z=o(9371),I=o(23493),G=o.n(I);function R(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,i)}return o}function B(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var M=function(){var t=document.createElement("div");t.setAttribute("class","ol-popup");var e=document.createElement("a");e.setAttribute("class","ol-popup-close-btn"),e.setAttribute("href","#close"),e.innerHTML="x";var o=document.createElement("div");o.setAttribute("class","ol-popup-cnt-wrapper");var i=document.createElement("div");i.setAttribute("class","ol-popup-cnt"),o.appendChild(i);var n=document.createElement("div");n.setAttribute("class","ol-popup-tip-wrapper");var r=document.createElement("div");return r.setAttribute("class","ol-popup-tip"),n.appendChild(r),t.appendChild(e),t.appendChild(o),t.appendChild(n),t}(),N=function(t,e){s.ZP.call(this,{state:"DISABLED"}),this.map=t;var o={drawCircle:!0,follow:!0,stopFollowingOnDrag:!1,remainActive:!0,locateStyle:this._getDefaultStyles(),metric:!0,onLocationError:this.onLocationError,keepCurrentZoomLevel:!1,showPopup:!0,strings:{metersUnit:"meters",feetUnit:"feet",popup:"You are within {distance} {unit} from this point"},locateOptions:{maximumAge:2e3,enableHighAccuracy:!1,timeout:1e4,maxZoom:18}};this.options=n()({},o,e||{}),this.geolocate=new A({projection:this.map.getView().getProjection(),trackingOptions:this.options.locateOptions}),this.updateHandler=this._updatePosFt.bind(this),this.geolocate.on("change:position",this.options.locateOptions.rateControl?G()(this.updateHandler,this.options.locateOptions.rateControl):this.updateHandler),this.popup=M,this.popup.hidden=!0,this.popCnt=M.getElementsByClassName("ol-popup-cnt")[0],this.overlay=new a.Z({element:this.popup,positioning:"top-center",stopEvent:!1}),this.layer=new l.Z({source:new c.Z({useSpatialIndex:!1})}),this.posFt=new p.Z({geometry:this.geolocate.getAccuracyGeometry(),name:"position",id:"_locate-pos"}),this.posFt.setStyle(this.options.locateStyle),this.layer.getSource().addFeature(this.posFt),this.clickHandler=this.mapClick.bind(this),this.stopHandler=this.stopFollow.bind(this),this.errorHandler=this.options.onLocationError.bind(this)};(0,r.XW)(N,s.ZP),N.prototype.start=function(){this.geolocate.on("error",this.errorHandler),this.follow=this.options.follow,this.geolocate.setTracking(!0),this.layer.setMap(this.map),this.map.addOverlay(this.overlay),this.options.showPopup&&(this.map.on("click",this.clickHandler),this.map.on("touch",this.clickHandler)),this.options.stopFollowingOnDrag&&this.map.on("pointerdrag",this.stopHandler),this.p?this._updatePosFt():this.set("state","LOCATING")},N.prototype.startFollow=function(){this.follow=!0,this.options.stopFollowingOnDrag&&this.map.on("pointerdrag",this.stopHandler),this.p&&this._updatePosFt()},N.prototype.stop=function(){this.geolocate.un("error",this.errorHandler),this.geolocate.setTracking(!1),this.popup.hide=!0,this.map.removeOverlay(this.overlay),this.layer.setMap(null),this.options.showPopup&&(this.map.un("click",this.clickHandler),this.map.un("touch",this.clickHandler)),this.options.stopFollowingOnDrag&&this.map.un("pointerdrag",this.stopHandler),this.set("state","DISABLED")},N.prototype.stopFollow=function(){this.follow=!1,this.map.un("pointerdrag",this.stopHandler),this.set("state","ENABLED")},N.prototype._updatePosFt=function(){var t=this.get("state"),e=this.follow?"FOLLOWING":"ENABLED";e!==t&&this.set("state",e);var o=this.geolocate.getPosition();this.p=o;var i=new T.Z([parseFloat(o[0]),parseFloat(o[1])]);if(this.options.drawCircle){var n=new L.Z([parseFloat(o[0]),parseFloat(o[1])],this.geolocate.getAccuracy());this.posFt.setGeometry(new D.default([i,n]))}else this.posFt.setGeometry(new D.default([i]));this.popup.hidden||this._updatePopUpCnt(),this.follow&&this.updateView(i),this.options.remainActive||this.geolocate.setTracking(!1)},N.prototype.updateView=function(t){this.follow&&(this.map.getView().setCenter(t.getCoordinates()),this.options.keepCurrentZoomLevel||this.map.getView().setZoom(this.options.locateOptions.maxZoom))},N.prototype._updatePopUpCnt=function(){var t,e;this.options.metric?(t=this.geolocate.getAccuracy(),e=this.options.strings.metersUnit):(t=Math.round(3.2808399*this.geolocate.getAccuracy()),e=this.options.strings.feetUnit);var o=this.options.strings.popup.replace("{distance}",t);this.popCnt.innerHTML=o.replace("{unit}",e),this.overlay.setPosition(this.posFt.getGeometry().getGeometries()[0].getCoordinates()),this.popup.hidden=!1},N.prototype.onLocationError=function(t){alert(t.message)},N.prototype.mapClick=function(t){var e=this.map.forEachFeatureAtPixel(t.pixel,(function(t){return t}));e&&"_locate-pos"===e.get("id")&&this.popup.hidden?this._updatePopUpCnt():this.popup.hidden||(M.hidden=!0)},N.prototype._getDefaultStyles=function(){return new F.default({image:new Z.default({radius:6,fill:new S.default({color:"rgba(42,147,238,0.7)"}),stroke:new H.default({color:"rgba(19,106,236,1)",width:2})}),fill:new S.default({color:"rgba(19,106,236,0.15)"}),stroke:new H.default({color:"rgba(19,106,236,1)",width:2})})},N.prototype.setStrings=function(t){this.options.strings=n()({},this.options.strings,t)},N.prototype.setTrackingOptions=function(t){this.geolocate&&(this.geolocate.setTrackingOptions(t),this.options.locateOptions=function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?R(Object(o),!0).forEach((function(e){B(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):R(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}({},t))};const U=N;function W(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function V(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,i)}return o}function q(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?V(Object(o),!0).forEach((function(e){Y(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):V(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function Y(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var X={follow:!0,remainActive:!0,metric:!0,stopFollowingOnDrag:!0,keepCurrentZoomLevel:!1,locateOptions:{maximumAge:2e3,enableHighAccuracy:!1,timeout:1e4,maxZoom:18}};function z(t){return q(q(q({},X),t),{},{locateOptions:q(q({},X.locateOptions),t.locateOptions)})}const K=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,o;return e=t,(o=[{key:"start",value:function(t){var e=t.map,o=t.options,i=t.messages,n=t.status,r=t.onStateChange,s=t.onLocationError;this.locate=new U(e,z(o)),this.locate.setStrings(i),this.locate.options.onLocationError=s,this.locate.on("propertychange",(function(t){r(t.target.get(t.key))})),this.configureLocate(n)}},{key:"update",value:function(t){var e=t.status,o=t.messages,i=t.options;this.configureLocate(e),this.locate.setStrings(o),this.locate.setTrackingOptions(z(i).locateOptions)}},{key:"clear",value:function(){}},{key:"configureLocate",value:function(t){var e=this.locate.get("state");"ENABLED"===t&&"DISABLED"===e?this.locate.start():"FOLLOWING"===t&&"ENABLED"===e?this.locate.startFollow():"DISABLED"===t&&this.locate.stop()}}])&&W(e.prototype,o),t}()},92870:(t,e,o)=>{(t.exports=o(9252)()).push([t.id,'.msgapi .ol-popup {\r\n    position: absolute;\r\n    text-align: center;\r\n    font: 12px/1.5 "Helvetica Neue", Arial, Helvetica, sans-serif;\r\n    -ms-transform: translate(-50%,-100%); /* IE 9 */\r\n    -webkit-transform: translate(-50%,-100%); /* Safari */\r\n    transform: translate(-50%,-100%);\r\n}\r\n.msgapi a.ol-popup-close-btn {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  padding: 4px 4px 0 0;\r\n  text-align: center;\r\n  width: 18px;\r\n  height: 14px;\r\n  font: 16px/14px Tahoma, Verdana, sans-serif;\r\n  color: #c3c3c3;\r\n  text-decoration: none;\r\n  font-weight: bold;\r\n  background: transparent;\r\n}\r\n.msgapi .ol-popup-cnt-wrapper {\r\n  padding: 1px;\r\n  text-align: left;\r\n  border-radius: 12px;\r\n}\r\n.msgapi .ol-popup-cnt-wrapper, .msgapi .ol-popup-tip {\r\n  background: white;\r\n  box-shadow: 0 3px 14px rgba(0,0,0,0.4);\r\n}\r\n.msgapi .ol-popup-cnt {\r\n  margin: 13px 19px;\r\n  line-height: 1.4;\r\n   white-space: nowrap;\r\n\r\n}\r\n.msgapi .ol-popup-tip-wrapper {\r\n  margin: 0 auto;\r\n  width: 40px;\r\n  height: 20px;\r\n  position: relative;\r\n  overflow: hidden;\r\n\r\n}\r\n.msgapi .ol-popup-tip {\r\n  width: 17px;\r\n  height: 17px;\r\n  padding: 1px;\r\n  margin: -10px auto 0;\r\n  -webkit-transform: rotate(45deg);\r\n  -moz-transform: rotate(45deg);\r\n  -ms-transform: rotate(45deg);\r\n  -o-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n}\r\n',""])},23279:(t,e,o)=>{var i=o(13218),n=o(7771),r=o(14841),s=Math.max,a=Math.min;t.exports=function(t,e,o){var p,c,l,h,u,d,g=0,f=!1,y=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function v(e){var o=p,i=c;return p=c=void 0,g=e,h=t.apply(i,o)}function w(t){return g=t,u=setTimeout(O,e),f?v(t):h}function b(t){var o=t-d;return void 0===d||o>=e||o<0||y&&t-g>=l}function O(){var t=n();if(b(t))return C(t);u=setTimeout(O,function(t){var o=e-(t-d);return y?a(o,l-(t-g)):o}(t))}function C(t){return u=void 0,m&&p?v(t):(p=c=void 0,h)}function _(){var t=n(),o=b(t);if(p=arguments,c=this,d=t,o){if(void 0===u)return w(d);if(y)return clearTimeout(u),u=setTimeout(O,e),v(d)}return void 0===u&&(u=setTimeout(O,e)),h}return e=r(e)||0,i(o)&&(f=!!o.leading,l=(y="maxWait"in o)?s(r(o.maxWait)||0,e):l,m="trailing"in o?!!o.trailing:m),_.cancel=function(){void 0!==u&&clearTimeout(u),g=0,p=d=c=u=void 0},_.flush=function(){return void 0===u?h:C(n())},_}},7771:(t,e,o)=>{var i=o(55639);t.exports=function(){return i.Date.now()}},23493:(t,e,o)=>{var i=o(23279),n=o(13218);t.exports=function(t,e,o){var r=!0,s=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return n(o)&&(r="leading"in o?!!o.leading:r,s="trailing"in o?!!o.trailing:s),i(t,e,{leading:r,maxWait:e,trailing:s})}},69669:(t,e,o)=>{"use strict";o.d(e,{Z:()=>p});var i=o(21915),n=o(28795),r=o(32538),s=o(38667),a=function(t){function e(e,o,i){if(t.call(this),void 0!==i&&void 0===o)this.setFlatCoordinates(i,e);else{var n=o||0;this.setCenterAndRadius(e,n,i)}}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.clone=function(){return new e(this.flatCoordinates.slice(),void 0,this.layout)},e.prototype.closestPointXY=function(t,e,o,i){var n=this.flatCoordinates,r=t-n[0],s=e-n[1],a=r*r+s*s;if(a<i){if(0===a)for(var p=0;p<this.stride;++p)o[p]=n[p];else{var c=this.getRadius()/Math.sqrt(a);o[0]=n[0]+c*r,o[1]=n[1]+c*s;for(var l=2;l<this.stride;++l)o[l]=n[l]}return o.length=this.stride,a}return i},e.prototype.containsXY=function(t,e){var o=this.flatCoordinates,i=t-o[0],n=e-o[1];return i*i+n*n<=this.getRadiusSquared_()},e.prototype.getCenter=function(){return this.flatCoordinates.slice(0,this.stride)},e.prototype.computeExtent=function(t){var e=this.flatCoordinates,o=e[this.stride]-e[0];return(0,i.T9)(e[0]-o,e[1]-o,e[0]+o,e[1]+o,t)},e.prototype.getRadius=function(){return Math.sqrt(this.getRadiusSquared_())},e.prototype.getRadiusSquared_=function(){var t=this.flatCoordinates[this.stride]-this.flatCoordinates[0],e=this.flatCoordinates[this.stride+1]-this.flatCoordinates[1];return t*t+e*e},e.prototype.getType=function(){return n.Z.CIRCLE},e.prototype.intersectsExtent=function(t){var e=this.getExtent();if((0,i.kK)(t,e)){var o=this.getCenter();return t[0]<=o[0]&&t[2]>=o[0]||t[1]<=o[1]&&t[3]>=o[1]||(0,i.H6)(t,this.intersectsCoordinate,this)}return!1},e.prototype.setCenter=function(t){var e=this.stride,o=this.flatCoordinates[e]-this.flatCoordinates[0],i=t.slice();i[e]=i[0]+o;for(var n=1;n<e;++n)i[e+n]=t[n];this.setFlatCoordinates(this.layout,i),this.changed()},e.prototype.setCenterAndRadius=function(t,e,o){this.setLayout(o,t,0),this.flatCoordinates||(this.flatCoordinates=[]);var i=this.flatCoordinates,n=(0,s.IG)(i,0,t,this.stride);i[n++]=i[0]+e;for(var r=1,a=this.stride;r<a;++r)i[n++]=i[r];i.length=n,this.changed()},e.prototype.getCoordinates=function(){return null},e.prototype.setCoordinates=function(t,e){},e.prototype.setRadius=function(t){this.flatCoordinates[this.stride]=this.flatCoordinates[0]+t,this.changed()},e}(r.ZP);a.prototype.transform;const p=a},57827:(t,e,o)=>{var i=o(92870);"string"==typeof i&&(i=[[t.id,i,""]]),o(14246)(i,{}),i.locals&&(t.exports=i.locals)}}]);