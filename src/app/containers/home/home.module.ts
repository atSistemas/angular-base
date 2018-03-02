import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { LogoComponent } from './components/logo/logo.component'
import { HomeContainer } from './home.container'

@NgModule({
  declarations: [
    HomeContainer,
    LogoComponent
  ],
  imports: [
    CommonModule
  ]
})

export class HomeModule {}
