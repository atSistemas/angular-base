import { Component, Input } from '@angular/core';
// import { Observable } from 'rxjs/Observable';

// import { Store, State } from 'base';
// import { MainModel } from '../../models';

@Component({
  selector: 'linkButton',
  templateUrl: './linkButton.component.html',
  styleUrls: ['./linkButton.component.css'],
})

export class LinkButtonComponent {
  @Input() location: string;
  @Input() value: string;

  constructor() {}

}