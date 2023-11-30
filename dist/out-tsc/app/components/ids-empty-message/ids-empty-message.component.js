import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-empty-message-routing.module';
let IdsEmptyMessageComponent = class IdsEmptyMessageComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Empty Message init');
    }
};
IdsEmptyMessageComponent = __decorate([
    Component({
        selector: 'app-ids-empty-message',
        templateUrl: './ids-empty-message.component.html',
        styleUrls: ['./ids-empty-message.component.css']
    })
], IdsEmptyMessageComponent);
export { IdsEmptyMessageComponent };
//# sourceMappingURL=ids-empty-message.component.js.map