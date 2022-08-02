import{Q as _,a as w}from"./QBreadcrumbs.8a832c45.js";import{Q as k}from"./QInnerLoading.bb6d1c4a.js";import{Q}from"./QPage.8ada81b0.js";import{r as m,aB as f,b as p,i as y,k as s,E as o,j as l,aq as x,aE as S,u as q,F as B,G as C,Q as V,at as E,c as g,aC as T}from"./index.2883e4c5.js";import{Q as $,a as F,b as h}from"./QTable.552d02f8.js";import{u as I}from"./use-quasar.201193c6.js";import"./QList.12d0a921.js";import"./QSelect.2fd4edef.js";import"./QItem.d749d61b.js";import"./QItemLabel.fe010e79.js";import"./QMenu.e19a150a.js";import"./selection.142e7894.js";import"./QLinearProgress.268e66ce.js";import"./use-fullscreen.cac34ba2.js";const N=()=>{const u=m(),t=localStorage.getItem("token"),a=async()=>{try{const{data:e}=await f.get("/suscriptores",{headers:{"x-token":t}});u.value=e.suscriptores}catch{}},i=async e=>{const{data:d}=await f.delete(`/suscriptores/${e}`,{headers:{"x-token":t}});return d};return a(),{suscriptores:u,deleteSuscriptor:i}},j={class:"col-12"},z={class:"q-pa-md"},D={__name:"SuscriptoresComponent",emits:["onFire"],setup(u,{emit:t}){const a=[{name:"email",required:!0,label:"Email",align:"left",field:c=>c.name,format:c=>`${c}`,sortable:!0},{name:"acciones",label:"Acciones",field:"acciones"}],i=I(),e=m(""),{suscriptores:d,deleteSuscriptor:b}=N(),v=c=>{i.dialog({title:"\xBFEst\xE1 seguro de borrar el suscriptor?",message:"Si no est\xE1 seguro, presione cancelar.",ok:{color:"indigo-6",label:"Si, borrar"},cancel:{color:"red-6",label:"Cancelar"},persistent:!0}).onOk(async()=>{try{const{msg:n}=await b(c);n=="ok"&&i.notify({message:"\xA1Suscriptor eliminado con \xE9xito!",color:"green-10",position:"top-right",icon:"lar la-check-circle"}),t("onFire",!1)}catch(n){console.log(n)}})};return(c,n)=>(p(),y("div",j,[s(E,{class:"my-card bg-white"},{default:o(()=>[l("div",z,[s($,{title:"Lista de Contactos",rows:x(d),columns:a,"row-key":"name",filter:e.value},{"top-right":o(()=>[s(S,{borderless:"",dense:"",debounce:"300",modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=r=>e.value=r),placeholder:"Buscar",color:"indigo-6"},{append:o(()=>[s(q,{name:"search"})]),_:1},8,["modelValue"])]),body:o(r=>[s(F,{props:r},{default:o(()=>[s(h,{key:"email",props:r},{default:o(()=>[B(C(r.row.email),1)]),_:2},1032,["props"]),s(h,{key:"acciones",props:r},{default:o(()=>[s(V,{round:"",color:"red-4",size:"sm",icon:"las la-trash",class:"q-ml-xs",onClick:P=>v(r.row._id)},null,8,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","filter"])])]),_:1})]))}},L={class:"q-pa-md q-gutter-sm text-indigo-6"},O={class:"row"},A=l("div",{class:"col-12 row q-pa-sm"},[l("div",{class:"col-6 text-indigo-6"},[l("span",{class:"text-h3 text-weight-bold"},"Suscriptores")])],-1),G={class:"row justify-center"},ae={__name:"SuscriptoresView",setup(u){const t=m(!1),a=m(!0),i=e=>{a.value=e,t.value=!0,setTimeout(()=>{a.value=!0},1e3),setTimeout(()=>{t.value=e},2e3)};return(e,d)=>(p(),g(Q,{class:"q-pa-md bg-white"},{default:o(()=>[l("div",L,[s(w,null,{default:o(()=>[s(_,{icon:"home",to:{name:"home"}}),s(_,{label:"Suscriptores",icon:"las la-user-plus"})]),_:1})]),l("div",O,[A,a.value?(p(),g(D,{key:0,onOnFire:i})):T("",!0),l("div",G,[s(k,{showing:t.value,label:"Espere un momento...","label-class":"text-indigo-6","label-style":"font-size: 1.1em"},null,8,["showing"])])])]),_:1}))}};export{ae as default};
