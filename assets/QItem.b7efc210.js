import{m as f,l as u,h as o,C as E,a0 as R,ah as S,a1 as I,ai as K,r as m,x as P,aj as Q,$,P as j}from"./index.b17a3351.js";var D=f({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:s}){const n=u(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>o("div",{class:n.value},E(s.default))}}),T=f({name:"QItem",props:{...R,...S,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:s,emit:n}){const{proxy:{$q:r}}=P(),b=I(e,r),{hasRouterLink:k,hasLink:c,linkProps:q,linkClass:h,linkTag:y,navigateToRouterLink:g}=K(),l=m(null),i=m(null),v=u(()=>e.clickable===!0||c.value===!0||e.tag==="label"),a=u(()=>e.disable!==!0&&v.value===!0),_=u(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(b.value===!0?" q-item--dark":"")+(c.value===!0&&e.active===null?h.value:e.active===!0?`${e.activeClass!==void 0?` ${e.activeClass}`:""} q-item--active`:"")+(e.disable===!0?" disabled":"")+(a.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),B=u(()=>{if(e.insetLevel===void 0)return null;const t=r.lang.rtl===!0?"Right":"Left";return{["padding"+t]:16+e.insetLevel*56+"px"}});function C(t){a.value===!0&&(i.value!==null&&(t.qKeyEvent!==!0&&document.activeElement===l.value?i.value.focus():document.activeElement===i.value&&l.value.focus()),k.value===!0&&g(t),n("click",t))}function L(t){if(a.value===!0&&Q(t,13)===!0){$(t),t.qKeyEvent=!0;const d=new MouseEvent("click",t);d.qKeyEvent=!0,l.value.dispatchEvent(d)}n("keyup",t)}function x(){const t=j(s.default,[]);return a.value===!0&&t.unshift(o("div",{class:"q-focus-helper",tabindex:-1,ref:i})),t}return()=>{const t={ref:l,class:_.value,style:B.value,onClick:C,onKeyup:L};return a.value===!0?(t.tabindex=e.tabindex||"0",Object.assign(t,q.value)):v.value===!0&&(t["aria-disabled"]="true"),o(y.value,t,x())}}});export{D as Q,T as a};
