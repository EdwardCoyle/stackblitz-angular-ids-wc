import { __decorate } from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
let ExampleComponent = class ExampleComponent {
    constructor() {
        this.periods = [
            {
                "id": 1,
                "city": "London",
                "location": "Corporate FY19",
                "alert": true,
                "alertClass": "error",
                "daysLeft": 3,
                "hoursLeft": 5
            },
            {
                "id": 2,
                "city": "New York",
                "location": "Corporate FY19",
                "alert": true,
                "alertClass": "alert",
                "daysLeft": 6,
                "hoursLeft": 7
            },
            {
                "id": 3,
                "city": "Vancouver",
                "location": "Corporate FY19",
                "alert": false,
                "alertClass": "",
                "daysLeft": 8,
                "hoursLeft": 1
            },
            {
                "id": 4,
                "city": "Tokyo",
                "location": "Corporate FY19",
                "alert": false,
                "alertClass": "",
                "daysLeft": 2,
                "hoursLeft": 1
            },
            {
                "id": 5,
                "city": "Madrid",
                "location": "Corporate FY19",
                "alert": false,
                "alertClass": "",
                "daysLeft": 3,
                "hoursLeft": 1
            }
        ];
    }
    ngAfterViewInit() {
        this.setSwaplistData();
    }
    setSwaplistData() {
        this.swaplist.nativeElement.defaultTemplate = '<ids-swappable-item><ids-text>${city}</ids-text></ids-swappable-item>';
        this.swaplist.nativeElement.data = this.periods;
    }
    handleClick(e) {
        console.log(e);
    }
};
__decorate([
    ViewChild('mySwaplist', { read: ElementRef })
], ExampleComponent.prototype, "swaplist", void 0);
ExampleComponent = __decorate([
    Component({
        selector: 'app-example',
        templateUrl: './example.component.html',
        styleUrls: ['./example.component.css']
    })
], ExampleComponent);
export { ExampleComponent };
//# sourceMappingURL=example.component.js.map