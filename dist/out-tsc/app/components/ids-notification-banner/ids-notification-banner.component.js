import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-notification-banner-routing.module';
let IdsNotificationBannerComponent = class IdsNotificationBannerComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Notification Banner init');
    }
};
IdsNotificationBannerComponent = __decorate([
    Component({
        selector: 'app-ids-notification-banner',
        templateUrl: './ids-notification-banner.component.html',
        styleUrls: ['./ids-notification-banner.component.css']
    })
], IdsNotificationBannerComponent);
export { IdsNotificationBannerComponent };
//# sourceMappingURL=ids-notification-banner.component.js.map