import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-card-routing.module';
let IdsCardComponent = class IdsCardComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngOnInit() {
        console.log('IdsCard demo listings OnInit');
        console.log(this.routes);
    }
};
IdsCardComponent = __decorate([
    Component({
        selector: 'app-ids-card',
        templateUrl: './ids-card.component.html',
        styleUrls: ['./ids-card.component.css']
    })
], IdsCardComponent);
export { IdsCardComponent };
//# sourceMappingURL=ids-card.component.js.map