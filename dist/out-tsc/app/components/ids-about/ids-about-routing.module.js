import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsAboutComponent } from './ids-about.component';
import { ExampleComponent } from './demos/example/example.component';
export const routes = [
    {
        path: '',
        component: IdsAboutComponent,
    },
    {
        path: 'example',
        component: ExampleComponent,
        data: {
            name: 'Example',
            type: 'Main Example',
            description: 'Shows main example'
        }
    }
];
let IdsAboutRoutingModule = class IdsAboutRoutingModule {
};
IdsAboutRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsAboutRoutingModule);
export { IdsAboutRoutingModule };
//# sourceMappingURL=ids-about-routing.module.js.map