import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdsDraggableRoutingModule } from './ids-draggable-routing.module';
import { IdsDraggableComponent } from './ids-draggable.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
let IdsDraggableModule = class IdsDraggableModule {
};
IdsDraggableModule = __decorate([
    NgModule({
        declarations: [
            IdsDraggableComponent,
            ExampleComponent
        ],
        imports: [
            CommonModule,
            IdsDraggableRoutingModule,
            DemoListingModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], IdsDraggableModule);
export { IdsDraggableModule };
//# sourceMappingURL=ids-draggable.module.js.map