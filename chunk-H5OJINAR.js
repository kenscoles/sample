import{a as C,b as L,c as z,d as V}from"./chunk-MOHPI53O.js";import{f as I}from"./chunk-JB4JUH24.js";import{I as T,K as E}from"./chunk-L43F4472.js";import{Fb as M,Ia as d,Ja as b,Za as m,ab as w,ac as P,eb as h,fb as S,g,gb as j,hb as O,ia as y,ib as o,jb as l,kb as k,lb as _,nb as u,ob as p,sa as x,ta as f,xb as c,yb as v,zb as D}from"./chunk-PDXFFI4R.js";function B(e,r){if(e&1&&c(0),e&2){let s=p();D("Spell a word from these letters. Clue : ",s.clue,"")}}function A(e,r){e&1&&c(0,"You work it out next time!")}function N(e,r){e&1&&c(0,"Well done!")}function U(e,r){if(e&1&&(o(0,"div",5),c(1),l()),e&2){let s=r.$implicit,i=p();w("background-color",i.correctOrder?"pink":"yellow"),d(),v(s)}}function Y(e,r){if(e&1){let s=_();o(0,"button",6),u("click",function(){x(s);let t=p();return f(t.cheat())}),c(1,"Give up"),l()}}function $(e,r){if(e&1){let s=_();o(0,"button",6),u("click",function(){x(s);let t=p();return f(t.prepareData())}),c(1," Play again "),l()}}var Q=(()=>{let r=class r{constructor(i,t){this.http=i,this.util=t,this.correctOrder=!1,this.words=[],this.myString="",this.jumbled=[],this.correct=[],this.clue="",this.cheated=!1}ngOnInit(){this.http.get("assets/words.json").subscribe(i=>{this.words=i,this.prepareData()})}prepareData(){this.cheated=!1,this.correctOrder=!1,this.jumbled=[],this.correct=[];let i=this.util.getRand(this.words.length);this.myString=this.words[i].data,this.clue=this.words[i].description,this.correctOrder=!1,this.myString=this.myString.toLocaleUpperCase(),this.jumbled=[...this.myString],this.correct=Array.from(this.jumbled),this.jumbled.sort(),this.myString=this.jumbled.join("");let t=this.correct.join("");this.myString==t&&this.util.sattoloCycle(this.jumbled),console.log(this.jumbled),console.log(this.correct)}drop(i){this.correctOrder=!0,C(this.jumbled,i.previousIndex,i.currentIndex),console.log(`first letter: ${this.jumbled[0]}`);for(let t=0;t<this.jumbled.length;t++)if(this.jumbled[t]!==this.correct[t]){this.correctOrder=!1;break}this.myString=this.jumbled.join(""),this.myString=this.myString.toLocaleLowerCase(),console.log(this.myString),this.words.forEach(t=>{t.data==this.myString&&(this.correctOrder=!0,console.log("YES found a match"))}),this.correctOrder}cheat(){return g(this,null,function*(){return this.cheated=!0,new Promise(i=>g(this,null,function*(){let t=n=>new Promise(a=>setTimeout(a,n));for(let n=0;n<this.correct.length;n++){yield t(1e3);for(let a=n;a<this.jumbled.length;a++)this.correct[n]==this.jumbled[a]&&C(this.jumbled,a,n)}i(),this.correctOrder=!0}))})}};r.\u0275fac=function(t){return new(t||r)(b(P),b(I))},r.\u0275cmp=y({type:r,selectors:[["app-spelling"]],standalone:!0,features:[M],decls:15,vars:3,consts:[[1,"instruction"],["cdkDropList","","cdkDropListOrientation","horizontal",1,"example-list",3,"cdkDropListDropped"],["cdkDrag","",1,"example-box",3,"background-color"],[1,"centre"],["mat-raised-button","","color","primary"],["cdkDrag","",1,"example-box"],["mat-raised-button","","color","primary",3,"click"]],template:function(t,n){t&1&&(o(0,"div",0),m(1,B,1,1)(2,A,1,0)(3,N,1,0),l(),o(4,"div",1),u("cdkDropListDropped",function(F){return n.drop(F)}),j(5,U,2,3,"div",2,S),l(),o(7,"div",3),m(8,Y,2,0,"button",4),l(),o(9,"div",3),m(10,$,2,0,"button",4),l(),k(11,"br")(12,"br"),o(13,"p"),c(14,"For Ben and Ezra 2024"),l()),t&2&&(d(),h(1,n.correctOrder?n.cheated?2:3:1),d(4),O(n.jumbled),d(3),h(8,n.correctOrder?-1:8),d(2),h(10,n.correctOrder?10:-1))},dependencies:[V,z,L,E,T],styles:[".instruction[_ngcontent-%COMP%]{text-align:center;font-size:medium;color:#00f;margin-bottom:20px}.centre[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:10px}.example-list[_ngcontent-%COMP%]{width:40%;align-items:center;justify-content:center;max-width:95%;border:solid 1px #ccc;min-height:100px;display:flex;margin:auto;flex-direction:row;background:#fff;border-radius:4px;overflow:hidden}.example-box[_ngcontent-%COMP%]{padding:10px;border-right:solid 2px #ccc;border-left:solid 2px #ccc;border-top:solid 2px #ccc;border-bottom:solid 2px #ccc;color:#0f086d;display:flex;max-width:50px;flex-direction:row;align-items:center;justify-content:center;box-sizing:border-box;cursor:move;font-size:12pt;flex-grow:1;flex-basis:0}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.pic[_ngcontent-%COMP%]{display:flex;justify-content:center}p[_ngcontent-%COMP%]{text-align:center}@media all and (max-width: 700px){.example-list[_ngcontent-%COMP%]{width:75%;margin-top:15%}}@media all and (max-width: 450px){.example-list[_ngcontent-%COMP%]{width:90%;margin-top:10%}}"]});let e=r;return e})();export{Q as SpellingComponent};