import { __decorate } from "tslib";
import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { Subject } from 'rxjs';
let ExampleComponent = class ExampleComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.options = new Subject();
    }
    ngAfterViewInit() {
        this.dataService.getJsonData('states')
            .subscribe(res => {
            function beforeShow() {
                return res;
            }
            this.dropdownAsync.nativeElement.beforeShow = beforeShow;
        });
    }
    handleChange(e) {
        console.info(`Value Changed to ${e.target.value}: ${e.target.selectedOption.textContent}`);
    }
    handleFocus(e) {
        console.info(`Focus Changed to ${e.target}`);
    }
};
__decorate([
    ViewChild('dropdown1', { read: ElementRef })
], ExampleComponent.prototype, "dropdown1", void 0);
__decorate([
    ViewChild('dropdownAsync', { read: ElementRef })
], ExampleComponent.prototype, "dropdownAsync", void 0);
__decorate([
    Input()
], ExampleComponent.prototype, "options", void 0);
ExampleComponent = __decorate([
    Component({
        selector: 'app-example',
        templateUrl: './example.component.html',
        styleUrls: ['./example.component.css']
    })
], ExampleComponent);
export { ExampleComponent };
//# sourceMappingURL=example.component.js.map