import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsMessageComponent } from './ids-message.component';
import { ExampleComponent } from './demos/example/example.component';
import { TypesComponent } from './demos/types/types.component';
import { OverlayOpacityComponent } from './demos/overlay-opacity/overlay-opacity.component';
import { EventsComponent } from './demos/events/events.component';
export const routes = [
    {
        path: '',
        component: IdsMessageComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    },
    {
        path: 'types',
        component: TypesComponent
    },
    {
        path: 'overlay-opacity',
        component: OverlayOpacityComponent
    },
    {
        path: 'events',
        component: EventsComponent
    }
];
let IdsMessageRoutingModule = class IdsMessageRoutingModule {
};
IdsMessageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsMessageRoutingModule);
export { IdsMessageRoutingModule };
//# sourceMappingURL=ids-message-routing.module.js.map