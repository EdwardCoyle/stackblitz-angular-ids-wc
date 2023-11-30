import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdsEmptyMessageRoutingModule } from './ids-empty-message-routing.module';
import { IdsEmptyMessageComponent } from './ids-empty-message.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
let IdsEmptyMessageModule = class IdsEmptyMessageModule {
};
IdsEmptyMessageModule = __decorate([
    NgModule({
        declarations: [
            IdsEmptyMessageComponent,
            ExampleComponent
        ],
        imports: [
            CommonModule,
            IdsEmptyMessageRoutingModule,
            DemoListingModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], IdsEmptyMessageModule);
export { IdsEmptyMessageModule };
//# sourceMappingURL=ids-empty-message.module.js.map