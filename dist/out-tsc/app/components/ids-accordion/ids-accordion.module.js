import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdsAccordionRoutingModule } from './ids-accordion-routing.module';
import { IdsAccordionComponent } from './ids-accordion.component';
import { ExampleComponent } from './demos/example/example.component';
import { DisabledComponent } from './demos/disabled/disabled.component';
import { IconComponent } from './demos/icon/icon.component';
import { NestedComponent } from './demos/nested/nested.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
let IdsAccordionModule = class IdsAccordionModule {
};
IdsAccordionModule = __decorate([
    NgModule({
        declarations: [
            IdsAccordionComponent,
            ExampleComponent,
            DisabledComponent,
            IconComponent,
            NestedComponent,
        ],
        imports: [
            CommonModule,
            IdsAccordionRoutingModule,
            DemoListingModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], IdsAccordionModule);
export { IdsAccordionModule };
//# sourceMappingURL=ids-accordion.module.js.map