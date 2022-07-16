import{Q as D}from"./QParallax.e066c8d8.js";import{Q as S}from"./QPage.e84e745b.js";import{b as n,c as y,E as a,k as e,j as s,at as k,I as C,aA as w,i as m,J as B,Q as j,aq as F,K as L,ar as I,F as f,aB as A,_ as N,r as Q,aD as M,aE as v,as as h,G as g,aC as x,L as U,M as z,ap as P,a5 as V}from"./index.0c61262b.js";import{a as b,Q as c}from"./QItem.2fdacce5.js";import{Q as p}from"./QItemLabel.34691db2.js";import{Q as G}from"./QList.13efa13c.js";import{r as J}from"./database.4265c054.js";import{u as K}from"./useRedes.c627384b.js";import{Q as R}from"./QForm.3a4adf3d.js";import{u as T}from"./use-quasar.73035dae.js";import{c as H,a as q}from"./object.d8999c0c.js";import{C as O}from"./SuscriptorComponent.4266bee2.js";const W={class:"row"},X=s("div",{class:"col-12"},[s("span",{class:"text-h4"},"Contacto Info")],-1),Y={class:"col-12 q-my-md"},Z=f("Direcci\xF3n:"),ee=f("La Plata, Buenos Aires, Argentina"),ae=f("Email:"),te=f("gonzav.freelance@gmail.com"),oe=f("Celular:"),se=f("2966-607924"),le={class:"q-pa-md q-gutter-sm"},ne={__name:"ContactInfoComponent",setup(r){const o=t=>{K(t)};return(t,i)=>(n(),y(k,{class:"my-card",style:{background:"none","box-shadow":"none"}},{default:a(()=>[e(I,null,{default:a(()=>[s("div",W,[X,s("div",Y,[e(k,{class:"my-card"},{default:a(()=>[e(G,{padding:"",class:"bg-indigo-6"},{default:a(()=>[e(b,null,{default:a(()=>[e(c,{top:"",avatar:""},{default:a(()=>[e(C,{color:"dark","text-color":"white",icon:"map"})]),_:1}),e(c,null,{default:a(()=>[e(p,null,{default:a(()=>[Z]),_:1}),e(p,{caption:"",lines:"2"},{default:a(()=>[ee]),_:1})]),_:1})]),_:1}),e(w,{spaced:"",inset:"item"}),e(b,null,{default:a(()=>[e(c,{top:"",avatar:""},{default:a(()=>[e(C,{color:"dark","text-color":"white",icon:"email"})]),_:1}),e(c,null,{default:a(()=>[e(p,null,{default:a(()=>[ae]),_:1}),e(p,{caption:"",lines:"2"},{default:a(()=>[te]),_:1})]),_:1})]),_:1}),e(w,{spaced:"",inset:"item"}),e(b,null,{default:a(()=>[e(c,{top:"",avatar:""},{default:a(()=>[e(C,{color:"dark","text-color":"white",icon:"phone"})]),_:1}),e(c,null,{default:a(()=>[e(p,null,{default:a(()=>[oe]),_:1}),e(p,{caption:"",lines:"2"},{default:a(()=>[se]),_:1})]),_:1})]),_:1}),e(w,{spaced:"",inset:"item"}),e(b,null,{default:a(()=>[e(c,{top:"",avatar:""}),e(c,null,{default:a(()=>[s("div",le,[(n(!0),m(L,null,B(F(J),d=>(n(),y(j,{key:d,onClick:$=>o(d.red),round:"",color:"dark",icon:"lab la-"+d.red},null,8,["onClick","icon"]))),128))])]),_:1})]),_:1})]),_:1})]),_:1})])])]),_:1})]),_:1}))}},re=async r=>await A.post("/contactos",r);const ce=r=>(U("data-v-2dde6c94"),r=r(),z(),r),ie=ce(()=>s("div",{class:"col-12 q-py-md"},[s("span",{class:"text-h4"},"Formulario de Contacto")],-1)),de={class:"q-gutter-md",style:{width:"100%"}},ue={key:0,class:"q-mx-lg text-red-6 text-weight-bold"},me={key:1,class:"q-mx-lg text-red-6 text-weight-bold"},_e={key:2,class:"q-mx-lg text-red-6 text-weight-bold"},pe={key:3,class:"q-mx-lg text-red-6 text-weight-bold"},fe={class:"row justify-center"},ve={__name:"ContactFormComponent",setup(r){const o=Q({}),t=Q({}),i=T(),d=Q(!1),$=H().shape({nombre:q().required("Debe ingresar su nombre."),email:q().email("El correo electr\xF3nico es inv\xE1lido.").required("Debe ingresar un correo electr\xF3nico."),asunto:q().required("Debe ingresar un asunto."),mensaje:q().required("Debe escribir un mensaje.")}),E=async()=>{t.value={};try{await $.validate(o.value,{abortEarly:!1});try{d.value=!0,i.loadingBar.start();const{data:_}=await re(o.value);_.msg=="ok"&&(i.notify({message:"\xA1Mensaje enviado! Estare en contacto con usted.",color:"green-10",position:"top-right",icon:"lar la-check-circle"}),d.value=!1,o.value={},msgError.value="",i.loadingBar.stop())}catch(_){console.log(_)}}catch(_){_.inner.forEach(l=>{t.value[l.path]=l.message})}};return(_,l)=>(n(),y(k,{class:"my-card"},{default:a(()=>[e(I,null,{default:a(()=>[ie,s("div",de,[e(R,{class:"q-gutter-md",onSubmit:M(E,["prevent"])},{default:a(()=>[e(v,{modelValue:o.value.nombre,"onUpdate:modelValue":l[0]||(l[0]=u=>o.value.nombre=u),filled:"",label:"Nombre completo",class:h({error:t.value.nombre}),color:"indigo-6"},null,8,["modelValue","class"]),t.value.nombre?(n(),m("span",ue,g(t.value.nombre),1)):x("",!0),e(v,{modelValue:o.value.email,"onUpdate:modelValue":l[1]||(l[1]=u=>o.value.email=u),filled:"",label:"Correo electr\xF3nico",class:h({error:t.value.email}),color:"indigo-6"},null,8,["modelValue","class"]),t.value.email?(n(),m("span",me,g(t.value.email),1)):x("",!0),e(v,{modelValue:o.value.asunto,"onUpdate:modelValue":l[2]||(l[2]=u=>o.value.asunto=u),filled:"",label:"Asunto",class:h({error:t.value.asunto}),color:"indigo-6"},null,8,["modelValue","class"]),t.value.asunto?(n(),m("span",_e,g(t.value.asunto),1)):x("",!0),e(v,{modelValue:o.value.mensaje,"onUpdate:modelValue":l[3]||(l[3]=u=>o.value.mensaje=u),filled:"",type:"textarea",label:"Escribe un mensaje...",class:h({error:t.value.mensaje}),color:"indigo-6"},null,8,["modelValue","class"]),t.value.mensaje?(n(),m("span",pe,g(t.value.mensaje),1)):x("",!0),s("div",fe,[e(j,{type:"submit",color:"indigo-6",label:"Enviar mensaje",class:"self-center q-ma-sm q-py-sm",loading:d.value},null,8,["loading"])])]),_:1},8,["onSubmit"])])]),_:1})]),_:1}))}};var he=N(ve,[["__scopeId","data-v-2dde6c94"]]);const ge={class:"q-pa-md-xl q-pa-xs-sm"},xe=s("img",{src:"https://res.cloudinary.com/dazfmv5ls/image/upload/v1656452520/wolves-188553_1280_fewfef.jpg"},null,-1),be=s("h1",{class:"text-white text-weight-bold title"},"Contacto",-1),qe={class:"row q-pa-md-xl q-pa-xs-sm"},ye={class:"col-md-5 col-12 q-pa-md-md q-pa-xs-sm"},Ce={class:"col-md-7 col-12 q-pa-md-md q-pa-xs-sm"},we={class:"col-12 q-pa-md"},Ae={__name:"ContactView",setup(r){return(o,t)=>{const i=P("animate-onscroll");return n(),y(S,{class:"q-pa-md"},{default:a(()=>[s("div",ge,[e(D,{height:200,speed:.5,elevated:""},{media:a(()=>[xe]),default:a(()=>[be]),_:1},8,["speed"])]),s("div",qe,[V((n(),m("div",ye,[e(ne)])),[[i,"animated fadeInLeft",void 0,{repeat:!0}]]),V((n(),m("div",Ce,[e(he)])),[[i,"animated fadeInLeft",void 0,{repeat:!0}]]),s("div",we,[e(O)])])]),_:1})}}};export{Ae as default};
