import { __decorate } from "tslib";
import { Component } from '@angular/core';
let IconAlignRightComponent = class IconAlignRightComponent {
    constructor() { }
    ngOnInit() {
        console.log('IdsToggleButton icon-align-right OnInit');
    }
    handleToggle(e) {
        e.target.toggle();
    }
};
IconAlignRightComponent = __decorate([
    Component({
        selector: 'app-icon-align-right',
        templateUrl: './icon-align-right.component.html',
        styleUrls: ['./icon-align-right.component.css']
    })
], IconAlignRightComponent);
export { IconAlignRightComponent };
//# sourceMappingURL=icon-align-right.component.js.map