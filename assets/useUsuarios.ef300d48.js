import{r as n,aB as e}from"./index.2883e4c5.js";const k=()=>{const r=n(),s=localStorage.getItem("token"),o=n(),u=async()=>{try{const{data:a}=await e.get("/usuarios?limite=0",{headers:{"x-token":s}});r.value=a.usuarios}catch(a){console.log(a)}},c=async a=>{o.value=!0;try{const{data:t}=await e.get(`/usuarios/${a}`,{headers:{"x-token":s}});return o.value=!1,t}catch(t){console.log(t)}},i=async a=>{const{data:t}=await e.post("/usuarios",a,{headers:{"x-token":s}});return t},d=async(a,t)=>{const{data:g}=await e.put(`/usuarios/${a}`,t,{headers:{"x-token":s}});return g},l=async a=>{const{data:t}=await e.delete(`/usuarios/${a}`,{headers:{"x-token":s}});return t};return u(),{usuarios:r,createUsuario:i,deleteUsuario:l,getUsuario:c,editUsuario:d,loading:o}};export{k as u};
