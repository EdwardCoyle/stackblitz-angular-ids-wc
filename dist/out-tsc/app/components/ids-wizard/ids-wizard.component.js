import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-wizard-routing.module';
let IdsWizardComponent = class IdsWizardComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Wizard init');
    }
};
IdsWizardComponent = __decorate([
    Component({
        selector: 'app-ids-wizard',
        templateUrl: './ids-wizard.component.html',
        styleUrls: ['./ids-wizard.component.css']
    })
], IdsWizardComponent);
export { IdsWizardComponent };
//# sourceMappingURL=ids-wizard.component.js.map