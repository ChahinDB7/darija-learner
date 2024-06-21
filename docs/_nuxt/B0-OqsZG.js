import{_ as C,H,a as P,T as V,b as $}from"./Dyw1tcIP.js";import{f as z,_ as k,o as l,c as h,a as s,b as i,n as _,g as b,v as G,h as O,i as S,d as v,t as p,r as B,j as g,k as x,M as J,l as K,m as F,q as Q,s as W,w as u,u as q,F as M,x as T,p as X,e as Y}from"./UnfIVmXl.js";import{_ as Z}from"./B68HOunm.js";import{d as E}from"./CblindyZ.js";import"./DiM83Djz.js";var L=/[\\^$.*+?()[\]{}|]/g,ee=RegExp(L.source);function te(e){return e=z(e),e&&ee.test(e)?e.replace(L,"\\$&"):e}const se={name:"SearchBar",props:{value:{type:String,required:!0},disabled:{type:Boolean,default:!1,required:!1}},data(){return{search:this.value}},watch:{value(e,t){e!==t&&this.checked!==e&&(this.search=e)}},methods:{openSearch(){this.$refs.search.focus()},inputChange(e){const t=e.target.value;this.$emit("update:value",t),this.$emit("input",t)}}};function ne(e,t,r,f,n,o){const m=C;return l(),h("div",{class:"search-box",onClick:t[2]||(t[2]=(...c)=>o.openSearch&&o.openSearch(...c))},[s("button",{class:_(["btn-search",{"has-search":n.search.length>0}])},[i(m,{name:"search"})],2),b(s("input",{ref:"search","onUpdate:modelValue":t[0]||(t[0]=c=>n.search=c),type:"text",class:_(["input-search no-css",{"has-search":n.search.length>0}]),placeholder:"Search",onInput:t[1]||(t[1]=c=>o.inputChange(c))},null,34),[[G,n.search]])])}const ae=k(se,[["render",ne],["__scopeId","data-v-08f1a39e"]]),oe={name:"AccordionPanel",props:{value:{type:Boolean,required:!1,default:null},title:{type:String,required:!1,default:null},showScrollbar:{type:Boolean,required:!1,default:!1},expanded:{type:Boolean,required:!1,default:!1},hideChevron:{type:Boolean,required:!1,default:!1}},data(){return{id:this.generateRandomId(),debouncedToggle:E(this.toggle,50),open:this.expanded}},watch:{value(e,t){e!==t&&(this.open=e)},open:{handler(e,t){t!==e&&this.$emit("collapsed",e)}}},methods:{toggle(){this.open=!this.open},generateRandomId(){const e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";let t="";for(let r=0;r<5;r++){const f=Math.floor(Math.random()*e.length);t+=e.charAt(f)}return t}}},re={class:"c"},le=["id"],ce={class:"header no-select"},ie={class:"content"};function de(e,t,r,f,n,o){const m=C;return l(),h("div",{class:_(["panel",{"has-scroll":r.showScrollbar}])},[s("div",re,[b(s("input",{id:n.id,"onUpdate:modelValue":t[0]||(t[0]=c=>n.open=c),type:"checkbox"},null,8,le),[[O,n.open]]),s("div",ce,[s("label",{onClick:t[2]||(t[2]=S(c=>n.open=!n.open,["self"]))},[s("span",{class:"title",onClick:t[1]||(t[1]=S(c=>n.open=!n.open,["self"]))},[v(p(r.title)+" ",1),B(e.$slots,"header",{toggle:n.debouncedToggle,open:n.open},void 0,!0)]),r.hideChevron?x("",!0):(l(),g(m,{key:0,name:"chevron-down",class:_(["chevron",{up:n.open}])},null,8,["class"]))])]),s("div",{class:_(["p is-thumb",{"has-scroll":r.showScrollbar}])},[s("div",ie,[B(e.$slots,"default",{},void 0,!0)])],2)])],2)}const ue=k(oe,[["render",de],["__scopeId","data-v-5b048ef5"]]),he={name:"Learning",setup(){return{mainStore:J()}},data(){return{darijaLib:K,debouncedSearch:E(this.doSearch,1e3),search:"",searchResults:[]}},computed:{mainStoreComputed(){return F(this.mainStore.$state)?{}:this.mainStore.$state},loading(){return F(this.mainStoreComputed.loading)?!0:this.mainStoreComputed.loading}},watch:{search(e,t){e!==t&&this.debouncedSearch()}},methods:{isFavorited(e){return e.favorite},toggleFavorite(e){this.mainStore.setFavorite(e)},doSearch(){if(this.search===""){this.searchResults=[];return}const e=this.mainStoreComputed.allData,t=new RegExp(te(this.search),"i");this.searchResults=Q(e,r=>t.test(r.title)||t.test(r.english)||t.test(r.arabic))}}},pe=e=>(X("data-v-b4b637bc"),e=e(),Y(),e),_e={class:"body"},me={class:"title"},fe=pe(()=>s("span",null,"Learning Darija",-1)),ve=["onClick"],ge={class:"title"},be={class:"actions"},Se={class:"words is-thumb"},xe={class:""},Ce={class:"gold"},ke={key:1,class:"search-result is-thumb"},ye={class:""},Ie={class:"gold"};function Re(e,t,r,f,n,o){const m=V,c=H,D=ae,N=$,y=C,I=Z,U=ue,j=W("masonry-wall"),A=P;return l(),h("div",{class:_(["content container",{loaded:!o.loading}])},[i(c,null,{default:u(()=>[i(m,null,{default:u(()=>[v("Learning Darija")]),_:1})]),_:1}),s("div",_e,[s("h2",me,[fe,i(D,{value:n.search,"onUpdate:value":t[0]||(t[0]=a=>n.search=a),disabled:o.loading},null,8,["value","disabled"])]),o.loading?(l(),g(N,{key:0,message:"Getting data...","dark-mode":!0})):x("",!0),i(A,null,{default:u(()=>[!o.loading&&n.searchResults.length<=0?(l(),g(j,{key:0,items:o.mainStoreComputed.arabic,"min-columns":1,"max-columns":2,"scroll-container":!0,"column-width":400,gap:40,class:"board"},{default:u(({item:a})=>[(l(),h("div",{key:e.index,class:_(["card-container",{sentences:a.hasSentences}])},[i(U,{value:a.open,"onUpdate:value":d=>a.open=d,class:"card-item",expanded:o.isFavorited(a)},{header:u(({toggle:d,open:R})=>[s("div",{class:"title-box",onClick:w=>d()},[s("div",ge,p(a.title),1),s("div",be,[s("span",null,"("+p(a.data.length)+")",1),s("span",null,[b(i(y,{name:"heart-filled",class:"favorite-icon",onClick:S(w=>o.toggleFavorite(a),["stop"])},null,8,["onClick"]),[[q,o.isFavorited(a)]]),b(i(y,{class:"favorite-icon",name:"empty-heart",onClick:S(w=>o.toggleFavorite(a),["stop"])},null,8,["onClick"]),[[q,!o.isFavorited(a)]])])])],8,ve)]),default:u(()=>[i(I,{class:"no-underline",to:`/learning/${a.lession}`},{default:u(()=>[s("div",Se,[(l(!0),h(M,null,T(a.data,(d,R)=>(l(),h("div",{key:R},[s("span",xe,p(d.english),1),v(": "),s("span",Ce,p(d.arabic),1)]))),128))])]),_:2},1032,["to"])]),_:2},1032,["value","onUpdate:value","expanded"])],2))]),_:1},8,["items"])):o.loading?x("",!0):(l(),h("div",ke,[(l(!0),h(M,null,T(n.searchResults,(a,d)=>(l(),g(I,{key:d,to:`/learning/${a.lession}`,class:"card-item"},{default:u(()=>[s("span",ye,p(a.english),1),v(": "),s("span",Ie,p(a.arabic),1)]),_:2},1032,["to"]))),128))]))]),_:1})])],2)}const Te=k(he,[["render",Re],["__scopeId","data-v-b4b637bc"]]);export{Te as default};