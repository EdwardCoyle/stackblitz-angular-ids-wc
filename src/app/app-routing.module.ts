import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home',
    }
  },
  {
    path: 'ids-module-nav',
    loadChildren: () => import('./components/ids-module-nav/ids-module-nav.module').then(m => m.IdsModuleNavModule),
    data: {
      title: 'IDS Module Nav',
      description: 'Top-Level Navigation'
    },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 145],
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }