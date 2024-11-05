import{c as M}from"./chunk-7MNX5DPX.js";import{a as C}from"./chunk-H6QPDG5J.js";import{Cb as x,Fa as e,Ga as y,U as g,Ya as r,Yb as k,da as l,fa as b,fb as t,g as p,gb as n,na as f,qc as w,ub as i,wb as v,xa as d,ya as h}from"./chunk-Y4RFIXYV.js";function m(s){s||(f(m),s=l(d));let o=new p(u=>s.onDestroy(u.next.bind(u)));return u=>u.pipe(g(o))}var J=(()=>{let o=class o{constructor(c){this.responsive=c,this.state=l(C),this.elementRef=l(h),this.destroyRef=l(d),this.isPhonePortrait=!1,this.msg="",this.state.showMenuButton.set(!1),this.destroyRef.onDestroy(()=>{this.state.showMenuButton.set(!0),console.log("MENU destroyed")})}ngOnInit(){let c=getComputedStyle(this.elementRef.nativeElement).getPropertyValue("--breakpointForMobile");this.responsive.observe(`(max-width: ${c})`).pipe(m(this.destroyRef)).subscribe(a=>{console.log(a),a.matches?(console.log("screens matches HandsetPortrait"),this.isPhonePortrait=!0,this.msg="screen matches HandsetPortrait",this.state.mobile.set(!0)):(this.msg="default screen",this.isPhonePortrait=!1,this.state.mobile.set(!1))})}};o.\u0275fac=function(a){return new(a||o)(y(w))},o.\u0275cmp=b({type:o,selectors:[["app-menu"]],standalone:!0,features:[x],decls:30,vars:10,consts:[[1,"navigation"],["mat-button","",3,"routerLink"]],template:function(a,S){a&1&&(t(0,"div",0)(1,"li")(2,"a",1),i(3,"Mastermind"),n()(),t(4,"li")(5,"a",1),i(6,"Numbers"),n()(),t(7,"li")(8,"a",1),i(9,"Maths"),n()(),t(10,"li")(11,"a",1),i(12,"Tables"),n()(),t(13,"li")(14,"a",1),i(15,"Spelling"),n()(),t(16,"li")(17,"a",1),i(18,"Capitals"),n()(),t(19,"li")(20,"a",1),i(21,"Flags"),n()(),t(22,"li")(23,"a",1),i(24,"Anagrams"),n()(),t(25,"li")(26,"a",1),i(27,"USA States"),n()(),t(28,"li"),i(29),n()()),a&2&&(e(2),r("routerLink","/mastermind"),e(3),r("routerLink","/sorting"),e(3),r("routerLink","/maths2"),e(3),r("routerLink","/tables"),e(3),r("routerLink","/spelling"),e(3),r("routerLink","/capitals"),e(3),r("routerLink","/flags"),e(3),r("routerLink","/anagrams"),e(3),r("routerLink","/states"),e(3),v(" ",S.msg,""))},dependencies:[k,M],styles:["h1[_ngcontent-%COMP%]{color:#00f}[_nghost-%COMP%]{z-index:1;--breakpointForMobile: 585px}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{color:#00f}.navigation[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;justify-content:center;list-style:none;margin:0;background:#00f;color:bisque}.navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;display:block;padding:1em;color:#fff}.navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#1565c0}@media (max-width: 585px){.navigation[_ngcontent-%COMP%]{flex-flow:column wrap;padding:0}.navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-align:center;padding:10px;border-top:1px solid rgba(255,255,255,.3);border-bottom:1px solid rgba(0,0,0,.1);background:#00f}.navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type   a[_ngcontent-%COMP%]{border-bottom:none}body[_ngcontent-%COMP%]{background-color:#add8e6;font-size:12pt}}"]});let s=o;return s})();export{J as MenuComponent};