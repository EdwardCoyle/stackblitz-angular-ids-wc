import { __decorate } from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
import { routes } from './ids-popup-menu-routing.module';
let IdsPopupMenuComponent = class IdsPopupMenuComponent {
    constructor(router) {
        this.router = router;
        this.routes = routes.filter(r => r.path !== '');
        this.columns = [];
    }
    ngAfterViewInit() {
        console.log('Ids Popup init');
    }
};
__decorate([
    ViewChild('table', { read: ElementRef })
], IdsPopupMenuComponent.prototype, "table", void 0);
IdsPopupMenuComponent = __decorate([
    Component({
        selector: 'app-ids-popup-menu',
        templateUrl: './ids-popup-menu.component.html',
        styleUrls: ['./ids-popup-menu.component.css']
    })
], IdsPopupMenuComponent);
export { IdsPopupMenuComponent };
//# sourceMappingURL=ids-popup-menu.component.js.map