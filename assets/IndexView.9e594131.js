import{Q as ct}from"./QPage.4e78f95d.js";import{R as ut,S as Z,q as xe,T as dt,U as ce,V as _e,Y as Le,$ as ve,Z as ye,r as V,l as v,w as X,n as ee,x as oe,h,al as vt,am as ft,an as mt,C as le,m as J,a0 as De,a1 as Fe,ao as gt,o as Ne,O as Ce,a6 as ze,v as We,Q as fe,_ as Oe,ap as Ue,b as z,i as O,k as y,E as j,K as Ke,J as He,c as Xe,j as w,a5 as ne,F as ie,G as te,aq as ae,ar as ht,as as Re,at as qe,L as bt,M as pt,p as _t,au as Ye,av as yt,aj as xt,aw as qt,u as me,ax as Ct,a2 as Me,B as wt,ay as Pt,az as St,aA as Tt}from"./index.a4028430.js";import{g as Ee,s as Ve,Q as kt}from"./touch.29f36773.js";import{c as $t}from"./selection.ca895cee.js";import{u as It,a as At,b as Bt}from"./use-fullscreen.dc750eba.js";import{u as Lt}from"./use-quasar.e29676f0.js";import{P as Rt}from"./PortfolioComponent.a53d9d84.js";import{C as Mt}from"./SuscriptorComponent.9e310ab8.js";import{T as Et}from"./TecnologiasComponent.fe5eb5aa.js";import{Q as Vt}from"./QImg.d8289321.js";import{r as Qt}from"./QSelect.a21455d6.js";import{s as jt,a as Dt,t as Ft}from"./database.3dc58769.js";import"./QInnerLoading.168e57cb.js";import"./QForm.48f32ff2.js";import"./QParallax.af387eb4.js";import"./object.d8999c0c.js";import"./QItem.7e8b8d1c.js";import"./QItemLabel.afc12c08.js";import"./QMenu.ac8c1059.js";function Nt(e){const o=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((r,s)=>{const n=parseFloat(r);n&&(o[s]=n)}),o}var zt=ut({name:"touch-swipe",beforeMount(e,{value:o,arg:r,modifiers:s}){if(s.mouse!==!0&&Z.has.touch!==!0)return;const n=s.mouseCapture===!0?"Capture":"",t={handler:o,sensitivity:Nt(r),direction:Ee(s),noop:xe,mouseStart(i){Ve(i,t)&&dt(i)&&(ce(t,"temp",[[document,"mousemove","move",`notPassive${n}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(i,!0))},touchStart(i){if(Ve(i,t)){const d=i.target;ce(t,"temp",[[d,"touchmove","move","notPassiveCapture"],[d,"touchcancel","end","notPassiveCapture"],[d,"touchend","end","notPassiveCapture"]]),t.start(i)}},start(i,d){Z.is.firefox===!0&&_e(e,!0);const A=Le(i);t.event={x:A.left,y:A.top,time:Date.now(),mouse:d===!0,dir:!1}},move(i){if(t.event===void 0)return;if(t.event.dir!==!1){ve(i);return}const d=Date.now()-t.event.time;if(d===0)return;const A=Le(i),_=A.left-t.event.x,u=Math.abs(_),B=A.top-t.event.y,p=Math.abs(B);if(t.event.mouse!==!0){if(u<t.sensitivity[1]&&p<t.sensitivity[1]){t.end(i);return}}else if(u<t.sensitivity[2]&&p<t.sensitivity[2])return;const T=u/d,R=p/d;t.direction.vertical===!0&&u<p&&u<100&&R>t.sensitivity[0]&&(t.event.dir=B<0?"up":"down"),t.direction.horizontal===!0&&u>p&&p<100&&T>t.sensitivity[0]&&(t.event.dir=_<0?"left":"right"),t.direction.up===!0&&u<p&&B<0&&u<100&&R>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&u<p&&B>0&&u<100&&R>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&u>p&&_<0&&p<100&&T>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&u>p&&_>0&&p<100&&T>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(ve(i),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),$t(),t.styleCleanup=D=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const M=()=>{document.body.classList.remove("no-pointer-events--children")};D===!0?setTimeout(M,50):M()}),t.handler({evt:i,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:d,distance:{x:u,y:p}})):t.end(i)},end(i){t.event!==void 0&&(ye(t,"temp"),Z.is.firefox===!0&&_e(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),i!==void 0&&t.event.dir!==!1&&ve(i),t.event=void 0)}};e.__qtouchswipe=t,s.mouse===!0&&ce(t,"main",[[e,"mousedown","mouseStart",`passive${n}`]]),Z.has.touch===!0&&ce(t,"main",[[e,"touchstart","touchStart",`passive${s.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const r=e.__qtouchswipe;r!==void 0&&(o.oldValue!==o.value&&(typeof o.value!="function"&&r.end(),r.handler=o.value),r.direction=Ee(o.modifiers))},beforeUnmount(e){const o=e.__qtouchswipe;o!==void 0&&(ye(o,"main"),ye(o,"temp"),Z.is.firefox===!0&&_e(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchswipe)}});function Wt(){const e=new Map;return{getCache:function(o,r){return e[o]===void 0?e[o]=r:e[o]},getCacheWithFn:function(o,r){return e[o]===void 0?e[o]=r():e[o]}}}const Ge={name:{required:!0},disable:Boolean},Qe={setup(e,{slots:o}){return()=>h("div",{class:"q-panel scroll",role:"tabpanel"},le(o.default))}},Je={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Ze=["update:modelValue","before-transition","transition"];function et(){const{props:e,emit:o,proxy:r}=oe(),{getCacheWithFn:s}=Wt();let n,t;const i=V(null),d=V(null);function A(l){const b=e.vertical===!0?"up":"left";$((r.$q.lang.rtl===!0?-1:1)*(l.direction===b?1:-1))}const _=v(()=>[[zt,A,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),u=v(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),B=v(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),p=v(()=>`--q-transition-duration: ${e.transitionDuration}ms`),T=v(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),R=v(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),D=v(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);X(()=>e.modelValue,(l,b)=>{const E=f(l)===!0?k(l):-1;t!==!0&&P(E===-1?0:E<k(b)?-1:1),i.value!==E&&(i.value=E,o("before-transition",l,b),ee(()=>{o("transition",l,b)}))});function M(){$(1)}function Q(){$(-1)}Object.assign(r,{next:M,previous:Q,goTo:F});function F(l){o("update:modelValue",l)}function f(l){return l!=null&&l!==""}function k(l){return n.findIndex(b=>b.props.name===l&&b.props.disable!==""&&b.props.disable!==!0)}function L(){return n.filter(l=>l.props.disable!==""&&l.props.disable!==!0)}function P(l){const b=l!==0&&e.animated===!0&&i.value!==-1?"q-transition--"+(l===-1?u.value:B.value):null;d.value!==b&&(d.value=b)}function $(l,b=i.value){let E=b+l;for(;E>-1&&E<n.length;){const N=n[E];if(N!==void 0&&N.props.disable!==""&&N.props.disable!==!0){P(l),t=!0,o("update:modelValue",N.props.name),setTimeout(()=>{t=!1});return}E+=l}e.infinite===!0&&n.length>0&&b!==-1&&b!==n.length&&$(l,l===-1?n.length:-1)}function Y(){const l=k(e.modelValue);return i.value!==l&&(i.value=l),!0}function G(){const l=f(e.modelValue)===!0&&Y()&&n[i.value];return e.keepAlive===!0?[h(ft,R.value,[h(D.value===!0?s(T.value,()=>({...Qe,name:T.value})):Qe,{key:T.value,style:p.value},()=>l)])]:[h("div",{class:"q-panel scroll",style:p.value,key:T.value,role:"tabpanel"},[l])]}function I(){if(n.length!==0)return e.animated===!0?[h(vt,{name:d.value},G)]:G()}function U(l){return n=mt(le(l.default,[])).filter(b=>b.props!==null&&b.props.slot===void 0&&f(b.props.name)===!0),n.length}function W(){return n}return{panelIndex:i,panelDirectives:_,updatePanelsList:U,updatePanelIndex:Y,getPanelContent:I,getEnabledPanels:L,getPanels:W,isValidPanelName:f,keepAliveProps:R,needsUniqueKeepAliveWrapper:D,goToPanelByOffset:$,goToPanel:F,nextPanel:M,previousPanel:Q}}var Ot=J({name:"QCarouselSlide",props:{...Ge,imgSrc:String},setup(e,{slots:o}){const r=v(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>h("div",{class:"q-carousel__slide",style:r.value},le(o.default))}});const Ut=["top","right","bottom","left"],Kt=["regular","flat","outline","push","unelevated"];var Ht=J({name:"QCarousel",props:{...De,...Je,...It,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>Kt.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Ut.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...At,...Ze],setup(e,{slots:o}){const{proxy:{$q:r}}=oe(),s=Fe(e,r);let n,t;const{updatePanelsList:i,getPanelContent:d,panelDirectives:A,goToPanel:_,previousPanel:u,nextPanel:B,getEnabledPanels:p,panelIndex:T}=et(),{inFullscreen:R}=Bt(),D=v(()=>R.value!==!0&&e.height!==void 0?{height:e.height}:{}),M=v(()=>e.vertical===!0?"vertical":"horizontal"),Q=v(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(R.value===!0?" fullscreen":"")+(s.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${M.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${L.value}`:"")),F=v(()=>{const I=[e.prevIcon||r.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||r.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&r.lang.rtl===!0?I.reverse():I}),f=v(()=>e.navigationIcon||r.iconSet.carousel.navigationIcon),k=v(()=>e.navigationActiveIcon||f.value),L=v(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),P=v(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));X(()=>e.modelValue,()=>{e.autoplay&&(clearInterval(n),$())}),X(()=>e.autoplay,I=>{I?$():clearInterval(n)});function $(){const I=gt(e.autoplay)===!0?e.autoplay:5e3;n=setTimeout(I>=0?B:u,Math.abs(I))}Ne(()=>{e.autoplay&&$()}),Ce(()=>{clearInterval(n)});function Y(I,U){return h("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${I} q-carousel__navigation--${L.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[h("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},p().map(U))])}function G(){const I=[];if(e.navigation===!0){const U=o["navigation-icon"]!==void 0?o["navigation-icon"]:l=>h(fe,{key:"nav"+l.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${l.active===!0?"":"in"}active`,...l.btnProps,onClick:l.onClick}),W=t-1;I.push(Y("buttons",(l,b)=>{const E=l.props.name,N=T.value===b;return U({index:b,maxIndex:W,name:E,active:N,btnProps:{icon:N===!0?k.value:f.value,size:"sm",...P.value},onClick:()=>{_(E)}})}))}else if(e.thumbnails===!0){const U=e.controlColor!==void 0?` text-${e.controlColor}`:"";I.push(Y("thumbnails",W=>{const l=W.props;return h("img",{key:"tmb#"+l.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${l.name===e.modelValue?"":"in"}active`+U,src:l.imgSrc||l["img-src"],onClick:()=>{_(l.name)}})}))}return e.arrows===!0&&T.value>=0&&((e.infinite===!0||T.value>0)&&I.push(h("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${M.value} absolute flex flex-center`},[h(fe,{icon:F.value[0],...P.value,onClick:u})])),(e.infinite===!0||T.value<t-1)&&I.push(h("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${M.value} absolute flex flex-center`},[h(fe,{icon:F.value[1],...P.value,onClick:B})]))),We(o.control,I)}return()=>(t=i(o),h("div",{class:Q.value,style:D.value},[ze("div",{class:"q-carousel__slides-container"},d(),"sl-cont",e.swipeable,()=>A.value)].concat(G())))}});const Xt={class:"q-pa-md-sm q-pa-xs-xs q-ma-md-md q-ma-xs-sm"},Yt={class:"col-md-12 col-sm-12 col-12 column row justify-center bg-rgba q-pa-md"},Gt={class:"text-h2 self-left text-weight-bold title-lg"},Jt={class:"text-h2 self-left text-weight-bold title-lg"},Zt={class:"text-indigo-6"},ea={class:"text-h4 text-grey-6 self-left subtitule-sm"},ta={__name:"CarouselComponent",props:["sliders"],setup(e){const o=e,r=V("developer"),s=o.sliders;return(n,t)=>{const i=Ue("animate-onscroll");return z(),O("div",Xt,[y(Ht,{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=d=>r.value=d),vertical:"",swipeable:"",animated:"","control-color":"white","navigation-icon":"radio_button_unchecked",navigation:"",padding:"",arrows:"",height:"550px",class:"text-white carousel-bg"},{default:j(()=>[(z(!0),O(Ke,null,He(ae(s),d=>(z(),Xe(Ot,{key:d,name:d.name,class:"row justify-evenly bg-img"},{default:j(()=>[w("div",Yt,[ne((z(),O("span",Gt,[ie(te(d.titulo_1),1)])),[[i,"animated fadeInLeft",void 0,{repeat:!0}]]),ne((z(),O("span",Jt,[w("b",Zt,te(d.titulo_2),1)])),[[i,"animated fadeInLeft",void 0,{repeat:!0}]]),w("span",ea,te(d.subtitulo),1)])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])])}}};var aa=Oe(ta,[["__scopeId","data-v-6ab2f742"]]);const na=e=>(bt("data-v-316ad24e"),e=e(),pt(),e),oa={class:"row q-mt-md q-pa-md-xl q-pa-xs-sm justify-center"},la=na(()=>w("div",{class:"col-12 text-center q-py-md"},[w("span",{class:"text-h3"},"Servicios")],-1)),ia={class:"row icon column justify-center q-py-md"},sa={class:"text-center text-weight-medium text-h1 text-grey-4"},ra={height:"100",width:"100"},ca={class:"row column justify-center q-pb-md"},ua={class:"text-center text-h4"},da={class:"row column justify-center q-pb-md"},va={class:"text-center text-grey-6"},fa={class:"row column justify-center"},ma={__name:"ServicesComponent",props:["servicios"],setup(e){const o=e,r=Lt();let s=V();const n=i=>{i=="Desarrollo Web"?s.value='<b class="text-indigo-6">Wolf Developer</b> crea tu proyecto web desde cero, de forma totalmente personalizada y alineada con tus objetivos e imagen corporativa y lo consigue a trav\xE9s del empleo de los mejores lenguajes y tecnolog\xEDas disponibles y demandados en el mercado.<br /> Por lo que cabe mencionar, que el desarrollo se enfoca del lado del cliente (frontend) como del lado del servidor (backend), utilizando base de datos como Mysql y Mongodb.':i=="Publicidad"?s.value='Para las campa\xF1as publicitarias, se dise\xF1a un plan de marketing, en la misma consiste en hacer <u class="text-indigo-6">crecer tu comunidad</u>, ofrecer tus servicios y/o productos y demostrar tus valores y responsibilidad social como instituci\xF3n. <br /> Es decir la publicidad se enfoca en el community, marketing e instituci\xF3n.':s.value="En revit, se realiza los proyectos 2D de autocad, en 3D, por lo que se le agrega las renderizaciones y recorridos en el interior o exterior de los edificios.",r.dialog({title:'<span class="text-h4 text-indigo-6">'+i+"</span>",message:s.value,color:"indigo-6",html:!0,cancel:!1,ok:{label:"Salir",color:"indigo-6"}})},t=o.servicios;return(i,d)=>{const A=Ue("animate-onscroll");return z(),O("div",oa,[la,(z(!0),O(Ke,null,He(ae(t),_=>ne((z(),O("div",{key:_,class:"col-12 col-md-4 col-lg-3 q-pa-md-md q-pa-xs-sm"},[y(qe,{class:"my-card"},{default:j(()=>[y(ht,null,{default:j(()=>[w("div",ia,[ne((z(),O("span",sa,[(z(),O("svg",ra,[w("circle",{cx:"50",cy:"50",r:"45",stroke:"white","stroke-width":"4",fill:"none",class:Re(_.icono)},null,2)])),w("i",{class:Re(_.icono)},null,2)])),[[A,"animated zoomIn",void 0,{repeat:!0}]])]),w("div",ca,[w("span",ua,te(_.titulo),1)]),w("div",da,[w("span",va,te(_.descripcion),1)]),w("div",fa,[y(fe,{type:"button",color:"indigo-6",onClick:u=>n(_.titulo),label:"Saber m\xE1s"},null,8,["onClick"])])]),_:2},1024)]),_:2},1024)])),[[A,"animated fadeIn",void 0,{repeat:!0}]])),128))])}}};var ga=Oe(ma,[["__scopeId","data-v-316ad24e"]]);let ha=0;const ba=["click","keydown"],pa={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${ha++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function _a(e,o,r,s){const n=_t(Ye,()=>{console.error("QTab/QRouteTab component needs to be child of QTabs")}),{proxy:t}=oe(),i=V(null),d=V(null),A=V(null),_=v(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),u=v(()=>n.currentModel.value===e.name),B=v(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(u.value===!0?" q-tab--active"+(n.tabProps.value.activeClass?" "+n.tabProps.value.activeClass:"")+(n.tabProps.value.activeColor?` text-${n.tabProps.value.activeColor}`:"")+(n.tabProps.value.activeBgColor?` bg-${n.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&n.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||n.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(s!==void 0&&s.linkClass.value!==""?` ${s.linkClass.value}`:"")),p=v(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(n.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),T=v(()=>e.disable===!0||n.hasFocus.value===!0?-1:e.tabindex||0);function R(f,k){if(k!==!0&&i.value!==null&&i.value.focus(),e.disable!==!0){let L;if(s!==void 0)if(s.hasRouterLink.value===!0)L=()=>{f.__qNavigate=!0,n.avoidRouteWatcher=!0;const P=s.navigateToRouterLink(f);P===!1?n.avoidRouteWatcher=!1:P.then($=>{n.avoidRouteWatcher=!1,$===void 0&&n.updateModel({name:e.name,fromRoute:!0})})};else{r("click",f);return}else L=()=>{n.updateModel({name:e.name,fromRoute:!1})};r("click",f,L),f.defaultPrevented!==!0&&L()}}function D(f){xt(f,[13,32])?R(f,!0):qt(f)!==!0&&f.keyCode>=35&&f.keyCode<=40&&n.onKbdNavigate(f.keyCode,t.$el)===!0&&ve(f),r("keydown",f)}function M(){const f=n.tabProps.value.narrowIndicator,k=[],L=h("div",{ref:A,class:["q-tab__indicator",n.tabProps.value.indicatorClass]});e.icon!==void 0&&k.push(h(me,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&k.push(h("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&k.push(e.alertIcon!==void 0?h(me,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):h("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),f===!0&&k.push(L);const P=[h("div",{class:"q-focus-helper",tabindex:-1,ref:i}),h("div",{class:p.value},We(o.default,k))];return f===!1&&P.push(L),P}const Q={name:v(()=>e.name),rootRef:d,tabIndicatorRef:A,routerProps:s};Ce(()=>{n.unregisterTab(Q),n.recalculateScroll()}),Ne(()=>{n.registerTab(Q),n.recalculateScroll()});function F(f,k){const L={ref:d,class:B.value,tabindex:T.value,role:"tab","aria-selected":u.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:R,onKeydown:D,...k};return ne(h(f,L,M()),[[yt,_.value]])}return{renderTab:F,$tabs:n}}var ue=J({name:"QTab",props:pa,emits:ba,setup(e,{slots:o,emit:r}){const{renderTab:s}=_a(e,o,r);return()=>s("div")}});function ya(e,o,r){const s=r===!0?["left","right"]:["top","bottom"];return`absolute-${o===!0?s[0]:s[1]}${e?` text-${e}`:""}`}const xa=["left","center","right","justify"],je=()=>{};var qa=J({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>xa.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:o,emit:r}){const s=oe(),{proxy:{$q:n}}=s,{registerTick:t}=Ct(),{registerTimeout:i,removeTimeout:d}=Me(),{registerTimeout:A}=Me(),_=V(null),u=V(null),B=V(e.modelValue),p=V(!1),T=V(!0),R=V(!1),D=V(!1),M=v(()=>n.platform.is.desktop===!0||e.mobileArrows===!0),Q=[],F=V(!1);let f=!1,k,L,P,$=M.value===!0?Pe:xe;const Y=v(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:ya(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),G=v(()=>`q-tabs__content--align-${p.value===!0?"left":D.value===!0?"justify":e.align}`),I=v(()=>`q-tabs row no-wrap items-center q-tabs--${p.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${M.value===!0&&e.outsideArrows===!0?"outside":"inside"}`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),U=v(()=>"q-tabs__content row no-wrap items-center self-stretch hide-scrollbar relative-position "+G.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")+(n.platform.is.mobile===!0?" scroll":"")),W=v(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),l=v(()=>e.vertical!==!0&&n.lang.rtl===!0),b=v(()=>Qt===!1&&l.value===!0);X(l,$),X(()=>e.modelValue,a=>{E({name:a,setCurrent:!0,skipEmit:!0})}),X(()=>e.outsideArrows,()=>{ee(N())}),X(M,a=>{$=a===!0?Pe:xe,ee(N())});function E({name:a,setCurrent:c,skipEmit:m,fromRoute:q}){B.value!==a&&(m!==!0&&r("update:modelValue",a),(c===!0||e["onUpdate:modelValue"]===void 0)&&(tt(B.value,a),B.value=a)),q!==void 0&&(f=q)}function N(){t(()=>{s.isDeactivated!==!0&&s.isUnmounted!==!0&&we({width:_.value.offsetWidth,height:_.value.offsetHeight})})}function we(a){if(W.value===void 0||u.value===null)return;const c=a[W.value.container],m=Math.min(u.value[W.value.scroll],Array.prototype.reduce.call(u.value.children,(g,C)=>g+(C[W.value.content]||0),0)),q=c>0&&m>c;p.value!==q&&(p.value=q),q===!0&&ee($);const S=c<parseInt(e.breakpoint,10);D.value!==S&&(D.value=S)}function tt(a,c){const m=a!=null&&a!==""?Q.find(S=>S.name.value===a):null,q=c!=null&&c!==""?Q.find(S=>S.name.value===c):null;if(m&&q){const S=m.tabIndicatorRef.value,g=q.tabIndicatorRef.value;clearTimeout(k),S.style.transition="none",S.style.transform="none",g.style.transition="none",g.style.transform="none";const C=S.getBoundingClientRect(),x=g.getBoundingClientRect();g.style.transform=e.vertical===!0?`translate3d(0,${C.top-x.top}px,0) scale3d(1,${x.height?C.height/x.height:1},1)`:`translate3d(${C.left-x.left}px,0,0) scale3d(${x.width?C.width/x.width:1},1,1)`,ee(()=>{k=setTimeout(()=>{g.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",g.style.transform="none"},70)})}q&&p.value===!0&&se(q.rootRef.value)}function se(a){const{left:c,width:m,top:q,height:S}=u.value.getBoundingClientRect(),g=a.getBoundingClientRect();let C=e.vertical===!0?g.top-q:g.left-c;if(C<0){u.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(C),$();return}C+=e.vertical===!0?g.height-S:g.width-m,C>0&&(u.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(C),$())}function Pe(){const a=u.value;if(a!==null){const c=a.getBoundingClientRect(),m=e.vertical===!0?a.scrollTop:Math.abs(a.scrollLeft);l.value===!0?(T.value=Math.ceil(m+c.width)<a.scrollWidth-1,R.value=m>0):(T.value=m>0,R.value=e.vertical===!0?Math.ceil(m+c.height)<a.scrollHeight:Math.ceil(m+c.width)<a.scrollWidth)}}function Se(a){H(),$e(a),L=setInterval(()=>{$e(a)===!0&&H()},5)}function Te(){Se(b.value===!0?Number.MAX_SAFE_INTEGER:0)}function ke(){Se(b.value===!0?0:Number.MAX_SAFE_INTEGER)}function H(){clearInterval(L)}function at(a,c){const m=Array.prototype.filter.call(u.value.children,x=>x===c||x.matches&&x.matches(".q-tab.q-focusable")===!0),q=m.length;if(q===0)return;if(a===36)return se(m[0]),!0;if(a===35)return se(m[q-1]),!0;const S=a===(e.vertical===!0?38:37),g=a===(e.vertical===!0?40:39),C=S===!0?-1:g===!0?1:void 0;if(C!==void 0){const x=l.value===!0?-1:1,K=m.indexOf(c)+C*x;return K>=0&&K<q&&(se(m[K]),m[K].focus({preventScroll:!0})),!0}}const nt=v(()=>b.value===!0?{get:a=>Math.abs(a.scrollLeft),set:(a,c)=>{a.scrollLeft=-c}}:e.vertical===!0?{get:a=>a.scrollTop,set:(a,c)=>{a.scrollTop=c}}:{get:a=>a.scrollLeft,set:(a,c)=>{a.scrollLeft=c}});function $e(a){const c=u.value,{get:m,set:q}=nt.value;let S=!1,g=m(c);const C=a<g?-1:1;return g+=C*5,g<0?(S=!0,g=0):(C===-1&&g<=a||C===1&&g>=a)&&(S=!0,g=a),q(c,g),$(),S}function ge(){return Q.filter(a=>a.routerProps!==void 0&&a.routerProps.hasRouterLink.value===!0)}function ot(){let a=null,c=f;const m={matchedLen:0,hrefLen:0,exact:!1,found:!1},{hash:q}=s.proxy.$route,S=B.value;let g=c===!0?je:x=>{S===x.name.value&&(c=!0,g=je)};const C=ge();for(const x of C){const K=x.routerProps.exact.value===!0;if(x.routerProps[K===!0?"linkIsExactActive":"linkIsActive"].value!==!0||m.exact===!0&&K!==!0){g(x);continue}const he=x.routerProps.linkRoute.value,be=he.hash;if(K===!0){if(q===be){a=x.name.value;break}else if(q!==""&&be!==""){g(x);continue}}const pe=he.matched.length,Be=he.href.length-be.length;if(pe===m.matchedLen?Be>m.hrefLen:pe>m.matchedLen){a=x.name.value,Object.assign(m,{matchedLen:pe,hrefLen:Be,exact:K});continue}g(x)}(c===!0||a!==null)&&E({name:a,setCurrent:!0,fromRoute:!0})}function lt(a){if(d(),F.value!==!0&&_.value!==null&&a.target&&typeof a.target.closest=="function"){const c=a.target.closest(".q-tab");c&&_.value.contains(c)===!0&&(F.value=!0)}}function it(){i(()=>{F.value=!1},30)}function re(){Ie.avoidRouteWatcher!==!0&&A(ot)}function st(a){Q.push(a),ge().length>0&&(P===void 0&&(P=X(()=>s.proxy.$route,re)),re())}function rt(a){Q.splice(Q.indexOf(a),1),P!==void 0&&(ge().length===0&&(P(),P=void 0),re())}const Ie={currentModel:B,tabProps:Y,hasFocus:F,registerTab:st,unregisterTab:rt,verifyRouteModel:re,updateModel:E,recalculateScroll:N,onKbdNavigate:at,avoidRouteWatcher:!1};wt(Ye,Ie),Ce(()=>{clearTimeout(k),P!==void 0&&P()});let Ae=!1;return Pt(()=>{Ae=!0}),St(()=>{Ae===!0&&N()}),()=>{const a=[h(kt,{onResize:we}),h("div",{ref:u,class:U.value,onScroll:$},le(o.default))];return M.value===!0&&a.push(h(me,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(T.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||n.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedown:Te,onTouchstartPassive:Te,onMouseup:H,onMouseleave:H,onTouchend:H}),h(me,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(R.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||n.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedown:ke,onTouchstartPassive:ke,onMouseup:H,onMouseleave:H,onTouchend:H})),h("div",{ref:_,class:I.value,role:"tablist",onFocusin:lt,onFocusout:it},a)}}}),de=J({name:"QTabPanel",props:Ge,setup(e,{slots:o}){return()=>h("div",{class:"q-tab-panel"},le(o.default))}}),Ca=J({name:"QTabPanels",props:{...Je,...De},emits:Ze,setup(e,{slots:o}){const r=oe(),s=Fe(e,r.proxy.$q),{updatePanelsList:n,getPanelContent:t,panelDirectives:i}=et(),d=v(()=>"q-tab-panels q-panel-parent"+(s.value===!0?" q-tab-panels--dark q-dark":""));return()=>(n(o),ze("div",{class:d.value},t(),"pan",e.swipeable,()=>i.value))}});const wa={class:"q-pa-md-xl q-pa-xs-sm row justify-center"},Pa={class:"col-12 col-md-4 q-pa-xs-sm q-pa-md-md q-pa-lg-lg"},Sa={class:"col-12 col-md-6 q-pa-xs-sm q-pa-md-md q-pa-lg-lg"},Ta=w("div",{class:"col-12 q-my-md"},[w("span",{class:"text-h4 text-grey-6"},"C\xF3mo trabajo en el Desarrollo Web")],-1),ka=w("div",{class:"text-h6"},"Planeaci\xF3n",-1),$a=ie(" En esta fase se determina los objetivos generales, recursos y tiempo necesario para llevar a cabo el proyecto. "),Ia=w("div",{class:"text-h6"},"An\xE1lisis",-1),Aa=ie(" En esta fase se estudia lo qu\xE9 se desea ofrecer en el sitio, quienes son los usuarios y que requisitos t\xE9cnicos tendr\xE1 el sitio web. Ac\xE1 se eligir\xE1 la opci\xF3n m\xE1s conveniente para construir tu sitio web. "),Ba=w("div",{class:"text-h6"},"Implementaci\xF3n",-1),La=ie(" En esta fase se desarrolla el sitio web, seg\xFAn las opciones estudiadas en la fase de an\xE1lisis y con los recursos y tiempos que se estableci\xF3 en la fase de planeaci\xF3n. "),Ra=w("div",{class:"text-h6"},"Evaluaci\xF3n",-1),Ma=ie(" En esta fase se eval\xFAa el proyecto para tomar las acciones necesarias para lograr o mantener los resultados deseados. "),Ea={__name:"BeneficiosComponent",setup(e){const o=V("planeacion");return(r,s)=>(z(),O("div",wa,[w("div",Pa,[y(qe,{class:"my-card"},{default:j(()=>[y(Vt,{src:"https://res.cloudinary.com/dazfmv5ls/image/upload/v1655823873/img-lobo_ruad1m.jpg",ratio:4/3})]),_:1})]),w("div",Sa,[Ta,y(qe,null,{default:j(()=>[y(qa,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=n=>o.value=n),dense:"",class:"text-grey","active-color":"indigo-6","indicator-color":"indigo-6",align:"justify","narrow-indicator":""},{default:j(()=>[y(ue,{name:"planeacion",label:"Planeaci\xF3n"}),y(ue,{name:"analisis",label:"An\xE1lisis"}),y(ue,{name:"implementacion",label:"Implementaci\xF3n"}),y(ue,{name:"evaluacion",label:"Evaluaci\xF3n"})]),_:1},8,["modelValue"]),y(Tt),y(Ca,{modelValue:o.value,"onUpdate:modelValue":s[1]||(s[1]=n=>o.value=n),animated:""},{default:j(()=>[y(de,{name:"planeacion"},{default:j(()=>[ka,$a]),_:1}),y(de,{name:"analisis"},{default:j(()=>[Ia,Aa]),_:1}),y(de,{name:"implementacion"},{default:j(()=>[Ba,La]),_:1}),y(de,{name:"evaluacion"},{default:j(()=>[Ra,Ma]),_:1})]),_:1},8,["modelValue"])]),_:1})])]))}},an={__name:"IndexView",setup(e){const o="Portafolio",r="Mis trabajos destacados";return(t,i)=>(z(),Xe(ct,{class:"q-pa-md"},{default:j(()=>[y(aa,{sliders:ae(jt)},null,8,["sliders"]),y(ga,{servicios:ae(Dt)},null,8,["servicios"]),y(Ea),y(Et,{tecno:ae(Ft)},null,8,["tecno"]),y(Rt,{title:o,subtitle:r,limit:3,recomendar:!0}),y(Mt)]),_:1}))}};export{an as default};
