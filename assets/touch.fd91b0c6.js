import{r as y,Z as z,o as d,l as w,n as h,t as b,z as O,h as R,v as x,a0 as p}from"./index.1ee6eb26.js";function C(){const t=y(!z.value);return t.value===!1&&d(()=>{t.value=!0}),t}const m=typeof ResizeObserver!="undefined",g=m===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var j=w({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(t,{emit:e}){let n=null,i,s={width:-1,height:-1};function u(r){r===!0||t.debounce===0||t.debounce==="0"?a():n===null&&(n=setTimeout(a,t.debounce))}function a(){if(clearTimeout(n),n=null,i){const{offsetWidth:r,offsetHeight:o}=i;(r!==s.width||o!==s.height)&&(s={width:r,height:o},e("resize",s))}}const l=x();if(Object.assign(l.proxy,{trigger:u}),m===!0){let r;return d(()=>{h(()=>{i=l.proxy.$el.parentNode,i&&(r=new ResizeObserver(u),r.observe(i),a())})}),b(()=>{clearTimeout(n),r!==void 0&&(r.disconnect!==void 0?r.disconnect():i&&r.unobserve(i))}),O}else{let c=function(){clearTimeout(n),o!==void 0&&(o.removeEventListener!==void 0&&o.removeEventListener("resize",u,p.passive),o=void 0)},v=function(){c(),i&&i.contentDocument&&(o=i.contentDocument.defaultView,o.addEventListener("resize",u,p.passive),a())};const r=C();let o;return d(()=>{h(()=>{i=l.proxy.$el,i&&v()})}),b(c),()=>{if(r.value===!0)return R("object",{style:g.style,tabindex:-1,type:"text/html",data:g.url,"aria-hidden":"true",onLoad:v})}}}});const f={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},L=Object.keys(f);f.all=!0;function k(t){const e={};for(const n of L)t[n]===!0&&(e[n]=!0);return Object.keys(e).length===0?f:(e.horizontal===!0?e.left=e.right=!0:e.left===!0&&e.right===!0&&(e.horizontal=!0),e.vertical===!0?e.up=e.down=!0:e.up===!0&&e.down===!0&&(e.vertical=!0),e.horizontal===!0&&e.vertical===!0&&(e.all=!0),e)}function E(t,e){return e.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof e.handler=="function"&&t.target.nodeName.toUpperCase()!=="INPUT"&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(e.uid)===-1)}export{j as Q,k as g,E as s};
