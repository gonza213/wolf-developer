import{m as b,a0 as v,aZ as m,a1 as f,a_ as S,l as n,h as a,al as y,x as C,aY as h}from"./index.b17a3351.js";var q=b({name:"QInnerLoading",props:{...v,...m,showing:Boolean,color:String,size:{type:[String,Number],default:42},label:String,labelClass:String,labelStyle:[String,Array,Object]},setup(e,{slots:l}){const s=C(),i=f(e,s.proxy.$q),{transition:r,transitionStyle:o}=S(e,n(()=>e.showing)),u=n(()=>"q-inner-loading absolute-full column flex-center"+(i.value===!0?" q-inner-loading--dark":"")),c=n(()=>"q-inner-loading__label"+(e.labelClass!==void 0?` ${e.labelClass}`:""));function d(){const t=[a(h,{size:e.size,color:e.color})];return e.label!==void 0&&t.push(a("div",{class:c.value,style:e.labelStyle},[e.label])),t}function g(){return e.showing===!0?a("div",{class:u.value,style:o.value},l.default!==void 0?l.default():d()):null}return()=>a(y,{name:r.value,appear:!0},g)}});export{q as Q};
