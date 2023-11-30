import { __decorate } from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
let TypesComponent = class TypesComponent {
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
        console.log('IdsMessage types OnInit');
    }
    ngAfterViewInit() {
        this.setupMessage(this.messageError.nativeElement, this.messageErrorTrigger.nativeElement);
        this.setupMessage(this.messageAlert.nativeElement, this.messageAlertTrigger.nativeElement);
        this.setupMessage(this.messageSuccess.nativeElement, this.messageSuccessTrigger.nativeElement);
        this.setupMessage(this.messageInfo.nativeElement, this.messageInfoTrigger.nativeElement);
        this.setupMessage(this.messageConfirmation.nativeElement, this.messageConfirmationTrigger.nativeElement);
        this.setupMessage(this.messageHugeText.nativeElement, this.messageHugeTextTrigger.nativeElement);
        this.setupMessage(this.messageNoButtons.nativeElement, this.messageNoButtonsTrigger.nativeElement);
        this.setupMessage(this.messageAllowTags.nativeElement, this.messageAllowTagsTrigger.nativeElement);
        this.setupMessage(this.messageDisallowTags.nativeElement, this.messageDisallowTagsTrigger.nativeElement);
    }
};
__decorate([
    ViewChild('messageError', { read: ElementRef })
], TypesComponent.prototype, "messageError", void 0);
__decorate([
    ViewChild('messageAlert', { read: ElementRef })
], TypesComponent.prototype, "messageAlert", void 0);
__decorate([
    ViewChild('messageSuccess', { read: ElementRef })
], TypesComponent.prototype, "messageSuccess", void 0);
__decorate([
    ViewChild('messageInfo', { read: ElementRef })
], TypesComponent.prototype, "messageInfo", void 0);
__decorate([
    ViewChild('messageConfirmation', { read: ElementRef })
], TypesComponent.prototype, "messageConfirmation", void 0);
__decorate([
    ViewChild('messageHugeText', { read: ElementRef })
], TypesComponent.prototype, "messageHugeText", void 0);
__decorate([
    ViewChild('messageNoButtons', { read: ElementRef })
], TypesComponent.prototype, "messageNoButtons", void 0);
__decorate([
    ViewChild('messageAllowTags', { read: ElementRef })
], TypesComponent.prototype, "messageAllowTags", void 0);
__decorate([
    ViewChild('messageDisallowTags', { read: ElementRef })
], TypesComponent.prototype, "messageDisallowTags", void 0);
__decorate([
    ViewChild('messageErrorTrigger', { read: ElementRef })
], TypesComponent.prototype, "messageErrorTrigger", void 0);
__decorate([
    ViewChild('messageAlertTrigger', { read: ElementRef })
], TypesComponent.prototype, "messageAlertTrigger", void 0);
__decorate([
    ViewChild('messageSuccessTrigger', { read: ElementRef })
], TypesComponent.prototype, "messageSuccessTrigger", void 0);
__decorate([
    ViewChild('messageInfoTrigger', { read: ElementRef })
], TypesComponent.prototype, "messageInfoTrigger", void 0);
__decorate([
    ViewChild('messageConfirmationTrigger', { read: ElementRef })
], TypesComponent.prototype, "messageConfirmationTrigger", void 0);
__decorate([
    ViewChild('messageHugeTextTrigger', { read: ElementRef })
], TypesComponent.prototype, "messageHugeTextTrigger", void 0);
__decorate([
    ViewChild('messageAllowTagsTrigger', { read: ElementRef })
], TypesComponent.prototype, "messageAllowTagsTrigger", void 0);
__decorate([
    ViewChild('messageDisallowTagsTrigger', { read: ElementRef })
], TypesComponent.prototype, "messageDisallowTagsTrigger", void 0);
__decorate([
    ViewChild('messageNoButtonsTrigger', { read: ElementRef })
], TypesComponent.prototype, "messageNoButtonsTrigger", void 0);
TypesComponent = __decorate([
    Component({
        selector: 'app-types',
        templateUrl: './types.component.html',
        styleUrls: ['./types.component.css']
    })
], TypesComponent);
export { TypesComponent };
//# sourceMappingURL=types.component.js.map