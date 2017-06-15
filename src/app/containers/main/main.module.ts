import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainContainer } from './main.container';
import { LogoComponent } from '../../components/logo/logo.component';
import { LinkButtonComponent } from '../../components/linkButton/linkButton.component';

import { CalculatorModule } from '../calculator/calculator.module';

// export const routes: Routes = [
//   {
//     component: MainContainer,
//     path: '',
//   },
// ];

@NgModule({
  declarations: [
   MainContainer,
   LogoComponent,
   LinkButtonComponent
  ],
  imports: [
    CommonModule,
    CalculatorModule,
    // RouterModule.forChild(routes)
  ],
  providers: [ ]
})

export class MainModule {}