import{Q as E}from"./QSelect.021858b3.js";import{r as u,aB as L,_ as I,H as A,ap as D,b as n,i as v,j as t,aq as e,G as y,aC as g,k as d,K as P,J as N,a5 as S,E as k,at as $,ar as z,Q as b,c as Q}from"./index.e8f5a58c.js";import{Q as F}from"./QImg.0ee92251.js";import{Q as G}from"./QInnerLoading.8b262263.js";const H=()=>{let a=u(["ALL"]);return(async()=>{try{const{data:s}=await L.get("/categorias");s.categorias.forEach(c=>{a.value.push(c.nombre)})}catch(s){console.log(s)}})(),{categorias:a}},J=(a,r="")=>{const s=u(),c=u(null);let _=u(null),m=u(null),o=u(0);const f=async(p=1,h=0)=>{p<=0&&(p=1);const w=(p-1)*a;try{c.value=!0;const{data:i}=await L.get(`/portafolios?limite=${a}&desde=${w}&recomendar=${r}`);s.value=i.portafolios,_.value=i.total,m.value=p,o.value=i.portafolios.length+h,o.value>_.value&&(o.value=_.value),o.value<0&&(o.value=a),c.value=!1}catch(i){console.log(i)}};return f(),{portafolios:s,total:_,current:m,nextPage:()=>f(m.value+1,o.value),prevPage:()=>f(m.value-1,-o.value),cantidad:o,loading:c}};const K={class:"q-pa-md-xl q-pa-xs-sm row justify-center"},U={class:"col-12 q-py-sm"},M={class:"col-12 text-center"},O={key:0,class:"text-h3"},R={class:"col-12 text-center"},T={class:"text-h5 text-grey-6 cel"},W={class:"col-12 q-py-md-md q-py-xs-sm q-py-lg-md q-px-md-xl q-px-xs-sm"},X={class:"row justify-end"},Y={key:0,class:"col-12 col-md-4 col-lg-4 q-pa-xs-sm q-pa-md-sm q-pa-lg-md"},Z={class:"absolute-bottom text-h5 text-weight-bold text-center"},ee={key:0,class:"row justify-center column link"},te={class:"col-12 q-mt-md"},oe={class:"row justify-center"},se={class:"q-pa-sm text-weight-bolder q-px-md"},ae={class:"row justify-center q-mt-md"},le={__name:"PortfolioComponent",props:["title","subtitle","limit","recomendar"],setup(a){const r=a,s=r.limit,c=r.recomendar,{categorias:_}=H(),{portafolios:m,current:o,nextPage:f,prevPage:p,cantidad:h,total:w,loading:i}=J(s,c),x=u("ALL"),q=r.title,j=r.subtitle;return(ne,C)=>{const B=A("viewer"),V=D("animate-onscroll");return n(),v("div",K,[t("div",U,[t("div",M,[e(q)?(n(),v("span",O,y(e(q)),1)):g("",!0)]),t("div",R,[t("span",T,y(e(j)),1)])]),t("div",W,[t("div",X,[d(E,{modelValue:x.value,"onUpdate:modelValue":C[0]||(C[0]=l=>x.value=l),options:e(_),label:"Filtrar",style:{width:"180px"},color:"indigo-6"},null,8,["modelValue","options"])])]),(n(!0),v(P,null,N(e(m),l=>(n(),v(P,{key:l},[l.categoria.nombre==x.value||x.value=="ALL"?S((n(),v("div",Y,[d(B,null,{default:k(()=>[d($,{class:"my-card"},{default:k(()=>[d(z,{horizontal:""},{default:k(()=>[d(F,{src:l.img,style:{cursor:"pointer"}},{default:k(()=>[t("div",Z,y(l.titulo),1),l.enlace?(n(),v("div",ee,[d(b,{href:l.enlace,target:"_blank",flat:"",round:"",color:"white",icon:"las la-link",class:"self-center"},null,8,["href"])])):g("",!0)]),_:2},1032,["src"])]),_:2},1024)]),_:2},1024)]),_:2},1024)])),[[V,"animated fadeIn",void 0,{repeat:!0}]]):g("",!0)],64))),128)),t("div",te,[t("div",oe,[e(h)>e(s)?(n(),Q(b,{key:0,icon:"las la-chevron-left",color:"indigo-6",onClick:e(p)},null,8,["onClick"])):g("",!0),t("span",se,y(e(o)),1),e(h)<e(w)?(n(),Q(b,{key:1,icon:"las la-chevron-right",color:"indigo-6",onClick:e(f)},null,8,["onClick"])):g("",!0)])]),t("div",ae,[d(G,{showing:e(i),label:"Espere un momento...","label-class":"text-indigo-6","label-style":"font-size: 1.1em"},null,8,["showing"])])])}}};var ue=I(le,[["__scopeId","data-v-4a6b48ff"]]);export{ue as P};
