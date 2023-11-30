import { __decorate } from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
import { routes } from './ids-loading-indicator-routing.module';
let IdsLoadingIndicatorComponent = class IdsLoadingIndicatorComponent {
    constructor(router) {
        this.router = router;
        this.routes = routes.filter(r => r.path !== '');
        this.columns = [];
    }
    ngAfterViewInit() {
        console.log('Ids Loading Indicator init');
    }
};
__decorate([
    ViewChild('table', { read: ElementRef })
], IdsLoadingIndicatorComponent.prototype, "table", void 0);
IdsLoadingIndicatorComponent = __decorate([
    Component({
        selector: 'app-ids-loading-indicator',
        templateUrl: './ids-loading-indicator.component.html',
        styleUrls: ['./ids-loading-indicator.component.css']
    })
], IdsLoadingIndicatorComponent);
export { IdsLoadingIndicatorComponent };
//# sourceMappingURL=ids-loading-indicator.component.js.map