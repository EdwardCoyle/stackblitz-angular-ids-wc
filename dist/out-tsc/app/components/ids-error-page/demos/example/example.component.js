import { __decorate } from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
let ExampleComponent = class ExampleComponent {
    constructor() { }
    ngOnInit() {
        console.log('IdsErrorPage example OnInit');
    }
    ngAfterViewInit() {
        this.errorPage.nativeElement.popup.animated = false;
    }
    handleActionButton() {
        this.errorPage.nativeElement.popup.animated = true;
        this.errorPage.nativeElement.visible = false;
    }
    handleBeforeHide(e) {
        e.detail.response(false);
    }
};
__decorate([
    ViewChild('errorPage', { read: ElementRef })
], ExampleComponent.prototype, "errorPage", void 0);
ExampleComponent = __decorate([
    Component({
        selector: 'app-example',
        templateUrl: './example.component.html',
        styleUrls: ['./example.component.css']
    })
], ExampleComponent);
export { ExampleComponent };
//# sourceMappingURL=example.component.js.map