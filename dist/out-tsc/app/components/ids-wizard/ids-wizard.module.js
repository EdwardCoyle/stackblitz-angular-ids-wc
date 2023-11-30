import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdsWizardRoutingModule } from './ids-wizard-routing.module';
import { IdsWizardComponent } from './ids-wizard.component';
import { ExampleComponent } from './demos/example/example.component';
import { SandboxComponent } from './demos/sandbox/sandbox.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
let IdsWizardModule = class IdsWizardModule {
};
IdsWizardModule = __decorate([
    NgModule({
        declarations: [
            IdsWizardComponent,
            ExampleComponent,
            SandboxComponent
        ],
        imports: [
            CommonModule,
            IdsWizardRoutingModule,
            DemoListingModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], IdsWizardModule);
export { IdsWizardModule };
//# sourceMappingURL=ids-wizard.module.js.map