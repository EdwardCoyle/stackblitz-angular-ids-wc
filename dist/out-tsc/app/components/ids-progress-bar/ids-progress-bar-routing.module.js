import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsProgressBarComponent } from './ids-progress-bar.component';
import { ExampleComponent } from './demos/example/example.component';
export const routes = [
    {
        path: '',
        component: IdsProgressBarComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    }
];
let IdsProgressBarRoutingModule = class IdsProgressBarRoutingModule {
};
IdsProgressBarRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsProgressBarRoutingModule);
export { IdsProgressBarRoutingModule };
//# sourceMappingURL=ids-progress-bar-routing.module.js.map