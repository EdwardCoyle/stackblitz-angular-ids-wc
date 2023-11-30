import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsSwitchComponent } from './ids-switch.component';
import { ExampleComponent } from './demos/example/example.component';
export const routes = [
    {
        path: '', component: IdsSwitchComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    }
];
let IdsSwitchRoutingModule = class IdsSwitchRoutingModule {
};
IdsSwitchRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsSwitchRoutingModule);
export { IdsSwitchRoutingModule };
//# sourceMappingURL=ids-switch-routing.module.js.map