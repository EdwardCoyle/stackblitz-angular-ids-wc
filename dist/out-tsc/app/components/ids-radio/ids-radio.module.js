import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdsRadioRoutingModule } from './ids-radio-routing.module';
import { IdsRadioComponent } from './ids-radio.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
let IdsRadioModule = class IdsRadioModule {
};
IdsRadioModule = __decorate([
    NgModule({
        declarations: [
            IdsRadioComponent,
            ExampleComponent
        ],
        imports: [
            CommonModule,
            IdsRadioRoutingModule,
            DemoListingModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], IdsRadioModule);
export { IdsRadioModule };
//# sourceMappingURL=ids-radio.module.js.map