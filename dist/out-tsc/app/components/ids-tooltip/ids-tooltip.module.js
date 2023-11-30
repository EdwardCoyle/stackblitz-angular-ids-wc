import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdsTooltipRoutingModule } from './ids-tooltip-routing.module';
import { IdsTooltipComponent } from './ids-tooltip.component';
import { ExampleComponent } from './demos/example/example.component';
import { SandboxComponent } from './demos/sandbox/sandbox.component';
import { PerformanceComponent } from './demos/performance/performance.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
let IdsTooltipModule = class IdsTooltipModule {
};
IdsTooltipModule = __decorate([
    NgModule({
        declarations: [
            IdsTooltipComponent,
            ExampleComponent,
            SandboxComponent,
            PerformanceComponent
        ],
        imports: [
            CommonModule,
            IdsTooltipRoutingModule,
            DemoListingModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], IdsTooltipModule);
export { IdsTooltipModule };
//# sourceMappingURL=ids-tooltip.module.js.map