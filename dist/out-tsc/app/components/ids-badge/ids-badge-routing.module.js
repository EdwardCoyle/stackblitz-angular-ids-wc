import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsBadgeComponent } from './ids-badge.component';
import { ExampleComponent } from './demos/example/example.component';
export const routes = [
    {
        path: '',
        component: IdsBadgeComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    }
];
let IdsBadgeRoutingModule = class IdsBadgeRoutingModule {
};
IdsBadgeRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsBadgeRoutingModule);
export { IdsBadgeRoutingModule };
//# sourceMappingURL=ids-badge-routing.module.js.map