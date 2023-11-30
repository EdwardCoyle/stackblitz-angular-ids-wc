import { __decorate } from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
let ExampleComponent = class ExampleComponent {
    constructor() { }
    ngOnInit() {
        console.log('example OnInit');
    }
    ngAfterViewInit() {
        this.breadcrumb.nativeElement.onBreadcrumbActivate = (targetEl, previousEl) => {
            console.info(`New Breadcrumb: "${targetEl.textContent}"\nPrevious Breadcrumb: "${previousEl.textContent}"`);
        };
    }
};
__decorate([
    ViewChild('breadcrumb', { read: ElementRef })
], ExampleComponent.prototype, "breadcrumb", void 0);
ExampleComponent = __decorate([
    Component({
        selector: 'app-example',
        templateUrl: './example.component.html',
        styleUrls: ['./example.component.css']
    })
], ExampleComponent);
export { ExampleComponent };
//# sourceMappingURL=example.component.js.map