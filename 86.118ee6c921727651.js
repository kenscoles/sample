"use strict";(self.webpackChunksample=self.webpackChunksample||[]).push([[86],{9086:(O,p,a)=>{a.r(p),a.d(p,{StatesComponent:()=>b});var s=a(6236),l=a(2296),d=a(6814),t=a(5879),m=a(9862),_=a(1574);function g(o,i){1&o&&t._uU(0," match the capitals with their state ")}function u(o,i){1&o&&t._uU(0," Well done! ")}function x(o,i){if(1&o&&(t.TgZ(0,"div",10),t._uU(1),t.qZA()),2&o){const n=i.$implicit,e=t.oxw();t.Udp("background-color",e.correctOrder?"pink":"light-blue"),t.xp6(1),t.Oqu(n.name)}}function h(o,i){if(1&o&&(t.TgZ(0,"div",10),t._uU(1),t.qZA()),2&o){const n=i.$implicit,e=t.oxw();t.Udp("background-color",e.correctOrder?"pink":"light-blue"),t.xp6(1),t.Oqu(n.capital)}}function f(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"button",11),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.ngOnInit())}),t._uU(1," Play again "),t.qZA()}}let b=(()=>{class o{constructor(n,e){this.http=n,this.util=e,this.states=[],this.myStates=[],this.names=[],this.capitals=[],this.correctOrder=!1}ngOnInit(){this.http.get("assets/usa_states.json").subscribe(n=>{this.states=n,console.log(this.states),this.prepareData()})}prepareData(){this.correctOrder=!1,this.myStates=Array.from(this.states),this.util.shuffleArray(this.myStates),this.names=this.myStates.slice(0,5),this.capitals=Array.from(this.names),this.util.sattoloCycle(this.capitals)}drop(n){this.correctOrder=!0,(0,s.bA)(n.container.data,n.previousIndex,n.currentIndex);for(let e=0;e<this.names.length;e++)if(this.names[e].name!==this.capitals[e].name){this.correctOrder=!1;break}}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(m.eN),t.Y36(_.t))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-states"]],standalone:!0,features:[t.jDz],decls:19,vars:7,consts:[[1,"instruction"],[3,"ngIf","ngIfElse"],["elseBlock",""],[1,"centre"],[1,"example-container"],["cdkDropList","",1,"example-list",3,"cdkDropListData","cdkDropListDropped"],["countriesList","cdkDropList"],["class","example-box","cdkDrag","",3,"background-color",4,"ngFor","ngForOf"],["capitalsList","cdkDropList"],["mat-raised-button","","color","accent",3,"click",4,"ngIf"],["cdkDrag","",1,"example-box"],["mat-raised-button","","color","accent",3,"click"]],template:function(n,e){if(1&n&&(t.TgZ(0,"div",0),t.YNc(1,g,1,0,"ng-template",1),t.YNc(2,u,1,0,"ng-template",null,2,t.W1O),t.qZA(),t.TgZ(4,"div",3)(5,"div",4)(6,"h2"),t._uU(7,"State"),t.qZA(),t.TgZ(8,"div",5,6),t.NdJ("cdkDropListDropped",function(c){return e.drop(c)}),t.YNc(10,x,2,3,"div",7),t.qZA()(),t.TgZ(11,"div",4)(12,"h2"),t._uU(13,"Capital"),t.qZA(),t.TgZ(14,"div",5,8),t.NdJ("cdkDropListDropped",function(c){return e.drop(c)}),t.YNc(16,h,2,3,"div",7),t.qZA()()(),t.TgZ(17,"div",3),t.YNc(18,f,2,0,"button",9),t.qZA()),2&n){const r=t.MAs(3);t.xp6(1),t.Q6J("ngIf",!e.correctOrder)("ngIfElse",r),t.xp6(7),t.Q6J("cdkDropListData",e.names),t.xp6(2),t.Q6J("ngForOf",e.names),t.xp6(4),t.Q6J("cdkDropListData",e.capitals),t.xp6(2),t.Q6J("ngForOf",e.capitals),t.xp6(2),t.Q6J("ngIf",e.correctOrder)}},dependencies:[s._t,s.Wj,s.Zt,l.ot,l.lW,d.O5,d.ax],styles:[".instruction[_ngcontent-%COMP%]{text-align:center;font-size:medium;color:#00f;margin-bottom:5px}.centre[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:10px}.example-container[_ngcontent-%COMP%]{width:250px;max-width:100%;margin:0 10px 10px 0;display:inline-block;vertical-align:top;text-align:center}.example-list[_ngcontent-%COMP%]{border:solid 1px #ccc;min-width:200px;min-height:40px;background:white;border-radius:4px;overflow:hidden;display:block;padding:1px}.example-box[_ngcontent-%COMP%]{padding:20px;width:auto;border-bottom:solid 1px #ccc;color:#000000de;display:flex;flex-direction:row;align-items:center;justify-content:space-between;justify-content:center;box-sizing:border-box;cursor:move;background:rgb(156,197,194);font-size:14px}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-box[_ngcontent-%COMP%]:last-child{border:none}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"]}),o})()}}]);