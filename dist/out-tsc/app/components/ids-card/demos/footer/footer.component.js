import { __decorate } from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
let FooterComponent = class FooterComponent {
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
], FooterComponent.prototype, "listView", void 0);
FooterComponent = __decorate([
    Component({
        selector: 'app-footer',
        templateUrl: './footer.component.html',
        styleUrls: ['./footer.component.css']
    })
], FooterComponent);
export { FooterComponent };
//# sourceMappingURL=footer.component.js.map