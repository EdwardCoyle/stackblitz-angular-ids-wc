import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdsToggleButtonRoutingModule } from './ids-toggle-button-routing.module';
import { IdsToggleButtonComponent } from './ids-toggle-button.component';
import { ExampleComponent } from './demos/example/example.component';
import { IconAlignRightComponent } from './demos/icon-align-right/icon-align-right.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
let IdsToggleButtonModule = class IdsToggleButtonModule {
};
IdsToggleButtonModule = __decorate([
    NgModule({
        declarations: [
            IdsToggleButtonComponent,
            ExampleComponent,
            IconAlignRightComponent
        ],
        imports: [
            CommonModule,
            IdsToggleButtonRoutingModule,
            DemoListingModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], IdsToggleButtonModule);
export { IdsToggleButtonModule };
//# sourceMappingURL=ids-toggle-button.module.js.map