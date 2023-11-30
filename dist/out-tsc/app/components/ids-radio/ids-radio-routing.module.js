import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsRadioComponent } from './ids-radio.component';
import { ExampleComponent } from './demos/example/example.component';
export const routes = [
    {
        path: '',
        component: IdsRadioComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    }
];
let IdsRadioRoutingModule = class IdsRadioRoutingModule {
};
IdsRadioRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsRadioRoutingModule);
export { IdsRadioRoutingModule };
//# sourceMappingURL=ids-radio-routing.module.js.map