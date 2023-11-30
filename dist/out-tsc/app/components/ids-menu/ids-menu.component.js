import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-menu-routing.module';
let IdsMenuComponent = class IdsMenuComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Menu init');
    }
};
IdsMenuComponent = __decorate([
    Component({
        selector: 'app-ids-menu',
        templateUrl: './ids-menu.component.html',
        styleUrls: ['./ids-menu.component.css']
    })
], IdsMenuComponent);
export { IdsMenuComponent };
//# sourceMappingURL=ids-menu.component.js.map