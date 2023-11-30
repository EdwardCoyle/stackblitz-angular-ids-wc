import { __decorate } from "tslib";
import { Component, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
let ExampleComponent = class ExampleComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() {
        console.log('ids-virtual-scroll example OnInit');
    }
    ngAfterViewInit() {
        this.dataService.getJsonData('products')
            .subscribe((res) => {
            // VirtualScroll w/List-view
            this.virtualScroll1.nativeElement.data = res;
            this.virtualScroll1.nativeElement.itemTemplate = (item) => `<div part="list-item">${item.productName}</div>`;
            this.virtualScroll1.nativeElement.scrollTarget = document.querySelector('ids-card')?.shadowRoot?.querySelector('.ids-card-content');
            // VirtualScroll w/DataGrid
            this.virtualScroll2.nativeElement.scrollTarget = document.querySelector('.ids-data-grid');
            this.virtualScroll2.nativeElement.itemTemplate = (item) => `<div part="row" role="row" class="ids-data-grid-row">
          <span role="cell" part="cell" class="ids-data-grid-cell"><span class="text-ellipsis" part="text-ellipsis">${item.productId}</span></span>
          <span role="cell" part="cell" class="ids-data-grid-cell"><span class="text-ellipsis" part="text-ellipsis">${item.productName}</span></span>
        </div>`;
            this.virtualScroll2.nativeElement.data = res;
        });
    }
};
__decorate([
    ViewChild('virtualScroll1', { read: ElementRef })
], ExampleComponent.prototype, "virtualScroll1", void 0);
__decorate([
    ViewChild('virtualScroll2', { read: ElementRef })
], ExampleComponent.prototype, "virtualScroll2", void 0);
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