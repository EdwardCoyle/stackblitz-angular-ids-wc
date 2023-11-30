import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsVirtualScrollComponent } from './ids-virtual-scroll.component';
import { ExampleComponent } from './demos/example/example.component';
export const routes = [
    {
        path: '',
        component: IdsVirtualScrollComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    }
];
let IdsVirtualScrollRoutingModule = class IdsVirtualScrollRoutingModule {
};
IdsVirtualScrollRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsVirtualScrollRoutingModule);
export { IdsVirtualScrollRoutingModule };
//# sourceMappingURL=ids-virtual-scroll-routing.module.js.map