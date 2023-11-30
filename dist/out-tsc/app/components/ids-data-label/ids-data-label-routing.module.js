import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsDataLabelComponent } from './ids-data-label.component';
import { ExampleComponent } from './demos/example/example.component';
export const routes = [
    {
        path: '',
        component: IdsDataLabelComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    }
];
let IdsDataLabelRoutingModule = class IdsDataLabelRoutingModule {
};
IdsDataLabelRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsDataLabelRoutingModule);
export { IdsDataLabelRoutingModule };
//# sourceMappingURL=ids-data-label-routing.module.js.map