import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsModuleNavComponent } from './ids-module-nav.component';
import { ExampleComponent } from './demos/example/example.component';
import { SandboxComponent } from './demos/sandbox/sandbox.component';

export const routes: Routes = [
  {
    path: '',
    component: IdsModuleNavComponent
  },
  {
    path: 'example',
    component: ExampleComponent,
    data: {
      type: 'Main',
      description: 'basic example of the IdsModuleNav component used inside an Angular component'
    }
  },
  {
    path: 'sandbox',
    component: SandboxComponent,
    data: {
      type: 'Sandbox',
      description: 'IdsModuleNav demo with all possible configurations'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsModuleNavRoutingModule { }
