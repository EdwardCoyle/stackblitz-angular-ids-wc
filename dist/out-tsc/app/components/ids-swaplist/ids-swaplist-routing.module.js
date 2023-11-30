import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsSwaplistComponent } from './ids-swaplist.component';
import { ExampleComponent } from './demos/example/example.component';
export const routes = [
    {
        path: '',
        component: IdsSwaplistComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    }
];
let IdsSwaplistRoutingModule = class IdsSwaplistRoutingModule {
};
IdsSwaplistRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsSwaplistRoutingModule);
export { IdsSwaplistRoutingModule };
//# sourceMappingURL=ids-swaplist-routing.module.js.map