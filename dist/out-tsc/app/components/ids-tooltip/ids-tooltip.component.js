import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-tooltip-routing.module';
let IdsTooltipComponent = class IdsTooltipComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Tooltip init');
    }
};
IdsTooltipComponent = __decorate([
    Component({
        selector: 'app-ids-tooltip',
        templateUrl: './ids-tooltip.component.html',
        styleUrls: ['./ids-tooltip.component.css']
    })
], IdsTooltipComponent);
export { IdsTooltipComponent };
//# sourceMappingURL=ids-tooltip.component.js.map