import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExampleComponent } from './demos/example/example.component';
export const routes = [
    {
        path: '',
        component: ExampleComponent
    }
];
let IdsMastheadRoutingModule = class IdsMastheadRoutingModule {
};
IdsMastheadRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsMastheadRoutingModule);
export { IdsMastheadRoutingModule };
//# sourceMappingURL=ids-masthead-routing.module.js.map