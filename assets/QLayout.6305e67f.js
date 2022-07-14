import{p as V,m as d,h as S,D as j,q as K,E as R,r as T,w as b,P as Z,R as Re,y as F,S as Ae,T as W,t as xe,U as Ie,V as X,W as le,X as ge,Y as ie,Z as de,$ as re,a0 as Xe,z as Ne,a1 as Ye,A as Ue,a2 as je,a3 as Ke,B as Ze,a4 as Ge,n as ye,a5 as N,o as Se,a6 as Je,a7 as be,a8 as et,C as ze,a9 as tt,aa as Te,x as $e,ab as at,ac as ot,ad as nt,ae as lt,af as ue,ag as Y,c as it}from"./index.ac77cb7a.js";import{Q as U,g as pe,s as we}from"./touch.2af1df3c.js";import{c as rt}from"./selection.9c5548d3.js";var mt=V({name:"QToolbarTitle",props:{shrink:Boolean},setup(t,{slots:c}){const l=d(()=>"q-toolbar__title ellipsis"+(t.shrink===!0?" col-shrink":""));return()=>S("div",{class:l.value},j(c.default))}}),gt=V({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:c}){const l=d(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>S("div",{class:l.value},j(c.default))}}),yt=V({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:c,emit:l}){const{proxy:{$q:s}}=F(),e=K(R,()=>{console.error("QHeader needs to be child of QLayout")}),o=T(parseInt(t.heightHint,10)),i=T(!0),m=d(()=>t.reveal===!0||e.view.value.indexOf("H")>-1||s.platform.is.ios&&e.isContainer.value===!0),v=d(()=>{if(t.modelValue!==!0)return 0;if(m.value===!0)return i.value===!0?o.value:0;const f=o.value-e.scroll.value.position;return f>0?f:0}),a=d(()=>t.modelValue!==!0||m.value===!0&&i.value!==!0),z=d(()=>t.modelValue===!0&&a.value===!0&&t.reveal===!0),C=d(()=>"q-header q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(a.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),w=d(()=>{const f=e.rows.value.top,$={};return f[0]==="l"&&e.left.space===!0&&($[s.lang.rtl===!0?"right":"left"]=`${e.left.size}px`),f[2]==="r"&&e.right.space===!0&&($[s.lang.rtl===!0?"left":"right"]=`${e.right.size}px`),$});function u(f,$){e.update("header",f,$)}function q(f,$){f.value!==$&&(f.value=$)}function p({height:f}){q(o,f),u("size",f)}function y(f){z.value===!0&&q(i,!0),l("focusin",f)}b(()=>t.modelValue,f=>{u("space",f),q(i,!0),e.animate()}),b(v,f=>{u("offset",f)}),b(()=>t.reveal,f=>{f===!1&&q(i,t.modelValue)}),b(i,f=>{e.animate(),l("reveal",f)}),b(e.scroll,f=>{t.reveal===!0&&q(i,f.direction==="up"||f.position<=t.revealOffset||f.position-f.inflectionPoint<100)});const P={};return e.instances.header=P,t.modelValue===!0&&u("size",o.value),u("space",t.modelValue),u("offset",v.value),Z(()=>{e.instances.header===P&&(e.instances.header=void 0,u("size",0),u("offset",0),u("space",!1))}),()=>{const f=Re(c.default,[]);return t.elevated===!0&&f.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),f.push(S(U,{debounce:0,onResize:p})),S("header",{class:C.value,style:w.value,onFocusin:y},f)}}});function se(t,c,l){const s=de(t);let e,o=s.left-c.event.x,i=s.top-c.event.y,m=Math.abs(o),v=Math.abs(i);const a=c.direction;a.horizontal===!0&&a.vertical!==!0?e=o<0?"left":"right":a.horizontal!==!0&&a.vertical===!0?e=i<0?"up":"down":a.up===!0&&i<0?(e="up",m>v&&(a.left===!0&&o<0?e="left":a.right===!0&&o>0&&(e="right"))):a.down===!0&&i>0?(e="down",m>v&&(a.left===!0&&o<0?e="left":a.right===!0&&o>0&&(e="right"))):a.left===!0&&o<0?(e="left",m<v&&(a.up===!0&&i<0?e="up":a.down===!0&&i>0&&(e="down"))):a.right===!0&&o>0&&(e="right",m<v&&(a.up===!0&&i<0?e="up":a.down===!0&&i>0&&(e="down")));let z=!1;if(e===void 0&&l===!1){if(c.event.isFirst===!0||c.event.lastDir===void 0)return{};e=c.event.lastDir,z=!0,e==="left"||e==="right"?(s.left-=o,m=0,o=0):(s.top-=i,v=0,i=0)}return{synthetic:z,payload:{evt:t,touch:c.event.mouse!==!0,mouse:c.event.mouse===!0,position:s,direction:e,isFirst:c.event.isFirst,isFinal:l===!0,duration:Date.now()-c.event.time,distance:{x:m,y:v},offset:{x:o,y:i},delta:{x:s.left-c.event.lastX,y:s.top-c.event.lastY}}}}let ut=0;var ce=Ae({name:"touch-pan",beforeMount(t,{value:c,modifiers:l}){if(l.mouse!==!0&&W.has.touch!==!0)return;function s(o,i){l.mouse===!0&&i===!0?Xe(o):(l.stop===!0&&ie(o),l.prevent===!0&&ge(o))}const e={uid:"qvtp_"+ut++,handler:c,modifiers:l,direction:pe(l),noop:xe,mouseStart(o){we(o,e)&&Ie(o)&&(X(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(o,!0))},touchStart(o){if(we(o,e)){const i=o.target;X(e,"temp",[[i,"touchmove","move","notPassiveCapture"],[i,"touchcancel","end","passiveCapture"],[i,"touchend","end","passiveCapture"]]),e.start(o)}},start(o,i){if(W.is.firefox===!0&&le(t,!0),e.lastEvt=o,i===!0||l.stop===!0){if(e.direction.all!==!0&&(i!==!0||e.modifiers.mouseAllDir!==!0)){const a=o.type.indexOf("mouse")>-1?new MouseEvent(o.type,o):new TouchEvent(o.type,o);o.defaultPrevented===!0&&ge(a),o.cancelBubble===!0&&ie(a),Object.assign(a,{qKeyEvent:o.qKeyEvent,qClickOutside:o.qClickOutside,qAnchorHandled:o.qAnchorHandled,qClonedBy:o.qClonedBy===void 0?[e.uid]:o.qClonedBy.concat(e.uid)}),e.initialEvent={target:o.target,event:a}}ie(o)}const{left:m,top:v}=de(o);e.event={x:m,y:v,time:Date.now(),mouse:i===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:m,lastY:v}},move(o){if(e.event===void 0)return;const i=de(o),m=i.left-e.event.x,v=i.top-e.event.y;if(m===0&&v===0)return;e.lastEvt=o;const a=e.event.mouse===!0,z=()=>{s(o,a),l.preserveCursor!==!0&&(document.documentElement.style.cursor="grabbing"),a===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),rt(),e.styleCleanup=u=>{if(e.styleCleanup=void 0,l.preserveCursor!==!0&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),a===!0){const q=()=>{document.body.classList.remove("no-pointer-events--children")};u!==void 0?setTimeout(()=>{q(),u()},50):q()}else u!==void 0&&u()}};if(e.event.detected===!0){e.event.isFirst!==!0&&s(o,e.event.mouse);const{payload:u,synthetic:q}=se(o,e,!1);u!==void 0&&(e.handler(u)===!1?e.end(o):(e.styleCleanup===void 0&&e.event.isFirst===!0&&z(),e.event.lastX=u.position.left,e.event.lastY=u.position.top,e.event.lastDir=q===!0?void 0:u.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||a===!0&&e.modifiers.mouseAllDir===!0){z(),e.event.detected=!0,e.move(o);return}const C=Math.abs(m),w=Math.abs(v);C!==w&&(e.direction.horizontal===!0&&C>w||e.direction.vertical===!0&&C<w||e.direction.up===!0&&C<w&&v<0||e.direction.down===!0&&C<w&&v>0||e.direction.left===!0&&C>w&&m<0||e.direction.right===!0&&C>w&&m>0?(e.event.detected=!0,e.move(o)):e.end(o,!0))},end(o,i){if(e.event!==void 0){if(re(e,"temp"),W.is.firefox===!0&&le(t,!1),i===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(se(o===void 0?e.lastEvt:o,e).payload);const{payload:m}=se(o===void 0?e.lastEvt:o,e,!0),v=()=>{e.handler(m)};e.styleCleanup!==void 0?e.styleCleanup(v):v()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};t.__qtouchpan=e,l.mouse===!0&&X(e,"main",[[t,"mousedown","mouseStart",`passive${l.mouseCapture===!0?"Capture":""}`]]),W.has.touch===!0&&X(e,"main",[[t,"touchstart","touchStart",`passive${l.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,c){const l=t.__qtouchpan;l!==void 0&&(c.oldValue!==c.value&&(typeof value!="function"&&l.end(),l.handler=c.value),l.direction=pe(c.modifiers))},beforeUnmount(t){const c=t.__qtouchpan;c!==void 0&&(c.event!==void 0&&c.end(),re(c,"main"),re(c,"temp"),W.is.firefox===!0&&le(t,!1),c.styleCleanup!==void 0&&c.styleCleanup(),delete t.__qtouchpan)}});const Ce=150;var bt=V({name:"QDrawer",inheritAttrs:!1,props:{...Ne,...Ye,side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Ue,"on-layout","mini-state"],setup(t,{slots:c,emit:l,attrs:s}){const e=F(),{proxy:{$q:o}}=e,i=je(t,o),{preventBodyScroll:m}=et(),{registerTimeout:v}=Ke(),a=K(R,()=>{console.error("QDrawer needs to be child of QLayout")});let z,C,w;const u=T(t.behavior==="mobile"||t.behavior!=="desktop"&&a.totalWidth.value<=t.breakpoint),q=d(()=>t.mini===!0&&u.value!==!0),p=d(()=>q.value===!0?t.miniWidth:t.width),y=T(t.showIfAbove===!0&&u.value===!1?!0:t.modelValue===!0),P=d(()=>t.persistent!==!0&&(u.value===!0||Be.value===!0));function f(n,g){if(x(),n!==!1&&a.animate(),L(0),u.value===!0){const B=a.instances[A.value];B!==void 0&&B.belowBreakpoint===!0&&B.hide(!1),E(1),a.isContainer.value!==!0&&m(!0)}else E(0),n!==!1&&ae(!1);v(()=>{n!==!1&&ae(!0),g!==!0&&l("show",n)},Ce)}function $(n,g){O(),n!==!1&&a.animate(),E(0),L(H.value*p.value),oe(),g!==!0&&v(()=>{l("hide",n)},Ce)}const{show:h,hide:r}=Ze({showing:y,hideOnRouteChange:P,handleShow:f,handleHide:$}),{addToHistory:x,removeFromHistory:O}=Ge(y,r,P),_={belowBreakpoint:u,hide:r},k=d(()=>t.side==="right"),H=d(()=>(o.lang.rtl===!0?-1:1)*(k.value===!0?1:-1)),fe=T(0),M=T(!1),G=T(!1),ve=T(p.value*H.value),A=d(()=>k.value===!0?"left":"right"),J=d(()=>y.value===!0&&u.value===!1&&t.overlay===!1?t.miniToOverlay===!0?t.miniWidth:p.value:0),ee=d(()=>t.overlay===!0||t.miniToOverlay===!0||a.view.value.indexOf(k.value?"R":"L")>-1||o.platform.is.ios===!0&&a.isContainer.value===!0),D=d(()=>t.overlay===!1&&y.value===!0&&u.value===!1),Be=d(()=>t.overlay===!0&&y.value===!0&&u.value===!1),ke=d(()=>"fullscreen q-drawer__backdrop"+(y.value===!1&&M.value===!1?" hidden":"")),Le=d(()=>({backgroundColor:`rgba(0,0,0,${fe.value*.4})`})),he=d(()=>k.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),Pe=d(()=>k.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),Oe=d(()=>{const n={};return a.header.space===!0&&he.value===!1&&(ee.value===!0?n.top=`${a.header.offset}px`:a.header.space===!0&&(n.top=`${a.header.size}px`)),a.footer.space===!0&&Pe.value===!1&&(ee.value===!0?n.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(n.bottom=`${a.footer.size}px`)),n}),_e=d(()=>{const n={width:`${p.value}px`,transform:`translateX(${ve.value}px)`};return u.value===!0?n:Object.assign(n,Oe.value)}),Ee=d(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),Qe=d(()=>`q-drawer q-drawer--${t.side}`+(G.value===!0?" q-drawer--mini-animate":"")+(t.bordered===!0?" q-drawer--bordered":"")+(i.value===!0?" q-drawer--dark q-dark":"")+(M.value===!0?" no-transition":y.value===!0?"":" q-layout--prevent-focus")+(u.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${q.value===!0?"mini":"standard"}`+(ee.value===!0||D.value!==!0?" fixed":"")+(t.overlay===!0||t.miniToOverlay===!0?" q-drawer--on-top":"")+(he.value===!0?" q-drawer--top-padding":""))),Ve=d(()=>{const n=o.lang.rtl===!0?t.side:A.value;return[[ce,De,void 0,{[n]:!0,mouse:!0}]]}),He=d(()=>{const n=o.lang.rtl===!0?A.value:t.side;return[[ce,me,void 0,{[n]:!0,mouse:!0}]]}),Me=d(()=>{const n=o.lang.rtl===!0?A.value:t.side;return[[ce,me,void 0,{[n]:!0,mouse:!0,mouseAllDir:!0}]]});function te(){We(u,t.behavior==="mobile"||t.behavior!=="desktop"&&a.totalWidth.value<=t.breakpoint)}b(u,n=>{n===!0?(z=y.value,y.value===!0&&r(!1)):t.overlay===!1&&t.behavior!=="mobile"&&z!==!1&&(y.value===!0?(L(0),E(0),oe()):h(!1))}),b(()=>t.side,(n,g)=>{a.instances[g]===_&&(a.instances[g]=void 0,a[g].space=!1,a[g].offset=0),a.instances[n]=_,a[n].size=p.value,a[n].space=D.value,a[n].offset=J.value}),b(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&te()}),b(()=>t.behavior+t.breakpoint,te),b(a.isContainer,n=>{y.value===!0&&m(n!==!0),n===!0&&te()}),b(a.scrollbarWidth,()=>{L(y.value===!0?0:void 0)}),b(J,n=>{Q("offset",n)}),b(D,n=>{l("on-layout",n),Q("space",n)}),b(k,()=>{L()}),b(p,n=>{L(),ne(t.miniToOverlay,n)}),b(()=>t.miniToOverlay,n=>{ne(n,p.value)}),b(()=>o.lang.rtl,()=>{L()}),b(()=>t.mini,()=>{t.modelValue===!0&&(Fe(),a.animate())}),b(q,n=>{l("mini-state",n)});function L(n){n===void 0?ye(()=>{n=y.value===!0?0:p.value,L(H.value*n)}):(a.isContainer.value===!0&&k.value===!0&&(u.value===!0||Math.abs(n)===p.value)&&(n+=H.value*a.scrollbarWidth.value),ve.value=n)}function E(n){fe.value=n}function ae(n){const g=n===!0?"remove":a.isContainer.value!==!0?"add":"";g!==""&&document.body.classList[g]("q-body--drawer-toggle")}function Fe(){clearTimeout(C),e.proxy&&e.proxy.$el&&e.proxy.$el.classList.add("q-drawer--mini-animate"),G.value=!0,C=setTimeout(()=>{G.value=!1,e&&e.proxy&&e.proxy.$el&&e.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function De(n){if(y.value!==!1)return;const g=p.value,B=N(n.distance.x,0,g);if(n.isFinal===!0){B>=Math.min(75,g)===!0?h():(a.animate(),E(0),L(H.value*g)),M.value=!1;return}L((o.lang.rtl===!0?k.value!==!0:k.value)?Math.max(g-B,0):Math.min(0,B-g)),E(N(B/g,0,1)),n.isFirst===!0&&(M.value=!0)}function me(n){if(y.value!==!0)return;const g=p.value,B=n.direction===t.side,I=(o.lang.rtl===!0?B!==!0:B)?N(n.distance.x,0,g):0;if(n.isFinal===!0){Math.abs(I)<Math.min(75,g)===!0?(a.animate(),E(1),L(0)):r(),M.value=!1;return}L(H.value*I),E(N(1-I/g,0,1)),n.isFirst===!0&&(M.value=!0)}function oe(){m(!1),ae(!0)}function Q(n,g){a.update(t.side,n,g)}function We(n,g){n.value!==g&&(n.value=g)}function ne(n,g){Q("size",n===!0?t.miniWidth:g)}return a.instances[t.side]=_,ne(t.miniToOverlay,p.value),Q("space",D.value),Q("offset",J.value),t.showIfAbove===!0&&t.modelValue!==!0&&y.value===!0&&t["onUpdate:modelValue"]!==void 0&&l("update:modelValue",!0),Se(()=>{l("on-layout",D.value),l("mini-state",q.value),z=t.showIfAbove===!0;const n=()=>{(y.value===!0?f:$)(!1,!0)};if(a.totalWidth.value!==0){ye(n);return}w=b(a.totalWidth,()=>{w(),w=void 0,y.value===!1&&t.showIfAbove===!0&&u.value===!1?h(!1):n()})}),Z(()=>{w!==void 0&&w(),clearTimeout(C),y.value===!0&&oe(),a.instances[t.side]===_&&(a.instances[t.side]=void 0,Q("size",0),Q("offset",0),Q("space",!1))}),()=>{const n=[];u.value===!0&&(t.noSwipeOpen===!1&&n.push(Je(S("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),Ve.value)),n.push(be("div",{ref:"backdrop",class:ke.value,style:Le.value,"aria-hidden":"true",onClick:r},void 0,"backdrop",t.noSwipeBackdrop!==!0&&y.value===!0,()=>Me.value)));const g=q.value===!0&&c.mini!==void 0,B=[S("div",{...s,key:""+g,class:[Ee.value,s.class]},g===!0?c.mini():j(c.default))];return t.elevated===!0&&y.value===!0&&B.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push(be("aside",{ref:"content",class:Qe.value,style:_e.value},B,"contentclose",t.noSwipeClose!==!0&&u.value===!0,()=>He.value)),S("div",{class:"q-drawer-container"},n)}}}),pt=V({name:"QPageContainer",setup(t,{slots:c}){const{proxy:{$q:l}}=F(),s=K(R,()=>{console.error("QPageContainer needs to be child of QLayout")});ze(tt,!0);const e=d(()=>{const o={};return s.header.space===!0&&(o.paddingTop=`${s.header.size}px`),s.right.space===!0&&(o[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${s.right.size}px`),s.footer.space===!0&&(o.paddingBottom=`${s.footer.size}px`),s.left.space===!0&&(o[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${s.left.size}px`),o});return()=>S("div",{class:"q-page-container",style:e.value},j(c.default))}}),wt=V({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:c,emit:l}){const{proxy:{$q:s}}=F(),e=K(R,()=>{console.error("QFooter needs to be child of QLayout")}),o=T(parseInt(t.heightHint,10)),i=T(!0),m=T(Te.value===!0||e.isContainer.value===!0?0:window.innerHeight),v=d(()=>t.reveal===!0||e.view.value.indexOf("F")>-1||s.platform.is.ios&&e.isContainer.value===!0),a=d(()=>e.isContainer.value===!0?e.containerHeight.value:m.value),z=d(()=>{if(t.modelValue!==!0)return 0;if(v.value===!0)return i.value===!0?o.value:0;const r=e.scroll.value.position+a.value+o.value-e.height.value;return r>0?r:0}),C=d(()=>t.modelValue!==!0||v.value===!0&&i.value!==!0),w=d(()=>t.modelValue===!0&&C.value===!0&&t.reveal===!0),u=d(()=>"q-footer q-layout__section--marginal "+(v.value===!0?"fixed":"absolute")+"-bottom"+(t.bordered===!0?" q-footer--bordered":"")+(C.value===!0?" q-footer--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus"+(v.value!==!0?" hidden":""):"")),q=d(()=>{const r=e.rows.value.bottom,x={};return r[0]==="l"&&e.left.space===!0&&(x[s.lang.rtl===!0?"right":"left"]=`${e.left.size}px`),r[2]==="r"&&e.right.space===!0&&(x[s.lang.rtl===!0?"left":"right"]=`${e.right.size}px`),x});function p(r,x){e.update("footer",r,x)}function y(r,x){r.value!==x&&(r.value=x)}function P({height:r}){y(o,r),p("size",r)}function f(){if(t.reveal!==!0)return;const{direction:r,position:x,inflectionPoint:O}=e.scroll.value;y(i,r==="up"||x-O<100||e.height.value-a.value-x-o.value<300)}function $(r){w.value===!0&&y(i,!0),l("focusin",r)}b(()=>t.modelValue,r=>{p("space",r),y(i,!0),e.animate()}),b(z,r=>{p("offset",r)}),b(()=>t.reveal,r=>{r===!1&&y(i,t.modelValue)}),b(i,r=>{e.animate(),l("reveal",r)}),b([o,e.scroll,e.height],f),b(()=>s.screen.height,r=>{e.isContainer.value!==!0&&y(m,r)});const h={};return e.instances.footer=h,t.modelValue===!0&&p("size",o.value),p("space",t.modelValue),p("offset",z.value),Z(()=>{e.instances.footer===h&&(e.instances.footer=void 0,p("size",0),p("offset",0),p("space",!1))}),()=>{const r=$e(c.default,[S(U,{debounce:0,onResize:P})]);return t.elevated===!0&&r.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),S("footer",{class:u.value,style:q.value,onFocusin:$},r)}}});const{passive:qe}=ot,st=["both","horizontal","vertical"];var ct=V({name:"QScrollObserver",props:{axis:{type:String,validator:t=>st.includes(t),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(t,{emit:c}){const l={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let s=null,e,o;b(()=>t.scrollTarget,()=>{v(),m()});function i(){s!==null&&s();const C=Math.max(0,nt(e)),w=lt(e),u={top:C-l.position.top,left:w-l.position.left};if(t.axis==="vertical"&&u.top===0||t.axis==="horizontal"&&u.left===0)return;const q=Math.abs(u.top)>=Math.abs(u.left)?u.top<0?"up":"down":u.left<0?"left":"right";l.position={top:C,left:w},l.directionChanged=l.direction!==q,l.delta=u,l.directionChanged===!0&&(l.direction=q,l.inflectionPoint=l.position),c("scroll",{...l})}function m(){e=at(o,t.scrollTarget),e.addEventListener("scroll",a,qe),a(!0)}function v(){e!==void 0&&(e.removeEventListener("scroll",a,qe),e=void 0)}function a(C){if(C===!0||t.debounce===0||t.debounce==="0")i();else if(s===null){const[w,u]=t.debounce?[setTimeout(i,t.debounce),clearTimeout]:[requestAnimationFrame(i),cancelAnimationFrame];s=()=>{u(w),s=null}}}const z=F();return Se(()=>{o=z.proxy.$el.parentNode,m()}),Z(()=>{s!==null&&s(),v()}),Object.assign(z.proxy,{trigger:a,getPosition:()=>l}),xe}}),Ct=V({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:t=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(t.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(t,{slots:c,emit:l}){const{proxy:{$q:s}}=F(),e=T(null),o=T(s.screen.height),i=T(t.container===!0?0:s.screen.width),m=T({position:0,direction:"down",inflectionPoint:0}),v=T(0),a=T(Te.value===!0?0:ue()),z=d(()=>"q-layout q-layout--"+(t.container===!0?"containerized":"standard")),C=d(()=>t.container===!1?{minHeight:s.screen.height+"px"}:null),w=d(()=>a.value!==0?{[s.lang.rtl===!0?"left":"right"]:`${a.value}px`}:null),u=d(()=>a.value!==0?{[s.lang.rtl===!0?"right":"left"]:0,[s.lang.rtl===!0?"left":"right"]:`-${a.value}px`,width:`calc(100% + ${a.value}px)`}:null);function q(h){if(t.container===!0||document.qScrollPrevented!==!0){const r={position:h.position.top,direction:h.direction,directionChanged:h.directionChanged,inflectionPoint:h.inflectionPoint.top,delta:h.delta.top};m.value=r,t.onScroll!==void 0&&l("scroll",r)}}function p(h){const{height:r,width:x}=h;let O=!1;o.value!==r&&(O=!0,o.value=r,t.onScrollHeight!==void 0&&l("scroll-height",r),P()),i.value!==x&&(O=!0,i.value=x),O===!0&&t.onResize!==void 0&&l("resize",h)}function y({height:h}){v.value!==h&&(v.value=h,P())}function P(){if(t.container===!0){const h=o.value>v.value?ue():0;a.value!==h&&(a.value=h)}}let f;const $={instances:{},view:d(()=>t.view),isContainer:d(()=>t.container),rootRef:e,height:o,containerHeight:v,scrollbarWidth:a,totalWidth:d(()=>i.value+a.value),rows:d(()=>{const h=t.view.toLowerCase().split(" ");return{top:h[0].split(""),middle:h[1].split(""),bottom:h[2].split("")}}),header:Y({size:0,offset:0,space:!1}),right:Y({size:300,offset:0,space:!1}),footer:Y({size:0,offset:0,space:!1}),left:Y({size:300,offset:0,space:!1}),scroll:m,animate(){f!==void 0?clearTimeout(f):document.body.classList.add("q-body--layout-animate"),f=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),f=void 0},155)},update(h,r,x){$[h][r]=x}};if(ze(R,$),ue()>0){let x=function(){h=null,r.classList.remove("hide-scrollbar")},O=function(){if(h===null){if(r.scrollHeight>s.screen.height)return;r.classList.add("hide-scrollbar")}else clearTimeout(h);h=setTimeout(x,300)},_=function(k){h!==null&&k==="remove"&&(clearTimeout(h),x()),window[`${k}EventListener`]("resize",O)},h=null;const r=document.body;b(()=>t.container!==!0?"add":"remove",_),t.container!==!0&&_("add"),it(()=>{_("remove")})}return()=>{const h=$e(c.default,[S(ct,{onScroll:q}),S(U,{onResize:p})]),r=S("div",{class:z.value,style:C.value,ref:t.container===!0?void 0:e,tabindex:-1},h);return t.container===!0?S("div",{class:"q-layout-container overflow-hidden",ref:e},[S(U,{onResize:y}),S("div",{class:"absolute-full",style:w.value},[S("div",{class:"scroll",style:u.value},[r])])]):r}}});export{Ct as Q,gt as a,mt as b,yt as c,bt as d,pt as e,wt as f};