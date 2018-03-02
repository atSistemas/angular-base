import { Component } from '@angular/core'
import { IState, Store } from 'base'

import { CalculatorActions } from '../../actions'
import { ActionTypes } from '../../actionTypes'

@Component({
  selector: 'base-buttonPannel',
  styleUrls: ['buttonPannel.component.css'],
  templateUrl: 'buttonPannel.component.html'
})
export class ButtonPannelComponent {

  constructor (
    public store: Store<IState>,
    public calculatorActions: CalculatorActions
  ) { }

  public onClickNumber (value: any) {
    this.store.dispatch(this.calculatorActions.inputNumber(value))
  }

  public onClickOperation (value: any) {
    let actionType: any
    switch (value) {
      case 'C': actionType = ActionTypes.CLEAN; break
      case '+/-': actionType = ActionTypes.CHANGE_SIGN; break
      case '%': actionType = ActionTypes.PERCENT; break
      default: break
    }
    this.store.dispatch(this.calculatorActions.inputOperation(actionType))
  }

  public onClickOperator (operator: any) {
    let actionType: any
    switch (operator) {
      case '÷': actionType = ActionTypes.DIVIDE; break
      case 'x': actionType = ActionTypes.MULTIPLY; break
      case '-': actionType = ActionTypes.SUBSTRACT; break
      case '+': actionType = ActionTypes.SUM; break
      default: break
    }
    this.store.dispatch(this.calculatorActions.inputOperator(actionType))
  }

  public onClickDecimal () {
    this.store.dispatch(this.calculatorActions.inputDecimal())
  }

  public onClickResult () {
    this.store.dispatch(this.calculatorActions.result())
  }
}
