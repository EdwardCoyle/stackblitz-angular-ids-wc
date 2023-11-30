import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsCheckboxGroupComponent } from './ids-checkbox-group.component';
import { ExampleComponent } from './demos/example/example.component';
export const routes = [
    {
        path: '',
        component: IdsCheckboxGroupComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    }
];
let IdsCheckboxGroupRoutingModule = class IdsCheckboxGroupRoutingModule {
};
IdsCheckboxGroupRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsCheckboxGroupRoutingModule);
export { IdsCheckboxGroupRoutingModule };
//# sourceMappingURL=ids-checkbox-group-routing.module.js.map