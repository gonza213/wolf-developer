import{A as F,Q as L}from"./QParallax.33ce1ff9.js";import{Q as A}from"./QPage.00dc6b8f.js";import{d as D,_ as V,e as l,f as C,F as a,l as o,k as r,at as Q,J as y,aA as w,j as i,K as M,L as N,ar as x,G as u,Q as S,a as U,r as E,aC as P,aD as _,as as v,H as h,aB as g,M as z,N as R,I as k,aq as G,a6 as j}from"./index.29806dde.js";import{a as b,Q as n}from"./QItem.c9fc7e41.js";import{Q as m}from"./QItemLabel.4153c487.js";import{Q as H}from"./QList.f8bdf586.js";import{r as J}from"./database.4370aec1.js";import{u as K}from"./useRedes.abdca618.js";import{Q as T}from"./QForm.b87600b7.js";import{u as O}from"./use-quasar.150d19b7.js";import{c as W,a as $}from"./object.d8999c0c.js";import{C as X}from"./SuscriptorComponent.4a74079f.js";const Y=D({setup(){return{onClick:s=>{K(s)},redes:J}}}),Z={class:"row"},ee=r("div",{class:"col-12"},[r("span",{class:"text-h4"},"Contacto Info")],-1),oe={class:"col-12 q-my-md"},ae=u("Direcci\xF3n:"),te=u("La Plata, Buenos Aires, Argentina"),se=u("Email:"),re=u("gonzav.freelance@gmail.com"),le=u("Celular:"),ne=u("2966-607924"),ie={class:"q-pa-md q-gutter-sm"};function de(e,s,d,c,f,q){return l(),C(Q,{class:"my-card",style:{background:"none","box-shadow":"none"}},{default:a(()=>[o(x,null,{default:a(()=>[r("div",Z,[ee,r("div",oe,[o(Q,{class:"my-card"},{default:a(()=>[o(H,{padding:"",class:"bg-indigo-6"},{default:a(()=>[o(b,null,{default:a(()=>[o(n,{top:"",avatar:""},{default:a(()=>[o(y,{color:"dark","text-color":"white",icon:"map"})]),_:1}),o(n,null,{default:a(()=>[o(m,null,{default:a(()=>[ae]),_:1}),o(m,{caption:"",lines:"2"},{default:a(()=>[te]),_:1})]),_:1})]),_:1}),o(w,{spaced:"",inset:"item"}),o(b,null,{default:a(()=>[o(n,{top:"",avatar:""},{default:a(()=>[o(y,{color:"dark","text-color":"white",icon:"email"})]),_:1}),o(n,null,{default:a(()=>[o(m,null,{default:a(()=>[se]),_:1}),o(m,{caption:"",lines:"2"},{default:a(()=>[re]),_:1})]),_:1})]),_:1}),o(w,{spaced:"",inset:"item"}),o(b,null,{default:a(()=>[o(n,{top:"",avatar:""},{default:a(()=>[o(y,{color:"dark","text-color":"white",icon:"phone"})]),_:1}),o(n,null,{default:a(()=>[o(m,null,{default:a(()=>[le]),_:1}),o(m,{caption:"",lines:"2"},{default:a(()=>[ne]),_:1})]),_:1})]),_:1}),o(w,{spaced:"",inset:"item"}),o(b,null,{default:a(()=>[o(n,{top:"",avatar:""}),o(n,null,{default:a(()=>[r("div",ie,[(l(!0),i(N,null,M(e.redes,t=>(l(),C(S,{key:t,onClick:p=>e.onClick(t.red),round:"",color:"dark",icon:"lab la-"+t.red},null,8,["onClick","icon"]))),128))])]),_:1})]),_:1})]),_:1})]),_:1})])])]),_:1})]),_:1})}var ce=V(Y,[["render",de]]);const me=async e=>await U.post(`${F}/api/contactos`,e);const ue=D({setup(){const e=E({}),s=E({}),d=O(),c=E(!1),f=W().shape({nombre:$().required("Debe ingresar su nombre."),email:$().email("El correo electr\xF3nico es inv\xE1lido.").required("Debe ingresar un correo electr\xF3nico."),asunto:$().required("Debe ingresar un asunto."),mensaje:$().required("Debe escribir un mensaje.")});return{formData:e,formError:s,onSubmit:async()=>{s.value={};try{await f.validate(e.value,{abortEarly:!1});try{c.value=!0,d.loadingBar.start();const{data:t}=await me(e.value);t.msg=="ok"&&(d.notify({message:"\xA1Mensaje enviado! Estare en contacto con usted.",color:"green-10",position:"top-right",icon:"lar la-check-circle"}),c.value=!1,e.value={},msgError.value="",d.loadingBar.stop())}catch(t){console.log(t)}}catch(t){t.inner.forEach(p=>{s.value[p.path]=p.message})}},loading:c}}}),pe=e=>(z("data-v-639e4b5e"),e=e(),R(),e),fe=pe(()=>r("div",{class:"col-12 q-py-md"},[r("span",{class:"text-h4"},"Formulario de Contacto")],-1)),_e={class:"q-gutter-md",style:{width:"100%"}},ve={key:0,class:"q-mx-lg text-red-6 text-weight-bold"},he={key:1,class:"q-mx-lg text-red-6 text-weight-bold"},ge={key:2,class:"q-mx-lg text-red-6 text-weight-bold"},be={key:3,class:"q-mx-lg text-red-6 text-weight-bold"},$e={class:"row justify-center"};function Ce(e,s,d,c,f,q){return l(),C(Q,{class:"my-card"},{default:a(()=>[o(x,null,{default:a(()=>[fe,r("div",_e,[o(T,{class:"q-gutter-md",onSubmit:P(e.onSubmit,["prevent"])},{default:a(()=>[o(_,{modelValue:e.formData.nombre,"onUpdate:modelValue":s[0]||(s[0]=t=>e.formData.nombre=t),filled:"",label:"Nombre completo",class:v({error:e.formError.nombre}),color:"indigo-6"},null,8,["modelValue","class"]),e.formError.nombre?(l(),i("span",ve,h(e.formError.nombre),1)):g("",!0),o(_,{modelValue:e.formData.email,"onUpdate:modelValue":s[1]||(s[1]=t=>e.formData.email=t),filled:"",label:"Correo electr\xF3nico",class:v({error:e.formError.email}),color:"indigo-6"},null,8,["modelValue","class"]),e.formError.email?(l(),i("span",he,h(e.formError.email),1)):g("",!0),o(_,{modelValue:e.formData.asunto,"onUpdate:modelValue":s[2]||(s[2]=t=>e.formData.asunto=t),filled:"",label:"Asunto",class:v({error:e.formError.asunto}),color:"indigo-6"},null,8,["modelValue","class"]),e.formError.asunto?(l(),i("span",ge,h(e.formError.asunto),1)):g("",!0),o(_,{modelValue:e.formData.mensaje,"onUpdate:modelValue":s[3]||(s[3]=t=>e.formData.mensaje=t),filled:"",type:"textarea",label:"Escribe un mensaje...",class:v({error:e.formError.mensaje}),color:"indigo-6"},null,8,["modelValue","class"]),e.formError.mensaje?(l(),i("span",be,h(e.formError.mensaje),1)):g("",!0),r("div",$e,[o(S,{type:"submit",color:"indigo-6",label:"Enviar mensaje",class:"self-center q-ma-sm q-py-sm",loading:e.loading},null,8,["loading"])])]),_:1},8,["onSubmit"])])]),_:1})]),_:1})}var qe=V(ue,[["render",Ce],["__scopeId","data-v-639e4b5e"]]);const ye=D({name:"ContactView",components:{ContactInfo:ce,ContactForm:qe,ContactMap:X}}),we={class:"q-pa-md-xl q-pa-xs-sm"},Ee=r("img",{src:"https://res.cloudinary.com/dazfmv5ls/image/upload/v1656452520/wolves-188553_1280_fewfef.jpg"},null,-1),ke=r("h1",{class:"text-white text-weight-bold title"},"Contacto",-1),Qe={class:"row q-pa-md-xl q-pa-xs-sm"},De={class:"col-md-5 col-12 q-pa-md-md q-pa-xs-sm"},Ve={class:"col-md-7 col-12 q-pa-md-md q-pa-xs-sm"},Ie={class:"col-12 q-pa-md"};function je(e,s,d,c,f,q){const t=k("ContactInfo"),p=k("ContactForm"),B=k("ContactMap"),I=G("animate-onscroll");return l(),C(A,{class:"q-pa-md"},{default:a(()=>[r("div",we,[o(L,{height:200,speed:.5,elevated:""},{media:a(()=>[Ee]),default:a(()=>[ke]),_:1},8,["speed"])]),r("div",Qe,[j((l(),i("div",De,[o(t)])),[[I,"animated fadeInLeft",void 0,{repeat:!0}]]),j((l(),i("div",Ve,[o(p)])),[[I,"animated fadeInLeft",void 0,{repeat:!0}]]),r("div",Ie,[o(B)])])]),_:1})}var Ge=V(ye,[["render",je]]);export{Ge as default};
