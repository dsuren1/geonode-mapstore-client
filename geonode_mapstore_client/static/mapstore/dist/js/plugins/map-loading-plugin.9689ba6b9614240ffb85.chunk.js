(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[49528],{593009:(n,e,t)=>{"use strict";t.d(e,{Z:()=>h});var r=t(675263),o=t.n(r),i=t(124852),a=t.n(i),p=t(472986),c=t.n(p);function s(n){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},s(n)}function u(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,g(r.key),r)}}function l(n,e,t){return e=b(e),function(n,e){if(e&&("object"===s(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}(n,f()?Reflect.construct(e,t||[],b(n).constructor):e.apply(n,t))}function f(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(n){}return(f=function(){return!!n})()}function b(n){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},b(n)}function d(n,e){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,e){return n.__proto__=e,n},d(n,e)}function m(n,e,t){return(e=g(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function g(n){var e=function(n,e){if("object"!=s(n)||!n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var r=t.call(n,"string");if("object"!=s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==s(e)?e:String(e)}t.e(79509).then(t.bind(t,634903));var y=function(n){function e(){return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,e,arguments)}var t,r;return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&d(n,e)}(e,n),t=e,(r=[{key:"render",value:function(){return this.props.loading?a().createElement("div",{className:this.props.className,id:this.props.id},a().createElement(c(),{noFadeIn:!0,overrideSpinnerClassName:"spinner",spinnerName:this.props.spinner})):null}}])&&u(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(a().Component);m(y,"propTypes",{id:o().string,loading:o().bool,className:o().string,spinner:o().string}),m(y,"defaultProps",{id:"mapstore-globalspinner",loading:!1,className:"ms2-loading",spinner:"circle"});const h=y},745712:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>d});var r=t(893379),o=t.n(r),i=t(289010);o()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var a=t(727418),p=t.n(a),c=t(171703),s=t(22222),u=t(593009),l=t(675110),f=(0,s.P1)([l.l2],(function(n){return{loading:n&&n.some((function(n){return n.loading}))}})),b=(0,c.connect)(f)(u.Z);const d={MapLoadingPlugin:p()(b,{Toolbar:{name:"maploading",position:1,tool:!0,priority:1}}),reducers:{}}},289010:(n,e,t)=>{"use strict";t.d(e,{Z:()=>i});var r=t(923645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,".msgapi #mapstore-globalspinner  {\n    width: 28px;\n    height: 28px;\n    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.2);\n    background-color: white;\n    background-size: 80px 80px;\n    background-repeat: no-repeat;\n    border-radius: 4px;\n    border: 1px solid #999;\n    z-index: 10;\n    top: 90px;\n    left: 2px;\n    position: absolute;\n    margin: 8px;\n}\n\n.msgapi #mapstore-globalspinner .circle-wrapper {\n    margin-left: 2px;\n    margin-top: 1px;\n}\n\n.msgapi #mapstore-toolbar #mapstore-globalspinner {\n    position: static;\n    width: 42px;\n    margin: 0;\n    margin-top: 0;\n    height: 35px;\n    box-shadow: none;\n}\n\n.msgapi .ms2-loading .sk-circle-wrapper {\n     width: 30px;\n     height: 30px;\n }\n",""]);const i=o}}]);