import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageModule } from './full-Page/home-Page/home-page.module';

const routes: Routes = [
  { path: '', redirectTo: 'homePage', pathMatch: 'full' },
  {
    path: 'homePage',
    loadChildren: () =>
      import(`./full-Page/home-Page/home-page.module`).then(
        (m) => m.HomePageModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }