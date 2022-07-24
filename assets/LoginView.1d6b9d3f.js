import{Q as q}from"./QPage.982d45e1.js";import{_ as E,r as d,bd as Q,be as V,b as p,c as h,E as u,k as t,j as i,aD as C,aE as _,as as g,aq as f,i as B,G as k,aC as L,Q as S,ar as I,at as $,L as j,M as D}from"./index.6a8c3e3a.js";import{Q as N}from"./QForm.52509949.js";import{u as U}from"./use-quasar.e8726c4e.js";import{c as F,a as v}from"./object.d8999c0c.js";const M=l=>(j("data-v-77625f79"),l=l(),D(),l),P=M(()=>i("div",{class:"col-12 text-center q-py-md"},[i("span",{class:"text-h4"},"Panel de control")],-1)),z={class:"q-gutter-md mx-auto",style:{width:"100%"}},A={key:0,class:"text-center"},G={class:"text-red-8 text-weight-bold"},H={class:"row flex justify-center"},R={__name:"LoginComponent",setup(l){const a=d({});let s=d({});const n=d(),r=U(),y=Q(),c=d(!1),{loginUser:w}=V(),x=F().shape({password:v().required("La contrase\xF1a es obligatoria"),email:v().email("El email es inv\xE1lido.").required("El email es obligatorio.")}),b=async()=>{s.value={};try{await x.validate(a.value,{abortEarly:!1});try{r.loadingBar.start(),c.value=!0;const{ok:o,msg:e}=await w(a.value);console.log(e.response.data.msg),o?(y.push({name:"home"}),r.notify({message:"\xA1Has ingresado con \xE9xito!",color:"green-10",position:"top-right",icon:"lar la-check-circle"}),c.value=!1,r.loadingBar.stop()):(n.value=`${e.response.data.msg}.`,r.notify({message:`${e}`,color:"red-10",position:"top-right",icon:"las la-exclamation-circle"}),c.value=!1,r.loadingBar.stop())}catch(o){console.log(o)}}catch(o){o.inner.forEach(e=>{s.value[e.path]=e.message,n.value=s.value[e.path]})}};return(o,e)=>(p(),h($,{class:"my-card"},{default:u(()=>[t(I,{class:"row"},{default:u(()=>[P,i("div",z,[t(N,{class:"q-gutter-md",onSubmit:C(b,["prevent"])},{default:u(()=>[t(_,{modelValue:a.value.email,"onUpdate:modelValue":e[0]||(e[0]=m=>a.value.email=m),type:"email",filled:"",label:"Email",color:"indigo-6",class:g({error:f(s).email})},null,8,["modelValue","class"]),t(_,{modelValue:a.value.password,"onUpdate:modelValue":e[1]||(e[1]=m=>a.value.password=m),type:"password",filled:"",label:"Contrase\xF1a",color:"indigo-6",class:g({error:f(s).password})},null,8,["modelValue","class"]),n.value?(p(),B("div",A,[i("span",G,k(n.value),1)])):L("",!0),i("div",H,[t(S,{type:"submit",color:"indigo-6",label:"Ingresar",class:"self-center q-ma-md q-pa-sm",style:{width:"100%"},loading:c.value},null,8,["loading"])])]),_:1},8,["onSubmit"])])]),_:1})]),_:1}))}};var J=E(R,[["__scopeId","data-v-77625f79"]]);const Y={__name:"LoginView",setup(l){return(a,s)=>(p(),h(q,{class:"q-pa-xl row justify-center"},{default:u(()=>[t(J)]),_:1}))}};export{Y as default};
