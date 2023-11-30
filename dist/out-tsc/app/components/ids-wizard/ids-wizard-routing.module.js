import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdsWizardComponent } from './ids-wizard.component';
import { ExampleComponent } from './demos/example/example.component';
import { SandboxComponent } from './demos/sandbox/sandbox.component';
export const routes = [
    {
        path: '',
        component: IdsWizardComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    },
    {
        path: 'sandbox',
        component: SandboxComponent
    }
];
let IdsWizardRoutingModule = class IdsWizardRoutingModule {
};
IdsWizardRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IdsWizardRoutingModule);
export { IdsWizardRoutingModule };
//# sourceMappingURL=ids-wizard-routing.module.js.map