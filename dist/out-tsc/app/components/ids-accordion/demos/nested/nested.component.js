import { __decorate } from "tslib";
import { Component } from '@angular/core';
let NestedComponent = class NestedComponent {
    constructor() { }
    ngOnInit() {
        console.log('nested init');
    }
};
NestedComponent = __decorate([
    Component({
        selector: 'app-nested',
        templateUrl: './nested.component.html',
        styleUrls: ['./nested.component.css']
    })
], NestedComponent);
export { NestedComponent };
//# sourceMappingURL=nested.component.js.map