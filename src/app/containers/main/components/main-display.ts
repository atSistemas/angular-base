
import { Component, Input } from '@angular/core';
import { MainModelInterface } from '../models';

@Component({
  selector: 'main-display',
  template: `InitialState = {{main}}`
})
export class MainDisplay {
  @Input() main: MainModelInterface;
}