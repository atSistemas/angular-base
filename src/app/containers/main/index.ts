import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainContainer } from './main.component';

export const mainRoutes: Routes = [
  {
    path: '',
    component: MainContainer
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes)
  ],
  declarations: [
    MainContainer
  ]
})

export class MainModule {}
