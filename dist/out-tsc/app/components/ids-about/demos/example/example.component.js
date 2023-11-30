import { __decorate } from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
let ExampleComponent = class ExampleComponent {
    constructor() { }
    ngAfterViewInit() {
        console.log('example AfterViewInit');
    }
    handleShow() {
        this.aboutModal.nativeElement.show();
    }
};
__decorate([
    ViewChild('aboutModal', { read: ElementRef })
], ExampleComponent.prototype, "aboutModal", void 0);
ExampleComponent = __decorate([
    Component({
        selector: 'app-example',
        templateUrl: './example.component.html',
        styleUrls: ['./example.component.css']
    })
], ExampleComponent);
export { ExampleComponent };
//# sourceMappingURL=example.component.js.map