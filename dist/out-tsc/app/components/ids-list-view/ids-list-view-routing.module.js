import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsListViewComponent } from './ids-list-view.component';
import { ExampleComponent } from './demos/example/example.component';
import { SelectableSingleComponent } from './demos/selectable-single/selectable-single.component';
import { SelectableMultipleComponent } from './demos/selectable-multiple/selectable-multiple.component';
export const routes = [
    {
        path: '',
        component: IdsListViewComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    },
    {
        path: 'selectable-single',
        component: SelectableSingleComponent
    },
    {
        path: 'selectable-multiple',
        component: SelectableMultipleComponent
    }
];
let IdsListViewRoutingModule = class IdsListViewRoutingModule {
};
IdsListViewRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsListViewRoutingModule);
export { IdsListViewRoutingModule };
//# sourceMappingURL=ids-list-view-routing.module.js.map