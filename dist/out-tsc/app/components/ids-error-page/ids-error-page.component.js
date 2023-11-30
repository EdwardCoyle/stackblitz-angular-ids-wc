import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-error-page-routing.module';
let IdsErrorPageComponent = class IdsErrorPageComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Error Page init');
    }
};
IdsErrorPageComponent = __decorate([
    Component({
        selector: 'app-ids-error-page',
        templateUrl: './ids-error-page.component.html',
        styleUrls: ['./ids-error-page.component.css']
    })
], IdsErrorPageComponent);
export { IdsErrorPageComponent };
//# sourceMappingURL=ids-error-page.component.js.map