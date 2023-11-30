import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExampleComponent } from './demos/example/example.component';
import { IdsExpandableAreaComponent } from './ids-expandable-area.component';
export const routes = [
    {
        path: '',
        component: IdsExpandableAreaComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    }
];
let IdsExpandableAreaRoutingModule = class IdsExpandableAreaRoutingModule {
};
IdsExpandableAreaRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsExpandableAreaRoutingModule);
export { IdsExpandableAreaRoutingModule };
//# sourceMappingURL=ids-expandable-area-routing.module.js.map