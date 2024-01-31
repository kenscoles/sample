"use strict";(self.webpackChunksample=self.webpackChunksample||[]).push([[86],{9086:(C,p,a)=>{a.r(p),a.d(p,{StatesComponent:()=>f});var s=a(6236),l=a(2296),t=a(9212),d=a(9862),m=a(1574);function _(e,r){1&e&&t._uU(0," match the capitals with their state")}function u(e,r){1&e&&t._uU(0,"Well done")}function g(e,r){if(1&e&&(t.TgZ(0,"div",7),t._uU(1),t.qZA()),2&e){const i=r.$implicit,n=t.oxw();t.Udp("background-color",n.correctOrder?"pink":"light-blue"),t.xp6(1),t.Oqu(i.name)}}function x(e,r){if(1&e&&(t.TgZ(0,"div",7),t._uU(1),t.qZA()),2&e){const i=r.$implicit,n=t.oxw();t.Udp("background-color",n.correctOrder?"pink":"light-blue"),t.xp6(1),t.Oqu(i.capital)}}function h(e,r){if(1&e){const i=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){t.CHM(i);const o=t.oxw();return t.KtG(o.ngOnInit())}),t._uU(1," Play again "),t.qZA()}}let f=(()=>{class e{constructor(i,n){this.http=i,this.util=n,this.states=[],this.myStates=[],this.names=[],this.capitals=[],this.correctOrder=!1}ngOnInit(){this.http.get("assets/usa_states.json").subscribe(i=>{this.states=i,console.log(this.states),this.prepareData()})}prepareData(){this.correctOrder=!1,this.myStates=Array.from(this.states),this.util.shuffleArray(this.myStates),this.names=this.myStates.slice(0,5),this.capitals=Array.from(this.names),this.util.sattoloCycle(this.capitals)}drop(i){this.correctOrder=!0,(0,s.bA)(i.container.data,i.previousIndex,i.currentIndex);for(let n=0;n<this.names.length;n++)if(this.names[n].name!==this.capitals[n].name){this.correctOrder=!1;break}}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(d.eN),t.Y36(m.t))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-states"]],standalone:!0,features:[t.jDz],decls:20,vars:4,consts:[[1,"instruction"],[1,"centre"],[1,"example-container"],["cdkDropList","",1,"example-list",3,"cdkDropListData","cdkDropListDropped"],["countriesList","cdkDropList"],["capitalsList","cdkDropList"],["mat-raised-button","","color","primary"],["cdkDrag","",1,"example-box"],["mat-raised-button","","color","primary",3,"click"],["class","example-box","cdkDrag","",3,"background-color"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t.YNc(1,_,1,0)(2,u,1,0),t.qZA(),t.TgZ(3,"div",1)(4,"div",2)(5,"h2"),t._uU(6,"State"),t.qZA(),t.TgZ(7,"div",3,4),t.NdJ("cdkDropListDropped",function(c){return o.drop(c)}),t.SjG(9,g,2,3,"div",9,t.x6l),t.qZA()(),t.TgZ(11,"div",2)(12,"h2"),t._uU(13,"Capital"),t.qZA(),t.TgZ(14,"div",3,5),t.NdJ("cdkDropListDropped",function(c){return o.drop(c)}),t.SjG(16,x,2,3,"div",9,t.x6l),t.qZA()()(),t.TgZ(18,"div",1),t.YNc(19,h,2,0,"button",6),t.qZA()),2&n&&(t.xp6(1),t.um2(1,o.correctOrder?2:1),t.xp6(6),t.Q6J("cdkDropListData",o.names),t.wJu(9,o.names),t.xp6(7),t.Q6J("cdkDropListData",o.capitals),t.wJu(16,o.capitals),t.xp6(5),t.um2(19,o.correctOrder?19:-1))},dependencies:[s._t,s.Wj,s.Zt,l.ot,l.lW],styles:[".instruction[_ngcontent-%COMP%]{text-align:center;font-size:medium;font-family:Verdana;color:#00f;margin-bottom:5px}.centre[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:10px}.example-container[_ngcontent-%COMP%]{width:200px;max-width:100%;margin:0 10px 10px 0;display:inline-block;vertical-align:top;text-align:center;font-family:Verdana}.example-list[_ngcontent-%COMP%]{border:solid 1px #ccc;min-width:100px;min-height:40px;background:white;border-radius:4px;overflow:hidden;display:block;padding:1px}.example-box[_ngcontent-%COMP%]{padding:20px;width:auto;border-bottom:solid 1px #ccc;color:#000000de;display:flex;flex-direction:row;align-items:center;justify-content:space-between;justify-content:center;box-sizing:border-box;cursor:move;background:rgb(156,197,194);font-size:14px}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-box[_ngcontent-%COMP%]:last-child{border:none}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"]})}return e})()}}]);