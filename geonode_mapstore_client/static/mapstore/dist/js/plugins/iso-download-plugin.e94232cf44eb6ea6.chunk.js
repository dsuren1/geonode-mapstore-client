/*! For license information please see iso-download-plugin.e94232cf44eb6ea6.chunk.js.LICENSE.txt */
(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[32355],{788554:(n,e,t)=>{"use strict";t.d(e,{Wr:()=>o,KA:()=>r,AT:()=>a,d_:()=>i});var o="GEONODE:DOWNLOAD_METADATA",r="GEONODE:DOWNLOAD_METADATA_COMPLETE";function a(n,e){return{type:o,link:n,pk:e}}function i(n,e){return{type:r,link:n,pk:e}}},985774:(n,e,t)=>{"use strict";t.d(e,{l:()=>u});var o=t(49977),r=t(375875),a=t(178598),i=t(788554),l=t(197395),u=function(n,e){return n.ofType(i.Wr).switchMap((function(n){var t,u,c,d,s,f=e.getState(),v=null===(t=f.gnresource)||void 0===t||null===(u=t.data)||void 0===u||null===(c=u.links)||void 0===c?void 0:c.find((function(e){return e.name===n.link})).url,p=null===(d=f.gnresource)||void 0===d||null===(s=d.data)||void 0===s?void 0:s.title;return o.Observable.defer((function(){return r.Z.get(v).then((function(n){return n}))})).switchMap((function(e){var t=e.data,r=e.headers;if("application/xml"===r["content-type"]||"application/xml; charset=UTF-8"===r["content-type"]){var l=String.fromCharCode.apply(null,new Uint8Array(t));if(0===l.indexOf("<ows:ExceptionReport"))throw l}return(0,a.saveAs)(new Blob([t],{type:r&&r["content-type"]}),"".concat(p,"_").concat(n.link.split(" ").join("_"),"_Metadata")),o.Observable.of((0,i.d_)(n.link,n.pk))})).catch((function(e){var t,r,a;return o.Observable.of((0,i.d_)(n.link,n.pk),(0,l.vU)({title:"gnviewer.cannotPerfomAction",message:(null==e||null===(t=e.data)||void 0===t?void 0:t.message)||(null==e||null===(r=e.data)||void 0===r?void 0:r.detail)||(null==e||null===(a=e.originalError)||void 0===a?void 0:a.message)||"gnviewer.syncErrorDefault"}))}))}))}},11800:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>m});var o=t(558422),r=t.n(o),a=t(171703),i=t(22222),l=t(322843),u=t(805346),c=t(693473),d=t(788554),s=t(985774),f=t(51605),v=t(894176);function p(n){var e=n.onDownload,t=n.resourcePk,o=n.isDownloading;return r().createElement(c.Z,{variant:"default",onClick:function(){return e("Dublin Core",t)}},o&&r().createElement(f.Z,{animation:"border",role:"status"},r().createElement("span",{className:"sr-only"},"Loading..."))," ",r().createElement(u.Z,{msgId:"gnviewer.dublinCore"}))}var w=(0,a.connect)((0,i.P1)([function(n){var e;return(null==n||null===(e=n.gnresource)||void 0===e?void 0:e.data.pk)||null},function(n){var e,t;return(null==n||null===(e=n.gnDownload)||void 0===e||null===(t=e.downloads)||void 0===t?void 0:t.DublinCore)||{}}],(function(n,e){return{resourcePk:n,isDownloading:e[n]}})),{onDownload:d.AT})(p);p.defaultProps={onDownload:function(){},resourcePk:null,isDownloading:!1};const m=(0,l.rx)("DublinCoreDownload",{component:function(){return null},containers:{ActionNavbar:{name:"DublinCoreDownload",Component:w}},epics:{gnDownloadMetaData:s.l},reducers:{gnDownload:v.Z}})},125762:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>m});var o=t(558422),r=t.n(o),a=t(171703),i=t(22222),l=t(322843),u=t(805346),c=t(693473),d=t(788554),s=t(985774),f=t(51605),v=t(894176);function p(n){var e=n.onDownload,t=n.resourcePk,o=n.isDownloading;return r().createElement(c.Z,{variant:"default",onClick:function(){return e("ISO",t)},className:"isobutton"},o&&r().createElement(f.Z,{animation:"border",role:"status"},r().createElement("span",{className:"sr-only"},"Loading..."))," ",r().createElement(u.Z,{msgId:"gnviewer.iso"}))}var w=(0,a.connect)((0,i.P1)([function(n){var e;return(null==n||null===(e=n.gnresource)||void 0===e?void 0:e.data.pk)||null},function(n){var e,t;return(null==n||null===(e=n.gnDownload)||void 0===e||null===(t=e.downloads)||void 0===t?void 0:t.ISO)||{}}],(function(n,e){return{resourcePk:n,isDownloading:e[n]}})),{onDownload:d.AT})(p);p.defaultProps={onDownload:function(){},resourcePk:null,isDownloading:!1};const m=(0,l.rx)("IsoDownload",{component:function(){return null},containers:{ActionNavbar:{name:"IsoDownload",Component:w}},epics:{gnDownloadMetaData:s.l},reducers:{gnDownload:v.Z}})},894176:(n,e,t)=>{"use strict";t.d(e,{Z:()=>c});var o=t(788554);function r(n){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},r(n)}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){l(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e,t){return(e=function(n){var e=function(n){if("object"!=r(n)||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var t=e.call(n,"string");if("object"!=r(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==r(e)?e:e+""}(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var u={downloads:{ISO:{},DublinCore:{}}};const c=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o.Wr:var t,r=null==e||null===(t=e.link)||void 0===t?void 0:t.split(" ").join("");return i(i({},n),{},{downloads:i(i({},n.downloads),{},l({},r,l({},e.pk,!0)))});case o.KA:var a,c=i({},n),d=null==e||null===(a=e.link)||void 0===a?void 0:a.split(" ").join(""),s=c.downloads[d];return delete s[e.pk],i(i({},c),{},{downloads:i(i({},c.downloads),{},l({},d,i({},s)))});default:return n}}},178598:function(n,e,t){var o,r=r||function(n){"use strict";if(!(void 0===n||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var e=n.document,t=function(){return n.URL||n.webkitURL||n},o=e.createElementNS("http://www.w3.org/1999/xhtml","a"),r="download"in o,a=/constructor/i.test(n.HTMLElement)||n.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent),l=function(e){(n.setImmediate||n.setTimeout)((function(){throw e}),0)},u=function(n){setTimeout((function(){"string"==typeof n?t().revokeObjectURL(n):n.remove()}),4e4)},c=function(n){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(n.type)?new Blob([String.fromCharCode(65279),n],{type:n.type}):n},d=function(e,d,s){s||(e=c(e));var f,v=this,p="application/octet-stream"===e.type,w=function(){!function(n,e){for(var t=(e=[].concat(e)).length;t--;){var o=n["on"+e[t]];if("function"==typeof o)try{o.call(n,n)}catch(n){l(n)}}}(v,"writestart progress write writeend".split(" "))};if(v.readyState=v.INIT,r)return f=t().createObjectURL(e),void setTimeout((function(){var n,e;o.href=f,o.download=d,n=o,e=new MouseEvent("click"),n.dispatchEvent(e),w(),u(f),v.readyState=v.DONE}));!function(){if((i||p&&a)&&n.FileReader){var o=new FileReader;return o.onloadend=function(){var e=i?o.result:o.result.replace(/^data:[^;]*;/,"data:attachment/file;");n.open(e,"_blank")||(n.location.href=e),e=void 0,v.readyState=v.DONE,w()},o.readAsDataURL(e),void(v.readyState=v.INIT)}f||(f=t().createObjectURL(e)),p?n.location.href=f:n.open(f,"_blank")||(n.location.href=f),v.readyState=v.DONE,w(),u(f)}()},s=d.prototype;return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(n,e,t){return e=e||n.name||"download",t||(n=c(n)),navigator.msSaveOrOpenBlob(n,e)}:(s.abort=function(){},s.readyState=s.INIT=0,s.WRITING=1,s.DONE=2,s.error=s.onwritestart=s.onprogress=s.onwrite=s.onabort=s.onerror=s.onwriteend=null,function(n,e,t){return new d(n,e||n.name||"download",t)})}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);n.exports?n.exports.saveAs=r:null!==t.amdD&&null!==t.amdO&&(void 0===(o=function(){return r}.call(e,t,e,n))||(n.exports=o))}}]);