import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorContainer } from './calculator.container';
import { DisplayComponent } from './components/display/display.component';
import { ButtonPannelComponent } from './components/buttonPannel/buttonPannel.component';
import { ButtonComponent } from './components/button/button.component';
import { CalculatorActions } from './actions';

@NgModule({
  declarations: [
    CalculatorContainer,
    DisplayComponent,
    ButtonPannelComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [ CalculatorActions ]
})

export class CalculatorModule {}