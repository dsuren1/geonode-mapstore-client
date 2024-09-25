"use strict";(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[6478],{410008:(e,t,n)=>{n.d(t,{Z:()=>J});var o=n(124852),r=n.n(o),i=n(45697),a=n.n(i),l=n(271418),s=n(743129),p=n(815135),u=n(91175),c=n.n(u),d=n(807654),m=n.n(d),f=n(227361),v=n.n(f),g=n(441609),b=n.n(g),y=n(86638),h=n(80717),P=n(245567),O=n(805346),E=n(900012),j=n(438261),S=n(281763),w=n.n(S),C=n(808797),V=n(307887),x=n(609090),F=n(867076),T=function(e,t,n){return w()(parseFloat(e))&&!isNaN(parseFloat(e))?(0,C.Ov)(parseFloat(e),t,n):e},I=function(e,t,n){return w()(parseFloat(e))&&!isNaN(parseFloat(e))?parseFloat((0,C.Ov)(e,n,t).toFixed(4)):e};const L=(0,F.compose)((0,F.defaultProps)({valueUom:"m",displayUom:"m",units:[{value:"degrees",label:"deg",originUom:"degrees"},{value:"ft",label:"ft",originUom:"m"},{value:"m",label:"m",originUom:"m"},{value:"km",label:"km",originUom:"m"},{value:"mi",label:"mi",originUom:"m"},{value:"nm",label:"nm",originUom:"m"}]}),(0,F.withStateHandlers)((function(e){var t=e.displayUom;return{uom:void 0===t?"nm":t}}),{setUom:function(){return function(e){return{uom:e}}}}),(0,F.withState)("localValue","setLocalValue"),(0,F.withPropsOnChange)(["value","localValue","uom","valueUom"],(function(e){var t=e.value,n=e.localValue,o=e.uom,r=e.valueUom;return{value:t===T(n,o,r)?n:I(t,o,r)}})),(0,F.withHandlers)({onChange:function(e){var t=e.uom,n=e.projection,o=e.valueUom,r=e.onChange,i=void 0===r?function(){}:r,a=e.setLocalValue,l=void 0===a?function(){}:a;return function(e){l(e),i(T(e,t,o),n)}}}))((function(e){var t=e.value,n=e.units,o=void 0===n?[]:n,i=e.uom,a=e.projection,s=void 0===a?"EPSG:3857":a,p=e.style,u=void 0===p?{display:"inline-flex",width:"100%"}:p,c=e.setUom,d=void 0===c?function(){}:c,m=e.onChange,f=void 0===m?function(){}:m,v=(0,V.getUnits)(s);return r().createElement(l.cw,{style:u},r().createElement(x.Z,{value:t,placeholder:"radius",name:"radius",onChange:function(e){return f(e,i)},step:1,type:"number"}),r().createElement(l.NI,{componentClass:"select",placeholder:"select",value:i,onChange:function(e){return d(e.target.value)},style:{width:85}},o.filter((function(e){var t=e.originUom;return v===t})).map((function(e){return r().createElement("option",{key:e.value,value:e.value},e.label)}))))}));function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function k(e){return function(e){if(Array.isArray(e))return M(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)({}).hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},U.apply(null,arguments)}function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Z(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,G(o.key),o)}}function B(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(B=function(){return!!e})()}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}function A(e,t,n){return(t=G(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function G(e){var t=function(e){if("object"!=D(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=D(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==D(t)?t:t+""}var $=(0,p.Z)(l.gG),q=(0,p.Z)(l.PS),Y=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return A(e=function(e,t,n){return t=R(t),function(e,t){if(t&&("object"==D(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,B()?Reflect.construct(t,n||[],R(e).constructor):t.apply(e,n))}(this,t,[].concat(o)),"getValidationStateRadius",(function(e){var t=parseFloat(e);return m()(t)?"error":null})),A(e,"renderLabelTexts",(function(t,n){var o=n.textLabels,r=n.featurePropValue;return"Polygon"===e.props.type?!b()(o)&&o[t].text:0!==t?b()(o)?!b()(r)&&r[0].formattedValue:o[t-1].text:null})),A(e,"validateCoordinates",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.props.components,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2?arguments[2]:void 0;if(t&&t.length){var r=t.filter(E.Tl);return n?r.length>e.props.componentsValidation[e.props.type].min||r.length>=e.props.componentsValidation[e.props.type].min&&!(0,E.Tl)(t[o]):r.length>=e.props.componentsValidation[e.props.type].min}return!1})),A(e,"validateCircle",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.props.components,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.props.properties.radius;if(t&&t.length){var o=c()(t);return!m()(parseFloat(n))&&(0,E.Tl)(o)}return!1})),A(e,"validateText",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.props.components,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.props.properties.valueText;if(t&&t.length){var o=c()(t);return!!n&&(0,E.Tl)(o)}return!1})),A(e,"isValid",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.props.components,n=arguments.length>1?arguments[1]:void 0;return e[e.props.componentsValidation[e.props.type].validation](t,!1,n)})),A(e,"addCoordPolygon",(function(t){if("Polygon"===e.props.type){var n,o,r,i=t.filter(E.Tl),a=(null===(n=e.props.features[e.props.currentFeature])||void 0===n||null===(o=n.geometry)||void 0===o||null===(r=o.coordinates)||void 0===r?void 0:r[0])||[],l=void 0!==a?a.findIndex((function(e){return!(0,E.Tl)(H({lon:e[0],lat:e[1]},void 0!==e[2]&&{height:e[2]}))})):-1;return t.concat([i.length&&0!==l?i[0]:{lat:"",lon:""}])}return t})),A(e,"change",(function(t,n){var o=e.props.components,r=m()(parseFloat(n.lat))?"":parseFloat(n.lat),i=m()(parseFloat(n.lon))?"":parseFloat(n.lon),a=void 0!==n.height?m()(parseFloat(n.height))?"":parseFloat(n.height):void 0;o[t]=H({lat:r,lon:i},void 0!==a&&{height:a});var l=e.addCoordPolygon(o);e.props.onChange(l,e.props.properties.radius,e.props.properties.valueText,e.props.mapProjection),e.isValid(o)?(e.props.isMouseEnterEnabled||"LineString"===e.props.type||"Polygon"===e.props.type)&&e.props.onHighlightPoint(o[t]):((e.props.isMouseLeaveEnabled||"LineString"===e.props.type||"Polygon"===e.props.type)&&e.props.onHighlightPoint(null),e.props.onSetInvalidSelected("coords",o.map(E.bh)))})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(t,e),n=t,o=[{key:"renderCircle",value:function(){var e=this;return r().createElement("div",{className:"ms-coordinates-editor-radius",style:{flex:1,overflowY:"auto",padding:"0 10px"}},r().createElement("div",null,r().createElement(l.cw,{validationState:this.getValidationStateRadius(this.props.properties.radius)},r().createElement(l.J$,null,r().createElement(O.Z,{msgId:"annotations.editor.radius"})),r().createElement(L,U({placeholder:"radius"},this.props.measureOptions,{value:this.props.properties.radius,projection:this.props.mapProjection,name:"radius",onChange:function(t,n){e.props.onValidateFeature(),e.isValid(e.props.components,t)?e.props.onChangeRadius(parseFloat(t),e.props.components.map(E.bh),n):""!==t?e.props.onChangeRadius(parseFloat(t),[[0,0]],n):(e.props.onChangeRadius(null,e.props.components.map(E.bh),n),e.props.onSetInvalidSelected("radius",e.props.components.map(E.bh)))},step:1,type:"number"})))))}},{key:"render",value:function(){var e=this,t=this.props.features[this.props.currentFeature||0],n=v()(t,"geometry.textLabels",[]),o=v()(t,"properties.values",[]),i=this.props,a=i.componentsValidation,p=i.type,u=k(this.props.components),d=u.filter(E.Tl).length===u.length,m=this[a[p].validation]()&&d,f=[{value:"decimal",text:r().createElement(O.Z,{msgId:"annotations.editor.decimal"})},{value:"aeronautical",text:r().createElement(O.Z,{msgId:"annotations.editor.aeronautical"})}],g=[{glyph:m?"ok-sign text-success":"exclamation-mark text-danger",tooltipId:m?"annotations.editor.valid":a[p].notValid,visible:!0,onClick:function(){}},{Element:function(){return r().createElement(q,{noCaret:!0,title:r().createElement($,{glyph:"cog"}),pullRight:!0,className:"square-button-md no-border",tooltip:"Format"},f.map((function(t){var n=t.text,o=t.value;return r().createElement(l.sN,{active:e.props.format===o,key:o,onClick:function(){return e.props.onChangeFormat(o)}},n)})))}},{glyph:"plus",tooltipId:"annotations.editor.add",disabled:"Bearing"!==p&&this.props.properties.disabled,visible:!a[p].add||!a[p].max||this.props.components.length!==a[p].max,onClick:function(){var t=k(e.props.components);t=t.concat([{lat:"",lon:""}]),e.props.onChange(t,e.props.properties.radius,e.props.properties.valueText,e.props.mapProjection)}}];return r().createElement("div",{className:"coordinates-editor",style:this.props.style},r().createElement("div",{className:"measure-feature-selector"},r().createElement("div",null,this.props.showFeatureSelector?r().createElement(s.ZP,{value:this.props.currentFeature,disabled:this.props.properties.disabled,options:[].concat(k(this.props.features.map((function(t,n){var o=v()(t,"properties.values",[]),r="bearing"===(o[0]||{}).type?"Bearing":t.geometry.type;if(r!==e.props.type)return null;var i="LineString"===r?"Length":"Bearing"===r?"Bearing":"Area",a=o.length>0?"".concat(i," ").concat(o[0].formattedValue):"",l=o.length>1&&"Polygon"===r?", Perimeter: ".concat(o[1].formattedValue):"";return{label:"".concat(r," (").concat(a).concat(l,")"),value:n}}))),[{label:(0,y.S$)(this.context.messages,"annotations.editor.newFeature"),value:this.props.features.length}]).filter((function(e){return!!e})),onChange:function(t){return e.props.onChangeCurrentFeature(null==t?void 0:t.value)}}):null),r().createElement("div",null,r().createElement(h.Z,{btnGroupProps:{className:"pull-right"},btnDefaultProps:{className:"square-button-md no-border"},buttons:g}))),"Circle"===this.props.type&&this.renderCircle(),"Circle"===this.props.type&&r().createElement("div",{style:{flex:1,overflowY:"auto",paddingLeft:10,marginTop:10}},r().createElement("div",null,r().createElement(l.J$,null,r().createElement(O.Z,{msgId:"annotations.editor.center"})))),r().createElement("div",{className:"coordinates-row-container coordinates-row-type-".concat(p)},this.props.components.map((function(t,i){return r().createElement(r().Fragment,null,e.props.showLengthAndBearingLabel&&r().createElement("div",{className:"label-texts"},r().createElement("span",null,e.renderLabelTexts(i,{textLabels:n,featurePropValue:o}))),r().createElement(j.Z,{format:e.props.format,aeronauticalOptions:e.props.aeronauticalOptions,sortId:i,key:i+" key",enableHeightField:e.props.enableHeightField,disabled:e.props.properties.disabled&&(0,E.Tl)(t),renderer:e.props.renderer,isDraggable:e.props.isDraggable,isDraggableEnabled:e.props.isDraggable&&e[a[p].validation]()&&!e.props.properties.disabled,showDraggable:e.props.isDraggable&&!("Point"===e.props.type||"Text"===e.props.type||"Circle"===e.props.type),formatVisible:!1,removeVisible:a[p].remove,removeEnabled:e[a[p].validation](e.props.components,a[p].remove,i),onSubmit:e.change,onMouseEnter:function(t){(e.props.isMouseEnterEnabled||"LineString"===e.props.type||"Polygon"===e.props.type||"MultiPoint"===e.props.type)&&e.props.onHighlightPoint(t)},onMouseLeave:function(){(e.props.isMouseLeaveEnabled||"LineString"===e.props.type||"Polygon"===e.props.type||"MultiPoint"===e.props.type)&&e.props.onHighlightPoint(null)},onSort:function(t,n){var o=e.props.components.reduce((function(o,r,i){return t===i?[].concat(k(o),t>n?[H({},r),c()(e.props.components.filter((function(e,t){return t===n})))]:[c()(e.props.components.filter((function(e,t){return t===n}))),H({},r)]):n===i?k(o):[].concat(k(o),[H({},r)])}),[]).filter((function(e){return e}));e.isValid(o)?e.props.onChange(o):e.props.properties.isValidFeature&&e.props.onSetInvalidSelected("coords",e.props.components.map(E.bh))},idx:i,component:t,onRemove:function(){var t=e.props.components.filter((function(e,t){return t!==i}));e.isValid(t)?(e.props.isMouseEnterEnabled||"LineString"===e.props.type&&i!==t.length||"Polygon"===e.props.type?e.props.onHighlightPoint(t[i]):e.props.onHighlightPoint(null),e.props.onChange(t)):e.props.properties.isValidFeature&&e.props.onSetInvalidSelected("coords",e.props.components.map(E.bh))},onValidateFeature:e.props.onValidateFeature}))}))),(!this.props.components||0===this.props.components.length)&&r().createElement("div",{className:"text-center",style:{padding:15,paddingBottom:30}},r().createElement("i",null,r().createElement(O.Z,{msgId:"annotations.editor.addByClick"}))))}}],o&&Z(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,o}(r().Component);A(Y,"propTypes",{components:a().array,measureOptions:a().object,onSetInvalidSelected:a().func,onChange:a().func,onChangeRadius:a().func,onHighlightPoint:a().func,onChangeText:a().func,onChangeFormat:a().func,onChangeCurrentFeature:a().func,format:a().string,aeronauticalOptions:a().object,componentsValidation:a().object,transitionProps:a().object,properties:a().object,mapProjection:a().string,features:a().array,currentFeature:a().number,showFeatureSelector:a().bool,type:a().string,isDraggable:a().bool,isMouseEnterEnabled:a().bool,isMouseLeaveEnabled:a().bool,showLengthAndBearingLabel:a().bool,renderer:a().string,style:a().object,onValidateFeature:a().func,enableHeightField:a().bool}),A(Y,"contextTypes",{messages:a().object}),A(Y,"defaultProps",{components:[],measureOptions:{},onChange:function(){},onChangeRadius:function(){},onHighlightPoint:function(){},onChangeFormat:function(){},onChangeText:function(){},onChangeCurrentFeature:function(){},onSetInvalidSelected:function(){},onValidateFeature:function(){},componentsValidation:{Bearing:{min:2,max:2,add:!0,remove:!0,validation:"validateCoordinates",notValid:"annotations.editor.notValidPolyline"},Polygon:{min:3,add:!0,remove:!0,validation:"validateCoordinates",notValid:"annotations.editor.notValidPolyline"},LineString:{min:2,add:!0,remove:!0,validation:"validateCoordinates",notValid:"annotations.editor.notValidPolyline"},MultiPoint:{min:2,add:!0,remove:!0,validation:"validateCoordinates",notValid:"annotations.editor.notValidPolyline"},Point:{min:1,max:1,add:!0,remove:!1,validation:"validateCoordinates",notValid:"annotations.editor.notValidMarker"},Circle:{min:1,max:1,add:!0,remove:!1,validation:"validateCircle",notValid:"annotations.editor.notValidCircle"},Text:{min:1,max:1,add:!0,remove:!1,validation:"validateText",notValid:"annotations.editor.notValidText"}},transitionProps:{transitionName:"switch-panel-transition",transitionEnterTimeout:300,transitionLeaveTimeout:300},features:[],isDraggable:!0,isMouseEnterEnabled:!1,isMouseLeaveEnabled:!1,properties:{},type:"Point",style:{display:"flex",flexDirection:"column",flex:1},enableHeightField:!1});const J=(0,P.Z)(Y)},245567:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(124852),r=n.n(o),i=n(867076);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}var l=["onSort","isDraggable","items","containerId"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)({}).hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s.apply(null,arguments)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return(t=function(e){var t=function(e){if("object"!=a(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==a(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const d=(0,i.compose)((0,i.branch)((function(e){var t=e.isDraggable;return void 0===t||t}),(function(e){return function(t){var n=t.onSort,o=t.isDraggable,i=t.items,a=void 0===i?[]:i,p=t.containerId,c=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(t.includes(o))continue;n[o]=e[o]}return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(t,l),d=a.map((function(e,t){return u(u({},e),{},{onSort:n,isDraggable:o,sortId:t,key:e.id||t,containerId:p})}));return r().createElement(e,s({},u(u({},c),{},{isDraggable:o}),{items:d}))}})))},902054:(e,t,n)=>{n.d(t,{sB:()=>a,Yu:()=>l,F3:()=>s,cM:()=>p,Gu:()=>u,qs:()=>c});var o=n(22222),r=n(675110),i=n(900012),a=(0,o.P1)([r.l2],(function(e){return e.find(i.cO)})),l=(0,o.P1)([r.l2],(function(e){return e.filter(i.cO)})),s=function(e){var t=(0,r.Iz)(e);return t&&(0,i.cO)(t)?t:null},p=function(e){var t;return null==e||null===(t=e.annotations)||void 0===t?void 0:t.editing},u=function(e){var t;return null==e||null===(t=e.annotations)||void 0===t?void 0:t.session},c=function(e){var t;return null==e||null===(t=e.annotations)||void 0===t?void 0:t.featureId}}}]);