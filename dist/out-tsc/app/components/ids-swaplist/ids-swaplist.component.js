import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-swaplist-routing.module';
let IdsSwaplistComponent = class IdsSwaplistComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
        this.columns = [];
    }
    ngAfterViewInit() {
        console.log('Ids Swaplist init');
    }
};
IdsSwaplistComponent = __decorate([
    Component({
        selector: 'app-ids-swaplist',
        templateUrl: './ids-swaplist.component.html',
        styleUrls: ['./ids-swaplist.component.css']
    })
], IdsSwaplistComponent);
export { IdsSwaplistComponent };
//# sourceMappingURL=ids-swaplist.component.js.map