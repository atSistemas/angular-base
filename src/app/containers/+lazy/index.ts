import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LazyContainer } from './lazy';

@NgModule({
  declarations: [LazyContainer],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: LazyContainer }
    ])
  ]
})
export default class LazyContainerModule implements OnInit {

  ngOnInit(): void {
    console.log("child module init")
  }
}
