"use strict";(self.webpackChunkeshop=self.webpackChunkeshop||[]).push([["src_app_standalone_components_snackbar-message_snackbar-message_component_ts"],{1719:(k,c,t)=>{t.r(c),t.d(c,{SnackbarMessageComponent:()=>E});var _=t(5416),m=t(3887),a=t(4438),l=t(177),d=t(9213),p=t(8834);function g(n,o){1&n&&(a.j41(0,"mat-icon",13),a.EFF(1,"error"),a.k0s())}function f(n,o){1&n&&(a.j41(0,"mat-icon",14),a.EFF(1,"info"),a.k0s())}function u(n,o){if(1&n&&(a.j41(0,"div",15),a.EFF(1),a.k0s()),2&n){const r=o.$implicit,e=o.index,s=a.XpG();a.AVh("mb-2",e+1!==s.data.messages.length),a.R7$(),a.SpI(" ",r," ")}}let E=(()=>{class n{constructor(r,e){this.snackBar=r,this.data=e}dismissSnackbar(){this.snackBar.dismiss()}static#a=this.\u0275fac=function(e){return new(e||n)(a.rXU(_.MatSnackBar),a.rXU(_.MAT_SNACK_BAR_DATA))};static#n=this.\u0275cmp=a.VBU({type:n,selectors:[["app-snackbar-message"]],standalone:!0,features:[a.aNF],decls:16,vars:4,consts:[[1,"d-flex","main-wrapper"],[1,"icon-wrapper","me-3",2,"line-height","2"],["class","text-danger",4,"ngIf"],["class","text-primary",4,"ngIf"],[1,"d-flex","flex-grow-1","flex-column"],[1,"d-flex","justify-content-between"],[1,"d-flex"],[1,"fs-l"],[1,"btn-wrapper"],["mat-icon-button","",3,"click"],["inline","",1,"fs-l"],[1,"fs-s"],["class","lh-base text-break",3,"mb-2",4,"ngFor","ngForOf"],[1,"text-danger"],[1,"text-primary"],[1,"lh-base","text-break"]],template:function(e,s){if(1&e&&(a.j41(0,"div",0)(1,"div")(2,"span",1),a.DNE(3,g,2,0,"mat-icon",2)(4,f,2,0,"mat-icon",3),a.k0s()(),a.j41(5,"div",4)(6,"div",5)(7,"div",6)(8,"span",7),a.EFF(9),a.k0s()(),a.j41(10,"div",8)(11,"button",9),a.bIt("click",function(){return s.dismissSnackbar()}),a.j41(12,"mat-icon",10),a.EFF(13,"close"),a.k0s()()()(),a.j41(14,"div",11),a.DNE(15,u,2,3,"div",12),a.k0s()()()),2&e){let i;a.R7$(3),a.Y8G("ngIf",s.data.error),a.R7$(),a.Y8G("ngIf",!s.data.error),a.R7$(5),a.JRh(null!==(i=s.data.title)&&void 0!==i?i:s.data.error?"Error":"Success"),a.R7$(6),a.Y8G("ngForOf",s.data.messages)}},dependencies:[m.G,l.Sq,l.bT,d.An,p.iY],styles:[".main-wrapper[_ngcontent-%COMP%]{min-height:70px}.icon-wrapper[_ngcontent-%COMP%]{width:28px}.btn-wrapper[_ngcontent-%COMP%]{width:40px}"]})}return n})()}}]);