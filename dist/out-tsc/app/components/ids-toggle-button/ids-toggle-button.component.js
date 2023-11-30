import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-toggle-button-routing.module';
let IdsToggleButtonComponent = class IdsToggleButtonComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Toggle Button init');
    }
};
IdsToggleButtonComponent = __decorate([
    Component({
        selector: 'app-ids-toggle-button',
        templateUrl: './ids-toggle-button.component.html',
        styleUrls: ['./ids-toggle-button.component.css']
    })
], IdsToggleButtonComponent);
export { IdsToggleButtonComponent };
//# sourceMappingURL=ids-toggle-button.component.js.map