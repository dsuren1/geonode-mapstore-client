(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[39916],{39190:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Feature:()=>g,LLayer:()=>c,LMap:()=>u,MeasurementSupport:()=>P,Overview:()=>l,ScaleBar:()=>v,default:()=>y});var o=r(130072),n=r(145697),a=r(790596),s=r(505904),i=r(722404),p=r(809056),g=o.Z,c=n.Z,u=a.Z,P=s.default,l=i.Z,v=p.Z;const y={LLayer:c,LMap:u,MeasurementSupport:P,Overview:l,ScaleBar:v,Feature:g}},664250:(e,t,r)=>{"use strict";r.d(t,{a:()=>p});var o=r(701469),n=r.n(o),a=r(916651),s=r(421915),i=r(869669),p=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t;if(!e.getGeometry()||"Polygon"!==e.getGeometry().getType()||e.getProperties().center&&0===e.getProperties().center.length)return e;if(e.getProperties()&&e.getProperties().isCircle&&e.getProperties().center&&e.getProperties().center[0]&&e.getProperties().center[1]){var o,p=e.getGeometry().getExtent();o=e.getProperties().center?[(o=(0,a.reproject)(e.getProperties().center,"EPSG:4326",t)).x,o.y]:(0,s.qg)(p);var g=e.getProperties().crs===t?e.getProperties().radius:function(e,t,r,o){if(n()(t)&&n()(t[0])&&n()(t[0][0])){var s=(0,a.reproject)(t[0][0],o,r);return Math.sqrt(Math.pow(e[0]-s.x,2)+Math.pow(e[1]-s.y,2))}return 100}(o,e.getGeometry().getCoordinates(),t,r);return e.setGeometry(new i.Z(o,g)),e}return e}}}]);