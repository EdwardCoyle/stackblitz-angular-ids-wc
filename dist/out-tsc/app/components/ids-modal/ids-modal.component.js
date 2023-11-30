import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-modal-routing.module';
let IdsModalComponent = class IdsModalComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Modal init');
    }
};
IdsModalComponent = __decorate([
    Component({
        selector: 'app-ids-modal',
        templateUrl: './ids-modal.component.html',
        styleUrls: ['./ids-modal.component.css']
    })
], IdsModalComponent);
export { IdsModalComponent };
//# sourceMappingURL=ids-modal.component.js.map