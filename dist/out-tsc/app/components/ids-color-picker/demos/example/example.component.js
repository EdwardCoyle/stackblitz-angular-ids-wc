import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let ExampleComponent = class ExampleComponent {
    constructor() { }
    ngOnInit() {
        console.log('Ids Color Picker example init');
    }
};
__decorate([
    Input()
], ExampleComponent.prototype, "routes", void 0);
ExampleComponent = __decorate([
    Component({
        selector: 'app-example',
        templateUrl: './example.component.html',
        styleUrls: ['./example.component.css']
    })
], ExampleComponent);
export { ExampleComponent };
//# sourceMappingURL=example.component.js.map