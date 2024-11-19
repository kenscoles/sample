import{a as Q}from"./chunk-NTO4GXC6.js";import{e as X}from"./chunk-WQYQ2L4F.js";import"./chunk-HU7WFQWJ.js";import{e as j,g as K,i as R,j as U,k as q,l as J}from"./chunk-Y5S64OON.js";import{f as Y}from"./chunk-4AAP2FPO.js";import{B as H,z}from"./chunk-ZXJTTD66.js";import{$a as O,$b as g,Ab as W,F as P,Fb as h,Fc as M,Gb as d,Hb as p,Ib as u,Jb as o,Kb as r,Lb as _,Mb as S,Ob as C,Pb as c,_a as s,_b as a,cc as L,dc as N,ec as $,gb as T,hc as k,ib as V,ic as w,j as D,jb as G,na as y,oa as v,xa as A,yb as B}from"./chunk-IXHIQVPR.js";var Z=(()=>{class t{constructor(){this.debounceTime=500,this.debounceClick=new A,this.clicks=new D}ngOnInit(){this.subscription=this.clicks.pipe(P(this.debounceTime)).subscribe(e=>this.debounceClick.emit(e))}ngOnDestroy(){this.subscription?.unsubscribe(),console.warn("unsubscribed from debounce directive")}clickEvent(e){e.preventDefault(),e.stopPropagation(),this.clicks.next(e)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275dir=V({type:t,selectors:[["","appDebounceClick",""]],hostBindings:function(n,i){n&1&&C("click",function(f){return i.clickEvent(f)})},inputs:{debounceTime:"debounceTime"},outputs:{debounceClick:"debounceClick"}})}}return t})();var ee=(()=>{class t{transform(e){return new Array(e).fill(1)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275pipe=G({name:"fill",type:t,pure:!0})}}return t})();function ie(t,l){if(t&1&&(o(0,"td"),a(1),r()),t&2){let e=l.$implicit,n=c().$implicit;s(),g(n.combination.items[e-1])}}function ne(t,l){t&1&&a(0," no match ")}function oe(t,l){t&1&&(o(0,"li",3),a(1,"\u26AB"),r())}function re(t,l){t&1&&(o(0,"li",4),a(1,"\u26AA"),r())}function ae(t,l){if(t&1&&(o(0,"tr")(1,"td",1),a(2),r(),p(3,ie,2,1,"td",null,d),B(5,ne,1,0),o(6,"td",2),p(7,oe,2,0,"li",3,d),k(9,"fill"),p(10,re,2,0,"li",4,d),k(12,"fill"),r()()),t&2){let e=l.$implicit,n=l.$index,i=c();s(2),g(n+1),s(),u(i.util.numberArray(1,i.board.fields)),s(2),h(!e.correct&&!e.correctColors?5:-1),s(2),u(w(9,2,e.correct)),s(3),u(w(12,4,e.correctColors))}}function se(t,l){t&1&&(o(0,"td"),a(1,"\xA0"),r())}function le(t,l){if(t&1&&(o(0,"tr")(1,"td"),a(2,"\xA0"),r(),p(3,se,2,0,"td",null,d),o(5,"td"),a(6,"\xA0"),r()()),t&2){let e=c();s(3),u(e.util.numberArray(1,e.board.fields))}}function ce(t,l){if(t&1&&(o(0,"option"),a(1),r()),t&2){let e=l.$implicit;s(),g(e)}}function me(t,l){if(t&1){let e=S();o(0,"td")(1,"select",6),$("ngModelChange",function(i){let b=y(e).$implicit,f=c(2);return N(f.combination.items[b-1],i)||(f.combination.items[b-1]=i),v(i)}),p(2,ce,2,1,"option",null,d),r()()}if(t&2){let e=l.$implicit,n=c(2);s(),L("ngModel",n.combination.items[e-1]),s(),u(n.util.numberArray(1,n.board.colors))}}function de(t,l){if(t&1){let e=S();o(0,"tr")(1,"td"),a(2,"\xA0"),r(),p(3,me,4,1,"td",null,d),o(5,"td")(6,"button",5),C("debounceClick",function(){y(e);let i=c();return v(i.onGuess())}),a(7,"Guess"),r()()()}if(t&2){let e=c();s(3),u(e.util.numberArray(1,e.board.fields)),s(3),W("debounceTime",1e3)}}function pe(t,l){if(t&1&&(o(0,"td"),a(1),r()),t&2){let e=l.$implicit,n=c(2);s(),g(n.board.secretCombination.items[e-1])}}function ue(t,l){if(t&1&&(o(0,"tr")(1,"td"),a(2,"Secret"),r(),p(3,pe,2,1,"td",null,d),o(5,"td"),a(6,"\xA0"),r()()),t&2){let e=c();s(3),u(e.util.numberArray(1,e.board.fields))}}function fe(t,l){t&1&&(o(0,"tr")(1,"td",7),a(2,"Game lost"),r()())}function he(t,l){t&1&&(o(0,"tr")(1,"td",7),a(2,"Game won"),r()())}function _e(t,l){if(t&1){let e=S();o(0,"div")(1,"button",8),C("click",function(){y(e);let i=c();return v(i.newGame())}),a(2,"Play again"),r()()}}var te=(()=>{class t{constructor(e){this.util=e,this.board={maxTries:7,fields:4,colors:6,guesses:[],secretCombination:{items:[]}},this.combination={items:[]},this.gameWon=!1,this.gameLost=!1,this.correct=[],this.letters=[],this.tally1=[],this.tally2=[],this.removeIndex=[],this.match=0,this.count=0}ngOnInit(){console.log("board view created"),this.board.secretCombination=this.createSecretCombination();for(let e=0;e<this.board.fields;e++)this.combination.items[e]=1}newGame(){console.log("board view created"),this.board.secretCombination=this.createSecretCombination();for(let e=0;e<this.board.fields;e++)this.combination.items[e]=1;this.board.maxTries=7,this.board.fields=4,this.board.colors=6,this.board.guesses=[],this.gameWon=!1,this.gameLost=!1}onGuess(){console.log("guessed",this.combination);var e=this.evaluateGuess(this.combination),n=(1+this.board.guesses.length).toString();e.correct==this.board.fields&&(this.gameWon=!0),this.board.guesses.push(e),!this.gameWon&&this.board.guesses.length==this.board.maxTries&&(this.gameLost=!0)}evaluateGuess(e){console.log("secret: ",this.board.secretCombination);var n={items:[]};this.match=0,this.count=0,this.letters=[];for(let m=0;m<this.board.fields;m++)n.items[m]=e.items[m],this.letters[m]=n.items[m],this.correct[m]=this.board.secretCombination.items[m];this.removeIndex=[],this.letters.forEach((m,I)=>{m==this.correct[I]&&(this.removeIndex.push(I),this.count++)}),this.removeArrayValues(this.letters,this.removeIndex),this.removeArrayValues(this.correct,this.removeIndex),console.log("after processing phase 1...black pegs = ",this.count),this.tally1=[],this.tally2=[];for(var i=1;i<1+this.board.colors;i++){for(var b=0,f=0,x=0;x<this.correct.length;x++)i==this.correct[x]&&b++,i==this.letters[x]&&f++;this.tally1.push(b),this.tally2.push(f)}for(var i=0;i<6;i++)this.tally1[i]&&this.tally2[i]&&(this.match++,console.log(this.tally1[i],this.tally2[i],i)),this.tally1[i]>1&&this.tally2[i]>1&&this.match++;var F={combination:n,correct:this.count,correctColors:this.match};return console.log("Guess:",F),F}createSecretCombination(){var e={items:[]};for(let n=0;n<this.board.fields;n++)e.items.push(this.randomNumber(this.board.colors));return e}randomNumber(e){return Math.floor(Math.random()*e)+1}removeArrayValues(e,n){n=n.sort();for(var i=n.length-1;i>=0;i--)e.splice(n[i],1);return e}static{this.\u0275fac=function(n){return new(n||t)(O(Y))}}static{this.\u0275cmp=T({type:t,selectors:[["board"]],decls:19,vars:5,consts:[["colspan","4"],[2,"color","red"],[1,"flex-container"],[2,"color","black"],[2,"color","white"],["appDebounceClick","","mat-raised-button","","color","primary",3,"debounceClick","debounceTime"],["size","6",2,"width","50px","font-size","20px",3,"ngModelChange","ngModel"],["colspan","6"],["mat-raised-button","","color","primary",3,"click"]],template:function(n,i){n&1&&(o(0,"table")(1,"tr")(2,"th"),a(3,"Try"),r(),o(4,"th",0),a(5,"Combination"),r(),o(6,"th"),a(7,"Result"),r()(),_(8,"tr"),p(9,ae,13,6,"tr",null,d),p(11,le,7,0,"tr",null,d),B(13,de,8,1,"tr")(14,ue,7,0,"tr")(15,fe,3,0,"tr")(16,he,3,0,"tr"),r(),_(17,"br"),B(18,_e,3,0,"div")),n&2&&(s(9),u(i.board.guesses),s(2),u(i.util.numberArray(i.board.guesses.length+1,i.board.maxTries)),s(2),h(!i.gameWon&&!i.gameLost?13:-1),s(),h(i.gameLost?14:-1),s(),h(i.gameLost?15:-1),s(),h(i.gameWon?16:-1),s(2),h(i.gameWon||i.gameLost?18:-1))},dependencies:[M,J,U,q,R,j,K,H,z,Q,X,Z,ee],styles:[".flex-container[_ngcontent-%COMP%]{display:flex;background:gray;flex-direction:row;justify-content:left;padding:0;margin:1px;list-style:none;width:80px}@media only screen and (min-width: 1000px){.flex-container[_ngcontent-%COMP%]{width:135px}table[_ngcontent-%COMP%]{font-size:x-large}tr[_ngcontent-%COMP%]{line-height:30px}}"]})}}return t})();var Le=(()=>{class t{constructor(){this.title="mastermind"}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=T({type:t,selectors:[["app-mastermind"]],decls:11,vars:0,consts:[[1,"center"],["role","main",1,"content"]],template:function(n,i){n&1&&(_(0,"br"),o(1,"header")(2,"div",0),a(3,"Mastermind"),r()(),_(4,"br")(5,"br"),o(6,"div",1),_(7,"board"),o(8,"footer")(9,"h6"),a(10,"KSC - 5 Nov 2024 version"),r()()())},dependencies:[M,te],styles:[".center[_ngcontent-%COMP%]{margin:auto;width:100%;font-size:20pt;text-align:center}@media only screen and (min-width: 1000px){.center[_ngcontent-%COMP%]{font-size:40pt}}",".content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}footer[_ngcontent-%COMP%]{margin-top:8px;display:flex;align-items:center;line-height:20px}footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center}"]})}}return t})();export{Le as MastermindComponent};
