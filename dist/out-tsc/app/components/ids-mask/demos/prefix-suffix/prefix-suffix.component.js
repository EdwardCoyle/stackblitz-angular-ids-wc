import { __decorate } from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
import { DIGITS_REGEX, EMPTY_STRING } from 'ids-enterprise-wc/components/ids-mask/ids-mask-common';
let PrefixSuffixComponent = class PrefixSuffixComponent {
    constructor() { }
    ngOnInit() {
        console.log('IdsMask prefix-suffix OnInit');
    }
    ngAfterViewInit() {
        // Masked field with a prefix
        this.maskPrefix.nativeElement.maskOptions = {
            prefix: '$'
        };
        this.maskPrefix.nativeElement.mask = (rawValue, opts) => {
            const totalDigits = rawValue.split(EMPTY_STRING).map(() => DIGITS_REGEX);
            return [opts.prefix, ...totalDigits];
        };
        // Masked field with a suffix
        this.maskSuffix.nativeElement.maskOptions = {
            suffix: '%'
        };
        this.maskSuffix.nativeElement.mask = (rawValue, opts) => {
            const totalDigits = rawValue.split(EMPTY_STRING).map(() => DIGITS_REGEX);
            return [...totalDigits, opts.suffix];
        };
    }
};
__decorate([
    ViewChild('maskPrefix', { read: ElementRef })
], PrefixSuffixComponent.prototype, "maskPrefix", void 0);
__decorate([
    ViewChild('maskSuffix', { read: ElementRef })
], PrefixSuffixComponent.prototype, "maskSuffix", void 0);
PrefixSuffixComponent = __decorate([
    Component({
        selector: 'app-prefix-suffix',
        templateUrl: './prefix-suffix.component.html',
        styleUrls: ['./prefix-suffix.component.css']
    })
], PrefixSuffixComponent);
export { PrefixSuffixComponent };
//# sourceMappingURL=prefix-suffix.component.js.map