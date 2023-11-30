import { __decorate } from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
import products100JSON from '../../../../../api/products-100.json';
let SelectableMultipleComponent = class SelectableMultipleComponent {
    constructor() {
        this.template = '<ids-text font-size="16" type="h2">${productName}</ids-text><ids-text font-size="12" type="span">Count: ${units}</ids-text><ids-text font-size="12" type="span">Price: $ ${unitPrice}</ids-text>';
    }
    ngAfterViewInit() {
        this.listView.nativeElement.defaultTemplate = this.template;
        this.listView.nativeElement.data = products100JSON;
    }
};
__decorate([
    ViewChild('listView', { read: ElementRef })
], SelectableMultipleComponent.prototype, "listView", void 0);
SelectableMultipleComponent = __decorate([
    Component({
        selector: 'app-selectable-multiple',
        templateUrl: './selectable-multiple.component.html',
        styleUrls: ['./selectable-multiple.component.css']
    })
], SelectableMultipleComponent);
export { SelectableMultipleComponent };
//# sourceMappingURL=selectable-multiple.component.js.map