import{m as E,l as v,h as a,C as Q,x as ee,P as st,u as Oe,a0 as Fe,a1 as Le,r as N,w as A,aa as ut,ab as Re,aO as ct,o as dt,az as vt,ay as ft,O as gt,v as bt,ao as ge,bi as Te,bj as mt,n as Me,bk as St,bl as H,bm as fe,Q as Y,aA as yt}from"./index.a4028430.js";import{Q as ht}from"./QList.96b07bc2.js";import{u as wt,a as _t,c as Ve,Q as Pt}from"./QSelect.a21455d6.js";import{Q as qt}from"./QLinearProgress.b65aac72.js";import{u as Ct,a as kt,b as Rt}from"./use-fullscreen.dc750eba.js";var tl=E({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:l}){const o=ee(),f=v(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return a("td",{class:f.value},Q(l.default));const i=o.vnode.key,b=(e.props.colsMap!==void 0?e.props.colsMap[i]:null)||e.props.col;if(b===void 0)return;const{row:s}=e.props;return a("td",{class:f.value+b.__tdClass(s),style:b.__tdStyle(s)},Q(l.default))}}}),ll=E({name:"QTr",props:{props:Object,noHover:Boolean},setup(e,{slots:l}){const o=v(()=>"q-tr"+(e.props===void 0||e.props.header===!0?"":" "+e.props.__trClass)+(e.noHover===!0?" q-tr--no-hover":""));return()=>a("tr",{class:o.value},Q(l.default))}}),Tt=E({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:l,emit:o}){const f=ee(),{proxy:{$q:i}}=f,b=s=>{o("click",s)};return()=>{if(e.props===void 0)return a("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:b},Q(l.default));let s,d;const c=f.vnode.key;if(c){if(s=e.props.colsMap[c],s===void 0)return}else s=e.props.col;if(s.sortable===!0){const n=s.align==="right"?"unshift":"push";d=st(l.default,[]),d[n](a(Oe,{class:s.__iconClass,name:i.iconSet.table.arrowUp}))}else d=Q(l.default);const y={class:s.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:s.headerStyle,onClick:n=>{s.sortable===!0&&e.props.sort(s),b(n)}};return a("th",y,d)}}});const xt=["horizontal","vertical","cell","none"];var Bt=E({name:"QMarkupTable",props:{...Fe,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>xt.includes(e)}},setup(e,{slots:l}){const o=ee(),f=Le(e,o.proxy.$q),i=v(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(f.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>a("div",{class:i.value},[a("table",{class:"q-table"},Q(l.default))])}});function De(e,l){return a("div",e,[a("table",{class:"q-table"},l)])}const Ot={list:ht,table:Bt},Ft=["list","table","__qtable"];var Lt=E({name:"QVirtualScroll",props:{...wt,type:{type:String,default:"list",validator:e=>Ft.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:l,attrs:o}){let f;const i=N(null),b=v(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:s,localResetVirtualScroll:d,padVirtualScroll:c,onVirtualScrollEvt:y}=_t({virtualScrollLength:b,getVirtualScrollTarget:k,getVirtualScrollEl:P}),n=v(()=>{if(b.value===0)return[];const O=(F,R)=>({index:s.value.from+R,item:F});return e.itemsFn===void 0?e.items.slice(s.value.from,s.value.to).map(O):e.itemsFn(s.value.from,s.value.to-s.value.from).map(O)}),S=v(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),_=v(()=>e.scrollTarget!==void 0?{}:{tabindex:0});A(b,()=>{d()}),A(()=>e.scrollTarget,()=>{h(),w()});function P(){return i.value.$el||i.value}function k(){return f}function w(){f=ut(P(),e.scrollTarget),f.addEventListener("scroll",y,Re.passive)}function h(){f!==void 0&&(f.removeEventListener("scroll",y,Re.passive),f=void 0)}function B(){let O=c(e.type==="list"?"div":"tbody",n.value.map(l.default));return l.before!==void 0&&(O=l.before().concat(O)),bt(l.after,O)}return ct(()=>{d()}),dt(()=>{w()}),vt(()=>{w()}),ft(()=>{h()}),gt(()=>{h()}),()=>{if(l.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?De({ref:i,class:"q-table__middle "+S.value},B()):a(Ot[e.type],{...o,ref:i,class:[o.class,S.value],..._.value},B)}}});function Mt(e,l){return new Date(e)-new Date(l)}const Vt={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function Dt(e,l,o,f){const i=v(()=>{const{sortBy:d}=l.value;return d&&o.value.find(c=>c.name===d)||null}),b=v(()=>e.sortMethod!==void 0?e.sortMethod:(d,c,y)=>{const n=o.value.find(P=>P.name===c);if(n===void 0||n.field===void 0)return d;const S=y===!0?-1:1,_=typeof n.field=="function"?P=>n.field(P):P=>P[n.field];return d.sort((P,k)=>{let w=_(P),h=_(k);return w==null?-1*S:h==null?1*S:n.sort!==void 0?n.sort(w,h,P,k)*S:ge(w)===!0&&ge(h)===!0?(w-h)*S:Te(w)===!0&&Te(h)===!0?Mt(w,h)*S:typeof w=="boolean"&&typeof h=="boolean"?(w-h)*S:([w,h]=[w,h].map(B=>(B+"").toLocaleString().toLowerCase()),w<h?-1*S:w===h?0:S)})});function s(d){let c=e.columnSortOrder;if(mt(d)===!0)d.sortOrder&&(c=d.sortOrder),d=d.name;else{const S=o.value.find(_=>_.name===d);S!==void 0&&S.sortOrder&&(c=S.sortOrder)}let{sortBy:y,descending:n}=l.value;y!==d?(y=d,n=c==="da"):e.binaryStateSort===!0?n=!n:n===!0?c==="ad"?y=null:n=!1:c==="ad"?n=!0:y=null,f({sortBy:y,descending:n,page:1})}return{columnToSort:i,computedSortMethod:b,sort:s}}const pt={filter:[String,Object],filterMethod:Function};function jt(e,l){const o=v(()=>e.filterMethod!==void 0?e.filterMethod:(f,i,b,s)=>{const d=i?i.toLowerCase():"";return f.filter(c=>b.some(y=>{const n=s(y,c)+"";return(n==="undefined"||n==="null"?"":n.toLowerCase()).indexOf(d)!==-1}))});return A(()=>e.filter,()=>{Me(()=>{l({page:1},!0)})},{deep:!0}),{computedFilterMethod:o}}function Qt(e,l){for(const o in l)if(l[o]!==e[o])return!1;return!0}function xe(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const At={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function Et(e,l){const{props:o,emit:f}=e,i=N(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:o.rowsPerPageOptions.length>0?o.rowsPerPageOptions[0]:5},o.pagination)),b=v(()=>{const n=o["onUpdate:pagination"]!==void 0?{...i.value,...o.pagination}:i.value;return xe(n)}),s=v(()=>b.value.rowsNumber!==void 0);function d(n){c({pagination:n,filter:o.filter})}function c(n={}){Me(()=>{f("request",{pagination:n.pagination||b.value,filter:n.filter||o.filter,getCellValue:l})})}function y(n,S){const _=xe({...b.value,...n});if(Qt(b.value,_)===!0){s.value===!0&&S===!0&&d(_);return}if(s.value===!0){d(_);return}o.pagination!==void 0&&o["onUpdate:pagination"]!==void 0?f("update:pagination",_):i.value=_}return{innerPagination:i,computedPagination:b,isServerSide:s,requestServerInteraction:c,setPagination:y}}function Ht(e,l,o,f,i,b){const{props:s,emit:d,proxy:{$q:c}}=e,y=v(()=>f.value===!0?o.value.rowsNumber||0:b.value),n=v(()=>{const{page:R,rowsPerPage:T}=o.value;return(R-1)*T}),S=v(()=>{const{page:R,rowsPerPage:T}=o.value;return R*T}),_=v(()=>o.value.page===1),P=v(()=>o.value.rowsPerPage===0?1:Math.max(1,Math.ceil(y.value/o.value.rowsPerPage))),k=v(()=>S.value===0?!0:o.value.page>=P.value),w=v(()=>(s.rowsPerPageOptions.includes(l.value.rowsPerPage)?s.rowsPerPageOptions:[l.value.rowsPerPage].concat(s.rowsPerPageOptions)).map(T=>({label:T===0?c.lang.table.allRows:""+T,value:T})));A(P,(R,T)=>{if(R===T)return;const z=o.value.page;R&&!z?i({page:1}):R<z&&i({page:R})});function h(){i({page:1})}function B(){const{page:R}=o.value;R>1&&i({page:R-1})}function O(){const{page:R,rowsPerPage:T}=o.value;S.value>0&&R*T<y.value&&i({page:R+1})}function F(){i({page:P.value})}return s["onUpdate:pagination"]!==void 0&&d("update:pagination",{...o.value}),{firstRowIndex:n,lastRowIndex:S,isFirstPage:_,isLastPage:k,pagesNumber:P,computedRowsPerPageOptions:w,computedRowsNumber:y,firstPage:h,prevPage:B,nextPage:O,lastPage:F}}const Nt={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},zt=["update:selected","selection"];function $t(e,l,o,f){const i=v(()=>{const k={};return e.selected.map(f.value).forEach(w=>{k[w]=!0}),k}),b=v(()=>e.selection!=="none"),s=v(()=>e.selection==="single"),d=v(()=>e.selection==="multiple"),c=v(()=>o.value.length>0&&o.value.every(k=>i.value[f.value(k)]===!0)),y=v(()=>c.value!==!0&&o.value.some(k=>i.value[f.value(k)]===!0)),n=v(()=>e.selected.length);function S(k){return i.value[k]===!0}function _(){l("update:selected",[])}function P(k,w,h,B){l("selection",{rows:w,added:h,keys:k,evt:B});const O=s.value===!0?h===!0?w:[]:h===!0?e.selected.concat(w):e.selected.filter(F=>k.includes(f.value(F))===!1);l("update:selected",O)}return{hasSelectionMode:b,singleSelection:s,multipleSelection:d,allRowsSelected:c,someRowsSelected:y,rowsSelectedNumber:n,isRowSelected:S,clearSelection:_,updateSelection:P}}function Be(e){return Array.isArray(e)?e.slice():[]}const Ut={expanded:Array},It=["update:expanded"];function Wt(e,l){const o=N(Be(e.expanded));A(()=>e.expanded,s=>{o.value=Be(s)});function f(s){return o.value.includes(s)}function i(s){e.expanded!==void 0?l("update:expanded",s):o.value=s}function b(s,d){const c=o.value.slice(),y=c.indexOf(s);d===!0?y===-1&&(c.push(s),i(c)):y!==-1&&(c.splice(y,1),i(c))}return{isRowExpanded:f,setExpanded:i,updateExpanded:b}}const Kt={visibleColumns:Array};function Gt(e,l,o){const f=v(()=>{if(e.columns!==void 0)return e.columns;const d=e.rows[0];return d!==void 0?Object.keys(d).map(c=>({name:c,label:c.toUpperCase(),field:c,align:ge(d[c])?"right":"left",sortable:!0})):[]}),i=v(()=>{const{sortBy:d,descending:c}=l.value;return(e.visibleColumns!==void 0?f.value.filter(n=>n.required===!0||e.visibleColumns.includes(n.name)===!0):f.value).map(n=>{const S=n.align||"right",_=`text-${S}`;return{...n,align:S,__iconClass:`q-table__sort-icon q-table__sort-icon--${S}`,__thClass:_+(n.headerClasses!==void 0?" "+n.headerClasses:"")+(n.sortable===!0?" sortable":"")+(n.name===d?` sorted ${c===!0?"sort-desc":""}`:""),__tdStyle:n.style!==void 0?typeof n.style!="function"?()=>n.style:n.style:()=>null,__tdClass:n.classes!==void 0?typeof n.classes!="function"?()=>_+" "+n.classes:P=>_+" "+n.classes(P):()=>_}})}),b=v(()=>{const d={};return i.value.forEach(c=>{d[c.name]=c}),d}),s=v(()=>e.tableColspan!==void 0?e.tableColspan:i.value.length+(o.value===!0?1:0));return{colList:f,computedCols:i,computedColsMap:b,computedColspan:s}}const Z="q-table__bottom row items-center",pe={};Ve.forEach(e=>{pe[e]={}});var al=E({name:"QTable",props:{rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...pe,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...Fe,...Ct,...Kt,...pt,...At,...Ut,...Nt,...Vt},emits:["request","virtual-scroll",...kt,...It,...zt],setup(e,{slots:l,emit:o}){const f=ee(),{proxy:{$q:i}}=f,b=Le(e,i),{inFullscreen:s,toggleFullscreen:d}=Rt(),c=v(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),y=N(null),n=N(null),S=v(()=>e.grid!==!0&&e.virtualScroll===!0),_=v(()=>" q-table__card"+(b.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),P=v(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":_.value)+(b.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(s.value===!0?" fullscreen scroll":"")),k=v(()=>P.value+(e.loading===!0?" q-table--loading":""));A(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+P.value,()=>{S.value===!0&&n.value!==null&&n.value.reset()});const{innerPagination:w,computedPagination:h,isServerSide:B,requestServerInteraction:O,setPagination:F}=Et(f,p),{computedFilterMethod:R}=jt(e,F),{isRowExpanded:T,setExpanded:z,updateExpanded:je}=Wt(e,o),te=v(()=>{let t=e.rows;if(B.value===!0||t.length===0)return t;const{sortBy:r,descending:u}=h.value;return e.filter&&(t=R.value(t,e.filter,L.value,p)),Ne.value!==null&&(t=ze.value(e.rows===t?t.slice():t,r,u)),t}),be=v(()=>te.value.length),V=v(()=>{let t=te.value;if(B.value===!0)return t;const{rowsPerPage:r}=h.value;return r!==0&&(U.value===0&&e.rows!==t?t.length>I.value&&(t=t.slice(0,I.value)):t=t.slice(U.value,I.value)),t}),{hasSelectionMode:D,singleSelection:Qe,multipleSelection:me,allRowsSelected:Ae,someRowsSelected:Se,rowsSelectedNumber:le,isRowSelected:ae,clearSelection:Ee,updateSelection:$}=$t(e,o,V,c),{colList:He,computedCols:L,computedColsMap:ye,computedColspan:he}=Gt(e,h,D),{columnToSort:Ne,computedSortMethod:ze,sort:ne}=Dt(e,h,He,F),{firstRowIndex:U,lastRowIndex:I,isFirstPage:oe,isLastPage:re,pagesNumber:W,computedRowsPerPageOptions:$e,computedRowsNumber:K,firstPage:ie,prevPage:se,nextPage:ue,lastPage:ce}=Ht(f,w,h,B,F,be),Ue=v(()=>V.value.length===0),Ie=v(()=>{const t={};return Ve.forEach(r=>{t[r]=e[r]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function We(){S.value===!0&&n.value.reset()}function Ke(){if(e.grid===!0)return rt();const t=e.hideHeader!==!0?Ce:null;if(S.value===!0){const u=l["top-row"],g=l["bottom-row"],m={default:C=>_e(C.item,l.body,C.index)};if(u!==void 0){const C=a("tbody",u({cols:L.value}));m.before=t===null?()=>C:()=>[t()].concat(C)}else t!==null&&(m.before=t);return g!==void 0&&(m.after=()=>a("tbody",g({cols:L.value}))),a(Lt,{ref:n,class:e.tableClass,style:e.tableStyle,...Ie.value,scrollTarget:e.virtualScrollTarget,items:V.value,type:"__qtable",tableColspan:he.value,onVirtualScroll:Je},m)}const r=[Xe()];return t!==null&&r.unshift(t()),De({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},r)}function Ge(t,r){if(n.value!==null){n.value.scrollTo(t,r);return}t=parseInt(t,10);const u=y.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(u!==null){const g=y.value.querySelector(".q-table__middle.scroll"),{offsetTop:m}=u,C=m<g.scrollTop?"decrease":"increase";g.scrollTop=m,o("virtual-scroll",{index:t,from:0,to:w.value.rowsPerPage-1,direction:C})}}function Je(t){o("virtual-scroll",t)}function we(){return[a(qt,{class:"q-table__linear-progress",color:e.color,dark:b.value,indeterminate:!0,trackColor:"transparent"})]}function _e(t,r,u){const g=c.value(t),m=ae(g);if(r!==void 0)return r(Pe({key:g,row:t,pageIndex:u,__trClass:m?"selected":""}));const C=l["body-cell"],q=L.value.map(x=>{const J=l[`body-cell-${x.name}`],X=J!==void 0?J:C;return X!==void 0?X(Ye({key:g,row:t,pageIndex:u,col:x})):a("td",{class:x.__tdClass(t),style:x.__tdStyle(t)},p(x,t))});if(D.value===!0){const x=l["body-selection"],J=x!==void 0?x(Ze({key:g,row:t,pageIndex:u})):[a(fe,{modelValue:m,color:e.color,dark:b.value,dense:e.dense,"onUpdate:modelValue":(X,it)=>{$([g],[t],X,it)}})];q.unshift(a("td",{class:"q-table--col-auto-width"},J))}const M={key:g,class:{selected:m}};return e.onRowClick!==void 0&&(M.class["cursor-pointer"]=!0,M.onClick=x=>{o("RowClick",x,t,u)}),e.onRowDblclick!==void 0&&(M.class["cursor-pointer"]=!0,M.onDblclick=x=>{o("RowDblclick",x,t,u)}),e.onRowContextmenu!==void 0&&(M.class["cursor-pointer"]=!0,M.onContextmenu=x=>{o("RowContextmenu",x,t,u)}),a("tr",M,q)}function Xe(){const t=l.body,r=l["top-row"],u=l["bottom-row"];let g=V.value.map((m,C)=>_e(m,t,C));return r!==void 0&&(g=r({cols:L.value}).concat(g)),u!==void 0&&(g=g.concat(u({cols:L.value}))),a("tbody",g)}function Pe(t){return de(t),t.cols=t.cols.map(r=>{const u={...r};return H(u,"value",()=>p(r,t.row)),u}),t}function Ye(t){return de(t),H(t,"value",()=>p(t.col,t.row)),t}function Ze(t){return de(t),t}function de(t){Object.assign(t,{cols:L.value,colsMap:ye.value,sort:ne,rowIndex:U.value+t.pageIndex,color:e.color,dark:b.value,dense:e.dense}),D.value===!0&&H(t,"selected",()=>ae(t.key),(r,u)=>{$([t.key],[t.row],r,u)}),H(t,"expand",()=>T(t.key),r=>{je(t.key,r)})}function p(t,r){const u=typeof t.field=="function"?t.field(r):r[t.field];return t.format!==void 0?t.format(u,r):u}const j=v(()=>({pagination:h.value,pagesNumber:W.value,isFirstPage:oe.value,isLastPage:re.value,firstPage:ie,prevPage:se,nextPage:ue,lastPage:ce,inFullscreen:s.value,toggleFullscreen:d}));function et(){const t=l.top,r=l["top-left"],u=l["top-right"],g=l["top-selection"],m=D.value===!0&&g!==void 0&&le.value>0,C="q-table__top relative-position row items-center";if(t!==void 0)return a("div",{class:C},[t(j.value)]);let q;if(m===!0?q=g(j.value).slice():(q=[],r!==void 0?q.push(a("div",{class:"q-table-control"},[r(j.value)])):e.title&&q.push(a("div",{class:"q-table__control"},[a("div",{class:["q-table__title",e.titleClass]},e.title)]))),u!==void 0&&(q.push(a("div",{class:"q-table__separator col"})),q.push(a("div",{class:"q-table__control"},[u(j.value)]))),q.length!==0)return a("div",{class:C},q)}const qe=v(()=>Se.value===!0?null:Ae.value);function Ce(){const t=tt();return e.loading===!0&&l.loading===void 0&&t.push(a("tr",{class:"q-table__progress"},[a("th",{class:"relative-position",colspan:he.value},we())])),a("thead",t)}function tt(){const t=l.header,r=l["header-cell"];if(t!==void 0)return t(ve({header:!0})).slice();const u=L.value.map(g=>{const m=l[`header-cell-${g.name}`],C=m!==void 0?m:r,q=ve({col:g});return C!==void 0?C(q):a(Tt,{key:g.name,props:q},()=>g.label)});if(Qe.value===!0&&e.grid!==!0)u.unshift(a("th",{class:"q-table--col-auto-width"}," "));else if(me.value===!0){const g=l["header-selection"],m=g!==void 0?g(ve({})):[a(fe,{color:e.color,modelValue:qe.value,dark:b.value,dense:e.dense,"onUpdate:modelValue":ke})];u.unshift(a("th",{class:"q-table--col-auto-width"},m))}return[a("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},u)]}function ve(t){return Object.assign(t,{cols:L.value,sort:ne,colsMap:ye.value,color:e.color,dark:b.value,dense:e.dense}),me.value===!0&&H(t,"selected",()=>qe.value,ke),t}function ke(t){Se.value===!0&&(t=!1),$(V.value.map(c.value),V.value,t)}const G=v(()=>{const t=[e.iconFirstPage||i.iconSet.table.firstPage,e.iconPrevPage||i.iconSet.table.prevPage,e.iconNextPage||i.iconSet.table.nextPage,e.iconLastPage||i.iconSet.table.lastPage];return i.lang.rtl===!0?t.reverse():t});function lt(){if(e.hideBottom===!0)return;if(Ue.value===!0){if(e.hideNoData===!0)return;const u=e.loading===!0?e.loadingLabel||i.lang.table.loading:e.filter?e.noResultsLabel||i.lang.table.noResults:e.noDataLabel||i.lang.table.noData,g=l["no-data"],m=g!==void 0?[g({message:u,icon:i.iconSet.table.warning,filter:e.filter})]:[a(Oe,{class:"q-table__bottom-nodata-icon",name:i.iconSet.table.warning}),u];return a("div",{class:Z+" q-table__bottom--nodata"},m)}const t=l.bottom;if(t!==void 0)return a("div",{class:Z},[t(j.value)]);const r=e.hideSelectedBanner!==!0&&D.value===!0&&le.value>0?[a("div",{class:"q-table__control"},[a("div",[(e.selectedRowsLabel||i.lang.table.selectedRecords)(le.value)])])]:[];if(e.hidePagination!==!0)return a("div",{class:Z+" justify-end"},nt(r));if(r.length>0)return a("div",{class:Z},r)}function at(t){F({page:1,rowsPerPage:t.value})}function nt(t){let r;const{rowsPerPage:u}=h.value,g=e.paginationLabel||i.lang.table.pagination,m=l.pagination,C=e.rowsPerPageOptions.length>1;if(t.push(a("div",{class:"q-table__separator col"})),C===!0&&t.push(a("div",{class:"q-table__control"},[a("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||i.lang.table.recordsPerPage]),a(Pt,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:u,options:$e.value,displayValue:u===0?i.lang.table.allRows:u,dark:b.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":at})])),m!==void 0)r=m(j.value);else if(r=[a("span",u!==0?{class:"q-table__bottom-item"}:{},[u?g(U.value+1,Math.min(I.value,K.value),K.value):g(1,be.value,K.value)])],u!==0&&W.value>1){const q={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(q.size="sm"),W.value>2&&r.push(a(Y,{key:"pgFirst",...q,icon:G.value[0],disable:oe.value,onClick:ie})),r.push(a(Y,{key:"pgPrev",...q,icon:G.value[1],disable:oe.value,onClick:se}),a(Y,{key:"pgNext",...q,icon:G.value[2],disable:re.value,onClick:ue})),W.value>2&&r.push(a(Y,{key:"pgLast",...q,icon:G.value[3],disable:re.value,onClick:ce}))}return t.push(a("div",{class:"q-table__control"},r)),t}function ot(){const t=e.gridHeader===!0?[a("table",{class:"q-table"},[Ce()])]:e.loading===!0&&l.loading===void 0?we():void 0;return a("div",{class:"q-table__middle"},t)}function rt(){const t=l.item!==void 0?l.item:r=>{const u=r.cols.map(m=>a("div",{class:"q-table__grid-item-row"},[a("div",{class:"q-table__grid-item-title"},[m.label]),a("div",{class:"q-table__grid-item-value"},[m.value])]));if(D.value===!0){const m=l["body-selection"],C=m!==void 0?m(r):[a(fe,{modelValue:r.selected,color:e.color,dark:b.value,dense:e.dense,"onUpdate:modelValue":(q,M)=>{$([r.key],[r.row],q,M)}})];u.unshift(a("div",{class:"q-table__grid-item-row"},C),a(yt,{dark:b.value}))}const g={class:["q-table__grid-item-card"+_.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(g.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(g.onClick=m=>{o("RowClick",m,r.row,r.pageIndex)}),e.onRowDblclick!==void 0&&(g.onDblclick=m=>{o("RowDblclick",m,r.row,r.pageIndex)})),a("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(r.selected===!0?" q-table__grid-item--selected":"")},[a("div",g,u)])};return a("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},V.value.map((r,u)=>t(Pe({key:c.value(r),row:r,pageIndex:u}))))}return Object.assign(f.proxy,{requestServerInteraction:O,setPagination:F,firstPage:ie,prevPage:se,nextPage:ue,lastPage:ce,isRowSelected:ae,clearSelection:Ee,isRowExpanded:T,setExpanded:z,sort:ne,resetVirtualScroll:We,scrollTo:Ge,getCellValue:p}),St(f.proxy,{filteredSortedRows:()=>te.value,computedRows:()=>V.value,computedRowsNumber:()=>K.value}),()=>{const t=[et()],r={ref:y,class:k.value};return e.grid===!0?t.push(ot()):Object.assign(r,{class:[r.class,e.cardClass],style:e.cardStyle}),t.push(Ke(),lt()),e.loading===!0&&l.loading!==void 0&&t.push(l.loading()),a("div",r,t)}}});export{al as Q,ll as a,tl as b};
