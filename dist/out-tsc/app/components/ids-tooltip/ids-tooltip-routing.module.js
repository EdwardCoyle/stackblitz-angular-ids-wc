import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsTooltipComponent } from './ids-tooltip.component';
import { ExampleComponent } from './demos/example/example.component';
import { SandboxComponent } from './demos/sandbox/sandbox.component';
import { PerformanceComponent } from './demos/performance/performance.component';
export const routes = [
    {
        path: '',
        component: IdsTooltipComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    },
    {
        path: 'sandbox',
        component: SandboxComponent
    },
    {
        path: 'performance',
        component: PerformanceComponent
    }
];
let IdsTooltipRoutingModule = class IdsTooltipRoutingModule {
};
IdsTooltipRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsTooltipRoutingModule);
export { IdsTooltipRoutingModule };
//# sourceMappingURL=ids-tooltip-routing.module.js.map