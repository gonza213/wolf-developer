import{m as w,l as d,h as l,C as B,bf as D,r as b,w as h,o as A,u as k,Q as s,x as V,X as x}from"./index.6a8c3e3a.js";import{Q as I}from"./QMenu.f1ae3058.js";var M=w({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:u}){const t=d(()=>{const r=["unelevated","outline","flat","rounded","push","stretch","glossy"].filter(a=>e[a]===!0).map(a=>`q-btn-group--${a}`).join(" ");return`q-btn-group row no-wrap${r.length>0?" "+r:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>l("div",{class:t.value},B(u.default))}}),O=w({name:"QBtnDropdown",props:{...D,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean},emits:["update:modelValue","click","before-show","show","before-hide","hide"],setup(e,{slots:u,emit:t}){const{proxy:r}=V(),a=b(e.modelValue),o=b(null),c=d(()=>{const n={"aria-expanded":a.value===!0?"true":"false","aria-haspopup":"true"};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(n["aria-disabled"]="true"),n}),m=d(()=>"q-btn-dropdown__arrow"+(a.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":""));h(()=>e.modelValue,n=>{o.value!==null&&o.value[n?"show":"hide"]()}),h(()=>e.split,i);function v(n){a.value=!0,t("before-show",n)}function g(n){t("show",n),t("update:modelValue",!0)}function C(n){a.value=!1,t("before-hide",n)}function q(n){t("hide",n),t("update:modelValue",!1)}function y(n){t("click",n)}function S(n){x(n),i(),t("click",n)}function Q(n){o.value!==null&&o.value.toggle(n)}function f(n){o.value!==null&&o.value.show(n)}function i(n){o.value!==null&&o.value.hide(n)}return Object.assign(r,{show:f,hide:i,toggle:Q}),A(()=>{e.modelValue===!0&&f()}),()=>{const n=[l(k,{class:m.value,name:e.dropdownIcon||r.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&n.push(l(I,{ref:o,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,onBeforeShow:v,onShow:g,onBeforeHide:C,onHide:q},u.default)),e.split===!1?l(s,{class:"q-btn-dropdown q-btn-dropdown--simple",...e,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,...c.value,onClick:y},()=>B(u.label,[]).concat(n)):l(M,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",outline:e.outline,flat:e.flat,rounded:e.rounded,push:e.push,unelevated:e.unelevated,glossy:e.glossy,stretch:e.stretch},()=>[l(s,{class:"q-btn-dropdown--current",...e,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,iconRight:e.iconRight,round:!1,onClick:S},u.label),l(s,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...c.value,disable:e.disable===!0||e.disableDropdown===!0,outline:e.outline,flat:e.flat,rounded:e.rounded,push:e.push,size:e.size,color:e.color,textColor:e.textColor,dense:e.dense,ripple:e.ripple},()=>n)])}}});export{O as Q};
