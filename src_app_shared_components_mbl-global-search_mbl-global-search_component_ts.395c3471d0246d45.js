"use strict";(self.webpackChunkeshop=self.webpackChunkeshop||[]).push([["src_app_shared_components_mbl-global-search_mbl-global-search_component_ts"],{7537:(B,i,s)=>{s.r(i),s.d(i,{MblGlobalSearchComponent:()=>k});var e=s(4438),m=s(3294),g=s(152),d=s(5558),f=s(6977),E=s(980),c=s(9417),_=s(8834),M=s(1482),b=s(9213),R=s(9183),h=s(1780),C=s(4710),p=s(177),v=s(9146),I=s(6344),O=s(74);const x=["search"];function P(n,l){1&n&&(e.j41(0,"div",14),e.nrm(1,"mat-spinner",15),e.k0s()),2&n&&(e.R7$(),e.Y8G("diameter",16))}function D(n,l){1&n&&(e.j41(0,"i",19),e.EFF(1),e.nI1(2,"translate"),e.k0s()),2&n&&(e.R7$(),e.SpI(" ",e.bMT(2,1,"search.nothing_found")," "))}function S(n,l){1&n&&(e.j41(0,"div",20),e.EFF(1),e.nI1(2,"translate"),e.k0s()),2&n&&(e.R7$(),e.SpI(" ",e.bMT(2,1,"search.suggestion")," "))}function j(n,l){if(1&n){const t=e.RV6();e.j41(0,"a",21),e.nI1(1,"encodeURIComponent"),e.bIt("click",function(){e.eBV(t);const a=e.XpG(2);return e.Njj(a.closeSearch())}),e.j41(2,"span",22),e.EFF(3),e.k0s(),e.j41(4,"span",23),e.EFF(5,"in"),e.k0s(),e.j41(6,"span"),e.EFF(7),e.k0s()()}if(2&n){const t=l.$implicit;e.FCK("routerLink","/product/",e.bMT(1,5,t.metaUrl),"/",t.randomProductId,""),e.R7$(3),e.JRh(t.name),e.R7$(4),e.JRh(t.categoryName)}}function T(n,l){1&n&&(e.j41(0,"div",20),e.EFF(1),e.nI1(2,"translate"),e.k0s()),2&n&&(e.R7$(),e.SpI(" ",e.bMT(2,1,"search.go_category")," "))}function F(n,l){if(1&n){const t=e.RV6();e.j41(0,"a",21),e.nI1(1,"encodeURIComponent"),e.bIt("click",function(){e.eBV(t);const a=e.XpG(2);return e.Njj(a.closeSearch())}),e.j41(2,"span",22),e.EFF(3),e.k0s()()}if(2&n){const t=l.$implicit;e.FCK("routerLink","/",e.bMT(1,4,t.friendlyUrl),"/",t.randomCategoryId,""),e.R7$(3),e.JRh(t.name)}}function G(n,l){if(1&n&&e.DNE(0,D,3,3,"i",16)(1,S,3,3,"div",17)(2,j,8,7,"a",18)(3,T,3,3,"div",17)(4,F,4,6,"a",18),2&n){const t=e.XpG();e.Y8G("ngIf",t.searchResults&&!t.searchResults.products.length),e.R7$(),e.Y8G("ngIf",null==t.searchResults||null==t.searchResults.products?null:t.searchResults.products.length),e.R7$(),e.Y8G("ngForOf",null==t.searchResults?null:t.searchResults.products),e.R7$(),e.Y8G("ngIf",null==t.searchResults||null==t.searchResults.categories?null:t.searchResults.categories.length),e.R7$(),e.Y8G("ngForOf",null==t.searchResults?null:t.searchResults.categories)}}let k=(()=>{class n extends M.e{constructor(t,o){super(),this.api=t,this.globalSearch=o,this.toggleSearch=new e.bkB,this.searchControl=new c.MJ(""),this.showSearch=!1,this.loading={search:!1}}ngOnInit(){this.searchRef?.nativeElement.focus(),this.watchForSearchInput()}watchForSearchInput(){this.searchControl.valueChanges.pipe((0,m.F)(),(0,g.B)(600),(0,d.n)(()=>this.fetchResults())).subscribe(t=>{this.searchResults=t})}fetchResults(){return this.loading.search=!0,this.searchResults=void 0,this.globalSearch.search(this.searchControl.value).pipe((0,f.Q)(this.destroy$),(0,E.j)(()=>this.loading.search=!1))}closeSearch(){this.showSearch=!1,this.searchResults=void 0,this.searchControl.setValue(""),this.toggleSearch.emit(!1)}static#e=this.\u0275fac=function(o){return new(o||n)(e.rXU(I.G),e.rXU(O.H))};static#t=this.\u0275cmp=e.VBU({type:n,selectors:[["app-mbl-global-search"]],viewQuery:function(o,a){if(1&o&&e.GBs(x,7),2&o){let r;e.mGM(r=e.lsd())&&(a.searchRef=r.first)}},outputs:{toggleSearch:"toggleSearch"},standalone:!0,features:[e.Vt3,e.aNF],decls:19,vars:6,consts:[["search",""],["searchResultsRef",""],[1,"d-flex","align-items-center","justify-content-end","w-100"],[1,"me-2","me-sm-3","flex-grow-1"],["placeholder","sneakers converse",1,"search-input","fs-s",3,"formControl"],[1,"top-toolbar-icons","d-flex"],["mat-icon-button","",1,"svg-icon","me-2","me-sm-3",3,"click"],["svgIcon","close","inline",""],["svgIcon","search","inline",""],[1,"search-results-wrapper","px-3","px-sm-4"],["class","d-flex justify-content-center",4,"ngIf","ngIfElse"],["mat-flat-button","",1,"align-items-center","d-flex","justify-content-center","mt-2r","w-100",2,"margin-bottom","150px",3,"click"],["color","primary"],[1,"text-primary"],[1,"d-flex","justify-content-center"],[1,"mt-3",3,"diameter"],["class","fs-xs mt-3 d-inline-block w-100 text-center",4,"ngIf"],["class","fw-bold mt-3",4,"ngIf"],["class","search-result",3,"routerLink","click",4,"ngFor","ngForOf"],[1,"fs-xs","mt-3","d-inline-block","w-100","text-center"],[1,"fw-bold","mt-3"],[1,"search-result",3,"click","routerLink"],[1,"text-accent"],[1,"text-grey-dark","px-1"]],template:function(o,a){if(1&o){const r=e.RV6();e.j41(0,"div",2)(1,"div",3),e.nrm(2,"input",4,0),e.k0s(),e.j41(4,"div",5)(5,"button",6),e.bIt("click",function(){return e.eBV(r),e.Njj(a.closeSearch())}),e.nrm(6,"mat-icon",7),e.k0s(),e.j41(7,"button",6),e.bIt("click",function(){return e.eBV(r),e.Njj(a.closeSearch())}),e.nrm(8,"mat-icon",8),e.k0s()(),e.j41(9,"div",9),e.DNE(10,P,2,1,"div",10),e.j41(11,"button",11),e.bIt("click",function(){return e.eBV(r),e.Njj(a.closeSearch())}),e.j41(12,"mat-icon",12),e.EFF(13,"chevron_left"),e.k0s(),e.j41(14,"span",13),e.EFF(15),e.nI1(16,"translate"),e.k0s()()()(),e.DNE(17,G,5,5,"ng-template",null,1,e.C5r)}if(2&o){const r=e.sdS(18);e.R7$(2),e.Y8G("formControl",a.searchControl),e.R7$(8),e.Y8G("ngIf",a.loading.search)("ngIfElse",r),e.R7$(5),e.SpI("",e.bMT(16,4,"back_to")," Za\xeddra ")}},dependencies:[_.$z,c.X1,c.me,c.BC,c.l_,_.iY,b.An,R.LG,h.h,h.D9,C.Wk,p.Sq,p.bT,v.i],styles:[".svg-icon[_ngcontent-%COMP%]{height:24px!important;width:16px!important;line-height:16px!important}.svg-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--primary-color)}.search-input[_ngcontent-%COMP%]{width:100%;border-radius:4px;border:solid 1px var(--secondary-color);height:36px;padding:8px 12px}.search-input[_ngcontent-%COMP%]:focus-visible{outline:none}.search-results-wrapper[_ngcontent-%COMP%]{position:fixed;font-size:14px;height:100%;width:100%;margin-right:-24px;background:#fff;top:87px;z-index:10;color:#262626;overflow-y:scroll}.search-results-wrapper[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]{display:block;text-decoration:none;white-space:break-spaces;padding-top:14px;padding-bottom:14px;border-bottom:1px solid #F2F2F2}"]})}return n})()}}]);