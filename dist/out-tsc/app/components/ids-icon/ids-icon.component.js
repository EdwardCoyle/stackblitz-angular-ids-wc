import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-icon-routing.module';
let IdsIconComponent = class IdsIconComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Icon init');
    }
};
IdsIconComponent = __decorate([
    Component({
        selector: 'app-ids-icon',
        templateUrl: './ids-icon.component.html',
        styleUrls: ['./ids-icon.component.css']
    })
], IdsIconComponent);
export { IdsIconComponent };
//# sourceMappingURL=ids-icon.component.js.map