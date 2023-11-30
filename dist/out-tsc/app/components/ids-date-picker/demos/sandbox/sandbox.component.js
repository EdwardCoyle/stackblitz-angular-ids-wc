import { __decorate } from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
let SandboxComponent = class SandboxComponent {
    constructor() { }
    ngAfterViewInit() {
        this.datePickerAvailable.nativeElement.disable = {
            dates: ['2/15/2010', '2/25/2010'],
            dayOfWeek: [0, 6]
        };
    }
};
__decorate([
    ViewChild('datePickerAvailable', { read: ElementRef })
], SandboxComponent.prototype, "datePickerAvailable", void 0);
SandboxComponent = __decorate([
    Component({
        selector: 'app-sandbox',
        templateUrl: './sandbox.component.html',
        styleUrls: ['./sandbox.component.css']
    })
], SandboxComponent);
export { SandboxComponent };
//# sourceMappingURL=sandbox.component.js.map