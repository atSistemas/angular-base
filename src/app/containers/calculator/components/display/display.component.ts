import { Component } from '@angular/core';
import { Store, State } from 'base';
import { Observable } from 'rxjs/Observable';
import * as CalculatorModel from '../../models';

@Component({
  selector: 'base-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  data$: Observable<CalculatorModel.State>;
  constructor(public store: Store<State>) { }

  ngOnInit() {
    this.data$ = this.store.select('calculator');
  }
}
