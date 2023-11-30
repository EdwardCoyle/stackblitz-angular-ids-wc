import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-multiselect-routing.module';
let IdsMultiselectComponent = class IdsMultiselectComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Multiselect init');
    }
};
IdsMultiselectComponent = __decorate([
    Component({
        selector: 'app-ids-multiselect',
        templateUrl: './ids-multiselect.component.html',
        styleUrls: ['./ids-multiselect.component.css']
    })
], IdsMultiselectComponent);
export { IdsMultiselectComponent };
//# sourceMappingURL=ids-multiselect.component.js.map