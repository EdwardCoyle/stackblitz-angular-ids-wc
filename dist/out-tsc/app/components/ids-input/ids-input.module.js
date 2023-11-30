import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdsInputRoutingModule } from './ids-input-routing.module';
import { IdsInputComponent } from './ids-input.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
let IdsInputModule = class IdsInputModule {
};
IdsInputModule = __decorate([
    NgModule({
        declarations: [
            IdsInputComponent,
            ExampleComponent
        ],
        imports: [
            CommonModule,
            IdsInputRoutingModule,
            DemoListingModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], IdsInputModule);
export { IdsInputModule };
//# sourceMappingURL=ids-input.module.js.map