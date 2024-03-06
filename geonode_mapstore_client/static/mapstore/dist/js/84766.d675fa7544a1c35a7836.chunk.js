(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[84766],{982513:(t,e,i)=>{"use strict";i.d(e,{Z:()=>a});var n=i(923645),s=i.n(n)()((function(t){return t[1]}));s.push([t.id,".msgapi .leaflet-grid-label .gridlabel-vert {\n    margin-left: 8px;\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n}\n\n.msgapi .leaflet-grid-label .gridlabel-vert,\n.msgapi .leaflet-grid-label .gridlabel-horiz {\n    padding-left:2px;\n    text-shadow: -2px 0 #FFFFFF, 0 2px #FFFFFF, 2px 0 #FFFFFF, 0 -2px #FFFFFF;\n}\n",""]);const a=s},371851:()=>{L.BingLayer=L.TileLayer.extend({options:{subdomains:[0,1,2,3],type:"Aerial",attribution:"Bing",culture:""},initialize:function(t,e){L.Util.setOptions(this,e),this._key=t,this._url=null,this._providers=[],this.metaRequested=!1},tile2quad:function(t,e,i){for(var n="",s=i;s>0;s--){var a=0,o=1<<s-1;t&o&&(a+=1),e&o&&(a+=2),n+=a}return n},getTileUrl:function(t){var e=this._getZoomForUrl(),i=this.options.subdomains,n=this.options.subdomains[Math.abs((t.x+t.y)%i.length)];return this._url.replace("{subdomain}",n).replace("{quadkey}",this.tile2quad(t.x,t.y,e)).replace("{culture}",this.options.culture)},loadMetadata:function(){if(!this.metaRequested){this.metaRequested=!0;var t=this,e="_bing_metadata_"+L.Util.stamp(this);window[e]=function(i){window[e]=void 0;var n=document.getElementById(e);if(n.parentNode.removeChild(n),i.errorDetails)throw new Error(i.errorDetails);t.initMetadata(i)};var i="file:"===document.location.protocol?"http":document.location.protocol.slice(0,-1),n=i+"://dev.virtualearth.net/REST/v1/Imagery/Metadata/"+this.options.type+"?include=ImageryProviders&jsonp="+e+"&key="+this._key+"&UriScheme="+i,s=document.createElement("script");s.type="text/javascript",s.src=n,s.id=e,document.getElementsByTagName("head")[0].appendChild(s)}},initMetadata:function(t){var e=t.resourceSets[0].resources[0];if(this.options.subdomains=e.imageUrlSubdomains,this._url=e.imageUrl,e.imageryProviders)for(var i=0;i<e.imageryProviders.length;i++)for(var n=e.imageryProviders[i],s=0;s<n.coverageAreas.length;s++){var a=n.coverageAreas[s],o={zoomMin:a.zoomMin,zoomMax:a.zoomMax,active:!1},r=new L.LatLngBounds(new L.LatLng(a.bbox[0]+.01,a.bbox[1]+.01),new L.LatLng(a.bbox[2]-.01,a.bbox[3]-.01));o.bounds=r,o.attrib=n.attribution,this._providers.push(o)}this._update()},_update:function(){null!==this._url&&this._map&&(this._update_attribution(),L.TileLayer.prototype._update.apply(this,[]))},_update_attribution:function(){for(var t=L.latLngBounds(this._map.getBounds().getSouthWest().wrap(),this._map.getBounds().getNorthEast().wrap()),e=this._map.getZoom(),i=0;i<this._providers.length;i++){var n=this._providers[i];e<=n.zoomMax&&e>=n.zoomMin&&t.intersects(n.bounds)?(!n.active&&this._map.attributionControl&&this._map.attributionControl.addAttribution(n.attrib),n.active=!0):(n.active&&this._map.attributionControl&&this._map.attributionControl.removeAttribution(n.attrib),n.active=!1)}},onAdd:function(t){this.loadMetadata(),L.TileLayer.prototype.onAdd.apply(this,[t])},onRemove:function(t){for(var e=0;e<this._providers.length;e++){var i=this._providers[e];i.active&&this._map.attributionControl&&(this._map.attributionControl.removeAttribution(i.attrib),i.active=!1)}L.TileLayer.prototype.onRemove.apply(this,[t])}}),L.bingLayer=function(t,e){return new L.BingLayer(t,e)}},471305:(t,e,i)=>{var n=i(845243),s=n.LayerGroup.extend({options:{interval:20,showOriginLabel:!0,redraw:"move"},lineStyle:{stroke:!0,color:"#111",opacity:.6,weight:1},initialize:function(t){n.LayerGroup.prototype.initialize.call(this),n.Util.setOptions(this,t)},onAdd:function(t){this._map=t;var e=this.redraw();this._map.on("viewreset "+this.options.redraw,e.redraw,e),this.eachLayer(t.addLayer,t)},onRemove:function(t){t.off("viewreset "+this.options.redraw,this.map),this.eachLayer(this.removeLayer,this)},redraw:function(){return this._bounds=this._map.getBounds().pad(.5),this.clearLayers(),this.constructLines(this.getMins(),this.getLineCounts()),this.options.showOriginLabel&&this.addLayer(this.addOriginLabel()),this},getLineCounts:function(){return{x:Math.ceil((this._bounds.getEast()-this._bounds.getWest())/this.options.interval),y:Math.ceil((this._bounds.getNorth()-this._bounds.getSouth())/this.options.interval)}},getMins:function(){var t=this.options.interval;return{x:Math.floor(this._bounds.getWest()/t)*t,y:Math.floor(this._bounds.getSouth()/t)*t}},constructLines:function(t,e){for(var i=new Array(e.x+e.y),n=new Array(e.x+e.y),s=0;s<=e.x;s++){var a=t.x+s*this.options.interval;i[s]=this.buildXLine(a),n[s]=this.buildLabel("gridlabel-horiz",a)}for(var o=0;o<=e.y;o++){var r=t.y+o*this.options.interval;i[o+s]=this.buildYLine(r),n[o+s]=this.buildLabel("gridlabel-vert",r)}i.forEach(this.addLayer,this),n.forEach(this.addLayer,this)},buildXLine:function(t){var e=new n.LatLng(this._bounds.getSouth(),t),i=new n.LatLng(this._bounds.getNorth(),t);return new n.Polyline([e,i],this.lineStyle)},buildYLine:function(t){var e=new n.LatLng(t,this._bounds.getWest()),i=new n.LatLng(t,this._bounds.getEast());return new n.Polyline([e,i],this.lineStyle)},buildLabel:function(t,e){var i,s=this._map.getBounds().pad(-.003);return i="gridlabel-horiz"==t?new n.LatLng(s.getNorth(),e):new n.LatLng(e,s.getWest()),n.marker(i,{icon:n.divIcon({iconSize:[0,0],className:"leaflet-grid-label",html:'<div class="'+t+'">'+e+"</div>"})})},addOriginLabel:function(){return n.marker([0,0],{icon:n.divIcon({iconSize:[0,0],className:"leaflet-grid-label",html:'<div class="gridlabel-horiz">(0,0)</div>'})})}});t.exports=s},514767:()=>{L.GridLayer.GoogleMutant=L.GridLayer.extend({options:{minZoom:0,maxZoom:23,tileSize:256,subdomains:"abc",errorTileUrl:"",attribution:"",opacity:1,continuousWorld:!1,noWrap:!1,type:"roadmap",maxNativeZoom:21},initialize:function(t){L.GridLayer.prototype.initialize.call(this,t),this._ready=!!window.google&&!!window.google.maps&&!!window.google.maps.Map,this._GAPIPromise=this._ready?Promise.resolve(window.google):new Promise((function(t,e){var i=0,n=null;n=setInterval((function(){return i>=10?(clearInterval(n),e(new Error("window.google not found after 10 attempts"))):window.google&&window.google.maps&&window.google.maps.Map?(clearInterval(n),t(window.google)):void i++}),500)})),this._tileCallbacks={},this._freshTiles={},this._imagesPerTile="hybrid"===this.options.type?2:1},onAdd:function(t){L.GridLayer.prototype.onAdd.call(this,t),this._initMutantContainer(),this._GAPIPromise.then(function(){if(this._ready=!0,this._map=t,this._initMutant(),t.on("viewreset",this._reset,this),t.on("move",this._update,this),t.on("zoomend",this._handleZoomAnim,this),t.on("resize",this._resize,this),google.maps.event.addListenerOnce(this._mutant,"idle",function(){this._checkZoomLevels(),this._mutantIsReady=!0}.bind(this)),t._controlCorners.bottomright.style.marginBottom="20px",t._controlCorners.bottomleft.style.marginBottom="20px",this._reset(),this._update(),this._subLayers)for(var e in this._subLayers)this._subLayers[e].setMap(this._mutant)}.bind(this))},onRemove:function(t){L.GridLayer.prototype.onRemove.call(this,t),t._container.removeChild(this._mutantContainer),this._mutantContainer=void 0,google.maps.event.clearListeners(t,"idle"),google.maps.event.clearListeners(this._mutant,"idle"),t.off("viewreset",this._reset,this),t.off("move",this._update,this),t.off("zoomend",this._handleZoomAnim,this),t.off("resize",this._resize,this),t._controlCorners&&(t._controlCorners.bottomright.style.marginBottom="0em",t._controlCorners.bottomleft.style.marginBottom="0em")},getAttribution:function(){return this.options.attribution},setOpacity:function(t){this.options.opacity=t,t<1&&L.DomUtil.setOpacity(this._mutantContainer,t)},setElementSize:function(t,e){t.style.width=e.x+"px",t.style.height=e.y+"px"},addGoogleLayer:function(t,e){return this._subLayers||(this._subLayers={}),this._GAPIPromise.then(function(){var i=new(0,google.maps[t])(e);return i.setMap(this._mutant),this._subLayers[t]=i,i}.bind(this))},removeGoogleLayer:function(t){var e=this._subLayers&&this._subLayers[t];e&&(e.setMap(null),delete this._subLayers[t])},_initMutantContainer:function(){this._mutantContainer||(this._mutantContainer=L.DomUtil.create("div","leaflet-google-mutant leaflet-top leaflet-left"),this._mutantContainer.id="_MutantContainer_"+L.Util.stamp(this._mutantContainer),this._mutantContainer.style.zIndex="800",this._mutantContainer.style.pointerEvents="none",this._map.getContainer().appendChild(this._mutantContainer)),this.setOpacity(this.options.opacity),this.setElementSize(this._mutantContainer,this._map.getSize()),this._attachObserver(this._mutantContainer)},_initMutant:function(){if(this._ready&&this._mutantContainer){this._mutantCenter=new google.maps.LatLng(0,0);var t=new google.maps.Map(this._mutantContainer,{center:this._mutantCenter,zoom:0,tilt:0,mapTypeId:this.options.type,disableDefaultUI:!0,keyboardShortcuts:!1,draggable:!1,disableDoubleClickZoom:!0,scrollwheel:!1,streetViewControl:!1,styles:this.options.styles||{},backgroundColor:"transparent"});this._mutant=t,google.maps.event.addListenerOnce(t,"idle",function(){for(var t=this._mutantContainer.querySelectorAll("a"),e=0;e<t.length;e++)t[e].style.pointerEvents="auto"}.bind(this)),this.fire("spawned",{mapObject:t})}},_attachObserver:function(t){new MutationObserver(this._onMutations.bind(this)).observe(t,{childList:!0,subtree:!0})},_onMutations:function(t){for(var e=0;e<t.length;++e)for(var i=t[e],n=0;n<i.addedNodes.length;++n){var s=i.addedNodes[n];s instanceof HTMLImageElement?this._onMutatedImage(s):s instanceof HTMLElement&&Array.prototype.forEach.call(s.querySelectorAll("img"),this._onMutatedImage.bind(this))}},_roadRegexp:/!1i(\d+)!2i(\d+)!3i(\d+)!/,_satRegexp:/x=(\d+)&y=(\d+)&z=(\d+)/,_staticRegExp:/StaticMapService\.GetMapImage/,_onMutatedImage:function(t){var e,i=t.src.match(this._roadRegexp),n=0;if(i?(e={z:i[1],x:i[2],y:i[3]},this._imagesPerTile>1&&(t.style.zIndex=1,n=1)):((i=t.src.match(this._satRegexp))&&(e={x:i[1],y:i[2],z:i[3]}),n=0),e){var s=this._tileCoordsToKey(e);t.style.position="absolute",t.style.visibility="hidden";var a=s+"/"+n;if(this._freshTiles[a]=t,a in this._tileCallbacks&&this._tileCallbacks[a])this._tileCallbacks[a].pop()(t),this._tileCallbacks[a].length||delete this._tileCallbacks[a];else if(this._tiles[s]){var o=this._tiles[s].el,r=0===n?o.firstChild:o.firstChild.nextSibling,h=this._clone(t);o.replaceChild(h,r)}}else t.src.match(this._staticRegExp)&&(t.style.visibility="hidden")},createTile:function(t,e){var i=this._tileCoordsToKey(t),n=L.DomUtil.create("div");n.dataset.pending=this._imagesPerTile,e=e.bind(this,null,n);for(var s=0;s<this._imagesPerTile;s++){var a=i+"/"+s;if(a in this._freshTiles){var o=this._freshTiles[a];n.appendChild(this._clone(o)),n.dataset.pending--}else this._tileCallbacks[a]=this._tileCallbacks[a]||[],this._tileCallbacks[a].push(function(t){return function(i){t.appendChild(this._clone(i)),t.dataset.pending--,parseInt(t.dataset.pending)||e()}.bind(this)}.bind(this)(n))}return parseInt(n.dataset.pending)||L.Util.requestAnimFrame(e),n},_clone:function(t){var e=t.cloneNode(!0);return e.style.visibility="visible",e},_checkZoomLevels:function(){var t=this._map.getZoom(),e=this._mutant.getZoom();t&&e&&(e!==t||e>this.options.maxNativeZoom)&&this._setMaxNativeZoom(e)},_setMaxNativeZoom:function(t){t!=this.options.maxNativeZoom&&(this.options.maxNativeZoom=t,this._resetView())},_reset:function(){this._initContainer()},_update:function(){if(this._mutant){var t=this._map.getCenter(),e=new google.maps.LatLng(t.lat,t.lng);this._mutant.setCenter(e);var i=this._map.getZoom(),n=i!==Math.round(i),s=this._mutant.getZoom();n||i==s||(this._mutant.setZoom(i),this._mutantIsReady&&this._checkZoomLevels())}L.GridLayer.prototype._update.call(this)},_resize:function(){var t=this._map.getSize();this._mutantContainer.style.width===t.x&&this._mutantContainer.style.height===t.y||(this.setElementSize(this._mutantContainer,t),this._mutant&&google.maps.event.trigger(this._mutant,"resize"))},_handleZoomAnim:function(){if(this._mutant){var t=this._map.getCenter(),e=new google.maps.LatLng(t.lat,t.lng);this._mutant.setCenter(e),this._mutant.setZoom(Math.round(this._map.getZoom()))}},_removeTile:function(t){if(this._mutant)return setTimeout(this._pruneTile.bind(this,t),1e3),L.GridLayer.prototype._removeTile.call(this,t)},_pruneTile:function(t){for(var e=this._mutant.getZoom(),i=t.split(":")[2],n=this._mutant.getBounds(),s=n.getSouthWest(),a=n.getNorthEast(),o=L.latLngBounds([[s.lat(),s.lng()],[a.lat(),a.lng()]]),r=0;r<this._imagesPerTile;r++){var h=t+"/"+r;if(h in this._freshTiles){var l=this._map&&this._keyToBounds(t);this._map&&l.overlaps(o)&&i==e||delete this._freshTiles[h]}}}}),L.gridLayer.googleMutant=function(t){return new L.GridLayer.GoogleMutant(t)}},312787:(t,e,i)=>{t.exports=function t(e,i,n){function s(o,r){if(!i[o]){if(!e[o]){if(a)return a(o,!0);var h=new Error("Cannot find module '"+o+"'");throw h.code="MODULE_NOT_FOUND",h}var l=i[o]={exports:{}};e[o][0].call(l.exports,(function(t){return s(e[o][1][t]||t)}),l,l.exports,t,e,i,n)}return i[o].exports}for(var a=void 0,o=0;o<n.length;o++)s(n[o]);return s}({1:[function(t,e,n){(function(t){"use strict";var i="undefined"!=typeof window?window.L:void 0!==t?t.L:null;i.NonTiledLayer.WMS=i.NonTiledLayer.extend({defaultWmsParams:{service:"WMS",request:"GetMap",version:"1.1.1",layers:"",styles:"",format:"image/jpeg",transparent:!1},options:{crs:null,uppercase:!1},initialize:function(t,e){this._wmsUrl=t;var n=i.extend({},this.defaultWmsParams);for(var s in e)i.NonTiledLayer.prototype.options.hasOwnProperty(s)||i.Layer&&i.Layer.prototype.options.hasOwnProperty(s)||(n[s]=e[s]);this.wmsParams=n,i.setOptions(this,e)},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[e]=this._crs.code,i.NonTiledLayer.prototype.onAdd.call(this,t)},getImageUrl:function(t,e,n){var s=this.wmsParams;s.width=e,s.height=n;var a=this._crs.project(t.getNorthWest()),o=this._crs.project(t.getSouthEast()),r=this._wmsUrl,h=h=(this._wmsVersion>=1.3&&this._crs===i.CRS.EPSG4326?[o.y,a.x,a.y,o.x]:[a.x,o.y,o.x,a.y]).join(",");return r+i.Util.getParamString(this.wmsParams,r,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+h},setParams:function(t,e){return i.extend(this.wmsParams,t),e||this.redraw(),this}}),i.nonTiledLayer.wms=function(t,e){return new i.NonTiledLayer.WMS(t,e)},e.exports=i.NonTiledLayer.WMS}).call(this,void 0!==i.g?i.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(t,e,n){(function(t){"use strict";var i="undefined"!=typeof window?window.L:void 0!==t?t.L:null;i.NonTiledLayer=(i.Layer||i.Class).extend({includes:i.Evented||i.Mixin.Events,emptyImageUrl:"data:image/gif;base64,R0lGODlhAQABAHAAACH5BAUAAAAALAAAAAABAAEAAAICRAEAOw==",options:{attribution:"",opacity:1,zIndex:void 0,minZoom:0,maxZoom:18,pointerEvents:null,errorImageUrl:"data:image/gif;base64,R0lGODlhAQABAHAAACH5BAUAAAAALAAAAAABAAEAAAICRAEAOw==",bounds:i.latLngBounds([-85.05,-180],[85.05,180]),useCanvas:void 0},key:"",initialize:function(t){i.setOptions(this,t)},onAdd:function(t){this._map=t,void 0===this._zoomAnimated&&(this._zoomAnimated=i.DomUtil.TRANSITION&&i.Browser.any3d&&!i.Browser.mobileOpera&&this._map.options.zoomAnimation),i.version<"1.0"&&this._map.on(this.getEvents(),this),this._div||(this._div=i.DomUtil.create("div","leaflet-image-layer"),this.options.pointerEvents&&(this._div.style["pointer-events"]=this.options.pointerEvents),void 0!==this.options.zIndex&&(this._div.style.zIndex=this.options.zIndex),void 0!==this.options.opacity&&(this._div.style.opacity=this.options.opacity)),this.getPane().appendChild(this._div);var e=!!window.HTMLCanvasElement;void 0===this.options.useCanvas?this._useCanvas=e:this._useCanvas=this.options.useCanvas,this._useCanvas?(this._bufferCanvas=this._initCanvas(),this._currentCanvas=this._initCanvas()):(this._bufferImage=this._initImage(),this._currentImage=this._initImage()),this._update()},getPane:function(){return i.Layer?i.Layer.prototype.getPane.call(this):(this.options.pane?this._pane=this.options.pane:this._pane=this._map.getPanes().overlayPane,this._pane)},onRemove:function(t){i.version<"1.0"&&this._map.off(this.getEvents(),this),this.getPane().removeChild(this._div),this._useCanvas?(this._div.removeChild(this._bufferCanvas),this._div.removeChild(this._currentCanvas)):(this._div.removeChild(this._bufferImage),this._div.removeChild(this._currentImage))},addTo:function(t){return t.addLayer(this),this},_setZoom:function(){this._useCanvas?(this._currentCanvas._bounds&&this._resetImageScale(this._currentCanvas,!0),this._bufferCanvas._bounds&&this._resetImageScale(this._bufferCanvas)):(this._currentImage._bounds&&this._resetImageScale(this._currentImage,!0),this._bufferImage._bounds&&this._resetImageScale(this._bufferImage))},getEvents:function(){var t={moveend:this._update};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),i.version>="1.0"&&(t.zoom=this._setZoom),t},getElement:function(){return this._div},setOpacity:function(t){return this.options.opacity=t,this._div&&i.DomUtil.setOpacity(this._div,this.options.opacity),this},setZIndex:function(t){return t&&(this.options.zIndex=t,this._div&&(this._div.style.zIndex=t)),this},bringToFront:function(){return this._div&&this.getPane().appendChild(this._div),this},bringToBack:function(){return this._div&&this.getPane().insertBefore(this._div,this.getPane().firstChild),this},getAttribution:function(){return this.options.attribution},_initCanvas:function(){var t=i.DomUtil.create("canvas","leaflet-image-layer");return this._div.appendChild(t),t._image=new Image,this._ctx=t.getContext("2d"),this._map.options.zoomAnimation&&i.Browser.any3d?i.DomUtil.addClass(t,"leaflet-zoom-animated"):i.DomUtil.addClass(t,"leaflet-zoom-hide"),i.extend(t._image,{onload:i.bind(this._onImageLoad,this),onerror:i.bind(this._onImageError,this)}),t},_initImage:function(){var t=i.DomUtil.create("img","leaflet-image-layer");return this._div.appendChild(t),this._map.options.zoomAnimation&&i.Browser.any3d?i.DomUtil.addClass(t,"leaflet-zoom-animated"):i.DomUtil.addClass(t,"leaflet-zoom-hide"),i.extend(t,{galleryimg:"no",onselectstart:i.Util.falseFn,onmousemove:i.Util.falseFn,onload:i.bind(this._onImageLoad,this),onerror:i.bind(this._onImageError,this)}),t},redraw:function(){return this._map&&this._update(),this},_animateZoom:function(t){this._useCanvas?(this._currentCanvas._bounds&&this._animateImage(this._currentCanvas,t),this._bufferCanvas._bounds&&this._animateImage(this._bufferCanvas,t)):(this._currentImage._bounds&&this._animateImage(this._currentImage,t),this._bufferImage._bounds&&this._animateImage(this._bufferImage,t))},_animateImage:function(t,e){if(void 0===i.DomUtil.setTransform){var n=this._map,s=t._scale*n.getZoomScale(e.zoom),a=t._bounds.getNorthWest(),o=t._bounds.getSouthEast(),r=n._latLngToNewLayerPoint(a,e.zoom,e.center),h=n._latLngToNewLayerPoint(o,e.zoom,e.center)._subtract(r),l=r._add(h._multiplyBy(.5*(1-1/s)));t.style[i.DomUtil.TRANSFORM]=i.DomUtil.getTranslateString(l)+" scale("+s+") "}else n=this._map,s=t._scale*t._sscale*n.getZoomScale(e.zoom),a=t._bounds.getNorthWest(),o=t._bounds.getSouthEast(),r=n._latLngToNewLayerPoint(a,e.zoom,e.center),i.DomUtil.setTransform(t,r,s);t._lastScale=s},_resetImageScale:function(t,e){var n=new i.Bounds(this._map.latLngToLayerPoint(t._bounds.getNorthWest()),this._map.latLngToLayerPoint(t._bounds.getSouthEast())),s=t._orgBounds.getSize().y,a=n.getSize().y/s;t._sscale=a,i.DomUtil.setTransform(t,n.min,a)},_resetImage:function(t){var e=new i.Bounds(this._map.latLngToLayerPoint(t._bounds.getNorthWest()),this._map.latLngToLayerPoint(t._bounds.getSouthEast())),n=e.getSize();i.DomUtil.setPosition(t,e.min),t._orgBounds=e,t._sscale=1,this._useCanvas?(t.width=n.x,t.height=n.y):(t.style.width=n.x+"px",t.style.height=n.y+"px")},_getClippedBounds:function(){var t=this._map.getBounds(),e=t.getSouth(),n=t.getNorth(),s=t.getWest(),a=t.getEast(),o=this.options.bounds.getSouth(),r=this.options.bounds.getNorth(),h=this.options.bounds.getWest(),l=this.options.bounds.getEast();e<o&&(e=o),n>r&&(n=r),s<h&&(s=h),a>l&&(a=l);var d=new i.LatLng(n,s),u=new i.LatLng(e,a);return new i.LatLngBounds(d,u)},_update:function(){var t,e=this._getClippedBounds(),n=this._map.latLngToContainerPoint(e.getNorthWest()),s=this._map.latLngToContainerPoint(e.getSouthEast()),a=s.x-n.x,o=s.y-n.y;if(this._useCanvas?(this._bufferCanvas._scale=this._bufferCanvas._lastScale,this._currentCanvas._scale=this._currentCanvas._lastScale=1,this._bufferCanvas._sscale=1,this._currentCanvas._bounds=e,this._resetImage(this._currentCanvas),t=this._currentCanvas._image,i.DomUtil.setOpacity(t,0)):(this._bufferImage._scale=this._bufferImage._lastScale,this._currentImage._scale=this._currentImage._lastScale=1,this._bufferImage._sscale=1,this._currentImage._bounds=e,this._resetImage(this._currentImage),t=this._currentImage,i.DomUtil.setOpacity(t,0)),this._map.getZoom()<this.options.minZoom||this._map.getZoom()>this.options.maxZoom||a<32||o<32)return this._div.style.visibility="hidden",t.src=this.emptyImageUrl,this.key=t.key="<empty>",void(t.tag=null);this.fire("loading"),this.key=e.getNorthWest()+", "+e.getSouthEast()+", "+a+", "+o,this.getImageUrl?(t.src=this.getImageUrl(e,a,o),t.key=this.key):this.getImageUrlAsync(e,a,o,this.key,(function(e,i,n){t.key=e,t.src=i,t.tag=n}))},_onImageError:function(t){this.fire("error",t),i.DomUtil.addClass(t.target,"invalid"),t.target.src!==this.options.errorImageUrl&&(t.target.src=this.options.errorImageUrl)},_onImageLoad:function(t){(t.target.src===this.options.errorImageUrl||(i.DomUtil.removeClass(t.target,"invalid"),t.target.key&&t.target.key===this.key))&&(this._onImageDone(t),this.fire("load",t))},_onImageDone:function(t){if(this._useCanvas)this._renderCanvas(t);else{i.DomUtil.setOpacity(this._currentImage,1),i.DomUtil.setOpacity(this._bufferImage,0),this._addInteraction&&this._currentImage.tag&&this._addInteraction(this._currentImage.tag);var e=this._bufferImage;this._bufferImage=this._currentImage,this._currentImage=e}"<empty>"!==t.target.key&&(this._div.style.visibility="visible")},_renderCanvas:function(t){this._currentCanvas.getContext("2d").drawImage(this._currentCanvas._image,0,0),i.DomUtil.setOpacity(this._currentCanvas,1),i.DomUtil.setOpacity(this._bufferCanvas,0),this._addInteraction&&this._currentCanvas._image.tag&&this._addInteraction(this._currentCanvas._image.tag);var e=this._bufferCanvas;this._bufferCanvas=this._currentCanvas,this._currentCanvas=e}}),i.nonTiledLayer=function(){return new i.NonTiledLayer},e.exports=i.NonTiledLayer}).call(this,void 0!==i.g?i.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[2,1])(2)},753325:t=>{t.exports=function(t,e){return t>e}},606162:(t,e,i)=>{var n=i(456029),s=i(753325),a=i(406557);t.exports=function(t){return t&&t.length?n(t,a,s):void 0}},581399:function(t,e){var i,n,s;!function(a,o){"use strict";"object"==typeof t.exports?t.exports=o():(n=[],void 0===(s="function"==typeof(i=o)?i.apply(e,n):i)||(t.exports=s))}("object"==typeof window&&window,(function(){"use strict";function t(e){if(!(this instanceof t))return new t(e);this._LRUCacheState=new i(e)}var e=t.prototype;function i(t){this.capacity=t>0?+t:Number.MAX_SAFE_INTEGER||Number.MAX_VALUE,this.data=Object.create?Object.create(null):{},this.hash=Object.create?Object.create(null):{},this.linkedList=new n}function n(){this.length=0,this.head=null,this.end=null}function s(t){this.key=t,this.p=null,this.n=null}function a(t,e){e!==t.head&&(t.end?t.end===e&&(t.end=e.n):t.end=e,o(e.n,e.p),o(e,t.head),t.head=e,t.head.n=null)}function o(t,e){t!==e&&(t&&(t.p=e),e&&(e.n=t))}return e.get=function(t){var e=this._LRUCacheState,i=e.hash[t];if(i)return a(e.linkedList,i),e.data[t]},e.set=function(t,e){var i=this._LRUCacheState,n=i.hash[t];return void 0===e||(n||(i.hash[t]=new s(t),i.linkedList.length+=1,n=i.hash[t]),a(i.linkedList,n),i.data[t]=e,i.linkedList.length>i.capacity&&this.remove(i.linkedList.end.key)),this},e.update=function(t,e){return this.has(t)&&this.set(t,e(this.get(t))),this},e.remove=function(t){var e=this._LRUCacheState,i=e.hash[t];return i?(i===e.linkedList.head&&(e.linkedList.head=i.p),i===e.linkedList.end&&(e.linkedList.end=i.n),o(i.n,i.p),delete e.hash[t],delete e.data[t],e.linkedList.length-=1,this):this},e.removeAll=function(){return this._LRUCacheState=new i(this._LRUCacheState.capacity),this},e.info=function(){var t=this._LRUCacheState;return{capacity:t.capacity,length:t.linkedList.length}},e.keys=function(){for(var t=[],e=this._LRUCacheState.linkedList.head;e;)t.push(e.key),e=e.p;return t},e.has=function(t){return!!this._LRUCacheState.hash[t]},e.staleKey=function(){return this._LRUCacheState.linkedList.end&&this._LRUCacheState.linkedList.end.key},e.popStale=function(){var t=this.staleKey();if(!t)return null;var e=[t,this._LRUCacheState.data[t]];return this.remove(t),e},t}))},522729:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>o});var n=i(893379),s=i.n(n),a=i(982513);s()(a.Z,{insert:"head",singleton:!1});const o=a.Z.locals||{}}}]);