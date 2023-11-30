import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-toast-routing.module';
let IdsToastComponent = class IdsToastComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Toast init');
    }
};
IdsToastComponent = __decorate([
    Component({
        selector: 'app-ids-toast',
        templateUrl: './ids-toast.component.html',
        styleUrls: ['./ids-toast.component.css']
    })
], IdsToastComponent);
export { IdsToastComponent };
//# sourceMappingURL=ids-toast.component.js.map