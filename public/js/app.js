(()=>{var e,r={80:()=>{function e(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,l=function(){};return{s:l,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw a}}}}function r(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var t=document.querySelectorAll(".img-placeholder img"),n=document.querySelectorAll(".img-placeholder");function o(){var r,t=e(n);try{for(t.s();!(r=t.n()).done;){var o=r.value,l=o.offsetWidth;o.style.minHeight=l+"px"}}catch(e){t.e(e)}finally{t.f()}}window.checkImgPlaceholders=function(){t=document.querySelectorAll(".img-placeholder img"),n=document.querySelectorAll(".img-placeholder");var r,l=e(t);try{var a=function(){var e=r.value;e.completed?e.parentNode.style.setProperty("--placeholder-display","none"):e.addEventListener("load",(function(){e.parentNode.style.setProperty("--placeholder-display","none")}))};for(l.s();!(r=l.n()).done;)a()}catch(e){l.e(e)}finally{l.f()}o()},checkImgPlaceholders(),window.addEventListener("resize",o)},425:()=>{}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var l=t[e]={exports:{}};return r[e](l,l.exports,n),l.exports}n.m=r,e=[],n.O=(r,t,o,l)=>{if(!t){var a=1/0;for(f=0;f<e.length;f++){for(var[t,o,l]=e[f],i=!0,c=0;c<t.length;c++)(!1&l||a>=l)&&Object.keys(n.O).every((e=>n.O[e](t[c])))?t.splice(c--,1):(i=!1,l<a&&(a=l));if(i){e.splice(f--,1);var u=o();void 0!==u&&(r=u)}}return r}l=l||0;for(var f=e.length;f>0&&e[f-1][2]>l;f--)e[f]=e[f-1];e[f]=[t,o,l]},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={773:0,170:0};n.O.j=r=>0===e[r];var r=(r,t)=>{var o,l,[a,i,c]=t,u=0;if(a.some((r=>0!==e[r]))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(c)var f=c(n)}for(r&&r(t);u<a.length;u++)l=a[u],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(f)},t=self.webpackChunk=self.webpackChunk||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),n.O(void 0,[170],(()=>n(80)));var o=n.O(void 0,[170],(()=>n(425)));o=n.O(o)})();