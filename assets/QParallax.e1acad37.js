import{l as z,r as g,w as L,o as I,t as F,h as w,p as O,b8 as R,b9 as _,$ as Q,a0 as $}from"./index.66704f64.js";function H(e){let a=!1,u,r;function l(){r=arguments,a!==!0&&(a=!0,u=requestAnimationFrame(()=>{e.apply(this,r),r=void 0,a=!1}))}return l.cancel=()=>{window.cancelAnimationFrame(u),a=!1},l}const M="https://api-mi-sitio.onrender.com",{passive:p}=$;var N=z({name:"QParallax",props:{src:String,height:{type:Number,default:500},speed:{type:Number,default:1,validator:e=>e>=0&&e<=1},scrollTarget:{default:void 0},onScroll:Function},setup(e,{slots:a,emit:u}){const r=g(0),l=g(null),P=g(null),T=g(null);let i,t,A,f,s,o;L(()=>e.height,()=>{i===!0&&c()}),L(()=>e.scrollTarget,()=>{i===!0&&(S(),x())});let m=n=>{r.value=n,e.onScroll!==void 0&&u("scroll",n)};function c(){let n,d,h;o===window?(n=0,h=d=window.innerHeight):(n=R(o).top,d=_(o),h=n+d);const y=R(l.value).top,q=y+e.height;if(s!==void 0||q>n&&y<h){const E=(h-y)/(e.height+d);v((A-e.height)*E*e.speed),m(E)}}let v=n=>{t.style.transform=`translate3d(-50%,${Math.round(n)}px,0)`};function b(){A=t.naturalHeight||t.videoHeight||_(t),i===!0&&c()}function x(){i=!0,o=Q(l.value,e.scrollTarget),o.addEventListener("scroll",c,p),window.addEventListener("resize",f,p),c()}function S(){i===!0&&(i=!1,o.removeEventListener("scroll",c,p),window.removeEventListener("resize",f,p),o=void 0,v.cancel(),m.cancel(),f.cancel())}return I(()=>{v=H(v),m=H(m),f=H(b),t=a.media!==void 0?P.value.children[0]:T.value,t.onload=t.onloadstart=t.loadedmetadata=b,b(),t.style.display="initial",window.IntersectionObserver!==void 0?(s=new IntersectionObserver(n=>{(n[0].isIntersecting===!0?x:S)()}),s.observe(l.value)):x()}),F(()=>{S(),s!==void 0&&s.disconnect(),t.onload=t.onloadstart=t.loadedmetadata=null}),()=>w("div",{ref:l,class:"q-parallax",style:{height:`${e.height}px`}},[w("div",{ref:P,class:"q-parallax__media absolute-full"},a.media!==void 0?a.media():[w("img",{ref:T,src:e.src})]),w("div",{class:"q-parallax__content absolute-full column flex-center"},a.content!==void 0?a.content({percentScrolled:r.value}):O(a.default))])}});export{M as A,N as Q};
