"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2238],{8567:(p,u,s)=>{s.d(u,{J:()=>l});var e=s(5373),m=s(8291);const i=["table"];let l=(()=>{class h{constructor(n){this.router=n,this.columns=[]}ngAfterViewInit(){this.columns.push({id:"name",name:"Name",field:"path",sortable:!0,formatter:this.table?.nativeElement?.formatters?.hyperlink,href:`${this.router.url}/{{value}}`}),this.columns.push({id:"type",name:"Type",field:"data?.type",sortable:!0,formatter:this.table?.nativeElement?.formatters?.text}),this.columns.push({id:"description",name:"Description",field:"data?.description",sortable:!0,formatter:this.table?.nativeElement?.formatters?.text}),this.table.nativeElement.columns=this.columns,this.table.nativeElement.data=this.routes}handleClick(n){if(n.preventDefault(),n.target.shadowRoot){const c=n.composedPath().filter(t=>"IDS-HYPERLINK"===t.tagName)[0]?.href;c&&this.router.navigateByUrl(`/${c}`)}}static#t=this.\u0275fac=function(o){return new(o||h)(e.Y36(m.F0))};static#e=this.\u0275cmp=e.Xpm({type:h,selectors:[["app-demo-listing"]],viewQuery:function(o,r){if(1&o&&e.Gf(i,5,e.SBq),2&o){let c;e.iGM(c=e.CRH())&&(r.table=c.first)}},hostBindings:function(o,r){1&o&&e.NdJ("click",function(t){return r.handleClick(t)},!1,e.evT)},inputs:{routes:"routes",title:"title"},decls:8,vars:1,consts:[["language","en","locale","en-US","padding","8","hidden",""],["mode","light"],["cols","2","gap","md"],["font-size","20"],["list-style","true"],["table",""]],template:function(o,r){1&o&&(e.TgZ(0,"ids-container",0),e._UZ(1,"ids-theme-switcher",1),e.TgZ(2,"ids-layout-grid",2)(3,"ids-layout-grid-cell")(4,"ids-text",3),e._uU(5),e.qZA()()(),e._UZ(6,"ids-data-grid",4,5),e.qZA()),2&o&&(e.xp6(5),e.Oqu(r.title))}})}return h})()},9874:(p,u,s)=>{s.d(u,{H:()=>i});var e=s(6733),m=s(5373);let i=(()=>{class l{static#t=this.\u0275fac=function(n){return new(n||l)};static#e=this.\u0275mod=m.oAB({type:l});static#i=this.\u0275inj=m.cJS({imports:[e.ez]})}return l})()},2238:(p,u,s)=>{s.r(u),s.d(u,{IdsThemeSwitcherModule:()=>c});var e=s(6733),m=s(8291),i=s(5373),l=s(8567);const n=[{path:"",component:(()=>{class t{constructor(){this.routes=n.filter(d=>""!==d.path)}ngAfterViewInit(){console.log("Ids Theme init")}static#t=this.\u0275fac=function(a){return new(a||t)};static#e=this.\u0275cmp=i.Xpm({type:t,selectors:[["app-ids-theme-switcher"]],decls:1,vars:2,consts:[[3,"title","routes"]],template:function(a,f){1&a&&i._UZ(0,"app-demo-listing",0),2&a&&i.Q6J("title","Ids Theme Switcher Examples")("routes",f.routes)},dependencies:[l.J]})}return t})()},{path:"example",component:(()=>{class t{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(a){return new(a||t)};static#e=this.\u0275cmp=i.Xpm({type:t,selectors:[["app-example"]],decls:8,vars:0,consts:[["language","en","locale","en-US","padding","8","hidden",""],["mode","light"],["auto-fit","true","padding","md"],["font-size","12","type","h1"]],template:function(a,f){1&a&&(i.TgZ(0,"ids-container",0),i._UZ(1,"ids-theme-switcher",1),i.TgZ(2,"ids-layout-grid",2)(3,"ids-text",3),i._uU(4,"Themes"),i.qZA()(),i.TgZ(5,"ids-layout-grid",2)(6,"ids-tag"),i._uU(7,"Normal Tag"),i.qZA()()())}})}return t})()}];let o=(()=>{class t{static#t=this.\u0275fac=function(a){return new(a||t)};static#e=this.\u0275mod=i.oAB({type:t});static#i=this.\u0275inj=i.cJS({imports:[m.Bz.forChild(n),m.Bz]})}return t})();var r=s(9874);let c=(()=>{class t{static#t=this.\u0275fac=function(a){return new(a||t)};static#e=this.\u0275mod=i.oAB({type:t});static#i=this.\u0275inj=i.cJS({imports:[e.ez,o,r.H]})}return t})()}}]);