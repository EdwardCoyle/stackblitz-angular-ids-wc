import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-progress-bar-routing.module';
let IdsProgressBarComponent = class IdsProgressBarComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Progress init');
    }
};
IdsProgressBarComponent = __decorate([
    Component({
        selector: 'app-ids-progress-bar',
        templateUrl: './ids-progress-bar.component.html',
        styleUrls: ['./ids-progress-bar.component.css']
    })
], IdsProgressBarComponent);
export { IdsProgressBarComponent };
//# sourceMappingURL=ids-progress-bar.component.js.map