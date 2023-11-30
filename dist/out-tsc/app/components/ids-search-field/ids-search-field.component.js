import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-search-field-routing.module';
let IdsSearchFieldComponent = class IdsSearchFieldComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Search Field init');
    }
};
IdsSearchFieldComponent = __decorate([
    Component({
        selector: 'app-ids-search-field',
        templateUrl: './ids-search-field.component.html',
        styleUrls: ['./ids-search-field.component.css']
    })
], IdsSearchFieldComponent);
export { IdsSearchFieldComponent };
//# sourceMappingURL=ids-search-field.component.js.map