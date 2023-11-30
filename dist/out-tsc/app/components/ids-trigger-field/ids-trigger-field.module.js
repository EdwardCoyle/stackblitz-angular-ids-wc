import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdsTriggerFieldRoutingModule } from './ids-trigger-field-routing.module';
import { IdsTriggerFieldComponent } from './ids-trigger-field.component';
import { ExampleComponent } from './demos/example/example.component';
import { LabelStateComponent } from './demos/label-state/label-state.component';
import { TextSizesComponent } from './demos/text-sizes/text-sizes.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
let IdsTriggerFieldModule = class IdsTriggerFieldModule {
};
IdsTriggerFieldModule = __decorate([
    NgModule({
        declarations: [
            IdsTriggerFieldComponent,
            ExampleComponent,
            LabelStateComponent,
            TextSizesComponent
        ],
        imports: [
            CommonModule,
            IdsTriggerFieldRoutingModule,
            DemoListingModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], IdsTriggerFieldModule);
export { IdsTriggerFieldModule };
//# sourceMappingURL=ids-trigger-field.module.js.map