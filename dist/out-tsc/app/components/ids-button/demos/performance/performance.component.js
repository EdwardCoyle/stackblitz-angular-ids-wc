import { __decorate } from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
let PerformanceComponent = class PerformanceComponent {
    constructor() {
        this.appendTestItems = () => {
            for (let index = 0; index < 1000; index++) {
                let html = '';
                html += `<ids-layout-grid-cell>
      <ids-button id="button-${index}" type="secondary">Button ${index}</ids-button>
      </ids-layout-grid-cell>`;
                this.section.nativeElement.insertAdjacentHTML('beforeend', html);
            }
        };
    }
    ngOnInit() {
        console.log('ids-button performance OnInit');
    }
    ngAfterViewInit() {
        this.appendTestItems();
        console.info('Loading Time:', window.performance.now());
    }
};
__decorate([
    ViewChild('section', { read: ElementRef })
], PerformanceComponent.prototype, "section", void 0);
PerformanceComponent = __decorate([
    Component({
        selector: 'app-performance',
        templateUrl: './performance.component.html',
        styleUrls: ['./performance.component.css']
    })
], PerformanceComponent);
export { PerformanceComponent };
//# sourceMappingURL=performance.component.js.map