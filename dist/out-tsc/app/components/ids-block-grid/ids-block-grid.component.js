import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-block-grid-routing.module';
let IdsBlockGridComponent = class IdsBlockGridComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('IdsBlockGridComponent AfterViewInit');
    }
};
IdsBlockGridComponent = __decorate([
    Component({
        selector: 'app-ids-block-grid',
        templateUrl: './ids-block-grid.component.html',
        styleUrls: ['./ids-block-grid.component.css']
    })
], IdsBlockGridComponent);
export { IdsBlockGridComponent };
//# sourceMappingURL=ids-block-grid.component.js.map