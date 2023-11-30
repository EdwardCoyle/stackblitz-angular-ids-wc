"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5536],{8567:(v,u,l)=>{l.d(u,{J:()=>n});var i=l(5373),c=l(8291);const t=["table"];let n=(()=>{class h{constructor(r){this.router=r,this.columns=[]}ngAfterViewInit(){this.columns.push({id:"name",name:"Name",field:"path",sortable:!0,formatter:this.table?.nativeElement?.formatters?.hyperlink,href:`${this.router.url}/{{value}}`}),this.columns.push({id:"type",name:"Type",field:"data?.type",sortable:!0,formatter:this.table?.nativeElement?.formatters?.text}),this.columns.push({id:"description",name:"Description",field:"data?.description",sortable:!0,formatter:this.table?.nativeElement?.formatters?.text}),this.table.nativeElement.columns=this.columns,this.table.nativeElement.data=this.routes}handleClick(r){if(r.preventDefault(),r.target.shadowRoot){const d=r.composedPath().filter(g=>"IDS-HYPERLINK"===g.tagName)[0]?.href;d&&this.router.navigateByUrl(`/${d}`)}}static#t=this.\u0275fac=function(o){return new(o||h)(i.Y36(c.F0))};static#i=this.\u0275cmp=i.Xpm({type:h,selectors:[["app-demo-listing"]],viewQuery:function(o,p){if(1&o&&i.Gf(t,5,i.SBq),2&o){let d;i.iGM(d=i.CRH())&&(p.table=d.first)}},hostBindings:function(o,p){1&o&&i.NdJ("click",function(g){return p.handleClick(g)},!1,i.evT)},inputs:{routes:"routes",title:"title"},decls:8,vars:1,consts:[["language","en","locale","en-US","padding","8","hidden",""],["mode","light"],["cols","2","gap","md"],["font-size","20"],["list-style","true"],["table",""]],template:function(o,p){1&o&&(i.TgZ(0,"ids-container",0),i._UZ(1,"ids-theme-switcher",1),i.TgZ(2,"ids-layout-grid",2)(3,"ids-layout-grid-cell")(4,"ids-text",3),i._uU(5),i.qZA()()(),i._UZ(6,"ids-data-grid",4,5),i.qZA()),2&o&&(i.xp6(5),i.Oqu(p.title))}})}return h})()},9874:(v,u,l)=>{l.d(u,{H:()=>t});var i=l(6733),c=l(5373);let t=(()=>{class n{static#t=this.\u0275fac=function(r){return new(r||n)};static#i=this.\u0275mod=c.oAB({type:n});static#e=this.\u0275inj=c.cJS({imports:[i.ez]})}return n})()},5536:(v,u,l)=>{l.r(u),l.d(u,{IdsVirtualScrollModule:()=>x});var i=l(6733),c=l(8291),t=l(5373),n=l(8567);let h=(()=>{class a{constructor(){this.routes=d.filter(s=>""!==s.path)}ngAfterViewInit(){console.log("Ids Virtual Scroll init")}static#t=this.\u0275fac=function(e){return new(e||a)};static#i=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-ids-virtual-scroll"]],decls:1,vars:2,consts:[[3,"title","routes"]],template:function(e,m){1&e&&t._UZ(0,"app-demo-listing",0),2&e&&t.Q6J("title","Ids Virtual Scroll Examples")("routes",m.routes)},dependencies:[n.J]})}return a})();var y=l(3906);const r=["virtualScroll1"],o=["virtualScroll2"],d=[{path:"",component:h},{path:"example",component:(()=>{class a{constructor(s){this.dataService=s}ngOnInit(){console.log("ids-virtual-scroll example OnInit")}ngAfterViewInit(){this.dataService.getJsonData("products").subscribe(s=>{this.virtualScroll1.nativeElement.data=s,this.virtualScroll1.nativeElement.itemTemplate=e=>`<div part="list-item">${e.productName}</div>`,this.virtualScroll1.nativeElement.scrollTarget=document.querySelector("ids-card")?.shadowRoot?.querySelector(".ids-card-content"),this.virtualScroll2.nativeElement.scrollTarget=document.querySelector(".ids-data-grid"),this.virtualScroll2.nativeElement.itemTemplate=e=>`<div part="row" role="row" class="ids-data-grid-row">\n          <span role="cell" part="cell" class="ids-data-grid-cell"><span class="text-ellipsis" part="text-ellipsis">${e.productId}</span></span>\n          <span role="cell" part="cell" class="ids-data-grid-cell"><span class="text-ellipsis" part="text-ellipsis">${e.productName}</span></span>\n        </div>`,this.virtualScroll2.nativeElement.data=s})}static#t=this.\u0275fac=function(e){return new(e||a)(t.Y36(y.D))};static#i=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-example"]],viewQuery:function(e,m){if(1&e&&(t.Gf(r,5,t.SBq),t.Gf(o,5,t.SBq)),2&e){let f;t.iGM(f=t.CRH())&&(m.virtualScroll1=f.first),t.iGM(f=t.CRH())&&(m.virtualScroll2=f.first)}},decls:35,vars:0,consts:[["language","en","locale","en-US","padding","8","hidden",""],["mode","light"],["auto-fit","true","padding","md"],["font-size","12","type","h1"],["cols","2","gap","xl"],["auto-height",""],["slot","card-header"],["font-size","20","type","h2","overflow","ellipsis","tooltip","true"],["slot","card-content"],["height","100vh","id","virtual-scroll-1","item-height","20","buffer-size","3","item-count","1000"],["virtualScroll1",""],[1,"ids-list-view-container"],["part","contents",1,"ids-list-view"],["auto-height","","overflow","hidden"],["role","table","aria-label","Products",1,"ids-data-grid"],["role","rowgroup",1,"ids-data-grid-header"],["role","row",1,"ids-data-grid-row"],["role","columnheader",1,"ids-data-grid-header-cell"],[1,"ids-data-grid-header-text"],["height","100vh","id","virtual-scroll-2","item-height","50","item-count","1000"],["virtualScroll2",""],[1,"ids-data-grid-container"],["part","contents","role","rowgroup",1,"ids-data-grid-body"]],template:function(e,m){1&e&&(t.TgZ(0,"ids-container",0),t._UZ(1,"ids-theme-switcher",1),t.TgZ(2,"ids-layout-grid",2)(3,"ids-text",3),t._uU(4,"Virtual Scroller"),t.qZA()(),t.TgZ(5,"ids-layout-grid",4)(6,"ids-layout-grid-cell")(7,"ids-card",5)(8,"div",6)(9,"ids-text",7),t._uU(10,"List With Virtual Scroll"),t.qZA()(),t.TgZ(11,"div",8)(12,"ids-virtual-scroll",9,10)(14,"div",11),t._UZ(15,"div",12),t.qZA()()()()(),t.TgZ(16,"ids-layout-grid-cell")(17,"ids-card",13)(18,"div",6)(19,"ids-text",7),t._uU(20,"Table With Virtual Scroll"),t.qZA()(),t.TgZ(21,"div",8)(22,"div",14)(23,"div",15)(24,"div",16)(25,"span",17)(26,"span",18),t._uU(27,"Id"),t.qZA()(),t.TgZ(28,"span",17)(29,"span",18),t._uU(30,"Product"),t.qZA()()()(),t.TgZ(31,"ids-virtual-scroll",19,20)(33,"div",21),t._UZ(34,"div",22),t.qZA()()()()()()()())},styles:["html{font-family:source sans pro,helvetica,arial,sans-serif}.ids-list-view div[part=list-item]{padding:0 18px;list-style:none}.ids-data-grid .ids-data-grid-container .ids-data-grid-row{grid-template-columns:125px 1fr!important;padding:0;display:grid;height:50px;width:100%;align-items:center}.ids-data-grid .ids-data-grid-container .text-ellipsis{display:block;padding:0 16px;overflow:hidden;text-overflow:ellipsis}.ids-data-grid .ids-data-grid-header .ids-data-grid-row{grid-template-columns:125px 1fr!important}.ids-data-grid{background-color:var(--ids-color-palette-white);border-width:1px;border-style:solid;border-radius:2px;width:100%;border-collapse:collapse;border-color:var(--ids-color-palette-slate-30);contain:content;overflow:auto;scroll-behavior:smooth;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:source sans pro,helvetica,arial,sans-serif;font-size:16px}.ids-data-grid .ids-data-grid-header{z-index:2;position:sticky;top:0}.ids-data-grid .ids-data-grid-row{width:100%;display:grid;grid-template-columns:var(--ids-data-grid-column-widths)}.ids-data-grid .ids-data-grid-header-cell:first-child{border-left-style:hidden}.ids-data-grid .ids-data-grid-header-cell{border-width:0;border-left:1px solid;border-style:solid;display:flex;background-color:var(--ids-color-palette-slate-80);border-color:var(--ids-color-palette-slate-30);min-height:35px}.ids-data-grid .ids-data-grid-header-text{display:block;padding-inline-start:16px;padding-inline-end:16px;padding-top:8px;padding-bottom:8px;font-weight:700;font-size:14px;color:var(--ids-color-palette-white);overflow:hidden;text-align:left;text-overflow:ellipsis;-webkit-user-select:none;user-select:none;white-space:nowrap}.ids-data-grid .ids-data-grid-body .ids-data-grid-row{height:50px}.ids-data-grid .ids-data-grid-cell:first-child{border-left-style:hidden}.ids-data-grid .ids-data-grid-container .ids-data-grid-cell{display:inline-flex;align-items:center;overflow:hidden;white-space:nowrap;height:100%;width:100%}.ids-data-grid .ids-data-grid-cell{border-width:0;border-left:1px solid;border-top:1px solid;border-style:solid;display:inline-flex;color:var(--ids-color-palette-slate-100);align-items:center;border-color:var(--ids-color-palette-slate-30);overflow:hidden;white-space:nowrap}\n"],encapsulation:2})}return a})()}];let g=(()=>{class a{static#t=this.\u0275fac=function(e){return new(e||a)};static#i=this.\u0275mod=t.oAB({type:a});static#e=this.\u0275inj=t.cJS({imports:[c.Bz.forChild(d),c.Bz]})}return a})();var w=l(9874);let x=(()=>{class a{static#t=this.\u0275fac=function(e){return new(e||a)};static#i=this.\u0275mod=t.oAB({type:a});static#e=this.\u0275inj=t.cJS({imports:[i.ez,g,w.H]})}return a})()}}]);