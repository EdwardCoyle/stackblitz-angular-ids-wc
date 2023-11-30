import { __decorate } from "tslib";
import { IdsContainerComponent } from './ids-container.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExampleComponent } from './demos/example/example.component';
export const routes = [
    {
        path: '',
        component: IdsContainerComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    }
];
let IdsContainerRoutingModule = class IdsContainerRoutingModule {
};
IdsContainerRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsContainerRoutingModule);
export { IdsContainerRoutingModule };
//# sourceMappingURL=ids-container-routing.module.js.map