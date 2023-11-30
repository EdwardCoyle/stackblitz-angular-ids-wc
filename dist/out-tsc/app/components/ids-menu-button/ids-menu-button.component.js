import { __decorate } from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
import { routes } from './ids-menu-button-routing.module';
let IdsMenuButtonComponent = class IdsMenuButtonComponent {
    constructor(router) {
        this.router = router;
        this.routes = routes.filter(r => r.path !== '');
        this.columns = [];
    }
    ngAfterViewInit() {
        console.log('Ids Menu init');
    }
};
__decorate([
    ViewChild('table', { read: ElementRef })
], IdsMenuButtonComponent.prototype, "table", void 0);
IdsMenuButtonComponent = __decorate([
    Component({
        selector: 'app-ids-menu-button',
        templateUrl: './ids-menu-button.component.html',
        styleUrls: ['./ids-menu-button.component.css']
    })
], IdsMenuButtonComponent);
export { IdsMenuButtonComponent };
//# sourceMappingURL=ids-menu-button.component.js.map