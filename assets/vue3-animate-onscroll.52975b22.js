import{b as h}from"./index.3ebbab7f.js";var m=globalThis&&globalThis.__assign||function(){return m=Object.assign||function(s){for(var n,t=1,l=arguments.length;t<l;t++){n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(s[a]=n[a])}return s},m.apply(this,arguments)},g=function(){var s=function(){return document.documentElement.clientHeight},n=function(r){var i=r.top,e=r.bottom;return i<s()&&e>0},t=function(r){return typeof r=="string"},l=function(r){return r.down&&r.up},a=function(r,i){return r===void 0&&(r=""),i===void 0&&(i=""),r.trim()!==i.trim()},d=function(r){var i=r.params,e=r.isUpwards,o=r.repeat;return o&&(e&&i.down||!e&&i.up)},u=function(r,i,e){return e===void 0&&(e=""),r.className=(i+" "+e).trim()};return{isInView:n,run:function(r,i,e){var o=i.value,f=i.modifiers,v=e.isUpwards,p=e.previousClassName,c=p===void 0?"":p;if(!this.isInView(r.getBoundingClientRect()))return f.repeat&&t(o)?u(r,c):void 0;if(t(o))return u(r,c,o);if(f.repeat||l(o)||!a(r.className,c)){var w=v?o.up:o.down;return u(r,c,w)}if(d(m({params:o,isUpwards:v},f)))return u(r,c)}}},b={ScrollAnimate:g,install:function(s,n){s.directive("animate-onscroll",{mounted:function(t,l){var a=window;n&&(n==null?void 0:n.id)?a=document.getElementById(n.id):n&&(n==null?void 0:n.tag)=="body"&&(a=document.body);var d=g(),u=t.className,r=window.pageYOffset;a.addEventListener("scroll",function(){var i=window.pageYOffset||a.scrollTop,e=i<r;d.run(t,l,{isUpwards:e,previousClassName:u}),r=i<=0?0:i},!1)}})}},A=h(async({app:s})=>{s.use(b)});export{A as default};
