import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdsCheckboxRoutingModule } from './ids-checkbox-routing.module';
import { IdsCheckboxComponent } from './ids-checkbox.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
let IdsCheckboxModule = class IdsCheckboxModule {
};
IdsCheckboxModule = __decorate([
    NgModule({
        declarations: [
            IdsCheckboxComponent,
            ExampleComponent
        ],
        imports: [
            CommonModule,
            IdsCheckboxRoutingModule,
            DemoListingModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], IdsCheckboxModule);
export { IdsCheckboxModule };
//# sourceMappingURL=ids-checkbox.module.js.map