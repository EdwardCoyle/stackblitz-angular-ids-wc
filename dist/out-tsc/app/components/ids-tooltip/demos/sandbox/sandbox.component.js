import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
let SandboxComponent = class SandboxComponent {
    constructor() { }
    ngOnInit() {
        console.log('sandbox init');
    }
};
SandboxComponent = __decorate([
    Component({
        selector: 'app-sandbox',
        templateUrl: './sandbox.component.html',
        styleUrls: ['./sandbox.component.css'],
        encapsulation: ViewEncapsulation.None
    })
], SandboxComponent);
export { SandboxComponent };
//# sourceMappingURL=sandbox.component.js.map