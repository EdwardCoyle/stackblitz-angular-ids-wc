import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdsUploadRoutingModule } from './ids-upload-routing.module';
import { IdsUploadComponent } from './ids-upload.component';
import { ExampleComponent } from './demos/example/example.component';
import { SandboxComponent } from './demos/sandbox/sandbox.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
let IdsUploadModule = class IdsUploadModule {
};
IdsUploadModule = __decorate([
    NgModule({
        declarations: [
            IdsUploadComponent,
            ExampleComponent,
            SandboxComponent
        ],
        imports: [
            CommonModule,
            IdsUploadRoutingModule,
            DemoListingModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], IdsUploadModule);
export { IdsUploadModule };
//# sourceMappingURL=ids-upload.module.js.map