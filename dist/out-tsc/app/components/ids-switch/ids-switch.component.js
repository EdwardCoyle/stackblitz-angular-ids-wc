import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-switch-routing.module';
let IdsSwitchComponent = class IdsSwitchComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Switch init');
    }
};
IdsSwitchComponent = __decorate([
    Component({
        selector: 'app-ids-switch',
        templateUrl: './ids-switch.component.html',
        styleUrls: ['./ids-switch.component.css']
    })
], IdsSwitchComponent);
export { IdsSwitchComponent };
//# sourceMappingURL=ids-switch.component.js.map