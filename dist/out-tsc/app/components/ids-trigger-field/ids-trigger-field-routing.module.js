import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsTriggerFieldComponent } from './ids-trigger-field.component';
import { ExampleComponent } from './demos/example/example.component';
import { LabelStateComponent } from './demos/label-state/label-state.component';
import { TextSizesComponent } from './demos/text-sizes/text-sizes.component';
export const routes = [
    {
        path: '',
        component: IdsTriggerFieldComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    },
    {
        path: 'label-state',
        component: LabelStateComponent
    },
    {
        path: 'text-sizes',
        component: TextSizesComponent
    }
];
let IdsTriggerFieldRoutingModule = class IdsTriggerFieldRoutingModule {
};
IdsTriggerFieldRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsTriggerFieldRoutingModule);
export { IdsTriggerFieldRoutingModule };
//# sourceMappingURL=ids-trigger-field-routing.module.js.map