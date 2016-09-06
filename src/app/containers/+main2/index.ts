import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainContainer2 } from './main2';

@NgModule({
  declarations: [MainContainer2],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: MainContainer2 }
    ])
  ]
})
export default class Main2Module { }
