import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-container-routing.module';
let IdsContainerComponent = class IdsContainerComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('IdsContainer AfterViewInit');
    }
};
IdsContainerComponent = __decorate([
    Component({
        selector: 'app-ids-container',
        templateUrl: './ids-container.component.html',
        styleUrls: ['./ids-container.component.css']
    })
], IdsContainerComponent);
export { IdsContainerComponent };
//# sourceMappingURL=ids-container.component.js.map