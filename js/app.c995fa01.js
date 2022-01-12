(function(){"use strict";var e={927:function(e,t,n){var r=n(242),a=n(396);function l(e,t,n,r,l,i){const s=(0,a.up)("teeter-totter");return(0,a.wg)(),(0,a.j4)(s)}var i=n(139);const s={class:"teeter-totter"},u={key:0,class:"teeter-totter__overlay"},o={class:"teeter-totter__values"},c=(0,a._)("br",null,null,-1),v=(0,a._)("br",null,null,-1),d=(0,a._)("br",null,null,-1),g={class:"teeter-totter__actions"},f=["disabled"],p={class:"teeter-totter__beam-measure"},b={class:"teeter-totter__beam-left"},h={class:"teeter-totter__beam-right"},w=(0,a._)("div",{class:"teeter-totter__block"},null,-1),y=(0,a._)("div",{class:"teeter-totter__stage"},null,-1);function _(e,t,n,r,l,_){const j=(0,a.up)("t-object");return(0,a.wg)(),(0,a.iD)("div",s,[r.isEnded?((0,a.wg)(),(0,a.iD)("div",u,"simulation is ended")):(0,a.kq)("",!0),(0,a._)("div",o,[(0,a.Uk)(" Left kgm: "+(0,i.zw)(r.leftPower)+" ",1),c,(0,a.Uk)(" Right kgm: "+(0,i.zw)(r.rightPower)+" ",1),v,(0,a.Uk)(" Diff (Left - Right): "+(0,i.zw)(r.powerDiff)+" ",1),d,(0,a.Uk)(" Bending percentage: "+(0,i.zw)(r.bending),1)]),(0,a._)("div",g,[(0,a._)("button",{onClick:t[0]||(t[0]=(...e)=>r.restart&&r.restart(...e))},"restart"),(0,a._)("button",{onClick:t[1]||(t[1]=e=>r.isPlaying?r.pause():r.play()),disabled:r.isEnded},(0,i.zw)(r.isPaused?"continue":r.isPlaying?"pause":"play"),9,f)]),(0,a._)("div",{class:"teeter-totter__beam",style:(0,i.j5)({transform:`rotate(${-r.angle}deg)`})},[r.fallingObject?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"teeter-totter__falling-objects",style:(0,i.j5)({transformOrigin:80-20*(r.fallingObject.distance-1)+"% 50%",transform:`rotate(${r.angle}deg)`})},[(0,a.Wm)(j,{type:r.fallingObject.type,weight:r.fallingObject.weight,distance:r.fallingObject.distance,style:(0,i.j5)({bottom:`${r.fallingPos}px`}),last:""},null,8,["type","weight","distance","style"])],4)):(0,a.kq)("",!0),(0,a._)("div",p,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.BEAM_LENGTH,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e})))),128))]),(0,a._)("div",b,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.leftObjects,((e,t)=>((0,a.wg)(),(0,a.j4)(j,{key:t,type:e.type,weight:e.weight,distance:e.distance},null,8,["type","weight","distance"])))),128))]),(0,a._)("div",h,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.rightObjects,((e,t)=>((0,a.wg)(),(0,a.j4)(j,{key:t,type:e.type,weight:e.weight,distance:e.distance,"right-dir":"",last:t===r.rightObjects.length-1},null,8,["type","weight","distance","last"])))),128))])],4),w,y])}const j=10,m=1,O=10,k=O*j/2,P={1:"rectangle",2:"triangle",3:"circle"};function T(e,t,n,r,l,s){return(0,a.wg)(),(0,a.iD)("div",{class:(0,i.C_)(["object",[{object_right:n.rightDir,object_last:n.last},n.type?`object_${r.OBJECT_TYPES[n.type]}`:""]]),style:(0,i.j5)({fontSize:`${n.weight}px`,"--distance":`${n.distance}`})},[(0,a._)("span",null,(0,i.zw)(n.weight),1)],6)}var H={name:"TObject",props:{weight:{type:Number,default:1},rightDir:Boolean,last:Boolean,type:{type:Number,default:1},distance:{type:Number,default:1}},setup(){return{OBJECT_TYPES:P}}},D=n(89);const E=(0,D.Z)(H,[["render",T]]);var M=E,z=n(870);const B=(e,t)=>Math.floor(Math.random()*t)+e;var C=()=>({type:B(1,3),weight:B(m,O),distance:B(1,j/2)});const x=(e,t)=>t.weight*t.distance+e;var F={name:"TeeterTotter",components:{TObject:M},setup(){const e=(0,z.iH)(!1),t=(0,z.iH)(!1),n=(0,z.iH)(!1),r=(0,z.iH)(null),l=(0,z.iH)([]),i=(0,z.iH)([]),s=(0,z.Fl)((()=>l.value.reduce(x,0))),u=(0,z.Fl)((()=>i.value.reduce(x,0))),o=(0,z.Fl)((()=>s.value-u.value)),c=(0,z.Fl)((()=>Math.round(o.value/k*100))),v=(0,z.Fl)((()=>15*c.value/100)),d=(0,z.iH)(500),g=(0,z.iH)(null),f=(0,z.iH)(5),p=()=>{e.value?(t.value=!0,e.value=!1):(t.value=!0,d.value=500,r.value=C(),i.value.push(C()),f.value=5),g.value=setInterval((()=>{f.value?d.value-=100:(l.value.push(r.value),r.value=null,clearInterval(g.value),Math.abs(o.value)<20&&Math.abs(c.value)<30?p():n.value=!0),f.value-=1}),1e3)},b=()=>{t.value=!1,e.value=!0,clearInterval(g.value)},h=()=>{n.value=!1,t.value=!1,clearInterval(g.value),l.value=[],i.value=[],r.value=null};return(0,a.bv)((()=>{document.addEventListener("keydown",(e=>{r.value&&("ArrowLeft"===e.key&&r.value.distance<j/2&&(r.value.distance+=1),"ArrowRight"===e.key&&r.value.distance>1&&(r.value.distance-=1))}))})),{BEAM_LENGTH:j,fallingObject:r,leftObjects:l,rightObjects:i,leftPower:s,rightPower:u,powerDiff:o,bending:c,angle:v,fallingPos:d,play:p,pause:b,isPlaying:t,isPaused:e,restart:h,isEnded:n}}};const L=(0,D.Z)(F,[["render",_]]);var $=L,A={name:"App",components:{TeeterTotter:$}};const N=(0,D.Z)(A,[["render",l]]);var Y=N,I=n(749),U=(0,I.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,r.ri)(Y).use(U).mount("#app")}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var l=t[r]={exports:{}};return e[r](l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,l){if(!r){var i=1/0;for(c=0;c<e.length;c++){r=e[c][0],a=e[c][1],l=e[c][2];for(var s=!0,u=0;u<r.length;u++)(!1&l||i>=l)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(s=!1,l<i&&(i=l));if(s){e.splice(c--,1);var o=a();void 0!==o&&(t=o)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[r,a,l]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,l,i=r[0],s=r[1],u=r[2],o=0;if(i.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(u)var c=u(n)}for(t&&t(r);o<i.length;o++)l=i[o],n.o(e,l)&&e[l]&&e[l][0](),e[i[o]]=0;return n.O(c)},r=self["webpackChunkteeter_totter"]=self["webpackChunkteeter_totter"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(927)}));r=n.O(r)})();
//# sourceMappingURL=app.c995fa01.js.map