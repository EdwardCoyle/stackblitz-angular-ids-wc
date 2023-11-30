import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdsFieldsetRoutingModule } from './ids-fieldset-routing.module';
import { IdsFieldsetComponent } from './ids-fieldset.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from './../demo-listing/demo-listing.module';
let IdsFieldsetModule = class IdsFieldsetModule {
};
IdsFieldsetModule = __decorate([
    NgModule({
        declarations: [
            IdsFieldsetComponent,
            ExampleComponent
        ],
        imports: [
            CommonModule,
            IdsFieldsetRoutingModule,
            DemoListingModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], IdsFieldsetModule);
export { IdsFieldsetModule };
//# sourceMappingURL=ids-fieldset.module.js.map