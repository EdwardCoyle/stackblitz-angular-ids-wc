import { __decorate } from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
import { routes } from './ids-list-view-routing.module';
let IdsListViewComponent = class IdsListViewComponent {
    constructor(router) {
        this.router = router;
        this.routes = routes.filter(r => r.path !== '');
        this.columns = [];
    }
    ngAfterViewInit() {
        console.log('Ids List View init');
    }
};
__decorate([
    ViewChild('table', { read: ElementRef })
], IdsListViewComponent.prototype, "table", void 0);
IdsListViewComponent = __decorate([
    Component({
        selector: 'app-ids-list-view',
        templateUrl: './ids-list-view.component.html',
        styleUrls: ['./ids-list-view.component.css']
    })
], IdsListViewComponent);
export { IdsListViewComponent };
//# sourceMappingURL=ids-list-view.component.js.map