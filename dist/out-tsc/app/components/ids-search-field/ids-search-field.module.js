import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdsSearchFieldRoutingModule } from './ids-search-field-routing.module';
import { IdsSearchFieldComponent } from './ids-search-field.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
let IdsSearchFieldModule = class IdsSearchFieldModule {
};
IdsSearchFieldModule = __decorate([
    NgModule({
        declarations: [
            IdsSearchFieldComponent,
            ExampleComponent
        ],
        imports: [
            CommonModule,
            IdsSearchFieldRoutingModule,
            DemoListingModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], IdsSearchFieldModule);
export { IdsSearchFieldModule };
//# sourceMappingURL=ids-search-field.module.js.map