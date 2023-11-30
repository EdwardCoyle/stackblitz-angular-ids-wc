import { __decorate } from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
let ExampleComponent = class ExampleComponent {
    constructor() {
        this.menuItemResponse = (e, msg) => {
            const target = e.detail.elem;
            if (target !== null) {
                const text = target.textContent.trim();
                console.info(`Menu Item "${text}" was ${msg}`, e.detail.elem);
            }
        };
    }
    ngOnInit() {
        console.log('ids-menu-button OnInit');
    }
    ngAfterViewInit() {
        this.menuButton1.nativeElement.menuEl.addEventListener('show', () => {
            console.info(`Menu Button items were displayed`);
        });
        this.menuButton1.nativeElement.menuEl.addEventListener('hide', () => {
            console.info(`Menu Button items were hidden`);
        });
        this.menuButton1.nativeElement.menuEl.addEventListener('selected', (e) => {
            this.menuItemResponse(e, 'selected');
        });
        this.menuButton1.nativeElement.menuEl.addEventListener('deselected', (e) => {
            this.menuItemResponse(e, 'deselected');
        });
    }
};
__decorate([
    ViewChild('menuButton1', { read: ElementRef })
], ExampleComponent.prototype, "menuButton1", void 0);
ExampleComponent = __decorate([
    Component({
        selector: 'app-example',
        templateUrl: './example.component.html',
        styleUrls: ['./example.component.css']
    })
], ExampleComponent);
export { ExampleComponent };
//# sourceMappingURL=example.component.js.map