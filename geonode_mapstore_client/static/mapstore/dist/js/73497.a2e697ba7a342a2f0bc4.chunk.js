(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[73497],{57604:(t,e,r)=>{"use strict";r.d(e,{XV:()=>n,mE:()=>o,at:()=>i,mD:()=>a,jw:()=>u,yR:()=>c,pF:()=>l,PZ:()=>s});var n="DIMENSION:UPDATE_LAYER_DIMENSION_DATA",o="TIME_MANAGER:SET_CURRENT_TIME",i="TIME_MANAGER:SET_OFFSET_TIME",a="TIME_MANAGER:MOVE_TIME",u=function(t,e,r){return{type:n,dimension:e,layerId:t,data:r}},c=function(t){return{type:o,time:t}},l=function(t){return{type:i,offsetTime:t}},s=function(t){return{type:a,time:t}}},162187:(t,e,r)=>{"use strict";r.d(e,{NH:()=>n,E7:()=>o,N7:()=>i,L9:()=>a,hQ:()=>u,NC:()=>c,c9:()=>l,up:()=>s,AN:()=>f,FZ:()=>p,Fi:()=>m,KB:()=>y,E0:()=>d,Q_:()=>b,hY:()=>v,wO:()=>h,sT:()=>g,wR:()=>O,h1:()=>S,hS:()=>E,zK:()=>A,VS:()=>w,oz:()=>P,FH:()=>T,XN:()=>j,Ym:()=>C,RQ:()=>M});var n="PLAYBACK:START",o="PLAYBACK:PAUSE",i="PLAYBACK:STOP",a="PLAYBACK:SET_FRAMES",u="PLAYBACK:APPEND_FRAMES",c="PLAYBACK:FRAMES_LOADING",l="PLAYBACK:SET_CURRENT_FRAME",s="PLAYBACK:SELECT_PLAYBACK_RANGE",f="PLAYBACK:SET_INTERVAL_DATA",p="PLAYBACK:SETTINGS_CHANGE",m="PLAYBACK:TOGGLE_ANIMATION_MODE",y="PLAYBACK:ANIMATION_STEP_MOVE",d="PLAYBACK:UPDATE_METADATA",b={PLAY:"PLAY",STOP:"STOP",PAUSE:"PAUSE"},v=function(){return{type:n}},h=function(){return{type:o}},g=function(){return{type:i}},O=function(t){return{type:a,frames:t}},S=function(t){return{type:l,frame:t}},E=function(t){return{type:u,frames:t}},A=function(t){return{type:c,loading:t}},w=function(t){return{type:s,range:t}},P=function(t,e){return{type:p,name:t,value:e}},T=function(){return{type:m}},j=function(t){return{type:y,direction:t}},C=function(t){var e=t.next,r=t.previous,n=t.forTime;return{type:d,forTime:n,next:e,previous:r}},M=function(t){return{type:f,timeIntervalData:t}}},496361:(t,e,r)=>{"use strict";r.d(e,{i8:()=>b,ot:()=>v,Ci:()=>h,CX:()=>g});var n=r(666654),o=r.n(n),i=r(313880),a=r.n(i),u=r(49977),c=r(375875),l=r.n(c),s=r(510284);function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){y(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function y(t,e,r){var n;return n=function(t,e){if("object"!=f(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(e),(e="symbol"==f(n)?n:n+"")in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d=function(t){return Object.keys(t).reduce((function(e,r){return void 0!==t[r]&&null!==t[r]?m(m({},e),{},y({},r,t[r])):e}),{})},b=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=n.service,i=void 0===o?"WMTS":o,a=n.version,c=void 0===a?"1.0.0":a,f=n.tileMatrixSet,p=void 0===f?"EPSG:4326":f,y=n.bbox,b=n.domains,v=n.expandLimit;return u.Observable.defer((function(){return l().get(t,{params:d(m({service:i,REQUEST:"DescribeDomains",version:c,layer:e,tileMatrixSet:p,bbox:y,domains:b,expandLimit:v},r))})})).let(s.oB).switchMap((function(t){return(0,s.sw)(t.data)}))},v=function(t,e,r,n,o){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},a=i.service,c=void 0===a?"WMTS":a,f=i.version,p=void 0===f?"1.1.0":f,y=i.tileMatrixSet,b=void 0===y?"EPSG:4326":y,v=i.bbox;return u.Observable.defer((function(){return l().get(t,{params:d(m({service:c,REQUEST:"GetHistogram",resolution:o,histogram:r,version:p,layer:e,tileMatrixSet:b,bbox:v},n))})})).let(s.oB).switchMap((function(t){return(0,s.sw)(t.data)}))},h=function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=n.time,i=n.fromValue,a=n.sort,c=void 0===a?"asc":a,f=n.limit,p=void 0===f?20:f,m=n.fromEnd,y=void 0!==m&&m,b=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},v=b.bbox,h=b.tileMatrixSet,g=void 0===h?"EPSG:4326":h,O=b.service,S=void 0===O?"WMTS":O,E=b.version,A=void 0===E?"1.0.0":E;return u.Observable.defer((function(){return l().get(t,{params:d({service:S,version:A,request:"GetDomainValues",tileMatrixSet:g,bbox:v,layer:e,domain:r,fromValue:i,sort:c,limit:p,fromEnd:y,time:o})})})).let(s.oB).switchMap((function(t){return(0,s.sw)(t.data)}))},g=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).url;return o()(t,"/wms")?a()(t,/\/wms$/,"/gwc/service/wmts"):o()(t,"/ows")?a()(t,/\/ows$/,"/gwc/service/wmts"):t}},352595:(t,e,r)=>{"use strict";r.d(e,{Z:()=>n});const n=(0,r(461365).Z)(r(480681).Overlay)},365295:(t,e,r)=>{"use strict";r.d(e,{Z:()=>T});var n=r(124852),o=r.n(n),i=r(532475),a=r.n(i),u=r(414293),c=r.n(u),l=r(675263),s=r.n(l),f=r(730381),p=r.n(f),m=r(480681),y=r(815135),d=r(38560);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,A(n.key),n)}}function h(t,e,r){return e=O(e),function(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,g()?Reflect.construct(e,r||[],O(t).constructor):e.apply(t,r))}function g(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(g=function(){return!!t})()}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}function S(t,e){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},S(t,e)}function E(t,e,r){return(e=A(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function A(t){var e=function(t,e){if("object"!=b(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==b(e)?e:e+""}var w=(0,y.Z)(m.Glyphicon),P=function(t){function e(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return E(t=h(this,e,[].concat(n)),"onUpdate",(function(e,r){var n=p()(t.props.date).utc(),o=r?p()(n).add(1,e):p()(n).subtract(1,e);o.isValid()&&!isNaN(o.toDate().getTime())&&t.props.onUpdate(o.toISOString())})),E(t,"onChange",(function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return t};if(""!==r){var o=p()(t.props.date).utc(),i=o["day"===e?"date":e]&&p()(o)["day"===e?"date":e](n(r));i.isValid()&&!isNaN(i.toDate().getTime())&&t.props.onUpdate(i.toISOString())}})),E(t,"getForm",(function(){var e=t.props.date&&p()(t.props.date).utc();return[{name:"icon",value:"calendar",type:"icon"},{name:"day",placeholder:"DD",value:e&&e.date()},{name:"month",placeholder:"MM",readOnly:!0,value:e&&e.month(),format:function(t){return!c()(t)&&""!==t&&p().monthsShort(t)},parseValue:function(t){return t-1}},{name:"year",placeholder:"YYYY",value:e&&e.year()},{name:"icon",value:"time",type:"icon"},{name:"hours",placeholder:"hh",value:e&&e.hours()},{name:"separator",value:":",type:"separator"},{name:"minutes",placeholder:"mm",value:e&&e.minutes()},{name:"separator",value:":",type:"separator"},{name:"seconds",placeholder:"ss",value:e&&e.seconds()},{name:"separator",value:e&&e.utcOffset(),type:"separator",format:function(t){return"UTC "+(t>=0?"+":"-")+a()(t/60,2,0)}}]})),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&S(t,e)}(e,t),r=e,(n=[{key:"render",value:function(){var t=this,e=this.getForm();return o().createElement(m.Form,{className:"ms-inline-datetime ".concat(this.props.className),style:this.props.style},o().createElement(m.FormGroup,{controlId:"inlineDateTime"},this.props.glyph&&o().createElement("div",{style:this.props.clickable?{cursor:"pointer"}:{},onClick:function(){return t.props.clickable&&t.props.onIconClick(t.props.date,t.props.glyph)}},o().createElement(w,{tooltip:this.props.clickable?this.props.tooltip:void 0,tooltipId:this.props.clickable?this.props.tooltipId:void 0,className:"ms-inline-datetime-icon",glyph:this.props.glyph})),e.map((function(e){return"icon"===e.type&&o().createElement("div",{className:"ms-inline-datetime-input ms-dt-".concat(e.name)},o().createElement(w,{glyph:e.value}))||"separator"===e.type&&o().createElement("div",{className:"ms-inline-datetime-input ms-dt-".concat(e.name)},e.format&&e.format(e.value)||e.value)||o().createElement("div",{className:"ms-inline-datetime-input ms-dt-".concat(e.name)},t.props.showButtons&&o().createElement(d.Z,{bsSize:"xs",disabled:!t.props.date,onClick:function(){return t.onUpdate(e.name,!0)}},o().createElement(w,{glyph:"chevron-up"})),o().createElement(m.FormControl,{type:"text",readOnly:e.readOnly,placeholder:e.placeholder||e.name,disabled:!t.props.date,value:e.format&&e.format(e.value)||e.value,onChange:function(r){return t.onChange(e.name,r.target.value,e.parseValue)}}),t.props.showButtons&&o().createElement(d.Z,{bsSize:"xs",disabled:!t.props.date,onClick:function(){return t.onUpdate(e.name)}},o().createElement(w,{glyph:"chevron-down"})))}))))}}])&&v(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(o().Component);E(P,"propTypes",{date:s().string,clickable:s().bool,onUpdate:s().func,onIconClick:s().func,glyph:s().string,style:s().object,className:s().string,tooltip:s().string,tooltipId:s().string,showButtons:s().bool}),E(P,"defaultProps",{date:"",onIconClick:function(){},clickable:!1,onUpdate:function(){},glyph:"time",style:{},className:"",tooltip:""});const T=P},589919:(t,e,r)=>{"use strict";r.d(e,{hP:()=>l});var n=r(984596),o=r.n(n),i=r(49977),a=r.n(i);function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var c=function(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.startWith.apply(t,function(t){if(Array.isArray(t))return u(t)}(e=r)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())},l=function(t,e,r){return function(n){return(r?c(n,o()(t)).catch(r):c(n,o()(t))).concat(a().Observable.from(o()(e)))}}},50886:(t,e,r)=>{"use strict";r.d(e,{w:()=>y});var n=r(49977),o=r.n(n),i=r(496361),a=r(55237);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,e)||p(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){var n,o,i,a;n=t,o=e,i=r[e],a=function(t,e){if("object"!=u(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==u(a)?a:a+"")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t){return function(t){if(Array.isArray(t))return m(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||p(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){if(t){if("string"==typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(t,e):void 0}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var y=function(t,e,r,n,u){return o().Observable.forkJoin(i.Ci.apply(void 0,f(t(r,s({sort:"asc",fromValue:e?(0,a.p)(u,1e-4,"remove"):u},"end"===n?{fromEnd:!0}:{})))).map((function(t){return t.DomainValues.Domain.split(",")})).map((function(t){return c(t,1)[0]})).catch((function(t){return t&&o().Observable.of(null)})),i.Ci.apply(void 0,f(t(r,s({sort:"desc",fromValue:e?(0,a.p)(u,1e-4,"add"):u},"end"===n?{fromEnd:!0}:{})))).map((function(t){return t.DomainValues.Domain.split(",")})).map((function(t){return c(t,1)[0]})).catch((function(t){return t&&o().Observable.of(null)})))}},937307:(t,e,r)=>{"use strict";r.d(e,{Z:()=>m});var n=r(57604),o=r(580416),i=r(782904),a=r(761868),u=r(730381),c=r.n(u),l=r(66604),s=r.n(l),f=r(535937),p=r.n(f);const m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case n.XV:return(0,a.t8)("data[".concat(e.dimension,"][").concat(e.layerId,"]"),e.data,t);case n.mE:return(0,a.t8)("currentTime",e.time,t);case n.at:return(0,a.t8)("offsetTime",e.offsetTime,t);case n.mD:if(t.offsetTime&&t.currentTime){var r=c()(t.offsetTime).diff(t.currentTime),u=c()(e.time).add(r);return(0,a.t8)("currentTime",e.time,(0,a.t8)("offsetTime",u.toISOString(),t))}return(0,a.t8)("currentTime",e.time,t);case o.sb:var l=s()(t.data,(function(t){return p()(t,(function(t,r){return r!==e.node}))}));return(0,a.t8)("data",l,t);case i.l:return(0,a.t8)("data",void 0,(0,a.t8)("currentTime",void 0,(0,a.t8)("offsetTime",void 0,t)));default:return t}}},176843:(t,e,r)=>{"use strict";r.d(e,{z2:()=>o,V3:()=>i,dS:()=>a,yt:()=>c,E2:()=>l,Np:()=>s,KC:()=>f,Wq:()=>p,rp:()=>m,PF:()=>y});var n=r(22222),o=function(t){return t&&t.playback&&t.playback.settings},i=function(t){return(o(t)||{}).frameDuration||5},a=function(t){return t&&t.playback&&t.playback.status},u=function(t){return t&&t.playback&&t.playback.frames},c=function(t){var e=u(t)||[];return e[e.length-1]},l=function(t){return t&&t.playback&&t.playback.framesLoading},s=function(t){return t&&t.playback&&t.playback.currentFrame},f=function(t){return function(t){return t&&t.playback&&t.playback.playbackRange}(t)},p=function(t){return(u(t)||[])[s(t)]},m=function(t){return t&&t.playback&&t.playback.metadata},y=(0,n.P1)(u,s,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return{hasNext:t[e+1],hasPrevious:t[e-1]}}))},18190:t=>{var e=Math.floor;t.exports=function(t,r){var n="";if(!t||r<1||r>9007199254740991)return n;do{r%2&&(n+=t),(r=e(r/2))&&(t+=t)}while(r);return n}},378302:(t,e,r)=>{var n=r(18190),o=r(880531),i=r(440180),a=r(862689),u=r(788016),c=r(683140),l=Math.ceil;t.exports=function(t,e){var r=(e=void 0===e?" ":o(e)).length;if(r<2)return r?n(e,t):e;var s=n(e,l(t/u(e)));return a(e)?i(c(s),0,t).join(""):s.slice(0,t)}},532475:(t,e,r)=>{var n=r(378302),o=r(788016),i=r(640554),a=r(479833);t.exports=function(t,e,r){t=a(t);var u=(e=i(e))?o(t):0;return e&&u<e?n(e-u,r)+t:t}},313880:(t,e,r)=>{var n=r(479833);t.exports=function(){var t=arguments,e=n(t[0]);return t.length<3?e:e.replace(t[1],t[2])}},819081:(t,e,r)=>{"use strict";t.exports=r(1174)}}]);