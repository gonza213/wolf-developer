import{aB as f,_ as g,r as d,ap as y,a5 as w,b as x,i as b,k as l,E as n,aD as E,j as o,aE as S,aq as p,as as Q,u as q,G as B,Q as C,L as I,M as k}from"./index.e8f5a58c.js";import{Q as D}from"./QForm.b8a73941.js";import{Q as V}from"./QParallax.1dca3001.js";import{u as j}from"./use-quasar.88e7ae2e.js";import{c as z,a as M}from"./object.d8999c0c.js";const F=async a=>await f.post("/suscriptores",a);const u=a=>(I("data-v-12cae082"),a=a(),k(),a),N={class:"q-ma-md q-pa-sm"},$=u(()=>o("video",{width:"720",height:"440",poster:"https://res.cloudinary.com/dazfmv5ls/image/upload/v1656210506/img-lobos_banner_1_ctcgfh.jpg",autoplay:"",loop:"",muted:""},[o("source",{type:"video/mp4",src:"https://res.cloudinary.com/dazfmv5ls/video/upload/v1656543874/Wolves_-_57273_rxxwwg.mp4"})],-1)),G={class:"q-py-sm row column justify-center"},L=u(()=>o("span",{class:"text-h5 self-center cel"},"\xA1Enterate de las novedades!",-1)),P={class:"text-red-8 text-weight-bold self-center"},T={class:"q-py-sm row column justify-center"},U={__name:"SuscriptorComponent",setup(a){let t=d({}),r=d({}),c=d();const m=j(),_=z().shape({email:M().email("El email es inv\xE1lido.").required("El email es obligatorio.")}),v=async()=>{r.value={};try{await _.validate(t.value,{abortEarly:!1});try{m.loadingBar.start();const{data:s}=await F(t.value);s.msg=="ok"&&(m.notify({message:"\xA1Te has suscripto exitosamente!",color:"green-10",position:"top-right",icon:"lar la-check-circle"}),t.value={},c.value="",m.loadingBar.stop())}catch(s){s.response.data.errors.forEach(i=>{r.value[i.param]=i.msg,c.value=i.msg})}}catch(s){s.inner.forEach(e=>{r.value[e.path]=e.message,c.value=r.value[e.path]})}};return(s,e)=>{const i=y("animate-onscroll");return w((x(),b("div",N,[l(V,{height:200,elevated:""},{media:n(()=>[$]),default:n(()=>[l(D,{onSubmit:E(v,["prevent"])},{default:n(()=>[o("div",G,[L,l(S,{standout:"",modelValue:p(t).email,"onUpdate:modelValue":e[0]||(e[0]=h=>p(t).email=h),type:"text",label:"Correo electr\xF3nico",class:Q(["self-center",{error:p(r).email}]),color:"indigo-6"},{prepend:n(()=>[l(q,{name:"mail"})]),_:1},8,["modelValue","class"]),o("span",P,B(p(c)),1)]),o("div",T,[l(C,{type:"submit",label:"Enviar",icon:"las la-chevron-circle-right",color:"indigo-6",class:"q-py-sm self-center"})])]),_:1},8,["onSubmit"])]),_:1})])),[[i,"animated pulse",void 0,{repeat:!0}]])}}};var O=g(U,[["__scopeId","data-v-12cae082"]]);export{O as C};
