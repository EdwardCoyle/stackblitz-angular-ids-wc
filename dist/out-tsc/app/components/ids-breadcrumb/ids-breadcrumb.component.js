import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-breadcrumb-routing.module';
let IdsBreadcrumbComponent = class IdsBreadcrumbComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Breadcrumd init');
    }
};
IdsBreadcrumbComponent = __decorate([
    Component({
        selector: 'app-ids-breadcrumb',
        templateUrl: './ids-breadcrumb.component.html',
        styleUrls: ['./ids-breadcrumb.component.css']
    })
], IdsBreadcrumbComponent);
export { IdsBreadcrumbComponent };
//# sourceMappingURL=ids-breadcrumb.component.js.map