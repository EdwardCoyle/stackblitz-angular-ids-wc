import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsScrollViewComponent } from './ids-scroll-view.component';
import { ExampleComponent } from './demos/example/example.component';
export const routes = [
    {
        path: '',
        component: IdsScrollViewComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    }
];
let IdsScrollViewRoutingModule = class IdsScrollViewRoutingModule {
};
IdsScrollViewRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], IdsScrollViewRoutingModule);
export { IdsScrollViewRoutingModule };
//# sourceMappingURL=ids-scroll-view-routing.module.js.map