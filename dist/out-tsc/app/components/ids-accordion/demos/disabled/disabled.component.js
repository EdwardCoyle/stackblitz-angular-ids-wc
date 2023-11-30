import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DisabledComponent = class DisabledComponent {
    constructor() { }
    ngOnInit() {
        console.log('disabled init');
    }
};
DisabledComponent = __decorate([
    Component({
        selector: 'app-disabled',
        templateUrl: './disabled.component.html',
        styleUrls: ['./disabled.component.css']
    })
], DisabledComponent);
export { DisabledComponent };
//# sourceMappingURL=disabled.component.js.map