import { __decorate } from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
import products100JSON from '../../../../../api/products-100.json';
let SelectableSingleComponent = class SelectableSingleComponent {
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
], SelectableSingleComponent.prototype, "listView", void 0);
SelectableSingleComponent = __decorate([
    Component({
        selector: 'app-selectable-single',
        templateUrl: './selectable-single.component.html',
        styleUrls: ['./selectable-single.component.css']
    })
], SelectableSingleComponent);
export { SelectableSingleComponent };
//# sourceMappingURL=selectable-single.component.js.map