import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsTextareaComponent } from './ids-textarea.component';
import { ExampleComponent } from './demos/example/example.component';
export const routes = [
    {
        path: '',
        component: IdsTextareaComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    }
];
let IdsTextareaRoutingModule = class IdsTextareaRoutingModule {
};
IdsTextareaRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsTextareaRoutingModule);
export { IdsTextareaRoutingModule };
//# sourceMappingURL=ids-textarea-routing.module.js.map