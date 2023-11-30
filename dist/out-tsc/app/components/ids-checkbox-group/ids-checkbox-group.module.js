import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdsCheckboxGroupRoutingModule } from './ids-checkbox-group-routing.module';
import { IdsCheckboxGroupComponent } from './ids-checkbox-group.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
let IdsCheckboxGroupModule = class IdsCheckboxGroupModule {
};
IdsCheckboxGroupModule = __decorate([
    NgModule({
        declarations: [
            IdsCheckboxGroupComponent,
            ExampleComponent
        ],
        imports: [
            CommonModule,
            IdsCheckboxGroupRoutingModule,
            DemoListingModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], IdsCheckboxGroupModule);
export { IdsCheckboxGroupModule };
//# sourceMappingURL=ids-checkbox-group.module.js.map