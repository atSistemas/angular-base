import { Component, Input } from '@angular/core';

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