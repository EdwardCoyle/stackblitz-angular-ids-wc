import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-mask-routing.module';
let IdsMaskComponent = class IdsMaskComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Mask init');
    }
};
IdsMaskComponent = __decorate([
    Component({
        selector: 'app-ids-mask',
        templateUrl: './ids-mask.component.html',
        styleUrls: ['./ids-mask.component.css']
    })
], IdsMaskComponent);
export { IdsMaskComponent };
//# sourceMappingURL=ids-mask.component.js.map