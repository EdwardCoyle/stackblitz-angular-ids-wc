import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ExampleComponent = class ExampleComponent {
    constructor() { }
    ngAfterViewInit() {
        console.log('after view init');
    }
    handleClick(e) {
        this.visible = !this.visible;
    }
};
ExampleComponent = __decorate([
    Component({
        selector: 'app-example',
        templateUrl: './example.component.html',
        styleUrls: ['./example.component.css']
    })
], ExampleComponent);
export { ExampleComponent };
//# sourceMappingURL=example.component.js.map