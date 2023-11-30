import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-action-sheet-routing.module';
let IdsActionSheetComponent = class IdsActionSheetComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
        this.columns = [];
    }
    ngAfterViewInit() {
        console.log('Ids Action Sheet init');
    }
};
IdsActionSheetComponent = __decorate([
    Component({
        selector: 'app-ids-action-sheet',
        templateUrl: './ids-action-sheet.component.html',
        styleUrls: ['./ids-action-sheet.component.css']
    })
], IdsActionSheetComponent);
export { IdsActionSheetComponent };
//# sourceMappingURL=ids-action-sheet.component.js.map