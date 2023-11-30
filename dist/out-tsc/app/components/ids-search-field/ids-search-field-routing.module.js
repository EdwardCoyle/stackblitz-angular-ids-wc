import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsSearchFieldComponent } from './ids-search-field.component';
import { ExampleComponent } from './demos/example/example.component';
export const routes = [
    {
        path: '',
        component: IdsSearchFieldComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    }
];
let IdsSearchFieldRoutingModule = class IdsSearchFieldRoutingModule {
};
IdsSearchFieldRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsSearchFieldRoutingModule);
export { IdsSearchFieldRoutingModule };
//# sourceMappingURL=ids-search-field-routing.module.js.map