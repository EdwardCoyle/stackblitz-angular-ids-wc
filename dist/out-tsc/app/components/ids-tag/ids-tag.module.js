import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IdsTagRoutingModule } from './ids-tag-routing.module';
import { IdsTagComponent } from './ids-tag.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
let IdsTagModule = class IdsTagModule {
};
IdsTagModule = __decorate([
    NgModule({
        declarations: [
            IdsTagComponent,
            ExampleComponent
        ],
        imports: [
            CommonModule,
            IdsTagRoutingModule,
            FormsModule,
            DemoListingModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], IdsTagModule);
export { IdsTagModule };
//# sourceMappingURL=ids-tag.module.js.map