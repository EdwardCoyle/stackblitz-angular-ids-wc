import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-upload-routing.module';
let IdsUploadComponent = class IdsUploadComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Upload init');
    }
};
IdsUploadComponent = __decorate([
    Component({
        selector: 'app-ids-upload',
        templateUrl: './ids-upload.component.html',
        styleUrls: ['./ids-upload.component.css']
    })
], IdsUploadComponent);
export { IdsUploadComponent };
//# sourceMappingURL=ids-upload.component.js.map