import { Component } from '@angular/core';
// import { Observable } from 'rxjs/Observable';


// import { Store, State } from 'base';
// import { CalculatorActions } from './actions';
// import { CalculatorModel } from './models';

@Component({
  selector: 'calculator-container',
  templateUrl: './calculator.container.html',
  styleUrls: ['./calculator.container.css']
})

export class CalculatorContainer {

  // public data$: Observable<CalculatorModel>;

  constructor(
    // public store: Store<State>,
    // public calculatorActions: CalculatorActions
  ) {
      // this.data$ = this.store.select(state => state.main);
      // this.store.dispatch(this.calculatorActions.mainRequest());
  }

}







// import { PropTypes } from 'prop-types';
// import React, { Component } from 'react';

// import { Record } from 'immutable';
// import Display from './components/Display';
// import ButtonPannel from './components/ButtonPannel';
// import styles from './styles.css';

// export class Calculator extends Component {

//   static proptypes = {
//     Calculator: PropTypes.instanceOf(Record).isRequired
//   }

//   render () {
//     return (
//       <div className={ styles.Calculator }>
//         <div>
//           <Display />
//           <ButtonPannel />
//         </div>
//       </div>
//     );
//   }
// }

// export default Calculator;