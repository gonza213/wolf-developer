import{Q as p}from"./QPage.8a840f9e.js";import{_ as c,r as _,bc as g,bd as w,e as m,f as u,F as n,l as a,k as r,b5 as y,b6 as d,Q as b,au as x,aw as h,I as v}from"./index.833c13ce.js";import{Q}from"./QForm.88201d79.js";const V={setup(){const t=_({}),o=g(),{loginUser:l}=w();return{formData:t,onLogin:async()=>{const{ok:i}=await l(t.value);i?o.push({name:"home"}):alert("El email y/o contrase\xF1a son inv\xE1lidos")}}}},L=r("div",{class:"col-12 text-center q-py-md"},[r("span",{class:"text-h4"},"Panel de control")],-1),q={class:"q-gutter-md mx-auto",style:{width:"100%"}},C={class:"row flex justify-center"};function D(t,o,l,e,i,f){return m(),u(h,{class:"my-card"},{default:n(()=>[a(x,{class:"row"},{default:n(()=>[L,r("div",q,[a(Q,{class:"q-gutter-md",onSubmit:y(e.onLogin,["prevent"])},{default:n(()=>[a(d,{modelValue:e.formData.email,"onUpdate:modelValue":o[0]||(o[0]=s=>e.formData.email=s),type:"email",filled:"",label:"Email",color:"indigo-6"},null,8,["modelValue"]),a(d,{modelValue:e.formData.password,"onUpdate:modelValue":o[1]||(o[1]=s=>e.formData.password=s),type:"password",filled:"",label:"Contrase\xF1a",color:"indigo-6"},null,8,["modelValue"]),r("div",C,[a(b,{type:"submit",color:"indigo-6",label:"Ingresar",class:"self-center q-ma-md q-pa-sm",style:{width:"100%"}})])]),_:1},8,["onSubmit"])])]),_:1})]),_:1})}var $=c(V,[["render",D]]);const k={components:{Login:$}};function B(t,o,l,e,i,f){const s=v("Login");return m(),u(p,{class:"q-pa-xl row justify-center"},{default:n(()=>[a(s)]),_:1})}var j=c(k,[["render",B]]);export{j as default};