"use strict";(self.webpackChunksample=self.webpackChunksample||[]).push([[417],{7468:(ve,z,u)=>{u.d(z,{p:()=>h});var i=u(1985),w=u(3073),Q=u(8750),Z=u(9326),Y=u(4360),N=u(6450),p=u(8496);function h(...S){const D=(0,Z.ms)(S),{args:x,keys:U}=(0,w.D)(S),B=new i.c(_=>{const{length:c}=x;if(!c)return void _.complete();const v=new Array(c);let l=c,f=c;for(let C=0;C<c;C++){let A=!1;(0,Q.Tg)(x[C]).subscribe((0,Y._)(_,P=>{A||(A=!0,f--),v[C]=P},()=>l--,void 0,()=>{(!l||!A)&&(f||_.next(U?(0,p.e)(U,v):v),_.complete())}))}});return D?B.pipe((0,N.I)(D)):B}},9417:(ve,z,u)=>{u.d(z,{BC:()=>Lt,YN:()=>cn,cV:()=>$,cz:()=>l,j4:()=>q,k0:()=>A,kq:()=>h,vO:()=>g,vS:()=>ft,wz:()=>K,xH:()=>le,xq:()=>yt,y7:()=>de});var i=u(4438),w=u(177),Q=u(6648),Z=u(7468),Y=u(6354);let N=(()=>{class e{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static#t=this.\u0275fac=function(r){return new(r||e)(i.rXU(i.sFG),i.rXU(i.aKT))};static#e=this.\u0275dir=i.FsC({type:e})}return e})(),p=(()=>{class e extends N{static#t=this.\u0275fac=(()=>{let t;return function(o){return(t||(t=i.xGo(e)))(o||e)}})();static#e=this.\u0275dir=i.FsC({type:e,features:[i.Vt3]})}return e})();const h=new i.nKC(""),x={provide:h,useExisting:(0,i.Rfq)(()=>_),multi:!0},B=new i.nKC("");let _=(()=>{class e extends N{constructor(t,r,o){super(t,r),this._compositionMode=o,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function U(){const e=(0,w.QT)()?(0,w.QT)().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}())}writeValue(t){this.setProperty("value",t??"")}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static#t=this.\u0275fac=function(r){return new(r||e)(i.rXU(i.sFG),i.rXU(i.aKT),i.rXU(B,8))};static#e=this.\u0275dir=i.FsC({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){1&r&&i.bIt("input",function(a){return o._handleInput(a.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(a){return o._compositionEnd(a.target.value)})},features:[i.Jv_([x]),i.Vt3]})}return e})();function c(e){return null==e||("string"==typeof e||Array.isArray(e))&&0===e.length}function v(e){return null!=e&&"number"==typeof e.length}const l=new i.nKC(""),f=new i.nKC(""),C=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class A{static min(n){return function P(e){return n=>{if(c(n.value)||c(e))return null;const t=parseFloat(n.value);return!isNaN(t)&&t<e?{min:{min:e,actual:n.value}}:null}}(n)}static max(n){return function Ct(e){return n=>{if(c(n.value)||c(e))return null;const t=parseFloat(n.value);return!isNaN(t)&&t>e?{max:{max:e,actual:n.value}}:null}}(n)}static required(n){return Vt(n)}static requiredTrue(n){return Mt(n)}static email(n){return function Dt(e){return c(e.value)||C.test(e.value)?null:{email:!0}}(n)}static minLength(n){return function At(e){return n=>c(n.value)||!v(n.value)?null:n.value.length<e?{minlength:{requiredLength:e,actualLength:n.value.length}}:null}(n)}static maxLength(n){return function bt(e){return n=>v(n.value)&&n.value.length>e?{maxlength:{requiredLength:e,actualLength:n.value.length}}:null}(n)}static pattern(n){return function Et(e){if(!e)return G;let n,t;return"string"==typeof e?(t="","^"!==e.charAt(0)&&(t+="^"),t+=e,"$"!==e.charAt(e.length-1)&&(t+="$"),n=new RegExp(t)):(t=e.toString(),n=e),r=>{if(c(r.value))return null;const o=r.value;return n.test(o)?null:{pattern:{requiredPattern:t,actualValue:o}}}}(n)}static nullValidator(n){return null}static compose(n){return xt(n)}static composeAsync(n){return Ut(n)}}function Vt(e){return c(e.value)?{required:!0}:null}function Mt(e){return!0===e.value?null:{required:!0}}function G(e){return null}function Ft(e){return null!=e}function Ot(e){return(0,i.jNT)(e)?(0,Q.H)(e):e}function wt(e){let n={};return e.forEach(t=>{n=null!=t?{...n,...t}:n}),0===Object.keys(n).length?null:n}function Nt(e,n){return n.map(t=>t(e))}function St(e){return e.map(n=>function Ce(e){return!e.validate}(n)?n:t=>n.validate(t))}function xt(e){if(!e)return null;const n=e.filter(Ft);return 0==n.length?null:function(t){return wt(Nt(t,n))}}function tt(e){return null!=e?xt(St(e)):null}function Ut(e){if(!e)return null;const n=e.filter(Ft);return 0==n.length?null:function(t){const r=Nt(t,n).map(Ot);return(0,Z.p)(r).pipe((0,Y.T)(wt))}}function et(e){return null!=e?Ut(St(e)):null}function Bt(e,n){return null===e?[n]:Array.isArray(e)?[...e,n]:[e,n]}function Pt(e){return e._rawValidators}function Gt(e){return e._rawAsyncValidators}function nt(e){return e?Array.isArray(e)?e:[e]:[]}function I(e,n){return Array.isArray(e)?e.includes(n):e===n}function It(e,n){const t=nt(n);return nt(e).forEach(o=>{I(t,o)||t.push(o)}),t}function Tt(e,n){return nt(n).filter(t=>!I(e,t))}class Rt{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=tt(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=et(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control&&this.control.reset(n)}hasError(n,t){return!!this.control&&this.control.hasError(n,t)}getError(n,t){return this.control?this.control.getError(n,t):null}}class d extends Rt{get formDirective(){return null}get path(){return null}}class g extends Rt{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class kt{constructor(n){this._cd=n}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let Lt=(()=>{class e extends kt{constructor(t){super(t)}static#t=this.\u0275fac=function(r){return new(r||e)(i.rXU(g,2))};static#e=this.\u0275dir=i.FsC({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){2&r&&i.AVh("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[i.Vt3]})}return e})();const b="VALID",R="INVALID",V="PENDING",E="DISABLED";function ot(e){return(k(e)?e.validators:e)||null}function st(e,n){return(k(n)?n.asyncValidators:e)||null}function k(e){return null!=e&&!Array.isArray(e)&&"object"==typeof e}class at{constructor(n,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(n),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get valid(){return this.status===b}get invalid(){return this.status===R}get pending(){return this.status==V}get disabled(){return this.status===E}get enabled(){return this.status!==E}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(It(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(It(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Tt(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Tt(n,this._rawAsyncValidators))}hasValidator(n){return I(this._rawValidators,n)}hasAsyncValidator(n){return I(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){this.touched=!0,this._parent&&!n.onlySelf&&this._parent.markAsTouched(n)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(n=>n.markAllAsTouched())}markAsUntouched(n={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n)}markAsDirty(n={}){this.pristine=!1,this._parent&&!n.onlySelf&&this._parent.markAsDirty(n)}markAsPristine(n={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n)}markAsPending(n={}){this.status=V,!1!==n.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!n.onlySelf&&this._parent.markAsPending(n)}disable(n={}){const t=this._parentMarkedDirty(n.onlySelf);this.status=E,this.errors=null,this._forEachChild(r=>{r.disable({...n,onlySelf:!0})}),this._updateValue(),!1!==n.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...n,skipPristineCheck:t}),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){const t=this._parentMarkedDirty(n.onlySelf);this.status=b,this._forEachChild(r=>{r.enable({...n,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors({...n,skipPristineCheck:t}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(n){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===b||this.status===V)&&this._runAsyncValidator(n.emitEvent)),!1!==n.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity(n)}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?E:b}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n){if(this.asyncValidator){this.status=V,this._hasOwnPendingAsyncValidator=!0;const t=Ot(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:n})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(n,t={}){this.errors=n,this._updateControlsErrors(!1!==t.emitEvent)}get(n){let t=n;return null==t||(Array.isArray(t)||(t=t.split(".")),0===t.length)?null:t.reduce((r,o)=>r&&r._find(o),this)}getError(n,t){const r=t?this.get(t):this;return r&&r.errors?r.errors[n]:null}hasError(n,t){return!!this.getError(n,t)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(n)}_initObservables(){this.valueChanges=new i.bkB,this.statusChanges=new i.bkB}_calculateStatus(){return this._allControlsDisabled()?E:this.errors?R:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(V)?V:this._anyControlsHaveStatus(R)?R:b}_anyControlsHaveStatus(n){return this._anyControls(t=>t.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n={}){this.pristine=!this._anyControlsDirty(),this._parent&&!n.onlySelf&&this._parent._updatePristine(n)}_updateTouched(n={}){this.touched=this._anyControlsTouched(),this._parent&&!n.onlySelf&&this._parent._updateTouched(n)}_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){k(n)&&null!=n.updateOn&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=function be(e){return Array.isArray(e)?tt(e):e||null}(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=function Ee(e){return Array.isArray(e)?et(e):e||null}(this._rawAsyncValidators)}}class lt extends at{constructor(n,t,r){super(ot(t),st(r,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(n,t){return this.controls[n]?this.controls[n]:(this.controls[n]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(n,t,r={}){this.registerControl(n,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(n,t={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(n,t,r={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],t&&this.registerControl(n,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,t={}){(function Wt(e,n,t){e._forEachChild((r,o)=>{if(void 0===t[o])throw new i.wOt(1002,"")})})(this,0,n),Object.keys(n).forEach(r=>{(function jt(e,n,t){const r=e.controls;if(!(n?Object.keys(r):r).length)throw new i.wOt(1e3,"");if(!r[t])throw new i.wOt(1001,"")})(this,!0,r),this.controls[r].setValue(n[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(n,t={}){null!=n&&(Object.keys(n).forEach(r=>{const o=this.controls[r];o&&o.patchValue(n[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n={},t={}){this._forEachChild((r,o)=>{r.reset(n?n[o]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(n,t,r)=>(n[r]=t.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(t,r)=>!!r._syncPendingControls()||t);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(t=>{const r=this.controls[t];r&&n(r,t)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(const[t,r]of Object.entries(this.controls))if(this.contains(t)&&n(r))return!0;return!1}_reduceValue(){return this._reduceChildren({},(t,r,o)=>((r.enabled||this.disabled)&&(t[o]=r.value),t))}_reduceChildren(n,t){let r=n;return this._forEachChild((o,s)=>{r=t(r,o,s)}),r}_allControlsDisabled(){for(const n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}}const M=new i.nKC("CallSetDisabledState",{providedIn:"root",factory:()=>L}),L="always";function F(e,n,t=L){ut(e,n),n.valueAccessor.writeValue(e.value),(e.disabled||"always"===t)&&n.valueAccessor.setDisabledState?.(e.disabled),function we(e,n){n.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,"change"===e.updateOn&&Xt(e,n)})}(e,n),function Se(e,n){const t=(r,o)=>{n.valueAccessor.writeValue(r),o&&n.viewToModelUpdate(r)};e.registerOnChange(t),n._registerOnDestroy(()=>{e._unregisterOnChange(t)})}(e,n),function Ne(e,n){n.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,"blur"===e.updateOn&&e._pendingChange&&Xt(e,n),"submit"!==e.updateOn&&e.markAsTouched()})}(e,n),function Oe(e,n){if(n.valueAccessor.setDisabledState){const t=r=>{n.valueAccessor.setDisabledState(r)};e.registerOnDisabledChange(t),n._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}(e,n)}function j(e,n,t=!0){const r=()=>{};n.valueAccessor&&(n.valueAccessor.registerOnChange(r),n.valueAccessor.registerOnTouched(r)),X(e,n),e&&(n._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function W(e,n){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(n)})}function ut(e,n){const t=Pt(e);null!==n.validator?e.setValidators(Bt(t,n.validator)):"function"==typeof t&&e.setValidators([t]);const r=Gt(e);null!==n.asyncValidator?e.setAsyncValidators(Bt(r,n.asyncValidator)):"function"==typeof r&&e.setAsyncValidators([r]);const o=()=>e.updateValueAndValidity();W(n._rawValidators,o),W(n._rawAsyncValidators,o)}function X(e,n){let t=!1;if(null!==e){if(null!==n.validator){const o=Pt(e);if(Array.isArray(o)&&o.length>0){const s=o.filter(a=>a!==n.validator);s.length!==o.length&&(t=!0,e.setValidators(s))}}if(null!==n.asyncValidator){const o=Gt(e);if(Array.isArray(o)&&o.length>0){const s=o.filter(a=>a!==n.asyncValidator);s.length!==o.length&&(t=!0,e.setAsyncValidators(s))}}}const r=()=>{};return W(n._rawValidators,r),W(n._rawAsyncValidators,r),t}function Xt(e,n){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function $t(e,n){ut(e,n)}function qt(e,n){e._syncPendingControls(),n.forEach(t=>{const r=t.control;"submit"===r.updateOn&&r._pendingChange&&(t.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}const Ge={provide:d,useExisting:(0,i.Rfq)(()=>$)},O=Promise.resolve();let $=(()=>{class e extends d{constructor(t,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._directives=new Set,this.ngSubmit=new i.bkB,this.form=new lt({},tt(t),et(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){O.then(()=>{const r=this._findContainer(t.path);t.control=r.registerControl(t.name,t.control),F(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){O.then(()=>{const r=this._findContainer(t.path);r&&r.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){O.then(()=>{const r=this._findContainer(t.path),o=new lt({});$t(o,t),r.registerControl(t.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){O.then(()=>{const r=this._findContainer(t.path);r&&r.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,r){O.then(()=>{this.form.get(t.path).setValue(r)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submitted=!0,qt(this.form,this._directives),this.ngSubmit.emit(t),"dialog"===t?.target?.method}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static#t=this.\u0275fac=function(r){return new(r||e)(i.rXU(l,10),i.rXU(f,10),i.rXU(M,8))};static#e=this.\u0275dir=i.FsC({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,o){1&r&&i.bIt("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{options:[i.Mj6.None,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[i.Jv_([Ge]),i.Vt3]})}return e})();function Kt(e,n){const t=e.indexOf(n);t>-1&&e.splice(t,1)}function Jt(e){return"object"==typeof e&&null!==e&&2===Object.keys(e).length&&"value"in e&&"disabled"in e}const zt=class extends at{constructor(n=null,t,r){super(ot(t),st(r,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(n),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),k(t)&&(t.nonNullable||t.initialValueIsDefault)&&(this.defaultValue=Jt(n)?n.value:n)}setValue(n,t={}){this.value=this._pendingValue=n,this._onChange.length&&!1!==t.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==t.emitViewToModelChange)),this.updateValueAndValidity(t)}patchValue(n,t={}){this.setValue(n,t)}reset(n=this.defaultValue,t={}){this._applyFormState(n),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){Kt(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){Kt(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(n){Jt(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}},Re={provide:g,useExisting:(0,i.Rfq)(()=>ft)},Yt=Promise.resolve();let ft=(()=>{class e extends g{constructor(t,r,o,s,a,m){super(),this._changeDetectorRef=a,this.callSetDisabledState=m,this.control=new zt,this._registered=!1,this.name="",this.update=new i.bkB,this._parent=t,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=function ht(e,n){if(!n)return null;let t,r,o;return Array.isArray(n),n.forEach(s=>{s.constructor===_?t=s:function Be(e){return Object.getPrototypeOf(e.constructor)===p}(s)?r=s:o=s}),o||r||t||null}(0,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){const r=t.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),function ct(e,n){if(!e.hasOwnProperty("model"))return!1;const t=e.model;return!!t.isFirstChange()||!Object.is(n,t.currentValue)}(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){F(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(t){Yt.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){const r=t.isDisabled.currentValue,o=0!==r&&(0,i.L39)(r);Yt.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?function H(e,n){return[...n.path,e]}(t,this._parent):[t]}static#t=this.\u0275fac=function(r){return new(r||e)(i.rXU(d,9),i.rXU(l,10),i.rXU(f,10),i.rXU(h,10),i.rXU(i.gRc,8),i.rXU(M,8))};static#e=this.\u0275dir=i.FsC({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[i.Mj6.None,"disabled","isDisabled"],model:[i.Mj6.None,"ngModel","model"],options:[i.Mj6.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[i.Jv_([Re]),i.Vt3,i.OA$]})}return e})();const $e={provide:d,useExisting:(0,i.Rfq)(()=>q)};let q=(()=>{class e extends d{constructor(t,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new i.bkB,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(X(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){const r=this.form.get(t.path);return F(r,t,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),r}getControl(t){return this.form.get(t.path)}removeControl(t){j(t.control||null,t,!1),function Pe(e,n){const t=e.indexOf(n);t>-1&&e.splice(t,1)}(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,r){this.form.get(t.path).setValue(r)}onSubmit(t){return this.submitted=!0,qt(this.form,this.directives),this.ngSubmit.emit(t),"dialog"===t?.target?.method}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{const r=t.control,o=this.form.get(t.path);r!==o&&(j(r||null,t),(e=>e instanceof zt)(o)&&(F(o,t,this.callSetDisabledState),t.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){const r=this.form.get(t.path);$t(r,t),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){const r=this.form.get(t.path);r&&function xe(e,n){return X(e,n)}(r,t)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){ut(this.form,this),this._oldForm&&X(this._oldForm,this)}_checkFormPresent(){}static#t=this.\u0275fac=function(r){return new(r||e)(i.rXU(l,10),i.rXU(f,10),i.rXU(M,8))};static#e=this.\u0275dir=i.FsC({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,o){1&r&&i.bIt("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{form:[i.Mj6.None,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[i.Jv_([$e]),i.Vt3,i.OA$]})}return e})();const ze={provide:h,useExisting:(0,i.Rfq)(()=>K),multi:!0};function ae(e,n){return null==e?`${n}`:(n&&"object"==typeof n&&(n="Object"),`${e}: ${n}`.slice(0,50))}let K=(()=>{class e extends p{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){this.value=t;const o=ae(this._getOptionId(t),t);this.setProperty("value",o)}registerOnChange(t){this.onChange=r=>{this.value=this._getOptionValue(r),t(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(t){for(const r of this._optionMap.keys())if(this._compareWith(this._optionMap.get(r),t))return r;return null}_getOptionValue(t){const r=function Qe(e){return e.split(":")[0]}(t);return this._optionMap.has(r)?this._optionMap.get(r):t}static#t=this.\u0275fac=(()=>{let t;return function(o){return(t||(t=i.xGo(e)))(o||e)}})();static#e=this.\u0275dir=i.FsC({type:e,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(r,o){1&r&&i.bIt("change",function(a){return o.onChange(a.target.value)})("blur",function(){return o.onTouched()})},inputs:{compareWith:"compareWith"},features:[i.Jv_([ze]),i.Vt3]})}return e})(),le=(()=>{class e{constructor(t,r,o){this._element=t,this._renderer=r,this._select=o,this._select&&(this.id=this._select._registerOption())}set ngValue(t){null!=this._select&&(this._select._optionMap.set(this.id,t),this._setElementValue(ae(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._setElementValue(t),this._select&&this._select.writeValue(this._select.value)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static#t=this.\u0275fac=function(r){return new(r||e)(i.rXU(i.aKT),i.rXU(i.sFG),i.rXU(K,9))};static#e=this.\u0275dir=i.FsC({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}})}return e})();const Ze={provide:h,useExisting:(0,i.Rfq)(()=>mt),multi:!0};function ue(e,n){return null==e?`${n}`:("string"==typeof n&&(n=`'${n}'`),n&&"object"==typeof n&&(n="Object"),`${e}: ${n}`.slice(0,50))}let mt=(()=>{class e extends p{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){let r;if(this.value=t,Array.isArray(t)){const o=t.map(s=>this._getOptionId(s));r=(s,a)=>{s._setSelected(o.indexOf(a.toString())>-1)}}else r=(o,s)=>{o._setSelected(!1)};this._optionMap.forEach(r)}registerOnChange(t){this.onChange=r=>{const o=[],s=r.selectedOptions;if(void 0!==s){const a=s;for(let m=0;m<a.length;m++){const vt=this._getOptionValue(a[m].value);o.push(vt)}}else{const a=r.options;for(let m=0;m<a.length;m++){const J=a[m];if(J.selected){const vt=this._getOptionValue(J.value);o.push(vt)}}}this.value=o,t(o)}}_registerOption(t){const r=(this._idCounter++).toString();return this._optionMap.set(r,t),r}_getOptionId(t){for(const r of this._optionMap.keys())if(this._compareWith(this._optionMap.get(r)._value,t))return r;return null}_getOptionValue(t){const r=function Ye(e){return e.split(":")[0]}(t);return this._optionMap.has(r)?this._optionMap.get(r)._value:t}static#t=this.\u0275fac=(()=>{let t;return function(o){return(t||(t=i.xGo(e)))(o||e)}})();static#e=this.\u0275dir=i.FsC({type:e,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(r,o){1&r&&i.bIt("change",function(a){return o.onChange(a.target)})("blur",function(){return o.onTouched()})},inputs:{compareWith:"compareWith"},features:[i.Jv_([Ze]),i.Vt3]})}return e})(),de=(()=>{class e{constructor(t,r,o){this._element=t,this._renderer=r,this._select=o,this._select&&(this.id=this._select._registerOption(this))}set ngValue(t){null!=this._select&&(this._value=t,this._setElementValue(ue(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._select?(this._value=t,this._setElementValue(ue(this.id,t)),this._select.writeValue(this._select.value)):this._setElementValue(t)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}_setSelected(t){this._renderer.setProperty(this._element.nativeElement,"selected",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static#t=this.\u0275fac=function(r){return new(r||e)(i.rXU(i.aKT),i.rXU(i.sFG),i.rXU(mt,9))};static#e=this.\u0275dir=i.FsC({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}})}return e})(),y=(()=>{class e{constructor(){this._validator=G}ngOnChanges(t){if(this.inputName in t){const r=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):G,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return null!=t}static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275dir=i.FsC({type:e,features:[i.OA$]})}return e})();const nn={provide:l,useExisting:(0,i.Rfq)(()=>_t),multi:!0},rn={provide:l,useExisting:(0,i.Rfq)(()=>yt),multi:!0};let _t=(()=>{class e extends y{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=i.L39,this.createValidator=t=>Vt}enabled(t){return t}static#t=this.\u0275fac=(()=>{let t;return function(o){return(t||(t=i.xGo(e)))(o||e)}})();static#e=this.\u0275dir=i.FsC({type:e,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(r,o){2&r&&i.BMQ("required",o._enabled?"":null)},inputs:{required:"required"},features:[i.Jv_([nn]),i.Vt3]})}return e})(),yt=(()=>{class e extends _t{constructor(){super(...arguments),this.createValidator=t=>Mt}static#t=this.\u0275fac=(()=>{let t;return function(o){return(t||(t=i.xGo(e)))(o||e)}})();static#e=this.\u0275dir=i.FsC({type:e,selectors:[["input","type","checkbox","required","","formControlName",""],["input","type","checkbox","required","","formControl",""],["input","type","checkbox","required","","ngModel",""]],hostVars:1,hostBindings:function(r,o){2&r&&i.BMQ("required",o._enabled?"":null)},features:[i.Jv_([rn]),i.Vt3]})}return e})(),un=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=i.$C({type:e});static#n=this.\u0275inj=i.G2t({})}return e})(),cn=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:M,useValue:t.callSetDisabledState??L}]}}static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=i.$C({type:e});static#n=this.\u0275inj=i.G2t({imports:[un]})}return e})()}}]);