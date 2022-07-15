import{Q as z,a as I,b as g,c as q,d as L}from"./QTable.f369ce6f.js";import{_ as C,r as f,b as c,c as _,E as l,k as a,ar as k,aD as x,i as w,G as p,aB as v,j as t,Q as b,aC as M,bc as U,u as j,F as y,I as E,as as S,H as V,aq as P,aU as O}from"./index.f1b44a2b.js";import{Q as N}from"./QInnerLoading.ce64e7ed.js";import{Q as R}from"./QPage.677f5366.js";import{Q as A}from"./QSelect.a5bd5abf.js";import{Q as G}from"./QForm.293b32f3.js";import{u as B}from"./use-quasar.a96d14ef.js";import{c as F,a as D}from"./object.d8999c0c.js";import{u as H,a as T}from"./usePortafolios.079caec8.js";import"./QList.8e5b8aec.js";import"./QLinearProgress.830d9759.js";import"./use-fullscreen.9d695368.js";import"./QItem.fa0fb0ff.js";import"./QItemLabel.9731a734.js";import"./QMenu.c42c600d.js";import"./selection.d049ce2b.js";const $={emits:["onFire"],setup(n,r){const i=B(),o=f({});let s=f({});const u=f(!1),e=F().shape({titulo:D().required("El titulo es obligatorio"),categoria:F().required("La categoria es obligatorio."),descripcion:D().required("La descripci\xF3n es obligatorio")}),{categorias:d}=H(),{postPortafolio:m}=T();return{formData:o,formError:s,loading:u,onSubmit:async()=>{s.value={};try{await e.validate(o.value,{abortEarly:!1});try{o.value.categoria=o.value.categoria.value,u.value=!0;const{msg:h}=await m(o.value);h=="ok"&&(i.notify({message:"\xA1Portafolio cargado con \xE9xito!",color:"green-10",position:"top-right",icon:"lar la-check-circle"}),o.value={}),u.value=!1,r.emit("onFire",!1)}catch(h){console.log(h)}}catch(h){h.inner.forEach(Q=>{s.value[Q.path]=Q.message})}},categorias:d}}},J={key:0,class:"q-mx-lg text-red-6 text-weight-bold"},K={key:1,class:"q-mx-lg text-red-6 text-weight-bold"},W={key:2,class:"q-mx-lg text-red-6 text-weight-bold"},X={class:"row justify-end"};function Y(n,r,i,o,s,u){return c(),_(G,{class:"q-gutter-md",onSubmit:M(o.onSubmit,["prevent"])},{default:l(()=>[a(x,{filled:"",modelValue:o.formData.titulo,"onUpdate:modelValue":r[0]||(r[0]=e=>o.formData.titulo=e),label:"Titulo",color:"indigo-6",class:k({error:o.formError.titulo})},null,8,["modelValue","class"]),o.formError.titulo?(c(),w("span",J,p(o.formError.titulo),1)):v("",!0),a(A,{filled:"",modelValue:o.formData.categoria,"onUpdate:modelValue":r[1]||(r[1]=e=>o.formData.categoria=e),options:o.categorias,label:"Categoria",color:"indigo-6",class:k({error:o.formError.categoria})},null,8,["modelValue","options","class"]),o.formError.categoria?(c(),w("span",K,p(o.formError.categoria),1)):v("",!0),a(x,{filled:"",modelValue:o.formData.descripcion,"onUpdate:modelValue":r[2]||(r[2]=e=>o.formData.descripcion=e),label:"Escribir una descripci\xF3n...",color:"indigo-6",type:"textarea",class:k({error:o.formError.descripcion})},null,8,["modelValue","class"]),o.formError.descripcion?(c(),w("span",W,p(o.formError.descripcion),1)):v("",!0),t("div",X,[a(b,{type:"submit",color:"indigo-6",label:"Cargar",class:"self-center q-ma-sm q-py-sm","icon-right":"las la-cube",loading:o.loading},null,8,["loading"])])]),_:1},8,["onSubmit"])}var Z=C($,[["render",Y],["__scopeId","data-v-95a8bbb8"]]);const oo=[{name:"titulo",required:!0,label:"Titulo",align:"left",field:n=>n.name,format:n=>`${n}`,sortable:!0},{name:"categoria",align:"left",label:"Categoria",field:"categoria",sortable:!0},{name:"img",label:"Img",align:"left",field:"img",sortable:!0},{name:"enlace",label:"Enlace",align:"left",field:"enlace",sortable:!0},{name:"descripcion",label:"Descripcion",align:"left",field:"descripcion"},{name:"acciones",label:"Acciones",field:"acciones"}],eo={name:"ListaPortafolios",emits:["onFire"],setup(n,r){const i=B(),o=U(),{portafolios:s,deletePortafolio:u}=T(),e=d=>{i.dialog({title:"\xBFEst\xE1 seguro de borrar el portafolio?",message:"Si no est\xE1 seguro, presione cancelar.",ok:{color:"indigo-6",label:"Si, borrar"},cancel:{color:"red-6",label:"Cancelar"},persistent:!0}).onOk(async()=>{try{const{msg:m}=await u(d);m=="ok"&&i.notify({message:"\xA1Portafolio eliminado con \xE9xito!",color:"green-10",position:"top-right",icon:"lar la-check-circle"}),r.emit("onFire",!1)}catch(m){console.log(m)}})};return{filter:f(""),columns:oo,onDelete:e,portafolios:s,onRoute:d=>{o.push(`portafolios/edit/${d}`)}}}},ao={class:"col-12"},ro={class:"q-pa-md"},lo=t("img",{src:"https://cdn.quasar.dev/img/boy-avatar.png"},null,-1),to=["src"],io=y("Link");function so(n,r,i,o,s,u){return c(),w("div",ao,[a(S,{class:"my-card bg-white"},{default:l(()=>[t("div",ro,[a(z,{title:"Lista de Contactos",rows:o.portafolios,columns:o.columns,"row-key":"name",filter:o.filter},{"top-right":l(()=>[a(x,{borderless:"",dense:"",debounce:"300",modelValue:o.filter,"onUpdate:modelValue":r[0]||(r[0]=e=>o.filter=e),placeholder:"Buscar",color:"indigo-6"},{append:l(()=>[a(j,{name:"search"})]),_:1},8,["modelValue"])]),body:l(e=>[a(I,{props:e},{default:l(()=>[a(g,{key:"titulo",props:e},{default:l(()=>[y(p(e.row.titulo),1)]),_:2},1032,["props"]),a(g,{key:"categoria",props:e},{default:l(()=>[y(p(e.row.categoria.nombre),1)]),_:2},1032,["props"]),a(g,{key:"img",props:e},{default:l(()=>[e.row.img?(c(),_(E,{key:1},{default:l(()=>[t("img",{src:e.row.img},null,8,to)]),_:2},1024)):(c(),_(E,{key:0},{default:l(()=>[lo]),_:1}))]),_:2},1032,["props"]),a(g,{key:"enlace",props:e},{default:l(()=>[e.row.enlace?(c(),_(b,{key:0,color:"indigo-6",href:e.row.enlace,target:"_blank"},{default:l(()=>[io]),_:2},1032,["href"])):v("",!0)]),_:2},1032,["props"]),a(g,{key:"descripcion",props:e},{default:l(()=>[y(p(e.row.descripcion),1)]),_:2},1032,["props"]),a(g,{key:"acciones",props:e},{default:l(()=>[a(b,{round:"",color:"orange-4",size:"sm",icon:"las la-edit",class:"q-ml-xs",onClick:d=>o.onRoute(e.row._id)},null,8,["onClick"]),a(b,{round:"",color:"red-4",size:"sm",icon:"las la-trash",class:"q-ml-xs",onClick:d=>o.onDelete(e.row._id)},null,8,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","filter"])])]),_:1})])}var no=C(eo,[["render",so]]);const co={components:{CargarPortafolio:Z,Portafolios:no},setup(){const n=f(!1),r=f(!0),i=f(!1);return{showModal:n,loading:i,showTable:r,onFire:s=>{r.value=s,i.value=!0,setTimeout(()=>{r.value=!0,i.value=s},1e3)}}}},mo={class:"q-pa-md q-gutter-sm text-indigo-6"},uo={class:"row"},fo={class:"col-12 row q-pa-sm"},go=t("div",{class:"col-6 text-indigo-6"},[t("span",{class:"text-h3 text-weight-bold"},"Portafolios")],-1),_o={class:"col-6 row justify-end"},po={class:"row justify-center"},bo=t("div",{class:"text-h5 col-8"},"Cargar Portafolio",-1),ho={class:"text-h5 col-4 row justify-end"};function vo(n,r,i,o,s,u){const e=V("Portafolios"),d=V("CargarPortafolio");return c(),_(R,{class:"q-pa-md bg-white"},{default:l(()=>[t("div",mo,[a(L,null,{default:l(()=>[a(q,{icon:"home",to:{name:"home"}}),a(q,{label:"Portafolios",icon:"las la-cube"})]),_:1})]),t("div",uo,[t("div",fo,[go,t("div",_o,[a(b,{color:"indigo-6",icon:"las la-cube",onClick:r[0]||(r[0]=m=>o.showModal=!0),size:"md",rounded:"",label:"+"})])]),o.showTable?(c(),_(e,{key:0,onOnFire:o.onFire},null,8,["onOnFire"])):v("",!0),t("div",po,[a(N,{showing:o.loading,label:"Espere un momento...","label-class":"text-indigo-6","label-style":"font-size: 1.1em"},null,8,["showing"])])]),a(O,{modelValue:o.showModal,"onUpdate:modelValue":r[2]||(r[2]=m=>o.showModal=m)},{default:l(()=>[a(S,{class:"q-dialog-plugin"},{default:l(()=>[a(P,{class:"row"},{default:l(()=>[bo,t("div",ho,[a(b,{rounded:"",icon:"las la-times",size:"sm",onClick:r[1]||(r[1]=m=>o.showModal=!1),color:"indigo-6"})])]),_:1}),a(P,null,{default:l(()=>[a(d,{onOnFire:o.onFire},null,8,["onOnFire"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var Lo=C(co,[["render",vo]]);export{Lo as default};
