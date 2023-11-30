import { __decorate } from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
let GuidesComponent = class GuidesComponent {
    constructor() {
        this.mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    }
    ngOnInit() {
        console.log('IdsMask guides OnInit');
    }
    ngAfterViewInit() {
        // Phone Number Input with guides
        this.maskPhoneNumberGuides.nativeElement.maskGuide = true;
        this.maskPhoneNumberGuides.nativeElement.mask = this.mask;
        // Phone Number Input retaining original character positions when field contents are removed.
        this.maskPhoneNumberPositions.nativeElement.maskRetainPositions = true;
        this.maskPhoneNumberPositions.nativeElement.mask = this.mask;
        // Phone Number Input that combines both settings.
        this.maskPhoneNumberBoth.nativeElement.maskGuide = true;
        this.maskPhoneNumberBoth.nativeElement.maskRetainPositions = true;
        this.maskPhoneNumberBoth.nativeElement.mask = this.mask;
    }
};
__decorate([
    ViewChild('maskPhoneNumberGuides', { read: ElementRef })
], GuidesComponent.prototype, "maskPhoneNumberGuides", void 0);
__decorate([
    ViewChild('maskPhoneNumberPositions', { read: ElementRef })
], GuidesComponent.prototype, "maskPhoneNumberPositions", void 0);
__decorate([
    ViewChild('maskPhoneNumberBoth', { read: ElementRef })
], GuidesComponent.prototype, "maskPhoneNumberBoth", void 0);
GuidesComponent = __decorate([
    Component({
        selector: 'app-guides',
        templateUrl: './guides.component.html',
        styleUrls: ['./guides.component.css']
    })
], GuidesComponent);
export { GuidesComponent };
//# sourceMappingURL=guides.component.js.map