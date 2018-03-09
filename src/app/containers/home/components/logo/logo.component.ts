import { Component, Input } from '@angular/core'

@Component({
  selector: 'logo',
  styleUrls: ['./logo.component.scss'],
  templateUrl: './logo.component.html'
})
export class LogoComponent {

  @Input() public src: string
  @Input() public location: string
  @Input() public width: number
  @Input() public alt: string

}
