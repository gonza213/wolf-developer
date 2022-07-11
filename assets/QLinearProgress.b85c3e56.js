import{p as k,a1 as $,aJ as _,a2 as S,aK as h,m as r,h as t,x as C,y as x}from"./index.29806dde.js";const w={xs:2,sm:4,md:6,lg:10,xl:14};function i(e,l,a){return{transform:l===!0?`translateX(${a.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var z=k({name:"QLinearProgress",props:{...$,..._,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:l}){const{proxy:a}=x(),d=S(e,a.$q),n=h(e,w),s=r(()=>e.indeterminate===!0||e.query===!0),u=r(()=>e.reverse!==e.query),c=r(()=>({...n.value!==null?n.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),v=r(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),m=r(()=>i(e.buffer!==void 0?e.buffer:1,u.value,a.$q)),g=r(()=>`q-linear-progress__track absolute-full q-linear-progress__track--with${e.instantFeedback===!0?"out":""}-transition q-linear-progress__track--${d.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),f=r(()=>i(s.value===!0?1:e.value,u.value,a.$q)),q=r(()=>`q-linear-progress__model absolute-full q-linear-progress__model--with${e.instantFeedback===!0?"out":""}-transition q-linear-progress__model--${s.value===!0?"in":""}determinate`),y=r(()=>({width:`${e.value*100}%`})),b=r(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"}`);return()=>{const o=[t("div",{class:g.value,style:m.value}),t("div",{class:q.value,style:f.value})];return e.stripe===!0&&s.value===!1&&o.push(t("div",{class:b.value,style:y.value})),t("div",{class:v.value,style:c.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},C(l.default,o))}}});export{z as Q};
