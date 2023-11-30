import { __decorate } from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
let DataDrivenComponent = class DataDrivenComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() {
        console.log('ids-popup-menu data-driven OnInit');
    }
    ngAfterViewInit() {
        // Configure the menu
        this.popupmenuEl.nativeElement.align = 'top, left';
        this.dataService.getJsonData('menu-contents')
            .subscribe(res => {
            this.popupmenuEl.nativeElement.data = res;
        });
    }
};
__decorate([
    ViewChild('popupmenuEl', { read: ElementRef })
], DataDrivenComponent.prototype, "popupmenuEl", void 0);
DataDrivenComponent = __decorate([
    Component({
        selector: 'app-data-driven',
        templateUrl: './data-driven.component.html',
        styleUrls: ['./data-driven.component.css']
    })
], DataDrivenComponent);
export { DataDrivenComponent };
//# sourceMappingURL=data-driven.component.js.map