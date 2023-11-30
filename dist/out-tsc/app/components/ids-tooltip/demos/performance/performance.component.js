import { __decorate } from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
let PerformanceComponent = class PerformanceComponent {
    constructor() {
        this.times = [];
        this.appendTestItems = () => {
            for (let j = 0; j < 9; j++) {
                const t0 = performance.now();
                this.layoutGrid.nativeElement.innerHTML = '';
                for (let index = 0; index < 1000; index++) {
                    let html = '';
                    html += `<ids-layout-grid-cell>
        <ids-button id="button-${index}" type="secondary" tooltip="Tooltip ${index}">Button ${index}</ids-button>
        </ids-layout-grid-cell>`;
                    this.layoutGrid.nativeElement.insertAdjacentHTML('beforeend', html);
                }
                const t1 = performance.now();
                console.info('Loading Time:', t1 - t0);
                this.times.push(t1 - t0);
            }
        };
    }
    ngOnInit() {
        console.log('IdsTooltip performance OnInit');
    }
    ngAfterViewInit() {
        this.appendTestItems();
    }
};
__decorate([
    ViewChild('layoutGrid', { read: ElementRef })
], PerformanceComponent.prototype, "layoutGrid", void 0);
PerformanceComponent = __decorate([
    Component({
        selector: 'app-performance',
        templateUrl: './performance.component.html',
        styleUrls: ['./performance.component.css']
    })
], PerformanceComponent);
export { PerformanceComponent };
//# sourceMappingURL=performance.component.js.map