import { __decorate } from "tslib";
import { Component } from '@angular/core';
let TruncatedComponent = class TruncatedComponent {
    constructor() { }
    ngOnInit() {
        console.log('truncated init');
    }
};
TruncatedComponent = __decorate([
    Component({
        selector: 'app-truncated',
        templateUrl: './truncated.component.html',
        styleUrls: ['./truncated.component.css']
    })
], TruncatedComponent);
export { TruncatedComponent };
//# sourceMappingURL=truncated.component.js.map