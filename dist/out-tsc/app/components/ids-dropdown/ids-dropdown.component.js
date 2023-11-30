import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-dropdown-routing.module';
let IdsDropdownComponent = class IdsDropdownComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Dropdown init');
    }
};
IdsDropdownComponent = __decorate([
    Component({
        selector: 'app-ids-dropdown',
        templateUrl: './ids-dropdown.component.html',
        styleUrls: ['./ids-dropdown.component.css']
    })
], IdsDropdownComponent);
export { IdsDropdownComponent };
//# sourceMappingURL=ids-dropdown.component.js.map