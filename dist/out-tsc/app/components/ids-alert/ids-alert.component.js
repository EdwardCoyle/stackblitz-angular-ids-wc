import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-alert-routing.module';
let IdsAlertComponent = class IdsAlertComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Alert init');
    }
};
IdsAlertComponent = __decorate([
    Component({
        selector: 'app-ids-alert',
        templateUrl: './ids-alert.component.html',
        styleUrls: ['./ids-alert.component.css']
    })
], IdsAlertComponent);
export { IdsAlertComponent };
//# sourceMappingURL=ids-alert.component.js.map