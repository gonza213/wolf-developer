import{Q as U}from"./QInnerLoading.ce64e7ed.js";import{_ as w,bm as C,r as k,o as q,H as Q,b as i,c as l,E as a,j as s,G as g,k as t,i as v,as as x,Q as d,aB as r,aX as E,F as c}from"./index.f1b44a2b.js";import{A as F,Q as n,a as A,b as B}from"./constants.b80933b4.js";import{Q as P}from"./QPage.677f5366.js";import{u as j}from"./use-quasar.a96d14ef.js";import{u as I}from"./useUsuarios.4fb7e4ab.js";import{E as L}from"./EditarFormComponent.0045535b.js";import"./QMenu.c42c600d.js";import"./selection.d049ce2b.js";import"./QSelect.a5bd5abf.js";import"./QItem.fa0fb0ff.js";import"./QItemLabel.9731a734.js";import"./QForm.293b32f3.js";const N={components:{EditarUser:L},setup(){const u=C().params.id,{getUsuario:_,editUsuario:e,loading:h}=I(),p=k(),m=k(),o=j();return q(async()=>{const f=await _(u);p.value=f.usuario.img,m.value=f.usuario.nombre}),{img:p,getUsuario:_,editUsuario:e,id:u,nombre:m,uploadImg:f=>new Promise(b=>{setTimeout(()=>{b({url:`${F}/api/uploads/usuarios/${u}`,method:"PUT",fieldName:"archivo"}),o.notify({message:"\xA1Foto actualizada con \xE9xito!",color:"green-10",position:"top-right",icon:"lar la-check-circle"})},2e3)}),loading:h}}},T={class:"text-h4 text-indigo-6"},V={class:"row justify-center"},z={class:"col-12 col-md-4 q-ma-md"},S={class:"justify-center row"},R=["loading"],D=["src"],G={class:"row justify-center"},H={class:"row no-wrap items-center q-pa-sm q-gutter-xs"},M=c("Limpiar"),X=c("Remover archivo"),J={class:"col"},K=s("div",{class:"q-uploader__title"},"Actualizar foto de perfil",-1),O={class:"q-uploader__subtitle"},W=c("Elegir Archivo"),Y=c("Subir archivo"),Z=c("Abortar"),$={class:"col-12 col-md-6 q-ma-md"};function oo(y,u,_,e,h,p){const m=Q("EditarUser");return i(),l(P,{class:"q-pa-md bg-white"},{default:a(()=>[s("span",T,"Editar usuario "+g(e.nombre),1),s("div",V,[s("div",z,[t(x,{class:"q-mb-md"},{default:a(()=>[s("div",S,[e.img?(i(),v("img",{key:1,src:e.img,class:"q-pa-sm",style:{width:"200px"}},null,8,D)):(i(),v("img",{key:0,src:"https://cdn.quasar.dev/img/boy-avatar.png",class:"q-pa-sm",style:{width:"200px"},loading:e.loading},null,8,R))]),s("div",G,[t(U,{showing:e.loading,label:"Espere un momento...","label-class":"text-indigo-6","label-style":"font-size: 1.1em"},null,8,["showing"])])]),_:1}),t(B,{style:{width:"100%"},label:"Cambiar foto",accept:".jpg, image/*",factory:e.uploadImg,color:"indigo-6"},{header:a(o=>[s("div",H,[o.queuedFiles.length>0?(i(),l(d,{key:0,icon:"clear_all",onClick:o.removeQueuedFiles,round:"",dense:"",flat:""},{default:a(()=>[t(n,null,{default:a(()=>[M]),_:1})]),_:2},1032,["onClick"])):r("",!0),o.uploadedFiles.length>0?(i(),l(d,{key:1,icon:"done_all",onClick:o.removeUploadedFiles,round:"",dense:"",flat:""},{default:a(()=>[t(n,null,{default:a(()=>[X]),_:1})]),_:2},1032,["onClick"])):r("",!0),o.isUploading?(i(),l(E,{key:2,class:"q-uploader__spinner"})):r("",!0),s("div",J,[K,s("div",O,g(o.uploadSizeLabel)+" / "+g(o.uploadProgressLabel),1)]),o.canAddFiles?(i(),l(d,{key:3,type:"a",icon:"add_box",onClick:o.pickFiles,round:"",dense:"",flat:""},{default:a(()=>[t(A),t(n,null,{default:a(()=>[W]),_:1})]),_:2},1032,["onClick"])):r("",!0),o.canUpload?(i(),l(d,{key:4,icon:"las la-upload",onClick:o.upload,round:"",dense:"",color:"dark"},{default:a(()=>[t(n,null,{default:a(()=>[Y]),_:1})]),_:2},1032,["onClick"])):r("",!0),o.isUploading?(i(),l(d,{key:5,icon:"clear",onClick:o.abort,round:"",dense:"",flat:""},{default:a(()=>[t(n,null,{default:a(()=>[Z]),_:1})]),_:2},1032,["onClick"])):r("",!0)])]),_:1},8,["factory"])]),s("div",$,[t(m,{usuario:e.getUsuario,uid:e.id,editar:e.editUsuario},null,8,["usuario","uid","editar"])])])]),_:1})}var go=w(N,[["render",oo]]);export{go as default};