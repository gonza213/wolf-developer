import{r as n,aB as a}from"./index.0c61262b.js";const u=()=>{const r=n([]);return(async()=>{try{const{data:e}=await a.get("/categorias");e.categorias.forEach(c=>{r.value.push({label:c.nombre,value:c._id})})}catch(e){console.log(e)}})(),{categorias:r}},d=()=>{const r=n();n();const s=localStorage.getItem("token"),e=async()=>{try{const{data:o}=await a.get("/portafolios?limite=0");r.value=o.portafolios}catch(o){console.log(o)}},c=async o=>{try{const{data:t}=await a.get(`/portafolios/${o}`);return t}catch(t){console.log(t)}},i=async o=>{const{data:t}=await a.post("/portafolios",o,{headers:{"x-token":s}});return t},l=async(o,t)=>{const{data:f}=await a.put(`/portafolios/${o}`,t,{headers:{"x-token":s}});return f},g=async o=>{const{data:t}=await a.delete(`/portafolios/${o}`,{headers:{"x-token":s}});return t};return e(),{portafolios:r,getPortafolio:c,postPortafolio:i,editPortafolio:l,deletePortafolio:g}};export{d as a,u};
