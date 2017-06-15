import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'base-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent implements OnInit {
  style: string= 'Button';
  @Input() value: string;
  @Input() type: string;
  @Output() result = new EventEmitter();
 
  constructor(){ }

  ngOnInit() {
    if (this.type === 'operator') this.style = "ButtonOperate";
    else if (this.type === 'zero') this.style = "ButtonZero";
  }

  onClick() {
    this.result.emit(this.value);
  }

}




// import Ink from 'react-ink';
// import React from 'react';
// import { PropTypes } from 'prop-types';

// import styles from './styles.css';

// const propTypes = {
//   type: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired
// };

// const Button = ( props ) => {
//   let style;

//   if (props.type === 'operator') style = styles.ButtonOperate;
//   else if (props.type === 'zero') style = styles.ButtonZero;
//   else style = styles.Button;

//   return (
//     <button
//       onClick={ props.onClick }
//       className={ style }
//     >
//       { props.value }
//       <Ink
//         radius={ 500 }
//         opcatity={ 1 }
//         recenter={ false }
//       />
//     </button>
//   );
// };

// Button.propTypes= propTypes;

// export default Button;
