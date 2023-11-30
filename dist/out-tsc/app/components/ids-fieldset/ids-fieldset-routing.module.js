import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExampleComponent } from './demos/example/example.component';
import { IdsFieldsetComponent } from './ids-fieldset.component';
export const routes = [
    {
        path: '',
        component: IdsFieldsetComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    }
];
let IdsFieldsetRoutingModule = class IdsFieldsetRoutingModule {
};
IdsFieldsetRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsFieldsetRoutingModule);
export { IdsFieldsetRoutingModule };
//# sourceMappingURL=ids-fieldset-routing.module.js.map