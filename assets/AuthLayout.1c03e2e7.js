import{Q as c,a as s,b as n,c as f,d as _,e as p,f as h}from"./QLayout.3f6c310d.js";import{_ as m,r as v,I as w,e as g,f as Q,F as t,l as e,Q as d,k as l,G as x}from"./index.833c13ce.js";import"./touch.8e8b155e.js";import"./selection.044f0fd3.js";const D={setup(){const a=v(!1);return{rightDrawerOpen:a,toggleRightDrawer(){a.value=!a.value}}}},b=x(" Wolf Developer "),k={class:"q-pa-md row column justify-center"},V=l("span",{class:"text-h5 q-mb-md"},"Wolf Developer",-1),C=l("div",null," \xA92022 Wolf Developer. ",-1);function B(a,r,T,o,y,N){const i=w("router-view");return g(),Q(c,{view:"hHh lpR fff"},{default:t(()=>[e(f,{elevated:"",class:"bg-dark text-white"},{default:t(()=>[e(s,null,{default:t(()=>[e(n,null,{default:t(()=>[b]),_:1}),e(d,{dense:"",flat:"",round:"",icon:"menu",onClick:o.toggleRightDrawer},null,8,["onClick"])]),_:1})]),_:1}),e(_,{modelValue:o.rightDrawerOpen,"onUpdate:modelValue":r[0]||(r[0]=u=>o.rightDrawerOpen=u),side:"right",bordered:"",width:200},{default:t(()=>[l("div",k,[V,e(d,{color:"indigo-6",to:"/",icon:"las la-arrow-left",label:"Volver al sitio"})])]),_:1},8,["modelValue"]),e(p,null,{default:t(()=>[e(i)]),_:1}),e(h,{elevated:"",class:"bg-dark text-white"},{default:t(()=>[e(s,null,{default:t(()=>[e(n,{class:"text-center"},{default:t(()=>[C]),_:1})]),_:1})]),_:1})]),_:1})}var F=m(D,[["render",B]]);export{F as default};