import { Component } from '@angular/core';
import { Store, State } from 'base';

import { CalculatorActions } from '../../actions';
import { ActionTypes } from '../../actionTypes';

@Component({
  selector: 'base-buttonPannel',
  templateUrl: 'buttonPannel.component.html',
  styleUrls: ['buttonPannel.component.css']
})
export class ButtonPannelComponent {

  constructor(
    public store: Store<State>,
    public calculatorActions: CalculatorActions
  ) { }

  onClickNumber(value: any) {
    this.store.dispatch(this.calculatorActions.inputNumber(value));
  }

  onClickOperation(value: any) {
    let actionType: any;
    switch (value) {
      case 'C':   actionType = ActionTypes.CLEAN; break;
      case '+/-': actionType = ActionTypes.CHANGE_SIGN; break;
      case '%': actionType = ActionTypes.PERCENT; break;
      default: break;
    }
    this.store.dispatch(this.calculatorActions.inputOperation(actionType));
  }

  onClickOperator(operator: any) {
    let actionType: any;
    switch (operator) {
      case '÷': actionType = ActionTypes.DIVIDE; break;
      case 'x': actionType = ActionTypes.MULTIPLY; break;
      case '-': actionType = ActionTypes.SUBSTRACT; break;
      case '+': actionType = ActionTypes.SUM; break;
      default: break;
    }
    this.store.dispatch(this.calculatorActions.inputOperator(actionType));
  }

  onClickDecimal() {
    this.store.dispatch(this.calculatorActions.inputDecimal());
  }

  onClickResult() {
    this.store.dispatch(this.calculatorActions.result());
  }
}