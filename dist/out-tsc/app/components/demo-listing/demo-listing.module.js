import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoListingComponent } from './demo-listing.component';
let DemoListingModule = class DemoListingModule {
};
DemoListingModule = __decorate([
    NgModule({
        declarations: [
            DemoListingComponent
        ],
        imports: [
            CommonModule,
        ],
        exports: [
            DemoListingComponent
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], DemoListingModule);
export { DemoListingModule };
//# sourceMappingURL=demo-listing.module.js.map