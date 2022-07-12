import{Q as ut}from"./QPage.f7937440.js";import{S as ct,T as ee,t as qe,U as dt,V as ue,W as xe,Z as Me,a0 as ve,$ as Ce,r as V,m as v,w as X,n as te,y as oe,h as g,am as vt,an as ft,ao as mt,D as ie,p as Z,a1 as Fe,a2 as Ne,ap as bt,o as ze,P as Pe,a7 as We,x as Ue,Q as fe,d as be,_ as ge,aq as Ke,e as z,j as O,l as _,F as Q,L as Oe,K as He,f as Xe,k as P,a6 as ne,G as le,H as ae,ar as gt,as as ht,at as we,q as pt,au as Ge,av as _t,ak as yt,aw as xt,v as me,ax as Ct,a3 as Ee,C as qt,ay as wt,az as Pt,aA as $t,I as J}from"./index.71b3f425.js";import{g as Ve,s as De,Q as St}from"./touch.6efa782d.js";import{c as Tt}from"./selection.025d28b3.js";import{u as kt,a as It,b as At}from"./use-fullscreen.eabd274e.js";import{u as Bt}from"./use-quasar.bb0955e5.js";import{P as Lt}from"./PortfolioComponent.73951fa3.js";import{C as Rt}from"./SuscriptorComponent.9801643d.js";import{T as Mt}from"./TecnologiasComponent.96d961a0.js";import{Q as Et}from"./QImg.79465970.js";import{r as Vt}from"./QSelect.209267a6.js";import{t as Dt,s as Qt,a as jt}from"./database.b8731956.js";import"./QInnerLoading.7e2815cc.js";import"./QParallax.db0e1e20.js";import"./QForm.7e7073e1.js";import"./object.d8999c0c.js";import"./QItem.3de04644.js";import"./QItemLabel.766e1532.js";import"./QMenu.24e58f5c.js";function Ft(e){const o=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((s,r)=>{const n=parseFloat(s);n&&(o[r]=n)}),o}var Nt=ct({name:"touch-swipe",beforeMount(e,{value:o,arg:s,modifiers:r}){if(r.mouse!==!0&&ee.has.touch!==!0)return;const n=r.mouseCapture===!0?"Capture":"",t={handler:o,sensitivity:Ft(s),direction:Ve(r),noop:qe,mouseStart(l){De(l,t)&&dt(l)&&(ue(t,"temp",[[document,"mousemove","move",`notPassive${n}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(l,!0))},touchStart(l){if(De(l,t)){const u=l.target;ue(t,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","notPassiveCapture"],[u,"touchend","end","notPassiveCapture"]]),t.start(l)}},start(l,u){ee.is.firefox===!0&&xe(e,!0);const B=Me(l);t.event={x:B.left,y:B.top,time:Date.now(),mouse:u===!0,dir:!1}},move(l){if(t.event===void 0)return;if(t.event.dir!==!1){ve(l);return}const u=Date.now()-t.event.time;if(u===0)return;const B=Me(l),$=B.left-t.event.x,d=Math.abs($),S=B.top-t.event.y,p=Math.abs(S);if(t.event.mouse!==!0){if(d<t.sensitivity[1]&&p<t.sensitivity[1]){t.end(l);return}}else if(d<t.sensitivity[2]&&p<t.sensitivity[2])return;const T=d/u,R=p/u;t.direction.vertical===!0&&d<p&&d<100&&R>t.sensitivity[0]&&(t.event.dir=S<0?"up":"down"),t.direction.horizontal===!0&&d>p&&p<100&&T>t.sensitivity[0]&&(t.event.dir=$<0?"left":"right"),t.direction.up===!0&&d<p&&S<0&&d<100&&R>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&d<p&&S>0&&d<100&&R>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&d>p&&$<0&&p<100&&T>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&d>p&&$>0&&p<100&&T>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(ve(l),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Tt(),t.styleCleanup=j=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const M=()=>{document.body.classList.remove("no-pointer-events--children")};j===!0?setTimeout(M,50):M()}),t.handler({evt:l,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:u,distance:{x:d,y:p}})):t.end(l)},end(l){t.event!==void 0&&(Ce(t,"temp"),ee.is.firefox===!0&&xe(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),l!==void 0&&t.event.dir!==!1&&ve(l),t.event=void 0)}};e.__qtouchswipe=t,r.mouse===!0&&ue(t,"main",[[e,"mousedown","mouseStart",`passive${n}`]]),ee.has.touch===!0&&ue(t,"main",[[e,"touchstart","touchStart",`passive${r.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const s=e.__qtouchswipe;s!==void 0&&(o.oldValue!==o.value&&(typeof o.value!="function"&&s.end(),s.handler=o.value),s.direction=Ve(o.modifiers))},beforeUnmount(e){const o=e.__qtouchswipe;o!==void 0&&(Ce(o,"main"),Ce(o,"temp"),ee.is.firefox===!0&&xe(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchswipe)}});function zt(){const e=new Map;return{getCache:function(o,s){return e[o]===void 0?e[o]=s:e[o]},getCacheWithFn:function(o,s){return e[o]===void 0?e[o]=s():e[o]}}}const Ye={name:{required:!0},disable:Boolean},Qe={setup(e,{slots:o}){return()=>g("div",{class:"q-panel scroll",role:"tabpanel"},ie(o.default))}},Je={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Ze=["update:modelValue","before-transition","transition"];function et(){const{props:e,emit:o,proxy:s}=oe(),{getCacheWithFn:r}=zt();let n,t;const l=V(null),u=V(null);function B(i){const h=e.vertical===!0?"up":"left";I((s.$q.lang.rtl===!0?-1:1)*(i.direction===h?1:-1))}const $=v(()=>[[Nt,B,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),d=v(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),S=v(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),p=v(()=>`--q-transition-duration: ${e.transitionDuration}ms`),T=v(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),R=v(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),j=v(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);X(()=>e.modelValue,(i,h)=>{const E=f(i)===!0?k(i):-1;t!==!0&&q(E===-1?0:E<k(h)?-1:1),l.value!==E&&(l.value=E,o("before-transition",i,h),te(()=>{o("transition",i,h)}))});function M(){I(1)}function D(){I(-1)}Object.assign(s,{next:M,previous:D,goTo:F});function F(i){o("update:modelValue",i)}function f(i){return i!=null&&i!==""}function k(i){return n.findIndex(h=>h.props.name===i&&h.props.disable!==""&&h.props.disable!==!0)}function L(){return n.filter(i=>i.props.disable!==""&&i.props.disable!==!0)}function q(i){const h=i!==0&&e.animated===!0&&l.value!==-1?"q-transition--"+(i===-1?d.value:S.value):null;u.value!==h&&(u.value=h)}function I(i,h=l.value){let E=h+i;for(;E>-1&&E<n.length;){const N=n[E];if(N!==void 0&&N.props.disable!==""&&N.props.disable!==!0){q(i),t=!0,o("update:modelValue",N.props.name),setTimeout(()=>{t=!1});return}E+=i}e.infinite===!0&&n.length>0&&h!==-1&&h!==n.length&&I(i,i===-1?n.length:-1)}function G(){const i=k(e.modelValue);return l.value!==i&&(l.value=i),!0}function Y(){const i=f(e.modelValue)===!0&&G()&&n[l.value];return e.keepAlive===!0?[g(ft,R.value,[g(j.value===!0?r(T.value,()=>({...Qe,name:T.value})):Qe,{key:T.value,style:p.value},()=>i)])]:[g("div",{class:"q-panel scroll",style:p.value,key:T.value,role:"tabpanel"},[i])]}function A(){if(n.length!==0)return e.animated===!0?[g(vt,{name:u.value},Y)]:Y()}function U(i){return n=mt(ie(i.default,[])).filter(h=>h.props!==null&&h.props.slot===void 0&&f(h.props.name)===!0),n.length}function W(){return n}return{panelIndex:l,panelDirectives:$,updatePanelsList:U,updatePanelIndex:G,getPanelContent:A,getEnabledPanels:L,getPanels:W,isValidPanelName:f,keepAliveProps:R,needsUniqueKeepAliveWrapper:j,goToPanelByOffset:I,goToPanel:F,nextPanel:M,previousPanel:D}}var Wt=Z({name:"QCarouselSlide",props:{...Ye,imgSrc:String},setup(e,{slots:o}){const s=v(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>g("div",{class:"q-carousel__slide",style:s.value},ie(o.default))}});const Ut=["top","right","bottom","left"],Kt=["regular","flat","outline","push","unelevated"];var Ot=Z({name:"QCarousel",props:{...Fe,...Je,...kt,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>Kt.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Ut.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...It,...Ze],setup(e,{slots:o}){const{proxy:{$q:s}}=oe(),r=Ne(e,s);let n,t;const{updatePanelsList:l,getPanelContent:u,panelDirectives:B,goToPanel:$,previousPanel:d,nextPanel:S,getEnabledPanels:p,panelIndex:T}=et(),{inFullscreen:R}=At(),j=v(()=>R.value!==!0&&e.height!==void 0?{height:e.height}:{}),M=v(()=>e.vertical===!0?"vertical":"horizontal"),D=v(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(R.value===!0?" fullscreen":"")+(r.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${M.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${L.value}`:"")),F=v(()=>{const A=[e.prevIcon||s.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||s.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&s.lang.rtl===!0?A.reverse():A}),f=v(()=>e.navigationIcon||s.iconSet.carousel.navigationIcon),k=v(()=>e.navigationActiveIcon||f.value),L=v(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),q=v(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));X(()=>e.modelValue,()=>{e.autoplay&&(clearInterval(n),I())}),X(()=>e.autoplay,A=>{A?I():clearInterval(n)});function I(){const A=bt(e.autoplay)===!0?e.autoplay:5e3;n=setTimeout(A>=0?S:d,Math.abs(A))}ze(()=>{e.autoplay&&I()}),Pe(()=>{clearInterval(n)});function G(A,U){return g("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${A} q-carousel__navigation--${L.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[g("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},p().map(U))])}function Y(){const A=[];if(e.navigation===!0){const U=o["navigation-icon"]!==void 0?o["navigation-icon"]:i=>g(fe,{key:"nav"+i.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${i.active===!0?"":"in"}active`,...i.btnProps,onClick:i.onClick}),W=t-1;A.push(G("buttons",(i,h)=>{const E=i.props.name,N=T.value===h;return U({index:h,maxIndex:W,name:E,active:N,btnProps:{icon:N===!0?k.value:f.value,size:"sm",...q.value},onClick:()=>{$(E)}})}))}else if(e.thumbnails===!0){const U=e.controlColor!==void 0?` text-${e.controlColor}`:"";A.push(G("thumbnails",W=>{const i=W.props;return g("img",{key:"tmb#"+i.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${i.name===e.modelValue?"":"in"}active`+U,src:i.imgSrc||i["img-src"],onClick:()=>{$(i.name)}})}))}return e.arrows===!0&&T.value>=0&&((e.infinite===!0||T.value>0)&&A.push(g("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${M.value} absolute flex flex-center`},[g(fe,{icon:F.value[0],...q.value,onClick:d})])),(e.infinite===!0||T.value<t-1)&&A.push(g("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${M.value} absolute flex flex-center`},[g(fe,{icon:F.value[1],...q.value,onClick:S})]))),Ue(o.control,A)}return()=>(t=l(o),g("div",{class:D.value,style:j.value},[We("div",{class:"q-carousel__slides-container"},u(),"sl-cont",e.swipeable,()=>B.value)].concat(Y())))}});const Ht=be({props:["sliders"],setup(e){return{slide:V("developer"),sliders:e.sliders}}}),Xt={class:"q-pa-md-sm q-pa-xs-xs q-ma-md-md q-ma-xs-sm"},Gt={class:"col-md-12 col-sm-12 col-12 column row justify-center bg-rgba q-pa-md"},Yt={class:"text-h2 self-left text-weight-bold title"},Jt={class:"text-h2 self-left text-weight-bold title"},Zt={class:"text-indigo-6"},ea={class:"text-h4 text-grey-6 self-left"};function ta(e,o,s,r,n,t){const l=Ke("animate-onscroll");return z(),O("div",Xt,[_(Ot,{modelValue:e.slide,"onUpdate:modelValue":o[0]||(o[0]=u=>e.slide=u),vertical:"",swipeable:"",animated:"","control-color":"white","navigation-icon":"radio_button_unchecked",navigation:"",padding:"",arrows:"",height:"550px",class:"text-white carousel-bg"},{default:Q(()=>[(z(!0),O(Oe,null,He(e.sliders,u=>(z(),Xe(Wt,{key:u,name:u.name,class:"row justify-evenly bg-img"},{default:Q(()=>[P("div",Gt,[ne((z(),O("span",Yt,[le(ae(u.titulo_1),1)])),[[l,"animated fadeInLeft",void 0,{repeat:!0}]]),ne((z(),O("span",Jt,[P("b",Zt,ae(u.titulo_2),1)])),[[l,"animated fadeInLeft",void 0,{repeat:!0}]]),P("span",ea,ae(u.subtitulo),1)])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])])}var aa=ge(Ht,[["render",ta],["__scopeId","data-v-c6a52a1e"]]);const na=be({name:"ServicesComponent",props:["servicios"],setup(e){const o=Bt();let s=V();const r=n=>{n=="Desarrollo Web"?s.value='<b class="text-indigo-6">Wolf Developer</b> crea tu proyecto web desde cero, de forma totalmente personalizada y alineada con tus objetivos e imagen corporativa y lo consigue a trav\xE9s del empleo de los mejores lenguajes y tecnolog\xEDas disponibles y demandados en el mercado.<br /> Por lo que cabe mencionar, que el desarrollo se enfoca del lado del cliente (frontend) como del lado del servidor (backend), utilizando base de datos como Mysql y Mongodb.':n=="Publicidad"?s.value='Para las campa\xF1as publicitarias, se dise\xF1a un plan de marketing, en la misma consiste en hacer <u class="text-indigo-6">crecer tu comunidad</u>, ofrecer tus servicios y/o productos y demostrar tus valores y responsibilidad social como instituci\xF3n. <br /> Es decir la publicidad se enfoca en el community, marketing e instituci\xF3n.':s.value="En revit, se realiza los proyectos 2D de autocad, en 3D, por lo que se le agrega las renderizaciones y recorridos en el interior o exterior de los edificios.",o.dialog({title:'<span class="text-h4 text-indigo-6">'+n+"</span>",message:s.value,color:"indigo-6",html:!0,cancel:!1,ok:{label:"Salir",color:"indigo-6"}})};return{services:e.servicios,more:r}}}),oa={class:"row q-mt-md q-pa-md-xl q-pa-xs-sm"},ia=P("div",{class:"col-12 text-center q-py-md"},[P("span",{class:"text-h3"},"Servicios")],-1),la={class:"row column justify-center q-py-md"},sa={class:"text-center text-weight-medium text-h1 text-indigo-6"},ra={class:"row column justify-center q-pb-md"},ua={class:"text-center text-h4"},ca={class:"row column justify-center q-pb-md"},da={class:"text-center text-grey-6"},va={class:"row column justify-center"};function fa(e,o,s,r,n,t){const l=Ke("animate-onscroll");return z(),O("div",oa,[ia,(z(!0),O(Oe,null,He(e.services,u=>ne((z(),O("div",{key:u,class:"col-12 col-md-4 q-pa-md-md q-pa-xs-sm"},[_(we,{class:"my-card"},{default:Q(()=>[_(gt,null,{default:Q(()=>[P("div",la,[ne((z(),O("span",sa,[P("i",{class:ht(u.icono)},null,2)])),[[l,"animated zoomIn",void 0,{repeat:!0}]])]),P("div",ra,[P("span",ua,ae(u.titulo),1)]),P("div",ca,[P("span",da,ae(u.descripcion),1)]),P("div",va,[_(fe,{type:"button",color:"indigo-6",onClick:B=>e.more(u.titulo),label:"Saber m\xE1s"},null,8,["onClick"])])]),_:2},1024)]),_:2},1024)])),[[l,"animated fadeIn",void 0,{repeat:!0}]])),128))])}var ma=ge(na,[["render",fa]]);let ba=0;const ga=["click","keydown"],ha={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${ba++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function pa(e,o,s,r){const n=pt(Ge,()=>{console.error("QTab/QRouteTab component needs to be child of QTabs")}),{proxy:t}=oe(),l=V(null),u=V(null),B=V(null),$=v(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),d=v(()=>n.currentModel.value===e.name),S=v(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(d.value===!0?" q-tab--active"+(n.tabProps.value.activeClass?" "+n.tabProps.value.activeClass:"")+(n.tabProps.value.activeColor?` text-${n.tabProps.value.activeColor}`:"")+(n.tabProps.value.activeBgColor?` bg-${n.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&n.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||n.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(r!==void 0&&r.linkClass.value!==""?` ${r.linkClass.value}`:"")),p=v(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(n.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),T=v(()=>e.disable===!0||n.hasFocus.value===!0?-1:e.tabindex||0);function R(f,k){if(k!==!0&&l.value!==null&&l.value.focus(),e.disable!==!0){let L;if(r!==void 0)if(r.hasRouterLink.value===!0)L=()=>{f.__qNavigate=!0,n.avoidRouteWatcher=!0;const q=r.navigateToRouterLink(f);q===!1?n.avoidRouteWatcher=!1:q.then(I=>{n.avoidRouteWatcher=!1,I===void 0&&n.updateModel({name:e.name,fromRoute:!0})})};else{s("click",f);return}else L=()=>{n.updateModel({name:e.name,fromRoute:!1})};s("click",f,L),f.defaultPrevented!==!0&&L()}}function j(f){yt(f,[13,32])?R(f,!0):xt(f)!==!0&&f.keyCode>=35&&f.keyCode<=40&&n.onKbdNavigate(f.keyCode,t.$el)===!0&&ve(f),s("keydown",f)}function M(){const f=n.tabProps.value.narrowIndicator,k=[],L=g("div",{ref:B,class:["q-tab__indicator",n.tabProps.value.indicatorClass]});e.icon!==void 0&&k.push(g(me,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&k.push(g("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&k.push(e.alertIcon!==void 0?g(me,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):g("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),f===!0&&k.push(L);const q=[g("div",{class:"q-focus-helper",tabindex:-1,ref:l}),g("div",{class:p.value},Ue(o.default,k))];return f===!1&&q.push(L),q}const D={name:v(()=>e.name),rootRef:u,tabIndicatorRef:B,routerProps:r};Pe(()=>{n.unregisterTab(D),n.recalculateScroll()}),ze(()=>{n.registerTab(D),n.recalculateScroll()});function F(f,k){const L={ref:u,class:S.value,tabindex:T.value,role:"tab","aria-selected":d.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:R,onKeydown:j,...k};return ne(g(f,L,M()),[[_t,$.value]])}return{renderTab:F,$tabs:n}}var ce=Z({name:"QTab",props:ha,emits:ga,setup(e,{slots:o,emit:s}){const{renderTab:r}=pa(e,o,s);return()=>r("div")}});function _a(e,o,s){const r=s===!0?["left","right"]:["top","bottom"];return`absolute-${o===!0?r[0]:r[1]}${e?` text-${e}`:""}`}const ya=["left","center","right","justify"],je=()=>{};var xa=Z({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>ya.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:o,emit:s}){const r=oe(),{proxy:{$q:n}}=r,{registerTick:t}=Ct(),{registerTimeout:l,removeTimeout:u}=Ee(),{registerTimeout:B}=Ee(),$=V(null),d=V(null),S=V(e.modelValue),p=V(!1),T=V(!0),R=V(!1),j=V(!1),M=v(()=>n.platform.is.desktop===!0||e.mobileArrows===!0),D=[],F=V(!1);let f=!1,k,L,q,I=M.value===!0?Se:qe;const G=v(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:_a(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),Y=v(()=>`q-tabs__content--align-${p.value===!0?"left":j.value===!0?"justify":e.align}`),A=v(()=>`q-tabs row no-wrap items-center q-tabs--${p.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${M.value===!0&&e.outsideArrows===!0?"outside":"inside"}`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),U=v(()=>"q-tabs__content row no-wrap items-center self-stretch hide-scrollbar relative-position "+Y.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")+(n.platform.is.mobile===!0?" scroll":"")),W=v(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),i=v(()=>e.vertical!==!0&&n.lang.rtl===!0),h=v(()=>Vt===!1&&i.value===!0);X(i,I),X(()=>e.modelValue,a=>{E({name:a,setCurrent:!0,skipEmit:!0})}),X(()=>e.outsideArrows,()=>{te(N())}),X(M,a=>{I=a===!0?Se:qe,te(N())});function E({name:a,setCurrent:c,skipEmit:m,fromRoute:x}){S.value!==a&&(m!==!0&&s("update:modelValue",a),(c===!0||e["onUpdate:modelValue"]===void 0)&&(tt(S.value,a),S.value=a)),x!==void 0&&(f=x)}function N(){t(()=>{r.isDeactivated!==!0&&r.isUnmounted!==!0&&$e({width:$.value.offsetWidth,height:$.value.offsetHeight})})}function $e(a){if(W.value===void 0||d.value===null)return;const c=a[W.value.container],m=Math.min(d.value[W.value.scroll],Array.prototype.reduce.call(d.value.children,(b,C)=>b+(C[W.value.content]||0),0)),x=c>0&&m>c;p.value!==x&&(p.value=x),x===!0&&te(I);const w=c<parseInt(e.breakpoint,10);j.value!==w&&(j.value=w)}function tt(a,c){const m=a!=null&&a!==""?D.find(w=>w.name.value===a):null,x=c!=null&&c!==""?D.find(w=>w.name.value===c):null;if(m&&x){const w=m.tabIndicatorRef.value,b=x.tabIndicatorRef.value;clearTimeout(k),w.style.transition="none",w.style.transform="none",b.style.transition="none",b.style.transform="none";const C=w.getBoundingClientRect(),y=b.getBoundingClientRect();b.style.transform=e.vertical===!0?`translate3d(0,${C.top-y.top}px,0) scale3d(1,${y.height?C.height/y.height:1},1)`:`translate3d(${C.left-y.left}px,0,0) scale3d(${y.width?C.width/y.width:1},1,1)`,te(()=>{k=setTimeout(()=>{b.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",b.style.transform="none"},70)})}x&&p.value===!0&&se(x.rootRef.value)}function se(a){const{left:c,width:m,top:x,height:w}=d.value.getBoundingClientRect(),b=a.getBoundingClientRect();let C=e.vertical===!0?b.top-x:b.left-c;if(C<0){d.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(C),I();return}C+=e.vertical===!0?b.height-w:b.width-m,C>0&&(d.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(C),I())}function Se(){const a=d.value;if(a!==null){const c=a.getBoundingClientRect(),m=e.vertical===!0?a.scrollTop:Math.abs(a.scrollLeft);i.value===!0?(T.value=Math.ceil(m+c.width)<a.scrollWidth-1,R.value=m>0):(T.value=m>0,R.value=e.vertical===!0?Math.ceil(m+c.height)<a.scrollHeight:Math.ceil(m+c.width)<a.scrollWidth)}}function Te(a){H(),Ae(a),L=setInterval(()=>{Ae(a)===!0&&H()},5)}function ke(){Te(h.value===!0?Number.MAX_SAFE_INTEGER:0)}function Ie(){Te(h.value===!0?0:Number.MAX_SAFE_INTEGER)}function H(){clearInterval(L)}function at(a,c){const m=Array.prototype.filter.call(d.value.children,y=>y===c||y.matches&&y.matches(".q-tab.q-focusable")===!0),x=m.length;if(x===0)return;if(a===36)return se(m[0]),!0;if(a===35)return se(m[x-1]),!0;const w=a===(e.vertical===!0?38:37),b=a===(e.vertical===!0?40:39),C=w===!0?-1:b===!0?1:void 0;if(C!==void 0){const y=i.value===!0?-1:1,K=m.indexOf(c)+C*y;return K>=0&&K<x&&(se(m[K]),m[K].focus({preventScroll:!0})),!0}}const nt=v(()=>h.value===!0?{get:a=>Math.abs(a.scrollLeft),set:(a,c)=>{a.scrollLeft=-c}}:e.vertical===!0?{get:a=>a.scrollTop,set:(a,c)=>{a.scrollTop=c}}:{get:a=>a.scrollLeft,set:(a,c)=>{a.scrollLeft=c}});function Ae(a){const c=d.value,{get:m,set:x}=nt.value;let w=!1,b=m(c);const C=a<b?-1:1;return b+=C*5,b<0?(w=!0,b=0):(C===-1&&b<=a||C===1&&b>=a)&&(w=!0,b=a),x(c,b),I(),w}function he(){return D.filter(a=>a.routerProps!==void 0&&a.routerProps.hasRouterLink.value===!0)}function ot(){let a=null,c=f;const m={matchedLen:0,hrefLen:0,exact:!1,found:!1},{hash:x}=r.proxy.$route,w=S.value;let b=c===!0?je:y=>{w===y.name.value&&(c=!0,b=je)};const C=he();for(const y of C){const K=y.routerProps.exact.value===!0;if(y.routerProps[K===!0?"linkIsExactActive":"linkIsActive"].value!==!0||m.exact===!0&&K!==!0){b(y);continue}const pe=y.routerProps.linkRoute.value,_e=pe.hash;if(K===!0){if(x===_e){a=y.name.value;break}else if(x!==""&&_e!==""){b(y);continue}}const ye=pe.matched.length,Re=pe.href.length-_e.length;if(ye===m.matchedLen?Re>m.hrefLen:ye>m.matchedLen){a=y.name.value,Object.assign(m,{matchedLen:ye,hrefLen:Re,exact:K});continue}b(y)}(c===!0||a!==null)&&E({name:a,setCurrent:!0,fromRoute:!0})}function it(a){if(u(),F.value!==!0&&$.value!==null&&a.target&&typeof a.target.closest=="function"){const c=a.target.closest(".q-tab");c&&$.value.contains(c)===!0&&(F.value=!0)}}function lt(){l(()=>{F.value=!1},30)}function re(){Be.avoidRouteWatcher!==!0&&B(ot)}function st(a){D.push(a),he().length>0&&(q===void 0&&(q=X(()=>r.proxy.$route,re)),re())}function rt(a){D.splice(D.indexOf(a),1),q!==void 0&&(he().length===0&&(q(),q=void 0),re())}const Be={currentModel:S,tabProps:G,hasFocus:F,registerTab:st,unregisterTab:rt,verifyRouteModel:re,updateModel:E,recalculateScroll:N,onKbdNavigate:at,avoidRouteWatcher:!1};qt(Ge,Be),Pe(()=>{clearTimeout(k),q!==void 0&&q()});let Le=!1;return wt(()=>{Le=!0}),Pt(()=>{Le===!0&&N()}),()=>{const a=[g(St,{onResize:$e}),g("div",{ref:d,class:U.value,onScroll:I},ie(o.default))];return M.value===!0&&a.push(g(me,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(T.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||n.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedown:ke,onTouchstartPassive:ke,onMouseup:H,onMouseleave:H,onTouchend:H}),g(me,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(R.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||n.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedown:Ie,onTouchstartPassive:Ie,onMouseup:H,onMouseleave:H,onTouchend:H})),g("div",{ref:$,class:A.value,role:"tablist",onFocusin:it,onFocusout:lt},a)}}}),de=Z({name:"QTabPanel",props:Ye,setup(e,{slots:o}){return()=>g("div",{class:"q-tab-panel"},ie(o.default))}}),Ca=Z({name:"QTabPanels",props:{...Je,...Fe},emits:Ze,setup(e,{slots:o}){const s=oe(),r=Ne(e,s.proxy.$q),{updatePanelsList:n,getPanelContent:t,panelDirectives:l}=et(),u=v(()=>"q-tab-panels q-panel-parent"+(r.value===!0?" q-tab-panels--dark q-dark":""));return()=>(n(o),We("div",{class:u.value},t(),"pan",e.swipeable,()=>l.value))}});const qa=be({setup(){return{tab:V("planeacion")}}}),wa={class:"q-pa-md-xl q-pa-xs-sm row"},Pa={class:"col-12 col-md-5 q-pa-sm"},$a={class:"col-12 col-md-7 q-pa-sm"},Sa=P("div",{class:"col-12 q-my-md"},[P("span",{class:"text-h4 text-grey-6"},"C\xF3mo trabajo en el Desarrollo Web")],-1),Ta=P("div",{class:"text-h6"},"Planeaci\xF3n",-1),ka=le(" En esta fase se determina los objetivos generales, recursos y tiempo necesario para llevar a cabo el proyecto. "),Ia=P("div",{class:"text-h6"},"An\xE1lisis",-1),Aa=le(" En esta fase se estudia lo qu\xE9 se desea ofrecer en el sitio, quienes son los usuarios y que requisitos t\xE9cnicos tendr\xE1 el sitio web. Ac\xE1 se eligir\xE1 la opci\xF3n m\xE1s conveniente para construir tu sitio web. "),Ba=P("div",{class:"text-h6"},"Implementaci\xF3n",-1),La=le(" En esta fase se desarrolla el sitio web, seg\xFAn las opciones estudiadas en la fase de an\xE1lisis y con los recursos y tiempos que se estableci\xF3 en la fase de planeaci\xF3n. "),Ra=P("div",{class:"text-h6"},"Evaluaci\xF3n",-1),Ma=le(" En esta fase se eval\xFAa el proyecto para tomar las acciones necesarias para lograr o mantener los resultados deseados. ");function Ea(e,o,s,r,n,t){return z(),O("div",wa,[P("div",Pa,[_(we,{class:"my-card"},{default:Q(()=>[_(Et,{src:"https://res.cloudinary.com/dazfmv5ls/image/upload/v1655823873/img-lobo_ruad1m.jpg",height:"300px"})]),_:1})]),P("div",$a,[Sa,_(we,null,{default:Q(()=>[_(xa,{modelValue:e.tab,"onUpdate:modelValue":o[0]||(o[0]=l=>e.tab=l),dense:"",class:"text-grey","active-color":"indigo-6","indicator-color":"indigo-6",align:"justify","narrow-indicator":""},{default:Q(()=>[_(ce,{name:"planeacion",label:"Planeaci\xF3n"}),_(ce,{name:"analisis",label:"An\xE1lisis"}),_(ce,{name:"implementacion",label:"Implementaci\xF3n"}),_(ce,{name:"evaluacion",label:"Evaluaci\xF3n"})]),_:1},8,["modelValue"]),_($t),_(Ca,{modelValue:e.tab,"onUpdate:modelValue":o[1]||(o[1]=l=>e.tab=l),animated:""},{default:Q(()=>[_(de,{name:"planeacion"},{default:Q(()=>[Ta,ka]),_:1}),_(de,{name:"analisis"},{default:Q(()=>[Ia,Aa]),_:1}),_(de,{name:"implementacion"},{default:Q(()=>[Ba,La]),_:1}),_(de,{name:"evaluacion"},{default:Q(()=>[Ra,Ma]),_:1})]),_:1},8,["modelValue"])]),_:1})])])}var Va=ge(qa,[["render",Ea]]);const Da=be({name:"IndexView",components:{Carousel:aa,Services:ma,Portfolio:Lt,Suscriptor:Rt,Tecnologias:Mt,Beneficios:Va},setup(){return{tecno:Dt,servicios:Qt,sliders:jt,title_portfolio:"Portafolio",subtitule_portfolio:"Mis trabajos destacados",limit:3,recomendar:!0}}});function Qa(e,o,s,r,n,t){const l=J("Carousel"),u=J("Services"),B=J("Beneficios"),$=J("Tecnologias"),d=J("Portfolio"),S=J("Suscriptor");return z(),Xe(ut,{class:"q-pa-md"},{default:Q(()=>[_(l,{sliders:e.sliders},null,8,["sliders"]),_(u,{servicios:e.servicios},null,8,["servicios"]),_(B),_($,{tecno:e.tecno},null,8,["tecno"]),_(d,{title:e.title_portfolio,subtitle:e.subtitule_portfolio,limit:e.limit,recomendar:e.recomendar},null,8,["title","subtitle","limit","recomendar"]),_(S)]),_:1})}var ln=ge(Da,[["render",Qa]]);export{ln as default};
