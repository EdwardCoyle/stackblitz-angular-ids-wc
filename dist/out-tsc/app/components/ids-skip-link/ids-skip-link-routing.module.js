import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsSkipLinkComponent } from './ids-skip-link.component';
import { ExampleComponent } from './demos/example/example.component';
export const routes = [
    {
        path: '',
        component: IdsSkipLinkComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    }
];
let IdsSkipLinkRoutingModule = class IdsSkipLinkRoutingModule {
};
IdsSkipLinkRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsSkipLinkRoutingModule);
export { IdsSkipLinkRoutingModule };
//# sourceMappingURL=ids-skip-link-routing.module.js.map