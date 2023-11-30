import { __decorate } from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
let ExampleComponent = class ExampleComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngAfterViewInit() {
        this.dataService.getJsonData('event-types')
            .subscribe(res => {
            this.calendar.nativeElement.eventTypesData = res;
        });
        this.dataService.getJsonData('events')
            .subscribe(res => {
            this.calendar.nativeElement.eventsData = res;
        });
        this.addMenu.nativeElement?.addEventListener('selected', (evt) => {
            // Mock user defined id
            const id = Date.now().toString() + Math.floor(Math.random() * 100);
            switch (evt.detail.value) {
                case 'add-modal':
                    this.calendar.nativeElement.createNewEvent(id, true);
                    break;
                case 'add-api':
                    this.calendar.nativeElement.createNewEvent(id, false);
                    break;
                case 'clear':
                    this.calendar.nativeElement.clearEvents();
                    break;
                default:
                    break;
            }
        });
    }
};
__decorate([
    ViewChild('calendar', { read: ElementRef })
], ExampleComponent.prototype, "calendar", void 0);
__decorate([
    ViewChild('addMenu', { read: ElementRef })
], ExampleComponent.prototype, "addMenu", void 0);
ExampleComponent = __decorate([
    Component({
        selector: 'app-example',
        templateUrl: './example.component.html',
        styleUrls: ['./example.component.css']
    })
], ExampleComponent);
export { ExampleComponent };
//# sourceMappingURL=example.component.js.map