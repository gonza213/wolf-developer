import{A as F,Q as B}from"./QParallax.12e0a857.js";import{Q as L}from"./QPage.8a840f9e.js";import{d as E,_ as k,e as n,f as g,F as o,l as e,k as l,aw as Q,J as $,aD as C,j as q,K as x,L as A,au as D,G as u,Q as j,a as M,r as w,b5 as N,b6 as _,av as f,H as U,M as P,N as z,I as y,at as R,a6 as I}from"./index.833c13ce.js";import{b as v,a as r,Q as m}from"./QItem.1c30aeee.js";import{u as G,Q as H}from"./useRedes.f2a69187.js";import{r as J}from"./database.4370aec1.js";import{Q as K}from"./QForm.88201d79.js";import{u as T}from"./use-quasar.edf5e3c7.js";import{c as O,a as h,C as W}from"./SuscriptorComponent.7345cc88.js";const X=E({setup(){return{onClick:s=>{G(s)},redes:J}}}),Y={class:"row"},Z=l("div",{class:"col-12"},[l("span",{class:"text-h4"},"Contacto Info")],-1),ee={class:"col-12 q-my-md"},ae=u("Direcci\xF3n:"),oe=u("La Plata, Buenos Aires, Argentina"),te=u("Email:"),se=u("gonzav.freelance@gmail.com"),le=u("Celular:"),re=u("2966-607924"),ne={class:"q-pa-md q-gutter-sm"};function ie(a,s,i,c,p,b){return n(),g(Q,{class:"my-card",style:{background:"none","box-shadow":"none"}},{default:o(()=>[e(D,null,{default:o(()=>[l("div",Y,[Z,l("div",ee,[e(Q,{class:"my-card"},{default:o(()=>[e(H,{padding:"",class:"bg-indigo-6"},{default:o(()=>[e(v,null,{default:o(()=>[e(r,{top:"",avatar:""},{default:o(()=>[e($,{color:"dark","text-color":"white",icon:"map"})]),_:1}),e(r,null,{default:o(()=>[e(m,null,{default:o(()=>[ae]),_:1}),e(m,{caption:"",lines:"2"},{default:o(()=>[oe]),_:1})]),_:1})]),_:1}),e(C,{spaced:"",inset:"item"}),e(v,null,{default:o(()=>[e(r,{top:"",avatar:""},{default:o(()=>[e($,{color:"dark","text-color":"white",icon:"email"})]),_:1}),e(r,null,{default:o(()=>[e(m,null,{default:o(()=>[te]),_:1}),e(m,{caption:"",lines:"2"},{default:o(()=>[se]),_:1})]),_:1})]),_:1}),e(C,{spaced:"",inset:"item"}),e(v,null,{default:o(()=>[e(r,{top:"",avatar:""},{default:o(()=>[e($,{color:"dark","text-color":"white",icon:"phone"})]),_:1}),e(r,null,{default:o(()=>[e(m,null,{default:o(()=>[le]),_:1}),e(m,{caption:"",lines:"2"},{default:o(()=>[re]),_:1})]),_:1})]),_:1}),e(C,{spaced:"",inset:"item"}),e(v,null,{default:o(()=>[e(r,{top:"",avatar:""}),e(r,null,{default:o(()=>[l("div",ne,[(n(!0),q(A,null,x(a.redes,t=>(n(),g(j,{key:t,onClick:d=>a.onClick(t.red),round:"",color:"dark",icon:"lab la-"+t.red},null,8,["onClick","icon"]))),128))])]),_:1})]),_:1})]),_:1})]),_:1})])])]),_:1})]),_:1})}var ce=k(X,[["render",ie]]);const de=async a=>await M.post(`${F}/api/contactos`,a);const me=E({setup(){let a=w({}),s=w({});const i=w(),c=T(),p=O().shape({mensaje:h().required("El mensaje es obligatorio."),asunto:h().required("El asunto es obligatorio."),email:h().email("El email es inv\xE1lido.").required("El email es obligatorio."),nombre:h().required("El nombre es obligatorio.")});return{formData:a,formError:s,msgError:i,onSubmit:async()=>{s.value={};try{await p.validate(a.value,{abortEarly:!1});try{c.loadingBar.start();const{data:t}=await de(a.value);t.msg=="ok"&&(c.notify({message:"\xA1Mensaje enviado! Estare en contacto con usted.",color:"green-10",position:"top-right",icon:"lar la-check-circle"}),a.value={},i.value="",c.loadingBar.stop())}catch(t){console.log(t)}}catch(t){t.inner.forEach(d=>{s.value[d.path]=d.message,i.value=s.value[d.path]})}}}}}),ue=a=>(P("data-v-1a4e554a"),a=a(),z(),a),pe=ue(()=>l("div",{class:"col-12 q-py-md"},[l("span",{class:"text-h4"},"Formulario de Contacto")],-1)),_e={class:"q-gutter-md",style:{width:"100%"}},fe={class:"row justify-center"},ve={class:"self-center text-red-6 text-weight-bold"},he={class:"row justify-center"};function ge(a,s,i,c,p,b){return n(),g(Q,{class:"my-card"},{default:o(()=>[e(D,null,{default:o(()=>[pe,l("div",_e,[e(K,{class:"q-gutter-md",onSubmit:N(a.onSubmit,["prevent"])},{default:o(()=>[e(_,{modelValue:a.formData.nombre,"onUpdate:modelValue":s[0]||(s[0]=t=>a.formData.nombre=t),filled:"",label:"Nombre completo",class:f({error:a.formError.nombre}),color:"indigo-6"},null,8,["modelValue","class"]),e(_,{modelValue:a.formData.email,"onUpdate:modelValue":s[1]||(s[1]=t=>a.formData.email=t),filled:"",label:"Correo electr\xF3nico",class:f({error:a.formError.email}),color:"indigo-6"},null,8,["modelValue","class"]),e(_,{modelValue:a.formData.asunto,"onUpdate:modelValue":s[2]||(s[2]=t=>a.formData.asunto=t),filled:"",label:"Asunto",class:f({error:a.formError.asunto}),color:"indigo-6"},null,8,["modelValue","class"]),e(_,{modelValue:a.formData.mensaje,"onUpdate:modelValue":s[3]||(s[3]=t=>a.formData.mensaje=t),filled:"",type:"textarea",label:"Escribe un mensaje...",class:f({error:a.formError.mensaje}),color:"indigo-6"},null,8,["modelValue","class"]),l("div",fe,[l("span",ve,U(a.msgError),1)]),l("div",he,[e(j,{type:"submit",color:"indigo-6",label:"Enviar mensaje",class:"self-center q-ma-sm q-py-sm"})])]),_:1},8,["onSubmit"])])]),_:1})]),_:1})}var be=k(me,[["render",ge],["__scopeId","data-v-1a4e554a"]]);const $e=E({name:"ContactView",components:{ContactInfo:ce,ContactForm:be,ContactMap:W}}),Ce={class:"q-pa-xl"},we=l("img",{src:"https://res.cloudinary.com/dazfmv5ls/image/upload/v1656452520/wolves-188553_1280_fewfef.jpg"},null,-1),ye=l("h1",{class:"text-white text-weight-bold title"},"Contacto",-1),Qe={class:"row q-pa-xl"},qe={class:"col-md-5 col-12 q-pa-md"},Ee={class:"col-md-7 col-12 q-pa-md"},ke={class:"col-12 q-pa-md"};function Ve(a,s,i,c,p,b){const t=y("ContactInfo"),d=y("ContactForm"),S=y("ContactMap"),V=R("animate-onscroll");return n(),g(L,{class:"q-pa-md"},{default:o(()=>[l("div",Ce,[e(B,{height:200,speed:.5,elevated:""},{media:o(()=>[we]),default:o(()=>[ye]),_:1},8,["speed"])]),l("div",Qe,[I((n(),q("div",qe,[e(t)])),[[V,"animated fadeInLeft",void 0,{repeat:!0}]]),I((n(),q("div",Ee,[e(d)])),[[V,"animated fadeInLeft",void 0,{repeat:!0}]]),l("div",ke,[e(S)])])]),_:1})}var Me=k($e,[["render",Ve]]);export{Me as default};
