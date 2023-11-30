import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdsTreeRoutingModule } from './ids-tree-routing.module';
import { IdsTreeComponent } from './ids-tree.component';
import { ExampleComponent } from './demos/example/example.component';
import { MultiSelectComponent } from './demos/multi-select/multi-select.component';
import { SandboxComponent } from './demos/sandbox/sandbox.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
let IdsTreeModule = class IdsTreeModule {
};
IdsTreeModule = __decorate([
    NgModule({
        declarations: [
            IdsTreeComponent,
            ExampleComponent,
            MultiSelectComponent,
            SandboxComponent
        ],
        imports: [
            CommonModule,
            IdsTreeRoutingModule,
            DemoListingModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], IdsTreeModule);
export { IdsTreeModule };
//# sourceMappingURL=ids-tree.module.js.map