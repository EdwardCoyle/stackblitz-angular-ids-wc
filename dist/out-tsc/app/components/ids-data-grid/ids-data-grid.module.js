import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdsDataGridRoutingModule } from './ids-data-grid-routing.module';
import { IdsDataGridComponent } from './ids-data-grid.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
let IdsDataGridModule = class IdsDataGridModule {
};
IdsDataGridModule = __decorate([
    NgModule({
        declarations: [
            IdsDataGridComponent,
            ExampleComponent
        ],
        imports: [
            CommonModule,
            IdsDataGridRoutingModule,
            DemoListingModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], IdsDataGridModule);
export { IdsDataGridModule };
//# sourceMappingURL=ids-data-grid.module.js.map