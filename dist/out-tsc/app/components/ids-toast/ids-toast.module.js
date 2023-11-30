import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdsToastRoutingModule } from './ids-toast-routing.module';
import { IdsToastComponent } from './ids-toast.component';
import { ExampleComponent } from './demos/example/example.component';
import { SandboxComponent } from './demos/sandbox/sandbox.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
let IdsToastModule = class IdsToastModule {
};
IdsToastModule = __decorate([
    NgModule({
        declarations: [
            IdsToastComponent,
            ExampleComponent,
            SandboxComponent
        ],
        imports: [
            CommonModule,
            IdsToastRoutingModule,
            DemoListingModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], IdsToastModule);
export { IdsToastModule };
//# sourceMappingURL=ids-toast.module.js.map