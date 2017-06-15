import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterModule, Routes } from '@angular/router';

import { CalculatorContainer } from './calculator.container';
import { DisplayComponent } from './components/display/display.component'; 
import { ButtonPannelComponent } from './components/buttonPannel/buttonPannel.component'; 
import { ButtonComponent } from './components/button/button.component'; 
// export const routes: Routes = [
//   {
//     component: MainContainer,
//     path: '',
//   },
// ];

@NgModule({
  declarations: [
   CalculatorContainer,
   DisplayComponent,
   ButtonPannelComponent,
   ButtonComponent
  ],
  imports: [
    CommonModule,
    // RouterModule.forChild(routes)
  ],
  providers: [ ]
})

export class CalculatorModule {}