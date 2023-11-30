import { __decorate } from "tslib";
import { Component, ElementRef, ViewChild, Input, HostListener } from '@angular/core';
let DemoListingComponent = class DemoListingComponent {
    constructor(router) {
        this.router = router;
        this.columns = [];
    }
    ngAfterViewInit() {
        this.columns.push({
            id: 'name',
            name: 'Name',
            field: 'path',
            sortable: true,
            formatter: this.table.nativeElement.formatters.hyperlink,
            href: `${this.router.url}/{{value}}`,
        });
        this.columns.push({
            id: 'type',
            name: 'Type',
            field: 'data?.type',
            sortable: true,
            formatter: this.table.nativeElement.formatters.text
        });
        this.columns.push({
            id: 'description',
            name: 'Description',
            field: 'data?.description',
            sortable: true,
            formatter: this.table.nativeElement.formatters.text
        });
        this.table.nativeElement.columns = this.columns;
        this.table.nativeElement.data = this.routes;
    }
    handleClick(event) {
        event.preventDefault();
        const element = event.target;
        if (element.shadowRoot) {
            const path = event['path'].filter((p) => p.tagName === 'IDS-HYPERLINK');
            const route = path[0]?.href;
            if (route) {
                this.router.navigateByUrl(`/${route}`);
            }
        }
    }
};
__decorate([
    ViewChild('table', { read: ElementRef })
], DemoListingComponent.prototype, "table", void 0);
__decorate([
    Input()
], DemoListingComponent.prototype, "routes", void 0);
__decorate([
    Input()
], DemoListingComponent.prototype, "title", void 0);
__decorate([
    HostListener('document:click', ['$event'])
], DemoListingComponent.prototype, "handleClick", null);
DemoListingComponent = __decorate([
    Component({
        selector: 'app-demo-listing',
        templateUrl: './demo-listing.component.html',
        styleUrls: ['./demo-listing.component.css']
    })
], DemoListingComponent);
export { DemoListingComponent };
//# sourceMappingURL=demo-listing.component.js.map