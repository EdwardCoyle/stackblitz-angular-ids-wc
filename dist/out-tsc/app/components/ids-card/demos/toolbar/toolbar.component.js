import { __decorate } from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
let ToolbarComponent = class ToolbarComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngAfterViewInit() {
        this.listView.nativeElement.defaultTemplate = '<ids-text font-size="16" type="h2">${subject}</ids-text><ids-text font-size="12" type="span">Comments: ${comments}</ids-text>';
        this.dataService.getJsonData('events')
            .subscribe(res => {
            this.listView.nativeElement.data = res;
        });
    }
};
__decorate([
    ViewChild('listView', { read: ElementRef })
], ToolbarComponent.prototype, "listView", void 0);
ToolbarComponent = __decorate([
    Component({
        selector: 'app-toolbar',
        templateUrl: './toolbar.component.html',
        styleUrls: ['./toolbar.component.css']
    })
], ToolbarComponent);
export { ToolbarComponent };
//# sourceMappingURL=toolbar.component.js.map