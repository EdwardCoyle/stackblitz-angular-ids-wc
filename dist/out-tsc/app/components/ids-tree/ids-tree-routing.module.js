import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsTreeComponent } from './ids-tree.component';
import { ExampleComponent } from './demos/example/example.component';
import { MultiSelectComponent } from './demos/multi-select/multi-select.component';
import { SandboxComponent } from './demos/sandbox/sandbox.component';
export const routes = [
    {
        path: '',
        component: IdsTreeComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    },
    {
        path: 'multi-select',
        component: MultiSelectComponent
    },
    {
        path: 'sandbox',
        component: SandboxComponent
    }
];
let IdsTreeRoutingModule = class IdsTreeRoutingModule {
};
IdsTreeRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsTreeRoutingModule);
export { IdsTreeRoutingModule };
//# sourceMappingURL=ids-tree-routing.module.js.map