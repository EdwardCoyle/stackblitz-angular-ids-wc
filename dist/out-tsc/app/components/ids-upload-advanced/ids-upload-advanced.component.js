import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-upload-advanced-routing.module';
let IdsUploadAdvancedComponent = class IdsUploadAdvancedComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Upload Advanced init');
    }
};
IdsUploadAdvancedComponent = __decorate([
    Component({
        selector: 'app-ids-upload-advanced',
        templateUrl: './ids-upload-advanced.component.html',
        styleUrls: ['./ids-upload-advanced.component.css']
    })
], IdsUploadAdvancedComponent);
export { IdsUploadAdvancedComponent };
//# sourceMappingURL=ids-upload-advanced.component.js.map