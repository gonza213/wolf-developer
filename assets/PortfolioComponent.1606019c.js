import{Q as E}from"./QSelect.c3c7300c.js";import{Q as I}from"./QImg.7372e66b.js";import{r as d,aB as L,_ as A,H as D,ap as N,b as i,i as p,j as t,aq as e,G as y,aC as x,k as g,K as q,J as $,a5 as F,E as k,at as S,c as P,Q}from"./index.f70018ef.js";import{Q as z}from"./QInnerLoading.f9ce463c.js";const G=()=>{let a=d(["ALL"]);return(async()=>{try{const{data:s}=await L.get("/categorias");s.categorias.forEach(n=>{a.value.push(n.nombre)})}catch(s){console.log(s)}})(),{categorias:a}},H=(a,l="")=>{const s=d(),n=d(null);let u=d(null),_=d(null),o=d(0);const v=async(m=1,f=0)=>{m<=0&&(m=1);const b=(m-1)*a;try{n.value=!0;const{data:r}=await L.get(`/portafolios?limite=${a}&desde=${b}&recomendar=${l}`);s.value=r.portafolios,u.value=r.total,_.value=m,o.value=r.portafolios.length+f,o.value>u.value&&(o.value=u.value),o.value<0&&(o.value=a),n.value=!1}catch(r){console.log(r)}};return v(),{portafolios:s,total:u,current:_,nextPage:()=>v(_.value+1,o.value),prevPage:()=>v(_.value-1,-o.value),cantidad:o,loading:n}};const J={class:"q-pa-md-xl q-pa-xs-sm row"},K={class:"col-12 q-py-sm"},U={class:"col-12 text-center"},M={key:0,class:"text-h3"},O={class:"col-12 text-center"},R={class:"text-h5 text-grey-6 cel"},T={class:"col-12 q-py-sm"},W={class:"row justify-end"},X={key:0,class:"col-12 col-md-4 q-pa-sm q-my-md-md q-my-xs-sm"},Y={class:"absolute-bottom text-subtitle2 text-center"},Z=["href"],ee={class:"col-12 q-mt-md"},te={class:"row justify-center"},oe={class:"q-pa-sm text-weight-bolder q-px-md"},se={class:"row justify-center q-mt-md"},ae={__name:"PortfolioComponent",props:["title","subtitle","limit","recomendar"],setup(a){const l=a,s=l.limit,n=l.recomendar,{categorias:u}=G(),{portafolios:_,current:o,nextPage:v,prevPage:m,cantidad:f,total:b,loading:r}=H(s,n),h=d("ALL"),w=l.title,B=l.subtitle;return(le,C)=>{const V=D("viewer"),j=N("animate-onscroll");return i(),p("div",J,[t("div",K,[t("div",U,[e(w)?(i(),p("span",M,y(e(w)),1)):x("",!0)]),t("div",O,[t("span",R,y(e(B)),1)])]),t("div",T,[t("div",W,[g(E,{modelValue:h.value,"onUpdate:modelValue":C[0]||(C[0]=c=>h.value=c),options:e(u),label:"Filtrar",style:{width:"180px"},color:"indigo-6"},null,8,["modelValue","options"])])]),(i(!0),p(q,null,$(e(_),c=>(i(),p(q,{key:c},[c.categoria.nombre==h.value||h.value=="ALL"?F((i(),p("div",X,[g(V,null,{default:k(()=>[g(S,{class:"my-card"},{default:k(()=>[g(I,{src:c.img,style:{cursor:"pointer"}},{default:k(()=>[t("div",Y,[t("a",{href:c.enlace,class:"enlace",target:"_blank"},y(c.titulo),9,Z)])]),_:2},1032,["src"])]),_:2},1024)]),_:2},1024)])),[[j,"animated fadeIn",void 0,{repeat:!0}]]):x("",!0)],64))),128)),t("div",ee,[t("div",te,[e(f)>e(s)?(i(),P(Q,{key:0,icon:"las la-chevron-left",color:"indigo-6",onClick:e(m)},null,8,["onClick"])):x("",!0),t("span",oe,y(e(o)),1),e(f)<e(b)?(i(),P(Q,{key:1,icon:"las la-chevron-right",color:"indigo-6",onClick:e(v)},null,8,["onClick"])):x("",!0)])]),t("div",se,[g(z,{showing:e(r),label:"Espere un momento...","label-class":"text-indigo-6","label-style":"font-size: 1.1em"},null,8,["showing"])])])}}};var de=A(ae,[["__scopeId","data-v-a8d00478"]]);export{de as P};
