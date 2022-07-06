import{d as Q,r as s,a4 as E,U as A,o as Te,n as Me,a as Ae,m as F,w as Se,b6 as Ce,h as _,q as T,_ as Oe,a8 as W,ar as ke,c as P,i as me,j as N,k as pe,a5 as R,ab as je,aa as Le,ac as Be,ad as Ee,e as he,R as Ne,au as De,at as Ie}from"./index.f4094d98.js";/**
 * Vue 3 Carousel 0.1.40
 * (c) 2022
 * @license MIT
 */const m={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0};function Ve(e,o){let a;return function(...l){a&&clearTimeout(a),a=setTimeout(()=>{e(...l),a=null},o)}}function ze(e,o){let a;return function(...l){const d=this;a||(e.apply(d,l),a=!0,setTimeout(()=>a=!1,o))}}function $e(e){var o,a,l;return e?((a=(o=e[0])===null||o===void 0?void 0:o.type)===null||a===void 0?void 0:a.name)==="CarouselSlide"?e:((l=e[0])===null||l===void 0?void 0:l.children)||[]:[]}function Pe(e,o){if(e.wrapAround)return o-1;switch(e.snapAlign){case"start":return o-e.itemsToShow;case"end":return o-1;case"center":case"center-odd":return o-Math.ceil(e.itemsToShow/2);case"center-even":return o-Math.ceil(e.itemsToShow/2);default:return 0}}function Re(e){if(e.wrapAround)return 0;switch(e.snapAlign){case"start":return 0;case"end":return e.itemsToShow-1;case"center":case"center-odd":return Math.floor((e.itemsToShow-1)/2);case"center-even":return Math.floor((e.itemsToShow-2)/2);default:return 0}}function ge(e,o,a,l){return e.wrapAround?o:Math.min(Math.max(o,l),a)}function Ue({slidesBuffer:e,currentSlide:o,snapAlign:a,itemsToShow:l,wrapAround:d,slidesCount:c}){let r=e.indexOf(o);if(r===-1&&(r=e.indexOf(Math.ceil(o))),a==="center"||a==="center-odd"?r-=(l-1)/2:a==="center-even"?r-=(l-2)/2:a==="end"&&(r-=l-1),!d){const p=c-l,h=0;r=Math.max(Math.min(r,p),h)}return r}var Xe=Q({name:"Carousel",props:{itemsToShow:{default:m.itemsToShow,type:Number},itemsToScroll:{default:m.itemsToScroll,type:Number},wrapAround:{default:m.wrapAround,type:Boolean},snapAlign:{default:m.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:m.transition,type:Number},breakpoints:{default:m.breakpoints,type:Object},autoplay:{default:m.autoplay,type:Number},pauseAutoplayOnHover:{default:m.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:m.mouseDrag,type:Boolean},touchDrag:{default:m.touchDrag,type:Boolean},dir:{default:m.dir,validator(e){return["rtl","ltr"].includes(e)}},settings:{default(){return{}},type:Object}},setup(e,{slots:o,emit:a,expose:l}){var d;const c=s(null),r=s([]),p=s([]),h=s(0),i=s(1),w=s(null),C=s(null);let b=s({}),g=Object.assign({},m);const n=E(Object.assign({},g)),f=s((d=n.modelValue)!==null&&d!==void 0?d:0),we=s(0),J=s(0),k=s(0),j=s(0);A("config",n),A("slidesBuffer",p),A("slidesCount",i),A("currentSlide",f),A("maxSlide",k),A("minSlide",j);function K(){const t=Object.assign(Object.assign({},e),e.settings);b=s(Object.assign({},t.breakpoints)),g=Object.assign(Object.assign({},t),{settings:void 0,breakpoints:void 0}),Z(g)}function D(){const t=Object.keys(b.value).map(v=>Number(v)).sort((v,S)=>+S-+v);let u=Object.assign({},g);t.some(v=>window.matchMedia(`(min-width: ${v}px)`).matches?(u=Object.assign(Object.assign({},u),b.value[v]),!0):!1),Z(u)}function Z(t){for(let u in t)n[u]=t[u]}const _e=Ve(()=>{b.value&&(D(),L()),I()},16);function I(){if(!c.value)return;const t=c.value.getBoundingClientRect();h.value=t.width/n.itemsToShow}function L(){i.value=Math.max(r.value.length,1),!(i.value<=0)&&(J.value=Math.ceil((i.value-1)/2),k.value=Pe(n,i.value),j.value=Re(n),f.value=ge(n,f.value,k.value,j.value))}function V(){const t=[...Array(i.value).keys()];if(n.wrapAround&&n.itemsToShow+1<=i.value){let S=(n.itemsToShow!==1?Math.round((i.value-n.itemsToShow)/2):0)-f.value;if(n.snapAlign==="end"?S+=Math.floor(n.itemsToShow-1):(n.snapAlign==="center"||n.snapAlign==="center-odd")&&S++,S<0)for(let y=S;y<0;y++)t.push(Number(t.shift()));else for(let y=0;y<S;y++)t.unshift(Number(t.pop()))}p.value=t}Te(()=>{b.value&&(D(),L()),Me(()=>setTimeout(I,16)),n.autoplay&&n.autoplay>0&&oe(),window.addEventListener("resize",_e,{passive:!0})}),Ae(()=>{C.value&&clearTimeout(C.value),le(!1)});let x=!1;const z={x:0,y:0},$={x:0,y:0},O=E({x:0,y:0}),ee=s(!1),U=s(!1),xe=()=>{U.value=!0},ye=()=>{U.value=!1};function te(t){x=t.type==="touchstart",!(!x&&t.button!==0||B.value)&&(ee.value=!0,z.x=x?t.touches[0].clientX:t.clientX,z.y=x?t.touches[0].clientY:t.clientY,document.addEventListener(x?"touchmove":"mousemove",ne,!0),document.addEventListener(x?"touchend":"mouseup",ae,!0))}const ne=ze(t=>{$.x=x?t.touches[0].clientX:t.clientX,$.y=x?t.touches[0].clientY:t.clientY;const u=$.x-z.x,v=$.y-z.y;O.y=v,O.x=u},16);function ae(){ee.value=!1;const t=n.dir==="rtl"?-1:1,u=Math.sign(O.x)*.4,v=Math.round(O.x/h.value+u)*t;let S=ge(n,f.value-v,k.value,j.value);if(v){const y=q=>{q.stopPropagation(),window.removeEventListener("click",y,!0)};window.addEventListener("click",y,!0)}M(S),O.x=0,O.y=0,document.removeEventListener(x?"touchmove":"mousemove",ne,!0),document.removeEventListener(x?"touchend":"mouseup",ae,!0)}function oe(){w.value=setInterval(()=>{n.pauseAutoplayOnHover&&U.value||X()},n.autoplay)}function le(t=!0){!w.value||(clearInterval(w.value),t&&oe())}const B=s(!1);function M(t,u=!1){if(le(),f.value===t||B.value)return;const v=i.value-1;if(t>v)return M(t-i.value);if(t<0)return M(t+i.value);B.value=!0,we.value=f.value,f.value=t,u||a("update:modelValue",f.value),C.value=setTimeout(()=>{n.wrapAround&&V(),B.value=!1},n.transition)}function X(){let t=f.value+n.itemsToScroll;n.wrapAround||(t=Math.min(t,k.value)),M(t)}function se(){let t=f.value-n.itemsToScroll;n.wrapAround||(t=Math.max(t,j.value)),M(t)}const ie={slideTo:M,next:X,prev:se};A("nav",ie);const re=F(()=>Ue({slidesBuffer:p.value,itemsToShow:n.itemsToShow,snapAlign:n.snapAlign,wrapAround:Boolean(n.wrapAround),currentSlide:f.value,slidesCount:i.value}));A("slidesToScroll",re);const be=F(()=>{const t=n.dir==="rtl"?-1:1,u=re.value*h.value*t;return{transform:`translateX(${O.x-u}px)`,transition:`${B.value?n.transition:0}ms`}});function ue(){K()}function ce(){K(),D(),L(),V(),I()}function de(){L(),V()}Se(()=>Object.values(e),ce),ue(),Ce(()=>{const t=i.value!==r.value.length;e.modelValue!==void 0&&f.value!==e.modelValue&&M(Number(e.modelValue),!0),t&&de()});const ve={config:n,slidesBuffer:p,slidesCount:i,slideWidth:h,currentSlide:f,maxSlide:k,minSlide:j,middleSlide:J};l({updateBreakpointsConfigs:D,updateSlidesData:L,updateSlideWidth:I,updateSlidesBuffer:V,initCarousel:ue,restartCarousel:ce,updateCarousel:de,slideTo:M,next:X,prev:se,nav:ie,data:ve});const H=o.default||o.slides,Y=o.addons,fe=E(ve);return()=>{const t=$e(H==null?void 0:H(fe)),u=(Y==null?void 0:Y(fe))||[];r.value=t,t.forEach((y,q)=>y.props.index=q);const v=_("ol",{class:"carousel__track",style:be.value,onMousedown:n.mouseDrag?te:null,onTouchstart:n.touchDrag?te:null},t),S=_("div",{class:"carousel__viewport"},v);return _("section",{ref:c,class:{carousel:!0,"carousel--rtl":n.dir==="rtl"},dir:n.dir,"aria-label":"Gallery",onMouseenter:xe,onMouseleave:ye},[S,u])}}});const He={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},G=e=>{const o=e.name;if(!o||typeof o!="string")return;const a=He[o],l=_("path",{d:a}),d=e.title||o,c=_("title",null,o);return _("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img",ariaLabel:d},[c,l])};G.props={name:String,title:String};const Ye=(e,{slots:o,attrs:a})=>{const{next:l,prev:d}=o,c=T("config",E(Object.assign({},m))),r=T("maxSlide",s(1)),p=T("minSlide",s(1)),h=T("currentSlide",s(1)),i=T("nav",{}),w=c.dir==="rtl",C=_("button",{type:"button",class:["carousel__prev",!c.wrapAround&&h.value<=p.value&&"carousel__prev--in-active",a==null?void 0:a.class],"aria-label":"Navigate to previous slide",onClick:i.prev},(d==null?void 0:d())||_(G,{name:w?"arrowRight":"arrowLeft"})),b=_("button",{type:"button",class:["carousel__next",!c.wrapAround&&h.value>=r.value&&"carousel__next--in-active",a==null?void 0:a.class],"aria-label":"Navigate to next slide",onClick:i.next},(l==null?void 0:l())||_(G,{name:w?"arrowLeft":"arrowRight"}));return[C,b]};var qe=Q({name:"CarouselSlide",props:{index:{type:Number,default:1}},setup(e,{slots:o}){const a=T("config",E(Object.assign({},m))),l=T("slidesBuffer",s([])),d=T("currentSlide",s(0)),c=T("slidesToScroll",s(0)),r=s(e.index);a.wrapAround&&(p(),Se(l,p));function p(){r.value=l.value.indexOf(e.index)}const h=F(()=>{const g=a.itemsToShow;return{width:`${1/g*100}%`,order:r.value.toString()}}),i=()=>e.index===d.value,w=()=>{const g=Math.ceil(c.value),n=Math.floor(c.value+a.itemsToShow);return l.value.slice(g,n).includes(e.index)},C=()=>e.index===l.value[Math.ceil(c.value)-1],b=()=>e.index===l.value[Math.floor(c.value+a.itemsToShow)];return()=>{var g;return _("li",{style:h.value,class:{carousel__slide:!0,"carousel__slide--active":i(),"carousel__slide--visible":w(),"carousel__slide--prev":C(),"carousel__slide--next":b()}},(g=o.default)===null||g===void 0?void 0:g.call(o))}}});const We=Q({components:{Carousel:Xe,Slide:qe,Navigation:Ye},props:["tecno"],setup(e){return{tecnologias:e.tecno}}}),Fe=e=>(Be("data-v-82a19c8a"),e=e(),Ee(),e),Ge={class:"q-pa-xl row"},Qe=Fe(()=>N("div",{class:"col-12 q-pa-md row justify-center"},[N("span",{class:"text-h4 text-grey-6"}," Tecnolog\xEDas m\xE1s utilizadas ")],-1)),Je={class:"col-12 row justify-center"},Ke={class:"carousel__item row"};function Ze(e,o,a,l,d,c){const r=W("Slide"),p=W("Navigation"),h=W("Carousel"),i=ke("animate-onscroll");return P(),me("div",Ge,[Qe,N("div",Je,[pe(h,{"items-to-show":2.5,"wrap-around":!0,class:"car-bg"},{addons:R(()=>[pe(p)]),default:R(()=>[(P(!0),me(je,null,Le(e.tecnologias,w=>(P(),he(r,{key:w},{default:R(()=>[N("div",Ke,[Ne((P(),he(De,{class:"col-11 q-pa-md row justify-center"},{default:R(()=>[N("span",{class:Ie([w,"icon-tec self-center"])},null,2)]),_:2},1024)),[[i,"animated fadeInUp",void 0,{repeat:!0}]])])]),_:2},1024))),128))]),_:1},8,["items-to-show"])])])}var tt=Oe(We,[["render",Ze],["__scopeId","data-v-82a19c8a"]]);export{tt as T};
