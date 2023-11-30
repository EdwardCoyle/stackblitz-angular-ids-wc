import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ModuleComponent = class ModuleComponent {
    constructor() { }
    ngOnInit() {
        console.log('module init');
    }
};
ModuleComponent = __decorate([
    Component({
        selector: 'app-module',
        templateUrl: './module.component.html',
        styleUrls: ['./module.component.css']
    })
], ModuleComponent);
export { ModuleComponent };
//# sourceMappingURL=module.component.js.map