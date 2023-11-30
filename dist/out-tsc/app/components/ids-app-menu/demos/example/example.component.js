import { __decorate } from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
let ExampleComponent = class ExampleComponent {
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
], ExampleComponent.prototype, "appMenuDrawer", void 0);
__decorate([
    ViewChild('appMenuTriggerBtn', { read: ElementRef })
], ExampleComponent.prototype, "appMenuTriggerBtn", void 0);
ExampleComponent = __decorate([
    Component({
        selector: 'app-example',
        templateUrl: './example.component.html',
        styleUrls: ['./example.component.css']
    })
], ExampleComponent);
export { ExampleComponent };
//# sourceMappingURL=example.component.js.map