import{m,ah as p,ai as C,l as i,h as r,u as k,v as q,bg as _,bh as y,an as S,C as x}from"./index.b17a3351.js";var $=m({name:"QBreadcrumbsEl",props:{...p,label:String,icon:String,tag:{type:String,default:"span"}},setup(e,{slots:l}){const{linkTag:o,linkProps:c,linkClass:d,hasRouterLink:b,navigateToRouterLink:n}=C(),u=i(()=>{const t={class:"q-breadcrumbs__el q-link flex inline items-center relative-position "+(e.disable!==!0?"q-link--focusable"+d.value:"q-breadcrumbs__el--disable"),...c.value};return b.value===!0&&(t.onClick=n),t}),s=i(()=>"q-breadcrumbs__el-icon"+(e.label!==void 0?" q-breadcrumbs__el-icon--with-label":""));return()=>{const t=[];return e.icon!==void 0&&t.push(r(k,{class:s.value,name:e.icon})),e.label!==void 0&&t.push(e.label),r(o.value,{...u.value},q(l.default,t))}}});const Q=[void 0,!0];var E=m({name:"QBreadcrumbs",props:{..._,separator:{type:String,default:"/"},separatorColor:String,activeColor:{type:String,default:"primary"},gutter:{type:String,validator:e=>["none","xs","sm","md","lg","xl"].includes(e),default:"sm"}},setup(e,{slots:l}){const o=y(e),c=i(()=>`flex items-center ${o.value}${e.gutter==="none"?"":` q-gutter-${e.gutter}`}`),d=i(()=>e.separatorColor?` text-${e.separatorColor}`:""),b=i(()=>` text-${e.activeColor}`);return()=>{const n=S(x(l.default));if(n.length===0)return;let u=1;const s=[],t=n.filter(a=>a.type!==void 0&&a.type.name==="QBreadcrumbsEl").length,g=l.separator!==void 0?l.separator:()=>e.separator;return n.forEach(a=>{if(a.type!==void 0&&a.type.name==="QBreadcrumbsEl"){const v=u<t,f=a.props!==null&&Q.includes(a.props.disable),h=(v===!0?"":" q-breadcrumbs--last")+(f!==!0&&v===!0?b.value:"");u++,s.push(r("div",{class:`flex items-center${h}`},[a])),v===!0&&s.push(r("div",{class:"q-breadcrumbs__separator"+d.value},g()))}else s.push(a)}),r("div",{class:"q-breadcrumbs"},[r("div",{class:c.value},s)])}}});export{$ as Q,E as a};
