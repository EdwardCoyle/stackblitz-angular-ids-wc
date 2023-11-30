import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
let CenteredComponent = class CenteredComponent {
    constructor() { }
    ngOnInit() {
        console.log('centered init');
    }
};
CenteredComponent = __decorate([
    Component({
        selector: 'app-toolbar-centered-example',
        templateUrl: './centered.component.html',
        styleUrls: ['./centered.component.css'],
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], CenteredComponent);
export { CenteredComponent };
//# sourceMappingURL=centered.component.js.map