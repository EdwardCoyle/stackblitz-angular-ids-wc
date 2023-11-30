import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdsScrollViewRoutingModule } from './ids-scroll-view-routing.module';
import { IdsScrollViewComponent } from './ids-scroll-view.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
let IdsScrollViewModule = class IdsScrollViewModule {
};
IdsScrollViewModule = __decorate([
    NgModule({
        declarations: [
            IdsScrollViewComponent,
            ExampleComponent
        ],
        imports: [
            CommonModule,
            IdsScrollViewRoutingModule,
            DemoListingModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], IdsScrollViewModule);
export { IdsScrollViewModule };
//# sourceMappingURL=ids-scroll-view.module.js.map