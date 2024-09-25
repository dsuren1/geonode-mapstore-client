(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[30423,82582,65417],{382582:function(t){t.exports=function(){"use strict";function t(t,n,r,o,a){!function t(i,n,r,o,a){for(;o>r;){if(o-r>600){var s=o-r+1,h=n-r+1,l=Math.log(s),u=.5*Math.exp(2*l/3),c=.5*Math.sqrt(l*u*(s-u)/s)*(h-s/2<0?-1:1);t(i,n,Math.max(r,Math.floor(n-h*u/s+c)),Math.min(o,Math.floor(n+(s-h)*u/s+c)),a)}var f=i[n],d=r,m=o;for(e(i,r,n),a(i[o],f)>0&&e(i,r,o);d<m;){for(e(i,d,m),d++,m--;a(i[d],f)<0;)d++;for(;a(i[m],f)>0;)m--}0===a(i[r],f)?e(i,r,m):e(i,++m,o),m<=n&&(r=m+1),n<=m&&(o=m-1)}}(t,n,r||0,o||t.length-1,a||i)}function e(t,e,i){var n=t[e];t[e]=t[i],t[i]=n}function i(t,e){return t<e?-1:t>e?1:0}var n=function(t){void 0===t&&(t=9),this._maxEntries=Math.max(4,t),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),this.clear()};function r(t,e,i){if(!i)return e.indexOf(t);for(var n=0;n<e.length;n++)if(i(t,e[n]))return n;return-1}function o(t,e){a(t,0,t.children.length,e,t)}function a(t,e,i,n,r){r||(r=m(null)),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(var o=e;o<i;o++){var a=t.children[o];s(r,t.leaf?n(a):a)}return r}function s(t,e){return t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY),t}function h(t,e){return t.minX-e.minX}function l(t,e){return t.minY-e.minY}function u(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function c(t){return t.maxX-t.minX+(t.maxY-t.minY)}function f(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function d(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function m(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function p(e,i,n,r,o){for(var a=[i,n];a.length;)if(!((n=a.pop())-(i=a.pop())<=r)){var s=i+Math.ceil((n-i)/r/2)*r;t(e,s,i,n,o),a.push(i,s,s,n)}}return n.prototype.all=function(){return this._all(this.data,[])},n.prototype.search=function(t){var e=this.data,i=[];if(!d(t,e))return i;for(var n=this.toBBox,r=[];e;){for(var o=0;o<e.children.length;o++){var a=e.children[o],s=e.leaf?n(a):a;d(t,s)&&(e.leaf?i.push(a):f(t,s)?this._all(a,i):r.push(a))}e=r.pop()}return i},n.prototype.collides=function(t){var e=this.data;if(!d(t,e))return!1;for(var i=[];e;){for(var n=0;n<e.children.length;n++){var r=e.children[n],o=e.leaf?this.toBBox(r):r;if(d(t,o)){if(e.leaf||f(t,o))return!0;i.push(r)}}e=i.pop()}return!1},n.prototype.load=function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var e=0;e<t.length;e++)this.insert(t[e]);return this}var i=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===i.height)this._splitRoot(this.data,i);else{if(this.data.height<i.height){var n=this.data;this.data=i,i=n}this._insert(i,this.data.height-i.height-1,!0)}else this.data=i;return this},n.prototype.insert=function(t){return t&&this._insert(t,this.data.height-1),this},n.prototype.clear=function(){return this.data=m([]),this},n.prototype.remove=function(t,e){if(!t)return this;for(var i,n,o,a=this.data,s=this.toBBox(t),h=[],l=[];a||h.length;){if(a||(a=h.pop(),n=h[h.length-1],i=l.pop(),o=!0),a.leaf){var u=r(t,a.children,e);if(-1!==u)return a.children.splice(u,1),h.push(a),this._condense(h),this}o||a.leaf||!f(a,s)?n?(i++,a=n.children[i],o=!1):a=null:(h.push(a),l.push(i),i=0,n=a,a=a.children[0])}return this},n.prototype.toBBox=function(t){return t},n.prototype.compareMinX=function(t,e){return t.minX-e.minX},n.prototype.compareMinY=function(t,e){return t.minY-e.minY},n.prototype.toJSON=function(){return this.data},n.prototype.fromJSON=function(t){return this.data=t,this},n.prototype._all=function(t,e){for(var i=[];t;)t.leaf?e.push.apply(e,t.children):i.push.apply(i,t.children),t=i.pop();return e},n.prototype._build=function(t,e,i,n){var r,a=i-e+1,s=this._maxEntries;if(a<=s)return o(r=m(t.slice(e,i+1)),this.toBBox),r;n||(n=Math.ceil(Math.log(a)/Math.log(s)),s=Math.ceil(a/Math.pow(s,n-1))),(r=m([])).leaf=!1,r.height=n;var h=Math.ceil(a/s),l=h*Math.ceil(Math.sqrt(s));p(t,e,i,l,this.compareMinX);for(var u=e;u<=i;u+=l){var c=Math.min(u+l-1,i);p(t,u,c,h,this.compareMinY);for(var f=u;f<=c;f+=h){var d=Math.min(f+h-1,c);r.children.push(this._build(t,f,d,n-1))}}return o(r,this.toBBox),r},n.prototype._chooseSubtree=function(t,e,i,n){for(;n.push(e),!e.leaf&&n.length-1!==i;){for(var r=1/0,o=1/0,a=void 0,s=0;s<e.children.length;s++){var h=e.children[s],l=u(h),c=(f=t,d=h,(Math.max(d.maxX,f.maxX)-Math.min(d.minX,f.minX))*(Math.max(d.maxY,f.maxY)-Math.min(d.minY,f.minY))-l);c<o?(o=c,r=l<r?l:r,a=h):c===o&&l<r&&(r=l,a=h)}e=a||e.children[0]}var f,d;return e},n.prototype._insert=function(t,e,i){var n=i?t:this.toBBox(t),r=[],o=this._chooseSubtree(n,this.data,e,r);for(o.children.push(t),s(o,n);e>=0&&r[e].children.length>this._maxEntries;)this._split(r,e),e--;this._adjustParentBBoxes(n,r,e)},n.prototype._split=function(t,e){var i=t[e],n=i.children.length,r=this._minEntries;this._chooseSplitAxis(i,r,n);var a=this._chooseSplitIndex(i,r,n),s=m(i.children.splice(a,i.children.length-a));s.height=i.height,s.leaf=i.leaf,o(i,this.toBBox),o(s,this.toBBox),e?t[e-1].children.push(s):this._splitRoot(i,s)},n.prototype._splitRoot=function(t,e){this.data=m([t,e]),this.data.height=t.height+1,this.data.leaf=!1,o(this.data,this.toBBox)},n.prototype._chooseSplitIndex=function(t,e,i){for(var n,r,o,s,h,l,c,f=1/0,d=1/0,m=e;m<=i-e;m++){var p=a(t,0,m,this.toBBox),_=a(t,m,i,this.toBBox),y=(r=p,o=_,void 0,void 0,void 0,void 0,s=Math.max(r.minX,o.minX),h=Math.max(r.minY,o.minY),l=Math.min(r.maxX,o.maxX),c=Math.min(r.maxY,o.maxY),Math.max(0,l-s)*Math.max(0,c-h)),g=u(p)+u(_);y<f?(f=y,n=m,d=g<d?g:d):y===f&&g<d&&(d=g,n=m)}return n||i-e},n.prototype._chooseSplitAxis=function(t,e,i){var n=t.leaf?this.compareMinX:h,r=t.leaf?this.compareMinY:l;this._allDistMargin(t,e,i,n)<this._allDistMargin(t,e,i,r)&&t.children.sort(n)},n.prototype._allDistMargin=function(t,e,i,n){t.children.sort(n);for(var r=this.toBBox,o=a(t,0,e,r),h=a(t,i-e,i,r),l=c(o)+c(h),u=e;u<i-e;u++){var f=t.children[u];s(o,t.leaf?r(f):f),l+=c(o)}for(var d=i-e-1;d>=e;d--){var m=t.children[d];s(h,t.leaf?r(m):m),l+=c(h)}return l},n.prototype._adjustParentBBoxes=function(t,e,i){for(var n=i;n>=0;n--)s(e[n],t)},n.prototype._condense=function(t){for(var e=t.length-1,i=void 0;e>=0;e--)0===t[e].children.length?e>0?(i=t[e-1].children).splice(i.indexOf(t[e]),1):this.clear():o(t[e],this.toBBox)},n}()},907517:(t,e,i)=>{"use strict";i.d(e,{Z:()=>g});var n=i(278714),r=i(542071),o=i(100291),a=i(81090),s=i(47182),h=i(191736),l=i(436885),u=i(69374),c=i(447539),f=i(465537),d=i(974187),m=i(198683);class p extends o.ZP{constructor(t,e,i,n){super(t),this.selected=e,this.deselected=i,this.mapBrowserEvent=n}}const _={};class y extends s.ZP{constructor(t){let e;if(super(),this.on,this.once,this.un,t=t||{},this.boundAddFeature_=this.addFeature_.bind(this),this.boundRemoveFeature_=this.removeFeature_.bind(this),this.condition_=t.condition?t.condition:m.Kf,this.addCondition_=t.addCondition?t.addCondition:m.Fi,this.removeCondition_=t.removeCondition?t.removeCondition:m.Fi,this.toggleCondition_=t.toggleCondition?t.toggleCondition:m.vY,this.multi_=!!t.multi&&t.multi,this.filter_=t.filter?t.filter:l.uX,this.hitTolerance_=t.hitTolerance?t.hitTolerance:0,this.style_=void 0!==t.style?t.style:function(){const t=(0,c.Ly)();return(0,f.l7)(t.Polygon,t.LineString),(0,f.l7)(t.GeometryCollection,t.LineString),function(e){return e.getGeometry()?t[e.getGeometry().getType()]:null}}(),this.features_=t.features||new n.Z,t.layers)if("function"==typeof t.layers)e=t.layers;else{const i=t.layers;e=function(t){return i.includes(t)}}else e=l.uX;this.layerFilter_=e,this.featureLayerAssociation_={}}addFeatureLayerAssociation_(t,e){this.featureLayerAssociation_[(0,d.sq)(t)]=e}getFeatures(){return this.features_}getHitTolerance(){return this.hitTolerance_}getLayer(t){return this.featureLayerAssociation_[(0,d.sq)(t)]}setHitTolerance(t){this.hitTolerance_=t}setMap(t){this.getMap()&&this.style_&&this.features_.forEach(this.restorePreviousStyle_.bind(this)),super.setMap(t),t?(this.features_.addEventListener(r.Z.ADD,this.boundAddFeature_),this.features_.addEventListener(r.Z.REMOVE,this.boundRemoveFeature_),this.style_&&this.features_.forEach(this.applySelectedStyle_.bind(this))):(this.features_.removeEventListener(r.Z.ADD,this.boundAddFeature_),this.features_.removeEventListener(r.Z.REMOVE,this.boundRemoveFeature_))}addFeature_(t){const e=t.element;if(this.style_&&this.applySelectedStyle_(e),!this.getLayer(e)){const t=this.getMap().getAllLayers().find((function(t){if(t instanceof h.Z&&t.getSource()&&t.getSource().hasFeature(e))return t}));t&&this.addFeatureLayerAssociation_(e,t)}}removeFeature_(t){this.style_&&this.restorePreviousStyle_(t.element)}getStyle(){return this.style_}applySelectedStyle_(t){const e=(0,d.sq)(t);e in _||(_[e]=t.getStyle()),t.setStyle(this.style_)}restorePreviousStyle_(t){const e=this.getMap().getInteractions().getArray();for(let i=e.length-1;i>=0;--i){const n=e[i];if(n!==this&&n instanceof y&&n.getStyle()&&-1!==n.getFeatures().getArray().lastIndexOf(t))return void t.setStyle(n.getStyle())}const i=(0,d.sq)(t);t.setStyle(_[i]),delete _[i]}removeFeatureLayerAssociation_(t){delete this.featureLayerAssociation_[(0,d.sq)(t)]}handleEvent(t){if(!this.condition_(t))return!0;const e=this.addCondition_(t),i=this.removeCondition_(t),n=this.toggleCondition_(t),r=!e&&!i&&!n,o=t.map,s=this.getFeatures(),h=[],l=[];if(r){(0,u.Z)(this.featureLayerAssociation_),o.forEachFeatureAtPixel(t.pixel,((t,e)=>{if(t instanceof a.Z&&this.filter_(t,e))return this.addFeatureLayerAssociation_(t,e),l.push(t),!this.multi_}),{layerFilter:this.layerFilter_,hitTolerance:this.hitTolerance_});for(let t=s.getLength()-1;t>=0;--t){const e=s.item(t),i=l.indexOf(e);i>-1?l.splice(i,1):(s.remove(e),h.push(e))}0!==l.length&&s.extend(l)}else{o.forEachFeatureAtPixel(t.pixel,((t,r)=>{if(t instanceof a.Z&&this.filter_(t,r))return!e&&!n||s.getArray().includes(t)?(i||n)&&s.getArray().includes(t)&&(h.push(t),this.removeFeatureLayerAssociation_(t)):(this.addFeatureLayerAssociation_(t,r),l.push(t)),!this.multi_}),{layerFilter:this.layerFilter_,hitTolerance:this.hitTolerance_});for(let t=h.length-1;t>=0;--t)s.remove(h[t]);s.extend(l)}return(l.length>0||h.length>0)&&this.dispatchEvent(new p("select",l,h,t)),!0}}const g=y}}]);