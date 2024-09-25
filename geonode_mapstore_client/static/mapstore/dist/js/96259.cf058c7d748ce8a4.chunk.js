"use strict";(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[96259],{98129:(e,t,n)=>{var i=n(60690);function o(){var e={},t=0,n=0,i=0;return{add:function(o,r){r||(r=o,o=0),o>n?n=o:o<i&&(i=o),e[o]||(e[o]=[]),e[o].push(r),t++},process:function(){for(var t=i;t<=n;t++)for(var o=e[t],r=0;r<o.length;r++)(0,o[r])()},size:function(){return t}}}e.exports=function(e){var t=(e=e||{}).reporter,n=i.getOption(e,"async",!0),r=i.getOption(e,"auto",!0);r&&!n&&(t&&t.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."),n=!0);var a,l=o(),s=!1;function c(){for(s=!0;l.size();){var e=l;l=o(),e.process()}s=!1}function d(){a=setTimeout(c,0)}return{add:function(e,t){!s&&r&&n&&0===l.size()&&d(),l.add(e,t)},force:function(e){s||(void 0===e&&(e=n),a&&(clearTimeout(a),a=null),e?d():c())}}}},60690:e=>{(e.exports={}).getOption=function(e,t,n){var i=e[t];return null==i&&void 0!==n?n:i}},602268:e=>{var t=e.exports={};t.isIE=function(e){return!(-1===(t=navigator.userAgent.toLowerCase()).indexOf("msie")&&-1===t.indexOf("trident")&&-1===t.indexOf(" edge/")||e&&e!==function(){var e=3,t=document.createElement("div"),n=t.getElementsByTagName("i");do{t.innerHTML="\x3c!--[if gt IE "+ ++e+"]><i></i><![endif]--\x3e"}while(n[0]);return e>4?e:void 0}());var t},t.isLegacyOpera=function(){return!!window.opera}},917900:e=>{(e.exports={}).forEach=function(e,t){for(var n=0;n<e.length;n++){var i=t(e[n]);if(i)return i}}},158229:(e,t,n)=>{var i=n(602268);e.exports=function(e){var t=(e=e||{}).reporter,n=e.batchProcessor,o=e.stateHandler.getState;if(!t)throw new Error("Missing required dependency: reporter.");function r(t){var n=e.important?" !important; ":"; ";return(t.join(n)+n).trim()}function a(e){return o(e).object}return{makeDetectable:function(e,a,l){l||(l=a,a=e,e=null),(e=e||{}).debug,i.isIE(8)?l(a):function(a,l){var s=r(["display: block","position: absolute","top: 0","left: 0","width: 100%","height: 100%","border: none","padding: 0","margin: 0","opacity: 0","z-index: -1000","pointer-events: none"]),c=!1,d=window.getComputedStyle(a),u=a.offsetWidth,f=a.offsetHeight;function h(){function n(){if("static"===d.position){a.style.setProperty("position","relative",e.important?"important":"");var n=function(t,n,i,o){var r=i[o];"auto"!==r&&"0"!==function(e){return e.replace(/[^-\d\.]/g,"")}(r)&&(t.warn("An element that is positioned static has style."+o+"="+r+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+o+" will be set to 0. Element: ",n),n.style.setProperty(o,"0",e.important?"important":""))};n(t,a,d,"top"),n(t,a,d,"right"),n(t,a,d,"bottom"),n(t,a,d,"left")}}""!==d.position&&(n(),c=!0);var r=document.createElement("object");r.style.cssText=s,r.tabIndex=-1,r.type="text/html",r.setAttribute("aria-hidden","true"),r.onload=function(){c||n(),function e(t,n){if(!t.contentDocument){var i=o(t);return i.checkForObjectDocumentTimeoutId&&window.clearTimeout(i.checkForObjectDocumentTimeoutId),void(i.checkForObjectDocumentTimeoutId=setTimeout((function(){i.checkForObjectDocumentTimeoutId=0,e(t,n)}),100))}n(t.contentDocument)}(this,(function(e){l(a)}))},i.isIE()||(r.data="about:blank"),o(a)&&(a.appendChild(r),o(a).object=r,i.isIE()&&(r.data="about:blank"))}o(a).startSize={width:u,height:f},n?n.add(h):h()}(a,l)},addListener:function(e,t){function n(){t(e)}if(i.isIE(8))o(e).object={proxy:n},e.attachEvent("onresize",n);else{var r=a(e);if(!r)throw new Error("Element is not detectable by this strategy.");r.contentDocument.defaultView.addEventListener("resize",n)}},uninstall:function(e){if(o(e)){var t=a(e);t&&(i.isIE(8)?e.detachEvent("onresize",t.proxy):e.removeChild(t),o(e).checkForObjectDocumentTimeoutId&&window.clearTimeout(o(e).checkForObjectDocumentTimeoutId),delete o(e).object)}}}}},860787:(e,t,n)=>{var i=n(917900).forEach;e.exports=function(e){var t=(e=e||{}).reporter,n=e.batchProcessor,o=e.stateHandler.getState,r=(e.stateHandler.hasState,e.idHandler);if(!n)throw new Error("Missing required dependency: batchProcessor");if(!t)throw new Error("Missing required dependency: reporter.");var a=function(){var e=document.createElement("div");e.style.cssText=c(["position: absolute","width: 1000px","height: 1000px","visibility: hidden","margin: 0","padding: 0"]);var t=document.createElement("div");t.style.cssText=c(["position: absolute","width: 500px","height: 500px","overflow: scroll","visibility: none","top: -1500px","left: -1500px","visibility: hidden","margin: 0","padding: 0"]),t.appendChild(e),document.body.insertBefore(t,document.body.firstChild);var n=500-t.clientWidth,i=500-t.clientHeight;return document.body.removeChild(t),{width:n,height:i}}(),l="erd_scroll_detection_container";function s(e){!function(e,t,n){if(!e.getElementById(t)){var i=n+"_animation",o=n+"_animation_active",r="/* Created by the element-resize-detector library. */\n";r+="."+n+" > div::-webkit-scrollbar { "+c(["display: none"])+" }\n\n",r+="."+o+" { "+c(["-webkit-animation-duration: 0.1s","animation-duration: 0.1s","-webkit-animation-name: "+i,"animation-name: "+i])+" }\n",r+="@-webkit-keyframes "+i+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n",function(n,i){i=i||function(t){e.head.appendChild(t)};var o=e.createElement("style");o.innerHTML=n,o.id=t,i(o)}(r+="@keyframes "+i+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }")}}(e,"erd_scroll_detection_scrollbar_style",l)}function c(t){var n=e.important?" !important; ":"; ";return(t.join(n)+n).trim()}function d(e,n,i){if(e.addEventListener)e.addEventListener(n,i);else{if(!e.attachEvent)return t.error("[scroll] Don't know how to add event listeners.");e.attachEvent("on"+n,i)}}function u(e,n,i){if(e.removeEventListener)e.removeEventListener(n,i);else{if(!e.detachEvent)return t.error("[scroll] Don't know how to remove event listeners.");e.detachEvent("on"+n,i)}}function f(e){return o(e).container.childNodes[0].childNodes[0].childNodes[0]}function h(e){return o(e).container.childNodes[0].childNodes[0].childNodes[1]}return s(window.document),{makeDetectable:function(e,s,u){function p(){if(e.debug){var n=Array.prototype.slice.call(arguments);if(n.unshift(r.get(s),"Scroll: "),t.log.apply)t.log.apply(null,n);else for(var i=0;i<n.length;i++)t.log(n[i])}}function m(e){var t=o(e).container.childNodes[0],n=window.getComputedStyle(t);return!n.width||-1===n.width.indexOf("px")}function g(){var e=window.getComputedStyle(s),t={};return t.position=e.position,t.width=s.offsetWidth,t.height=s.offsetHeight,t.top=e.top,t.right=e.right,t.bottom=e.bottom,t.left=e.left,t.widthCSS=e.width,t.heightCSS=e.height,t}function v(){if(p("storeStyle invoked."),o(s)){var e=g();o(s).style=e}else p("Aborting because element has been uninstalled")}function b(e,t,n){o(e).lastWidth=t,o(e).lastHeight=n}function y(){return 2*a.width+1}function w(){return 2*a.height+1}function x(e){return e+10+y()}function E(e){return e+10+w()}function S(e,t,n){var i=f(e),o=h(e),r=x(t),a=E(n),l=function(e){return 2*e+y()}(t),s=function(e){return 2*e+w()}(n);i.scrollLeft=r,i.scrollTop=a,o.scrollLeft=l,o.scrollTop=s}function k(){var e=o(s).container;if(!e){(e=document.createElement("div")).className=l,e.style.cssText=c(["visibility: hidden","display: inline","width: 0px","height: 0px","z-index: -1","overflow: hidden","margin: 0","padding: 0"]),o(s).container=e,function(e){e.className+=" "+l+"_animation_active"}(e),s.appendChild(e);var t=function(){o(s).onRendered&&o(s).onRendered()};d(e,"animationstart",t),o(s).onAnimationStart=t}return e}function z(){if(p("Injecting elements"),o(s)){!function(){var n=o(s).style;if("static"===n.position){s.style.setProperty("position","relative",e.important?"important":"");var i=function(e,t,n,i){var o=n[i];"auto"!==o&&"0"!==function(e){return e.replace(/[^-\d\.]/g,"")}(o)&&(e.warn("An element that is positioned static has style."+i+"="+o+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+i+" will be set to 0. Element: ",t),t.style[i]=0)};i(t,s,n,"top"),i(t,s,n,"right"),i(t,s,n,"bottom"),i(t,s,n,"left")}}();var n=o(s).container;n||(n=k());var i,r,u,f,h=a.width,m=a.height,g=c(["position: absolute","flex: none","overflow: hidden","z-index: -1","visibility: hidden","width: 100%","height: 100%","left: 0px","top: 0px"]),v=c(["position: absolute","flex: none","overflow: hidden","z-index: -1","visibility: hidden"].concat(["left: "+(i=(i=-(1+h))?i+"px":"0"),"top: "+(r=(r=-(1+m))?r+"px":"0"),"right: "+(f=(f=-h)?f+"px":"0"),"bottom: "+(u=(u=-m)?u+"px":"0")])),b=c(["position: absolute","flex: none","overflow: scroll","z-index: -1","visibility: hidden","width: 100%","height: 100%"]),y=c(["position: absolute","flex: none","overflow: scroll","z-index: -1","visibility: hidden","width: 100%","height: 100%"]),w=c(["position: absolute","left: 0","top: 0"]),x=c(["position: absolute","width: 200%","height: 200%"]),E=document.createElement("div"),S=document.createElement("div"),z=document.createElement("div"),D=document.createElement("div"),A=document.createElement("div"),O=document.createElement("div");E.dir="ltr",E.style.cssText=g,E.className=l,S.className=l,S.style.cssText=v,z.style.cssText=b,D.style.cssText=w,A.style.cssText=y,O.style.cssText=x,z.appendChild(D),A.appendChild(O),S.appendChild(z),S.appendChild(A),E.appendChild(S),n.appendChild(E),d(z,"scroll",T),d(A,"scroll",C),o(s).onExpandScroll=T,o(s).onShrinkScroll=C}else p("Aborting because element has been uninstalled");function T(){var e=o(s);e&&e.onExpand?e.onExpand():p("Aborting expand scroll handler: element has been uninstalled")}function C(){var e=o(s);e&&e.onShrink?e.onShrink():p("Aborting shrink scroll handler: element has been uninstalled")}}function D(){function a(t,n,i){var o=function(e){return f(e).childNodes[0]}(t),r=x(n),a=E(i);o.style.setProperty("width",r+"px",e.important?"important":""),o.style.setProperty("height",a+"px",e.important?"important":"")}function l(i){var l=s.offsetWidth,d=s.offsetHeight,u=l!==o(s).lastWidth||d!==o(s).lastHeight;p("Storing current size",l,d),b(s,l,d),n.add(0,(function(){if(u)if(o(s))if(c()){if(e.debug){var n=s.offsetWidth,i=s.offsetHeight;n===l&&i===d||t.warn(r.get(s),"Scroll: Size changed before updating detector elements.")}a(s,l,d)}else p("Aborting because element container has not been initialized");else p("Aborting because element has been uninstalled")})),n.add(1,(function(){o(s)?c()?S(s,l,d):p("Aborting because element container has not been initialized"):p("Aborting because element has been uninstalled")})),u&&i&&n.add(2,(function(){o(s)?c()?i():p("Aborting because element container has not been initialized"):p("Aborting because element has been uninstalled")}))}function c(){return!!o(s).container}function d(){p("notifyListenersIfNeeded invoked");var e=o(s);return void 0===o(s).lastNotifiedWidth&&e.lastWidth===e.startSize.width&&e.lastHeight===e.startSize.height?p("Not notifying: Size is the same as the start size, and there has been no notification yet."):e.lastWidth===e.lastNotifiedWidth&&e.lastHeight===e.lastNotifiedHeight?p("Not notifying: Size already notified"):(p("Current size not notified, notifying..."),e.lastNotifiedWidth=e.lastWidth,e.lastNotifiedHeight=e.lastHeight,void i(o(s).listeners,(function(e){e(s)})))}function u(){p("Scroll detected."),m(s)?p("Scroll event fired while unrendered. Ignoring..."):l(d)}if(p("registerListenersAndPositionElements invoked."),o(s)){o(s).onRendered=function(){if(p("startanimation triggered."),m(s))p("Ignoring since element is still unrendered...");else{p("Element rendered.");var e=f(s),t=h(s);0!==e.scrollLeft&&0!==e.scrollTop&&0!==t.scrollLeft&&0!==t.scrollTop||(p("Scrollbars out of sync. Updating detector elements..."),l(d))}},o(s).onExpand=u,o(s).onShrink=u;var g=o(s).style;a(s,g.width,g.height)}else p("Aborting because element has been uninstalled")}function A(){if(p("finalizeDomMutation invoked."),o(s)){var e=o(s).style;b(s,e.width,e.height),S(s,e.width,e.height)}else p("Aborting because element has been uninstalled")}function O(){u(s)}function T(){var e;p("Installing..."),o(s).listeners=[],e=g(),o(s).startSize={width:e.width,height:e.height},p("Element start size",o(s).startSize),n.add(0,v),n.add(1,z),n.add(2,D),n.add(3,A),n.add(4,O)}u||(u=s,s=e,e=null),e=e||{},p("Making detectable..."),function(e){return!function(e){var t=e.getRootNode&&e.getRootNode().contains(e);return e===e.ownerDocument.body||e.ownerDocument.body.contains(e)||t}(e)||null===window.getComputedStyle(e)}(s)?(p("Element is detached"),k(),p("Waiting until element is attached..."),o(s).onRendered=function(){p("Element is now attached"),T()}):T()},addListener:function(e,t){if(!o(e).listeners.push)throw new Error("Cannot add listener to an element that is not detectable.");o(e).listeners.push(t)},uninstall:function(e){var t=o(e);t&&(t.onExpandScroll&&u(f(e),"scroll",t.onExpandScroll),t.onShrinkScroll&&u(h(e),"scroll",t.onShrinkScroll),t.onAnimationStart&&u(t.container,"animationstart",t.onAnimationStart),t.container&&e.removeChild(t.container))},initDocument:s}}},263844:(e,t,n)=>{var i=n(917900).forEach,o=n(368452),r=n(396199),a=n(575805),l=n(279799),s=n(271724),c=n(602268),d=n(98129),u=n(721931),f=n(158229),h=n(860787);function p(e){return Array.isArray(e)||void 0!==e.length}function m(e){if(Array.isArray(e))return e;var t=[];return i(e,(function(e){t.push(e)})),t}function g(e){return e&&1===e.nodeType}function v(e,t,n){var i=e[t];return null==i&&void 0!==n?n:i}e.exports=function(e){var t;if((e=e||{}).idHandler)t={get:function(t){return e.idHandler.get(t,!0)},set:e.idHandler.set};else{var n=a(),b=l({idGenerator:n,stateHandler:u});t=b}var y=e.reporter;y||(y=s(!1===y));var w=v(e,"batchProcessor",d({reporter:y})),x={};x.callOnAdd=!!v(e,"callOnAdd",!0),x.debug=!!v(e,"debug",!1);var E,S=r(t),k=o({stateHandler:u}),z=v(e,"strategy","object"),D=v(e,"important",!1),A={reporter:y,batchProcessor:w,stateHandler:u,idHandler:t,important:D};if("scroll"===z&&(c.isLegacyOpera()?(y.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."),z="object"):c.isIE(9)&&(y.warn("Scroll strategy is not supported on IE9. Changing to object strategy."),z="object")),"scroll"===z)E=h(A);else{if("object"!==z)throw new Error("Invalid strategy name: "+z);E=f(A)}var O={};return{listenTo:function(e,n,o){function r(e){var t=S.get(e);i(t,(function(t){t(e)}))}function a(e,t,n){S.add(t,n),e&&n(t)}if(o||(o=n,n=e,e={}),!n)throw new Error("At least one element required.");if(!o)throw new Error("Listener required.");if(g(n))n=[n];else{if(!p(n))return y.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");n=m(n)}var l=0,s=v(e,"callOnAdd",x.callOnAdd),c=v(e,"onReady",(function(){})),d=v(e,"debug",x.debug);i(n,(function(e){u.getState(e)||(u.initState(e),t.set(e));var f=t.get(e);if(d&&y.log("Attaching listener to element",f,e),!k.isDetectable(e))return d&&y.log(f,"Not detectable."),k.isBusy(e)?(d&&y.log(f,"System busy making it detectable"),a(s,e,o),O[f]=O[f]||[],void O[f].push((function(){++l===n.length&&c()}))):(d&&y.log(f,"Making detectable..."),k.markBusy(e,!0),E.makeDetectable({debug:d,important:D},e,(function(e){if(d&&y.log(f,"onElementDetectable"),u.getState(e)){k.markAsDetectable(e),k.markBusy(e,!1),E.addListener(e,r),a(s,e,o);var t=u.getState(e);if(t&&t.startSize){var h=e.offsetWidth,p=e.offsetHeight;t.startSize.width===h&&t.startSize.height===p||r(e)}O[f]&&i(O[f],(function(e){e()}))}else d&&y.log(f,"Element uninstalled before being detectable.");delete O[f],++l===n.length&&c()})));d&&y.log(f,"Already detecable, adding listener."),a(s,e,o),l++})),l===n.length&&c()},removeListener:S.removeListener,removeAllListeners:S.removeAllListeners,uninstall:function(e){if(!e)return y.error("At least one element is required.");if(g(e))e=[e];else{if(!p(e))return y.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");e=m(e)}i(e,(function(e){S.removeAllListeners(e),E.uninstall(e),u.cleanState(e)}))},initDocument:function(e){E.initDocument&&E.initDocument(e)}}}},368452:e=>{e.exports=function(e){var t=e.stateHandler.getState;return{isDetectable:function(e){var n=t(e);return n&&!!n.isDetectable},markAsDetectable:function(e){t(e).isDetectable=!0},isBusy:function(e){return!!t(e).busy},markBusy:function(e,n){t(e).busy=!!n}}}},575805:e=>{e.exports=function(){var e=1;return{generate:function(){return e++}}}},279799:e=>{e.exports=function(e){var t=e.idGenerator,n=e.stateHandler.getState;return{get:function(e){var t=n(e);return t&&void 0!==t.id?t.id:null},set:function(e){var i=n(e);if(!i)throw new Error("setId required the element to have a resize detection state.");var o=t.generate();return i.id=o,o}}}},396199:e=>{e.exports=function(e){var t={};function n(n){var i=e.get(n);return void 0===i?[]:t[i]||[]}return{get:n,add:function(n,i){var o=e.get(n);t[o]||(t[o]=[]),t[o].push(i)},removeListener:function(e,t){for(var i=n(e),o=0,r=i.length;o<r;++o)if(i[o]===t){i.splice(o,1);break}},removeAllListeners:function(e){var t=n(e);t&&(t.length=0)}}}},271724:e=>{e.exports=function(e){function t(){}var n={log:t,warn:t,error:t};if(!e&&window.console){var i=function(e,t){e[t]=function(){var e=console[t];if(e.apply)e.apply(console,arguments);else for(var n=0;n<arguments.length;n++)e(arguments[n])}};i(n,"log"),i(n,"warn"),i(n,"error")}return n}},721931:e=>{var t="_erd";function n(e){return e[t]}e.exports={initState:function(e){return e[t]={},n(e)},getState:n,cleanState:function(e){delete e[t]}}},496259:(e,t,n)=>{var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(124852),a=u(r),l=u(n(45697)),s=u(n(180307)),c=u(n(263844)),d=u(n(441143));function u(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={initiated:!1},e.onResize=e.onResize.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,null,[{key:"getDomNodeDimensions",value:function(e){var t=e.getBoundingClientRect();return{top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.width,height:t.height}}}]),o(t,[{key:"componentDidMount",value:function(){this.parentNode=s.default.findDOMNode(this).parentNode,this.elementResizeDetector=(0,c.default)({strategy:"scroll",callOnAdd:!1}),this.elementResizeDetector.listenTo(this.parentNode,this.onResize),this.componentIsMounted=!0,this.onResize()}},{key:"componentWillUnmount",value:function(){this.componentIsMounted=!1,this.elementResizeDetector.uninstall(this.parentNode)}},{key:"onResize",value:function(){var e=t.getDomNodeDimensions(this.parentNode);this.componentIsMounted&&this.setState(i({initiated:!0},e))}},{key:"render",value:function(){if((0,d.default)(this.props.children,"Expected children to be one of function or React.Element"),!this.state.initiated)return a.default.createElement("div",null);if("function"==typeof this.props.children){var e=this.props.children(this.state);return e&&r.Children.only(e)}return r.Children.only(a.default.cloneElement(this.props.children,this.state))}}]),t}(r.Component);f.propTypes={children:l.default.oneOfType([l.default.element,l.default.func]).isRequired},t.Z=f}}]);