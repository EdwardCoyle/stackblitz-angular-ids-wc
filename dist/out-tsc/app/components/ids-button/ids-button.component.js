import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-button-routing.module';
let IdsButtonComponent = class IdsButtonComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Button init');
    }
};
IdsButtonComponent = __decorate([
    Component({
        selector: 'app-ids-button',
        templateUrl: './ids-button.component.html',
        styleUrls: ['./ids-button.component.css']
    })
], IdsButtonComponent);
export { IdsButtonComponent };
//# sourceMappingURL=ids-button.component.js.map