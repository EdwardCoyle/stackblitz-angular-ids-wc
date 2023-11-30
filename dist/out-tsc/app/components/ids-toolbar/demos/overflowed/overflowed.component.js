import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
let OverflowedComponent = class OverflowedComponent {
    constructor() { }
    ngOnInit() {
        console.log('overflow init');
    }
};
OverflowedComponent = __decorate([
    Component({
        selector: 'app-toolbar-overflow-example',
        templateUrl: './overflowed.component.html',
        styleUrls: ['./overflowed.component.css'],
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], OverflowedComponent);
export { OverflowedComponent };
//# sourceMappingURL=overflowed.component.js.map