import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-checkbox-routing.module';
let IdsCheckboxComponent = class IdsCheckboxComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Checkbox init');
    }
};
IdsCheckboxComponent = __decorate([
    Component({
        selector: 'app-ids-checkbox',
        templateUrl: './ids-checkbox.component.html',
        styleUrls: ['./ids-checkbox.component.css']
    })
], IdsCheckboxComponent);
export { IdsCheckboxComponent };
//# sourceMappingURL=ids-checkbox.component.js.map