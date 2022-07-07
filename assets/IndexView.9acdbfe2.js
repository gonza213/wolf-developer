import{S as ct,T as te,t as $e,U as dt,V as ce,W as we,Z as Ve,a0 as fe,$ as qe,r as R,m as v,w as z,n as ne,y as Z,h,am as vt,an as ft,ao as mt,D as ie,p as ee,ap as bt,aq as De,ar as ht,o as Se,P as he,a1 as We,a2 as Oe,as as gt,a7 as Ue,x as Ke,Q as me,d as ge,_ as pe,at as He,e as W,j as U,l as y,F as N,L as Xe,K as Ge,f as pt,k as T,a6 as le,G as se,H as oe,au as _t,av as yt,aw as Pe,q as Ct,ax as Ye,ay as xt,aj as wt,az as qt,v as be,aA as $t,a3 as Fe,C as Pt,aB as St,aC as Tt,aD as kt,I as J}from"./index.833c13ce.js";import{g as je,s as Qe,Q as It}from"./touch.8e8b155e.js";import{c as Bt}from"./selection.044f0fd3.js";import{u as At}from"./use-quasar.edf5e3c7.js";import{r as Lt,P as Rt}from"./PortfolioComponent.9a6f7383.js";import{C as Et}from"./SuscriptorComponent.7345cc88.js";import{T as Mt}from"./TecnologiasComponent.0924332c.js";import{Q as Vt}from"./QImg.0eeb95f9.js";import{t as Dt,s as Ft,a as jt}from"./database.4370aec1.js";import"./QItem.1c30aeee.js";import"./QParallax.12e0a857.js";import"./QForm.88201d79.js";function Qt(e){const o=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((s,r)=>{const a=parseFloat(s);a&&(o[r]=a)}),o}var Nt=ct({name:"touch-swipe",beforeMount(e,{value:o,arg:s,modifiers:r}){if(r.mouse!==!0&&te.has.touch!==!0)return;const a=r.mouseCapture===!0?"Capture":"",t={handler:o,sensitivity:Qt(s),direction:je(r),noop:$e,mouseStart(l){Qe(l,t)&&dt(l)&&(ce(t,"temp",[[document,"mousemove","move",`notPassive${a}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(l,!0))},touchStart(l){if(Qe(l,t)){const u=l.target;ce(t,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","notPassiveCapture"],[u,"touchend","end","notPassiveCapture"]]),t.start(l)}},start(l,u){te.is.firefox===!0&&we(e,!0);const q=Ve(l);t.event={x:q.left,y:q.top,time:Date.now(),mouse:u===!0,dir:!1}},move(l){if(t.event===void 0)return;if(t.event.dir!==!1){fe(l);return}const u=Date.now()-t.event.time;if(u===0)return;const q=Ve(l),C=q.left-t.event.x,c=Math.abs(C),_=q.top-t.event.y,p=Math.abs(_);if(t.event.mouse!==!0){if(c<t.sensitivity[1]&&p<t.sensitivity[1]){t.end(l);return}}else if(c<t.sensitivity[2]&&p<t.sensitivity[2])return;const k=c/u,E=p/u;t.direction.vertical===!0&&c<p&&c<100&&E>t.sensitivity[0]&&(t.event.dir=_<0?"up":"down"),t.direction.horizontal===!0&&c>p&&p<100&&k>t.sensitivity[0]&&(t.event.dir=C<0?"left":"right"),t.direction.up===!0&&c<p&&_<0&&c<100&&E>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&c<p&&_>0&&c<100&&E>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&c>p&&C<0&&p<100&&k>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&c>p&&C>0&&p<100&&k>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(fe(l),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Bt(),t.styleCleanup=F=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const M=()=>{document.body.classList.remove("no-pointer-events--children")};F===!0?setTimeout(M,50):M()}),t.handler({evt:l,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:u,distance:{x:c,y:p}})):t.end(l)},end(l){t.event!==void 0&&(qe(t,"temp"),te.is.firefox===!0&&we(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),l!==void 0&&t.event.dir!==!1&&fe(l),t.event=void 0)}};e.__qtouchswipe=t,r.mouse===!0&&ce(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]]),te.has.touch===!0&&ce(t,"main",[[e,"touchstart","touchStart",`passive${r.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const s=e.__qtouchswipe;s!==void 0&&(o.oldValue!==o.value&&(typeof o.value!="function"&&s.end(),s.handler=o.value),s.direction=je(o.modifiers))},beforeUnmount(e){const o=e.__qtouchswipe;o!==void 0&&(qe(o,"main"),qe(o,"temp"),te.is.firefox===!0&&we(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchswipe)}});function zt(){const e=new Map;return{getCache:function(o,s){return e[o]===void 0?e[o]=s:e[o]},getCacheWithFn:function(o,s){return e[o]===void 0?e[o]=s():e[o]}}}const Je={name:{required:!0},disable:Boolean},Ne={setup(e,{slots:o}){return()=>h("div",{class:"q-panel scroll",role:"tabpanel"},ie(o.default))}},Ze={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},et=["update:modelValue","before-transition","transition"];function tt(){const{props:e,emit:o,proxy:s}=Z(),{getCacheWithFn:r}=zt();let a,t;const l=R(null),u=R(null);function q(i){const g=e.vertical===!0?"up":"left";B((s.$q.lang.rtl===!0?-1:1)*(i.direction===g?1:-1))}const C=v(()=>[[Nt,q,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),c=v(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),_=v(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),p=v(()=>`--q-transition-duration: ${e.transitionDuration}ms`),k=v(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),E=v(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),F=v(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);z(()=>e.modelValue,(i,g)=>{const V=f(i)===!0?I(i):-1;t!==!0&&P(V===-1?0:V<I(g)?-1:1),l.value!==V&&(l.value=V,o("before-transition",i,g),ne(()=>{o("transition",i,g)}))});function M(){B(1)}function D(){B(-1)}Object.assign(s,{next:M,previous:D,goTo:j});function j(i){o("update:modelValue",i)}function f(i){return i!=null&&i!==""}function I(i){return a.findIndex(g=>g.props.name===i&&g.props.disable!==""&&g.props.disable!==!0)}function L(){return a.filter(i=>i.props.disable!==""&&i.props.disable!==!0)}function P(i){const g=i!==0&&e.animated===!0&&l.value!==-1?"q-transition--"+(i===-1?c.value:_.value):null;u.value!==g&&(u.value=g)}function B(i,g=l.value){let V=g+i;for(;V>-1&&V<a.length;){const Q=a[V];if(Q!==void 0&&Q.props.disable!==""&&Q.props.disable!==!0){P(i),t=!0,o("update:modelValue",Q.props.name),setTimeout(()=>{t=!1});return}V+=i}e.infinite===!0&&a.length>0&&g!==-1&&g!==a.length&&B(i,i===-1?a.length:-1)}function G(){const i=I(e.modelValue);return l.value!==i&&(l.value=i),!0}function Y(){const i=f(e.modelValue)===!0&&G()&&a[l.value];return e.keepAlive===!0?[h(ft,E.value,[h(F.value===!0?r(k.value,()=>({...Ne,name:k.value})):Ne,{key:k.value,style:p.value},()=>i)])]:[h("div",{class:"q-panel scroll",style:p.value,key:k.value,role:"tabpanel"},[i])]}function A(){if(a.length!==0)return e.animated===!0?[h(vt,{name:u.value},Y)]:Y()}function K(i){return a=mt(ie(i.default,[])).filter(g=>g.props!==null&&g.props.slot===void 0&&f(g.props.name)===!0),a.length}function O(){return a}return{panelIndex:l,panelDirectives:C,updatePanelsList:K,updatePanelIndex:G,getPanelContent:A,getEnabledPanels:L,getPanels:O,isValidPanelName:f,keepAliveProps:E,needsUniqueKeepAliveWrapper:F,goToPanelByOffset:B,goToPanel:j,nextPanel:M,previousPanel:D}}var Wt=ee({name:"QCarouselSlide",props:{...Je,imgSrc:String},setup(e,{slots:o}){const s=v(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>h("div",{class:"q-carousel__slide",style:s.value},ie(o.default))}});let ae=0;const Ot={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Ut=["update:fullscreen","fullscreen"];function Kt(){const e=Z(),{props:o,emit:s,proxy:r}=e;let a,t,l;const u=R(!1);bt(e)===!0&&z(()=>r.$route.fullPath,()=>{o.noRouteFullscreenExit!==!0&&c()}),z(()=>o.fullscreen,_=>{u.value!==_&&q()}),z(u,_=>{s("update:fullscreen",_),s("fullscreen",_)});function q(){u.value===!0?c():C()}function C(){u.value!==!0&&(u.value=!0,l=r.$el.parentNode,l.replaceChild(t,r.$el),document.body.appendChild(r.$el),ae++,ae===1&&document.body.classList.add("q-body--fullscreen-mixin"),a={handler:c},De.add(a))}function c(){u.value===!0&&(a!==void 0&&(De.remove(a),a=void 0),l.replaceChild(r.$el,t),u.value=!1,ae=Math.max(0,ae-1),ae===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),r.$el.scrollIntoView!==void 0&&setTimeout(()=>{r.$el.scrollIntoView()})))}return ht(()=>{t=document.createElement("span")}),Se(()=>{o.fullscreen===!0&&C()}),he(c),Object.assign(r,{toggleFullscreen:q,setFullscreen:C,exitFullscreen:c}),{inFullscreen:u,toggleFullscreen:q}}const Ht=["top","right","bottom","left"],Xt=["regular","flat","outline","push","unelevated"];var Gt=ee({name:"QCarousel",props:{...We,...Ze,...Ot,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>Xt.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Ht.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...Ut,...et],setup(e,{slots:o}){const{proxy:{$q:s}}=Z(),r=Oe(e,s);let a,t;const{updatePanelsList:l,getPanelContent:u,panelDirectives:q,goToPanel:C,previousPanel:c,nextPanel:_,getEnabledPanels:p,panelIndex:k}=tt(),{inFullscreen:E}=Kt(),F=v(()=>E.value!==!0&&e.height!==void 0?{height:e.height}:{}),M=v(()=>e.vertical===!0?"vertical":"horizontal"),D=v(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(E.value===!0?" fullscreen":"")+(r.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${M.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${L.value}`:"")),j=v(()=>{const A=[e.prevIcon||s.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||s.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&s.lang.rtl===!0?A.reverse():A}),f=v(()=>e.navigationIcon||s.iconSet.carousel.navigationIcon),I=v(()=>e.navigationActiveIcon||f.value),L=v(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),P=v(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));z(()=>e.modelValue,()=>{e.autoplay&&(clearInterval(a),B())}),z(()=>e.autoplay,A=>{A?B():clearInterval(a)});function B(){const A=gt(e.autoplay)===!0?e.autoplay:5e3;a=setTimeout(A>=0?_:c,Math.abs(A))}Se(()=>{e.autoplay&&B()}),he(()=>{clearInterval(a)});function G(A,K){return h("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${A} q-carousel__navigation--${L.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[h("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},p().map(K))])}function Y(){const A=[];if(e.navigation===!0){const K=o["navigation-icon"]!==void 0?o["navigation-icon"]:i=>h(me,{key:"nav"+i.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${i.active===!0?"":"in"}active`,...i.btnProps,onClick:i.onClick}),O=t-1;A.push(G("buttons",(i,g)=>{const V=i.props.name,Q=k.value===g;return K({index:g,maxIndex:O,name:V,active:Q,btnProps:{icon:Q===!0?I.value:f.value,size:"sm",...P.value},onClick:()=>{C(V)}})}))}else if(e.thumbnails===!0){const K=e.controlColor!==void 0?` text-${e.controlColor}`:"";A.push(G("thumbnails",O=>{const i=O.props;return h("img",{key:"tmb#"+i.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${i.name===e.modelValue?"":"in"}active`+K,src:i.imgSrc||i["img-src"],onClick:()=>{C(i.name)}})}))}return e.arrows===!0&&k.value>=0&&((e.infinite===!0||k.value>0)&&A.push(h("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${M.value} absolute flex flex-center`},[h(me,{icon:j.value[0],...P.value,onClick:c})])),(e.infinite===!0||k.value<t-1)&&A.push(h("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${M.value} absolute flex flex-center`},[h(me,{icon:j.value[1],...P.value,onClick:_})]))),Ke(o.control,A)}return()=>(t=l(o),h("div",{class:D.value,style:F.value},[Ue("div",{class:"q-carousel__slides-container"},u(),"sl-cont",e.swipeable,()=>q.value)].concat(Y())))}});const Yt=ge({props:["sliders"],setup(e){return{slide:R("developer"),sliders:e.sliders}}}),Jt={class:"q-pa-sm q-ma-md"},Zt={class:"col-md-12 col-sm-12 col-12 column row justify-center bg-rgba q-pa-md"},ea={class:"text-h2 self-left text-weight-bold title"},ta={class:"text-h2 self-left text-weight-bold title"},aa={class:"text-indigo-6"},na={class:"text-h4 text-grey-6 self-left"};function oa(e,o,s,r,a,t){const l=He("animate-onscroll");return W(),U("div",Jt,[y(Gt,{modelValue:e.slide,"onUpdate:modelValue":o[0]||(o[0]=u=>e.slide=u),vertical:"",swipeable:"",animated:"","control-color":"white","navigation-icon":"radio_button_unchecked",navigation:"",padding:"",arrows:"",height:"550px",class:"text-white carousel-bg"},{default:N(()=>[(W(!0),U(Xe,null,Ge(e.sliders,u=>(W(),pt(Wt,{key:u,name:u.name,class:"row justify-evenly bg-img"},{default:N(()=>[T("div",Zt,[le((W(),U("span",ea,[se(oe(u.titulo_1),1)])),[[l,"animated fadeInLeft",void 0,{repeat:!0}]]),le((W(),U("span",ta,[T("b",aa,oe(u.titulo_2),1)])),[[l,"animated fadeInLeft",void 0,{repeat:!0}]]),T("span",na,oe(u.subtitulo),1)])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])])}var la=pe(Yt,[["render",oa],["__scopeId","data-v-f5eb0b7a"]]);const ia=ge({name:"ServicesComponent",props:["servicios"],setup(e){const o=At();let s=R();const r=a=>{a=="Desarrollo Web"?s.value='<b class="text-indigo-6">Wolf Developer</b> crea tu proyecto web desde cero, de forma totalmente personalizada y alineada con tus objetivos e imagen corporativa y lo consigue a trav\xE9s del empleo de los mejores lenguajes y tecnolog\xEDas disponibles y demandados en el mercado.<br /> Por lo que cabe mencionar, que el desarrollo se enfoca del lado del cliente (frontend) como del lado del servidor (backend), utilizando base de datos como Mysql y Mongodb.':a=="Publicidad"?s.value='Para las campa\xF1as publicitarias, se dise\xF1a un plan de marketing, en la misma consiste en hacer <u class="text-indigo-6">crecer tu comunidad</u>, ofrecer tus servicios y/o productos y demostrar tus valores y responsibilidad social como instituci\xF3n. <br /> Es decir la publicidad se enfoca en el community, marketing e instituci\xF3n.':s.value="En revit, se realiza los proyectos 2D de autocad, en 3D, por lo que se le agrega las renderizaciones y recorridos en el interior o exterior de los edificios.",o.dialog({title:'<span class="text-h4 text-indigo-6">'+a+"</span>",message:s.value,color:"indigo-6",html:!0,cancel:!0,ok:!1})};return{services:e.servicios,more:r}}}),sa={class:"row q-pa-xl"},ra=T("div",{class:"col-12 column items-center q-py-md"},[T("span",{class:"text-center text-h3"},"Servicios")],-1),ua={class:"row column justify-center q-py-md"},ca={class:"text-center text-weight-medium text-h1 text-indigo-6"},da={class:"row column justify-center q-pb-md"},va={class:"text-center text-h4"},fa={class:"row column justify-center q-pb-md"},ma={class:"text-center text-grey-6"},ba={class:"row column justify-center"};function ha(e,o,s,r,a,t){const l=He("animate-onscroll");return W(),U("div",sa,[ra,(W(!0),U(Xe,null,Ge(e.services,u=>le((W(),U("div",{key:u,class:"col-12 col-md-4 q-pa-md"},[y(Pe,{class:"my-card"},{default:N(()=>[y(_t,null,{default:N(()=>[T("div",ua,[le((W(),U("span",ca,[T("i",{class:yt(u.icono)},null,2)])),[[l,"animated zoomIn",void 0,{repeat:!0}]])]),T("div",da,[T("span",va,oe(u.titulo),1)]),T("div",fa,[T("span",ma,oe(u.descripcion),1)]),T("div",ba,[y(me,{type:"button",color:"indigo-6",onClick:q=>e.more(u.titulo),label:"Saber m\xE1s"},null,8,["onClick"])])]),_:2},1024)]),_:2},1024)])),[[l,"animated fadeIn",void 0,{repeat:!0}]])),128))])}var ga=pe(ia,[["render",ha]]);let pa=0;const _a=["click","keydown"],ya={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${pa++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Ca(e,o,s,r){const a=Ct(Ye,()=>{console.error("QTab/QRouteTab component needs to be child of QTabs")}),{proxy:t}=Z(),l=R(null),u=R(null),q=R(null),C=v(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),c=v(()=>a.currentModel.value===e.name),_=v(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(c.value===!0?" q-tab--active"+(a.tabProps.value.activeClass?" "+a.tabProps.value.activeClass:"")+(a.tabProps.value.activeColor?` text-${a.tabProps.value.activeColor}`:"")+(a.tabProps.value.activeBgColor?` bg-${a.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&a.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||a.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(r!==void 0&&r.linkClass.value!==""?` ${r.linkClass.value}`:"")),p=v(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(a.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),k=v(()=>e.disable===!0||a.hasFocus.value===!0?-1:e.tabindex||0);function E(f,I){if(I!==!0&&l.value!==null&&l.value.focus(),e.disable!==!0){let L;if(r!==void 0)if(r.hasRouterLink.value===!0)L=()=>{f.__qNavigate=!0,a.avoidRouteWatcher=!0;const P=r.navigateToRouterLink(f);P===!1?a.avoidRouteWatcher=!1:P.then(B=>{a.avoidRouteWatcher=!1,B===void 0&&a.updateModel({name:e.name,fromRoute:!0})})};else{s("click",f);return}else L=()=>{a.updateModel({name:e.name,fromRoute:!1})};s("click",f,L),f.defaultPrevented!==!0&&L()}}function F(f){wt(f,[13,32])?E(f,!0):qt(f)!==!0&&f.keyCode>=35&&f.keyCode<=40&&a.onKbdNavigate(f.keyCode,t.$el)===!0&&fe(f),s("keydown",f)}function M(){const f=a.tabProps.value.narrowIndicator,I=[],L=h("div",{ref:q,class:["q-tab__indicator",a.tabProps.value.indicatorClass]});e.icon!==void 0&&I.push(h(be,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&I.push(h("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&I.push(e.alertIcon!==void 0?h(be,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):h("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),f===!0&&I.push(L);const P=[h("div",{class:"q-focus-helper",tabindex:-1,ref:l}),h("div",{class:p.value},Ke(o.default,I))];return f===!1&&P.push(L),P}const D={name:v(()=>e.name),rootRef:u,tabIndicatorRef:q,routerProps:r};he(()=>{a.unregisterTab(D),a.recalculateScroll()}),Se(()=>{a.registerTab(D),a.recalculateScroll()});function j(f,I){const L={ref:u,class:_.value,tabindex:k.value,role:"tab","aria-selected":c.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:E,onKeydown:F,...I};return le(h(f,L,M()),[[xt,C.value]])}return{renderTab:j,$tabs:a}}var de=ee({name:"QTab",props:ya,emits:_a,setup(e,{slots:o,emit:s}){const{renderTab:r}=Ca(e,o,s);return()=>r("div")}});function xa(e,o,s){const r=s===!0?["left","right"]:["top","bottom"];return`absolute-${o===!0?r[0]:r[1]}${e?` text-${e}`:""}`}const wa=["left","center","right","justify"],ze=()=>{};var qa=ee({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>wa.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:o,emit:s}){const r=Z(),{proxy:{$q:a}}=r,{registerTick:t}=$t(),{registerTimeout:l,removeTimeout:u}=Fe(),{registerTimeout:q}=Fe(),C=R(null),c=R(null),_=R(e.modelValue),p=R(!1),k=R(!0),E=R(!1),F=R(!1),M=v(()=>a.platform.is.desktop===!0||e.mobileArrows===!0),D=[],j=R(!1);let f=!1,I,L,P,B=M.value===!0?ke:$e;const G=v(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:xa(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),Y=v(()=>`q-tabs__content--align-${p.value===!0?"left":F.value===!0?"justify":e.align}`),A=v(()=>`q-tabs row no-wrap items-center q-tabs--${p.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${M.value===!0&&e.outsideArrows===!0?"outside":"inside"}`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),K=v(()=>"q-tabs__content row no-wrap items-center self-stretch hide-scrollbar relative-position "+Y.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")+(a.platform.is.mobile===!0?" scroll":"")),O=v(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),i=v(()=>e.vertical!==!0&&a.lang.rtl===!0),g=v(()=>Lt===!1&&i.value===!0);z(i,B),z(()=>e.modelValue,n=>{V({name:n,setCurrent:!0,skipEmit:!0})}),z(()=>e.outsideArrows,()=>{ne(Q())}),z(M,n=>{B=n===!0?ke:$e,ne(Q())});function V({name:n,setCurrent:d,skipEmit:m,fromRoute:w}){_.value!==n&&(m!==!0&&s("update:modelValue",n),(d===!0||e["onUpdate:modelValue"]===void 0)&&(at(_.value,n),_.value=n)),w!==void 0&&(f=w)}function Q(){t(()=>{r.isDeactivated!==!0&&r.isUnmounted!==!0&&Te({width:C.value.offsetWidth,height:C.value.offsetHeight})})}function Te(n){if(O.value===void 0||c.value===null)return;const d=n[O.value.container],m=Math.min(c.value[O.value.scroll],Array.prototype.reduce.call(c.value.children,(b,$)=>b+($[O.value.content]||0),0)),w=d>0&&m>d;p.value!==w&&(p.value=w),w===!0&&ne(B);const S=d<parseInt(e.breakpoint,10);F.value!==S&&(F.value=S)}function at(n,d){const m=n!=null&&n!==""?D.find(S=>S.name.value===n):null,w=d!=null&&d!==""?D.find(S=>S.name.value===d):null;if(m&&w){const S=m.tabIndicatorRef.value,b=w.tabIndicatorRef.value;clearTimeout(I),S.style.transition="none",S.style.transform="none",b.style.transition="none",b.style.transform="none";const $=S.getBoundingClientRect(),x=b.getBoundingClientRect();b.style.transform=e.vertical===!0?`translate3d(0,${$.top-x.top}px,0) scale3d(1,${x.height?$.height/x.height:1},1)`:`translate3d(${$.left-x.left}px,0,0) scale3d(${x.width?$.width/x.width:1},1,1)`,ne(()=>{I=setTimeout(()=>{b.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",b.style.transform="none"},70)})}w&&p.value===!0&&re(w.rootRef.value)}function re(n){const{left:d,width:m,top:w,height:S}=c.value.getBoundingClientRect(),b=n.getBoundingClientRect();let $=e.vertical===!0?b.top-w:b.left-d;if($<0){c.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor($),B();return}$+=e.vertical===!0?b.height-S:b.width-m,$>0&&(c.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil($),B())}function ke(){const n=c.value;if(n!==null){const d=n.getBoundingClientRect(),m=e.vertical===!0?n.scrollTop:Math.abs(n.scrollLeft);i.value===!0?(k.value=Math.ceil(m+d.width)<n.scrollWidth-1,E.value=m>0):(k.value=m>0,E.value=e.vertical===!0?Math.ceil(m+d.height)<n.scrollHeight:Math.ceil(m+d.width)<n.scrollWidth)}}function Ie(n){X(),Le(n),L=setInterval(()=>{Le(n)===!0&&X()},5)}function Be(){Ie(g.value===!0?Number.MAX_SAFE_INTEGER:0)}function Ae(){Ie(g.value===!0?0:Number.MAX_SAFE_INTEGER)}function X(){clearInterval(L)}function nt(n,d){const m=Array.prototype.filter.call(c.value.children,x=>x===d||x.matches&&x.matches(".q-tab.q-focusable")===!0),w=m.length;if(w===0)return;if(n===36)return re(m[0]),!0;if(n===35)return re(m[w-1]),!0;const S=n===(e.vertical===!0?38:37),b=n===(e.vertical===!0?40:39),$=S===!0?-1:b===!0?1:void 0;if($!==void 0){const x=i.value===!0?-1:1,H=m.indexOf(d)+$*x;return H>=0&&H<w&&(re(m[H]),m[H].focus({preventScroll:!0})),!0}}const ot=v(()=>g.value===!0?{get:n=>Math.abs(n.scrollLeft),set:(n,d)=>{n.scrollLeft=-d}}:e.vertical===!0?{get:n=>n.scrollTop,set:(n,d)=>{n.scrollTop=d}}:{get:n=>n.scrollLeft,set:(n,d)=>{n.scrollLeft=d}});function Le(n){const d=c.value,{get:m,set:w}=ot.value;let S=!1,b=m(d);const $=n<b?-1:1;return b+=$*5,b<0?(S=!0,b=0):($===-1&&b<=n||$===1&&b>=n)&&(S=!0,b=n),w(d,b),B(),S}function _e(){return D.filter(n=>n.routerProps!==void 0&&n.routerProps.hasRouterLink.value===!0)}function lt(){let n=null,d=f;const m={matchedLen:0,hrefLen:0,exact:!1,found:!1},{hash:w}=r.proxy.$route,S=_.value;let b=d===!0?ze:x=>{S===x.name.value&&(d=!0,b=ze)};const $=_e();for(const x of $){const H=x.routerProps.exact.value===!0;if(x.routerProps[H===!0?"linkIsExactActive":"linkIsActive"].value!==!0||m.exact===!0&&H!==!0){b(x);continue}const ye=x.routerProps.linkRoute.value,Ce=ye.hash;if(H===!0){if(w===Ce){n=x.name.value;break}else if(w!==""&&Ce!==""){b(x);continue}}const xe=ye.matched.length,Me=ye.href.length-Ce.length;if(xe===m.matchedLen?Me>m.hrefLen:xe>m.matchedLen){n=x.name.value,Object.assign(m,{matchedLen:xe,hrefLen:Me,exact:H});continue}b(x)}(d===!0||n!==null)&&V({name:n,setCurrent:!0,fromRoute:!0})}function it(n){if(u(),j.value!==!0&&C.value!==null&&n.target&&typeof n.target.closest=="function"){const d=n.target.closest(".q-tab");d&&C.value.contains(d)===!0&&(j.value=!0)}}function st(){l(()=>{j.value=!1},30)}function ue(){Re.avoidRouteWatcher!==!0&&q(lt)}function rt(n){D.push(n),_e().length>0&&(P===void 0&&(P=z(()=>r.proxy.$route,ue)),ue())}function ut(n){D.splice(D.indexOf(n),1),P!==void 0&&(_e().length===0&&(P(),P=void 0),ue())}const Re={currentModel:_,tabProps:G,hasFocus:j,registerTab:rt,unregisterTab:ut,verifyRouteModel:ue,updateModel:V,recalculateScroll:Q,onKbdNavigate:nt,avoidRouteWatcher:!1};Pt(Ye,Re),he(()=>{clearTimeout(I),P!==void 0&&P()});let Ee=!1;return St(()=>{Ee=!0}),Tt(()=>{Ee===!0&&Q()}),()=>{const n=[h(It,{onResize:Te}),h("div",{ref:c,class:K.value,onScroll:B},ie(o.default))];return M.value===!0&&n.push(h(be,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(k.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||a.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedown:Be,onTouchstartPassive:Be,onMouseup:X,onMouseleave:X,onTouchend:X}),h(be,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(E.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||a.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedown:Ae,onTouchstartPassive:Ae,onMouseup:X,onMouseleave:X,onTouchend:X})),h("div",{ref:C,class:A.value,role:"tablist",onFocusin:it,onFocusout:st},n)}}}),ve=ee({name:"QTabPanel",props:Je,setup(e,{slots:o}){return()=>h("div",{class:"q-tab-panel"},ie(o.default))}}),$a=ee({name:"QTabPanels",props:{...Ze,...We},emits:et,setup(e,{slots:o}){const s=Z(),r=Oe(e,s.proxy.$q),{updatePanelsList:a,getPanelContent:t,panelDirectives:l}=tt(),u=v(()=>"q-tab-panels q-panel-parent"+(r.value===!0?" q-tab-panels--dark q-dark":""));return()=>(a(o),Ue("div",{class:u.value},t(),"pan",e.swipeable,()=>l.value))}});const Pa=ge({setup(){return{tab:R("planeacion")}}}),Sa={class:"q-pa-xl row"},Ta={class:"col-12 col-md-5 q-pa-sm"},ka={class:"col-12 col-md-7 q-pa-sm"},Ia=T("div",{class:"col-12 q-my-md"},[T("span",{class:"text-h4 text-grey-6"},"C\xF3mo trabajo en el Desarrollo Web")],-1),Ba=T("div",{class:"text-h6"},"Planeaci\xF3n",-1),Aa=se(" En esta fase se determina los objetivos generales, recursos y tiempo necesario para llevar a cabo el proyecto. "),La=T("div",{class:"text-h6"},"An\xE1lisis",-1),Ra=se(" En esta fase se estudia lo qu\xE9 se desea ofrecer en el sitio, quienes son los usuarios y que requisitos t\xE9cnicos tendr\xE1 el sitio web. Ac\xE1 se eligir\xE1 la opci\xF3n m\xE1s conveniente para construir tu sitio web. "),Ea=T("div",{class:"text-h6"},"Implementaci\xF3n",-1),Ma=se(" En esta fase se desarrolla el sitio web, seg\xFAn las opciones estudiadas en la fase de an\xE1lisis y con los recursos y tiempos que se estableci\xF3 en la fase de planeaci\xF3n. "),Va=T("div",{class:"text-h6"},"Evaluaci\xF3n",-1),Da=se(" En esta fase se eval\xFAa el proyecto para tomar las acciones necesarias para lograr o mantener los resultados deseados. ");function Fa(e,o,s,r,a,t){return W(),U("div",Sa,[T("div",Ta,[y(Pe,{class:"my-card"},{default:N(()=>[y(Vt,{src:"https://res.cloudinary.com/dazfmv5ls/image/upload/v1655823873/img-lobo_ruad1m.jpg",height:"300px"})]),_:1})]),T("div",ka,[Ia,y(Pe,null,{default:N(()=>[y(qa,{modelValue:e.tab,"onUpdate:modelValue":o[0]||(o[0]=l=>e.tab=l),dense:"",class:"text-grey","active-color":"indigo-6","indicator-color":"indigo-6",align:"justify","narrow-indicator":""},{default:N(()=>[y(de,{name:"planeacion",label:"Planeaci\xF3n"}),y(de,{name:"analisis",label:"An\xE1lisis"}),y(de,{name:"implementacion",label:"Implementaci\xF3n"}),y(de,{name:"evaluacion",label:"Evaluaci\xF3n"})]),_:1},8,["modelValue"]),y(kt),y($a,{modelValue:e.tab,"onUpdate:modelValue":o[1]||(o[1]=l=>e.tab=l),animated:""},{default:N(()=>[y(ve,{name:"planeacion"},{default:N(()=>[Ba,Aa]),_:1}),y(ve,{name:"analisis"},{default:N(()=>[La,Ra]),_:1}),y(ve,{name:"implementacion"},{default:N(()=>[Ea,Ma]),_:1}),y(ve,{name:"evaluacion"},{default:N(()=>[Va,Da]),_:1})]),_:1},8,["modelValue"])]),_:1})])])}var ja=pe(Pa,[["render",Fa]]);const Qa=ge({name:"IndexView",components:{Carousel:la,Services:ga,Portfolio:Rt,Suscriptor:Et,Tecnologias:Mt,Beneficios:ja},setup(){return{tecno:Dt,servicios:Ft,sliders:jt,title_portfolio:"Portafolio",subtitule_portfolio:"Mis trabajos destacados",limit:3,recomendar:!0}}}),Na={class:"q-pa-md"};function za(e,o,s,r,a,t){const l=J("Carousel"),u=J("Services"),q=J("Beneficios"),C=J("Tecnologias"),c=J("Portfolio"),_=J("Suscriptor");return W(),U("div",Na,[y(l,{sliders:e.sliders},null,8,["sliders"]),y(u,{servicios:e.servicios},null,8,["servicios"]),y(q),y(C,{tecno:e.tecno},null,8,["tecno"]),y(c,{title:e.title_portfolio,subtitle:e.subtitule_portfolio,limit:e.limit,recomendar:e.recomendar},null,8,["title","subtitle","limit","recomendar"]),y(_)])}var an=pe(Qa,[["render",za]]);export{an as default};
