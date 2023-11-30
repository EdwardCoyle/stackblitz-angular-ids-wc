import { __decorate } from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
let SandboxComponent = class SandboxComponent {
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
], SandboxComponent.prototype, "appMenuDrawer", void 0);
__decorate([
    ViewChild('appMenuTriggerBtn', { read: ElementRef })
], SandboxComponent.prototype, "appMenuTriggerBtn", void 0);
SandboxComponent = __decorate([
    Component({
        selector: 'app-sandbox',
        templateUrl: './sandbox.component.html',
        styleUrls: ['./sandbox.component.css']
    })
], SandboxComponent);
export { SandboxComponent };
//# sourceMappingURL=sandbox.component.js.map