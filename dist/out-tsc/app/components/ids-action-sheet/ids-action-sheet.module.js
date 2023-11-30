import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdsActionSheetRoutingModule } from './ids-action-sheet-routing.module';
import { IdsActionSheetComponent } from './ids-action-sheet.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
let IdsActionSheetModule = class IdsActionSheetModule {
};
IdsActionSheetModule = __decorate([
    NgModule({
        declarations: [
            IdsActionSheetComponent,
            ExampleComponent,
        ],
        imports: [
            CommonModule,
            IdsActionSheetRoutingModule,
            DemoListingModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], IdsActionSheetModule);
export { IdsActionSheetModule };
//# sourceMappingURL=ids-action-sheet.module.js.map