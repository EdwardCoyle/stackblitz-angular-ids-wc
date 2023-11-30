import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SwappableComponent = class SwappableComponent {
    constructor() { }
    ngOnInit() {
        console.log('swappable init');
    }
};
SwappableComponent = __decorate([
    Component({
        selector: 'app-swappable',
        templateUrl: './swappable.component.html',
        styleUrls: ['./swappable.component.css']
    })
], SwappableComponent);
export { SwappableComponent };
//# sourceMappingURL=swappable.component.js.map