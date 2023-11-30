"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3908],{8567:(f,p,r)=>{r.d(p,{J:()=>c});var n=r(5373),u=r(8291);const e=["table"];let c=(()=>{class y{constructor(g){this.router=g,this.columns=[]}ngAfterViewInit(){this.columns.push({id:"name",name:"Name",field:"path",sortable:!0,formatter:this.table?.nativeElement?.formatters?.hyperlink,href:`${this.router.url}/{{value}}`}),this.columns.push({id:"type",name:"Type",field:"data?.type",sortable:!0,formatter:this.table?.nativeElement?.formatters?.text}),this.columns.push({id:"description",name:"Description",field:"data?.description",sortable:!0,formatter:this.table?.nativeElement?.formatters?.text}),this.table.nativeElement.columns=this.columns,this.table.nativeElement.data=this.routes}handleClick(g){if(g.preventDefault(),g.target.shadowRoot){const m=g.composedPath().filter(h=>"IDS-HYPERLINK"===h.tagName)[0]?.href;m&&this.router.navigateByUrl(`/${m}`)}}static#e=this.\u0275fac=function(l){return new(l||y)(n.Y36(u.F0))};static#t=this.\u0275cmp=n.Xpm({type:y,selectors:[["app-demo-listing"]],viewQuery:function(l,d){if(1&l&&n.Gf(e,5,n.SBq),2&l){let m;n.iGM(m=n.CRH())&&(d.table=m.first)}},hostBindings:function(l,d){1&l&&n.NdJ("click",function(h){return d.handleClick(h)},!1,n.evT)},inputs:{routes:"routes",title:"title"},decls:8,vars:1,consts:[["language","en","locale","en-US","padding","8","hidden",""],["mode","light"],["cols","2","gap","md"],["font-size","20"],["list-style","true"],["table",""]],template:function(l,d){1&l&&(n.TgZ(0,"ids-container",0),n._UZ(1,"ids-theme-switcher",1),n.TgZ(2,"ids-layout-grid",2)(3,"ids-layout-grid-cell")(4,"ids-text",3),n._uU(5),n.qZA()()(),n._UZ(6,"ids-data-grid",4,5),n.qZA()),2&l&&(n.xp6(5),n.Oqu(d.title))}})}return y})()},9874:(f,p,r)=>{r.d(p,{H:()=>e});var n=r(6733),u=r(5373);let e=(()=>{class c{static#e=this.\u0275fac=function(g){return new(g||c)};static#t=this.\u0275mod=u.oAB({type:c});static#s=this.\u0275inj=u.cJS({imports:[n.ez]})}return c})()},3908:(f,p,r)=>{r.r(p),r.d(p,{IdsMessageModule:()=>V});var n=r(6733),u=r(8291),e=r(5373),c=r(8567);const _=["messageError"],g=["messageErrorTrigger"],d=["messageError"],m=["messageAlert"],h=["messageSuccess"],Z=["messageInfo"],q=["messageConfirmation"],v=["messageHugeText"],A=["messageNoButtons"],U=["messageAllowTags"],E=["messageDisallowTags"],b=["messageErrorTrigger"],C=["messageAlertTrigger"],M=["messageSuccessTrigger"],w=["messageInfoTrigger"],O=["messageConfirmationTrigger"],x=["messageHugeTextTrigger"],G=["messageAllowTagsTrigger"],S=["messageDisallowTagsTrigger"],B=["messageNoButtonsTrigger"],I=["messageOpacity2"],R=["messageOpacity4"],k=["messageOpacity6"],D=["messageOpacity8"],z=["messageOpacity10"],N=["messageOpacity2Trigger"],P=["messageOpacity4Trigger"],L=["messageOpacity6Trigger"],Q=["messageOpacity8Trigger"],J=["messageOpacity10Trigger"],K=["messageEvent"],$=["messageEventTrigger"],T=[{path:"",component:(()=>{class o{constructor(){this.routes=T.filter(a=>""!==a.path)}ngAfterViewInit(){console.log("Ids Message init")}static#e=this.\u0275fac=function(i){return new(i||o)};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-ids-message"]],decls:1,vars:2,consts:[[3,"title","routes"]],template:function(i,s){1&i&&e._UZ(0,"app-demo-listing",0),2&i&&e.Q6J("title","Ids Message Examples")("routes",s.routes)},dependencies:[c.J]})}return o})()},{path:"example",component:(()=>{class o{constructor(){}ngOnInit(){console.log("IdsMessage example OnInit")}ngAfterViewInit(){this.messageError&&(this.messageError.nativeElement.target=this.messageErrorTrigger.nativeElement,this.messageError.nativeElement.triggerType="click",this.messageError.nativeElement.onButtonClick=a=>{console.info("IdsMessage was "+(a.cancel?"cancelled":"confirmed")),this.messageError.nativeElement.hide()})}handleBeforeShow(){return this.messageErrorTrigger.nativeElement.disabled=!0,!0}handleHide(){this.messageErrorTrigger.nativeElement.disabled=!1}static#e=this.\u0275fac=function(i){return new(i||o)};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-example"]],viewQuery:function(i,s){if(1&i&&(e.Gf(_,5,e.SBq),e.Gf(g,5,e.SBq)),2&i){let t;e.iGM(t=e.CRH())&&(s.messageError=t.first),e.iGM(t=e.CRH())&&(s.messageErrorTrigger=t.first)}},decls:21,vars:2,consts:[["language","en","locale","en-US","padding","8","hidden",""],["mode","light"],["id","message-example-error",3,"beforeshow","hide"],["messageError",""],["slot","title","font-size","24","type","h2","id","my-message-title"],["id","my-message-contents"],["slot","buttons","appearance","secondary","id","my-message-cancel","cancel",""],["slot","buttons","appearance","primary","id","my-message-confirm"],["auto-fit","true","padding","md"],["font-size","12","type","h1"],["appearance","secondary","id","message-example-error-trigger"],["messageErrorTrigger",""]],template:function(i,s){1&i&&(e.TgZ(0,"ids-container",0),e._UZ(1,"ids-theme-switcher",1),e.TgZ(2,"ids-message",2,3),e.NdJ("beforeshow",function(){return s.handleBeforeShow()})("hide",function(){return s.handleHide()}),e.TgZ(4,"ids-text",4),e._uU(5,"Lost connection"),e.qZA(),e.TgZ(6,"ids-text",5),e._uU(7,"This application has experienced a system error due to the lack of internet access. Please restart the application in order to proceed."),e.qZA(),e.TgZ(8,"ids-modal-button",6),e._uU(9,"Cancel"),e.qZA(),e.TgZ(10,"ids-modal-button",7),e._uU(11,"Restart"),e.qZA()(),e.TgZ(12,"ids-layout-grid",8)(13,"ids-layout-grid-cell")(14,"ids-text",9),e._uU(15,"Message"),e.qZA()()(),e.TgZ(16,"ids-layout-grid",8)(17,"ids-layout-grid-cell")(18,"ids-button",10,11),e._uU(20," Error Example "),e.qZA()()()()),2&i&&(e.xp6(2),e.uIk("status","error"),e.xp6(4),e.uIk("align","left"))}})}return o})()},{path:"types",component:(()=>{class o{constructor(){this.setupMessage=(a,i)=>{a.target=i,a.triggerType="click",a.addEventListener("beforeshow",()=>(i.disabled=!0,!0)),a.onButtonClick=s=>{console.info(`IdsMessage with title "${a.title}" had its "${s.cancel?"cancel":s.text}" button clicked`),a.hide()},a.addEventListener("hide",()=>{i.disabled=!1})}}ngOnInit(){console.log("IdsMessage types OnInit")}ngAfterViewInit(){this.setupMessage(this.messageError.nativeElement,this.messageErrorTrigger.nativeElement),this.setupMessage(this.messageAlert.nativeElement,this.messageAlertTrigger.nativeElement),this.setupMessage(this.messageSuccess.nativeElement,this.messageSuccessTrigger.nativeElement),this.setupMessage(this.messageInfo.nativeElement,this.messageInfoTrigger.nativeElement),this.setupMessage(this.messageConfirmation.nativeElement,this.messageConfirmationTrigger.nativeElement),this.setupMessage(this.messageHugeText.nativeElement,this.messageHugeTextTrigger.nativeElement),this.setupMessage(this.messageNoButtons.nativeElement,this.messageNoButtonsTrigger.nativeElement),this.setupMessage(this.messageAllowTags.nativeElement,this.messageAllowTagsTrigger.nativeElement),this.setupMessage(this.messageDisallowTags.nativeElement,this.messageDisallowTagsTrigger.nativeElement)}static#e=this.\u0275fac=function(i){return new(i||o)};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-types"]],viewQuery:function(i,s){if(1&i&&(e.Gf(d,5,e.SBq),e.Gf(m,5,e.SBq),e.Gf(h,5,e.SBq),e.Gf(Z,5,e.SBq),e.Gf(q,5,e.SBq),e.Gf(v,5,e.SBq),e.Gf(A,5,e.SBq),e.Gf(U,5,e.SBq),e.Gf(E,5,e.SBq),e.Gf(b,5,e.SBq),e.Gf(C,5,e.SBq),e.Gf(M,5,e.SBq),e.Gf(w,5,e.SBq),e.Gf(O,5,e.SBq),e.Gf(x,5,e.SBq),e.Gf(G,5,e.SBq),e.Gf(S,5,e.SBq),e.Gf(B,5,e.SBq)),2&i){let t;e.iGM(t=e.CRH())&&(s.messageError=t.first),e.iGM(t=e.CRH())&&(s.messageAlert=t.first),e.iGM(t=e.CRH())&&(s.messageSuccess=t.first),e.iGM(t=e.CRH())&&(s.messageInfo=t.first),e.iGM(t=e.CRH())&&(s.messageConfirmation=t.first),e.iGM(t=e.CRH())&&(s.messageHugeText=t.first),e.iGM(t=e.CRH())&&(s.messageNoButtons=t.first),e.iGM(t=e.CRH())&&(s.messageAllowTags=t.first),e.iGM(t=e.CRH())&&(s.messageDisallowTags=t.first),e.iGM(t=e.CRH())&&(s.messageErrorTrigger=t.first),e.iGM(t=e.CRH())&&(s.messageAlertTrigger=t.first),e.iGM(t=e.CRH())&&(s.messageSuccessTrigger=t.first),e.iGM(t=e.CRH())&&(s.messageInfoTrigger=t.first),e.iGM(t=e.CRH())&&(s.messageConfirmationTrigger=t.first),e.iGM(t=e.CRH())&&(s.messageHugeTextTrigger=t.first),e.iGM(t=e.CRH())&&(s.messageAllowTagsTrigger=t.first),e.iGM(t=e.CRH())&&(s.messageDisallowTagsTrigger=t.first),e.iGM(t=e.CRH())&&(s.messageNoButtonsTrigger=t.first)}},decls:203,vars:4,consts:[["language","en","locale","en-US","padding","8","hidden",""],["mode","light"],["id","message-error",3,"status"],["messageError",""],["slot","title","font-size","24","type","h2","id","message-error-title"],["align","left",1,"demo-contents"],["slot","buttons","appearance","primary","id","message-error-restart"],["id","message-alert",3,"status"],["messageAlert",""],["slot","title","font-size","24","type","h2","id","message-alert-title"],["slot","buttons","appearance","secondary","id","message-alert-cancel","cancel",""],["slot","buttons","appearance","primary","id","message-alert-try-again"],["id","message-success",3,"status"],["messageSuccess",""],["slot","title","font-size","24","type","h2","id","message-success-title"],[1,"demo-contents"],["href","http://www.example.com","target","_blank"],["slot","buttons","appearance","primary","id","message-success-done"],["id","message-info",3,"status"],["messageInfo",""],["slot","title","font-size","24","type","h2","id","message-info-title"],["slot","buttons","appearance","primary","id","message-info-done"],["id","message-confirmation"],["messageConfirmation",""],["slot","title","font-size","24","type","h2","id","message-confirmation-title"],["slot","buttons","appearance","secondary","id","message-confirmation-cancel","cancel",""],["slot","buttons","appearance","primary","id","message-confirmation-delete"],["id","message-huge-text"],["messageHugeText",""],["slot","title","font-size","24","type","h2","id","message-huge-text-title"],["slot","buttons","appearance","secondary","id","message-huge-text-cancel","cancel",""],["slot","buttons","appearance","primary","id","message-huge-text-done"],["id","message-no-buttons"],["messageNoButtons",""],["slot","title","font-size","24","type","h2","id","message-no-buttons-title"],["id","message-allow-tags"],["messageAllowTags",""],["slot","title","font-size","24","type","h2","id","message-allow-tags-title"],["href","#",1,"hyperlink","hide-focus","longpress-target"],["slot","buttons","appearance","primary","id","message-allow-tags-ok"],["id","message-disallow-tags","xss-ignored-tags",""],["messageDisallowTags",""],["slot","title","font-size","24","type","h2","id","message-disallow-tags-title"],["slot","buttons","appearance","primary","id","message-disallow-tags-ok"],["auto-fit","true","padding","md"],["font-size","12","type","h1"],["appearance","secondary","id","message-error-trigger"],["messageErrorTrigger",""],["appearance","secondary","id","message-alert-trigger"],["messageAlertTrigger",""],["appearance","secondary","id","message-success-trigger"],["messageSuccessTrigger",""],["appearance","secondary","id","message-info-trigger"],["messageInfoTrigger",""],["appearance","secondary","id","message-confirmation-trigger"],["messageConfirmationTrigger",""],["appearance","secondary","id","message-huge-text-trigger"],["messageHugeTextTrigger",""],["appearance","secondary","id","message-allow-tags-trigger"],["messageAllowTagsTrigger",""],["appearance","secondary","id","message-disallow-tags-trigger"],["messageDisallowTagsTrigger",""],["appearance","secondary","id","message-no-buttons-trigger"],["messageNoButtonsTrigger",""]],template:function(i,s){1&i&&(e.TgZ(0,"ids-container",0),e._UZ(1,"ids-theme-switcher",1),e.TgZ(2,"ids-message",2,3)(4,"ids-text",4),e._uU(5,"Lost connection"),e.qZA(),e.TgZ(6,"ids-text",5),e._uU(7,"This application has experienced a system error due to the lack of internet access. Please restart the application in order to proceed."),e.qZA(),e.TgZ(8,"ids-modal-button",6),e._uU(9,"Restart Now"),e.qZA()(),e.TgZ(10,"ids-message",7,8)(12,"ids-text",9),e._uU(13,"Application Alert"),e.qZA(),e.TgZ(14,"ids-text",5),e._uU(15,"This application has experienced a security alert. Please acknowledge the alert to proceed or cancel to abort."),e.qZA(),e.TgZ(16,"ids-modal-button",10),e._uU(17,"Cancel"),e.qZA(),e.TgZ(18,"ids-modal-button",11),e._uU(19,"Try Again"),e.qZA()(),e.TgZ(20,"ids-message",12,13)(22,"ids-text",14),e._uU(23,"Application Success"),e.qZA(),e.TgZ(24,"ids-text",15),e._uU(25,"Success! You've done the thing! Here's a "),e.TgZ(26,"ids-hyperlink",16),e._uU(27,"link"),e.qZA(),e._uU(28,"."),e.qZA(),e.TgZ(29,"ids-modal-button",17),e._uU(30,"Done"),e.qZA()(),e.TgZ(31,"ids-message",18,19)(33,"ids-text",20),e._uU(34,"File Upload Complete"),e.qZA(),e.TgZ(35,"ids-text",5),e._uU(36,'Your file "'),e.TgZ(37,"em"),e._uU(38,"photo.png"),e.qZA(),e._uU(39,'" was successfully uploaded to your personal folder, and is now '),e.TgZ(40,"strong"),e._uU(41,"public for viewing"),e.qZA(),e._uU(42,"."),e.qZA(),e.TgZ(43,"ids-modal-button",21),e._uU(44,"Done"),e.qZA()(),e.TgZ(45,"ids-message",22,23)(47,"ids-text",24),e._uU(48,"Delete this Application"),e.qZA(),e.TgZ(49,"ids-text",5),e._uU(50,"You are about to delete this application permanently."),e._UZ(51,"br")(52,"br"),e._uU(53," Would you like to proceed?"),e.qZA(),e.TgZ(54,"ids-modal-button",25),e._uU(55,"Cancel"),e.qZA(),e.TgZ(56,"ids-modal-button",26),e._uU(57,"Delete"),e.qZA()(),e.TgZ(58,"ids-message",27,28)(60,"ids-text",29),e._uU(61,"Message with huge text"),e.qZA(),e.TgZ(62,"ids-text",5),e._uU(63,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"),e._UZ(64,"br")(65,"br"),e.qZA(),e.TgZ(66,"ids-modal-button",30),e._uU(67,"Cancel"),e.qZA(),e.TgZ(68,"ids-modal-button",31),e._uU(69,"Done"),e.qZA()(),e.TgZ(70,"ids-message",32,33)(72,"ids-text",34),e._uU(73,"No Buttons"),e.qZA(),e.TgZ(74,"ids-text",15),e._uU(75,"No problem."),e.qZA()(),e.TgZ(76,"ids-message",35,36)(78,"ids-text",37),e._uU(79,"Tags are present"),e.qZA(),e.TgZ(80,"ids-text",5)(81,"a",38)(82,"b"),e._uU(83,"You"),e.qZA()(),e._uU(84,"have "),e._UZ(85,"br"),e._uU(86,"allowed "),e._UZ(87,"br"),e._uU(88,"any "),e.TgZ(89,"del"),e._uU(90,"tags"),e.qZA(),e.TgZ(91,"em"),e._uU(92,"to"),e.qZA(),e.TgZ(93,"i"),e._uU(94,"appear"),e.qZA(),e.TgZ(95,"ins"),e._uU(96,"in"),e.qZA(),e.TgZ(97,"mark"),e._uU(98,"this"),e.qZA(),e.TgZ(99,"small"),e._uU(100,"message"),e.qZA(),e._uU(101,". "),e.TgZ(102,"strong"),e._uU(103,"All "),e.qZA(),e.TgZ(104,"sub"),e._uU(105,"are"),e.qZA(),e.TgZ(106,"sup"),e._uU(107,"default allowed"),e.qZA(),e._uU(108,". "),e.qZA(),e.TgZ(109,"ids-modal-button",39),e._uU(110,"Done"),e.qZA()(),e.TgZ(111,"ids-message",40,41)(113,"ids-text",42),e._uU(114,"Tags are NOT present"),e.qZA(),e.TgZ(115,"ids-text",5)(116,"a",38)(117,"b"),e._uU(118,"You"),e.qZA()(),e._uU(119,"have "),e._UZ(120,"br"),e._uU(121,"disallowed "),e._UZ(122,"br"),e._uU(123,"any "),e.TgZ(124,"del"),e._uU(125,"tags"),e.qZA(),e.TgZ(126,"em"),e._uU(127,"from"),e.qZA(),e.TgZ(128,"i"),e._uU(129,"appearing"),e.qZA(),e.TgZ(130,"ins"),e._uU(131,"in"),e.qZA(),e.TgZ(132,"mark"),e._uU(133,"this"),e.qZA(),e.TgZ(134,"small"),e._uU(135,"message"),e.qZA(),e._uU(136,". "),e.TgZ(137,"strong"),e._uU(138,"All"),e.qZA(),e.TgZ(139,"sub"),e._uU(140,"are"),e.qZA(),e.TgZ(141,"sup"),e._uU(142,"stripped"),e.qZA(),e._uU(143,". "),e.qZA(),e.TgZ(144,"ids-modal-button",43),e._uU(145,"Done"),e.qZA()(),e.TgZ(146,"ids-layout-grid",44)(147,"ids-layout-grid-cell")(148,"ids-text",45),e._uU(149,"Message Types"),e.qZA()()(),e.TgZ(150,"ids-layout-grid",44)(151,"ids-layout-grid-cell")(152,"ids-button",46,47),e._uU(154,"Error Example"),e.qZA()()(),e.TgZ(155,"ids-layout-grid",44)(156,"ids-layout-grid-cell")(157,"ids-button",48,49),e._uU(159,"Alert Example"),e.qZA()()(),e.TgZ(160,"ids-layout-grid",44)(161,"ids-layout-grid-cell")(162,"ids-button",50,51),e._uU(164,"Success Example"),e.qZA()()(),e.TgZ(165,"ids-layout-grid",44)(166,"ids-layout-grid-cell")(167,"ids-button",52,53),e._uU(169,"Info Example"),e.qZA()()(),e.TgZ(170,"ids-layout-grid",44)(171,"ids-layout-grid-cell")(172,"ids-button",54,55),e._uU(174,"Confirmation Example"),e.qZA()()(),e.TgZ(175,"ids-layout-grid",44)(176,"ids-layout-grid-cell")(177,"ids-button",56,57),e._uU(179,"Huge Text Example"),e.qZA()()(),e.TgZ(180,"ids-layout-grid",44)(181,"ids-layout-grid-cell")(182,"ids-text",45),e._uU(183,"XSS Demos"),e.qZA()()(),e.TgZ(184,"ids-layout-grid",44)(185,"ids-layout-grid-cell")(186,"ids-button",58,59),e._uU(188,"Allow Tags"),e.qZA()()(),e.TgZ(189,"ids-layout-grid",44)(190,"ids-layout-grid-cell")(191,"ids-button",60,61),e._uU(193,"Disallow Tags"),e.qZA()()(),e.TgZ(194,"ids-layout-grid",44)(195,"ids-layout-grid-cell")(196,"ids-text",45),e._uU(197,"Other Types"),e.qZA()()(),e.TgZ(198,"ids-layout-grid",44)(199,"ids-layout-grid-cell")(200,"ids-button",62,63),e._uU(202,"No Buttons"),e.qZA()()()()),2&i&&(e.xp6(2),e.Q6J("status","error"),e.xp6(8),e.Q6J("status","alert"),e.xp6(10),e.Q6J("status","success"),e.xp6(11),e.Q6J("status","info"))}})}return o})()},{path:"overlay-opacity",component:(()=>{class o{constructor(){this.setupMessage=(a,i)=>{a.target=i,a.triggerType="click",a.addEventListener("beforeshow",()=>(i.disabled=!0,!0)),a.onButtonClick=s=>{console.info(`IdsMessage with title "${a.title}" had its "${s.cancel?"cancel":s.text}" button clicked`),a.hide()},a.addEventListener("hide",()=>{i.disabled=!1})}}ngOnInit(){console.log("IdsMessage overlay opacity OnInit")}ngAfterViewInit(){this.setupMessage(this.messageOpacity2.nativeElement,this.messageOpacity2Trigger.nativeElement),this.setupMessage(this.messageOpacity4.nativeElement,this.messageOpacity4Trigger.nativeElement),this.setupMessage(this.messageOpacity6.nativeElement,this.messageOpacity6Trigger.nativeElement),this.setupMessage(this.messageOpacity8.nativeElement,this.messageOpacity8Trigger.nativeElement),this.setupMessage(this.messageOpacity10.nativeElement,this.messageOpacity10Trigger.nativeElement)}static#e=this.\u0275fac=function(i){return new(i||o)};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-overlay-opacity"]],viewQuery:function(i,s){if(1&i&&(e.Gf(I,5,e.SBq),e.Gf(R,5,e.SBq),e.Gf(k,5,e.SBq),e.Gf(D,5,e.SBq),e.Gf(z,5,e.SBq),e.Gf(N,5,e.SBq),e.Gf(P,5,e.SBq),e.Gf(L,5,e.SBq),e.Gf(Q,5,e.SBq),e.Gf(J,5,e.SBq)),2&i){let t;e.iGM(t=e.CRH())&&(s.messageOpacity2=t.first),e.iGM(t=e.CRH())&&(s.messageOpacity4=t.first),e.iGM(t=e.CRH())&&(s.messageOpacity6=t.first),e.iGM(t=e.CRH())&&(s.messageOpacity8=t.first),e.iGM(t=e.CRH())&&(s.messageOpacity10=t.first),e.iGM(t=e.CRH())&&(s.messageOpacity2Trigger=t.first),e.iGM(t=e.CRH())&&(s.messageOpacity4Trigger=t.first),e.iGM(t=e.CRH())&&(s.messageOpacity6Trigger=t.first),e.iGM(t=e.CRH())&&(s.messageOpacity8Trigger=t.first),e.iGM(t=e.CRH())&&(s.messageOpacity10Trigger=t.first)}},decls:67,vars:0,consts:[["language","en","locale","en-US","padding","8","hidden",""],["mode","light"],["id","message-opacity-2","opacity","0.2","status","error"],["messageOpacity2",""],["slot","title","font-size","24","type","h2","id","message-opacity-2-title"],["align","left",1,"demo-contents"],["slot","buttons","appearance","primary","id","message-opacity-2-ok"],["id","message-opacity-4","opacity","0.4","status","error"],["messageOpacity4",""],["slot","title","font-size","24","type","h2","id","message-opacity-4-title"],["slot","buttons","appearance","primary","id","message-opacity-4-ok"],["id","message-opacity-6","opacity","0.6","status","error"],["messageOpacity6",""],["slot","title","font-size","24","type","h2","id","message-opacity-6-title"],["slot","buttons","appearance","primary","id","message-opacity-6-ok"],["id","message-opacity-8","opacity","0.8","status","error"],["messageOpacity8",""],["slot","title","font-size","24","type","h2","id","message-opacity-8-title"],["slot","buttons","appearance","primary","id","message-opacity-8-ok"],["id","message-opacity-10","opacity","1","status","error"],["messageOpacity10",""],["slot","title","font-size","24","type","h2","id","message-opacity-10-title"],["slot","buttons","appearance","primary","id","message-opacity-10-ok"],["auto-fit","true","padding","md"],["font-size","12","type","h1"],["auto-fit","true","cols","1","gap","md"],["appearance","secondary","id","message-opacity-2-trigger"],["messageOpacity2Trigger",""],["appearance","secondary","id","message-opacity-4-trigger"],["messageOpacity4Trigger",""],["appearance","secondary","id","message-opacity-6-trigger"],["messageOpacity6Trigger",""],["appearance","secondary","id","message-opacity-8-trigger"],["messageOpacity8Trigger",""],["appearance","secondary","id","message-opacity-10-trigger"],["messageOpacity10Trigger",""]],template:function(i,s){1&i&&(e.TgZ(0,"ids-container",0),e._UZ(1,"ids-theme-switcher",1),e.TgZ(2,"ids-message",2,3)(4,"ids-text",4),e._uU(5,"Opacity 20%"),e.qZA(),e.TgZ(6,"ids-text",5),e._uU(7,"This application has experienced a system error due to the lack of internet access. Please restart the application in order to proceed."),e.qZA(),e.TgZ(8,"ids-modal-button",6),e._uU(9,"OK"),e.qZA()(),e.TgZ(10,"ids-message",7,8)(12,"ids-text",9),e._uU(13,"Opacity 40%"),e.qZA(),e.TgZ(14,"ids-text",5),e._uU(15,"This application has experienced a system error due to the lack of internet access. Please restart the application in order to proceed."),e.qZA(),e.TgZ(16,"ids-modal-button",10),e._uU(17,"OK"),e.qZA()(),e.TgZ(18,"ids-message",11,12)(20,"ids-text",13),e._uU(21,"Opacity 60%"),e.qZA(),e.TgZ(22,"ids-text",5),e._uU(23,"This application has experienced a system error due to the lack of internet access. Please restart the application in order to proceed."),e.qZA(),e.TgZ(24,"ids-modal-button",14),e._uU(25,"OK"),e.qZA()(),e.TgZ(26,"ids-message",15,16)(28,"ids-text",17),e._uU(29,"Opacity 80%"),e.qZA(),e.TgZ(30,"ids-text",5),e._uU(31,"This application has experienced a system error due to the lack of internet access. Please restart the application in order to proceed."),e.qZA(),e.TgZ(32,"ids-modal-button",18),e._uU(33,"OK"),e.qZA()(),e.TgZ(34,"ids-message",19,20)(36,"ids-text",21),e._uU(37,"Opacity 100%"),e.qZA(),e.TgZ(38,"ids-text",5),e._uU(39,"This application has experienced a system error due to the lack of internet access. Please restart the application in order to proceed."),e.qZA(),e.TgZ(40,"ids-modal-button",22),e._uU(41,"OK"),e.qZA()(),e.TgZ(42,"ids-layout-grid",23)(43,"ids-layout-grid-cell")(44,"ids-text",24),e._uU(45,"Message (Opacity)"),e.qZA()()(),e.TgZ(46,"ids-layout-grid",25)(47,"ids-layout-grid-cell")(48,"ids-button",26,27),e._uU(50,"Opacity 0.2"),e.qZA()(),e.TgZ(51,"ids-layout-grid-cell")(52,"ids-button",28,29),e._uU(54,"Opacity 0.4"),e.qZA()(),e.TgZ(55,"ids-layout-grid-cell")(56,"ids-button",30,31),e._uU(58,"Opacity 0.6"),e.qZA()(),e.TgZ(59,"ids-layout-grid-cell")(60,"ids-button",32,33),e._uU(62,"Opacity 0.8"),e.qZA()(),e.TgZ(63,"ids-layout-grid-cell")(64,"ids-button",34,35),e._uU(66,"Opacity 1"),e.qZA()()()())}})}return o})()},{path:"events",component:(()=>{class o{constructor(){}ngOnInit(){console.log("IdsMessage events OnInit")}ngAfterViewInit(){this.messageEvent.nativeElement.target=this.messageEventTrigger.nativeElement,this.messageEvent.nativeElement.triggerType="click",this.messageEvent.nativeElement.onButtonClick=a=>{console.info("IdsMessage was "+(a.cancel?"cancelled":"confirmed")),this.messageEvent.nativeElement.hide()}}handleBeforeShow(){return this.messageEventTrigger.nativeElement.disabled=!0,!0}handleHide(){console.info('Modal event "hide" triggered'),this.messageEventTrigger.nativeElement.disabled=!1}handleShow(){return console.info('Modal event "show" triggered'),!0}static#e=this.\u0275fac=function(i){return new(i||o)};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-events"]],viewQuery:function(i,s){if(1&i&&(e.Gf(K,5,e.SBq),e.Gf($,5,e.SBq)),2&i){let t;e.iGM(t=e.CRH())&&(s.messageEvent=t.first),e.iGM(t=e.CRH())&&(s.messageEventTrigger=t.first)}},decls:21,vars:0,consts:[["language","en","locale","en-US","padding","8","hidden",""],["mode","light"],["id","message-example-event","status","info",3,"beforeshow","show","hide"],["messageEvent",""],["slot","title","font-size","24","type","h2","id","my-message-title"],["id","my-message-contents","align","left"],["slot","buttons","appearance","secondary","id","my-message-cancel","cancel",""],["slot","buttons","appearance","primary","id","my-message-confirm"],["auto-fit","true","padding","md"],["font-size","12","type","h1"],["appearance","secondary","id","message-example-event-trigger"],["messageEventTrigger",""]],template:function(i,s){1&i&&(e.TgZ(0,"ids-container",0),e._UZ(1,"ids-theme-switcher",1),e.TgZ(2,"ids-message",2,3),e.NdJ("beforeshow",function(){return s.handleBeforeShow()})("show",function(){return s.handleShow()})("hide",function(){return s.handleHide()}),e.TgZ(4,"ids-text",4),e._uU(5,"Modal Event Trigger"),e.qZA(),e.TgZ(6,"ids-text",5),e._uU(7,"Modal events will be triggered on this message."),e.qZA(),e.TgZ(8,"ids-modal-button",6),e._uU(9,"Cancel"),e.qZA(),e.TgZ(10,"ids-modal-button",7),e._uU(11,"Confirm"),e.qZA()(),e.TgZ(12,"ids-layout-grid",8)(13,"ids-layout-grid-cell")(14,"ids-text",9),e._uU(15,"Message (events)"),e.qZA()()(),e.TgZ(16,"ids-layout-grid",8)(17,"ids-layout-grid-cell")(18,"ids-button",10,11),e._uU(20," Events Example "),e.qZA()()()())}})}return o})()}];let X=(()=>{class o{static#e=this.\u0275fac=function(i){return new(i||o)};static#t=this.\u0275mod=e.oAB({type:o});static#s=this.\u0275inj=e.cJS({imports:[u.Bz.forChild(T),u.Bz]})}return o})();var Y=r(9874);let V=(()=>{class o{static#e=this.\u0275fac=function(i){return new(i||o)};static#t=this.\u0275mod=e.oAB({type:o});static#s=this.\u0275inj=e.cJS({imports:[n.ez,X,Y.H]})}return o})()}}]);