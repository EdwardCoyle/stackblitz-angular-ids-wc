"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8813],{8567:(f,m,a)=>{a.d(m,{J:()=>r});var e=a(5373),l=a(8291);const t=["table"];let r=(()=>{class p{constructor(d){this.router=d,this.columns=[]}ngAfterViewInit(){this.columns.push({id:"name",name:"Name",field:"path",sortable:!0,formatter:this.table?.nativeElement?.formatters?.hyperlink,href:`${this.router.url}/{{value}}`}),this.columns.push({id:"type",name:"Type",field:"data?.type",sortable:!0,formatter:this.table?.nativeElement?.formatters?.text}),this.columns.push({id:"description",name:"Description",field:"data?.description",sortable:!0,formatter:this.table?.nativeElement?.formatters?.text}),this.table.nativeElement.columns=this.columns,this.table.nativeElement.data=this.routes}handleClick(d){if(d.preventDefault(),d.target.shadowRoot){const u=d.composedPath().filter(h=>"IDS-HYPERLINK"===h.tagName)[0]?.href;u&&this.router.navigateByUrl(`/${u}`)}}static#t=this.\u0275fac=function(s){return new(s||p)(e.Y36(l.F0))};static#e=this.\u0275cmp=e.Xpm({type:p,selectors:[["app-demo-listing"]],viewQuery:function(s,n){if(1&s&&e.Gf(t,5,e.SBq),2&s){let u;e.iGM(u=e.CRH())&&(n.table=u.first)}},hostBindings:function(s,n){1&s&&e.NdJ("click",function(h){return n.handleClick(h)},!1,e.evT)},inputs:{routes:"routes",title:"title"},decls:8,vars:1,consts:[["language","en","locale","en-US","padding","8","hidden",""],["mode","light"],["cols","2","gap","md"],["font-size","20"],["list-style","true"],["table",""]],template:function(s,n){1&s&&(e.TgZ(0,"ids-container",0),e._UZ(1,"ids-theme-switcher",1),e.TgZ(2,"ids-layout-grid",2)(3,"ids-layout-grid-cell")(4,"ids-text",3),e._uU(5),e.qZA()()(),e._UZ(6,"ids-data-grid",4,5),e.qZA()),2&s&&(e.xp6(5),e.Oqu(n.title))}})}return p})()},9874:(f,m,a)=>{a.d(m,{H:()=>t});var e=a(6733),l=a(5373);let t=(()=>{class r{static#t=this.\u0275fac=function(d){return new(d||r)};static#e=this.\u0275mod=l.oAB({type:r});static#i=this.\u0275inj=l.cJS({imports:[e.ez]})}return r})()},8813:(f,m,a)=>{a.r(m),a.d(m,{IdsRadioModule:()=>h});var e=a(6733),l=a(8291),t=a(5373),r=a(8567);const p=["table"],s=[{path:"",component:(()=>{class i{constructor(c){this.router=c,this.routes=s.filter(o=>""!==o.path),this.columns=[]}ngAfterViewInit(){console.log("Ids Radio init")}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(l.F0))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-ids-radio"]],viewQuery:function(o,g){if(1&o&&t.Gf(p,5,t.SBq),2&o){let b;t.iGM(b=t.CRH())&&(g.table=b.first)}},decls:1,vars:2,consts:[[3,"title","routes"]],template:function(o,g){1&o&&t._UZ(0,"app-demo-listing",0),2&o&&t.Q6J("title","Ids Radio Examples")("routes",g.routes)},dependencies:[r.J]})}return i})()},{path:"example",component:(()=>{class i{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-example"]],decls:51,vars:0,consts:[["language","en","locale","en-US","padding","8","hidden",""],["mode","light"],["cols","3","gap","md"],["font-size","12","type","h1"],["label","Normal"],["value","opt1","label","Option one"],["value","opt2","label","Option two","checked","true"],["label","Disabled Group","disabled","true"],["value","opt1","label","Option one","checked","true"],["value","opt2","label","Option two"],["label","Disabled Item"],["value","opt3","label","Option three","disabled","true"],["label","Dirty tracking","dirty-tracker","true"],["value","opt4","label","Option four"],["label","Set Group Checked and Value","value","opt1"],["label","Colored Radios"],["color","emerald07","value","emerald07","label","Emerald 07"],["color","amethyst07","value","amethyst07","label","Amethyst 07"],["color","azure07","value","azure07","label","Azure 07"],["color","amber07","value","amber07","label","Amber 07","checked","true"],["color","ruby07","value","ruby07","label","Ruby 07"],["color","ruby07","value","ruby07d","label","Ruby 07 (disabled)","disabled","true"],["color","caution","value","caution","label","Caution"],["label","Radio with Validation","validate","required","id","ids-radio-validation"],["appearance","secondary","id","btn-radio-clear"],["appearance","secondary","id","btn-radio-validate"],["label","Horizontal Radio","horizontal","true"]],template:function(o,g){1&o&&(t.TgZ(0,"ids-container",0),t._UZ(1,"ids-theme-switcher",1),t.TgZ(2,"ids-layout-grid",2)(3,"ids-text",3),t._uU(4,"Ids Radio"),t.qZA()(),t.TgZ(5,"ids-layout-grid",2)(6,"ids-layout-grid-cell")(7,"ids-radio-group",4),t._UZ(8,"ids-radio",5)(9,"ids-radio",6),t.qZA(),t.TgZ(10,"ids-radio-group",7),t._UZ(11,"ids-radio",8)(12,"ids-radio",9),t.qZA(),t.TgZ(13,"ids-radio-group",10),t._UZ(14,"ids-radio",5)(15,"ids-radio",6)(16,"ids-radio",11),t.qZA()(),t.TgZ(17,"ids-layout-grid-cell")(18,"ids-radio-group",12),t._UZ(19,"ids-radio",5)(20,"ids-radio",6)(21,"ids-radio",11)(22,"ids-radio",13),t.qZA(),t.TgZ(23,"ids-radio-group",14),t._UZ(24,"ids-radio",5)(25,"ids-radio",9),t.qZA(),t.TgZ(26,"ids-radio-group",15),t._UZ(27,"ids-radio",16)(28,"ids-radio",17)(29,"ids-radio",18)(30,"ids-radio",19)(31,"ids-radio",20)(32,"ids-radio",21)(33,"ids-radio",22),t.qZA()(),t.TgZ(34,"ids-layout-grid-cell")(35,"ids-radio-group",23),t._UZ(36,"ids-radio",5)(37,"ids-radio",9)(38,"ids-radio",11),t.qZA(),t.TgZ(39,"ids-button",24)(40,"span"),t._uU(41,"Clear"),t.qZA()(),t.TgZ(42,"ids-button",25)(43,"span"),t._uU(44,"Validate"),t.qZA()(),t._UZ(45,"br")(46,"br"),t.TgZ(47,"ids-radio-group",26),t._UZ(48,"ids-radio",5)(49,"ids-radio",6)(50,"ids-radio",11),t.qZA()()()())}})}return i})()}];let n=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275mod=t.oAB({type:i});static#i=this.\u0275inj=t.cJS({imports:[l.Bz.forChild(s),l.Bz]})}return i})();var u=a(9874);let h=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275mod=t.oAB({type:i});static#i=this.\u0275inj=t.cJS({imports:[e.ez,n,u.H]})}return i})()}}]);