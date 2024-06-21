import{H as y,a as C,T as v,b as B}from"./4OU-g_Ht.js";import{i as w,_ as N}from"./BAuHmbfe.js";import{_ as T}from"./BANkqTWj.js";import{_ as I,M as R,l as V,m as _,P as j,o as s,c,a as t,b as i,w as n,k as m,j as L,n as H,d as o,F as h,t as l,x as D,y as d}from"./CHGAFSrD.js";import"./CdquDSsO.js";const E={name:"Learning",setup(){return{mainStore:R()}},data(){return{darijaLib:V}},computed:{mainStoreComputed(){return _(this.mainStore.$state)?{}:this.mainStore.$state},loading(){return _(this.mainStoreComputed.loading)||_(this.specificLession)?!0:this.mainStoreComputed.loading},specificLession(){return w(this.mainStoreComputed.arabic)?null:this.mainStoreComputed.arabic.find(u=>u.lession===this.currentRouteId)},currentRouteId(){return(this._.provides[j]||this.$route).params.id}},mounted(){}},F={class:"body"},M={class:"gold"},P={class:"learn"},z={class:"board is-thumb"},G={class:""},O={class:"gold"};function q(u,a,A,J,K,e){const p=v,f=y,k=B,b=N,g=T,S=C;return s(),c("div",{class:H(["content container",{loaded:!e.loading}])},[t("div",F,[i(f,null,{default:n(()=>[i(p,null,{default:n(()=>[o("Learning Darija")]),_:1})]),_:1}),e.loading?(s(),m(k,{key:0,message:"Getting data...","dark-mode":!0})):L("",!0),i(S,null,{default:n(()=>[e.specificLession?(s(),c(h,{key:0},[i(f,null,{default:n(()=>[i(p,null,{default:n(()=>{var r;return[o("Learning "+l((r=e.specificLession)==null?void 0:r.title),1)]}),_:1})]),_:1}),a[0]||(d(-1),a[0]=t("div",{class:"navigate-home"},[i(b,{links:[{href:`/learning/${e.currentRouteId}`,label:e.specificLession.title}]},null,8,["links"])]),d(1),a[0]),a[1]||(d(-1),a[1]=t("h2",{class:"title"},[o(" Learn "),t("span",M,l(e.specificLession.title),1)]),d(1),a[1]),t("div",P,[e.specificLession.hasSentences?(s(),m(g,{key:0,class:"learn-words",to:`/learning/sentences/${e.specificLession.lession}`},{default:n(()=>[o("Learn sentences")]),_:1},8,["to"])):(s(),m(g,{key:1,class:"learn-words",to:`/learning/words/${e.specificLession.lession}`},{default:n(()=>[o("Learn words")]),_:1},8,["to"]))]),t("div",z,[(s(!0),c(h,null,D(e.specificLession.data,(r,x)=>(s(),c("div",{key:x,class:"card-item"},[t("span",G,l(r.english),1),o(": "),t("span",O,l(r.arabic),1)]))),128))])],64)):L("",!0)]),_:1})])],2)}const Z=I(E,[["render",q],["__scopeId","data-v-2f0b14cb"]]);export{Z as default};
