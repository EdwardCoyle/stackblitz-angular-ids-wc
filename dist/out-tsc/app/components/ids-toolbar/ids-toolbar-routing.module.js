import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsToolbarComponent } from './ids-toolbar.component';
import { ExampleComponent } from './demos/example/example.component';
import { OverflowedComponent } from './demos/overflowed/overflowed.component';
import { CenteredComponent } from './demos/centered/centered.component';
export const routes = [
    {
        path: '',
        component: IdsToolbarComponent
    },
    {
        path: 'centered',
        component: CenteredComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    },
    {
        path: 'overflowed',
        component: OverflowedComponent
    }
];
let IdsToolbarRoutingModule = class IdsToolbarRoutingModule {
};
IdsToolbarRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsToolbarRoutingModule);
export { IdsToolbarRoutingModule };
//# sourceMappingURL=ids-toolbar-routing.module.js.map