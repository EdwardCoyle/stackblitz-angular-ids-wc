import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-badge-routing.module';
let IdsBadgeComponent = class IdsBadgeComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Badge init');
    }
};
IdsBadgeComponent = __decorate([
    Component({
        selector: 'app-ids-badge',
        templateUrl: './ids-badge.component.html',
        styleUrls: ['./ids-badge.component.css']
    })
], IdsBadgeComponent);
export { IdsBadgeComponent };
//# sourceMappingURL=ids-badge.component.js.map