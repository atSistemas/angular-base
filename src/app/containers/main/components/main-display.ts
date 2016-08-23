
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { MainTypes } from '../models';

@Component({
  selector: 'main-display',
  template: `InitialState = {{main}}`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainDisplay {
  @Input() main: MainTypes;
}