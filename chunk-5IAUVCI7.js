import{c as C}from"./chunk-7TI5AEC7.js";import{a as O}from"./chunk-LANCVPC4.js";import{$a as o,$b as S,Aa as u,Fb as k,Ia as t,Ja as x,X as h,d as p,e as g,f as b,ga as c,ia as y,ib as n,j as f,jb as i,qa as v,tc as M,xb as r,zb as w}from"./chunk-PDXFFI4R.js";function m(s){s||(v(m),s=c(u));let a=new f(e=>s.onDestroy(e.next.bind(e)));return e=>e.pipe(h(a))}var W=(()=>{var a;let e=class e{constructor(l){g(this,a,void 0);this.responsive=l,this.state=c(O),this.destroyRef=c(u),this.isPhonePortrait=!1,this.msg="",b(this,a,c(u)),this.state.showMenuButton.set(!1),c(u).onDestroy(()=>{this.state.showMenuButton.set(!0),console.log("MENU destroyed")})}ngOnInit(){this.responsive.observe(["(max-width: 400px)"]).pipe(m(p(this,a))).subscribe(l=>{console.log(l),l.matches?(console.log("screens matches HandsetPortrait"),this.isPhonePortrait=!0,this.msg="screen matches HandsetPortrait",this.state.mobile.set(!0)):(this.msg="default screen",this.isPhonePortrait=!1,this.state.mobile.set(!1))})}};a=new WeakMap,e.\u0275fac=function(d){return new(d||e)(x(M))},e.\u0275cmp=y({type:e,selectors:[["app-menu"]],standalone:!0,features:[k],decls:30,vars:10,consts:[[1,"navigation"],["mat-button","",3,"routerLink"]],template:function(d,P){d&1&&(n(0,"div",0)(1,"li")(2,"a",1),r(3,"Mastermind"),i()(),n(4,"li")(5,"a",1),r(6,"Numbers"),i()(),n(7,"li")(8,"a",1),r(9,"Maths"),i()(),n(10,"li")(11,"a",1),r(12,"Tables"),i()(),n(13,"li")(14,"a",1),r(15,"Spelling"),i()(),n(16,"li")(17,"a",1),r(18,"Capitals"),i()(),n(19,"li")(20,"a",1),r(21,"Flags"),i()(),n(22,"li")(23,"a",1),r(24,"Anagrams"),i()(),n(25,"li")(26,"a",1),r(27,"USA States"),i()(),n(28,"li"),r(29),i()()),d&2&&(t(2),o("routerLink","/mastermind"),t(3),o("routerLink","/sorting"),t(3),o("routerLink","/maths2"),t(3),o("routerLink","/tables"),t(3),o("routerLink","/spelling"),t(3),o("routerLink","/capitals"),t(3),o("routerLink","/flags"),t(3),o("routerLink","/anagrams"),t(3),o("routerLink","/states"),t(3),w(" ",P.msg,""))},dependencies:[S,C],styles:[".navigation[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;justify-content:center;list-style:none;margin:0;background:#00f;color:bisque}.navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;display:block;padding:1em;color:#fff}.navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#1565c0}@media all and (max-width: 800px){.navigation[_ngcontent-%COMP%]{flex-flow:column wrap;padding:0}.navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-align:center;padding:10px;border-top:1px solid rgba(255,255,255,.3);border-bottom:1px solid rgba(0,0,0,.1);background:#00f}.navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type   a[_ngcontent-%COMP%]{border-bottom:none}body[_ngcontent-%COMP%]{background-color:#add8e6;font-size:12pt}}"]});let s=e;return s})();export{W as MenuComponent};
