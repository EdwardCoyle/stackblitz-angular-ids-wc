import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsCalendarComponent } from './ids-calendar.component';
import { ExampleComponent } from './demos/example/example.component';
export const routes = [
    {
        path: '',
        component: IdsCalendarComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    }
];
let IdsCalendarRoutingModule = class IdsCalendarRoutingModule {
};
IdsCalendarRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], IdsCalendarRoutingModule);
export { IdsCalendarRoutingModule };
//# sourceMappingURL=ids-calendar-routing.module.js.map