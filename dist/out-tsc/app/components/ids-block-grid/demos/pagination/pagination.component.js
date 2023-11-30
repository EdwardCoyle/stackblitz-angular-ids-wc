import { __decorate } from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
let PaginationComponent = class PaginationComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() {
        console.log('IdsBlockGrid pagination OnInit');
    }
    ngAfterViewInit() {
        this.dataService.getJsonData('employees')
            .subscribe(res => {
            this.blockGrid.nativeElement.data = res;
            this.blockGrid.nativeElement.pageTotal = res.length;
        });
        this.blockGrid.nativeElement.pager.addEventListener('pagenumberchange', async (e) => {
            console.info(`On page-number change # ${e.detail.value}`);
        });
        this.blockGrid.nativeElement.pager.addEventListener('pagesizechange', async (e) => {
            console.info(`On page-size change # ${e.detail.value}`);
        });
    }
};
__decorate([
    ViewChild('blockGrid', { read: ElementRef })
], PaginationComponent.prototype, "blockGrid", void 0);
PaginationComponent = __decorate([
    Component({
        selector: 'app-pagination',
        templateUrl: './pagination.component.html',
        styleUrls: ['./pagination.component.css']
    })
], PaginationComponent);
export { PaginationComponent };
//# sourceMappingURL=pagination.component.js.map