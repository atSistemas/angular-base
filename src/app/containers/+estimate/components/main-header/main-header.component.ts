import { Estimate } from '../../models/estimate.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gt-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css'],
})


export class MainHeaderComponent {
  @Input() title: string;
  @Input() estimate: Estimate;

  @Output('clicked') emitter = new EventEmitter();


  toggle() {
    this.emitter.emit();
  }

}