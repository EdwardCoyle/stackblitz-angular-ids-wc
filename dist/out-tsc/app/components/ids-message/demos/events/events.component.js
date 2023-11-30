import { __decorate } from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
let EventsComponent = class EventsComponent {
    constructor() { }
    ngOnInit() {
        console.log('IdsMessage events OnInit');
    }
    ngAfterViewInit() {
        this.messageEvent.nativeElement.target = this.messageEventTrigger.nativeElement;
        this.messageEvent.nativeElement.triggerType = 'click';
        this.messageEvent.nativeElement.onButtonClick = (buttonEl) => {
            const response = buttonEl.cancel ? 'cancelled' : 'confirmed';
            console.info(`IdsMessage was ${response}`);
            this.messageEvent.nativeElement.hide();
        };
    }
    handleBeforeShow() {
        this.messageEventTrigger.nativeElement.disabled = true;
        return true;
    }
    handleHide() {
        console.info('Modal event "hide" triggered');
        this.messageEventTrigger.nativeElement.disabled = false;
    }
    handleShow() {
        console.info('Modal event "show" triggered');
        return true;
    }
};
__decorate([
    ViewChild('messageEvent', { read: ElementRef })
], EventsComponent.prototype, "messageEvent", void 0);
__decorate([
    ViewChild('messageEventTrigger', { read: ElementRef })
], EventsComponent.prototype, "messageEventTrigger", void 0);
EventsComponent = __decorate([
    Component({
        selector: 'app-events',
        templateUrl: './events.component.html',
        styleUrls: ['./events.component.css']
    })
], EventsComponent);
export { EventsComponent };
//# sourceMappingURL=events.component.js.map