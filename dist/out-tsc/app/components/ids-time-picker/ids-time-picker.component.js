import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-time-picker-routing.module';
let IdsTimePickerComponent = class IdsTimePickerComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Time Picker init');
    }
};
IdsTimePickerComponent = __decorate([
    Component({
        selector: 'app-ids-time-picker',
        templateUrl: './ids-time-picker.component.html',
        styleUrls: ['./ids-time-picker.component.css']
    })
], IdsTimePickerComponent);
export { IdsTimePickerComponent };
//# sourceMappingURL=ids-time-picker.component.js.map