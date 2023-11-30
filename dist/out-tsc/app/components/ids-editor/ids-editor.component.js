import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-editor-routing.module';
let IdsEditorComponent = class IdsEditorComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Editor init');
    }
};
IdsEditorComponent = __decorate([
    Component({
        selector: 'app-ids-editor',
        templateUrl: './ids-editor.component.html',
        styleUrls: ['./ids-editor.component.css']
    })
], IdsEditorComponent);
export { IdsEditorComponent };
//# sourceMappingURL=ids-editor.component.js.map