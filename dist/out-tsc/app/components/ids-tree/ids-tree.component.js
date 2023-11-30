import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-tree-routing.module';
let IdsTreeComponent = class IdsTreeComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Tree init');
    }
};
IdsTreeComponent = __decorate([
    Component({
        selector: 'app-ids-tree',
        templateUrl: './ids-tree.component.html',
        styleUrls: ['./ids-tree.component.css']
    })
], IdsTreeComponent);
export { IdsTreeComponent };
//# sourceMappingURL=ids-tree.component.js.map