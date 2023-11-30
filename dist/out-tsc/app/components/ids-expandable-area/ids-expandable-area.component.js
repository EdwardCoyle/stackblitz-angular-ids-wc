import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-expandable-area-routing.module';
let IdsExpandableAreaComponent = class IdsExpandableAreaComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('IdsExpandableArea AfterViewInit');
    }
};
IdsExpandableAreaComponent = __decorate([
    Component({
        selector: 'app-ids-expandable-area',
        templateUrl: './ids-expandable-area.component.html',
        styleUrls: ['./ids-expandable-area.component.css']
    })
], IdsExpandableAreaComponent);
export { IdsExpandableAreaComponent };
//# sourceMappingURL=ids-expandable-area.component.js.map