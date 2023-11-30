import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-fieldset-routing.module';
let IdsFieldsetComponent = class IdsFieldsetComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngOnInit() {
        console.log('IdsFieldset OnInit');
    }
};
IdsFieldsetComponent = __decorate([
    Component({
        selector: 'app-ids-fieldset',
        templateUrl: './ids-fieldset.component.html',
        styleUrls: ['./ids-fieldset.component.css']
    })
], IdsFieldsetComponent);
export { IdsFieldsetComponent };
//# sourceMappingURL=ids-fieldset.component.js.map