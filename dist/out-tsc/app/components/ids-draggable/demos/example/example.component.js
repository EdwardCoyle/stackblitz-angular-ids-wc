import { __decorate } from "tslib";
import { Component, ViewEncapsulation, ViewChildren, ElementRef } from '@angular/core';
let ExampleComponent = class ExampleComponent {
    constructor() { }
    ngOnInit() {
        console.log('IdsDraggable example OnInit');
    }
    ngAfterViewInit() {
        this.draggable.toArray()
            .forEach((d) => {
            d.nativeElement.addEventListener('ids-dragstart', (e) => {
                console.info('ids-dragstart', d, e.detail);
            });
            d.nativeElement.addEventListener('ids-drag', (e) => {
                console.info('ids-drag', d, e.detail);
            });
            d.nativeElement.addEventListener('ids-dragend', (e) => {
                console.info('ids-dragend', d, e.detail);
            });
        });
    }
};
__decorate([
    ViewChildren('draggable', { read: ElementRef })
], ExampleComponent.prototype, "draggable", void 0);
ExampleComponent = __decorate([
    Component({
        selector: 'app-example',
        templateUrl: './example.component.html',
        styleUrls: ['./example.component.css'],
        encapsulation: ViewEncapsulation.None
    })
], ExampleComponent);
export { ExampleComponent };
//# sourceMappingURL=example.component.js.map