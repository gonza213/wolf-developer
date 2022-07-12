import{p as Ne,aF as Ke,aG as st,aH as dt,aI as ft,a1 as Ot,aJ as Ft,a2 as Bt,aK as Et,m as S,a7 as Rt,av as Lt,y as Qe,h as y,v as Be,aL as Ht,a0 as ue,t as Pt,r as B,w as ge,n as G,aM as Tt,aN as Dt,ay as $t,az as Nt,P as vt,aO as Kt,aP as Qt,aQ as ot,aR as qe,aS as jt,aT as Ut,aU as Wt,X as De,aV as Xt,Y as Se,aW as it,ak as Yt,aw as Gt,x as Jt}from"./index.71b3f425.js";import{Q as Zt,a as el}from"./QItem.3de04644.js";import{Q as tl}from"./QItemLabel.766e1532.js";import{Q as ll}from"./QMenu.24e58f5c.js";var ul=Ne({name:"QField",inheritAttrs:!1,props:Ke,emits:st,setup(){return dt(ft())}});const nl={xs:8,sm:10,md:14,lg:20,xl:24};var al=Ne({name:"QChip",props:{...Ot,...Ft,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:r,emit:i}){const{proxy:{$q:V}}=Qe(),_=Bt(e,V),o=Et(e,nl),O=S(()=>e.selected===!0||e.icon!==void 0),g=S(()=>e.selected===!0?e.iconSelected||V.iconSet.chip.selected:e.icon),b=S(()=>e.iconRemove||V.iconSet.chip.remove),A=S(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),s=S(()=>{const C=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(C?` text-${C} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(A.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(_.value===!0?" q-chip--dark q-dark":"")}),x=S(()=>e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0});function z(C){C.keyCode===13&&h(C)}function h(C){e.disable||(i("update:selected",!e.selected),i("click",C))}function P(C){(C.keyCode===void 0||C.keyCode===13)&&(ue(C),e.disable===!1&&(i("update:modelValue",!1),i("remove")))}function E(){const C=[];A.value===!0&&C.push(y("div",{class:"q-focus-helper"})),O.value===!0&&C.push(y(Be,{class:"q-chip__icon q-chip__icon--left",name:g.value}));const Q=e.label!==void 0?[y("div",{class:"ellipsis"},[e.label])]:void 0;return C.push(y("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},Ht(r.default,Q))),e.iconRight&&C.push(y(Be,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&C.push(y(Be,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:b.value,...x.value,onClick:P,onKeyup:P})),C}return()=>{if(e.modelValue===!1)return;const C={class:s.value,style:o.value};return A.value===!0&&Object.assign(C,x.value,{onClick:h,onKeyup:z}),Rt("div",C,E(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Lt,e.ripple]])}}});let Ee=!1;{const e=document.createElement("div"),r=document.createElement("div");e.setAttribute("dir","rtl"),e.style.width="1px",e.style.height="1px",e.style.overflow="auto",r.style.width="1000px",r.style.height="1px",document.body.appendChild(e),e.appendChild(r),e.scrollLeft=-1e3,Ee=e.scrollLeft>=0,e.remove()}const K=1e3,ol=["start","center","end","start-force","center-force","end-force"],mt=Array.prototype.filter,il=window.getComputedStyle(document.body).overflowAnchor===void 0?Pt:function(e,r){e!==null&&(cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;const i=e.children||[];mt.call(i,_=>_.dataset&&_.dataset.qVsAnchor!==void 0).forEach(_=>{delete _.dataset.qVsAnchor});const V=i[r];V&&V.dataset&&(V.dataset.qVsAnchor="")}))};function he(e,r){return e+r}function $e(e,r,i,V,_,o,O,g){const b=e===window?document.scrollingElement||document.documentElement:e,A=_===!0?"offsetWidth":"offsetHeight",s={scrollStart:0,scrollViewSize:-O-g,scrollMaxSize:0,offsetStart:-O,offsetEnd:-g};if(_===!0?(e===window?(s.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,s.scrollViewSize+=document.documentElement.clientWidth):(s.scrollStart=b.scrollLeft,s.scrollViewSize+=b.clientWidth),s.scrollMaxSize=b.scrollWidth,o===!0&&(s.scrollStart=(Ee===!0?s.scrollMaxSize-s.scrollViewSize:0)-s.scrollStart)):(e===window?(s.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,s.scrollViewSize+=document.documentElement.clientHeight):(s.scrollStart=b.scrollTop,s.scrollViewSize+=b.clientHeight),s.scrollMaxSize=b.scrollHeight),i!==null)for(let x=i.previousElementSibling;x!==null;x=x.previousElementSibling)x.classList.contains("q-virtual-scroll--skip")===!1&&(s.offsetStart+=x[A]);if(V!==null)for(let x=V.nextElementSibling;x!==null;x=x.nextElementSibling)x.classList.contains("q-virtual-scroll--skip")===!1&&(s.offsetEnd+=x[A]);if(r!==e){const x=b.getBoundingClientRect(),z=r.getBoundingClientRect();_===!0?(s.offsetStart+=z.left-x.left,s.offsetEnd-=z.width):(s.offsetStart+=z.top-x.top,s.offsetEnd-=z.height),e!==window&&(s.offsetStart+=s.scrollStart),s.offsetEnd+=s.scrollMaxSize-s.offsetStart}return s}function rt(e,r,i,V){r==="end"&&(r=(e===window?document.body:e)[i===!0?"scrollWidth":"scrollHeight"]),e===window?i===!0?(V===!0&&(r=(Ee===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-r),window.scrollTo(r,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,r):i===!0?(V===!0&&(r=(Ee===!0?e.scrollWidth-e.offsetWidth:0)-r),e.scrollLeft=r):e.scrollTop=r}function ze(e,r,i,V){if(i>=V)return 0;const _=r.length,o=Math.floor(i/K),O=Math.floor((V-1)/K)+1;let g=e.slice(o,O).reduce(he,0);return i%K!==0&&(g-=r.slice(o*K,i).reduce(he,0)),V%K!==0&&V!==_&&(g-=r.slice(V,O*K).reduce(he,0)),g}const St={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},gl=Object.keys(St),rl={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...St};function cl({virtualScrollLength:e,getVirtualScrollTarget:r,getVirtualScrollEl:i,virtualScrollItemSizeComputed:V}){const _=Qe(),{props:o,emit:O,proxy:g}=_,{$q:b}=g;let A,s,x,z=[],h;const P=B(0),E=B(0),C=B({}),Q=B(null),D=B(null),W=B(null),F=B({from:0,to:0}),M=S(()=>o.tableColspan!==void 0?o.tableColspan:100);V===void 0&&(V=S(()=>o.virtualScrollItemSize));const X=S(()=>V.value+";"+o.virtualScrollHorizontal),ye=S(()=>X.value+";"+o.virtualScrollSliceRatioBefore+";"+o.virtualScrollSliceRatioAfter);ge(ye,()=>{Y()}),ge(X,ne);function ne(){Z(s,!0)}function be(n){Z(n===void 0?s:n)}function J(n,c){const f=r();if(f==null||f.nodeType===8)return;const q=$e(f,i(),Q.value,D.value,o.virtualScrollHorizontal,b.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd);x!==q.scrollViewSize&&Y(q.scrollViewSize),ae(f,q,Math.min(e.value-1,Math.max(0,parseInt(n,10)||0)),0,ol.indexOf(c)>-1?c:s>-1&&n>s?"end":"start")}function j(){const n=r();if(n==null||n.nodeType===8)return;const c=$e(n,i(),Q.value,D.value,o.virtualScrollHorizontal,b.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd),f=e.value-1,q=c.scrollMaxSize-c.offsetStart-c.offsetEnd-E.value;if(A===c.scrollStart)return;if(c.scrollMaxSize<=0){ae(n,c,0,0);return}x!==c.scrollViewSize&&Y(c.scrollViewSize),we(F.value.from);const R=Math.floor(c.scrollMaxSize-Math.max(c.scrollViewSize,c.offsetEnd)-Math.min(h[f],c.scrollViewSize/2));if(R>0&&Math.ceil(c.scrollStart)>=R){ae(n,c,f,c.scrollMaxSize-c.offsetEnd-z.reduce(he,0));return}let w=0,v=c.scrollStart-c.offsetStart,H=v;if(v<=q&&v+c.scrollViewSize>=P.value)v-=P.value,w=F.value.from,H=v;else for(let m=0;v>=z[m]&&w<f;m++)v-=z[m],w+=K;for(;v>0&&w<f;)v-=h[w],v>-c.scrollViewSize?(w++,H=v):H=h[w]+v;ae(n,c,w,H)}function ae(n,c,f,q,R){const w=typeof R=="string"&&R.indexOf("-force")>-1,v=w===!0?R.replace("-force",""):R,H=v!==void 0?v:"start";let m=Math.max(0,f-C.value[H]),$=m+C.value.total;$>e.value&&($=e.value,m=Math.max(0,$-C.value.total)),A=c.scrollStart;const ee=m!==F.value.from||$!==F.value.to;if(ee===!1&&v===void 0){Ce(f);return}const{activeElement:ke}=document,U=W.value;ee===!0&&U!==null&&U!==ke&&U.contains(ke)===!0&&(U.addEventListener("focusout",Ve),setTimeout(()=>{U!==null&&U.removeEventListener("focusout",Ve)})),il(U,f-m);const Ie=v!==void 0?h.slice(m,f).reduce(he,0):0;if(ee===!0){const ie=$>=F.value.from&&m<=F.value.to?F.value.to:$;F.value={from:m,to:ie},P.value=ze(z,h,0,m),E.value=ze(z,h,$,e.value),requestAnimationFrame(()=>{F.value.to!==$&&A===c.scrollStart&&(F.value={from:F.value.from,to:$},E.value=ze(z,h,$,e.value))})}requestAnimationFrame(()=>{if(A!==c.scrollStart)return;ee===!0&&we(m);const ie=h.slice(m,f).reduce(he,0),re=ie+c.offsetStart+P.value,_e=re+h[f];let xe=re+q;if(v!==void 0){const N=ie-Ie,L=c.scrollStart+N;xe=w!==!0&&L<re&&_e<L+c.scrollViewSize?L:v==="end"?_e-c.scrollViewSize:re-(v==="start"?0:Math.round((c.scrollViewSize-h[f])/2))}A=xe,rt(n,xe,o.virtualScrollHorizontal,b.lang.rtl),Ce(f)})}function we(n){const c=W.value;if(c){const f=mt.call(c.children,m=>m.classList&&m.classList.contains("q-virtual-scroll--skip")===!1),q=f.length,R=o.virtualScrollHorizontal===!0?m=>m.getBoundingClientRect().width:m=>m.offsetHeight;let w=n,v,H;for(let m=0;m<q;){for(v=R(f[m]),m++;m<q&&f[m].classList.contains("q-virtual-scroll--with-prev")===!0;)v+=R(f[m]),m++;H=v-h[w],H!==0&&(h[w]+=H,z[Math.floor(w/K)]+=H),w++}}}function Ve(){W.value!==null&&W.value!==void 0&&W.value.focus()}function Z(n,c){const f=1*V.value;(c===!0||Array.isArray(h)===!1)&&(h=[]);const q=h.length;h.length=e.value;for(let w=e.value-1;w>=q;w--)h[w]=f;const R=Math.floor((e.value-1)/K);z=[];for(let w=0;w<=R;w++){let v=0;const H=Math.min((w+1)*K,e.value);for(let m=w*K;m<H;m++)v+=h[m];z.push(v)}s=-1,A=void 0,P.value=ze(z,h,0,F.value.from),E.value=ze(z,h,F.value.to,e.value),n>=0?(we(F.value.from),G(()=>{J(n)})):oe()}function Y(n){if(n===void 0&&typeof window!="undefined"){const v=r();v!=null&&v.nodeType!==8&&(n=$e(v,i(),Q.value,D.value,o.virtualScrollHorizontal,b.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd).scrollViewSize)}x=n;const c=parseFloat(o.virtualScrollSliceRatioBefore)||0,f=parseFloat(o.virtualScrollSliceRatioAfter)||0,q=1+c+f,R=n===void 0||n<=0?1:Math.ceil(n/V.value),w=Math.max(1,R,Math.ceil((o.virtualScrollSliceSize>0?o.virtualScrollSliceSize:10)/q));C.value={total:Math.ceil(w*q),start:Math.ceil(w*c),center:Math.ceil(w*(.5+c)),end:Math.ceil(w*(1+c)),view:R}}function Ae(n,c){const f=o.virtualScrollHorizontal===!0?"width":"height",q={["--q-virtual-scroll-item-"+f]:V.value+"px"};return[n==="tbody"?y(n,{class:"q-virtual-scroll__padding",key:"before",ref:Q},[y("tr",[y("td",{style:{[f]:`${P.value}px`,...q},colspan:M.value})])]):y(n,{class:"q-virtual-scroll__padding",key:"before",ref:Q,style:{[f]:`${P.value}px`,...q}}),y(n,{class:"q-virtual-scroll__content",key:"content",ref:W,tabindex:-1},c.flat()),n==="tbody"?y(n,{class:"q-virtual-scroll__padding",key:"after",ref:D},[y("tr",[y("td",{style:{[f]:`${E.value}px`,...q},colspan:M.value})])]):y(n,{class:"q-virtual-scroll__padding",key:"after",ref:D,style:{[f]:`${E.value}px`,...q}})]}function Ce(n){s!==n&&(o.onVirtualScroll!==void 0&&O("virtual-scroll",{index:n,from:F.value.from,to:F.value.to-1,direction:n<s?"decrease":"increase",ref:g}),s=n)}Y();const oe=Tt(j,b.platform.is.ios===!0?120:35);Dt(()=>{Y()});let a=!1;return $t(()=>{a=!0}),Nt(()=>{if(a!==!0)return;const n=r();A!==void 0&&n!==void 0&&n!==null&&n.nodeType!==8?rt(n,A,o.virtualScrollHorizontal,b.lang.rtl):J(s)}),vt(()=>{oe.cancel()}),Object.assign(g,{scrollTo:J,reset:ne,refresh:be}),{virtualScrollSliceRange:F,virtualScrollSliceSizeComputed:C,setVirtualScrollSize:Y,onVirtualScrollEvt:oe,localResetVirtualScroll:Z,padVirtualScroll:Ae,scrollTo:J,reset:ne,refresh:be}}const ct=e=>["add","add-unique","toggle"].includes(e),sl=".*+?^${}()|[]\\",dl=Object.keys(Ke);var hl=Ne({name:"QSelect",inheritAttrs:!1,props:{...rl,...Kt,...Ke,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:ct},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...st,"add","remove","input-value","new-value","keyup","keypress","keydown","filter-abort"],setup(e,{slots:r,emit:i}){const{proxy:V}=Qe(),{$q:_}=V,o=B(!1),O=B(!1),g=B(-1),b=B(""),A=B(!1),s=B(!1);let x,z,h,P,E,C,Q,D,W;const F=B(null),M=B(null),X=B(null),ye=B(null),ne=B(null),be=Qt(e),J=Xt(tt),j=S(()=>Array.isArray(e.options)?e.options.length:0),ae=S(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:we,virtualScrollSliceSizeComputed:Ve,localResetVirtualScroll:Z,padVirtualScroll:Y,onVirtualScrollEvt:Ae,scrollTo:Ce,setVirtualScrollSize:oe}=cl({virtualScrollLength:j,getVirtualScrollTarget:bt,getVirtualScrollEl:Ze,virtualScrollItemSizeComputed:ae}),a=ft(),n=S(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,u=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const l=e.mapOptions===!0&&z!==void 0?z:[],d=u.map(p=>yt(p,l));return e.modelValue===null&&t===!0?d.filter(p=>p!==null):d}return u}),c=S(()=>{const t={};return dl.forEach(u=>{const l=e[u];l!==void 0&&(t[u]=l)}),t}),f=S(()=>e.optionsDark===null?a.isDark.value:e.optionsDark),q=S(()=>ot(n.value)),R=S(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||n.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),w=S(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),v=S(()=>j.value===0),H=S(()=>n.value.map(t=>L.value(t)).join(", ")),m=S(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),$=S(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||n.value.some(m.value))),ee=S(()=>a.focused.value===!0?e.tabindex:-1),ke=S(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":o.value===!0?"true":"false","aria-owns":`${a.targetUid.value}_lb`,"aria-controls":`${a.targetUid.value}_lb`};return g.value>=0&&(t["aria-activedescendant"]=`${a.targetUid.value}_${g.value}`),t}),U=S(()=>{const t={id:`${a.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"};return g.value>=0&&(t["aria-activedescendant"]=`${a.targetUid.value}_${g.value}`),t}),Ie=S(()=>n.value.map((t,u)=>({index:u,opt:t,html:m.value(t),selected:!0,removeAtIndex:ht,toggleOption:te,tabindex:ee.value}))),ie=S(()=>{if(j.value===0)return[];const{from:t,to:u}=we.value;return e.options.slice(t,u).map((l,d)=>{const p=ce.value(l)===!0,k=t+d,I={clickable:!0,active:!1,activeClass:xe.value,manualFocus:!0,focused:!1,disable:p,tabindex:-1,dense:e.optionsDense,dark:f.value,role:"option",id:`${a.targetUid.value}_${k}`,onClick:()=>{te(l)}};return p!==!0&&(He(l)===!0&&(I.active=!0),g.value===k&&(I.focused=!0),I["aria-selected"]=I.active===!0?"true":"false",_.platform.is.desktop===!0&&(I.onMousemove=()=>{o.value===!0&&se(k)})),{index:k,opt:l,html:m.value(l),label:L.value(l),selected:I.active,focused:I.focused,toggleOption:te,setOptionIndex:se,itemProps:I}})}),re=S(()=>e.dropdownIcon!==void 0?e.dropdownIcon:_.iconSet.arrow.dropdown),_e=S(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),xe=S(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),N=S(()=>Le(e.optionValue,"value")),L=S(()=>Le(e.optionLabel,"label")),ce=S(()=>Le(e.optionDisable,"disable")),Me=S(()=>n.value.map(t=>N.value(t))),gt=S(()=>{const t={onInput:tt,onChange:J,onKeydown:Je,onKeyup:Ye,onKeypress:Ge,onFocus:We,onClick(u){h===!0&&Se(u)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=J,t});ge(n,t=>{z=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&a.innerLoading.value!==!0&&(O.value!==!0&&o.value!==!0||q.value!==!0)&&(P!==!0&&me(),(O.value===!0||o.value===!0)&&de(""))},{immediate:!0}),ge(()=>e.fillInput,me),ge(o,Pe),ge(j,Mt);function je(t){return e.emitValue===!0?N.value(t):t}function Re(t){if(t>-1&&t<n.value.length)if(e.multiple===!0){const u=e.modelValue.slice();i("remove",{index:t,value:u.splice(t,1)[0]}),i("update:modelValue",u)}else i("update:modelValue",null)}function ht(t){Re(t),a.focus()}function Ue(t,u){const l=je(t);if(e.multiple!==!0){e.fillInput===!0&&pe(L.value(t),!0,!0),i("update:modelValue",l);return}if(n.value.length===0){i("add",{index:0,value:l}),i("update:modelValue",e.multiple===!0?[l]:l);return}if(u===!0&&He(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const d=e.modelValue.slice();i("add",{index:d.length,value:l}),d.push(l),i("update:modelValue",d)}function te(t,u){if(a.editable.value!==!0||t===void 0||ce.value(t)===!0)return;const l=N.value(t);if(e.multiple!==!0){u!==!0&&(pe(e.fillInput===!0?L.value(t):"",!0,!0),le()),M.value!==null&&M.value.focus(),(n.value.length===0||qe(N.value(n.value[0]),l)!==!0)&&i("update:modelValue",e.emitValue===!0?l:t);return}if((h!==!0||A.value===!0)&&a.focus(),We(),n.value.length===0){const k=e.emitValue===!0?l:t;i("add",{index:0,value:k}),i("update:modelValue",e.multiple===!0?[k]:k);return}const d=e.modelValue.slice(),p=Me.value.findIndex(k=>qe(k,l));if(p>-1)i("remove",{index:p,value:d.splice(p,1)[0]});else{if(e.maxValues!==void 0&&d.length>=e.maxValues)return;const k=e.emitValue===!0?l:t;i("add",{index:d.length,value:k}),d.push(k)}i("update:modelValue",d)}function se(t){if(_.platform.is.desktop!==!0)return;const u=t>-1&&t<j.value?t:-1;g.value!==u&&(g.value=u)}function Oe(t=1,u){if(o.value===!0){let l=g.value;do l=it(l+t,-1,j.value-1);while(l!==-1&&l!==g.value&&ce.value(e.options[l])===!0);g.value!==l&&(se(l),Ce(l),u!==!0&&e.useInput===!0&&e.fillInput===!0&&Fe(l>=0?L.value(e.options[l]):C))}}function yt(t,u){const l=d=>qe(N.value(d),t);return e.options.find(l)||u.find(l)||t}function Le(t,u){const l=t!==void 0?t:u;return typeof l=="function"?l:d=>d!==null&&typeof d=="object"&&l in d?d[l]:d}function He(t){const u=N.value(t);return Me.value.find(l=>qe(l,u))!==void 0}function We(t){e.useInput===!0&&M.value!==null&&(t===void 0||M.value===t.target&&t.target.value===H.value)&&M.value.select()}function Xe(t){Yt(t,27)===!0&&o.value===!0&&(Se(t),le(),me()),i("keyup",t)}function Ye(t){const{value:u}=t.target;if(t.keyCode!==void 0){Xe(t);return}if(t.target.value="",clearTimeout(x),me(),typeof u=="string"&&u.length>0){const l=u.toLocaleLowerCase(),d=k=>{const I=e.options.find(T=>k.value(T).toLocaleLowerCase()===l);return I===void 0?!1:(n.value.indexOf(I)===-1?te(I):le(),!0)},p=k=>{d(N)!==!0&&(d(L)===!0||k===!0||de(u,!0,()=>p(!0)))};p()}else a.clearValue(t)}function Ge(t){i("keypress",t)}function Je(t){if(i("keydown",t),Gt(t)===!0)return;const u=b.value.length>0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),l=t.shiftKey!==!0&&e.multiple!==!0&&(g.value>-1||u===!0);if(t.keyCode===27){De(t);return}if(t.keyCode===9&&l===!1){fe();return}if(t.target===void 0||t.target.id!==a.targetUid.value)return;if(t.keyCode===40&&a.innerLoading.value!==!0&&o.value===!1){ue(t),ve();return}if(t.keyCode===8&&e.hideSelected!==!0&&b.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?Re(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&i("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof b.value!="string"||b.value.length===0)&&(ue(t),g.value=-1,Oe(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&Ve.value!==void 0&&(ue(t),g.value=Math.max(-1,Math.min(j.value,g.value+(t.keyCode===33?-1:1)*Ve.value.view)),Oe(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(ue(t),Oe(t.keyCode===38?-1:1,e.multiple));const d=j.value;if((D===void 0||W<Date.now())&&(D=""),d>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===t.ctrlKey&&(t.keyCode!==32||D.length>0)){o.value!==!0&&ve(t);const p=t.key.toLocaleLowerCase(),k=D.length===1&&D[0]===p;W=Date.now()+1500,k===!1&&(ue(t),D+=p);const I=new RegExp("^"+D.split("").map(Te=>sl.indexOf(Te)>-1?"\\"+Te:Te).join(".*"),"i");let T=g.value;if(k===!0||T<0||I.test(L.value(e.options[T]))!==!0)do T=it(T+1,-1,d-1);while(T!==g.value&&(ce.value(e.options[T])===!0||I.test(L.value(e.options[T]))!==!0));g.value!==T&&G(()=>{se(T),Ce(T),T>=0&&e.useInput===!0&&e.fillInput===!0&&Fe(L.value(e.options[T]))});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||D!=="")&&(t.keyCode!==9||l===!1))){if(t.keyCode!==9&&ue(t),g.value>-1&&g.value<d){te(e.options[g.value]);return}if(u===!0){const p=(k,I)=>{if(I){if(ct(I)!==!0)return}else I=e.newValueMode;if(k==null)return;pe("",e.multiple!==!0,!0),(I==="toggle"?te:Ue)(k,I==="add-unique"),e.multiple!==!0&&(M.value!==null&&M.value.focus(),le())};if(e.onNewValue!==void 0?i("new-value",b.value,p):p(b.value),e.multiple!==!0)return}o.value===!0?fe():a.innerLoading.value!==!0&&ve()}}function Ze(){return h===!0?ne.value:X.value!==null&&X.value.__qPortalInnerRef.value!==null?X.value.__qPortalInnerRef.value:void 0}function bt(){return Ze()}function wt(){return e.hideSelected===!0?[]:r["selected-item"]!==void 0?Ie.value.map(t=>r["selected-item"](t)).slice():r.selected!==void 0?[].concat(r.selected()):e.useChips===!0?Ie.value.map((t,u)=>y(al,{key:"option-"+u,removable:a.editable.value===!0&&ce.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:ee.value,onRemove(){t.removeAtIndex(u)}},()=>y("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:L.value(t.opt)}))):[y("span",{[$.value===!0?"innerHTML":"textContent"]:e.displayValue!==void 0?e.displayValue:H.value})]}function et(){if(v.value===!0)return r["no-option"]!==void 0?r["no-option"]({inputValue:b.value}):void 0;const t=r.option!==void 0?r.option:l=>y(el,{key:l.index,...l.itemProps},()=>y(Zt,()=>y(tl,()=>y("span",{[l.html===!0?"innerHTML":"textContent"]:l.label}))));let u=Y("div",ie.value.map(t));return r["before-options"]!==void 0&&(u=r["before-options"]().concat(u)),Jt(r["after-options"],u)}function Vt(t,u){const l=u===!0?{...ke.value,...a.splitAttrs.attributes.value}:void 0,d={ref:u===!0?M:void 0,key:"i_t",class:R.value,style:e.inputStyle,value:b.value!==void 0?b.value:"",type:"search",...l,id:u===!0?a.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t!==!0&&e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...gt.value};return t!==!0&&h===!0&&(Array.isArray(d.class)===!0?d.class=[...d.class,"no-pointer-events"]:d.class+=" no-pointer-events"),y("input",d)}function tt(t){clearTimeout(x),!(t&&t.target&&t.target.qComposing===!0)&&(Fe(t.target.value||""),P=!0,C=b.value,a.focused.value!==!0&&(h!==!0||A.value===!0)&&a.focus(),e.onFilter!==void 0&&(x=setTimeout(()=>{de(b.value)},e.inputDebounce)))}function Fe(t){b.value!==t&&(b.value=t,i("input-value",t))}function pe(t,u,l){P=l!==!0,e.useInput===!0&&(Fe(t),(u===!0||l!==!0)&&(C=t),u!==!0&&de(t))}function de(t,u,l){if(e.onFilter===void 0||u!==!0&&a.focused.value!==!0)return;a.innerLoading.value===!0?i("filter-abort"):(a.innerLoading.value=!0,s.value=!0),t!==""&&e.multiple!==!0&&n.value.length>0&&P!==!0&&t===L.value(n.value[0])&&(t="");const d=setTimeout(()=>{o.value===!0&&(o.value=!1)},10);clearTimeout(E),E=d,i("filter",t,(p,k)=>{(u===!0||a.focused.value===!0)&&E===d&&(clearTimeout(E),typeof p=="function"&&p(),s.value=!1,G(()=>{a.innerLoading.value=!1,a.editable.value===!0&&(u===!0?o.value===!0&&le():o.value===!0?Pe(!0):o.value=!0),typeof k=="function"&&G(()=>{k(V)}),typeof l=="function"&&G(()=>{l(V)})}))},()=>{a.focused.value===!0&&E===d&&(clearTimeout(E),a.innerLoading.value=!1,s.value=!1),o.value===!0&&(o.value=!1)})}function Ct(){return y(ll,{ref:X,class:w.value,style:e.popupContentStyle,modelValue:o.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&v.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:f.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:_e.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...U.value,onScrollPassive:Ae,onBeforeShow:ut,onBeforeHide:kt,onShow:xt},et)}function kt(t){nt(t),fe()}function xt(){oe()}function pt(t){Se(t),M.value!==null&&M.value.focus(),A.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function qt(t){Se(t),G(()=>{A.value=!1})}function zt(){const t=[y(ul,{class:`col-auto ${a.fieldClass.value}`,...c.value,for:a.targetUid.value,dark:f.value,square:!0,loading:s.value,itemAligned:!1,filled:!0,stackLabel:b.value.length>0,...a.splitAttrs.listeners.value,onFocus:pt,onBlur:qt},{...r,rawControl:()=>a.getControl(!0),before:void 0,after:void 0})];return o.value===!0&&t.push(y("div",{ref:ne,class:w.value+" scroll",style:e.popupContentStyle,...U.value,onClick:De,onScrollPassive:Ae},et())),y(Wt,{ref:ye,modelValue:O.value,position:e.useInput===!0?"top":void 0,transitionShow:Q,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:ut,onBeforeHide:At,onHide:It,onShow:_t},()=>y("div",{class:"q-select__dialog"+(f.value===!0?" q-select__dialog--dark q-dark":"")+(A.value===!0?" q-select__dialog--focused":"")},t))}function At(t){nt(t),ye.value!==null&&ye.value.__updateRefocusTarget(a.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),a.focused.value=!1}function It(t){le(),a.focused.value===!1&&i("blur",t),me()}function _t(){const t=document.activeElement;(t===null||t.id!==a.targetUid.value)&&M.value!==null&&M.value!==t&&M.value.focus(),oe()}function fe(){O.value!==!0&&(g.value=-1,o.value===!0&&(o.value=!1),a.focused.value===!1&&(clearTimeout(E),E=void 0,a.innerLoading.value===!0&&(i("filter-abort"),a.innerLoading.value=!1,s.value=!1)))}function ve(t){a.editable.value===!0&&(h===!0?(a.onControlFocusin(t),O.value=!0,G(()=>{a.focus()})):a.focus(),e.onFilter!==void 0?de(b.value):(v.value!==!0||r["no-option"]!==void 0)&&(o.value=!0))}function le(){O.value=!1,fe()}function me(){e.useInput===!0&&pe(e.multiple!==!0&&e.fillInput===!0&&n.value.length>0&&L.value(n.value[0])||"",!0,!0)}function Pe(t){let u=-1;if(t===!0){if(n.value.length>0){const l=N.value(n.value[0]);u=e.options.findIndex(d=>qe(N.value(d),l))}Z(u)}se(u)}function Mt(t,u){o.value===!0&&a.innerLoading.value===!1&&(Z(-1,!0),G(()=>{o.value===!0&&a.innerLoading.value===!1&&(t>u?Z():Pe(!0))}))}function lt(){O.value===!1&&X.value!==null&&X.value.updatePosition()}function ut(t){t!==void 0&&Se(t),i("popup-show",t),a.hasPopupOpen=!0,a.onControlFocusin(t)}function nt(t){t!==void 0&&Se(t),i("popup-hide",t),a.hasPopupOpen=!1,a.onControlFocusout(t)}function at(){h=_.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?r["no-option"]!==void 0||e.onFilter!==void 0||v.value===!1:!0),Q=_.platform.is.ios===!0&&h===!0&&e.useInput===!0?"fade":e.transitionShow}return jt(at),Ut(lt),at(),vt(()=>{clearTimeout(x)}),Object.assign(V,{showPopup:ve,hidePopup:le,removeAtIndex:Re,add:Ue,toggleOption:te,getOptionIndex:()=>g.value,setOptionIndex:se,moveOptionSelection:Oe,filter:de,updateMenuPosition:lt,updateInputValue:pe,isOptionSelected:He,getEmittingOptionValue:je,isOptionDisabled:(...t)=>ce.value.apply(null,t)===!0,getOptionValue:(...t)=>N.value.apply(null,t),getOptionLabel:(...t)=>L.value.apply(null,t)}),Object.assign(a,{innerValue:n,fieldClass:S(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:F,targetRef:M,hasValue:q,showPopup:ve,floatingLabel:S(()=>(e.hideSelected===!0?b.value.length>0:q.value===!0)||ot(e.displayValue)),getControlChild:()=>{if(a.editable.value!==!1&&(O.value===!0||v.value!==!0||r["no-option"]!==void 0))return h===!0?zt():Ct();a.hasPopupOpen===!0&&(a.hasPopupOpen=!1)},controlEvents:{onFocusin(t){a.onControlFocusin(t)},onFocusout(t){a.onControlFocusout(t,()=>{me(),fe()})},onClick(t){if(De(t),h!==!0&&o.value===!0){fe(),M.value!==null&&M.value.focus();return}ve(t)}},getControl:t=>{const u=wt(),l=t===!0||O.value!==!0||h!==!0;if(e.useInput===!0)u.push(Vt(t,l));else if(a.editable.value===!0){const p=l===!0?ke.value:void 0;u.push(y("input",{ref:l===!0?M:void 0,key:"d_t",class:"q-select__focus-target",id:l===!0?a.targetUid.value:void 0,readonly:!0,...p,onKeydown:Je,onKeyup:Xe,onKeypress:Ge})),l===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length>0&&u.push(y("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,onKeyup:Ye}))}if(be.value!==void 0&&e.disable!==!0&&Me.value.length>0){const p=Me.value.map(k=>y("option",{value:k,selected:!0}));u.push(y("select",{class:"hidden",name:be.value,multiple:e.multiple},p))}const d=e.useInput===!0||l!==!0?void 0:a.splitAttrs.attributes.value;return y("div",{class:"q-field__native row items-center",...d},u)},getInnerAppend:()=>e.loading!==!0&&s.value!==!0&&e.hideDropdownIcon!==!0?[y(Be,{class:"q-select__dropdown-icon"+(o.value===!0?" rotate-180":""),name:re.value})]:null}),dt(a)}});export{hl as Q,cl as a,gl as c,Ee as r,rl as u};
