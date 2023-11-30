"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9402],{8567:(T,c,s)=>{s.d(c,{J:()=>d});var n=s(5373),l=s(8291);const e=["table"];let d=(()=>{class g{constructor(o){this.router=o,this.columns=[]}ngAfterViewInit(){this.columns.push({id:"name",name:"Name",field:"path",sortable:!0,formatter:this.table?.nativeElement?.formatters?.hyperlink,href:`${this.router.url}/{{value}}`}),this.columns.push({id:"type",name:"Type",field:"data?.type",sortable:!0,formatter:this.table?.nativeElement?.formatters?.text}),this.columns.push({id:"description",name:"Description",field:"data?.description",sortable:!0,formatter:this.table?.nativeElement?.formatters?.text}),this.table.nativeElement.columns=this.columns,this.table.nativeElement.data=this.routes}handleClick(o){if(o.preventDefault(),o.target.shadowRoot){const p=o.composedPath().filter(h=>"IDS-HYPERLINK"===h.tagName)[0]?.href;p&&this.router.navigateByUrl(`/${p}`)}}static#e=this.\u0275fac=function(m){return new(m||g)(n.Y36(l.F0))};static#t=this.\u0275cmp=n.Xpm({type:g,selectors:[["app-demo-listing"]],viewQuery:function(m,r){if(1&m&&n.Gf(e,5,n.SBq),2&m){let p;n.iGM(p=n.CRH())&&(r.table=p.first)}},hostBindings:function(m,r){1&m&&n.NdJ("click",function(h){return r.handleClick(h)},!1,n.evT)},inputs:{routes:"routes",title:"title"},decls:8,vars:1,consts:[["language","en","locale","en-US","padding","8","hidden",""],["mode","light"],["cols","2","gap","md"],["font-size","20"],["list-style","true"],["table",""]],template:function(m,r){1&m&&(n.TgZ(0,"ids-container",0),n._UZ(1,"ids-theme-switcher",1),n.TgZ(2,"ids-layout-grid",2)(3,"ids-layout-grid-cell")(4,"ids-text",3),n._uU(5),n.qZA()()(),n._UZ(6,"ids-data-grid",4,5),n.qZA()),2&m&&(n.xp6(5),n.Oqu(r.title))}})}return g})()},9874:(T,c,s)=>{s.d(c,{H:()=>e});var n=s(6733),l=s(5373);let e=(()=>{class d{static#e=this.\u0275fac=function(o){return new(o||d)};static#t=this.\u0275mod=l.oAB({type:d});static#i=this.\u0275inj=l.cJS({imports:[n.ez]})}return d})()},9402:(T,c,s)=>{s.r(c),s.d(c,{IdsPopupMenuModule:()=>v});var n=s(6733),l=s(8291),e=s(5373),d=s(8567);const g=["table"];let _=(()=>{class t{constructor(u){this.router=u,this.routes=f.filter(i=>""!==i.path),this.columns=[]}ngAfterViewInit(){console.log("Ids Popup init")}static#e=this.\u0275fac=function(i){return new(i||t)(e.Y36(l.F0))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-ids-popup-menu"]],viewQuery:function(i,a){if(1&i&&e.Gf(g,5,e.SBq),2&i){let Z;e.iGM(Z=e.CRH())&&(a.table=Z.first)}},decls:1,vars:2,consts:[[3,"title","routes"]],template:function(i,a){1&i&&e._UZ(0,"app-demo-listing",0),2&i&&e.Q6J("title","Ids Menu Button Examples")("routes",a.routes)},dependencies:[d.J]})}return t})(),o=(()=>{class t{constructor(){}ngOnInit(){console.log("example init")}static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-example"]],decls:51,vars:0,consts:[["language","en","locale","en-US","padding","8","hidden",""],["mode","light"],["id","popupmenu"],["id","item-five"],["id","item-six"],["icon","settings"],["icon","mail"],["icon","filter"],["auto-fit","true","padding","md"],["font-size","12","type","h1"]],template:function(i,a){1&i&&(e.TgZ(0,"ids-container",0),e._UZ(1,"ids-theme-switcher",1),e.TgZ(2,"ids-popup-menu",2)(3,"ids-menu-group")(4,"ids-menu-item"),e._uU(5,"Item One"),e.qZA(),e.TgZ(6,"ids-menu-item"),e._uU(7,"Item Two"),e.qZA(),e.TgZ(8,"ids-menu-item"),e._uU(9,"Item Three"),e.qZA(),e.TgZ(10,"ids-menu-item"),e._uU(11,"Item Four"),e.qZA(),e._UZ(12,"ids-separator"),e.TgZ(13,"ids-menu-item",3),e._uU(14," More Actions "),e.TgZ(15,"ids-popup-menu")(16,"ids-menu-group")(17,"ids-menu-item"),e._uU(18,"Sub-item One"),e.qZA(),e.TgZ(19,"ids-menu-item"),e._uU(20,"Sub-item Two"),e.qZA(),e.TgZ(21,"ids-menu-item"),e._uU(22,"Sub-item Three"),e.qZA()()()(),e.TgZ(23,"ids-menu-item",4),e._uU(24," Even More Actions "),e.TgZ(25,"ids-popup-menu")(26,"ids-menu-group")(27,"ids-menu-item",5),e._uU(28," Change Settings "),e.TgZ(29,"ids-popup-menu")(30,"ids-menu-group")(31,"ids-menu-item"),e._uU(32,"Setting One"),e.qZA(),e.TgZ(33,"ids-menu-item"),e._uU(34,"Setting Two"),e.qZA(),e.TgZ(35,"ids-menu-item"),e._uU(36,"Setting Three"),e.qZA(),e.TgZ(37,"ids-menu-item"),e._uU(38,"REAAAAALLLLY Long Setting Number Four"),e.qZA()()()(),e.TgZ(39,"ids-menu-item",6),e._uU(40,"Send Mail"),e.qZA(),e.TgZ(41,"ids-menu-item",7),e._uU(42,"Filter Content"),e.qZA()()()()()(),e.TgZ(43,"ids-layout-grid",8)(44,"ids-layout-grid-cell")(45,"ids-text",9),e._uU(46,"Popup Menu"),e.qZA()()(),e.TgZ(47,"ids-layout-grid",8)(48,"ids-layout-grid-cell")(49,"ids-text"),e._uU(50,"Right click anywhere to open the Popupmenu"),e.qZA()()()())}})}return t})();var m=s(3906);const r=["popupmenuEl"],f=[{path:"",component:_},{path:"example",component:o},{path:"data-driven",component:(()=>{class t{constructor(u){this.dataService=u}ngOnInit(){console.log("ids-popup-menu data-driven OnInit")}ngAfterViewInit(){this.popupmenuEl.nativeElement.align="top, left",this.dataService.getJsonData("menu-contents").subscribe(u=>{this.popupmenuEl.nativeElement.data=u})}static#e=this.\u0275fac=function(i){return new(i||t)(e.Y36(m.D))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-data-driven"]],viewQuery:function(i,a){if(1&i&&e.Gf(r,5,e.SBq),2&i){let Z;e.iGM(Z=e.CRH())&&(a.popupmenuEl=Z.first)}},decls:12,vars:0,consts:[["language","en","locale","en-US","padding","8","hidden",""],["mode","light"],["id","popupmenu"],["popupmenuEl",""],["auto-fit","true","padding","md"],["font-size","12","type","h1"]],template:function(i,a){1&i&&(e.TgZ(0,"ids-container",0),e._UZ(1,"ids-theme-switcher",1)(2,"ids-popup-menu",2,3),e.TgZ(4,"ids-layout-grid",4)(5,"ids-layout-grid-cell")(6,"ids-text",5),e._uU(7,"Popup Menu (Data Driven)"),e.qZA()()(),e.TgZ(8,"ids-layout-grid",4)(9,"ids-layout-grid-cell")(10,"ids-text"),e._uU(11,"This Popupmenu is controlled by a Datasource Mixin instead of by its markup"),e.qZA()()()())}})}return t})()},{path:"selected-state",component:(()=>{class t{constructor(){}ngOnInit(){}static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-selected-state"]],decls:62,vars:0,consts:[["language","en","locale","en-US","padding","8","hidden",""],["mode","light"],["id","popupmenu"],["id","single-select-header"],["id","single-select","select","single","aria-labelledby","single-select-header"],["value","single-1"],["value","single-2"],["value","single-3"],["selected","true","value","single-4"],["id","multi-select-header"],["id","multi-select","select","multiple","keep-open","","aria-labelledby","multi-select-header"],["value","multi-1"],["value","multi-2"],["value","multi-3"],["value","multi-4"],["disabled","true","selected","true","value","multi-5"],["id","multi-sub-items","select","multiple","keep-open",""],["icon","settings","value","sub-multi-1"],["icon","settings","value","sub-multi-2"],["icon","settings","value","sub-multi-3"],["icon","settings"],["id","keep-open-header"],["id","single-sub-items","select","single","keep-open","","aria-labelledby","keep-open-header"],["value","sub-sub-single-1"],["value","sub-sub-single-2"],["value","sub-sub-single-3"],["value","sub-sub-single-4"],["auto-fit","true","padding","md"],["font-size","12","type","h1"]],template:function(i,a){1&i&&(e.TgZ(0,"ids-container",0),e._UZ(1,"ids-theme-switcher",1),e.TgZ(2,"ids-popup-menu",2)(3,"ids-menu-header",3),e._uU(4,"Single-selectable Items"),e.qZA(),e.TgZ(5,"ids-menu-group",4)(6,"ids-menu-item",5),e._uU(7,"Single Item One"),e.qZA(),e.TgZ(8,"ids-menu-item",6),e._uU(9,"Single Item Two"),e.qZA(),e.TgZ(10,"ids-menu-item",7),e._uU(11,"Single Item Three"),e.qZA(),e.TgZ(12,"ids-menu-item",8),e._uU(13,"Single Item Four"),e.qZA()(),e._UZ(14,"ids-separator"),e.TgZ(15,"ids-menu-header",9),e._uU(16,"Multi-selectable Items"),e.qZA(),e.TgZ(17,"ids-menu-group",10)(18,"ids-menu-item",11),e._uU(19,"Multi Item One"),e.qZA(),e.TgZ(20,"ids-menu-item",12),e._uU(21,"Multi Item Two"),e.qZA(),e.TgZ(22,"ids-menu-item",13),e._uU(23,"Multi Item Three"),e.qZA(),e.TgZ(24,"ids-menu-item",14),e._uU(25,"Multi Item Four"),e.qZA(),e.TgZ(26,"ids-menu-item",15),e._uU(27,"Disabled Multi Item Five"),e.qZA()(),e._UZ(28,"ids-separator"),e.TgZ(29,"ids-menu-group")(30,"ids-menu-item"),e._uU(31," More Selectable Items... "),e.TgZ(32,"ids-popup-menu")(33,"ids-menu-group",16)(34,"ids-menu-item",17),e._uU(35,"Sub-Item One"),e.qZA(),e.TgZ(36,"ids-menu-item",18),e._uU(37,"Sub-Item Two"),e.qZA(),e.TgZ(38,"ids-menu-item",19),e._uU(39,"Sub-Item Three"),e.qZA(),e.TgZ(40,"ids-menu-item",20),e._uU(41," Sub-Item Four "),e.TgZ(42,"ids-popup-menu")(43,"ids-menu-header",21),e._uU(44,"Single-selectable Items that keep the menu open"),e.qZA(),e.TgZ(45,"ids-menu-group",22)(46,"ids-menu-item",23),e._uU(47,"Sub-Sub-Item One"),e.qZA(),e.TgZ(48,"ids-menu-item",24),e._uU(49,"Sub-Sub-Item Two"),e.qZA(),e.TgZ(50,"ids-menu-item",25),e._uU(51,"Sub-Sub-Item Three"),e.qZA(),e.TgZ(52,"ids-menu-item",26),e._uU(53,"Sub-Sub-Item Four"),e.qZA()()()()()()()()(),e.TgZ(54,"ids-layout-grid",27)(55,"ids-layout-grid-cell")(56,"ids-text",28),e._uU(57,"Popup Menu (Selected States)"),e.qZA()()(),e.TgZ(58,"ids-layout-grid",27)(59,"ids-layout-grid-cell")(60,"ids-text"),e._uU(61,"Right-click anywhere in the page to activate a Popupmenu. Many of the items in the menu are single/multi-selectable."),e.qZA()()()())}})}return t})()},{path:"trigger-immediate",component:(()=>{class t{constructor(){}ngOnInit(){}static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-trigger-immediate"]],decls:53,vars:0,consts:[["language","en","locale","en-US","padding","8","hidden",""],["mode","light"],["id","popupmenu","trigger","immediate"],["icon","settings"],["icon","mail"],["icon","filter"],["auto-fit","true","padding","md"],["font-size","12","type","h1"]],template:function(i,a){1&i&&(e.TgZ(0,"ids-container",0),e._UZ(1,"ids-theme-switcher",1),e.TgZ(2,"ids-popup-menu",2)(3,"ids-menu-group")(4,"ids-menu-item"),e._uU(5,"Item One"),e.qZA(),e.TgZ(6,"ids-menu-item"),e._uU(7,"Item Two"),e.qZA(),e.TgZ(8,"ids-menu-item"),e._uU(9,"Item Three"),e.qZA(),e.TgZ(10,"ids-menu-item"),e._uU(11,"Item Four"),e.qZA(),e._UZ(12,"ids-separator"),e.TgZ(13,"ids-menu-item"),e._uU(14," More Actions "),e.TgZ(15,"ids-popup-menu")(16,"ids-menu-group")(17,"ids-menu-item"),e._uU(18,"Sub-item One"),e.qZA(),e.TgZ(19,"ids-menu-item"),e._uU(20,"Sub-item Two"),e.qZA(),e.TgZ(21,"ids-menu-item"),e._uU(22,"Sub-item Three"),e.qZA()()()(),e.TgZ(23,"ids-menu-item"),e._uU(24," Even More Actions "),e.TgZ(25,"ids-popup-menu")(26,"ids-menu-group")(27,"ids-menu-item",3),e._uU(28," Change Settings "),e.TgZ(29,"ids-popup-menu")(30,"ids-menu-group")(31,"ids-menu-item"),e._uU(32,"Setting One"),e.qZA(),e.TgZ(33,"ids-menu-item"),e._uU(34,"Setting Two"),e.qZA(),e.TgZ(35,"ids-menu-item"),e._uU(36,"Setting Three"),e.qZA(),e.TgZ(37,"ids-menu-item"),e._uU(38,"REAAAAALLLLY Long Setting Number Four"),e.qZA()()()(),e.TgZ(39,"ids-menu-item",4),e._uU(40,"Send Mail"),e.qZA(),e.TgZ(41,"ids-menu-item",5),e._uU(42,"Filter Content"),e.qZA()()()()()(),e.TgZ(43,"ids-layout-grid",6)(44,"ids-layout-grid-cell")(45,"ids-text",7),e._uU(46,"Popup Menu"),e.qZA()()(),e.TgZ(47,"ids-layout-grid",6)(48,"ids-layout-grid-cell")(49,"ids-text"),e._uU(50,"The Popupmenu on this page is triggered immediately on page load."),e._UZ(51,"br"),e._uU(52," After closing the first time, the Popupmenu is reconfigured to be activated on contextmenu events."),e.qZA()()()())}})}return t})()}];let U=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=e.oAB({type:t});static#i=this.\u0275inj=e.cJS({imports:[l.Bz.forChild(f),l.Bz]})}return t})();var A=s(9874);let v=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=e.oAB({type:t});static#i=this.\u0275inj=e.cJS({imports:[n.ez,U,A.H]})}return t})()}}]);