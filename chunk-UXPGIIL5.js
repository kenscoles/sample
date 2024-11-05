import{r as v}from"./chunk-GXEL5GVY.js";import{B as S,C as u,Oa as _,Rb as p,Z as c,_ as f,ca as a,fc as m,g as w,ga as g,j as l,o as d,pc as R,y as C}from"./chunk-Y4RFIXYV.js";var O=(()=>{let t=class t{constructor(){this.delay=e=>new Promise(i=>setTimeout(i,e))}t(e,i){return Math.round(e-.5+Math.random()*(i-e+1))}getRand(e,i=!0){return i?Math.floor(e*Math.random()):1+Math.floor(e*Math.random())}generateRandomInteger(e,i){return Math.floor(e+Math.random()*(i-e+1))}shuffleArray(e){for(var i=e.length,n,r;i;)r=Math.floor(Math.random()*i--),n=e[i],e[i]=e[r],e[r]=n;return e}sattoloCycle(e){for(var i=e.length;i-- >1;){var n=Math.floor(Math.random()*i),r=e[i];e[i]=e[n],e[n]=r}}objsort(e,i,n){return console.log("ok"),e.sort((r,h)=>r[i].toString().localeCompare(h[i])*(n==="asc"?1:-1))}removeArrayValues(e,i){i=i.sort();for(var n=i.length-1;n>=0;n--)e.splice(i[n],1);return e}numberArray(e,i){var n=[];for(let r=e;r<=i;r++)n.push(r);return n}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let s=t;return s})();var y=class{get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}constructor(t=!1,o,e=!0,i){this._multiple=t,this._emitChanges=e,this.compareWith=i,this._selection=new Set,this._deselectedToEmit=[],this._selectedToEmit=[],this.changed=new l,o&&o.length&&(t?o.forEach(n=>this._markSelected(n)):this._markSelected(o[0]),this._selectedToEmit.length=0)}select(...t){this._verifyValueAssignment(t),t.forEach(e=>this._markSelected(e));let o=this._hasQueuedChanges();return this._emitChangeEvent(),o}deselect(...t){this._verifyValueAssignment(t),t.forEach(e=>this._unmarkSelected(e));let o=this._hasQueuedChanges();return this._emitChangeEvent(),o}setSelection(...t){this._verifyValueAssignment(t);let o=this.selected,e=new Set(t);t.forEach(n=>this._markSelected(n)),o.filter(n=>!e.has(n)).forEach(n=>this._unmarkSelected(n));let i=this._hasQueuedChanges();return this._emitChangeEvent(),i}toggle(t){return this.isSelected(t)?this.deselect(t):this.select(t)}clear(t=!0){this._unmarkAll();let o=this._hasQueuedChanges();return t&&this._emitChangeEvent(),o}isSelected(t){return this._selection.has(this._getConcreteValue(t))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(t){this._multiple&&this.selected&&this._selected.sort(t)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(t){t=this._getConcreteValue(t),this.isSelected(t)||(this._multiple||this._unmarkAll(),this.isSelected(t)||this._selection.add(t),this._emitChanges&&this._selectedToEmit.push(t))}_unmarkSelected(t){t=this._getConcreteValue(t),this.isSelected(t)&&(this._selection.delete(t),this._emitChanges&&this._deselectedToEmit.push(t))}_unmarkAll(){this.isEmpty()||this._selection.forEach(t=>this._unmarkSelected(t))}_verifyValueAssignment(t){t.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(t){if(this.compareWith){for(let o of this._selection)if(this.compareWith(t,o))return o;return t}else return t}};var D=20,Re=(()=>{let t=class t{constructor(e,i,n){this._ngZone=e,this._platform=i,this._scrolled=new l,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=n}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=D){return this._platform.isBrowser?new w(i=>{this._globalSubscription||this._addGlobalListener();let n=e>0?this._scrolled.pipe(u(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{n.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):d()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let n=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(S(r=>!r||n.indexOf(r)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((n,r)=>{this._scrollableContainsElement(r,e)&&i.push(r)}),i}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,i){let n=R(i),r=e.getElementRef().nativeElement;do if(n==r)return!0;while(n=n.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{let e=this._getWindow();return C(e.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}};t.\u0275fac=function(i){return new(i||t)(a(_),a(m),a(p,8))},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let s=t;return s})();var z=20,ye=(()=>{let t=class t{constructor(e,i,n){this._platform=e,this._change=new l,this._changeListener=r=>{this._change.next(r)},this._document=n,i.runOutsideAngular(()=>{if(e.isBrowser){let r=this._getWindow();r.addEventListener("resize",this._changeListener),r.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){let e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:n}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+n,right:e.left+i,height:n,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),n=e.documentElement,r=n.getBoundingClientRect(),h=-r.top||e.body.scrollTop||i.scrollY||n.scrollTop||0,x=-r.left||e.body.scrollLeft||i.scrollX||n.scrollLeft||0;return{top:h,left:x}}change(e=z){return e>0?this._change.pipe(u(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}};t.\u0275fac=function(i){return new(i||t)(a(m),a(_),a(p,8))},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let s=t;return s})();var b=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=g({type:t}),t.\u0275inj=f({});let s=t;return s})(),be=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=g({type:t}),t.\u0275inj=f({imports:[v,b,v,b]});let s=t;return s})();export{y as a,Re as b,ye as c,b as d,be as e,O as f};
