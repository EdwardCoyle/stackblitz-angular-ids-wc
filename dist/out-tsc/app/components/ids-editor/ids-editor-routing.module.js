import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsEditorComponent } from './ids-editor.component';
import { ExampleComponent } from './demos/example/example.component';
export const routes = [
    {
        path: '',
        component: IdsEditorComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    }
];
let IdsEditorRoutingModule = class IdsEditorRoutingModule {
};
IdsEditorRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsEditorRoutingModule);
export { IdsEditorRoutingModule };
//# sourceMappingURL=ids-editor-routing.module.js.map