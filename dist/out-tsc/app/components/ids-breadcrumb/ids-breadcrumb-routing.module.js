import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsBreadcrumbComponent } from './ids-breadcrumb.component';
import { ExampleComponent } from './demos/example/example.component';
import { TruncatedComponent } from './demos/truncated/truncated.component';
import { ToolbarComponent } from './demos/toolbar/toolbar.component';
export const routes = [
    {
        path: '',
        component: IdsBreadcrumbComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    },
    {
        path: 'truncated',
        component: TruncatedComponent
    },
    {
        path: 'toolbar',
        component: ToolbarComponent
    }
];
let IdsBreadcrumbRoutingModule = class IdsBreadcrumbRoutingModule {
};
IdsBreadcrumbRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsBreadcrumbRoutingModule);
export { IdsBreadcrumbRoutingModule };
//# sourceMappingURL=ids-breadcrumb-routing.module.js.map