import{l as m}from"./chunk-ZXJTTD66.js";import{$ as a,B as S,C as h,Jc as p,Tc as C,aa as u,fa as o,g as v,hb as _,j as l,o as d,xc as g,y as w,ya as f}from"./chunk-IXHIQVPR.js";var V=(()=>{class s{constructor(){this.delay=e=>new Promise(t=>setTimeout(t,e))}t(e,t){return Math.round(e-.5+Math.random()*(t-e+1))}getRand(e,t=!0){return t?Math.floor(e*Math.random()):1+Math.floor(e*Math.random())}generateRandomInteger(e,t){return Math.floor(e+Math.random()*(t-e+1))}shuffleArray(e){for(var t=e.length,r,n;t;)n=Math.floor(Math.random()*t--),r=e[t],e[t]=e[n],e[n]=r;return e}sattoloCycle(e){for(var t=e.length;t-- >1;){var r=Math.floor(Math.random()*t),n=e[t];e[t]=e[r],e[r]=n}}objsort(e,t,r){return console.log("ok"),e.sort((n,c)=>n[t].toString().localeCompare(c[t])*(r==="asc"?1:-1))}removeArrayValues(e,t){t=t.sort();for(var r=t.length-1;r>=0;r--)e.splice(t[r],1);return e}numberArray(e,t){var r=[];for(let n=e;n<=t;n++)r.push(n);return r}static{this.\u0275fac=function(t){return new(t||s)}}static{this.\u0275prov=a({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();var R=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new l;constructor(i=!1,e,t=!0,r){this._multiple=i,this._emitChanges=t,this.compareWith=r,e&&e.length&&(i?e.forEach(n=>this._markSelected(n)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){this._verifyValueAssignment(i),i.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...i){this._verifyValueAssignment(i),i.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...i){this._verifyValueAssignment(i);let e=this.selected,t=new Set(i);i.forEach(n=>this._markSelected(n)),e.filter(n=>!t.has(this._getConcreteValue(n,t))).forEach(n=>this._unmarkSelected(n));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(i,t))return t;return i}else return i}};var x=20,Pe=(()=>{class s{_ngZone=o(f);_platform=o(p);_document=o(g,{optional:!0});constructor(){}_scrolled=new l;_globalSubscription=null;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=x){return this._platform.isBrowser?new v(t=>{this._globalSubscription||this._addGlobalListener();let r=e>0?this._scrolled.pipe(h(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):d()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let r=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(S(n=>!n||r.indexOf(n)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((r,n)=>{this._scrollableContainsElement(n,e)&&t.push(n)}),t}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,t){let r=C(t),n=e.getElementRef().nativeElement;do if(r==n)return!0;while(r=r.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{let e=this._getWindow();return w(e.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}static \u0275fac=function(t){return new(t||s)};static \u0275prov=a({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var D=20,We=(()=>{class s{_platform=o(p);_viewportSize;_change=new l;_changeListener=e=>{this._change.next(e)};_document=o(g,{optional:!0});constructor(){o(f).runOutsideAngular(()=>{if(this._platform.isBrowser){let t=this._getWindow();t.addEventListener("resize",this._changeListener),t.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){let e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+t,height:r,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),r=e.documentElement,n=r.getBoundingClientRect(),c=-n.top||e.body.scrollTop||t.scrollY||r.scrollTop||0,b=-n.left||e.body.scrollLeft||t.scrollX||r.scrollLeft||0;return{top:c,left:b}}change(e=D){return e>0?this._change.pipe(h(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||s)};static \u0275prov=a({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var E=(()=>{class s{static \u0275fac=function(t){return new(t||s)};static \u0275mod=_({type:s});static \u0275inj=u({})}return s})(),Ne=(()=>{class s{static \u0275fac=function(t){return new(t||s)};static \u0275mod=_({type:s});static \u0275inj=u({imports:[m,E,m,E]})}return s})();export{R as a,Pe as b,We as c,E as d,Ne as e,V as f};
