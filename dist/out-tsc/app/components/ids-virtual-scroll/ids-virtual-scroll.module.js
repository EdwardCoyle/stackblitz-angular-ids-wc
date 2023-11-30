import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdsVirtualScrollRoutingModule } from './ids-virtual-scroll-routing.module';
import { IdsVirtualScrollComponent } from './ids-virtual-scroll.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
let IdsVirtualScrollModule = class IdsVirtualScrollModule {
};
IdsVirtualScrollModule = __decorate([
    NgModule({
        declarations: [
            IdsVirtualScrollComponent,
            ExampleComponent
        ],
        imports: [
            CommonModule,
            IdsVirtualScrollRoutingModule,
            DemoListingModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], IdsVirtualScrollModule);
export { IdsVirtualScrollModule };
//# sourceMappingURL=ids-virtual-scroll.module.js.map