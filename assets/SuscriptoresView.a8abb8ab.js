import{Q as w,a as v,b as p,c as f,d as k}from"./QTable.57f835f7.js";import{Q as x}from"./QInnerLoading.8e09d99a.js";import{Q}from"./QPage.e0fa2db1.js";import{r as m,a as _,_ as b,e as u,j as S,l as t,F as a,k as c,aD as y,v as B,G as $,H as q,Q as C,at as F,I as T,f as g,aB as V}from"./index.1570b396.js";import{u as I}from"./use-quasar.2ce3e012.js";import{A as h}from"./constants.9e8d69f8.js";import"./QList.ebfe8460.js";import"./QSelect.8705af50.js";import"./QItem.6fea8875.js";import"./QItemLabel.9b960ca4.js";import"./QMenu.602ef55b.js";import"./selection.587a76fa.js";import"./QLinearProgress.f793f11c.js";import"./use-fullscreen.8073b151.js";const E=()=>{const o=m(),s=localStorage.getItem("token"),n=async()=>{try{const{data:i}=await _.get(`${h}/api/suscriptores`,{headers:{"x-token":s}});o.value=i.suscriptores}catch{}},e=async i=>{const{data:l}=await _.delete(`${h}/api/suscriptores/${i}`,{headers:{"x-token":s}});return l};return n(),{suscriptores:o,deleteSuscriptor:e}},D=[{name:"email",required:!0,label:"Email",align:"left",field:o=>o.name,format:o=>`${o}`,sortable:!0},{name:"acciones",label:"Acciones",field:"acciones"}],L={name:"ListaSuscriptores",emits:["onFire"],setup(o,s){const n=I(),{suscriptores:e,deleteSuscriptor:i}=E(),l=r=>{n.dialog({title:"\xBFEst\xE1 seguro de borrar el suscriptor?",message:"Si no est\xE1 seguro, presione cancelar.",ok:{color:"indigo-6",label:"Si, borrar"},cancel:{color:"red-6",label:"Cancelar"},persistent:!0}).onOk(async()=>{try{const{msg:d}=await i(r);d=="ok"&&n.notify({message:"\xA1Suscriptor eliminado con \xE9xito!",color:"green-10",position:"top-right",icon:"lar la-check-circle"}),s.emit("onFire",!1)}catch(d){console.log(d)}})};return{filter:m(""),columns:D,suscriptores:e,onDelete:l}}},N={class:"col-12"},A={class:"q-pa-md"};function O(o,s,n,e,i,l){return u(),S("div",N,[t(F,{class:"my-card bg-white"},{default:a(()=>[c("div",A,[t(w,{title:"Lista de Contactos",rows:e.suscriptores,columns:e.columns,"row-key":"name",filter:e.filter},{"top-right":a(()=>[t(y,{borderless:"",dense:"",debounce:"300",modelValue:e.filter,"onUpdate:modelValue":s[0]||(s[0]=r=>e.filter=r),placeholder:"Buscar",color:"indigo-6"},{append:a(()=>[t(B,{name:"search"})]),_:1},8,["modelValue"])]),body:a(r=>[t(v,{props:r},{default:a(()=>[t(p,{key:"email",props:r},{default:a(()=>[$(q(r.row.email),1)]),_:2},1032,["props"]),t(p,{key:"acciones",props:r},{default:a(()=>[t(C,{round:"",color:"red-4",size:"sm",icon:"las la-trash",class:"q-ml-xs",onClick:d=>e.onDelete(r.row._id)},null,8,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","filter"])])]),_:1})])}var j=b(L,[["render",O]]);const z={components:{Suscriptores:j},setup(){const o=m(!1),s=m(!0);return{visible:o,showTable:s,onFire:e=>{s.value=e,o.value=!0,setTimeout(()=>{s.value=!0},1e3),setTimeout(()=>{o.value=e},2e3)}}}},P={class:"q-pa-md q-gutter-sm text-indigo-6"},U={class:"row"},G=c("div",{class:"col-12 row q-pa-sm"},[c("div",{class:"col-6 text-indigo-6"},[c("span",{class:"text-h3 text-weight-bold"},"Suscriptores")])],-1),H={class:"row justify-center"};function R(o,s,n,e,i,l){const r=T("Suscriptores");return u(),g(Q,{class:"q-pa-md bg-white"},{default:a(()=>[c("div",P,[t(k,null,{default:a(()=>[t(f,{icon:"home",to:{name:"home"}}),t(f,{label:"Suscriptores",icon:"las la-user-plus"})]),_:1})]),c("div",U,[G,e.showTable?(u(),g(r,{key:0,onOnFire:e.onFire},null,8,["onOnFire"])):V("",!0),c("div",H,[t(x,{showing:e.visible,label:"Espere un momento...","label-class":"text-indigo-6","label-style":"font-size: 1.1em"},null,8,["showing"])])])]),_:1})}var ne=b(z,[["render",R]]);export{ne as default};
