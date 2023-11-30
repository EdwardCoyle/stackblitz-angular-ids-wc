import { __decorate } from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
let DisabledComponent = class DisabledComponent {
    constructor() { }
    ngOnInit() {
        console.log('ids-menu-button disabled OnInit');
    }
    ngAfterViewInit() {
        this.defaultOnOutsideClick = this.menuBtnEl.nativeElement.menuEl.onOutsideClick;
    }
    handleDisabledCheck(e) {
        this.disabled = e.target.checked;
    }
    handleForceMenuCheck(e) {
        const checked = e.target.checked;
        this.menuBtnEl.nativeElement.menuEl.keepOpen = checked;
        console.log(checked);
        if (checked) {
            this.menuBtnEl.nativeElement.menuEl.show();
            this.menuBtnEl.nativeElement.menuEl.onOutsideClick = () => { };
        }
        else {
            this.menuBtnEl.nativeElement.menuEl.onOutsideClick = this.defaultOnOutsideClick;
        }
    }
};
__decorate([
    ViewChild('menuBtnEl', { read: ElementRef })
], DisabledComponent.prototype, "menuBtnEl", void 0);
DisabledComponent = __decorate([
    Component({
        selector: 'app-disabled',
        templateUrl: './disabled.component.html',
        styleUrls: ['./disabled.component.css']
    })
], DisabledComponent);
export { DisabledComponent };
//# sourceMappingURL=disabled.component.js.map