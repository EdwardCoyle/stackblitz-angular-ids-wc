import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-checkbox-group-routing.module';
let IdsCheckboxGroupComponent = class IdsCheckboxGroupComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Checkbox init');
    }
};
IdsCheckboxGroupComponent = __decorate([
    Component({
        selector: 'app-ids-checkbox-group',
        templateUrl: './ids-checkbox-group.component.html',
        styleUrls: ['./ids-checkbox-group.component.css']
    })
], IdsCheckboxGroupComponent);
export { IdsCheckboxGroupComponent };
//# sourceMappingURL=ids-checkbox-group.component.js.map