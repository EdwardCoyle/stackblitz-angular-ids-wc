import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-textarea-routing.module';
let IdsTextareaComponent = class IdsTextareaComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Textarea init');
    }
};
IdsTextareaComponent = __decorate([
    Component({
        selector: 'app-ids-textarea',
        templateUrl: './ids-textarea.component.html',
        styleUrls: ['./ids-textarea.component.css']
    })
], IdsTextareaComponent);
export { IdsTextareaComponent };
//# sourceMappingURL=ids-textarea.component.js.map