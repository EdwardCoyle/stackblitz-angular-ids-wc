import { __decorate } from "tslib";
import { Component, VERSION } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.name = 'Angular ' + VERSION.major;
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-ids-wc',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map