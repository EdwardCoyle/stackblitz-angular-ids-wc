import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsTabsComponent } from './ids-tabs.component';
import { ExampleComponent } from './demos/example/example.component';
import { CountsComponent } from './demos/counts/counts.component';
import { DismissibleComponent } from './demos/dismissible/dismissible.component';
import { HeaderTabsComponent } from './demos/header-tabs/header-tabs.component';
import { ModuleComponent } from './demos/module/module.component';
import { VerticalComponent } from './demos/vertical/vertical.component';
import { SwappableComponent } from './demos/swappable/swappable.component';
export const routes = [
    {
        path: '',
        component: IdsTabsComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    },
    {
        path: 'counts',
        component: CountsComponent
    },
    {
        path: 'dismissible',
        component: DismissibleComponent
    },
    {
        path: 'header-tabs',
        component: HeaderTabsComponent
    },
    {
        path: 'modules',
        component: ModuleComponent
    },
    {
        path: 'vertical',
        component: VerticalComponent
    },
    {
        path: 'swappable',
        component: SwappableComponent
    }
];
let IdsTabRoutingModule = class IdsTabRoutingModule {
};
IdsTabRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsTabRoutingModule);
export { IdsTabRoutingModule };
//# sourceMappingURL=ids-tabs-routing.module.js.map