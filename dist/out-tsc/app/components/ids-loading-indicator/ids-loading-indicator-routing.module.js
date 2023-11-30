import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsLoadingIndicatorComponent } from './ids-loading-indicator.component';
import { ExampleComponent } from './demos/example/example.component';
export const routes = [
    {
        path: '',
        component: IdsLoadingIndicatorComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    }
];
let IdsLoadingIndicatorRoutingModule = class IdsLoadingIndicatorRoutingModule {
};
IdsLoadingIndicatorRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsLoadingIndicatorRoutingModule);
export { IdsLoadingIndicatorRoutingModule };
//# sourceMappingURL=ids-loading-indicator-routing.module.js.map