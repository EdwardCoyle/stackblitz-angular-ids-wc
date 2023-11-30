import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from './ids-calendar-routing.module';
let IdsCalendarComponent = class IdsCalendarComponent {
    constructor() {
        this.routes = routes.filter(r => r.path !== '');
    }
    ngAfterViewInit() {
        console.log('IdsCalendar example AfterViewInit');
    }
};
IdsCalendarComponent = __decorate([
    Component({
        selector: 'app-ids-calendar',
        templateUrl: './ids-calendar.component.html',
        styleUrls: ['./ids-calendar.component.css']
    })
], IdsCalendarComponent);
export { IdsCalendarComponent };
//# sourceMappingURL=ids-calendar.component.js.map