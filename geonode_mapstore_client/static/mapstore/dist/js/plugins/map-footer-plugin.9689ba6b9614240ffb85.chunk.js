(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[77785],{643526:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>S});var n=r(124852),o=r.n(n),i=r(675263),c=r.n(i),a=r(658252),u=r(867076);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,v(n.key),n)}}function p(t,e,r){return e=m(e),function(t,e){if(e&&("object"===l(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return d(t)}(t,y()?Reflect.construct(e,r||[],m(t).constructor):e.apply(t,r))}function y(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(y=function(){return!!t})()}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(t,e){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},b(t,e)}function h(t,e,r){return(e=v(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function v(t){var e=function(t,e){if("object"!=l(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==l(e)?e:String(e)}var g={},w=(0,u.lifecycle)({componentDidMount:function(){if(g[this.props.id]){var t=document.getElementById(this.props.id);t&&t.parentNode&&!t.hasChildNodes()&&t.parentNode.replaceChild(g[this.props.id],t)}},shouldComponentUpdate:function(){return!1},componentWillUnmount:function(){g[this.props.id]=document.getElementById(this.props.id)}})((function(t){var e=t.id;return o().createElement("div",{id:e})})),j=[{element:o().createElement(w,{key:"attribution",id:"footer-attribution-container"})},{element:o().createElement(w,{key:"scalebar",id:"footer-scalebar-container"})}],O=function(t){function e(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return h(d(t=p(this,e,[].concat(n))),"getPanels",(function(){return t.props.items.filter((function(t){return t.tools})).reduce((function(t,e){return t.concat(e.tools.map((function(t,r){return{name:e.name+r,panel:t,cfg:e.cfg.toolsCfg?e.cfg.toolsCfg[r]:{}}})))}),[])})),h(d(t),"getTools",(function(){return[j[0]].concat(function(t){if(Array.isArray(t))return s(t)}(e=t.props.items.sort((function(t,e){return e.position-t.position})))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[j[1]]);var e})),t}var r,n;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e)}(e,t),r=e,(n=[{key:"render",value:function(){return o().createElement(a.Z,{id:this.props.id,style:this.props.style,className:this.props.className,container:function(t){return o().createElement("div",t,t.children)},toolStyle:"primary",activeStyle:"default",stateSelector:"mapFooter",tool:function(t){return o().createElement("div",null,t.children)},tools:this.getTools(),panels:this.getPanels()})}}])&&f(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}(o().Component);h(O,"propTypes",{className:c().string,style:c().object,items:c().array,id:c().string,mapType:c().string}),h(O,"defaultProps",{items:[],className:"mapstore-map-footer",style:{},id:"mapstore-map-footer"});const S={MapFooterPlugin:O,reducers:{}}}}]);