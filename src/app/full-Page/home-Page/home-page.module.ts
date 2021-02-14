import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page.component';
import { LeftPartComponent } from './childs-components/left-part-component/left-part.component';
import { RightPartComponent } from './childs-components/right-part-component/right-part.component';

import { HomePageService } from '../../service/https/home-page.service';

import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
    { path: '', component: HomePageComponent }
  ];

@NgModule({
  declarations: [
    HomePageComponent,
    LeftPartComponent,
    RightPartComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [HomePageService],
  bootstrap: []
})
export class HomePageModule { }
