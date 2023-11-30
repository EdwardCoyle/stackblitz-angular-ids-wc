import { __decorate } from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
import { routes } from './ids-scroll-view-routing.module';
let IdsScrollViewComponent = class IdsScrollViewComponent {
    constructor(router) {
        this.router = router;
        this.routes = routes.filter(r => r.path !== '');
        this.columns = [];
    }
    ngAfterViewInit() {
        console.log('Ids Scroll View init');
    }
};
__decorate([
    ViewChild('table', { read: ElementRef })
], IdsScrollViewComponent.prototype, "table", void 0);
IdsScrollViewComponent = __decorate([
    Component({
        selector: 'app-ids-scroll-view',
        templateUrl: './ids-scroll-view.component.html',
        styleUrls: ['./ids-scroll-view.component.css']
    })
], IdsScrollViewComponent);
export { IdsScrollViewComponent };
//# sourceMappingURL=ids-scroll-view.component.js.map