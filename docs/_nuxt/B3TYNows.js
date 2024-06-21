import{H as D,a as H,T as j,b as z}from"./DrIJeD_-.js";import{i as A,_ as E}from"./DFm2M-ZF.js";import{_ as F}from"./B2LsALDa.js";import{_ as G,u as M,y as O,s as P,z as N,o as t,c as m,a as s,b as o,w as a,j as x,k as I,n as q,d as i,F as R,t as f,A as p,x as J,B as g}from"./YD9mwFcM.js";import"./DtnsCFOV.js";const K={name:"Learning",async setup(){var d;const y=M(),n=O(),{loading:L,allData:e,arabic:c}=P(y),k=(d=n==null?void 0:n.params)==null?void 0:d.id,r=N(()=>{var _;return A(c.value)?null:(_=c.value)==null?void 0:_.find(u=>u.lession===k)});return{loading:N(()=>g(L.value)||g(e.value)||g(r.value)||g(c.value)?!0:L.value),allData:e,currentRouteId:k,specificLession:r}}},Q={class:"body"},U={class:"gold"},W={class:"learn"},X={class:"board is-thumb"},Y={class:""},Z={class:"gold"};function $(y,n,L,e,c,k){const r=j,v=D,d=z,_=E,u=F,S=H;return t(),m("div",{class:q(["content container",{loaded:!e.loading}])},[s("div",Q,[o(v,null,{default:a(()=>[o(r,null,{default:a(()=>[i("Learning Darija")]),_:1})]),_:1}),e.loading?(t(),x(d,{key:0,message:"Getting data...","dark-mode":!0})):I("",!0),o(S,null,{default:a(()=>{var b,h,B,T,w,C;return[e.specificLession?(t(),m(R,{key:0},[o(v,null,{default:a(()=>[o(r,null,{default:a(()=>{var l;return[i("Learning "+f((l=e.specificLession)==null?void 0:l.title),1)]}),_:1})]),_:1}),n[0]||(p(-1),n[0]=s("div",{class:"navigate-home"},[o(_,{links:[{href:`/learning/${e.currentRouteId}`,label:(b=e.specificLession)==null?void 0:b.title}]},null,8,["links"])]),p(1),n[0]),n[1]||(p(-1),n[1]=s("h2",{class:"title"},[i(" Learn "),s("span",U,f((h=e.specificLession)==null?void 0:h.title),1)]),p(1),n[1]),s("div",W,[(B=e.specificLession)!=null&&B.hasSentences?(t(),x(u,{key:0,class:"learn-words",to:`/learning/sentences/${(T=e.specificLession)==null?void 0:T.lession}`},{default:a(()=>[i("Learn sentences")]),_:1},8,["to"])):(t(),x(u,{key:1,class:"learn-words",to:`/learning/words/${(w=e.specificLession)==null?void 0:w.lession}`},{default:a(()=>[i("Learn words")]),_:1},8,["to"]))]),s("div",X,[(t(!0),m(R,null,J((C=e.specificLession)==null?void 0:C.data,(l,V)=>(t(),m("div",{key:V,class:"card-item"},[s("span",Y,f(l.english),1),i(": "),s("span",Z,f(l.arabic),1)]))),128))])],64)):I("",!0)]}),_:1})])],2)}const oe=G(K,[["render",$],["__scopeId","data-v-0c4eadd7"]]);export{oe as default};