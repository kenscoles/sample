import{a as T,b as V,c as E,d as j}from"./chunk-OVIMCU67.js";import{f as I}from"./chunk-SMH2DSOM.js";import{I as L,K as P}from"./chunk-EOWOI5OU.js";import{$a as b,Ab as w,Da as a,Ea as u,Ua as g,Wa as h,Xa as _,Yb as M,ab as C,bb as k,cb as y,db as r,eb as o,fa as O,gb as v,ib as m,jb as x,oa as d,pa as l,sb as c,tb as D}from"./chunk-EW2FNHON.js";function F(t,i){t&1&&c(0," match the capitals with their state")}function A(t,i){t&1&&c(0,"Well done")}function B(t,i){if(t&1&&(r(0,"div",8),c(1),o()),t&2){let p=i.$implicit,e=x();_("background-color",e.correctOrder?"pink":"light-blue"),a(),D(p.name)}}function N(t,i){if(t&1&&(r(0,"div",8),c(1),o()),t&2){let p=i.$implicit,e=x();_("background-color",e.correctOrder?"pink":"light-blue"),a(),D(p.capital)}}function $(t,i){if(t&1){let p=v();r(0,"button",9),m("click",function(){d(p);let n=x();return l(n.ngOnInit())}),c(1," Play again "),o()}}var R=(()=>{let i=class i{constructor(e,n){this.http=e,this.util=n,this.states=[],this.myStates=[],this.names=[],this.capitals=[],this.correctOrder=!1}ngOnInit(){this.http.get("assets/usa_states.json").subscribe(e=>{this.states=e,console.log(this.states),this.prepareData()})}prepareData(){this.correctOrder=!1,this.myStates=Array.from(this.states),this.util.shuffleArray(this.myStates),this.names=this.myStates.slice(0,5),this.capitals=Array.from(this.names),this.util.sattoloCycle(this.capitals)}drop(e){this.correctOrder=!0,T(e.container.data,e.previousIndex,e.currentIndex);for(let n=0;n<this.names.length;n++)if(this.names[n].name!==this.capitals[n].name){this.correctOrder=!1;break}}};i.\u0275fac=function(n){return new(n||i)(u(M),u(I))},i.\u0275cmp=O({type:i,selectors:[["app-states"]],standalone:!0,features:[w],decls:20,vars:4,consts:[["countriesList","cdkDropList"],["capitalsList","cdkDropList"],[1,"instruction"],[1,"centre"],[1,"example-container"],["cdkDropList","",1,"example-list",3,"cdkDropListDropped","cdkDropListData"],["cdkDrag","",1,"example-box",3,"background-color"],["mat-raised-button","","color","primary"],["cdkDrag","",1,"example-box"],["mat-raised-button","","color","primary",3,"click"]],template:function(n,s){if(n&1){let S=v();r(0,"div",2),g(1,F,1,0)(2,A,1,0),o(),r(3,"div",3)(4,"div",4)(5,"h2"),c(6,"State"),o(),r(7,"div",5,0),m("cdkDropListDropped",function(f){return d(S),l(s.drop(f))}),k(9,B,2,3,"div",6,C),o()(),r(11,"div",4)(12,"h2"),c(13,"Capital"),o(),r(14,"div",5,1),m("cdkDropListDropped",function(f){return d(S),l(s.drop(f))}),k(16,N,2,3,"div",6,C),o()()(),r(18,"div",3),g(19,$,2,0,"button",7),o()}n&2&&(a(),b(1,s.correctOrder?2:1),a(6),h("cdkDropListData",s.names),a(2),y(s.names),a(5),h("cdkDropListData",s.capitals),a(2),y(s.capitals),a(3),b(19,s.correctOrder?19:-1))},dependencies:[j,E,V,P,L],styles:[".instruction[_ngcontent-%COMP%]{text-align:center;font-size:medium;font-family:Verdana;color:#00f;margin-bottom:5px}.centre[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:10px}.example-container[_ngcontent-%COMP%]{width:200px;max-width:100%;margin:0 10px 10px 0;display:inline-block;vertical-align:top;text-align:center;font-family:Verdana}.example-list[_ngcontent-%COMP%]{border:solid 1px #ccc;min-width:100px;min-height:40px;background:#fff;border-radius:4px;overflow:hidden;display:block;padding:1px}.example-box[_ngcontent-%COMP%]{padding:20px;width:auto;border-bottom:solid 1px #ccc;color:#000000de;display:flex;flex-direction:row;align-items:center;justify-content:space-between;justify-content:center;box-sizing:border-box;cursor:move;background:#9cc5c2;font-size:14px}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-box[_ngcontent-%COMP%]:last-child{border:none}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"]});let t=i;return t})();export{R as StatesComponent};
