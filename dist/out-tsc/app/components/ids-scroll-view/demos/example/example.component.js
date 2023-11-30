import { __decorate } from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
let ExampleComponent = class ExampleComponent {
    constructor(router) {
        this.router = router;
    }
    ngAfterViewInit() {
        console.log('IdsScrollView AfterViewInit');
    }
};
__decorate([
    ViewChild('scrollview', { read: ElementRef })
], ExampleComponent.prototype, "scrollview", void 0);
ExampleComponent = __decorate([
    Component({
        selector: 'app-example',
        templateUrl: './example.component.html',
        styleUrls: ['./example.component.css']
    })
], ExampleComponent);
export { ExampleComponent };
//# sourceMappingURL=example.component.js.map