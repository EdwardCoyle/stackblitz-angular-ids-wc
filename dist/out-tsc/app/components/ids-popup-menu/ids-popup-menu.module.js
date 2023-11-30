import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdsPopupMenuRoutingModule } from './ids-popup-menu-routing.module';
import { IdsPopupMenuComponent } from './ids-popup-menu.component';
import { ExampleComponent } from './demos/example/example.component';
import { DataDrivenComponent } from './demos/data-driven/data-driven.component';
import { SelectedStateComponent } from './demos/selected-state/selected-state.component';
import { TriggerImmediateComponent } from './demos/trigger-immediate/trigger-immediate.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
let IdsPopupMenuModule = class IdsPopupMenuModule {
};
IdsPopupMenuModule = __decorate([
    NgModule({
        declarations: [
            IdsPopupMenuComponent,
            ExampleComponent,
            DataDrivenComponent,
            SelectedStateComponent,
            TriggerImmediateComponent
        ],
        imports: [
            CommonModule,
            IdsPopupMenuRoutingModule,
            DemoListingModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], IdsPopupMenuModule);
export { IdsPopupMenuModule };
//# sourceMappingURL=ids-popup-menu.module.js.map