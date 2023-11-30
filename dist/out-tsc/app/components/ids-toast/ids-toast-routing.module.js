import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsToastComponent } from './ids-toast.component';
import { ExampleComponent } from './demos/example/example.component';
import { SandboxComponent } from './demos/sandbox/sandbox.component';
export const routes = [
    {
        path: '',
        component: IdsToastComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    },
    {
        path: 'sandbox',
        component: SandboxComponent
    }
];
let IdsToastRoutingModule = class IdsToastRoutingModule {
};
IdsToastRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsToastRoutingModule);
export { IdsToastRoutingModule };
//# sourceMappingURL=ids-toast-routing.module.js.map