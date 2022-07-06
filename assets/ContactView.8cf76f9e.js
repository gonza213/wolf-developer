import{A as B,Q as F}from"./QParallax.28c6b15b.js";import{Q as x}from"./QPage.4b36060e.js";import{d as E,_ as k,c as n,e as g,a5 as o,k as a,j as l,au as Q,a9 as $,aB as C,i as q,aa as L,ab as A,as as D,a6 as u,Q as j,r as w,b4 as M,b5 as _,at as f,a7 as U,ac as N,ad as P,a8 as y,ar as z,R as I}from"./index.f4094d98.js";import{b as v,a as r,Q as m}from"./QItem.d204c620.js";import{u as R,Q as T}from"./useRedes.ddcb03d3.js";import{r as G}from"./database.4370aec1.js";import{c as H,a as h,Q as J,C as K}from"./SuscriptorComponent.5a89da6f.js";import{u as O}from"./use-quasar.2deec9a7.js";import{a as W}from"./index.2cf0d985.js";const X=E({setup(){return{onClick:s=>{R(s)},redes:G}}}),Y={class:"row"},Z=l("div",{class:"col-12"},[l("span",{class:"text-h4"},"Contacto Info")],-1),aa={class:"col-12 q-my-md"},ea=u("Direcci\xF3n:"),oa=u("La Plata, Buenos Aires, Argentina"),ta=u("Email:"),sa=u("gonzav.freelance@gmail.com"),la=u("Celular:"),ra=u("2966-607924"),na={class:"q-pa-md q-gutter-sm"};function ia(e,s,i,c,p,b){return n(),g(Q,{class:"my-card",style:{background:"none","box-shadow":"none"}},{default:o(()=>[a(D,null,{default:o(()=>[l("div",Y,[Z,l("div",aa,[a(Q,{class:"my-card"},{default:o(()=>[a(T,{padding:"",class:"bg-indigo-6"},{default:o(()=>[a(v,null,{default:o(()=>[a(r,{top:"",avatar:""},{default:o(()=>[a($,{color:"dark","text-color":"white",icon:"map"})]),_:1}),a(r,null,{default:o(()=>[a(m,null,{default:o(()=>[ea]),_:1}),a(m,{caption:"",lines:"2"},{default:o(()=>[oa]),_:1})]),_:1})]),_:1}),a(C,{spaced:"",inset:"item"}),a(v,null,{default:o(()=>[a(r,{top:"",avatar:""},{default:o(()=>[a($,{color:"dark","text-color":"white",icon:"email"})]),_:1}),a(r,null,{default:o(()=>[a(m,null,{default:o(()=>[ta]),_:1}),a(m,{caption:"",lines:"2"},{default:o(()=>[sa]),_:1})]),_:1})]),_:1}),a(C,{spaced:"",inset:"item"}),a(v,null,{default:o(()=>[a(r,{top:"",avatar:""},{default:o(()=>[a($,{color:"dark","text-color":"white",icon:"phone"})]),_:1}),a(r,null,{default:o(()=>[a(m,null,{default:o(()=>[la]),_:1}),a(m,{caption:"",lines:"2"},{default:o(()=>[ra]),_:1})]),_:1})]),_:1}),a(C,{spaced:"",inset:"item"}),a(v,null,{default:o(()=>[a(r,{top:"",avatar:""}),a(r,null,{default:o(()=>[l("div",na,[(n(!0),q(A,null,L(e.redes,t=>(n(),g(j,{key:t,onClick:d=>e.onClick(t.red),round:"",color:"dark",icon:"lab la-"+t.red},null,8,["onClick","icon"]))),128))])]),_:1})]),_:1})]),_:1})]),_:1})])])]),_:1})]),_:1})}var ca=k(X,[["render",ia]]);const da=async e=>await W.post(`${B}/api/contactos`,e);const ma=E({setup(){let e=w({}),s=w({});const i=w(),c=O(),p=H().shape({mensaje:h().required("El mensaje es obligatorio."),asunto:h().required("El asunto es obligatorio."),email:h().email("El email es inv\xE1lido.").required("El email es obligatorio."),nombre:h().required("El nombre es obligatorio.")});return{formData:e,formError:s,msgError:i,onSubmit:async()=>{s.value={};try{await p.validate(e.value,{abortEarly:!1});try{c.loadingBar.start();const{data:t}=await da(e.value);t.msg=="ok"&&(c.notify({message:"\xA1Mensaje enviado! Estare en contacto con usted.",color:"green-10",position:"top-right",icon:"lar la-check-circle"}),e.value={},i.value="",c.loadingBar.stop())}catch(t){console.log(t)}}catch(t){t.inner.forEach(d=>{s.value[d.path]=d.message,i.value=s.value[d.path]})}}}}}),ua=e=>(N("data-v-1a4e554a"),e=e(),P(),e),pa=ua(()=>l("div",{class:"col-12 q-py-md"},[l("span",{class:"text-h4"},"Formulario de Contacto")],-1)),_a={class:"q-gutter-md",style:{width:"100%"}},fa={class:"row justify-center"},va={class:"self-center text-red-6 text-weight-bold"},ha={class:"row justify-center"};function ga(e,s,i,c,p,b){return n(),g(Q,{class:"my-card"},{default:o(()=>[a(D,null,{default:o(()=>[pa,l("div",_a,[a(J,{class:"q-gutter-md",onSubmit:M(e.onSubmit,["prevent"])},{default:o(()=>[a(_,{modelValue:e.formData.nombre,"onUpdate:modelValue":s[0]||(s[0]=t=>e.formData.nombre=t),filled:"",label:"Nombre completo",class:f({error:e.formError.nombre}),color:"indigo-6"},null,8,["modelValue","class"]),a(_,{modelValue:e.formData.email,"onUpdate:modelValue":s[1]||(s[1]=t=>e.formData.email=t),filled:"",label:"Correo electr\xF3nico",class:f({error:e.formError.email}),color:"indigo-6"},null,8,["modelValue","class"]),a(_,{modelValue:e.formData.asunto,"onUpdate:modelValue":s[2]||(s[2]=t=>e.formData.asunto=t),filled:"",label:"Asunto",class:f({error:e.formError.asunto}),color:"indigo-6"},null,8,["modelValue","class"]),a(_,{modelValue:e.formData.mensaje,"onUpdate:modelValue":s[3]||(s[3]=t=>e.formData.mensaje=t),filled:"",type:"textarea",label:"Escribe un mensaje...",class:f({error:e.formError.mensaje}),color:"indigo-6"},null,8,["modelValue","class"]),l("div",fa,[l("span",va,U(e.msgError),1)]),l("div",ha,[a(j,{type:"submit",color:"indigo-6",label:"Enviar mensaje",class:"self-center q-ma-sm q-py-sm"})])]),_:1},8,["onSubmit"])])]),_:1})]),_:1})}var ba=k(ma,[["render",ga],["__scopeId","data-v-1a4e554a"]]);const $a=E({name:"ContactView",components:{ContactInfo:ca,ContactForm:ba,ContactMap:K}}),Ca={class:"q-pa-xl"},wa=l("img",{src:"https://res.cloudinary.com/dazfmv5ls/image/upload/v1656452520/wolves-188553_1280_fewfef.jpg"},null,-1),ya=l("h1",{class:"text-white text-weight-bold title"},"Contacto",-1),Qa={class:"row q-pa-xl"},qa={class:"col-md-5 col-12 q-pa-md"},Ea={class:"col-md-7 col-12 q-pa-md"},ka={class:"col-12 q-pa-md"};function Va(e,s,i,c,p,b){const t=y("ContactInfo"),d=y("ContactForm"),S=y("ContactMap"),V=z("animate-onscroll");return n(),g(x,{class:"q-pa-md"},{default:o(()=>[l("div",Ca,[a(F,{height:200,speed:.5,elevated:""},{media:o(()=>[wa]),default:o(()=>[ya]),_:1},8,["speed"])]),l("div",Qa,[I((n(),q("div",qa,[a(t)])),[[V,"animated fadeInLeft",void 0,{repeat:!0}]]),I((n(),q("div",Ea,[a(d)])),[[V,"animated fadeInLeft",void 0,{repeat:!0}]]),l("div",ka,[a(S)])])]),_:1})}var Ma=k($a,[["render",Va]]);export{Ma as default};
