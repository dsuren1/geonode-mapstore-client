(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[78225],{868143:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>D});var o=n(124852),r=n.n(o),i=n(867076),c=n(22222),u=n(171703),s=n(45697),a=n.n(s),l=n(322843),p=n(367306),f=n(296311),d=n(557579),b=n(555927);const y=(0,i.compose)((0,u.connect)((function(){return{}}),{backFromWizard:function(){return(0,d.Rz)("layer",void 0)}}),(0,i.withProps)((function(e){var t=e.backFromWizard;return{exitButton:{id:"dashboard-exit-button",onClick:void 0===t?function(){}:t,glyph:"arrow-left",tooltipId:"widgets.builder.wizard.backToLayerSelection"}}})));var m=n(454679),v=n(807691),g=n(24412);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function w(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,k(o.key),o)}}function P(e,t,n){return t=j(t),function(e,t){if(t&&("object"==h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,S()?Reflect.construct(t,n||[],j(e).constructor):t.apply(e,n))}function S(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(S=function(){return!!e})()}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function O(e,t,n){return(t=k(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e){var t=function(e){if("object"!=h(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==h(t)?t:t+""}var _=(0,i.compose)((0,u.connect)(f.Nb,{toggleConnection:d.w2,triggerShowConnections:b.G9}),(0,u.connect)(f.Tw),(0,i.withProps)((function(e){var t=e.availableDependencies;return{availableDependencies:(void 0===t?[]:t).filter((function(e){return"map"!==e}))}})),y)(m.Z),C=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),P(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){this.props.onInit({servicesPermission:this.props.servicesPermission}),this.props.onMount()}},{key:"componentWillUnmount",value:function(){this.props.onUnmount()}},{key:"render",value:function(){var e=this,t=this.props.pluginCfg.selectedService||"",n=this.props.pluginCfg.services||{};return!!this.props.editing&&r().createElement("div",{className:"dashboard-editor de-builder"},r().createElement(_,{disableEmptyMap:this.props.disableEmptyMap,defaultSelectedService:t,defaultServices:n,canEditService:this.props.canEditService,enabled:this.props.editing,onClose:function(){return e.props.setEditing(!1)},catalog:this.props.catalog}))}}])&&w(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,o}(r().Component);O(C,"propTypes",{id:a().string,editing:a().bool,limitDockHeight:a().bool,fluid:a().bool,zIndex:a().number,dockSize:a().number,position:a().string,onMount:a().func,onUnmount:a().func,setEditing:a().func,dimMode:a().string,src:a().string,style:a().object,pluginCfg:a().object,catalog:a().object,disableEmptyMap:a().bool,servicesPermission:a().object}),O(C,"defaultProps",{id:"dashboard-editor",editing:!1,dockSize:500,limitDockHeight:!0,zIndex:1e4,fluid:!1,dimMode:"none",position:"left",onMount:function(){},onUnmount:function(){},setEditing:function(){},servicesPermission:{editingAllowedRoles:["ALL"]}});var M=(0,u.connect)((0,c.P1)(p.i$,p.MZ,p.$c,(function(e,t,n){return{editing:e,isDashboardOpened:t,canEditService:n}})),{setEditing:b.D_,onInit:b.QT,onMount:function(){return(0,b.Nl)(!0)},onUnmount:function(){return(0,b.Nl)(!1)}})(C);const D=(0,l.rx)("DashboardEditor",{component:M,reducers:{dashboard:g.Z},epics:v.ZP})}}]);