"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9056],{8567:(h,u,s)=>{s.d(u,{J:()=>r});var i=s(5373),d=s(8291);const t=["table"];let r=(()=>{class p{constructor(n){this.router=n,this.columns=[]}ngAfterViewInit(){this.columns.push({id:"name",name:"Name",field:"path",sortable:!0,formatter:this.table?.nativeElement?.formatters?.hyperlink,href:`${this.router.url}/{{value}}`}),this.columns.push({id:"type",name:"Type",field:"data?.type",sortable:!0,formatter:this.table?.nativeElement?.formatters?.text}),this.columns.push({id:"description",name:"Description",field:"data?.description",sortable:!0,formatter:this.table?.nativeElement?.formatters?.text}),this.table.nativeElement.columns=this.columns,this.table.nativeElement.data=this.routes}handleClick(n){if(n.preventDefault(),n.target.shadowRoot){const c=n.composedPath().filter(e=>"IDS-HYPERLINK"===e.tagName)[0]?.href;c&&this.router.navigateByUrl(`/${c}`)}}static#t=this.\u0275fac=function(o){return new(o||p)(i.Y36(d.F0))};static#e=this.\u0275cmp=i.Xpm({type:p,selectors:[["app-demo-listing"]],viewQuery:function(o,l){if(1&o&&i.Gf(t,5,i.SBq),2&o){let c;i.iGM(c=i.CRH())&&(l.table=c.first)}},hostBindings:function(o,l){1&o&&i.NdJ("click",function(e){return l.handleClick(e)},!1,i.evT)},inputs:{routes:"routes",title:"title"},decls:8,vars:1,consts:[["language","en","locale","en-US","padding","8","hidden",""],["mode","light"],["cols","2","gap","md"],["font-size","20"],["list-style","true"],["table",""]],template:function(o,l){1&o&&(i.TgZ(0,"ids-container",0),i._UZ(1,"ids-theme-switcher",1),i.TgZ(2,"ids-layout-grid",2)(3,"ids-layout-grid-cell")(4,"ids-text",3),i._uU(5),i.qZA()()(),i._UZ(6,"ids-data-grid",4,5),i.qZA()),2&o&&(i.xp6(5),i.Oqu(l.title))}})}return p})()},9874:(h,u,s)=>{s.d(u,{H:()=>t});var i=s(6733),d=s(5373);let t=(()=>{class r{static#t=this.\u0275fac=function(n){return new(n||r)};static#e=this.\u0275mod=d.oAB({type:r});static#i=this.\u0275inj=d.cJS({imports:[i.ez]})}return r})()},9056:(h,u,s)=>{s.r(u),s.d(u,{IdsEditorModule:()=>c});var i=s(6733),d=s(8291),t=s(5373),r=s(8567);const n=[{path:"",component:(()=>{class e{constructor(){this.routes=n.filter(m=>""!==m.path)}ngAfterViewInit(){console.log("Ids Editor init")}static#t=this.\u0275fac=function(a){return new(a||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-ids-editor"]],decls:1,vars:2,consts:[[3,"title","routes"]],template:function(a,g){1&a&&t._UZ(0,"app-demo-listing",0),2&a&&t.Q6J("title","Ids Editor Examples")("routes",g.routes)},dependencies:[r.J]})}return e})()},{path:"example",component:(()=>{class e{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(a){return new(a||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-example"]],decls:15,vars:0,consts:[["language","en","locale","en-US","padding","8","hidden",""],["mode","light"],["auto-fit","true","padding","md"],["font-size","12","type","h1"],["id","editor-demo"],["href","http://en.wikipedia.org/wiki/e-commerce",1,"hyperlink"]],template:function(a,g){1&a&&(t.TgZ(0,"ids-container",0),t._UZ(1,"ids-theme-switcher",1),t.TgZ(2,"ids-layout-grid",2)(3,"ids-text",3),t._uU(4,"Editor"),t.qZA()(),t.TgZ(5,"ids-layout-grid",2)(6,"ids-layout-grid-cell")(7,"ids-editor",4)(8,"p"),t._uU(9,"Embrace "),t.TgZ(10,"a",5),t._uU(11,"e-commerce action-items"),t.qZA(),t._uU(12,", reintermediate, ecologies paradigms wireless share life-hacks create innovative harness. Evolve solutions rich-clientAPIs synergies harness relationships virtual vertical facilitate end-to-end, wireless, evolve synergistic synergies."),t.qZA(),t.TgZ(13,"p"),t._uU(14,'Cross-platform, evolve, ROI scale cultivate eyeballs addelivery, e-services content cross-platform leverage extensible viral incentivize integrateAJAX-enabled sticky evolve magnetic cultivate leverage; cutting-edge. Innovate, end-to-end podcasting, whiteboard streamline e-business social; compelling, "cross-media exploit infomediaries innovative integrate integrateAJAX-enabled." Killer interactive reinvent, cultivate widgets leverage morph.'),t.qZA()()()()())}})}return e})()}];let o=(()=>{class e{static#t=this.\u0275fac=function(a){return new(a||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({imports:[d.Bz.forChild(n),d.Bz]})}return e})();var l=s(9874);let c=(()=>{class e{static#t=this.\u0275fac=function(a){return new(a||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({imports:[i.ez,o,l.H]})}return e})()}}]);