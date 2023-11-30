import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsPagerComponent } from './ids-pager.component';
import { ExampleComponent } from './demos/example/example.component';
import { ListComponent } from './demos/list/list.component';
import { SandboxComponent } from './demos/sandbox/sandbox.component';
export const routes = [
    {
        path: '',
        component: IdsPagerComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    },
    {
        path: 'list',
        component: ListComponent
    },
    {
        path: 'sandbox',
        component: SandboxComponent
    }
];
let IdsPagerRoutingModule = class IdsPagerRoutingModule {
};
IdsPagerRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsPagerRoutingModule);
export { IdsPagerRoutingModule };
//# sourceMappingURL=ids-pager-routing.module.js.map