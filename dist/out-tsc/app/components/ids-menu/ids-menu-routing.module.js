import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsMenuComponent } from './ids-menu.component';
import { ExampleComponent } from './demos/example/example.component';
export const routes = [
    {
        path: '',
        component: IdsMenuComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    }
];
let IdsMenuRoutingModule = class IdsMenuRoutingModule {
};
IdsMenuRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsMenuRoutingModule);
export { IdsMenuRoutingModule };
//# sourceMappingURL=ids-menu-routing.module.js.map