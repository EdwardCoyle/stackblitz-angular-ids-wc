import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsAlertComponent } from './ids-alert.component';
import { ExampleComponent } from './demos/example/example.component';
export const routes = [
    {
        path: '',
        component: IdsAlertComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    }
];
let IdsAlertRoutingModule = class IdsAlertRoutingModule {
};
IdsAlertRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsAlertRoutingModule);
export { IdsAlertRoutingModule };
//# sourceMappingURL=ids-alert-routing.module.js.map