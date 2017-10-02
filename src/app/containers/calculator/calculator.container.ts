import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, State } from 'base';
import { CalculatorActions } from './actions';
import { CalculatorModel } from './models';

@Component({
  selector: 'base-calculator-container',
  templateUrl: './calculator.container.html',
  styleUrls: ['./calculator.container.css']
})

export class CalculatorContainer {
  constructor() {}
}