import{p as l,q as o,E as h,a9 as g,m as s,h as p,D as y,y as d}from"./index.833c13ce.js";var v=l({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(a,{slots:r}){const{proxy:{$q:n}}=d(),e=o(h);o(g,()=>{console.error("QPage needs to be child of QPageContainer")});const i=s(()=>{const t=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof a.styleFn=="function"){const u=e.isContainer.value===!0?e.containerHeight.value:n.screen.height;return a.styleFn(t,u)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-t+"px":n.screen.height===0?t!==0?`calc(100vh - ${t}px)`:"100vh":n.screen.height-t+"px"}}),c=s(()=>`q-page ${a.padding===!0?" q-layout-padding":""}`);return()=>p("main",{class:c.value,style:i.value},y(r.default))}});export{v as Q};
