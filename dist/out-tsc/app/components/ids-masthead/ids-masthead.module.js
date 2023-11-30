import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdsMastheadRoutingModule } from './ids-masthead-routing.module';
import { IdsMastheadComponent } from './ids-masthead.component';
import { ExampleComponent } from './demos/example/example.component';
let IdsMastheadModule = class IdsMastheadModule {
};
IdsMastheadModule = __decorate([
    NgModule({
        declarations: [
            IdsMastheadComponent,
            ExampleComponent
        ],
        imports: [
            CommonModule,
            IdsMastheadRoutingModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], IdsMastheadModule);
export { IdsMastheadModule };
//# sourceMappingURL=ids-masthead.module.js.map