import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdsDataLabelRoutingModule } from './ids-data-label-routing.module';
import { IdsDataLabelComponent } from './ids-data-label.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
let IdsDataLabelModule = class IdsDataLabelModule {
};
IdsDataLabelModule = __decorate([
    NgModule({
        declarations: [
            IdsDataLabelComponent,
            ExampleComponent
        ],
        imports: [
            CommonModule,
            IdsDataLabelRoutingModule,
            DemoListingModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], IdsDataLabelModule);
export { IdsDataLabelModule };
//# sourceMappingURL=ids-data-label.module.js.map