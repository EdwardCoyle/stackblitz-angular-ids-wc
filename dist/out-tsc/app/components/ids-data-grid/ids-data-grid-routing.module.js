import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsDataGridComponent } from './ids-data-grid.component';
import { ExampleComponent } from './demos/example/example.component';
export const routes = [
    {
        path: '',
        component: IdsDataGridComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    },
];
let IdsDataGridRoutingModule = class IdsDataGridRoutingModule {
};
IdsDataGridRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsDataGridRoutingModule);
export { IdsDataGridRoutingModule };
//# sourceMappingURL=ids-data-grid-routing.module.js.map