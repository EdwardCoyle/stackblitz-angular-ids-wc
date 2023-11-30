import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsDraggableComponent } from './ids-draggable.component';
import { ExampleComponent } from './demos/example/example.component';
export const routes = [
    {
        path: '',
        component: IdsDraggableComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    }
];
let IdsDraggableRoutingModule = class IdsDraggableRoutingModule {
};
IdsDraggableRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], IdsDraggableRoutingModule);
export { IdsDraggableRoutingModule };
//# sourceMappingURL=ids-draggable-routing.module.js.map