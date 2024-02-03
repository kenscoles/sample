"use strict";(self.webpackChunksample=self.webpackChunksample||[]).push([[334],{2334:(P,d,r)=>{r.r(d),r.d(d,{MastermindComponent:()=>L});var h=r(6814),l=r(6223),p=r(2296),_=r(2032),g=r(5738),t=r(9212),C=r(8645),x=r(3620);let T=(()=>{class o{constructor(){this.debounceTime=500,this.debounceClick=new t.vpe,this.clicks=new C.x}ngOnInit(){this.subscription=this.clicks.pipe((0,x.b)(this.debounceTime)).subscribe(e=>this.debounceClick.emit(e))}ngOnDestroy(){this.subscription?.unsubscribe(),console.warn("unsubscribed from debounce directive")}clickEvent(e){e.preventDefault(),e.stopPropagation(),this.clicks.next(e)}static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275dir=t.lG2({type:o,selectors:[["","appDebounceClick",""]],hostBindings:function(i,n){1&i&&t.NdJ("click",function(a){return n.clickEvent(a)})},inputs:{debounceTime:"debounceTime"},outputs:{debounceClick:"debounceClick"},standalone:!0})}return o})(),Z=(()=>{class o{transform(e){return new Array(e).fill(1)}static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275pipe=t.Yjl({name:"fill",type:o,pure:!0,standalone:!0})}return o})();var y=r(1574);function v(o,s){if(1&o&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&o){const e=s.$implicit,i=t.oxw().$implicit;t.xp6(1),t.Oqu(i.combination.items[e-1])}}function A(o,s){1&o&&t._uU(0," no match ")}function w(o,s){1&o&&(t.TgZ(0,"li",3),t._uU(1,"\u26ab"),t.qZA())}function F(o,s){1&o&&(t.TgZ(0,"li",4),t._uU(1,"\u26aa"),t.qZA())}function G(o,s){if(1&o&&(t.TgZ(0,"tr")(1,"td",1),t._uU(2),t.qZA(),t.SjG(3,v,2,1,"td",null,t.x6l),t.YNc(5,A,1,0),t.TgZ(6,"td",2),t.SjG(7,w,2,0,"li",5,t.x6l),t.ALo(9,"fill"),t.SjG(10,F,2,0,"li",6,t.x6l),t.ALo(12,"fill"),t.qZA()()),2&o){const e=s.$implicit,i=s.$index,n=t.oxw();t.xp6(2),t.Oqu(i+1),t.wJu(3,n.util.numberArray(1,n.board.fields)),t.xp6(3),t.um2(5,e.correct||e.correctColors?-1:5),t.wJu(7,t.lcZ(9,2,e.correct)),t.wJu(10,t.lcZ(12,4,e.correctColors))}}function B(o,s){1&o&&(t.TgZ(0,"td"),t._uU(1,"\xa0"),t.qZA())}function U(o,s){if(1&o&&(t.TgZ(0,"tr")(1,"td"),t._uU(2,"\xa0"),t.qZA(),t.SjG(3,B,2,0,"td",null,t.x6l),t.TgZ(5,"td"),t._uU(6,"\xa0"),t.qZA()()),2&o){const e=t.oxw();t.wJu(3,e.util.numberArray(1,e.board.fields))}}function k(o,s){if(1&o&&(t.TgZ(0,"option"),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Oqu(e)}}function M(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"td")(1,"select",8),t.NdJ("ngModelChange",function(n){const a=t.CHM(e).$implicit,u=t.oxw(2);return t.KtG(u.combination.items[a-1]=n)}),t.SjG(2,k,2,1,"option",null,t.x6l),t.qZA()()}if(2&o){const e=s.$implicit,i=t.oxw(2);t.xp6(1),t.Q6J("ngModel",i.combination.items[e-1]),t.wJu(2,i.util.numberArray(1,i.board.colors))}}function q(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2,"\xa0"),t.qZA(),t.SjG(3,M,4,1,"td",null,t.x6l),t.TgZ(5,"td")(6,"button",7),t.NdJ("debounceClick",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.onGuess())}),t._uU(7,"Guess"),t.qZA()()()}if(2&o){const e=t.oxw();t.wJu(3,e.util.numberArray(1,e.board.fields)),t.xp6(6),t.Q6J("debounceTime",1e3)}}function J(o,s){if(1&o&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&o){const e=s.$implicit,i=t.oxw(2);t.xp6(1),t.Oqu(i.board.secretCombination.items[e-1])}}function S(o,s){if(1&o&&(t.TgZ(0,"tr")(1,"td"),t._uU(2,"Secret"),t.qZA(),t.SjG(3,J,2,1,"td",null,t.x6l),t.TgZ(5,"td"),t._uU(6,"\xa0"),t.qZA()()),2&o){const e=t.oxw();t.wJu(3,e.util.numberArray(1,e.board.fields))}}function D(o,s){1&o&&(t.TgZ(0,"tr")(1,"td",9),t._uU(2,"Game lost"),t.qZA()())}function O(o,s){1&o&&(t.TgZ(0,"tr")(1,"td",9),t._uU(2,"Game won"),t.qZA()())}function j(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div")(1,"button",10),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.newGame())}),t._uU(2,"Play again"),t.qZA()()}}let N=(()=>{class o{constructor(e){this.util=e,this.board={maxTries:7,fields:4,colors:6,guesses:[],secretCombination:{items:[]}},this.combination={items:[]},this.gameWon=!1,this.gameLost=!1,this.correct=[],this.letters=[],this.tally1=[],this.tally2=[],this.removeIndex=[],this.match=0,this.count=0}ngOnInit(){console.log("board view created"),this.board.secretCombination=this.createSecretCombination();for(let e=0;e<this.board.fields;e++)this.combination.items[e]=1}newGame(){console.log("board view created"),this.board.secretCombination=this.createSecretCombination();for(let e=0;e<this.board.fields;e++)this.combination.items[e]=1;this.board.maxTries=7,this.board.fields=4,this.board.colors=6,this.board.guesses=[],this.gameWon=!1,this.gameLost=!1}onGuess(){console.log("guessed",this.combination);var e=this.evaluateGuess(this.combination);(1+this.board.guesses.length).toString(),e.correct==this.board.fields&&(this.gameWon=!0),this.board.guesses.push(e),!this.gameWon&&this.board.guesses.length==this.board.maxTries&&(this.gameLost=!0)}evaluateGuess(e){console.log("secret: ",this.board.secretCombination);var i={items:[]};this.match=0,this.count=0,this.letters=[];for(let c=0;c<this.board.fields;c++)i.items[c]=e.items[c],this.letters[c]=i.items[c],this.correct[c]=this.board.secretCombination.items[c];this.removeIndex=[],this.letters.forEach((c,b)=>{c==this.correct[b]&&(this.removeIndex.push(b),this.count++)}),this.removeArrayValues(this.letters,this.removeIndex),this.removeArrayValues(this.correct,this.removeIndex),console.log("after processing phase 1...black pegs = ",this.count),this.tally1=[],this.tally2=[];for(var n=1;n<1+this.board.colors;n++){for(var m=0,a=0,u=0;u<this.correct.length;u++)n==this.correct[u]&&m++,n==this.letters[u]&&a++;this.tally1.push(m),this.tally2.push(a)}for(n=0;n<6;n++)this.tally1[n]&&this.tally2[n]&&(this.match++,console.log(this.tally1[n],this.tally2[n],n)),this.tally1[n]>1&&this.tally2[n]>1&&this.match++;var f={combination:i,correct:this.count,correctColors:this.match};return console.log("Guess:",f),f}createSecretCombination(){var e={items:[]};for(let i=0;i<this.board.fields;i++)e.items.push(this.randomNumber(this.board.colors));return e}randomNumber(e){return Math.floor(Math.random()*e)+1}removeArrayValues(e,i){for(var n=(i=i.sort()).length-1;n>=0;n--)e.splice(i[n],1);return e}static#t=this.\u0275fac=function(i){return new(i||o)(t.Y36(y.t))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["board"]],standalone:!0,features:[t.jDz],decls:18,vars:5,consts:[["colspan","4"],[2,"color","red"],[1,"flex-container"],[2,"color","black"],[2,"color","white"],["style","color:black"],["style","color:white"],["appDebounceClick","","mat-raised-button","","color","primary",3,"debounceTime","debounceClick"],["size","6",2,"width","50px","font-size","20px",3,"ngModel","ngModelChange"],["colspan","6"],["mat-raised-button","","color","primary",3,"click"]],template:function(i,n){1&i&&(t.TgZ(0,"table")(1,"tr")(2,"th"),t._uU(3,"Tries"),t.qZA(),t.TgZ(4,"th",0),t._uU(5,"Combination"),t.qZA(),t.TgZ(6,"th"),t._uU(7,"Result"),t.qZA()(),t.SjG(8,G,13,6,"tr",null,t.x6l),t.SjG(10,U,7,0,"tr",null,t.x6l),t.YNc(12,q,8,1,"tr")(13,S,7,0,"tr")(14,D,3,0,"tr")(15,O,3,0,"tr"),t.qZA(),t._UZ(16,"br"),t.YNc(17,j,3,0,"div")),2&i&&(t.wJu(8,n.board.guesses),t.wJu(10,n.util.numberArray(n.board.guesses.length+1,n.board.maxTries)),t.xp6(12),t.um2(12,n.gameWon||n.gameLost?-1:12),t.xp6(1),t.um2(13,n.gameLost?13:-1),t.xp6(1),t.um2(14,n.gameLost?14:-1),t.xp6(1),t.um2(15,n.gameWon?15:-1),t.xp6(2),t.um2(17,n.gameWon||n.gameLost?17:-1))},dependencies:[h.ez,l.u5,l.YN,l.Kr,l.EJ,l.JJ,l.On,p.ot,p.lW,_.c,g.LD,T,Z],styles:[".flex-container[_ngcontent-%COMP%]{display:flex;background:gray;flex-direction:row;justify-content:left;padding:0;margin:1px;list-style:none;width:60px}"]})}return o})(),L=(()=>{class o{constructor(){this.title="mastermind"}static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-mastermind"]],standalone:!0,features:[t.jDz],decls:8,vars:0,consts:[[2,"text-align","center"],["role","main",1,"content"]],template:function(i,n){1&i&&(t.TgZ(0,"header")(1,"span",0)(2,"h2"),t._uU(3,"Mastermind"),t.qZA()()(),t.TgZ(4,"div",1),t._UZ(5,"board"),t.TgZ(6,"footer"),t._uU(7," KSC - Feb 2024 version "),t.qZA()())},dependencies:[h.ez,N],styles:[".content[_ngcontent-%COMP%] {\n      display: flex;\n      \n      flex-direction: column;\n      align-items: center;\n    }\n  \n    footer[_ngcontent-%COMP%] {\n      margin-top: 8px;\n      display: flex;\n      align-items: center;\n      line-height: 20px;\n    }\n  \n    footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n    }"]})}return o})()}}]);