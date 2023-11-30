import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-skip-link-routing.module';
let IdsSkipLinkComponent = class IdsSkipLinkComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Skip Link init');
    }
};
IdsSkipLinkComponent = __decorate([
    Component({
        selector: 'app-ids-skip-link',
        templateUrl: './ids-skip-link.component.html',
        styleUrls: ['./ids-skip-link.component.css']
    })
], IdsSkipLinkComponent);
export { IdsSkipLinkComponent };
//# sourceMappingURL=ids-skip-link.component.js.map