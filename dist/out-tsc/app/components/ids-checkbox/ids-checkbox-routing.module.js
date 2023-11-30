import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsCheckboxComponent } from './ids-checkbox.component';
import { ExampleComponent } from './demos/example/example.component';
export const routes = [
    {
        path: '',
        component: IdsCheckboxComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    }
];
let IdsCheckboxRoutingModule = class IdsCheckboxRoutingModule {
};
IdsCheckboxRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsCheckboxRoutingModule);
export { IdsCheckboxRoutingModule };
//# sourceMappingURL=ids-checkbox-routing.module.js.map