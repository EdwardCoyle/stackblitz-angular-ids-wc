import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-spinbox-routing.module';
let IdsSpinboxComponent = class IdsSpinboxComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Spinbox init');
    }
};
IdsSpinboxComponent = __decorate([
    Component({
        selector: 'app-ids-spinbox',
        templateUrl: './ids-spinbox.component.html',
        styleUrls: ['./ids-spinbox.component.css']
    })
], IdsSpinboxComponent);
export { IdsSpinboxComponent };
//# sourceMappingURL=ids-spinbox.component.js.map