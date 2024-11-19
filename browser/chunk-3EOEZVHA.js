import{a as N}from"./chunk-N4UXQRO6.js";import{a as H,b as L,c as $,d as D,e as Q}from"./chunk-KNWPCKDF.js";import"./chunk-L7UU4G36.js";import{a as R,b as z,c as B,d as q,e as j}from"./chunk-WQYQ2L4F.js";import"./chunk-HU7WFQWJ.js";import"./chunk-Y5S64OON.js";import{f as G}from"./chunk-4AAP2FPO.js";import"./chunk-POLPIG6J.js";import{B as V,u as k,z as P}from"./chunk-ZXJTTD66.js";import{$b as l,Ab as h,Cc as O,Fb as M,Fc as A,Gb as g,Hb as b,Ib as f,Jb as t,Kb as i,Lb as _,Mb as x,Ob as u,Pb as I,Sb as E,Zb as F,_a as o,_b as a,ac as T,d as v,fa as y,gb as w,gc as C,na as d,oa as p,yb as S}from"./chunk-IXHIQVPR.js";var Y=n=>({color:n});function K(n,m){if(n&1&&(t(0,"mat-option",6),a(1),i()),n&2){let e=m.$implicit;h("value",e),o(),l(e)}}function W(n,m){if(n&1){let e=x();t(0,"mat-grid-tile")(1,"button",3),u("click",function(){let r=d(e).$implicit,c=I();return p(c.checkAnswer(r))}),a(2),i()()}if(n&2){let e=m.$implicit;o(2),l(e)}}function X(n,m){n&1&&(t(0,"h3",13),a(1,"for Ben & Ezra 2024"),i())}function Z(n,m){n&1&&(t(0,"h1",13),a(1,"for Ben & Ezra 2024"),i())}var fe=(()=>{class n{constructor(){this.util=y(G),this.state=y(N),this.myNumbers=[],this.myArray=[],this.myTable=0,this.question=0,this.product=0,this.correct=!1,this.answer="",this.tileFont="green",this.tileText="",this.myIcon=""}ngOnInit(){this.createRandomTable()}createRandomTable(){this.myTable=this.util.generateRandomInteger(2,12),this.buildTable()}buildTable(){this.myNumbers=[];for(var e=1;e<13;e++)this.myNumbers.push(e*this.myTable);this.util.sattoloCycle(this.myNumbers),this.getRandomOrder(),this.newTry()}newTry(){this.myArray.length?(this.util.sattoloCycle(this.myNumbers),this.answer="?",this.question=this.myArray[0],this.correct=!1,this.product=this.myTable*this.question,this.tileFont="blue",this.tileText="",this.myIcon="",this.removeQuestion()):this.createRandomTable()}checkAnswer(e){return v(this,null,function*(){this.answer=e.toString(),e==this.product?(console.log("YES"),this.correct=!0,this.tileFont="green",this.myIcon="emoji_emotions",this.tileText="Y"):(this.tileFont="red",this.tileText="NO",this.myIcon="mood_bad"),yield this.util.delay(3e3),this.correct&&this.newTry()})}removeQuestion(){this.util.removeArrayValues(this.myArray,[0]),console.log("questions: ",this.myArray)}getRandomOrder(){this.myArray=[2,3,4,5,6,7,8,9,10,11,12],this.util.sattoloCycle(this.myArray),this.myArray=this.myArray.slice(0,6)}onSelected(e){this.myTable=e,this.buildTable()}static{this.\u0275fac=function(s){return new(s||n)}}static{this.\u0275cmp=w({type:n,selectors:[["app-tables"]],decls:38,vars:13,consts:[["number",""],[1,"center"],[1,"example-button-row"],["mat-raised-button","","color","primary",3,"click"],["color","primary","appearance","fill",2,"width","200px"],[3,"valueChange"],[3,"value"],[1,"example-container"],["gutterSize","0px","cols","1","rowHeight","6:1"],["gutterSize","5px","cols","4","rowHeight","1:1"],["gutterSize","0px","cols","7","rowHeight","1:1"],[3,"ngStyle"],["aria-hidden","false","aria-label","Example home icon",3,"ngStyle","fontIcon"],[2,"text-align","center"]],template:function(s,r){if(s&1){let c=x();t(0,"div",1)(1,"div",2)(2,"button",3),u("click",function(){return d(c),p(r.createRandomTable())}),a(3,"Random table"),i(),t(4,"mat-form-field",4)(5,"mat-label"),a(6,"Choose a table"),i(),t(7,"mat-select",5,0),u("valueChange",function(){d(c);let J=F(8);return p(r.onSelected(J.value))}),b(9,K,2,2,"mat-option",6,g),i()()()(),t(11,"div",7)(12,"mat-grid-list",8)(13,"mat-grid-tile"),a(14),i()()(),t(15,"div",7)(16,"mat-grid-list",9),b(17,W,3,1,"mat-grid-tile",null,g),i()(),t(19,"div",7)(20,"mat-grid-list",10)(21,"mat-grid-tile"),a(22),i(),t(23,"mat-grid-tile"),a(24,"x"),i(),t(25,"mat-grid-tile"),a(26),i(),t(27,"mat-grid-tile"),a(28,"="),i(),t(29,"mat-grid-tile"),a(30),i(),t(31,"mat-grid-tile",11),_(32,"mat-icon",12),i(),t(33,"mat-grid-tile"),a(34),i()()(),_(35,"br"),S(36,X,2,0,"h3",13)(37,Z,2,0,"h1",13)}s&2&&(o(9),f(r.util.numberArray(2,15)),o(5),T("",r.myTable," times table"),o(3),f(r.myNumbers),o(5),l(r.question),o(4),l(r.myTable),o(4),l(r.answer),o(),h("ngStyle",C(9,Y,r.tileFont)),o(),E("fontIcon",r.myIcon),h("ngStyle",C(11,Y,r.tileFont)),o(2),T("",6-r.myArray.length,"/6"),o(2),M(r.state.mobile()?36:37))},dependencies:[$,L,H,V,P,j,z,R,q,k,B,Q,D,A,O],styles:[".example-container[_ngcontent-%COMP%]{width:30%;margin:auto;justify-content:center;vertical-align:top}mat-grid-tile[_ngcontent-%COMP%]{background:#add8e6;font-size:16pt}.example-button-row[_ngcontent-%COMP%]{display:table-cell;max-width:600px}.example-button-row[_ngcontent-%COMP%]   .mat-mdc-button-base[_ngcontent-%COMP%]{margin:8px 20px 8px 0}.center[_ngcontent-%COMP%]{margin:0 auto;width:30%;text-align:center;background-color:gray;display:block}.mat-icon[_ngcontent-%COMP%]{font-size:25px}@media all and (max-width: 700px){.example-container[_ngcontent-%COMP%], .center[_ngcontent-%COMP%]{width:75%}}@media all and (max-width: 450px){.example-container[_ngcontent-%COMP%], .center[_ngcontent-%COMP%]{width:90%}}"]})}}return n})();export{fe as TablesComponent};
