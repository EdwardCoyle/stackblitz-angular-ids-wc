import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-tag-routing.module';
let IdsTagComponent = class IdsTagComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Tag init');
    }
};
IdsTagComponent = __decorate([
    Component({
        selector: 'app-ids-tag',
        templateUrl: './ids-tag.component.html',
        styleUrls: ['./ids-tag.component.css']
    })
], IdsTagComponent);
export { IdsTagComponent };
//# sourceMappingURL=ids-tag.component.js.map