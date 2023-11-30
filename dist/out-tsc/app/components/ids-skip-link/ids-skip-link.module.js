import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdsSkipLinkRoutingModule } from './ids-skip-link-routing.module';
import { IdsSkipLinkComponent } from './ids-skip-link.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
let IdsSkipLinkModule = class IdsSkipLinkModule {
};
IdsSkipLinkModule = __decorate([
    NgModule({
        declarations: [
            IdsSkipLinkComponent,
            ExampleComponent
        ],
        imports: [
            CommonModule,
            IdsSkipLinkRoutingModule,
            DemoListingModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], IdsSkipLinkModule);
export { IdsSkipLinkModule };
//# sourceMappingURL=ids-skip-link.module.js.map