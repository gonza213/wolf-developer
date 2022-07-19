import{Q as V}from"./QParallax.bf78bccd.js";import{Q as P}from"./QPage.ba422465.js";import{Q as T}from"./QImg.00512207.js";import{Q as g}from"./QInnerLoading.1375dcdd.js";import{r as a,aB as j,l as d,ap as C,b as _,i as f,a5 as w,k as l,E as t,aq as s,j as e,at as q,Q as F,c as A}from"./index.267c8a97.js";import{Q as o}from"./QBadge.83fba0a4.js";import{Q as n}from"./QLinearProgress.b87738fe.js";import{T as D}from"./TecnologiasComponent.a365af95.js";import{t as H}from"./database.4265c054.js";const I=()=>{const r=a({}),c=a(null);return(async()=>{c.value=!0;try{const{data:i}=await j.get("/about");r.value=i.about,c.value=!1}catch(i){console.log(i)}})(),{about:r,loading:c}};var M="/assets/CV-Gonzalo-2022.dee02205.pdf";const S={class:"q-pa-xs-sm q-pa-md-xl row justify-center"},$={class:"col-12 col-md-4 col-lg-3 q-pa-lg-lg q-pa-md-md q-pa-xs-sm q-mb-xs-md"},J={class:"col-12 row justify-center"},N={class:"col-12 col-lg-7 col-md-8 q-pa-lg-lg q-pa-xs-sm q-pa-md-md q-mt-xs-md"},O=["innerHTML"],R={class:"q-mt-xl"},U={class:"col-12 row justify-center"},G={class:"col-12 q-px-md-xl q-px-xs-sm row q-py-md"},Y=e("div",{class:"col-12 row justify-center"},[e("h4",null,"Mis Habilidades")],-1),K={class:"col-12 col-md-6 q-pa-sm"},W={class:"q-py-md"},X={class:"absolute-full flex flex-center"},Z={class:"absolute-full flex flex-left"},ee={class:"q-py-md"},le={class:"absolute-full flex flex-center"},oe={class:"absolute-full flex flex-left"},se={class:"q-py-md"},te={class:"absolute-full flex flex-center"},ae={class:"absolute-full flex flex-left"},ce={class:"col-12 col-md-6 q-pa-sm"},ie={class:"q-py-md"},de={class:"absolute-full flex flex-center"},ne={class:"absolute-full flex flex-left"},re={class:"q-py-md"},ue={class:"absolute-full flex flex-center"},_e={class:"absolute-full flex flex-left"},fe={class:"q-py-md"},me={class:"absolute-full flex flex-center"},pe={class:"absolute-full flex flex-left"},xe={__name:"MiPerfilComponent",setup(r){const{about:c,loading:u}=I(),i=a(.65),m=a(.75),p=a(.85),x=a(.65),v=a(.6),h=a(.72),y=d(()=>(i.value*100).toFixed(2)+"%"),Q=d(()=>(m.value*100).toFixed(2)+"%"),k=d(()=>(p.value*100).toFixed(2)+"%"),z=d(()=>(x.value*100).toFixed(2)+"%"),L=d(()=>(v.value*100).toFixed(2)+"%"),B=d(()=>(h.value*100).toFixed(2)+"%"),E=M;return(ge,we)=>{const b=C("animate-onscroll");return _(),f("div",S,[w((_(),f("div",$,[l(q,null,{default:t(()=>[l(T,{src:s(c).img,ratio:1},null,8,["src"]),e("div",J,[l(g,{showing:s(u),label:"Espere un momento...","label-class":"text-indigo-6","label-style":"font-size: 1.1em"},null,8,["showing"])])]),_:1})])),[[b,"animated pulse",void 0,{repeat:!0}]]),e("div",N,[l(q,{class:"q-pa-md"},{default:t(()=>[e("span",{class:"text-subtitle1",innerHTML:s(c).descripcion},null,8,O),w((_(),f("div",R,[l(F,{href:s(E),download:"",color:"indigo-6",label:"Download CV",icon:"las la-download"},null,8,["href"])])),[[b,"animated fadeInDown",void 0,{repeat:!0}]]),e("div",U,[l(g,{showing:s(u),label:"Espere un momento...","label-class":"text-indigo-6","label-style":"font-size: 1.1em"},null,8,["showing"])])]),_:1})]),e("div",G,[Y,e("div",K,[e("div",W,[l(n,{size:"25px",rounded:"",value:i.value,color:"indigo-6"},{default:t(()=>[e("div",X,[l(o,{color:"white","text-color":"dark",label:s(y)},null,8,["label"])]),e("div",Z,[l(o,{color:"indigo-6","text-color":"white",label:"VUEJS"})])]),_:1},8,["value"])]),e("div",ee,[l(n,{rounded:"",size:"25px",value:m.value,color:"indigo-6"},{default:t(()=>[e("div",le,[l(o,{color:"white","text-color":"dark",label:s(Q)},null,8,["label"])]),e("div",oe,[l(o,{color:"indigo-6","text-color":"white",label:"NODEJS"})])]),_:1},8,["value"])]),e("div",se,[l(n,{rounded:"",size:"25px",value:p.value,color:"indigo-6"},{default:t(()=>[e("div",te,[l(o,{color:"white","text-color":"dark",label:s(k)},null,8,["label"])]),e("div",ae,[l(o,{color:"indigo-6","text-color":"white",label:"PHP"})])]),_:1},8,["value"])])]),e("div",ce,[e("div",ie,[l(n,{rounded:"",size:"25px",value:x.value,color:"indigo-6"},{default:t(()=>[e("div",de,[l(o,{color:"white","text-color":"dark",label:s(z)},null,8,["label"])]),e("div",ne,[l(o,{color:"indigo-6","text-color":"white",label:"JQUERY"})])]),_:1},8,["value"])]),e("div",re,[l(n,{rounded:"",size:"25px",value:v.value,color:"indigo-6"},{default:t(()=>[e("div",ue,[l(o,{color:"white","text-color":"dark",label:s(L)},null,8,["label"])]),e("div",_e,[l(o,{color:"indigo-6","text-color":"white",label:"REVIT"})])]),_:1},8,["value"])]),e("div",fe,[l(n,{rounded:"",size:"25px",value:h.value,color:"indigo-6"},{default:t(()=>[e("div",me,[l(o,{color:"white","text-color":"dark",label:s(B)},null,8,["label"])]),e("div",pe,[l(o,{color:"indigo-6","text-color":"white",label:"BOOTSTRAP"})])]),_:1},8,["value"])])])])])}}},ve={class:"q-pa-md-xl q-pa-xs-sm q-mb-md"},he=e("img",{src:"https://res.cloudinary.com/dazfmv5ls/image/upload/v1656452520/wolves-188553_1280_fewfef.jpg"},null,-1),be=e("h1",{class:"text-white text-weight-bold title"},"Sobre m\xED",-1),Pe={__name:"AboutView",setup(r){return(c,u)=>(_(),A(P,{class:"q-pa-md"},{default:t(()=>[e("div",ve,[l(V,{height:200,speed:.5,elevated:""},{media:t(()=>[he]),default:t(()=>[be]),_:1},8,["speed"])]),l(xe),l(D,{tecno:s(H)},null,8,["tecno"])]),_:1}))}};export{Pe as default};
