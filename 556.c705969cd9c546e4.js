"use strict";(self.webpackChunksample=self.webpackChunksample||[]).push([[556],{4556:(xt,b,c)=>{c.r(b),c.d(b,{TablesComponent:()=>wt});var U=c(5861),i=c(9212),d=c(3680),y=c(2495),Z=c(9388);const F=["*"];class q{constructor(){this.columnIndex=0,this.rowIndex=0}get rowCount(){return this.rowIndex+1}get rowspan(){const r=Math.max(...this.tracker);return r>1?this.rowCount+r-1:this.rowCount}update(r,t){this.columnIndex=0,this.rowIndex=0,this.tracker=new Array(r),this.tracker.fill(0,0,this.tracker.length),this.positions=t.map(e=>this._trackTile(e))}_trackTile(r){const t=this._findMatchingGap(r.colspan);return this._markTilePosition(t,r),this.columnIndex=t+r.colspan,new Y(this.rowIndex,t)}_findMatchingGap(r){let t=-1,e=-1;do{this.columnIndex+r>this.tracker.length?(this._nextRow(),t=this.tracker.indexOf(0,this.columnIndex),e=this._findGapEndIndex(t)):(t=this.tracker.indexOf(0,this.columnIndex),-1!=t?(e=this._findGapEndIndex(t),this.columnIndex=t+1):(this._nextRow(),t=this.tracker.indexOf(0,this.columnIndex),e=this._findGapEndIndex(t)))}while(e-t<r||0==e);return Math.max(t,0)}_nextRow(){this.columnIndex=0,this.rowIndex++;for(let r=0;r<this.tracker.length;r++)this.tracker[r]=Math.max(0,this.tracker[r]-1)}_findGapEndIndex(r){for(let t=r+1;t<this.tracker.length;t++)if(0!=this.tracker[t])return t;return this.tracker.length}_markTilePosition(r,t){for(let e=0;e<t.colspan;e++)this.tracker[r+e]=t.rowspan}}class Y{constructor(r,t){this.row=r,this.col=t}}const A=new i.OlP("MAT_GRID_LIST");let E=(()=>{class s{constructor(t,e){this._element=t,this._gridList=e,this._rowspan=1,this._colspan=1}get rowspan(){return this._rowspan}set rowspan(t){this._rowspan=Math.round((0,y.su)(t))}get colspan(){return this._colspan}set colspan(t){this._colspan=Math.round((0,y.su)(t))}_setStyle(t,e){this._element.nativeElement.style[t]=e}static#t=this.\u0275fac=function(e){return new(e||s)(i.Y36(i.SBq),i.Y36(A,8))};static#e=this.\u0275cmp=i.Xpm({type:s,selectors:[["mat-grid-tile"]],hostAttrs:[1,"mat-grid-tile"],hostVars:2,hostBindings:function(e,n){2&e&&i.uIk("rowspan",n.rowspan)("colspan",n.colspan)},inputs:{rowspan:"rowspan",colspan:"colspan"},exportAs:["matGridTile"],ngContentSelectors:F,decls:2,vars:0,consts:[[1,"mat-grid-tile-content"]],template:function(e,n){1&e&&(i.F$t(),i.TgZ(0,"div",0),i.Hsn(1),i.qZA())},styles:[".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size)}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size)}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size)}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size)}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}"],encapsulation:2,changeDetection:0})}return s})();const j=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;class x{constructor(){this._rows=0,this._rowspan=0}init(r,t,e,n){this._gutterSize=R(r),this._rows=t.rowCount,this._rowspan=t.rowspan,this._cols=e,this._direction=n}getBaseTileSize(r,t){return`(${r}% - (${this._gutterSize} * ${t}))`}getTilePosition(r,t){return 0===t?"0":h(`(${r} + ${this._gutterSize}) * ${t}`)}getTileSize(r,t){return`(${r} * ${t}) + (${t-1} * ${this._gutterSize})`}setStyle(r,t,e){let n=100/this._cols,o=(this._cols-1)/this._cols;this.setColStyles(r,e,n,o),this.setRowStyles(r,t,n,o)}setColStyles(r,t,e,n){let o=this.getBaseTileSize(e,n);r._setStyle("rtl"===this._direction?"right":"left",this.getTilePosition(o,t)),r._setStyle("width",h(this.getTileSize(o,r.colspan)))}getGutterSpan(){return`${this._gutterSize} * (${this._rowspan} - 1)`}getTileSpan(r){return`${this._rowspan} * ${this.getTileSize(r,1)}`}getComputedHeight(){return null}}class W extends x{constructor(r){super(),this.fixedRowHeight=r}init(r,t,e,n){super.init(r,t,e,n),this.fixedRowHeight=R(this.fixedRowHeight),j.test(this.fixedRowHeight)}setRowStyles(r,t){r._setStyle("top",this.getTilePosition(this.fixedRowHeight,t)),r._setStyle("height",h(this.getTileSize(this.fixedRowHeight,r.rowspan)))}getComputedHeight(){return["height",h(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)]}reset(r){r._setListStyle(["height",null]),r._tiles&&r._tiles.forEach(t=>{t._setStyle("top",null),t._setStyle("height",null)})}}class V extends x{constructor(r){super(),this._parseRatio(r)}setRowStyles(r,t,e,n){this.baseTileHeight=this.getBaseTileSize(e/this.rowHeightRatio,n),r._setStyle("marginTop",this.getTilePosition(this.baseTileHeight,t)),r._setStyle("paddingTop",h(this.getTileSize(this.baseTileHeight,r.rowspan)))}getComputedHeight(){return["paddingBottom",h(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)]}reset(r){r._setListStyle(["paddingBottom",null]),r._tiles.forEach(t=>{t._setStyle("marginTop",null),t._setStyle("paddingTop",null)})}_parseRatio(r){const t=r.split(":");this.rowHeightRatio=parseFloat(t[0])/parseFloat(t[1])}}class Q extends x{setRowStyles(r,t){let o=this.getBaseTileSize(100/this._rowspan,(this._rows-1)/this._rows);r._setStyle("top",this.getTilePosition(o,t)),r._setStyle("height",h(this.getTileSize(o,r.rowspan)))}reset(r){r._tiles&&r._tiles.forEach(t=>{t._setStyle("top",null),t._setStyle("height",null)})}}function h(s){return`calc(${s})`}function R(s){return s.match(/([A-Za-z%]+)$/)?s:`${s}px`}let K=(()=>{class s{constructor(t,e){this._element=t,this._dir=e,this._gutter="1px"}get cols(){return this._cols}set cols(t){this._cols=Math.max(1,Math.round((0,y.su)(t)))}get gutterSize(){return this._gutter}set gutterSize(t){this._gutter=`${t??""}`}get rowHeight(){return this._rowHeight}set rowHeight(t){const e=`${t??""}`;e!==this._rowHeight&&(this._rowHeight=e,this._setTileStyler(this._rowHeight))}ngOnInit(){this._checkCols(),this._checkRowHeight()}ngAfterContentChecked(){this._layoutTiles()}_checkCols(){}_checkRowHeight(){this._rowHeight||this._setTileStyler("1:1")}_setTileStyler(t){this._tileStyler&&this._tileStyler.reset(this),this._tileStyler="fit"===t?new Q:t&&t.indexOf(":")>-1?new V(t):new W(t)}_layoutTiles(){this._tileCoordinator||(this._tileCoordinator=new q);const t=this._tileCoordinator,e=this._tiles.filter(o=>!o._gridList||o._gridList===this),n=this._dir?this._dir.value:"ltr";this._tileCoordinator.update(this.cols,e),this._tileStyler.init(this.gutterSize,t,this.cols,n),e.forEach((o,a)=>{const l=t.positions[a];this._tileStyler.setStyle(o,l.row,l.col)}),this._setListStyle(this._tileStyler.getComputedHeight())}_setListStyle(t){t&&(this._element.nativeElement.style[t[0]]=t[1])}static#t=this.\u0275fac=function(e){return new(e||s)(i.Y36(i.SBq),i.Y36(Z.Is,8))};static#e=this.\u0275cmp=i.Xpm({type:s,selectors:[["mat-grid-list"]],contentQueries:function(e,n,o){if(1&e&&i.Suo(o,E,5),2&e){let a;i.iGM(a=i.CRH())&&(n._tiles=a)}},hostAttrs:[1,"mat-grid-list"],hostVars:1,hostBindings:function(e,n){2&e&&i.uIk("cols",n.cols)},inputs:{cols:"cols",gutterSize:"gutterSize",rowHeight:"rowHeight"},exportAs:["matGridList"],features:[i._Bn([{provide:A,useExisting:s}])],ngContentSelectors:F,decls:2,vars:0,template:function(e,n){1&e&&(i.F$t(),i.TgZ(0,"div"),i.Hsn(1),i.qZA())},styles:[".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size)}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size)}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size)}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size)}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}"],encapsulation:2,changeDetection:0})}return s})(),X=(()=>{class s{static#t=this.\u0275fac=function(e){return new(e||s)};static#e=this.\u0275mod=i.oAB({type:s});static#i=this.\u0275inj=i.cJS({imports:[d.uc,d.BQ,d.uc,d.BQ]})}return s})();var z=c(2296),f=c(6814),p=c(2096),tt=c(8504),et=c(9315),it=c(7394),C=c(9397),_=c(7398),nt=c(6306),rt=c(4716),st=c(3020),ot=c(8180),G=c(9862),L=c(6593);const at=["*"];let S;function v(s){return function lt(){if(void 0===S&&(S=null,typeof window<"u")){const s=window;void 0!==s.trustedTypes&&(S=s.trustedTypes.createPolicy("angular#components",{createHTML:r=>r}))}return S}()?.createHTML(s)||s}function H(s){return Error(`Unable to find icon with the name "${s}"`)}function N(s){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${s}".`)}function D(s){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${s}".`)}class g{constructor(r,t,e){this.url=r,this.svgText=t,this.options=e}}let T=(()=>{class s{constructor(t,e,n,o){this._httpClient=t,this._sanitizer=e,this._errorHandler=o,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._resolvers=[],this._defaultFontSetClass=["material-icons","mat-ligature-font"],this._document=n}addSvgIcon(t,e,n){return this.addSvgIconInNamespace("",t,e,n)}addSvgIconLiteral(t,e,n){return this.addSvgIconLiteralInNamespace("",t,e,n)}addSvgIconInNamespace(t,e,n,o){return this._addSvgIconConfig(t,e,new g(n,null,o))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,n,o){const a=this._sanitizer.sanitize(i.q3G.HTML,n);if(!a)throw D(n);const l=v(a);return this._addSvgIconConfig(t,e,new g("",l,o))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,n){return this._addSvgIconSetConfig(t,new g(e,null,n))}addSvgIconSetLiteralInNamespace(t,e,n){const o=this._sanitizer.sanitize(i.q3G.HTML,e);if(!o)throw D(e);const a=v(o);return this._addSvgIconSetConfig(t,new g("",a,n))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){const e=this._sanitizer.sanitize(i.q3G.RESOURCE_URL,t);if(!e)throw N(t);const n=this._cachedIconsByUrl.get(e);return n?(0,p.of)(I(n)):this._loadSvgIconFromConfig(new g(t,null)).pipe((0,C.b)(o=>this._cachedIconsByUrl.set(e,o)),(0,_.U)(o=>I(o)))}getNamedSvgIcon(t,e=""){const n=O(e,t);let o=this._svgIconConfigs.get(n);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(e,t),o)return this._svgIconConfigs.set(n,o),this._getSvgFromConfig(o);const a=this._iconSetConfigs.get(e);return a?this._getSvgFromIconSetConfigs(t,a):(0,tt._)(H(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?(0,p.of)(I(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe((0,_.U)(e=>I(e)))}_getSvgFromIconSetConfigs(t,e){const n=this._extractIconWithNameFromAnySet(t,e);if(n)return(0,p.of)(n);const o=e.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe((0,nt.K)(l=>{const u=`Loading icon set URL: ${this._sanitizer.sanitize(i.q3G.RESOURCE_URL,a.url)} failed: ${l.message}`;return this._errorHandler.handleError(new Error(u)),(0,p.of)(null)})));return(0,et.D)(o).pipe((0,_.U)(()=>{const a=this._extractIconWithNameFromAnySet(t,e);if(!a)throw H(t);return a}))}_extractIconWithNameFromAnySet(t,e){for(let n=e.length-1;n>=0;n--){const o=e[n];if(o.svgText&&o.svgText.toString().indexOf(t)>-1){const a=this._svgElementFromConfig(o),l=this._extractSvgIconFromSet(a,t,o.options);if(l)return l}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe((0,C.b)(e=>t.svgText=e),(0,_.U)(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?(0,p.of)(null):this._fetchIcon(t).pipe((0,C.b)(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,n){const o=t.querySelector(`[id="${e}"]`);if(!o)return null;const a=o.cloneNode(!0);if(a.removeAttribute("id"),"svg"===a.nodeName.toLowerCase())return this._setSvgAttributes(a,n);if("symbol"===a.nodeName.toLowerCase())return this._setSvgAttributes(this._toSvgElement(a),n);const l=this._svgElementFromString(v("<svg></svg>"));return l.appendChild(a),this._setSvgAttributes(l,n)}_svgElementFromString(t){const e=this._document.createElement("DIV");e.innerHTML=t;const n=e.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}_toSvgElement(t){const e=this._svgElementFromString(v("<svg></svg>")),n=t.attributes;for(let o=0;o<n.length;o++){const{name:a,value:l}=n[o];"id"!==a&&e.setAttribute(a,l)}for(let o=0;o<t.childNodes.length;o++)t.childNodes[o].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[o].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){const{url:e,options:n}=t,o=n?.withCredentials??!1;if(!this._httpClient)throw function ct(){return Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.")}();if(null==e)throw Error(`Cannot fetch icon from URL "${e}".`);const a=this._sanitizer.sanitize(i.q3G.RESOURCE_URL,e);if(!a)throw N(e);const l=this._inProgressUrlFetches.get(a);if(l)return l;const m=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe((0,_.U)(u=>v(u)),(0,rt.x)(()=>this._inProgressUrlFetches.delete(a)),(0,st.B)());return this._inProgressUrlFetches.set(a,m),m}_addSvgIconConfig(t,e,n){return this._svgIconConfigs.set(O(t,e),n),this}_addSvgIconSetConfig(t,e){const n=this._iconSetConfigs.get(t);return n?n.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){const e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let n=0;n<this._resolvers.length;n++){const o=this._resolvers[n](e,t);if(o)return ht(o)?new g(o.url,null,o.options):new g(o,null)}}static#t=this.\u0275fac=function(e){return new(e||s)(i.LFG(G.eN,8),i.LFG(L.H7),i.LFG(f.K0,8),i.LFG(i.qLn))};static#e=this.\u0275prov=i.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();function I(s){return s.cloneNode(!0)}function O(s,r){return s+":"+r}function ht(s){return!(!s.url||!s.options)}const gt=(0,d.pj)(class{constructor(s){this._elementRef=s}}),mt=new i.OlP("MAT_ICON_DEFAULT_OPTIONS"),ut=new i.OlP("mat-icon-location",{providedIn:"root",factory:function ft(){const s=(0,i.f3M)(f.K0),r=s?s.location:null;return{getPathname:()=>r?r.pathname+r.search:""}}}),$=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],pt=$.map(s=>`[${s}]`).join(", "),_t=/^url\(['"]?#(.*?)['"]?\)$/;let vt=(()=>{class s extends gt{get inline(){return this._inline}set inline(t){this._inline=(0,y.Ig)(t)}get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}get fontSet(){return this._fontSet}set fontSet(t){const e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}get fontIcon(){return this._fontIcon}set fontIcon(t){const e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}constructor(t,e,n,o,a,l){super(t),this._iconRegistry=e,this._location=o,this._errorHandler=a,this._inline=!1,this._previousFontSetClass=[],this._currentIconFetch=it.w0.EMPTY,l&&(l.color&&(this.color=this.defaultColor=l.color),l.fontSet&&(this.fontSet=l.fontSet)),n||t.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];const e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){const t=this._elementsWithExternalReferences;if(t&&t.size){const e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();const e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){const t=this._elementRef.nativeElement;let e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){const n=t.childNodes[e];(1!==n.nodeType||"svg"===n.nodeName.toLowerCase())&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;const t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>t.classList.remove(n)),e.forEach(n=>t.classList.add(n)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return"string"==typeof t?t.trim().split(" ")[0]:t}_prependPathToReferences(t){const e=this._elementsWithExternalReferences;e&&e.forEach((n,o)=>{n.forEach(a=>{o.setAttribute(a.name,`url('${t}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(t){const e=t.querySelectorAll(pt),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<e.length;o++)$.forEach(a=>{const l=e[o],m=l.getAttribute(a),u=m?m.match(_t):null;if(u){let w=n.get(l);w||(w=[],n.set(l,w)),w.push({name:a,value:u[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){const[e,n]=this._splitIconName(t);e&&(this._svgNamespace=e),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,e).pipe((0,ot.q)(1)).subscribe(o=>this._setSvgElement(o),o=>{this._errorHandler.handleError(new Error(`Error retrieving icon ${e}:${n}! ${o.message}`))})}}static#t=this.\u0275fac=function(e){return new(e||s)(i.Y36(i.SBq),i.Y36(T),i.$8M("aria-hidden"),i.Y36(ut),i.Y36(i.qLn),i.Y36(mt,8))};static#e=this.\u0275cmp=i.Xpm({type:s,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:8,hostBindings:function(e,n){2&e&&(i.uIk("data-mat-icon-type",n._usingFontIcon()?"font":"svg")("data-mat-icon-name",n._svgName||n.fontIcon)("data-mat-icon-namespace",n._svgNamespace||n.fontSet)("fontIcon",n._usingFontIcon()?n.fontIcon:null),i.ekj("mat-icon-inline",n.inline)("mat-icon-no-color","primary"!==n.color&&"accent"!==n.color&&"warn"!==n.color))},inputs:{color:"color",inline:"inline",svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],features:[i.qOj],ngContentSelectors:at,decls:1,vars:0,template:function(e,n){1&e&&(i.F$t(),i.Hsn(0))},styles:["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],encapsulation:2,changeDetection:0})}return s})(),yt=(()=>{class s{static#t=this.\u0275fac=function(e){return new(e||s)};static#e=this.\u0275mod=i.oAB({type:s});static#i=this.\u0275inj=i.cJS({imports:[d.BQ,d.BQ]})}return s})();var M=c(1941),P=c(5738),St=c(1574);function Tt(s,r){if(1&s&&(i.TgZ(0,"mat-option",12),i._uU(1),i.qZA()),2&s){const t=r.$implicit;i.Q6J("value",t),i.xp6(1),i.Oqu(t)}}function It(s,r){if(1&s){const t=i.EpF();i.TgZ(0,"mat-grid-tile")(1,"button",13),i.NdJ("click",function(){const o=i.CHM(t).$implicit,a=i.oxw();return i.KtG(a.checkAnswer(o))}),i._uU(2),i.qZA()()}if(2&s){const t=r.$implicit;i.xp6(2),i.Oqu(t)}}const k=s=>({color:s});let wt=(()=>{class s{constructor(t){this.util=t,this.myNumbers=[],this.myArray=[],this.myTable=0,this.question=0,this.product=0,this.correct=!1,this.answer="",this.tileFont="green",this.tileText="",this.myIcon=""}ngOnInit(){this.createRandomTable()}createRandomTable(){this.myTable=this.util.generateRandomInteger(2,12),this.buildTable()}buildTable(){this.myNumbers=[];for(var t=1;t<13;t++)this.myNumbers.push(t*this.myTable);this.util.sattoloCycle(this.myNumbers),this.getRandomOrder(),this.newTry()}newTry(){this.myArray.length?(this.util.sattoloCycle(this.myNumbers),this.answer="?",this.question=this.myArray[0],this.correct=!1,this.product=this.myTable*this.question,this.tileFont="blue",this.tileText="",this.myIcon="",this.removeQuestion()):this.createRandomTable()}checkAnswer(t){var e=this;return(0,U.Z)(function*(){e.answer=t.toString(),t==e.product?(console.log("YES"),e.correct=!0,e.tileFont="green",e.myIcon="emoji_emotions",e.tileText="Y"):(e.tileFont="red",e.tileText="NO",e.myIcon="mood_bad"),yield e.util.delay(3e3),e.correct&&e.newTry()})()}removeQuestion(){this.util.removeArrayValues(this.myArray,[0]),console.log("questions: ",this.myArray)}getRandomOrder(){this.myArray=[2,3,4,5,6,7,8,9,10,11,12],this.util.sattoloCycle(this.myArray),this.myArray=this.myArray.slice(0,6)}onSelected(t){this.myTable=t,this.buildTable()}static#t=this.\u0275fac=function(e){return new(e||s)(i.Y36(St.t))};static#e=this.\u0275cmp=i.Xpm({type:s,selectors:[["app-tables"]],standalone:!0,features:[i.jDz],decls:37,vars:12,consts:[[1,"center"],[1,"example-button-row"],["mat-raised-button","",3,"click"],["color","primary","appearance","fill",2,"width","200px"],[3,"valueChange"],["number",""],[1,"example-container"],["gutterSize","0px","cols","1","rowHeight","6:1"],["gutterSize","5px","cols","4","rowHeight","1:1"],["gutterSize","0px","cols","7","rowHeight","1:1"],[3,"ngStyle"],["aria-hidden","false","aria-label","Example home icon",3,"ngStyle","fontIcon"],[3,"value"],["mat-raised-button","","color","primary",3,"click"]],template:function(e,n){if(1&e){const o=i.EpF();i.TgZ(0,"div",0)(1,"div",1)(2,"button",2),i.NdJ("click",function(){return n.createRandomTable()}),i._uU(3,"Random table"),i.qZA(),i.TgZ(4,"mat-form-field",3)(5,"mat-label"),i._uU(6,"Choose a table"),i.qZA(),i.TgZ(7,"mat-select",4,5),i.NdJ("valueChange",function(){i.CHM(o);const l=i.MAs(8);return i.KtG(n.onSelected(l.value))}),i.SjG(9,Tt,2,2,"mat-option",12,i.x6l),i.qZA()()()(),i.TgZ(11,"div",6)(12,"mat-grid-list",7)(13,"mat-grid-tile"),i._uU(14),i.qZA()()(),i.TgZ(15,"div",6)(16,"mat-grid-list",8),i.SjG(17,It,3,1,"mat-grid-tile",null,i.x6l),i.qZA()(),i.TgZ(19,"div",6)(20,"mat-grid-list",9)(21,"mat-grid-tile"),i._uU(22),i.qZA(),i.TgZ(23,"mat-grid-tile"),i._uU(24,"x"),i.qZA(),i.TgZ(25,"mat-grid-tile"),i._uU(26),i.qZA(),i.TgZ(27,"mat-grid-tile"),i._uU(28,"="),i.qZA(),i.TgZ(29,"mat-grid-tile"),i._uU(30),i.qZA(),i.TgZ(31,"mat-grid-tile",10),i._UZ(32,"mat-icon",11),i.qZA(),i.TgZ(33,"mat-grid-tile"),i._uU(34),i.qZA()()(),i.TgZ(35,"h6"),i._uU(36,"for Ben & Ezra 2023"),i.qZA()}2&e&&(i.wJu(9,n.util.numberArray(1,12)),i.xp6(14),i.hij("",n.myTable," times table"),i.wJu(17,n.myNumbers),i.xp6(8),i.Oqu(n.question),i.xp6(4),i.Oqu(n.myTable),i.xp6(4),i.Oqu(n.answer),i.xp6(1),i.Q6J("ngStyle",i.VKq(8,k,n.tileFont)),i.xp6(1),i.s9C("fontIcon",n.myIcon),i.Q6J("ngStyle",i.VKq(10,k,n.tileFont)),i.xp6(2),i.hij("",6-n.myArray.length,"/6"))},dependencies:[X,K,E,z.ot,z.lW,P.LD,M.KE,M.hX,P.gD,d.ey,M.lN,yt,vt,f.ez,f.PC],styles:[".example-container[_ngcontent-%COMP%]{width:60%;margin:auto;justify-content:center;vertical-align:top}mat-grid-tile[_ngcontent-%COMP%]{background:lightblue;font-size:16pt}.example-button-row[_ngcontent-%COMP%]{display:table-cell;max-width:600px}.example-button-row[_ngcontent-%COMP%]   .mat-mdc-button-base[_ngcontent-%COMP%]{margin:8px 20px 8px 0}.center[_ngcontent-%COMP%]{margin:auto;width:70%;padding:10px;background-color:gray}.mat-icon[_ngcontent-%COMP%]{font-size:25px}"]})}return s})()}}]);