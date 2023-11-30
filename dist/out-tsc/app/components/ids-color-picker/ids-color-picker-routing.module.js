import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsColorPickerComponent } from './ids-color-picker.component';
import { ExampleComponent } from './demos/example/example.component';
import { ExampleSizesComponent } from './demos/example-sizes/example-sizes.component';
import { AxeComponent } from './demos/axe/axe.component';
export const routes = [
    {
        path: '',
        component: IdsColorPickerComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    },
    {
        path: 'example-sizes',
        component: ExampleSizesComponent
    },
    {
        path: 'axe',
        component: AxeComponent
    }
];
let IdsColorPickerRoutingModule = class IdsColorPickerRoutingModule {
};
IdsColorPickerRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsColorPickerRoutingModule);
export { IdsColorPickerRoutingModule };
//# sourceMappingURL=ids-color-picker-routing.module.js.map