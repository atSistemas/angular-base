
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { MainModelInterface } from '../models';

@Component({
  selector: 'main-display',
  template: `InitialState = {{main}}`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainDisplay {
  @Input() main: MainModelInterface;
}