import { __decorate } from "tslib";
import { Component, ViewChild, VERSION } from '@angular/core';
let ExampleComponent = class ExampleComponent {
    constructor() {
        this.name = 'Angular ' + VERSION.major;
        this.person = 'John Smith';
        this.type = 'success';
        this.tagList = [
            { type: '', name: 'Tag One' },
            { type: 'success', name: 'Tag Two' },
            { type: '', name: 'Tag Three' },
            { type: 'error', name: 'Tag Four' },
        ];
    }
    ngAfterViewInit() {
        this.tag.nativeElement.color = 'success';
    }
    onTagRemove(details) {
        console.log('tagremove fired', details, details.detail);
    }
};
__decorate([
    ViewChild('myTag')
], ExampleComponent.prototype, "tag", void 0);
ExampleComponent = __decorate([
    Component({
        selector: 'app-example',
        templateUrl: './example.component.html',
        styleUrls: ['./example.component.css']
    })
], ExampleComponent);
export { ExampleComponent };
//# sourceMappingURL=example.component.js.map