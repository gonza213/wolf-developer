import{m as u,p as o,D as h,a8 as g,l as s,h as p,C as d,x as y}from"./index.f70018ef.js";var v=u({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(a,{slots:r}){const{proxy:{$q:n}}=y(),e=o(h);o(g,()=>{console.error("QPage needs to be child of QPageContainer")});const i=s(()=>{const t=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof a.styleFn=="function"){const l=e.isContainer.value===!0?e.containerHeight.value:n.screen.height;return a.styleFn(t,l)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-t+"px":n.screen.height===0?t!==0?`calc(100vh - ${t}px)`:"100vh":n.screen.height-t+"px"}}),c=s(()=>`q-page ${a.padding===!0?" q-layout-padding":""}`);return()=>p("main",{class:c.value,style:i.value},d(r.default))}});export{v as Q};
