import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ExampleComponent = class ExampleComponent {
    constructor() {
        this.visible = false;
    }
    ngAfterViewInit() {
        console.log('popup AfterViewInit');
    }
    handleVisible() {
        this.visible = !this.visible;
    }
    ngOnDestroy() {
        console.log('destroy triggerbutton event');
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