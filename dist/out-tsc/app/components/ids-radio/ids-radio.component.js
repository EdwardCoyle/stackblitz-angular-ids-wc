import { __decorate } from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
import { routes } from './ids-radio-routing.module';
let IdsRadioComponent = class IdsRadioComponent {
    constructor(router) {
        this.router = router;
        this.routes = routes.filter(r => r.path !== '');
        this.columns = [];
    }
    ngAfterViewInit() {
        console.log('Ids Radio init');
    }
};
__decorate([
    ViewChild('table', { read: ElementRef })
], IdsRadioComponent.prototype, "table", void 0);
IdsRadioComponent = __decorate([
    Component({
        selector: 'app-ids-radio',
        templateUrl: './ids-radio.component.html',
        styleUrls: ['./ids-radio.component.css']
    })
], IdsRadioComponent);
export { IdsRadioComponent };
//# sourceMappingURL=ids-radio.component.js.map