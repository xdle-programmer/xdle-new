!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";function i(e){var t=document.getElementsByClassName("logo")[0],n=parseInt(1e3*window.getComputedStyle(t).transitionDuration.split("s")[0]),i=document.getElementsByClassName("scroll-wrapper")[0],r=document.getElementsByClassName("header")[0],o=0+n+500;function a(e,t,n){setTimeout((function(){e.classList.add(t)}),n)}e||(n=0,o=0,t.style.transitionDuration="0s"),a(t,"logo--load",0),a(t,"logo--fixed",o),a(i,"scroll-wrapper--show",o),a(r,"header--show",o),this.getDuration=function(){return o+n}}n.r(t),n.d(t,"logoLoad",(function(){return i}))},function(e,t,n){"use strict";function i(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o,a=!0,l=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var e=i.next();return a=e.done,e},e:function(e){l=!0,o=e},f:function(){try{a||null==i.return||i.return()}finally{if(l)throw o}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function o(){var e=Array.from(document.getElementsByClassName("header-slider__item")),t=-1;this.changeSlide=function(n){!function(n){if(n===t)return;-1!==t&&function(t){var n=e[t];n.classList.remove("header-slider__item--active"),n.classList.add("header-slider__item--inactive")}(t);setTimeout((function(){!function(n){var r,o=e[n],a=i(e);try{for(a.s();!(r=a.n()).done;){var l=r.value;l.classList.remove("header-slider__item--active"),l.classList.remove("header-slider__item--inactive")}}catch(e){a.e(e)}finally{a.f()}o.classList.add("header-slider__item--active"),t=n}(n)}),300)}(n)}}n.r(t),n.d(t,"mainSlider",(function(){return o}))},function(e,t,n){"use strict";var i,r,o;function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var l=0;r=[],void 0===(o="function"==typeof(i=function(){var e="__private_"+l+++"_"+"setup";function t(){var e=this;window.addEventListener("resize",(function(){e.viewportWidth=window.innerWidth||document.documentElement.clientWidth||document.getElementsByTagName("body")[0].clientWidth,e.viewportHeight=window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName("body")[0].clientHeight}))}return function(){function n(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),Object.defineProperty(this,e,{value:t}),this.viewportWidth=window.innerWidth||document.documentElement.clientWidth||document.getElementsByTagName("body")[0].clientWidth,this.viewportHeight=window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName("body")[0].clientHeight,this.scrollbarWidth=this.getScrollWidth(),this.hoverAvailability=this.getHoverAvailability(),function(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}(this,e)[e]()}var i,r,o;return i=n,(r=[{key:"getScrollWidth",value:function(){var e,t=document.createElement("div");return t.style.overflowY="scroll",t.style.width="50px",t.style.height="50px",document.body.append(t),e=t.offsetWidth-t.clientWidth,t.remove(),e}},{key:"getHoverAvailability",value:function(){var e=document.createElement("style");return e.textContent="\n                :root {\n                    --hover-device:false;\n                }\n                @media (hover) {\n                    :root {\n                        --hover-device:true;\n                    }\n                }\n            ",document.body.append(e),"false"!==getComputedStyle(document.getElementsByTagName("body")[0]).getPropertyValue("--hover-device")}},{key:"getViewportWidth",value:function(){return this.viewportWidth}},{key:"getViewportHeight",value:function(){return this.viewportHeight}},{key:"getFullOptions",value:function(){return{viewportWidth:this.viewportWidth,viewportHeight:this.viewportHeight,scrollbarWidth:this.scrollbarWidth,hoverAvailability:this.hoverAvailability}}}])&&a(i.prototype,r),o&&a(i,o),n}()})?i.apply(t,r):i)||(e.exports=o)},function(e,t,n){n(4),n(5),n(6),n(1),n(0),e.exports=n(7)},function(e,t,n){"use strict";n.r(t);var i=n(2),r=n.n(i);window.mobileWidth=1279,window.mobileWidthSmall=768,window.viewportOptions=new r.a},function(e,t){},function(e,t){},function(e,t,n){"use strict";n.r(t);var i=n(1),r=n(0);function o(){var e,t=document.getElementsByClassName("scroll-wrapper")[0],n=document.getElementsByClassName("header-slider")[0],o=document.getElementsByClassName("header")[0],a=document.getElementsByClassName("header-slider__circle")[0],l=document.getElementsByClassName("header-slider__dots")[0],s=Array.from(document.getElementsByClassName("header-slider__navigation-item")),c="header-slider__navigation-item--active",d=1.5*n.getBoundingClientRect().height,u=[d/3,d/3*2,d/3*3];function f(){if(pageYOffset>d)m(t,pageYOffset-d),o.classList.add("header--scroll");else{a.setAttribute("style","transform: translateY(-".concat(pageYOffset/4,"px)")),l.setAttribute("style","transform: translateY(-".concat(pageYOffset/4,"px)")),m(t,0),o.classList.remove("header--scroll");pageYOffset<u[0]?(window.mainSlider.changeSlide(0),s[0].classList.add(c),s[1].classList.remove(c),s[2].classList.remove(c)):pageYOffset<u[1]?(window.mainSlider.changeSlide(1),s[0].classList.remove(c),s[1].classList.add(c),s[2].classList.remove(c)):(window.mainSlider.changeSlide(2),s[0].classList.remove(c),s[1].classList.remove(c),s[2].classList.add(c))}}function m(e,t){e.setAttribute("style","transform: translateY(-".concat(t,"px)"))}this.init=function(){pageYOffset>0?window.logoLoad=new r.logoLoad(!1):window.logoLoad=new r.logoLoad(!0),setTimeout((function(){window.mainSlider=new i.mainSlider,f(),window.addEventListener("scroll",(function(){f()}))}),window.logoLoad.getDuration())},e=viewportOptions.hoverAvailability?"mouseenter":"click";for(var h=function(t){s[t].addEventListener(e,(function(){window.scrollTo(0,u[t]-30)}))},v=0;v<s.length;v++)h(v)}document.addEventListener("DOMContentLoaded",(function(){window.pageScroll=new o,window.pageScroll.init()}))}]);
//# sourceMappingURL=main.js.map