import{Q as I,a as j,b as _,c as $,d as L}from"./QTable.5fa47075.js";import{_ as U,r as p,b as u,c as v,E as a,k as e,as as Q,aq as c,aE as q,i as w,G as b,aC as y,j as i,Q as h,aD as N,bd as O,u as A,F as k,I as P,at as B,ar as E,aV as M}from"./index.f4765a02.js";import{Q as R}from"./QInnerLoading.8e8b43e9.js";import{Q as G}from"./QPage.5bc8bb83.js";import{Q as H}from"./QSelect.aeda18ac.js";import{Q as J}from"./QForm.f114ed7a.js";import{u as T}from"./use-quasar.f4857204.js";import{c as F,a as S}from"./object.d8999c0c.js";import{u as K,a as z}from"./usePortafolios.5dd0e2ba.js";import"./QList.cf7200da.js";import"./QLinearProgress.5ceed01c.js";import"./use-fullscreen.ee70e83b.js";import"./QItem.e64d1adf.js";import"./QItemLabel.ca707468.js";import"./QMenu.b069a20f.js";import"./selection.3a8183a1.js";const W={key:0,class:"q-mx-lg text-red-6 text-weight-bold"},X={key:1,class:"q-mx-lg text-red-6 text-weight-bold"},Y={key:2,class:"q-mx-lg text-red-6 text-weight-bold"},Z={class:"row justify-end"},ee={__name:"CargarPortafolioComponent",emits:["onFire"],setup(V,{emit:m}){const g=T(),t=p({});let l=p({});const n=p(!1),d=F().shape({titulo:S().required("El titulo es obligatorio"),categoria:F().required("La categoria es obligatorio."),descripcion:S().required("La descripci\xF3n es obligatorio")}),{categorias:f}=K(),{postPortafolio:x}=z(),C=async()=>{l.value={};try{await d.validate(t.value,{abortEarly:!1});try{t.value.categoria=t.value.categoria.value,n.value=!0;const{msg:r}=await x(t.value);r=="ok"&&(g.notify({message:"\xA1Portafolio cargado con \xE9xito!",color:"green-10",position:"top-right",icon:"lar la-check-circle"}),t.value={}),n.value=!1,context.emit("onFire",!1)}catch(r){console.log(r)}}catch(r){r.inner.forEach(s=>{l.value[s.path]=s.message})}};return(r,s)=>(u(),v(J,{class:"q-gutter-md",onSubmit:N(C,["prevent"])},{default:a(()=>[e(q,{filled:"",modelValue:t.value.titulo,"onUpdate:modelValue":s[0]||(s[0]=o=>t.value.titulo=o),label:"Titulo",color:"indigo-6",class:Q({error:c(l).titulo})},null,8,["modelValue","class"]),c(l).titulo?(u(),w("span",W,b(c(l).titulo),1)):y("",!0),e(H,{filled:"",modelValue:t.value.categoria,"onUpdate:modelValue":s[1]||(s[1]=o=>t.value.categoria=o),options:c(f),label:"Categoria",color:"indigo-6",class:Q({error:c(l).categoria})},null,8,["modelValue","options","class"]),c(l).categoria?(u(),w("span",X,b(c(l).categoria),1)):y("",!0),e(q,{filled:"",modelValue:t.value.descripcion,"onUpdate:modelValue":s[2]||(s[2]=o=>t.value.descripcion=o),label:"Escribir una descripci\xF3n...",color:"indigo-6",type:"textarea",class:Q({error:c(l).descripcion})},null,8,["modelValue","class"]),c(l).descripcion?(u(),w("span",Y,b(c(l).descripcion),1)):y("",!0),i("div",Z,[e(h,{type:"submit",color:"indigo-6",label:"Cargar",class:"self-center q-ma-sm q-py-sm","icon-right":"las la-cube",loading:n.value},null,8,["loading"])])]),_:1},8,["onSubmit"]))}};var oe=U(ee,[["__scopeId","data-v-30a7c73e"]]);const ae={class:"col-12"},te={class:"q-pa-md"},le=i("img",{src:"https://cdn.quasar.dev/img/boy-avatar.png"},null,-1),se=["src"],re=k("Link"),ie={__name:"PortafoliosComponent",emits:["onFire"],setup(V,{emit:m}){const g=[{name:"titulo",required:!0,label:"Titulo",align:"left",field:r=>r.name,format:r=>`${r}`,sortable:!0},{name:"categoria",align:"left",label:"Categoria",field:"categoria",sortable:!0},{name:"img",label:"Img",align:"left",field:"img",sortable:!0},{name:"enlace",label:"Enlace",align:"left",field:"enlace",sortable:!0},{name:"descripcion",label:"Descripcion",align:"left",field:"descripcion"},{name:"acciones",label:"Acciones",field:"acciones"}],t=T(),l=O(),n=p(""),{portafolios:d,deletePortafolio:f}=z(),x=r=>{t.dialog({title:"\xBFEst\xE1 seguro de borrar el portafolio?",message:"Si no est\xE1 seguro, presione cancelar.",ok:{color:"indigo-6",label:"Si, borrar"},cancel:{color:"red-6",label:"Cancelar"},persistent:!0}).onOk(async()=>{try{const{msg:s}=await f(r);s=="ok"&&t.notify({message:"\xA1Portafolio eliminado con \xE9xito!",color:"green-10",position:"top-right",icon:"lar la-check-circle"}),m("onFire",!1)}catch(s){console.log(s)}})},C=r=>{l.push(`portafolios/edit/${r}`)};return(r,s)=>(u(),w("div",ae,[e(B,{class:"my-card bg-white"},{default:a(()=>[i("div",te,[e(I,{title:"Lista de Contactos",rows:c(d),columns:g,"row-key":"name",filter:n.value},{"top-right":a(()=>[e(q,{borderless:"",dense:"",debounce:"300",modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=o=>n.value=o),placeholder:"Buscar",color:"indigo-6"},{append:a(()=>[e(A,{name:"search"})]),_:1},8,["modelValue"])]),body:a(o=>[e(j,{props:o},{default:a(()=>[e(_,{key:"titulo",props:o},{default:a(()=>[k(b(o.row.titulo),1)]),_:2},1032,["props"]),e(_,{key:"categoria",props:o},{default:a(()=>[k(b(o.row.categoria.nombre),1)]),_:2},1032,["props"]),e(_,{key:"img",props:o},{default:a(()=>[o.row.img?(u(),v(P,{key:1},{default:a(()=>[i("img",{src:o.row.img},null,8,se)]),_:2},1024)):(u(),v(P,{key:0},{default:a(()=>[le]),_:1}))]),_:2},1032,["props"]),e(_,{key:"enlace",props:o},{default:a(()=>[o.row.enlace?(u(),v(h,{key:0,color:"indigo-6",href:o.row.enlace,target:"_blank"},{default:a(()=>[re]),_:2},1032,["href"])):y("",!0)]),_:2},1032,["props"]),e(_,{key:"descripcion",props:o},{default:a(()=>[k(b(o.row.descripcion),1)]),_:2},1032,["props"]),e(_,{key:"acciones",props:o},{default:a(()=>[e(h,{round:"",color:"orange-4",size:"sm",icon:"las la-edit",class:"q-ml-xs",onClick:D=>C(o.row._id)},null,8,["onClick"]),e(h,{round:"",color:"red-4",size:"sm",icon:"las la-trash",class:"q-ml-xs",onClick:D=>x(o.row._id)},null,8,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","filter"])])]),_:1})]))}},ne={class:"q-pa-md q-gutter-sm text-indigo-6"},ce={class:"row"},de={class:"col-12 row q-pa-sm"},ue=i("div",{class:"col-6 text-indigo-6"},[i("span",{class:"text-h3 text-weight-bold"},"Portafolios")],-1),me={class:"col-6 row justify-end"},ge={class:"row justify-center"},fe=i("div",{class:"text-h5 col-8"},"Cargar Portafolio",-1),pe={class:"text-h5 col-4 row justify-end"},Se={__name:"PortafoliosView",setup(V){const m=p(!1),g=p(!0),t=p(!1),l=n=>{g.value=n,t.value=!0,setTimeout(()=>{g.value=!0,t.value=n},1e3)};return(n,d)=>(u(),v(G,{class:"q-pa-md bg-white"},{default:a(()=>[i("div",ne,[e(L,null,{default:a(()=>[e($,{icon:"home",to:{name:"home"}}),e($,{label:"Portafolios",icon:"las la-cube"})]),_:1})]),i("div",ce,[i("div",de,[ue,i("div",me,[e(h,{color:"indigo-6",icon:"las la-cube",onClick:d[0]||(d[0]=f=>m.value=!0),size:"md",rounded:"",label:"+"})])]),g.value?(u(),v(ie,{key:0,onOnFire:l})):y("",!0),i("div",ge,[e(R,{showing:t.value,label:"Espere un momento...","label-class":"text-indigo-6","label-style":"font-size: 1.1em"},null,8,["showing"])])]),e(M,{modelValue:m.value,"onUpdate:modelValue":d[2]||(d[2]=f=>m.value=f)},{default:a(()=>[e(B,{class:"q-dialog-plugin"},{default:a(()=>[e(E,{class:"row"},{default:a(()=>[fe,i("div",pe,[e(h,{rounded:"",icon:"las la-times",size:"sm",onClick:d[1]||(d[1]=f=>m.value=!1),color:"indigo-6"})])]),_:1}),e(E,null,{default:a(()=>[e(oe,{onOnFire:l})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}};export{Se as default};
