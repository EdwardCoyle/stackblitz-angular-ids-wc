import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdsTextareaRoutingModule } from './ids-textarea-routing.module';
import { IdsTextareaComponent } from './ids-textarea.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
let IdsTextareaModule = class IdsTextareaModule {
};
IdsTextareaModule = __decorate([
    NgModule({
        declarations: [
            IdsTextareaComponent,
            ExampleComponent
        ],
        imports: [
            CommonModule,
            IdsTextareaRoutingModule,
            DemoListingModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], IdsTextareaModule);
export { IdsTextareaModule };
//# sourceMappingURL=ids-textarea.module.js.map