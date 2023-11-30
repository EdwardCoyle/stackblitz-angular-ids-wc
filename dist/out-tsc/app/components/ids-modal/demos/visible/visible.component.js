import { __decorate } from "tslib";
import { Component } from '@angular/core';
let VisibleComponent = class VisibleComponent {
    constructor() { }
    ngOnInit() {
        console.log('visible init');
    }
};
VisibleComponent = __decorate([
    Component({
        selector: 'app-visible',
        templateUrl: './visible.component.html',
        styleUrls: ['./visible.component.css']
    })
], VisibleComponent);
export { VisibleComponent };
//# sourceMappingURL=visible.component.js.map