import { __decorate } from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
import { routes } from './ids-pager-routing.module';
let IdsPagerComponent = class IdsPagerComponent {
    constructor(router) {
        this.router = router;
        this.routes = routes.filter(r => r.path !== '');
        this.columns = [];
    }
    ngAfterViewInit() {
        console.log('Ids Pager init');
    }
};
__decorate([
    ViewChild('table', { read: ElementRef })
], IdsPagerComponent.prototype, "table", void 0);
IdsPagerComponent = __decorate([
    Component({
        selector: 'app-ids-pager',
        templateUrl: './ids-pager.component.html',
        styleUrls: ['./ids-pager.component.css']
    })
], IdsPagerComponent);
export { IdsPagerComponent };
//# sourceMappingURL=ids-pager.component.js.map