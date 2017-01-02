import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainContainer } from './main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainContainer
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MainContainer
  ]
})

export class MainModule {}
