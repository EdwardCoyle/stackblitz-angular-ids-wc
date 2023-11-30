import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdsErrorPageRoutingModule } from './ids-error-page-routing.module';
import { IdsErrorPageComponent } from './ids-error-page.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
let IdsErrorPageModule = class IdsErrorPageModule {
};
IdsErrorPageModule = __decorate([
    NgModule({
        declarations: [
            IdsErrorPageComponent,
            ExampleComponent
        ],
        imports: [
            CommonModule,
            IdsErrorPageRoutingModule,
            DemoListingModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], IdsErrorPageModule);
export { IdsErrorPageModule };
//# sourceMappingURL=ids-error-page.module.js.map