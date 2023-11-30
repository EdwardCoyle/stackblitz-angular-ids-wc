import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsButtonComponent } from './ids-button.component';
import { ExampleComponent } from './demos/example/example.component';
import { ResponsiveComponent } from './demos/responsive/responsive.component';
import { TestFallbackSlotComponent } from './demos/test-fallback-slot/test-fallback-slot.component';
import { PerformanceComponent } from './demos/performance/performance.component';
export const routes = [
    {
        path: '',
        component: IdsButtonComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    },
    {
        path: 'responsive',
        component: ResponsiveComponent
    },
    {
        path: 'test-fallback-slot',
        component: TestFallbackSlotComponent
    },
    {
        path: 'performance',
        component: PerformanceComponent
    }
];
let IdsButtonRoutingModule = class IdsButtonRoutingModule {
};
IdsButtonRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsButtonRoutingModule);
export { IdsButtonRoutingModule };
//# sourceMappingURL=ids-button-routing.module.js.map