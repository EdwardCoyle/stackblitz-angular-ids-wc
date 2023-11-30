import { __decorate } from "tslib";
import { Component, ViewChildren, ElementRef } from '@angular/core';
let ExampleComponent = class ExampleComponent {
    constructor() { }
    ngOnInit() {
        console.log('example OnInit');
    }
    ngAfterViewInit() {
        this.tabElements.toArray()
            .forEach((el) => el.nativeElement.addEventListener('change', (e) => {
            console.info(`ids-tabs.on('change') =>`, e.target?.value);
        }));
    }
};
__decorate([
    ViewChildren('tabElements', { read: ElementRef })
], ExampleComponent.prototype, "tabElements", void 0);
ExampleComponent = __decorate([
    Component({
        selector: 'app-example',
        templateUrl: './example.component.html',
        styleUrls: ['./example.component.css']
    })
], ExampleComponent);
export { ExampleComponent };
//# sourceMappingURL=example.component.js.map