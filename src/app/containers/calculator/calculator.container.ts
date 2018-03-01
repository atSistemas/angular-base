import { Component } from '@angular/core';
import { Store, State } from 'base';
import { Observable } from 'rxjs/Observable';

import { selectDisplay } from './selectors';
import { Subscription } from 'rxjs/Subscription';

import { CalculatorActions } from './actions';
import { ActionTypes } from './actionTypes';

@Component({
  selector: 'base-calculator-container',
  templateUrl: './calculator.container.html',
  styleUrls: ['./calculator.container.css']
})

export class CalculatorContainer {
  display$: Observable<number | string> = this.store.select(selectDisplay);

  constructor(
    private store: Store<State>,
    private calculatorActions: CalculatorActions
  ) { }

  onClickNumber(value) {
    this.store.dispatch(this.calculatorActions.inputNumber(value));
  }

  onClickOperation(value) {
    this.store.dispatch(this.calculatorActions.inputOperation(value));
  }

  onClickOperator(value) {
    this.store.dispatch(this.calculatorActions.inputOperator(value));
  }

  onClickDecimal() {
    this.store.dispatch(this.calculatorActions.inputDecimal());
  }

  onClickResult() {
    this.store.dispatch(this.calculatorActions.result());
  }

}