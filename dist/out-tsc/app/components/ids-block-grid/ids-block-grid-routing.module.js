import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsBlockGridComponent } from './ids-block-grid.component';
import { ExampleComponent } from './demos/example/example.component';
import { SingleSelectionComponent } from './demos/single-selection/single-selection.component';
import { MultipleSelectionComponent } from './demos/multiple-selection/multiple-selection.component';
import { MixedSelectionComponent } from './demos/mixed-selection/mixed-selection.component';
import { PaginationComponent } from './demos/pagination/pagination.component';
import { MultipleTextSelectionComponent } from './demos/multiple-text-selection/multiple-text-selection.component';
export const routes = [
    {
        path: '',
        component: IdsBlockGridComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    },
    {
        path: 'single-selection',
        component: SingleSelectionComponent
    },
    {
        path: 'multiple-selection',
        component: MultipleSelectionComponent
    },
    {
        path: 'mixed-selection',
        component: MixedSelectionComponent
    },
    {
        path: 'pagination',
        component: PaginationComponent
    },
    {
        path: 'multiple-text-selection',
        component: MultipleTextSelectionComponent
    }
];
let IdsBlockGridRoutingModule = class IdsBlockGridRoutingModule {
};
IdsBlockGridRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], IdsBlockGridRoutingModule);
export { IdsBlockGridRoutingModule };
//# sourceMappingURL=ids-block-grid-routing.module.js.map