import { __decorate } from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
import bikesJSON from '../../../../../api/bikes.json';
let ExampleComponent = class ExampleComponent {
    constructor() { }
    ngAfterViewInit() {
        this.listBuilder.nativeElement.defaultTemplate = '<ids-text font-size="16" type="span">${manufacturerName}</ids-text>';
        this.listBuilder.nativeElement.data = bikesJSON;
    }
};
__decorate([
    ViewChild('listBuilder', { read: ElementRef })
], ExampleComponent.prototype, "listBuilder", void 0);
ExampleComponent = __decorate([
    Component({
        selector: 'app-example',
        templateUrl: './example.component.html',
        styleUrls: ['./example.component.css']
    })
], ExampleComponent);
export { ExampleComponent };
//# sourceMappingURL=example.component.js.map