import { __decorate } from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
import { routes } from './ids-about-routing.module';
let IdsAboutComponent = class IdsAboutComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids About init');
    }
};
__decorate([
    ViewChild('table', { read: ElementRef })
], IdsAboutComponent.prototype, "table", void 0);
IdsAboutComponent = __decorate([
    Component({
        selector: 'app-ids-about',
        templateUrl: './ids-about.component.html',
        styleUrls: ['./ids-about.component.css']
    })
], IdsAboutComponent);
export { IdsAboutComponent };
//# sourceMappingURL=ids-about.component.js.map