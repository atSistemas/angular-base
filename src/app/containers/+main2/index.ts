import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainContainer2 } from './main2';

@NgModule({
  declarations: [MainContainer2],
  imports: [
    RouterModule.forChild([
      { path: '', component: MainContainer2 }
    ])
  ]
})
export default class Main2Module { }
