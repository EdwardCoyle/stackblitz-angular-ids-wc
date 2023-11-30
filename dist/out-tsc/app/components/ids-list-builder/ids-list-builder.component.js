import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-list-builder-routing.module';
let IdsListBuilderComponent = class IdsListBuilderComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids List Builder init');
    }
};
IdsListBuilderComponent = __decorate([
    Component({
        selector: 'app-ids-list-builder',
        templateUrl: './ids-list-builder.component.html',
        styleUrls: ['./ids-list-builder.component.css']
    })
], IdsListBuilderComponent);
export { IdsListBuilderComponent };
//# sourceMappingURL=ids-list-builder.component.js.map