import { __decorate } from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
let ExampleFooterComponent = class ExampleFooterComponent {
    constructor() { }
    ngOnInit() {
        console.log('example init');
    }
    ngAfterViewInit() {
        this.appMenuDrawer.nativeElement.target = this.appMenuTriggerBtn.nativeElement;
    }
    disableTriggerButton() {
        this.disabled = true;
    }
    enableTriggerButton() {
        this.disabled = false;
    }
    handleSelected(e) {
        console.info(`Header "${e.target.textContent.trim()}" was selected.`);
    }
};
__decorate([
    ViewChild('appMenuDrawer', { read: ElementRef })
], ExampleFooterComponent.prototype, "appMenuDrawer", void 0);
__decorate([
    ViewChild('appMenuTriggerBtn', { read: ElementRef })
], ExampleFooterComponent.prototype, "appMenuTriggerBtn", void 0);
ExampleFooterComponent = __decorate([
    Component({
        selector: 'app-example-footer',
        templateUrl: './example-footer.component.html',
        styleUrls: ['./example-footer.component.css']
    })
], ExampleFooterComponent);
export { ExampleFooterComponent };
//# sourceMappingURL=example-footer.component.js.map