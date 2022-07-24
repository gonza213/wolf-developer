import{Q as D}from"./QParallax.bb3c28f5.js";import{Q as S}from"./QPage.982d45e1.js";import{b as r,c as y,E as a,k as e,j as s,at as k,I as w,aA as C,i as m,J as B,Q as j,aq as F,K as L,ar as E,F as f,aB as A,_ as N,r as Q,aD as M,aE as v,as as g,G as h,aC as b,L as U,M as z,ap as P,a5 as V}from"./index.6a8c3e3a.js";import{a as x,Q as i}from"./QItem.08e2fc98.js";import{Q as p}from"./QItemLabel.f0baeb1e.js";import{Q as G}from"./QList.cac964d9.js";import{r as J}from"./database.4265c054.js";import{u as K}from"./useRedes.c627384b.js";import{Q as R}from"./QForm.52509949.js";import{u as T}from"./use-quasar.e8726c4e.js";import{c as H,a as q}from"./object.d8999c0c.js";import{C as O}from"./SuscriptorComponent.1d14a699.js";const W={class:"row"},X=s("div",{class:"col-12"},[s("span",{class:"text-h4"},"Contacto Info")],-1),Y={class:"col-12 q-my-md"},Z=f("Direcci\xF3n:"),ee=f("La Plata, Buenos Aires, Argentina"),ae=f("Email:"),te=f("gonzav.freelance@gmail.com"),oe=f("Celular:"),se=f("2966-607924"),le={class:"q-pa-md q-gutter-sm"},re={__name:"ContactInfoComponent",setup(c){const o=t=>{K(t)};return(t,d)=>(r(),y(k,{class:"my-card",style:{background:"none","box-shadow":"none"}},{default:a(()=>[e(E,null,{default:a(()=>[s("div",W,[X,s("div",Y,[e(k,{class:"my-card"},{default:a(()=>[e(G,{padding:"",class:"bg-indigo-6"},{default:a(()=>[e(x,null,{default:a(()=>[e(i,{top:"",avatar:""},{default:a(()=>[e(w,{color:"dark","text-color":"white",icon:"map"})]),_:1}),e(i,null,{default:a(()=>[e(p,null,{default:a(()=>[Z]),_:1}),e(p,{caption:"",lines:"2"},{default:a(()=>[ee]),_:1})]),_:1})]),_:1}),e(C,{spaced:"",inset:"item"}),e(x,null,{default:a(()=>[e(i,{top:"",avatar:""},{default:a(()=>[e(w,{color:"dark","text-color":"white",icon:"email"})]),_:1}),e(i,null,{default:a(()=>[e(p,null,{default:a(()=>[ae]),_:1}),e(p,{caption:"",lines:"2"},{default:a(()=>[te]),_:1})]),_:1})]),_:1}),e(C,{spaced:"",inset:"item"}),e(x,null,{default:a(()=>[e(i,{top:"",avatar:""},{default:a(()=>[e(w,{color:"dark","text-color":"white",icon:"phone"})]),_:1}),e(i,null,{default:a(()=>[e(p,null,{default:a(()=>[oe]),_:1}),e(p,{caption:"",lines:"2"},{default:a(()=>[se]),_:1})]),_:1})]),_:1}),e(C,{spaced:"",inset:"item"}),e(x,null,{default:a(()=>[e(i,{top:"",avatar:""}),e(i,null,{default:a(()=>[s("div",le,[(r(!0),m(L,null,B(F(J),u=>(r(),y(j,{key:u,onClick:$=>o(u.red),round:"",color:"dark",icon:"lab la-"+u.red},null,8,["onClick","icon"]))),128))])]),_:1})]),_:1})]),_:1})]),_:1})])])]),_:1})]),_:1}))}},ne=async c=>await A.post("/contactos",c);const ce=c=>(U("data-v-0d6cdb34"),c=c(),z(),c),ie=ce(()=>s("div",{class:"col-12 q-py-md"},[s("span",{class:"text-h4"},"Formulario de Contacto")],-1)),de={class:"q-gutter-md",style:{width:"100%"}},ue={key:0,class:"q-mx-lg text-red-6 text-weight-bold"},me={key:1,class:"q-mx-lg text-red-6 text-weight-bold"},_e={key:2,class:"q-mx-lg text-red-6 text-weight-bold"},pe={key:3,class:"q-mx-lg text-red-6 text-weight-bold"},fe={class:"row justify-center"},ve={__name:"ContactFormComponent",setup(c){const o=Q({}),t=Q({}),d=T(),u=Q(!1),$=H().shape({nombre:q().required("Debe ingresar su nombre."),email:q().email("El correo electr\xF3nico es inv\xE1lido.").required("Debe ingresar un correo electr\xF3nico."),asunto:q().required("Debe ingresar un asunto."),mensaje:q().required("Debe escribir un mensaje.")}),I=async()=>{t.value={};try{await $.validate(o.value,{abortEarly:!1});try{u.value=!0,d.loadingBar.start();const{data:_}=await ne(o.value);_.msg=="ok"&&(d.notify({message:"\xA1Mensaje enviado! Estare en contacto con usted.",color:"green-10",position:"top-right",icon:"lar la-check-circle"}),u.value=!1,o.value={},msgError.value="",d.loadingBar.stop())}catch(_){_.response.data.errors.forEach(n=>{t.value[n.param]=n.msg})}}catch(_){_.inner.forEach(l=>{t.value[l.path]=l.message})}};return(_,l)=>(r(),y(k,{class:"my-card"},{default:a(()=>[e(E,null,{default:a(()=>[ie,s("div",de,[e(R,{class:"q-gutter-md",onSubmit:M(I,["prevent"])},{default:a(()=>[e(v,{modelValue:o.value.nombre,"onUpdate:modelValue":l[0]||(l[0]=n=>o.value.nombre=n),filled:"",label:"Nombre completo",class:g({error:t.value.nombre}),color:"indigo-6"},null,8,["modelValue","class"]),t.value.nombre?(r(),m("span",ue,h(t.value.nombre),1)):b("",!0),e(v,{modelValue:o.value.email,"onUpdate:modelValue":l[1]||(l[1]=n=>o.value.email=n),filled:"",label:"Correo electr\xF3nico",class:g({error:t.value.email}),color:"indigo-6"},null,8,["modelValue","class"]),t.value.email?(r(),m("span",me,h(t.value.email),1)):b("",!0),e(v,{modelValue:o.value.asunto,"onUpdate:modelValue":l[2]||(l[2]=n=>o.value.asunto=n),filled:"",label:"Asunto",class:g({error:t.value.asunto}),color:"indigo-6"},null,8,["modelValue","class"]),t.value.asunto?(r(),m("span",_e,h(t.value.asunto),1)):b("",!0),e(v,{modelValue:o.value.mensaje,"onUpdate:modelValue":l[3]||(l[3]=n=>o.value.mensaje=n),filled:"",type:"textarea",label:"Escribe un mensaje...",class:g({error:t.value.mensaje}),color:"indigo-6"},null,8,["modelValue","class"]),t.value.mensaje?(r(),m("span",pe,h(t.value.mensaje),1)):b("",!0),s("div",fe,[e(j,{type:"submit",color:"indigo-6",label:"Enviar mensaje",class:"self-center q-ma-sm q-py-sm",loading:u.value},null,8,["loading"])])]),_:1},8,["onSubmit"])])]),_:1})]),_:1}))}};var ge=N(ve,[["__scopeId","data-v-0d6cdb34"]]);const he={class:"q-pa-md-xl q-pa-xs-sm"},be=s("img",{src:"https://res.cloudinary.com/dazfmv5ls/image/upload/v1656452520/wolves-188553_1280_fewfef.jpg"},null,-1),xe=s("h1",{class:"text-white text-weight-bold title"},"Contacto",-1),qe={class:"row q-pa-md-xl q-pa-xs-sm row justify-center"},ye={class:"col-md-5 col-lg-4 col-12 q-pa-md-md q-pa-xs-sm"},we={class:"col-md-6 col-lg-6 col-12 q-pa-lg-lg q-pa-md-md q-pa-xs-sm"},Ce={class:"col-12 q-pa-md"},Ae={__name:"ContactView",setup(c){return(o,t)=>{const d=P("animate-onscroll");return r(),y(S,{class:"q-pa-md"},{default:a(()=>[s("div",he,[e(D,{height:200,speed:.5,elevated:""},{media:a(()=>[be]),default:a(()=>[xe]),_:1},8,["speed"])]),s("div",qe,[V((r(),m("div",ye,[e(re)])),[[d,"animated fadeInLeft",void 0,{repeat:!0}]]),V((r(),m("div",we,[e(ge)])),[[d,"animated fadeInLeft",void 0,{repeat:!0}]]),s("div",Ce,[e(O)])])]),_:1})}}};export{Ae as default};
