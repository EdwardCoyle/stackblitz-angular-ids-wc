import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-theme-switcher-routing.module';
let IdsThemeSwitcherComponent = class IdsThemeSwitcherComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Theme init');
    }
};
IdsThemeSwitcherComponent = __decorate([
    Component({
        selector: 'app-ids-theme-switcher',
        templateUrl: './ids-theme-switcher.component.html',
        styleUrls: ['./ids-theme-switcher.component.css']
    })
], IdsThemeSwitcherComponent);
export { IdsThemeSwitcherComponent };
//# sourceMappingURL=ids-theme-switcher.component.js.map