import { __decorate } from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
let ExampleComponent = class ExampleComponent {
    constructor() { }
    ngOnInit() {
        console.log('IdsMessage example OnInit');
    }
    ngAfterViewInit() {
        if (!this.messageError) {
            return;
        }
        this.messageError.nativeElement.target = this.messageErrorTrigger.nativeElement;
        this.messageError.nativeElement.triggerType = 'click';
        this.messageError.nativeElement.onButtonClick = (buttonEl) => {
            const response = buttonEl.cancel ? 'cancelled' : 'confirmed';
            console.info(`IdsMessage was ${response}`);
            this.messageError.nativeElement.hide();
        };
    }
    handleBeforeShow() {
        this.messageErrorTrigger.nativeElement.disabled = true;
        return true;
    }
    handleHide() {
        this.messageErrorTrigger.nativeElement.disabled = false;
    }
};
__decorate([
    ViewChild('messageError', { read: ElementRef })
], ExampleComponent.prototype, "messageError", void 0);
__decorate([
    ViewChild('messageErrorTrigger', { read: ElementRef })
], ExampleComponent.prototype, "messageErrorTrigger", void 0);
ExampleComponent = __decorate([
    Component({
        selector: 'app-example',
        templateUrl: './example.component.html',
        styleUrls: ['./example.component.css']
    })
], ExampleComponent);
export { ExampleComponent };
//# sourceMappingURL=example.component.js.map