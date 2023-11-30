import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdsBadgeRoutingModule } from './ids-badge-routing.module';
import { IdsBadgeComponent } from './ids-badge.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
let IdsBadgeModule = class IdsBadgeModule {
};
IdsBadgeModule = __decorate([
    NgModule({
        declarations: [
            IdsBadgeComponent,
            ExampleComponent
        ],
        imports: [
            CommonModule,
            IdsBadgeRoutingModule,
            DemoListingModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], IdsBadgeModule);
export { IdsBadgeModule };
//# sourceMappingURL=ids-badge.module.js.map