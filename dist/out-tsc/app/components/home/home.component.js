import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { routes } from '../../app-routing.module';
let HomeComponent = class HomeComponent {
    constructor() {
        this.routes = routes;
        this.categories = [
            { name: 'Form Inputs', icon: 'display' },
            { name: 'Navigation and Interaction', icon: 'map' },
            { name: 'Messages and Alerts', icon: 'success' },
            { name: 'Lists', icon: 'spreadsheet' },
            { name: 'Layouts', icon: 'project' },
            { name: 'Patterns', icon: 'design-mode' },
            { name: 'Charts and Visualizations', icon: 'line-bar-chart' },
            { name: 'Typography', icon: '' },
        ];
    }
    ngAfterViewInit() {
        console.log('Homepage init');
    }
};
HomeComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map