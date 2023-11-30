import { __decorate } from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
import eventsJSON from '../../../../../api/events.json';
let ExampleComponent = class ExampleComponent {
    constructor() {
        this.template = '<ids-text font-size="16" type="h2">${subject}</ids-text><ids-text font-size="12" type="span">ID: ${id}</ids-text><ids-text font-size="12" type="span">Comments: ${comments}</ids-text>';
    }
    ngAfterViewInit() {
        this.listView.nativeElement.defaultTemplate = this.template;
        this.listView.nativeElement.data = eventsJSON;
    }
};
__decorate([
    ViewChild('listView', { read: ElementRef })
], ExampleComponent.prototype, "listView", void 0);
ExampleComponent = __decorate([
    Component({
        selector: 'app-example',
        templateUrl: './example.component.html',
        styleUrls: ['./example.component.css']
    })
], ExampleComponent);
export { ExampleComponent };
//# sourceMappingURL=example.component.js.map