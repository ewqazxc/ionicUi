import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BottomtabsPage } from './bottomtabs.page';

const routes: Routes = [
  {
    path: '',
    component: BottomtabsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BottomtabsPage]
})
export class BottomtabsPageModule {}
