const __vite__fileDeps=["./DFpM3mRG.js","./YD9mwFcM.js","./entry.DVFbDlsc.css","./DafKzyEP.js","./DhaAPt8y.js","./34A59IiS.js","./iACt1a8Z.js","./BiXgA6LG.js","./B3h630wy.js","./B1gdLCcz.js","./CQzKPdYZ.js","./BlnWJBM0.js","./DO_nM711.js","./B3gRA0eq.js","./t-K2Nj7T.js","./dNSH36Bd.js","./BCFwBZB0.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{u as v}from"./DtnsCFOV.js";import{T as m,U as y,V as k,W as b,c,X as T,G as w,Y as E,Z as I,$ as O,a0 as A,M as S,a1 as D,_ as p,a2 as V,o as l,b as L,w as P,g as R,j as M,a3 as x,a4 as g,n as o,a5 as B,a6 as n,a as _,t as C,p as F,e as N}from"./YD9mwFcM.js";const q=Symbol.for("nuxt:client-only"),W=m({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:a,attrs:t}){const r=y(!1);return k(()=>{r.value=!0}),b(q,!0),i=>{var f;if(r.value)return(f=a.default)==null?void 0:f.call(a);const s=a.fallback||a.placeholder;if(s)return s();const u=i.fallback||i.placeholder||"",d=i.fallbackTag||i.placeholderTag||"span";return c(d,t,u)}}});function G(e){return e!==e}function H(e,a,t){for(var r=t-1,i=e.length;++r<i;)if(e[r]===a)return r;return-1}function U(e,a,t){return a===a?H(e,a,t):T(e,G,t)}var z="[object String]";function j(e){return typeof e=="string"||!w(e)&&E(e)&&I(e)==z}function Y(e,a){return O(a,function(t){return e[t]})}function X(e){return e==null?[]:Y(e,A(e))}var Z=Math.max;function h(e,a,t,r){e=S(e)?e:X(e),t=t&&!r?D(t):0;var i=e.length;return t<0&&(t=Z(i+t,0)),j(e)?t<=i&&e.indexOf(a,t)>-1:!!i&&U(e,a,t)>-1}const $=e=>{const a=Object.create(null);for(const t in e){const r=e[t];r!==void 0&&(a[t]=r)}return a},J=(e,a)=>(t,r)=>(v(()=>e({...$(t),...r.attrs},r)),()=>{var i,s;return a?(s=(i=r.slots).default)==null?void 0:s.call(i):null}),ue=m({name:"Title",inheritAttrs:!1,setup:J((e,{slots:a})=>{var t,r,i;return{title:((i=(r=(t=a.default)==null?void 0:t.call(a))==null?void 0:r[0])==null?void 0:i.children)||null}})}),de=m({name:"Head",inheritAttrs:!1,setup:(e,a)=>()=>{var t,r;return(r=(t=a.slots).default)==null?void 0:r.call(t)}}),K={props:{name:{type:String,required:!0},width:{type:String,default:"auto"},height:{type:String,default:"auto"},filled:{type:Boolean,default:!1},clickable:{type:Boolean,default:!1},tooltip:{type:String,required:!1,default:""},alwaysShown:{type:Boolean,required:!1,default:!1},htmlTooltip:{type:Boolean,required:!1,default:!1}},setup(e){return{currentIcon:B(async()=>await te(`@icons/${e.name}.svg`))}}},Q={class:"icon"};function ee(e,a,t,r,i,s){const u=W,d=V("tooltip");return l(),c("div",Q,[L(u,null,{default:P(()=>[R((l(),M(x(r.currentIcon),{style:g({width:`${t.width}`,height:`${t.height}`}),class:o({clickable:t.clickable})},null,8,["style","class"])),[[d,{content:t.tooltip,html:t.htmlTooltip,shown:t.alwaysShown}]])]),_:1})])}const _e=p(K,[["render",ee],["__scopeId","data-v-f6b7b55b"]]);function te(e){switch(e){case"@icons/checkmark-rectangle":case"@icons/checkmark-rectangle.svg":return n(()=>import("./DFpM3mRG.js"),__vite__mapDeps([0,1,2]),import.meta.url);case"@icons/checkmark":case"@icons/checkmark.svg":return n(()=>import("./DafKzyEP.js"),__vite__mapDeps([3,1,2]),import.meta.url);case"@icons/chevron-down":case"@icons/chevron-down.svg":return n(()=>import("./DhaAPt8y.js"),__vite__mapDeps([4,1,2]),import.meta.url);case"@icons/chevron-left":case"@icons/chevron-left.svg":return n(()=>import("./34A59IiS.js"),__vite__mapDeps([5,1,2]),import.meta.url);case"@icons/chevron-right":case"@icons/chevron-right.svg":return n(()=>import("./iACt1a8Z.js"),__vite__mapDeps([6,1,2]),import.meta.url);case"@icons/chevron-up":case"@icons/chevron-up.svg":return n(()=>import("./BiXgA6LG.js"),__vite__mapDeps([7,1,2]),import.meta.url);case"@icons/cross":case"@icons/cross.svg":return n(()=>import("./B3h630wy.js"),__vite__mapDeps([8,1,2]),import.meta.url);case"@icons/empty-heart":case"@icons/empty-heart.svg":return n(()=>import("./B1gdLCcz.js"),__vite__mapDeps([9,1,2]),import.meta.url);case"@icons/heart-filled":case"@icons/heart-filled.svg":return n(()=>import("./CQzKPdYZ.js"),__vite__mapDeps([10,1,2]),import.meta.url);case"@icons/help":case"@icons/help.svg":return n(()=>import("./BlnWJBM0.js"),__vite__mapDeps([11,1,2]),import.meta.url);case"@icons/home":case"@icons/home.svg":return n(()=>import("./DO_nM711.js"),__vite__mapDeps([12,1,2]),import.meta.url);case"@icons/progress-help":case"@icons/progress-help.svg":return n(()=>import("./B3gRA0eq.js"),__vite__mapDeps([13,1,2]),import.meta.url);case"@icons/search":case"@icons/search.svg":return n(()=>import("./t-K2Nj7T.js"),__vite__mapDeps([14,1,2]),import.meta.url);case"@icons/star-filled":case"@icons/star-filled.svg":return n(()=>import("./dNSH36Bd.js"),__vite__mapDeps([15,1,2]),import.meta.url);case"@icons/star":case"@icons/star.svg":return n(()=>import("./BCFwBZB0.js"),__vite__mapDeps([16,1,2]),import.meta.url);default:return new Promise(function(a,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}const ae={name:"Loader",props:{isLoading:{type:Boolean,default:!0},message:{type:String,default:"De data wordt geladen..."},type:{validator:e=>h(["big","small","extra-small","mega-small","icon"],e),type:String,default:"big"},timeout:{type:Number,default:1},onNextTick:{type:Boolean,default:!1},emitEvents:{type:Boolean,default:!0},withMessage:{type:Boolean,default:!0},withImage:{type:Boolean,default:!0},strokeWidth:{validator:e=>h(["thick","thin"],e),type:String,default:"thin"},darkMode:{type:Boolean,required:!0},size:{type:String,default:"Normal"}},data(){return{events:{init:{name:"init"},finish:{name:"finished"}}}},computed:{loaderColor(){return this.darkMode?"#FFFFFF":"#000000"},strokeWidthInSVGFormat(){return this.strokeWidth==="thick"?"10":"4"}},watch:{isLoading(e){e||this.finish()}},created(){this.emit(this.events.init)},unmounted(){this.emit(this.events.finish)},methods:{emit(e,a){e.name&&this.$emit(e.name,a),typeof e.callback=="function"&&e.callback()},finish(){const e=this;setTimeout(()=>{e.onNextTick?this.$parent.$nextTick(()=>{e.emit(e.events.finish)}):e.emit(e.events.finish)},e.timeout)}}},re=e=>(F("data-v-8ff2fd38"),e=e(),N(),e),ie=["stroke-width"],ne=re(()=>_("animateTransform",{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 50;360 50 50",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"},null,-1)),se=[ne];function oe(e,a,t,r,i,s){return l(),c("div",{id:"loader",class:o({big:t.type==="big",small:t.type==="small","extra-small":t.type==="extra-small","mega-small":t.type==="mega-small",icon:t.type==="icon"})},[(l(),c("svg",{class:o(["image lds-rolling",{hide:!t.withImage}]),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",style:{background:"none"}},[_("circle",{cx:"50",cy:"50",fill:"none",style:g({stroke:s.loaderColor}),"stroke-width":s.strokeWidthInSVGFormat,r:"35","stroke-dasharray":"164.93361431346415 56.97787143782138",transform:"rotate(122.679 50 50)"},se,12,ie)],2)),_("h2",{class:o(["title",{hide:!t.withMessage,"is-dark-mode":t.darkMode}])},C(t.message),3)],2)}const me=p(ae,[["render",oe],["__scopeId","data-v-8ff2fd38"]]);export{de as H,ue as T,_e as _,W as a,me as b,X as v};