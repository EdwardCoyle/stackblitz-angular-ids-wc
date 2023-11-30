import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsAccordionComponent } from './ids-accordion.component';
import { ExampleComponent } from './demos/example/example.component';
import { DisabledComponent } from './demos/disabled/disabled.component';
import { IconComponent } from './demos/icon/icon.component';
import { NestedComponent } from './demos/nested/nested.component';
export const routes = [
    {
        path: '',
        component: IdsAccordionComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    },
    {
        path: 'disabled',
        component: DisabledComponent
    },
    {
        path: 'icon',
        component: IconComponent
    },
    {
        path: 'nested',
        component: NestedComponent
    }
];
let IdsAccordionRoutingModule = class IdsAccordionRoutingModule {
};
IdsAccordionRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsAccordionRoutingModule);
export { IdsAccordionRoutingModule };
//# sourceMappingURL=ids-accordion-routing.module.js.map