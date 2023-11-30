import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-lookup-routing.module';
let IdsLookupComponent = class IdsLookupComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Lookup init');
    }
};
IdsLookupComponent = __decorate([
    Component({
        selector: 'app-ids-lookup',
        templateUrl: './ids-lookup.component.html',
        styleUrls: ['./ids-lookup.component.css']
    })
], IdsLookupComponent);
export { IdsLookupComponent };
//# sourceMappingURL=ids-lookup.component.js.map