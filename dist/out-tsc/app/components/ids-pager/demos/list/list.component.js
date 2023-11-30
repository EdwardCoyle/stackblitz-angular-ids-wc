import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ListComponent = class ListComponent {
    constructor() { }
    ngOnInit() {
        console.log('list init');
    }
};
ListComponent = __decorate([
    Component({
        selector: 'app-list',
        templateUrl: './list.component.html',
        styleUrls: ['./list.component.css']
    })
], ListComponent);
export { ListComponent };
//# sourceMappingURL=list.component.js.map