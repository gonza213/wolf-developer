import{p as m,a1 as h,b3 as v,a2 as k,b4 as f,m as y,h as r,am as S,y as $,aX as x,r as w,a as n}from"./index.59ad9dfc.js";var U=m({name:"QInnerLoading",props:{...h,...v,showing:Boolean,color:String,size:{type:[String,Number],default:42},label:String,labelClass:String,labelStyle:[String,Array,Object]},setup(a,{slots:s}){const i=$(),l=k(a,i.proxy.$q),{transition:u,transitionStyle:c}=f(a,y(()=>a.showing)),d=y(()=>"q-inner-loading absolute-full column flex-center"+(l.value===!0?" q-inner-loading--dark":"")),e=y(()=>"q-inner-loading__label"+(a.labelClass!==void 0?` ${a.labelClass}`:""));function t(){const b=[r(x,{size:a.size,color:a.color})];return a.label!==void 0&&b.push(r("div",{class:e.value,style:a.labelStyle},[a.label])),b}function g(){return a.showing===!0?r("div",{class:d.value,style:c.value},s.default!==void 0?s.default():t()):null}return()=>r(S,{name:u.value,appear:!0},g)}});const o="https://api-mi-sitio.onrender.com",I=()=>{const a=w(),s=localStorage.getItem("token"),i=async()=>{try{const{data:e}=await n.get(`${o}/api/usuarios?limite=0`,{headers:{"x-token":s}});a.value=e.usuarios}catch(e){console.log(e)}},l=async e=>{try{const{data:t}=await n.get(`${o}/api/usuarios/${e}`,{headers:{"x-token":s}});return t}catch(t){console.log(t)}},u=async e=>{const{data:t}=await n.post(`${o}/api/usuarios`,e,{headers:{"x-token":s}});return t},c=async(e,t)=>{const{data:g}=await n.put(`${o}/api/usuarios/${e}`,t,{headers:{"x-token":s}});return g},d=async e=>{const{data:t}=await n.delete(`${o}/api/usuarios/${e}`,{headers:{"x-token":s}});return t};return i(),{usuarios:a,createUsuario:u,deleteUsuario:d,getUsuario:l,editUsuario:c}};export{U as Q,I as u};
