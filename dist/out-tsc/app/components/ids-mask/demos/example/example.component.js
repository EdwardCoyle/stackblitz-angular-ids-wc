import { __decorate } from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
let ExampleComponent = class ExampleComponent {
    constructor() { }
    ngOnInit() {
        console.log('IdsMask example OnInit');
    }
    ngAfterViewInit() {
        // Phone Number Input - standard pattern mask
        this.maskPhoneNumber.nativeElement.mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        // Date Input - use `date` string to pre-configure the internal Date Mask
        this.maskDate.nativeElement.mask = 'date';
        this.maskDate.nativeElement.maskOptions = {
            format: 'M/d/yyyy hh:mm a'
        };
        // Number Input - use `number` string to pre-configure the internal Number Mask
        this.maskNumber.nativeElement.mask = 'number';
        this.maskNumber.nativeElement.maskOptions = {
            allowDecimal: true,
            allowNegative: true,
            allowThousandsSeparator: true,
            decimalLimit: 2,
            integerLimit: 7
        };
    }
};
__decorate([
    ViewChild('maskPhoneNumber', { read: ElementRef })
], ExampleComponent.prototype, "maskPhoneNumber", void 0);
__decorate([
    ViewChild('maskDate', { read: ElementRef })
], ExampleComponent.prototype, "maskDate", void 0);
__decorate([
    ViewChild('maskNumber', { read: ElementRef })
], ExampleComponent.prototype, "maskNumber", void 0);
ExampleComponent = __decorate([
    Component({
        selector: 'app-example',
        templateUrl: './example.component.html',
        styleUrls: ['./example.component.css']
    })
], ExampleComponent);
export { ExampleComponent };
//# sourceMappingURL=example.component.js.map