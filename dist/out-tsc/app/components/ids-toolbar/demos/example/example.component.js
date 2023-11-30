import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
let ExampleComponent = class ExampleComponent {
    constructor() { }
    ngOnInit() {
        console.log('example init');
    }
};
ExampleComponent = __decorate([
    Component({
        selector: 'app-toolbar-example',
        templateUrl: './example.component.html',
        styleUrls: ['./example.component.css'],
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ExampleComponent);
export { ExampleComponent };
//# sourceMappingURL=example.component.js.map