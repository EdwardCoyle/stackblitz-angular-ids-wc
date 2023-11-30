"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3432],{8567:(h,g,o)=>{o.d(g,{J:()=>r});var i=o(5373),c=o(8291);const e=["table"];let r=(()=>{class p{constructor(d){this.router=d,this.columns=[]}ngAfterViewInit(){this.columns.push({id:"name",name:"Name",field:"path",sortable:!0,formatter:this.table?.nativeElement?.formatters?.hyperlink,href:`${this.router.url}/{{value}}`}),this.columns.push({id:"type",name:"Type",field:"data?.type",sortable:!0,formatter:this.table?.nativeElement?.formatters?.text}),this.columns.push({id:"description",name:"Description",field:"data?.description",sortable:!0,formatter:this.table?.nativeElement?.formatters?.text}),this.table.nativeElement.columns=this.columns,this.table.nativeElement.data=this.routes}handleClick(d){if(d.preventDefault(),d.target.shadowRoot){const u=d.composedPath().filter(m=>"IDS-HYPERLINK"===m.tagName)[0]?.href;u&&this.router.navigateByUrl(`/${u}`)}}static#e=this.\u0275fac=function(a){return new(a||p)(i.Y36(c.F0))};static#t=this.\u0275cmp=i.Xpm({type:p,selectors:[["app-demo-listing"]],viewQuery:function(a,n){if(1&a&&i.Gf(e,5,i.SBq),2&a){let u;i.iGM(u=i.CRH())&&(n.table=u.first)}},hostBindings:function(a,n){1&a&&i.NdJ("click",function(m){return n.handleClick(m)},!1,i.evT)},inputs:{routes:"routes",title:"title"},decls:8,vars:1,consts:[["language","en","locale","en-US","padding","8","hidden",""],["mode","light"],["cols","2","gap","md"],["font-size","20"],["list-style","true"],["table",""]],template:function(a,n){1&a&&(i.TgZ(0,"ids-container",0),i._UZ(1,"ids-theme-switcher",1),i.TgZ(2,"ids-layout-grid",2)(3,"ids-layout-grid-cell")(4,"ids-text",3),i._uU(5),i.qZA()()(),i._UZ(6,"ids-data-grid",4,5),i.qZA()),2&a&&(i.xp6(5),i.Oqu(n.title))}})}return p})()},9874:(h,g,o)=>{o.d(g,{H:()=>e});var i=o(6733),c=o(5373);let e=(()=>{class r{static#e=this.\u0275fac=function(d){return new(d||r)};static#t=this.\u0275mod=c.oAB({type:r});static#i=this.\u0275inj=c.cJS({imports:[i.ez]})}return r})()},3432:(h,g,o)=>{o.r(g),o.d(g,{IdsTreeModule:()=>T});var i=o(6733),c=o(8291),e=o(5373),r=o(8567);const n=[{path:"",component:(()=>{class t{constructor(){this.routes=n.filter(l=>""!==l.path)}ngAfterViewInit(){console.log("Ids Tree init")}static#e=this.\u0275fac=function(s){return new(s||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-ids-tree"]],decls:1,vars:2,consts:[[3,"title","routes"]],template:function(s,Z){1&s&&e._UZ(0,"app-demo-listing",0),2&s&&e.Q6J("title","Ids Tree Button Examples")("routes",Z.routes)},dependencies:[r.J]})}return t})()},{path:"example",component:(()=>{class t{constructor(){}ngOnInit(){console.log("example init")}static#e=this.\u0275fac=function(s){return new(s||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-example"]],decls:9,vars:0,consts:[["language","en","locale","en-US","padding","8","hidden",""],["mode","light"],["auto-fit","true","padding","md"],["font-size","12","type","h1"],["id","tree-demo","label","Tree Demo"]],template:function(s,Z){1&s&&(e.TgZ(0,"ids-container",0),e._UZ(1,"ids-theme-switcher",1),e.TgZ(2,"ids-layout-grid",2)(3,"ids-layout-grid-cell")(4,"ids-text",3),e._uU(5,"Ids Tree"),e.qZA()()(),e.TgZ(6,"ids-layout-grid",2)(7,"ids-layout-grid-cell"),e._UZ(8,"ids-tree",4),e.qZA()()())}})}return t})()},{path:"multi-select",component:(()=>{class t{constructor(){}ngOnInit(){console.log("sandbox init")}static#e=this.\u0275fac=function(s){return new(s||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-multi-select"]],decls:9,vars:0,consts:[["language","en","locale","en-US","padding","8","hidden",""],["mode","light"],["auto-fit","true","padding","md"],["font-size","12","type","h1"],["id","tree-demo","label","Tree Demo","selectable","multiple"]],template:function(s,Z){1&s&&(e.TgZ(0,"ids-container",0),e._UZ(1,"ids-theme-switcher",1),e.TgZ(2,"ids-layout-grid",2)(3,"ids-layout-grid-cell")(4,"ids-text",3),e._uU(5,"Ids Tree - Multi Select"),e.qZA()()(),e.TgZ(6,"ids-layout-grid",2)(7,"ids-layout-grid-cell"),e._UZ(8,"ids-tree",4),e.qZA()()())}})}return t})()},{path:"sandbox",component:(()=>{class t{constructor(){}ngOnInit(){console.log("sandbox init")}static#e=this.\u0275fac=function(s){return new(s||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-sandbox"]],decls:161,vars:0,consts:[["language","en","locale","en-US","padding","8","hidden",""],["mode","light"],["auto-fit","true","padding","md"],["font-size","12","type","h1"],["font-size","12","type","h2"],["id","tree-datasource","label","Tree use Datasource"],["id","tree-toggle-target","label","Tree with Toggle Target"],["id","tree-toggle-target-no-rotation","label","Tree with Toggle Target (No Icon Rotation)"],["id","tree-custom-icons","label","Tree with Custom Icons"],["id","tree-badges","label","Tree with Badges and selected node"],["id","radio-tree-expandcollapse","label","Choose to set the tree node/s as expand or collapse"],["value","expand","label","Expand (Public Folders)"],["value","collapse","label","Collapse (Public Folders)"],["value","expand-all","label","Expand All"],["value","collapse-all","label","Collapse All","checked","true"],["id","btn-tree-expandcollapse","appearance","secondary"],["id","tree-expand-or-collapse","label","Tree Expand or Collapse"],["id","btn-tree-toggle-selection","appearance","secondary"],["id","tree-selection","label","Tree Selection"],["id","btn-tree-disable-enable","appearance","secondary"],["id","tree-disable-enable","label","Tree Disable and Enable"],["font-size","12","type","h2",1,"inline"],["font-size","14",1,"inline"],["font-size","14","font-weight","bold",1,"inline"],["id","tree-events","label","Tree with Events Demo"],["id","tree-markup","label","Tree with Markup only"],["id","tm-home"],["id","tm-about-us"],["id","tm-public-folders","label","Public Folders"],["id","tm-leadership","label","Leadership"],["slot","badge","color","info","shape","round"],["id","tm-leadership-2"],["id","tm-history","disabled","true"],["id","tm-careers-last"],["id","tm-history-2"],["slot","badge","color","alert","shape","round"],["id","tm-careers"],["id","tm-icons","label","Icons","expanded","false"],["id","tm-audio","icon","tree-audio"],["id","tm-avi","icon","tree-avi"],["id","tm-bmp","icon","tree-bmp"],["id","tm-chart","icon","tree-chart"],["id","tm-code","icon","tree-code"],["id","tm-blog"],["id","tm-contact"],["id","tree-characters-and-symbols","label","Tree Characters and Symbols"],["id","tree-characters-and-symbols-markup","label","Tree Characters and Symbols by markup only"],["id","cs-n1"],["id","cs-n2"]],template:function(s,Z){1&s&&(e.TgZ(0,"ids-container",0),e._UZ(1,"ids-theme-switcher",1),e.TgZ(2,"ids-layout-grid",2)(3,"ids-layout-grid-cell")(4,"ids-text",3),e._uU(5,"Tree Sandbox"),e.qZA()()(),e.TgZ(6,"ids-layout-grid",2)(7,"ids-layout-grid-cell")(8,"ids-text",4),e._uU(9,"Datasource"),e.qZA(),e._UZ(10,"ids-tree",5),e.qZA()(),e.TgZ(11,"ids-layout-grid",2)(12,"ids-layout-grid-cell")(13,"ids-text",4),e._uU(14,"Toggle Target"),e.qZA(),e._UZ(15,"ids-tree",6),e.qZA()(),e.TgZ(16,"ids-layout-grid",2)(17,"ids-layout-grid-cell")(18,"ids-text",4),e._uU(19,"Toggle Target (No Icon Rotation)"),e.qZA(),e._UZ(20,"ids-tree",7),e.qZA()(),e.TgZ(21,"ids-layout-grid",2)(22,"ids-layout-grid-cell")(23,"ids-text",4),e._uU(24,"Custom Icons"),e.qZA(),e._UZ(25,"ids-tree",8),e.qZA()(),e.TgZ(26,"ids-layout-grid",2)(27,"ids-layout-grid-cell")(28,"ids-text",4),e._uU(29,"Badges / Pre Selected thru data"),e.qZA(),e._UZ(30,"ids-tree",9),e.qZA()(),e.TgZ(31,"ids-layout-grid",2)(32,"ids-layout-grid-cell")(33,"ids-text",4),e._uU(34,"Expand or Collapse"),e.qZA(),e.TgZ(35,"ids-radio-group",10),e._UZ(36,"ids-radio",11)(37,"ids-radio",12)(38,"ids-radio",13)(39,"ids-radio",14),e.qZA(),e.TgZ(40,"ids-button",15)(41,"span"),e._uU(42,"Expand/Collapse Action"),e.qZA()(),e._UZ(43,"br")(44,"br")(45,"ids-tree",16),e.qZA()(),e.TgZ(46,"ids-layout-grid",2)(47,"ids-layout-grid-cell")(48,"ids-text",4),e._uU(49,"Selection"),e.qZA(),e._UZ(50,"br"),e.TgZ(51,"ids-button",17)(52,"span"),e._uU(53,"Toggle Selection (Public Folders)"),e.qZA()(),e._UZ(54,"br")(55,"br")(56,"ids-tree",18),e.qZA()(),e.TgZ(57,"ids-layout-grid",2)(58,"ids-layout-grid-cell")(59,"ids-text",4),e._uU(60,"Disable / Enable"),e.qZA(),e._UZ(61,"br"),e.TgZ(62,"ids-button",19)(63,"span"),e._uU(64,"Enable Tree"),e.qZA()(),e._UZ(65,"br")(66,"br")(67,"ids-tree",20),e.qZA()(),e.TgZ(68,"ids-layout-grid",2)(69,"ids-layout-grid-cell")(70,"ids-text",21),e._uU(71,"Events"),e.qZA(),e.TgZ(72,"ids-text",22),e._uU(73,"(watch the logs for the events in console)"),e.qZA(),e._UZ(74,"br"),e.TgZ(75,"ids-text",23),e._uU(76,"\u2014 beforeselected:"),e.qZA(),e.TgZ(77,"ids-text",22),e._uU(78,"Fire before select and can prevent by passing boolean value."),e.qZA(),e._UZ(79,"br"),e.TgZ(80,"ids-text",23),e._uU(81,"\u2014 selected:"),e.qZA(),e.TgZ(82,"ids-text",22),e._uU(83,"Fire after selected."),e.qZA(),e._UZ(84,"br"),e.TgZ(85,"ids-text",23),e._uU(86,"\u2014 beforecollapsed:"),e.qZA(),e.TgZ(87,"ids-text",22),e._uU(88,"Fire before collapse and can prevent by passing boolean value."),e.qZA(),e._UZ(89,"br"),e.TgZ(90,"ids-text",23),e._uU(91,"\u2014 collapsed:"),e.qZA(),e.TgZ(92,"ids-text",22),e._uU(93,"Will fire after collapse the node group."),e.qZA(),e._UZ(94,"br"),e.TgZ(95,"ids-text",23),e._uU(96,"\u2014 beforeexpanded:"),e.qZA(),e.TgZ(97,"ids-text",22),e._uU(98,"Fire before expand and can prevent by passing boolean value."),e.qZA(),e._UZ(99,"br"),e.TgZ(100,"ids-text",23),e._uU(101,"\u2014 expanded:"),e.qZA(),e.TgZ(102,"ids-text",22),e._uU(103,"Will fire after expand the node group."),e.qZA(),e._UZ(104,"br")(105,"br")(106,"ids-tree",24),e.qZA()(),e.TgZ(107,"ids-layout-grid",2)(108,"ids-layout-grid-cell")(109,"ids-text",4),e._uU(110,"Markup Only"),e.qZA(),e.TgZ(111,"ids-tree",25)(112,"ids-tree-node",26),e._uU(113,"Home"),e.qZA(),e.TgZ(114,"ids-tree-node",27),e._uU(115,"About Us"),e.qZA(),e.TgZ(116,"ids-tree-node",28)(117,"ids-tree-node",29)(118,"ids-badge",30),e._uU(119,"5"),e.qZA(),e.TgZ(120,"ids-tree-node",31),e._uU(121,"Leadership 2nd"),e.qZA(),e.TgZ(122,"ids-tree-node",32),e._uU(123,"History"),e.qZA(),e.TgZ(124,"ids-tree-node",33),e._uU(125,"Careers last"),e.qZA()(),e.TgZ(126,"ids-tree-node",34)(127,"ids-badge",35),e._uU(128,"10"),e.qZA(),e._uU(129," History 2nd "),e.qZA(),e.TgZ(130,"ids-tree-node",36),e._uU(131,"Careers"),e.qZA()(),e.TgZ(132,"ids-tree-node",37)(133,"ids-tree-node",38),e._uU(134,"Audio"),e.qZA(),e.TgZ(135,"ids-tree-node",39),e._uU(136,"Avi"),e.qZA(),e.TgZ(137,"ids-tree-node",40),e._uU(138,"Bmp"),e.qZA(),e.TgZ(139,"ids-tree-node",41),e._uU(140,"Chart"),e.qZA(),e.TgZ(141,"ids-tree-node",42),e._uU(142,"Code"),e.qZA()(),e.TgZ(143,"ids-tree-node",43),e._uU(144,"Blog"),e.qZA(),e.TgZ(145,"ids-tree-node",44),e._uU(146,"Contact"),e.qZA()()()(),e.TgZ(147,"ids-layout-grid",2)(148,"ids-layout-grid-cell")(149,"ids-text",4),e._uU(150,"Characters and Symbols"),e.qZA(),e._UZ(151,"ids-tree",45),e.qZA()(),e.TgZ(152,"ids-layout-grid",2)(153,"ids-layout-grid-cell")(154,"ids-text",4),e._uU(155,"Characters and Symbols (markup only)"),e.qZA(),e.TgZ(156,"ids-tree",46)(157,"ids-tree-node",47),e._uU(158,'<online onload="alert()">'),e.qZA(),e.TgZ(159,"ids-tree-node",48),e._uU(160,' <> & " ! " # $ % & \' ( ) * + , - . / \xa1, \xa2, \xa3, \xa4, \xa5, \xa6, \xa7, \xa9 '),e.qZA()()()()())}})}return t})()}];let u=(()=>{class t{static#e=this.\u0275fac=function(s){return new(s||t)};static#t=this.\u0275mod=e.oAB({type:t});static#i=this.\u0275inj=e.cJS({imports:[c.Bz.forChild(n),c.Bz]})}return t})();var m=o(9874);let T=(()=>{class t{static#e=this.\u0275fac=function(s){return new(s||t)};static#t=this.\u0275mod=e.oAB({type:t});static#i=this.\u0275inj=e.cJS({imports:[i.ez,u,m.H]})}return t})()}}]);