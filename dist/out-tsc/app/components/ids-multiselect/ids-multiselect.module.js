import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdsMultiselectRoutingModule } from './ids-multiselect-routing.module';
import { IdsMultiselectComponent } from './ids-multiselect.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
let IdsMultiselectModule = class IdsMultiselectModule {
};
IdsMultiselectModule = __decorate([
    NgModule({
        declarations: [
            IdsMultiselectComponent,
            ExampleComponent
        ],
        imports: [
            CommonModule,
            IdsMultiselectRoutingModule,
            DemoListingModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], IdsMultiselectModule);
export { IdsMultiselectModule };
//# sourceMappingURL=ids-multiselect.module.js.map