import { __decorate } from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
let DisplaySelectedComponent = class DisplaySelectedComponent {
    constructor() { }
    ngOnInit() {
        console.log('ids-menu-button display selected OnInit');
    }
    ngAfterViewInit() {
        console.log('ids-menu-button display selected AfterViewInit');
    }
    handleSelected(e) {
        const target = e.detail.elem;
        if (target !== null) {
            const text = target.textContent.trim();
            this.btnSpanEl.nativeElement.innerHTML = text;
            console.info('Menu Item Selected', e.detail.elem);
        }
    }
};
__decorate([
    ViewChild('btnSpanEl', { read: ElementRef })
], DisplaySelectedComponent.prototype, "btnSpanEl", void 0);
DisplaySelectedComponent = __decorate([
    Component({
        selector: 'app-display-selected',
        templateUrl: './display-selected.component.html',
        styleUrls: ['./display-selected.component.css']
    })
], DisplaySelectedComponent);
export { DisplaySelectedComponent };
//# sourceMappingURL=display-selected.component.js.map