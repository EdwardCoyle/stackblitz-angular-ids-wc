import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-data-grid-routing.module';
let IdsDataGridComponent = class IdsDataGridComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('IdsDataGrid AfterViewInit');
    }
};
IdsDataGridComponent = __decorate([
    Component({
        selector: 'app-ids-data-grid',
        templateUrl: './ids-data-grid.component.html',
        styleUrls: ['./ids-data-grid.component.css']
    })
], IdsDataGridComponent);
export { IdsDataGridComponent };
//# sourceMappingURL=ids-data-grid.component.js.map