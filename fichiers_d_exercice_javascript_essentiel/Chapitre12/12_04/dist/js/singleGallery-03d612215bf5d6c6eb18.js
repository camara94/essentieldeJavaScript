!function(e){function n(n){for(var a,o,m=n[0],l=n[1],u=n[2],g=0,p=[];g<m.length;g++)o=m[g],r[o]&&p.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(c&&c(n);p.length;)p.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],a=!0,m=1;m<t.length;m++){var l=t[m];0!==r[l]&&(a=!1)}a&&(i.splice(n--,1),e=o(o.s=t[0]))}return e}var a={},r={6:0},i=[];function o(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=a,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)o.d(t,a,function(n){return e[n]}.bind(null,a));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="";var m=window.webpackJsonp=window.webpackJsonp||[],l=m.push.bind(m);m.push=n,m=m.slice();for(var u=0;u<m.length;u++)n(m[u]);var c=l;i.push([12,0]),t()}([function(e,n,t){"use strict";t(4),t(1),t(2),t(3)},function(e,n,t){},function(e,n){let t=document.getElementById("pageContent"),a=document.getElementById("pictInfo"),r=JSON.parse('[{"filename":"image-1.jpg","name":"Plage de Bretagne","author":"Damien Bruyndonckx","exposure":"100 ISO - 18 mm - f/22 - 302 Sec"},{"filename":"image-2.jpg","name":"Cadre dans le cadre","author":"Damien Bruyndonckx","exposure":"200 ISO - 150 mm - f/10 - 1/320 Sec"},{"filename":"image-3.jpg","name":"Vigie minérale","author":"Damien Bruyndonckx","exposure":"100 ISO - 59 mm - f/13 - 1/250 Sec"},{"filename":"image-4.jpg","name":"Les cheveux du ciel","author":"Damien Bruyndonckx","exposure":"100 ISO - 18 mm - f/22 - 531 Sec"},{"filename":"image-5.jpg","name":"Prendre le large","author":"Damien Bruyndonckx","exposure":"100 ISO - 128 mm - f/11 - 1/250 Sec"},{"filename":"image-6.jpg","name":"Maman les p\'tits bateaux","author":"Damien Bruyndonckx","exposure":"100 ISO - 150 mm - f/28 - 1/320 Sec"},{"filename":"image-7.jpg","name":"L\'ombre des palmiers","author":"Damien Bruyndonckx","exposure":"100 ISO - 26 mm - f/10 - 1/100 Sec"},{"filename":"image-8.jpg","author":"Damien Bruyndonckx","name":"Pont d\'or","exposure":"100 ISO - 37 mm - f/11 - 1/400 Sec"},{"filename":"image-9.jpg","name":"L\'ombre assise","author":"Damien Bruyndonckx","exposure":"100 ISO - 24 mm - f/5 - 1/200 Sec"},{"filename":"image-10.jpg","name":"Au bout de l\'ombre","author":"Damien Bruyndonckx","exposure":"200 ISO - 150 mm - f/6.3 - 1/320 Sec"},{"filename":"image-11.jpg","name":"CA Capitol","author":"Damien Bruyndonckx","exposure":"200 ISO - 39 mm - f/10 - 1/640 Sec"},{"filename":"image-12.jpg","name":"Soleil tropical","author":"Damien Bruyndonckx","exposure":"100 ISO - 20 mm - f/11 - 1/80 Sec"},{"filename":"image-13.jpg","name":"Reflet urbain","author":"Damien Bruyndonckx","exposure":"200 ISO - 39 mm - f/13 - 1/200 Sec"},{"filename":"image-14.jpg","name":"Lucide?","author":"Damien Bruyndonckx","exposure":"200 ISO - 70 mm - f/8.0 - 1/100 Sec"}]'),i=r[Math.floor(Math.random()*r.length)];if(t.style.backgroundImage=`url(images/${i.filename})`,a){for(;a.firstChild;)a.removeChild(a.firstChild);let e=document.createElement("h1"),n=document.createTextNode(i.name);e.appendChild(n),a.appendChild(e);let t=document.createElement("p"),r=document.createElement("p"),o=document.createTextNode(i.author),m=document.createTextNode(i.exposure);t.appendChild(o),r.appendChild(m),a.appendChild(t),a.appendChild(r)}},function(e,n,t){(function(e){e(document).ready(function(){e("#menuToggle").click(function(){e("#mainNav").stop(!0,!0).slideToggle()})})}).call(this,t(5))},,,,,,,,,function(e,n,t){"use strict";t.r(n);t(0),t(13)},function(e,n){let t=JSON.parse('{"gal1": {"title": "Bretagne 2019", "images": ["image-1.jpg","image-2.jpg","image-3.jpg","image-4.jpg","image-5.jpg","image-6.jpg"]},"gal2":{ "title": "Sacramento 2017", "images": ["image-7.jpg","image-8.jpg","image-9.jpg","image-10.jpg","image-11.jpg","image-12.jpg","image-13.jpg","image-14.jpg"]}}');function a(e){let n=e.target,t=document.getElementById("galleryContainer");t.querySelector("img").src=n.src,t.classList.toggle("visible"),t.addEventListener("click",r,!1)}function r(e){document.getElementById("galleryContainer").classList.toggle("visible")}window.addEventListener("load",e=>{let n=new URLSearchParams(window.location.search);if(n.has("id")){let e=n.get("id"),r=t[e],i=document.querySelector("#singleGallery ul");document.querySelector("#singleGallery h1").innerHTML=r.title;for(let e=0;e<r.images.length;e++){let n=document.createElement("li"),t=document.createElement("img");t.src=`images/${r.images[e]}`,t.addEventListener("click",a,!1),t.style.cursor="pointer",n.appendChild(t),i.appendChild(n)}}else window.location.pathname="galleries.html"},!1)}]);