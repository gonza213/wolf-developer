import{A as x,Q as F}from"./QParallax.1ed93a4f.js";import{Q as B}from"./QPage.05091dce.js";import{d as E,_ as k,e as n,f as g,F as o,l as e,k as l,aw as y,J as $,aD as C,j as Q,K as L,L as A,au as D,G as u,Q as j,a as M,r as w,b5 as N,b6 as _,av as f,H as U,M as P,N as z,I as q,at as R,a6 as I}from"./index.3ebbab7f.js";import{b as v,a as r,Q as m}from"./QItem.6e5b4b1a.js";import{u as G,Q as H}from"./useRedes.f2da4444.js";import{r as J}from"./database.4370aec1.js";import{Q as K}from"./QForm.d7e6978e.js";import{u as T}from"./use-quasar.9e4f1d04.js";import{c as O,a as h,C as W}from"./SuscriptorComponent.27be932d.js";const X=E({setup(){return{onClick:s=>{G(s)},redes:J}}}),Y={class:"row"},Z=l("div",{class:"col-12"},[l("span",{class:"text-h4"},"Contacto Info")],-1),ee={class:"col-12 q-my-md"},ae=u("Direcci\xF3n:"),oe=u("La Plata, Buenos Aires, Argentina"),te=u("Email:"),se=u("gonzav.freelance@gmail.com"),le=u("Celular:"),re=u("2966-607924"),ne={class:"q-pa-md q-gutter-sm"};function ie(a,s,i,d,p,b){return n(),g(y,{class:"my-card",style:{background:"none","box-shadow":"none"}},{default:o(()=>[e(D,null,{default:o(()=>[l("div",Y,[Z,l("div",ee,[e(y,{class:"my-card"},{default:o(()=>[e(H,{padding:"",class:"bg-indigo-6"},{default:o(()=>[e(v,null,{default:o(()=>[e(r,{top:"",avatar:""},{default:o(()=>[e($,{color:"dark","text-color":"white",icon:"map"})]),_:1}),e(r,null,{default:o(()=>[e(m,null,{default:o(()=>[ae]),_:1}),e(m,{caption:"",lines:"2"},{default:o(()=>[oe]),_:1})]),_:1})]),_:1}),e(C,{spaced:"",inset:"item"}),e(v,null,{default:o(()=>[e(r,{top:"",avatar:""},{default:o(()=>[e($,{color:"dark","text-color":"white",icon:"email"})]),_:1}),e(r,null,{default:o(()=>[e(m,null,{default:o(()=>[te]),_:1}),e(m,{caption:"",lines:"2"},{default:o(()=>[se]),_:1})]),_:1})]),_:1}),e(C,{spaced:"",inset:"item"}),e(v,null,{default:o(()=>[e(r,{top:"",avatar:""},{default:o(()=>[e($,{color:"dark","text-color":"white",icon:"phone"})]),_:1}),e(r,null,{default:o(()=>[e(m,null,{default:o(()=>[le]),_:1}),e(m,{caption:"",lines:"2"},{default:o(()=>[re]),_:1})]),_:1})]),_:1}),e(C,{spaced:"",inset:"item"}),e(v,null,{default:o(()=>[e(r,{top:"",avatar:""}),e(r,null,{default:o(()=>[l("div",ne,[(n(!0),Q(A,null,L(a.redes,t=>(n(),g(j,{key:t,onClick:c=>a.onClick(t.red),round:"",color:"dark",icon:"lab la-"+t.red},null,8,["onClick","icon"]))),128))])]),_:1})]),_:1})]),_:1})]),_:1})])])]),_:1})]),_:1})}var de=k(X,[["render",ie]]);const ce=async a=>await M.post(`${x}/api/contactos`,a);const me=E({setup(){let a=w({}),s=w({});const i=w(),d=T(),p=O().shape({mensaje:h().required("El mensaje es obligatorio."),asunto:h().required("El asunto es obligatorio."),email:h().email("El email es inv\xE1lido.").required("El email es obligatorio."),nombre:h().required("El nombre es obligatorio.")});return{formData:a,formError:s,msgError:i,onSubmit:async()=>{s.value={};try{await p.validate(a.value,{abortEarly:!1});try{d.loadingBar.start();const{data:t}=await ce(a.value);t.msg=="ok"&&(d.notify({message:"\xA1Mensaje enviado! Estare en contacto con usted.",color:"green-10",position:"top-right",icon:"lar la-check-circle"}),a.value={},i.value="",d.loadingBar.stop())}catch(t){console.log(t)}}catch(t){t.inner.forEach(c=>{s.value[c.path]=c.message,i.value=s.value[c.path]})}}}}}),ue=a=>(P("data-v-1a4e554a"),a=a(),z(),a),pe=ue(()=>l("div",{class:"col-12 q-py-md"},[l("span",{class:"text-h4"},"Formulario de Contacto")],-1)),_e={class:"q-gutter-md",style:{width:"100%"}},fe={class:"row justify-center"},ve={class:"self-center text-red-6 text-weight-bold"},he={class:"row justify-center"};function ge(a,s,i,d,p,b){return n(),g(y,{class:"my-card"},{default:o(()=>[e(D,null,{default:o(()=>[pe,l("div",_e,[e(K,{class:"q-gutter-md",onSubmit:N(a.onSubmit,["prevent"])},{default:o(()=>[e(_,{modelValue:a.formData.nombre,"onUpdate:modelValue":s[0]||(s[0]=t=>a.formData.nombre=t),filled:"",label:"Nombre completo",class:f({error:a.formError.nombre}),color:"indigo-6"},null,8,["modelValue","class"]),e(_,{modelValue:a.formData.email,"onUpdate:modelValue":s[1]||(s[1]=t=>a.formData.email=t),filled:"",label:"Correo electr\xF3nico",class:f({error:a.formError.email}),color:"indigo-6"},null,8,["modelValue","class"]),e(_,{modelValue:a.formData.asunto,"onUpdate:modelValue":s[2]||(s[2]=t=>a.formData.asunto=t),filled:"",label:"Asunto",class:f({error:a.formError.asunto}),color:"indigo-6"},null,8,["modelValue","class"]),e(_,{modelValue:a.formData.mensaje,"onUpdate:modelValue":s[3]||(s[3]=t=>a.formData.mensaje=t),filled:"",type:"textarea",label:"Escribe un mensaje...",class:f({error:a.formError.mensaje}),color:"indigo-6"},null,8,["modelValue","class"]),l("div",fe,[l("span",ve,U(a.msgError),1)]),l("div",he,[e(j,{type:"submit",color:"indigo-6",label:"Enviar mensaje",class:"self-center q-ma-sm q-py-sm"})])]),_:1},8,["onSubmit"])])]),_:1})]),_:1})}var be=k(me,[["render",ge],["__scopeId","data-v-1a4e554a"]]);const $e=E({name:"ContactView",components:{ContactInfo:de,ContactForm:be,ContactMap:W}}),Ce={class:"q-pa-md-xl q-pa-xs-sm"},we=l("img",{src:"https://res.cloudinary.com/dazfmv5ls/image/upload/v1656452520/wolves-188553_1280_fewfef.jpg"},null,-1),qe=l("h1",{class:"text-white text-weight-bold title"},"Contacto",-1),ye={class:"row q-pa-md-xl q-pa-xs-sm"},Qe={class:"col-md-5 col-12 q-pa-md-md q-pa-xs-sm"},Ee={class:"col-md-7 col-12 q-pa-md-md q-pa-xs-sm"},ke={class:"col-12 q-pa-md"};function Ve(a,s,i,d,p,b){const t=q("ContactInfo"),c=q("ContactForm"),S=q("ContactMap"),V=R("animate-onscroll");return n(),g(B,{class:"q-pa-md"},{default:o(()=>[l("div",Ce,[e(F,{height:200,speed:.5,elevated:""},{media:o(()=>[we]),default:o(()=>[qe]),_:1},8,["speed"])]),l("div",ye,[I((n(),Q("div",Qe,[e(t)])),[[V,"animated fadeInLeft",void 0,{repeat:!0}]]),I((n(),Q("div",Ee,[e(c)])),[[V,"animated fadeInLeft",void 0,{repeat:!0}]]),l("div",ke,[e(S)])])]),_:1})}var Me=k($e,[["render",Ve]]);export{Me as default};