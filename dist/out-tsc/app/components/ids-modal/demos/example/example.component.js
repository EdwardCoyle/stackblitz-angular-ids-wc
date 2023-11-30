import { __decorate } from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
let ExampleComponent = class ExampleComponent {
    constructor() { }
    ngAfterViewInit() {
        console.log('example init');
    }
    handleShow() {
        this.modal.nativeElement.show();
    }
};
__decorate([
    ViewChild('modal', { read: ElementRef })
], ExampleComponent.prototype, "modal", void 0);
ExampleComponent = __decorate([
    Component({
        selector: 'app-example',
        templateUrl: './example.component.html',
        styleUrls: ['./example.component.css']
    })
], ExampleComponent);
export { ExampleComponent };
//# sourceMappingURL=example.component.js.map