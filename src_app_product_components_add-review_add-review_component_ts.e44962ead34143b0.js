"use strict";(self.webpackChunkeshop=self.webpackChunkeshop||[]).push([["src_app_product_components_add-review_add-review_component_ts"],{7039:(j,M,i)=>{i.r(M),i.d(M,{AddReviewComponent:()=>K});var t=i(9417),p=i(4006),u=i(6977),C=i(980),v=i(1482),O=i(8720),P=i(3887),b=i(3599),I=i(9527),E=i(3719),R=i(5951),x=i(9042),T=i(7403),e=i(4438),k=i(6344),D=i(7938),F=i(5130),y=i(9327),o=i(4738),d=i(177),a=i(9213),m=i(1997),r=i(3530),A=i(1780);const U=s=>({default:s});function $(s,g){if(1&s&&(e.j41(0,"div",39)(1,"div",16),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.nrm(4,"app-input",40),e.k0s()),2&s){const n=e.XpG();e.R7$(2),e.JRh(e.bMT(3,6,"common.name")),e.R7$(2),e.AVh("large",!n.isMobile),e.Y8G("appearance",n.isMobile?"fill":"outline")("control",n.form.controls.name)("label",n.isMobile?"Name":"")}}function B(s,g){1&s&&(e.j41(0,"mat-label"),e.EFF(1),e.k0s()),2&s&&(e.R7$(),e.JRh("Your review"))}function G(s,g){if(1&s&&(e.j41(0,"mat-error"),e.EFF(1),e.nI1(2,"translate"),e.k0s()),2&s){const n=g.$implicit;e.R7$(),e.SpI(" ",e.i5U(2,1,"validation."+n.key,e.eq3(4,U,n.value))," ")}}function w(s,g){if(1&s&&e.nrm(0,"img",44),2&s){const n=e.XpG().$implicit;e.Y8G("src",n.uploadedUrl,e.B4B)}}function L(s,g){if(1&s&&(e.nrm(0,"img",44),e.nI1(1,"resourceUrl")),2&s){const n=e.XpG().$implicit;e.Y8G("src",e.bMT(1,1,n.url),e.B4B)}}function W(s,g){if(1&s){const n=e.RV6();e.j41(0,"div",41),e.DNE(1,w,1,1,"img",42)(2,L,2,3,"img",42),e.j41(3,"mat-icon",43),e.bIt("click",function(){const l=e.eBV(n).index,_=e.XpG();return e.Njj(_.removeOldImage(l))}),e.EFF(4,"close"),e.k0s()()}if(2&s){const n=g.$implicit;e.R7$(),e.Y8G("ngIf",n.uploadedUrl),e.R7$(),e.Y8G("ngIf",!n.uploadedUrl&&n.url)}}let K=(()=>{class s extends v.e{constructor(n,c,l,_,f,h,N){super(),this.api=n,this.authService=c,this.reviewService=l,this.fb=_,this.breakpointObserver=f,this.dialogRef=h,this.data=N,this.isMobile=!0,this.rating=0,this.user=null,this.loading={submit:!1,images:!1},this.haveUserName=!0,this.images=[],this.form=this.fb.nonNullable.group({randomId:"",sessionId:"",description:[""],name:"",rating:[5,t.k0.required],intendToBuy:[!0],randomProductId:"",uploadedImages:new t.Yp([]),images:this.fb.nonNullable.control([])})}ngOnInit(){this.breakpointObserver.observe(["(min-width: 576px)"]).pipe((0,u.Q)(this.destroy$)).subscribe(n=>this.isMobile=!n.matches),this.authService.authUser.pipe((0,u.Q)(this.destroy$)).subscribe(n=>{this.user=n,n?.lastName?this.form.controls.name.setValue(n.lastName):this.fetchUserNameFromPrevReviews()}),this.fetchCurrentUserReview()}cancel(){this.dialogRef.close(null)}save(){if(this.form.markAllAsTouched(),!this.form.valid)return;this.loading.submit=!0;const n=this.form.value.images?.map(c=>({url:c.url}));this.reviewService.saveReview({...this.form.value,images:n}).pipe((0,u.Q)(this.destroy$),(0,C.j)(()=>this.loading.submit=!1)).subscribe(c=>{this.dialogRef.close(this.form.value)})}uploadImage(n){this.loading.images=!0;const c=Array.from(n.target?.files??[]);this.reviewService.uploadFiles(c,this.form).pipe((0,u.Q)(this.destroy$),(0,C.j)(()=>this.loading.images=!1)).subscribe()}removeOldImage(n){const c=this.form.value.images;c?.splice(n,1),this.form.controls.images.setValue(c??[])}fetchUserNameFromPrevReviews(){this.api.get("luna-user/pseudonym",O.w.inv,{responseType:"text"}).pipe((0,u.Q)(this.destroy$)).subscribe(n=>{this.form.controls.name.setValue(n??""),this.haveUserName=!!n})}fetchCurrentUserReview(){this.form.controls.randomProductId.setValue(this.data.randomProductId),this.reviewService.fetchProductReview(this.data.randomProductId).pipe((0,u.Q)(this.destroy$)).subscribe(n=>{this.form.patchValue(n)})}static#e=this.\u0275fac=function(c){return new(c||s)(e.rXU(k.G),e.rXU(D.AuthUserService),e.rXU(F.f),e.rXU(t.ok),e.rXU(y.QP),e.rXU(p.CP),e.rXU(p.Vh))};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["app-add-review"]],standalone:!0,features:[e.Vt3,e.aNF],decls:74,vars:58,consts:[["imageUpload",""],[1,"d-flex","header","justify-content-between","p-3"],[1,"d-flex","align-items-center","d-none","d-sm-flex"],[1,"d-flex","bg-white","px-1","me-2","star-icon-wrapper"],["color","primary","inline",""],[1,"mb-0"],[1,"d-flex","align-items-center","d-sm-none"],[1,"title-icon","me-1","cur-pointer",3,"click"],[1,"mb-0","fw-bold"],[1,"d-flex","align-items-center","text-primary","d-none","d-sm-flex","cancel-icon","cur-pointer",3,"click"],["inline",""],["mat-dialog-content","",1,"px-3","mt-3",3,"formGroup"],["class","mb-2",4,"ngIf"],[1,"mb-4"],[1,"label","fw-bold","mb-1","text-uppercase"],[1,"cur-pointer",3,"rate","ratable","rating","total"],[1,"label","fw-bold","mb-1","d-none","d-sm-block","text-uppercase"],[1,"w-100",3,"appearance"],[4,"ngIf"],["cdkTextareaAutosize","","matInput","",1,"text-area",3,"cols","formControl"],[4,"ngFor","ngForOf"],[1,"fs-s","fst-italic","text-grey-dark"],[1,"my-4"],[1,"w-100","d-flex","justify-content-center","align-items-center","mb-2"],[1,"btn","btn-outline-primary","upload-btn",3,"click","disabled"],[1,"ms-2","fs-s","text-grey-dark","text-nowrap"],["type","file","accept","image/*","multiple","",1,"d-none",3,"change"],[1,"images"],["class","position-relative d-inline-block",4,"ngFor","ngForOf"],[1,"mb-5"],[1,"label","fw-bold","mb-1"],["color","primary",1,"d-block","radio-group",3,"formControl"],[1,"me-4",3,"value"],[3,"value"],["mat-dialog-actions","",1,"actions","d-flex","justify-content-around","gap-sm-6","gap-4","mt-3"],[1,"btn","btn-outline-primary","btn-cancel","d-block","d-sm-none",3,"click"],[1,"btn","btn-primary","d-flex","btn-save","align-items-center","fs-l","fs-sm-3xl","mb-0","mb-sm-4",3,"click","disabled"],[1,"d-none","d-sm-block","me-3","me-sm-0","start-icon"],[1,"flex-grow-1",3,"appLoading"],[1,"mb-2"],[3,"appearance","control","label"],[1,"position-relative","d-inline-block"],["class","me-2 mt-2 img",3,"src",4,"ngIf"],["color","accent",1,"position-absolute","cur-pointer","rounded-circle",3,"click"],[1,"me-2","mt-2","img",3,"src"]],template:function(c,l){if(1&c){const _=e.RV6();e.j41(0,"div",1)(1,"div",2)(2,"div",3)(3,"mat-icon",4),e.EFF(4,"star_outline"),e.k0s()(),e.j41(5,"span",5),e.EFF(6),e.nI1(7,"translate"),e.k0s()(),e.j41(8,"div",6)(9,"mat-icon",7),e.bIt("click",function(){return e.eBV(_),e.Njj(l.cancel())}),e.EFF(10,"close"),e.k0s(),e.j41(11,"span",8),e.EFF(12),e.nI1(13,"translate"),e.k0s()(),e.j41(14,"div",9),e.bIt("click",function(){return e.eBV(_),e.Njj(l.cancel())}),e.j41(15,"mat-icon",10),e.EFF(16,"chevron_left"),e.k0s(),e.j41(17,"span"),e.EFF(18),e.nI1(19,"translate"),e.k0s()()(),e.nrm(20,"mat-divider"),e.j41(21,"form",11),e.DNE(22,$,5,8,"div",12),e.j41(23,"div",13)(24,"div",14),e.EFF(25),e.nI1(26,"translate"),e.k0s(),e.j41(27,"app-rating",15),e.bIt("rate",function(h){return e.eBV(_),e.Njj(l.form.controls.rating.setValue(h))}),e.k0s()(),e.j41(28,"div")(29,"div",16),e.EFF(30),e.nI1(31,"translate"),e.k0s(),e.j41(32,"mat-form-field",17),e.DNE(33,B,2,1,"mat-label",18),e.nrm(34,"textarea",19),e.DNE(35,G,3,6,"mat-error",20),e.nI1(36,"keyvalue"),e.k0s(),e.j41(37,"div",21),e.EFF(38),e.nI1(39,"translate"),e.k0s()(),e.j41(40,"div",22)(41,"div",23)(42,"div")(43,"button",24),e.bIt("click",function(){e.eBV(_);const h=e.sdS(50);return e.Njj(h.click())}),e.EFF(44),e.nI1(45,"translate"),e.k0s(),e.j41(46,"span",25),e.EFF(47),e.nI1(48,"translate"),e.k0s()()(),e.j41(49,"input",26,0),e.bIt("change",function(h){return e.eBV(_),e.Njj(l.uploadImage(h))}),e.k0s(),e.j41(51,"div",27),e.DNE(52,W,5,2,"div",28),e.k0s()(),e.j41(53,"div",29)(54,"div",30),e.EFF(55),e.nI1(56,"translate"),e.k0s(),e.j41(57,"mat-radio-group",31)(58,"mat-radio-button",32),e.EFF(59),e.nI1(60,"translate"),e.k0s(),e.j41(61,"mat-radio-button",33),e.EFF(62),e.nI1(63,"translate"),e.k0s()()()(),e.j41(64,"div",34)(65,"button",35),e.bIt("click",function(){return e.eBV(_),e.Njj(l.cancel())}),e.EFF(66),e.nI1(67,"translate"),e.k0s(),e.j41(68,"button",36),e.bIt("click",function(){return e.eBV(_),e.Njj(l.save())}),e.j41(69,"mat-icon",37),e.EFF(70,"star_outline"),e.k0s(),e.j41(71,"span",38),e.EFF(72),e.nI1(73,"translate"),e.k0s()()()}if(2&c){let _;e.R7$(6),e.JRh(e.bMT(7,30,"product_review.review")),e.R7$(6),e.JRh(e.bMT(13,32,"product_review.add_review")),e.R7$(6),e.JRh(e.bMT(19,34,"common.back")),e.R7$(3),e.Y8G("formGroup",l.form),e.R7$(),e.Y8G("ngIf",!l.haveUserName),e.R7$(3),e.JRh(e.bMT(26,36,"product_detail.rating")),e.R7$(2),e.Y8G("ratable",!0)("rating",l.form.controls.rating.value)("total",5),e.R7$(3),e.JRh(e.bMT(31,38,"product_review.review")),e.R7$(2),e.Y8G("appearance",l.isMobile?"fill":"outline"),e.R7$(),e.Y8G("ngIf",l.isMobile),e.R7$(),e.Y8G("cols",20)("formControl",l.form.controls.description),e.R7$(),e.Y8G("ngForOf",e.bMT(36,40,l.form.controls.description.errors)),e.R7$(3),e.SpI(" ",e.bMT(39,42,"product_review.info")," "),e.R7$(5),e.Y8G("disabled",(null!==(_=null==l.form.value.images?null:l.form.value.images.length)&&void 0!==_?_:0)>=5),e.R7$(),e.SpI(" ",e.bMT(45,44,"product_review.upload_pictures")," "),e.R7$(3),e.SpI("(",e.bMT(48,46,"product_review.max_pictures"),")"),e.R7$(5),e.Y8G("ngForOf",l.form.value.images),e.R7$(3),e.SpI(" ",e.bMT(56,48,"product_review.buy_again")," "),e.R7$(2),e.Y8G("formControl",l.form.controls.intendToBuy),e.R7$(),e.Y8G("value",!0),e.R7$(),e.JRh(e.bMT(60,50,"yes")),e.R7$(2),e.Y8G("value",!1),e.R7$(),e.JRh(e.bMT(63,52,"no")),e.R7$(4),e.JRh(e.bMT(67,54,"common.cancel")),e.R7$(2),e.Y8G("disabled",l.loading.submit||l.loading.images),e.R7$(3),e.Y8G("appLoading",l.loading.submit),e.R7$(),e.JRh(e.bMT(73,56,"product_review.add_review"))}},dependencies:[P.G,o.G,d.Sq,d.bT,a.An,t.qT,t.me,t.BC,t.cb,t.l_,t.j4,m.q,r._,d.lG,A.D9,p.Yi,b.S,I.X,E.rl,x.fg,R.VT,R._g,p.E7,E.nJ,E.TL,T.xb],styles:["[_nghost-%COMP%]     .large .mat-mdc-form-text-infix{padding:.3rem 0 .8rem}.form-control[_ngcontent-%COMP%]{border-radius:5px;border:1px solid #E2E2E2}.label[_ngcontent-%COMP%]{font-size:14px}.header[_ngcontent-%COMP%]{font-size:18px}.header[_ngcontent-%COMP%]   .star-icon-wrapper[_ngcontent-%COMP%]{border:solid 1px #E2E2E2;border-radius:5px}.header[_ngcontent-%COMP%]   .cancel-icon[_ngcontent-%COMP%]{font-size:14px}@media screen and (min-width: 576px){.header[_ngcontent-%COMP%]{background-color:#f2f2f2}}.text-area[_ngcontent-%COMP%]{min-height:70px}.remove-icon[_ngcontent-%COMP%]{cursor:pointer;line-height:8px}.actions[_ngcontent-%COMP%]{box-shadow:0 0 15px #00000040}.actions[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%]{width:90px}.actions[_ngcontent-%COMP%]   .start-icon[_ngcontent-%COMP%]{font-size:32px;height:32px;width:29px}@media screen and (min-width: 576px){.actions[_ngcontent-%COMP%]{box-shadow:none}.actions[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%]{width:288px}}.images[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{height:65px;width:65px;vertical-align:middle;margin-right:8px;margin-top:8px;display:inline-block;border-radius:5px}.images[_ngcontent-%COMP%]   .img.empty-img[_ngcontent-%COMP%]{background-color:#0000000a}.images[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{right:3px;background-color:var(--secondary-color);color:#fff;font-size:19px;line-height:19px;display:inline-flex;justify-content:center;align-items:center}"]})}return s})()},3599:(j,M,i)=>{i.d(M,{S:()=>y});var t=i(4438),p=i(3719),u=i(3887),C=i(9042),v=i(177),O=i(9213),P=i(8834),b=i(9417),I=i(1780);const E=o=>({default:o});function R(o,d){if(1&o&&(t.j41(0,"mat-label"),t.EFF(1),t.k0s()),2&o){const a=t.XpG();t.R7$(),t.JRh(a.label)}}function x(o,d){if(1&o){const a=t.RV6();t.j41(0,"mat-icon",8),t.bIt("click",function(){t.eBV(a);const r=t.XpG();return t.Njj(r._suffixClick())}),t.EFF(1),t.k0s()}if(2&o){const a=t.XpG();t.R7$(),t.JRh(a.suffix)}}function T(o,d){if(1&o){const a=t.RV6();t.j41(0,"mat-icon",9),t.bIt("click",function(){t.eBV(a);const r=t.XpG();return t.Njj(r._prefClick())}),t.EFF(1),t.k0s()}if(2&o){const a=t.XpG();t.R7$(),t.JRh(a.prefix)}}function e(o,d){if(1&o){const a=t.RV6();t.j41(0,"button",10),t.bIt("click",function(){t.eBV(a);const r=t.XpG();return t.Njj(r.hide=!r.hide)}),t.j41(1,"mat-icon",11),t.EFF(2),t.k0s()()}if(2&o){const a=t.XpG();t.R7$(2),t.JRh(a.hide?"visibility_off":"visibility")}}function k(o,d){if(1&o&&(t.qex(0),t.EFF(1),t.bVm()),2&o){const a=t.XpG().$implicit,m=t.XpG();t.R7$(),t.SpI(" ",null==m.errors?null:m.errors[a.key+""]," ")}}function D(o,d){if(1&o&&(t.EFF(0),t.nI1(1,"translate")),2&o){const a=t.XpG().$implicit;t.SpI(" ",t.i5U(1,1,"validation."+a.key,t.eq3(4,E,a.value))," ")}}function F(o,d){if(1&o&&(t.j41(0,"mat-error"),t.DNE(1,k,2,1,"ng-container",12)(2,D,2,6,"ng-template",null,0,t.C5r),t.k0s()),2&o){const a=d.$implicit,m=t.sdS(3),r=t.XpG();t.R7$(),t.Y8G("ngIf",null==r.errors?null:r.errors[a.key+""])("ngIfElse",m)}}let y=(()=>{class o{constructor(){this.type="text",this.hideRequiredMarker=!0,this.appearance="fill",this.subscriptSizing="fixed",this.suffixClick=new t.bkB,this.prefixClick=new t.bkB,this.hide=!0}_suffixClick(){this.suffixClick.emit()}_prefClick(){this.prefixClick.emit()}static#e=this.\u0275fac=function(m){return new(m||o)};static#t=this.\u0275cmp=t.VBU({type:o,selectors:[["app-input"]],inputs:{name:"name",type:"type",control:"control",label:"label",placeholder:"placeholder",hideRequiredMarker:"hideRequiredMarker",appearance:"appearance",suffix:"suffix",prefix:"prefix",borderColor:"borderColor",height:"height",subscriptSizing:"subscriptSizing",errors:"errors"},outputs:{suffixClick:"suffixClick",prefixClick:"prefixClick"},standalone:!0,features:[t.aNF],decls:8,vars:23,consts:[["errorRef",""],[3,"subscriptSizing","appearance","hideRequiredMarker"],[4,"ngIf"],["matInput","",3,"name","formControl","type","placeholder"],["matSuffix","","color","primary","class","suffix-icon",3,"click",4,"ngIf"],["matPrefix","","color","primary","class","prefix-icon",3,"click",4,"ngIf"],["type","button","mat-icon-button","","matSuffix","",3,"click",4,"ngIf"],[4,"ngFor","ngForOf"],["matSuffix","","color","primary",1,"suffix-icon",3,"click"],["matPrefix","","color","primary",1,"prefix-icon",3,"click"],["type","button","mat-icon-button","","matSuffix","",3,"click"],["color","primary"],[4,"ngIf","ngIfElse"]],template:function(m,r){1&m&&(t.j41(0,"mat-form-field",1),t.DNE(1,R,2,1,"mat-label",2),t.nrm(2,"input",3),t.DNE(3,x,2,1,"mat-icon",4)(4,T,2,1,"mat-icon",5)(5,e,3,1,"button",6)(6,F,4,2,"mat-error",7),t.nI1(7,"keyvalue"),t.k0s()),2&m&&(t.ZvI("flex-grow-1 w-100 ",r.borderColor,""),t.xc7("--app-input-height",r.height),t.AVh("bordered",r.borderColor)("heighted",r.height),t.Y8G("subscriptSizing",r.subscriptSizing)("appearance",r.appearance)("hideRequiredMarker",r.hideRequiredMarker),t.R7$(),t.Y8G("ngIf",r.label),t.R7$(),t.Y8G("name",r.name)("formControl",r.control)("type",r.hide?r.type:"text")("placeholder",r.placeholder),t.R7$(),t.Y8G("ngIf",r.suffix),t.R7$(),t.Y8G("ngIf",r.prefix),t.R7$(),t.Y8G("ngIf","password"===r.type),t.R7$(),t.Y8G("ngForOf",t.bMT(7,21,r.control.errors)))},dependencies:[u.G,v.Sq,v.bT,O.An,P.iY,b.me,b.BC,b.l_,v.lG,I.D9,p.rl,p.nJ,C.fg,p.TL,p.yw,p.JW],styles:["[_nghost-%COMP%]     input::-ms-reveal{display:none}[_nghost-%COMP%]     input[matinput]::-webkit-outer-spin-button, [_nghost-%COMP%]     input[matinput]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}[_nghost-%COMP%]     input[matinput][type=number]{-moz-appearance:textfield}[_nghost-%COMP%]     .primary{--border-color: var(--primary-color) }[_nghost-%COMP%]     .accent{--border-color: var(--accent-color) }[_nghost-%COMP%]     .bordered .mat-form-field-outline-start, [_nghost-%COMP%]     .bordered .mat-form-field-outline-end{border:1px solid var(--border-color)}[_nghost-%COMP%]     .bordered .mat-form-field-outline-end{border-left-style:none}[_nghost-%COMP%]     .bordered .mat-form-field-outline-start{border-right-style:none}[_nghost-%COMP%]     .heighted .mat-mdc-form-text-infix{border-top:0}[_nghost-%COMP%]     .heighted .mat-mdc-text-field-wrapper{padding-bottom:0}[_nghost-%COMP%]     .heighted.mat-form-field-appearance-outline .mat-form-field-outline{top:0}[_nghost-%COMP%]     .heighted.mat-form-field-appearance-outline .mat-mdc-form-field-text-prefix, [_nghost-%COMP%]     .heighted.mat-form-field-appearance-outline .mat-mdc-form-field-text-suffix{top:inherit;align-self:center}[_nghost-%COMP%]     .heighted .mat-mdc-form-text-infix{padding:0}[_nghost-%COMP%]     .heighted .mat-mdc-form-text-infix input{height:var(--app-input-height);text-align:center}"]})}return o})()}}]);