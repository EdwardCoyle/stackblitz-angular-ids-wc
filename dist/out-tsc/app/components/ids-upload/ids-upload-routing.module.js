import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsUploadComponent } from './ids-upload.component';
import { ExampleComponent } from './demos/example/example.component';
import { SandboxComponent } from './demos/sandbox/sandbox.component';
export const routes = [
    {
        path: '',
        component: IdsUploadComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    },
    {
        path: 'sandbox',
        component: SandboxComponent
    },
];
let IdsUploadRoutingModule = class IdsUploadRoutingModule {
};
IdsUploadRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsUploadRoutingModule);
export { IdsUploadRoutingModule };
//# sourceMappingURL=ids-upload-routing.module.js.map