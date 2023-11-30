import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { routes } from './ids-toolbar-routing.module';
let IdsToolbarComponent = class IdsToolbarComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('Ids Toolbar init');
    }
};
IdsToolbarComponent = __decorate([
    Component({
        selector: 'app-ids-toolbar',
        templateUrl: './ids-toolbar.component.html',
        styleUrls: ['./ids-toolbar.component.css'],
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], IdsToolbarComponent);
export { IdsToolbarComponent };
//# sourceMappingURL=ids-toolbar.component.js.map