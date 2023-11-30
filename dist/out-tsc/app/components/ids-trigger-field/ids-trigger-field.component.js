import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-trigger-field-routing.module';
let IdsTriggerFieldComponent = class IdsTriggerFieldComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Trigger Field init');
    }
};
IdsTriggerFieldComponent = __decorate([
    Component({
        selector: 'app-ids-trigger-field',
        templateUrl: './ids-trigger-field.component.html',
        styleUrls: ['./ids-trigger-field.component.css']
    })
], IdsTriggerFieldComponent);
export { IdsTriggerFieldComponent };
//# sourceMappingURL=ids-trigger-field.component.js.map