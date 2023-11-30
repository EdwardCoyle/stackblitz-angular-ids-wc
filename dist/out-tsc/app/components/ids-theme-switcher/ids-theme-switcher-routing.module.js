import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsThemeSwitcherComponent } from './ids-theme-switcher.component';
import { ExampleComponent } from './demos/example/example.component';
export const routes = [
    {
        path: '',
        component: IdsThemeSwitcherComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    }
];
let IdsThemeSwitcherRoutingModule = class IdsThemeSwitcherRoutingModule {
};
IdsThemeSwitcherRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsThemeSwitcherRoutingModule);
export { IdsThemeSwitcherRoutingModule };
//# sourceMappingURL=ids-theme-switcher-routing.module.js.map