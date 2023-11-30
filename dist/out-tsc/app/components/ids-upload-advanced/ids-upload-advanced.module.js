import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdsUploadAdvancedRoutingModule } from './ids-upload-advanced-routing.module';
import { IdsUploadAdvancedComponent } from './ids-upload-advanced.component';
import { ExampleComponent } from './demos/example/example.component';
import { SandboxComponent } from './demos/sandbox/sandbox.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
let IdsUploadAdvancedModule = class IdsUploadAdvancedModule {
};
IdsUploadAdvancedModule = __decorate([
    NgModule({
        declarations: [
            IdsUploadAdvancedComponent,
            ExampleComponent,
            SandboxComponent
        ],
        imports: [
            CommonModule,
            IdsUploadAdvancedRoutingModule,
            DemoListingModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], IdsUploadAdvancedModule);
export { IdsUploadAdvancedModule };
//# sourceMappingURL=ids-upload-advanced.module.js.map