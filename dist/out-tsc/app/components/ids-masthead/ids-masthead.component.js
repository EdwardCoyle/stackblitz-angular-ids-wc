import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-masthead-routing.module';
let IdsMastheadComponent = class IdsMastheadComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngOnInit() {
        console.log('Ids Masthead init');
    }
};
IdsMastheadComponent = __decorate([
    Component({
        selector: 'app-ids-masthead',
        templateUrl: './ids-masthead.component.html',
        styleUrls: ['./ids-masthead.component.css']
    })
], IdsMastheadComponent);
export { IdsMastheadComponent };
//# sourceMappingURL=ids-masthead.component.js.map