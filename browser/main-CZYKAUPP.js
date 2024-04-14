import{a as P,b as S,c as B,d as N}from"./chunk-TWGGVUPT.js";import{J as Q,K as l,h as L,s as c,u as U}from"./chunk-EOWOI5OU.js";import{Ab as E,Da as g,Ea as a,Pa as w,Pb as j,Wa as x,Ya as v,Zb as k,_ as d,_b as I,ac as F,bc as O,db as C,eb as M,ec as z,fa as n,fb as y,ga as h,ha as f,ka as b,kb as D,lb as s,nb as T,pb as R,qb as _,sb as A,wa as u}from"./chunk-EW2FNHON.js";var K=["*",[["mat-toolbar-row"]]],W=["*","mat-toolbar-row"],X=U(class{constructor(t){this._elementRef=t}}),Y=(()=>{let o=class o{};o.\u0275fac=function(e){return new(e||o)},o.\u0275dir=f({type:o,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]});let t=o;return t})(),V=(()=>{let o=class o extends X{constructor(r,e,i){super(r),this._platform=e,this._document=i}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}};o.\u0275fac=function(e){return new(e||o)(a(u),a(z),a(j))},o.\u0275cmp=n({type:o,selectors:[["mat-toolbar"]],contentQueries:function(e,i,G){if(e&1&&T(G,Y,5),e&2){let p;R(p=_())&&(i._toolbarRows=p)}},hostAttrs:[1,"mat-toolbar"],hostVars:4,hostBindings:function(e,i){e&2&&v("mat-toolbar-multiple-rows",i._toolbarRows.length>0)("mat-toolbar-single-row",i._toolbarRows.length===0)},inputs:{color:"color"},exportAs:["matToolbar"],features:[w],ngContentSelectors:W,decls:2,vars:0,template:function(e,i){e&1&&(D(K),s(0),s(1,1))},styles:[".mat-toolbar{background:var(--mat-toolbar-container-background-color);color:var(--mat-toolbar-container-text-color)}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font);font-size:var(--mat-toolbar-title-text-size);line-height:var(--mat-toolbar-title-text-line-height);font-weight:var(--mat-toolbar-title-text-weight);letter-spacing:var(--mat-toolbar-title-text-tracking);margin:0}.cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color: inherit;--mdc-outlined-button-label-text-color: inherit}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height)}}"],encapsulation:2,changeDetection:0});let t=o;return t})();var m=(()=>{let o=class o{};o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=h({type:o}),o.\u0275inj=d({imports:[c,c]});let t=o;return t})();var H=(()=>{let o=class o{constructor(r){this.router=r,this.title="sample"}ngOnInit(){this.router.navigate(["/menu"])}};o.\u0275fac=function(e){return new(e||o)(a(S))},o.\u0275cmp=n({type:o,selectors:[["app-root"]],standalone:!0,features:[E],decls:4,vars:1,consts:[["color","primary",1,"fixed-header"],["mat-button","",3,"routerLink"]],template:function(e,i){e&1&&(C(0,"mat-toolbar",0)(1,"a",1),A(2,"Menu"),M()(),y(3,"router-outlet")),e&2&&(g(),x("routerLink","/menu"))},dependencies:[m,V,l,Q,B,P],styles:[".fixed-header[_ngcontent-%COMP%]{top:0;left:0;z-index:2;width:100%!important}.navigation[_ngcontent-%COMP%]{display:flex;flex-flow:column wrap;justify-content:center;list-style:none;margin:0;background:#00bfff}"]});let t=o;return t})();var q=[{path:"",children:[{path:"mastermind",title:"mastermind",loadComponent:()=>import("./chunk-XWB4MACJ.js").then(t=>t.MastermindComponent)},{path:"sorting",title:"sorting",loadComponent:()=>import("./chunk-LELYR3Y3.js").then(t=>t.SortingComponent)},{path:"maths2",title:"maths2",loadComponent:()=>import("./chunk-MVXYGPIF.js").then(t=>t.Maths2Component)},{path:"capitals",title:"capitals",loadComponent:()=>import("./chunk-UB5W7YNY.js").then(t=>t.CapitalsComponent)},{path:"spelling",title:"spelling",loadComponent:()=>import("./chunk-TU6X2C6F.js").then(t=>t.SpellingComponent)},{path:"anagrams",title:"anagrams",loadComponent:()=>import("./chunk-CDOBLXPH.js").then(t=>t.AnagramsComponent)},{path:"tables",title:"tables",loadComponent:()=>import("./chunk-LJZOLFMJ.js").then(t=>t.TablesComponent)},{path:"flags",title:"flags",loadComponent:()=>import("./chunk-FRC4XNQX.js").then(t=>t.FlagsComponent)},{path:"menu",title:"menu",loadComponent:()=>import("./chunk-NHDR6FRO.js").then(t=>t.MenuComponent)},{path:"states",title:"states",loadComponent:()=>import("./chunk-REQIESTZ.js").then(t=>t.StatesComponent)}]}];F(H,{providers:[b(O,m,l),L(),N(q),k(I())]}).catch(t=>console.error(t));
