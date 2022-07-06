import{A as $,Q as V}from"./QParallax.e1acad37.js";import{Q as A}from"./QPage.8bf8236f.js";import{Q as D}from"./QImg.75764255.js";import{l as y,m as t,h as g,Y as k,J as M,aG as N,L as R,aH as E,v as H,r as v,d as S,_ as L,ar as I,c as _,i as m,R as x,k as o,a5 as n,au as p,j as l,Q as J,a8 as q,e as j}from"./index.66704f64.js";import{a as O}from"./index.2cf0d985.js";import{T as U}from"./TecnologiasComponent.9891bebf.js";import{t as G}from"./database.4370aec1.js";const Y=["top","middle","bottom"];var a=y({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>Y.includes(e)}},setup(e,{slots:r}){const s=t(()=>e.align!==void 0?{verticalAlign:e.align}:null),c=t(()=>{const i=e.outline===!0&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${e.multiLine===!0?"multi":"single"}-line`+(e.outline===!0?" q-badge--outline":e.color!==void 0?` bg-${e.color}`:"")+(i!==void 0?` text-${i}`:"")+(e.floating===!0?" q-badge--floating":"")+(e.rounded===!0?" q-badge--rounded":"")+(e.transparent===!0?" q-badge--transparent":"")});return()=>g("div",{class:c.value,style:s.value,role:"alert","aria-label":e.label},k(r.default,e.label!==void 0?[e.label]:[]))}});const X={xs:2,sm:4,md:6,lg:10,xl:14};function w(e,r,s){return{transform:r===!0?`translateX(${s.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var f=y({name:"QLinearProgress",props:{...M,...N,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:r}){const{proxy:s}=H(),c=R(e,s.$q),i=E(e,X),u=t(()=>e.indeterminate===!0||e.query===!0),d=t(()=>e.reverse!==e.query),b=t(()=>({...i.value!==null?i.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),B=t(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),C=t(()=>w(e.buffer!==void 0?e.buffer:1,d.value,s.$q)),Q=t(()=>`q-linear-progress__track absolute-full q-linear-progress__track--with${e.instantFeedback===!0?"out":""}-transition q-linear-progress__track--${c.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),P=t(()=>w(u.value===!0?1:e.value,d.value,s.$q)),z=t(()=>`q-linear-progress__model absolute-full q-linear-progress__model--with${e.instantFeedback===!0?"out":""}-transition q-linear-progress__model--${u.value===!0?"in":""}determinate`),F=t(()=>({width:`${e.value*100}%`})),T=t(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"}`);return()=>{const h=[g("div",{class:Q.value,style:C.value}),g("div",{class:z.value,style:P.value})];return e.stripe===!0&&u.value===!1&&h.push(g("div",{class:T.value,style:F.value})),g("div",{class:B.value,style:b.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},k(r.default,h))}}});const K=()=>{const e=v({});return(async()=>{try{const{data:s}=await O.get(`${$}/api/about`);e.value=s.about}catch(s){console.log(s)}})(),{about:e}};var W="/assets/CV-Gonzalo-2022.dee02205.pdf";const Z=S({setup(){const{about:e}=K(),r=v(.65),s=v(.75),c=v(.85),i=v(.65),u=v(.6),d=v(.72);return{about:e,API_URL:$,progress1:r,progress2:s,progress3:c,progress4:i,progress5:u,progress6:d,progressLabel1:t(()=>(r.value*100).toFixed(2)+"%"),progressLabel2:t(()=>(s.value*100).toFixed(2)+"%"),progressLabel3:t(()=>(c.value*100).toFixed(2)+"%"),progressLabel4:t(()=>(i.value*100).toFixed(2)+"%"),progressLabel5:t(()=>(u.value*100).toFixed(2)+"%"),progressLabel6:t(()=>(d.value*100).toFixed(2)+"%"),cv:W}}}),ee={class:"q-pa-xl row"},le={class:"col-12 col-md-4 q-px-md"},oe={class:"col-12 col-md-8 q-pa-sm"},te=["innerHTML"],se={class:"q-mt-xl"},ae={class:"col-12 q-px-xl row q-py-md"},re=l("div",{class:"col-12 row justify-center"},[l("h4",null,"Mis Habilidades")],-1),ne={class:"col-12 col-md-6 q-pa-sm"},ie={class:"q-py-md"},de={class:"absolute-full flex flex-center"},ce={class:"absolute-full flex flex-left"},ue={class:"q-py-md"},ve={class:"absolute-full flex flex-center"},fe={class:"absolute-full flex flex-left"},ge={class:"q-py-md"},_e={class:"absolute-full flex flex-center"},be={class:"absolute-full flex flex-left"},me={class:"col-12 col-md-6 q-pa-sm"},he={class:"q-py-md"},xe={class:"absolute-full flex flex-center"},pe={class:"absolute-full flex flex-left"},qe={class:"q-py-md"},we={class:"absolute-full flex flex-center"},$e={class:"absolute-full flex flex-left"},ye={class:"q-py-md"},ke={class:"absolute-full flex flex-center"},Se={class:"absolute-full flex flex-left"};function Le(e,r,s,c,i,u){const d=I("animate-onscroll");return _(),m("div",ee,[x((_(),m("div",le,[o(p,null,{default:n(()=>[o(D,{src:e.about.img,height:"400px"},null,8,["src"])]),_:1})])),[[d,"animated pulse",void 0,{repeat:!0}]]),l("div",oe,[o(p,{class:"q-pa-md"},{default:n(()=>[l("span",{class:"text-subtitle1",innerHTML:e.about.descripcion},null,8,te),x((_(),m("div",se,[o(J,{href:e.cv,download:"",color:"indigo-6",label:"Download CV",icon:"las la-download"},null,8,["href"])])),[[d,"animated fadeInDown",void 0,{repeat:!0}]])]),_:1})]),l("div",ae,[re,l("div",ne,[l("div",ie,[o(f,{size:"25px",rounded:"",value:e.progress1,color:"indigo-6"},{default:n(()=>[l("div",de,[o(a,{color:"white","text-color":"dark",label:e.progressLabel1},null,8,["label"])]),l("div",ce,[o(a,{color:"indigo-6","text-color":"white",label:"VUEJS"})])]),_:1},8,["value"])]),l("div",ue,[o(f,{rounded:"",size:"25px",value:e.progress2,color:"indigo-6"},{default:n(()=>[l("div",ve,[o(a,{color:"white","text-color":"dark",label:e.progressLabel2},null,8,["label"])]),l("div",fe,[o(a,{color:"indigo-6","text-color":"white",label:"NODEJS"})])]),_:1},8,["value"])]),l("div",ge,[o(f,{rounded:"",size:"25px",value:e.progress3,color:"indigo-6"},{default:n(()=>[l("div",_e,[o(a,{color:"white","text-color":"dark",label:e.progressLabel3},null,8,["label"])]),l("div",be,[o(a,{color:"indigo-6","text-color":"white",label:"PHP"})])]),_:1},8,["value"])])]),l("div",me,[l("div",he,[o(f,{rounded:"",size:"25px",value:e.progress4,color:"indigo-6"},{default:n(()=>[l("div",xe,[o(a,{color:"white","text-color":"dark",label:e.progressLabel4},null,8,["label"])]),l("div",pe,[o(a,{color:"indigo-6","text-color":"white",label:"JQUERY"})])]),_:1},8,["value"])]),l("div",qe,[o(f,{rounded:"",size:"25px",value:e.progress5,color:"indigo-6"},{default:n(()=>[l("div",we,[o(a,{color:"white","text-color":"dark",label:e.progressLabel5},null,8,["label"])]),l("div",$e,[o(a,{color:"indigo-6","text-color":"white",label:"REVIT"})])]),_:1},8,["value"])]),l("div",ye,[o(f,{rounded:"",size:"25px",value:e.progress6,color:"indigo-6"},{default:n(()=>[l("div",ke,[o(a,{color:"white","text-color":"dark",label:e.progressLabel6},null,8,["label"])]),l("div",Se,[o(a,{color:"indigo-6","text-color":"white",label:"BOOTSTRAP"})])]),_:1},8,["value"])])])])])}var Be=L(Z,[["render",Le]]);const Ce=S({components:{MiPerfil:Be,Tecnologias:U},setup(){return{tecno:G}}}),Qe={class:"q-pa-xl"},Pe=l("img",{src:"https://res.cloudinary.com/dazfmv5ls/image/upload/v1656452520/wolves-188553_1280_fewfef.jpg"},null,-1),ze=l("h1",{class:"text-white text-weight-bold title"},"Sobre m\xED",-1);function Fe(e,r,s,c,i,u){const d=q("MiPerfil"),b=q("Tecnologias");return _(),j(A,{class:"q-pa-md"},{default:n(()=>[l("div",Qe,[o(V,{height:200,speed:.5,elevated:""},{media:n(()=>[Pe]),default:n(()=>[ze]),_:1},8,["speed"])]),o(d),o(b,{tecno:e.tecno},null,8,["tecno"])]),_:1})}var Ee=L(Ce,[["render",Fe]]);export{Ee as default};
