import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsErrorPageComponent } from './ids-error-page.component';
import { ExampleComponent } from './demos/example/example.component';
export const routes = [
    {
        path: '',
        component: IdsErrorPageComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    }
];
let IdsErrorPageRoutingModule = class IdsErrorPageRoutingModule {
};
IdsErrorPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsErrorPageRoutingModule);
export { IdsErrorPageRoutingModule };
//# sourceMappingURL=ids-error-page-routing.module.js.map