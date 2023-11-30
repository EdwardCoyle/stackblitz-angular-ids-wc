import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-accordion-routing.module';
let IdsAccordionComponent = class IdsAccordionComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
        this.columns = [];
    }
    ngAfterViewInit() {
        console.log('Ids Accordion init');
    }
};
IdsAccordionComponent = __decorate([
    Component({
        selector: 'app-ids-accordion',
        templateUrl: './ids-accordion.component.html',
        styleUrls: ['./ids-accordion.component.css']
    })
], IdsAccordionComponent);
export { IdsAccordionComponent };
//# sourceMappingURL=ids-accordion.component.js.map