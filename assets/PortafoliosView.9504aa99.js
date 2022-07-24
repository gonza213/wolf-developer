import{Q as $,a as I}from"./QBreadcrumbs.55076fb8.js";import{_ as j,r as p,b as u,c as v,E as a,k as e,as as Q,aq as c,aE as q,i as w,G as b,aC as y,j as i,Q as h,aD as L,bd as U,u as N,F as k,I as P,at as B,ar as E,aV as O}from"./index.267c8a97.js";import{Q as A}from"./QInnerLoading.1375dcdd.js";import{Q as M}from"./QPage.ba422465.js";import{Q as R}from"./QSelect.266bd1bc.js";import{Q as G}from"./QForm.c51d5a78.js";import{u as T}from"./use-quasar.baa4927f.js";import{c as F,a as S}from"./object.d8999c0c.js";import{u as H,a as z}from"./usePortafolios.9b9fd530.js";import{Q as J,a as K,b as _}from"./QTable.dd7728da.js";import"./QItem.cc81052d.js";import"./QItemLabel.19ee771b.js";import"./QMenu.46d4c45a.js";import"./selection.5108750d.js";import"./QList.b68a70fa.js";import"./QLinearProgress.b87738fe.js";import"./use-fullscreen.29c46fb7.js";const W={key:0,class:"q-mx-lg text-red-6 text-weight-bold"},X={key:1,class:"q-mx-lg text-red-6 text-weight-bold"},Y={key:2,class:"q-mx-lg text-red-6 text-weight-bold"},Z={class:"row justify-end"},ee={__name:"CargarPortafolioComponent",emits:["onFire"],setup(V,{emit:m}){const f=T(),t=p({});let l=p({});const n=p(!1),d=F().shape({titulo:S().required("El titulo es obligatorio"),categoria:F().required("La categoria es obligatorio."),descripcion:S().required("La descripci\xF3n es obligatorio")}),{categorias:g}=H(),{postPortafolio:x}=z(),C=async()=>{l.value={};try{await d.validate(t.value,{abortEarly:!1});try{t.value.categoria=t.value.categoria.value,n.value=!0;const{msg:r}=await x(t.value);r=="ok"&&(f.notify({message:"\xA1Portafolio cargado con \xE9xito!",color:"green-10",position:"top-right",icon:"lar la-check-circle"}),t.value={}),n.value=!1,m("onFire",!1)}catch(r){console.log(r)}}catch(r){r.inner.forEach(s=>{l.value[s.path]=s.message})}};return(r,s)=>(u(),v(G,{class:"q-gutter-md",onSubmit:L(C,["prevent"])},{default:a(()=>[e(q,{filled:"",modelValue:t.value.titulo,"onUpdate:modelValue":s[0]||(s[0]=o=>t.value.titulo=o),label:"Titulo",color:"indigo-6",class:Q({error:c(l).titulo})},null,8,["modelValue","class"]),c(l).titulo?(u(),w("span",W,b(c(l).titulo),1)):y("",!0),e(R,{filled:"",modelValue:t.value.categoria,"onUpdate:modelValue":s[1]||(s[1]=o=>t.value.categoria=o),options:c(g),label:"Categoria",color:"indigo-6",class:Q({error:c(l).categoria})},null,8,["modelValue","options","class"]),c(l).categoria?(u(),w("span",X,b(c(l).categoria),1)):y("",!0),e(q,{filled:"",modelValue:t.value.descripcion,"onUpdate:modelValue":s[2]||(s[2]=o=>t.value.descripcion=o),label:"Escribir una descripci\xF3n...",color:"indigo-6",type:"textarea",class:Q({error:c(l).descripcion})},null,8,["modelValue","class"]),c(l).descripcion?(u(),w("span",Y,b(c(l).descripcion),1)):y("",!0),i("div",Z,[e(h,{type:"submit",color:"indigo-6",label:"Cargar",class:"self-center q-ma-sm q-py-sm","icon-right":"las la-cube",loading:n.value},null,8,["loading"])])]),_:1},8,["onSubmit"]))}};var oe=j(ee,[["__scopeId","data-v-dfff0086"]]);const ae={class:"col-12"},te={class:"q-pa-md"},le=i("img",{src:"https://cdn.quasar.dev/img/boy-avatar.png"},null,-1),se=["src"],re=k("Link"),ie={__name:"PortafoliosComponent",emits:["onFire"],setup(V,{emit:m}){const f=[{name:"titulo",required:!0,label:"Titulo",align:"left",field:r=>r.name,format:r=>`${r}`,sortable:!0},{name:"categoria",align:"left",label:"Categoria",field:"categoria",sortable:!0},{name:"img",label:"Img",align:"left",field:"img",sortable:!0},{name:"enlace",label:"Enlace",align:"left",field:"enlace",sortable:!0},{name:"descripcion",label:"Descripcion",align:"left",field:"descripcion"},{name:"acciones",label:"Acciones",field:"acciones"}],t=T(),l=U(),n=p(""),{portafolios:d,deletePortafolio:g}=z(),x=r=>{t.dialog({title:"\xBFEst\xE1 seguro de borrar el portafolio?",message:"Si no est\xE1 seguro, presione cancelar.",ok:{color:"indigo-6",label:"Si, borrar"},cancel:{color:"red-6",label:"Cancelar"},persistent:!0}).onOk(async()=>{try{const{msg:s}=await g(r);s=="ok"&&t.notify({message:"\xA1Portafolio eliminado con \xE9xito!",color:"green-10",position:"top-right",icon:"lar la-check-circle"}),m("onFire",!1)}catch(s){console.log(s)}})},C=r=>{l.push(`portafolios/edit/${r}`)};return(r,s)=>(u(),w("div",ae,[e(B,{class:"my-card bg-white"},{default:a(()=>[i("div",te,[e(J,{title:"Lista de Contactos",rows:c(d),columns:f,"row-key":"name",filter:n.value},{"top-right":a(()=>[e(q,{borderless:"",dense:"",debounce:"300",modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=o=>n.value=o),placeholder:"Buscar",color:"indigo-6"},{append:a(()=>[e(N,{name:"search"})]),_:1},8,["modelValue"])]),body:a(o=>[e(K,{props:o},{default:a(()=>[e(_,{key:"titulo",props:o},{default:a(()=>[k(b(o.row.titulo),1)]),_:2},1032,["props"]),e(_,{key:"categoria",props:o},{default:a(()=>[k(b(o.row.categoria.nombre),1)]),_:2},1032,["props"]),e(_,{key:"img",props:o},{default:a(()=>[o.row.img?(u(),v(P,{key:1},{default:a(()=>[i("img",{src:o.row.img},null,8,se)]),_:2},1024)):(u(),v(P,{key:0},{default:a(()=>[le]),_:1}))]),_:2},1032,["props"]),e(_,{key:"enlace",props:o},{default:a(()=>[o.row.enlace?(u(),v(h,{key:0,color:"indigo-6",href:o.row.enlace,target:"_blank"},{default:a(()=>[re]),_:2},1032,["href"])):y("",!0)]),_:2},1032,["props"]),e(_,{key:"descripcion",props:o},{default:a(()=>[k(b(o.row.descripcion),1)]),_:2},1032,["props"]),e(_,{key:"acciones",props:o},{default:a(()=>[e(h,{round:"",color:"orange-4",size:"sm",icon:"las la-edit",class:"q-ml-xs",onClick:D=>C(o.row._id)},null,8,["onClick"]),e(h,{round:"",color:"red-4",size:"sm",icon:"las la-trash",class:"q-ml-xs",onClick:D=>x(o.row._id)},null,8,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","filter"])])]),_:1})]))}},ne={class:"q-pa-md q-gutter-sm text-indigo-6"},ce={class:"row"},de={class:"col-12 row q-pa-sm"},ue=i("div",{class:"col-6 text-indigo-6"},[i("span",{class:"text-h3 text-weight-bold"},"Portafolios")],-1),me={class:"col-6 row justify-end"},fe={class:"row justify-center"},ge=i("div",{class:"text-h5 col-8"},"Cargar Portafolio",-1),pe={class:"text-h5 col-4 row justify-end"},Be={__name:"PortafoliosView",setup(V){const m=p(!1),f=p(!0),t=p(!1),l=n=>{f.value=n,t.value=!0,setTimeout(()=>{f.value=!0,t.value=n},1e3)};return(n,d)=>(u(),v(M,{class:"q-pa-md bg-white"},{default:a(()=>[i("div",ne,[e(I,null,{default:a(()=>[e($,{icon:"home",to:{name:"home"}}),e($,{label:"Portafolios",icon:"las la-cube"})]),_:1})]),i("div",ce,[i("div",de,[ue,i("div",me,[e(h,{color:"indigo-6",icon:"las la-cube",onClick:d[0]||(d[0]=g=>m.value=!0),size:"md",rounded:"",label:"+"})])]),f.value?(u(),v(ie,{key:0,onOnFire:l})):y("",!0),i("div",fe,[e(A,{showing:t.value,label:"Espere un momento...","label-class":"text-indigo-6","label-style":"font-size: 1.1em"},null,8,["showing"])])]),e(O,{modelValue:m.value,"onUpdate:modelValue":d[2]||(d[2]=g=>m.value=g)},{default:a(()=>[e(B,{class:"q-dialog-plugin"},{default:a(()=>[e(E,{class:"row"},{default:a(()=>[ge,i("div",pe,[e(h,{rounded:"",icon:"las la-times",size:"sm",onClick:d[1]||(d[1]=g=>m.value=!1),color:"indigo-6"})])]),_:1}),e(E,null,{default:a(()=>[e(oe,{onOnFire:l})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}};export{Be as default};