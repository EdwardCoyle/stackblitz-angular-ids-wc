import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsDropdownComponent } from './ids-dropdown.component';
import { ExampleComponent } from './demos/example/example.component';
import { TypeaheadComponent } from './demos/typeahead/typeahead.component';
import { SizesComponent } from './demos/sizes/sizes.component';
export const routes = [
    {
        path: '',
        component: IdsDropdownComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    },
    {
        path: 'typeahead',
        component: TypeaheadComponent
    },
    {
        path: 'sizes',
        component: SizesComponent
    }
];
let IdsDropdownRoutingModule = class IdsDropdownRoutingModule {
};
IdsDropdownRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsDropdownRoutingModule);
export { IdsDropdownRoutingModule };
//# sourceMappingURL=ids-dropdown-routing.module.js.map