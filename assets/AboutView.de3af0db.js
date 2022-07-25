import{Q as Y,a as Se}from"./QBreadcrumbs.5450dd79.js";import{Q as xe}from"./QPage.29a69ab9.js";import{Q as qe}from"./QImg.a96fe7ec.js";import{r as q,o as M,b as T,i as te,k as h,E as v,at as oe,j as _,c as $,Q as S,aC as B,aY as ze,G as J,F as N,q as $e,C as Pe,h as u,X as Le,aw as ne,W as Z,u as Be,m as Ee,a0 as Ne,a1 as Ae,bq as Fe,l as k,br as Qe,w as He,O as Oe,x as Re,$ as Ue,n as Ie,a$ as je,aD as De,aE as Me,aB as V,aq as H}from"./index.b17a3351.js";import{Q as E,a as Ke,b as We,A as Ge}from"./constants.ce2e5f36.js";import{u as ie}from"./use-quasar.13c2a2f4.js";import{Q as Xe}from"./QBtnDropdown.b35f2704.js";import{Q as ee,a as Ye}from"./QItem.b7efc210.js";import{u as Je,a as Ze,b as Ve}from"./use-fullscreen.1589b5d6.js";import{Q as et}from"./QForm.2690bc4f.js";import"./QMenu.82c65bbf.js";import"./selection.dc8cdc35.js";const tt={class:"col-4 q-pa-md"},ot={class:"row no-wrap items-center q-pa-sm q-gutter-xs"},nt=N("Limpiar"),it=N("Remover archivo"),at={class:"col"},lt=_("div",{class:"q-uploader__title"},"Actualizar Imagen",-1),rt={class:"q-uploader__subtitle"},st=N("Elegir Archivo"),ct=N("Subir archivo"),ut=N("Abortar"),dt={__name:"AboutImg",props:["about","actualizar"],setup(t){const e=t,o=q(),a=q(),l=ie();M(async()=>{const r=await e.about();o.value=r.img,a.value=r._id});const d=r=>new Promise(m=>{setTimeout(()=>{m({url:`${Ge}/api/uploads/about/${a.value}`,method:"PUT",fieldName:"archivo"}),l.notify({message:"\xA1Imagen actualizada con \xE9xito!",color:"green-10",position:"top-right",icon:"lar la-check-circle"})},2e3)});return(r,m)=>(T(),te("div",tt,[h(oe,{class:"q-pa-sm q-mb-md"},{default:v(()=>[h(qe,{src:o.value,width:"100%"},null,8,["src"])]),_:1}),h(We,{style:{width:"100%"},label:"Cambiar foto",accept:".jpg, image/*",factory:d,color:"indigo-6"},{header:v(c=>[_("div",ot,[c.queuedFiles.length>0?(T(),$(S,{key:0,icon:"clear_all",onClick:c.removeQueuedFiles,round:"",dense:"",flat:""},{default:v(()=>[h(E,null,{default:v(()=>[nt]),_:1})]),_:2},1032,["onClick"])):B("",!0),c.uploadedFiles.length>0?(T(),$(S,{key:1,icon:"done_all",onClick:c.removeUploadedFiles,round:"",dense:"",flat:""},{default:v(()=>[h(E,null,{default:v(()=>[it]),_:1})]),_:2},1032,["onClick"])):B("",!0),c.isUploading?(T(),$(ze,{key:2,class:"q-uploader__spinner"})):B("",!0),_("div",at,[lt,_("div",rt,J(c.uploadSizeLabel)+" / "+J(c.uploadProgressLabel),1)]),c.canAddFiles?(T(),$(S,{key:3,type:"a",icon:"add_box",onClick:c.pickFiles,round:"",dense:"",flat:""},{default:v(()=>[h(Ke),h(E,null,{default:v(()=>[st]),_:1})]),_:2},1032,["onClick"])):B("",!0),c.canUpload?(T(),$(S,{key:4,icon:"las la-upload",onClick:c.upload,round:"",dense:"",color:"dark"},{default:v(()=>[h(E,null,{default:v(()=>[ct]),_:1})]),_:2},1032,["onClick"])):B("",!0),c.isUploading?(T(),$(S,{key:5,icon:"clear",onClick:c.abort,round:"",dense:"",flat:""},{default:v(()=>[h(E,null,{default:v(()=>[ut]),_:1})]),_:2},1032,["onClick"])):B("",!0)])]),_:1})]))}};function ae(t,e){if(e&&t===e)return null;const o=t.nodeName.toLowerCase();if(["div","li","ul","ol","blockquote"].includes(o)===!0)return t;const a=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle,l=a.display;return l==="block"||l==="table"?t:ae(t.parentNode)}function D(t,e,o){return!t||t===document.body?!1:o===!0&&t===e||(e===document?document.body:e).contains(t.parentNode)}function le(t,e,o){if(o||(o=document.createRange(),o.selectNode(t),o.setStart(t,0)),e.count===0)o.setEnd(t,e.count);else if(e.count>0)if(t.nodeType===Node.TEXT_NODE)t.textContent.length<e.count?e.count-=t.textContent.length:(o.setEnd(t,e.count),e.count=0);else for(let a=0;e.count!==0&&a<t.childNodes.length;a++)o=le(t.childNodes[a],e,o);return o}const ft=/^https?:\/\//;class pt{constructor(e,o){this.el=e,this.eVm=o,this._range=null}get selection(){if(this.el){const e=document.getSelection();if(D(e.anchorNode,this.el,!0)&&D(e.focusNode,this.el,!0))return e}return null}get hasSelection(){return this.selection!==null?this.selection.toString().length>0:!1}get range(){const e=this.selection;return e!==null&&e.rangeCount?e.getRangeAt(0):this._range}get parent(){const e=this.range;if(e!==null){const o=e.startContainer;return o.nodeType===document.ELEMENT_NODE?o:o.parentNode}return null}get blockParent(){const e=this.parent;return e!==null?ae(e,this.el):null}save(e=this.range){e!==null&&(this._range=e)}restore(e=this._range){const o=document.createRange(),a=document.getSelection();e!==null?(o.setStart(e.startContainer,e.startOffset),o.setEnd(e.endContainer,e.endOffset),a.removeAllRanges(),a.addRange(o)):(a.selectAllChildren(this.el),a.collapseToEnd())}savePosition(){let e=-1,o;const a=document.getSelection(),l=this.el.parentNode;if(a.focusNode&&D(a.focusNode,l))for(o=a.focusNode,e=a.focusOffset;o&&o!==l;)o!==this.el&&o.previousSibling?(o=o.previousSibling,e+=o.textContent.length):o=o.parentNode;this.savedPos=e}restorePosition(e=0){if(this.savedPos>0&&this.savedPos<e){const o=window.getSelection(),a=le(this.el,{count:this.savedPos});a&&(a.collapse(!1),o.removeAllRanges(),o.addRange(a))}}hasParent(e,o){const a=o?this.parent:this.blockParent;return a!==null?a.nodeName.toLowerCase()===e.toLowerCase():!1}hasParents(e,o,a=this.parent){return a===null?!1:e.includes(a.nodeName.toLowerCase())===!0?!0:o===!0?this.hasParents(e,o,a.parentNode):!1}is(e,o){if(this.selection===null)return!1;switch(e){case"formatBlock":return o==="DIV"&&this.parent===this.el||this.hasParent(o,o==="PRE");case"link":return this.hasParent("A",!0);case"fontSize":return document.queryCommandValue(e)===o;case"fontName":const a=document.queryCommandValue(e);return a===`"${o}"`||a===o;case"fullscreen":return this.eVm.inFullscreen.value;case"viewsource":return this.eVm.isViewingSource.value;case void 0:return!1;default:const l=document.queryCommandState(e);return o!==void 0?l===o:l}}getParentAttribute(e){return this.parent!==null?this.parent.getAttribute(e):null}can(e){if(e==="outdent")return this.hasParents(["blockquote","li"],!0);if(e==="indent")return this.hasParents(["li"],!0);if(e==="link")return this.selection!==null||this.is("link")}apply(e,o,a=$e){if(e==="formatBlock")["BLOCKQUOTE","H1","H2","H3","H4","H5","H6"].includes(o)&&this.is(e,o)&&(e="outdent",o=null),o==="PRE"&&this.is(e,"PRE")&&(o="P");else if(e==="print"){a();const l=window.open();l.document.write(`
        <!doctype html>
        <html>
          <head>
            <title>Print - ${document.title}</title>
          </head>
          <body>
            <div>${this.el.innerHTML}</div>
          </body>
        </html>
      `),l.print(),l.close();return}else if(e==="link"){const l=this.getParentAttribute("href");if(l===null){const d=this.selectWord(this.selection),r=d?d.toString():"";if(!r.length&&(!this.range||!this.range.cloneContents().querySelector("img")))return;this.eVm.editLinkUrl.value=ft.test(r)?r:"https://",document.execCommand("createLink",!1,this.eVm.editLinkUrl.value),this.save(d.getRangeAt(0))}else this.eVm.editLinkUrl.value=l,this.range.selectNodeContents(this.parent),this.save();return}else if(e==="fullscreen"){this.eVm.toggleFullscreen(),a();return}else if(e==="viewsource"){this.eVm.isViewingSource.value=this.eVm.isViewingSource.value===!1,this.eVm.setContent(this.eVm.props.modelValue),a();return}document.execCommand(e,!1,o),a()}selectWord(e){if(e===null||e.isCollapsed!==!0||e.modify===void 0)return e;const o=document.createRange();o.setStart(e.anchorNode,e.anchorOffset),o.setEnd(e.focusNode,e.focusOffset);const a=o.collapsed?["backward","forward"]:["forward","backward"];o.detach();const l=e.focusNode,d=e.focusOffset;return e.collapse(e.anchorNode,e.anchorOffset),e.modify("move",a[0],"character"),e.modify("move",a[1],"word"),e.extend(l,d),e.modify("extend",a[1],"character"),e.modify("extend",a[0],"word"),e}}function re(t,e,o){e.handler?e.handler(t,o,o.caret):o.runCmd(e.cmd,e.param)}function K(t){return u("div",{class:"q-editor__toolbar-group"},t)}function se(t,e,o,a=!1){const l=a||(e.type==="toggle"?e.toggled?e.toggled(t):e.cmd&&t.caret.is(e.cmd,e.param):!1),d=[];if(e.tip&&t.$q.platform.is.desktop){const r=e.key?u("div",[u("small",`(CTRL + ${String.fromCharCode(e.key)})`)]):null;d.push(u(E,{delay:1e3},()=>[u("div",{innerHTML:e.tip}),r]))}return u(S,{...t.buttonProps.value,icon:e.icon!==null?e.icon:void 0,color:l?e.toggleColor||t.props.toolbarToggleColor:e.color||t.props.toolbarColor,textColor:l&&!t.props.toolbarPush?null:e.textColor||t.props.toolbarTextColor,label:e.label,disable:e.disable?typeof e.disable=="function"?e.disable(t):!0:!1,size:"sm",onClick(r){o&&o(),re(r,e,t)}},()=>d)}function ht(t,e){const o=e.list==="only-icons";let a=e.label,l=e.icon!==null?e.icon:void 0,d,r;function m(){A.component.proxy.hide()}if(o)r=e.options.map(b=>{const C=b.type===void 0?t.caret.is(b.cmd,b.param):!1;return C&&(a=b.tip,l=b.icon!==null?b.icon:void 0),se(t,b,m,C)}),d=t.toolbarBackgroundClass.value,r=[K(r)];else{const b=t.props.toolbarToggleColor!==void 0?`text-${t.props.toolbarToggleColor}`:null,C=t.props.toolbarTextColor!==void 0?`text-${t.props.toolbarTextColor}`:null,f=e.list==="no-icons";r=e.options.map(p=>{const z=p.disable?p.disable(t):!1,P=p.type===void 0?t.caret.is(p.cmd,p.param):!1;P&&(a=p.tip,l=p.icon!==null?p.icon:void 0);const F=p.htmlTip;return u(Ye,{active:P,activeClass:b,clickable:!0,disable:z,dense:!0,onClick(L){m(),t.contentRef.value!==null&&t.contentRef.value.focus(),t.caret.restore(),re(L,p,t)}},()=>[f===!0?null:u(ee,{class:P?b:C,side:!0},()=>u(Be,{name:p.icon!==null?p.icon:void 0})),u(ee,F?()=>u("div",{class:"text-no-wrap",innerHTML:p.htmlTip}):p.tip?()=>u("div",{class:"text-no-wrap"},p.tip):void 0)])}),d=[t.toolbarBackgroundClass.value,C]}const c=e.highlight&&a!==e.label,A=u(Xe,{...t.buttonProps.value,noCaps:!0,noWrap:!0,color:c?t.props.toolbarToggleColor:t.props.toolbarColor,textColor:c&&!t.props.toolbarPush?null:t.props.toolbarTextColor,label:e.fixedLabel?e.label:a,icon:e.fixedIcon?e.icon!==null?e.icon:void 0:l,contentClass:d},()=>r);return A}function mt(t){if(t.caret)return t.buttons.value.filter(e=>!t.isViewingSource.value||e.find(o=>o.cmd==="viewsource")).map(e=>K(e.map(o=>t.isViewingSource.value&&o.cmd!=="viewsource"?!1:o.type==="slot"?Pe(t.slots[o.slot]):o.type==="dropdown"?ht(t,o):se(t,o))))}function gt(t,e,o,a={}){const l=Object.keys(a);if(l.length===0)return{};const d={default_font:{cmd:"fontName",param:t,icon:o,tip:e}};return l.forEach(r=>{const m=a[r];d[r]={cmd:"fontName",param:m,icon:o,tip:m,htmlTip:`<font face="${m}">${m}</font>`}}),d}function vt(t){if(t.caret){const e=t.props.toolbarColor||t.props.toolbarTextColor;let o=t.editLinkUrl.value;const a=()=>{t.caret.restore(),o!==t.editLinkUrl.value&&document.execCommand("createLink",!1,o===""?" ":o),t.editLinkUrl.value=null};return[u("div",{class:`q-mx-xs text-${e}`},`${t.$q.lang.editor.url}: `),u("input",{key:"qedt_btm_input",class:"col q-editor__link-input",value:o,onInput:l=>{Le(l),o=l.target.value},onKeydown:l=>{if(ne(l)!==!0)switch(l.keyCode){case 13:return Z(l),a();case 27:Z(l),t.caret.restore(),(!t.editLinkUrl.value||t.editLinkUrl.value==="https://")&&document.execCommand("unlink"),t.editLinkUrl.value=null;break}}}),K([u(S,{key:"qedt_btm_rem",tabindex:-1,...t.buttonProps.value,label:t.$q.lang.label.remove,noCaps:!0,onClick:()=>{t.caret.restore(),document.execCommand("unlink"),t.editLinkUrl.value=null}}),u(S,{key:"qedt_btm_upd",...t.buttonProps.value,label:t.$q.lang.label.update,noCaps:!0,onClick:a})])]}}var yt=Ee({name:"QEditor",props:{...Ne,...Je,modelValue:{type:String,required:!0},readonly:Boolean,disable:Boolean,minHeight:{type:String,default:"10rem"},maxHeight:String,height:String,definitions:Object,fonts:Object,placeholder:String,toolbar:{type:Array,validator:t=>t.length===0||t.every(e=>e.length),default(){return[["left","center","right","justify"],["bold","italic","underline","strike"],["undo","redo"]]}},toolbarColor:String,toolbarBg:String,toolbarTextColor:String,toolbarToggleColor:{type:String,default:"primary"},toolbarOutline:Boolean,toolbarPush:Boolean,toolbarRounded:Boolean,paragraphTag:{type:String,validator:t=>["div","p"].includes(t),default:"div"},contentStyle:Object,contentClass:[Object,Array,String],square:Boolean,flat:Boolean,dense:Boolean},emits:[...Ze,"update:modelValue","keydown","click","mouseup","keyup","touchend","focus","blur"],setup(t,{slots:e,emit:o,attrs:a}){const{proxy:l,vnode:d}=Re(),{$q:r}=l,m=Ae(t,r),{inFullscreen:c,toggleFullscreen:A}=Ve(),b=Fe(a,d),C=q(null),f=q(null),p=q(null),z=q(!1),P=k(()=>!t.readonly&&!t.disable);let F,L,O=t.modelValue;document.execCommand("defaultParagraphSeparator",!1,t.paragraphTag),F=window.getComputedStyle(document.body).fontFamily;const R=k(()=>t.toolbarBg?` bg-${t.toolbarBg}`:""),ce=k(()=>{const n=t.toolbarOutline!==!0&&t.toolbarPush!==!0;return{type:"a",flat:n,noWrap:!0,outline:t.toolbarOutline,push:t.toolbarPush,rounded:t.toolbarRounded,dense:!0,color:t.toolbarColor,disable:!P.value,size:"sm"}}),Q=k(()=>{const n=r.lang.editor,i=r.iconSet.editor;return{bold:{cmd:"bold",icon:i.bold,tip:n.bold,key:66},italic:{cmd:"italic",icon:i.italic,tip:n.italic,key:73},strike:{cmd:"strikeThrough",icon:i.strikethrough,tip:n.strikethrough,key:83},underline:{cmd:"underline",icon:i.underline,tip:n.underline,key:85},unordered:{cmd:"insertUnorderedList",icon:i.unorderedList,tip:n.unorderedList},ordered:{cmd:"insertOrderedList",icon:i.orderedList,tip:n.orderedList},subscript:{cmd:"subscript",icon:i.subscript,tip:n.subscript,htmlTip:"x<subscript>2</subscript>"},superscript:{cmd:"superscript",icon:i.superscript,tip:n.superscript,htmlTip:"x<superscript>2</superscript>"},link:{cmd:"link",disable:s=>s.caret&&!s.caret.can("link"),icon:i.hyperlink,tip:n.hyperlink,key:76},fullscreen:{cmd:"fullscreen",icon:i.toggleFullscreen,tip:n.toggleFullscreen,key:70},viewsource:{cmd:"viewsource",icon:i.viewSource,tip:n.viewSource},quote:{cmd:"formatBlock",param:"BLOCKQUOTE",icon:i.quote,tip:n.quote,key:81},left:{cmd:"justifyLeft",icon:i.left,tip:n.left},center:{cmd:"justifyCenter",icon:i.center,tip:n.center},right:{cmd:"justifyRight",icon:i.right,tip:n.right},justify:{cmd:"justifyFull",icon:i.justify,tip:n.justify},print:{type:"no-state",cmd:"print",icon:i.print,tip:n.print,key:80},outdent:{type:"no-state",disable:s=>s.caret&&!s.caret.can("outdent"),cmd:"outdent",icon:i.outdent,tip:n.outdent},indent:{type:"no-state",disable:s=>s.caret&&!s.caret.can("indent"),cmd:"indent",icon:i.indent,tip:n.indent},removeFormat:{type:"no-state",cmd:"removeFormat",icon:i.removeFormat,tip:n.removeFormat},hr:{type:"no-state",cmd:"insertHorizontalRule",icon:i.hr,tip:n.hr},undo:{type:"no-state",cmd:"undo",icon:i.undo,tip:n.undo,key:90},redo:{type:"no-state",cmd:"redo",icon:i.redo,tip:n.redo,key:89},h1:{cmd:"formatBlock",param:"H1",icon:i.heading1||i.heading,tip:n.heading1,htmlTip:`<h1 class="q-ma-none">${n.heading1}</h1>`},h2:{cmd:"formatBlock",param:"H2",icon:i.heading2||i.heading,tip:n.heading2,htmlTip:`<h2 class="q-ma-none">${n.heading2}</h2>`},h3:{cmd:"formatBlock",param:"H3",icon:i.heading3||i.heading,tip:n.heading3,htmlTip:`<h3 class="q-ma-none">${n.heading3}</h3>`},h4:{cmd:"formatBlock",param:"H4",icon:i.heading4||i.heading,tip:n.heading4,htmlTip:`<h4 class="q-ma-none">${n.heading4}</h4>`},h5:{cmd:"formatBlock",param:"H5",icon:i.heading5||i.heading,tip:n.heading5,htmlTip:`<h5 class="q-ma-none">${n.heading5}</h5>`},h6:{cmd:"formatBlock",param:"H6",icon:i.heading6||i.heading,tip:n.heading6,htmlTip:`<h6 class="q-ma-none">${n.heading6}</h6>`},p:{cmd:"formatBlock",param:t.paragraphTag,icon:i.heading,tip:n.paragraph},code:{cmd:"formatBlock",param:"PRE",icon:i.code,htmlTip:`<code>${n.code}</code>`},"size-1":{cmd:"fontSize",param:"1",icon:i.size1||i.size,tip:n.size1,htmlTip:`<font size="1">${n.size1}</font>`},"size-2":{cmd:"fontSize",param:"2",icon:i.size2||i.size,tip:n.size2,htmlTip:`<font size="2">${n.size2}</font>`},"size-3":{cmd:"fontSize",param:"3",icon:i.size3||i.size,tip:n.size3,htmlTip:`<font size="3">${n.size3}</font>`},"size-4":{cmd:"fontSize",param:"4",icon:i.size4||i.size,tip:n.size4,htmlTip:`<font size="4">${n.size4}</font>`},"size-5":{cmd:"fontSize",param:"5",icon:i.size5||i.size,tip:n.size5,htmlTip:`<font size="5">${n.size5}</font>`},"size-6":{cmd:"fontSize",param:"6",icon:i.size6||i.size,tip:n.size6,htmlTip:`<font size="6">${n.size6}</font>`},"size-7":{cmd:"fontSize",param:"7",icon:i.size7||i.size,tip:n.size7,htmlTip:`<font size="7">${n.size7}</font>`}}}),W=k(()=>{const n=t.definitions||{},i=t.definitions||t.fonts?Qe(!0,{},Q.value,n,gt(F,r.lang.editor.defaultFont,r.iconSet.editor.font,t.fonts)):Q.value;return t.toolbar.map(s=>s.map(g=>{if(g.options)return{type:"dropdown",icon:g.icon,label:g.label,size:"sm",dense:!0,fixedLabel:g.fixedLabel,fixedIcon:g.fixedIcon,highlight:g.highlight,list:g.list,options:g.options.map(Te=>i[Te])};const w=i[g];return w?w.type==="no-state"||n[g]&&(w.cmd===void 0||Q.value[w.cmd]&&Q.value[w.cmd].type==="no-state")?w:Object.assign({type:"toggle"},w):{type:"slot",slot:g}}))}),y={$q:r,props:t,slots:e,inFullscreen:c,toggleFullscreen:A,runCmd:I,isViewingSource:z,editLinkUrl:p,toolbarBackgroundClass:R,buttonProps:ce,contentRef:f,buttons:W,setContent:U};He(()=>t.modelValue,n=>{O!==n&&(O=n,U(n,!0))});const ue=k(()=>t.toolbar&&t.toolbar.length>0),de=k(()=>{const n={},i=s=>{s.key&&(n[s.key]={cmd:s.cmd,param:s.param})};return W.value.forEach(s=>{s.forEach(g=>{g.options?g.options.forEach(i):i(g)})}),n}),fe=k(()=>c.value?t.contentStyle:[{minHeight:t.minHeight,height:t.height,maxHeight:t.maxHeight},t.contentStyle]),pe=k(()=>`q-editor q-editor--${z.value===!0?"source":"default"}`+(t.disable===!0?" disabled":"")+(c.value===!0?" fullscreen column":"")+(t.square===!0?" q-editor--square no-border-radius":"")+(t.flat===!0?" q-editor--flat":"")+(t.dense===!0?" q-editor--dense":"")+(m.value===!0?" q-editor--dark q-dark":"")),he=k(()=>[t.contentClass,"q-editor__content",{col:c.value,"overflow-auto":c.value||t.maxHeight}]),me=k(()=>t.disable===!0?{"aria-disabled":"true"}:t.readonly===!0?{"aria-readonly":"true"}:{});function ge(){if(f.value!==null){const n=`inner${z.value===!0?"Text":"HTML"}`,i=f.value[n];i!==t.modelValue&&(O=i,o("update:modelValue",i))}}function ve(n){if(o("keydown",n),n.ctrlKey!==!0||ne(n)===!0){x();return}const i=n.keyCode,s=de.value[i];if(s!==void 0){const{cmd:g,param:w}=s;Ue(n),I(g,w,!1)}}function ye(n){x(),o("click",n)}function be(n){if(f.value!==null){const{scrollTop:i,scrollHeight:s}=f.value;L=s-i}y.caret.save(),o("blur",n)}function ke(n){Ie(()=>{f.value!==null&&L!==void 0&&(f.value.scrollTop=f.value.scrollHeight-L)}),o("focus",n)}function _e(n){const i=C.value;if(i!==null&&i.contains(n.target)===!0&&(n.relatedTarget===null||i.contains(n.relatedTarget)!==!0)){const s=`inner${z.value===!0?"Text":"HTML"}`;y.caret.restorePosition(f.value[s].length),x()}}function Ce(n){const i=C.value;i!==null&&i.contains(n.target)===!0&&(n.relatedTarget===null||i.contains(n.relatedTarget)!==!0)&&(y.caret.savePosition(),x())}function G(){L=void 0}function X(n){y.caret.save()}function U(n,i){if(f.value!==null){i===!0&&y.caret.savePosition();const s=`inner${z.value===!0?"Text":"HTML"}`;f.value[s]=n,i===!0&&(y.caret.restorePosition(f.value[s].length),x())}}function I(n,i,s=!0){j(),y.caret.restore(),y.caret.apply(n,i,()=>{j(),y.caret.save(),s&&x()})}function x(){setTimeout(()=>{p.value=null,l.$forceUpdate()},1)}function j(){je(()=>{f.value!==null&&f.value.focus({preventScroll:!0})})}function we(){return f.value}return Object.assign(l,{runCmd:I,refreshToolbar:x,focus:j,getContentEl:we}),M(()=>{y.caret=l.caret=new pt(f.value,y),U(t.modelValue),x(),document.addEventListener("selectionchange",X)}),Oe(()=>{document.removeEventListener("selectionchange",X)}),()=>{let n;if(ue.value){const i=[u("div",{key:"qedt_top",class:"q-editor__toolbar row no-wrap scroll-x"+R.value},mt(y))];p.value!==null&&i.push(u("div",{key:"qedt_btm",class:"q-editor__toolbar row no-wrap items-center scroll-x"+R.value},vt(y))),n=u("div",{key:"toolbar_ctainer",class:"q-editor__toolbars-container"},i)}return u("div",{ref:C,class:pe.value,style:{height:c.value===!0?"100%":null},...me.value,onFocusin:_e,onFocusout:Ce},[n,u("div",{ref:f,style:fe.value,class:he.value,contenteditable:P.value,placeholder:t.placeholder,...b.listeners.value,onInput:ge,onKeydown:ve,onClick:ye,onBlur:be,onFocus:ke,onMousedown:G,onTouchstartPassive:G})])}}});const bt={class:"col-6 q-pa-md"},kt={class:"row justify-end q-mt-md"},_t=_("span",null,null,-1),Ct={__name:"AboutForm",props:["about","actualizar"],setup(t){const e=t,o=q({}),a=q(!1),l=ie();M(async()=>{const r=await e.about();o.value={titulo:r.titulo,descripcion:r.descripcion}});const d=async()=>{try{a.value=!0;const{msg:r}=await e.actualizar(o.value);r=="ok"&&l.notify({message:"\xA1About actualizado con \xE9xito!",color:"green-10",position:"top-right",icon:"lar la-check-circle"}),a.value=!1}catch(r){console.log(r)}};return(r,m)=>(T(),te("div",bt,[h(oe,{class:"q-pa-md"},{default:v(()=>[h(et,{class:"q-gutter-md",onSubmit:De(d,["prevent"])},{default:v(()=>[h(Me,{filled:"",label:"Titulo",modelValue:o.value.titulo,"onUpdate:modelValue":m[0]||(m[0]=c=>o.value.titulo=c)},null,8,["modelValue"]),h(yt,{modelValue:o.value.descripcion,"onUpdate:modelValue":m[1]||(m[1]=c=>o.value.descripcion=c),"min-height":"5rem"},null,8,["modelValue"]),_("div",kt,[h(S,{type:"submit",color:"indigo-6",label:"Actualizar",loading:a.value},null,8,["loading"])])]),_:1},8,["onSubmit"]),_t]),_:1})]))}},wt=()=>{const t=localStorage.getItem("token"),e=async()=>{try{const{data:a}=await V.get("/about");return a.about}catch(a){console.log(a)}},o=async a=>{const{data:l}=await V.put("/about",a,{headers:{"x-token":t}});return l};return e(),{getAbout:e,putAbout:o}},Tt={class:"q-pa-md q-gutter-sm text-indigo-6"},St=_("div",{class:"row"},[_("div",{class:"col-12 text-indigo-6 q-pa-md"},[_("span",{class:"text-h3 text-weight-bold"},"Sobre m\xED")])],-1),xt={class:"col-12 q-pa-md row justify-center"},Ot={__name:"AboutView",setup(t){const{getAbout:e,putAbout:o}=wt();return(a,l)=>(T(),$(xe,{class:"q-pa-md bg-white"},{default:v(()=>[_("div",Tt,[h(Se,null,{default:v(()=>[h(Y,{icon:"home",to:{name:"home"}}),h(Y,{label:"Sobre m\xED",icon:"las la-user-circle"})]),_:1})]),St,_("div",xt,[h(dt,{about:H(e),actualizar:H(o)},null,8,["about","actualizar"]),h(Ct,{about:H(e),actualizar:H(o)},null,8,["about","actualizar"])])]),_:1}))}};export{Ot as default};
