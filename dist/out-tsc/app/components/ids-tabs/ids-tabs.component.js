import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-tabs-routing.module';
let IdsTabsComponent = class IdsTabsComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Tabs init');
    }
};
IdsTabsComponent = __decorate([
    Component({
        selector: 'app-ids-tabs',
        templateUrl: './ids-tabs.component.html',
        styleUrls: ['./ids-tabs.component.css']
    })
], IdsTabsComponent);
export { IdsTabsComponent };
//# sourceMappingURL=ids-tabs.component.js.map