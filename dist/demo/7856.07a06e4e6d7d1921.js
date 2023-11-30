"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7856],{7856:(k,r,a)=>{a.r(r),a.d(r,{IdsFormsModule:()=>b});var u=a(6733),s=a(2133),e=a(5373);let c=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#o=this.\u0275mod=e.oAB({type:n});static#t=this.\u0275inj=e.cJS({})}return n})();var p=a(8291),m=a(8567);let _=(()=>{class n{constructor(){this.routes=g.filter(d=>""!==d.path)}ngAfterViewInit(){}static#e=this.\u0275fac=function(i){return new(i||n)};static#o=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-forms"]],decls:1,vars:2,consts:[[3,"title","routes"]],template:function(i,o){1&i&&e._UZ(0,"app-demo-listing",0),2&i&&e.Q6J("title","Angular forms Examples")("routes",o.routes)},dependencies:[m.J]})}return n})(),h=(()=>{class n extends s.Fj{constructor(){super((0,e.f3M)(e.Qsj),(0,e.f3M)(e.SBq),(0,e.f3M)(s.ve,{optional:!0}))}static#e=this.\u0275fac=function(i){return new(i||n)};static#o=this.\u0275dir=e.lG2({type:n,selectors:[["ids-input","formControlName",""],["ids-input","formControl",""],["ids-input","ngModel",""],["ids-textarea","formControlName",""],["ids-textarea","formControl",""],["ids-textarea","ngModel",""],["ids-dropdown","formControlName",""],["ids-dropdown","formControl",""],["ids-dropdown","ngModel",""],["ids-multiselect","formControlName",""],["ids-multiselect","formControl",""],["ids-multiselect","ngModel",""],["ids-radio-group","formControlName",""],["ids-radio-group","formControl",""],["ids-radio-group","ngModel",""],["ids-lookup","formControlName",""],["ids-lookup","formControl",""],["ids-lookup","ngModel",""],["ids-search-field","formControlName",""],["ids-search-field","formControl",""],["ids-search-field","ngModel",""],["ids-spinbox","formControlName",""],["ids-spinbox","formControl",""],["ids-spinbox","ngModel",""],["ids-color-picker","formControlName",""],["ids-color-picker","formControl",""],["ids-color-picker","ngModel",""],["ids-date-picker","formControlName",""],["ids-date-picker","formControl",""],["ids-date-picker","ngModel",""],["ids-time-picker","formControlName",""],["ids-time-picker","formControl",""],["ids-time-picker","ngModel",""],["ids-upload","formControlName",""],["ids-upload","formControl",""],["ids-upload","ngModel",""],["ids-upload-advanced","formControlName",""],["ids-upload-advanced","formControl",""],["ids-upload-advanced","ngModel",""],[""]],standalone:!0,features:[e._Bn([{provide:s.JU,useExisting:(0,e.Gpc)(()=>n),multi:!0}]),e.qOj]})}return n})(),C=(()=>{class n extends s.Wl{constructor(){super((0,e.f3M)(e.Qsj),(0,e.f3M)(e.SBq))}static#e=this.\u0275fac=function(i){return new(i||n)};static#o=this.\u0275dir=e.lG2({type:n,selectors:[["ids-checkbox","formControlName",""],["ids-checkbox","formControl",""],["ids-checkbox","ngModel",""],["ids-checkbox-group","formControlName",""],["ids-checkbox-group","formControl",""],["ids-checkbox-group","ngModel",""],["ids-switch","formControlName",""],["ids-switch","formControl",""],["ids-switch","ngModel",""],[""]],standalone:!0,features:[e._Bn([{provide:s.JU,useExisting:(0,e.Gpc)(()=>n),multi:!0}]),e.qOj]})}return n})();const g=[{path:"",component:_},{path:"example",component:(()=>{class n{constructor(){this.testCheckbox={one:!1,two:!0,three:!1},this.testDateObject=new Date,this.testDateString="12/31/2020",this.testDropdown="opt5",this.testMultiselect="opt3",this.testInput="John Doe",this.testLookup="Software Engineers",this.testTextarea="Hello, World!",this.testTimePicker="11:00 PM",this.testRadio="radio2",this.testSearchField="key words to search",this.testSpinbox=9,this.testSwitch=!0,this.testUpload="path/to/file.txt",this.testUploadAdvanced="testUploadAdvanced value here"}onUpdate(d){console.log(`onUpdate(${d})`)}static#e=this.\u0275fac=function(i){return new(i||n)};static#o=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-example"]],decls:62,vars:35,consts:[["language","en","locale","en-US","padding","8","hidden",""],["mode","light","version","new"],["cols","2","padding","md"],["font-size","12","type","h1"],[3,"label"],["value","checkbox1","label","checkbox one",3,"ngModel","ngModelChange"],["value","checkbox2","label","checkbox two",3,"ngModel","ngModelChange"],["value","checkbox3","label","checkbox three","checked","true",3,"ngModel","ngModelChange"],["tabbable","false","mask","",3,"label","ngModel","ngModelChange"],["validate","required",3,"label","ngModel","ngModelChange"],["value","blank","id","blank","aria-label","Blank"],["value","opt1","id","opt1-d4"],["value","opt2","id","opt2-d4"],["value","opt3","id","opt3-d4"],["value","opt4","id","opt4-d4"],["value","opt5","id","opt5-d4"],["value","opt6","id","opt6-d4"],["value","blank","id","opt0-ms","aria-label","Blank"],["label","Option Blank"],["value","opt1","id","opt1-ms"],["label","Option One"],["value","opt2","id","opt2-ms"],["label","Option Two"],["value","opt3","id","opt3-ms"],["label","Option Three"],["value","opt4","id","opt4-ms"],["label","Option Four"],["value","opt5","id","opt5-ms"],["label","Option Five"],["value","opt6","id","opt6-ms"],["label","Option Six"],["type","text",3,"label","ngModel","ngModelChange"],["clearable","",3,"label","ngModel","ngModelChange"],[3,"label","ngModel","ngModelChange"],["autoselect","","mask","true",3,"label","ngModel","ngModelChange"],["value","radio1","label","radio one"],["value","radio2","label","radio two","checked","true"],["value","radio3","label","radio three","checked","true"],["value","Cellphone","clearable","",3,"label","ngModel","ngModelChange"],["value","0",3,"label","ngModel","ngModelChange"]],template:function(i,o){1&i&&(e.TgZ(0,"ids-container",0),e._UZ(1,"ids-theme-switcher",1),e.TgZ(2,"ids-layout-grid",2)(3,"ids-layout-grid-cell")(4,"ids-text",3),e._uU(5,"Form Inputs (ngModel)"),e.qZA(),e._UZ(6,"br"),e.TgZ(7,"ids-checkbox-group",4)(8,"ids-checkbox",5),e.NdJ("ngModelChange",function(t){return o.onUpdate(t)})("ngModelChange",function(t){return o.testCheckbox.one=t}),e.qZA(),e.TgZ(9,"ids-checkbox",6),e.NdJ("ngModelChange",function(t){return o.onUpdate(t)})("ngModelChange",function(t){return o.testCheckbox.two=t}),e.qZA(),e.TgZ(10,"ids-checkbox",7),e.NdJ("ngModelChange",function(t){return o.onUpdate(t)})("ngModelChange",function(t){return o.testCheckbox.three=t}),e.qZA()(),e.TgZ(11,"ids-date-picker",8),e.NdJ("ngModelChange",function(t){return o.onUpdate(t)})("ngModelChange",function(t){return o.testDateObject=t}),e.qZA(),e.TgZ(12,"ids-date-picker",8),e.NdJ("ngModelChange",function(t){return o.onUpdate(t)})("ngModelChange",function(t){return o.testDateString=t}),e.qZA(),e.TgZ(13,"ids-dropdown",9),e.NdJ("ngModelChange",function(t){return o.onUpdate(t)})("ngModelChange",function(t){return o.testDropdown=t}),e.TgZ(14,"ids-list-box"),e._UZ(15,"ids-list-box-option",10),e.TgZ(16,"ids-list-box-option",11),e._uU(17,"Option One"),e.qZA(),e.TgZ(18,"ids-list-box-option",12),e._uU(19,"Option Two"),e.qZA(),e.TgZ(20,"ids-list-box-option",13),e._uU(21,"Option Three"),e.qZA(),e.TgZ(22,"ids-list-box-option",14),e._uU(23,"Option Four"),e.qZA(),e.TgZ(24,"ids-list-box-option",15),e._uU(25,"Option Five"),e.qZA(),e.TgZ(26,"ids-list-box-option",16),e._uU(27,"Option Six"),e.qZA()()(),e.TgZ(28,"ids-multiselect",9),e.NdJ("ngModelChange",function(t){return o.onUpdate(t)})("ngModelChange",function(t){return o.testMultiselect=t}),e.TgZ(29,"ids-list-box")(30,"ids-list-box-option",17),e._UZ(31,"ids-checkbox",18),e.qZA(),e.TgZ(32,"ids-list-box-option",19),e._UZ(33,"ids-checkbox",20),e.qZA(),e.TgZ(34,"ids-list-box-option",21),e._UZ(35,"ids-checkbox",22),e.qZA(),e.TgZ(36,"ids-list-box-option",23),e._UZ(37,"ids-checkbox",24),e.qZA(),e.TgZ(38,"ids-list-box-option",25),e._UZ(39,"ids-checkbox",26),e.qZA(),e.TgZ(40,"ids-list-box-option",27),e._UZ(41,"ids-checkbox",28),e.qZA(),e.TgZ(42,"ids-list-box-option",29),e._UZ(43,"ids-checkbox",30),e.qZA()()(),e.TgZ(44,"ids-input",31),e.NdJ("ngModelChange",function(t){return o.onUpdate(t)})("ngModelChange",function(t){return o.testInput=t}),e.qZA(),e.TgZ(45,"ids-lookup",32),e.NdJ("ngModelChange",function(t){return o.onUpdate(t)})("ngModelChange",function(t){return o.testLookup=t}),e.qZA(),e.TgZ(46,"ids-textarea",33),e.NdJ("ngModelChange",function(t){return o.onUpdate(t)})("ngModelChange",function(t){return o.testTextarea=t}),e.qZA()(),e.TgZ(47,"ids-layout-grid-cell"),e._UZ(48,"br")(49,"br"),e.TgZ(50,"ids-time-picker",34),e.NdJ("ngModelChange",function(t){return o.onUpdate(t)})("ngModelChange",function(t){return o.testTimePicker=t}),e.qZA(),e.TgZ(51,"ids-radio-group",33),e.NdJ("ngModelChange",function(t){return o.onUpdate(t)})("ngModelChange",function(t){return o.testRadio=t}),e._UZ(52,"ids-radio",35)(53,"ids-radio",36)(54,"ids-radio",37),e.qZA(),e.TgZ(55,"ids-search-field",38),e.NdJ("ngModelChange",function(t){return o.onUpdate(t)})("ngModelChange",function(t){return o.testSearchField=t}),e.qZA(),e.TgZ(56,"ids-spinbox",39),e.NdJ("ngModelChange",function(t){return o.onUpdate(t)})("ngModelChange",function(t){return o.testSpinbox=t}),e.qZA(),e.TgZ(57,"ids-switch",33),e.NdJ("ngModelChange",function(t){return o.onUpdate(t)})("ngModelChange",function(t){return o.testSwitch=t}),e.qZA(),e.TgZ(58,"ids-upload",33),e.NdJ("ngModelChange",function(t){return o.onUpdate(t)})("ngModelChange",function(t){return o.testUpload=t}),e.qZA(),e.TgZ(59,"ids-upload-advanced",33),e.NdJ("ngModelChange",function(t){return o.onUpdate(t)})("ngModelChange",function(t){return o.testUploadAdvanced=t}),e.qZA(),e.TgZ(60,"ids-text"),e._uU(61),e.qZA()()()()),2&i&&(e.xp6(7),e.cQ8("label","IDS Checkbox Group (",o.testCheckbox.one,",",o.testCheckbox.two,",",o.testCheckbox.three,")"),e.xp6(1),e.Q6J("ngModel",o.testCheckbox.one),e.xp6(1),e.Q6J("ngModel",o.testCheckbox.two),e.xp6(1),e.Q6J("ngModel",o.testCheckbox.three),e.xp6(1),e.MGl("label","IDS Date Picker (object) (",o.testDateObject,")"),e.Q6J("ngModel",o.testDateObject),e.xp6(1),e.MGl("label","IDS Date Picker (string) (",o.testDateString,")"),e.Q6J("ngModel",o.testDateString),e.xp6(1),e.MGl("label","IDS Dropdown (",o.testDropdown,")"),e.Q6J("ngModel",o.testDropdown),e.xp6(15),e.MGl("label","IDS Multiselect (",o.testMultiselect,")"),e.Q6J("ngModel",o.testMultiselect),e.xp6(16),e.MGl("label","IDS Input (",o.testInput,")"),e.Q6J("ngModel",o.testInput),e.xp6(1),e.MGl("label","IDS Lookup (",o.testLookup,")"),e.Q6J("ngModel",o.testLookup),e.xp6(1),e.MGl("label","IDS Textarea (",o.testTextarea,")"),e.Q6J("ngModel",o.testTextarea),e.xp6(4),e.MGl("label","IDS Time Picker (",o.testTimePicker,")"),e.Q6J("ngModel",o.testTimePicker),e.xp6(1),e.MGl("label","IDS Radio Group (",o.testRadio,")"),e.Q6J("ngModel",o.testRadio),e.xp6(4),e.MGl("label","IDS Search Field (",o.testSearchField,")"),e.Q6J("ngModel",o.testSearchField),e.xp6(1),e.MGl("label","IDS Spinbox (",o.testSpinbox,")"),e.Q6J("ngModel",o.testSpinbox),e.xp6(1),e.MGl("label","IDS Switch (",o.testSwitch,")"),e.Q6J("ngModel",o.testSwitch),e.xp6(1),e.MGl("label","IDS Upload (",o.testUpload,")"),e.Q6J("ngModel",o.testUpload),e.xp6(1),e.MGl("label","IDS Upload Advanced (",o.testUploadAdvanced,")"),e.Q6J("ngModel",o.testUploadAdvanced),e.xp6(2),e.hij("IDS Upload Advanced (",o.testUploadAdvanced,")"))},dependencies:[s.JJ,s.On,h,C]})}return n})()}];let M=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#o=this.\u0275mod=e.oAB({type:n});static#t=this.\u0275inj=e.cJS({imports:[p.Bz.forChild(g),p.Bz]})}return n})();var f=a(9874);let b=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#o=this.\u0275mod=e.oAB({type:n});static#t=this.\u0275inj=e.cJS({imports:[u.ez,s.u5,c,M,f.H]})}return n})()}}]);