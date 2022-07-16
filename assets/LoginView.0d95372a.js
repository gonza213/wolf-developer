import{Q as E}from"./QPage.e84e745b.js";import{_ as q,r as c,bd as Q,be as V,b as p,c as h,E as d,k as t,j as r,aD as C,aE as _,as as g,aq as f,i as k,G as B,aC as L,Q as S,ar as I,at as $,L as j,M as D}from"./index.0c61262b.js";import{Q as N}from"./QForm.3a4adf3d.js";import{u as U}from"./use-quasar.73035dae.js";import{c as F,a as v}from"./object.d8999c0c.js";const M=l=>(j("data-v-03b6c494"),l=l(),D(),l),P=M(()=>r("div",{class:"col-12 text-center q-py-md"},[r("span",{class:"text-h4"},"Panel de control")],-1)),z={class:"q-gutter-md mx-auto",style:{width:"100%"}},A={key:0,class:"text-center"},G={class:"text-red-8 text-weight-bold"},H={class:"row flex justify-center"},R={__name:"LoginComponent",setup(l){const a=c({});let s=c({});const i=c(),n=U(),y=Q(),u=c(!1),{loginUser:w}=V(),x=F().shape({password:v().required("La contrase\xF1a es obligatoria"),email:v().email("El email es inv\xE1lido.").required("El email es obligatorio.")}),b=async()=>{s.value={};try{await x.validate(a.value,{abortEarly:!1});try{n.loadingBar.start(),u.value=!0;const{ok:o,msg:e}=await w(a.value);o?(y.push({name:"home"}),n.notify({message:"\xA1Has ingresado con \xE9xito!",color:"green-10",position:"top-right",icon:"lar la-check-circle"}),u.value=!1,n.loadingBar.stop()):(i.value="El email y/o contrase\xF1a son inv\xE1lidos.",n.notify({message:`${e}`,color:"red-10",position:"top-right",icon:"las la-exclamation-circle"}))}catch(o){console.log(o)}}catch(o){o.inner.forEach(e=>{s.value[e.path]=e.message,i.value=s.value[e.path]})}};return(o,e)=>(p(),h($,{class:"my-card"},{default:d(()=>[t(I,{class:"row"},{default:d(()=>[P,r("div",z,[t(N,{class:"q-gutter-md",onSubmit:C(b,["prevent"])},{default:d(()=>[t(_,{modelValue:a.value.email,"onUpdate:modelValue":e[0]||(e[0]=m=>a.value.email=m),type:"email",filled:"",label:"Email",color:"indigo-6",class:g({error:f(s).email})},null,8,["modelValue","class"]),t(_,{modelValue:a.value.password,"onUpdate:modelValue":e[1]||(e[1]=m=>a.value.password=m),type:"password",filled:"",label:"Contrase\xF1a",color:"indigo-6",class:g({error:f(s).password})},null,8,["modelValue","class"]),i.value?(p(),k("div",A,[r("span",G,B(i.value),1)])):L("",!0),r("div",H,[t(S,{type:"submit",color:"indigo-6",label:"Ingresar",class:"self-center q-ma-md q-pa-sm",style:{width:"100%"},loading:u.value},null,8,["loading"])])]),_:1},8,["onSubmit"])])]),_:1})]),_:1}))}};var J=q(R,[["__scopeId","data-v-03b6c494"]]);const Y={__name:"LoginView",setup(l){return(a,s)=>(p(),h(E,{class:"q-pa-xl row justify-center"},{default:d(()=>[t(J)]),_:1}))}};export{Y as default};
