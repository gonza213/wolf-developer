import{p as z,r as g,w as L,o as I,P as F,h as w,D as O,b0 as R,b1 as _,ab as Q,ac as B}from"./index.29806dde.js";function P(e){let a=!1,u,r;function o(){r=arguments,a!==!0&&(a=!0,u=requestAnimationFrame(()=>{e.apply(this,r),r=void 0,a=!1}))}return o.cancel=()=>{window.cancelAnimationFrame(u),a=!1},o}const M="https://api-mi-sitio.onrender.com",{passive:b}=B;var N=z({name:"QParallax",props:{src:String,height:{type:Number,default:500},speed:{type:Number,default:1,validator:e=>e>=0&&e<=1},scrollTarget:{default:void 0},onScroll:Function},setup(e,{slots:a,emit:u}){const r=g(0),o=g(null),H=g(null),T=g(null);let i,t,A,f,s,l;L(()=>e.height,()=>{i===!0&&c()}),L(()=>e.scrollTarget,()=>{i===!0&&(S(),x())});let m=n=>{r.value=n,e.onScroll!==void 0&&u("scroll",n)};function c(){let n,d,h;l===window?(n=0,h=d=window.innerHeight):(n=R(l).top,d=_(l),h=n+d);const y=R(o.value).top,q=y+e.height;if(s!==void 0||q>n&&y<h){const E=(h-y)/(e.height+d);v((A-e.height)*E*e.speed),m(E)}}let v=n=>{t.style.transform=`translate3d(-50%,${Math.round(n)}px,0)`};function p(){A=t.naturalHeight||t.videoHeight||_(t),i===!0&&c()}function x(){i=!0,l=Q(o.value,e.scrollTarget),l.addEventListener("scroll",c,b),window.addEventListener("resize",f,b),c()}function S(){i===!0&&(i=!1,l.removeEventListener("scroll",c,b),window.removeEventListener("resize",f,b),l=void 0,v.cancel(),m.cancel(),f.cancel())}return I(()=>{v=P(v),m=P(m),f=P(p),t=a.media!==void 0?H.value.children[0]:T.value,t.onload=t.onloadstart=t.loadedmetadata=p,p(),t.style.display="initial",window.IntersectionObserver!==void 0?(s=new IntersectionObserver(n=>{(n[0].isIntersecting===!0?x:S)()}),s.observe(o.value)):x()}),F(()=>{S(),s!==void 0&&s.disconnect(),t.onload=t.onloadstart=t.loadedmetadata=null}),()=>w("div",{ref:o,class:"q-parallax",style:{height:`${e.height}px`}},[w("div",{ref:H,class:"q-parallax__media absolute-full"},a.media!==void 0?a.media():[w("img",{ref:T,src:e.src})]),w("div",{class:"q-parallax__content absolute-full column flex-center"},a.content!==void 0?a.content({percentScrolled:r.value}):O(a.default))])}});export{M as A,N as Q};
