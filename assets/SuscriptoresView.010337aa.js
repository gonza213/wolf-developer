import{Q as w,a as k,b as _,c as f,d as Q}from"./QTable.b61c2387.js";import{Q as y}from"./QInnerLoading.c97a4a11.js";import{Q as x}from"./QPage.f2da26dc.js";import{r as m,aB as g,b as p,i as S,k as s,E as o,j as l,aq as q,aE as B,u as C,F as V,G as E,Q as T,at as $,c as h,aC as F}from"./index.578b6eaa.js";import{u as I}from"./use-quasar.cb08f239.js";import"./QList.c56f6413.js";import"./QSelect.05d4726a.js";import"./QItem.56a6dcfa.js";import"./QItemLabel.b0a535a9.js";import"./QMenu.338ffc70.js";import"./selection.c86d2b2b.js";import"./QLinearProgress.dad89e6b.js";import"./use-fullscreen.bccdc1be.js";const N=()=>{const u=m(),t=localStorage.getItem("token"),a=async()=>{try{const{data:e}=await g.get("/suscriptores",{headers:{"x-token":t}});u.value=e.suscriptores}catch{}},i=async e=>{const{data:d}=await g.delete(`/suscriptores/${e}`,{headers:{"x-token":t}});return d};return a(),{suscriptores:u,deleteSuscriptor:i}},j={class:"col-12"},z={class:"q-pa-md"},D={__name:"SuscriptoresComponent",emits:["onFire"],setup(u,{emit:t}){const a=[{name:"email",required:!0,label:"Email",align:"left",field:c=>c.name,format:c=>`${c}`,sortable:!0},{name:"acciones",label:"Acciones",field:"acciones"}],i=I(),e=m(""),{suscriptores:d,deleteSuscriptor:b}=N(),v=c=>{i.dialog({title:"\xBFEst\xE1 seguro de borrar el suscriptor?",message:"Si no est\xE1 seguro, presione cancelar.",ok:{color:"indigo-6",label:"Si, borrar"},cancel:{color:"red-6",label:"Cancelar"},persistent:!0}).onOk(async()=>{try{const{msg:n}=await b(c);n=="ok"&&i.notify({message:"\xA1Suscriptor eliminado con \xE9xito!",color:"green-10",position:"top-right",icon:"lar la-check-circle"}),t("onFire",!1)}catch(n){console.log(n)}})};return(c,n)=>(p(),S("div",j,[s($,{class:"my-card bg-white"},{default:o(()=>[l("div",z,[s(w,{title:"Lista de Contactos",rows:q(d),columns:a,"row-key":"name",filter:e.value},{"top-right":o(()=>[s(B,{borderless:"",dense:"",debounce:"300",modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=r=>e.value=r),placeholder:"Buscar",color:"indigo-6"},{append:o(()=>[s(C,{name:"search"})]),_:1},8,["modelValue"])]),body:o(r=>[s(k,{props:r},{default:o(()=>[s(_,{key:"email",props:r},{default:o(()=>[V(E(r.row.email),1)]),_:2},1032,["props"]),s(_,{key:"acciones",props:r},{default:o(()=>[s(T,{round:"",color:"red-4",size:"sm",icon:"las la-trash",class:"q-ml-xs",onClick:P=>v(r.row._id)},null,8,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","filter"])])]),_:1})]))}},L={class:"q-pa-md q-gutter-sm text-indigo-6"},O={class:"row"},A=l("div",{class:"col-12 row q-pa-sm"},[l("div",{class:"col-6 text-indigo-6"},[l("span",{class:"text-h3 text-weight-bold"},"Suscriptores")])],-1),G={class:"row justify-center"},te={__name:"SuscriptoresView",setup(u){const t=m(!1),a=m(!0),i=e=>{a.value=e,t.value=!0,setTimeout(()=>{a.value=!0},1e3),setTimeout(()=>{t.value=e},2e3)};return(e,d)=>(p(),h(x,{class:"q-pa-md bg-white"},{default:o(()=>[l("div",L,[s(Q,null,{default:o(()=>[s(f,{icon:"home",to:{name:"home"}}),s(f,{label:"Suscriptores",icon:"las la-user-plus"})]),_:1})]),l("div",O,[A,a.value?(p(),h(D,{key:0,onOnFire:i})):F("",!0),l("div",G,[s(y,{showing:t.value,label:"Espere un momento...","label-class":"text-indigo-6","label-style":"font-size: 1.1em"},null,8,["showing"])])])]),_:1}))}};export{te as default};
