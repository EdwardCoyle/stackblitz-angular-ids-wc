import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsMultiselectComponent } from './ids-multiselect.component';
import { ExampleComponent } from './demos/example/example.component';
export const routes = [
    {
        path: '',
        component: IdsMultiselectComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    }
];
let IdsMultiselectRoutingModule = class IdsMultiselectRoutingModule {
};
IdsMultiselectRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsMultiselectRoutingModule);
export { IdsMultiselectRoutingModule };
//# sourceMappingURL=ids-multiselect-routing.module.js.map