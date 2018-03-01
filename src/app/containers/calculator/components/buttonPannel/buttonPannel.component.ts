import { Component, Output, EventEmitter } from '@angular/core';
import { ActionTypes } from '../../actionTypes';

@Component({
  selector: 'base-buttonPannel',
  templateUrl: 'buttonPannel.component.html',
  styleUrls: ['buttonPannel.component.scss']
})
export class ButtonPannelComponent {

  @Output() onClickNumber = new EventEmitter();
  @Output() onClickOperation = new EventEmitter();
  @Output() onClickOperator = new EventEmitter();
  @Output() onClickDecimal = new EventEmitter();
  @Output() onClickResult = new EventEmitter();

  clickNumber(value: any) {
    this.onClickNumber.emit(value);
  }

  clickOperation(value: any) {
    let actionType: any;
    switch (value) {
      case 'C': actionType = ActionTypes.CLEAN; break;
      case '+/-': actionType = ActionTypes.CHANGE_SIGN; break;
      case '%': actionType = ActionTypes.PERCENT; break;
      default: break;
    }
    this.onClickOperation.emit(actionType);
  }

  clickOperator(operator: any) {
    let actionType: any;
    switch (operator) {
      case '÷': actionType = ActionTypes.DIVIDE; break;
      case 'x': actionType = ActionTypes.MULTIPLY; break;
      case '-': actionType = ActionTypes.SUBSTRACT; break;
      case '+': actionType = ActionTypes.SUM; break;
      default: break;
    }
    this.onClickOperator.emit(actionType);
  }

  clickDecimal() {
    this.onClickDecimal.emit();
  }

  clickResult() {
    this.onClickResult.emit();
  }
}