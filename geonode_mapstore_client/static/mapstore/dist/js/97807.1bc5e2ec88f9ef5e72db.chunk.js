(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[97807,47310],{801550:(e,t,n)=>{"use strict";n.d(t,{pP:()=>r,TR:()=>o,N7:()=>i,mq:()=>u,uv:()=>a,Qy:()=>c,IL:()=>s,Li:()=>l,OW:()=>p,ZO:()=>f,Um:()=>y,TF:()=>d,Ls:()=>m,Ec:()=>b,Eu:()=>v,JJ:()=>O,nZ:()=>g,YD:()=>h,GI:()=>E,Jb:()=>P,Uh:()=>_,e$:()=>S,eh:()=>w,$j:()=>N,bJ:()=>T,Mk:()=>I,xy:()=>j,o6:()=>D,FP:()=>R,Mo:()=>A,sO:()=>C,Px:()=>M,hd:()=>F,Ju:()=>x,BV:()=>L,SO:()=>G,H0:()=>U,$X:()=>k,ou:()=>H,NE:()=>V,Lq:()=>Z,aN:()=>K});var r="CHANGE_MAP_VIEW",o="CLICK_ON_MAP",i="CHANGE_MOUSE_POINTER",u="CHANGE_ZOOM_LVL",a="PAN_TO",c="ZOOM_TO_EXTENT",s="ZOOM_TO_POINT",l="CHANGE_MAP_CRS",p="CHANGE_MAP_SCALES",f="CHANGE_MAP_STYLE",y="CHANGE_ROTATION",d="CREATION_ERROR_LAYER",m="UPDATE_VERSION",b="INIT_MAP",v="RESIZE_MAP",O="CHANGE_MAP_LIMITS",g="SET_MAP_RESOLUTIONS",h="REGISTER_EVENT_LISTENER",E="UNREGISTER_EVENT_LISTENER",P="MOUSE_MOVE",_="MOUSE_OUT",S="MAP:MAP_PLUGIN_LOAD",w="MAP:ORIENTATION",N="MAP:UPDATE_MAP_VIEW",T="MAP:UPDATE_MAP_OPTIONS";function I(e,t,n,r){return{type:S,mapType:t,loading:e,loaded:n,error:r}}function j(e,t,n){return{type:s,pos:e,zoom:t,crs:n}}function D(e,t,n,o,i,u,a,c){return{type:r,center:e,zoom:t,bbox:n,size:o,mapStateSource:i,projection:u,viewerOptions:a,resolution:c}}function R(e,t){return{type:o,point:e,layer:t}}function A(e){return{type:i,pointer:e}}function C(e,t){return{type:u,zoom:e,mapStateSource:t}}function M(e,t,n,r){return{type:c,extent:e,crs:t,maxZoom:n,options:r}}function F(e,t){return{type:f,style:e,mapStateSource:t}}function x(){return{type:v}}function L(e){var t=e.restrictedExtent,n=e.crs,r=e.minZoom;return{type:O,restrictedExtent:t,crs:n,minZoom:r}}function G(e){return{type:g,resolutions:e}}var U=function(e,t){return{type:h,eventName:e,toolName:t}},k=function(e,t){return{type:E,eventName:e,toolName:t}},H=function(e){return{type:P,position:e}},V=function(){return{type:_}},Z=function(e){return{type:w,orientation:e}},K=function(e){return{type:T,configUpdate:e}}},921914:(e,t,n)=>{"use strict";n.d(t,{XL:()=>o,km:()=>i,Ih:()=>u,Xw:()=>a,Pn:()=>c,DZ:()=>s,e8:()=>l,E0:()=>p,F9:()=>f,X_:()=>y,pb:()=>d,qb:()=>m,Re:()=>b,ih:()=>v,xy:()=>O,jL:()=>g,oz:()=>h,ph:()=>E,lF:()=>P,gG:()=>_,cb:()=>S,GI:()=>w,B1:()=>N,fv:()=>T,gc:()=>I,zX:()=>j,ZF:()=>D,Zb:()=>R,DW:()=>A,Xp:()=>C,Fm:()=>M,sV:()=>F,Mn:()=>x,LU:()=>L,XP:()=>G,WU:()=>U,JB:()=>k,g:()=>H,ws:()=>V,HP:()=>Z,aN:()=>K,Pg:()=>q,u0:()=>z,TM:()=>W,PM:()=>B,lK:()=>J,sv:()=>X,MO:()=>Q,oO:()=>$,Mc:()=>ee,Zw:()=>te,RA:()=>ne,am:()=>re,ZM:()=>oe,wm:()=>ie,Y$:()=>ue,Qu:()=>ae,kT:()=>ce});var r=n(647310),o="LOAD_FEATURE_INFO",i="ERROR_FEATURE_INFO",u="EXCEPTIONS_FEATURE_INFO",a="CHANGE_MAPINFO_STATE",c="NEW_MAPINFO_REQUEST",s="PURGE_MAPINFO_RESULTS",l="CHANGE_MAPINFO_FORMAT",p="SHOW_MAPINFO_MARKER",f="HIDE_MAPINFO_MARKER",y="SHOW_REVERSE_GEOCODE",d="HIDE_REVERSE_GEOCODE",m="GET_VECTOR_INFO",b="NO_QUERYABLE_LAYERS",v="CLEAR_WARNING",O="FEATURE_INFO_CLICK",g="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",h="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",E="TOGGLE_MAPINFO_STATE",P="UPDATE_CENTER_TO_MARKER",_="IDENTIFY:CHANGE_PAGE",S="IDENTIFY:CLOSE_IDENTIFY",w="IDENTIFY:CHANGE_FORMAT",N="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",T="IDENTIFY:EDIT_LAYER_FEATURES",I="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",j="IDENTIFY:SET_MAP_TRIGGER",D="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",R="IDENTIFY:SET_SHOW_IN_MAP_POPUP",A="IDENTIFY:IDENTIFY_IS_MOUNTED",C="IDENTIFY:INIT_PLUGIN";function M(e,t,n,r,i){return{type:o,data:t,reqId:e,requestParams:n,layerMetadata:r,layer:i}}function F(e,t,n,r){return{type:i,error:t,reqId:e,requestParams:n,layerMetadata:r}}function x(e,t,n,r){return{type:u,reqId:e,exceptions:t,requestParams:n,layerMetadata:r}}function L(){return{type:b}}function G(){return{type:v}}function U(e,t){return{type:c,reqId:e,request:t}}function k(e,t,n,r){return{type:m,layer:e,request:t,metadata:n,queryableLayers:r}}function H(){return{type:s}}function V(e){return{type:l,infoFormat:e}}function Z(){return{type:p}}function K(){return{type:f}}function Y(e){return{type:y,reverseGeocodeData:e.data}}function q(e){return function(t){r.Z.reverseGeocode(e).then((function(e){t(Y(e))})).catch((function(e){t(Y(e))}))}}function z(){return{type:d}}function W(){return{type:E}}function B(e){return{type:P,status:e}}function J(e,t){return{type:O,point:e,layer:t,filterNameList:arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],overrideParams:arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},itemId:arguments.length>4&&void 0!==arguments[4]?arguments[4]:null}}function X(e){return{type:g,point:e}}function Q(e){return{type:h,enabled:e}}function $(e){return{type:_,index:e}}var ee=function(){return{type:S}},te=function(e){return{type:w,format:e}},ne=function(e){return{type:N,showCoordinateEditor:e}},re=function(e){return{type:T,layer:e}},oe=function(e){return{type:I,query:e}},ie=function(e){return{type:j,trigger:e}},ue=function(e){return{type:R,value:e}},ae=function(e){return{type:A,isMounted:e}},ce=function(e){return{type:C,cfg:e}}},647310:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(375875),o=n.n(r),i=n(472500),u=n.n(i),a=n(727418),c=n.n(a),s={format:"json",bounded:0,polygon_geojson:1,priority:5};const l={geocode:function(e,t){var n=c()({q:e},s,t||{}),r=u().format({protocol:"https",host:"nominatim.openstreetmap.org",query:n});return o().get(r)},reverseGeocode:function(e,t){var n=c()({lat:e.lat,lon:e.lng},t||{},s),r=u().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:n});return o().get(r)}}},799509:(e,t,n)=>{"use strict";n.d(t,{Z:()=>B});var r=n(124852),o=n.n(r),i=n(675263),u=n.n(i),a=n(548403),c=n.n(a),s=n(480681),l=n(794192);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,v(r.key),r)}}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function b(e,t,n){return(t=v(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===p(t)?t:String(t)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(a,e);var t,n,r,i,u=(r=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(r);if(i){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return d(e)}(this,e)});function a(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return b(d(e=u.call.apply(u,[this].concat(n))),"verifyOnKeyDownEvent",(function(t){69===t.keyCode&&t.preventDefault(),13===t.keyCode&&(t.preventDefault(),t.stopPropagation(),e.props.onKeyDown(t))})),b(d(e),"validateDecimalLon",(function(t){var n=e.props.constraints[e.props.format].lon.min,r=e.props.constraints[e.props.format].lon.max,o=parseFloat(t);return isNaN(o)||o<n||o>r?"error":null})),b(d(e),"validateDecimalLat",(function(t){var n=e.props.constraints[e.props.format].lat.min,r=e.props.constraints[e.props.format].lat.max,o=parseFloat(t);return isNaN(o)||o<n||o>r?"error":null})),e}return t=a,(n=[{key:"render",value:function(){var e=this,t=this.props,n=t.coordinate,r=t.value,i=t.onChange,u=t.disabled,a="validateDecimal"+c()(n);return o().createElement(s.FormGroup,{validationState:this[a](r)},o().createElement(l.Z,{disabled:u,key:n,value:r,placeholder:n,onChange:function(t){""===t?i(""):null===e[a](t)?i(t):i(r)},onKeyDown:this.verifyOnKeyDownEvent,step:1,validateNameFunc:this[a],type:"number"}))}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(o().Component);b(O,"propTypes",{idx:u().number,value:u().number,constraints:u().object,format:u().string,coordinate:u().string,onChange:u().func,onKeyDown:u().func,onSubmit:u().func,disabled:u().bool}),b(O,"defaultProps",{format:"decimal",coordinate:"lat",constraints:{decimal:{lat:{min:-90,max:90},lon:{min:-180,max:180}}},onKeyDown:function(){},disabled:!1});const g=O;var h=n(414293),E=n.n(h),P=n(867076);const _=(0,P.withProps)((function(e){var t=e.coordinate,n=void 0===t?"lat":t;return{maxDegrees:"lat"===n?90:180,directions:"lat"===n?["N","S"]:["E","W"]}}));var S=n(562395);const w=(0,P.compose)((0,P.withProps)((function(e){return{isValid:""!==e.value}})),(0,P.withState)("initial","setInitial",{}),(0,P.withProps)((function(e){var t=e.isValid,n=e.initial,r=e.degrees,o=e.minutes,i=e.seconds;return t||""===r&&""===o&&""===i?{}:n})),(0,P.withHandlers)({onChange:function(e){return function(t){var n=t.degrees,r=t.minutes,o=t.seconds,i=t.direction;isNaN(n)?e.setInitial({degrees:"",minutes:r,seconds:o,direction:i}):isNaN(r)?e.setInitial({degrees:n,minutes:"",seconds:o,direction:i}):isNaN(o)&&e.setInitial({degrees:n,minutes:r,seconds:"",direction:i}),e.onChange({degrees:n,minutes:r,seconds:o,direction:i})}}}));function N(e){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){C(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,M(r.key),r)}}function D(e,t){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},D(e,t)}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}function C(e,t,n){return(t=M(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(e){var t=function(e,t){if("object"!==N(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==N(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===N(t)?t:String(t)}var F="degrees",x="seconds",L="minutes",G=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&D(e,t)}(a,e);var t,n,r,i,u=(r=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(r);if(i){var n=A(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===N(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return R(e)}(this,e)});function a(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return C(R(e=u.call.apply(u,[this].concat(n))),"onChange",(function(t,n){var r=e.getUpdatedCoordinateValue(t,n);e.props.onChange(r)})),C(R(e),"getUpdatedCoordinateValue",(function(t,n){try{var r=C({degrees:e.props.degrees,minutes:e.props.minutes,seconds:e.props.seconds,direction:e.props.direction},t,t===F?Math.min(n,e.props.maxDegrees):n),o=r.seconds,i=r.minutes+e.getSexagesimalStep(o),u=Math.min(e.props.maxDegrees,r.degrees+e.getSexagesimalStep(i)),a=r.direction;return o=e.roundToNextSexagesimalStep(o),i=e.roundToNextSexagesimalStep(i),u===e.props.maxDegrees&&(i=0,o=0),a=u<0?a===e.props.directions[0]?e.props.directions[1]:e.props.directions[0]:a,-1===u&&(r.degrees<0&&r.minutes>=0?u=r.degrees:r.minutes<0&&r.degrees<=0?(u=0,i=r.minutes):(u=0,i=0,o=1e-4)),{degrees:u,minutes:i,seconds:o,direction:a}}catch(e){return null}})),C(R(e),"getSexagesimalStep",(function(e){return e>=60?1:e<0?-1:0})),C(R(e),"getInputStyle",(function(e){return isNaN(e)||""===e?{borderColor:"#a94442"}:{}})),C(R(e),"getNewValue",(function(t){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:F;if(""===t)n="";else{var o=r===x?parseFloat(t):parseInt(t,10),i=r===F?e.props.maxDegrees:60;n=Math.round(10*o)/10<i?o:e.props[r]}return n})),C(R(e),"verifyOnKeyDownEvent",(function(t){var n;69===t.keyCode&&t.preventDefault(),"0"===(null==t||null===(n=t.target)||void 0===n?void 0:n.value)&&t.target.setSelectionRange(-1,-1),13===t.keyCode&&(t.preventDefault(),t.stopPropagation(),e.props.onKeyDown())})),C(R(e),"roundToNextSexagesimalStep",(function(e){return e<0?60+e:e>=60?e-60:e})),C(R(e),"isValid",(function(t){var n=t.minutes,r=t.seconds,o=t.degrees,i=t.direction;return!E()(n)&&n>0&&n<60&&!E()(r)&&r>0&&r<60&&!E()(o)&&o>0&&o<e.props.maxDegrees&&i})),e}return t=a,(n=[{key:"render",value:function(){var e,t,n,r=this,i={padding:0,textAlign:"center",borderRight:"none"},u=this.getInputStyle(this.props.degrees),a=this.getInputStyle(this.props.minutes),c=this.getInputStyle(this.props.seconds),p={position:"relative",top:0,overflow:"visible",zIndex:3,left:-25,width:0,height:0},f=(null!==(e=null==this||null===(t=this.props)||void 0===t||null===(n=t.aeronauticalOptions)||void 0===n?void 0:n.seconds)&&void 0!==e?e:{}).step;return o().createElement(s.FormGroup,{style:{display:"inline-flex"}},o().createElement("div",{className:F,style:{width:40,display:"flex"}},o().createElement(l.Z,{key:this.props.coordinate+F,value:this.props.degrees,disabled:this.props.disabled,placeholder:"d",onChange:function(e){return r.onChange(F,r.getNewValue(e))},step:1,size:3,max:this.props.maxDegrees,min:-1,onKeyDown:function(e){r.verifyOnKeyDownEvent(e)},style:I(I({width:"100%"},i),u),type:"number"}),o().createElement("span",{style:p},"°")),o().createElement("div",{className:L,style:{width:40,display:"flex"}},o().createElement(l.Z,{disabled:this.props.disabled,key:this.props.coordinate+L,placeholder:"m",size:3,value:this.props.minutes,onChange:function(e){return r.onChange(L,r.getNewValue(e,L))},max:60,min:-1,onKeyDown:function(e){r.verifyOnKeyDownEvent(e)},style:I(I({width:"100%"},i),a),step:1,type:"number"}),o().createElement("span",{style:p},"′")),o().createElement("div",{className:x,style:{display:"flex"}},o().createElement(l.Z,{disabled:this.props.disabled,key:this.props.coordinate+x,value:this.props.seconds,placeholder:"s",onChange:function(e){return r.onChange(x,r.getNewValue(e,x))},step:f,max:60,onKeyDown:function(e){r.verifyOnKeyDownEvent(e)},min:-1,style:I(I({width:"100%"},i),c),type:"number"}),o().createElement("span",{style:p},"″")),o().createElement("div",{className:"direction-select"},o().createElement(s.FormControl,{disabled:this.props.disabled,componentClass:"select",placeholder:"select",value:this.props.direction,onChange:function(e){return r.onChange("direction",e.target.value)},style:{paddingLeft:4,paddingRight:4,flex:"1 1 0%"}},this.props.directions.map((function(e){return o().createElement("option",{key:e,value:e},e)})))))}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(o().Component);C(G,"propTypes",{idx:u().number,maxDegrees:u().number,degrees:u().number,minutes:u().number,seconds:u().number,directions:u().array,direction:u().string,aeronauticalOptions:u().object,coordinate:u().string,onChange:u().func,onKeyDown:u().func,disabled:u().bool}),C(G,"defaultProps",{coordinate:"lat",maxDegrees:90,directions:["N","S"],aeronauticalOptions:{seconds:{decimals:4,step:1e-4}},onKeyDown:function(){},disabled:!1});const U=(0,P.compose)(_,S.Z,w)(G),k=(0,P.compose)((0,P.withHandlers)({onChange:function(e){var t=e.onChange,n=void 0===t?function(){}:t,r=e.maxLatitude,o=void 0===r?89.9997222222:r,i=e.coordinate;return function(e){return n(Math.abs(parseFloat(e))>o&&"lat"===i?Math.sign(e)*o:e)}}}));function H(e){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(e)}function V(){return V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V.apply(this,arguments)}function Z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,z(r.key),r)}}function K(e,t){return K=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},K(e,t)}function Y(e){return Y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Y(e)}function q(e,t,n){return(t=z(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e){var t=function(e,t){if("object"!==H(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==H(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===H(t)?t:String(t)}var W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&K(e,t)}(a,e);var t,n,r,i,u=(r=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Y(r);if(i){var n=Y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===H(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function a(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),u.apply(this,arguments)}return t=a,(n=[{key:"render",value:function(){var e=this.props.format;return"decimal"===e||E()(e)?o().createElement(g,V({},this.props,{format:this.props.format||"decimal"})):o().createElement(U,this.props)}}])&&Z(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(o().Component);q(W,"propTypes",{idx:u().number,value:u().number,constraints:u().object,format:u().string,aeronauticalOptions:u().object,coordinate:u().string,onChange:u().func,onKeyDown:u().func}),q(W,"defaultProps",{format:"decimal",constraints:{decimal:{lat:{min:-90,max:90},lon:{min:-180,max:180}}}});const B=k(W)},562395:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(807654),o=n.n(r),i=n(59854),u=n.n(i),a=n(867076);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}const l=(0,a.compose)((0,a.withProps)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){var r,o,i;r=e,o=t,i=n[t],(o=function(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===c(t)?t:String(t)}(o))in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},function(e,t){var n,r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).seconds,i=e>=0?Math.floor(e):Math.ceil(e),a=Math.abs(60*(e-i)),c=Math.floor(a),s=60*(a-c),l=u()(s,null!==(n=null==r?void 0:r.decimals)&&void 0!==n?n:4);return i=Math.abs(i),60===l&&(c++,l=0),60===c&&(i++,c=0),o()(i)||""===e?{degrees:"",minutes:"",seconds:"",direction:t?"E":"N"}:{degrees:i,minutes:c,seconds:l,direction:e<0?t?"W":"S":t?"E":"N"}}(e.value,"lon"===e.coordinate,e.aeronauticalOptions))})),(0,a.withHandlers)({onChange:function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.degrees,r=t.minutes,i=t.seconds,u=t.direction,a=0,c=0,s=0;void 0===n&&void 0===r&&void 0===i&&e.onChange(void 0),o()(n)||(a=n),o()(r)||(c=r),o()(i)||(s=i);var l=a+c/60+s/3600;(l>0&&("S"===u||"W"===u)||l<0&&("N"===u||"E"===u))&&(l*=-1),e.onChange(l.toPrecision(12))}}}))},777900:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(480681),o=n(815135),i=n(124852),u=n.n(i),a=n(423570),c=n.n(a);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}var l=(0,o.Z)(r.DropdownButton),p={disabled:!1,className:"square-button-md",noCaret:!0,idDropDown:c()()};const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.menuOptions,n=void 0===t?[]:t,o=e.buttonConfig,i=void 0===o?{}:o;return u().createElement(l,s({},p,i),n.length?n.map((function(e,t){var n=e.glyph,o=e.text,i=e.onClick,a=e.active,c=void 0!==a&&a;return u().createElement(r.MenuItem,{active:c,eventKey:t,onClick:i,key:t},n&&u().createElement(r.Glyphicon,{glyph:n})," ",o)})):null)}},55105:(e,t,n)=>{"use strict";n.d(t,{Ss:()=>d,Nr:()=>m,ic:()=>v,Jz:()=>O,VM:()=>g,CF:()=>h,Ju:()=>E});var r=n(91175),o=n.n(r),i=n(288306),u=n.n(i),a=n(800827),c=n(552259),s=n(737275);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(e){return e.maplayout&&e.maplayout.layout||{}},m=function(e){return e.maplayout&&e.maplayout.boundingMapRect||{}},b=function(e){return e.maplayout&&e.maplayout.boundingSidebarRect||{}},v=u()((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=d(e),o=b(e);return r&&Object.keys(r).filter((function(e){return t[e]})).reduce((function(e,t){var i;return f(f({},e),{},y({},t,n&&null!==(i=o[t])&&void 0!==i?i:r[t]))}),{})||{}}),(function(e,t,n){return JSON.stringify(d(e))+JSON.stringify(b(e))+JSON.stringify(t)+(n?"_isDock":"")})),O=function(e){var t;return!(null===(t=d(e))||void 0===t||!t.rightPanel)},g=function(e){var t,n=s.ZP.getConfigProp("mapLayout")||c.DEFAULT_MAP_LAYOUT;return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=d(e);return!!o()(t.filter((function(e){return n[e.key]})).map((function(e){return"not"===e.type?n[e.key]!==e.value&&n[e.key]:n[e.key]===e.value})))}(e,[{key:"bottom",value:null!==(t=null==n?void 0:n.bottom.sm)&&void 0!==t?t:0,type:"not"}])},h=function(e){var t=(0,a.Od)(e),n=m(e);return n&&t&&t.size&&{left:(0,c.parseLayoutValue)(n.left,t.size.width),bottom:(0,c.parseLayoutValue)(n.bottom,t.size.height),right:(0,c.parseLayoutValue)(n.right,t.size.width),top:(0,c.parseLayoutValue)(n.top,t.size.height)}},E=function(e){var t,n;return null!==(t=null==e||null===(n=e.maplayout)||void 0===n?void 0:n.dockPanels)&&void 0!==t?t:{left:[],right:[]}}}}]);