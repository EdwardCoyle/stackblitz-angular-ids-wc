import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-date-picker-routing.module';
let IdsDatePickerComponent = class IdsDatePickerComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Date Picker init');
    }
};
IdsDatePickerComponent = __decorate([
    Component({
        selector: 'app-ids-date-picker',
        templateUrl: './ids-date-picker.component.html',
        styleUrls: ['./ids-date-picker.component.css']
    })
], IdsDatePickerComponent);
export { IdsDatePickerComponent };
//# sourceMappingURL=ids-date-picker.component.js.map