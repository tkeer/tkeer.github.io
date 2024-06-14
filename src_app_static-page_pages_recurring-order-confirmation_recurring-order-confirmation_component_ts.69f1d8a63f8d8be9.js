"use strict";(self.webpackChunkeshop=self.webpackChunkeshop||[]).push([["src_app_static-page_pages_recurring-order-confirmation_recurring-order-confirmation_component_ts"],{1548:(S,R,a)=>{a.d(R,{T:()=>u});var u=function(g){return g.En="en",g.Ro="ro",g}(u||{})},8003:(S,R,a)=>{a.d(R,{f:()=>W});var u=a(1626),g=a(1985),y=a(1413),T=a(9974),c=a(4360);var F=a(7048),O=a(1986),I=a(8141);const x={keepAlive:!0,reconnectionDelay:3e3,responseType:"event"},$={observe:"events",reportProgress:!0,responseType:"text"};var h=a(4438);let C=(()=>{class p{static#t=this.SEPARATOR=":";constructor(e){this.httpClient=e,this.progress=0,this.chunk=""}stream(e,n,s,o="GET"){return this.sseOptions=Object.assign({},x,n),this.httpClientOptions=Object.assign({},s,$),new g.c(d=>{const m=this.subscribeStreamRequest(e,this.sseOptions,this.httpClientOptions,o,d);return()=>m.unsubscribe()})}subscribeStreamRequest(e,n,s,o,d){return this.httpClient.request(o,e,s).pipe(function b(p){return(0,T.N)((k,e)=>{let n,o,s=!1,d=!1,m=!1;const G=()=>m&&d&&(e.complete(),!0),D=()=>{m=!1,n=k.subscribe((0,c._)(e,void 0,()=>{m=!0,!G()&&(o||(o=new y.B,p(o).subscribe((0,c._)(e,()=>{n?D():s=!0},()=>{d=!0,G()}))),o).next()})),s&&(n.unsubscribe(),n=null,s=!1,D())};D()})}(m=>this.repeatWhen(m,n.keepAlive,n.reconnectionDelay))).pipe(function E(p){return(0,T.N)((k,e)=>{let n,o,s=!1;const d=()=>{n=k.subscribe((0,c._)(e,void 0,void 0,m=>{o||(o=new y.B,p(o).subscribe((0,c._)(e,()=>n?d():s=!0))),o&&o.next(m)})),s&&(n.unsubscribe(),n=null,s=!1,d())};d()})}(m=>this.retryWhen(m,n.keepAlive,n.reconnectionDelay,d))).subscribe(m=>this.parseStreamEvent(m,d))}repeatWhen(e,n,s){return e.pipe((0,F.v)(()=>n)).pipe((0,O.c)(s))}retryWhen(e,n,s,o){return e.pipe((0,I.M)(d=>this.threatRequestError(d,o))).pipe((0,F.v)(()=>n)).pipe((0,O.c)(s))}threatRequestError(e,n){this.dispatchStreamData(this.errorEvent(e),n),this.isValidStatus(e.status)||n.error(e)}isValidStatus(e){return null!=e&&e<=299}parseStreamEvent(e,n){e.type!==u.hv.Sent?e.type!==u.hv.DownloadProgress?e.type!==u.hv.Response||this.onStreamCompleted(e,n):this.onStreamProgress(e.partialText,n):this.progress=0}onStreamProgress(e,n){e=e.substring(this.progress),this.progress+=e.length,e.split(/(\r\n|\r|\n){2}/g).forEach(s=>this.parseEventData(s,n))}onStreamCompleted(e,n){this.onStreamProgress(e.body,n),this.dispatchStreamData(this.parseEventChunk(this.chunk),n),this.chunk="",this.progress=0,this.dispatchStreamData(this.errorEvent(),n)}parseEventData(e,n){0===e.trim().length?(this.dispatchStreamData(this.parseEventChunk(this.chunk),n),this.chunk=""):this.chunk+=e}parseEventChunk(e){if(!e||0===e.length)return;const n={id:void 0,data:"",event:"message"};return e.split(/\n|\r\n|\r/).forEach(s=>this.parseChunkLine(s.trim(),n)),this.messageEvent(n.event,{lastEventId:n.id,data:n.data})}parseChunkLine(e,n){const s=e.indexOf(p.SEPARATOR);if(s<=0)return;const o=e.substring(0,s);if(-1===Object.keys(n).findIndex(m=>m===o))return;let d=e.substring(s+1);"data"===o&&(d=n.data+d),n[o]=d}dispatchStreamData(e,n){this.validEvent(e)&&n.next("event"===this.sseOptions.responseType?e:e.data)}validEvent(e){return!(!e||"error"===e.type&&"event"!==this.sseOptions.responseType||"error"!==e.type&&(!e.data||!e.data.length))}messageEvent(e,n){return new MessageEvent(e,n)}errorEvent(e){let n;return e&&e.status>0&&(n={error:e,message:e.message},this.isValidStatus(e.status)||(n.status=e.status,n.statusText=e.statusText)),new ErrorEvent("error",n)}static#e=this.\u0275fac=function(n){return new(n||p)(h.KVO(u.Qq))};static#n=this.\u0275prov=h.jDH({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})();var t=a(5558),j=a(5964),A=a(7673),M=a(8810),N=a(2255),P=a(6344),J=a(9879);let W=(()=>{class p{constructor(e,n,s){this.apiService=n,this.ls=s,this.sseClient=new C(e)}stream(e,n,s,o,d="POST"){return e=this.apiService.buildEP(e,n),s={...s,context:(new u._y).set(N.VI,s?.guestRoute??!0).set(N.Kq,!1)},(s=this.apiService.addServiceTokenToHeader(s))&&!s.guestRoute&&this.ls.token&&(s.headers={...s.headers,Authorization:`Bearer ${this.ls.token}`}),void 0===o?.keepAlive&&(o={...o,keepAlive:!1}),this.sseClient.stream(e,o,s,d).pipe((0,t.n)(m=>this.formatEvent(m)),(0,j.p)(m=>!1!==m))}formatEvent(e){if(e instanceof MessageEvent){const s=e;return console.log(s.data),(0,A.of)(this.jsonParseEvent(s))}const n=e.error;return n?("string"==typeof n.error&&(n.error=JSON.parse(n.error)),(0,M.$)(e.error)):(0,A.of)(!1)}jsonParseEvent(e){let n=e.data.trim();return"{"!==n.at(0)&&(n=`{${n}`),"}"!==n.at(n.length-1)&&(n=`${n}}`),JSON.parse(n)}static#t=this.\u0275fac=function(n){return new(n||p)(h.KVO(u.Qq),h.KVO(P.G),h.KVO(J.s))};static#e=this.\u0275prov=h.jDH({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})()},3026:(S,R,a)=>{a.d(R,{Gb:()=>u,Hz:()=>y,gr:()=>g});var u=function(c){return c.Code="CODE",c.Password="PASSWORD",c}(u||{}),g=function(c){return c.Exception="TX_EXCEPTION_STATE",c.Final="TX_FINAL_STATE",c.Miximal="TX_MAXIMAL_STATE",c.PaymentPending="TX_WAITING_FOR_USER_PAYMENT",c}(g||{}),y=function(c){return c.Declined="PAYMENT_DECLINED",c}(y||{})},5750:(S,R,a)=>{a.r(R),a.d(R,{RecurringOrderConfirmationComponent:()=>at});var u=a(1548);const g=JSON.parse('{"expired":"We\'re sorry, but the time allocated for confirming the recurring order has expired.","limit":"We need your confirmation in the requested time window so that the set recurrence can be respected. ","cod":"cash on delivery ","deactivated":"Therefore, the recurring order has been deactivated","alreadyActivated":"Order recurrence have already been activated.","activeFrom":"but it can be activated again from","orderHistory":"Order History","tyForUnderstanding":"Thank you for understanding!","order":{"confirmed":"Your {{type}}recurring order has been successfully confirmed!","activated":"Your recurring order has been successfully activated!"},"recurrenceStartsOn":"Your recurrence orders will start on","startingSoon":"We will start processing it as soon as possible.","startingAfterPaid":"Your order will be processed only after we have received the payment.","startingAfterConfirmed":"We will start processing it as soon as the payment is confirmed.","enjoy":"We\'re sure you\'ll immediately enjoy the benefits of this shopping method.","thankYou":"Thank you!","bankTransfer":{"label":"Below are the payment information:","beneficiary":"Beneficiary","swift":"SWIFT/BIC","iban":"IBAN","amount":"Amount"}}'),y=JSON.parse('{"expired":"Ne pare r\u0103u, dar timpul alocat confirm\u0103rii comenzii recurente a expirat.","limit":"Avem nevoie de confirmarea dvs. in intervalul de timp cerut pentru ca recuren\u021ba setat\u0103 s\u0103 poat\u0103 fi respectat\u0103.","cod":"cu plata la livrare ","deactivated":"A\u0219adar, comanda recurent\u0103 a fost dezactivat\u0103","alreadyActivated":"Recuren\u021ba comenzii a fost deja activat\u0103.","activeFrom":"dar se poate activa din nou din","orderHistory":"Istoric comenzi","tyForUnderstanding":"Multumim pentru in\u021belegere!","order":{"confirmed":"Comanda ta recurent\u0103 {{type}}a fost confirmat\u0103!","activated":"Comanda ta recurent\u0103 a fost activat\u0103 cu succes!"},"recurrenceStartsOn":"Recuren\u021ba comenzilor \xeencepe cu data de","startingSoon":"Vom \xeencepe procesarea ei \xeen cel mai scurt timp.","startingAfterPaid":"Vom \xeencepe procesarea comenzii imediat dup\u0103 ce plata este efectuat\u0103.","startingAfterConfirmed":"Vom \xeencepe procesarea ei imediat ce plata este confirmat\u0103.","enjoy":"Suntem siguri c\u0103 te vei bucura imediat de beneficiile acestui mod de a face cump\u0103r\u0103turi.","thankYou":"Multumim!","bankTransfer":{"label":"\xce\u021bi reamintim detaliile de plat\u0103:","beneficiary":"Beneficiar","swift":"SWIFT","iban":"IBAN","amount":"Suma"}}');var T=a(5756),c=a(8720),b=a(6977),E=a(9437),F=a(8810),O=a(980),I=a(1482),x=a(1626),$=a(3026),h=a(2255),C=a(3887),t=a(4438),j=a(6344),A=a(8003),M=a(177);let N=(()=>{class r{constructor(i){this.platformId=i}isServer(){return(0,M.Vy)(this.platformId)}isClient(){return!this.isServer()}static#t=this.\u0275fac=function(v){return new(v||r)(t.KVO(t.Agw))};static#e=this.\u0275prov=t.jDH({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var P=a(5567),J=a(9879),W=a(2243),p=a(4710),k=a(9605),e=a(9183),n=a(1780);const s=r=>({type:r}),o=()=>({type:""});function d(r,f){}function m(r,f){if(1&r&&(t.qex(0),t.DNE(1,d,0,0,"ng-template",8),t.bVm()),2&r){t.XpG();const i=t.sdS(17);t.R7$(),t.Y8G("ngTemplateOutlet",i)}}function G(r,f){}function Y(r,f){if(1&r&&(t.qex(0),t.j41(1,"div",9),t.nrm(2,"img",10),t.DNE(3,G,0,0,"ng-template",8),t.k0s(),t.bVm()),2&r){t.XpG();const i=t.sdS(13);t.R7$(3),t.Y8G("ngTemplateOutlet",i)}}function D(r,f){}function X(r,f){if(1&r&&(t.qex(0),t.j41(1,"div",9),t.nrm(2,"img",11),t.DNE(3,D,0,0,"ng-template",8),t.k0s(),t.bVm()),2&r){t.XpG();const i=t.sdS(15);t.R7$(3),t.Y8G("ngTemplateOutlet",i)}}function U(r,f){1&r&&t.eu8(0)}function B(r,f){if(1&r&&(t.qex(0),t.DNE(1,U,1,0,"ng-container",13),t.bVm()),2&r){t.XpG(3);const i=t.sdS(11);t.R7$(),t.Y8G("ngTemplateOutlet",i)}}function L(r,f){1&r&&t.eu8(0)}function H(r,f){if(1&r&&(t.qex(0),t.DNE(1,L,1,0,"ng-container",13),t.bVm()),2&r){t.XpG(3);const i=t.sdS(7);t.R7$(),t.Y8G("ngTemplateOutlet",i)}}function K(r,f){1&r&&t.eu8(0)}function z(r,f){if(1&r&&(t.qex(0),t.DNE(1,K,1,0,"ng-container",13),t.bVm()),2&r){t.XpG(3);const i=t.sdS(9);t.R7$(),t.Y8G("ngTemplateOutlet",i)}}function Q(r,f){if(1&r&&(t.j41(0,"div",9),t.nrm(1,"img",11),t.DNE(2,B,2,1,"ng-container",7)(3,H,2,1,"ng-container",7)(4,z,2,1,"ng-container",7),t.k0s()),2&r){const i=t.XpG(2);t.R7$(2),t.Y8G("ngIf",i.paymentType===i.PaymentMethods.BANK_TRANSFER),t.R7$(),t.Y8G("ngIf",i.paymentType===i.PaymentMethods.COD),t.R7$(),t.Y8G("ngIf",i.paymentType===i.PaymentMethods.ONLINE)}}function Z(r,f){if(1&r&&(t.j41(0,"div",9)(1,"p"),t.EFF(2),t.nI1(3,"translate"),t.k0s(),t.j41(4,"p"),t.EFF(5),t.nI1(6,"translate"),t.k0s(),t.j41(7,"p"),t.EFF(8),t.nI1(9,"translate"),t.k0s(),t.j41(10,"p"),t.EFF(11),t.nI1(12,"translate"),t.k0s()()),2&r){const i=t.XpG(2);t.R7$(2),t.JRh(t.bMT(3,5,"order.activated")),t.R7$(3),t.Lme("",t.bMT(6,7,"recurrenceStartsOn"),": ",i.orderDate,""),t.R7$(3),t.JRh(t.bMT(9,9,"enjoy")),t.R7$(3),t.JRh(t.bMT(12,11,"thankYou"))}}function w(r,f){if(1&r&&(t.qex(0),t.DNE(1,Q,5,3,"div",12)(2,Z,13,13,"div",12),t.bVm()),2&r){const i=t.XpG();t.R7$(),t.Y8G("ngIf","confirmed"===i.action),t.R7$(),t.Y8G("ngIf","activated"===i.action)}}function _(r,f){1&r&&(t.j41(0,"p"),t.EFF(1),t.nI1(2,"translate"),t.nI1(3,"translate"),t.k0s(),t.j41(4,"p"),t.EFF(5),t.nI1(6,"translate"),t.k0s(),t.j41(7,"p"),t.EFF(8),t.nI1(9,"translate"),t.k0s(),t.j41(10,"p"),t.EFF(11),t.nI1(12,"translate"),t.k0s()),2&r&&(t.R7$(),t.JRh(t.i5U(3,6,"order.confirmed",t.eq3(15,s,t.bMT(2,4,"cod")))),t.R7$(4),t.JRh(t.bMT(6,9,"startingSoon")),t.R7$(3),t.JRh(t.bMT(9,11,"enjoy")),t.R7$(3),t.JRh(t.bMT(12,13,"thankYou")))}function q(r,f){1&r&&(t.j41(0,"p"),t.EFF(1),t.nI1(2,"translate"),t.k0s(),t.j41(3,"p"),t.EFF(4),t.nI1(5,"translate"),t.k0s(),t.j41(6,"p"),t.EFF(7),t.nI1(8,"translate"),t.k0s(),t.j41(9,"p"),t.EFF(10),t.nI1(11,"translate"),t.k0s()),2&r&&(t.R7$(),t.JRh(t.i5U(2,4,"order.confirmed",t.lJ4(13,o))),t.R7$(3),t.JRh(t.bMT(5,7,"startingAfterConfirmed")),t.R7$(3),t.JRh(t.bMT(8,9,"enjoy")),t.R7$(3),t.JRh(t.bMT(11,11,"thankYou")))}function tt(r,f){if(1&r&&(t.j41(0,"p"),t.EFF(1),t.nI1(2,"translate"),t.k0s(),t.j41(3,"p"),t.EFF(4),t.nI1(5,"translate"),t.k0s(),t.j41(6,"p"),t.EFF(7),t.nI1(8,"translate"),t.k0s(),t.j41(9,"div"),t.EFF(10),t.nI1(11,"translate"),t.nrm(12,"br"),t.EFF(13),t.nI1(14,"translate"),t.nrm(15,"br"),t.EFF(16),t.nI1(17,"translate"),t.nrm(18,"br"),t.EFF(19),t.nI1(20,"translate"),t.nrm(21,"br"),t.k0s(),t.nrm(22,"br"),t.j41(23,"p"),t.EFF(24),t.nI1(25,"translate"),t.k0s(),t.j41(26,"p"),t.EFF(27),t.nI1(28,"translate"),t.k0s()),2&r){const i=t.XpG();t.R7$(),t.JRh(t.i5U(2,13,"order.confirmed",t.lJ4(32,o))),t.R7$(3),t.JRh(t.bMT(5,16,"startingAfterPaid")),t.R7$(3),t.JRh(t.bMT(8,18,"bankTransfer.label")),t.R7$(3),t.Lme(" ",t.bMT(11,20,"bankTransfer.beneficiary"),": ",null==i.bankDetails?null:i.bankDetails.beneficiaryName," "),t.R7$(3),t.Lme(" ",t.bMT(14,22,"bankTransfer.swift"),": ",null==i.bankDetails?null:i.bankDetails.swift," "),t.R7$(3),t.Lme(" ",t.bMT(17,24,"bankTransfer.iban"),": ",null==i.bankDetails?null:i.bankDetails.iban," "),t.R7$(3),t.Lme(" ",t.bMT(20,26,"bankTransfer.amount"),": ",i.orderTotalWithVat," "),t.R7$(5),t.JRh(t.bMT(25,28,"enjoy")),t.R7$(3),t.JRh(t.bMT(28,30,"thankYou"))}}function et(r,f){1&r&&(t.j41(0,"p"),t.EFF(1),t.nI1(2,"translate"),t.k0s(),t.j41(3,"p"),t.EFF(4),t.nI1(5,"translate"),t.k0s(),t.j41(6,"p"),t.EFF(7),t.nI1(8,"translate"),t.nI1(9,"translate"),t.j41(10,"a",14),t.EFF(11),t.nI1(12,"translate"),t.k0s(),t.EFF(13,". "),t.k0s(),t.j41(14,"p"),t.EFF(15),t.nI1(16,"translate"),t.k0s()),2&r&&(t.R7$(),t.JRh(t.bMT(2,6,"expired")),t.R7$(3),t.JRh(t.bMT(5,8,"limit")),t.R7$(3),t.Lme(" ",t.bMT(8,10,"deactivated"),", ",t.bMT(9,12,"activeFrom")," "),t.R7$(4),t.JRh(t.bMT(12,14,"orderHistory")),t.R7$(4),t.SpI(" ",t.bMT(16,16,"tyForUnderstanding")," "))}function nt(r,f){1&r&&(t.j41(0,"p"),t.EFF(1),t.nI1(2,"translate"),t.k0s(),t.j41(3,"p"),t.EFF(4),t.nI1(5,"translate"),t.k0s(),t.j41(6,"p"),t.EFF(7),t.nI1(8,"translate"),t.k0s()),2&r&&(t.R7$(),t.JRh(t.bMT(2,3,"alreadyActivated")),t.R7$(3),t.JRh(t.bMT(5,5,"enjoy")),t.R7$(3),t.JRh(t.bMT(8,7,"thankYou")))}function rt(r,f){1&r&&t.nrm(0,"mat-spinner",15)}let at=(()=>{class r extends I.e{constructor(i,v,l,it,st,ot,V){super(),this.api=i,this.sseService=v,this.platformService=l,this.notifier=it,this.localStorage=st,this.route=V,this.PaymentMethods=T.dS,this.orderDate="",this.expired=!1,this.loading=!0,this.alreadyActivated=!1,this.orderTotalWithVat=0,ot.init({[u.T.En]:g,[u.T.Ro]:y},V.snapshot.params.lang)}ngOnInit(){this.action=this.route.snapshot.params.action,this.fetchBankDetail(),this.platformService.isClient()&&("confirmed"===this.action?this.confirmRecurrence():this.activateRecurrence())}fetchBankDetail(){this.api.get("settings/payment/available",c.w.acc).pipe((0,b.Q)(this.destroy$)).subscribe(i=>{const v=i.find(l=>l.type.value===T.dS.BANK_TRANSFER);this.bankDetails=v?.bankTransferDetail})}confirmRecurrence(){const v={key:this.route.snapshot.params.orderId,hostName:window.location.host};this.sseService.stream("order/recurrence/rx/confirm",c.w.acc,{body:v}).pipe((0,E.W)(l=>(this.loading=!1,this.expired="LunaTimeoutException"===l.error.entityName,(0,F.$)(()=>l))),(0,b.Q)(this.destroy$)).subscribe(l=>{console.log(l),l&&l.statusType===$.gr.Final&&(this.paymentType=l.paymentType.value,this.orderTotalWithVat=l.totalWithVat,this.loading=!1)})}activateRecurrence(){const i=this.route.snapshot.params.orderId,v=(new x._y).set(h.Kq,!1);this.api.post(`order/recurrence/activate?key=${i}`,void 0,c.w.acc,{context:v}).pipe((0,E.W)(l=>(this.alreadyActivated=400===l.error.status,(0,F.$)(()=>l))),(0,O.j)(()=>this.loading=!1),(0,b.Q)(this.destroy$)).subscribe(l=>{this.orderDate=l.startDate})}static#t=this.\u0275fac=function(v){return new(v||r)(t.rXU(j.G),t.rXU(A.f),t.rXU(N),t.rXU(P.J),t.rXU(J.s),t.rXU(W.L),t.rXU(p.nX))};static#e=this.\u0275cmp=t.VBU({type:r,selectors:[["app-recurring-order-confirmation"]],standalone:!0,features:[t.Vt3,t.aNF],decls:18,vars:4,consts:[["codConfirmedRef",""],["onlineConfirmedRef",""],["bankTransferConfirmedRef",""],["expiredRef",""],["alreadyActivatedRef",""],["loadingRef",""],["content","",1,"d-flex","justify-content-center"],[4,"ngIf"],[3,"ngTemplateOutlet"],[1,"mt-5","text-center"],["src","assets/icons/clock.png",1,"mb-5"],["src","assets/icons/done.png",1,"mb-5"],["class","mt-5 text-center",4,"ngIf"],[4,"ngTemplateOutlet"],["href","/account/order-history"],["diameter","16",1,"mt-6"]],template:function(v,l){1&v&&(t.j41(0,"app-main-layout")(1,"div",6),t.DNE(2,m,2,1,"ng-container",7)(3,Y,4,1,"ng-container",7)(4,X,4,1,"ng-container",7)(5,w,3,2,"ng-container",7),t.k0s()(),t.DNE(6,_,13,17,"ng-template",null,0,t.C5r)(8,q,12,14,"ng-template",null,1,t.C5r)(10,tt,29,33,"ng-template",null,2,t.C5r)(12,et,17,18,"ng-template",null,3,t.C5r)(14,nt,9,9,"ng-template",null,4,t.C5r)(16,rt,1,0,"ng-template",null,5,t.C5r)),2&v&&(t.R7$(2),t.Y8G("ngIf",l.loading),t.R7$(),t.Y8G("ngIf",!l.loading&&l.expired),t.R7$(),t.Y8G("ngIf",!l.loading&&l.alreadyActivated),t.R7$(),t.Y8G("ngIf",!l.loading&&!l.expired&&!l.alreadyActivated))},dependencies:[C.G,k.v,M.bT,M.T3,e.LG,n.D9],styles:["img[_ngcontent-%COMP%]{width:120px;height:145px}p[_ngcontent-%COMP%]{margin-bottom:8px}"]})}return r})()},1986:(S,R,a)=>{a.d(R,{c:()=>$});var u=a(3236),g=a(8793),y=a(6697),T=a(9974),c=a(4360),b=a(5343),F=a(3703),O=a(1397);function I(h,C){return C?t=>(0,g.x)(C.pipe((0,y.s)(1),function E(){return(0,T.N)((h,C)=>{h.subscribe((0,c._)(C,b.l))})}()),t.pipe(I(h))):(0,O.Z)((t,j)=>h(t,j).pipe((0,y.s)(1),(0,F.u)(t)))}var x=a(1584);function $(h,C=u.E){const t=(0,x.O)(h,C);return I(()=>t)}},7048:(S,R,a)=>{a.d(R,{v:()=>y});var u=a(9974),g=a(4360);function y(T,c=!1){return(0,u.N)((b,E)=>{let F=0;b.subscribe((0,g._)(E,O=>{const I=T(O,F++);(I||c)&&E.next(O),!I&&E.complete()}))})}}}]);