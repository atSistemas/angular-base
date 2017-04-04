import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainContainer } from './main.component';

export const routes: Routes = [
  {
    component: MainContainer,
    path: '',
  },
];

@NgModule({
  declarations: [
    MainContainer,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})

export class MainModule {}