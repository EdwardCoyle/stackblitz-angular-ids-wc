import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsIconComponent } from './ids-icon.component';
import { ExampleComponent } from './demos/example/example.component';
import { NotificationBadgeComponent } from './demos/notification-badge/notification-badge.component';
import { VariantAlternateComponent } from './demos/variant-alternate/variant-alternate.component';
export const routes = [
    {
        path: '',
        component: IdsIconComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    },
    {
        path: 'notification-badge',
        component: NotificationBadgeComponent
    },
    {
        path: 'variant-alternate',
        component: VariantAlternateComponent
    }
];
let IdsIconRoutingModule = class IdsIconRoutingModule {
};
IdsIconRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsIconRoutingModule);
export { IdsIconRoutingModule };
//# sourceMappingURL=ids-icon-routing.module.js.map