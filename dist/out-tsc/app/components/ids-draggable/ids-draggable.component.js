import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-draggable-routing.module';
let IdsDraggableComponent = class IdsDraggableComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('IdsDraggable AfterViewInit');
    }
};
IdsDraggableComponent = __decorate([
    Component({
        selector: 'app-ids-draggable',
        templateUrl: './ids-draggable.component.html',
        styleUrls: ['./ids-draggable.component.css']
    })
], IdsDraggableComponent);
export { IdsDraggableComponent };
//# sourceMappingURL=ids-draggable.component.js.map