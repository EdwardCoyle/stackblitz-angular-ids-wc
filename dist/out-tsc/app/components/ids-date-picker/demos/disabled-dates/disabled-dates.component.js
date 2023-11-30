import { __decorate } from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
let DisabledDatesComponent = class DisabledDatesComponent {
    constructor() { }
    ngAfterViewInit() {
        this.disabledDates.nativeElement.disable = {
            dates: ['6/9/2015', '6/12/2015'],
            dayOfWeek: [0, 6]
        };
        this.disabledYears.nativeElement.disable = {
            years: [2019, 2021, 2030, 2034]
        };
        this.disabledMinMax.nativeElement.disable = {
            minDate: '6/3/2020',
            maxDate: '6/25/2020'
        };
        this.disabledReverse.nativeElement.disable = {
            minDate: '6/3/2020',
            maxDate: '6/25/2020',
            isEnable: true
        };
    }
};
__decorate([
    ViewChild('disabledDates', { read: ElementRef })
], DisabledDatesComponent.prototype, "disabledDates", void 0);
__decorate([
    ViewChild('disabledYears', { read: ElementRef })
], DisabledDatesComponent.prototype, "disabledYears", void 0);
__decorate([
    ViewChild('disabledMinMax', { read: ElementRef })
], DisabledDatesComponent.prototype, "disabledMinMax", void 0);
__decorate([
    ViewChild('disabledReverse', { read: ElementRef })
], DisabledDatesComponent.prototype, "disabledReverse", void 0);
DisabledDatesComponent = __decorate([
    Component({
        selector: 'app-disabled-dates',
        templateUrl: './disabled-dates.component.html',
        styleUrls: ['./disabled-dates.component.css']
    })
], DisabledDatesComponent);
export { DisabledDatesComponent };
//# sourceMappingURL=disabled-dates.component.js.map