import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-data-label-routing.module';
let IdsDataLabelComponent = class IdsDataLabelComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Data Label init');
    }
};
IdsDataLabelComponent = __decorate([
    Component({
        selector: 'app-ids-data-label',
        templateUrl: './ids-data-label.component.html',
        styleUrls: ['./ids-data-label.component.css']
    })
], IdsDataLabelComponent);
export { IdsDataLabelComponent };
//# sourceMappingURL=ids-data-label.component.js.map