import{H as B,_ as G,T as R,b as Q}from"./CY_aXMaG.js";import{i as p,_ as U}from"./CodAIxN7.js";import{t as N,s as E,_ as P}from"./CkcP6Ago.js";import{_ as j,u as M,y as q,s as z,z as D,B as W,C as x,l as T,D as O,o as c,c as d,b as a,w as C,a as i,j as H,F as m,E as J,k as v,d as k,t as f,n as w,g as y,v as K,q as A,x as X,A as I,p as Y,e as Z}from"./C6ynQlvO.js";import{d as V}from"./7E6n3K6A.js";import"./BCt8_C-_.js";import"./7rtHL6j7.js";const $={name:"LearningSentences",setup(){var _;const e=M(),t=q(),{loading:l,allData:o,arabic:n}=z(e),s=(_=t==null?void 0:t.params)==null?void 0:_.id,h=D(()=>W(l.value)||W(o.value)||W(n.value)?!0:l.value),g=D(()=>{var b;return p(n.value)?null:(b=n.value)==null?void 0:b.find(L=>L.lession===s)});return{currentRouteId:s,loading:h,specificLession:g}},data(){return{debouncedGoNext:V(this.goNext,1e3),inputText:"",learning:"Arabic",currentIndex:0,correct:!1,initial:!0,inCorrect:!1,preventGoNext:!1,allWords:[],askWhatToDo:!0,settings:{showHint:!0,hintLetters:0,showWord:!1}}},computed:{learningWord(){return this.learning==="Arabic"?this.currentWord.arabic:this.currentWord.english},placeholderText(){return W(this.currentWord)?"":this.settings.showHint?`Fill in: ${this.learningWord}`:this.settings.showWord?`Fill in: ${this.learningWord}`:this.settings.hintLetters>0?`Fill in: ${this.learningWord.substring(0,this.settings.hintLetters)}`:""},showHintIcons(){return this.settings.showHint?!1:this.placeholderText!==`Fill in: ${this.learningWord}`},currentWord(){return p(this.specificLession)?null:this.allWords[this.currentIndex]}},watch:{specificLession:{handler(e,t){p(e)||W(e)||this.reloadQuestion(e.data)},immediate:!0},"settings.hintLetters":{handler(e,t){t!==e&&e!==0&&!this.settings.showHint&&e>0&&(this.inputText="",this.placeholderText===`Fill in: ${this.learningWord}`&&(this.settings.showWord=!0))}},"settings.showWord":{handler(e,t){t!==e&&!this.settings.showHint&&e&&(this.inputText="",this.settings.hintLetters=0)}},learning:{handler(e,t){t!==e&&(this.currentIndex=0,this.inputText="",this.shuffle(),this.settings={showHint:this.settings.showHint,hintLetters:0,showWord:!1})}},askWhatToDo:{handler(e,t){t!==e&&e&&(this.currentIndex=0,this.inputText="",this.allWords=x(this.allWords,(l,o)=>({...l,id:o+1,correct:!1,star:!1})))}},currentIndex:{handler(e,t){if(t!==e&&(this.inputText="",this.settings.showWord=!1,this.settings.hintLetters=0,this.allWords[e].correct)){const l=this.splitString(this.learningWord);this.inputText=l[0].toLowerCase()}}}},mounted(){},methods:{textChange(e){if(this.preventGoNext)return;const t=e.target.value.toLowerCase();this.inputText=t;const l=this.parseText(this.learningWord);this.splitString(l).includes(t)?(this.correct=!0,this.debouncedGoNext(!1),this.preventGoNext=!0,setTimeout(()=>{this.preventGoNext=!1},2e3)):this.inCorrect=!0,setTimeout(()=>{this.inCorrect=!1,this.correct=!1},2e3)},parseText(e){let t=e.toLowerCase();return t.includes("(p)")&&(t=t.replace("(p)","")),t.includes("(a)")&&(t=t.replace("(a)","")),t.includes("(s)")&&(t=t.replace("(s)","")),t.includes("(m)")&&(t=t.replace("(m)","")),t.includes("(i)")&&(t=t.replace("(i)","")),t.includes("____")&&(t=t.replace("____","")),t},splitString(e){let t=[];return e.includes("/")?t=e.split("/").map(l=>l.trim()):t=[e.trim()],t=t.map(l=>(l=this.parseText(l),l)),t},goNext(e=!1){const t=this.inputText.toLowerCase(),l=this.parseText(this.learningWord),o=this.splitString(l);this.allWords[this.currentIndex].correct=e?!0:o.includes(t);const n=T(this.allWords,s=>!s.correct&&s.visible);if(p(n)){setTimeout(()=>{const s=T(this.allWords,h=>h.star&&h.visible);if(p(s)){this.reloadQuestion(this.specificLession.data),this.askWhatToDo=!0,N.alert("Great job!",4e3,"success");return}else N.alert("Only star questions are shown.",4e3,"info"),this.allWords=T(this.allWords,h=>h.star),this.allWords=x(this.allWords,(h,g)=>({...h,id:g+1,correct:!1})),this.currentIndex=0,this.inputText=""},1e3);return}if(this.currentIndex===this.allWords.length-1){this.inCorrect=!0;const s=O(this.allWords,h=>!h.correct);this.currentIndex=s,setTimeout(()=>{this.inCorrect=!1},1e3);return}this.currentIndex++},shuffle(){this.allWords=E(this.allWords),this.currentIndex=0,this.inputText="",this.allWords=x(this.allWords,(e,t)=>({...e,id:t+1,correct:!1}))},goPrevious(){if(this.currentIndex===0)return;const e=this.inputText.toLowerCase(),t=this.parseText(this.learningWord),l=this.splitString(t);this.allWords[this.currentIndex].correct=l.includes(e),this.currentIndex--},whatToDoNext(e){e==="learn-with-hint"?this.settings.showHint=!0:e==="learn-no-hint"&&(this.settings.showHint=!1),this.shuffle(),this.settings.hintLetters=0,this.settings.showWord=!1,this.askWhatToDo=!1,this.inputText="",this.initial=!1},setStar(e){this.allWords[this.currentIndex].star=e},reloadQuestion(e){this.allWords=e,this.allWords=x(this.allWords,(t,l)=>({...t,id:l+1,correct:!1,star:!1,visible:!0}))},learnStars(e){const t=T(this.allWords,l=>l.star);if(p(t)){N.alert("No stars found.",4e3,"info");return}this.allWords=t,this.settings.showHint=e,this.settings.hintLetters=0,this.settings.showWord=!1,this.allWords=x(this.allWords,(l,o)=>({...l,id:o+1,correct:!1})),this.currentIndex=0,this.inputText=""},unstarAll(){this.allWords=x(this.allWords,(e,t)=>({...e,id:t+1,star:!1}))},correctNextQuestion(){this.allWords[this.currentIndex].correct=!0,this.goNext(!0)}}},F=e=>(Y("data-v-7e603dc6"),e=e(),Z(),e),tt={class:"body"},et={class:"navigate-home"},st={class:"actions no-select"},it={class:"learn"},nt=F(()=>i("span",{class:"label"},"Learning",-1)),rt={key:0,class:"actions-content mobile"},lt={key:0,class:"actions-content desktop"},ot={class:"gold"},at={key:1,class:"learning"},ct={key:0,class:"card-item"},ht={class:""},dt={class:"gold"},ut={key:1},ft={class:"gold"},gt={class:"input-container"},pt={class:"left"},xt={class:"input"},vt=["placeholder"],kt={class:"icons clickable"},Wt={class:"right"},mt={class:"label-status"},wt={class:"left"},_t={class:"text"},bt={class:"right"},Tt={class:"navigation-container no-select"},Ct={class:"pagination"},It=["onClick"],Lt={key:2,class:"ask-what-to-do"},St=F(()=>i("h4",null,"What do you want to do?",-1)),Nt={class:"buttons"};function yt(e,t,l,o,n,s){const h=R,g=B,_=Q,b=U,L=P,u=G;return c(),d("div",{class:w(["content container",{loaded:!o.loading}])},[a(g,null,{default:C(()=>[a(h,null,{default:C(()=>[k("Learning Darija")]),_:1})]),_:1}),i("div",tt,[o.loading||!o.specificLession?(c(),H(_,{key:0,message:"Getting data...","dark-mode":!0})):(c(),d(m,{key:1},[a(g,null,{default:C(()=>[a(h,null,{default:C(()=>{var r;return[k("Learning "+f((r=o.specificLession)==null?void 0:r.title),1)]}),_:1})]),_:1}),i("div",et,[t[0]||(I(-1),t[0]=a(b,{border:!1,links:[{href:`/learning/${o.currentRouteId}`,label:o.specificLession.title},{href:`/learning/sentences/${o.specificLession.lession}`,label:"Sentences"}]},null,8,["links"]),I(1),t[0]),i("div",st,[i("div",it,[nt,J([n.learning],()=>a(L,{value:n.learning,"onUpdate:value":t[1]||(t[1]=r=>n.learning=r),class:"radio-buttons",items:["Arabic","English"]},null,8,["value"]),t,2)])]),n.askWhatToDo?v("",!0):(c(),d("div",rt,[i("div",{class:"what-to-do clickable",onClick:t[3]||(t[3]=r=>n.askWhatToDo=!0)}," Different learning method "),i("div",{class:"what-to-do clickable",onClick:t[4]||(t[4]=r=>s.learnStars(!0))}," Learns stars with hint "),i("div",{class:"what-to-do clickable",onClick:t[5]||(t[5]=r=>s.learnStars(!1))}," Learns stars "),i("div",{class:"what-to-do clickable",onClick:t[6]||(t[6]=(...r)=>s.shuffle&&s.shuffle(...r))},"Reshuffle"),i("div",{class:"what-to-do clickable",onClick:t[7]||(t[7]=(...r)=>s.unstarAll&&s.unstarAll(...r))}," Unstar all ")]))]),n.askWhatToDo?v("",!0):(c(),d("div",lt,[i("div",{class:"what-to-do clickable",onClick:t[8]||(t[8]=r=>n.askWhatToDo=!0)}," Different learning method "),i("div",{class:"what-to-do clickable",onClick:t[9]||(t[9]=r=>s.learnStars(!0))}," Learns stars with hint "),i("div",{class:"what-to-do clickable",onClick:t[10]||(t[10]=r=>s.learnStars(!1))}," Learns stars "),i("div",{class:"what-to-do clickable",onClick:t[11]||(t[11]=(...r)=>s.shuffle&&s.shuffle(...r))},"Reshuffle"),i("div",{class:"what-to-do clickable",onClick:t[12]||(t[12]=(...r)=>s.unstarAll&&s.unstarAll(...r))},"Unstar all")])),t[13]||(I(-1),t[13]=i("h2",{class:"title"},[k(" Learn "),i("span",ot,f(o.specificLession.title),1)]),I(1),t[13]),n.askWhatToDo?(c(),d("div",Lt,[St,i("div",Nt,[i("button",{class:"button",onClick:t[24]||(t[24]=r=>s.whatToDoNext("learn-with-hint"))}," Learn with hint "),i("button",{class:"button",onClick:t[25]||(t[25]=r=>s.whatToDoNext("learn-no-hint"))}," Learn without hint ")])])):(c(),d("div",at,[s.currentWord?(c(),d("div",ct,[n.settings.showHint?(c(),d(m,{key:0},[i("span",ht,f(s.currentWord.english),1),k(": "),i("span",dt,f(s.currentWord.arabic),1)],64)):(c(),d("h2",ut,[k(" What is the "+f(n.learning)+" word for ",1),i("span",ft,f(n.learning==="Arabic"?s.currentWord.english:s.currentWord.arabic),1),k(" ? ")]))])):v("",!0),i("div",gt,[i("div",pt,[a(u,{class:w({invincible:n.currentIndex===0}),clickable:n.currentIndex!==0,name:"chevron-left",onClick:s.goPrevious},null,8,["class","clickable","onClick"])]),i("div",xt,[y(i("input",{"onUpdate:modelValue":t[14]||(t[14]=r=>n.inputText=r),type:"text",class:w({correct:n.correct,"in-correct":n.inCorrect}),placeholder:s.placeholderText,onInput:t[15]||(t[15]=r=>s.textChange(r))},null,42,vt),[[K,n.inputText]]),i("div",kt,[n.inputText!==""?(c(),d(m,{key:0},[a(u,{name:"cross",tooltip:"Clear text",width:"25px",height:"25px",onClick:t[16]||(t[16]=r=>n.inputText="")}),a(u,{name:"checkmark-rectangle",tooltip:"This word is correct",width:"25px",height:"25px",onClick:t[17]||(t[17]=r=>s.goNext(!0))})],64)):v("",!0),n.settings.showHint?v("",!0):(c(),d(m,{key:1},[s.showHintIcons?(c(),H(u,{key:0,tooltip:"Show hint",name:"progress-help",width:"25px",height:"25px",onClick:t[18]||(t[18]=r=>n.settings.hintLetters++)})):v("",!0),a(u,{name:"help",tooltip:n.settings.showWord?"Hide word":"Show word",width:"25px",height:"25px",onClick:t[19]||(t[19]=r=>n.settings.showWord=!n.settings.showWord)},null,8,["tooltip"])],64)),y(a(u,{name:"star-filled",width:"25px",tooltip:"Unstar this question",height:"25px",onClick:t[20]||(t[20]=r=>s.setStar(!1))},null,512),[[A,s.currentWord.star]]),y(a(u,{name:"star",tooltip:"Star this question",width:"25px",height:"25px",onClick:t[21]||(t[21]=r=>s.setStar(!0))},null,512),[[A,!s.currentWord.star]]),a(u,{name:"checkmark",width:"25px",tooltip:"Correct, next question",height:"25px",onClick:s.correctNextQuestion},null,8,["onClick"])])]),i("div",Wt,[a(u,{class:"clickable",name:"chevron-right",onClick:t[22]||(t[22]=r=>s.goNext(!1))})])]),i("div",mt,[i("div",wt,[a(u,{class:w({invincible:n.currentIndex===0}),clickable:n.currentIndex!==0,name:"chevron-left",onClick:s.goPrevious},null,8,["class","clickable","onClick"])]),i("div",_t,f(n.currentIndex+1)+" of the "+f(n.allWords.length)+" sentences ",1),i("div",bt,[a(u,{class:"clickable",name:"chevron-right",onClick:t[23]||(t[23]=r=>s.goNext(!1))})])]),i("div",Tt,[i("ul",Ct,[(c(!0),d(m,null,X(n.allWords,(r,S)=>(c(),d("li",{key:r.id,class:"page-item"},[i("div",{class:w(["page-link clickable",{clickable:r.visible,answered:r.correct,star:r.star,current:n.currentIndex===S}]),onClick:Dt=>n.currentIndex=S},[i("span",null,f(S+1),1)],10,It)]))),128))])])]))],64))])],2)}const Ut=j($,[["render",yt],["__scopeId","data-v-7e603dc6"]]);export{Ut as default};
