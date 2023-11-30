import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdsSwitchRoutingModule } from './ids-switch-routing.module';
import { IdsSwitchComponent } from './ids-switch.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
let IdsSwitchModule = class IdsSwitchModule {
};
IdsSwitchModule = __decorate([
    NgModule({
        declarations: [
            IdsSwitchComponent,
            ExampleComponent
        ],
        imports: [
            CommonModule,
            IdsSwitchRoutingModule,
            DemoListingModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], IdsSwitchModule);
export { IdsSwitchModule };
//# sourceMappingURL=ids-switch.module.js.map