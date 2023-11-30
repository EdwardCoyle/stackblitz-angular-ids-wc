import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-message-routing.module';
let IdsMessageComponent = class IdsMessageComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Message init');
    }
};
IdsMessageComponent = __decorate([
    Component({
        selector: 'app-ids-message',
        templateUrl: './ids-message.component.html',
        styleUrls: ['./ids-message.component.css']
    })
], IdsMessageComponent);
export { IdsMessageComponent };
//# sourceMappingURL=ids-message.component.js.map