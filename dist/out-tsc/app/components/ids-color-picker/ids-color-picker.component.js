import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-color-picker-routing.module';
let IdsColorPickerComponent = class IdsColorPickerComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Color Picker init');
    }
};
IdsColorPickerComponent = __decorate([
    Component({
        selector: 'app-ids-color-picker',
        templateUrl: './ids-color-picker.component.html',
        styleUrls: ['./ids-color-picker.component.css']
    })
], IdsColorPickerComponent);
export { IdsColorPickerComponent };
//# sourceMappingURL=ids-color-picker.component.js.map