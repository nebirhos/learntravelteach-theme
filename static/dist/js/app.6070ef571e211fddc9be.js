!function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,o){"use strict";document.addEventListener("DOMContentLoaded",function(e){var t=document.querySelector(".hide-show-fixed-header"),o=document.querySelector("header"),n=void 0,r=void 0,i=window.scrollY,s=function(){n=t.offsetHeight,r=o.offsetTop+o.offsetHeight-t.offsetHeight},d=function(e){var o=window.scrollY<i;i=window.scrollY,t.style.top=o?0:"-"+n+"px",window.scrollY>r?t.classList.add("hide-show-fixed-header--solid"):t.classList.remove("hide-show-fixed-header--solid")};s(),document.addEventListener("scroll",d,{capture:!0,passive:!0}),window.addEventListener("resize",s)})},function(e,t){},function(e,t,o){"use strict";var n=o(1);!function(e){e&&e.__esModule}(n);o(0)}]);