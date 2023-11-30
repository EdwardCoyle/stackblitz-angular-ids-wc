import { __decorate } from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
import bikesJSON from '../../../../../api/bikes.json';
let SelectionMultipleComponent = class SelectionMultipleComponent {
    constructor() { }
    ngAfterViewInit() {
        this.listBuilder.nativeElement.defaultTemplate = '<ids-text font-size="16" type="span">${manufacturerName}</ids-text>';
        this.listBuilder.nativeElement.data = bikesJSON;
    }
};
__decorate([
    ViewChild('listBuilder', { read: ElementRef })
], SelectionMultipleComponent.prototype, "listBuilder", void 0);
SelectionMultipleComponent = __decorate([
    Component({
        selector: 'app-selection-multiple',
        templateUrl: './selection-multiple.component.html',
        styleUrls: ['./selection-multiple.component.css']
    })
], SelectionMultipleComponent);
export { SelectionMultipleComponent };
//# sourceMappingURL=selection-multiple.component.js.map