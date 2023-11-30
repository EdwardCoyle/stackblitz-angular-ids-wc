import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsInputComponent } from './ids-input.component';
import { ExampleComponent } from './demos/example/example.component';
export const routes = [
    {
        path: '',
        component: IdsInputComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    }
];
let IdsInputRoutingModule = class IdsInputRoutingModule {
};
IdsInputRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsInputRoutingModule);
export { IdsInputRoutingModule };
//# sourceMappingURL=ids-input-routing.module.js.map