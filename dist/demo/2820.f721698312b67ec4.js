"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2820],{8567:(p,h,a)=>{a.d(h,{J:()=>n});var i=a(5373),c=a(8291);const e=["table"];let n=(()=>{class m{constructor(l){this.router=l,this.columns=[]}ngAfterViewInit(){this.columns.push({id:"name",name:"Name",field:"path",sortable:!0,formatter:this.table?.nativeElement?.formatters?.hyperlink,href:`${this.router.url}/{{value}}`}),this.columns.push({id:"type",name:"Type",field:"data?.type",sortable:!0,formatter:this.table?.nativeElement?.formatters?.text}),this.columns.push({id:"description",name:"Description",field:"data?.description",sortable:!0,formatter:this.table?.nativeElement?.formatters?.text}),this.table.nativeElement.columns=this.columns,this.table.nativeElement.data=this.routes}handleClick(l){if(l.preventDefault(),l.target.shadowRoot){const d=l.composedPath().filter(t=>"IDS-HYPERLINK"===t.tagName)[0]?.href;d&&this.router.navigateByUrl(`/${d}`)}}static#e=this.\u0275fac=function(o){return new(o||m)(i.Y36(c.F0))};static#t=this.\u0275cmp=i.Xpm({type:m,selectors:[["app-demo-listing"]],viewQuery:function(o,r){if(1&o&&i.Gf(e,5,i.SBq),2&o){let d;i.iGM(d=i.CRH())&&(r.table=d.first)}},hostBindings:function(o,r){1&o&&i.NdJ("click",function(t){return r.handleClick(t)},!1,i.evT)},inputs:{routes:"routes",title:"title"},decls:8,vars:1,consts:[["language","en","locale","en-US","padding","8","hidden",""],["mode","light"],["cols","2","gap","md"],["font-size","20"],["list-style","true"],["table",""]],template:function(o,r){1&o&&(i.TgZ(0,"ids-container",0),i._UZ(1,"ids-theme-switcher",1),i.TgZ(2,"ids-layout-grid",2)(3,"ids-layout-grid-cell")(4,"ids-text",3),i._uU(5),i.qZA()()(),i._UZ(6,"ids-data-grid",4,5),i.qZA()),2&o&&(i.xp6(5),i.Oqu(r.title))}})}return m})()},9874:(p,h,a)=>{a.d(h,{H:()=>e});var i=a(6733),c=a(5373);let e=(()=>{class n{static#e=this.\u0275fac=function(l){return new(l||n)};static#t=this.\u0275mod=c.oAB({type:n});static#i=this.\u0275inj=c.cJS({imports:[i.ez]})}return n})()},2820:(p,h,a)=>{a.r(h),a.d(h,{IdsSearchFieldModule:()=>d});var i=a(6733),c=a(8291),e=a(5373),n=a(8567);const l=[{path:"",component:(()=>{class t{constructor(){this.routes=l.filter(u=>""!==u.path)}ngAfterViewInit(){console.log("Ids Search Field init")}static#e=this.\u0275fac=function(s){return new(s||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-ids-search-field"]],decls:1,vars:2,consts:[[3,"title","routes"]],template:function(s,f){1&s&&e._UZ(0,"app-demo-listing",0),2&s&&e.Q6J("title","Ids Search Field Examples")("routes",f.routes)},dependencies:[n.J]})}return t})()},{path:"example",component:(()=>{class t{constructor(){}ngOnInit(){}static#e=this.\u0275fac=function(s){return new(s||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-example"]],decls:37,vars:2,consts:[["language","en","locale","en-US","padding","8","hidden",""],["mode","light"],["font-size","12","type","h1"],["cols","3","gap","xl"],["clearable","","dirty-tracker","","label","Products","value","Anti-virus Software","validate","required"],["clearable-forced","","label","Read-only Search Bar","value","Cellphone"],["clearable","","label","Search Field with Hidden Label","label-state","hidden","placeholder","Custom placeholder text"],["label","Search Wrapped in a Form tag","value","Cellphone","clearable",""],["label","Disabled Search Bar","value","Anti-virus Software"],["clearable","","color-variant","alternate","label","Alternate Color Search Bar","value","Cellphone"],["auto-fit","true","padding","md"],["id","search-field-autocomplete","label","Autocomplete Search Bar","placeholder","Search states...","autocomplete","","search-field","label"],["cols","1"],["icon","menu","role","button"],[1,"audible"],["type","title"],["font-size","20"],["font-size","14"],["type","search","align","end"],["clearable","","color-variant","alternate","label-state","collapsed","id","header-search","no-margins","","placeholder","Type to Search"]],template:function(s,f){1&s&&(e.TgZ(0,"ids-container",0),e._UZ(1,"ids-theme-switcher",1),e.TgZ(2,"ids-layout-grid")(3,"ids-text",2),e._uU(4,"Search Field"),e.qZA()(),e.TgZ(5,"ids-layout-grid",3)(6,"ids-layout-grid-cell"),e._UZ(7,"ids-search-field",4)(8,"ids-search-field",5),e.qZA(),e.TgZ(9,"ids-layout-grid-cell"),e._UZ(10,"ids-search-field",6),e.TgZ(11,"form"),e._UZ(12,"ids-search-field",7),e.qZA()(),e.TgZ(13,"ids-layout-grid-cell"),e._UZ(14,"ids-search-field",8)(15,"ids-search-field",9),e.qZA()(),e.TgZ(16,"ids-layout-grid",10)(17,"ids-layout-grid-cell"),e._UZ(18,"ids-search-field",11),e.qZA()(),e.TgZ(19,"ids-layout-grid",12)(20,"ids-layout-grid-cell")(21,"ids-text",2),e._uU(22,"Inside a Header:"),e.qZA(),e.TgZ(23,"ids-header")(24,"ids-toolbar")(25,"ids-toolbar-section")(26,"ids-button",13)(27,"span",14),e._uU(28,"Application Menu Trigger"),e.qZA()()(),e.TgZ(29,"ids-toolbar-section",15)(30,"ids-text",16),e._uU(31,"My Header"),e.qZA(),e.TgZ(32,"ids-text",17),e._uU(33,"With some extra information below"),e.qZA()(),e.TgZ(34,"ids-toolbar-section",18),e._UZ(35,"ids-search-field",19),e.qZA(),e._UZ(36,"ids-theme-switcher",1),e.qZA()()()()()),2&s&&(e.xp6(8),e.uIk("readonly",!0),e.xp6(6),e.uIk("disabled",!0))}})}return t})()}];let o=(()=>{class t{static#e=this.\u0275fac=function(s){return new(s||t)};static#t=this.\u0275mod=e.oAB({type:t});static#i=this.\u0275inj=e.cJS({imports:[c.Bz.forChild(l),c.Bz]})}return t})();var r=a(9874);let d=(()=>{class t{static#e=this.\u0275fac=function(s){return new(s||t)};static#t=this.\u0275mod=e.oAB({type:t});static#i=this.\u0275inj=e.cJS({imports:[i.ez,o,r.H]})}return t})()}}]);