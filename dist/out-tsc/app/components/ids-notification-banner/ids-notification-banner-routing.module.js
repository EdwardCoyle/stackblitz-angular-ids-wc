import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsNotificationBannerComponent } from './ids-notification-banner.component';
import { ExampleComponent } from './demos/example/example.component';
import { CardComponent } from './demos/card/card.component';
import { DynamicComponent } from './demos/dynamic/dynamic.component';
export const routes = [
    {
        path: '',
        component: IdsNotificationBannerComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    },
    {
        path: 'dynamic',
        component: DynamicComponent
    },
    {
        path: 'card',
        component: CardComponent
    }
];
let IdsNotificationBannerRoutingModule = class IdsNotificationBannerRoutingModule {
};
IdsNotificationBannerRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsNotificationBannerRoutingModule);
export { IdsNotificationBannerRoutingModule };
//# sourceMappingURL=ids-notification-banner-routing.module.js.map