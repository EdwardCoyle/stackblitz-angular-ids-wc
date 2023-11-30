import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdsPagerRoutingModule } from './ids-pager-routing.module';
import { IdsPagerComponent } from './ids-pager.component';
import { ExampleComponent } from './demos/example/example.component';
import { ListComponent } from './demos/list/list.component';
import { SandboxComponent } from './demos/sandbox/sandbox.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
let IdsPagerModule = class IdsPagerModule {
};
IdsPagerModule = __decorate([
    NgModule({
        declarations: [
            IdsPagerComponent,
            ExampleComponent,
            ListComponent,
            SandboxComponent
        ],
        imports: [
            CommonModule,
            IdsPagerRoutingModule,
            DemoListingModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], IdsPagerModule);
export { IdsPagerModule };
//# sourceMappingURL=ids-pager.module.js.map