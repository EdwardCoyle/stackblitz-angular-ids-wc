import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsAppMenuComponent } from './ids-app-menu.component';
import { ExampleComponent } from './demos/example/example.component';
import { SandboxComponent } from './demos/sandbox/sandbox.component';
import { ExampleFooterComponent } from './demos/example-footer/example-footer.component';
export const routes = [
    {
        path: '',
        component: IdsAppMenuComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    },
    {
        path: 'example-footer',
        component: ExampleFooterComponent
    },
    {
        path: 'sandbox',
        component: SandboxComponent
    }
];
let IdsAppMenuRoutingModule = class IdsAppMenuRoutingModule {
};
IdsAppMenuRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsAppMenuRoutingModule);
export { IdsAppMenuRoutingModule };
//# sourceMappingURL=ids-app-menu-routing.module.js.map