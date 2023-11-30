import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsListBuilderComponent } from './ids-list-builder.component';
import { ExampleComponent } from './demos/example/example.component';
import { SelectionMultipleComponent } from './demos/selection-multiple/selection-multiple.component';
export const routes = [
    {
        path: '',
        component: IdsListBuilderComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    },
    {
        path: 'selection-multiple',
        component: SelectionMultipleComponent
    }
];
let IdsListBuilderRoutingModule = class IdsListBuilderRoutingModule {
};
IdsListBuilderRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsListBuilderRoutingModule);
export { IdsListBuilderRoutingModule };
//# sourceMappingURL=ids-list-builder-routing.module.js.map