import{l as z,r as g,w as L,o as I,t as F,h as p,p as O,b8 as R,b9 as _,$ as Q,a0 as $}from"./index.1ee6eb26.js";function H(e){let a=!1,u,i;function l(){i=arguments,a!==!0&&(a=!0,u=requestAnimationFrame(()=>{e.apply(this,i),i=void 0,a=!1}))}return l.cancel=()=>{window.cancelAnimationFrame(u),a=!1},l}const M="https://api-mi-sitio-production.up.railway.app",{passive:w}=$;var N=z({name:"QParallax",props:{src:String,height:{type:Number,default:500},speed:{type:Number,default:1,validator:e=>e>=0&&e<=1},scrollTarget:{default:void 0},onScroll:Function},setup(e,{slots:a,emit:u}){const i=g(0),l=g(null),P=g(null),T=g(null);let r,t,A,f,s,o;L(()=>e.height,()=>{r===!0&&c()}),L(()=>e.scrollTarget,()=>{r===!0&&(y(),x())});let v=n=>{i.value=n,e.onScroll!==void 0&&u("scroll",n)};function c(){let n,d,h;o===window?(n=0,h=d=window.innerHeight):(n=R(o).top,d=_(o),h=n+d);const S=R(l.value).top,q=S+e.height;if(s!==void 0||q>n&&S<h){const E=(h-S)/(e.height+d);m((A-e.height)*E*e.speed),v(E)}}let m=n=>{t.style.transform=`translate3d(-50%,${Math.round(n)}px,0)`};function b(){A=t.naturalHeight||t.videoHeight||_(t),r===!0&&c()}function x(){r=!0,o=Q(l.value,e.scrollTarget),o.addEventListener("scroll",c,w),window.addEventListener("resize",f,w),c()}function y(){r===!0&&(r=!1,o.removeEventListener("scroll",c,w),window.removeEventListener("resize",f,w),o=void 0,m.cancel(),v.cancel(),f.cancel())}return I(()=>{m=H(m),v=H(v),f=H(b),t=a.media!==void 0?P.value.children[0]:T.value,t.onload=t.onloadstart=t.loadedmetadata=b,b(),t.style.display="initial",window.IntersectionObserver!==void 0?(s=new IntersectionObserver(n=>{(n[0].isIntersecting===!0?x:y)()}),s.observe(l.value)):x()}),F(()=>{y(),s!==void 0&&s.disconnect(),t.onload=t.onloadstart=t.loadedmetadata=null}),()=>p("div",{ref:l,class:"q-parallax",style:{height:`${e.height}px`}},[p("div",{ref:P,class:"q-parallax__media absolute-full"},a.media!==void 0?a.media():[p("img",{ref:T,src:e.src})]),p("div",{class:"q-parallax__content absolute-full column flex-center"},a.content!==void 0?a.content({percentScrolled:i.value}):O(a.default))])}});export{M as A,N as Q};
