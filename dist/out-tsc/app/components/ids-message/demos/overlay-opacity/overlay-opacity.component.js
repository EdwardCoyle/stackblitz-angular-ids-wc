import { __decorate } from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
let OverlayOpacityComponent = class OverlayOpacityComponent {
    constructor() {
        this.setupMessage = (messageEl, triggerBtnEl) => {
            // Link the Message to its trigger button
            messageEl.target = triggerBtnEl;
            messageEl.triggerType = 'click';
            // Disable the trigger button when showing the Modal.
            messageEl.addEventListener('beforeshow', () => {
                triggerBtnEl.disabled = true;
                return true;
            });
            // Setup the response callback
            messageEl.onButtonClick = (buttonEl) => {
                const response = buttonEl.cancel ? 'cancel' : buttonEl.text;
                console.info(`IdsMessage with title "${messageEl.title}" had its "${response}" button clicked`);
                messageEl.hide();
            };
            // After the modal is done hiding, re-enable its trigger button.
            messageEl.addEventListener('hide', () => {
                triggerBtnEl.disabled = false;
            });
        };
    }
    ngOnInit() {
        console.log('IdsMessage overlay opacity OnInit');
    }
    ngAfterViewInit() {
        this.setupMessage(this.messageOpacity2.nativeElement, this.messageOpacity2Trigger.nativeElement);
        this.setupMessage(this.messageOpacity4.nativeElement, this.messageOpacity4Trigger.nativeElement);
        this.setupMessage(this.messageOpacity6.nativeElement, this.messageOpacity6Trigger.nativeElement);
        this.setupMessage(this.messageOpacity8.nativeElement, this.messageOpacity8Trigger.nativeElement);
        this.setupMessage(this.messageOpacity10.nativeElement, this.messageOpacity10Trigger.nativeElement);
    }
};
__decorate([
    ViewChild('messageOpacity2', { read: ElementRef })
], OverlayOpacityComponent.prototype, "messageOpacity2", void 0);
__decorate([
    ViewChild('messageOpacity4', { read: ElementRef })
], OverlayOpacityComponent.prototype, "messageOpacity4", void 0);
__decorate([
    ViewChild('messageOpacity6', { read: ElementRef })
], OverlayOpacityComponent.prototype, "messageOpacity6", void 0);
__decorate([
    ViewChild('messageOpacity8', { read: ElementRef })
], OverlayOpacityComponent.prototype, "messageOpacity8", void 0);
__decorate([
    ViewChild('messageOpacity10', { read: ElementRef })
], OverlayOpacityComponent.prototype, "messageOpacity10", void 0);
__decorate([
    ViewChild('messageOpacity2Trigger', { read: ElementRef })
], OverlayOpacityComponent.prototype, "messageOpacity2Trigger", void 0);
__decorate([
    ViewChild('messageOpacity4Trigger', { read: ElementRef })
], OverlayOpacityComponent.prototype, "messageOpacity4Trigger", void 0);
__decorate([
    ViewChild('messageOpacity6Trigger', { read: ElementRef })
], OverlayOpacityComponent.prototype, "messageOpacity6Trigger", void 0);
__decorate([
    ViewChild('messageOpacity8Trigger', { read: ElementRef })
], OverlayOpacityComponent.prototype, "messageOpacity8Trigger", void 0);
__decorate([
    ViewChild('messageOpacity10Trigger', { read: ElementRef })
], OverlayOpacityComponent.prototype, "messageOpacity10Trigger", void 0);
OverlayOpacityComponent = __decorate([
    Component({
        selector: 'app-overlay-opacity',
        templateUrl: './overlay-opacity.component.html',
        styleUrls: ['./overlay-opacity.component.css']
    })
], OverlayOpacityComponent);
export { OverlayOpacityComponent };
//# sourceMappingURL=overlay-opacity.component.js.map