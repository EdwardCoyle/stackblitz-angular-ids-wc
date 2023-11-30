import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsEmptyMessageComponent } from './ids-empty-message.component';
import { ExampleComponent } from './demos/example/example.component';
export const routes = [
    {
        path: '',
        component: IdsEmptyMessageComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    }
];
let IdsEmptyMessageRoutingModule = class IdsEmptyMessageRoutingModule {
};
IdsEmptyMessageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsEmptyMessageRoutingModule);
export { IdsEmptyMessageRoutingModule };
//# sourceMappingURL=ids-empty-message-routing.module.js.map