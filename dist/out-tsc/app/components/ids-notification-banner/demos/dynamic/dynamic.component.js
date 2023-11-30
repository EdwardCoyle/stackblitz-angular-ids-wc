import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DynamicComponent = class DynamicComponent {
    constructor() { }
    ngOnInit() {
        console.log('dynamic init');
    }
};
DynamicComponent = __decorate([
    Component({
        selector: 'app-dynamic',
        templateUrl: './dynamic.component.html',
        styleUrls: ['./dynamic.component.css']
    })
], DynamicComponent);
export { DynamicComponent };
//# sourceMappingURL=dynamic.component.js.map