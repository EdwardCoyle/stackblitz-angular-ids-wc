import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsPopupComponent } from './ids-popup.component';
import { ExampleComponent } from './demos/example/example.component';
export const routes = [
    {
        path: '',
        component: IdsPopupComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    }
];
let IdsPopupRoutingModule = class IdsPopupRoutingModule {
};
IdsPopupRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsPopupRoutingModule);
export { IdsPopupRoutingModule };
//# sourceMappingURL=ids-popup-routing.module.js.map