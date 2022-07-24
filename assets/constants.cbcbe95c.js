import{m as G,y as oe,aZ as ne,z as ie,r as z,l as T,ax as le,a2 as re,a_ as ue,A as se,b6 as de,w as N,O as _,Z as I,U as W,aa as ce,h as Z,al as fe,x as ve,C as he,$ as me,p as ge,bo as pe,bp as ye}from"./index.6a8c3e3a.js";import{u as be,v as $,a as Se,p as K,b as we,c as Te,r as V,s as Fe,d as Pe}from"./QMenu.f1ae3058.js";import{c as X}from"./selection.dca9b548.js";var ze=G({name:"QTooltip",inheritAttrs:!1,props:{...be,...oe,...ne,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:$},self:{type:String,default:"top middle",validator:$},offset:{type:Array,default:()=>[14,14],validator:Se},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...ie],setup(e,{slots:y,emit:n,attrs:g}){let u,d;const F=ve(),{proxy:{$q:c}}=F,b=z(null),v=z(!1),L=T(()=>K(e.anchor,c.lang.rtl)),M=T(()=>K(e.self,c.lang.rtl)),k=T(()=>e.persistent!==!0),{registerTick:A,removeTick:t}=le(),{registerTimeout:i,removeTimeout:f}=re(),{transition:o,transitionStyle:r}=ue(e,v),{localScrollTarget:O,changeScrollEvent:R,unconfigureScrollTarget:H}=we(e,B),{anchorEl:s,canShow:P,anchorEvents:p}=Te({showing:v,configureAnchorEl:ee}),{show:Q,hide:E}=se({showing:v,canShow:P,handleShow:x,handleHide:q,hideOnRouteChange:k,processOnMount:!0});Object.assign(p,{delayShow:J,delayHide:Y});const{showPortal:U,hidePortal:a,renderPortal:S}=de(F,b,ae);if(c.platform.is.mobile===!0){const l={anchorEl:s,innerRef:b,onClickOutside(w){return E(w),w.target.classList.contains("q-dialog__backdrop")&&me(w),!0}},j=T(()=>e.modelValue===null&&e.persistent!==!0&&v.value===!0);N(j,w=>{(w===!0?Pe:V)(l)}),_(()=>{V(l)})}function x(l){t(),f(),U(),A(()=>{d=new MutationObserver(()=>C()),d.observe(b.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),C(),B()}),u===void 0&&(u=N(()=>c.screen.width+"|"+c.screen.height+"|"+e.self+"|"+e.anchor+"|"+c.lang.rtl,C)),i(()=>{U(!0),n("show",l)},e.transitionDuration)}function q(l){t(),f(),a(),h(),i(()=>{a(!0),n("hide",l)},e.transitionDuration)}function h(){d!==void 0&&(d.disconnect(),d=void 0),u!==void 0&&(u(),u=void 0),H(),I(p,"tooltipTemp")}function C(){const l=b.value;s.value===null||!l||Fe({el:l,offset:e.offset,anchorEl:s.value,anchorOrigin:L.value,selfOrigin:M.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function J(l){if(c.platform.is.mobile===!0){X(),document.body.classList.add("non-selectable");const j=s.value,w=["touchmove","touchcancel","touchend","click"].map(D=>[j,D,"delayHide","passiveCapture"]);W(p,"tooltipTemp",w)}i(()=>{Q(l)},e.delay)}function Y(l){f(),c.platform.is.mobile===!0&&(I(p,"tooltipTemp"),X(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),i(()=>{E(l)},e.hideDelay)}function ee(){if(e.noParentEvent===!0||s.value===null)return;const l=c.platform.is.mobile===!0?[[s.value,"touchstart","delayShow","passive"]]:[[s.value,"mouseenter","delayShow","passive"],[s.value,"mouseleave","delayHide","passive"]];W(p,"anchor",l)}function B(){if(s.value!==null||e.scrollTarget!==void 0){O.value=ce(s.value,e.scrollTarget);const l=e.noParentEvent===!0?C:E;R(O.value,l)}}function te(){return v.value===!0?Z("div",{...g,ref:b,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",g.class],style:[g.style,r.value],role:"complementary"},he(y.default)):null}function ae(){return Z(fe,{name:o.value,appear:!0},te)}return _(h),Object.assign(F.proxy,{updatePosition:C}),S}}),ke=G({name:"QUploaderAddTrigger",setup(){return ge(pe,()=>{console.error("QUploaderAddTrigger needs to be child of QUploader")})}});function m(e){return typeof e=="function"?e:()=>e}const Ee={url:[Function,String],method:{type:[Function,String],default:"POST"},fieldName:{type:[Function,String],default:()=>e=>e.name},headers:[Function,Array],formFields:[Function,Array],withCredentials:[Function,Boolean],sendRaw:[Function,Boolean],batch:[Function,Boolean],factory:Function},xe=["factory-failed","uploaded","failed","uploading"];function Ce({props:e,emit:y,helpers:n}){const g=z([]),u=z([]),d=z(0),F=T(()=>({url:m(e.url),method:m(e.method),headers:m(e.headers),formFields:m(e.formFields),fieldName:m(e.fieldName),withCredentials:m(e.withCredentials),sendRaw:m(e.sendRaw),batch:m(e.batch)})),c=T(()=>d.value>0),b=T(()=>u.value.length>0);let v;function L(){g.value.forEach(t=>{t.abort()}),u.value.length>0&&(v=!0)}function M(){const t=n.queuedFiles.value.slice(0);n.queuedFiles.value=[],F.value.batch(t)?k(t):t.forEach(i=>{k([i])})}function k(t){if(d.value++,typeof e.factory!="function"){A(t,{});return}const i=e.factory(t);if(!i)y("factory-failed",new Error("QUploader: factory() does not return properly"),t),d.value--;else if(typeof i.catch=="function"&&typeof i.then=="function"){u.value.push(i);const f=o=>{n.isAlive()===!0&&(u.value=u.value.filter(r=>r!==i),u.value.length===0&&(v=!1),n.queuedFiles.value=n.queuedFiles.value.concat(t),t.forEach(r=>{n.updateFileStatus(r,"failed")}),y("factory-failed",o,t),d.value--)};i.then(o=>{v===!0?f(new Error("Aborted")):n.isAlive()===!0&&(u.value=u.value.filter(r=>r!==i),A(t,o))}).catch(f)}else A(t,i||{})}function A(t,i){const f=new FormData,o=new XMLHttpRequest,r=(a,S)=>i[a]!==void 0?m(i[a])(S):F.value[a](S),O=r("url",t);if(!O){console.error("q-uploader: invalid or no URL specified"),d.value--;return}const R=r("formFields",t);R!==void 0&&R.forEach(a=>{f.append(a.name,a.value)});let H=0,s=0,P=0,p=0,Q;o.upload.addEventListener("progress",a=>{if(Q===!0)return;const S=Math.min(p,a.loaded);n.uploadedSize.value+=S-P,P=S;let x=P-s;for(let q=H;x>0&&q<t.length;q++){const h=t[q];if(x>h.size)x-=h.size,H++,s+=h.size,n.updateFileStatus(h,"uploading",h.size);else{n.updateFileStatus(h,"uploading",x);return}}},!1),o.onreadystatechange=()=>{o.readyState<4||(o.status&&o.status<400?(n.uploadedFiles.value=n.uploadedFiles.value.concat(t),t.forEach(a=>{n.updateFileStatus(a,"uploaded")}),y("uploaded",{files:t,xhr:o})):(Q=!0,n.uploadedSize.value-=P,n.queuedFiles.value=n.queuedFiles.value.concat(t),t.forEach(a=>{n.updateFileStatus(a,"failed")}),y("failed",{files:t,xhr:o})),d.value--,g.value=g.value.filter(a=>a!==o))},o.open(r("method",t),O),r("withCredentials",t)===!0&&(o.withCredentials=!0);const E=r("headers",t);E!==void 0&&E.forEach(a=>{o.setRequestHeader(a.name,a.value)});const U=r("sendRaw",t);t.forEach(a=>{n.updateFileStatus(a,"uploading",0),U!==!0&&f.append(r("fieldName",a),a,a.name),a.xhr=o,a.__abort=()=>{o.abort()},p+=a.size}),y("uploading",{files:t,xhr:o}),g.value.push(o),U===!0?o.send(new Blob(t)):o.send(f)}return{isUploading:c,isBusy:b,abort:L,upload:M}}var Ae={name:"QUploader",props:Ee,emits:xe,injectPlugin:Ce},Re=ye(Ae);const He="https://api-mi-sitio.onrender.com";export{He as A,ze as Q,ke as a,Re as b};
