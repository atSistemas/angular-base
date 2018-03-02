import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { CalculatorActions } from './actions'
import { CalculatorContainer } from './calculator.container'
import { ButtonComponent } from './components/button/button.component'
import { ButtonPannelComponent } from './components/buttonPannel/buttonPannel.component'
import { DisplayComponent } from './components/display/display.component'

@NgModule({
  declarations: [
    CalculatorContainer,
    DisplayComponent,
    ButtonPannelComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [ CalculatorActions ]
})

export class CalculatorModule {}
