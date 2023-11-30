import { __decorate } from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
let NumberLeadingZerosComponent = class NumberLeadingZerosComponent {
    constructor() { }
    ngOnInit() {
        console.log('IdsMask number-leading OnInit');
    }
    ngAfterViewInit() {
        this.maskNumber.nativeElement.mask = 'number';
        this.maskNumber.nativeElement.maskOptions = {
            allowDecimal: true,
            allowLeadingZeros: true,
            allowNegative: true,
            allowThousandsSeparator: true,
            decimalLimit: 2,
            integerLimit: 7
        };
    }
};
__decorate([
    ViewChild('maskNumber', { read: ElementRef })
], NumberLeadingZerosComponent.prototype, "maskNumber", void 0);
NumberLeadingZerosComponent = __decorate([
    Component({
        selector: 'app-number-leading-zeros',
        templateUrl: './number-leading-zeros.component.html',
        styleUrls: ['./number-leading-zeros.component.css']
    })
], NumberLeadingZerosComponent);
export { NumberLeadingZerosComponent };
//# sourceMappingURL=number-leading-zeros.component.js.map