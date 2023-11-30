import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsTagComponent } from './ids-tag.component';
import { ExampleComponent } from './demos/example/example.component';
export const routes = [
    {
        path: '',
        component: IdsTagComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    }
];
let IdsTagRoutingModule = class IdsTagRoutingModule {
};
IdsTagRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsTagRoutingModule);
export { IdsTagRoutingModule };
//# sourceMappingURL=ids-tag-routing.module.js.map