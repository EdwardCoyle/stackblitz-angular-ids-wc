import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsMenuButtonComponent } from './ids-menu-button.component';
import { ExampleComponent } from './demos/example/example.component';
import { DisabledComponent } from './demos/disabled/disabled.component';
import { DisplaySelectedComponent } from './demos/display-selected/display-selected.component';
export const routes = [
    {
        path: '',
        component: IdsMenuButtonComponent
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
        path: 'display-selected',
        component: DisplaySelectedComponent
    }
];
let IdsMenuButtonRoutingModule = class IdsMenuButtonRoutingModule {
};
IdsMenuButtonRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsMenuButtonRoutingModule);
export { IdsMenuButtonRoutingModule };
//# sourceMappingURL=ids-menu-button-routing.module.js.map