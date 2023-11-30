import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-virtual-scroll-routing.module';
let IdsVirtualScrollComponent = class IdsVirtualScrollComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Virtual Scroll init');
    }
};
IdsVirtualScrollComponent = __decorate([
    Component({
        selector: 'app-ids-virtual-scroll',
        templateUrl: './ids-virtual-scroll.component.html',
        styleUrls: ['./ids-virtual-scroll.component.css']
    })
], IdsVirtualScrollComponent);
export { IdsVirtualScrollComponent };
//# sourceMappingURL=ids-virtual-scroll.component.js.map