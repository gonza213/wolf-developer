import{r as n,o as f,b as v,c as b,E as u,k as s,aE as d,j as g,Q as w,aD as V,at as y}from"./index.2883e4c5.js";import{Q}from"./QSelect.2fd4edef.js";import{Q as _}from"./QForm.c30757f9.js";import{u as E}from"./use-quasar.201193c6.js";const k={class:"row justify-end"},U={__name:"EditarFormComponent",props:["usuario","uid","editar"],setup(m){const r=m,o=n({nombre:"",rol:"",password:""}),i=E(),t=n(!1),c=["ADMIN_ROLE","USER_ROLE"];f(async()=>{const{usuario:a}=await r.usuario(r.uid);o.value={nombre:a.nombre,rol:a.rol}});const p=async()=>{o.value.password||delete o.value.password;try{t.value=!0;const{msg:a}=await r.editar(r.uid,o.value);a=="ok"&&i.notify({message:"\xA1Usuario actualizado con \xE9xito!",color:"green-10",position:"top-right",icon:"lar la-check-circle"}),t.value=!1}catch(a){i.notify({message:`${a}`,color:"red-10",position:"top-right",icon:"lar la-exclamation-circle"})}};return(a,e)=>(v(),b(y,{class:"q-pa-md"},{default:u(()=>[s(_,{class:"q-gutter-md",onSubmit:V(p,["prevent"])},{default:u(()=>[s(d,{filled:"",modelValue:o.value.nombre,"onUpdate:modelValue":e[0]||(e[0]=l=>o.value.nombre=l),label:"Nombre completo",color:"indigo-6"},null,8,["modelValue"]),s(d,{filled:"",modelValue:o.value.password,"onUpdate:modelValue":e[1]||(e[1]=l=>o.value.password=l),type:"password",label:"Nueva contrase\xF1a",color:"indigo-6"},null,8,["modelValue"]),s(Q,{filled:"",modelValue:o.value.rol,"onUpdate:modelValue":e[2]||(e[2]=l=>o.value.rol=l),options:c,label:"Rol",color:"indigo-6"},null,8,["modelValue"]),g("div",k,[s(w,{type:"submit",color:"indigo-6",label:"Actualizar",class:"self-center q-ma-sm q-py-sm","icon-right":"las la-user",loading:t.value},null,8,["loading"])])]),_:1},8,["onSubmit"])]),_:1}))}};export{U as _};
