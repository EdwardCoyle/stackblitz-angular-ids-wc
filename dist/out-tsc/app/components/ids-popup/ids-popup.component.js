import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-popup-routing.module';
let IdsPopupComponent = class IdsPopupComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Popup init');
    }
};
IdsPopupComponent = __decorate([
    Component({
        selector: 'app-ids-popup',
        templateUrl: './ids-popup.component.html',
        styleUrls: ['./ids-popup.component.css']
    })
], IdsPopupComponent);
export { IdsPopupComponent };
//# sourceMappingURL=ids-popup.component.js.map