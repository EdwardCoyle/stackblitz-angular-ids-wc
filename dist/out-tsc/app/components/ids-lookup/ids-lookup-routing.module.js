import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsLookupComponent } from './ids-lookup.component';
import { ExampleComponent } from './demos/example/example.component';
export const routes = [
    {
        path: '',
        component: IdsLookupComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    }
];
let IdsLookupRoutingModule = class IdsLookupRoutingModule {
};
IdsLookupRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsLookupRoutingModule);
export { IdsLookupRoutingModule };
//# sourceMappingURL=ids-lookup-routing.module.js.map