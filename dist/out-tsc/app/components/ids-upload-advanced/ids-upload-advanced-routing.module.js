import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsUploadAdvancedComponent } from './ids-upload-advanced.component';
import { ExampleComponent } from './demos/example/example.component';
import { SandboxComponent } from './demos/sandbox/sandbox.component';
export const routes = [
    {
        path: '',
        component: IdsUploadAdvancedComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    },
    {
        path: 'sandbox',
        component: SandboxComponent
    }
];
let IdsUploadAdvancedRoutingModule = class IdsUploadAdvancedRoutingModule {
};
IdsUploadAdvancedRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsUploadAdvancedRoutingModule);
export { IdsUploadAdvancedRoutingModule };
//# sourceMappingURL=ids-upload-advanced-routing.module.js.map