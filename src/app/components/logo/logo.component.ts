import { Component, Input } from '@angular/core';

@Component({
  selector: 'logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
})
export class LogoComponent {

  @Input() src: string;
  @Input() location: string;
  @Input() width: number;
  @Input() alt: string;

}