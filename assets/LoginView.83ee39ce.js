import{Q as w}from"./QPage.00dc6b8f.js";import{_ as v,r as d,bc as x,bd as E,e as u,f as h,F as m,l as r,k as c,aC as b,aD as f,as as g,j as Q,H as V,aB as q,Q as C,ar as L,at as B,M as k,N as D,I}from"./index.29806dde.js";import{Q as S}from"./QForm.b87600b7.js";import{u as N}from"./use-quasar.150d19b7.js";import{c as j,a as _}from"./object.d8999c0c.js";const F={setup(){const e=d({});let o=d({});const t=d(),a=N(),p=x(),l=d(!1),{loginUser:s}=E(),y=j().shape({password:_().required("La contrase\xF1a es obligatoria"),email:_().email("El email es inv\xE1lido.").required("El email es obligatorio.")});return{formData:e,formError:o,onLogin:async()=>{o.value={};try{await y.validate(e.value,{abortEarly:!1});try{a.loadingBar.start(),l.value=!0;const{ok:n,msg:i}=await s(e.value);n?(p.push({name:"home"}),a.notify({message:"\xA1Has ingresado con \xE9xito!",color:"green-10",position:"top-right",icon:"lar la-check-circle"}),l.value=!1,a.loadingBar.stop()):(t.value="El email y/o contrase\xF1a son inv\xE1lidos.",a.notify({message:`${i}`,color:"red-10",position:"top-right",icon:"las la-exclamation-circle"}))}catch(n){console.log(n)}}catch(n){n.inner.forEach(i=>{o.value[i.path]=i.message,t.value=o.value[i.path]})}},msgError:t,loading:l}}},U=e=>(k("data-v-c65507c0"),e=e(),D(),e),$=U(()=>c("div",{class:"col-12 text-center q-py-md"},[c("span",{class:"text-h4"},"Panel de control")],-1)),H={class:"q-gutter-md mx-auto",style:{width:"100%"}},M={key:0,class:"text-center"},P={class:"text-red-8 text-weight-bold"},z={class:"row flex justify-center"};function A(e,o,t,a,p,l){return u(),h(B,{class:"my-card"},{default:m(()=>[r(L,{class:"row"},{default:m(()=>[$,c("div",H,[r(S,{class:"q-gutter-md",onSubmit:b(a.onLogin,["prevent"])},{default:m(()=>[r(f,{modelValue:a.formData.email,"onUpdate:modelValue":o[0]||(o[0]=s=>a.formData.email=s),type:"email",filled:"",label:"Email",color:"indigo-6",class:g({error:a.formError.email})},null,8,["modelValue","class"]),r(f,{modelValue:a.formData.password,"onUpdate:modelValue":o[1]||(o[1]=s=>a.formData.password=s),type:"password",filled:"",label:"Contrase\xF1a",color:"indigo-6",class:g({error:a.formError.password})},null,8,["modelValue","class"]),a.msgError?(u(),Q("div",M,[c("span",P,V(a.msgError),1)])):q("",!0),c("div",z,[r(C,{type:"submit",color:"indigo-6",label:"Ingresar",class:"self-center q-ma-md q-pa-sm",style:{width:"100%"},loading:a.loading},null,8,["loading"])])]),_:1},8,["onSubmit"])])]),_:1})]),_:1})}var R=v(F,[["render",A],["__scopeId","data-v-c65507c0"]]);const G={components:{Login:R}};function J(e,o,t,a,p,l){const s=I("Login");return u(),h(w,{class:"q-pa-xl row justify-center"},{default:m(()=>[r(s)]),_:1})}var Z=v(G,[["render",J]]);export{Z as default};
