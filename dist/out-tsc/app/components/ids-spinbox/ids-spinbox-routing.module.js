import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsSpinboxComponent } from './ids-spinbox.component';
import { ExampleComponent } from './demos/example/example.component';
export const routes = [
    {
        path: '',
        component: IdsSpinboxComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    }
];
let IdsSpinboxRoutingModule = class IdsSpinboxRoutingModule {
};
IdsSpinboxRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsSpinboxRoutingModule);
export { IdsSpinboxRoutingModule };
//# sourceMappingURL=ids-spinbox-routing.module.js.map