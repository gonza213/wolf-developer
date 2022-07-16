import{r as w,aj as xe,W as Q,n as be,U as V,w as y,o as ye,O as q,x as J,Z as Te,ab as M,b5 as I,S as we,ae as pe,m as Ce,y as ke,a0 as Ee,aZ as He,z as Se,l as b,a1 as Me,ax as We,a2 as qe,a_ as Pe,A as Le,b6 as Be,b7 as ze,b8 as N,b9 as Oe,Y as $e,ba as Ae,aa as Fe,bb as Re,bc as De,h as _,C as Ke,al as je,a$ as Qe,$ as Ve}from"./index.f4765a02.js";import{c as Ie}from"./selection.3a8183a1.js";const Ne={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function _e({showing:e,avoidEmit:t,configureAnchorEl:a}){const{props:o,proxy:l,emit:c}=J(),n=w(null);let f;function d(i){return n.value===null?!1:i===void 0||i.touches===void 0||i.touches.length<=1}const r={};a===void 0&&(Object.assign(r,{hide(i){l.hide(i)},toggle(i){l.toggle(i),i.qAnchorHandled=!0},toggleKey(i){xe(i,13)===!0&&r.toggle(i)},contextClick(i){l.hide(i),Q(i),be(()=>{l.show(i),i.qAnchorHandled=!0})},prevent:Q,mobileTouch(i){if(r.mobileCleanup(i),d(i)!==!0)return;l.hide(i),n.value.classList.add("non-selectable");const h=i.target;V(r,"anchor",[[h,"touchmove","mobileCleanup","passive"],[h,"touchend","mobileCleanup","passive"],[h,"touchcancel","mobileCleanup","passive"],[n.value,"contextmenu","prevent","notPassive"]]),f=setTimeout(()=>{l.show(i),i.qAnchorHandled=!0},300)},mobileCleanup(i){n.value.classList.remove("non-selectable"),clearTimeout(f),e.value===!0&&i!==void 0&&Ie()}}),a=function(i=o.contextMenu){if(o.noParentEvent===!0||n.value===null)return;let h;i===!0?l.$q.platform.is.mobile===!0?h=[[n.value,"touchstart","mobileTouch","passive"]]:h=[[n.value,"mousedown","hide","passive"],[n.value,"contextmenu","contextClick","notPassive"]]:h=[[n.value,"click","toggle","passive"],[n.value,"keyup","toggleKey","passive"]],V(r,"anchor",h)});function s(){Te(r,"anchor")}function v(i){for(n.value=i;n.value.classList.contains("q-anchor--skip");)n.value=n.value.parentNode;a()}function m(){if(o.target===!1||o.target===""||l.$el.parentNode===null)n.value=null;else if(o.target===!0)v(l.$el.parentNode);else{let i=o.target;if(typeof o.target=="string")try{i=document.querySelector(o.target)}catch{i=void 0}i!=null?(n.value=i.$el||i,a()):(n.value=null,console.error(`Anchor: target "${o.target}" not found`))}}return y(()=>o.contextMenu,i=>{n.value!==null&&(s(),a(i))}),y(()=>o.target,()=>{n.value!==null&&s(),m()}),y(()=>o.noParentEvent,i=>{n.value!==null&&(i===!0?s():a())}),ye(()=>{m(),t!==!0&&o.modelValue===!0&&n.value===null&&c("update:modelValue",!1)}),q(()=>{clearTimeout(f),s()}),{anchorEl:n,canShow:d,anchorEvents:r}}function Ue(e,t){const a=w(null);let o;function l(f,d){const r=`${d!==void 0?"add":"remove"}EventListener`,s=d!==void 0?d:o;f!==window&&f[r]("scroll",s,M.passive),window[r]("scroll",s,M.passive),o=d}function c(){a.value!==null&&(l(a.value),a.value=null)}const n=y(()=>e.noParentEvent,()=>{a.value!==null&&(c(),t())});return q(n),{localScrollTarget:a,unconfigureScrollTarget:c,changeScrollEvent:l}}let ee;const{notPassiveCapture:p}=M,g=[];function C(e){clearTimeout(ee);const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let a=I.length-1;for(;a>=0;){const o=I[a].$;if(o.type.name!=="QDialog")break;if(o.props.seamless!==!0)return;a--}for(let o=g.length-1;o>=0;o--){const l=g[o];if((l.anchorEl.value===null||l.anchorEl.value.contains(t)===!1)&&(t===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(t)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function Ye(e){g.push(e),g.length===1&&(document.addEventListener("mousedown",C,p),document.addEventListener("touchstart",C,p))}function U(e){const t=g.findIndex(a=>a===e);t>-1&&(g.splice(t,1),g.length===0&&(clearTimeout(ee),document.removeEventListener("mousedown",C,p),document.removeEventListener("touchstart",C,p)))}let Y,Z;function X(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Ze(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const W={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{W[`${e}#ltr`]=e,W[`${e}#rtl`]=e});function G(e,t){const a=e.split(" ");return{vertical:a[0],horizontal:W[`${a[1]}#${t===!0?"rtl":"ltr"}`]}}function Xe(e,t){let{top:a,left:o,right:l,bottom:c,width:n,height:f}=e.getBoundingClientRect();return t!==void 0&&(a-=t[1],o-=t[0],c+=t[1],l+=t[0],n+=t[0],f+=t[1]),{top:a,left:o,right:l,bottom:c,width:n,height:f,middle:o+(l-o)/2,center:a+(c-a)/2}}function Ge(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function Je(e){if(we.is.ios===!0&&window.visualViewport!==void 0){const f=document.body.style,{offsetLeft:d,offsetTop:r}=window.visualViewport;d!==Y&&(f.setProperty("--q-pe-left",d+"px"),Y=d),r!==Z&&(f.setProperty("--q-pe-top",r+"px"),Z=r)}let t;const{scrollLeft:a,scrollTop:o}=e.el;if(e.absoluteOffset===void 0)t=Xe(e.anchorEl,e.cover===!0?[0,0]:e.offset);else{const{top:f,left:d}=e.anchorEl.getBoundingClientRect(),r=f+e.absoluteOffset.top,s=d+e.absoluteOffset.left;t={top:r,left:s,width:1,height:1,right:s+1,center:r,middle:s,bottom:r+1}}let l={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(l.minWidth=t.width+"px",e.cover===!0&&(l.minHeight=t.height+"px")),Object.assign(e.el.style,l);const c=Ge(e.el),n={top:t[e.anchorOrigin.vertical]-c[e.selfOrigin.vertical],left:t[e.anchorOrigin.horizontal]-c[e.selfOrigin.horizontal]};et(n,t,c,e.anchorOrigin,e.selfOrigin),l={top:n.top+"px",left:n.left+"px"},n.maxHeight!==void 0&&(l.maxHeight=n.maxHeight+"px",t.height>n.maxHeight&&(l.minHeight=l.maxHeight)),n.maxWidth!==void 0&&(l.maxWidth=n.maxWidth+"px",t.width>n.maxWidth&&(l.minWidth=l.maxWidth)),Object.assign(e.el.style,l),e.el.scrollTop!==o&&(e.el.scrollTop=o),e.el.scrollLeft!==a&&(e.el.scrollLeft=a)}function et(e,t,a,o,l){const c=a.bottom,n=a.right,f=pe(),d=window.innerHeight-f,r=document.body.clientWidth;if(e.top<0||e.top+c>d)if(l.vertical==="center")e.top=t[o.vertical]>d/2?Math.max(0,d-c):0,e.maxHeight=Math.min(c,d);else if(t[o.vertical]>d/2){const s=Math.min(d,o.vertical==="center"?t.center:o.vertical===l.vertical?t.bottom:t.top);e.maxHeight=Math.min(c,s),e.top=Math.max(0,s-c)}else e.top=Math.max(0,o.vertical==="center"?t.center:o.vertical===l.vertical?t.top:t.bottom),e.maxHeight=Math.min(c,d-e.top);if(e.left<0||e.left+n>r)if(e.maxWidth=Math.min(n,r),l.horizontal==="middle")e.left=t[o.horizontal]>r/2?Math.max(0,r-n):0;else if(t[o.horizontal]>r/2){const s=Math.min(r,o.horizontal==="middle"?t.middle:o.horizontal===l.horizontal?t.right:t.left);e.maxWidth=Math.min(n,s),e.left=Math.max(0,s-e.maxWidth)}else e.left=Math.max(0,o.horizontal==="middle"?t.middle:o.horizontal===l.horizontal?t.left:t.right),e.maxWidth=Math.min(n,r-e.left)}var ot=Ce({name:"QMenu",inheritAttrs:!1,props:{...Ne,...ke,...Ee,...He,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:X},self:{type:String,validator:X},offset:{type:Array,validator:Ze},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Se,"click","escape-key"],setup(e,{slots:t,emit:a,attrs:o}){let l=null,c,n,f;const d=J(),{proxy:r}=d,{$q:s}=r,v=w(null),m=w(!1),i=b(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),h=Me(e,s),{registerTick:te,removeTick:P}=We(),{registerTimeout:L,removeTimeout:B}=qe(),{transition:ne,transitionStyle:oe}=Pe(e,m),{localScrollTarget:z,changeScrollEvent:le,unconfigureScrollTarget:ie}=Ue(e,K),{anchorEl:x,canShow:ae}=_e({showing:m}),{hide:O}=Le({showing:m,canShow:ae,handleShow:de,handleHide:fe,hideOnRouteChange:i,processOnMount:!0}),{showPortal:$,hidePortal:A,renderPortal:ue}=Be(d,v,me),k={anchorEl:x,innerRef:v,onClickOutside(u){if(e.persistent!==!0&&m.value===!0)return O(u),(u.type==="touchstart"||u.target.classList.contains("q-dialog__backdrop"))&&Ve(u),!0}},F=b(()=>G(e.anchor||(e.cover===!0?"center middle":"bottom start"),s.lang.rtl)),re=b(()=>e.cover===!0?F.value:G(e.self||"top start",s.lang.rtl)),se=b(()=>(e.square===!0?" q-menu--square":"")+(h.value===!0?" q-menu--dark q-dark":"")),ce=b(()=>e.autoClose===!0?{onClick:he}:{}),R=b(()=>m.value===!0&&e.persistent!==!0);y(R,u=>{u===!0?(ze(H),Ye(k)):(N(H),U(k))});function E(){Qe(()=>{let u=v.value;u&&u.contains(document.activeElement)!==!0&&(u=u.querySelector("[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function de(u){if(P(),B(),l=e.noRefocus===!1?document.activeElement:null,Oe(j),$(),K(),c=void 0,u!==void 0&&(e.touchPosition||e.contextMenu)){const S=$e(u);if(S.left!==void 0){const{top:ve,left:ge}=x.value.getBoundingClientRect();c={left:S.left-ge,top:S.top-ve}}}n===void 0&&(n=y(()=>s.screen.width+"|"+s.screen.height+"|"+e.self+"|"+e.anchor+"|"+s.lang.rtl,T)),e.noFocus!==!0&&document.activeElement.blur(),te(()=>{T(),e.noFocus!==!0&&E()}),L(()=>{s.platform.is.ios===!0&&(f=e.autoClose,v.value.click()),T(),$(!0),a("show",u)},e.transitionDuration)}function fe(u){P(),B(),A(),D(!0),l!==null&&(u===void 0||u.qClickOutside!==!0)&&(l.focus(),l=null),L(()=>{A(!0),a("hide",u)},e.transitionDuration)}function D(u){c=void 0,n!==void 0&&(n(),n=void 0),(u===!0||m.value===!0)&&(Ae(j),ie(),U(k),N(H)),u!==!0&&(l=null)}function K(){(x.value!==null||e.scrollTarget!==void 0)&&(z.value=Fe(x.value,e.scrollTarget),le(z.value,T))}function he(u){f!==!0?(Re(r,u),a("click",u)):f=!1}function j(u){R.value===!0&&e.noFocus!==!0&&De(v.value,u.target)!==!0&&E()}function H(u){a("escape-key"),O(u)}function T(){const u=v.value;u===null||x.value===null||Je({el:u,offset:e.offset,anchorEl:x.value,anchorOrigin:F.value,selfOrigin:re.value,absoluteOffset:c,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function me(){return _(je,{name:ne.value,appear:!0},()=>m.value===!0?_("div",{...o,ref:v,tabindex:-1,class:["q-menu q-position-engine scroll"+se.value,o.class],style:[o.style,oe.value],...ce.value},Ke(t.default)):null)}return q(D),Object.assign(r,{focus:E,updatePosition:T}),ue}});export{ot as Q,Ze as a,Ue as b,_e as c,Ye as d,G as p,U as r,Je as s,Ne as u,X as v};
