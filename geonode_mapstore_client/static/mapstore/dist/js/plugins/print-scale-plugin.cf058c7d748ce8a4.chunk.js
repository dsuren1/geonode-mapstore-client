"use strict";(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[77272],{496829:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(45697),o=r.n(n),i=r(124852),c=r.n(i),l=r(271418);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,y(n.key),n)}}function f(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(f=function(){return!!e})()}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function b(e,t,r){return(t=y(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e){var t=function(e){if("object"!=a(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==a(t)?t:t+""}var m=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return b(e=function(e,t,r){return t=p(t),function(e,t){if(t&&("object"==a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,f()?Reflect.construct(t,r||[],p(e).constructor):t.apply(e,r))}(this,t,[].concat(n)),"onChange",(function(){e.props.onChange(!e.refs.input.props.checked)})),b(e,"isEnabled",(function(){return e.props.isEnabled?e.props.isEnabled(e.props.layouts):0===e.props.layouts.length||e.props.layouts.some((function(t){return t.name.match(e.props.enableRegex)}))})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){return c().createElement(l.XZ,{disabled:!this.isEnabled(),ref:"input",checked:this.props.checked,onChange:this.onChange},this.props.label)}}])&&u(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(c().Component);b(m,"propTypes",{layouts:o().array,enableRegex:o().oneOfType([o().object,o().string]),label:o().string,onChange:o().func,checked:o().bool,isEnabled:o().func}),b(m,"defaultProps",{layouts:[],enableRegex:/^.*$/,label:"Option",onChange:function(){},checked:!1});const d=m},832395:(e,t,r)=>{r.d(t,{W:()=>m});var n=r(124852),o=r.n(n),i=r(45697),c=r.n(i),l=r(322843),a=r(86638),u=r(496829),f=r(227361),p=r.n(f);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e,t,r){return(t=function(e){var t=function(e){if("object"!=s(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==s(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=function(e,t){var r=e.spec,i=e.property,c=e.label,f=e.onChangeParameter,s=e.enabled,m=void 0===s||s,d=e.actions,v=e.path,O=void 0===v?"params.":v,g=e.additionalProperty,h=void 0===g||g,P=O+i;return(0,n.useEffect)((function(){var e;h&&(null==d||d.addParameter(i,null!==(e=p()(r,P))&&void 0!==e&&e))}),[]),(0,l.CU)({},function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e),"{"+m+"}")?o().createElement(u.Z,{checked:!!p()(r,P),label:(0,a.S$)(t.messages,c),onChange:function(e){return f(P,e)}}):null};m.contextTypes={messages:c().object}},1842:(e,t,r)=>{r.r(t),r.d(t,{defaultFormat:()=>g,Scale:()=>P,default:()=>j});var n=r(124852),o=r.n(n),i=r(832395),c=r(322843),l=r(171703),a=r(986069),u=r(805346),f=r(384965),p=r(720289),s=r(145959),b=["map","scale","locale","label","optionLabel","actions","onAddParameter"];function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},m.apply(null,arguments)}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t,r){return(t=function(e){var t=function(e){if("object"!=y(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==y(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en-US",r=new Intl.NumberFormat(t,{maximumFractionDigits:0}).format(e);return"1:".concat(r)}var h=function(e){var t,r,n,o,i,c;return{spec:null!==(t=null==e||null===(r=e.print)||void 0===r?void 0:r.spec)&&void 0!==t?t:{},scale:null==e||null===(n=e.print)||void 0===n||null===(o=n.map)||void 0===o?void 0:o.scale,locale:null!==(i=null==e||null===(c=e.locale)||void 0===c?void 0:c.current)&&void 0!==i?i:"en-US"}},P=function(e){var t,r=e.map,c=e.scale,l=e.locale,a=e.label,p=void 0===a?"print.scale":a,s=e.optionLabel,y=void 0===s?"print.includeScale":s,d=(e.actions,e.onAddParameter),O=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,b),P=e.format||g;return(0,n.useEffect)((function(){var e;(0,f.addTransformer)("scale",(e=P,function(t,r){var n,o,i=null==r||null===(n=r.pages)||void 0===n||null===(o=n[0])||void 0===o?void 0:o.scale,c=h(t).locale;return Promise.resolve(v(v({},r),{},{mapScale:null!=r&&r.includeScale?"".concat(e(i,c,!0)):""}))}),4)}),[]),o().createElement("div",{id:"print-scale"},o().createElement("div",{style:{float:"left",marginRight:5}},o().createElement(u.Z,{msgId:p})," ",P(null!==(t=null==r?void 0:r.scale)&&void 0!==t?t:c,l)),o().createElement(i.W,m({},O,{actions:{addParameter:d},property:"includeScale",label:y})))};const j=(0,c.rx)("PrintScale",{component:(0,l.connect)(h,{onChangeParameter:a.d$,onAddParameter:a.eT})(P),reducers:{locale:p.Z,print:s.Z},containers:{Print:{priority:1,target:"left-panel",position:3}}})}}]);