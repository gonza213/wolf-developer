import{Q as v,a as C,b as m,c as b,d as y}from"./QTable.11e4f287.js";import{Q as x}from"./QInnerLoading.7e2815cc.js";import{Q}from"./QPage.f7937440.js";import{r as p,a as g,_ as k,e as _,j as B,l as t,F as n,k as c,aD as $,v as q,G as u,H as f,Q as F,at as T,I as V,f as h,aB as j}from"./index.71b3f425.js";import{u as I}from"./use-quasar.bb0955e5.js";import{A as w}from"./constants.9e8d69f8.js";import"./QList.d66e8cc1.js";import"./QSelect.209267a6.js";import"./QItem.3de04644.js";import"./QItemLabel.766e1532.js";import"./QMenu.24e58f5c.js";import"./selection.025d28b3.js";import"./QLinearProgress.28e49b30.js";import"./use-fullscreen.eabd274e.js";const E=()=>{const a=p(),s=localStorage.getItem("token"),l=async()=>{try{const{data:r}=await g.get(`${w}/api/contactos?limite=0`,{headers:{"x-token":s}});a.value=r.contactos}catch(r){console.log(r)}},e=async r=>{const{data:i}=await g.delete(`${w}/api/contactos/${r}`,{headers:{"x-token":s}});return i};return l(),{contactos:a,deleteContacto:e}},N=[{name:"nombre",required:!0,label:"Nombre",align:"left",field:a=>a.name,format:a=>`${a}`,sortable:!0},{name:"email",align:"left",label:"Email",field:"email",sortable:!0},{name:"asunto",label:"Asunto",align:"left",field:"asunto",sortable:!0},{name:"mensaje",label:"Mensaje",align:"left",field:"mensaje"},{name:"acciones",label:"Acciones",field:"acciones"}],A={name:"ListaContactos",emits:["onFire"],setup(a,s){const l=I(),{contactos:e,deleteContacto:r}=E(),i=o=>{l.dialog({title:"\xBFEst\xE1 seguro de borrar el contacto?",message:"Si no est\xE1 seguro, presione cancelar.",ok:{color:"indigo-6",label:"Si, borrar"},cancel:{color:"red-6",label:"Cancelar"},persistent:!0}).onOk(async()=>{try{const{msg:d}=await r(o);d=="ok"&&l.notify({message:"\xA1Contacto eliminado con \xE9xito!",color:"green-10",position:"top-right",icon:"lar la-check-circle"}),s.emit("onFire",!1)}catch(d){console.log(d)}})};return{filter:p(""),columns:N,contactos:e,onDelete:i}}},D={class:"col-12"},L={class:"q-pa-md"};function S(a,s,l,e,r,i){return _(),B("div",D,[t(T,{class:"my-card bg-white"},{default:n(()=>[c("div",L,[t(v,{title:"Lista de Contactos",rows:e.contactos,columns:e.columns,"row-key":"name",filter:e.filter},{"top-right":n(()=>[t($,{borderless:"",dense:"",debounce:"300",modelValue:e.filter,"onUpdate:modelValue":s[0]||(s[0]=o=>e.filter=o),placeholder:"Buscar",color:"indigo-6"},{append:n(()=>[t(q,{name:"search"})]),_:1},8,["modelValue"])]),body:n(o=>[t(C,{props:o},{default:n(()=>[t(m,{key:"nombre",props:o},{default:n(()=>[u(f(o.row.nombre),1)]),_:2},1032,["props"]),t(m,{key:"email",props:o},{default:n(()=>[u(f(o.row.email),1)]),_:2},1032,["props"]),t(m,{key:"asunto",props:o},{default:n(()=>[u(f(o.row.asunto),1)]),_:2},1032,["props"]),t(m,{key:"mensaje",props:o},{default:n(()=>[u(f(o.row.mensaje),1)]),_:2},1032,["props"]),t(m,{key:"acciones",props:o},{default:n(()=>[t(F,{round:"",color:"red-4",size:"sm",icon:"las la-trash",class:"q-ml-xs",onClick:d=>e.onDelete(o.row._id)},null,8,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","filter"])])]),_:1})])}var O=k(A,[["render",S]]);const z={components:{Contactos:O},setup(){const a=p(!1),s=p(!0);return{visible:a,showTable:s,onFire:e=>{s.value=e,a.value=!0,setTimeout(()=>{s.value=!0},1e3),setTimeout(()=>{a.value=e},2e3)}}}},P={class:"q-pa-md q-gutter-sm text-indigo-6"},U={class:"row"},G=c("div",{class:"col-12 row q-pa-sm"},[c("div",{class:"col-6 text-indigo-6"},[c("span",{class:"text-h3 text-weight-bold"},"Contactos")])],-1),H={class:"row justify-center"};function M(a,s,l,e,r,i){const o=V("Contactos");return _(),h(Q,{class:"q-pa-md bg-white"},{default:n(()=>[c("div",P,[t(y,null,{default:n(()=>[t(b,{icon:"home",to:{name:"home"}}),t(b,{label:"Contactos",icon:"las la-envelope"})]),_:1})]),c("div",U,[G,e.showTable?(_(),h(o,{key:0,onOnFire:e.onFire},null,8,["onOnFire"])):j("",!0),c("div",H,[t(x,{showing:e.visible,label:"Espere un momento...","label-class":"text-indigo-6","label-style":"font-size: 1.1em"},null,8,["showing"])])])]),_:1})}var le=k(z,[["render",M]]);export{le as default};
