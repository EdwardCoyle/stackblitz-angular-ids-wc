import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdsDropdownRoutingModule } from './ids-dropdown-routing.module';
import { IdsDropdownComponent } from './ids-dropdown.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
import { TypeaheadComponent } from './demos/typeahead/typeahead.component';
import { SizesComponent } from './demos/sizes/sizes.component';
let IdsDropdownModule = class IdsDropdownModule {
};
IdsDropdownModule = __decorate([
    NgModule({
        declarations: [
            IdsDropdownComponent,
            ExampleComponent,
            TypeaheadComponent,
            SizesComponent
        ],
        imports: [
            CommonModule,
            IdsDropdownRoutingModule,
            DemoListingModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], IdsDropdownModule);
export { IdsDropdownModule };
//# sourceMappingURL=ids-dropdown.module.js.map