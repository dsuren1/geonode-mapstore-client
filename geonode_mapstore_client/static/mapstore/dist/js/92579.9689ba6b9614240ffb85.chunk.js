(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[92579],{192579:(t,e,n)=>{"use strict";n.d(e,{gg:()=>L,Ln:()=>G,ID:()=>j,bT:()=>z,tQ:()=>D,Tr:()=>U,nl:()=>k,ZX:()=>W,lg:()=>B,w:()=>H,cy:()=>x,lt:()=>V,M1:()=>_,kn:()=>J,oH:()=>Y,Aq:()=>q,nq:()=>K,Ll:()=>Q,ln:()=>$,Un:()=>F,NC:()=>tt,t4:()=>et,NP:()=>nt,bm:()=>rt,_R:()=>ot,Km:()=>it,of:()=>ct,u0:()=>lt,eI:()=>at,Yh:()=>ut,c0:()=>st});var r=n(227361),o=n.n(r),i=n(630998),c=n.n(i),l=n(30084),a=n.n(l),u=n(701469),s=n.n(u),d=n(252628),f=n.n(d),p=n(763105),y=n.n(p),g=n(682492),m=n.n(g),v=n(747037),h=n.n(v),b=n(513218),E=n.n(b),A=n(264721),P=n.n(A),O=n(313880),I=n.n(O),T=n(455877),M=n.n(T);function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function R(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(Object(n),!0).forEach((function(e){var r,o,i,c;r=t,o=e,i=n[e],c=function(t,e){if("object"!=S(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==S(c)?c:String(c))in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function C(t){return function(t){if(Array.isArray(t))return N(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return N(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var L="EMPTY_CONTENT",G={CASCADE:"cascade"},j={TITLE:"title",PARAGRAPH:"paragraph",IMMERSIVE:"immersive",BANNER:"banner",CAROUSEL:"carousel"},z={TEXT:"text",MEDIA:"media",WEBPAGE:"webPage",COLUMN:"column"},D={MEDIA:"template-media",WEBPAGE:"template-web-page"},U={IMAGE:"image",MAP:"map",VIDEO:"video"},k={EDIT:"edit",VIEW:"view"},W={SHOW_SAVE:"save.show",SHOW_DELETE:"delete.show",LOADING:"loading"},B={StoryTypes:f()(G),SectionTypes:f()(j),MediaTypes:f()(U),Modes:f()(k)},H=function(t){var e=t.theme,n=void 0===e?{}:e,r=t.align,o=void 0===r?"center":r,i=t.size,c=void 0===i?"full":i,l=(null==n?void 0:n.value)||h()(n)&&n,a=l&&"custom"!==l&&h()(l)&&" ms-".concat(l)||"",u=" ms-align-".concat(o),s=c.split(",").map((function(t){return" ms-size-".concat(t)})).join("");return"".concat(a).concat(u).concat(s)},x=function(t){var e=t.theme,n=void 0===e?{}:e,r=t.storyTheme;if(""===n||""===(null==n?void 0:n.value))return E()(r)?r:{};var o=null==n?void 0:n.value,i=null==n?void 0:n[o];return E()(i)&&i||{}},V=function(t){return t.type===j.PARAGRAPH&&t&&s()(t.contents)&&t.contents.length&&s()(t.contents[0].contents)&&t.contents[0].contents.length&&t.contents[0].contents[0].type===z.MEDIA},_=function(t,e){var n=function(t){var e=t.split("?");return 2===e.length?e[0]:t}(t),r=document.getElementById(n);r&&r.scrollIntoView(e)},X={zoomControl:!0,mapInfoControl:!1,mapOptions:{scrollWheelZoom:!1,interactions:{mouseWheelZoom:!1,dragPan:!0}}},J=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return m()({},X,t)},Y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return m()({},t,e)},Z=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:RegExp(e,"i");return!e||n.test(t)},q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:RegExp(e,"i");return y()(t,(function(t){return Z(t.data&&(t.data.title||t.data.name),e,n)||Z(t.data&&t.data.description,e,n)}))},K=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(t){return t};switch(e){case j.TITLE:return{id:M()(),type:j.TITLE,title:n("geostory.builder.defaults.titleTitle"),cover:!1,contents:[{id:M()(),type:z.TEXT,html:"",size:"large",align:"center",theme:"",background:{fit:"cover",size:"full",align:"center"}}]};case j.BANNER:return{id:M()(),type:j.BANNER,title:n("geostory.builder.defaults.titleBanner"),cover:!1,contents:[{id:M()(),background:{fit:"cover",size:"full",align:"center"}}]};case j.PARAGRAPH:return{id:M()(),type:j.PARAGRAPH,title:n("geostory.builder.defaults.titleParagraph"),contents:[{id:M()(),type:z.COLUMN,size:"full",align:"center",contents:[{id:M()(),type:z.TEXT,html:""}]}]};case j.IMMERSIVE:return{id:M()(),type:j.IMMERSIVE,title:n("geostory.builder.defaults.titleImmersive"),contents:[t(z.COLUMN,n("geostory.builder.defaults.titleImmersiveContent"))]};case j.CAROUSEL:return{id:M()(),type:e,title:n("geostory.builder.defaults.titleGeocarousel"),template:e,background:{fit:"cover",size:"full",align:"center"},contents:[t(z.COLUMN,n("geostory.builder.defaults.titleGeocarouselContent"))]};case D.MEDIA:return{id:M()(),type:j.PARAGRAPH,title:n("geostory.builder.defaults.titleMedia"),contents:[{id:M()(),type:z.COLUMN,contents:[{id:M()(),type:z.MEDIA,size:"large",align:"center"}]}]};case D.WEBPAGE:return{id:M()(),type:j.PARAGRAPH,title:n("geostory.builder.defaults.titleWebPageSection"),contents:[{id:M()(),type:z.COLUMN,contents:[{id:M()(),type:z.WEBPAGE,size:"h-medium,v-medium",align:"center"}]}]};case z.COLUMN:return{id:M()(),type:z.COLUMN,align:"left",size:"small",theme:"",title:n,contents:[{id:M()(),type:z.TEXT,html:""}],background:{fit:"cover",size:"full",align:"center"}};case z.TEXT:return{id:M()(),type:z.TEXT,title:n("geostory.builder.defaults.titleText"),html:""};case z.IMAGE:return{id:M()(),type:e,title:n("geostory.builder.defaults.titleMedia"),size:"full",align:"center"};case z.WEBPAGE:return{id:M()(),type:e,title:n("geostory.builder.defaults.titleWebPage"),size:"h-full,v-medium",align:"center"};case z.MEDIA:return{id:M()(),type:e,title:n("geostory.builder.defaults.titleUnknown"),size:"large",align:"center"};default:return{id:M()(),type:e,title:n("geostory.builder.defaults.titleUnknown"),size:"full",align:"center"}}},Q=function(t,e){return a()(t).reduce((function(t,n){if(n&&0===n.indexOf("{")){var r=JSON.parse(n),i=o()(e,t),l=c()(i,r);return l>=0?[].concat(C(t),[l]):t}return[].concat(C(t),[n])}),[])},$=function(t,e){return a()(t).reduce((function(t,n){var r=t.path,i=t.flatPath;if(n&&0===n.indexOf("{")){var l=JSON.parse(n),a=o()(e,r),u=c()(a,l);if(u>=0){var s=a[u],d=s.id,f=s.type;return{path:[].concat(C(r),[u]),flatPath:[].concat(C(i),[{id:d,type:r[r.length-1],contentType:f}])}}return{path:r,flatPath:i}}return{path:[].concat(C(r),[n]),flatPath:i}}),{path:[],flatPath:[]})},F=function(t,e){return t.reduce((function(t,n){return P()(n.contents.map((function(t){return t.id})),e)?n.id:t}),null)},tt=function(t){return t.type===j.PARAGRAPH&&!1!==t.editURL&&t&&s()(t.contents)&&t.contents.length&&s()(t.contents[0].contents)&&t.contents[0].contents.length&&t.contents[0].contents[0].type===z.WEBPAGE&&!1!==t.contents[0].contents[0].editURL},et=function(t,e){if(e)switch(t){case"small":return.4*e;case"medium":return.6*e;case"large":return.8*e;default:return e}return 0},nt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;if(!e.includes(n))return null;var i=e.substring(e.indexOf(n)).split("/");return r&&n?i.length>1&&i[2]&&Number(i[0])===n?5===i.length?I()(t,"".concat(i[2],"/column/").concat(i[4]),"".concat(r)):I()(t,"".concat(i[2]),"".concat(r)):(e.includes("shared"),""!==i[1]?"".concat(t,"/section/").concat(r):"".concat(t,"section/").concat(r)):!r&&o&&h()(o)&&"EMPTY"!==o&&i.length>1?e.includes("shared")&&!i[2]?t:5===i.length?I()(t,"".concat(i[4]),"".concat(o)):"".concat(t,"/column/").concat(o):null},rt=function(t,e,n){var r={active:e,inactive:n,custom:{families:[],urls:[]}};return t.filter((function(t){return!!t.src})).forEach((function(t,e){r.custom.families[e]=t.family,r.custom.urls[e]=t.src})),r},ot=function(t){return t.map((function(t){return t.family}))},it=["inherit","Arial","Georgia","Impact","Tahoma","Times New Roman","Verdana"],ct=function(){return window.location.href.match("geostory-embedded")?"geostoryEmbedded":"geostory"},lt=function(t){var e=function(t){try{var e;return null===(e=JSON.parse(t))||void 0===e?void 0:e.id}catch(t){return null}},n=a()(t)||[];return{sectionId:e(null==n?void 0:n[1]),contentId:e(null==n?void 0:n[3]),innerContentId:e(null==n?void 0:n[5])}},at=function(){var t=arguments.length>1?arguments[1]:void 0;return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map((function(e){return t.sectionId===e.id?R(R({},e),{},{contents:(e.contents||[]).map((function(e){return R(R({},e),{},{hideContent:e.id!==t.showContentId})}))}):e}))};function ut(t){var e=t.id,n=t.contents,r=t.featureStyle;return R(R({visibility:!0,handleClickOnLayer:!0},t.layerOptions),{},{id:"geostory-vector-".concat(e),name:"geostory-vector-".concat(e),type:"vector",features:n.reduce((function(t,n,o){return[].concat(C(t),C(((null==n?void 0:n.features)||[]).map((function(t){return R(R({},t),{},{properties:R(R({},t.properties),{},{title:n.title,sectionId:e,contentId:n.id}),contentRefId:n.id},r&&{style:r({content:n,feature:t},o)})}))||[]))}),[]).reverse()})}var st=function(t,e,n,r,o){return R(R(R({},t),{},{iconText:"".concat(c()(e,(function(t){var e=t.id;return n.id===e}))+1)},o.style),{},{highlight:r===n.id})}}}]);