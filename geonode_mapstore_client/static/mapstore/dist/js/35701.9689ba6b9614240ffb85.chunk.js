(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[35701],{761444:(t,e,r)=>{"use strict";r.r(e);var n=r(845243),i=r.n(n),o=r(244712),a=r.n(o),l=(r(371851),r(727418)),u=r.n(l);i().BingLayer.prototype.loadMetadata=function(){if(!this.metaRequested){this.metaRequested=!0;var t=this,e="_bing_metadata_"+i().Util.stamp(this);window[e]=function(r){t.meta=r,window[e]=void 0;var n=document.getElementById(e);return n.parentNode.removeChild(n),r.errorDetails?(t.fire("load",{layer:t}),t.onError(r)):(t.initMetadata(r),null)};var r="file:"===document.location.protocol?"https":document.location.protocol.slice(0,-1),n=r+"://dev.virtualearth.net/REST/v1/Imagery/Metadata/"+this.options.type+"?include=ImageryProviders&jsonp="+e+"&key="+this._key+"&UriScheme="+r,o=document.createElement("script");o.type="text/javascript",o.src=n,o.id=e,document.getElementsByTagName("head")[0].appendChild(o)}},i().BingLayer.prototype.onError=function(t){return this.options.onError?this.options.onError(t):null},a().registerType("bing",{create:function(t){var e=t.apiKey,r={subdomains:[0,1,2,3],type:t.name,attribution:"Bing",culture:"",onError:t.onError,maxNativeZoom:t.maxNativeZoom||19,maxZoom:t.maxZoom||23};return t.zoomOffset&&(r=u()({},r,{zoomOffset:t.zoomOffset})),new(i().BingLayer)(e,r)},isValid:function(t){return!t.meta||!t.meta.statusCode||200===t.meta.statusCode}})},951735:(t,e,r)=>{var n=r(845243);t.exports=n.TileLayer.extend({initialize:function(t){n.TileLayer.prototype.initialize.call(this,this.url,t)}})},753749:(t,e,r)=>{"use strict";r.r(e);var n=r(244712),i=r.n(n),o=r(845243),a=r.n(o),l=r(727418),u=r.n(l),s=r(701469),c=r.n(s),y=r(233044),f=r(503901),m=r(73785);function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){var n,i,o,a;n=t,i=e,o=r[e],a=function(t,e){if("object"!=p(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i),(i="symbol"==p(a)?a:String(a))in n?Object.defineProperty(n,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[i]=o})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}a().TileLayer.ElevationWMS=a().TileLayer.MultipleUrlWMS.extend({initialize:function(t,e,r,n,i){this._msId=i,this._tiles={},this._nodata=r,this._littleEndian=n,a().TileLayer.MultipleUrlWMS.prototype.initialize.apply(this,arguments)},_addTile:function(t){var e=this.getTileUrl(t);(0,f.qR)(e,t,(0,f.Bi)(t.x,t.y,t.z,this._msId))},getElevation:function(t,e){try{var r=this._getTileFromCoords(t),n=(0,f.yQ)((0,f.Bi)(r.x,r.y,r.z,this._msId),this._getTileRelativePixel(r,e),this.getTileSize().x,this._nodata,this._littleEndian);return n.available?n.value:""}catch(t){return""}},_getTileFromCoords:function(t){var e=this._map.project(t).divideBy(256).floor();return u()(e,{z:this._tileZoom})},_getTileRelativePixel:function(t,e){var r=Math.floor(e.x-this._getTilePos(t).x-this._map._getMapPanePos().x),n=Math.min(this.getTileSize().x-1,Math.floor(e.y-this._getTilePos(t).y-this._map._getMapPanePos().y));return new(a().Point)(r,n)},_removeTile:function(){},_abortLoading:function(){},onAdd:function(t){return t.msElevationLayers||(t.msElevationLayers=[]),t.msElevationLayers.push(this),a().TileLayer.MultipleUrlWMS.prototype.onAdd.call(this,t)},onRemove:function(t){var e=this;return t.msElevationLayers=t.msElevationLayers.filter((function(t){return t._msId!==e._msId})),a().TileLayer.MultipleUrlWMS.prototype.onRemove.call(this,t)}}),a().tileLayer.elevationWMS=function(t,e,r,n,i){return new(a().TileLayer.ElevationWMS)(t,e,r,n,i)},i().registerType("elevation",{create:function(t){return"wms"===t.provider?function(t){var e,r,n=(0,m.mb)(c()(t.url)?t.url:[t.url]),i=(0,m.DN)((0,m.q1)(t)||{});return n.forEach((function(e){return(0,y.addAuthenticationParameter)(e,i,t.securityToken)})),a().tileLayer.elevationWMS(n,v(v({},i),{},{format:(null==t?void 0:t.format)||"application/bil16"}),t.nodata||-9999,null!==(e=null!==(r=null==t?void 0:t.littleEndian)&&void 0!==r?r:null==t?void 0:t.littleendian)&&void 0!==e&&e,t.id)}(t):null}})},826696:(t,e,r)=>{"use strict";r.r(e);var n=r(244712),i=r.n(n),o=r(845243),a=r.n(o);r(514767),i().registerType("google",(function(t){return(null===(e=window)||void 0===e||null===(r=e.google)||void 0===r?void 0:r.maps)?a().gridLayer.googleMutant({type:t.name.toLowerCase(),maxNativeZoom:t.maxNativeZoom||18,maxZoom:t.maxZoom||20}):null;var e,r}))},790671:(t,e,r)=>{"use strict";r.r(e);var n=r(244712),i=r.n(n),o=r(471305),a=r.n(o),l=r(727418),u=r.n(l);r(522729),i().registerType("graticule",{create:function(t){var e=u()({interval:20,showOriginLabel:!0,redraw:"move"},t);return a()?new(a())(e):null},isValid:function(){return!!a()}})},352031:(t,e,r)=>{"use strict";r.r(e);var n=r(244712),i=r.n(n),o=r(357167),a=r.n(o);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}i().registerType("mapquest",{create:function(t){return a()?a().mapLayer(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){var n,i,o,a;n=t,i=e,o=r[e],a=function(t,e){if("object"!=l(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i),(i="symbol"==l(a)?a:String(a))in n?Object.defineProperty(n,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[i]=o})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({maxZoom:23},t)):(t&&t.onError&&t.onError(),!1)},isValid:function(){return!!a()}})},151254:(t,e,r)=>{"use strict";r.r(e);var n=r(244712),i=r.n(n),o=r(845243),a=r.n(o);i().registerType("osm",(function(t){return a().tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',zoomOffset:t.zoomOffset||0,maxNativeZoom:t.maxNativeZoom||19,maxZoom:t.maxZoom||23})}))},135659:(t,e,r)=>{"use strict";r.r(e);var n=r(244712),i=r.n(n),o=r(845243),a=r.n(o);i().registerType("tms",(function(t){return a().tileLayer("".concat(t.tileMapUrl,"/{z}/{x}/{y}.").concat(t.extension),{hideErrors:t.hideErrors||!0,tms:!0})}))},70826:(t,e,r)=>{"use strict";r.r(e);var n=r(244712),i=r.n(n),o=r(845243),a=r.n(o),l=r(45992);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}i().registerType("tileprovider",(function(t){var e,r,n=l.Z.getLayerConfig(t.provider,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){var n,i,o,a;n=t,i=e,o=r[e],a=function(t,e){if("object"!=u(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i),(i="symbol"==u(a)?a:String(a))in n?Object.defineProperty(n,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[i]=o})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({maxZoom:23},t)),i=(r=2,function(t){if(Array.isArray(t))return t}(e=n)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,i,o,a,l=[],u=!0,s=!1;try{if(o=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=o.call(r)).done)&&(l.push(n.value),l.length!==e);u=!0);}catch(t){s=!0,i=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw i}}return l}}(e,r)||function(t,e){if(t){if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=i[0],y=i[1];return a().tileLayer(o,y)}))},510733:(t,e,r)=>{"use strict";r.r(e);var n=r(244712),i=r.n(n),o=r(618446),a=r.n(o),l=r(414293),u=r.n(l),s=r(845243),c=r.n(s),y=r(166287),f=r(904679),m=function t(e,r){e.eachLayer&&e.eachLayer((function(e){e.setOpacity&&e.setOpacity(r),t(e,r)}))},p=function(t){var e,r;return(null==t||null===(e=t.style)||void 0===e?void 0:e.body)&&(null==t||null===(r=t.style)||void 0===r?void 0:r.format)},d=function(t){var e=function(t){var e=t.hideLoading,r=c().geoJson([],{pointToLayer:"marker"!==t.styleName?function(e,r){return c().circleMarker(r,e.style||t.style)}:null,hideLoading:e});return r.setOpacity=function(t){m(r,t)},r.on("layeradd",(function(e){var n=e.layer;r.setOpacity(u()(r.opacity)?t.opacity:r.opacity,n)})),r}(t);return e.opacity=u()(t.opacity)?1:t.opacity,e._msLegacyGeoJSON=!0,e},v=function(t){var e=t.hideLoading,r=c().geoJson(t.features,{hideLoading:e});return(0,y.getStyle)((0,f.p)(t),"leaflet").then((function(e){e({opacity:t.opacity,layer:r,features:t.features}).then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.style,i=e.pointToLayer,o=void 0===i?function(){return null}:i,a=e.filter,l=void 0===a?function(){return!0}:a;r.clearLayers(),r.options.pointToLayer=o,r.options.filter=l,r.addData(t.features),r.setStyle(n)}))})),r};i().registerType("vector",{create:function(t){return p(t)?v(t):d(t)},update:function(t,e,r){return t._msLegacyGeoJSON?function(t,e,r){return e.opacity!==r.opacity&&(t.opacity=e.opacity),a()(e.style,r.style)?null:p(e)?v(e):d(e)}(t,e,r):function(t,e,r){return a()(r.style,e.style)&&e.opacity===r.opacity||(0,y.getStyle)((0,f.p)(e),"leaflet").then((function(r){r({opacity:e.opacity,layer:t,features:e.features}).then((function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=r.style,i=r.pointToLayer,o=void 0===i?function(){return null}:i,a=r.filter,l=void 0===a?function(){return!0}:a;t.clearLayers(),t.options.pointToLayer=o,t.options.filter=l,t.addData(e.features),t.setStyle(n)}))})),null}(t,e,r)},render:function(){return null}})},622946:(t,e,r)=>{"use strict";var n=r(618446),i=r.n(n),o=r(845243),a=r.n(o),l=r(916651),u=r(244712),s=r.n(u),c=r(143378),y=r(432420),f=r(838848),m=r(166287),p=r(904679);function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){var n,i,o,a;n=t,i=e,o=r[e],a=function(t,e){if("object"!=d(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i),(i="symbol"==d(a)?a:String(a))in n?Object.defineProperty(n,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[i]=o})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var g=function(t,e){(0,m.layerToGeoStylerStyle)(e).then((function(r){var n=t["@wfsFeatureCollection"];(0,m.getStyle)((0,p.p)(b(b({},e),{},{features:n.features,style:r})),"leaflet").then((function(r){var n;r({opacity:e.opacity,layer:t,features:null==t||null===(n=t["@wfsFeatureCollection"])||void 0===n?void 0:n.features}).then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.style,n=e.pointToLayer,i=void 0===n?function(){return null}:n,o=e.filter,a=void 0===o?function(){return!0}:o;t.clearLayers(),t.options.pointToLayer=i,t.options.filter=a,t.addData(t["@wfsFeatureCollection"]),t.setStyle(r)}))}))}))},h=function(t,e){t.fireEvent("loading");var r=(0,c.v)(e),n=function(){t.fireEvent("loadError")};return(0,y.Bm)(e.url,e.name,b({outputFormat:"application/json",maxFeatures:1e3,srsname:(0,l.normalizeSRS)("EPSG:4326")},r)).then((function(r){return 200===r.status?(t.clearLayers(),t["@wfsFeatureCollection"]=b({},r.data),t.addData(r.data),t.fireEvent("load"),g(t,e)):(console.error(r),n(new Error("status code of response:"+r.status))),t})).catch((function(t){n()}))};s().registerType("wfs",{create:function(t){var e=new(a().GeoJSON)([],{});return h(e,t),e},update:function(t,e,r){return(0,f.Es)(r,e)&&h(t,e),i()(e.style,r.style)&&e.styleName===r.styleName&&e.opacity===r.opacity||g(t,e),null},render:function(){return null}})},136366:(t,e,r)=>{"use strict";r.r(e);var n=r(244712),i=r.n(n),o=r(73785),a=r(845243),l=r.n(a),u=r(727418),s=r.n(u),c=r(701469),y=r.n(c),f=r(233044);function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){v(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function v(t,e,r){var n;return n=function(t,e){if("object"!=m(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(e),(e="symbol"==m(n)?n:String(n))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r(312787),l().NonTiledLayer.WMSCustom=l().NonTiledLayer.WMS.extend({initialize:function(t,e){this._wmsUrl=t;var r=l().extend({},this.defaultWmsParams);for(var n in e)this.options.hasOwnProperty(n)||"CRS"===n.toUpperCase()||"maxNativeZoom"===n||(r[n]=e[n]);this.wmsParams=r,l().setOptions(this,e)},removeParams:function(){var t=this,e=arguments.length>1?arguments[1]:void 0;return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach((function(e){return delete t.wmsParams[e]})),e||this.redraw(),this}}),l().nonTiledLayer.wmsCustom=function(t,e){return new(l().NonTiledLayer.WMSCustom)(t,e)},i().registerType("wms",{create:function(t,e,r){if(t.useForElevation)return i().createLayer("elevation",d(d({},t),{},{provider:"wms"}),e,r);var n=(0,o.mb)(y()(t.url)?t.url:[t.url]),a=(0,o.DN)((0,o.q1)(t)||{});return n.forEach((function(e){return(0,f.addAuthenticationParameter)(e,a,t.securityToken)})),t.singleTile?l().nonTiledLayer.wmsCustom(n[0],a):l().tileLayer.multipleUrlWMS(n,a)},update:function(t,e,r){if(r.singleTile!==e.singleTile||r.tileSize!==e.tileSize||r.securityToken!==e.securityToken&&e.visibility){var n=(0,o.mb)(y()(e.url)?e.url:[e.url]),i=(0,o.q1)(e)||{};return n.forEach((function(t){return(0,f.addAuthenticationParameter)(t,i,e.securityToken)})),e.singleTile?l().nonTiledLayer.wmsCustom(n[0],i):l().tileLayer.multipleUrlWMS(n,i)}var a=s()({},(0,o.$P)((0,o.q1)(r)),(0,f.addAuthenticationToSLD)(r.params||{},r)),u=s()({},(0,o.$P)((0,o.q1)(e)),(0,f.addAuthenticationToSLD)(e.params||{},e)),c=Object.keys(u).filter((function(t){return u[t]!==a[t]})),m=Object.keys(a).filter((function(t){return a[t]!==u[t]})),p={};return m.length>0&&t.removeParams(m,c.length>0),c.length>0&&(p=c.reduce((function(t,e){return s()({},t,v({},e,u[e]))}),p),t.setParams((0,o.DN)(s()(p,p.params,(0,f.addAuthenticationToSLD)(e.params||{},e))))),null}})},485365:(t,e,r)=>{"use strict";r.r(e);var n=r(244712),i=r.n(n),o=r(916651),a=r(845243),l=r.n(a),u=r(727418),s=r.n(u),c=r(233044),y=r(624262),f=r(707294),m=r(552259),p=r(91175),d=r.n(p),v=r(281763),b=r.n(v);function g(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return h(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const S=l().TileLayer.extend({defaultWmtsParams:{service:"WMTS",request:"GetTile",version:"1.3.0",layer:"",style:"",tileMatrixSet:"",format:"image/jpeg"},initialize:function(t,e,r){this._url=t[0],this._urls=t,this._urlsIndex=0;var n=l().extend({},this.defaultWmtsParams),i=e.tileSize||this.options.tileSize;for(var o in e.detectRetina&&l().Browser.retina?n.width=n.height=2*i:n.width=n.height=i,e)this.options.hasOwnProperty(o)||"crs"===o||"attribution"===o||(n[o]=e[o]);this.wmtsParams=n,this.matrixIds=r.matrixIds&&this.getMatrix(r.matrixIds,r)||this.getDefaultMatrix(r),this.matrixSet=r.matrixSet&&r.matrixSet.TileMatrix||[],this.ignoreErrors=r.ignoreErrors||!1,l().setOptions(this,e)},getWMTSParams:function(t,e,r,n,i){var a=(0,m.yu)()[r],l=d()(t.map((function(e,r){if(r===t.length-1)return null;var n=parseFloat(e.ScaleDenominator),i=parseFloat(t[r+1].ScaleDenominator);return n>=a&&i<a?a-i>(n-i)/2?{id:r,data:e}:{id:r+1,data:t[r+1]}:null})).filter((function(t){return t}))),u=l&&b()(l.id)&&l.id+""||0===t.length&&r||null;if(!e[u])return null;var s=e[u].identifier,c=l.data&&l.data.TopLeftCorner&&(0,o.parseString)(l.data.TopLeftCorner)||e[u].topLeftCorner,y=c.lng||c.x,f=c.lat||c.y,p=Math.round((n.x-y)/i),v=-Math.round((n.y-f)/i),g=l.data&&l.data.MatrixWidth&&l.data.MatrixHeight&&{cols:{min:0,max:l.data.MatrixWidth-1},rows:{min:0,max:l.data.MatrixHeight-1}},h=e[u].ranges||g;return h&&!function(t,e,r){return!(t<r.cols.min||t>r.cols.max||e<r.rows.min||e>r.rows.max)}(p,v,h)?null:{ident:s,tilecol:p,tilerow:v}},getTileUrl:function(t){var e=this._map,r=e.options.crs,n=this.options.tileSize,i=t.multiplyBy(n);i.x+=1,i.y-=1;var o=i.add([n,n]),a=r.project(e.unproject(i,t.z)),u=r.project(e.unproject(o,t.z)).x-a.x,s=this.getWMTSParams(g(this.matrixSet),g(this.matrixIds),t.z,a,u);if(!s)return"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";this._urlsIndex++,this._urlsIndex===this._urls.length&&(this._urlsIndex=0);var c=l().Util.template(this._urls[this._urlsIndex],{s:this._getSubdomain(t),TileRow:s.tilerow,TileCol:s.tilecol,TileMatrixSet:this.options.tileMatrixSet,TileMatrix:s.ident,Style:this.options.style});return"RESTful"===this.options.requestEncoding?c:c+l().Util.getParamString(this.wmtsParams,c,!0)+"&tilematrix="+s.ident+"&tilerow="+s.tilerow+"&tilecol="+s.tilecol},getMatrix:function(t,e){return t.map((function(t){return{identifier:t.identifier,topLeftCorner:new(l().LatLng)(e.originY,e.originX),ranges:t.ranges||null}}))},getDefaultMatrix:function(t){for(var e=new Array(22),r=0;r<22;r++)e[r]={identifier:t.tileMatrixPrefix+r,topLeftCorner:new(l().LatLng)(t.originY,t.originX)};return e},onError:function(){return!this.ignoreErrors}});var O=r(701469),w=r.n(O),P=r(333358);l().tileLayer.wmts=function(t,e,r){return new S(t,e,r)};var j=function(t){var e=f.nJ(t),r=function(t){return t.map((function(t){return t.split("?")[0]}))}(w()(e.url)?e.url:[e.url]),n=function(t){var e=(0,o.normalizeSRS)(t.srs||"EPSG:3857",t.allowedSRS),r=t.credits&&(0,y.go)(t.credits)||"",n=f.C2(t.tileMatrixSet,e,t.allowedSRS,t.matrixIds);return s()({requestEncoding:t.requestEncoding,layer:t.name,style:t.style||"",attribution:r,format:((0,P.z)(t.format)?"image/png":t.format)||"image/png",tileMatrixSet:n,version:t.version||"1.0.0",tileSize:t.tileSize||256,CRS:(0,o.normalizeSRS)(t.srs||"EPSG:3857",t.allowedSRS),maxZoom:t.maxZoom||23,maxNativeZoom:t.maxNativeZoom||18},t.params||{})}(e)||{};r.forEach((function(t){return(0,c.addAuthenticationParameter)(t,n,e.securityToken)}));var i=(0,o.normalizeSRS)(e.srs||"EPSG:3857",e.allowedSRS),a=f.h7(e,i),u=a.tileMatrixSet,m=a.matrixIds;return l().tileLayer.wmts(r,n,{tileMatrixPrefix:e.tileMatrixPrefix||n.tileMatrixSet+":"||i+":",originY:e.originY||20037508.3428,originX:e.originX||-20037508.3428,ignoreErrors:e.ignoreErrors||!1,matrixIds:m,matrixSet:u})};i().registerType("wmts",{create:j,update:function(t,e,r){return r.securityToken!==e.securityToken||r.format!==e.format||r.credits!==e.credits?j(e):null}})},935701:(t,e,r)=>{t.exports={BingLayer:r(761444),Commons:r(951735),GraticuleLayer:r(790671),GoogleLayer:r(826696),MapQuest:r(352031),OSMLayer:r(151254),TMSLayer:r(135659),TileProviderLayer:r(70826),WFSLayer:r(622946).default,WMSLayer:r(136366),WMTSLayer:r(485365),VectorLayer:r(510733),ElevationLayer:r(753749)}},357167:t=>{t.exports=window.MQ},503901:(t,e,r)=>{"use strict";r.d(e,{Bi:()=>s,bg:()=>c,Sb:()=>y,qR:()=>m,yQ:()=>p});var n=r(375875),i=r.n(n),o=r(581399),a=r.n(o),l=r(882702),u=new(a())(100),s=function(t,e,r,n){return"".concat(r,":").concat(t,":").concat(e,":").concat(n)};function c(t,e,r){var n=r[0]/(e[2]-e[0]),i=r[1]/(e[3]-e[1]);return{x:Math.floor((t[0]-e[0])*n),y:Math.floor((e[3]-t[1])*i)}}var y=function(t,e,r){u.set(r,{data:t,dataView:new DataView(t),coords:e,current:!0,status:"success"})},f=function(t,e,r,n){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-9999,o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=n*t+r;try{var l=e.dataView.getInt16(2*a,o);if(l!==i&&32767!==l&&-32768!==l)return l}catch(t){}return null},m=function(t,e,r){return u.has(r)?null:new l.Promise((function(n,o){i().get(t,{responseType:"arraybuffer"}).then((function(t){y(t.data,e,r),n()})).catch((function(t){!function(t,e,r){u.set(r,{coords:e,current:!0,status:"error: "+t})}(t.message,e,r),o(t)}))}))},p=function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:-9999,i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=u.get(t);return o&&"success"===o.status?{available:!0,value:f(r,o,e.x,e.y,n,i)}:o&&"loading"===o.status?{available:!1,message:"elevationLoading"}:o&&"error"===o.status?{available:!1,message:"elevationLoadingError"}:{available:!1,message:"elevationNotAvailable"}}},904679:(t,e,r)=>{"use strict";r.d(e,{y:()=>b,p:()=>g});var n=r(717621),i=r.n(n),o=r(423570),a=r.n(o),l=r(903918),u=r.n(l),s=r(441609),c=r.n(s),y=r(166287);function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach((function(e){var n,i,o,a;n=t,i=e,o=r[e],a=function(t,e){if("object"!=f(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i),(i="symbol"==f(a)?a:String(a))in n?Object.defineProperty(n,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[i]=o})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t){return function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return v(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var b=function(t){var e=t.marker,r=t.fillColor,n=void 0===r?"#f2f2f2":r,i=t.fillOpacity,o=void 0===i?.3:i,l=t.strokeColor,s=void 0===l?"#3075e9":l,c=t.strokeOpacity,y=void 0===c?1:c,f=t.strokeWidth,m=void 0===f?2:f,p=t.radius,v=void 0===p?10:p,b=t.geometryType,g=void 0===b?"GeometryCollection":b;return{format:"geostyler",metadata:{editorType:"visual"},body:{rules:[].concat(d(e?[{name:"Default Marker Style",ruleId:a()(),symbolizers:[{kind:"Icon",image:u(),opacity:1,size:32,rotate:0,msBringToFront:!0,msHeightReference:"none",symbolizerId:a()()}]}]:[]),d(["GeometryCollection","Point","MultiPoint"].includes(g)&&!e?[{name:"Default Point Style",ruleId:a()(),symbolizers:[{kind:"Mark",color:n,fillOpacity:o,opacity:1,strokeColor:s,strokeOpacity:y,strokeWidth:m,wellKnownName:"Circle",radius:v,msBringToFront:!0,symbolizerId:a()()}]}]:[]),d(["GeometryCollection","LineString","MultiLineString"].includes(g)&&!e?[{name:"Default Line Style",ruleId:a()(),symbolizers:[{kind:"Line",color:s,opacity:y,width:m,symbolizerId:a()()}]}]:[]),d(["GeometryCollection","Polygon","MultiPolygon"].includes(g)&&!e?[{name:"Default Polygon Style",ruleId:a()(),symbolizers:[{kind:"Fill",color:n,fillOpacity:o,outlineColor:s,outlineOpacity:y,outlineWidth:m,symbolizerId:a()()}]}]:[]))}}},g=function(t,e){var r,n,o,a,l,u=(0,y.flattenFeatures)((null==t?void 0:t.features)||[]);if(u.find((function(t){var e;return!c()((null==t?void 0:t.style)||{})&&(null==t||null===(e=t.properties)||void 0===e?void 0:e.id)}))||null!=t&&null!==(r=t.style)&&void 0!==r&&r.format&&!c()(null==t||null===(n=t.style)||void 0===n?void 0:n.body)||(null==t||null===(o=t.style)||void 0===o||!o.format)&&!c()(t.style))return t;var s=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).features,e=((t||[]).find((function(t){var e=t.geometry;return null==e?void 0:e.type}))||{}).geometry;if(!e)return null;var r=e.type.replace("Multi","");return"GeometryCollection"===r||(t||[]).find((function(t){var e,n=t.geometry;return(null==n||null===(e=n.type)||void 0===e?void 0:e.replace("Multi",""))!==r}))?"GeometryCollection":r}({features:u}),f=!(null==e||!e.marker||!["Point","MultiPoint"].includes(s)),m=e&&i()(e.fill).toHexString(),d=null==e||null===(a=e.fill)||void 0===a?void 0:a.a,v=e&&i()(null==e?void 0:e.color).toHexString(),g=null==e||null===(l=e.color)||void 0===l?void 0:l.a,h=null==e?void 0:e.width,S=null==e?void 0:e.radius;return p(p(p({},t),f&&{handleClickOnLayer:!0}),{},{style:b(e?{marker:f,fillColor:m,fillOpacity:d,strokeColor:v,strokeOpacity:g,strokeWidth:h,radius:S,geometryType:s}:{geometryType:s})})}},333358:(t,e,r)=>{"use strict";r.d(e,{z:()=>i});var n=["application/vnd.mapbox-vector-tile","application/json;type=geojson","application/json;type=topojson"],i=function(t){return-1!==n.indexOf(t)}},73785:(t,e,r)=>{"use strict";r.d(e,{$P:()=>g,q1:()=>h,mb:()=>S,DN:()=>O});var n=r(845243),i=r.n(n),o=r(727418),a=r.n(o),l=r(414293),u=r.n(l),s=r(624262),c=r(333358),y=r(143378),f=r(233044);function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){v(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function v(t,e,r){var n;return n=function(t,e){if("object"!=m(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(e),(e="symbol"==m(n)?n:String(n))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}i().TileLayer.MultipleUrlWMS=i().TileLayer.WMS.extend({initialize:function(t,e){this._url=t[0],this._urls=t,this._urlsIndex=0;var r=i().extend({},this.defaultWmsParams),n=e.tileSize||this.options.tileSize;for(var o in e.detectRetina&&i().Browser.retina?r.width=r.height=2*n:r.width=r.height=n,e)this.options.hasOwnProperty(o)||"CRS"===o.toUpperCase()||"maxNativeZoom"===o||(r[o]=e[o]);this.wmsParams=r,i().setOptions(this,e)},getTileUrl:function(t){var e=this._map,r=this.options.tileSize,n=t.multiplyBy(r),o=n.add([r,r]),a=this._crs.project(e.unproject(n,t.z)),l=this._crs.project(e.unproject(o,t.z)),u=this._wmsVersion>=1.3&&this._crs===i().CRS.EPSG4326?[l.y,a.x,a.y,l.x].join(","):[a.x,l.y,l.x,a.y].join(",");this._urlsIndex++,this._urlsIndex===this._urls.length&&(this._urlsIndex=0);var s=i().Util.template(this._urls[this._urlsIndex],{s:this._getSubdomain(t)});return s+i().Util.getParamString(this.wmsParams,s,!0)+"&BBOX="+u},removeParams:function(){var t=this,e=arguments.length>1?arguments[1]:void 0;return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach((function(e){return delete t.wmsParams[e]})),e||this.redraw(),this}}),i().tileLayer.multipleUrlWMS=function(t,e){return new(i().TileLayer.MultipleUrlWMS)(t,e)};var b=["layers","styles","format","transparent","version","tiled","zindex","_v_","cql_filter","sld"],g=function(t){var e={};return Object.keys(t).forEach((function(r){r&&r.toLowerCase&&b.indexOf(r.toLowerCase())>=0&&(e[r]=t[r])})),e};function h(t){var e=void 0!==t.opacity?t.opacity:1,r=(0,y.v)(t),n=d(d(d(d({},t.baseParams),{},{attribution:t.credits&&(0,s.go)(t.credits),layers:t.name,styles:t.style||"",format:((0,c.z)(t.format)?"image/png":t.format)||"image/png",transparent:void 0===t.transparent||t.transparent},(0,s._6)(t)),{},{opacity:e,zIndex:t.zIndex,version:t.version||"1.3.0",tileSize:t.tileSize||256,maxZoom:t.maxZoom||23,maxNativeZoom:t.maxNativeZoom||18},t._v_?{_v_:t._v_}:{}),r||{});return(0,f.addAuthenticationToSLD)(n,t)}function S(t){return t.map((function(t){return t.split("?")[0]}))}var O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(t).reduce((function(e,r){return u()(t[r])?e:a()(e,v({},r,t[r]))}),{})}}}]);