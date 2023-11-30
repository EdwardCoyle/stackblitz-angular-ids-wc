import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsActionSheetComponent } from './ids-action-sheet.component';
import { ExampleComponent } from './demos/example/example.component';
export const routes = [
    {
        path: '',
        component: IdsActionSheetComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    }
];
let IdsActionSheetRoutingModule = class IdsActionSheetRoutingModule {
};
IdsActionSheetRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsActionSheetRoutingModule);
export { IdsActionSheetRoutingModule };
//# sourceMappingURL=ids-action-sheet-routing.module.js.map