import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-input-routing.module';
let IdsInputComponent = class IdsInputComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Input init');
    }
};
IdsInputComponent = __decorate([
    Component({
        selector: 'app-ids-input',
        templateUrl: './ids-input.component.html',
        styleUrls: ['./ids-input.component.css']
    })
], IdsInputComponent);
export { IdsInputComponent };
//# sourceMappingURL=ids-input.component.js.map