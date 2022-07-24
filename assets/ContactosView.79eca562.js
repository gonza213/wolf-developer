import{Q as g,a as y}from"./QBreadcrumbs.0f42b27a.js";import{Q as C}from"./QInnerLoading.9374db6c.js";import{Q}from"./QPage.6417b6a6.js";import{r as _,aB as h,b,i as x,k as e,E as a,j as l,aq as q,aE as B,u as V,F as p,G as f,Q as j,at as E,c as w,aC as T}from"./index.3bda6929.js";import{Q as $,a as F,b as m}from"./QTable.18e1cccd.js";import{u as N}from"./use-quasar.5c939d89.js";import"./QList.e0c690ea.js";import"./QSelect.bf8407f0.js";import"./QItem.663a48d4.js";import"./QItemLabel.bf49d18a.js";import"./QMenu.cef42774.js";import"./selection.80744554.js";import"./QLinearProgress.1060e341.js";import"./use-fullscreen.219c1145.js";const I=()=>{const d=_(),s=localStorage.getItem("token"),n=async()=>{try{const{data:o}=await h.get("/contactos?limite=0",{headers:{"x-token":s}});d.value=o.contactos}catch(o){console.log(o)}},r=async o=>{const{data:u}=await h.delete(`/contactos/${o}`,{headers:{"x-token":s}});return u};return n(),{contactos:d,deleteContacto:r}},S={class:"col-12"},z={class:"q-pa-md"},A={__name:"ContactosComponent",emits:["onFire"],setup(d,{emit:s}){const n=[{name:"nombre",required:!0,label:"Nombre",align:"left",field:c=>c.name,format:c=>`${c}`,sortable:!0},{name:"email",align:"left",label:"Email",field:"email",sortable:!0},{name:"asunto",label:"Asunto",align:"left",field:"asunto",sortable:!0},{name:"mensaje",label:"Mensaje",align:"left",field:"mensaje"},{name:"acciones",label:"Acciones",field:"acciones"}],r=N(),o=_(""),{contactos:u,deleteContacto:k}=I(),v=c=>{r.dialog({title:"\xBFEst\xE1 seguro de borrar el contacto?",message:"Si no est\xE1 seguro, presione cancelar.",ok:{color:"indigo-6",label:"Si, borrar"},cancel:{color:"red-6",label:"Cancelar"},persistent:!0}).onOk(async()=>{try{const{msg:i}=await k(c);i=="ok"&&r.notify({message:"\xA1Contacto eliminado con \xE9xito!",color:"green-10",position:"top-right",icon:"lar la-check-circle"}),s("onFire",!1)}catch(i){console.log(i)}})};return(c,i)=>(b(),x("div",S,[e(E,{class:"my-card bg-white"},{default:a(()=>[l("div",z,[e($,{title:"Lista de Contactos",rows:q(u),columns:n,"row-key":"name",filter:o.value},{"top-right":a(()=>[e(B,{borderless:"",dense:"",debounce:"300",modelValue:o.value,"onUpdate:modelValue":i[0]||(i[0]=t=>o.value=t),placeholder:"Buscar",color:"indigo-6"},{append:a(()=>[e(V,{name:"search"})]),_:1},8,["modelValue"])]),body:a(t=>[e(F,{props:t},{default:a(()=>[e(m,{key:"nombre",props:t},{default:a(()=>[p(f(t.row.nombre),1)]),_:2},1032,["props"]),e(m,{key:"email",props:t},{default:a(()=>[p(f(t.row.email),1)]),_:2},1032,["props"]),e(m,{key:"asunto",props:t},{default:a(()=>[p(f(t.row.asunto),1)]),_:2},1032,["props"]),e(m,{key:"mensaje",props:t},{default:a(()=>[p(f(t.row.mensaje),1)]),_:2},1032,["props"]),e(m,{key:"acciones",props:t},{default:a(()=>[e(j,{round:"",color:"red-4",size:"sm",icon:"las la-trash",class:"q-ml-xs",onClick:M=>v(t.row._id)},null,8,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","filter"])])]),_:1})]))}},D={class:"q-pa-md q-gutter-sm text-indigo-6"},L={class:"row"},O=l("div",{class:"col-12 row q-pa-sm"},[l("div",{class:"col-6 text-indigo-6"},[l("span",{class:"text-h3 text-weight-bold"},"Contactos")])],-1),G={class:"row justify-center"},se={__name:"ContactosView",setup(d){const s=_(!1),n=_(!0),r=o=>{n.value=o,s.value=!0,setTimeout(()=>{n.value=!0},1e3),setTimeout(()=>{s.value=o},2e3)};return(o,u)=>(b(),w(Q,{class:"q-pa-md bg-white"},{default:a(()=>[l("div",D,[e(y,null,{default:a(()=>[e(g,{icon:"home",to:{name:"home"}}),e(g,{label:"Contactos",icon:"las la-envelope"})]),_:1})]),l("div",L,[O,n.value?(b(),w(A,{key:0,onOnFire:r})):T("",!0),l("div",G,[e(C,{showing:s.value,label:"Espere un momento...","label-class":"text-indigo-6","label-style":"font-size: 1.1em"},null,8,["showing"])])])]),_:1}))}};export{se as default};
