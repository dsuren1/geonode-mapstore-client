(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[91312],{291312:(e,t,r)=>{"use strict";r.d(t,{ou:()=>F,SN:()=>K,ZP:()=>W,RX:()=>H,jh:()=>Q,T$:()=>G,id:()=>V});var n={};r.r(n),r.d(n,{createCategory:()=>x,createResource:()=>U,deleteResource:()=>$,getResource:()=>L,getResourceDataByName:()=>E,getResourceIdByName:()=>J,getResources:()=>T,searchListByAttributes:()=>q,updateResource:()=>_,updateResourceAttribute:()=>X});var o=r(49977),u=r(423570),i=r.n(u),a=r(264721),c=r.n(a),s=r(414293),f=r.n(s),l=r(957557),b=r.n(l),v=r(701469),d=r.n(v),p=r(513218),g=r.n(p),m=r(227361),y=r.n(m),h=r(313311),O=r.n(h),R=r(849843),A=r(913718);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){k(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==w(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==w(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===w(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e){return function(e){if(Array.isArray(e))return D(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||C(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){if(e){if("string"==typeof e)return D(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?D(e,t):void 0}}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var M,Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return"rest/geostore/data/".concat(e).concat(t)},B=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return!0},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:R.Z;return o.Observable.defer((function(){return r.getResourceAttributes(e)})).map((function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).filter((function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).name;return t(e)})).map((function(e){var t=e.value;return(0,A.C)(t)})).filter((function(e){return!f()(e)}))}))},N=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:R.Z;return t?o.Observable.defer((function(){return r.updateResourcePermissions(e,{SecurityRuleList:{SecurityRule:t}})})):o.Observable.empty()},I=function(e,t,r,n){var u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:R.Z;return"NODATA"!==r.data?o.Observable.defer((function(){return u.createResource({name:"".concat(e,"-").concat(t,"-").concat(i()())},r.data,r.category)})).pluck("data").switchMap((function(i){return o.Observable.forkJoin([o.Observable.defer((function(){return u.updateResourceAttribute(e,t,Z(i,r.tail))}))].concat(S(n?[N(i,n,u)]:[]))).map((function(){return i}))})):o.Observable.of(-1)},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.includeAttributes,n=void 0===r||r,u=t.withData,i=void 0===u||u,a=t.withPermissions,c=void 0!==a&&a,s=t.baseURL,f=arguments.length>2&&void 0!==arguments[2]?arguments[2]:R.Z;return o.Observable.forkJoin([o.Observable.defer((function(){return f.getShortResource(e)})).pluck("ShortResource"),o.Observable.defer((function(){return n?f.getResourceAttributes(e):new Promise((function(e){return e([])}))}))].concat(S(i?[o.Observable.defer((function(){return f.getData(e,{baseURL:s})}))]:[]),S(c?[o.Observable.defer((function(){return f.getResourcePermissions(e,{},!0)}))]:[]))).map((function(e){var t,r,n=(r=4,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u,i,a=[],c=!0,s=!1;try{if(u=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=u.call(r)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw o}}return a}}(t,r)||C(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],u=n[1],i=n[2],a=n[3];return P(P({},o),{},{attributes:(u||[]).reduce((function(e,t){return P(P({},e),{},k({},t.name,t.value))}),{}),data:i,permissions:a})}))},J=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:R.Z;return o.Observable.defer((function(){return r.getResourceIdByName(e,t)}))},E=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:R.Z;return o.Observable.defer((function(){return r.getResourceDataByName(e,t)}))},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.query,r=void 0===t?"*":t,n=e.category,u=e.options,i=void 0===u?{params:{start:0,limit:10},includeAttributes:!1,withData:!1,withPermission:!1}:u,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:R.Z;return o.Observable.defer((function(){return a.getResourcesByCategory(n,r,i)})).map((function(e){var t=e.results,r=void 0===t?[]:t,n=e.totalCount,o=void 0===n?0:n,u=i.includeAttributes,c=i.withData,s=i.withPermission;return u||c||s?{totalCount:o,results:r.map((function(e){var t=e.id;return L(t,i,a)}))}:{totalCount:o,results:r}}))},U=function(e){var t=e.data,r=e.category,n=e.metadata,u=e.permission,i=e.linkedResources,a=void 0===i?{}:i,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:R.Z;return o.Observable.defer((function(){return c.createResource(n,t,r)})).pluck("data").switchMap((function(e){return o.Observable.defer((function(){return c.getResourcePermissions(e)})).map((function(e){return function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).concat(e)}(e,u)})).switchMap((function(t){return N(e,t,c).map((function(){return{id:e,permission:t}}))}))})).switchMap((function(e){var t=e.id,r=e.permission;return Object.keys(a).length>0?o.Observable.forkJoin(Object.keys(a).filter((function(e){return a[e].data&&"NODATA"!==a[e].data})).map((function(e){return I(t,e,a[e],r,c)}))).map((function(){return t})):o.Observable.of(t)}))},x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:R.Z;return o.Observable.defer((function(){return t.createCategory(e)}))},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,r=e.data,n=e.permission,u=e.metadata,i=e.linkedResources,a=void 0===i?{}:i,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:R.Z,f=Object.keys(a);return o.Observable.forkJoin([o.Observable.defer((function(){return s.putResourceMetadataAndAttributes(t,u)})).switchMap((function(e){return r?o.Observable.defer((function(){return s.putResource(t,r)})):o.Observable.of(e)})).switchMap((function(e){return n?o.Observable.defer((function(){return N(t,n,s)})):o.Observable.of(e)})),(f.length>0?o.Observable.forkJoin.apply(o.Observable,S(f.map((function(e){return function(e,t,r,n){var u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:R.Z;return o.Observable.defer((function(){return u.getResourceAttributes(e)})).switchMap((function(i){var a,c=null===(a=O()(i,{name:t}))||void 0===a?void 0:a.value;return(0,A.C)(c)?function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3?arguments[3]:void 0,u=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0;return"NODATA"===r.data?o.Observable.fromPromise(i.deleteResource(n)).catch((function(){return o.Observable.of("DUMMY")})).switchMap((function(){return o.Observable.fromPromise(i.updateResourceAttribute(e,t,"NODATA"))})):o.Observable.forkJoin([o.Observable.defer((function(){return i.putResource(n,r.data)})).switchMap((function(){return o.Observable.defer((function(){return i.updateResourceAttribute(e,t,Z(n,r.tail))}))}))].concat(S(u?[N(n,u,i)]:[])))}(e,t,r,(0,A.C)(c),n,u):I(e,t,r,n,u)})).catch((function(o){return I(e,t,r,n,u,o)}))}(t,e,a[e],n,s)})))):o.Observable.of([])).switchMap((function(){return n?o.Observable.defer((function(){return function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:R.Z;return B(e,(function(e){return!c()(Object.keys(t),e)})).switchMap((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return 0===e.length?o.Observable.of([]):o.Observable.forkJoin(e.map((function(e){return N(e,r,n)})))}))}(t,a,n,s)})):o.Observable.of(-1)}))]).map((function(){return t}))},$=function(e){var t=e.id,r=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).deleteLinkedResources,n=void 0===r||r,u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:R.Z;return(n?B(t,(function(){return!0}),u):o.Observable.of([])).map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return o.Observable.forkJoin([t].concat(S(e)).map((function(e){return u.deleteResource(e)})))}))},q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:R.Z;return o.Observable.defer((function(){return r.searchListByAttributes(e,t)})).switchMap((function(e){if(!e||!y()(e,"ExtResourceList.Resource"))return o.Observable.of({results:[],totalCount:0});var n=y()(e,"ExtResourceList.Resource",[]),u=(d()(n)?n:[n]).map((function(e){return P(P({},b()(e,"Attributes")),{},{attributes:(t=e,r=y()(t,"Attributes.attribute"),n=d()(r)&&r||g()(r)&&[r],n&&n.reduce((function(e,t){return P(P({},e),{},k({},t.name,t.value))}),{})||{})});var t,r,n}));return(t.withPermissions?o.Observable.forkJoin(u.map((function(e){return o.Observable.defer((function(){return r.getResourcePermissions(e.id,{},!0)})).map((function(t){return P(P({},e),{},{permissions:t})}))}))):o.Observable.of(u)).map((function(t){return{results:t,totalCount:y()(e,"ExtResourceList.ResourceCount")}}))}))},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,r=e.name,n=e.value,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:R.Z;return o.Observable.defer((function(){return u.updateResourceAttribute(t,r,n)})).switchMap((function(){return o.Observable.of(t)}))},Y=r(737275),z={geostore:n},F=function(e,t){z[e]=t},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"geostore";M.api=e},H=function(){var e;return(e=M.getApi()).getResource.apply(e,arguments)},K=function(){var e;return(e=M.getApi()).createResource.apply(e,arguments)},Q=function(){var e;return(e=M.getApi()).getResources.apply(e,arguments)},V=function(){var e;return(e=M.getApi()).updateResource.apply(e,arguments)};const W=M={api:"geostore",addApi:F,setApi:G,getApi:function(){return z[Y.ZP.getConfigProp("persistenceApi")||M.api]},getResource:H,getResourceIdByName:function(){var e;return(e=M.getApi()).getResourceIdByName.apply(e,arguments)},getResourceDataByName:function(){var e;return(e=M.getApi()).getResourceDataByName.apply(e,arguments)},createResource:K,createCategory:function(){var e;return(e=M.getApi()).createCategory.apply(e,arguments)},getResources:Q,updateResource:V,updateResourceAttribute:function(){var e;return(e=M.getApi()).updateResourceAttribute.apply(e,arguments)},deleteResource:function(){var e;return(e=M.getApi()).deleteResource.apply(e,arguments)},searchListByAttributes:function(){var e;return(e=M.getApi()).searchListByAttributes.apply(e,arguments)}}},913718:(e,t,r)=>{"use strict";r.d(t,{C:()=>o});var n=/rest\/geostore\/data\/(\d+)/,o=function(e){var t=decodeURIComponent(decodeURIComponent(e)),r=n.exec(t);return r&&!!r[0]&&r[1]}}}]);