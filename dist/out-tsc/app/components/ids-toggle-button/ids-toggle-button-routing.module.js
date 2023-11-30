import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsToggleButtonComponent } from './ids-toggle-button.component';
import { ExampleComponent } from './demos/example/example.component';
import { IconAlignRightComponent } from './demos/icon-align-right/icon-align-right.component';
export const routes = [
    {
        path: '',
        component: IdsToggleButtonComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    },
    {
        path: 'icon-align-right',
        component: IconAlignRightComponent
    }
];
let IdsToggleButtonRoutingModule = class IdsToggleButtonRoutingModule {
};
IdsToggleButtonRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsToggleButtonRoutingModule);
export { IdsToggleButtonRoutingModule };
//# sourceMappingURL=ids-toggle-button-routing.module.js.map