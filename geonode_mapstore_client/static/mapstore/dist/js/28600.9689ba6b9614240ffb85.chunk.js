(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[28600],{725288:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var r=n(124852),o=n.n(r),i=n(675263),a=n.n(i),c=n(480681),l=n(737275);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,v(r.key),r)}}function f(e,t,n){return t=d(t),function(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}(e,p()?Reflect.construct(t,n||[],d(e).constructor):t.apply(e,n))}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function b(e,t,n){return(t=v(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){var t=function(e,t){if("object"!=u(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==u(t)?t:String(t)}var h=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return b(m(e=f(this,t,[].concat(r))),"getContainerNode",(function(t){return t?document.body:e.parentNode||document.querySelector("."+(l.ZP.getConfigProp("themePrefix")||"ms2")+" > div")||document.body})),e}var n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this,t=this.getContainerNode(this.props.useBody);return o().createElement("div",{ref:function(t){e.parentNode=t&&t.parentNode},className:this.props.className,style:this.props.style},o().createElement(c.OverlayTrigger,{ref:function(t){e.trigger=t},trigger:["click"],container:t,placement:this.props.placement,rootClose:!0,overlay:o().createElement(c.Popover,{id:this.props.id,title:this.props.title,className:this.props.popoverClassName},this.props.content)},this.props.children))}}])&&s(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}(o().Component);b(h,"propTypes",{id:a().string,style:a().object,className:a().string,popoverClassName:a().string,placement:a().string,title:a().node,content:a().node,useBody:a().bool}),b(h,"defaultProps",{id:"",useBody:!1});const g=h},965539:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(124852),o=n.n(r);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){var r,o,a,c;r=e,o=t,a=n[t],c=function(e,t){if("object"!=i(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==i(c)?c:String(c))in r?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const l=function(e){var t=e.id,n=e.children,r=e.header,i=e.footer,a=e.columns,l=e.height,u=e.style,s=void 0===u?{}:u,f=e.className,p=e.bodyClassName,d=void 0===p?"ms2-border-layout-body":p;return o().createElement("div",{id:t,className:f,style:c({display:"flex",flexDirection:"column",width:"100%",height:"100%",overflow:"hidden"},s)},r,o().createElement("div",{className:d,style:{display:"flex",flex:1,overflowY:"auto"}},o().createElement("main",{className:"ms2-border-layout-content",style:{flex:1,overflowX:"hidden"}},l?o().createElement("div",{style:{height:l}},n):n),l?o().createElement("div",{style:{height:l}},a):a),i)}},501262:(e,t,n)=>{"use strict";n.d(t,{Z:()=>P});var r=n(727418),o=n.n(r),i=n(675263),a=n.n(i),c=n(124852),l=n.n(c),u=n(180307),s=n.n(u),f=n(480681),p=n(38560),d=n(805346),m=n(807472);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,E(r.key),r)}}function v(e,t,n){return t=g(t),function(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return w(e)}(e,h()?Reflect.construct(t,n||[],g(e).constructor):t.apply(e,n))}function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}function j(e,t,n){return(t=E(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e){var t=function(e,t){if("object"!=y(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==y(t)?t:String(t)}var S=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return j(w(e=v(this,t,[].concat(r))),"setConfirmRef",(function(t){return e.confirm=t,e.confirm})),e}var n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.props.focusConfirm&&s().findDOMNode(this.confirm).focus()}},{key:"render",value:function(){return l().createElement(m.Z,{draggable:this.props.draggable,onClickOut:this.props.onClose,id:"confirm-dialog",modal:this.props.modal,style:o()({},this.props.style,{display:this.props.show?"block":"none"})},l().createElement("span",{role:"header"},l().createElement("span",{className:"user-panel-title"},this.props.title),l().createElement("button",{onClick:this.props.onClose,className:"login-panel-close close"},this.props.closeGlyph?l().createElement(f.Glyphicon,{glyph:this.props.closeGlyph}):l().createElement("span",null,"×"))),l().createElement("div",{role:"body"},this.props.children),l().createElement("div",{role:"footer"},l().createElement(f.ButtonGroup,null,l().createElement(p.Z,{ref:this.setConfirmRef,onClick:this.props.onConfirm,disabled:this.props.confirmButtonDisabled,bsStyle:this.props.confirmButtonBSStyle},this.props.confirmButtonContent),l().createElement(p.Z,{onClick:this.props.onClose},this.props.closeText))))}}])&&b(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}(l().Component);j(S,"propTypes",{show:a().bool,draggable:a().bool,onClose:a().func,onConfirm:a().func,onSave:a().func,modal:a().bool,closeGlyph:a().string,style:a().object,buttonSize:a().string,inputStyle:a().object,title:a().node,confirmButtonContent:a().node,confirmButtonDisabled:a().bool,closeText:a().node,confirmButtonBSStyle:a().string,focusConfirm:a().bool}),j(S,"defaultProps",{onClose:function(){},onChange:function(){},modal:!0,title:l().createElement(d.Z,{msgId:"confirmTitle"}),closeGlyph:"",confirmButtonBSStyle:"danger",confirmButtonDisabled:!1,confirmButtonContent:l().createElement(d.Z,{msgId:"confirm"})||"Confirm",closeText:l().createElement(d.Z,{msgId:"close"}),includeCloseButton:!0,focusConfirm:!1});const P=S},399534:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(461365),o=n(356936);const i=(0,r.Z)(o.h_)},314068:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(124852),o=n.n(r),i=n(855033),a=n.n(i),c=n(532425),l=n(483139),u=n(80717);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function f(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||p(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const m=(0,r.forwardRef)((function(e,t){var n,i,d=e.className,m=void 0===d?"ms-thumbnail":d,y=e.label,b=e.loading,v=e.message,h=e.error,g=e.thumbnail,w=e.removeGlyph,O=void 0===w?"trash":w,j=e.removeTooltipId,E=void 0===j?"removeThumbnail":j,S=e.style,P=void 0===S?{}:S,C=e.maxFileSize,N=void 0===C?5e5:C,k=e.checkOriginalFileSize,T=void 0!==k&&k,B=e.supportedImageTypes,_=void 0===B?["image/png","image/jpeg","image/jpg"]:B,x=e.thumbnailOptions,z=e.dropZoneProps,A=void 0===z?{className:"ms-thumbnail-dropzone",activeClassName:"ms-thumbnail-dropzone-active",rejectClassName:"ms-thumbnail-dropzone-reject"}:z,Z=e.onUpdate,D=void 0===Z?function(){}:Z,I=e.onError,R=void 0===I?function(){}:I,G=e.onRemove,L=e.toolbarButtons,q=(0,r.useRef)(),U=(n=(0,r.useState)(),i=2,function(e){if(Array.isArray(e))return e}(n)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,c=[],l=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(n,i)||p(n,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),F=U[0],M=U[1];if((0,r.useEffect)((function(){return q.current=!0,function(){q.current=!1}}),[]),b||F)return o().createElement("div",{className:"dropzone-thumbnail-container".concat(m?" ".concat(m):""," ms-loading")},o().createElement(c.Z,{size:70}));var X=o().createElement(u.Z,{btnDefaultProps:{className:"square-button-md no-border"},buttons:L||[{glyph:O,visible:!(!G||!g),tooltipId:E,onClick:function(e){var t;null==e||null===(t=e.stopPropagation)||void 0===t||t.call(e),null==G||G()}}]});return o().createElement("div",{className:"dropzone-thumbnail-container".concat(m?" ".concat(m):""),style:P},y,o().createElement(a(),s({},A,{multiple:!1,onDrop:function(e){var t,n,r=null==e||null===(t=e[0])||void 0===t?void 0:t.type,o=null==e||null===(n=e[0])||void 0===n?void 0:n.size,i=-1!==_.indexOf(r);return T&&o>=N?R(["SIZE"],e):(M(!0),function(e,t){return new Promise((function(n){var r=e;if(null!=r&&r[0]){var o=r[0],i=new FileReader;return i.onload=function(e){return n(t?(0,l.Xq)(e.target.result,t).then((function(e){return{data:e,size:e.length}})):{data:e.target.result,size:o.size})},i.readAsDataURL(o)}return n({data:null})}))}(e,x).then((function(t){var n=t.data,r=t.size;return q.current?(M(!1),i&&n&&r<N?D(n,e):R([].concat(f(i?[]:["FORMAT"]),f(n&&r>=N?["SIZE"]:[])),e)):null})).catch((function(e){return q.current?(M(!1),R(e)):null})))}}),g?o().createElement("div",{style:{position:"relative",width:"100%",height:"100%"}},o().createElement("div",{ref:t,style:{position:"relative",width:"100%",height:"100%",backgroundImage:"url(".concat(g,")"),backgroundSize:null!=x&&x.contain?"contain":"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}),o().createElement("div",{className:"dropzone-content-image-added"},v),X):o().createElement("div",{className:"dropzone-content-image"},v,X,h&&o().createElement("div",{className:"dropzone-errors"},h))))}))},483139:(e,t,n)=>{"use strict";n.d(t,{Xq:()=>r,v9:()=>o});var r=function(e,t){return new Promise((function(n,r){var o=t||{},i=o.width,a=void 0===i?64:i,c=o.height,l=void 0===c?64:c,u=o.contain,s=o.type,f=void 0===s?"image/jpeg":s,p=o.quality,d=void 0===p?.5:p,m=new Image;m.crossOrigin="anonymous",m.onload=function(){var e=m.naturalWidth/m.naturalHeight,t=a,r=l,o=a/l,i=document.createElement("canvas");i.setAttribute("width",a),i.setAttribute("height",l),i.style.width=a+"px",i.style.height=l+"px";var c=i.getContext("2d"),s=!u&&e<o||u&&e>o?[t,t/e]:[r*e,r];c.save(),c.translate(t/2,r/2),c.drawImage(m,-s[0]/2,-s[1]/2,s[0],s[1]),c.restore();var p=i.toDataURL(f,d);n(p)},m.onerror=function(e){r(e)},m.src=e}))},o=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0,o=null===(e=t.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=/))||void 0===e?void 0:e[1];return o?new Promise((function(e){return e("http://img.youtube.com/vi/".concat(o,"/sddefault.jpg"))})):t.match(/\.(mp4|og[gv]|webm|mov|m4v)($|\?)/i)?function(e,t){return new Promise((function(t,n){var r={},o=r.type,i=void 0===o?"image/jpeg":o,a=r.quality,c=void 0===a?.5:a,l=document.createElement("video");l.crossOrigin="anonymous";var u=document.createElement("source"),s=document.createElement("canvas");l.addEventListener("loadedmetadata",(function(){var e=l.videoWidth,t=l.videoHeight;s.setAttribute("width",e),s.setAttribute("height",t),s.style.width=e+"px",s.style.height=t+"px"}),!0),l.addEventListener("loadeddata",(function(){l.currentTime=1}),!0),l.addEventListener("seeked",(function(){s.getContext("2d").drawImage(l,0,0);try{var e=s.toDataURL(i,c);t(e)}catch(e){n(e)}}),!0),l.addEventListener("error",(function(e){n(e)}),!0),l.appendChild(u),l.setAttribute("src",e)}))}(t).then((function(e){return r(e,n)})):new Promise((function(e,t){return t("Cannot create a thumbnail from the provided source")}))}}}]);