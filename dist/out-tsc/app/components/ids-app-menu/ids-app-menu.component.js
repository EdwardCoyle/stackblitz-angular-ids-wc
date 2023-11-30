import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-app-menu-routing.module';
let IdsAppMenuComponent = class IdsAppMenuComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids App Menu init');
    }
};
IdsAppMenuComponent = __decorate([
    Component({
        selector: 'app-ids-app-menu',
        templateUrl: './ids-app-menu.component.html',
        styleUrls: ['./ids-app-menu.component.css']
    })
], IdsAppMenuComponent);
export { IdsAppMenuComponent };
//# sourceMappingURL=ids-app-menu.component.js.map