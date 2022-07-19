import{Q as C}from"./QInnerLoading.1375dcdd.js";import{bn as Q,r as v,o as x,b as s,c as i,E as a,j as t,G as p,k as o,i as y,aq as r,at as U,Q as n,aC as l,aY as F,F as c}from"./index.267c8a97.js";import{Q as d,a as A,b as E,A as P}from"./constants.1352b3a5.js";import{Q as j}from"./QPage.ba422465.js";import{u as B}from"./use-quasar.baa4927f.js";import{u as L}from"./useUsuarios.4757e44e.js";import{_ as N}from"./EditarFormComponent.c9b73f1f.js";import"./QMenu.46d4c45a.js";import"./selection.5108750d.js";import"./QSelect.266bd1bc.js";import"./QItem.cc81052d.js";import"./QItemLabel.19ee771b.js";import"./QForm.c51d5a78.js";const T={class:"text-h4 text-indigo-6"},V={class:"row justify-center"},z={class:"col-12 col-md-4 q-ma-md"},S={class:"justify-center row"},$=["loading"],I=["src"],R={class:"row justify-center"},D={class:"row no-wrap items-center q-pa-sm q-gutter-xs"},G=c("Limpiar"),M=c("Remover archivo"),Y={class:"col"},H=t("div",{class:"q-uploader__title"},"Actualizar foto de perfil",-1),J={class:"q-uploader__subtitle"},K=c("Elegir Archivo"),O=c("Subir archivo"),W=c("Abortar"),X={class:"col-12 col-md-6 q-ma-md"},pe={__name:"EditPerfilView",setup(Z){const _=Q().params.id,{getUsuario:f,editUsuario:b,loading:h}=L(),m=v(),g=v(),q=B();x(async()=>{const u=await f(_);m.value=u.usuario.img,g.value=u.usuario.nombre});const w=u=>new Promise(k=>{setTimeout(()=>{k({url:`${P}/api/uploads/usuarios/${_}`,method:"PUT",fieldName:"archivo"}),q.notify({message:"\xA1Foto actualizada con \xE9xito!",color:"green-10",position:"top-right",icon:"lar la-check-circle"})},2e3)});return(u,k)=>(s(),i(j,{class:"q-pa-md bg-white"},{default:a(()=>[t("span",T,"Editar usuario "+p(g.value),1),t("div",V,[t("div",z,[o(U,{class:"q-mb-md"},{default:a(()=>[t("div",S,[m.value?(s(),y("img",{key:1,src:m.value,class:"q-pa-sm",style:{width:"200px"}},null,8,I)):(s(),y("img",{key:0,src:"https://cdn.quasar.dev/img/boy-avatar.png",class:"q-pa-sm",style:{width:"200px"},loading:r(h)},null,8,$))]),t("div",R,[o(C,{showing:r(h),label:"Espere un momento...","label-class":"text-indigo-6","label-style":"font-size: 1.1em"},null,8,["showing"])])]),_:1}),o(E,{style:{width:"100%"},label:"Cambiar foto",accept:".jpg, image/*",factory:w,color:"indigo-6"},{header:a(e=>[t("div",D,[e.queuedFiles.length>0?(s(),i(n,{key:0,icon:"clear_all",onClick:e.removeQueuedFiles,round:"",dense:"",flat:""},{default:a(()=>[o(d,null,{default:a(()=>[G]),_:1})]),_:2},1032,["onClick"])):l("",!0),e.uploadedFiles.length>0?(s(),i(n,{key:1,icon:"done_all",onClick:e.removeUploadedFiles,round:"",dense:"",flat:""},{default:a(()=>[o(d,null,{default:a(()=>[M]),_:1})]),_:2},1032,["onClick"])):l("",!0),e.isUploading?(s(),i(F,{key:2,class:"q-uploader__spinner"})):l("",!0),t("div",Y,[H,t("div",J,p(e.uploadSizeLabel)+" / "+p(e.uploadProgressLabel),1)]),e.canAddFiles?(s(),i(n,{key:3,type:"a",icon:"add_box",onClick:e.pickFiles,round:"",dense:"",flat:""},{default:a(()=>[o(A),o(d,null,{default:a(()=>[K]),_:1})]),_:2},1032,["onClick"])):l("",!0),e.canUpload?(s(),i(n,{key:4,icon:"las la-upload",onClick:e.upload,round:"",dense:"",color:"dark"},{default:a(()=>[o(d,null,{default:a(()=>[O]),_:1})]),_:2},1032,["onClick"])):l("",!0),e.isUploading?(s(),i(n,{key:5,icon:"clear",onClick:e.abort,round:"",dense:"",flat:""},{default:a(()=>[o(d,null,{default:a(()=>[W]),_:1})]),_:2},1032,["onClick"])):l("",!0)])]),_:1})]),t("div",X,[o(N,{usuario:r(f),uid:r(_),editar:r(b)},null,8,["usuario","uid","editar"])])])]),_:1}))}};export{pe as default};
